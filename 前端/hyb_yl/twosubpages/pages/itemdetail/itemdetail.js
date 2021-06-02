require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

var t = getApp();

Page({
    data: {
        img: "",
        maskey: !0,
        list: [],
        page: 0,
        pagesize: 10
    },
    mask_key: function() {
        this.setData({
            maskey: !0
        });
    },
    hasmask: function(e) {
        var a = this, n = a.data.id;
        t.util.request({
            url: "entry/wxapp/Zixun.generate",
            data: {
                id: n
            },
            success: function(t) {
                console.log(t), a.setData({
                    img: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.setData({
            maskey: !1
        });
    },
    maskbtn: function() {
        var t = this.data.img;
        wx.showLoading({
            title: "图片保存中..."
        }), wx.downloadFile({
            url: t,
            success: function(t) {
                console.log(t.tempFilePath), wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.hideLoading(), wx.showModal({
                            title: "图片已存入相册",
                            content: "好东西要分享，发给朋友们看看。",
                            showCancel: !1
                        });
                    },
                    fail: function(t) {
                        console.log(t), "saveImageToPhotosAlbum:fail:auth denied" !== t.errMsg && "saveImageToPhotosAlbum:fail auth deny" !== t.errMsg && "saveImageToPhotosAlbum:fail authorize no response" !== t.errMsg || (console.log("22222222222222222222222222222222============================="), 
                        wx.showModal({
                            title: "提示",
                            content: "需要您授权保存相册",
                            showCancel: !1,
                            success: function(t) {
                                wx.openSetting({
                                    success: function(t) {
                                        console.log("settingdata", t), t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                                            title: "提示",
                                            content: "获取权限成功,再次点击按钮即可保存",
                                            showCancel: !1
                                        }) : wx.showModal({
                                            title: "提示",
                                            content: "获取权限失败，将无法保存到相册！",
                                            showCancel: !1
                                        });
                                    },
                                    fail: function(t) {
                                        console.log("failData", t);
                                    },
                                    complete: function(t) {
                                        console.log("finishData", t);
                                    }
                                });
                            }
                        }));
                    },
                    complete: function(t) {
                        wx.hideLoading();
                    }
                });
            }
        });
    },
    navicate: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    listitem: function(t) {
        var e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/details/details?title=" + e + "&id=" + a
        });
    },
    onLoad: function(e) {
        var a = e.type;
        this.setData({
            type: a
        }), "1" == a ? this.getzhengzhuan() : this.getList(), this.getAdv(), t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                var e = t.data.ztcolor;
                wx.setNavigationBarTitle({
                    title: t.data.show_title
                }), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: e
                }), wx.setStorage({
                    key: "color",
                    data: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getAdv: function() {
        var e = this;
        t.util.request({
            url: "emtry/wxapp/answer.adv",
            data: {
                position: e.data.type
            },
            success: function(t) {
                e.setData({
                    adv: t.data
                });
            }
        });
    },
    getzhengzhuan: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/answer.zhengzhuan_type",
            success: function(t) {
                e.setData({
                    info: t.data
                });
            }
        });
    },
    listitems: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/itemdetails/itemdetails?id=" + e
        });
    },
    getList: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/answer.tanks",
            data: {
                type: e.data.type,
                page: e.data.page,
                pagesize: e.data.pagesize
            },
            success: function(t) {
                var a = e.data.page + 1;
                e.setData({
                    list: e.data.list.concat(t.data),
                    page: a
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.data.keyword;
        this.getList();
    },
    onShareAppMessage: function() {}
});