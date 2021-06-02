var n = getApp();

Page({
    data: {
        currentResult: 0,
        loadingBoo: !0,
        moreBoo: !0
    },
    onLoad: function(n) {},
    onReady: function() {
        this.getMoreIntergral();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getMoreIntergral: function() {
        var t = this;
        wx.getStorageSync("openid");
        n.util.request({
            url: "entry/wxapp/Patientsing",
            data: {
                op: "display"
            },
            success: function(n) {
                console.log(n), t.setData({
                    nodes: n.data.jfsite.guize
                });
            }
        });
    }
});