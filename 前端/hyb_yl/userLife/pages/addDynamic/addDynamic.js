var t = getApp();

Page({
    data: {
        initialHeight: 350,
        height: 350,
        imgUrlList: [],
        urlArr: [],
        tsid: 1,
        smallFilePath: "",
        bigFilePath: "",
        tcontentText: "",
        addFlag: !0,
        data_arr: [],
        switch1Checked: !1,
        user_identity: 0,
        biaoqiantext: "",
        biaoqianid: 0,
        biaoqianpid: 0,
        doctor_visible: 0
    },
    switch1Change: function(t) {
        console.log(t.detail.value), t.detail.value ? this.setData({
            doctor_visible: 1
        }) : this.setData({
            doctor_visible: 0
        });
    },
    goTab: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/addTab/addTab"
        });
    },
    bindinput: function(t) {
        this.setData({
            tcontentText: t.detail.value
        });
    },
    chooseImage: function(t) {
        var a = this;
        console.log(this.data.imgUrlList), this.data.imgUrlList.length < 3 ? wx.chooseImage({
            count: 3,
            sizeType: [ "original", "compressed" ],
            success: function(t) {
                console.log(t), 3 == t.tempFilePaths.length && a.setData({
                    hide: !0
                }), a.setData({
                    imgUrlList: a.data.imgUrlList.concat(t.tempFilePaths)
                });
            }
        }) : wx.showToast({
            title: "最多上传三张图片",
            icon: "loading",
            duration: 3e3
        });
    },
    upload: function() {
        for (var t = this, a = t.data.uniacid, i = t.data.data_arr, e = 0; e < this.data.imgUrlList.length; e++) wx.uploadFile({
            url: t.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
            filePath: t.data.imgUrlList[e],
            name: "upfile",
            formData: {},
            success: function(a) {
                i.push(a.data), t.setData({
                    data_arr: i
                });
            }
        });
    },
    delImage: function(t) {
        var a = this.data.imgUrlList, i = t.target.dataset.index;
        a.splice(i, 1), this.setData({
            imgUrlList: a
        });
    },
    previewImage: function(t) {
        var i = this.data.imgUrlList, e = t.target.dataset.imgindex;
        a.previewImage(t, i, e);
    },
    addDynamic: function() {
        var a = this, i = a.data.tcontentText, e = this.data.imgUrlList, s = wx.getStorageSync("openid"), n = a.data.biaoqianid, o = a.data.user_identity, d = a.data.doctor_visible;
        if (0 == (i || "").replace(/(^\s*)|(\s*$)/g, "").length) wx.showToast({
            title: "请输入要发布的内容~",
            icon: "none",
            duration: 2e3
        }); else if (e.length <= 0) wx.showToast({
            title: "请上传动态图片",
            icon: "none",
            duration: 2e3
        }); else if (0 == n) wx.showToast({
            title: "请选择标签",
            icon: "none",
            duration: 2e3
        }); else {
            this.upload(), wx.showLoading({
                title: "发布中请稍后~",
                icon: "loading",
                duration: 2e3,
                mask: !0
            });
            a.data.data_arr;
            setTimeout(function() {
                console.log("sss"), t.util.request({
                    url: "entry/wxapp/share.upshare",
                    data: {
                        openid: s,
                        sharepic: e,
                        contents: i,
                        state: 1,
                        biaoqianid: n,
                        user_identity: o,
                        doctor_visible: d
                    },
                    success: function(t) {
                        setTimeout(function() {
                            wx.showToast({
                                title: "发布成功~",
                                icon: "loading",
                                duration: 2e3,
                                success: function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }
                            });
                        }), wx.hideLoading();
                    }
                });
            }, 1e3);
        }
    },
    onLoad: function(a) {
        var i = this, e = t.siteInfo.uniacid, s = wx.getStorageSync("color");
        t.util.request({
            url: "entry/wxapp/share.url",
            cachetime: "0",
            success: function(t) {
                console.log(t), i.setData({
                    url: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/share.user_identity",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                i.setData({
                    user_identity: t.data
                });
            }
        }), i.setData({
            uniacid: e,
            bgc: s
        });
    }
});