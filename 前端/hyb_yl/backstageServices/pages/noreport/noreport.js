var t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        upload_picture_list: [],
        datetime: ""
    },
    formsubmit: function(t) {
        var a = t.detail.value;
        if ("" == a.miaoshu || a.miaoshu.length < 10) wx.showToast({
            title: "提问至少10字",
            icon: "none"
        }); else {
            this.data.upload_picture_list, this.data.datetime;
            wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=" + this.data.inquiry
            });
        }
    },
    onLoad: function(a) {
        var i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), this.setData({
            inquiry: a.inquiry,
            datetime: a.times
        });
        var e = this;
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                e.setData({
                    url: t.data
                });
            }
        });
    },
    deleteimg: function(t) {
        var a = t.currentTarget.dataset.index, i = this.data.data_arr;
        i.splice(a, 1), this.setData({
            upload_picture_list: i
        });
    },
    uploadimg: function() {
        var a = this, i = t.siteInfo.uniacid, e = a.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var n = t.tempFilePaths, o = 0; o < n.length; o++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + i + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[o],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        console.log(t), e.push(t.data), a.setData({
                            upload_picture_list: e
                        });
                    }
                });
            }
        });
    },
    seltimes: function() {
        wx.navigateBack({});
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});