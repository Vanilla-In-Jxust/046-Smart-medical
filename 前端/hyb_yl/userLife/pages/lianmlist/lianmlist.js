var t = getApp(), a = require("../../../../utils/citys.js");

Page({
    data: {
        provinces: [],
        provincesdex: 0,
        citys: [],
        citysdex: 0,
        needFix: !1,
        bannerHeight: 0,
        tabdex: "",
        popshow: !1,
        money: "",
        tablist: [ "全部地区", "所属级别" ],
        sortlists: [ {
            items: "距离最近",
            checked: !1
        }, {
            items: "二甲医院",
            checked: !1
        }, {
            items: "三甲医院",
            checked: !1
        }, {
            items: "儿童医院",
            checked: !1
        }, {
            items: "骨科甲医院",
            checked: !1
        } ],
        level_arr: [],
        level: "",
        hospitallm: [],
        page: 0,
        pagesize: 10,
        order: "",
        keyword: "",
        city: "",
        typs: ""
    },
    onLoad: function(t) {
        this.getallHospital("", "", ""), this.getLevel();
        var a = t.leixing, e = t.id, i = t.money;
        "" != i && null != i && this.setData({
            money: i
        }), "" != a && null != a && this.setData({
            leixing: a
        }), "" != e && null != e && this.setData({
            id: e
        });
        var s = t.pinyin, n = t.typs, o = t.name;
        null != o && this.setData({
            name: o
        }), null != n && this.setData({
            typs: n
        });
        var r = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), this.getHotcity(), this.setData({
            pinyin: s
        });
    },
    getHotcity: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.hot_address",
            success: function(t) {
                for (var i = [], s = 0; s < t.data.length; s++) i.push(t.data[s].name);
                a.init(e);
                var n = e.data.cityData, o = [];
                o.push("热门城市");
                for (var r = 0; r < n.length; r++) o.push(n[r].name);
                e.setData({
                    provinces: o,
                    citys: i
                });
            }
        });
    },
    getSearch: function(t) {
        var a = t.detail.value;
        this.setData({
            keyword: a
        });
    },
    search: function() {
        var t = this.data.keyword, a = this.data.order, e = this.data.city;
        this.setData({
            page: 0,
            hospitallm: []
        }), this.getallHospital(t, e, a);
    },
    getLevel: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.getLevel",
            success: function(t) {
                a.setData({
                    level_arr: t.data
                });
            }
        });
    },
    provinceitem: function(t) {
        var a = t.currentTarget.dataset.dex, e = this.data.provincesdex, i = this.data.cityData;
        if (a != e) if (a > 0) {
            for (var s = a - 1, n = [], o = 0; o < i[s].sub.length; o++) n.push(i[s].sub[o].name);
            this.setData({
                citys: n,
                provincesdex: a
            });
        } else if (0 == a) {
            this.setData({
                citys: [ "全国", "北京", "上海", "广州", "杭州", "西安", "武汉" ],
                provincesdex: a
            });
        }
    },
    cityitem: function(t) {
        var a = t.currentTarget.dataset.dex, e = t.currentTarget.dataset.name, i = this.data.tablist;
        i[0] = e, this.setData({
            tablist: i,
            citysdex: a,
            popshow: !1,
            tabdex: "",
            page: 0,
            hospitallm: []
        });
        var s = this.data.keyword, n = this.data.order;
        this.getallHospital(s, e, n);
    },
    hzanl: function(t) {
        var a = t.currentTarget.dataset.hid, e = this.data.typs, i = this.data.leixing, s = this.data.id, n = this.data.money, o = this.data.name;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/faxian/faxian?hid=" + a + "&typs=" + e + "&pinyin=" + this.data.pinyin + "&leixing=" + i + "&id=" + s + "&money=" + n + "&name=" + o
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
    itemchecked: function(t) {
        this.data.tabdex, t.currentTarget.dataset.dex, this.data.tablist;
        var a = t.currentTarget.dataset.id;
        this.setData({
            order: a,
            hospitallm: [],
            page: 0,
            popshow: !1,
            tabdex: ""
        });
        var e = this.data.keyword, i = this.data.city;
        this.getallHospital(e, i, a);
    },
    hidepop: function() {
        this.setData({
            popshow: !1,
            tabdex: ""
        });
    },
    onPageScroll: function(t) {
        var a = t.scrollTop;
        this.data.needFix;
        a > 10 + this.data.bannerHeight ? this.setData({
            needFix: !0
        }) : a < 20 && this.setData({
            needFix: !1
        }), this.setData({
            bannerHeight: a
        });
    },
    preventTouchMove: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data.keyword, a = this.data.order, e = this.data.city;
        this.getallHospital(t, e, a);
    },
    getallHospital: function(a, e, i) {
        var s = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.hospital",
            data: {
                page: s.data.page,
                pagesize: s.data.pagesize,
                keyword: a,
                city: e,
                order: i
            },
            success: function(t) {
                console.log(t);
                var a = s.data.page + 1;
                s.setData({
                    page: a,
                    hospitallm: s.data.hospitallm.concat(t.data)
                });
            }
        });
    }
});