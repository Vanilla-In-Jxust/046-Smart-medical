var t = getApp();

Page({
    data: {
        current: 0
    },
    leftTab: function(t) {
        console.log(t.currentTarget.dataset.index), this.setData({
            current: t.currentTarget.dataset.index
        });
    },
    swiper: function(t) {
        console.log(t.detail.current), this.setData({
            current: t.detail.current
        });
    },
    choseTab: function(t) {
        console.log(t.currentTarget.dataset.text);
        var e = getCurrentPages();
        e[e.length - 2].setData({
            biaoqiantext: t.currentTarget.dataset.text,
            biaoqianid: t.currentTarget.dataset.id
        }), wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(t) {
        this.getShowcategory();
    },
    getShowcategory: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/share.Allcategory",
            success: function(t) {
                console.log(t.data), e.setData({
                    consulList: t.data
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