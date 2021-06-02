var a = getApp();

Page({
    data: {
        img: "",
        img1: ""
    },
    Img: function(e) {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "orignal", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e.tempFilePaths[0]), wx.setStorageSync("chestCard", e.tempFilePaths[0]), 
                t.setData({
                    img: e.tempFilePaths[0]
                });
                var o = wx.getStorageSync("log") || "";
                wx.uploadFile({
                    url: a.globalData.dic + "doctor/prove/uploadImage",
                    filePath: e.tempFilePaths[0],
                    name: "file",
                    formData: {
                        token: o,
                        flag: 2
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(a) {
                        console.log(1234), console.log(a), wx.setStorageSync("IMG1", t.data.img);
                    }
                });
            }
        });
    },
    Img1: function(e) {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "orignal", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e.tempFilePaths[0]), wx.setStorageSync("credentials", e.tempFilePaths[0]), 
                t.setData({
                    img1: e.tempFilePaths[0]
                });
                var o = wx.getStorageSync("log") || "";
                wx.uploadFile({
                    url: a.globalData.dic + "doctor/prove/uploadImage",
                    filePath: e.tempFilePaths[0],
                    name: "file",
                    formData: {
                        token: o,
                        flag: 3
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(a) {
                        console.log(1234), console.log(a), wx.setStorageSync("IMG2", t.data.img1);
                    }
                });
            }
        });
    },
    onLoad: function(e) {
        var t = wx.getStorageSync("chestCard") || "", o = wx.getStorageSync("credentials") || "";
        this.setData({
            img: t,
            img1: o
        });
        var s = this, n = wx.getStorageSync("log") || "";
        wx.login({
            success: function(e) {
                var t = e.code;
                wx.request({
                    url: a.globalData.httpLogin + "doctor/code",
                    data: {
                        code: t,
                        token: n
                    },
                    success: function(a) {
                        console.log(a.data.data), wx.setStorageSync("authRealName", a.data.data.authRealName), 
                        wx.setStorageSync("failReason", a.data.data.failReason), s.setData({
                            authRealName: a.data.data.authRealName,
                            failReason: a.data.data.failReason
                        });
                        var e = a.data.data.authRealName;
                        a.data.data.failReason, 2 == e && wx.showModal({
                            title: "提示",
                            content: "您已通过认证审核，不支持修改",
                            success: function(a) {
                                a.confirm ? (console.log("用户点击确定"), wx.switchTab({
                                    url: "/pages/index/index"
                                })) : a.cancel && (console.log("用户点击取消"), wx.switchTab({
                                    url: "/pages/index/index"
                                }));
                            }
                        });
                    }
                });
            }
        });
    },
    foot: function(a) {
        var e = this;
        console.log(e.data.img), console.log(e.data.img1), "" == e.data.img ? wx.showToast({
            title: "请上传胸牌",
            icon: "none",
            duration: 2e3
        }) : "" == e.data.img1 ? wx.showToast({
            title: "请上传执业证书",
            icon: "none",
            duration: 2e3
        }) : wx.navigateBack({
            delta: 1
        });
    }
});