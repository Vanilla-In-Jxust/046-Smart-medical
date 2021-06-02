var t = getApp();

Page({
    data: {
        tabindex: 0,
        keshi: "",
        label: "",
        proain: !1,
        isshow: 1,
        showt: "展开",
        page: 0,
        pagesize: 10,
        keyword: "",
        list: [],
        deparshow: !1
    },
    departab: function(a) {
        var e = this, s = a.currentTarget.dataset.dex, i = a.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/answer.labels",
            data: {
                id: i
            },
            success: function(t) {
                e.setData({
                    label_arr: t.data,
                    tabindex: s,
                    deparshow: !1
                });
            }
        }), this.setData({
            keshi: i
        });
    },
    label_change: function(t) {
        var a = t.currentTarget.dataset.title;
        this.setData({
            label: a
        }), this.setData({
            page: 0,
            list: []
        });
        var e = this.data.keyword, s = this.data.keshi;
        this.getAnswer(e, s, a);
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
    proaInfor: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.typs, s = t.currentTarget.dataset.state;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblemsInfor/publicProblemsInfor?id=" + a + "&typs=" + e + "&state=" + s
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
        var a = t.currentTarget.dataset.dex;
        this.setData({
            tabindex: a,
            deparshow: !1
        });
    },
    scrolltoupper: function(t) {
        console.log(t);
    },
    onLoad: function(t) {
        this.getKeshi(), this.getAnswer("", "", "");
    },
    changekeyword: function(t) {
        var a = t.detail.value;
        this.setData({
            keyword: a
        });
    },
    searchs: function() {
        this.setData({
            list: [],
            page: 0
        }), this.getAnswer(this.data.keyword, this.data.keshi, this.data.label);
    },
    getAnswer: function(a, e, s) {
        var i = this;
        t.util.request({
            url: "entry/wxapp/answer.lists",
            data: {
                page: i.data.page,
                pagesize: i.data.pagesize,
                keyword: a,
                keshi: e,
                label: s
            },
            success: function(t) {
                console.log(t);
                var a = i.data.page + 1;
                i.setData({
                    list: i.data.list.concat(t.data),
                    page: a
                });
            }
        });
    },
    getKeshi: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/answer.keshi_arr",
            success: function(e) {
                a.setData({
                    keshi_arr: e.data
                }), t.util.request({
                    url: "entry/wxapp/answer.labels",
                    data: {
                        id: e.data[0].id
                    },
                    success: function(t) {
                        a.setData({
                            label_arr: t.data
                        });
                    }
                }), a.setData({
                    keshi: e.data[0].id
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
        var t = this.data.keyword, a = this.data.label, e = this.data.keshi;
        this.getAnswer(t, a, e);
    },
    onShareAppMessage: function() {}
});