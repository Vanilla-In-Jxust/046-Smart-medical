var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

Page({
    data: {
        tabindex: 0,
        tabpid: 0,
        tabcid: 0,
        proain: !1,
        isshow: 1,
        showt: "展开",
        deparshow: !1,
        communityListOne: []
    },
    tabChose: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            tabchoseStyle: e,
            tabcid: t.currentTarget.dataset.tabcid
        }), this.getCategorysharelist();
    },
    departab: function(t) {
        var e = t.currentTarget.dataset.dex;
        if (console.log(e), 0 == e) var a = 0; else a = t.currentTarget.dataset.pid;
        console.log(a), this.setData({
            tabindex: e,
            tabpid: a
        }), this.getCategorysharelist();
    },
    opend: function() {
        0 == this.data.isshow ? this.setData({
            isshow: 1,
            showt: "展开"
        }) : this.setData({
            isshow: 0,
            showt: "收起"
        });
    },
    proaInfor: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblemsInfor/publicProblemsInfor"
        });
    },
    deparlist: function() {
        this.data.deparshow ? this.setData({
            deparshow: !1
        }) : this.setData({
            deparshow: !0
        });
    },
    departabs: function(t) {
        var e = t.currentTarget.dataset.dex;
        this.setData({
            tabindex: e,
            deparshow: !1
        });
    },
    scrolltoupper: function(t) {
        console.log(t);
    },
    toLike: function(a) {
        var n = this, o = n.data.communityListOne, s = a.currentTarget.dataset.index, i = a.currentTarget.dataset.a_id, r = wx.getStorageSync("openid");
        0 == o[s].dianzan ? (e.util.request({
            url: "entry/wxapp/share.userdianz",
            data: {
                parentid: i,
                openid: r
            },
            success: function(t) {
                console.log(t);
            }
        }), wx.showToast({
            title: "点赞成功",
            icon: "none",
            duration: 1500,
            success: function() {
                var e = "communityListOne[" + s + "].dianzan";
                console.log(e), n.setData((0, t.default)({}, e, 1));
            }
        })) : wx.showToast({
            title: "点赞是严肃的，不可以反悔哦！",
            icon: "none",
            duration: 1500
        });
    },
    previewImage: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.url, n = t.currentTarget.dataset.data;
        console.log(e, a, n), wx.previewImage({
            current: a,
            urls: n
        });
    },
    onLoad: function(t) {
        var a = this;
        a.getShowcategory(), console.log(t.index), null != t.index ? (a.setData({
            tabindex: t.index,
            tabpic: t.tabpic
        }), e.util.request({
            url: "entry/wxapp/share.Categorysharelist",
            data: {
                openid: wx.getStorageSync("openid"),
                tabindex: t.index,
                tabpid: t.tabpic,
                tabcid: 0
            },
            success: function(t) {
                console.log(t.data), a.setData({
                    communityListOne: t.data
                });
            }
        })) : (console.log("ssss"), a.getCategorysharelist());
    },
    getShowcategory: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/share.Allcategory",
            success: function(e) {
                console.log(e.data), t.setData({
                    depar: e.data
                });
            }
        });
    },
    getCategorysharelist: function() {
        var t = this, a = t.data.tabindex, n = t.data.tabpid, o = t.data.tabcid;
        console.log(a, n, o), e.util.request({
            url: "entry/wxapp/share.Categorysharelist",
            data: {
                openid: wx.getStorageSync("openid"),
                tabindex: a,
                tabpid: n,
                tabcid: o
            },
            success: function(e) {
                console.log(e.data), t.setData({
                    communityListOne: e.data
                });
            }
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