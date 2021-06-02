var n = getApp();

Page({
    data: {
        medical: [ {}, {}, {}, {}, {}, {} ]
    },
    onLoad: function(o) {
        var t = this;
        n.util.request({
            url: "entry/wxapp/index.yishuo",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(n) {
                console.log(n), t.setData({
                    medical: n.data
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