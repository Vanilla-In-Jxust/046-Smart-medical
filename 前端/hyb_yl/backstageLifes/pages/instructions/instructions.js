var a = getApp(), t = require("../../../../utils/wxcharts.js");

Page({
    data: {
        month: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
        year: "",
        y_zhou: [],
        x_zhou: [],
        y_zhou_y: [],
        x_zhou_y: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
        num: 0,
        money: 50,
        tian: ""
    },
    bindYear: function(a) {
        this.setData({
            year: a.detail.value
        }), console.log(this.data.year), this.getCaiwus(this.data.year);
    },
    onLoad: function(a) {
        var t = new Date(), e = this.data.month, n = a.zid, i = t.getMonth() + 1, o = "";
        for (var s in e) parseInt(e[s]) == i && (o = s, this.setData({
            index: o
        }));
        this.setData({
            year: t.getFullYear(),
            zid: n
        }), this.getCaiwu(), this.getCaiwus(this.data.year);
    },
    zhexiantu: function(a, e, n, i) {
        try {
            var o = wx.getSystemInfoSync(), s = o.windowWidth, u = .4 * o.windowHeight;
        } catch (a) {
            console.error("系统信息错误");
        }
        new t({
            canvasId: a,
            type: "line",
            categories: n,
            animation: !0,
            series: [ {
                data: i,
                format: function(a, t) {
                    return a + " 元";
                },
                color: e
            } ],
            xAxis: {
                disableGrid: !0
            },
            yAxis: {},
            width: s,
            height: u,
            dataLabel: !0,
            dataPointShape: !0,
            extra: {
                lineStyle: "curve"
            },
            legend: !1
        });
    },
    getCaiwu: function() {
        var t = this, e = t.data.zid;
        a.util.request({
            url: "entry/wxapp/Cweekmoney",
            data: {
                zid: e,
                op: "zhou"
            },
            success: function(a) {
                var e = a.data;
                t.setData({
                    tian: a.data
                });
                var n = {
                    news: {
                        money: 0,
                        num: 0
                    },
                    tian: e
                }, i = [], o = [];
                for (var s in console.log(n.tian), n.tian) i.push(n.tian[s].time), o.push(parseInt(n.tian[s].money));
                t.setData({
                    x_zhou: i,
                    y_zhou: o,
                    num: n.news.num,
                    money: n.news.money
                }), t.zhexiantu("lineCanvas", "#F2AA56", t.data.x_zhou, t.data.y_zhou);
            }
        });
    },
    getCaiwus: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/Cweekmoney",
            data: {
                zid: 7,
                op: "nian",
                year: t
            },
            success: function(a) {
                console.log(a);
                var t = a.data, n = [], i = [];
                for (var o in t) n.push(t[o].time), i.push(parseInt(t[o].money));
                if (null == t[0].summoney) var s = 0; else s = t[0].summoney[0].sum;
                if (null == t[0].num) var u = 0; else u = t[0].num[0].num;
                e.setData({
                    x_zhou_y: n,
                    y_zhou_y: i,
                    money: s,
                    num: u
                }), e.zhexiantu("lineCanvas2", "#6D5EFA", e.data.x_zhou_y, e.data.y_zhou_y);
            }
        });
    }
});