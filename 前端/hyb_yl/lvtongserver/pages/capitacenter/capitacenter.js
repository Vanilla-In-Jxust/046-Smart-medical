var t = require("../../../../template/wxcharts.js"), a = getApp();

Page({
    data: {
        capitalist: [],
        y_zhou: [],
        x_zhou: [],
        z_zhou: []
    },
    capitainfor: function(t) {
        var a = t.currentTarget.dataset.keywords, e = t.currentTarget.dataset.did;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/capitadetail/capitadetail?keyword=" + a + "&did=" + e
        });
    },
    tixian: function() {
        var t = this.data.list.count;
        "0" == t || "0.00" == t || "" == t ? wx.showModal({
            title: "提示",
            content: "暂无可提现金额"
        }) : a.util.request({
            url: "entry/wxapp/green.is_cash",
            data: {
                did: wx.getStorageSync("did"),
                money: t
            },
            success: function(t) {
                "1" == t.data.code ? wx.showModal({
                    title: "提示",
                    content: t.data.message
                }) : wx.navigateTo({
                    url: "/hyb_yl/twosubpages/pages/my_ti/my_ti?did=" + wx.getStorageSync("did")
                });
            }
        });
    },
    onLoad: function(t) {
        this.getSeven();
    },
    getSeven: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/green.seven_money",
            data: {
                openid: wx.getStorageSync("openid")
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
                }, o = [], i = [], r = [];
                for (var s in n.tian) o.push(n.tian[s].date), i.push(n.tian[s].money), r.push(n.tian[s].pay);
                t.setData({
                    x_zhou: o,
                    y_zhou: i,
                    z_zhou: r,
                    num: n.news.num,
                    money: n.news.money
                }), t.zhexiantu("lineCanvas", "#F2AA56", "#0088DE", t.data.x_zhou, t.data.y_zhou, t.data.z_zhou);
            }
        });
    },
    zhexiantu: function(a, e, n, o, i, r) {
        try {
            var s = wx.getSystemInfoSync(), u = s.windowWidth, d = .4 * s.windowHeight;
        } catch (t) {
            console.error("系统信息错误");
        }
        new t({
            canvasId: a,
            type: "line",
            categories: o,
            animation: !0,
            series: [ {
                data: i,
                format: function(t, a) {
                    return t + " 元";
                },
                color: e
            }, {
                data: r,
                format: function(t, a) {
                    return t + " 元";
                },
                color: n
            } ],
            xAxis: {
                disableGrid: !0
            },
            yAxis: {},
            width: u,
            height: d,
            dataLabel: !0,
            dataPointShape: !0,
            extra: {
                lineStyle: "curve"
            },
            legend: !1
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/green.guidance_pay",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                t.setData({
                    list: a.data
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});