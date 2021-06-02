getApp();

Page({
    data: {},
    onLoad: function(e) {
        console.log(e);
        var a = e.weweima, t = JSON.parse(e.info);
        console.log(t), this.setData({
            weweima: a,
            z_name: t.z_name,
            z_yiyuan: t.z_yiyuan,
            z_zhiwu: t.z_zhiwu,
            z_thumbs: t.z_thumbs
        });
    },
    previewImage: function(e) {
        console.log(e), wx.previewImage({
            current: e.target.id,
            urls: this.data.urls
        });
    }
});