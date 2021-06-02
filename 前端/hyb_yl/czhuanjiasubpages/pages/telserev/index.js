getApp();

Page({
    data: {},
    naviter: function(a) {
        console.log(a.currentTarget.dataset.index);
        var n = a.currentTarget.dataset.index, e = this.data.zid, t = this.data.name, i = this.data.keywords;
        0 == n ? wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/fastsever/index?zid=" + e + "&name=" + t + "&keywords=" + i
        }) : 1 == n && wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?zid=" + e + "&name=" + t + "&keywords=" + i
        });
    },
    onLoad: function(a) {
        var n = a.keywords, e = a.zid, t = a.name;
        wx.setNavigationBarTitle({
            title: t
        }), this.setData({
            keywords: n,
            zid: e,
            name: t
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