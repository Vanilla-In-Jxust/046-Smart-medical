!function(a) {
    a && a.__esModule;
}(require("../../../../utils/toot.js"));

var a = require("../../../../utils/wxcharts.js");

getApp();

Page({
    data: {
        curHdIndex: 2,
        areaChartArr: [],
        id: 0,
        targetIndex: 0,
        importantData: [ {
            nmIndexLis: "心脏",
            nmQuantiUnit: "2018-11-02",
            limitLow: 30,
            limitHigh: 40
        } ]
    },
    touchHandler: function(a) {
        for (var t = a.target.id, r = "", e = this.data.areaChartArr, i = 0; i < e.length; i++) if (e[i].opts.canvasId == t) {
            r = i;
            break;
        }
        this.data.areaChartArr[r].scrollStart(a);
    },
    moveHandler: function(a) {
        for (var t = a.target.id, r = "", e = this.data.areaChartArr, i = 0; i < e.length; i++) if (e[i].opts.canvasId == t) {
            r = i;
            break;
        }
        this.data.areaChartArr[r].scroll(a);
    },
    touchEndHandler: function(a) {
        for (var t = a.target.id, r = "", e = this.data.areaChartArr, i = 0; i < e.length; i++) if (e[i].opts.canvasId == t) {
            r = i;
            break;
        }
        this.data.areaChartArr[r].scrollEnd(a), this.data.areaChartArr[r].showToolTip(a);
    },
    onLoad: function(a) {
        this.setData({
            canvasFlag_top: !0
        });
    },
    chartList: function(t, r, e, i, n, o, s) {
        return new a(function(a, t, r) {
            return t in a ? Object.defineProperty(a, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[t] = r, a;
        }({
            canvasId: t,
            type: "line",
            categories: e,
            animation: !0,
            series: [ {
                maxValue: 11,
                minValue: 3,
                name: s,
                data: i,
                format: function(a) {
                    return a.toFixed(2);
                }
            } ],
            yAxis: {
                format: function(a) {
                    return a.toFixed(2);
                },
                min: n,
                max: o,
                fontColor: "#999999",
                gridColor: "#f0f0f0"
            },
            xAxis: {
                fontColor: "#999999",
                disableGrid: !0
            },
            extra: {
                legendTextColor: "red"
            },
            dataLabel: !1,
            width: r,
            height: 190
        }, "extra", {
            lineStyle: "curve"
        }));
    },
    onReady: function(a) {
        var t = wx.createCanvasContext("abc");
        t.setStrokeStyle("#00ff00"), t.setLineWidth(5), t.stroke(), t.setStrokeStyle("#ff0000"), 
        t.setLineWidth(2), t.arc(0, 200, 10, 0, 0), t.arc(0, 100, 40, 0, 0), t.arc(0, 100, 40, 0, 0), 
        t.arc(0, 80, 80, 0, 0), t.arc(0, 80, 80, 0, 0), t.arc(0, 60, 120, 0, 0), t.arc(0, 60, 120, 0, 0), 
        t.arc(0, 150, 160, 0, 0), t.arc(0, 150, 160, 0, 0), t.arc(0, 100, 200, 0, 0), t.arc(0, 100, 200, 0, 0), 
        t.arc(0, 200, 240, 0, 0), t.stroke(), t.draw();
    }
});