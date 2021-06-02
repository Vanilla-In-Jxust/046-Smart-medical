(function(t) {
    t && t.__esModule;
})(require("../../../../utils/toot.js")), require("../../../../utils/bmap-wx.min.js");

var t = getApp();

Page({
    data: {
        weekdex: 0,
        pinyin: "",
        ismore: !0,
        list: [],
        itemList: [],
        page: 0,
        pagesize: 10,
        hid: "",
        long: "",
        inquiry: 0,
        needFix: !1,
        bannerHeight: 0,
        searchCont: "",
        openmore: !1,
        tabdex: "",
        popshow: !1,
        keshi_two: "",
        ser_key: "",
        order: "",
        zhicheng: "",
        zongheList: [ {
            items: "综合排序",
            checked: !1
        }, {
            items: "回答次数",
            checked: !1
        }, {
            items: "星级评分",
            checked: !1
        }, {
            items: "响应时间",
            checked: !1
        } ],
        shaixuanList: [ {
            items: "价格区间"
        }, {
            items: "医生职称"
        } ],
        jiage: [],
        keyword: "",
        biaoqian: "",
        shequlist: [],
        shequdex: 0,
        typs: ""
    },
    weekitem: function(t) {
        this.setData({
            weekdex: t.currentTarget.dataset.dex
        });
    },
    typesclick1: function(t) {
        var e = this.data, a = (t.currentTarget.dataset.index, t.currentTarget.dataset.dex);
        this.data.section2;
        e.section2.map(function(t) {
            t.checked = !1;
        }), e.section2[a].checked = !0, this.setData({
            section2: e.section2,
            zhicheng: e.section2[a].id
        });
    },
    resultclick: function() {
        for (var t = this.data.shaixuanList, e = 0; e < t.length; e++) for (var a = t[e].section, i = 0; i < a.length; i++) a[i].checked = !1;
        this.setData({
            shaixuanList: t
        });
    },
    submitclick: function() {
        var t = this.data.keyword, e = this.data.order, a = this.data.zhicheng, i = this.data.biaoqian;
        this.setData({
            page: 0,
            list: [],
            tabdex: ""
        }), console.log(this.data.tabdex), this.getList(t, e, a, i);
    },
    getSearch: function(t) {
        this.setData({
            keyword: t.detail.value
        });
    },
    search: function(t) {
        var e = this.data.keyword, a = this.data.order, i = this.data.zhicheng, s = this.data.biaoqian;
        this.setData({
            page: 0,
            list: []
        }), this.getList(e, a, i, s);
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
        }) : this.setData({
            popshow: !0,
            tabdex: t.currentTarget.dataset.dex
        });
    },
    itemchecked: function(t) {
        var e = t.currentTarget.dataset.text, a = t.currentTarget.dataset.dex;
        this.setData({
            page: 0,
            pagesize: 10,
            popshow: !1,
            list: [],
            tabdex: "",
            order: a,
            zongheText: e
        });
        var i = this.data.keyword, s = this.data.zhicheng, n = this.data.biaoqian;
        this.getList(i, a, s, n);
    },
    openmore: function() {
        this.setData({
            openmore: !this.data.openmore
        });
    },
    readyreport: function() {
        return 5 == this.data.inquiry ? (wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=5"
        }), !1) : 6 == this.data.inquiry ? (wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/orderedtime/orderedtime?inquiry=6"
        }), !1) : void 0;
    },
    onLoad: function(t) {
        console.log(t);
        var e = wx.getStorageSync("color"), a = t.tid, i = t.hid, s = t.ser_key, n = t.leixing;
        this.setData({
            tid: a,
            hid: i,
            ser_key: s,
            leixing: n,
            keshi_two: t.id,
            money: t.money,
            name: t.name
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.getAlldoczhicheng(), this.getList("", "", "", ""), this.getksbiaoqian();
    },
    getAlldoczhicheng: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.getzhichenglist",
            success: function(t) {
                console.log(t), e.setData({
                    section2: t.data
                });
            }
        });
    },
    getList: function(e, a, i, s) {
        var n = this;
        t.util.request({
            url: "entry/wxapp/green.lists",
            data: {
                keyword: e,
                hid: n.data.hid,
                keshi_two: n.data.keshi_two,
                ser_key: n.data.ser_key,
                order: a,
                zhicheng: i,
                page: n.data.page,
                pagesize: n.data.pagesize,
                biaoqian: s
            },
            success: function(t) {
                var e = n.data.page + 1;
                n.setData({
                    list: n.data.list.concat(t.data),
                    page: e
                }), wx.hideLoading({});
            }
        });
    },
    navigator: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.zid;
        "" != a && "undefined" != a && null != a || (a = "");
        var i = this.data.ser_key, s = this.data.money, n = this.data.hid, o = this.data.name;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwens/zhuanjiatiwens?did=" + e + "&server=" + i + "&money=" + s + "&hid=" + n + "&keshi_two=" + this.data.keshi_two + "&tid=" + this.data.tid + "&leixing=" + this.data.leixing + "&name=" + o + "&zid=" + a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {},
    shequclick: function(t) {
        var e = t.currentTarget.dataset.biaoqian, a = this.data.keyword, i = this.data.order, s = this.data.zhicheng;
        this.setData({
            shequdex: t.currentTarget.dataset.dex,
            page: 0,
            list: [],
            biaoqian: e
        }), this.getList(a, i, s, e);
    },
    getksbiaoqian: function() {
        var e = this, a = e.data.keshi_two;
        t.util.request({
            url: "entry/wxapp/index.getksbiaoqian",
            data: {
                id: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    shequlist: t.data
                });
            }
        });
    },
    onReachBottom: function() {
        this.data.ismore && (wx.showLoading({
            title: "加载中"
        }), this.getList(this.data.keyword, this.data.order, this.data.zhicheng, this.data.biaoqian));
    }
});