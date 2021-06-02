var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/typeof")), t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        yuyue_status: !1,
        proList: {
            spic: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
            name: "治疗胃癌",
            money: 2e4,
            browse: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
            accuracyTime: [ {
                thatDay: "2018-12-11",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            }, {
                thatDay: "2018-12-12",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            }, {
                thatDay: "2018-12-13",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            }, {
                thatDay: "2018-12-14",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            }, {
                thatDay: "2018-12-15",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            }, {
                thatDay: "2018-12-16",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            }, {
                thatDay: "2018-12-17",
                whatTime: [ {
                    spot: "09:00-10:00",
                    people: 3
                }, {
                    spot: "11:00-12:00",
                    people: 3
                }, {
                    spot: "14:00-15:00",
                    people: 3
                }, {
                    spot: "16:00-17:00",
                    people: 3
                }, {
                    spot: "17:00-18:00",
                    people: 3
                } ]
            } ]
        },
        paragraph: [ {
            spot: "09:00-10:00",
            people: 3
        }, {
            spot: "11:00-12:00",
            people: 3
        }, {
            spot: "14:00-15:00",
            people: 3
        }, {
            spot: "16:00-17:00",
            people: 3
        }, {
            spot: "17:00-18:00",
            people: 3
        } ],
        weekNum: 0,
        spotNum: 0,
        estimates: [ {
            phoneMask: "小强",
            star: 1,
            img: "/assets/images/796.png",
            createTime: "2018-10-26",
            estimate: "用了都说好"
        }, {
            phoneMask: "小强",
            star: 5,
            img: "/assets/images/796.png",
            createTime: "2018-10-26",
            estimate: "用了都说好"
        }, {
            phoneMask: "小强",
            star: 3,
            img: "/assets/images/796.png",
            createTime: "2018-10-26",
            estimate: "用了都说好"
        }, {
            phoneMask: "小强",
            star: 1,
            img: "/assets/images/796.png",
            createTime: "2018-10-26",
            estimate: "用了都说好"
        }, {
            phoneMask: "小强",
            star: 5,
            img: "/assets/images/796.png",
            createTime: "2018-10-26",
            estimate: "用了都说好"
        } ],
        num: 1,
        readAclock: 0
    },
    browseThis: function(e) {
        console.log(e);
        var t = e.currentTarget.id;
        this.setData({
            num: t
        });
    },
    agree: function() {
        this.data.readAclock;
        this.setData({
            readAclock: !this.data.readAclock
        });
    },
    noLook: function() {
        this.data.readAclock;
        this.setData({
            readAclock: !this.data.readAclock
        });
    },
    subLevels: function(e) {
        var t = e.currentTarget.dataset.index, a = (this.data.paragraph, this.data.proList.accuracyTime[t].whatTime);
        console.log(a), this.setData({
            paragraph: a,
            weekNum: t
        });
    },
    paragraphIns: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.index;
        this.data.arrTiem, this.data.paragraph;
        this.setData({
            spotNum: t
        });
    },
    determine: function() {
        this.data.readAclock;
        var e = this.data.paragraph, t = this.data.weekNum, a = this.data.spotNum, s = {
            tian: this.data.proList.accuracyTime[t].thatDay,
            dian: e[a].spot
        };
        console.log(s), this.setData({
            readAclock: !this.data.readAclock
        }), wx.navigateTo({
            url: "/hyb_yl/backstageGroceries/pages/information1/information1"
        });
    },
    huiIndex: function() {
        wx.navigateTo({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    onLoad: function(e) {
        console.log(e);
        var a = this, s = e.sid, o = e.zid, i = wx.getStorageSync("userInfo").nickName;
        t.util.request({
            url: "entry/wxapp/Infofuwu",
            data: {
                sid: s
            },
            success: function(e) {
                console.log(e), a.setData({
                    suoltu: e.data.suoltu,
                    servicebBox: e.data.servicebBox,
                    info: e.data.info,
                    stype: e.data.info.stype
                });
            }
        }), a.setData({
            sid: s,
            zid: o,
            name: i
        });
        var n = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Myinforsarray",
            data: {
                openid: n
            },
            success: function(e) {
                a.setData({
                    mygerzl: e.data.data
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onReady: function() {
        this.getFuwuinfos();
    },
    onShow: function() {
        for (var e = this.data.proList.accuracyTime, t = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ], a = 0; a < e.length; a++) {
            var s = new Date(Date.parse(e[a].thatDay));
            e[a].week = t[s.getDay()];
        }
        this.setData({
            "proList.accuracyTime": e
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getFuwuinfos: function() {
        var a = this, s = a.data.sid, o = a.data.zid;
        t.util.request({
            url: "entry/wxapp/Docfuwuinfo",
            data: {
                sid: s,
                zid: o,
                op: "info"
            },
            success: function(t) {
                console.log(t);
                var s = t.data, o = [], i = {};
                for (var n in s) a.copy(t.data, i), o = o.concat(i[n]);
                var r = Array.from(o);
                a.pin(r);
                for (var p = [ "一", "二", "三", "四", "五", "六", "日" ], c = 0; c < 7; c++) if ("object" == (0, 
                e.default)(r[c])) r[c].week = "周" + p[c]; else {
                    var l = {};
                    l.week = "周" + p[c], r[c] = l;
                }
                var u = new Date();
                if (0 == u.getDay()) var d = 6; else d = u.getDay() - 1;
                var f = r[r.length - 1];
                r.splice(r.length - 1, 1);
                for (var g = 0; g < r.length; g++) for (var m in r[g]) -1 != m.indexOf("num") && ("" == r[g][m] ? r[g].dian = !1 : r[g].dian = !0);
                console.log(r), a.setData({
                    selectdoctime: r,
                    length: r.length,
                    wg: d,
                    tid: f,
                    arr: s
                });
            }
        });
    },
    pin: function(e) {
        console.log(e);
        for (var t = 0, a = e.length; t < a; t++) if (t < e.length - 1 && "undefined" !== e[t].index && "undefined" !== e[t + 1].index && e[t].index == e[t + 1].index) {
            for (var s in e[t]) -1 != s.indexOf("time") && (e[t][s] += "-" + e[t + 1][s]), -1 != s.indexOf("num") && (e[t][s] += "-" + e[t + 1][s]);
            e.splice(t + 1, 1), t--;
        }
    },
    copy: function(t, a) {
        a = a || {};
        for (var s in t) "object" === (0, e.default)(t[s]) ? (a[s] = t[s].constructor === Array ? [] : {}, 
        this.copy(t[s], a[s])) : a[s] = t[s];
        return a;
    },
    close_modal: function() {
        this.setData({
            yuyue_status: !1
        });
    },
    yuyuw_xin: function(e) {
        var a = this, s = a.data.selectdoctime, o = e.target.dataset.index, i = "week" + o;
        for (var n in console.log(s, o, i), s[o]) {
            if (-1 != n.indexOf("time")) if (-1 != s[o][n].indexOf("-")) {
                if (-1 != n.indexOf("endtime")) var r = s[o][n].split("-");
                if (-1 != n.indexOf("starttime")) {
                    var p = s[o][n].split("-");
                    console.log(p);
                }
            } else {
                if (-1 != n.indexOf("endtime")) (r = []).push(s[o][n]);
                if (-1 != n.indexOf("starttime")) (p = []).push(s[o][n]), console.log(p);
            }
            if (-1 != n.indexOf("num")) if ("number" == typeof s[o][n] && (s[o][n] = String(s[o][n])), 
            -1 != s[o][n].indexOf("-")) var c = s[o][n].split("-"); else (c = []).push(s[o][n]);
        }
        console.log(r, c, p);
        for (var l = [], u = 0, d = r.length; u < d; u++) {
            var f = {};
            f.sjstr = p[u] + "-" + r[u], f.shen = c[u], f.cont = c[u], l[u] = f;
        }
        var g = a.data.selectdoctime, m = g[o].index, y = g[o].week, h = new Date(), w = h.getDate(), x = h.getMonth() + 1, v = h.getFullYear(), k = h.getDay();
        0 == k ? k = 6 : k--, w += m - k;
        var D = new Date(v, x, 0).getDate();
        w > D && (x++, w = 1 + (w - D));
        x < 10 && (x = "0" + x), w < 10 && (w = "0" + w);
        var T = v + "-" + x + "-" + w;
        console.log(l), a.setData({
            star: l,
            dangqianriqi: T,
            week: y,
            indxWeek: i,
            indx: o
        });
        var _ = e.target.dataset.id;
        t.util.request({
            url: "entry/wxapp/Select1",
            data: {
                tid: _
            },
            success: function(e) {
                a.setData({
                    yuyuebf: e.data.data
                });
            }
        }), this.setData({
            yuyue_status: !0
        });
    },
    choose_yy_time: function(e) {
        var a = this, s = a.data.arr, o = a.data.mygerzl, i = o.my_id, n = e.currentTarget.dataset.index, r = a.data.star, p = a.data.indx, c = (r = a.data.selectdoctime, 
        "week" + p);
        for (var l in r[p]) {
            if (-1 != l.indexOf("time")) if (-1 != r[p][l].indexOf("-")) {
                if (-1 != l.indexOf("endtime")) var u = r[p][l].split("-");
                if (-1 != l.indexOf("starttime")) var d = r[p][l].split("-");
            } else {
                if (-1 != l.indexOf("endtime")) (u = []).push(r[p][l]);
                if (-1 != l.indexOf("starttime")) (d = []).push(r[p][l]);
            }
            if (-1 != l.indexOf("num")) if ("number" == typeof r[p][l] && (r[p][l] = String(r[p][l])), 
            -1 != r[p][l].indexOf("-")) var f = r[p][l].split("-"); else (f = []).push(r[p][l]);
        }
        console.log(u);
        for (var g = [], m = 0, y = u.length; m < y; m++) {
            var h = {};
            h.sjstr = d[m] + "-" + u[m], h.shen = f[m], h.cont = f[m], g[m] = h;
        }
        var w = e.currentTarget.dataset.id;
        "week0" == (c = a.data.indxWeek) && (c = c.slice(0, c.length - 1));
        var x = a.data.week, v = a.data.name, k = a.data.zid, D = (e.currentTarget.dataset.data, 
        wx.getStorageSync("openid"));
        if (g[n].shen > 0) {
            k = a.data.zid, D = wx.getStorageSync("openid");
            var T = g[n].shen;
            console.log(g[n]);
            var _ = a.data.dangqianriqi, q = g[n].sjstr, z = g[n].sjstr.split("-"), O = (u = z[1], 
            d = z[0], _ + " " + q), S = (x = a.data.week, e.currentTarget.dataset.stype);
            console.log(S), t.util.request({
                url: "entry/wxapp/Myshifouyy",
                data: {
                    zy_openid: D,
                    zy_type: O,
                    zy_riqi: x
                },
                success: function(r) {
                    return !1 !== r.data.data ? (wx.showToast({
                        title: "您已预约",
                        icon: "success",
                        duration: 800
                    }), !1) : 0 == o ? (wx.showModal({
                        content: "请完善您的个人资料后再预约",
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "../gerenxinxi/gerenxinxi"
                            });
                        }
                    }), !1) : void wx.showModal({
                        content: "确认预约吗？",
                        success: function(o) {
                            var r = e.currentTarget.dataset.data, p = wx.getStorageSync("openid");
                            if (o.confirm) if (r > 0) t.util.request({
                                url: "entry/wxapp/Orderpay",
                                method: "GET",
                                data: {
                                    s_openid: p,
                                    s_ormoney: r
                                },
                                success: function(e) {
                                    wx.requestPayment({
                                        timeStamp: e.data.timeStamp,
                                        nonceStr: e.data.nonceStr,
                                        package: e.data.package,
                                        signType: e.data.signType,
                                        paySign: e.data.paySign,
                                        success: function(e) {
                                            t.util.request({
                                                url: "entry/wxapp/Joninmoney",
                                                data: {
                                                    use_openid: p,
                                                    leixing: S,
                                                    name: v,
                                                    pay: r,
                                                    zid: k,
                                                    types: 2
                                                },
                                                header: {
                                                    "content-type": "application/json"
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                },
                                                fail: function(e) {
                                                    console.log(e);
                                                }
                                            });
                                            var o = Array.from(s[c]);
                                            for (var l in s[c][n]) -1 != l.indexOf("num") && (console.log(s[c][n]), s[c][n][l]--);
                                            var u = c;
                                            t.util.request({
                                                url: "entry/wxapp/Upweekfuwu",
                                                data: {
                                                    wekinfo: o,
                                                    xingqi: u,
                                                    tid: w
                                                },
                                                success: function(e) {
                                                    console.log(e), t.util.request({
                                                        url: "entry/wxapp/Userfuwuadd",
                                                        data: {
                                                            z_yy_money: r,
                                                            my_id: i,
                                                            zid: k,
                                                            openid: p,
                                                            tttime: O,
                                                            week: x,
                                                            stype: S,
                                                            sid: a.data.sid
                                                        },
                                                        success: function(e) {
                                                            console.log(e), wx.showToast({
                                                                title: "预约成功",
                                                                success: function() {
                                                                    g[n].shen--, a.setData({
                                                                        star: g
                                                                    }), setTimeout(function() {}, 2e3);
                                                                }
                                                            }), t.util.request({
                                                                url: "entry/wxapp/Paywexdocmb",
                                                                data: {
                                                                    my_id: i,
                                                                    zid: k,
                                                                    tttime: O
                                                                },
                                                                success: function(e) {
                                                                    console.log(e);
                                                                },
                                                                fail: function(e) {}
                                                            });
                                                        },
                                                        fail: function(e) {}
                                                    });
                                                }
                                            });
                                        },
                                        fail: function(e) {}
                                    });
                                }
                            }); else {
                                t.util.request({
                                    url: "entry/wxapp/Joninmoney",
                                    data: {
                                        use_openid: p,
                                        leixing: "挂号",
                                        name: v,
                                        pay: r,
                                        zid: k
                                    },
                                    header: {
                                        "content-type": "application/json"
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    },
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                }), console.log(s, c);
                                var l = Array.from(s[c]);
                                for (var u in console.log(s), s[c][n]) -1 != u.indexOf("num") && (console.log(s[c][n]), 
                                s[c][n][u]--);
                                var d = c;
                                t.util.request({
                                    url: "entry/wxapp/Upweek",
                                    data: {
                                        wekinfo: l,
                                        xingqi: d,
                                        tid: w
                                    },
                                    success: function(e) {
                                        t.util.request({
                                            url: "entry/wxapp/Myzhuanjiayy",
                                            data: {
                                                zy_money: r,
                                                zy_name: i,
                                                z_name: k,
                                                zy_openid: p,
                                                zy_type: O,
                                                zy_riqi: x,
                                                ksname: ksname,
                                                syperson: T,
                                                states: 1,
                                                remove: 1,
                                                paystate: 1
                                            },
                                            success: function(e) {
                                                wx.showToast({
                                                    title: "预约成功",
                                                    success: function() {
                                                        g[n].shen--, a.setData({
                                                            star: g
                                                        }), t.util.request({
                                                            url: "entry/wxapp/PaysendSmsgl",
                                                            data: {
                                                                my_id: i,
                                                                zid: k,
                                                                tttime: O
                                                            },
                                                            success: function(e) {},
                                                            fail: function(e) {}
                                                        }), setTimeout(function() {}, 2e3);
                                                    }
                                                }), t.util.request({
                                                    url: "entry/wxapp/Paywexdocmb",
                                                    data: {
                                                        my_id: i,
                                                        zid: k,
                                                        tttime: O
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    },
                                                    fail: function(e) {}
                                                });
                                            },
                                            fail: function(e) {}
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            });
        } else wx.showToast({
            title: "已约满"
        });
    }
});