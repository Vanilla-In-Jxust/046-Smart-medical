var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

require("../../../../utils/util.js");

Page({
    data: (0, t.default)({
        tablist: [ "全部", "待支付", "待接诊", "已到诊", "已结束", "退款单" ],
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
        var a = t.keyword;
        this.setData({
            keyword: a
        });
    },
    getList: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/green.order_list",
            data: {
                openid: wx.getStorageSync("openid"),
                page: a.data.page,
                pagesize: a.data.pagesize,
                type: t,
                keyword: a.data.keyword
            },
            success: function(t) {
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
            url: "entry/wxapp/green.order_change",
            data: {
                id: r,
                ifpay: "8"
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
        var e = t.currentTarget.dataset.keywords, a = t.currentTarget.dataset.zid, r = t.currentTarget.dataset.did, n = t.currentTarget.dataset.orders, s = t.currentTarget.dataset.j_id;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/pingjia/pingjia?keywords=" + e + "&orders=" + n + "&j_id=" + s + "&did=" + r + "&zid=" + a
        });
    },
    gopay: function(t) {
        var a = this, r = t.currentTarget.dataset.back_orser, n = t.currentTarget.dataset.money, s = t.currentTarget.dataset.key_words;
        t.currentTarget.dataset.zid, t.currentTarget.dataset.did, t.currentTarget.dataset.j_id;
        e.util.request({
            url: "entry/wxapp/green.payorder",
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
                wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {
                        "requestPayment:ok" != t.errMsg || wx.showToast({
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
            url: "entry/wxapp/green.order_change",
            data: {
                id: r,
                ifpay: "5"
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
        var a = this, r = t.currentTarget.dataset.id, n = t.currentTarget.dataset.back_orser;
        e.util.request({
            url: "entry/wxapp/green.del_order",
            data: {
                id: r,
                back_orser: n
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
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.orders, r = t.currentTarget.dataset.j_id, n = t.currentTarget.dataset.key_words, s = t.currentTarget.dataset.zid, i = t.currentTarget.dataset.ifpay, o = t.currentTarget.dataset.money, d = (e = t.currentTarget.dataset.id, 
        this.data.currentData), u = t.currentTarget.dataset.did;
        wx.setStorage({
            key: "userinfotype",
            data: "user"
        });
        var c = wx.getStorageSync("userInfo");
        wx.setStorage({
            key: "userInfo",
            data: c
        });
        var g = t.currentTarget.dataset.thumb;
        wx.setStorage({
            key: "thumb",
            data: g
        });
        return wx.setStorageSync("sate", 0), 5 == i ? (wx.showToast({
            title: "退款申请中无法查看详情",
            icon: "none"
        }), !1) : 6 == i ? (wx.showToast({
            title: "已退款",
            icon: "none"
        }), !1) : void wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/orderdetail/orderdetail?txt=yes&zid=" + s + "&back_orser=" + a + "&key_words=" + n + "&j_id=" + r + "&ifpay=" + i + "&money=" + o + "&currentData=" + d + "&id=" + e + "&did=" + u
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this.data.currentData;
        this.getList(t);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getList(this.data.currentData);
    },
    onShareAppMessage: function() {}
});