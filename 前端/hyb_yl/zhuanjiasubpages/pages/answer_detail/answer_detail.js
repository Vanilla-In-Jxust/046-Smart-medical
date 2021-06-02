var n = getApp();

Page({
    data: {
        answerArr: []
    },
    onLoad: function(a) {
        var t = this, e = a.p_id, i = wx.getStorageSync("openid"), o = a.user_openid;
        t.setData({
            user_openid: o,
            id: e,
            openid: i
        }), n.util.request({
            url: "entry/wxapp/Zhuanjiaxiangqing",
            data: {
                id: e
            },
            success: function(n) {
                console.log(n), t.setData({
                    xiangqing: n.data.data
                });
            },
            fail: function(n) {}
        });
    },
    onReady: function() {
        this.getSelecthzq(), this.getBase();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getSelecthzq: function() {
        var a = this, t = a.data.user_openid, e = a.data.id;
        n.util.request({
            url: "entry/wxapp/Selethzq",
            data: {
                user_openid: t,
                zid: e
            },
            success: function(n) {
                console.log(n), a.setData({
                    answerArr: n.data.data
                });
            }
        });
    },
    index: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    doc: function() {
        var n = wx.getStorageSync("openid"), a = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?id=" + a + "&openid=" + n
        });
    },
    getBase: function() {
        var a = this;
        n.util.request({
            url: "entry/wxapp/Base",
            success: function(n) {
                a.setData({
                    base: n.data.data
                });
            },
            fail: function(n) {}
        });
    }
});