var a = getApp();

Page({
    data: {
        casArrayx: [],
        casKey: [],
        _num: 0,
        arr: {}
    },
    clickNum: function(a) {
        var o = this.data.casArrayx;
        console.log(a.target.dataset.index);
        for (var t = 0; t < o.length; t++) a.target.dataset.index == t && (o[t].flag = !o[t].flag);
        this.setData({
            casArrayx: o
        });
    },
    foor: function(o) {
        var t = [], e = this;
        console.log(e.data.casArrayx);
        for (var c = 0; c < e.data.casArrayx.length; c++) console.log(e.data.casArrayx[c].flag), 
        1 == e.data.casArrayx[c].flag && t.push(e.data.casArrayx[c].name);
        t = t.join("、"), console.log(t);
        var r = wx.getStorageSync("log") || "";
        "" != t ? wx.request({
            url: a.globalData.dic + e.data.url + r,
            data: {
                bgGoodAt: t
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log(a), wx.navigateBack({
                    delta: 1
                });
            }
        }) : wx.showToast({
            title: "请选择擅长疾病",
            icon: "none",
            duration: 2e3
        });
    },
    onLoad: function(o) {
        var t = this, e = wx.getStorageSync("url") || "";
        console.log(e), t.setData({
            url: e
        });
        var c = wx.getStorageSync("jobType") || "";
        1 == c ? wx.request({
            url: a.globalData.dicc + "dic/comdicbase",
            data: {
                code: 28e4
            },
            success: function(a) {
                console.log(a);
                var o = [], e = [], c = a.data.data;
                for (var r in c) o.push(c[r]), e.push(r);
                var s = [];
                o.forEach(function(a) {
                    s.push({
                        name: a,
                        flag: !1
                    });
                }), t.setData({
                    casArrayx: s,
                    casKey: e
                }), console.log(t.data.casArrayx), console.log(t.data.casKey);
            }
        }) : 2 == c && wx.request({
            url: a.globalData.dicc + "dic/comdicbase",
            data: {
                code: 33e4
            },
            success: function(a) {
                console.log(a), t.setData({
                    casArrayx: [ {
                        name: "健康护理",
                        flag: !1
                    } ],
                    casKey: [ 0 ]
                }), console.log(t.data.casArrayx), console.log(t.data.casKey);
            }
        });
    }
});