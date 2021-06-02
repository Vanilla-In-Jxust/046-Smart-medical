getApp();

Page({
    data: {},
    onLoad: function(a) {
        var e = JSON.parse(a.info);
        this.setData({
            info: e,
            z_thumbs: a.z_thumbs,
            z_name: a.z_name
        });
    },
    previewImage: function(a) {
        console.log(a), wx.previewImage({
            urls: this.data.urls
        });
    }
});