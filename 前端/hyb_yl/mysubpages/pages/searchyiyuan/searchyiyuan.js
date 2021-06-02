var t = getApp();

Page({
    data: {
        checkword: "",
        findArr: [],
        searchlist: [],
        resultif: !1
    },
    listitembtns: function(t) {
        var e = t.currentTarget.dataset.hid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/specialtyContent/specialtyContent?hid=" + e
        });
    },
    getSearch: function(e) {
        var a = this, r = e.detail.value;
        t.util.request({
            url: "entry/wxapp/jiansuo.yiyuan_keywordssearch",
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
                        source: 2
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
                source: 2
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
                source: 2
            }
        }), this.setData({
            resultif: !0,
            checkword: a
        }), this.getSearchlist();
    },
    getSearchlist: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.searchlist",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: e.data.checkword,
                source: 2,
                sindex: 2
            },
            success: function(t) {
                e.setData({
                    hospitalist: t.data.yiyuanlist
                });
            }
        });
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
                source: 2
            },
            success: function(t) {
                e.setData({
                    findArr: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    doctoritem: function() {
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye"
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});