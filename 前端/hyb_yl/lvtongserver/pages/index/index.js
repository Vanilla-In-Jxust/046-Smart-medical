var t = getApp(), e = require("../../../../template/lvtongTemplate.js");

Page({
    data: {
        did: "",
        windowWidth: 0,
        windowHeight: 0,
        t_status: !1,
        isopera: !1
    },
    docterorder: function(t) {
        var e = t.currentTarget.dataset.dex;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/docorder/docorder?state=" + e
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
        var o = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                console.log(t), o.setData({
                    base: t.data
                });
            }
        }), o.getDocinfo();
        var n = wx.getStorageSync("color");
        this.setData({
            bg_color: n
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    closeshare: function() {
        this.setData({
            isopera: !1
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
            url: "entry/wxapp/green.guidance_detail",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                var e = t.data.id;
                wx.setStorageSync("did", e), a.setData({
                    docinfo: t.data,
                    id: t.data.id,
                    thumb: t.data.thumb
                });
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
        var e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.keyword, o = t.currentTarget.dataset.did;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/docorder/docorder?title=" + e + "&keyword=" + a + "&did=" + o
        });
    },
    goBack: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.titlme, a = t.currentTarget.dataset.key_words, o = t.currentTarget.dataset.id, n = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/serviceList/serviceList?titlme=" + e + "&key_words=" + a + "&id=" + o + "&zid=" + n
        });
    }
});