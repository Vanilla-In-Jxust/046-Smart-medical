Page({
    data: {
        detail: {}
    },
    onLoad: function(o) {
        console.log(o);
        var n = JSON.parse(o.item);
        console.log(n), this.setData({
            detail: n
        });
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
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