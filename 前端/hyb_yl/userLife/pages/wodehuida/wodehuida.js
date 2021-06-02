var t = getApp();

Page({
    data: {
        tab: [ "未回答", "已回答" ],
        hide: !0,
        daIndex: null,
        current: 0,
        values: ""
    },
    close: function() {
        this.setData({
            hide: !0
        });
    },
    tab: function(e) {
        var a = this, n = wx.getStorageSync("openid");
        console.log(e.currentTarget.dataset.index), 0 == e.currentTarget.dataset.index ? t.util.request({
            url: "entry/wxapp/Allquestwei",
            data: {
                openid: n
            },
            success: function(t) {
                console.log(t);
                var e = t.data.data;
                a.setData({
                    wenda: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }) : t.util.request({
            url: "entry/wxapp/Allquestyi",
            data: {
                openid: n
            },
            success: function(t) {
                console.log(t);
                var e = t.data.data;
                a.setData({
                    wenda: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.setData({
            current: e.currentTarget.dataset.index
        });
    },
    huida: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.index;
        this.setData({
            daIndex: a,
            hide: !1,
            qid: e
        });
    },
    onLoad: function(e) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var n = this, r = wx.getStorageSync("openid"), o = e.zid;
        n.setData({
            zid: o
        }), t.util.request({
            url: "entry/wxapp/Allquestwei",
            data: {
                openid: r
            },
            success: function(t) {
                console.log(t);
                var e = t.data.data;
                n.setData({
                    wenda: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), n.setData({
            bgc: a
        });
    },
    answerDetailClick: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.zid, a = t.currentTarget.dataset.openid, n = t.currentTarget.dataset.qid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zhuan_da/zhuan_da?zid=" + e + "&user_openid=" + a + "&qid=" + n
        });
    },
    previewImages: function(t) {
        for (var e = t.currentTarget.dataset.src, a = t.currentTarget.dataset.qid, n = this.data.wenda, r = [], o = 0; o < n.length; o++) n[o].qid == a && (r = n[o].user_picture);
        wx.previewImage({
            current: e,
            urls: r
        });
    },
    previewImage: function(t) {
        for (var e = t.currentTarget.dataset.src, a = t.currentTarget.dataset.qid, n = this.data.wenda, r = [], o = 0; o < n.length; o++) n[o].qid == a && (r = n[o].user_picture);
        wx.previewImage({
            current: e,
            urls: r
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