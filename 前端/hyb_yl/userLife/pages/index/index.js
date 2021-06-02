getApp();

Page({
    data: {
        imgArr: []
    },
    onLoad: function(t) {
        var o = wx.getStorageSync("color");
        t.types;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), this.setData({
            bgc: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    input: function(t) {
        console.log(t);
        this.setData({
            kewords: t.detail.value
        });
    },
    subClick: function() {
        if ("" == this.data.kewords) wx.showToast({
            title: "不能为空，请填写症状关键字",
            icon: "none"
        }); else {
            var t = JSON.stringify(this.data.kewords), o = JSON.stringify(this.data.imgArr);
            wx.navigateTo({
                url: "/hyb_yl/userLife/pages/doctor/doctor?kewords=" + t + "&imgArr=" + o
            });
        }
    },
    delImg: function(t) {
        console.log(t);
        var o = t.currentTarget.dataset.index, n = this.data.imgArr;
        n.splice(o, 1), this.setData({
            imgArr: n
        });
    },
    addImg: function() {
        var t = this;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(o) {
                var n = o.tempFilePaths, e = t.data.imgArr;
                e.length >= 9 || (e = e.concat(n)).length >= 9 && (e.length = 9), t.setData({
                    imgArr: e
                });
            }
        });
    }
});