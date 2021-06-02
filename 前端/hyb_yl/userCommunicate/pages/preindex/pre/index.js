var a = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

Page({
    data: {
        hzqingk: "",
        bingzs: "",
        region: [ "四川省", "广元市", "苍溪县" ],
        img: [],
        data_arr: [],
        items: [ {
            name: "冠心病",
            value: "冠心病"
        }, {
            name: "高血压",
            value: "高血压"
        }, {
            name: "糖尿病",
            value: "糖尿病"
        } ],
        sick_items: [],
        rad_items: [ {
            name: "USA",
            value: "去专家所在医院手术",
            desc: "遵从专家医院制度,等待床位"
        }, {
            name: "CHN",
            value: "去专家所在医院手术",
            desc: "遵从专家医院制度,等待床位"
        }, {
            name: "BRA",
            value: "去专家所在医院手术",
            desc: "遵从专家医院制度,等待床位"
        }, {
            name: "JPN",
            value: "去专家所在医院手术",
            desc: "遵从专家医院制度,等待床位"
        } ],
        sickm_key: !0,
        textarea: "",
        pagescroll: !1,
        textkey: !1
    },
    checkboxChange: function(a) {
        var e = a.detail.value;
        console.log("checkbox发生change事件，携带value值为：", a.detail.value), this.setData({
            hzqingk: e
        });
    },
    sickChange: function(a) {
        console.log("checkbox发生change事件，携带value值为：", a.detail.value), this.setData({
            hzqingk: a.detail.value
        });
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value);
    },
    changeRegin: function(a) {
        console.log(a), this.setData({
            region: a.detail.value
        });
    },
    uploadimg: function() {
        var a = this, t = e.siteInfo.uniacid, i = a.data.data_arr;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var n = e.tempFilePaths, s = 0; s < n.length; s++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + t + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[s],
                    name: "upfile",
                    formData: [],
                    success: function(e) {
                        console.log(e), i.push(e.data), wx.setStorageSync("img_arr", i), a.setData({
                            img: i
                        });
                    }
                });
            }
        });
    },
    downimg: function(a) {
        console.log(a.currentTarget.dataset.index);
        var e = a.currentTarget.dataset.index;
        this.data.img.splice(e, 1), this.setData({
            img: this.data.img
        });
    },
    showsickm: function(a) {
        this.setData({
            textarea: "",
            sickm_key: !1,
            pagescroll: !0,
            textkey: !0
        });
    },
    del: function(a) {
        var e = a.currentTarget.dataset.index;
        this.data.sick_items.splice(e, 1), this.setData({
            sick_items: this.data.sick_items
        });
    },
    getarea: function(a) {
        this.setData({
            textarea: a.detail.value
        });
    },
    sickmask: function(a) {
        if ("" == this.data.textarea) wx.showToast({
            title: "不能为空",
            icon: "none"
        }); else if (this.setData({
            sickm_key: !0,
            pagescroll: !1
        }), 1 == a.currentTarget.dataset.index) {
            var e = {
                name: this.data.textarea,
                value: this.data.textarea,
                checked: !0
            };
            this.data.sick_items.push(e), this.setData({
                sick_items: this.data.sick_items,
                textkey: !1
            });
        }
    },
    center: function(e) {
        console.log(e.currentTarget.dataset.index);
        var t = e.currentTarget.dataset.index, i = "sick_items[".concat(t, "].checked");
        this.setData((0, a.default)({}, i, !this.data.sick_items[t].checked));
    },
    sickmask2: function() {
        this.setData({
            sickm_key: !0,
            pagescroll: !1,
            textkey: !1
        });
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
        var i = this, n = a.zid, s = a.money, o = a.key, r = a.name;
        e.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), i.setData({
                    url: a.data,
                    bgc: t,
                    zid: n,
                    money: s,
                    key: o,
                    name: r
                });
            }
        }), e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: n,
                key: a.key
            },
            success: function(a) {
                i.setData({
                    newmoney: a.data.data.newmoney,
                    z_name: a.data.data.z_name
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = getCurrentPages(), e = a[a.length - 1];
        e.data.names && this.setData({
            names: e.data.names
        }), e.data.j_id && this.setData({
            j_id: e.data.j_id
        }), e.data.tel && this.setData({
            tel: e.data.tel
        }), e.data.region && 1 == e.data.state && this.setData({
            region: e.data.region
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    selectuser: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi"
        });
    },
    bingzs: function(a) {
        var e = a.detail.value;
        this.setData({
            bingzs: e
        });
    },
    formSubmit: function(a) {
        var t = this, i = t.data.region, n = a.detail.value.hospitalname, s = a.detail.value.names, o = a.detail.value.othersick, r = a.detail.value.tel, d = t.data.img, c = (t.data.name, 
        t.data.zid);
        if ("" == s) return wx.showToast({
            title: "请选择患者",
            icon: "none"
        }), !1;
        if ("" == t.data.sick_items) return wx.showToast({
            title: "请添加疾病诊断",
            icon: "none"
        }), !1;
        for (var l = t.data.sick_items, u = [], g = 0; g < l.length; ++g) u.push(l[g].value);
        var h = u.join("　");
        if (console.log(h), "" == d) return wx.showToast({
            title: "至少添加一张图片",
            icon: "none"
        }), !1;
        var m = JSON.stringify(d), f = t.data.bingzs;
        if ("" == t.data.hzqingk) var k = ""; else {
            console.log("2");
            k = t.data.hzqingk.join("　");
        }
        var v = i.join("　"), p = t.data.z_name, x = [ {
            question: "患者姓名",
            ansers: s
        }, {
            question: "联系方式",
            ansers: r
        }, {
            question: "所在城市",
            ansers: v
        }, {
            question: "疾病诊断",
            ansers: h
        }, {
            question: "病情主诉",
            ansers: f
        }, {
            question: "在哪家医院确诊需要手术",
            ansers: n
        }, {
            question: "术前资料",
            ansers: "",
            img: m
        }, {
            question: "患者其他情况",
            ansers: k
        }, {
            question: "其他慢性病",
            ansers: o
        } ];
        e.util.request({
            url: "entry/wxapp/shoushu.addshoushu",
            data: {
                openid: wx.getStorageSync("openid"),
                mesage: x,
                j_id: t.data.j_id
            },
            success: function(a) {
                console.log(a);
                var i = a.data, n = t.data.name, o = t.data.key, r = t.data.money;
                e.util.request({
                    url: "entry/wxapp/hzbingli.addorder",
                    data: {
                        zid: c,
                        name: n,
                        keywords: o,
                        openid: wx.getStorageSync("openid"),
                        bl_id: i,
                        money: r,
                        j_id: t.data.j_id
                    },
                    success: function(a) {
                        console.log(a);
                        var e = a.data.name, n = a.data.order, o = a.data.money, r = t.data.bingzs, d = a.data.oid;
                        wx.navigateTo({
                            url: "/hyb_yl/czhuanjiasubpages/pages/tijiandetail/index?name=" + e + "&order=" + n + "&money=" + o + "&z_name=" + p + "&usernames=" + s + "&num=4&bingzs=" + r + "&zid=" + c + "&oid=" + d + "&bl_id=" + i
                        });
                    }
                });
            }
        });
    }
});