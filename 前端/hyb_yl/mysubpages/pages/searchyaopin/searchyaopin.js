var e = getApp();

Page({
    data: {
        searchCont: "",
        findArr: [],
        searchlist: []
    },
    getSearcharr: function(t) {
        var a = t.detail.value;
        this.getSearch2(a), e.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: a,
                source: 0
            },
            success: function(e) {
                console.log(e);
            }
        });
    },
    getSearch2: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/jiansuo.selectshop",
            data: {
                openid: wx.getStorageSync("openid"),
                keywords: t,
                source: 0
            },
            success: function(e) {
                console.log(e), a.setData({
                    searchlist: e.data
                });
            }
        });
    },
    getSearch: function(t) {
        var a = this, o = t.detail.value;
        e.util.request({
            url: "entry/wxapp/jiansuo.selectshop",
            data: {
                openid: wx.getStorageSync("openid"),
                keywords: o,
                source: 0
            },
            success: function(e) {
                console.log(e), a.setData({
                    searchlist: e.data
                });
            }
        }), this.setData({
            searchCont: t.detail.value
        });
    },
    listitembtn: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.name, o = t.currentTarget.dataset.sid;
        e.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: a,
                source: 0
            },
            success: function(e) {
                console.log(e);
            }
        }), wx.navigateTo({
            url: "../yaopindetail/yaopindetail?name=" + t.currentTarget.dataset.name + "&sid=" + o
        });
    },
    searchHistory: function(e) {
        console.log(e), this.setData({
            searchCont: e.currentTarget.dataset.item
        });
    },
    onLoad: function(e) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), this.getHotsearch();
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
    getHotsearch: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/jiansuo.show_hotsearch",
            data: {
                source: 0
            },
            success: function(e) {
                t.setData({
                    findArr: e.data
                });
            }
        });
    }
});