var t = getApp();

Page({
    data: {
        tabdex: "a1",
        tabs: [ {
            tit: "简介",
            ids: "a1"
        }, {
            tit: "症状",
            ids: "a2"
        }, {
            tit: "病因",
            ids: "a3"
        }, {
            tit: "诊断",
            ids: "a4"
        }, {
            tit: "治疗",
            ids: "a5"
        }, {
            tit: "预防",
            ids: "a6"
        } ]
    },
    tablick: function(t) {
        var a = t.currentTarget.dataset.titles, e = t.currentTarget.dataset.id;
        this.getDetail(e), this.setData({
            tabdex: t.currentTarget.dataset.id,
            name: a
        });
    },
    onLoad: function(t) {
        var a = t.ids;
        wx.setNavigationBarTitle({
            title: t.title
        });
        var e = t.id;
        this.setData({
            title: t.title,
            id: e
        });
        var i = this.data.tabs;
        if ("更多信息" != t.name) {
            for (var n = 0; n < i.length; n++) if (i[n].tit == t.name) {
                this.setData({
                    tabdex: i[n].ids
                });
                break;
            }
            this.setData({
                name: t.name
            });
        }
        this.getDetail(a);
    },
    getDetail: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/answer.tank_detail",
            data: {
                id: e.data.id
            },
            success: function(t) {
                "a1" == a ? e.setData({
                    detail: t.data.detail
                }) : "a2" == a ? e.setData({
                    detail: t.data.symptom
                }) : "a3" == a ? e.setData({
                    detail: t.data.reason
                }) : "a4" == a ? e.setData({
                    detail: t.data.diagnosis
                }) : "a5" == a ? e.setData({
                    detail: t.data.symptom
                }) : "a6" == a ? e.setData({
                    detail: t.data.prevention
                }) : "a7" == a && e.setData({
                    detail: t.data.detail
                }), e.setData({
                    info: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});