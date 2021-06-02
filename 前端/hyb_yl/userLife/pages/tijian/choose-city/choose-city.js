getApp();

Page({
    data: {},
    onLoad: function(t) {
        var n = JSON.parse(t.nesARR);
        this.setData({
            cities: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    chooseCity: function(t) {
        var n = t.currentTarget.dataset.cityname, e = t.currentTarget.dataset.id, a = getCurrentPages();
        a[a.length - 2].setData({
            cityname: n,
            id: e
        }), wx.navigateBack({
            detail: 1
        });
    }
});