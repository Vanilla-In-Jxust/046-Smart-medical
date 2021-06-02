var e = getApp(), t = require("../../../webrtc-room/debug/generatetestusersig.js");

Page({
    data: {
        argeen: !1,
        inquiry: "1",
        switchChecked: !1,
        radio: !1,
        coupon: "",
        coupon_id: "",
        coupon_dk: "",
        money: "",
        old_money: "",
        xiangqing: [],
        coupon_title: "暂无优惠券可用",
        is_yearcard: !1,
        checked: !1,
        yearcard: "",
        useryear: !1,
        zhuanjia_year: !1,
        is_year: !1,
        zid: "",
        fuwus: "",
        lvtong: ""
    },
    onLoad: function(t) {
        var a = this, n = t.money, o = t.zid, i = JSON.parse(t.conets), d = t.key_words, r = t.cfstate, s = t.j_id, u = t.phone, c = t.data_time, y = t.week, l = t.month_time, p = t.addnum, g = t.privateNum;
        if (t.tjorder) {
            var m = t.tjorder;
            a.setData({
                tjorder: m
            });
        }
        if ("undefined" !== t.arr) {
            var f = JSON.parse(t.arr);
            a.setData({
                arr: f
            });
        }
        if (t.inquiry) {
            var _ = t.inquiry;
            a.setData({
                inquiry: _
            });
        }
        console.log(t), "lvtong" == t.leixing && a.setData({
            did: t.did,
            server: t.server,
            money: t.money,
            hid: t.hid,
            keshi_two: t.keshi_two,
            tid: t.tid,
            conets: t.conets,
            leixing: t.leixing,
            cfstate: t.cfstate,
            arr: t.arr,
            time: t.time,
            fuwus: t.fuwus
        }), e.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(e) {
                console.log(e), a.setData({
                    url: e.data
                });
            }
        }), e.util.request({
            url: "entry/wxapp/zhuanjia.getserverinfo",
            data: {
                key_words: d
            },
            success: function(e) {
                console.log(e), a.setData({
                    html: e.data.buyreading
                });
            }
        }), a.setData({
            zid: o,
            key_words: d,
            cfstate: r,
            conets: i,
            old_money: n,
            j_id: s,
            time_leng: 1,
            phone: u,
            data_time: c,
            week: y,
            month_time: l,
            roomID: 123456,
            text: i.text,
            addnum: p,
            privateNum: g,
            zmoney: n
        });
        var w = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: w
        }), "lvtong" != t.leixing ? (a.getYearcard(), e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: o,
                key: d
            },
            success: function(e) {
                console.log(e), a.setData({
                    xiangqing: e.data,
                    z_telephone: e.data.z_telephone,
                    money: e.data.money,
                    old_money: e.data.money,
                    privateNum: e.data.privateNum,
                    addnum: parseInt(e.data.ptzhuiw),
                    advertisement: e.data.advertisement,
                    z_name: e.data.z_name
                }), a.getCoupon();
            }
        }), a.getzhuanjia_year(), a.getuser_year()) : "" != t.did && "undefined" != t.did && null != t.did ? a.getDocinfo() : "" != t.zid && (a.setData({
            zid: t.zid
        }), a.getzhuanjiainfo());
    },
    getzhuanjiainfo: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: t.data.zid,
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                t.setData({
                    xiangqing: e.data
                });
            }
        });
    },
    getDocinfo: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/green.dz_info",
            data: {
                id: t.data.did
            },
            success: function(e) {
                t.setData({
                    xiangqing: e.data
                });
            }
        });
    },
    getzhuanjia_year: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.zhuanjia_year",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: a.data.zid
            },
            success: function(e) {
                "" != e.data && 0 != e.data ? a.setData({
                    zhuanjia_year: !0,
                    zj_year: e.data
                }) : a.setData({
                    zhuanjia_year: !1
                });
            }
        });
    },
    getuser_year: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/team.user_year",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: t.data.zid
            },
            success: function(e) {
                "" != e.data && 0 != e.data ? t.setData({
                    useryear: !0
                }) : t.setData({
                    useryear: !1
                });
            }
        });
    },
    getCoupon: function(t) {
        e.util.request({
            url: "entry/entry/zhuanjia.user_coupons",
            data: {
                openid: wx.getStorageSync("openid"),
                key_words: this.data.key_words,
                zid: this.data.zid,
                money: this.data.old_money
            },
            success: function(e) {}
        });
    },
    yearcard: function(e) {
        var t = this.data.radio;
        this.data.money;
        console.log(t), t ? this.setData({
            is_year: !0
        }) : this.setData({
            is_year: !1
        });
    },
    getYearcard: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/zhuanjia.user_year",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: t.data.zid
            },
            success: function(e) {
                console.log(e), "" != e.data && 0 != e.data ? t.setData({
                    yearcard: e.data,
                    is_yearcard: !0
                }) : t.setData({
                    is_yearcard: !1
                });
            }
        });
    },
    radioChange: function(e) {
        e.currentTarget.dataset.argeen = !e.currentTarget.dataset.argeen, this.setData({
            argeen: e.currentTarget.dataset.argeen
        });
    },
    bindiqanyue: function() {},
    bindwenzhen: function() {
        console.log("查看问诊协议详情");
    },
    switchChange: function() {
        this.setData({
            switchChecked: !this.data.switchChecked
        });
    },
    paybtn: function(a) {
        var n = this, o = (wx.getStorageSync("openid"), n.data.old_money), i = (n.data.money, 
        n.data.zid), d = n.data.key_words, r = n.data.cfstate, s = n.data.conets, u = n.data.j_id, c = n.data.argeen, y = n.data.switchChecked, l = (e.siteInfo.uniacid, 
        n.data.roomID);
        a.currentTarget.dataset.imgArr = n.data.imgArr, console.log(t), n.data.userID = new Date().getTime().toString(16);
        var p = t.gentestusersig(n.data.userID), g = n.data.addnum, m = (n.data.yid, n.data.privateNum), f = n.data.arr, _ = n.data.leixing;
        if (y) w = 1; else var w = 0;
        if (!c) return wx.showToast({
            title: "请勾选问诊协议",
            icon: "none"
        }), !1;
        "lvtong" != _ ? e.util.request({
            url: "entry/wxapp/zhuanjia.pay_money",
            data: {
                zid: i,
                openid: wx.getStorageSync("openid"),
                key_words: d,
                money: n.data.zmoney,
                is_year: !0
            },
            success: function(t) {
                console.log(t);
                var a = t.data;
                if ("undefined" !== a.money) var c = a.money; else c = n.data.money;
                if ("0.00" == c) var y = "是否问诊"; else y = "是否支付";
                if ("-1" == n.data.inquiry) return console.log("-------------------------------------处方"), 
                wx.showModal({
                    title: y,
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/user.addcforder",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                zid: i,
                                key_words: d,
                                cfstate: r,
                                conets: s,
                                money: a.money,
                                j_id: u,
                                ifgk: w,
                                addnum: g,
                                coupon_dk: a.coupon_dk,
                                old_money: o,
                                coupon_id: a.coupon_id,
                                yid: a.yid,
                                year_dk: a.year_dk
                            },
                            success: function(t) {
                                var o = t.data.orders, r = t.data.back_orser, u = t.data.id, y = t.data.overtime, l = t.data.ifgb, p = t.data.ispay, g = t.data.c_id;
                                1 == w && e.util.request({
                                    url: "entry/wxapp/user.openquestion",
                                    data: {
                                        id: u,
                                        key_words: d,
                                        back_orser: r
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), "0.00" == c ? (e.util.request({
                                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                    data: {
                                        id: u,
                                        val: s.text,
                                        near: "开处方",
                                        zid: i
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), e.util.request({
                                    url: "entry/wxapp/yuyue.kfangmsgdh",
                                    data: {
                                        orders: o
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), wx.navigateTo({
                                    url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + r + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + y + "&ifgb=" + l + "&ifpay=" + p + "&c_id=" + g
                                })) : e.util.request({
                                    url: "entry/wxapp/yuyue.paywenzhen",
                                    header: {
                                        "Content-Type": "application/xml"
                                    },
                                    method: "GET",
                                    data: {
                                        openid: wx.getStorageSync("openid"),
                                        z_tw_money: c,
                                        orders: o,
                                        key_words: d,
                                        coupon_id: a.coupon_id
                                    },
                                    success: function(t) {
                                        console.log(t), wx.requestPayment({
                                            timeStamp: t.data.timeStamp,
                                            nonceStr: t.data.nonceStr,
                                            package: t.data.package,
                                            signType: t.data.signType,
                                            paySign: t.data.paySign,
                                            success: function(t) {
                                                console.log(t), e.util.request({
                                                    url: "entry/wxapp/yuyue.upchufangwentype",
                                                    data: {
                                                        orders: o
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), e.util.request({
                                                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                    data: {
                                                        id: u,
                                                        val: s.text,
                                                        near: "开处方",
                                                        zid: i
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), e.util.request({
                                                    url: "entry/wxapp/yuyue.kfangmsgdh",
                                                    data: {
                                                        orders: o
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), wx.navigateTo({
                                                    url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + r + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + y + "&ifgb=" + l + "&ifpay=" + p + "&c_id=" + g
                                                });
                                            },
                                            fail: function(e) {
                                                console.log(e);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }), !1;
                if ("tuwenwenzhen" == d && wx.showModal({
                    title: y,
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/tuwen.addbl",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                zid: i,
                                key_words: d,
                                cfstate: r,
                                conets: s,
                                money: a.money,
                                j_id: u,
                                ifgk: w,
                                addnum: g,
                                biaoqian: f,
                                coupon_dk: a.coupon_dk,
                                old_money: o,
                                coupon_id: a.coupon_id,
                                yid: a.yid,
                                year_dk: a.year_dk
                            },
                            success: function(t) {
                                console.log(t);
                                var o = t.data.orders, i = t.data.back_orser, r = t.data.id, u = t.data.overtime, c = t.data.ifpay, y = t.data.ifgb, l = {
                                    advertisement: n.data.advertisement,
                                    dex: 0,
                                    ifpay: c,
                                    j_id: n.data.j_id,
                                    money: a.money,
                                    orders: o,
                                    overtime: u,
                                    z_name: n.data.z_name,
                                    zid: n.data.zid
                                }, p = JSON.stringify(l);
                                if (1 == w && e.util.request({
                                    url: "entry/wxapp/user.openquestion",
                                    data: {
                                        id: r,
                                        key_words: d,
                                        back_orser: i
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), "0.00" == a.money && "0" == a.money) return e.util.request({
                                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                    data: {
                                        id: r,
                                        val: s.text,
                                        near: "图文",
                                        zid: n.data.zid
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), void e.util.request({
                                    url: "entry/wxapp/yuyue.tuwenmsgdh",
                                    data: {
                                        orders: o
                                    },
                                    success: function(e) {
                                        console.log(e), wx.navigateTo({
                                            url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username={}&list=" + p + "&z_name=" + n.data.z_name + "&orders=" + o + "&key_words=" + d + "&ifpay=" + c + "&money=" + a.money + "&overtime=" + u + "&currentData=" + c + "&ifgb=" + y
                                        });
                                    }
                                });
                                e.util.request({
                                    url: "entry/wxapp/yuyue.paywenzhen",
                                    header: {
                                        "Content-Type": "application/xml"
                                    },
                                    method: "GET",
                                    data: {
                                        openid: wx.getStorageSync("openid"),
                                        z_tw_money: a.money,
                                        orders: o,
                                        key_words: d
                                    },
                                    success: function(t) {
                                        console.log(t), wx.requestPayment({
                                            timeStamp: t.data.timeStamp,
                                            nonceStr: t.data.nonceStr,
                                            package: t.data.package,
                                            signType: t.data.signType,
                                            paySign: t.data.paySign,
                                            success: function(e) {
                                                console.log(e);
                                            },
                                            fail: function(e) {
                                                console.log(e);
                                            },
                                            complete: function(t) {
                                                if (console.log("支付完成"), console.log(t.errMsg), e.util.request({
                                                    url: "entry/wxapp/yuyue.tuwenmsgdh",
                                                    data: {
                                                        orders: o
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), "requestPayment:ok" == t.errMsg) return console.log(o), e.util.request({
                                                    url: "entry/wxapp/yuyue.uptuwentype",
                                                    data: {
                                                        orders: o
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), e.util.request({
                                                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                    data: {
                                                        id: r,
                                                        val: s.text,
                                                        near: "图文",
                                                        zid: n.data.zid
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), void e.util.request({
                                                    url: "entry/wxapp/yuyue.tuwenmsgdh",
                                                    data: {
                                                        orders: o
                                                    },
                                                    success: function(e) {
                                                        console.log(e), wx.navigateTo({
                                                            url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username={}&list=" + p + "&z_name=" + n.data.z_name + "&orders=" + o + "&key_words=" + d + "&ifpay=" + c + "&money=" + a.money + "&overtime=" + u + "&currentData=" + c + "&ifgb=" + y
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }), "dianhuajizhen" == d) {
                    wx.getStorageSync("openid");
                    var _ = n.data.phone, h = n.data.time_leng;
                    return e.util.request({
                        url: "entry/wxapp/yuyue.telladd1",
                        data: {
                            zid: i,
                            tell: _,
                            describe: s,
                            openid: wx.getStorageSync("openid"),
                            keywords: d,
                            year: n.data.data_time,
                            month_time: n.data.month_time,
                            week: n.data.week,
                            money: a.money,
                            min: h,
                            j_id: n.data.j_id,
                            roomID: l,
                            sdkAppID: p.sdkAppID,
                            template: "1v1",
                            userId2: n.data.userID,
                            userSig2: p.userSig,
                            addnum: g,
                            privateNum: m,
                            coupon_dk: a.coupon_dk,
                            old_money: o,
                            coupon_id: a.coupon_id,
                            yid: a.yid,
                            year_dk: a.year_dk
                        },
                        success: function(t) {
                            console.log(t);
                            var o = t.data.orders, i = t.data.back_orser, r = t.data.id, u = t.data.overtime, c = t.data.ifpay, y = t.data.ifgb;
                            if (1 == w && e.util.request({
                                url: "entry/wxapp/user.openquestion",
                                data: {
                                    id: r,
                                    key_words: d,
                                    back_orser: i
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), "0.00" == a.money || "0" == a.money) return e.util.request({
                                url: "entry/wxapp/yuyue.telmsgdh",
                                data: {
                                    orders: o,
                                    text: "电话问诊"
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), e.util.request({
                                url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                data: {
                                    id: r,
                                    val: s.text,
                                    near: "电话",
                                    zid: n.data.zid
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), void wx.showToast({
                                title: "预约成功，请保持电话畅通！",
                                icon: "none",
                                success: function() {
                                    setTimeout(function() {
                                        wx.navigateTo({
                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y
                                        });
                                    }, 1900);
                                }
                            });
                            e.util.request({
                                url: "entry/wxapp/yuyue.paywenzhen",
                                header: {
                                    "Content-Type": "application/xml"
                                },
                                method: "GET",
                                data: {
                                    openid: wx.getStorageSync("openid"),
                                    z_tw_money: a.money,
                                    orders: o,
                                    key_words: d
                                },
                                success: function(t) {
                                    console.log(t), wx.requestPayment({
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            console.log(e);
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        },
                                        complete: function(t) {
                                            if ("requestPayment:ok" == t.errMsg) return e.util.request({
                                                url: "entry/wxapp/yuyue.upwenzhentype",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/yuyue.telmsgdh",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                data: {
                                                    id: r,
                                                    val: s.text,
                                                    near: "电话",
                                                    zid: n.data.zid
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), void wx.showToast({
                                                title: "预约成功，请保持电话畅通！",
                                                icon: "none",
                                                success: function() {
                                                    setTimeout(function() {
                                                        wx.navigateTo({
                                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y
                                                        });
                                                    }, 1900);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }), !1;
                }
                if ("shipinwenzhen" == d) {
                    wx.getStorageSync("openid"), _ = n.data.phone, h = n.data.time_leng;
                    return e.util.request({
                        url: "entry/wxapp/yuyue.telladd1",
                        data: {
                            zid: i,
                            tell: _,
                            describe: s,
                            openid: wx.getStorageSync("openid"),
                            keywords: d,
                            year: n.data.data_time,
                            month_time: n.data.month_time,
                            week: n.data.week,
                            money: a.money,
                            min: h,
                            j_id: n.data.j_id,
                            roomID: l,
                            sdkAppID: p.sdkAppID,
                            template: "1v1",
                            userId2: n.data.userID,
                            userSig2: p.userSig,
                            addnum: g,
                            privateNum: m,
                            coupon_dk: a.coupon_dk,
                            old_money: o,
                            coupon_id: a.coupon_id,
                            yid: a.yid,
                            year_dk: a.year_dk
                        },
                        success: function(t) {
                            console.log(t);
                            var o = t.data.orders, i = t.data.back_orser, r = t.data.id, u = t.data.overtime, c = t.data.ifpay, y = t.data.ifgb;
                            if (1 == w && e.util.request({
                                url: "entry/wxapp/user.openquestion",
                                data: {
                                    id: r,
                                    key_words: d,
                                    back_orser: i
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), "0.00" == a.money) return e.util.request({
                                url: "entry/wxapp/yuyue.vidomsgdh",
                                data: {
                                    orders: o
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), void wx.showToast({
                                title: "预约成功！",
                                icon: "none",
                                success: function() {
                                    setTimeout(function() {
                                        wx.navigateTo({
                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y
                                        });
                                    }, 1900);
                                }
                            });
                            e.util.request({
                                url: "entry/wxapp/yuyue.paywenzhen",
                                header: {
                                    "Content-Type": "application/xml"
                                },
                                method: "GET",
                                data: {
                                    openid: wx.getStorageSync("openid"),
                                    z_tw_money: a.money,
                                    orders: o,
                                    key_words: d
                                },
                                success: function(t) {
                                    console.log(t), wx.requestPayment({
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            console.log(e);
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        },
                                        complete: function(t) {
                                            if ("requestPayment:ok" == t.errMsg) return e.util.request({
                                                url: "entry/wxapp/yuyue.upwenzhentype",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/yuyue.vidomsgdh",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                data: {
                                                    id: r,
                                                    val: s.text,
                                                    near: "视频",
                                                    zid: n.data.zid
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), void wx.showToast({
                                                title: "预约成功！",
                                                icon: "none",
                                                success: function() {
                                                    setTimeout(function() {
                                                        wx.navigateTo({
                                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y
                                                        });
                                                    }, 1900);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }), !1;
                }
                if ("yuanchengkaifang" == d) return wx.showModal({
                    title: "是否支付",
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/user.addcforder",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                zid: i,
                                key_words: d,
                                cfstate: r,
                                conets: s,
                                money: a.money,
                                j_id: u,
                                ifgk: w,
                                addnum: g,
                                coupon_dk: a.coupon_dk,
                                old_money: o,
                                coupon_id: a.coupon_id,
                                yid: a.yid,
                                year_dk: a.year_dk
                            },
                            success: function(t) {
                                console.log(t);
                                var o = t.data.orders, r = t.data.back_orser, u = t.data.id, c = t.data.c_id, y = t.data.overtime, l = t.data.ispay, p = t.data.ifgb;
                                1 == w && e.util.request({
                                    url: "entry/wxapp/user.openquestion",
                                    data: {
                                        id: u,
                                        key_words: d,
                                        back_orser: r
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), "0.00" == a.money ? (e.util.request({
                                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                    data: {
                                        id: u,
                                        val: s.text,
                                        near: "开处方",
                                        zid: i
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), e.util.request({
                                    url: "entry/wxapp/yuyue.kfangmsgdh",
                                    data: {
                                        orders: o
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), wx.navigateTo({
                                    url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + r + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + y + "&ifpay=" + l + "&ifgb=" + p + "&c_id=" + c
                                })) : e.util.request({
                                    url: "entry/wxapp/yuyue.paywenzhen",
                                    header: {
                                        "Content-Type": "application/xml"
                                    },
                                    method: "GET",
                                    data: {
                                        openid: wx.getStorageSync("openid"),
                                        z_tw_money: a.money,
                                        orders: o,
                                        key_words: d,
                                        coupon_id: a.coupon_id
                                    },
                                    success: function(t) {
                                        console.log(t), wx.requestPayment({
                                            timeStamp: t.data.timeStamp,
                                            nonceStr: t.data.nonceStr,
                                            package: t.data.package,
                                            signType: t.data.signType,
                                            paySign: t.data.paySign,
                                            success: function(t) {
                                                console.log(t), e.util.request({
                                                    url: "entry/wxapp/yuyue.upchufangwentype",
                                                    data: {
                                                        orders: o
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), e.util.request({
                                                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                    data: {
                                                        id: u,
                                                        val: s.text,
                                                        near: "开处方",
                                                        zid: i
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), wx.navigateTo({
                                                    url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + r + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + y + "&ifpay=" + l + "&ifgb=" + p + "&c_id=" + c
                                                });
                                            },
                                            fail: function(e) {
                                                console.log(e);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }), !1;
                if ("shoushukuaiyue" == d) {
                    wx.getStorageSync("openid"), _ = n.data.phone, h = n.data.time_leng, n.data.tjorder;
                    return e.util.request({
                        url: "entry/wxapp/yuyue.telladd1",
                        data: {
                            zid: i,
                            tell: _,
                            describe: s,
                            openid: wx.getStorageSync("openid"),
                            keywords: d,
                            year: n.data.data_time,
                            month_time: n.data.month_time,
                            week: n.data.week,
                            money: a.money,
                            min: h,
                            j_id: n.data.j_id,
                            roomID: l,
                            sdkAppID: p.sdkAppID,
                            template: "1v1",
                            userId2: n.data.userID,
                            userSig2: p.userSig,
                            addnum: g,
                            privateNum: m,
                            coupon_dk: a.coupon_dk,
                            old_money: o,
                            coupon_id: a.coupon_id,
                            yid: a.yid,
                            year_dk: a.year_dk
                        },
                        success: function(t) {
                            console.log(t);
                            var o = t.data.orders, i = t.data.back_orser, r = t.data.id, u = t.data.overtime, c = t.data.ifpay, y = t.data.ifgb;
                            if ("0.00" == a.money) return e.util.request({
                                url: "entry/wxapp/yuyue.msgdh",
                                data: {
                                    orders: o,
                                    text: "手术快约"
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), e.util.request({
                                url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                data: {
                                    id: r,
                                    val: s.text,
                                    near: "手术快约",
                                    zid: n.data.zid
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), void wx.showToast({
                                title: "预约成功！",
                                icon: "none",
                                success: function() {
                                    setTimeout(function() {
                                        wx.navigateTo({
                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y
                                        });
                                    }, 1900);
                                }
                            });
                            e.util.request({
                                url: "entry/wxapp/yuyue.paywenzhen",
                                header: {
                                    "Content-Type": "application/xml"
                                },
                                method: "GET",
                                data: {
                                    openid: wx.getStorageSync("openid"),
                                    z_tw_money: a.money,
                                    orders: o,
                                    key_words: d
                                },
                                success: function(t) {
                                    console.log(t), wx.requestPayment({
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            console.log(e);
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        },
                                        complete: function(t) {
                                            if ("requestPayment:ok" == t.errMsg) return e.util.request({
                                                url: "entry/wxapp/yuyue.upwenzhentype",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/yuyue.shouangmsgdh",
                                                data: {
                                                    orders: o,
                                                    text: "手术快约"
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                data: {
                                                    id: r,
                                                    val: s.text,
                                                    near: "手术快约",
                                                    zid: n.data.zid
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), void wx.showToast({
                                                title: "预约成功！",
                                                icon: "none",
                                                success: function() {
                                                    setTimeout(function() {
                                                        wx.navigateTo({
                                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y
                                                        });
                                                    }, 1900);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }), !1;
                }
                if ("tijianjiedu" == d) {
                    wx.getStorageSync("openid"), _ = n.data.phone, h = n.data.time_leng;
                    return e.util.request({
                        url: "entry/wxapp/yuyue.telladd1",
                        data: {
                            zid: i,
                            tell: _,
                            describe: s,
                            openid: wx.getStorageSync("openid"),
                            keywords: d,
                            year: n.data.data_time,
                            month_time: n.data.month_time,
                            week: n.data.week,
                            money: a.money,
                            min: h,
                            j_id: n.data.j_id,
                            roomID: l,
                            sdkAppID: p.sdkAppID,
                            template: "1v1",
                            userId2: n.data.userID,
                            userSig2: p.userSig,
                            addnum: g,
                            privateNum: m,
                            coupon_dk: a.coupon_dk,
                            old_money: o,
                            coupon_id: a.coupon_id,
                            yid: a.yid,
                            year_dk: a.year_dk,
                            tjorder: n.data.tjorder
                        },
                        success: function(t) {
                            console.log(t);
                            var o = t.data.orders, i = t.data.back_orser, r = t.data.id, u = t.data.overtime, c = t.data.ifpay, y = t.data.ifgb;
                            "0.00" != a.money ? e.util.request({
                                url: "entry/wxapp/yuyue.paywenzhen",
                                header: {
                                    "Content-Type": "application/xml"
                                },
                                method: "GET",
                                data: {
                                    openid: wx.getStorageSync("openid"),
                                    z_tw_money: a.money,
                                    orders: o,
                                    key_words: d
                                },
                                success: function(t) {
                                    console.log(t), wx.requestPayment({
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            console.log(e);
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        },
                                        complete: function(t) {
                                            if ("requestPayment:ok" == t.errMsg) return e.util.request({
                                                url: "entry/wxapp/yuyue.upwenzhentype",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/yuyue.tijianmsgdh",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                                data: {
                                                    id: r,
                                                    val: s.text,
                                                    near: "报告解读",
                                                    zid: n.data.zid
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), void wx.showToast({
                                                title: "预约成功！",
                                                icon: "none",
                                                success: function() {
                                                    setTimeout(function() {
                                                        wx.navigateTo({
                                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y + "&id=" + r
                                                        });
                                                    }, 1900);
                                                }
                                            });
                                        }
                                    });
                                }
                            }) : wx.showToast({
                                title: "预约成功！",
                                icon: "none",
                                success: function() {
                                    e.util.request({
                                        url: "entry/wxapp/yuyue.tijianmsgdh",
                                        data: {
                                            orders: o
                                        },
                                        success: function(e) {
                                            console.log(e);
                                        }
                                    }), e.util.request({
                                        url: "entry/wxapp/zhuanjia.getdocmbtxing",
                                        data: {
                                            id: r,
                                            val: s.text,
                                            near: "报告解读",
                                            zid: n.data.zid
                                        },
                                        success: function(e) {
                                            console.log(e);
                                        }
                                    }), setTimeout(function() {
                                        wx.navigateTo({
                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&overtime=" + u + "&ifpay=" + c + "&ifgb=" + y + "&id=" + r
                                        });
                                    }, 1900);
                                }
                            });
                        }
                    }), !1;
                }
                if ("yuanchengguahao" == d) {
                    wx.getStorageSync("openid"), _ = n.data.phone, h = n.data.time_leng;
                    return e.util.request({
                        url: "entry/wxapp/zhuanjia.add_ghorder",
                        data: {
                            zid: i,
                            tell: _,
                            describe: s,
                            openid: wx.getStorageSync("openid"),
                            keywords: d,
                            year: n.data.data_time,
                            month_time: n.data.month_time,
                            week: n.data.week,
                            money: a.money,
                            min: h,
                            j_id: n.data.j_id,
                            roomID: l,
                            sdkAppID: p.sdkAppID,
                            template: "1v1",
                            userId2: n.data.userID,
                            userSig2: p.userSig,
                            addnum: g,
                            privateNum: m,
                            coupon_dk: a.coupon_dk,
                            old_money: o,
                            coupon_id: a.coupon_id,
                            yid: a.yid,
                            year_dk: a.year_dk
                        },
                        success: function(t) {
                            console.log(t);
                            var o = t.data.orders, i = t.data.back_orser, r = (t.data.id, t.data.ifpay), s = t.data.ifgb;
                            if ("0.00" == a.money) return e.util.request({
                                url: "entry/wxapp/yuyue.mobelghmsgdh",
                                data: {
                                    orders: o
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), e.util.request({
                                url: "entry/wxapp/yuyue.guhaomsgdh",
                                data: {
                                    orders: o,
                                    text: "挂号预约"
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            }), void wx.showToast({
                                title: "预约成功！",
                                icon: "none",
                                success: function() {
                                    setTimeout(function() {
                                        wx.navigateTo({
                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&ifgb=" + s + "&ifpay=" + r
                                        });
                                    }, 1900);
                                }
                            });
                            e.util.request({
                                url: "entry/wxapp/yuyue.paywenzhen",
                                header: {
                                    "Content-Type": "application/xml"
                                },
                                method: "GET",
                                data: {
                                    openid: wx.getStorageSync("openid"),
                                    z_tw_money: a.money,
                                    orders: o,
                                    key_words: d
                                },
                                success: function(t) {
                                    console.log(t), wx.requestPayment({
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            console.log(e);
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        },
                                        complete: function(t) {
                                            if ("requestPayment:ok" == t.errMsg) return e.util.request({
                                                url: "entry/wxapp/yuyue.updateghorder",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/yuyue.mobelghmsgdh",
                                                data: {
                                                    orders: o
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), e.util.request({
                                                url: "entry/wxapp/yuyue.guhaomsgdh",
                                                data: {
                                                    orders: o,
                                                    text: "挂号预约"
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), void wx.showToast({
                                                title: "预约成功！",
                                                icon: "none",
                                                success: function() {
                                                    setTimeout(function() {
                                                        wx.navigateTo({
                                                            url: "../zhifuend/zhifuend?txt=yes&zid=" + n.data.zid + "&back_orser=" + i + "&key_words=" + d + "&j_id=" + n.data.j_id + "&ifgb=" + s + "&ifpay=" + r
                                                        });
                                                    }, 1900);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }), !1;
                }
            }
        }) : e.util.request({
            url: "entry/wxapp/green.order",
            data: {
                openid: wx.getStorageSync("openid"),
                did: n.data.did,
                server: n.data.server,
                money: n.data.money,
                hid: n.data.hid,
                keshi_two: n.data.keshi_two,
                typeid: n.data.tid,
                content: n.data.conets,
                time: n.data.time,
                cfstate: n.data.cfstate,
                j_id: n.data.j_id,
                biaoqian: n.data.arr,
                zid: n.data.zid,
                fuwus: n.data.fuwus
            },
            success: function(t) {
                var a = t.data;
                "" == n.data.money || "0" == n.data.money || "0.00" == n.data.money ? wx.showToast({
                    title: "预约成功！",
                    icon: "none",
                    success: function() {
                        setTimeout(function() {
                            wx.reLaunch({
                                url: "/hyb_yl/lvtongserver/pages/orderdetail/orderdetail?txt=yes&did=" + n.data.did + "&back_orser=" + a.back_orser + "&key_words=" + a.key_words + "&j_id=" + n.data.j_id + "&zid=" + n.data.zid + "&j_id=" + n.data.j_id + "&ifpay=1&money=" + n.data.money + "&id=" + a.id
                            });
                        }, 1900);
                    }
                }) : e.util.request({
                    url: "entry/wxapp/green.payorder",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        z_tw_money: a.money,
                        orders: a.orders,
                        key_words: n.data.server
                    },
                    success: function(e) {
                        console.log(e), wx.requestPayment({
                            timeStamp: e.data.timeStamp,
                            nonceStr: e.data.nonceStr,
                            package: e.data.package,
                            signType: e.data.signType,
                            paySign: e.data.paySign,
                            success: function(e) {
                                console.log(e);
                            },
                            fail: function(e) {
                                console.log(e);
                            },
                            complete: function(e) {
                                "requestPayment:ok" != e.errMsg || wx.showToast({
                                    title: "预约成功！",
                                    icon: "none",
                                    success: function() {
                                        setTimeout(function() {
                                            wx.reLaunch({
                                                url: "/hyb_yl/lvtongserver/pages/orderdetail/orderdetail?txt=yes&did=" + n.data.did + "&back_orser=" + a.back_orser + "&key_words=" + a.key_words + "&j_id=" + n.data.j_id + "&zid=" + n.data.zid + "&j_id=" + n.data.j_id + "&ifpay=1&money=" + n.data.money + "&id=" + a.id
                                            });
                                        }, 1900);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    orderedbtn: function() {
        wx.navigateTo({
            url: "../orderedtime/orderedtime"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onRadioChange: function(e) {
        console.log(e), this.setData({
            radio: !this.data.radio
        });
    }
});