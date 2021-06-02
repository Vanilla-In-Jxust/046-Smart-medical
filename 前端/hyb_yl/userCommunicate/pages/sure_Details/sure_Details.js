var e = getApp();

Page({
    data: {
        txt: "yes",
        popshow: !0,
        applyFor: !1,
        querylist: [ {
            query: "后方可是否合适附近的爽肤水",
            answer: "回复框架的师傅的说法后第三方返回数据库",
            open: !0
        }, {
            query: "后方可是否合适附近的爽",
            answer: "回复框架的师傅的说法后第三方返回数据库",
            open: !1
        }, {
            query: "后方可是否合适附近的爽肤水",
            answer: "回复框架的师傅的说法后第三方返回数据库",
            open: !1
        }, {
            query: "后方可是否合适附近的爽肤",
            answer: "回复框架的师傅的说法后第三方返回数据库",
            open: !1
        }, {
            query: "后方可是否合适附近的爽",
            answer: "回复框架的师傅的说法后第三方返回数据库",
            open: !1
        }, {
            query: "后方可是否合适附近的爽肤",
            answer: "回复框架的师傅的说法后第三方返回数据库",
            open: !1
        } ]
    },
    quitclick: function() {
        this.setData({
            popshow: !1,
            applyFor: !1
        });
    },
    ptiontitbtn: function() {
        this.setData({
            applyFor: !0,
            txt: "none",
            popshow: !1
        });
    },
    openitem: function(e) {
        var a = e.currentTarget.dataset.i, t = this.data.querylist;
        t.map(function(e) {
            e.open = !1;
        }), t[a].open = !0, this.setData({
            querylist: t
        });
    },
    onLoad: function(e) {
        var a = e.id, t = e.xufang, o = wx.getStorageSync("Address") || [];
        console.log(o), this.setData({
            addresslist: o,
            addressId: o.addressId
        }), this.setData({
            id: a,
            xufang: t
        }), this.getontorder();
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    chakwliu: function(a) {
        var t = a.currentTarget.dataset.orderunique, o = a.currentTarget.dataset.id, n = a.currentTarget.dataset.orderss, r = a.currentTarget.dataset.orderstatus;
        e.util.request({
            url: "entry/wxapp/index.wuliucheack",
            data: {},
            success: function(e) {
                console.log(e);
                var a = e.data.name, s = e.data.com;
                wx.navigateTo({
                    url: "/hyb_yl/userCommunicate/pages/load/load?gsname=" + a + "&orderss=" + n + "&id=" + o + "&com=" + s + "&num=" + t + "&orderstatus=" + r
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getontorder: function() {
        var a = this, t = a.data.id;
        e.util.request({
            url: "entry/wxapp/chufang.doPgedetail",
            data: {
                id: t
            },
            success: function(e) {
                console.log(e), a.setData({
                    info: e.data
                });
            }
        });
    },
    copy: function(e) {
        var a = e.currentTarget.dataset.orders;
        wx.setClipboardData({
            data: a,
            success: function(e) {
                wx.getClipboardData({
                    success: function() {
                        wx.showToast({
                            title: "复制成功",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    address: function() {
        console.log(1);
        var a = [], t = [], o = this;
        wx.chooseAddress({
            success: function(n) {
                console.log("res"), console.log(n), console.log(JSON.stringify(n));
                n.userName, n.telNumber;
                a.push(n.provinceName, n.cityName, n.countyName);
                n.detailInfo;
                var r = {
                    name: n.userName,
                    phone: n.telNumber,
                    address: n.detailInfo,
                    region: a,
                    label: -1,
                    addlabel: ""
                };
                console.log(r);
                var s = r.name, d = r.phone, u = r.region[0] + "-" + r.region[1] + "-" + r.region[2] + "-" + r.address;
                e.util.request({
                    url: "entry/wxapp/goods.creatuseraddress",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        userName: s,
                        userPhone: d,
                        userAddress: u
                    },
                    success: function(e) {
                        console.log(e);
                        var a = e.data.addressId;
                        wx.setStorageSync("Address", e.data), o.setData({
                            addressid: a,
                            addresslist: e.data
                        }), "" == e.data ? o.setData({
                            addbox: !0
                        }) : o.setData({
                            addbox: !1
                        });
                    }
                }), t = wx.getStorageSync("Address") || [], o.setData({
                    addresslist: t
                });
            },
            fail: function(e) {
                o.openConfirm();
            }
        });
    },
    changeStatuspay: function(a) {
        var t = a.currentTarget.dataset.id, o = a.currentTarget.dataset.orders, n = parseFloat(a.currentTarget.dataset.money), r = this.data.addressId;
        console.log(r), "1" == this.data.xufang ? e.util.request({
            url: "entry/wxapp/chufang.xufang",
            data: {
                id: t,
                addressId: r,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a);
                a.data;
                e.util.request({
                    url: "entry/wxapp/yuyue.paycforder",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        z_tw_money: n,
                        orders: o
                    },
                    success: function(e) {
                        console.log(e), wx.requestPayment({
                            timeStamp: e.data.timeStamp,
                            nonceStr: e.data.nonceStr,
                            package: e.data.package,
                            signType: e.data.signType,
                            paySign: e.data.paySign,
                            success: function(e) {
                                console.log(e), wx.reLaunch({
                                    url: "/hyb_yl/userCommunicate/pages/order/order"
                                });
                            },
                            fail: function(e) {
                                wx.reLaunch({
                                    url: "/hyb_yl/userCommunicate/pages/order/order"
                                });
                            }
                        });
                    }
                });
            }
        }) : e.util.request({
            url: "entry/wxapp/yuyue.paycforder",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: n,
                orders: o
            },
            success: function(e) {
                console.log(e), wx.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(e) {
                        console.log(e), wx.reLaunch({
                            url: "/hyb_yl/userCommunicate/pages/order/order"
                        });
                    }
                });
            }
        });
    }
});