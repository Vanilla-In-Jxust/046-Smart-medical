var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), a = (function(t) {}(), 
getApp()), e = 1;

Page({
    data: {
        list_t: [],
        tabpid: 0,
        curHdIndex: 1,
        index: 5,
        pageOne: 0,
        pageTwo: 0,
        prenumber: 20,
        tsid: 1,
        loadingBoo: !0,
        moreBooOne: !0,
        moreBooTwo: !0,
        communityListOne: [],
        communityListTwo: [],
        url: "patient/community/list/",
        oneBoo: !1,
        twoBoo: !1,
        mask: !0,
        currindex: 0,
        itemList: [],
        ismore: !0,
        bigMask: !1,
        footer: {
            footerTab: 2,
            footerlist: [ {
                text: "首页",
                img: "/hyb_yl/images/tab01.png",
                selimg: "/hyb_yl/images/tab1.png",
                url: "/hyb_yl/tabBar/index/index"
            }, {
                text: "资讯",
                img: "/hyb_yl/images/tab02.png",
                selimg: "/hyb_yl/images/tab2.png",
                url: "/hyb_yl/tabBar/jibingyufang/jibingyufang"
            }, {
                text: "分享",
                img: "/hyb_yl/images/tab03.png",
                selimg: "/hyb_yl/images/tab3.png",
                url: "/hyb_yl/tabBar/community/community"
            }, {
                text: "药房",
                img: "/hyb_yl/images/tab04.png",
                selimg: "/hyb_yl/images/tab4.png",
                url: "/hyb_yl/tabBar/shop/shop"
            }, {
                text: "问诊",
                img: "/hyb_yl/images/tab04.png",
                selimg: "/hyb_yl/images/tab4.png",
                url: "/hyb_yl/tabBar/fastnavigate/fastnavigate"
            }, {
                text: "我的",
                img: "/hyb_yl/images/tab05.png",
                selimg: "/hyb_yl/images/tab5.png",
                url: "/hyb_yl/tabBar/my/my"
            } ]
        },
        tabindex: 0,
        deparshow: !1
    },
    tabChose: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            tabchoseStyle: a,
            tabcid: t.currentTarget.dataset.tabcid
        });
    },
    departab: function(t) {
        var a = t.currentTarget.dataset.dex;
        if (console.log(a), 0 == a) var e = 0; else e = t.currentTarget.dataset.tabpic;
        this.setData({
            tabindex: a,
            tabpid: e,
            page: 0,
            communityListOne: []
        }), this.getAllshare(0, e);
    },
    deparlist: function() {
        this.data.deparshow ? this.setData({
            deparshow: !1
        }) : this.setData({
            deparshow: !0
        });
    },
    departabs: function(t) {
        var a = t.currentTarget.dataset.dex;
        if (0 == a) var e = 0; else e = t.currentTarget.dataset.tabpic;
        this.setData({
            tabindex: a,
            deparshow: !1,
            tabpid: e,
            page: 0,
            communityListOne: []
        }), this.getAllshare(0, e);
    },
    navto: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    },
    goback: function(t) {
        var a = t.currentTarget.dataset.index + 1, e = t.currentTarget.dataset.tabpic;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/dynamic/dynamic?index=" + a + "&tabpic=" + e
        });
    },
    list: function(t) {
        var e = this;
        console.log(t), 1 == t.currentTarget.dataset.id ? (console.log("123"), e.setData({
            curHdIndex: 1
        })) : e.setData({
            curHdIndex: 2
        }), 2 == t.currentTarget.dataset.id ? a.util.request({
            url: "entry/wxapp/share.remen",
            data: {
                openid: wx.getStorageSync("openid"),
                state: 0
            },
            success: function(t) {
                console.log(t), e.setData({
                    communityListOne: t.data
                });
            }
        }) : this.getAllshare(0, 0);
    },
    toLike: function(e) {
        var n = this, i = n.data.communityListOne, o = e.currentTarget.dataset.index, s = e.currentTarget.dataset.a_id, r = wx.getStorageSync("openid");
        0 == i[o].dianzan ? (a.util.request({
            url: "entry/wxapp/share.userdianz",
            data: {
                parentid: s,
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
                var a = "communityListOne[" + o + "].dianzan";
                console.log(a), n.setData((0, t.default)({}, a, 1));
            }
        })) : wx.showToast({
            title: "点赞是严肃的，不可以反悔哦！",
            icon: "none",
            duration: 1500
        });
    },
    searchbtn: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/search/search"
        });
    },
    dymore: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/dynamic/dynamic"
        });
    },
    onLoad: function(t) {
        var n = this;
        a.util.request({
            url: "entry/wxapp/share.sharesetting",
            success: function(t) {
                console.log(t.data), n.setData({
                    sharesetting: t.data
                });
            }
        }), this.getfooter();
        var i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
        var o = t.index;
        n.setData({
            bgc: i,
            index: o
        }), e = 1, n.getAllshare(e, n.data.tabpid), n.getShowcategory();
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.getStorageSync("openid");
        console.log(t), t ? this.setData({
            bigMask: !0
        }) : this.setData({
            bigMask: !1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    addCommunity: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/addDynamic/addDynamic"
        });
    },
    getShowcategory: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/share.showcategory",
            success: function(a) {
                t.setData({
                    consulList: a.data
                });
            }
        });
    },
    getAllshare: function(t, e) {
        var n = this;
        n.data.tabpid = e, console.log(n.data.tabpid), a.util.request({
            url: "entry/wxapp/share.allshare",
            data: {
                openid: wx.getStorageSync("openid"),
                page: t,
                pagback: 5,
                state: 0,
                labelid: n.data.tabpid
            },
            success: function(t) {
                console.log(t), t.data.length < 5 && n.setData({
                    ismore: !1
                }), wx.hideLoading(), n.setData({
                    communityListOne: n.data.communityListOne.concat(t.data),
                    page: 1
                });
            }
        });
    },
    previewImage: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index, e = t.currentTarget.dataset.url, n = t.currentTarget.dataset.data;
        console.log(a, e, n), wx.previewImage({
            current: e,
            urls: n
        });
    },
    scrolltolower: function() {
        console.log(this.data.ismore), this.data.ismore && (e++, console.log(e), this.getAllshare(e, this.data.tabpid));
    },
    getfooter: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.footerlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                var e = {
                    footerTab: t.data.index,
                    footerlist: a.data
                };
                t.setData({
                    footer: e
                }), console.log(t.data.footer);
            }
        });
    }
});