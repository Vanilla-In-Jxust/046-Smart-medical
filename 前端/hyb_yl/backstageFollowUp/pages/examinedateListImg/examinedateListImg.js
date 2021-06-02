!function(a) {
    a && a.__esModule;
}(require("../../../../utils/toot.js"));

var a = require("../../../../utils/wxcharts.js");

getApp(), Page({
    data: {
        curHdIndex: 2,
        areaChartArr: [],
        cdName: "心脏",
        msgData: [ {
            nmQuantiUnit: "2018-11-02",
            nmIndexLis: "血液流速",
            limitLow: 30,
            limitHigh: 40
        } ]
    },
    touchHandler: function(a) {
        this.data.areaChartArr[0].scrollStart(a);
    },
    moveHandler: function(a) {
        this.data.areaChartArr[0].scroll(a);
    },
    touchEndHandler: function(a) {
        this.data.areaChartArr[0].scrollEnd(a), this.data.areaChartArr[0].showToolTip(a);
    },
    onLoad: function(a) {},
    chartList: function(t, r, e, n, i, o, c) {
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
                name: c,
                data: n,
                format: function(a) {
                    return a.toFixed(2);
                }
            } ],
            yAxis: {
                format: function(a) {
                    return a.toFixed(2);
                },
                min: i,
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
            height: 190,
            dataPointShape: !0,
            enableScroll: !0
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