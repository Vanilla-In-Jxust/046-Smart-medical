var t, a = require("../../../../utils/qqmap-wx-jssdk.js"), e = getApp();

Page({
    data: {
        inquiry: "",
        cartpop: !1,
        detailspop: !1,
        sum: 0,
        kinds: 0,
        cartlist: [],
        steps: [ "医生开方", "选择药品", "医生医嘱", "发送处方" ],
        stepnum: 1,
        druplist: []
    },
    handleNextStep: function(t) {
        var a = this.data.cartlist, e = this.data.ifzj;
        if (this.data.conets) var s = this.data.conets.text, n = JSON.stringify(this.data.conets);
        if (this.data.text) s = this.data.text;
        var i = this.data.key_words;
        if ("1" == e) var o = "1"; else o = "0";
        for (var r = [], u = 0; u < a.length; u++) r.push({
            sname: a[u].sname,
            smoney: a[u].smoney,
            snum: a[u].snum,
            sthumb: a[u].sthumb,
            use: a[u].use,
            num: a[u].num,
            sid: a[u].sid,
            s_id: a[u].s_id,
            yf_id: a[u].yf_id
        });
        console.log(r);
        var d = wx.setStorageSync("cartlist", r);
        console.log(d);
        var c = this.data.c_id, l = (s = this.data.text, this.data.zhenduan), h = this.data.yongyao, f = this.data.j_id, p = this.data.inquiry;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yizhu/yizhu?c_id=" + c + "&text=" + s + "&zhenduan=" + l + "&j_id=" + f + "&yongyao=" + h + "&role=" + o + "&inquiry=" + p + "&conets=" + n + "&key_words=" + i
        });
    },
    handleShowSelectDrugs: function() {
        this.setData({
            cartpop: !0
        });
    },
    handleClosecart: function() {
        this.setData({
            cartpop: !1
        });
    },
    drupdetail: function(t) {
        var a = t.currentTarget.dataset.dex, e = this.data.druplist[a];
        this.setData({
            detailspop: !0,
            detail: e
        });
    },
    handleCloseTap: function() {
        this.setData({
            detailspop: !1
        });
    },
    handleNumberClick: function(t) {
        console.log("e", t);
        var a = t.currentTarget.dataset.type, e = t.currentTarget.dataset.dex, s = this.data.druplist, n = t.currentTarget.dataset.id, i = this.data.cartlist;
        if ("add" == a) ++s[e].num; else if ("reduce" == a) s[e].num > 1 ? --s[e].num : s[e].num = 0; else if ("adds" == a) {
            ++i[r = t.currentTarget.dataset.index].num;
            for (var o = 0; o < s.length; o++) s[o].s_id == n && (s[o].num = i[r].num);
        } else if ("reduces" == a) {
            var r;
            i[r = t.currentTarget.dataset.index].num > 1 ? --i[r].num : (i[r].num = 0, i.splice(r, 1));
            for (var u = 0; u < s.length; u++) s[u].s_id == n && (s[u].num = i[r].num);
        }
        0 == i.length && this.setData({
            cartpop: !1
        }), this.setData({
            druplist: s,
            cartlist: i
        }), this.sunmfun(), this.typefun();
    },
    deletedrup: function(t) {
        var a = t.currentTarget.dataset.dex, e = this.data.cartlist, s = this.data.druplist, n = t.currentTarget.dataset.id;
        s.map(function(t) {
            n == t.id && (t.num = 0);
        }), e.splice(a, 1), 0 == e.length && this.setData({
            cartpop: !1
        }), this.setData({
            cartlist: e,
            druplist: s
        }), this.sunmfun(), this.typefun();
    },
    sunmfun: function() {
        var t = this.data.druplist, a = 0;
        t.map(function(t) {
            a += t.num;
        }), this.setData({
            sum: a
        });
    },
    typefun: function() {
        var t = this.data.druplist, a = 0;
        t.map(function(t) {
            0 != t.num && ++a;
        }), this.setData({
            kinds: a
        });
    },
    AddClick: function(t) {
        var a = t.currentTarget.dataset.dex, e = this.data.druplist, s = this.data.cartlist;
        e[a].num = 1, s.push(e[a]), this.setData({
            druplist: e,
            cartlist: s
        }), this.sunmfun(), this.typefun();
    },
    onLoad: function(e) {
        var s = this, n = e.zhenduan, i = e.yongyao, o = e.text, r = wx.getStorageSync("color"), u = e.c_id, d = e.j_id, c = e.ifzj, l = e.inquiry, h = e.key_words;
        if (t = new a({
            key: "V7DBZ-K7C22-SXXUJ-CDUE7-AM2LH-AEFCM"
        }), wx.getLocation({
            type: "wgs84",
            success: function(a) {
                console.log(a), t.reverseGeocoder({
                    location: {
                        latitude: a.latitude,
                        longitude: a.longitude
                    },
                    success: function(t) {
                        console.log(t);
                        var a = t.result.address_component.province;
                        s.setData({
                            provinceName: a
                        }), s.getallgoods(a);
                    }
                });
            }
        }), e.conets) {
            var f = JSON.parse(e.conets);
            s.setData({
                conets: f
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), this.setData({
            zhenduan: n,
            yongyao: i,
            text: o,
            c_id: u,
            j_id: d,
            ifzj: c,
            inquiry: l,
            key_words: h
        });
    },
    onReady: function() {},
    onShow: function() {
        this.sunmfun(), this.typefun();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getallgoods: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/goods.allgoods",
            data: {
                provinceName: a.data.provinceName
            },
            success: function(t) {
                console.log(t), a.setData({
                    druplist: t.data
                });
            }
        });
    }
});