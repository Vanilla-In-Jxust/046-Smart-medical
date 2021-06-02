var a = getApp();

Page({
    data: {
        pageWrapCount: [],
        answerArr: []
    },
    onLoad: function(n) {
        var t = this, e = n.zid;
        t.setData({
            zid: e
        }), a.util.request({
            url: "entry/wxapp/Selectallque",
            data: {
                zid: e
            },
            success: function(n) {
                console.log(n), a.globalData.answer = n.data.data, t.setData({
                    pageWrapCount: t.data.pageWrapCount.concat([ 1 ])
                });
            }
        });
    },
    answerDetailClick: function(a) {
        console.log(a);
        var n = a.detail.id, t = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/answer_detail/answer_detail?user_openid=" + n + "&p_id=" + t
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