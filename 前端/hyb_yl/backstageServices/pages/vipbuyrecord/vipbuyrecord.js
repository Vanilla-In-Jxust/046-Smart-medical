var o = getApp();

Page({
    data: {},
    onLoad: function(o) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), this.getBuyhistory();
    },
    getBuyhistory: function() {
        var n = this;
        o.util.request({
            url: "entry/wxapp/huiyuan.buyhistory",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(o) {
                n.setData({
                    recordlist: o.data
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