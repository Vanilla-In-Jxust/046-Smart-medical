var n = getApp();

Page({
    data: {},
    pop: function(n) {
        console.log(n);
        var o = n.currentTarget.dataset.t_msg2;
        wx.showModal({
            title: "提示",
            content: o,
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#fd965b",
            success: function(n) {
                n.confirm ? console.log("用户点击确定") : n.cancel && console.log("用户点击取消");
            }
        });
    },
    onLoad: function(o) {
        var t = this, e = o.tid;
        n.util.request({
            url: "entry/wxapp/tijian.detail",
            data: {
                id: e
            },
            success: function(n) {
                console.log(n), t.setData({
                    detail: n.data,
                    count: n.data.t_msg.length
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