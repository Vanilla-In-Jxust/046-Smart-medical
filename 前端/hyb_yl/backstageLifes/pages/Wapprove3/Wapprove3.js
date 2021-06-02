getApp();

Page({
    data: {},
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    onLoad: function(t) {
        var a = t.z_content;
        this.setData({
            z_content: a
        });
    },
    foot: function(t) {
        var a = wx.setStorageSync("introduce", a) || "";
        a = this.data.input;
        var e = getCurrentPages();
        e[e.length - 2].setData({
            introduce: a
        }), wx.navigateBack({
            delta: 1
        });
    }
});