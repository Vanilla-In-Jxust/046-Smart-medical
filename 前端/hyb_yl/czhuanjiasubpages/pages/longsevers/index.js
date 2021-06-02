var e = getApp();

Page({
    data: {
        region: [ "四川省", "广元市", "苍溪县" ],
        items: [ {
            id: 0,
            name: "明确诊断",
            value: "明确诊断",
            checked: !1
        }, {
            id: 1,
            name: "请专家给治疗方案，开处方",
            value: "请专家给治疗方案，开处方",
            checked: !1
        }, {
            id: 2,
            name: "咨询手术",
            value: "咨询手术",
            checked: !1
        }, {
            id: 3,
            name: "转诊沟通",
            value: "转诊沟通",
            checked: !1
        } ],
        itemsIndex: 0,
        citems: [ {
            name: "在住院治疗",
            value: "在住院治疗",
            radiocheck: !1
        }, {
            name: "没有住院",
            value: "没有住院",
            radiocheck: !1
        } ],
        one_key: !1,
        mask_key: !1
    },
    changeRegin: function(e) {
        this.setData({
            region: e.detail.value
        });
    },
    checkboxChange: function(e) {
        console.log(e.detail.value), console.log("checkbox发生change事件，携带value值为：", e.detail.value);
        for (var a = this.data.items, t = [], n = 0; n < e.detail.value.length; n++) {
            var i = e.detail.value[n].split(",");
            console.log(i), t = t.concat(i[1]);
        }
        console.log(t);
        for (var s = 0; s < a.length; s++) -1 != t.indexOf(s + "") ? a[s].checked = !0 : a[s].checked = !1;
        this.setData({
            items: a
        });
    },
    choseque: function(e) {
        console.log(e);
    },
    radioChange: function(e) {
        console.log("radio发生change事件，携带value值为：", e.detail.value);
        var a = this.data.citems;
        this.setData({
            sex: e.detail.value
        });
        a = this.data.citems;
        for (var t = 0; t < a.length; ++t) a[t].checked = a[t].value == e.detail.value;
        console.log(a), this.setData({
            citems: a
        });
    },
    choseradio: function(e) {
        0 == e.currentTarget.dataset.index ? this.setData({
            one_key: !0
        }) : this.setData({
            one_key: !1
        });
    },
    submit: function(a) {
        console.log(a, 1111);
        for (var t = this, n = [], i = a.detail.value.hopesove, s = 0; s < i.length; s++) {
            var o = i[s].split(",");
            n = n.concat(o[0]);
        }
        console.log(n);
        var d = t.data.tel, l = t.data.names, u = a.detail.value.city, r = a.detail.value.sickname, c = (i = n.join("　"), 
        a.detail.value.ishospit), h = a.detail.value.hospitname, g = a.detail.value.docname, v = t.data.zid, m = t.data.j_id, y = t.data.keywords;
        if ("在住院治疗" == c) var f = [ {
            question: "患者姓名",
            ansers: l
        }, {
            question: "联系方式",
            ansers: d
        }, {
            question: "所患疾病",
            ansers: r
        }, {
            question: "所在城市",
            ansers: u
        }, {
            question: "希望解决什么问题？",
            ansers: i
        }, {
            question: "患者是否在住院治疗？",
            ansers: c
        }, {
            question: "所住医院信息",
            ansers: h
        }, {
            question: "所患疾病",
            ansers: g
        } ]; else f = [ {
            question: "患者姓名",
            ansers: l
        }, {
            question: "联系方式",
            ansers: d
        }, {
            question: "所患疾病",
            ansers: r
        }, {
            question: "所在城市",
            ansers: u
        }, {
            question: "希望解决什么问题？",
            ansers: i
        }, {
            question: "患者是否在住院治疗？",
            ansers: c
        } ];
        e.util.request({
            url: "entry/wxapp/hzbingli.addbingli",
            data: {
                msglist: f,
                sicktel: t.data.tel,
                openid: wx.getStorageSync("openid"),
                j_id: m,
                keywords: y
            },
            success: function(a) {
                console.log(a);
                var n = a.data, i = t.data.name;
                e.util.request({
                    url: "entry/wxapp/hzbingli.addorder",
                    data: {
                        zid: t.data.zid,
                        name: i,
                        keywords: y,
                        openid: wx.getStorageSync("openid"),
                        bl_id: n,
                        money: t.data.newmoney,
                        j_id: m
                    },
                    success: function(e) {
                        console.log(e);
                        var a = e.data.name, i = e.data.order, s = t.data.newmoney, o = e.data.oid;
                        wx.navigateTo({
                            url: "/hyb_yl/czhuanjiasubpages/pages/questends/index?phone=" + t.data.tel + "&zid=" + v + "&name=" + a + "&keywords=" + y + "&j_id=" + m + "&allone_key=1&name=" + a + "&order=" + i + "&money=" + s + "&oid=" + o + "&bl_id=" + n
                        });
                    }
                });
            }
        });
    },
    alipay: function() {},
    close: function() {
        this.setData({
            mask_key: !1
        });
    },
    nextpage: function(e) {
        var a = e.currentTarget.dataset.index;
        0 == a || 1 == a && wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/questends/index"
        });
    },
    onLoad: function(a) {
        var t = this, n = a.zid, i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
        var s = a.keywords, o = a.name;
        a.money;
        e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: n,
                key: s
            },
            success: function(e) {
                t.setData({
                    newmoney: e.data.data.newmoney
                });
            }
        }), t.setData({
            zid: n,
            keywords: s,
            name: o,
            bgc: i
        });
    },
    onReady: function() {},
    onShow: function(e) {
        var a = getCurrentPages(), t = a[a.length - 1];
        t.data.names && this.setData({
            names: t.data.names
        }), t.data.j_id && this.setData({
            j_id: t.data.j_id
        }), t.data.tel && this.setData({
            tel: t.data.tel
        }), t.data.region && 1 == t.data.state && this.setData({
            region: t.data.region
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    selhuanzhe: function() {
        var e = this.data.zid, a = this.data.name, t = this.data.keywords, n = this.data.j_id;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?zid=" + e + "&name=" + a + "&keywords=" + t + "&j_id=" + n
        });
    }
});