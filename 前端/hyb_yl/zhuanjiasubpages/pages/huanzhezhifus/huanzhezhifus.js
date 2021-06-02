var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), t = getApp();

Page({
    data: {
        argeen: !1,
        inquiry: "1",
        switchChecked: !1,
        money: "",
        tid: "",
        key_words: "",
        addnum: "",
        ser_key: "",
        pinyin: "",
        y_money: "",
        coupon_id: ""
    },
    onLoad: function(e) {
        var t = e.tid, a = e.key_words, n = e.addnum, o = e.ser_key, i = e.pinyin, d = e.money;
        this.setData({
            tid: t,
            key_words: a,
            addnum: n,
            ser_key: o,
            pinyin: i,
            money: d,
            y_money: d,
            j_id: e.j_id
        });
        var r = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), "undefined" != e.inquiry && this.setData({
            inquiry: e.inquiry
        }), this.getDetail();
    },
    getDetail: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.order_detail",
            data: {
                id: e.data.tid,
                key_words: e.data.key_words
            },
            success: function(t) {
                e.setData({
                    info: t.data
                });
            }
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
        });
    },
    switchChange: function() {
        this.setData({
            switchChecked: !this.data.switchChecked
        });
    },
    paybtn: function() {
        var a = this, n = wx.getStorageSync("openid"), o = a.data.tid, i = a.data.money, d = a.data.key_words;
        wx.showModal({
            title: "是否支付",
            success: function(r) {
                r.confirm && t.util.request({
                    url: "entry/wxapp/team.orders",
                    data: {
                        tid: o,
                        money: i,
                        openid: n,
                        start: a.data.info.start,
                        end: a.data.info.end,
                        coupon_id: a.data.coupon_id,
                        j_id: a.data.j_id,
                        y_money: a.data.y_money,
                        key_words: d,
                        addnum: a.data.addnum
                    },
                    success: function(n) {
                        console.log(n);
                        var o = n.data.orders, r = n.data.back_orser, s = n.data.id;
                        wx.navigateTo({
                            url: "../zhifuend/zhifuend?txt=yes&tid=" + a.data.id + "&back_orser=" + r + "&key_words=" + d + "&j_id=" + a.data.j_id
                        }), t.util.request({
                            url: "entry/wxapp/team.paywenzhen",
                            header: {
                                "Content-Type": "application/xml"
                            },
                            method: "GET",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                z_tw_money: i,
                                orders: o,
                                key_words: d
                            },
                            success: function(n) {
                                console.log(n), wx.requestPayment({
                                    timeStamp: n.data.timeStamp,
                                    nonceStr: n.data.nonceStr,
                                    package: n.data.package,
                                    signType: n.data.signType,
                                    paySign: n.data.paySign,
                                    success: function(n) {
                                        console.log(n), t.util.request({
                                            url: "entry/wxapp/team.getdocmbtxing",
                                            data: (0, e.default)({
                                                id: s,
                                                val: d,
                                                near: d
                                            }, "id", s),
                                            success: function(e) {
                                                console.log(e);
                                            }
                                        }), wx.navigateTo({
                                            url: "../zhifuend/zhifuend?txt=yes&tid=" + a.data.id + "&back_orser=" + r + "&key_words=" + d + "&j_id=" + a.data.j_id
                                        });
                                    },
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    orderedbtn: function() {
        wx.navigateTo({
            url: "../orderedtime/orderedtime"
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