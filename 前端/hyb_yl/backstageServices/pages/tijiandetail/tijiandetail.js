var t = getApp();

Page({
    data: {
        currentData: "",
        id: ""
    },
    cancel: function(e) {
        var a = e.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/zhuanjia.gh_quxiao",
            data: {
                id: a
            },
            success: function(t) {
                wx.navigateBack({
                    complete: function(t) {}
                });
            }
        });
    },
    gopay: function(e) {
        var a = this, n = e.currentTarget.dataset.back_orser, o = e.currentTarget.dataset.money, i = e.currentTarget.dataset.key_words;
        e.currentTarget.dataset.zid, e.currentTarget.dataset.j_id;
        if ("0.00" == o) return t.util.request({
            url: "entry/wxapp/yuyue.msgdh",
            data: {
                orders: n,
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
        t.util.request({
            url: "entry/wxapp/yuyue.paywenzhen",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: o,
                orders: n,
                key_words: i
            },
            success: function(e) {
                console.log(e), wx.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(t) {
                        console.log(t);
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function(e) {
                        if ("requestPayment:ok" == e.errMsg) return t.util.request({
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
                                    wx.navigateBack({
                                        complete: function(t) {}
                                    });
                                }, 1900);
                            }
                        });
                    }
                });
            }
        });
    },
    finish: function() {},
    refund: function(e) {
        var a = e.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/zhuanjia.gh_refund",
            data: {
                id: a
            },
            success: function(t) {
                wx.navigateBack({
                    complete: function(t) {}
                });
            }
        });
    },
    deleteitem: function(e) {
        var a = e.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/zhuanjia.gh_del",
            data: {
                id: a
            },
            success: function(t) {
                wx.navigateBack({
                    complete: function(t) {}
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
        var a = t.id;
        this.setData({
            currentData: t.currentData,
            id: a
        }), this.getDetail();
    },
    getDetail: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.gh_detail",
            data: {
                id: e.data.id
            },
            success: function(t) {
                e.setData({
                    info: t.data
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