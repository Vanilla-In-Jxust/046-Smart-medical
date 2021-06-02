var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page((t = {
    data: {
        current: 0,
        pageWrapCount: [],
        pIndex: [],
        page: 0,
        pagesize: 10,
        list: [],
        keyword: "",
        keshi_two: ""
    },
    onLoad: function(t) {
        this.getKeshi_one();
    },
    getKeshi_one: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/answer.keshi_arr",
            data: {
                type: "jibing"
            },
            success: function(e) {
                t.setData({
                    keshi_arr: e.data,
                    keshi_two: e.data[0].id
                }), t.getList(e.data[0].id, "");
            }
        });
    },
    getList: function(t, e) {
        var i = this;
        a.util.request({
            url: "entry/wxapp/answer.tank_list",
            data: {
                page: i.data.page,
                pagesize: i.data.pagesize,
                type: 0,
                keshi_two: t,
                keyword: e
            },
            success: function(t) {
                var e = i.data.page + 1;
                i.setData({
                    list: i.data.list.concat(t.data),
                    page: e
                });
            }
        });
    },
    huoqu: function(t) {
        var e = this, i = t.currentTarget.dataset.index, s = t.currentTarget.dataset.id;
        a.util.request({
            url: "entry/wxapp/Yuzhen.classb",
            data: {
                id: s
            },
            cachetime: "30",
            success: function(t) {
                console.log(t.data), e.setData({
                    categoryfl2: t.data
                }), a.globalData.skuList = t.data;
                var s = e.data.pIndex;
                s.push(i), console.log(s, i), e.setData({
                    pageWrapCount: e.data.pageWrapCount.concat([ 1 ]),
                    current: i,
                    pIndex: s
                });
            }
        });
    },
    existence: function(t, e) {
        for (var a = 0, i = e.length; a < i; a++) if (e[a] == t) return !1;
        return !0;
    },
    searchClick: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/search/search"
        });
    },
    detailClick: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/details/details?id=" + e + "&title=" + a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data.keshi_two, e = this.data.keyword;
        this.getList(t, e);
    },
    onShareAppMessage: function() {}
}, (0, e.default)(t, "huoqu", function(t) {
    var e = t.currentTarget.dataset.id;
    this.setData({
        keshi_two: e,
        page: 0,
        list: [],
        i: t.currentTarget.dataset.index,
        current: t.currentTarget.dataset.index
    });
    var a = this.data.keyword;
    this.getList(e, a);
}), (0, e.default)(t, "change_keyword", function(t) {
    var e = t.detail.value;
    this.setData({
        keyword: e
    });
}), (0, e.default)(t, "searchs", function() {
    var t = this.data.keyword, e = this.data.keshi_two;
    this.setData({
        page: 0,
        list: []
    }), this.getList(e, t);
}), t));