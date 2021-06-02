var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = require("../../../../template/backstageTemplate.js"), a = (function(t) {}(), 
getApp()), s = 1;

Page({
    data: {
        curHdIndex: 1,
        index: 5,
        keyword: "",
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
        teamitem: [ "我创建的", "我加入的" ],
        teamindex: 0,
        myfound: [ {}, {}, {} ],
        myadd: [ {}, {} ],
        ispopup: !1,
        isstate: !1,
        isscreen: !1,
        popupindex: 0,
        screenindex: 0,
        compre: [ "综合排序", "回答次数", "星级评分", "响应时间" ],
        screen: [ "未审核", "已审核" ],
        doctitle: [ "医师", "主治医师", "副主任医师", "主任医师" ],
        depart: [ "皮肤科", "皮肤病科" ],
        stateitem1: -1,
        stateitem2: -1,
        stateitem3: -1,
        stateitem4: -1,
        hid: "",
        order: "",
        zhicheng: "",
        keshi: "",
        status: "",
        list: [],
        page: 0,
        pagesize: 10
    },
    statelistbtn: function(t) {
        var e = t.currentTarget.dataset.dexs, a = t.currentTarget.dataset.id;
        if (1 == e) {
            var s = t.currentTarget.dataset.index;
            this.setData({
                stateitem1: s,
                zhicheng: a
            });
        } else if (2 == e) {
            var i = t.currentTarget.dataset.index;
            this.setData({
                stateitem2: i,
                keshi: a
            });
        }
    },
    changes: function(t) {
        this.setData({
            keyword: t.detail.value
        });
    },
    search: function() {
        this.setData({
            list: [],
            page: 0
        }), this.getList();
    },
    resalts: function() {
        this.setData({
            stateitem1: -1,
            stateitem2: -1,
            stateitem3: -1,
            stateitem4: -1,
            zhicheng: "",
            keshi: "",
            page: 0,
            list: []
        });
    },
    statesuss: function() {
        this.setData({
            ispopup: !1,
            isstate: !1,
            isscreen: !1,
            page: 0,
            list: []
        }), this.getList();
    },
    teamindex: function() {},
    allisshow: function() {
        this.setData({
            ispopup: !0,
            isstate: !1,
            isscreen: !1
        });
    },
    isscreen: function() {
        this.setData({
            ispopup: !1,
            isstate: !1,
            isscreen: !0
        });
    },
    isstates: function() {
        this.setData({
            ispopup: !1,
            isstate: !0,
            isscreen: !1
        });
    },
    closeallshow: function() {
        this.setData({
            ispopup: !1,
            isstate: !1,
            isscreen: !1
        });
    },
    allitembtn: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            popupindex: e,
            ispopup: !1,
            isstate: !1,
            isscreen: !1,
            order: e,
            page: 0,
            list: []
        }), this.getList();
    },
    screenitembtn: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            screenindex: e,
            ispopup: !1,
            isstate: !1,
            isscreen: !1,
            status: e,
            page: 0,
            list: []
        }), this.getList();
    },
    teamtab: function(t) {
        var e = t.currentTarget.dataset.dex;
        this.setData({
            teamindex: e
        });
    },
    createteam: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/createTeam/createTeam"
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
                state: 1
            },
            success: function(t) {
                console.log(t), e.setData({
                    communityListOne: t.data
                });
            }
        }) : this.getAllshare();
    },
    toLike: function(e) {
        var s = this, i = s.data.communityListOne, n = e.currentTarget.dataset.index, o = e.currentTarget.dataset.a_id, r = wx.getStorageSync("openid");
        0 == i[n].dianzan ? (a.util.request({
            url: "entry/wxapp/share.userdianz",
            data: {
                parentid: o,
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
                var e = "communityListOne[" + n + "].dianzan";
                console.log(e), s.setData((0, t.default)({}, e, 1));
            }
        })) : wx.showToast({
            title: "点赞是严肃的，不可以反悔哦！",
            icon: "none",
            duration: 1500
        });
    },
    onLoad: function(t) {
        e.tabbar("tabBar", 1, this);
        var a = this, i = wx.getStorageSync("color"), n = t.hid;
        console.log(n), a.setData({
            bgc: i,
            hid: n
        }), s = 1, a.getAllshare(s);
        i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), a.getAlldoczhicheng(), a.getList(), a.getkeshi();
    },
    getkeshi: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/team.keshi_twos",
            success: function(e) {
                t.setData({
                    keshi_arr: e.data
                });
            }
        });
    },
    getAlldoczhicheng: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/zhuanjia.getzhichenglist",
            success: function(e) {
                console.log(e), t.setData({
                    doctitle: e.data
                });
            }
        });
    },
    getList: function() {
        var t = this, e = t.data.hid, s = t.data.keyword, i = t.data.order, n = t.data.zhicheng, o = t.data.keshi, r = t.data.status;
        a.util.request({
            url: "entry/wxapp/team.getlistall",
            data: {
                hid: e,
                keyword: s,
                order: i,
                zhicheng: n,
                keshi: o,
                status: r,
                page: t.data.page,
                pagesize: t.data.pagesize
            },
            success: function(e) {
                console.log(e);
                var a = t.data.page + 1;
                t.setData({
                    list: t.data.list.concat(e.data),
                    page: a
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getList();
    },
    onShareAppMessage: function() {},
    addCommunity: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/addDynamic/addDynamic"
        });
    },
    getAllshare: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/share.allshare",
            data: {
                openid: wx.getStorageSync("openid"),
                page: t,
                pagback: 5,
                state: 1
            },
            success: function(t) {
                console.log(t), t.data.length < 5 && e.setData({
                    ismore: !1
                });
                var a = e.data.itemList;
                console.log(a);
                for (var s = t.data.length, i = 0; i < s; i++) a.push(t.data[i]);
                wx.hideLoading(), e.setData({
                    communityListOne: a,
                    page: 1
                });
            }
        });
    },
    previewImage: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.url, s = t.currentTarget.dataset.data;
        console.log(e, a, s), wx.previewImage({
            current: a,
            urls: s
        });
    },
    scrolltolower: function() {
        console.log(this.data.ismore), this.data.ismore && (s++, console.log(s), this.getAllshare(s));
    },
    shenhe: function(t) {
        console.log(t);
        var e = this, s = t.currentTarget.dataset.zid, i = t.currentTarget.dataset.exa;
        e.data.hid;
        a.util.request({
            url: "entry/wxapp/zhuanjia.updateexa",
            data: {
                zid: s,
                exa: i
            },
            success: function(t) {
                console.log(t), e.getList();
            }
        });
    }
});