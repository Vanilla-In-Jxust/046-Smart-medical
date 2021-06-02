for (var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/helpers/defineProperty")), t = new Date(), a = [], i = [], n = [], s = getApp(), o = 1900; o <= t.getFullYear() + 5; o++) a.push("" + o);

for (var d = 1; d <= 12; d++) d < 10 && (d = "0" + d), i.push("" + d);

for (var r = 1; r <= 31; r++) r < 10 && (r = "0" + r), n.push("" + r);

Page({
    data: {
        hunyin: "",
        gan_index: 3,
        shen_index: 3,
        be_index: 3,
        items: [ {
            name: "男",
            value: "男"
        }, {
            name: "女",
            value: "女"
        } ],
        huny: [ {
            name: "已婚",
            value: "已婚"
        }, {
            name: "未婚",
            value: "未婚"
        } ],
        time: "",
        multiArray: [ a, i, n ],
        multiIndex: [ 0, 9, 16, 10, 17 ],
        choose_year: "",
        selectShow: !1,
        selectShows: !1,
        selectData: [],
        selectDatas: [ "上海", "北京", "广州", "山西" ],
        index: 0,
        indexs: 0,
        sickrela: [ {
            relation: "自己",
            index: 0
        }, {
            relation: "家庭成员",
            index: 1
        }, {
            relation: "亲戚",
            index: 2
        }, {
            relation: "朋友",
            index: 3
        }, {
            relation: "其他",
            index: 4
        } ],
        gansite: [ {
            relation: "正常",
            index: 0
        }, {
            relation: "异常",
            index: 1
        } ],
        shensite: [ {
            relation: "正常",
            index: 0
        }, {
            relation: "异常",
            index: 1
        } ],
        beiyunsite: [ {
            relation: "无",
            index: 0
        }, {
            relation: "备孕中",
            index: 1
        } ],
        feritinsite: [ {
            relation: "无",
            index: 0
        }, {
            relation: "有",
            index: 1
        } ],
        feritin_index: 3,
        diabetessite: [ {
            relation: "无",
            index: 0
        }, {
            relation: "有",
            index: 1
        } ],
        diabetes_index: 3,
        allergysite: [ {
            relation: "无",
            index: 0
        }, {
            relation: "有",
            index: 1
        } ],
        allergy_index: 3,
        sick_index: 0,
        sickShows: !1,
        papers: [ {
            cert: "身份证"
        }, {
            cert: "护照"
        }, {
            cert: "军人证"
        }, {
            cert: "台胞证"
        }, {
            cert: "港澳居民内地同行证"
        }, {
            cert: "宝宝卡"
        } ],
        pap_index: 0,
        paperShows: !1,
        region: [ "四川省", "广元市", "苍溪县" ],
        sex: ""
    },
    radioChange: function(e) {
        console.log(e), console.log("radio发生change事件，携带value值为：", e.detail.value);
        var t = this.data.items;
        this.setData({
            sex: e.detail.value
        });
        t = this.data.items;
        for (var a = 0; a < t.length; ++a) t[a].checked = t[a].value == e.detail.value;
        console.log(t), this.setData({
            items: t
        });
    },
    radioChangehunyin: function(e) {
        console.log(e), console.log("radio发生change事件，携带value值为：", e.detail.value);
        var t = this.data.huny;
        this.setData({
            hunyin: e.detail.value
        });
        t = this.data.huny;
        for (var a = 0; a < t.length; ++a) t[a].checked = t[a].value == e.detail.value;
        console.log(t), this.setData({
            huny: t
        });
    },
    choseRelation: function(e) {
        console.log(e);
        var t = this.data.sick_index, a = this.data.if_exist;
        if (0 == t && 1 == a) return wx.showToast({
            title: "不能更改自己的家庭关系",
            icon: "none"
        }), !1;
        this.setData({
            sick_index: e.currentTarget.dataset.index
        });
    },
    ganbut: function(e) {
        console.log(e);
        this.setData({
            gan_index: e.currentTarget.dataset.index
        });
    },
    shenbut: function(e) {
        console.log(e);
        this.setData({
            shen_index: e.currentTarget.dataset.index
        });
    },
    beiyunbut: function(e) {
        console.log(e);
        this.setData({
            be_index: e.currentTarget.dataset.index
        });
    },
    feritinbut: function(e) {
        console.log(e);
        this.setData({
            feritin_index: e.currentTarget.dataset.index
        });
    },
    diabetesbut: function(e) {
        console.log(e);
        this.setData({
            diabetes_index: e.currentTarget.dataset.index
        });
    },
    allergybut: function(e) {
        console.log(e);
        this.setData({
            allergy_index: e.currentTarget.dataset.index
        });
    },
    certificate: function(e) {
        console.log(e), this.setData({
            pap_index: e.currentTarget.dataset.index
        });
    },
    onLoad: function(e) {
        var t = this;
        console.log(e.doc);
        var a = wx.getStorageSync("color"), i = e.j_id, n = e.last;
        (n ? t.setData({
            last: n
        }) : t.setData({
            last: ""
        }), e.sick_index) && (0 == e.sick_index ? (console.log(t.data.sickrela, e.sick_index), 
        t.setData({
            sickrela: t.data.sickrela,
            sick_index: parseInt(e.sick_index)
        })) : (s.util.request({
            url: "entry/wxapp/zhuanjia.userjiaren",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                if ("0" == a.data.length) var i = [ {
                    relation: "自己",
                    index: 0
                }, {
                    relation: "家庭成员",
                    index: 1
                }, {
                    relation: "亲戚",
                    index: 2
                }, {
                    relation: "朋友",
                    index: 3
                }, {
                    relation: "其他",
                    index: 4
                } ]; else if (e.sickrela) i = JSON.parse(e.sickrela); else i = [ {
                    relation: "家庭成员",
                    index: 1
                }, {
                    relation: "亲戚",
                    index: 2
                }, {
                    relation: "朋友",
                    index: 3
                }, {
                    relation: "其他",
                    index: 4
                } ];
                t.setData({
                    sickrela: i
                });
            }
        }), s.util.request({
            url: "entry/wxapp/user.myinformation",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                console.log(e), e.data ? t.setData({
                    if_exist: 1
                }) : t.setData({
                    if_exist: 0
                });
            }
        }), t.setData({
            sick_index: parseInt(e.sick_index)
        })));
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        }), "" != e.doc || null != e.doc ? t.setData({
            doc: e.doc
        }) : t.setData({
            doc: ""
        }), t.setData({
            choose_year: this.data.multiArray[0][0],
            bgc: a,
            j_id: i
        }), t.getmydan();
    },
    selectTap: function(e) {
        console.log(e);
        e.currentTarget.dataset.index;
        0 == e.currentTarget.dataset.index ? this.setData({
            selectShow: !this.data.selectShow
        }) : 1 == e.currentTarget.dataset.index ? this.setData({
            selectShows: !this.data.selectShows
        }) : 2 == e.currentTarget.dataset.index ? this.setData({
            sickShows: !this.data.sickShows
        }) : 3 == e.currentTarget.dataset.index && this.setData({
            paperShows: !this.data.paperShows
        });
    },
    changeRegin: function(e) {
        this.data.region = e.detail.value, this.setData({
            region: this.data.region
        });
    },
    sicksTap: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            sick_index: t,
            sickShows: !this.data.sickShows
        });
    },
    paperTap: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            pap_index: t,
            paperShows: !this.data.paperShows
        });
    },
    bindMultiPickerChange: function(e) {
        console.log(e), console.log("picker发送选择改变，携带下标为", e.detail.value), this.setData({
            multiIndex: e.detail.value
        });
        var t = this.data.multiIndex;
        this.data.multiArray[0][t[0]], this.data.multiArray[1][t[1]], this.data.multiArray[2][t[2]];
        this.setData({
            time: e.detail.value
        });
    },
    bindMultiPickerColumnChange: function(t) {
        if (0 == t.detail.column) {
            var a = this.data.multiArray[t.detail.column][t.detail.value];
            console.log(a), this.setData({
                choose_year: a
            });
        }
        if (1 == t.detail.column) {
            var i = parseInt(this.data.multiArray[t.detail.column][t.detail.value]), n = [];
            if (1 == i || 3 == i || 5 == i || 7 == i || 8 == i || 10 == i || 12 == i) {
                for (var s = 1; s <= 31; s++) s < 10 && (s = "0" + s), n.push("" + s);
                this.setData((0, e.default)({}, "multiArray[2]", n));
            } else if (4 == i || 6 == i || 9 == i || 11 == i) {
                for (var o = 1; o <= 30; o++) o < 10 && (o = "0" + o), n.push("" + o);
                this.setData((0, e.default)({}, "multiArray[2]", n));
            } else if (2 == i) {
                var d = parseInt(this.data.choose_year);
                if (console.log(d), d % 400 != 0 && d % 100 == 0 || d % 4 != 0) {
                    for (var r = 1; r <= 28; r++) r < 10 && (r = "0" + r), n.push("" + r);
                    this.setData((0, e.default)({}, "multiArray[2]", n));
                } else {
                    for (var l = 1; l <= 29; l++) l < 10 && (l = "0" + l), n.push("" + l);
                    this.setData((0, e.default)({}, "multiArray[2]", n));
                }
            }
            console.log(this.data.multiArray[2]);
        }
        var c = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        c.multiIndex[t.detail.column] = t.detail.value, this.setData(c);
    },
    bindsubmit: function(e) {
        console.log(e);
        var t = this.data.pap_index, a = this.data.sick_index, i = this.data.region, n = e.detail.value, o = n.datetime, d = n.names, r = n.numcard, l = n.tel, c = n.tizhong, u = n.shengao, h = n.zhiye, x = n.xuex, g = this.data.sex, p = this.data.hunyin ? this.data.hunyin : e.detail.value.hunyin;
        console.log(p);
        var f = this.data.gan_index, _ = this.data.shen_index, w = this.data.be_index, y = this.data.feritin_index, m = this.data.diabetes_index, v = this.data.allergy_index;
        wx.getStorageSync("openid"), this.data.ownsick_index;
        return "" == d ? (wx.showToast({
            title: "请填写患者姓名",
            icon: "none"
        }), !1) : 0 == g ? (wx.showToast({
            title: "请选择性别",
            icon: "none"
        }), !1) : o ? "" == c ? (wx.showToast({
            title: "请填写患者体重",
            icon: "none"
        }), !1) : "" == u ? (wx.showToast({
            title: "请填写患者身高",
            icon: "none"
        }), !1) : "" == p ? (wx.showToast({
            title: "请选择婚姻状况",
            icon: "none"
        }), !1) : "" == h ? (wx.showToast({
            title: "请填写职业",
            icon: "none"
        }), !1) : "" == x ? (wx.showToast({
            title: "请填写血型",
            icon: "none"
        }), !1) : 0 == i ? (wx.showToast({
            title: "请选择所在城市",
            icon: "none"
        }), !1) : 3 == f ? (wx.showToast({
            title: "请选择肝功能",
            icon: "none"
        }), !1) : 3 == _ ? (wx.showToast({
            title: "请选择肾功能",
            icon: "none"
        }), !1) : 3 == w ? (wx.showToast({
            title: "请选择备孕情况",
            icon: "none"
        }), !1) : 3 == y ? (wx.showToast({
            title: "请选择高血压病史",
            icon: "none"
        }), !1) : 3 == m ? (wx.showToast({
            title: "请选择糖尿病病史",
            icon: "none"
        }), !1) : 3 == v ? (wx.showToast({
            title: "请选择药物过敏史",
            icon: "none"
        }), !1) : "" == l ? (wx.showToast({
            title: "请填写手机号",
            icon: "none"
        }), !1) : this.data.j_id ? (s.util.request({
            url: "entry/wxapp/user.updateinfo",
            data: {
                pap_index: t,
                sick_index: a,
                region: i,
                datetime: o,
                names: d,
                numcard: r,
                tel: l,
                sex: g,
                openid: wx.getStorageSync("openid"),
                j_id: this.data.j_id,
                tizhong: c,
                shengao: u,
                hunyin: p,
                zhiye: h,
                gan_index: f,
                shen_index: _,
                be_index: w,
                xuex: x,
                feritin_index: y,
                diabetes_index: m,
                allergy_index: v
            },
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "修改成功",
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                detail: 1
                            });
                        }, 2e3);
                    }
                });
            }
        }), !1) : void s.util.request({
            url: "entry/wxapp/user.addjiaren",
            data: {
                pap_index: t,
                sick_index: a,
                region: i,
                datetime: o,
                names: d,
                numcard: r,
                tel: l,
                sex: g,
                openid: wx.getStorageSync("openid"),
                tizhong: c,
                shengao: u,
                hunyin: p,
                zhiye: h,
                gan_index: f,
                shen_index: _,
                be_index: w,
                xuex: x
            },
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "添加成功",
                    icon: "none",
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                detail: 1
                            });
                        }, 2e3);
                    }
                });
            }
        }) : (wx.showToast({
            title: "请选择出生日期",
            icon: "none"
        }), !1);
    },
    onReady: function() {},
    onShow: function() {
        var e = getCurrentPages(), t = e[e.length - 1];
        t.data.myphone && this.setData({
            myphone: t.data.myphone
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getmydan: function() {
        var e = this, t = e.data.j_id;
        s.util.request({
            url: "entry/wxapp/user.detailmyjd",
            data: {
                j_id: t
            },
            success: function(t) {
                console.log(t);
                var a = parseInt(t.data.sick_index);
                if (t.data) {
                    if (a > 0) {
                        e.setData({
                            sickrela: [ {
                                relation: "家庭成员",
                                index: 1
                            }, {
                                relation: "亲戚",
                                index: 2
                            }, {
                                relation: "朋友",
                                index: 3
                            }, {
                                relation: "其他",
                                index: 4
                            } ]
                        });
                    } else e.setData({
                        sickrela: e.data.sickrela
                    });
                    var i = t.data.region.split(","), n = e.data.papers[t.data.pap_index];
                    e.setData({
                        myinfo: t.data,
                        region: i,
                        time: t.data.datetime,
                        item: n,
                        sex: t.data.sex,
                        sick_index: parseInt(t.data.sick_index),
                        shen_index: parseInt(t.data.shen_index),
                        gan_index: parseInt(t.data.gan_index),
                        be_index: parseInt(t.data.be_index),
                        feritin_index: parseInt(t.data.feritin_index),
                        diabetes_index: parseInt(t.data.diabetes_index),
                        allergy_index: parseInt(t.data.allergy_index)
                    });
                    for (var s = e.data.items, o = 0; o < s.length; o++) s[o].value == t.data.sex && (s[o].checked = !0);
                    var d = e.data.huny;
                    console.log(d);
                    for (o = 0; o < d.length; o++) d[o].value == t.data.hunyin && (d[o].checked = !0);
                    e.setData({
                        items: s,
                        huny: d,
                        huny1: t.data.hunyin
                    });
                }
            }
        });
    },
    checkphone: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.phone;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/tel/tel?u_phone=" + t + "&enter=1"
        });
    }
});