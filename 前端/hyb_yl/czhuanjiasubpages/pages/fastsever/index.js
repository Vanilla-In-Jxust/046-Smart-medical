Page({
    data: {},
    naviter: function(n) {
        var e = n.currentTarget.dataset.index;
        0 == e ? wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/telserev/index"
        }) : 1 == e && wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/questions/index"
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    jisu: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/index/index"
        });
    }
});