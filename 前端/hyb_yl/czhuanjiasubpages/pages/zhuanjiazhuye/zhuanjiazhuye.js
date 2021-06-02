var a = require("../../../../utils/util.js"), t = (require("../../../../utils/broadcast"), 
!0), e = getApp();

Page({
    data: {
        isLoading: !0,
        startPoint: [ 0, 0 ],
        bigMask: !0,
        questiontabs: 0,
        allserve: !1,
        shanchanglist: [ "全部(550)", "气胸(16)", "肺癌(18)", "胸腔积液(5)", "肋骨骨折(4)", "心包积液(2)", "多汗症(1)" ],
        pop_key: !1,
        tabu_index: 1,
        ctab_scroll: [],
        ctab_scroll_index: 0,
        video: !1,
        pop_time1: "",
        pop_time2: "",
        userInfo: {},
        hasUserInfo: !1,
        adepd: !1,
        collect: !1,
        parise: !1,
        scrollleft: 0,
        username: "徐三",
        inquiry: "",
        ifqianyue: 0,
        modelBoo: !1,
        text: "签约医生",
        shareState: !1,
        show_text: !1
    },
    showText: function() {
        this.setData({
            show_text: !this.data.show_text
        });
    },
    big_img: function(a) {
        var t = a.currentTarget.dataset.url;
        wx.previewImage({
            urls: [ t ]
        });
    },
    shareChose: function(a) {
        this.setData({
            shareState: !0
        });
    },
    sharefri: function(a) {
        var t = this.data.docinfo.share_erweima;
        console.log(t), this.setData({
            shareState: !0,
            image_share: t
        }), wx.previewImage({
            urls: [ t ]
        });
    },
    closeShare: function(a) {
        this.setData({
            shareState: !1
        });
    },
    askdoctor: function(a) {
        a.currentTarget.dataset.num;
        var t = this.data.zid, e = a.currentTarget.dataset.url, n = a.currentTarget.dataset.money, i = a.currentTarget.dataset.time_leng, s = parseInt(a.currentTarget.dataset.ptzhuiw), o = this.data.privateNum, u = a.currentTarget.dataset.key_words;
        "shoushukuaiyue" == u ? wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/orderedtime/orderedtime?key_words=" + u + "&money=" + n + "&zid=" + t + "&time_leng=" + i + "&addnum=" + s + "&privateNum=" + o + "&ifzy=1"
        }) : "tijianjiedu" == u ? wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?key_words=" + u + "&money=" + n + "&zid=" + t + "&time_leng=" + i + "&addnum=" + s + "&privateNum=" + o + "&ifzy=1"
        }) : wx.navigateTo({
            url: e + "&money=" + n + "&zid=" + t + "&time_leng=" + i + "&addnum=" + s + "&privateNum=" + o + "&ifzy=1&name=" + a.currentTarget.dataset.name
        });
    },
    yearcard: function(a) {
        var t = a.currentTarget.dataset.id, e = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yearcard/yearcard?id=" + t + "&zid=" + e
        });
    },
    fold: function() {
        this.setData({
            adepd: !this.data.adepd
        });
    },
    extract: function() {
        var a = (a = this.data.username).substr(0, 1) + "***";
        this.setData({
            username: a
        }), console.log(this.data.username);
    },
    collect: function() {
        e.util.request({
            url: "entry/wxapp/zhuanjia.changelove",
            data: {
                zid: this.data.zid,
                openid: wx.getStorageSync("openid"),
                cerated_type: 0
            },
            success: function(a) {
                console.log(a);
            }
        }), this.setData({
            collect: !this.data.collect
        }), 1 == this.data.collect ? wx.showToast({
            title: "关注成功",
            icon: "none"
        }) : wx.showToast({
            title: "取消关注成功",
            icon: "none"
        });
    },
    two_even: function(a) {
        var t = this.data.server;
        if (5 == this.data.inquiry) return wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=5"
        }), !1;
        if (6 == this.data.inquiry) return wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/orderedtime/orderedtime?inquiry=6"
        }), !1;
        if ("shoushukuaiyue" == t || "yuanchengguahao" == t) {
            for (var e = this.data.menu, n = (t = this.data.server, ""), i = "", s = "", o = "", u = this.data.docinfo, r = 0; r < e.length; r++) e[r].key_words == t && (n = u.vip ? e[r].hymoney : e[r].ptmoney, 
            i = e[r].time_leng, o = e[r].ptzhuiw, s = e[r].hyzhuiw);
            var d = this.data.zid;
            if (u.vip) var c = parseInt(s); else c = parseInt(o);
            var l = this.data.privateNum;
            return wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/orderedtime/orderedtime?key_words=" + t + "&money=" + n + "&zid=" + d + "&time_leng=" + i + "&addnum=" + c + "&privateNum=" + l
            }), !1;
        }
        if ("tijianjiedu" == this.data.server) {
            for (e = this.data.menu, t = this.data.server, n = "", i = "", s = "", o = "", u = this.data.docinfo, 
            r = 0; r < e.length; r++) e[r].key_words == t && (n = u.vip ? e[r].hymoney : e[r].ptmoney, 
            i = e[r].time_leng, o = e[r].ptzhuiw, s = e[r].hyzhuiw);
            d = this.data.zid;
            if (u.vip) c = parseInt(s); else c = parseInt(o);
            l = this.data.privateNum;
            return this.data.tid ? (wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?key_words=" + t + "&money=" + n + "&zid=" + d + "&time_leng=" + i + "&addnum=" + c + "&privateNum=" + l + "&tjorder=" + this.data.tid
            }), !1) : (wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?key_words=" + t + "&money=" + n + "&zid=" + d + "&time_leng=" + i + "&addnum=" + c + "&privateNum=" + l
            }), !1);
        }
        this.setData({
            allserve: !0
        });
    },
    closeallserve: function() {
        this.setData({
            allserve: !1
        });
    },
    questionclick: function(a) {
        var t = this, n = a.currentTarget.dataset.biaoqian, i = t.data.zid;
        e.util.request({
            url: "entry/wxapp/zhuanjia.getgkquestion",
            data: {
                zid: i,
                biaoqian: n
            },
            success: function(a) {
                console.log(a), t.setData({
                    listqs: a.data
                });
            }
        }), this.setData({
            questiontabs: a.currentTarget.dataset.dex
        });
    },
    onLoad: function(t) {
        if (this.channel = "", this.uid = a.getUid(), t.tid) {
            var n = t.tid;
            this.setData({
                tid: n
            });
        }
        this.lock = !1;
        var i = wx.getStorageSync("userInfo"), s = t.money;
        i && this.setData({
            hasUserInfo: !0,
            userInfo: i
        });
        var o = t.typs;
        null != o && this.setData({
            typs: o
        }), wx.getStorageSync("openid") ? this.setData({
            isAuthor: !0
        }) : this.setData({
            isAuthor: !1
        });
        var u = this, r = wx.getStorageSync("color");
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), e.util.request({
            url: "entry/wxapp/index.base",
            success: function(a) {
                u.setData({
                    show_title: a.data.show_title,
                    state: a.data.state
                });
            }
        }), "undefined" !== decodeURIComponent(t.scene)) {
            var d = decodeURIComponent(t.scene).split("=")[1];
            console.log(d);
        } else d = t.zid;
        e.util.request({
            url: "entry/wxapp/zhuanjia.checkcollect2",
            data: {
                openid: wx.getStorageSync("openid"),
                goods_id: d
            },
            success: function(a) {
                console.log(a), 0 == a.data && u.setData({
                    ifqianyue: "0"
                }), 0 != a.data && a.data.ifqianyue && u.setData({
                    ifqianyue: a.data.ifqianyue
                }), 2 == a.data.ifqianyue ? u.setData({
                    text: "已签约"
                }) : 1 == a.data.ifqianyue ? u.setData({
                    text: "签约中"
                }) : 3 == a.data.ifqianyue ? u.setData({
                    text: "已解约"
                }) : 4 == a.data.ifqianyue ? u.setData({
                    text: "已取消"
                }) : 5 == a.data.ifqianyue && u.setData({
                    text: "已拒绝"
                });
            }
        });
        var c, l = t.server, h = t.msg, g = t.name;
        u.setData({
            inquiry: t.inquiry,
            bgc: r,
            zid: d,
            key: l,
            msg: h,
            btn: l,
            name: g,
            money: s,
            server: t.server
        }), u.getDocinfo(), u.getguanzhu(), u.getgkpingjia(), u.getdocpingjia(), u.extract(), 
        u.getserver(), wx.getSystemInfo({
            success: function(a) {
                console.log(a), c = Math.round(.8 * a.screenWidth), u.setData({
                    windowWidth: a.windowWidth,
                    windowHeight: a.windowHeight,
                    maskWidth: c,
                    maskHeight: Math.round(1920 * c / 1080)
                });
            }
        });
    },
    likesClick: function(a) {
        if (console.log(a), wx.getStorageSync("openid")) {
            var t = this;
            t.setData({
                isAuthor: !0
            });
        } else t.setData({
            isAuthor: !1
        });
    },
    bindUsername: function(a) {
        this.setData({
            name: a.detail.value
        });
    },
    bindPassword: function(a) {
        this.setData({
            psd: a.detail.value
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
    login: function(a) {
        t = !t, wx.setStorage({
            key: "myUsername",
            data: wx.getStorageSync("myUsername")
        }), getApp().conn.open({
            apiUrl: WebIM.config.apiURL,
            user: wx.getStorageSync("myUsername"),
            pwd: "123",
            grant_type: this.data.grant_type,
            appKey: WebIM.config.appkey
        }), console.log(wx.getStorageSync("myUsername"));
        var e = this.data.btn;
        console.log(e);
        var n = this.data.randnum;
        if (this.data.docopenid == wx.getStorageSync("openid")) return wx.showToast({
            title: "自己不能咨询自己",
            icon: "none"
        }), !1;
        "dianhuawenzhen" == e && this.dianhuawenzhen(n), "tuwenwenzhen" == e && this.tuwenwenzhen(n), 
        "sirenyisheng" == e && this.sirenyisheng(n), "yuanchengwenzhen" == e && this.yuanchengwenzhen(n), 
        "zhuanjiatuandui" == e && this.zhuanjiatuandui(n), "shoushukuaiyue" == e && this.shoushukuaiyue(n), 
        "tijianjiedu" == e && this.tijianjiedu(n);
    },
    onGotUserInfo: function(a) {
        var t = a.detail.userInfo || {};
        if (wx.setStorage({
            key: "userInfo",
            data: t
        }), "tuwenwenzhen" == this.data.key) {
            var e = wx.getStorageSync("myUsername");
            console.log(e);
            var n = {
                myName: e,
                your: "jinjin123456789"
            };
            wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username=" + JSON.stringify(n)
            });
        } else this.onJoin(t);
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
    onJoin: function(a) {
        a = a || {};
        var t = this.channel || "123", e = this.uid;
        if (t) {
            if (this.checkJoinLock()) {
                this.lockJoin();
                "broadcaster", wx.navigateTo({
                    url: "../meeting/meeting?channel=".concat(t, "&uid=").concat(e, "&role=").concat("broadcaster")
                });
            }
        } else wx.showToast({
            title: "请提供一个有效的房间名",
            icon: "none",
            duration: 2e3
        });
    },
    onInputChannel: function(a) {
        var t = a.detail.value;
        this.channel = t;
    },
    onReady: function() {},
    onShow: function() {
        console.log("1"), this.extract();
        var t = a.formatTime(new Date()), e = parseFloat(t.slice(8, 10)), n = t.slice(5, 7) + "月" + e + "日";
        this.setData({
            pop_time1: n
        });
        for (var i = 0; i < 5; i++) {
            var s = t.slice(5, 7) + "月" + e + "日";
            e++, this.data.ctab_scroll.push(s), this.setData({
                ctab_scroll: this.data.ctab_scroll
            });
        }
        var o = wx.getStorageSync("openid");
        console.log(o), o ? this.setData({
            bigMask: !0
        }) : this.setData({
            bigMask: !1
        });
    },
    navicate: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    onHide: function() {
        console.log("2");
    },
    onUnload: function() {
        console.log("2");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getDocinfo: function(a) {
        var t = this, n = t.data.zid, i = t.data.btn;
        console.log(i), "undefined" == i ? e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: n,
                key: i,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), wx.setNavigationBarTitle({
                    title: a.data.z_name
                }), t.setData({
                    docopenid: a.data.openid,
                    docinfo: a.data,
                    z_name: a.data.z_name,
                    randnum: a.data.randnum,
                    isLoading: !1
                }), console.log(a.data.video), "" != a.data.video && t.setData({
                    video: !0
                });
            }
        }) : e.util.request({
            url: "entry/wxapp/zhuanjia.getdocinfo",
            data: {
                zid: n,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), wx.setNavigationBarTitle({
                    title: a.data.z_name
                });
                var i = a.data.authority[0].bq;
                console.log(i), e.util.request({
                    url: "entry/wxapp/zhuanjia.getgkquestion",
                    data: {
                        zid: n,
                        biaoqian: i
                    },
                    success: function(a) {
                        console.log(a), t.setData({
                            listqs: a.data,
                            isLoading: !1
                        });
                    }
                }), t.setData({
                    docopenid: a.data.openid,
                    docinfo: a.data,
                    z_name: a.data.z_name,
                    randnum: a.data.randnum,
                    privateNum: a.data.privateNum,
                    authority: a.data.authority
                }), "" != a.data.video && t.setData({
                    video: !0
                });
            }
        });
    },
    answer_detail: function(a) {
        var t = a.currentTarget.dataset.id, e = a.currentTarget.dataset.title, n = a.currentTarget.dataset.typs, i = a.currentTarget.dataset.state;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblemsInfor/publicProblemsInfor?id=" + t + "&title=" + e + "&typs=" + n + "&state=" + i
        });
    },
    dianhuawenzhen: function(a) {
        var t = this.data.zid, e = this.data.name, n = this.data.btn;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/telserev/index?zid=" + t + "&keywords=" + n + "&name=" + e + "&randnum=" + a
        });
    },
    tuwenwenzhen: function(a) {
        var t = this.data.name, e = this.data.zid, n = this.data.btn;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?zid=" + e + "&keywords=" + n + "&name=" + t + "&randnum=" + a
        });
    },
    sirenyisheng: function(a) {
        var t = this.data.zid, e = this.data.name, n = this.data.btn;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/perdoc/index?zid=" + t + "&keywords=" + n + "&name=" + e + "&randnum=" + a
        });
    },
    yuanchengwenzhen: function(a) {
        var t = this.data.zid, e = this.data.name, n = this.data.btn;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/longsevers/index?zid=" + t + "&keywords=" + n + "&name=" + e + "&randnum=" + a
        });
    },
    tijianjiedu: function(a) {
        var t = this.data.zid, e = this.data.name, n = this.data.btn;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?zid=" + t + "&keywords=" + n + "&name=" + e + "&randnum=" + a
        });
    },
    zhuanjiatuandui: function(a) {
        var t = this.data.zid, e = this.data.name, n = this.data.btn;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/servercenter/servercenter?zid=" + t + "&keywords=" + n + "&name=" + e + "&randnum=" + a
        });
    },
    shoushukuaiyue: function(a) {
        var t = this.data.zid, e = this.data.name, n = this.data.btn, i = this.data.money, s = this.data.z_name, o = this.data.hospital;
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/preindex/index/index?zid=" + t + "&key=" + n + "&name=" + e + "&money=" + i + "&z_name=" + s + "&hospital=" + o + "&msg=立即预约"
        });
    },
    getguanzhu: function() {
        var a = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.ifguanzhu",
            data: {
                zid: a.data.zid,
                openid: wx.getStorageSync("openid"),
                cerated_type: 0
            },
            success: function(t) {
                console.log(t), 1 == t.data ? a.setData({
                    collect: !a.data.collect
                }) : a.setData({
                    collect: a.data.collect
                });
            }
        });
    },
    getdocpingjia: function() {
        var a = this, t = a.data.zid;
        e.util.request({
            url: "entry/wxapp/zhuanjia.pjlist",
            data: {
                zid: t
            },
            success: function(t) {
                for (var e = t.data, n = 0; n < e.length; n++) e[n].names = e[n].names.substr(0, 1) + "***";
                a.setData({
                    list: e
                }), console.log(t);
            }
        });
    },
    getserver: function() {
        var a = this, t = a.data.zid;
        e.util.request({
            url: "entry/wxapp/zhuanjia.server",
            data: {
                zid: t
            },
            success: function(t) {
                var e = t.data;
                console.log(t), a.setData({
                    menu: e
                });
            }
        });
    },
    getgkpingjia: function() {
        var a = this, t = a.data.zid;
        e.util.request({
            url: "entry/wxapp/zhuanjia.getgkpingjia",
            data: {
                zid: t
            },
            success: function(t) {
                console.log(t), a.setData({
                    listpj: t.data
                });
            }
        });
    },
    abolishBtn: function() {
        this.setData({
            modelBoo: !1,
            ifqianyue: 0,
            text: "签约医生"
        });
    },
    qianyue: function(a) {
        var t = this;
        0 == a.currentTarget.dataset.ifqianyue && e.util.request({
            url: "entry/wxapp/zhuanjia.userjiaren",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a);
                var e = a.data.j_id;
                0 !== a.data ? (t.setData({
                    modelBoo: !0,
                    ifqianyue: 1,
                    text: "签约中"
                }), t.setData({
                    j_id: e
                })) : wx.showModal({
                    title: "提示",
                    content: "您还暂未添加个人信息，请先添加",
                    success: function(a) {
                        a.confirm && wx.navigateTo({
                            url: "/hyb_yl/userCommunicate/pages/preindex/sickinfo/index?sickrela=&sick_index=0&last=zhuanjia"
                        });
                    }
                });
            }
        }), 1 == a.currentTarget.dataset.ifqianyue && wx.showModal({
            title: "签约中,签约后才可使用专家服务",
            content: "是否取消申请",
            success: function(a) {
                a.confirm && (t.setData({
                    ifqianyue: 4,
                    text: "已取消"
                }), t.signedBtn());
            }
        }), 4 != a.currentTarget.dataset.ifqianyue && 3 != a.currentTarget.dataset.ifqianyue && 5 != a.currentTarget.dataset.ifqianyue || wx.showModal({
            content: "是否重新申请",
            success: function(a) {
                a.confirm && (t.setData({
                    ifqianyue: 1,
                    text: "签约中"
                }), t.signedBtn());
            }
        }), 2 == a.currentTarget.dataset.ifqianyue && wx.showModal({
            content: "是否解除签约",
            success: function(a) {
                a.confirm && (t.setData({
                    ifqianyue: 3,
                    text: "已解约"
                }), t.signedBtn());
            }
        });
    },
    checkboxChange: function(a) {
        console.log(a);
        if (null == a.detail.value[0]) var t = 0; else t = a.detail.value[0];
        this.setData({
            change: t
        });
    },
    signedBtn: function(a) {
        var t = this, n = t.data.zid, i = wx.getStorageSync("openid"), s = t.data.change, o = t.data.ifqianyue, u = t.data.text;
        console.log(a);
        var r = a.currentTarget.dataset.j_id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.checkcollect",
            data: {
                openid: i,
                zid: n,
                cerated_type: 7
            },
            success: function(a) {
                console.log(a), e.util.request({
                    url: "entry/wxapp/zhuanjia.savecollectup",
                    data: {
                        openid: i,
                        goods_id: n,
                        cerated_type: 7,
                        ifqianyue: o,
                        change: s
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: "操作成功",
                            icon: "none",
                            duration: 1500,
                            success: function() {
                                e.util.request({
                                    url: "entry/wxapp/zhuanjia.remind",
                                    data: {
                                        openid: i,
                                        zid: n,
                                        j_id: r
                                    },
                                    success: function(a) {
                                        console.log(a);
                                    }
                                });
                            }
                        }), t.setData({
                            modelBoo: !1,
                            text: u,
                            ifqianyue: o,
                            stype: a.data
                        });
                    }
                });
            }
        });
    },
    mytouchstart: function(a) {
        console.log(a);
        var t = this, n = t.data.zid;
        e.util.request({
            url: "entry/wxapp/zhuanjia.checkcollect2",
            data: {
                openid: wx.getStorageSync("openid"),
                goods_id: n
            },
            success: function(a) {
                console.log(a), a.data.ifqianyue && t.setData({
                    ifqianyue: a.data.ifqianyue
                }), 2 == a.data.ifqianyue ? t.setData({
                    text: "已签约"
                }) : 1 == a.data.ifqianyue ? t.setData({
                    text: "签约中"
                }) : 3 == a.data.ifqianyue ? t.setData({
                    text: "已解约"
                }) : 4 == a.data.ifqianyue ? t.setData({
                    text: "已取消"
                }) : 5 == a.data.ifqianyue && t.setData({
                    text: "已拒绝"
                });
            }
        });
    }
});