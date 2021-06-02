var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

require("../../../../utils/util.js");

Page({
    data: (0, t.default)({
        tablist: [ "待支付", "待接诊", "已到诊", "已结束", "已取消" ],
        currentData: 0,
        list: [],
        page: 0,
        pagesize: 10,
        dingdanall: []
    }, "currentData", 0),
    checkCurrent: function(t) {
        if (this.data.currentData === t.target.dataset.current) return !1;
        this.setData({
            currentData: t.target.dataset.current
        }), this.setData({
            list: [],
            page: 0,
            currentData: t.target.dataset.current
        }), this.getList(this.data.currentData);
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
    },
    getList: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.gh_order",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: wx.getStorageSync("zid"),
                page: a.data.page,
                pagesize: a.data.pagesize,
                status: t
            },
            success: function(t) {
                console.log(t);
                var e = a.data.page + 1;
                a.setData({
                    list: a.data.list.concat(t.data),
                    page: e
                });
            }
        });
    },
    cancel: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.gh_quxiao",
            data: {
                id: r
            },
            success: function(t) {
                a.setData({
                    page: 0,
                    list: []
                }), a.getList(a.data.currentData);
            }
        });
    },
    pingjia: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.keywords, a = t.currentTarget.dataset.zid, r = t.currentTarget.dataset.orders, n = t.currentTarget.dataset.j_id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/pingjia/pingjia?keywords=" + e + "&zid=" + a + "&orders=" + r + "&j_id=" + n
        });
    },
    gopay: function(t) {
        var a = this, r = t.currentTarget.dataset.back_orser, n = t.currentTarget.dataset.money, s = t.currentTarget.dataset.key_words;
        t.currentTarget.dataset.zid, t.currentTarget.dataset.j_id;
        if ("0.00" == n) return e.util.request({
            url: "entry/wxapp/yuyue.msgdh",
            data: {
                orders: r,
                text: "挂号预约"
            },
            success: function(t) {
                console.log(t);
            }
        }), void wx.showToast({
            title: "预约成功！",
            icon: "none",
            success: function() {
                setTimeout(function() {
                    a.setData({
                        list: [],
                        page: 0
                    }), a.getList(a.data.currentData);
                }, 1900);
            }
        });
        e.util.request({
            url: "entry/wxapp/yuyue.paywenzhen",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: n,
                orders: r,
                key_words: s
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        console.log(t);
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function(t) {
                        if ("requestPayment:ok" == t.errMsg) return e.util.request({
                            url: "entry/wxapp/yuyue.msgdh",
                            data: {
                                orders: orders,
                                text: "挂号预约"
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        }), void wx.showToast({
                            title: "预约成功！",
                            icon: "none",
                            success: function() {
                                setTimeout(function() {
                                    a.setData({
                                        list: [],
                                        page: 0
                                    }), a.getList(a.data.currentData);
                                }, 1900);
                            }
                        });
                    }
                });
            }
        });
    },
    refund: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.gh_refund",
            data: {
                id: r
            },
            success: function(t) {
                a.setData({
                    list: [],
                    page: 0
                }), a.getList(a.data.currentData);
            }
        });
    },
    refund_qx: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.gh_refundqx",
            data: {
                id: r
            },
            success: function(t) {
                a.setData({
                    list: [],
                    page: 0
                }), a.getList(a.data.currentData);
            }
        });
    },
    finish: function() {},
    deleteitem: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.gh_del",
            data: {
                id: r
            },
            success: function(t) {
                a.setData({
                    page: 0,
                    list: []
                }), a.getList(a.data.currentData);
            }
        });
    },
    lookdetail: function(t) {
        var e = t.currentTarget.dataset.id;
        console.log(t);
        t.currentTarget.dataset;
        var a = t.currentTarget.dataset.orders, r = t.currentTarget.dataset.j_id, n = this.data.key_words;
        console.log(n);
        var s = t.currentTarget.dataset.zid, o = t.currentTarget.dataset.ifpay, i = t.currentTarget.dataset.money, u = t.currentTarget.dataset.overtime, c = (e = t.currentTarget.dataset.id, 
        this.data.currentData), d = t.currentTarget.dataset.ifgb;
        wx.setStorage({
            key: "userinfotype",
            data: "user"
        });
        var g = wx.getStorageSync("userInfo");
        console.log(g);
        t.currentTarget.dataset.bl_id;
        wx.setStorage({
            key: "userInfo",
            data: g
        });
        var l = t.currentTarget.dataset.z_thumbs;
        wx.setStorage({
            key: "z_thumbs",
            data: l
        });
        wx.setStorageSync("sate", 0), wx.setStorageSync("docroom", p);
        t.currentTarget.dataset.myroom;
        var p = t.currentTarget.dataset.docroom;
        t.currentTarget.dataset.dex;
        wx.setStorageSync("docroom", p);
        return 5 == o ? (wx.showToast({
            title: "退款申请中无法查看详情",
            icon: "none"
        }), !1) : 6 == o ? (wx.showToast({
            title: "已退款",
            icon: "none"
        }), !1) : void wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=yes&zid=" + s + "&back_orser=" + a + "&key_words=yuanchengguahao&j_id=" + r + "&ifpay=" + o + "&money=" + i + "&overtime=" + u + "&currentData=" + c + "&id=" + e + "&ifgb=" + d
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this, a = t.data.currentData;
        console.log(a), e.util.request({
            url: "entry/wxapp/zhuanjia.gh_order",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: wx.getStorageSync("zid"),
                page: t.data.page,
                pagesize: t.data.pagesize,
                status: a
            },
            success: function(e) {
                console.log(e);
                var a = t.data.page + 1;
                t.setData({
                    list: t.data.list.concat(e.data),
                    page: a
                });
            }
        }), t.setData({
            currentData: a
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {
        this.getList(this.data.currentData);
    },
    onShareAppMessage: function() {}
});