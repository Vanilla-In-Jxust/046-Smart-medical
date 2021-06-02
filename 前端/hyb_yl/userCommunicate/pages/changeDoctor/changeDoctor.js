var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = (function(t) {
    t && t.__esModule;
}(require("../../../../utils/toot.js")), require("../../../../utils/bmap-wx.min.js"), 
getApp()), a = require("../../../../utils/citys.js");

Page({
    data: {
        isLoading: !0,
        provinces: [],
        provincesdex: 0,
        citys: [],
        citysdex: 0,
        tablist1: [ "全部地区", "所属级别" ],
        zhic: 0,
        page: 0,
        pagback: 3,
        weekdex: 0,
        pinyin: "",
        ismore: !0,
        weeks: "",
        itemList: [],
        list: [],
        week: "",
        date: "",
        hid: "",
        long: "",
        inquiry: 0,
        needFix: !1,
        bannerHeight: 0,
        searchlist: [ "列表一", "列表二", "列表三", "列表四", "列表五", "列表六" ],
        searchCont: "",
        openmore: !1,
        tabdex: "",
        popshow: !1,
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
        typeList: [ {
            items: "图文问诊",
            checked: !1
        }, {
            items: "视频问诊",
            checked: !1
        }, {
            items: "电话问诊",
            checked: !1
        }, {
            items: "开药问诊",
            checked: !1
        }, {
            items: "手术快约",
            checked: !1
        } ],
        city: "",
        shaixuanList: [ {
            items: "价格区间"
        }, {
            items: "医生职称"
        } ],
        jiage: [],
        yisheng: [ {
            items: "主治医生",
            checked: !1
        }, {
            items: "主治医生2",
            checked: !1
        } ],
        shequlist: [],
        shequdex: 0,
        typs: "",
        dex1: 0
    },
    weekitem: function(t) {
        this.setData({
            weekdex: t.currentTarget.dataset.dex,
            date: t.currentTarget.dataset.data,
            week: t.currentTarget.dataset.week,
            weeks: t.currentTarget.dataset.weeks
        });
        var e = t.currentTarget.dataset.weeks;
        this.setData({
            list: [],
            itemList: [],
            weeks: e,
            page: 0
        }), this.getksbiaoqian(0, e);
    },
    typesclick: function(t) {
        var e = this.data, a = (t.currentTarget.dataset.index, t.currentTarget.dataset.dex);
        e.jiage.map(function(t) {
            t.checked = !1;
        }), e.jiage[a].checked = !0, this.setData({
            jiage: e.jiage,
            jiageText: e.jiage[a].items
        });
    },
    typesclick1: function(t) {
        var e = this.data, a = (t.currentTarget.dataset.index, t.currentTarget.dataset.dex);
        this.data.section2;
        e.section2.map(function(t) {
            t.checked = !1;
        }), e.section2[a].checked = !0, this.setData({
            section2: e.section2,
            yishengText: e.section2[a].job_name
        });
    },
    resultclick: function() {
        for (var t = this.data.shaixuanList, e = 0; e < t.length; e++) for (var a = t[e].section, i = 0; i < a.length; i++) a[i].checked = !1;
        this.setData({
            shaixuanList: t
        });
    },
    submitclick: function() {
        this.data.id;
        var t = this.data.dex, e = this.data.biaoqian, a = (this.data.jiageText, this.data.yishengText), i = this.data.pinyin, s = this.data.hid;
        this.setData({
            page: 0,
            pinyin: i,
            dex1: t,
            popshow: !1,
            tabdex: "",
            biaoqian: e,
            list: [],
            hid: s,
            zhic: a
        }), this.getAlldoclist(e);
    },
    shequclick: function(t) {
        var e = t.currentTarget.dataset.biaoqian;
        this.data.id, this.data.pinyin;
        this.setData({
            shequdex: t.currentTarget.dataset.dex,
            page: 0,
            list: []
        }), this.getAlldoclist(e);
    },
    getSearch: function(t) {
        for (var e = this.data.list, a = [], i = 0; i < e.length; i++) -1 != e[i].z_name.indexOf(t.detail.value) && a.push(e[i]);
        this.setData({
            searchCont: t.detail.value,
            searchArr: a
        });
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
        var e = t.currentTarget.dataset.text, a = t.currentTarget.dataset.dex, i = (this.data.id, 
        this.data.biaoqian);
        this.setData({
            popshow: !1,
            tabdex: "",
            zongheText: e,
            list: [],
            dex1: a,
            page: 0
        }), this.getAlldoclist(i);
    },
    itemchecked1: function(t) {
        this.data.id;
        var e = this.data.dex1, a = (t.currentTarget.dataset.server_key, t.currentTarget.dataset.text), i = this.data.biaoqian;
        this.setData({
            popshow: !1,
            typeText: a,
            tabdex: "",
            tit: a,
            dex1: e,
            list: [],
            page: 0
        }), this.getAlldoclist(i);
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
        var a = this, i = wx.getStorageSync("color"), s = t.id, n = t.hid;
        if (t.tid) {
            var r = t.tid;
            a.setData({
                tid: r
            });
        }
        if (null != n && "undefined" != n && a.setData({
            hid: n
        }), t.ser_key && "undefined" !== t.ser_key) {
            var d = t.ser_key;
            a.setData({
                pinyin: d
            });
        }
        a.getServer_name();
        var o = t.typs;
        null != o && a.setData({
            typs: o
        });
        var u = t.tit;
        if (t.conets && "undefined" !== t.conets) {
            var h = JSON.parse(t.conets);
            a.setData({
                conets: h
            });
        }
        var c = t.j_id;
        if (a.setData({
            id: s,
            tit: u,
            j_id: c
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), t.long && (console.log("2"), this.setData({
            long: t.long
        }), "shoushu" == t.long)) {
            wx.setNavigationBarTitle({
                title: "手术快约"
            });
            var l = this.data.tablist;
            l[1].types = "手术快约", l[1].list.map(function(t) {
                "手术快约" == t.items && (t.checked = !0);
            }), this.setData({
                tablist: l,
                inquiry: 8
            });
        }
        e.util.request({
            url: "entry/wxapp/index.serverpxlist",
            success: function(t) {
                console.log(t), a.setData({
                    ktypes: t.data
                });
            }
        }), "yuanchengguahao" == t.ser_key ? a.getSeven() : (a.getAlldoczhicheng(), a.getksbiaoqian()), 
        a.getHotcity();
    },
    getHotcity: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.hot_address",
            success: function(e) {
                for (var i = [], s = 0; s < e.data.length; s++) i.push(e.data[s].name);
                a.init(t);
                var n = t.data.cityData, r = [];
                r.push("热门城市");
                for (var d = 0; d < n.length; d++) r.push(n[d].name);
                t.setData({
                    provinces: r,
                    citys: i
                });
            }
        });
    },
    cityitem: function(e) {
        var a, i = e.currentTarget.dataset.dex, s = e.currentTarget.dataset.name, n = this.data.tablist1, r = this.data.biaoqian;
        n[0] = s, this.setData((a = {
            tablist1: n,
            citysdex: i,
            popshow: !1,
            tabdex: "",
            page: 0,
            hospitallm: [],
            city: s
        }, (0, t.default)(a, "page", 0), (0, t.default)(a, "list", []), a)), this.getAlldoclist(r);
    },
    provinceitem: function(t) {
        var e = t.currentTarget.dataset.dex, a = this.data.provincesdex, i = this.data.cityData;
        if (e != a) if (e > 0) {
            for (var s = e - 1, n = [], r = 0; r < i[s].sub.length; r++) n.push(i[s].sub[r].name);
            this.setData({
                citys: n,
                provincesdex: e
            });
        } else if (0 == e) {
            this.setData({
                citys: [ "全国", "北京", "上海", "广州", "杭州", "西安", "武汉" ],
                provincesdex: e
            });
        }
    },
    getSeven: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.seven",
            success: function(e) {
                t.setData({
                    seven: e.data,
                    week: e.data[0].week,
                    date: e.data[0].date,
                    weeks: e.data[0].weeks
                }), t.getksbiaoqian();
            }
        });
    },
    getServer_name: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.server_name",
            data: {
                key_words: t.data.pinyin
            },
            success: function(e) {
                console.log(e.data.titles), t.setData({
                    tit: e.data.titles,
                    typeText: e.data.titles
                });
            }
        });
    },
    navigator: function(t) {
        var e = t.currentTarget.dataset.zid, a = t.currentTarget.dataset.server, i = this.data.pinyin, s = t.currentTarget.dataset.money, n = this.data.typs, r = JSON.stringify(this.data.conets);
        if ("yuanchengkaifang" == i) {
            var d = this.data.j_id;
            return wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?key_words=" + i + "&conets=" + r + "&zid=" + e + "&j_id=" + d + "&typs=" + n + "&money=" + s + "&arr=undefined"
            }), !1;
        }
        if ("" == i) return wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + e + "&money=" + s
        }), !1;
        if ("shipinwenzhen" == i || "tuwenwenzhen" == i || "dianhuajizhen" == i || "sirenyisheng" == i) {
            var o = this.data.inquiry;
            return wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?inquiry=" + o + "&zid=" + e + "&server=" + a + "&money=" + s
            }), !1;
        }
        if ("shoushukuaiyue" == i) {
            var u = this.data.inquiry;
            return wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?inquiry=" + u + "&zid=" + e + "&server=" + a + "&typs=" + n + "&money=" + s
            }), !1;
        }
        if ("tijianjiedu" == i) {
            var h = this.data.inquiry;
            return this.data.tid ? wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?inquiry=" + h + "&zid=" + e + "&server=" + a + "&money=" + s + "&tid=" + this.data.tid
            }) : wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?inquiry=" + h + "&zid=" + e + "&server=" + a + "&money=" + s
            }), !1;
        }
        return "yuanchengguahao" == i ? (wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/orderedtime/orderedtime?inquiry=1&zid=" + e + "&server=" + a + "&money=" + s
        }), !1) : void 0;
    },
    onReady: function() {
        this.getAlldoc();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {},
    getAlldoc: function() {
        this.data.id;
        var t = this.data.pinyin;
        console.log(t);
    },
    getksbiaoqian: function() {
        var t = this, a = t.data.id;
        t.data.pinyin;
        e.util.request({
            url: "entry/wxapp/index.getksbiaoqian",
            data: {
                id: a
            },
            success: function(e) {
                console.log(e);
                var a = e.data[0];
                t.getAlldoclist(a), t.setData({
                    shequlist: e.data,
                    biaoqian: a
                });
            }
        });
    },
    getAlldoclist: function(t) {
        var a = this, i = a.data.id, s = a.data.pinyin, n = a.data.weeks, r = a.data.dex1, d = a.data.zhic;
        console.log(d, r, a.data.page, t, n, s), e.util.request({
            url: "entry/wxapp/zhuanjia.getlistall",
            data: {
                id: i,
                biaoqian: t,
                page: a.data.page,
                pagback: a.data.pagback,
                server_key: s,
                hid: a.data.hid,
                week: n,
                zhic: d,
                dex1: r,
                city: a.data.city
            },
            success: function(e) {
                console.log(e);
                var i = a.data.page + 1;
                a.setData({
                    list: a.data.list.concat(e.data),
                    page: i,
                    biaoqian: t,
                    isLoading: !1
                });
            }
        });
    },
    onReachBottom: function() {
        var t = this.data.biaoqian;
        this.data.page;
        this.getAlldoclist(t);
    },
    getAlldoczhicheng: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.getzhichenglist",
            success: function(e) {
                console.log(e), t.setData({
                    section2: e.data
                });
            }
        });
    }
});