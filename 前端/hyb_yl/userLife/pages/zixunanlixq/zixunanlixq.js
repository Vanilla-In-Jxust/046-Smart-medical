require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

var t = getApp();

Page({
    data: {
        hs_l_key: !1,
        html: "",
        maskey: !0,
        maskbtn_key: !0,
        listall: [],
        img: "",
        jifen: !1
    },
    closeZhe: function() {
        this.setData({
            jifen: !1
        });
    },
    mask_key: function() {
        this.setData({
            maskey: !0
        });
    },
    hasmask: function(e) {
        var a = this, o = a.data.id, n = a.data.zid;
        t.util.request({
            url: "entry/wxapp/zixun.generate",
            data: {
                id: o,
                zid: n
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
    goBack: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunList/zixunList"
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
    imageErrorAuth: function() {
        wx.showModal({
            title: "提示",
            content: "需要您授权保存至相册",
            showCancel: !1,
            success: function(t) {
                wx.openSetting({
                    success: function(t) {
                        console.log("settingData", t), t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                            title: "提示",
                            content: "获取权限成功,再次保存图片即可",
                            showCancel: !1
                        }) : wx.showModal({
                            title: "提示",
                            content: "获取权限失败，将无法保存到相册",
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
        });
    },
    diangood: function(e) {
        var a = parseInt(this.data.dz), o = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/zixun.adddz",
            data: {
                id: this.data.id,
                openid: o,
                type: 1
            },
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.setData({
            hs_l_key: !this.data.hs_l_key,
            dz: a + 1
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color"), a = t.zid;
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), t.scene) {
            var o = decodeURIComponent(t.scene), n = o.split("&p_id="), i = n[0], s = n[1];
            a = n[1].split("&zid=")[1];
            console.log(o, n, a), this.setData({
                id: i,
                zid: a,
                p_id: s
            });
        } else {
            i = t.id, s = t.p_id;
            this.setData({
                id: i,
                p_id: s,
                zid: a
            });
        }
        this.getDetail(), this.getBase();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getDetail: function() {
        var e = this, a = (e.data.html, e.data.p_id), o = e.data.zid, n = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/zixun.detail",
            data: {
                id: e.data.id,
                openid: n,
                type: 1,
                p_id: a,
                zid: o
            },
            success: function(t) {
                wx.setNavigationBarTitle({
                    title: t.data.data.title
                }), e.setData({
                    detail: t.data.data,
                    html: t.data.data.content,
                    dz: t.data.data.dz,
                    hs_l_key: t.data.hs_l_key,
                    listall: t.data.list,
                    jifen: t.data.data.iszongsongjifen
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getBase: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                console.log(t), e.setData({
                    baseinfo: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    navicate: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    xgdetail: function(e) {
        var a = this.data.p_id, o = e.currentTarget.dataset.id, n = e.currentTarget.dataset.zid;
        t.util.request({
            url: "entry/wxapp/zixun.erweima",
            data: {
                id: o,
                p_id: a
            },
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        }), wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + o + "&p_id=" + a + "&zid=" + n
        });
    },
    tap: function(t) {
        console.log(t);
    }
});