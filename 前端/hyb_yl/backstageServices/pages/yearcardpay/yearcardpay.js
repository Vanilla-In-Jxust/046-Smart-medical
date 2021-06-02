var a = getApp();

Page({
    data: {
        zid: ""
    },
    createVipOrder: function() {
        var t = this.data.zj_year.new_price, e = wx.getStorageSync("openid"), n = this.data.zj_year.wz_num, i = this.data.zj_year.wz_zhekou, o = this.data.zj_year.jd_num, c = this.data.zj_year.hh_num, s = this.data.zid, u = this.data.zj_year.id, d = this.data.zj_year.times;
        a.util.request({
            url: "entry/wxapp/zhuanjia.is_yearcard",
            data: {
                zid: s,
                yid: u
            },
            success: function(r) {
                "1" == r.data.code ? wx.showModal({
                    title: "提示",
                    content: r.data.message,
                    success: function(a) {
                        wx.switchTab({
                            url: "/hyb_yl/tabBar/index/index"
                        });
                    }
                }) : "2" == r.data.code ? wx.showModal({
                    title: "提示",
                    content: r.data.message,
                    success: function(a) {
                        wx.reLaunch({
                            url: "/hyb_yl/tabBar/index/index"
                        });
                    }
                }) : "3" == r.data.code ? wx.showModal({
                    title: "提示",
                    content: r.data.message,
                    success: function(r) {
                        a.util.request({
                            url: "entry/wxapp/zhuanjia.user_blyear",
                            data: {
                                zid: s,
                                yid: u,
                                openid: e,
                                money: t,
                                wz_num: n,
                                wz_zhekou: i,
                                jd_num: o,
                                hh_num: c,
                                times: d
                            },
                            success: function(n) {
                                var i = n.data.created;
                                t > "0.00" && "" != t ? a.util.request({
                                    url: "entry/wxapp/zhuanjia.pay_year",
                                    header: {
                                        "Content-Type": "application/xml"
                                    },
                                    method: "GET",
                                    data: {
                                        openid: e,
                                        created: i,
                                        money: t
                                    },
                                    success: function(a) {
                                        wx.requestPayment({
                                            timeStamp: a.data.timeStamp,
                                            nonceStr: a.data.nonceStr,
                                            package: a.data.package,
                                            signType: a.data.signType,
                                            paySign: a.data.paySign,
                                            success: function(a) {
                                                wx.showModal({
                                                    title: "提示",
                                                    content: "办理成功",
                                                    success: function(a) {
                                                        a.confirm && wx.switchTab({
                                                            url: "/hyb_yl/tabBar/index/index"
                                                        });
                                                    }
                                                });
                                            },
                                            fail: function(a) {
                                                console.log(a);
                                            }
                                        });
                                    }
                                }) : wx.showModal({
                                    title: "提示",
                                    content: "办理成功",
                                    success: function(a) {
                                        a.confirm && wx.reLaunch({
                                            url: "/hyb_yl/tabBar/index/index"
                                        });
                                    }
                                });
                            }
                        });
                    }
                }) : a.util.request({
                    url: "entry/wxapp/zhuanjia.user_blyear",
                    data: {
                        zid: s,
                        yid: u,
                        openid: e,
                        money: t,
                        wz_num: n,
                        wz_zhekou: i,
                        jd_num: o,
                        hh_num: c,
                        times: d
                    },
                    success: function(n) {
                        var i = n.data.created;
                        t > "0.00" && "" != t ? a.util.request({
                            url: "entry/wxapp/zhuanjia.pay_year",
                            header: {
                                "Content-Type": "application/xml"
                            },
                            method: "GET",
                            data: {
                                openid: e,
                                created: i,
                                money: t
                            },
                            success: function(a) {
                                wx.requestPayment({
                                    timeStamp: a.data.timeStamp,
                                    nonceStr: a.data.nonceStr,
                                    package: a.data.package,
                                    signType: a.data.signType,
                                    paySign: a.data.paySign,
                                    success: function(a) {
                                        wx.showModal({
                                            title: "提示",
                                            content: "办理成功",
                                            success: function(a) {
                                                a.confirm && wx.switchTab({
                                                    url: "/hyb_yl/tabBar/index/index"
                                                });
                                            }
                                        });
                                    },
                                    fail: function(a) {
                                        console.log(a);
                                    }
                                });
                            }
                        }) : wx.showModal({
                            title: "提示",
                            content: "办理成功",
                            success: function(a) {
                                a.confirm && wx.reLaunch({
                                    url: "/hyb_yl/tabBar/index/index"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onLoad: function(a) {
        wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        });
        var t = a.zid;
        this.setData({
            zid: t
        }), this.getzhuanjia_year();
    },
    getzhuanjia_year: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/zhuanjia.zhuanjia_year",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: e.data.zid
            },
            success: function(a) {
                e.setData({
                    zj_year: a.data
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
    onShareAppMessage: function() {}
});