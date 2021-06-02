var t = getApp();

Page({
    data: {
        currentIndex: 1,
        currentResult: 0,
        joinCurrentResult: 0,
        myTeamList: [],
        joinTeamList: [],
        loadingBoo: !0,
        moreBooTwo: !0,
        moreBooOne: !0,
        tablistIndex: 1,
        tablistIndex1: 1,
        tabshow: !0,
        tabshow1: !1,
        tabshow2: !0,
        tabshow12: !1
    },
    teaminfo: function(t) {
        var a = t.currentTarget.dataset.t_id, e = t.currentTarget.dataset.teamname, o = t.currentTarget.dataset.teampic, s = t.currentTarget.dataset.teamtext, n = t.currentTarget.dataset.z_name, i = t.currentTarget.dataset.z_thumbs, r = t.currentTarget.dataset.zid, u = t.currentTarget.dataset.yao_type;
        s = t.currentTarget.dataset.teamtext;
        3 == u ? wx.showToast({
            title: "申请中，等待通过",
            icon: "none"
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/teamDetails/teamDetails?t_id=" + a + "&teampic=" + o + "&zid=" + r + "&teamname=" + e + "&z_thumbs=" + i + "&z_name=" + n + "&teamtext=" + s
        });
    },
    tapFun: function(t) {
        var a = this;
        this.setData({
            currentIndex: t.target.dataset.current,
            loadingBoo: !0,
            noneFlag: !1,
            typeFlag: !1
        }), 2 == a.data.currentIndex ? (a.setData({
            moreBooTwo: !0,
            joinCurrentResult: 0
        }), a.getJointeamList(a)) : a.setData({
            moreBooOne: !0,
            currentResult: 0
        });
    },
    tapFun1: function(t) {
        var a = this;
        console.log(t.target.dataset.current), this.setData({
            tablistIndex: t.target.dataset.current,
            loadingBoo: !0,
            noneFlag: !1,
            typeFlag: !1,
            moreBooOne: !0
        }), 1 == t.target.dataset.current ? (this.setData({
            tabshow: !0,
            tabshow1: !1,
            moreBooOne: !0,
            currentResult: 0
        }), a.getTeamList(a)) : 2 == t.target.dataset.current && (this.setData({
            tabshow: !1,
            tabshow1: !0,
            moreBooOne: !0,
            currentResult: 0
        }), a.getTeamList(a));
    },
    tapFun2: function(t) {
        var a = this;
        console.log(t.target.dataset.current), this.setData({
            tablistIndex1: t.target.dataset.current,
            loadingBoo: !0,
            noneFlag: !1,
            typeFlag: !1,
            moreBooTwo: !0
        }), 1 == t.target.dataset.current ? (this.setData({
            tabshow2: !0,
            tabshow12: !1,
            moreBooTwo: !0,
            joinCurrentResult: 0
        }), a.getJointeamList(a)) : 2 == t.target.dataset.current && (this.setData({
            tabshow2: !1,
            tabshow12: !0,
            moreBooTwo: !0,
            joinCurrentResult: 0
        }), a.getJointeamList(a));
    },
    onLoad: function(t) {
        var a = t.zid;
        this.setData({
            jobType: t.jobType || "",
            token: wx.getStorageSync("log"),
            zid: a
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this, e = a.data.zid;
        if (2 == a.data.tablistIndex) var o = 1; else o = 0;
        console.log(o), t.util.request({
            url: "entry/wxapp/studio.yihu",
            data: {
                zid: e,
                teamtype: o
            },
            success: function(t) {
                console.log(t), a.setData({
                    myTeamList: t.data.data
                });
            }
        });
    },
    getMoreMyTeam: function(t) {
        this(t = this).data.moreBooOne && this.data.loadingBoo && (t.setData({
            loadingBoo: !1
        }), t.getTeamList(t));
    },
    getMoreOtherTeam: function(t) {
        (t = this).data.moreBooTwo && this.data.loadingBoo && (t.setData({
            loadingBoo: !1
        }), t.getJointeamList(t));
    },
    join: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/teamListJoin/teamListJoin"
        });
    },
    getTeamList: function(a) {
        var e = this, o = a.options.zid;
        2 == a.__viewData__.tablistIndex ? t.util.request({
            url: "entry/wxapp/studio.yihu",
            data: {
                zid: o,
                teamtype: 1
            },
            success: function(t) {
                console.log(t), e.setData({
                    myTeamList: t.data.data
                });
            }
        }) : t.util.request({
            url: "entry/wxapp/studio.yihu",
            data: {
                zid: o,
                teamtype: 0
            },
            success: function(t) {
                console.log(t), e.setData({
                    myTeamList: t.data.data
                });
            }
        });
    },
    getJointeamList: function(a) {
        var e = this, o = a.options.zid, s = e.data.tablistIndex1;
        t.util.request({
            url: "entry/wxapp/studio.myjoinstudio",
            data: {
                zid: o,
                teamtype: s
            },
            cachetime: "30",
            success: function(t) {
                console.log(t), e.setData({
                    joinTeamList: t.data
                });
            }
        });
    }
});