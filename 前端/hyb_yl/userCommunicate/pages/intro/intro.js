var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), a = getApp(), e = require("../../../../utils/bmap-wx.min.js");

Page({
    data: {
        myDcoBoo: !0,
        modelBoo: !1,
        backBoo: !1,
        authState: null,
        id: 1,
        url: "patient/sign/doctorInfo/get/",
        doctor: {
            jobType: 1,
            patientCount: 100,
            askNum: 10,
            userIcon: "/assets/images/796.png"
        },
        service: [ {
            cdInterroga: 290101,
            currentPrice: 1e3,
            servicePrice: 2e3
        }, {
            cdInterroga: 290102,
            currentPrice: 1e3,
            servicePrice: 2e3
        } ],
        options: 0,
        works: [ {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: ""
        }, {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: "50"
        }, {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: "10"
        }, {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: "80"
        }, {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: "50"
        }, {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: "10"
        }, {
            title: "说说怎么预防感冒",
            tiem: "50",
            money: "80"
        } ],
        servicePackage: [ {
            title: "手术快约",
            state: 0,
            id: 1
        }, {
            title: "专家坐诊",
            state: 1,
            id: 2
        }, {
            title: "点名会诊",
            state: 0,
            id: 3
        } ],
        specialService: [ {
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案"
        }, {
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案"
        }, {
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案"
        }, {
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案"
        }, {
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案"
        } ],
        myDoctor: "",
        myNurse: "",
        myTeam: "",
        lookOverBoo: 0,
        relation: {
            signState: 2
        },
        confirmFlag: 0,
        reasonList: [ "技术菜", "收费高", "不回信息" ]
    },
    onLoad: function(t) {
        var o = this, n = t.zid, i = t.juli, s = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: s
        }), a.util.request({
            url: "entry/wxapp/Zhuanjiaxiangqing",
            data: {
                id: n
            },
            success: function(t) {
                console.log(t), o.setData({
                    xiangqing: t.data.data,
                    shanchang: t.data.data.shanchang
                });
            },
            fail: function(t) {}
        }), this.getAllteam(n), this.getZhuanjiakeshi(n), this.loadInfo();
        new e.BMapWX({
            ak: "4DGFO0htsrocLEd7iQefj7F9tL1Fw1Xn"
        });
        o.setData({
            juli: i,
            zid: n
        });
    },
    selectBtn: function(t) {
        if (console.log(t), 0 != this.data.doctor.activeFlag) {
            var a = this;
            if (1 == a.data.personalFlag) if (a.data.personalArr.gender && a.data.personalArr.name && a.data.personalArr.phone) {
                if (0 != a.data.myDoctor.length) return console.log(111), void a.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与其他健康顾问签约，不能再签约此健康顾问，需要与当前健康顾问解约后，才能与此健康顾问签约。",
                    targetDoctor: a.data.myDoctor
                });
                if (0 != a.data.myNurse.length) return console.log(2222), void a.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与护理顾问签约，不能再签约健康顾问，需要与护理顾问解约后，才能与健康顾问签约。",
                    targetDoctor: a.data.myNurse
                });
                if (0 != a.data.myTeam.length) return console.log(3333), void a.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与团队顾问签约，不能再签约健康顾问，需要与团队顾问解约后，才能与健康顾问签约。",
                    targetDoctor: a.data.myTeam
                });
                this.setData({
                    modelBoo: !0
                });
            } else wx.showModal({
                title: "个人信息未完善",
                cancelText: "以后再说",
                confirmText: "去完善",
                confirmColor: "#3b4ca9",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "/hyb_yl/userShopping/pages/index1/index1"
                    });
                }
            }); else {
                if (0 != a.data.myDoctor.length) return console.log(111), void a.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与其他健康顾问签约，不能再签约此健康顾问，需要与当前健康顾问解约后，才能与此健康顾问签约。",
                    targetDoctor: a.data.myDoctor
                });
                if (0 != a.data.myNurse.length) return console.log(2222), void a.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与护理顾问签约，不能再签约健康顾问，需要与护理顾问解约后，才能与健康顾问签约。",
                    targetDoctor: a.data.myNurse
                });
                if (0 != a.data.myTeam.length) return console.log(3333), void a.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与团队顾问签约，不能再签约健康顾问，需要与团队顾问解约后，才能与健康顾问签约。",
                    targetDoctor: a.data.myTeam
                });
                this.setData({
                    modelBoo: !0
                });
            }
        } else {
            var e = this.data.doctor.stopMedNotify || "";
            wx.showModal({
                title: "停诊中",
                content: e,
                showCancel: !1,
                confirmText: "取消",
                confirmColor: "#3b4ca9",
                success: function(t) {
                    t.confirm;
                }
            });
        }
    },
    abolishBtn: function() {
        this.setData({
            modelBoo: !1
        });
    },
    signedBtn: function() {
        var t = this;
        t.setData({
            myDoctor: 1,
            modelBoo: !1,
            "relation.signState": 0,
            backBoo: !0,
            lookOverBoo: 3
        }), console.log(t.data.relation.signState), console.log(t.data.backBoo);
    },
    cancelBtn: function(t) {
        var a = t.target.dataset.signid, e = this;
        e.setData({
            signId: a
        }), 1 == e.data.confirmFlag ? wx.showModal({
            title: "团队已同意，不能取消申请",
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#3b4ca9",
            success: function() {
                e.setData({});
            }
        }) : (wx.showModal({
            title: "确定要取消申请吗？",
            confirmColor: "#3b4ca9"
        }), e.setData({
            backBoo: !0,
            confirmFlag: 0,
            lookOverBoo: 2,
            "relation.signState": 2
        }));
    },
    relieveBtn: function() {
        this.setData({
            ReasonFlag: !0
        });
    },
    confirmBtn: function() {
        this.setData({
            ReasonFlag: !1
        });
    },
    goInquiry: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.service[a].cdInterroga;
        console.log(a), wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/healthConsultant/healthConsultant?cdinterroga=" + e
        });
    },
    works: function(t) {
        t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/backstageGroceries/pages/chatRom/chatRom"
        });
    },
    checkboxChange: function(t) {},
    special: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.state, o = t.currentTarget.dataset.index, n = this.data.servicePackage[o].title;
        0 == e ? wx.showToast({
            title: n + "现在不约",
            icon: "none",
            duration: 2e3
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageGroceries/pages/choosePerson/choosePerson?id=" + a
        });
    },
    studio: function(t) {
        var a = t.currentTarget.dataset.t_id;
        wx.navigateTo({
            url: "/hyb_yl/backstageGroceries/pages/information2/information2?t_id=" + a
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        1 == this.data.personalFlag && (this.data.token ? t.default.getBasicInfo(this) : wx.login({
            success: function(o) {
                var n = e, i = o.code;
                wx.request({
                    url: a.globalData.httpLogin + "user/code",
                    data: {
                        code: i,
                        token: n.data.token
                    },
                    success: function(a) {
                        var e = a.data.data.token, o = a.data.data.bindPhone;
                        n.setData({
                            token: e
                        });
                        try {
                            wx.setStorageSync("logs", e);
                        } catch (t) {}
                        try {
                            wx.setStorageSync("bindPhone", o);
                        } catch (t) {}
                        t.default.getBasicInfo(n);
                    },
                    fail: function(t) {}
                });
            }
        }));
    },
    onHide: function() {},
    onUnload: function() {
        this.data.backBoo && wx.navigateBack({
            delta: 2
        });
    },
    noBtn: function() {
        this.setData({
            yetFlag: !1
        });
    },
    yetBtn: function() {
        this.setData({
            yetFlag: !1
        });
    },
    offBtn: function() {
        this.setData({
            ReasonFlag: !1
        });
    },
    chooseReason: function(t) {
        console.log(t), this.setData({
            reasonIndex: t.target.dataset.disreason,
            reasonText: t.target.dataset.text
        });
    },
    Select: function(t) {
        console.log(t);
        var a = Number(t.target.dataset.current);
        this.setData({
            options: a
        });
    },
    loadInfo: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                console.log(a);
                var e = a.longitude, o = a.latitude;
                t.loadCity(e, o), t.getAllzhuanjia(e, o);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    loadCity: function(t, a) {
        var e = this;
        wx.request({
            url: "https://api.map.baidu.com/geocoder/v2/?ak=4DGFO0htsrocLEd7iQefj7F9tL1Fw1Xn&location=" + a + "," + t + "&output=json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                console.log(t);
                var a = t.data.result.addressComponent.city, o = t.data.result.location.lat, n = t.data.result.location.lng, i = t.data.result.sematic_description;
                e.setData({
                    city: a,
                    lat: o,
                    lng: n,
                    sematic_description: i
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    distance: function(t, a, e, o) {
        var n = t * Math.PI / 180, i = e * Math.PI / 180, s = n - i, c = a * Math.PI / 180 - o * Math.PI / 180, r = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(n) * Math.cos(i) * Math.pow(Math.sin(c / 2), 2)));
        r *= 6378.137, r = Math.round(1e4 * r) / 1e4, console.log("计算结果", r), this.setData({
            s: r
        });
    },
    getAllzhuanjia: function(t, e) {
        var o = this, n = o.data.zid;
        a.util.request({
            url: "entry/wxapp/Zhuanjiajinw",
            data: {
                jingdu: t,
                latitude: e,
                zid: n,
                op: "post"
            },
            success: function(a) {
                console.log(a);
                var n = a.data.data;
                o.distance(e, t, n.lat, n.jingdu), n.juli = o.data.s, o.setData({
                    zhuanjia: n
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getAllteam: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/Seledocteam",
            data: {
                zid: t,
                teamtype: 0
            },
            success: function(t) {
                console.log(t), e.setData({
                    myTeamList: t.data.data
                });
            }
        });
    },
    getZhuanjiakeshi: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/Fabushare",
            data: {
                op: "docfenxiang",
                zid: t
            },
            success: function(t) {
                console.log(t), e.setData({
                    fxlist: t.data
                });
            }
        });
    }
});