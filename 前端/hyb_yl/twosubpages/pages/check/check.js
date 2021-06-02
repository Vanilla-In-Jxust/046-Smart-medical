Page({
    data: {},
    onLoad: function(a) {
        var t = this, n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
        var e = a.id, i = a.title;
        wx.setNavigationBarTitle({
            title: i
        }), t.setData({
            id: e
        }), app.util.request({
            url: "entry/wxapp/Base",
            success: function(a) {
                a.data.data.ztcolor, t.setData({
                    base: a.data.data
                });
            },
            fail: function(a) {
                console.log(a);
            }
        }), this.getSeflinfo();
    },
    returnClick: function() {
        wx.switchTab({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    onReady: function() {
        this.getAllyzfuwu(), this.getAllzzanli();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getSeflinfo: function() {
        var a = this, t = a.data.id;
        app.util.request({
            url: "entry/wxapp/Seflinfo",
            data: {
                id: t
            },
            success: function(t) {
                console.log(t), a.setData({
                    seflinfo: t.data.data
                }), WxParse.wxParse("articles", "html", t.data.data.ksdesc, a, 5);
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    getAllyzfuwu: function() {
        var a = this, t = a.data.id;
        app.util.request({
            url: "entry/wxapp/Allyzfuwu",
            data: {
                parid: t
            },
            success: function(t) {
                console.log(t), a.setData({
                    yzfuwu: t.data.data
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    getAllzzanli: function() {
        var a = this, t = a.data.id;
        app.util.request({
            url: "entry/wxapp/Allzzanli",
            data: {
                parid: t
            },
            success: function(t) {
                a.setData({
                    zzanli: t.data.data
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    tjdoc: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?id=" + t
        });
    },
    tijianDetail: function(a) {
        var t = a.currentTarget.dataset.f_id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/tijian_detail/tijian_detail?f_id=" + t
        });
    },
    tt_detail: function(a) {
        var t = a.currentTarget.dataset.hz_id, n = a.currentTarget.dataset.hz_name;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/tt_detail/tt_detail?hz_id=" + t + "&hz_name=" + n
        });
    }
});