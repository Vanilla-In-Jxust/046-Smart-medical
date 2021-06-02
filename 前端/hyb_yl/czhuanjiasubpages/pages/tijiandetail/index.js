var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), t = getApp();

Page({
    data: {
        oneinfo: [ {
            text1: "医生姓名",
            text2: "李秀清"
        }, {
            text1: "订单名称",
            text2: "电话问诊"
        }, {
            text1: "订单编号",
            text2: "6379287611"
        }, {
            text1: "患者姓名",
            text2: "啊啊啊"
        } ],
        all_num: 2,
        datalist: [],
        sickimg: [],
        medimg: [],
        sickhisty: [],
        allergy: [],
        hospatil: [],
        dochelp: "",
        sicktel: "",
        userInfo: {},
        datatime: [],
        textvalue: [],
        issmoke: [],
        liangsmoke: [],
        smoking: [],
        jiesmok: [],
        iswine: [],
        classwine: [],
        liangwine: [],
        jiewine: [],
        isactive: [],
        datactive: [],
        timeactive: [],
        classactive: [],
        img2: [],
        disableJoin: !1
    },
    onGotuserInfo: function(e) {
        var a = this, n = a.data.zid, o = t.siteInfo.uniacid, i = a.data.bingzs, s = a.data.money, c = a.data.oid, l = a.data.order;
        console.log(l);
        var r = a.data.bl_id;
        t.util.request({
            url: "entry/wxapp/zhuanjia.ifguanzhu",
            data: {
                zid: n,
                openid: wx.getStorageSync("openid"),
                cerated_type: 0
            },
            success: function(e) {
                console.log(e), 1 !== e.data && t.util.request({
                    url: "entry/wxapp/zhuanjia.changelove",
                    data: {
                        zid: n,
                        openid: wx.getStorageSync("openid"),
                        cerated_type: 0
                    },
                    success: function(e) {
                        console.log(e);
                    }
                });
            }
        }), wx.showModal({
            content: "是否支付",
            success: function(g) {
                g.confirm ? t.util.request({
                    url: a.data.url + "app/index.php?i=" + o + "&c=entry&a=wxapp&do=Pay&m=hyb_yl",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        z_tw_money: s
                    },
                    success: function(o) {
                        console.log(o), wx.requestPayment({
                            timeStamp: o.data.timeStamp,
                            nonceStr: o.data.nonceStr,
                            package: o.data.package,
                            signType: o.data.signType,
                            paySign: o.data.paySign,
                            success: function(o) {
                                console.log(o), t.util.request({
                                    url: "entry/wxapp/Wxmoban.doctemp",
                                    data: {
                                        openid: wx.getStorageSync("openid"),
                                        zid: n,
                                        bingzs: i,
                                        name: a.data.name,
                                        oid: c,
                                        bl_id: r,
                                        order: l
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                });
                                var s = a.data.docroom;
                                wx.setStorageSync("docroom", s);
                                var g = e.detail.userInfo || {};
                                wx.setStorage({
                                    key: "userInfo",
                                    data: g
                                });
                                a.data.keywords;
                                a.onJoin(g);
                            }
                        });
                    }
                }) : wx.reLaunch({
                    url: "/hyb_yl/mysubpages/pages/my_dingdan1/my_dingdan1"
                });
            }
        });
    },
    checkJoinLock: function() {
        return !this.lock;
    },
    lockJoin: function() {
        this.lock = !0;
    },
    unlockJoin: function() {
        this.lock = !1;
    },
    onJoin: function(e) {
        e = e || {};
        var t = this.channel || "123", a = this.uid;
        if (t) {
            if (this.checkJoinLock()) {
                this.lockJoin();
                "broadcaster", wx.navigateTo({
                    url: "../meeting/meeting?channel=".concat(t, "&uid=").concat(a, "&role=").concat("broadcaster")
                });
            }
        } else wx.showToast({
            title: "请提供一个有效的房间名",
            icon: "none",
            duration: 2e3
        });
    },
    nextpage: function() {
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/telserev/index"
        });
    },
    nextpage2: function() {
        wx.reLaunch({
            url: "/hyb_yl/czhuanjiasubpages/pages/healreport/index"
        });
    },
    onLoad: function(a) {
        console.log(a);
        var n = a.zid, o = a.keywords, i = a.name, s = wx.getStorageSync("color"), c = a.bingzs, l = a.money, r = a.bl_id, g = a.oid;
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: s
        }), this.setData({
            all_num: a.num,
            bgc: s,
            zid: n,
            j_id: a.j_id,
            keywords: o,
            name: i,
            bingzs: c,
            money: l,
            oid: g,
            bl_id: r
        }), 0 == a.num) wx.setNavigationBarTitle({
            title: "收银台"
        }); else if (1 == a.num) {
            var d;
            wx.setNavigationBarTitle({
                title: "病例详情页"
            });
            var u = wx.getStorageSync("modul"), m = (wx.getStorageSync("sickname"), wx.getStorageSync("hospatil")), y = wx.getStorageSync("sickimg"), S = wx.getStorageSync("medimg"), w = wx.getStorageSync("sickhisty"), x = wx.getStorageSync("allergy"), p = wx.getStorageSync("dochelp"), h = JSON.parse(u);
            this.data.datalist;
            this.setData((d = {
                hospatil: m,
                datalist: h,
                sickimg: y,
                medimg: S,
                sickhisty: w,
                allergy: x
            }, (0, e.default)(d, "hospatil", m), (0, e.default)(d, "dochelp", p), (0, e.default)(d, "sicktel", a.phone), 
            d));
        } else if (2 == a.num) {
            wx.setNavigationBarTitle({
                title: "体检报告"
            });
            var f = wx.getStorageSync("data");
            console.log("体检日期", f);
            var v = wx.getStorageSync("textvalue");
            console.log("体检机构", v);
            var k = wx.getStorageSync("issmoke");
            console.log("是否抽烟", k);
            var b = wx.getStorageSync("liangsmoke");
            console.log("抽烟量", b);
            var _ = wx.getStorageSync("smoking");
            console.log("抽烟时间", _);
            var z = wx.getStorageSync("jiesmok");
            console.log("戒烟时间", z);
            var j = wx.getStorageSync("iswine");
            console.log("是否饮酒", j);
            var q = wx.getStorageSync("classwine");
            console.log("饮酒类型", q);
            var D = wx.getStorageSync("liangwine");
            console.log("饮酒量", D);
            var T = wx.getStorageSync("jiewine");
            console.log("戒酒时间", T);
            var J = wx.getStorageSync("isactive");
            console.log("是否锻炼", J);
            var B = wx.getStorageSync("datactive");
            console.log("锻炼情况", B);
            var I = wx.getStorageSync("timeactive");
            console.log("锻炼时长", I);
            var L = wx.getStorageSync("classactive");
            console.log("锻炼类型", L);
            var N = wx.getStorageSync("img2");
            console.log("体检图片", N), this.setData({
                datatime: f,
                textvalue: v,
                issmoke: k,
                liangsmoke: b,
                smoking: _,
                jiesmok: z,
                iswine: j,
                classwine: q,
                liangwine: D,
                jiewine: T,
                isactive: J,
                datactive: B,
                timeactive: I,
                classactive: L,
                img2: N
            });
        } else if (3 == a.num) {
            for (var P = wx.getStorageSync("help").join("　"), C = [], R = wx.getStorageSync("jbname"), G = 0; G < R.length; ++G) C.push(R[G].value);
            var A = wx.getStorageSync("img_arr"), E = C.join("　"), H = wx.getStorageSync("selectbc"), M = wx.getStorageSync("docinfo"), O = wx.getStorageSync("changes"), U = wx.getStorageSync("condition");
            if ("就诊过" == M) var W = M + " " + wx.getStorageSync("docname") + " " + wx.getStorageSync("keshi");
            this.setData({
                help_h: P,
                jbname: E,
                selectbc: H,
                docinfo: W,
                changes: O,
                condition: U,
                img_arr: A
            });
        } else if (4 == a.num) {
            var F = a.z_name, K = (i = a.name, a.order), Q = a.usernames;
            l = a.money;
            this.setData({
                z_name: F,
                name: i,
                order: K,
                usernames: Q,
                money: l
            });
        }
        var V = this;
        t.util.request({
            url: "entry/wxapp/user.detail",
            data: {
                j_id: a.j_id
            },
            success: function(e) {
                console.log(e), V.setData({
                    usernames: e.data.names
                });
            }
        }), t.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: n,
                key: o
            },
            success: function(e) {
                V.setData({
                    newmoney: e.data.data.newmoney,
                    z_name: e.data.data.z_name
                });
            }
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(e) {
                console.log(e), V.setData({
                    url: e.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        console.log("ss"), wx.navigateBack({
            detail: 2
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});