var t = getApp();

Page({
    data: {
        Arr: [],
        page: 0,
        prenumber: 8,
        height: "",
        Kind: [ "推荐", "冬日养生", "食疗" ],
        type: 0
    },
    whichKind: function(a) {
        var t = a.currentTarget.dataset.index;
        this.setData({
            type: t
        });
    },
    lower: function() {
        if (!this.data.noFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var t, e = this, o = e.data.prenumber, n = e.data.page, i = e.data.Arr;
            wx.request({
                url: a.globalData.hbpublic + "news/list/" + n + "/" + o + "/1",
                data: {},
                success: function(a) {
                    if (t = i.concat(a.data.data), 200 == a.data.code) {
                        if (n++, e.setData({
                            page: n
                        }), e.setData({
                            Arr: t
                        }), null == a.data.data || a.data.data.length <= 0) return e.setData({
                            noFlag: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), e.setData({
                            Arr: t,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    },
    onLoad: function(a) {
        var e = this;
        wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    height: a.windowHeight + 100
                });
            }
        });
        var o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), e.setData({
            bgc: o
        }), t.util.request({
            url: "entry/wxapp/Zixun",
            success: function(a) {
                console.log(a), e.setData({
                    Arr: a.data.data,
                    page: 1
                });
            }
        });
    },
    toast: function() {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    toast1: function(a) {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/community/community"
        });
    },
    toast2: function() {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/shop/shop"
        });
    },
    toast3: function() {
        var a = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Myphone",
            data: {
                openid: a
            },
            success: function(e) {
                t.globalData.myphone = e.data.data, t.globalData.openid = a;
            },
            fail: function(a) {
                console.log(a);
            }
        }), setTimeout(function() {
            wx.redirectTo({
                url: "/hyb_yl/tabBar/my/my"
            });
        }, 350);
    },
    toast4: function() {
        t.util.request({
            url: "entry/wxapp/Myphone",
            data: {
                openid: openid
            },
            success: function(a) {
                t.globalData.myphone = a.data.data, t.globalData.openid = openid;
            },
            fail: function(a) {
                console.log(a);
            }
        }), wx.redirectTo({
            url: "/hyb_yl/userLife/pages/jibingyufang/jibingyufang"
        });
    },
    onShow: function() {},
    nav: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/advisory1/advisory1?id=" + t
        });
    }
});