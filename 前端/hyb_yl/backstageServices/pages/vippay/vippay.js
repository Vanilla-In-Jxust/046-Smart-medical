var a = getApp();

Page({
    data: {
        vipcurrt: 0,
        payprice: 0,
        payhid: 0,
        currentTab: 0
    },
    handleCardTap: function(a) {
        var t = a.currentTarget.dataset.dex, e = this.data.huiyuanlist;
        console.log(t), console.log(e), this.setData({
            vipcurrt: t,
            payprice: e[t].price,
            payhid: e[t].id
        });
    },
    topNavChange: function(a) {
        var t = a.currentTarget.dataset.current, e = this.data.huiyuanlist[t].price, n = this.data.huiyuanlist[t].id;
        console.log(e, n), this.setData({
            currentTab: t,
            payprice: e,
            payhid: n
        });
    },
    paybtn: function() {
        var t = this.data.payprice, e = this.data.payhid, n = this.data.type;
        a.util.request({
            url: "entry/wxapp/huiyuan.pay",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                payprice: t
            },
            success: function(t) {
                wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(a) {},
                    complete: function(t) {
                        console.log(t), "requestPayment:fail cancel" != t.errMsg && a.util.request({
                            url: "entry/wxapp/huiyuan.payaddhuiyuan",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                payhid: e,
                                type: n
                            },
                            success: function(a) {
                                wx.showToast({
                                    title: "支付成功!"
                                }), setTimeout(function() {
                                    if (2 != n) wx.navigateBack({
                                        delta: 2
                                    }); else {
                                        var t = getCurrentPages();
                                        t[t.length - 2].setData({
                                            buyId: a.data
                                        }), wx.navigateBack({
                                            delta: 1
                                        });
                                    }
                                }, 1e3);
                            }
                        });
                    }
                });
            }
        });
    },
    onLoad: function(a) {
        this.setData({
            type: a.type
        });
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), this.getAllhuiyuan();
    },
    getAllhuiyuan: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/huiyuan.allhuiyuan",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                0 == t.data.vipcurrt && t.setData({
                    payprice: a.data[0].price,
                    payhid: a.data[0].id
                }), t.setData({
                    huiyuanlist: a.data
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