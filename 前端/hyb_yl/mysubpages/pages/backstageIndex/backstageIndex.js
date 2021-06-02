var t = getApp(), e = require("../../../../template/backstageTemplate.js");

Page({
    data: {
        zid: "",
        docorder: [ {
            title: "待接诊",
            num: 1
        }, {
            title: "咨询中",
            num: 1
        }, {
            title: "已回复",
            num: 1
        }, {
            title: "已结束",
            num: 1
        }, {
            title: "已退回",
            num: 1
        } ],
        order1: [ {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/fuwu1.png?sign=976e798e43db1d1dc8b398dcbb2f133c&t=1591152481",
            title: "挂号",
            url: ""
        }, {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/fuwu2.png?sign=cda98d6f4e7f0ee71b1e423f8493a2e3&t=1591152498",
            title: "解读",
            url: ""
        }, {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/fuwu3.png?sign=cd5d516be2c0370bc203f16058438ac9&t=1591152506",
            title: "医生卡",
            url: ""
        }, {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/fuwu4.png?sign=8f02c9a97981def329d971f885f98f23&t=1591152514",
            title: "手术安排",
            url: ""
        } ],
        order2: [ {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/guanli1.png?sign=120cb4412aa5f31d26da92ebce67c512&t=1591152458",
            title: "签约患者",
            url: ""
        }, {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/guanli2.png?sign=c658b5e3bfb8d33f41ebb62295031360&t=1591152467",
            title: "普通患者",
            url: ""
        }, {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/guanli3.png?sign=38fa099837b1c985ee8f225a75ef5abc&t=1591152447",
            title: "年卡患者",
            url: ""
        }, {
            icon: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/guanli4.png?sign=583fbf8bd077e457663cd5bd7018d5b4&t=1591152435",
            title: "患者分组",
            url: ""
        } ],
        windowWidth: 0,
        windowHeight: 0,
        t_status: !1,
        isopera: !1
    },
    docterorder: function(t) {
        var e = t.currentTarget.dataset.dex;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/docorder/docorder?state=" + e
        });
    },
    patientman: function(t) {
        var e = t.currentTarget.dataset.dex, a = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/patientman/patientman?state=" + e + "&zid=" + a
        });
    },
    saveImage: function(t) {
        var e = t.currentTarget.dataset.url;
        console.log(t), wx.getImageInfo({
            src: e,
            success: function(t) {
                var e = t.path;
                wx.saveImageToPhotosAlbum({
                    filePath: e,
                    success: function(t) {
                        console.log(t);
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    zsservice: function(t) {
        var e = t.currentTarget.dataset.url, a = this.data.zid;
        console.log(t), wx.navigateTo({
            url: e + "?zid=" + a
        });
    },
    onLoad: function(a) {
        e.tabbar("tabBar", 0, this);
        var n = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                console.log(t), n.setData({
                    base: t.data
                });
            }
        }), n.getDocinfo();
        var o = wx.getStorageSync("color");
        this.setData({
            bg_color: o
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), n.sharecon();
    },
    ishaibao: function() {
        var e = this.data.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.docerweimainfo",
            data: {
                zid: e
            },
            success: function(t) {
                console.log(t);
                t.data.weweima, JSON.stringify(t.data);
            }
        }), this.setData({
            isopera: !0
        }), this.sharecon();
    },
    closeshare: function() {
        this.setData({
            isopera: !1
        });
    },
    sharecon: function() {
        var t = this;
        t.setData({
            t_status: !0
        }), wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    windowWidth: e.screenWidth,
                    windowHeight: e.screenHeight
                });
            }
        });
    },
    operation: function() {
        var t = this;
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvasId: "canvass",
            success: function(e) {
                console.log(e), wx.saveImageToPhotosAlbum({
                    filePath: e.tempFilePath,
                    success: function(e) {
                        wx.showToast({
                            title: "保存成功"
                        }), setTimeout(function() {
                            t.setData({
                                t_status: !1,
                                isopera: !1
                            });
                        }, 1e3);
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getDocinfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getDocinfo: function(e) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/studio.ifzhuanjia",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t);
                var e = t.data.zid;
                wx.setStorageSync("zid", e);
                var n = t.data.z_telephone;
                a.setData({
                    docinfo: t.data,
                    zid: t.data.zid,
                    data_list: t.data.data_list,
                    z_telephone: t.data.z_telephone,
                    weweima: t.data.weweima,
                    advertisement: t.data.advertisement
                }), a.bangdingtel(e, n);
            }
        });
    },
    getDoc: function() {
        t.util.request({
            url: "entry/wxapp/studio.ifzj",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), 1 == t.data && wx.setStorage({
                    key: "userinfotype",
                    data: "doc"
                });
            }
        });
    },
    goBacks: function(t) {
        var e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.keyword, n = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/docorder/docorder?title=" + e + "&keyword=" + a + "&zid=" + n + "&doc=1"
        });
    },
    qiandan: function(t) {
        var e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.keyword;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/docorder/docorder?title=" + e + "&keyword=" + a + "&zid=&doc=1"
        });
    },
    goExplanation: function() {
        var t = this, e = t.data.zid;
        wx.setStorageSync("sate", 1), wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/explanation/explanation?zid=" + e,
            success: function() {
                t.setData({
                    nonReadBoo: !0
                });
            }
        });
    },
    hzwenzhen: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.titlme, a = t.currentTarget.dataset.key_words, n = t.currentTarget.dataset.id, o = this.data.zid, i = this.data.z_telephone;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/docorder/docorder?titlme=" + e + "&key_words=" + a + "&id=" + n + "&zid=" + o + "&z_telephone=" + i
        });
    },
    goBack: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.titlme, a = t.currentTarget.dataset.key_words, n = t.currentTarget.dataset.id, o = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/serviceList/serviceList?titlme=" + e + "&key_words=" + a + "&id=" + n + "&zid=" + o
        });
    },
    bangdingtel: function(e, a) {
        var n = this;
        t.util.request({
            url: "entry/wxapp/yuyue.telcotime",
            data: {
                doc_phone: n.data.z_telephone,
                zid: n.data.zid
            },
            success: function(e) {
                var a = e.data.privateNum;
                console.log(e), 1 !== e.data && t.util.request({
                    url: "entry/wxapp/yuyue.upcharmsg",
                    data: {
                        zid: n.data.zid,
                        privateNum: a
                    },
                    success: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    }
});