var n = getApp();

Page({
    data: {},
    onLoad: function(o) {
        var t = this, a = o.id;
        n.util.request({
            url: "entry/wxapp/Weburl",
            data: {
                id: a
            },
            success: function(n) {
                console.log(n), t.setData({
                    src: n.data.data.webviewurl
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