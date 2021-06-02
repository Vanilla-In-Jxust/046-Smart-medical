var e = getApp(), a = require("../../../../utils/util.js");

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
        datalist: [],
        sickimg: [],
        medimg: [],
        sickhisty: [],
        allergy: [],
        hospatil: [],
        dochelp: "",
        sicktel: "",
        userInfo: {},
        hasuserInfo: !1,
        disableJoin: !1,
        teamname: !1
    },
    onGotuserInfo: function(a) {
        var t = this, n = (t.data.order, e.siteInfo.uniacid), o = t.data.zid, i = t.data.newmoney, s = t.data.z_name, c = t.data.order, r = t.data.oid, d = t.data.bl_id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.ifguanzhu",
            data: {
                zid: o,
                openid: wx.getStorageSync("openid"),
                cerated_type: 0
            },
            success: function(a) {
                console.log(a), 1 !== a.data && e.util.request({
                    url: "entry/wxapp/zhuanjia.changelove",
                    data: {
                        zid: o,
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
            success: function(u) {
                u.confirm ? e.util.request({
                    url: t.data.url + "app/index.php?i=" + n + "&c=entry&a=wxapp&do=Pay&m=hyb_yl",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        z_tw_money: i
                    },
                    success: function(n) {
                        console.log(n), wx.requestPayment({
                            timeStamp: n.data.timeStamp,
                            nonceStr: n.data.nonceStr,
                            package: n.data.package,
                            signType: n.data.signType,
                            paySign: n.data.paySign,
                            success: function(n) {
                                e.util.request({
                                    url: "entry/wxapp/Wxmoban.doctemp",
                                    data: {
                                        openid: wx.getStorageSync("openid"),
                                        zid: o,
                                        bingzs: t.data.name,
                                        name: t.data.name,
                                        oid: r,
                                        bl_id: d,
                                        order: c,
                                        allone_key: t.data.allone_key
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), console.log(n);
                                var i = t.data.docroom;
                                wx.setStorageSync("docroom", i);
                                var u = a.detail.userInfo || {};
                                wx.setStorage({
                                    key: "userInfo",
                                    data: u
                                });
                                var l = t.data.keywords;
                                if ("tuwenwenzhen" == l) {
                                    var g = wx.getStorageSync("myusername");
                                    console.log(g);
                                    wx.setStorageSync("sate", 0);
                                    var p = {
                                        myName: g,
                                        your: i
                                    };
                                    wx.navigateTo({
                                        url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username=" + JSON.stringify(p) + "&z_name=" + s
                                    });
                                }
                                "yuanchengwenzhen" == l && t.onJoin(u), "shoushukuaiyue" == l && t.onJoin(u);
                            }
                        });
                    }
                }) : wx.navigateBack({
                    detail: 2
                });
            }
        });
    },
    onGotuserInfo2: function(a) {
        var t = this, n = (t.data.order, t.data.q_id), o = e.siteInfo.uniacid, i = t.data.money, s = t.data.zid;
        t.data.oid, t.data.bl_id;
        wx.showModal({
            content: "是否支付",
            success: function(a) {
                a.confirm ? e.util.request({
                    url: t.data.url + "app/index.php?i=" + o + "&c=entry&a=wxapp&do=Pay&m=hyb_yl",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        z_tw_money: i
                    },
                    success: function(a) {
                        console.log(a), wx.requestPayment({
                            timeStamp: a.data.timeStamp,
                            nonceStr: a.data.nonceStr,
                            package: a.data.package,
                            signType: a.data.signType,
                            paySign: a.data.paySign,
                            success: function(a) {
                                console.log(a);
                                var o = t.data.qiany;
                                wx.requestSubscribeMessage({
                                    tmplIds: [ o ],
                                    success: function(a) {
                                        console.log(a), "accept" === a[o] ? (e.util.request({
                                            url: "entry/wxapp/office.mbtxing",
                                            data: {
                                                zid: s,
                                                qiany: o,
                                                j_id: t.data.j_id
                                            },
                                            success: function(e) {
                                                console.log(e);
                                            }
                                        }), e.util.request({
                                            url: "entry/wxapp/docuser.updateorder",
                                            data: {
                                                q_id: n
                                            },
                                            success: function(e) {
                                                console.log(e), wx.redirectTo({
                                                    url: "/hyb_yl/userCommunicate/pages/recordSigning/recordSigning"
                                                });
                                            }
                                        })) : e.util.request({
                                            url: "entry/wxapp/docuser.updateorder",
                                            data: {
                                                q_id: n
                                            },
                                            success: function(e) {
                                                console.log(e), wx.redirectTo({
                                                    url: "/hyb_yl/userCommunicate/pages/recordSigning/recordSigning"
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }) : e.util.request({
                    url: "entry/wxapp/docuser.updatequxiao",
                    data: {
                        q_id: n
                    },
                    success: function(e) {
                        console.log(e), wx.reLaunch({
                            url: "/hyb_yl/userCommunicate/pages/recordSigning/recordSigning"
                        });
                    }
                });
            }
        });
    },
    onGotuserInfo3: function(a) {
        var t = this, n = (t.data.order, e.siteInfo.uniacid), o = t.data.zid;
        console.log(o);
        var i = t.data.newmoney;
        console.log(i);
        var s = t.data.z_name;
        t.data.order, t.data.bl_id;
        e.util.request({
            url: "entry/wxapp/zhuanjia.ifguanzhu",
            data: {
                zid: o,
                openid: wx.getStorageSync("openid"),
                cerated_type: 0
            },
            success: function(a) {
                console.log(a), 1 !== a.data && e.util.request({
                    url: "entry/wxapp/zhuanjia.changelove",
                    data: {
                        zid: o,
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
            success: function(c) {
                if (c.confirm) {
                    var r = t.data.doctemp;
                    e.util.request({
                        url: t.data.url + "app/index.php?i=" + n + "&c=entry&a=wxapp&do=Pay&m=hyb_yl",
                        header: {
                            "Content-Type": "application/xml"
                        },
                        method: "GET",
                        data: {
                            openid: wx.getStorageSync("openid"),
                            z_tw_money: i
                        },
                        success: function(n) {
                            console.log(n), wx.requestPayment({
                                timeStamp: n.data.timeStamp,
                                nonceStr: n.data.nonceStr,
                                package: n.data.package,
                                signType: n.data.signType,
                                paySign: n.data.paySign,
                                success: function(n) {
                                    console.log(n), wx.requestSubscribeMessage({
                                        tmplIds: [ r ],
                                        success: function(n) {
                                            if ("accept" === n[r]) {
                                                e.util.request({
                                                    url: "entry/wxapp/tuwen.mbtxing",
                                                    data: {
                                                        zid: o,
                                                        doctemp: r,
                                                        j_id: t.data.j_id
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                });
                                                var i = t.data.docroom;
                                                wx.setStorageSync("docroom", i);
                                                var c = a.detail.userInfo || {};
                                                if (wx.setStorage({
                                                    key: "userInfo",
                                                    data: c
                                                }), "tuwenwenzhen" == t.data.keywords) {
                                                    var d = wx.getStorageSync("myusername");
                                                    console.log(d);
                                                    wx.setStorageSync("sate", 0);
                                                    var u = {
                                                        myName: d,
                                                        your: i
                                                    };
                                                    wx.navigateTo({
                                                        url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username=" + JSON.stringify(u) + "&z_name=" + s
                                                    });
                                                }
                                            } else {
                                                i = t.data.docroom;
                                                wx.setStorageSync("docroom", i);
                                                var l = a.detail.userInfo || {};
                                                if (wx.setStorage({
                                                    key: "userInfo",
                                                    data: l
                                                }), "tuwenwenzhen" == t.data.keywords) {
                                                    d = wx.getStorageSync("myusername");
                                                    console.log(d);
                                                    wx.setStorageSync("sate", 0);
                                                    u = {
                                                        myName: d,
                                                        your: i
                                                    };
                                                    wx.navigateTo({
                                                        url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username=" + JSON.stringify(u) + "&z_name=" + s
                                                    });
                                                }
                                            }
                                        }
                                    });
                                },
                                fail: function(e) {
                                    console.log(e);
                                }
                            });
                        }
                    });
                } else wx.navigateBack({
                    detail: 1
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
        var a = this.data.order, t = this.channel || a, n = this.uid;
        if (t) {
            if (this.checkJoinLock()) {
                this.lockJoin();
                "broadcaster", wx.navigateTo({
                    url: "../meeting/meeting?channel=".concat(t, "&uid=").concat(n, "&role=").concat("broadcaster")
                });
            }
        } else wx.showToast({
            title: "请提供一个有效的房间名",
            icon: "none",
            duration: 2e3
        });
    },
    onInputChannel: function(e) {
        var a = e.detail.value;
        this.channel = a;
    },
    nextpage: function() {
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/telserev/index"
        });
    },
    onLoad: function(t) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), console.log(t), (f = this).channel = "", f.uid = a.getUid(), f.lock = !1;
        var o = wx.getStorageSync("userInfo"), i = t.zid, s = t.j_id, c = t.allone_key, r = t.name, d = t.order, u = t.money, l = t.keywords, g = t.docroom;
        wx.getStorageSync("myusername");
        if (o && f.setData({
            hasuserInfo: !0,
            userInfo: o
        }), t.teamname && (e.util.request({
            url: "entry/wxapp/office.bmtempetid",
            success: function(e) {
                console.log(e), f.setData({
                    qiany: e.data.qiany
                });
            }
        }), wx.setNavigationBarTitle({
            title: "收银台"
        }), f.setData({
            teamname: t.teamname,
            money: t.money,
            order: t.order,
            q_id: t.q_id
        })), 1 == c) {
            e.util.request({
                url: "entry/wxapp/office.bmtempetid",
                success: function(e) {
                    console.log(e), f.setData({
                        doctemp: e.data.doctemp
                    });
                }
            });
            var p = t.oid, y = t.bl_id;
            wx.setNavigationBarTitle({
                title: "收银台"
            }), f.setData({
                oid: p,
                bl_id: y
            });
        }
        if (2 == c) {
            y = t.bl_id, s = t.j_id;
            wx.setNavigationBarTitle({
                title: "收银台"
            }), e.util.request({
                url: "entry/wxapp/office.bmtempetid",
                success: function(e) {
                    console.log(e), f.setData({
                        doctemp: e.data.doctemp
                    });
                }
            }), f.setData({
                bl_id: y,
                j_id: s
            });
        }
        if (2 == t.datakey) {
            var m = t.datakey;
            p = t.oid;
            f.setData({
                datakey: m
            }), e.util.request({
                url: "entry/wxapp/hzbingli.seeuserbl",
                data: {
                    oid: p
                },
                success: function(e) {
                    console.log(e);
                    var a = e.data.msglist;
                    f.setData({
                        datalist: a
                    });
                }
            }), f.setData({
                oid: p
            });
        }
        e.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(e) {
                console.log(e), f.setData({
                    url: e.data
                });
            }
        }), f.setData({
            sicktel: t.phone,
            allone_key: c,
            name: r,
            money: u,
            order: d,
            zid: i,
            keywords: l,
            docroom: g
        });
        f.data.datalist;
        var f = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: i,
                key: l
            },
            success: function(e) {
                console.log(e), f.setData({
                    newmoney: e.data.data.newmoney
                });
            }
        }), e.util.request({
            url: "entry/wxapp/user.detail",
            data: {
                j_id: s
            },
            success: function(e) {
                console.log(e), f.setData({
                    usernames: e.data.names
                });
            }
        }), e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: i
            },
            success: function(e) {
                console.log(e), f.setData({
                    z_name: e.data.data.z_name
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        wx.navigateBack({
            detail: 3
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    usecase: function() {}
});