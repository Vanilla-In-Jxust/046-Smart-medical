var t = getApp();

Page({
    data: {
        tab: [ {
            name: "全部"
        }, {
            name: "待支付"
        }, {
            name: "待体检"
        }, {
            name: "已完成"
        }, {
            name: "已取消"
        } ],
        current: 0,
        index: 0,
        unscramble: [],
        wzf: [],
        ySuccess: [],
        tijians: [],
        concals: []
    },
    chooseTab: function(t) {
        var e = t.currentTarget.dataset.i;
        this.setData({
            current: e
        });
        this.data.unscramble;
        this.setData({
            index: e
        }), this.getMytjianorder(e);
    },
    lookdetail: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.id, n = e.currentTarget.dataset.overtime;
        t.util.request({
            url: "entry/wxapp/tijian.oderinfo",
            data: {
                id: a
            },
            success: function(t) {
                console.log(t), wx.navigateTo({
                    url: "/hyb_yl/mysubpages/pages/phyDetail/phyDetail?id=" + a + "&overtime=" + n
                });
            }
        });
    },
    tixing: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport?id=" + e + "&ifzj=0"
        });
    },
    zhifu: function(e) {
        var a = e.currentTarget.dataset.money, n = e.currentTarget.dataset.order;
        t.util.request({
            url: "entry/wxapp/tijian.paytijianorder",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: a,
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
                        wx.showToast({
                            title: "支付成功",
                            icon: "none",
                            duration: 1500,
                            success: function(t) {
                                wx.redirectTo({
                                    url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
                                });
                            }
                        });
                    },
                    fail: function() {
                        wx.redirectTo({
                            url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
                        });
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getMytjianorder(0);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getMytjianorder: function(e) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/tijian.orderlist",
            data: {
                openid: wx.getStorageSync("openid"),
                index: e
            },
            success: function(t) {
                a.setData({
                    unscramble: t.data
                });
            }
        });
    },
    delete: function(e) {
        var a = this, n = e.currentTarget.dataset.id, o = a.data.index;
        wx.showModal({
            title: "提示",
            content: "操作后订单不可恢复是否继续",
            success: function(e) {
                e.confirm ? t.util.request({
                    url: "entry/wxapp/tijian.deleteorder",
                    data: {
                        id: n
                    },
                    success: function(t) {
                        console.log(t), a.getMytjianorder(o);
                    }
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    quxiao: function(e) {
        var a = this, n = e.currentTarget.dataset.id, o = a.data.index;
        wx.showModal({
            title: "提示",
            content: "操作后订单不可恢复是否继续",
            success: function(e) {
                e.confirm ? t.util.request({
                    url: "entry/wxapp/tijian.updateqorder",
                    data: {
                        id: n
                    },
                    success: function(t) {
                        console.log(t), a.getMytjianorder(o);
                    }
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    }
});