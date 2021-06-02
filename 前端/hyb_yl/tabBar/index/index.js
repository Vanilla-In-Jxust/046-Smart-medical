var t, e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), a = getApp();

require("../../../utils/broadcast");

Page((t = {
    data: {
        hint: !0,
        name: "",
        psd: "123",
        grant_type: "password",
        colorArr: [ "#f8b551", "#ea68a2", "#80c269", "#00b7ee" ],
        bigMask: !1,
        maskshow: !1,
        maskCont: !1,
        firstmask: !0,
        hospital: [],
        pages: 0,
        pagesizes: 10,
        cityList: [ {
            name: "全国",
            id: 0
        }, {
            name: "太原",
            id: 0
        }, {
            name: "大同",
            id: 0
        }, {
            name: "晋中",
            id: 0
        }, {
            name: "北京",
            id: 0
        }, {
            name: "上海",
            id: 0
        } ],
        cityName: ""
    },
    goHospitalList: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/hospitalList/hospitalList"
        });
    },
    tanchu: function() {
        wx.navigateTo({
            url: "/hyb_yl/sgin/sgin"
        });
    },
    cityChose: function(t) {
        this.setData({
            cityName: this.data.cityList[t.detail.value].name
        });
    },
    doctrospeack: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/doctrospeack/doctrospeack"
        });
    },
    speackdetail: function(t) {
        t.detail;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq"
        });
    },
    searchbtn: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/search/search"
        });
    },
    mesaid: function() {
        wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/myMedical/myMedical"
        });
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), a.util.request({
            url: "entry/wxapp/index.techen",
            success: function(t) {
                var e = parseInt(t.data.tencent_sdkappid), a = t.data.tencent_key;
                wx.setStorageSync("sdkappid", e), wx.setStorageSync("secretkey", a);
            }
        });
        var e = this;
        this.getBase(), this.getfooter(), this.getHotAnswer(), this.getAddress(), this.getAdv(), 
        a.util.request({
            url: "entry/wxapp/authorize.logintime",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {}
        }), setTimeout(function() {
            e.setData({
                hint: !1
            });
        }, 3e3), this.getHospital();
    },
    getHospital: function() {
        var t = this;
        console.log("222"), wx.getLocation({
            type: "wgs84",
            success: function(e) {
                var n = e.latitude, i = e.longitude;
                a.util.request({
                    url: "entry/wxapp/index.near_hospital",
                    data: {
                        latitude: n,
                        longitude: i,
                        page: t.data.pages,
                        pagesizes: t.data.pagesizes
                    },
                    success: function(e) {
                        var a = t.data.pages;
                        10 == e.data.length && (a += 1), t.setData({
                            pages: a,
                            hospital: t.data.hospital.concat(e.data)
                        });
                    }
                });
            }
        });
    },
    goback: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/specialtyContent/specialtyContent?hid=" + t.currentTarget.dataset.hid
        });
    },
    getAdv: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.adv",
            data: {
                position: 0
            },
            success: function(e) {
                t.setData({
                    huandengpian: e.data
                });
            }
        }), a.util.request({
            url: "entry/wxapp/index.adv",
            data: {
                position: 1
            },
            success: function(e) {
                t.setData({
                    hot_adv: e.data
                });
            }
        });
    },
    getfooter: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.footerlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                var a = {
                    footerTab: 0,
                    footerlist: e.data
                };
                t.setData({
                    footer: a
                });
            }
        });
    },
    onReady: function() {
        this.getMenu(), this.getLmhosp(), this.getFenlei(), this.getTeserver(), this.getYishuo();
    },
    onShow: function() {
        a.globalData.isLock = !1;
        var t = wx.getStorageSync("city");
        this.setData({
            position: t
        });
        var e = wx.getStorageSync("openid");
        console.log(e), e ? this.setData({
            bigMask: !0,
            maskshow: !0,
            maskCont: !1,
            firstmask: !1
        }) : this.setData({
            bigMask: !1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getBase(), this.getMenu(), this.getLmhosp(), this.getFenlei();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getBase: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.base",
            success: function(e) {
                var a = e.data.ztcolor, n = e.data.baidukey, i = e.data.show_title;
                wx.setStorageSync("bastitle", i), wx.setStorageSync("baidukey", n), t.setData({
                    baseinfo: e.data
                }), wx.setNavigationBarTitle({
                    title: e.data.show_title
                }), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: a
                }), wx.setStorage({
                    key: "color",
                    data: a
                });
            },
            fail: function(t) {}
        });
    },
    getMenu: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.menu",
            success: function(a) {
                console.log(a);
                var n = a.data.length;
                t.setData((0, e.default)({}, "menuArr[" + n + "]", a.data));
            }
        });
    },
    getTeserver: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.teserver",
            success: function(a) {
                for (var n = a.data, i = n.length, s = 0; s < n.length; s++) {
                    if ("shoushukuaiyue" == n[s].pinyin) n[s].button = "立即预约";
                    if ("tijianjiedu" == n[s].pinyin) n[s].button = "立即解读";
                    if ("zhuanjiatuandui" == n[s].pinyin) n[s].button = "签约医生";
                    if ("yuanchengguahao" == n[s].pinyin) n[s].button = "立即挂号";
                    if ("yuyuejiuzhen" == n[s].pinyin || "zhuyuananpai" == n[s].pinyin || "shoushuanpai" == n[s].pinyin || "baogaojiaji" == n[s].pinyin) n[s].button = n[s].name;
                }
                t.setData((0, e.default)({}, "teserver[" + i + "]", a.data));
            }
        });
    },
    yuyuejiuzhen: function(t) {
        var e = t.currentTarget.dataset.url + "?ser_key=" + t.currentTarget.dataset.key + "&name=" + t.currentTarget.dataset.name;
        wx.navigateTo({
            url: e
        });
    },
    zhuyuananpai: function(t) {
        var e = t.currentTarget.dataset.url + "?ser_key=" + t.currentTarget.dataset.key + "&name=" + t.currentTarget.dataset.name;
        wx.navigateTo({
            url: e
        });
    },
    shoushuanpai: function(t) {
        var e = t.currentTarget.dataset.url + "?ser_key=" + t.currentTarget.dataset.key + "&name=" + t.currentTarget.dataset.name;
        wx.navigateTo({
            url: e
        });
    },
    baogaojiaji: function(t) {
        var e = t.currentTarget.dataset.url + "?ser_key=" + t.currentTarget.dataset.key + "&name=" + t.currentTarget.dataset.name;
        wx.navigateTo({
            url: e
        });
    },
    getLmhosp: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.cooperative_hospital",
            success: function(a) {
                var n = a.data.length;
                t.setData((0, e.default)({}, "hospitaArr[" + n + "]", a.data));
            }
        });
    },
    hzyyxq: function(t) {
        var e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.id, n = t.currentTarget.dataset.uid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/specialtyContent/specialtyContent?hid=" + a + "&title=" + e + "&uid=" + n
        });
    },
    getFenlei: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.hotactor",
            success: function(a) {
                console.log(a);
                var n = a.data.length;
                t.setData((0, e.default)({}, "fenleiArr[" + n + "]", a.data));
            }
        });
    },
    buttonsite: function(t) {
        var e = t.detail.value.title, n = t.detail.value.link, i = t.detail.formId, s = t.detail.value.id, r = t.detail.value.ser_key;
        a.util.request({
            url: "entry/wxapp/index.userformId",
            data: {
                form_id: i,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {}
        }), "Svip" == e ? wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/vip/vip?ifzy=0"
        }) : "远程开方" == e ? wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yuanchengkaifang/yuanchengkaifang?ifzy=0"
        }) : "看一看" == e ? wx.reLaunch({
            url: "/hyb_yl/tabBar/jibingyufang/jibingyufang?index=1?ifzy=0"
        }) : "私人医生" == e ? wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/followDoc/followDoc?typs=siren_doc?ifzy=0"
        }) : wx.navigateTo({
            url: n + "?tit=" + e + "&ser_key=" + r + "&id=" + s + "&ifzy=0&key_words=" + r
        });
    },
    wenzhen: function(t) {
        var e = t.detail.value.sid, a = t.detail.value.pinyin, n = t.detail.value.name;
        "yuanchengwenzhen" == a ? wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/longsever/index?sid=" + e + "&key=" + a + "&name=" + n
        }) : "kuaisuwenzhen" == a ? wx.navigateTo({
            url: "/hyb_yl/userLife/pages/index/index"
        }) : wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/changeDoctor/changeDoctor?sid=" + e + "&key=" + a + "&name=" + n
        });
    },
    zbfw: function(t) {
        var e = t.detail.value.id, n = t.detail.value.zx_id, i = t.detail.value.zid;
        a.util.request({
            url: "entry/wxapp/zixun.addyuedu",
            data: {
                id: e
            },
            success: function(t) {},
            fail: function(t) {}
        }), a.util.request({
            url: "entry/wxapp/zixun.erweima",
            data: {
                id: e,
                p_id: n
            },
            success: function(t) {},
            fail: function(t) {}
        }), wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + e + "&p_id=" + n + "&zid=" + i
        });
    },
    tijianjiedu: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/baogaojiedu/baogaojiedu?key_words=tijianjiedu"
        });
    },
    shoushukuaiyue: function(t) {
        var e = t.currentTarget.dataset.key;
        t.currentTarget.dataset.name, t.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/shoushukuaiyue/shoushukuaiyue?pinyin=" + e + "&typs=query"
        });
    },
    sirenyisheng: function(t) {
        var e = t.currentTarget.dataset.key, a = t.currentTarget.dataset.name, n = t.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/changeDoctor/changeDoctor?sid=" + n + "&key=" + e + "&name=" + a
        });
    },
    loadInfo: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(e) {
                var a = e.longitude, n = e.latitude;
                t.loadCity(a, n);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    distance: function(t, e, a, n) {
        var i = t * Math.PI / 180, s = a * Math.PI / 180, r = i - s, u = e * Math.PI / 180 - n * Math.PI / 180, o = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(i) * Math.cos(s) * Math.pow(Math.sin(u / 2), 2)));
        o *= 6378.137, o = Math.round(1e4 * o) / 1e4, this.setData({
            s: o
        });
    },
    loadCity: function(t, e) {
        var a = this, n = wx.getStorageSync("baidukey");
        wx.request({
            url: "https://api.map.baidu.com/geocoder/v2/?ak=" + n + "&location=" + e + "," + t + "&output=json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (t.data.message) wx.showToast({
                    title: t.data.message,
                    icon: "none"
                }); else {
                    var e = t.data.result.addressComponent.city;
                    wx.setStorageSync("city", e);
                    var n = t.data.result.location.lat, i = t.data.result.location.lng, s = t.data.result.sematic_description;
                    a.setData({
                        position: e,
                        lat: n,
                        lng: i,
                        sematic_description: s
                    });
                }
            },
            fail: function() {},
            complete: function() {}
        });
    },
    hotmore: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblems/publicProblems"
        });
    },
    zhuanbingfuwu: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/jibingyufang/jibingyufang"
        });
    },
    hotdetail: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.title, n = t.currentTarget.dataset.typs, i = t.currentTarget.dataset.state;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblemsInfor/publicProblemsInfor?id=" + e + "&title=" + a + "&typs=" + n + "&state=" + i
        });
    },
    bindUsername: function(t) {
        this.setData({
            name: t.detail.value
        });
    },
    bindPassword: function(t) {
        this.setData({
            psd: t.detail.value
        });
    },
    onFocusPsd: function() {
        this.setData({
            psdFocus: "psdFocus"
        });
    },
    onBlurPsd: function() {
        this.setData({
            psdFocus: ""
        });
    },
    onFocusName: function() {
        this.setData({
            nameFocus: "nameFocus"
        });
    },
    onBlurName: function() {
        this.setData({
            nameFocus: ""
        });
    },
    login: function() {
        wx.setStorage({
            key: "myUsername",
            data: wx.getStorageSync("myUsername")
        }), getApp().conn.open({
            apiUrl: WebIM.config.apiURL,
            user: wx.getStorageSync("myUsername"),
            pwd: "123",
            grant_type: this.data.grant_type,
            appKey: WebIM.config.appkey
        });
    },
    zhuanjiatuandui: function(t) {
        var e = t.currentTarget.dataset.key, a = t.currentTarget.dataset.name, n = t.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/mydoctor/mydoctor?sid=" + n + "&key=" + e + "&name=" + a
        });
    },
    yuanchengguahao: function(t) {
        var e = t.currentTarget.dataset.key, a = t.currentTarget.dataset.name, n = t.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/longsever/index?sid=" + n + "&key=" + e + "&name=" + a
        });
    },
    getYishuo: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index.userqydoc",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                t.setData({
                    doctorspeack: e.data
                });
            }
        });
    }
}, (0, e.default)(t, "yuyuejiuzhen", function(t) {
    var e = t.currentTarget.dataset.url + "?ser_key=" + t.currentTarget.dataset.key + "&name=" + t.currentTarget.dataset.name;
    wx.navigateTo({
        url: e
    });
}), (0, e.default)(t, "getHotAnswer", function() {
    var t = this;
    a.util.request({
        url: "entry/wxapp/index.hotanswer",
        data: {
            openid: wx.getStorageSync("openid")
        },
        success: function(e) {
            t.setData({
                hotanswer: e.data
            });
        }
    });
}), (0, e.default)(t, "getAddress", function() {
    var t = this;
    a.util.request({
        url: "entry/wxapp/index.addressopen",
        data: {
            openid: wx.getStorageSync("openid")
        },
        success: function(e) {
            t.setData({
                cityList: e.data
            });
        }
    });
}), t));