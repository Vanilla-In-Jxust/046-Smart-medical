var t = getApp();

Page({
    data: {
        tab: [ {
            name: "全部"
        }, {
            name: "待付款"
        }, {
            name: "待发货"
        }, {
            name: "待收货"
        }, {
            name: "已完成"
        } ],
        current: 0,
        index: 0,
        shoplist: ""
    },
    chooseTab: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.i, a = t.target.dataset.i;
        this.setData({
            current: a,
            index: e
        }), this.getAllshoporders(e);
    },
    delete: function(t) {
        console.log(t);
        var e = this.data.list, a = t.currentTarget.dataset.index, n = t.currentTarget.dataset.id;
        e.splice(a, 1), this.Delteorderss(n), this.setData({
            list: e
        }), console.log(this.data.list);
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
    },
    chakwliu: function(e) {
        var a = e.currentTarget.dataset.orderunique, n = e.currentTarget.dataset.id, r = e.currentTarget.dataset.orderss, o = e.currentTarget.dataset.orderstatus;
        t.util.request({
            url: "entry/wxapp/index.wuliucheack",
            data: {},
            success: function(t) {
                console.log(t);
                var e = t.data.name, s = t.data.com;
                wx.navigateTo({
                    url: "/hyb_yl/userCommunicate/pages/load/load?gsname=" + e + "&orderss=" + r + "&id=" + n + "&com=" + s + "&num=" + a + "&orderstatus=" + o
                });
            }
        });
    },
    onReady: function() {
        this.getAllshoporders();
    },
    onShow: function() {
        var t = getCurrentPages();
        t[t.length - 1];
        this.getAllshoporders();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getAllshoporders: function() {
        var e = this, a = wx.getStorageSync("openid"), n = e.data.index;
        t.util.request({
            url: "entry/wxapp/chufang.doPagecflist",
            data: {
                index: n,
                openid: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        });
    },
    Delteorderss: function(e) {
        t.util.request({
            url: "entry/wxapp/goods.delete",
            data: {
                id: e
            },
            success: function(t) {
                console.log(t);
            }
        });
    },
    zhifu: function(e) {
        var a = this, n = (e.currentTarget.dataset.id, e.currentTarget.dataset.orders), r = e.currentTarget.dataset.money;
        t.util.request({
            url: "entry/wxapp/yuyue.paycforder",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: r,
                orders: n
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        console.log(t), a.getAllshoporders();
                    }
                });
            }
        });
    },
    enter: function(e) {
        var a = this, n = e.currentTarget.dataset.id;
        e.currentTarget.dataset.totalMoney;
        wx.showModal({
            content: "是否确认收货",
            success: function(e) {
                e.cancel ? console.log("用户点击了取消") : t.util.request({
                    url: "entry/wxapp/goods.upstatus",
                    data: {
                        id: n,
                        ordersStatus: 2
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "您已收货",
                            icon: "none",
                            duration: 3e3
                        }), a.getAllshoporders();
                    }
                });
            }
        });
    },
    goumai: function(t) {
        var e = t.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/product/product?sid=" + e
        });
    },
    ordersinfo: function(t) {
        t.currentTarget.dataset.sid;
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.orderStatus;
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/sure_Details/sure_Details?id=" + e + "&orderStatus=" + a + "&xufang=0"
        });
    },
    pingjia: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.sid, a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/addComment/addComment?sid=" + e + "&id=" + a
        });
    },
    tixing: function() {}
});