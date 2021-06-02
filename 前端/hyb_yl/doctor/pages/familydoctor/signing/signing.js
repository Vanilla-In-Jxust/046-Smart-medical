var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var n = t.ff_id, a = t.title;
        this.setData({
            ff_id: n
        }), wx.setNavigationBarTitle({
            title: a
        }), this.getfwdetail();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getfwdetail: function() {
        var n = this, a = n.data.ff_id;
        t.util.request({
            url: "entry/wxapp/Office.fwdetail",
            data: {
                ff_id: a
            },
            success: function(t) {
                console.log(t), n.setData({
                    nodes: t.data.fw_xy
                });
            }
        });
    }
});