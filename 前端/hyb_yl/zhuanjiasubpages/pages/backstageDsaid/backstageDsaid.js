function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = getApp(), n = require("../../../../template/backstageTemplate.js");

Page({
    data: (t = {
        hj_id: 0,
        _num: 1,
        _num1: 0,
        show: !0,
        show1: !1,
        nav: 0,
        page: 0,
        page1: 0,
        prenumber: 6,
        prenumber1: 6,
        text: "",
        background: [ "#cd5db8", "#f4b83e", "#5babf9", "#eb4c6f", "#59c387" ],
        background1: [ "#b75ad3", "#f2a83d", "#54acf9", "#ec608e", "#58c088" ],
        randomColorArr: [],
        wzshow: !1,
        wzshow1: !1,
        wrapBox: !0,
        h_type: 1,
        zid: 0,
        leixin: 1
    }, a(t, "wzshow", !1), a(t, "meiyou", !1), a(t, "meiyou1", !1), a(t, "forbidden", !0), 
    t),
    particulars: function(a) {
        var t = a.currentTarget.dataset.h_id, e = (a.currentTarget.dataset.h_leixing, this.data.h_type);
        wx.setStorageSync("eduidindex", a.currentTarget.dataset.index + 1), wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/particulars/particulars?h_id=" + t + "&h_type=" + e
        });
    },
    share: function(a) {
        console.log(a);
        var t = JSON.stringify(a.currentTarget.dataset.item), e = a.currentTarget.dataset.item.zid;
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/publishFenx/publishFenx?fromType=2&patientType=3&saidtype=2&hjlistinfo=" + t + "&zid=" + e
        });
    },
    jiagere: function(a) {
        console.log(a);
        var t = this.data.zid, e = this.data.z_name;
        a.currentTarget.dataset.z_yy_sheng;
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/Dsaidnew/Dsaidnew?zid=" + t + "&z_name=" + e
        });
    },
    sharePublic: function(a) {
        var t = this.data.zid;
        wx.setStorageSync("currentSaid", this.data.arr1[a.currentTarget.dataset.index]), 
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/publishSaid/publishSaid?fromType=2&patientType=3&zid=" + t
        });
    },
    clickNum: function(a) {
        var t = a.currentTarget.dataset.num;
        this.setData({
            _num: a.target.dataset.num
        }), 1 == this.data._num ? (this.setData({
            show: !0,
            show1: !1,
            page: 0,
            meiyou1: !1
        }), this.onclick()) : 2 == this.data._num && (this.setData({
            show: !1,
            show1: !0,
            page1: 0,
            meiyou: !1
        }), this.onclick1()), wx.hideNavigationBarLoading(), 2 == t ? (this.setData({
            leixin: t
        }), this.getMyzhuan()) : (this.setData({
            zid: 0,
            leixin: t,
            hj_id: 0
        }), this.getAllhjfenl());
    },
    clickNum1: function(a) {
        var t = this;
        t.setData({
            h_type: 1
        }), 1 == a.target.dataset.num ? e.util.request({
            url: "entry/wxapp/huanjiao.remen",
            success: function(a) {
                console.log(a);
                for (var e = a.data.hjlist, n = 0; n < e.length; n++) {
                    var i = e[n].h_dianzan, s = e[n].h_read, r = e[n].h_zhuanfa;
                    if (i.length < 6) e[n].h_dianzan = i; else if (i.length > 8) {
                        var o = i.substring(i.length - 8, i.length - 8);
                        e[n].h_dianzan = parseFloat(parseInt(i / 1e8) + "." + o) + "亿";
                    } else if (i.length > 5) {
                        var l = i.substring(i.length - 4, i.length - 4);
                        e[n].h_dianzan = parseFloat(parseInt(i / 1e4) + "." + l) + "W";
                    }
                    if (s.length < 6) e[n].h_read = s; else if (s.length > 8) {
                        var h = s.substring(s.length - 8, s.length - 8);
                        e[n].h_read = parseFloat(parseInt(s / 1e8) + "." + h) + "亿";
                    } else if (s.length > 5) {
                        var u = s.substring(s.length - 4, s.length - 4);
                        e[n].h_read = parseFloat(parseInt(s / 1e4) + "." + u) + "w";
                    }
                    if (r.length < 6) e[n].h_zhuanfa = r; else if (r.length > 8) {
                        var d = r.substring(r.length - 8, r.length - 8);
                        e[n].h_zhuanfa = parseFloat(parseInt(r / 1e8) + "." + d) + "亿";
                    } else if (r.length > 5) {
                        var g = r.substring(r.length - 4, r.length - 4);
                        e[n].h_zhuanfa = parseFloat(parseInt(r / 1e4) + "." + g) + "w";
                    }
                }
                t.setData({
                    hjlist: e
                });
            }
        }) : this.getAllhjfenl(), t.setData({
            _num1: a.target.dataset.num
        }), 0 == t.data._num1 ? t.onclick1() : 1 == t.data._num1 && t.onclick1();
    },
    bindlist: function(a) {
        console.log(a);
        if ("" == a.target.dataset.id) var t = 0; else t = a.target.dataset.id;
        this.setData({
            nav: a.target.dataset.nav,
            text: a.target.dataset.id,
            hj_id: t,
            zid: a.currentTarget.dataset.zid
        }), this.getAllhjfenl();
    },
    onclick: function(a) {
        var t = {
            eduId: 1,
            title: "预防感冒",
            name: "小花",
            releaseDayTime: "2018-10-23",
            nmType: "多吃蔬菜",
            pageView: 2,
            praiseNum: 10,
            shareNum: 5,
            coverImg: "/assets/images/wzzuan.png",
            eduType: 2
        }, e = {
            eduId: 1,
            title: "预防感冒和不运动",
            name: "小花",
            releaseDayTime: "2018-10-23",
            nmType: "多吃蔬菜",
            pageView: 3,
            praiseNum: 8,
            shareNum: 6,
            coverImg: "/assets/images/wzzuan.png",
            eduType: 2
        }, n = [ t, e, t, e ], i = [ e, t, e, t ];
        this.setData({
            arr: n
        }), this.setData({
            arr1: i
        });
    },
    onclick1: function(a) {},
    lower: function() {
        if (!this.data.meiyou1 && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var a, t = this, n = this.data.page, i = t.data.arr;
            wx.request({
                url: e.globalData.dic + "doctor/education/doctorEducation/" + n + "/" + t.data.prenumber + "/" + t.data.token,
                data: {
                    cdType: t.data.text
                },
                success: function(e) {
                    if (console.log(e), 200 == e.data.code) {
                        n++, t.setData({
                            page: n
                        });
                        var s = e.data.data;
                        if (a = i.concat(s), e.data.data.length == []) return t.setData({
                            meiyou1: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), t.setData({
                            arr: a,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    },
    lower1: function() {
        if (!this.data.meiyou && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var a, t = this, n = t.data.page1, i = t.data.arr1;
            wx.request({
                url: e.globalData.dic + "doctor/education/listDoctorEducation/" + n + "/" + t.data.prenumber1,
                data: {
                    type: t.data._num1
                },
                success: function(e) {
                    if (console.log(e), 200 == e.data.code) {
                        n++, t.setData({
                            page1: n
                        });
                        var s = e.data.data;
                        if (a = i.concat(s), e.data.data.length == []) return t.setData({
                            meiyou: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), t.setData({
                            arr1: a,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    },
    statistics: function(a) {},
    clicknav: function(a) {
        var t = a.currentTarget.dataset.hj_id;
        wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/commonality/commonality?hj_id=" + t
        });
    },
    onLoad: function(a) {
        n.tabbar("tabBar", 2, this);
        var t = this;
        this.getAllhjfenl(), t.setData({
            token: wx.getStorageSync("log") || ""
        }), t.onclick(), t.onclick1(), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        });
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), t.setData({
            bgc: e
        });
    },
    alet: function(a) {
        this.setData({
            showshow: !1
        });
    },
    wrapBox: function(a) {
        this.setData({
            showshow: !0
        });
    },
    onShow: function() {},
    bindTouchStart: function(a) {
        this.startTime = a.timeStamp;
    },
    bindTouchEnd: function(a) {
        this.endTime = a.timeStamp;
    },
    longTap: function(a) {
        var t = this;
        wx.showActionSheet({
            itemList: [ "删除患教" ],
            success: function(n) {
                wx.getStorageSync("log");
                var i = a.currentTarget.dataset.groupid;
                wx.request({
                    url: e.globalData.dic + "doctor/education/deleteMyEducation/" + i,
                    success: function(a) {
                        console.log(a), t.onclick();
                    }
                });
            }
        });
    },
    getAllhjfenl: function() {
        var a = this, t = a.data.hj_id, n = a.data.zid.zid;
        console.log(n), a.setData({
            h_type: 1
        }), e.util.request({
            url: "entry/wxapp/huanjiao.allhjfenl",
            data: {
                hj_id: t,
                zid: n
            },
            success: function(t) {
                console.log(t);
                var e = [ "#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100", "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C", "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A", "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32", "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B" ], n = t.data.fenl, i = n.length, s = e.length, r = [];
                do {
                    var o = e[Math.floor(Math.random() * s)];
                    r.push(o), i--;
                } while (i > 0);
                a.setData({
                    randomColorArr: r
                });
                for (var l = t.data.hjlist, h = 0; h < l.length; h++) {
                    var u = l[h].h_dianzan, d = l[h].h_read, g = l[h].h_zhuanfa;
                    if (u.length < 6) l[h].h_dianzan = u; else if (u.length > 8) {
                        var c = u.substring(u.length - 8, u.length - 8);
                        l[h].h_dianzan = parseFloat(parseInt(u / 1e8) + "." + c) + "亿";
                    } else if (u.length > 5) {
                        var f = u.substring(u.length - 4, u.length - 4);
                        l[h].h_dianzan = parseFloat(parseInt(u / 1e4) + "." + f) + "W";
                    }
                    if (d.length < 6) l[h].h_read = d; else if (d.length > 8) {
                        var p = d.substring(d.length - 8, d.length - 8);
                        l[h].h_read = parseFloat(parseInt(d / 1e8) + "." + p) + "亿";
                    } else if (d.length > 5) {
                        var m = d.substring(d.length - 4, d.length - 4);
                        l[h].h_read = parseFloat(parseInt(d / 1e4) + "." + m) + "w";
                    }
                    if (g.length < 6) l[h].h_zhuanfa = g; else if (g.length > 8) {
                        var w = g.substring(g.length - 8, g.length - 8);
                        l[h].h_zhuanfa = parseFloat(parseInt(g / 1e8) + "." + w) + "亿";
                    } else if (g.length > 5) {
                        var b = g.substring(g.length - 4, g.length - 4);
                        l[h].h_zhuanfa = parseFloat(parseInt(g / 1e4) + "." + b) + "w";
                    }
                }
                a.setData({
                    Wpost: n,
                    hjlist: l,
                    dianzan: t.data.dianzan,
                    yuedu: t.data.read,
                    zhuanfa: t.data.zhuanfa
                });
            }
        });
    },
    getMyzhuan: function() {
        var a = this;
        e.util.request({
            url: "entry/wxapp/Zhuanjia.ifzj",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                a.setData({
                    zid: t.data
                }), a.getAllhjfenl();
            },
            fail: function(a) {
                console.log(a);
            }
        });
    }
});