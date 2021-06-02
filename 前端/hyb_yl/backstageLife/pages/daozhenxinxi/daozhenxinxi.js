var a = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        symptom: "",
        upload_picture_list: [],
        argeen: !1
    },
    deleteimg: function(a) {
        var t = a.currentTarget.dataset.index, e = this.data.data_arr;
        e.splice(t, 1), this.setData({
            upload_picture_list: e
        });
    },
    uploadimg: function() {
        var t = this, e = a.siteInfo.uniacid, i = t.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                console.log(";;;");
                for (var n = a.tempFilePaths, o = 0; o < n.length; o++) wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[o],
                    name: "upfile",
                    formData: [],
                    success: function(a) {
                        console.log(a), i.push(a.data), t.setData({
                            upload_picture_list: i
                        });
                    }
                });
            }
        });
    },
    symptomvalue: function(a) {
        this.setData({
            symptom: a.detail.value
        });
    },
    gosign: function() {
        this.data.symptom, this.data.upload_picture_list;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=9"
        });
    },
    onLoad: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                e.setData({
                    url: a.data
                });
            }
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
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