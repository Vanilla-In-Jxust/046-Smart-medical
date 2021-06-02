var a = getApp();

Page({
    data: {},
    onLoad: function(a) {
        wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        });
        var n = a.zid, t = a.id;
        this.setData({
            zid: n,
            id: t
        }), this.getzhuanjia_year();
    },
    getzhuanjia_year: function(n) {
        var t = this;
        a.util.request({
            url: "entry/wxapp/zhuanjia.zhuanjia_year",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: t.data.zid
            },
            success: function(a) {
                t.setData({
                    zj_year: a.data
                });
            }
        });
    },
    handleNavToService: function() {
        this.setData({
            xieyi: !0
        });
    },
    closezhe: function() {
        this.setData({
            xieyi: !1
        });
    },
    handleBuy: function() {
        var a = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yearcardpay/yearcardpay?zid=" + a
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