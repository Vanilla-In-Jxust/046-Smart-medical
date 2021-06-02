require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

var t = getApp();

Page({
    data: {
        img: "",
        maskey: !0,
        maskbtn_key: !0,
        tit: "",
        doctor: [],
        zixun: [],
        answer: [],
        page: 0,
        pagesize: 10,
        btns: [ {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon1.png?sign=f7940ecce77ef951569666ee63e31018&t=1585206589",
            texts: "简介",
            ids: "a1"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon2.png?sign=303c39f55305b63204368eaa4169112c&t=1585206619",
            texts: "症状",
            ids: "a2"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon3.png?sign=5b20de734027ce99f44bce7582f783c5&t=1585206647",
            texts: "病因",
            ids: "a3"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon4.png?sign=ba1da0ee474ad6e3428646737fcf380f&t=1585206675",
            texts: "诊断",
            ids: "a4"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon5.png?sign=abe58590be0f11e02e089ea0bb3ad159&t=1585206696",
            texts: "治疗",
            ids: "a5"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon5.png?sign=abe58590be0f11e02e089ea0bb3ad159&t=1585206696",
            texts: "预防",
            ids: "a6"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/icon6.png?sign=dec672a4855a5df3d919b7351d22955d&t=1585206721",
            texts: "更多信息",
            ids: "a7"
        } ],
        tabs: [ "推荐医生", "公开问题", "科普文章" ],
        tabcurrent: 0,
        fixeds: !1
    },
    Tapitem: function(t) {
        var a = t.currentTarget.dataset.name, e = this.data.id, n = this.data.title, i = t.currentTarget.dataset.ids;
        console.log(i), wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/info/info?title=" + n + "&id=" + e + "&&name=" + a + "&ids=" + i + "&title=" + n
        });
    },
    mask_key: function() {
        this.setData({
            maskey: !0
        });
    },
    hasmask: function(a) {
        var e = this, n = e.data.id;
        t.util.request({
            url: "entry/wxapp/answer.generate",
            data: {
                id: n
            },
            success: function(t) {
                console.log(t), e.setData({
                    img: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), e.setData({
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
    tabclick: function(t) {
        this.setData({
            tabcurrent: t.currentTarget.dataset.dex
        });
        this.setData({
            page: 0,
            doctor: [],
            zixun: [],
            answer: []
        });
        var a = t.currentTarget.dataset.dex;
        "0" == a ? this.getdoctor() : "1" == a ? this.getAnswer() : "2" == a && this.getzixun();
    },
    onLoad: function(a) {
        var e = this;
        if (a.scene) {
            decodeURIComponent(a.scene);
            var n = res;
            e.setData({
                id: n
            });
        } else {
            wx.setNavigationBarTitle({
                title: a.title
            });
            n = a.id;
            t.util.request({
                url: "entry/wxapp/answer.tank_detail",
                data: {
                    id: n
                },
                success: function(t) {
                    console.log(t.data.content), e.setData({
                        content: t.data.content
                    });
                }
            }), e.setData({
                title: a.title,
                id: n
            });
        }
        e.getDetail(), e.getdoctor();
    },
    getDetail: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/answer.tank_detail",
            data: {
                id: a.data.id
            },
            success: function(t) {
                a.setData({
                    info: t.data
                }), wx.setNavigationBarTitle({
                    title: t.data.title
                });
            }
        });
    },
    getdoctor: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/answer.getdocor",
            data: {
                page: a.data.page,
                pagesize: a.data.pagesize,
                id: a.data.id
            },
            success: function(t) {
                var e = a.data.page + 1;
                a.setData({
                    doctor: a.data.doctor.concat(t.data),
                    page: e
                });
            }
        });
    },
    getzixun: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/answer.getzixun",
            data: {
                page: a.data.page,
                pagesize: a.data.pagesize,
                id: a.data.id
            },
            success: function(t) {
                var e = a.data.page + 1;
                a.setData({
                    zixun: a.data.zixun.concat(t.data),
                    page: e
                });
            }
        });
    },
    getAnswer: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/answer.getAnswer",
            data: {
                page: a.data.page,
                pagesize: a.data.pagesize,
                id: a.data.id
            },
            success: function(t) {
                var e = a.data.page + 1;
                a.setData({
                    answer: a.data.answer.concat(t.data),
                    page: e
                });
            }
        });
    },
    onPageScroll: function(t) {
        wx.createSelectorQuery().select(".tabs").boundingClientRect(function(t) {}).exec();
    },
    navigator: function(t) {
        var a = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + a
        });
    },
    handleNavigateDetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.p_id, n = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + a + "&p_id=" + e + "&zid=" + n
        });
    },
    lookdetail: function() {
        var t = this.data.id, a = this.data.title;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/info/info?title=" + a + "&id=" + t + "&ids=a7names=简介"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data.tabcurrent;
        "0" == t ? this.getdoctor() : "1" == t ? this.getAnswer() : "2" == t && this.getzixun();
    },
    onShareAppMessage: function() {}
});