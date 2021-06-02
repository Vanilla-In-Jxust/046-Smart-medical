Page({
    data: {
        searchCont: "",
        tabdex: "",
        popshow: !1,
        tablist: [ {
            types: "综合排序",
            list: [ {
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
            }, {
                items: "价格从低到高",
                checked: !1
            }, {
                items: "价格从高到低",
                checked: !1
            } ]
        }, {
            types: "筛选",
            list: [ {
                items: "价格区间",
                section: [ {
                    items: "10-19",
                    checked: !1
                }, {
                    items: "20-29",
                    checked: !1
                }, {
                    items: "30-50",
                    checked: !1
                }, {
                    items: "50以上",
                    checked: !1
                } ]
            }, {
                items: "医生职称",
                section: [ {
                    items: "医师",
                    checked: !1
                }, {
                    items: "主治医师",
                    checked: !1
                }, {
                    items: "副主任医师",
                    checked: !1
                }, {
                    items: "主任医师",
                    checked: !1
                } ]
            } ]
        } ]
    },
    getSearch: function(t) {
        this.setData({
            searchCont: t.detail.value
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
        var e = this.data.tablist, a = this.data.tabdex, i = t.currentTarget.dataset.dex;
        e[a].list.map(function(t) {
            t.checked = !1;
        }), e[a].types = e[a].list[i].items, e[a].list[i].checked = !0, this.setData({
            tablist: e,
            popshow: !1,
            tabdex: ""
        });
    },
    typesclick: function(t) {
        var e = this.data, a = t.currentTarget.dataset.index, i = t.currentTarget.dataset.dex;
        e.tablist[e.tabdex].list[a].section.map(function(t) {
            t.checked = !1;
        }), e.tablist[e.tabdex].list[a].section[i].checked = !0, this.setData({
            tablist: e.tablist
        });
    },
    resultclick: function() {
        for (var t = this.data.tablist, e = 0; e < t[2].list.length; e++) for (var a = t[2].list[e].section, i = 0; i < a.length; i++) a[i].checked = !1;
        this.setData({
            tablist: t
        });
    },
    submitclick: function() {
        this.setData({
            popshow: !1,
            tabdex: ""
        });
    },
    navigator: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/daozhenxinxi/daozhenxinxi"
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});