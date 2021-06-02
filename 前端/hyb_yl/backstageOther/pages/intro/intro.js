var t = getApp(), a = require("../../../../lib/bmap-wx.min.js");

Page({
    data: {
        position: "",
        show: !0,
        index: "",
        juli: "",
        text: "主治医师"
    },
    onLoad: function(i) {
        var o = this, n = i.zid, e = JSON.parse(i.arr), s = (e.t_id, i.yao_id), u = i.yao_type;
        if (0 == u) var c = "tichu";
        if (1 == u) c = "tichu";
        if (2 == u) c = "yijujue";
        if (3 == u) c = "tgsq";
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), o.setData({
                    url: t.data
                });
            }
        }), this.loadInfo();
        new a.BMapWX({
            ak: "4DGFO0htsrocLEd7iQefj7F9tL1Fw1Xn"
        });
        o.setData({
            zid: n,
            arr: e,
            yao_type: u,
            button: c,
            yao_id: s
        });
    },
    onShow: function() {},
    zhaozhuanjia: function(a) {
        var i = this.data.zid, o = a.detail.formId, n = this.data.arr, e = t.siteInfo.uniacid;
        console.log(n), t.util.request({
            url: this.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=UserFormId&m=hyb_yl",
            data: {
                form_id: o,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), t.util.request({
                    url: "entry/wxapp/yaoqing.addyihu",
                    data: {
                        zid: i,
                        arr: n
                    },
                    success: function(t) {
                        console.log(t);
                    }
                }), wx.showToast({
                    title: "已成功发出邀请",
                    icon: "none",
                    duration: 2e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    }
                });
            }
        });
    },
    loadInfo: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                console.log(a);
                var i = a.longitude, o = a.latitude;
                t.loadCity(i, o), t.getAllzhuanjia(i, o);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    loadCity: function(t, a) {
        var i = this;
        wx.request({
            url: "https://api.map.baidu.com/geocoder/v2/?ak=4DGFO0htsrocLEd7iQefj7F9tL1Fw1Xn&location=" + a + "," + t + "&output=json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                console.log(t);
                var a = t.data.result.addressComponent.city, o = t.data.result.location.lat, n = t.data.result.location.lng, e = t.data.result.sematic_description;
                i.setData({
                    city: a,
                    lat: o,
                    lng: n,
                    sematic_description: e
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    distance: function(t, a, i, o) {
        var n = t * Math.PI / 180, e = i * Math.PI / 180, s = n - e, u = a * Math.PI / 180 - o * Math.PI / 180, c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(n) * Math.cos(e) * Math.pow(Math.sin(u / 2), 2)));
        c *= 6378.137, c = Math.round(1e4 * c) / 1e4, console.log("计算结果", c), this.setData({
            s: c
        });
    },
    getAllzhuanjia: function(a, i) {
        var o = this, n = o.data.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.zhuanjiajinw",
            data: {
                jingdu: a,
                latitude: i,
                zid: n,
                op: "post"
            },
            success: function(t) {
                console.log(t);
                var n = t.data;
                o.distance(i, a, n.lat, n.lng), n.juli = o.data.s, o.setData({
                    zhuanjia: n
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    tichu: function(a) {
        var i = this.data.yao_id;
        t.util.request({
            url: "entry/wxapp/yaoqing.tichu",
            data: {
                yao_id: i
            },
            success: function(t) {
                console.log(t), wx.showModal({
                    content: "踢出成功"
                }), wx.navigateBack({
                    detail: 1
                });
            }
        });
    },
    yijujue: function() {
        var a = this.data.yao_id, i = this.data.zid;
        wx.showModal({
            content: "是否发起邀请",
            success: function(o) {
                o.confirm && t.util.request({
                    url: "entry/wxapp/yaoqing.upyihu",
                    data: {
                        yao_id: a,
                        zid: i
                    },
                    success: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    }
});