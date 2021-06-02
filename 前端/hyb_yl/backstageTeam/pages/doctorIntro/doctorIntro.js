var t = getApp(), a = require("../../../../lib/bmap-wx.min.js");

Page({
    data: {},
    onLoad: function(t) {
        var n = this, o = t.zid, e = t.type;
        console.log(e), this.loadInfo();
        new a.BMapWX({
            ak: "4DGFO0htsrocLEd7iQefj7F9tL1Fw1Xn"
        });
        n.setData({
            zid: o,
            type: e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    loadInfo: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                console.log(a);
                var n = a.longitude, o = a.latitude;
                t.loadCity(n, o), t.getAllzhuanjia(n, o);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    loadCity: function(t, a) {
        var n = this;
        wx.request({
            url: "https://api.map.baidu.com/geocoder/v2/?ak=4DGFO0htsrocLEd7iQefj7F9tL1Fw1Xn&location=" + a + "," + t + "&output=json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                console.log(t);
                var a = t.data.result.addressComponent.city, o = t.data.result.location.lat, e = t.data.result.location.lng, i = t.data.result.sematic_description;
                n.setData({
                    city: a,
                    lat: o,
                    lng: e,
                    sematic_description: i
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    distance: function(t, a, n, o) {
        var e = t * Math.PI / 180, i = n * Math.PI / 180, s = e - i, c = a * Math.PI / 180 - o * Math.PI / 180, l = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(e) * Math.cos(i) * Math.pow(Math.sin(c / 2), 2)));
        l *= 6378.137, l = Math.round(1e4 * l) / 1e4, console.log("计算结果", l), this.setData({
            s: l
        });
    },
    getAllzhuanjia: function(a, n) {
        var o = this, e = o.data.zid;
        t.util.request({
            url: "entry/wxapp/Zhuanjiajinw",
            data: {
                jingdu: a,
                latitude: n,
                zid: e,
                op: "post"
            },
            success: function(t) {
                console.log(t);
                var e = t.data.data;
                o.distance(n, a, e.lat, e.lng), e.juli = o.data.s, o.setData({
                    zhuanjia: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    OK: function(t) {
        var a = t.currentTarget.dataset.zhuanjia, n = getCurrentPages(), o = n[n.length - 3];
        console.log(o), o.setData({
            zhuanjia: a,
            perfect: "doc"
        }), wx.navigateBack({
            delta: 2
        });
    }
});