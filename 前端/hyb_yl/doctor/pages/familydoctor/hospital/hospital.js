var t = getApp();

Page({
    data: {
        needFix: !1,
        bannerHeight: 0,
        searchCont: "",
        openmore: !1,
        tabdex: "",
        popshow: !1,
        paixuList: [ {
            items: "回答次数",
            checked: !1
        }, {
            items: "处方次数",
            checked: !1
        }, {
            items: "响应时间",
            checked: !1
        } ],
        shequList: [ {
            items: "线上团队",
            checked: !1
        }, {
            items: "线下团队",
            checked: !1
        } ],
        keshiList: [ {
            items: "未解读",
            checked: !1
        }, {
            items: "已解读",
            checked: !1
        } ],
        list: [],
        keyword: "",
        order: "",
        type: "",
        shequ: "",
        page: 0,
        keshi: "",
        pagesize: 10,
        shequ_arr: [],
        shequdex: 0
    },
    shequclick: function(t) {
        var e = t.currentTarget.dataset.id;
        this.setData({
            shequdex: t.currentTarget.dataset.dex,
            page: 0,
            list: []
        });
        var a = this.data.keyword, s = this.data.order, i = this.data.type, h = this.data.keshi;
        this.getList(e, s, i, h, a);
    },
    getSearch: function(t) {
        this.setData({
            keyword: t.detail.value
        });
    },
    searchs: function() {
        this.setData({
            page: 0,
            list: []
        });
        var t = this.data.keyword, e = this.data.order, a = this.data.type, s = this.data.keshi, i = this.data.shequ;
        this.getList(i, e, a, s, t);
    },
    hidepop: function() {
        this.setData({
            popshow: !1,
            tabdex: ""
        });
    },
    tabbtn: function(t) {
        t.currentTarget.dataset.dex === this.data.tabdex ? this.setData({
            popshow: !1,
            tabdex: ""
        }) : (wx.pageScrollTo({
            scrollTop: 100
        }), this.setData({
            popshow: !0,
            tabdex: t.currentTarget.dataset.dex
        }));
    },
    itemchecked1: function(t) {
        var e = this.data.paixuList, a = (this.data.tabdex, t.currentTarget.dataset.dex);
        e.map(function(t) {
            t.checked = !1;
        }), e[a].checked = !0, this.setData({
            paixuList: e,
            popshow: !1,
            tabdex: "",
            order: a,
            paixuText: e[a].items,
            page: 0,
            list: []
        });
        var s = this.data.keyword, i = this.data.shequ, h = this.data.keshi, d = this.data.type;
        this.getList(i, a, d, h, s);
    },
    itemchecked2: function(t) {
        var e = this.data.shequList, a = (this.data.tabdex, t.currentTarget.dataset.dex);
        e.map(function(t) {
            t.checked = !1;
        }), e[a].checked = !0, this.setData({
            shequList: e,
            popshow: !1,
            tabdex: "",
            type: a,
            shequText: e[a].items,
            page: 0,
            list: []
        });
        var s = this.data.keyword, i = this.data.order, h = this.data.keshi, d = this.data.shequ;
        this.getList(d, i, a, h, s);
    },
    itemchecked3: function(t) {
        var e = this.data.keshiList, a = (this.data.tabdex, t.currentTarget.dataset.dex), s = t.currentTarget.dataset.id;
        e.map(function(t) {
            t.checked = !1;
        }), e[a].checked = !0, this.setData({
            keshiList: e,
            popshow: !1,
            tabdex: "",
            keshi: s,
            keshiText: e[a].ctname,
            page: 0,
            list: []
        });
        var i = this.data.keyword, h = this.data.order, d = this.data.type, r = this.data.shequ;
        this.getList(r, h, d, s, i);
    },
    openmore: function() {
        this.setData({
            openmore: !this.data.openmore
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        this.getShequ(), this.getKeshi_arr(), this.getList("", "", "", "", "");
    },
    getShequ: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.shequ",
            success: function(t) {
                e.setData({
                    shequ_arr: t.data
                });
            }
        });
    },
    getKeshi_arr: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/Team.keshi_one",
            success: function(t) {
                e.setData({
                    keshiList: t.data
                });
            }
        });
    },
    getList: function(e, a, s, i, h) {
        var d = this;
        t.util.request({
            url: "entry/wxapp/team.lists",
            data: {
                keyword: h,
                order: a,
                type: s,
                shequ: e,
                keshi: i,
                page: d.data.page,
                pagesize: d.data.pagesize
            },
            success: function(t) {
                var e = d.data.page + 1;
                d.setData({
                    list: d.data.list.concat(t.data),
                    page: e
                });
            }
        });
    },
    onPageScroll: function(t) {
        var e = t.scrollTop;
        this.data.needFix;
        e > 10 + this.data.bannerHeight ? this.setData({
            needFix: !0
        }) : e < 20 && this.setData({
            needFix: !1
        }), this.setData({
            bannerHeight: e
        });
    },
    doctoritem: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/servercenter/servercenter?id=" + e + "&title=" + a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data.keyword, e = this.data.order, a = this.data.type, s = this.data.keshi, i = this.data.shequ;
        this.getList(i, e, a, s, t);
    },
    onShareAppMessage: function() {}
});