var a = getApp(), t = null;

Page({
    data: {
        pjxing: 0,
        txt: "",
        pingjia: !1,
        pjvalue: "",
        sendlist: [ "问诊异常通知", "问诊提醒", "医护服务动态提醒" ],
        applyFor: !1,
        popshow: !1,
        shouwtab: !1,
        upload_picture_list: [],
        typedate: 0,
        msgmb: "yes",
        imgs: [ "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg" ]
    },
    big_img: function(a) {
        var t = a.currentTarget.dataset.imglist, e = a.currentTarget.dataset.img;
        console.log(a), console.log(t), wx.previewImage({
            urls: t,
            current: e
        });
    },
    lookreport: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport?id=" + t + "&ifzj=0"
        });
    },
    closepj: function() {
        this.setData({
            pingjia: !1
        });
    },
    closezhuiwen: function() {
        this.setData({
            shouwtab: !1
        });
    },
    tabinput: function(a) {
        this.setData({
            shouwtab: !this.data.shouwtab
        });
    },
    xing: function(a) {
        var t = a.currentTarget.dataset.dex;
        this.setData({
            pjxing: 1 * t + 1
        });
    },
    addxing: function(a) {
        var t = 1 * a.currentTarget.dataset.dex + 1 * this.data.pjxing + 1;
        this.setData({
            pjxing: t
        });
    },
    pjtextarea: function(a) {
        this.setData({
            pjvalue: a.detail.value
        });
    },
    submitpj: function() {
        this.data.pjxing, this.data.pjvalue;
        this.setData({
            pingjia: !1
        });
    },
    onLoad: function(t) {
        wx.showNavigationBarLoading();
        var e = this, n = t.zid, s = t.back_orser, i = wx.getStorageSync("color"), o = t.key_words, u = t.j_id, r = t.back_orser, d = t.ifpay, c = t.money, l = t.currentData;
        if (t.ifgb) {
            var g = t.ifgb;
            e.setData({
                ifgb: g
            });
        }
        if (t.id) {
            var p = t.id;
            e.setData({
                id: p
            });
        }
        if (t.c_id) {
            var h = t.c_id;
            e.setData({
                c_id: h
            });
        }
        a.util.request({
            url: "entry/wxapp/user.tijianorder",
            data: {
                id: t.id,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), e.setData({
                    bglist: a.data
                });
            }
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), a.util.request({
            url: "entry/wxapp/index.techen",
            success: function(a) {
                console.log(a);
                var t = a.data.wxapp_mb;
                e.setData({
                    submitOrder: t.submitOrder,
                    OpenHalfcard: t.OpenHalfcard,
                    Mobile: t.Mobile,
                    hexiao: t.hexiao,
                    spstratSuccess: t.spstratSuccess,
                    cfoverfcard: t.cfoverfcard
                });
            }
        }), a.util.request({
            url: "entry/wxapp/user.detail",
            data: {
                j_id: u
            },
            success: function(a) {
                console.log(a), e.setData({
                    usedetail: a.data
                });
            }
        }), a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), e.setData({
                    url: a.data
                });
            }
        }), t.txt && this.setData({
            txt: t.txt,
            popshow: "yes" == t.txt
        }), a.util.request({
            url: "entry/wxapp/user.answeropen",
            data: {
                orders: s
            },
            success: function(a) {
                console.log(a), 1 == a.data.status && e.setData({
                    open: 1
                }), 0 == a.data.status && e.setData({
                    open: 0
                }), a || e.setData({
                    open: 0
                }), e.setData({
                    id: a.data.id
                });
            }
        }), e.setData({
            zid: n,
            back_orser: s,
            key_words: o,
            j_id: u,
            ifpay: d,
            money: c,
            orders: r,
            currentData: l
        });
        var y = wx.getStorageSync("userInfo");
        e.setData({
            u_name: y.u_name,
            u_thumb: y.u_thumb
        });
    },
    quitclick: function() {
        this.setData({
            popshow: !1,
            applyFor: !1
        });
    },
    allowbtn: function() {
        this.setData({
            popshow: !1,
            applyFor: !1,
            txt: ""
        });
    },
    onHide: function() {
        clearInterval(t);
    },
    ptiontitbtn: function(a) {
        console.log(a);
        var t = this.data.spstratSuccess, e = (this.data.OpenHalfcard, this.data.Mobile, 
        this.data.hexiao, this.data.cfoverfcard);
        console.log(e), wx.requestSubscribeMessage({
            tmplIds: [ t, e ],
            success: function(a) {
                console.log(a);
            }
        }), this.setData({
            applyFor: !0,
            msgmb: "non",
            popshow: !1
        });
    },
    onReady: function() {
        wx.showNavigationBarLoading(), this.getchufang();
    },
    onShow: function() {
        0 == this.data.ifgb && this.getUptotime(), this.getUserchar(), wx.showNavigationBarLoading();
    },
    onUnload: function() {
        clearInterval(t);
        var a = this.data.currentData, e = getCurrentPages();
        e[e.length - 2];
        this.setData({
            currentData: a
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getUserchar: function() {
        var t = this, e = t.data.zid, n = t.data.back_orser, s = t.data.key_words;
        "tuwenwenzhen" == s && a.util.request({
            url: "entry/wxapp/tuwen.listall",
            data: {
                zid: e,
                back_orser: n,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), 0 !== a.data.length && t.setData({
                    id: a.data[0].id
                });
                var e = a.data;
                t.setData({
                    list: a.data,
                    ifpay: e[0].ifpay,
                    ifgb: e[0].ifgb,
                    addnum: parseInt(e[0].addnum)
                });
            }
        }), "dianhuajizhen" != s && "shipinwenzhen" != s && "tijianjiedu" != s && "shoushukuaiyue" != s || a.util.request({
            url: "entry/wxapp/yuyue.dianhualistall",
            data: {
                zid: e,
                back_orser: n,
                key_words: s,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a);
                var e = a.data;
                t.setData({
                    list: a.data,
                    ifpay: e[0].ifpay,
                    ifgb: e[0].ifgb,
                    addnum: parseInt(e[0].addnum)
                });
            }
        }), "yuanchengkaifang" == s && a.util.request({
            url: "entry/wxapp/yuyue.cflistall",
            data: {
                zid: e,
                back_orser: n,
                key_words: s,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a.data);
                var e = a.data;
                t.setData({
                    ifpay: e[0].ifpay,
                    ifgb: e[0].ifgb
                }), 0 !== a.data.length && t.setData({
                    id: a.data[0].c_id
                }), t.setData({
                    list: a.data,
                    addnum: parseInt(e[0].addnum)
                });
            }
        }), "yuanchengguahao" == s && a.util.request({
            url: "entry/wxapp/yuyue.guahaolistall",
            data: {
                zid: e,
                back_orser: n,
                key_words: s,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                var e = a.data;
                t.setData({
                    list: a.data,
                    ifpay: e[0].ifpay,
                    ifgb: e[0].ifgb
                });
            }
        });
    },
    uploadimg: function() {
        var t = this, e = a.siteInfo.uniacid, n = t.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                for (var s = a.tempFilePaths, i = 0; i < s.length; i++) wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: s[i],
                    name: "upfile",
                    formData: [],
                    success: function(a) {
                        console.log(a), n.push(a.data), t.setData({
                            upload_picture_list: n,
                            typedate: 1
                        });
                    }
                });
            }
        });
    },
    clearImg: function(a) {
        var t = a.currentTarget.dataset.ind;
        console.log(t);
        var e = this.data.upload_picture_list;
        e.splice(t, 1), this.setData({
            upload_picture_list: e
        });
    },
    submitformzw: function(t) {
        var e = this, n = t.detail.value.zhuiwen, s = e.data.upload_picture_list, i = e.data.zid, o = e.data.typedate, u = e.data.back_orser, r = e.data.key_words, d = parseInt(e.data.addnum);
        if (e.data.id) var c = e.data.id;
        if ("shipinwenzhen" == r || "dianhuajizhen" == r || "tijianjiedu" == r || "shoushukuaiyue" == r) {
            if ("dianhuajizhen" == r) var l = "电话";
            if ("shipinwenzhen" == r) l = "视频";
            if ("tijianjiedu" == r) l = "报告解读";
            if ("shoushukuaiyue" == r) l = "手术快约";
            var g = {
                text: n,
                typedate: o,
                upload_picture_list: s
            };
            a.util.request({
                url: "entry/wxapp/yuyue.adduserzhuiwen",
                data: {
                    arr: g,
                    orders: u,
                    zid: i,
                    keywords: r,
                    addnum: d
                },
                success: function(t) {
                    console.log(t), e.getUserchar(), e.setData({
                        shouwtab: !1
                    }), a.util.request({
                        url: "entry/wxapp/zhuanjia.getdocmbtxing",
                        data: {
                            id: c,
                            val: n,
                            near: l,
                            zid: i
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    });
                }
            });
        }
        if ("yuanchengguahao" == r) {
            if ("yuanchengguahao" == r) l = "在线挂号";
            g = {
                text: n,
                typedate: o,
                upload_picture_list: s
            };
            a.util.request({
                url: "entry/wxapp/yuyue.addguahaozhuiwen",
                data: {
                    arr: g,
                    orders: u,
                    zid: i,
                    keywords: r,
                    addnum: d
                },
                success: function(t) {
                    console.log(t), e.getUserchar(), e.setData({
                        shouwtab: !1
                    }), a.util.request({
                        url: "entry/wxapp/zhuanjia.getdocmbtxing",
                        data: {
                            id: c,
                            val: n,
                            near: l,
                            zid: i
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    });
                }
            });
        }
        if ("tuwenwenzhen" == r) {
            g = {
                text: n,
                typedate: o,
                upload_picture_list: s
            };
            a.util.request({
                url: "entry/wxapp/Zhuanjia.adduserzhuiwen",
                data: {
                    arr: g,
                    orders: u,
                    zid: i,
                    grade: 2,
                    addnum: d
                },
                success: function(t) {
                    console.log(t), e.getUserchar(), e.setData({
                        shouwtab: !1
                    }), a.util.request({
                        url: "entry/wxapp/zhuanjia.getdocmbtxing",
                        data: {
                            id: c,
                            val: n,
                            near: "图文",
                            zid: i
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    });
                }
            });
        }
        if ("yuanchengkaifang" == r) {
            g = {
                text: n,
                text2: "",
                timleng: "",
                typedate: o,
                upload_picture_list: s
            };
            a.util.request({
                url: "entry/wxapp/user.addcfzhuiwen",
                data: {
                    arr: g,
                    orders: u,
                    zid: i,
                    keywords: r,
                    role: 0,
                    addnum: d
                },
                success: function(t) {
                    console.log(t), e.getUserchar(), e.setData({
                        shouwtab: !1
                    }), a.util.request({
                        url: "entry/wxapp/zhuanjia.getdocmbtxing",
                        data: {
                            id: c,
                            val: n,
                            near: "开处方",
                            zid: i
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    });
                }
            });
        }
    },
    buttonclick: function(t) {
        var e = this, n = e.data.back_orser, s = e.data.key_words, i = t.currentTarget.dataset.open, o = t.currentTarget.dataset.id, u = e.data.ifpay;
        if (0 == i) var r = "取消公开"; else r = "公开问题";
        if ("3" == u || "2" == u) var d = [ "删除订单", r ]; else d = [ "删除订单" ];
        wx.showActionSheet({
            itemList: d,
            itemColor: "",
            success: function(t) {
                0 == t.tapIndex ? t.cancel || wx.showModal({
                    title: "是否删除订单？",
                    content: "删除后不可恢复",
                    success: function(t) {
                        t.confirm && a.util.request({
                            url: "entry/wxapp/user.delwzorder_two",
                            data: {
                                back_orser: n
                            },
                            success: function(a) {
                                console.log(a), wx.showToast({
                                    title: "删除成功",
                                    icon: "none",
                                    success: function(a) {
                                        setTimeout(function() {
                                            wx.navigateBack({
                                                detail: 1
                                            });
                                        }, 2e3);
                                    }
                                });
                            }
                        });
                    }
                }) : 1 == e.data.open ? a.util.request({
                    url: "enter/wxapp/user.openquestion",
                    data: {
                        back_orser: n,
                        key_words: s,
                        id: o
                    },
                    success: function(t) {
                        console.log(t), a.util.request({
                            url: "entry/wxapp/user.answeropen",
                            data: {
                                orders: n
                            },
                            success: function(a) {
                                console.log(a), 1 == a.data.status ? e.setData({
                                    open: 1,
                                    id: a.data.id,
                                    status: a.data.status
                                }) : e.setData({
                                    open: 0
                                });
                            }
                        });
                    }
                }) : wx.showModal({
                    title: "是否公开问题？",
                    content: "公开问题帮助更多人",
                    success: function(t) {
                        console.log(t), t.confirm && a.util.request({
                            url: "enter/wxapp/user.openquestion",
                            data: {
                                back_orser: n,
                                key_words: s,
                                id: o
                            },
                            success: function(t) {
                                console.log(t), a.util.request({
                                    url: "entry/wxapp/user.answeropen",
                                    data: {
                                        orders: n
                                    },
                                    success: function(a) {
                                        console.log(a), 1 == a.data.status ? e.setData({
                                            open: 1,
                                            id: a.data.id,
                                            status: a.data.status
                                        }) : e.setData({
                                            open: 0
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            },
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    getchufang: function() {
        var t = this, e = (t.data.zid, t.data.back_orser);
        t.data.c_id;
        a.util.request({
            url: "entry/wxapp/zhuanjia.chufangcont",
            data: {
                back_orser: e,
                c_id: t.data.c_id
            },
            success: function(a) {
                t.setData({
                    cfdata: a.data
                });
            }
        });
    },
    lookdetail: function(a) {
        var t = a.currentTarget.dataset.id, e = a.currentTarget.dataset.orderstatus;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/chufangjianyi/chufangjianyi?id=" + t + "&orderStatus=" + e + "&xufang=1"
        });
    },
    atbuy: function(a) {
        a.currentTarget.dataset.c_id;
        var t = JSON.stringify(a.currentTarget.dataset.cartlist), e = a.currentTarget.dataset.orders, n = a.currentTarget.dataset.j_id, s = a.currentTarget.dataset.text, i = a.currentTarget.dataset.zhenduan, o = a.currentTarget.dataset.yongyao, u = a.currentTarget.dataset.totals, r = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yizhu/yizhu?role=0&cartlist=" + t + "&j_id=" + n + "&text=" + s + "&zhenduan=" + i + "&yongyao=" + o + "&orders=" + e + "&money=" + u + "&ifzj=0&goodsid=" + r
        });
    },
    sqchufang: function(a) {
        var t = this.data.j_id, e = this.data.back_orser, n = (this.data.key_words, this.data.zid);
        wx.reLaunch({
            url: "/hyb_yl/czhuanjiasubpages/pages/chufangmes/chufangmes?tit=远程开方&key_words=yuanchengkaifang&back_orser=" + e + "&zid=" + n + "&j_id=" + t
        });
    },
    tabinputpay: function(e) {
        console.log(e);
        var n = this, s = n.data.back_orser, i = n.data.money, o = n.data.key_words, u = n.data.zid;
        console.log(s, i, o, u), a.util.request({
            url: "entry/wxapp/yuyue.paywenzhen",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: i,
                orders: s,
                key_words: o
            },
            success: function(e) {
                console.log(e), wx.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(t) {
                        console.log(t), "yuanchengkaifang" == o && a.util.request({
                            url: "entry/wxapp/zhuanjia.getdocmbtxing",
                            data: {
                                val: "处方订单提醒",
                                near: "开处方",
                                zid: u
                            },
                            success: function(a) {
                                console.log(a);
                            }
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    },
                    complete: function(a) {
                        clearInterval(t), "requestPayment:ok" == a.errMsg && (wx.showModal({
                            title: "提示",
                            content: "支付成功"
                        }), n.getOrderdetail());
                    }
                });
            }
        });
    },
    tuikuan: function(t) {
        console.log(t);
        var e = this.data.back_orser, n = this.data.key_words, s = this.data.money;
        if ("0.00" == s) var i = "是否取消问诊"; else i = "是否申请退款";
        wx.showModal({
            title: i,
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/user.tuikuan",
                    data: {
                        back_orser: e,
                        money: s,
                        key_words: n
                    },
                    success: function(a) {
                        if ("0.00" == s) var t = "取消成功"; else t = "申请成功，请耐心等待退款";
                        wx.showToast({
                            title: t,
                            icon: "none",
                            success: function(a) {
                                console.log(a), setTimeout(function() {
                                    wx.navigateBack({
                                        detail: 1
                                    });
                                }, 1500);
                            }
                        });
                    }
                });
            }
        });
    },
    tabtwoinput: function() {
        wx.reLaunch({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + this.data.zid
        });
    },
    getOrderdetail: function() {
        var t = this, e = t.data.orders, n = t.data.key_words;
        "tuwenwenzhen" == n && a.util.request({
            url: "entry/wxapp/yuyue.detail",
            data: {
                orders: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), wx.showNavigationBarLoading(), t.setData({
                    detail: a.data,
                    addnum: parseInt(a.data.addnum),
                    money: a.data.money,
                    ifgb: a.data.ifgb
                });
            }
        }), "dianhuajizhen" != n && "shipinwenzhen" != n && "tijianjiedu" != n && "shoushukuaiyue" != n || a.util.request({
            url: "entry/wxapp/yuyue.getwenzhendetail",
            data: {
                orders: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                t.getSetotime(a.data.overtime), wx.showNavigationBarLoading(), t.setData({
                    detail: a.data,
                    addnum: parseInt(a.data.addnum),
                    money: a.data.money,
                    ifpay: a.data.ifpay
                }), wx.showNavigationBarLoading();
            }
        }), "yuanchengkaifang" == n && a.util.request({
            url: "entry/wxapp/yuyue.getordercfdetail",
            data: {
                orders: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                t.getSetotime(a.data.overtime), wx.showNavigationBarLoading(), t.setData({
                    cfdetail: a.data,
                    addnum: parseInt(a.data.addnum),
                    money: a.data.money,
                    ifgb: a.data.ifgb,
                    ifpay: a.data.ispay
                }), wx.showNavigationBarLoading();
            }
        }), "yuanchengguahao" == n && a.util.request({
            url: "entry/wxapp/yuyue.getguahaohendetail",
            data: {
                orders: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                t.getSetotime(a.data.overtime), wx.showNavigationBarLoading(), t.setData({
                    detail: a.data,
                    addnum: parseInt(a.data.addnum),
                    money: a.data.money,
                    ifpay: a.data.ifpay
                }), wx.showNavigationBarLoading();
            }
        });
    },
    getSetotime: function(e) {
        wx.showNavigationBarLoading();
        var n = (e = e).split("-").join("/"), s = new Date(n), i = this.data.ifpay, o = new Date(), u = this.setData.key_words, r = Date.parse(s) - Date.parse(o), d = parseInt(r % 864e5 / 36e5), c = parseInt(r % 36e5 / 6e4), l = r % 6e4 / 1e3;
        if ("0" != i && "1" != i && "2" != i || this.setData({
            dumiao: d + ":" + c + ":" + l
        }), wx.showNavigationBarLoading(), 0 == r) return clearInterval(t), a.util.request({
            url: "entry/wxapp/zhuanjia.dopagetime",
            data: {
                orders: this.data.orders,
                ifpay: this.data.ifpay,
                key_words: this.data.key_words
            },
            success: function(a) {
                console.log(a), wx.showToast({
                    title: "订单已结束",
                    icon: "none",
                    success: function() {
                        setTimeout(function() {
                            "dianhuajizhen" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "shipinwenzhen" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "tijianjiedu" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/unscramble/unscramble?key_words=" + u
                            }), "shoushukuaiyue" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "yuanchengguahao" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/my_dingdan1/my_dingdan1?key_words=" + u
                            }), "tuwenwenzhen" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "yuanchengkaifang" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            });
                        }, 1500);
                    }
                });
            }
        }), !1;
        r <= 0 && (clearInterval(t), this.setData({
            dumiao: "00:00:00"
        }), a.util.request({
            url: "entry/wxapp/zhuanjia.dopagetime",
            data: {
                orders: this.data.orders,
                ifpay: this.data.ifpay,
                key_words: this.data.key_words
            },
            success: function(a) {
                wx.showToast({
                    title: "订单已结束",
                    icon: "none",
                    success: function() {
                        setTimeout(function() {
                            "dianhuajizhen" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "shipinwenzhen" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "tijianjiedu" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/unscramble/unscramble?key_words=" + u
                            }), "shoushukuaiyue" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "yuanchengguahao" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/my_dingdan1/my_dingdan1?key_words=" + u
                            }), "tuwenwenzhen" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            }), "yuanchengkaifang" == u && wx.reLaunch({
                                url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?key_words=" + u
                            });
                        }, 1500);
                    }
                });
            }
        }), wx.showNavigationBarLoading());
    },
    getUptotime: function() {
        var a = this;
        wx.showNavigationBarLoading();
        var e = a.data.ifpay;
        0 != e && 1 != e && 2 != e || (t = setInterval(function() {
            a.getUserchar(), a.getOrderdetail(), a.getchufang();
        }, 1e3)), wx.showNavigationBarLoading();
    }
});