var t = getApp();

Page({
    data: {
        checkword: "",
        findArr: [],
        searchlist: [],
        resultif: !1
    },
    getSearch: function(e) {
        var a = this, r = e.detail.value;
        t.util.request({
            url: "entry/wxapp/jiansuo.yisheng_keywordssearch",
            data: {
                keywords: r
            },
            success: function(e) {
                console.log(e.data), e.data.length > 0 ? a.setData({
                    checkword: r,
                    resultif: !1,
                    searchlisttip: e.data
                }) : (a.setData({
                    checkword: r,
                    resultif: !0
                }), t.util.request({
                    url: "entry/wxapp/jiansuo.addsearch",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        checkword: r,
                        source: 1
                    }
                }), a.getSearchlist());
            }
        });
    },
    listitembtn: function(e) {
        var a = e.currentTarget.dataset.checkword;
        t.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: a,
                source: 1
            }
        }), this.setData({
            resultif: !0,
            checkword: a
        }), this.getSearchlist();
    },
    searchHistory: function(e) {
        var a = e.currentTarget.dataset.checkword;
        t.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: a,
                source: 1
            }
        }), this.setData({
            resultif: !0,
            checkword: a
        }), this.getSearchlist();
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.getHotsearch();
    },
    getHotsearch: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.show_hotsearch",
            data: {
                source: 1
            },
            success: function(t) {
                e.setData({
                    findArr: t.data
                });
            }
        });
    },
    getSearchlist: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.searchlist",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: e.data.checkword,
                source: 1,
                sindex: 1
            },
            success: function(t) {
                e.setData({
                    zhuanjialist: t.data.zhuanjialist
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    doctoritem: function(t) {
        var e = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + e
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});