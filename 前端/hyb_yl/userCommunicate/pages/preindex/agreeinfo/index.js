var n = getApp();

Page({
    data: {},
    onLoad: function(n) {
        var o = n.key;
        this.setData({
            key: o
        }), this.getyuyueinfo();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getyuyueinfo: function() {
        var o = this, t = o.data.key;
        n.util.request({
            url: "entry/wxapp/yuyue.shoushuinfo",
            data: {
                key: t
            },
            success: function(n) {
                console.log(n), o.setData({
                    tiaokuan: n.data.tiaokuan
                });
            },
            fail: function(n) {
                console.log(n);
            }
        });
    }
});