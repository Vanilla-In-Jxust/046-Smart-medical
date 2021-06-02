var o = getApp();

Page({
    data: {},
    onLoad: function(e) {
        var n = wx.getStorageSync("color"), t = this;
        if (e.id) {
            var a = e.id;
            t.setData({
                id: a
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
        var r = e.key_words;
        this.setData({
            key_words: r
        }), o.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: r
            },
            success: function(o) {
                console.log(o), t.setData({
                    detail: o.data
                });
            },
            fail: function(o) {
                console.log(o);
            }
        });
    },
    mereport: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/report/report"
        });
    },
    havereport: function() {
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/changeDoctor/changeDoctor?inquiry=5&long=undefined&ser_key=" + this.data.key_words
        });
    },
    nonereport: function() {
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/changeDoctor/changeDoctor?inquiry=6&long=undefined&ser_key=" + this.data.key_words
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