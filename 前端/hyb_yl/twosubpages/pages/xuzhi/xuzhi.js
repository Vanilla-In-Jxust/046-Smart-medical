var n = getApp();

Page({
    data: {},
    onLoad: function(o) {
        var t = this, a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        }), n.util.request({
            url: "entry/wxapp/green.cash_base",
            success: function(n) {
                t.setData({
                    base: n.data
                });
            }
        });
    },
    fanhui: function() {
        wx.navigateBack({
            delta: 1
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