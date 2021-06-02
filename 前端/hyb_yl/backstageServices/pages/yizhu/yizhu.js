var e = getApp();

Page({
    data: {
        role: 0,
        steps: [ "医生开方", "选择药品", "医生医嘱", "发送处方" ],
        stepnum: 2,
        wenzhenpop: !1,
        argeen: !1,
        pay: "",
        noticedif: !1,
        ifaddress: !1,
        addressmes: {},
        num: 1,
        totals: 0,
        price: 0,
        copyright: [ {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/renzheng.png?sign=99d87d2d65c67c848a10aaf43bafb66e&t=1583825248",
            text: "药监认证"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/people.png?sign=717fc4019448bfc2a03ac538022f7ed8&t=1583825298",
            text: "药师审核"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/yinsi.png?sign=f45888dbb9b06874e8d079f99d6018f5&t=1583825342",
            text: "隐私包装"
        } ],
        druplist: []
    },
    shanchu: function(e) {},
    wenzhenclick: function() {
        this.setData({
            wenzhenpop: !0
        });
    },
    meknow: function() {
        this.setData({
            wenzhenpop: !1
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
        });
    },
    closewenzhenpop: function() {},
    noticedclick: function() {
        this.setData({
            noticedif: !0
        });
    },
    closepop: function() {
        this.setData({
            noticedif: !1
        });
    },
    paybtn: function(a) {
        var t = this.data.j_id, s = this.data.c_id, o = a.currentTarget.dataset.totals, n = this.data.back_orser, r = this.data.useropenid, i = this.data.key_words, d = this.data.zid, c = this.data.cartlist, u = this.data.zhenduan, l = this.data.yongyao, g = this.data.text;
        console.log(s), wx.showModal({
            title: "是否发送",
            success: function(a) {
                var p = {
                    text: g,
                    text1: u,
                    text2: l
                };
                a.confirm && e.util.request({
                    url: "entry/wxapp/goods.creatorder",
                    data: {
                        ifcf: 1,
                        ifshop: 1,
                        totalMoney: o,
                        back_orser: n,
                        openid: r,
                        key_words: i,
                        goodarr: c,
                        j_id: t,
                        cid: s,
                        zid: d,
                        conets: p
                    },
                    success: function(a) {
                        console.log(a), e.util.request({
                            url: "entry/wxapp/zhuanjia.chufangmsgdh",
                            data: {
                                id: s
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), e.util.request({
                            url: "entry/wxapp/zhuanjia.chufangmobel",
                            data: {
                                id: s
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), wx.showToast({
                            title: "发送成功",
                            icon: "none",
                            success: function() {
                                setTimeout(function() {
                                    wx.reLaunch({
                                        url: "/hyb_yl/mysubpages/pages/backstageIndex/backstageIndex"
                                    });
                                }, 2e3);
                            }
                        });
                    }
                });
            }
        });
    },
    aasbtnclick: function(e) {
        var a = e.currentTarget.dataset.types, t = this.data.num, s = (this.data.totals, 
        this.data.price);
        "a" == a ? ++t : t = t > 1 ? --t : 1, this.setData({
            num: t,
            totals: s * t
        });
    },
    onLoad: function(a) {
        var t = this, s = a.ifzj, o = a.role, n = a.inquiry, r = a.key_words, i = [], d = [], c = a.c_id, u = a.orders;
        if (e.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(e) {
                console.log(e), t.setData({
                    url: e.data
                });
            }
        }), a.orders && t.setData({
            orders: u
        }), "1" == a.role) {
            for (var l = wx.getStorageSync("cartlist"), g = 0; g < l.length; g++) d.push(l[g].sid);
            for (g = 0; g < l.length; g++) {
                var p = 1 * l[g].num * (1 * l[g].smoney);
                i.push(p);
            }
            var f = 0;
            for (g = 0; g < i.length; g++) f += 1 * i[g];
            console.log(f), t.setData({
                cartlist: l,
                totals: f.toFixed(2)
            });
        } else {
            var h = a.goodsid;
            t.setData({
                goodsid: h
            }), e.util.request({
                url: "entry/wxapp/zhuanjia.chufanggoods",
                data: {
                    back_orser: u,
                    c_id: c,
                    goodsid: h
                },
                success: function(e) {
                    console.log("药品"), console.log(e.data);
                    var a = e.data.cartlist ? e.data.cartlist : wx.getStorageSync("cartlist");
                    console.log(a);
                    for (var s = 0; s < a.length; s++) d.push(a[s].sid);
                    for (s = 0; s < a.length; s++) {
                        var o = 1 * a[s].num * (1 * a[s].smoney);
                        i.push(o);
                    }
                    var n = 0;
                    for (s = 0; s < i.length; s++) n += 1 * i[s];
                    console.log(n), t.setData({
                        cartlist: a,
                        totals: n.toFixed(2)
                    });
                }
            });
        }
        if ("undefined" !== a.text) var y = a.text; else y = JSON.parse(a.conets).text;
        var m = a.zhenduan, w = a.j_id, x = a.yongyao, _ = wx.getStorageSync("color");
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: _
        }), "yuanchengkaifang" == r && e.util.request({
            url: "entry/wxapp/zhuanjia.getcfdetail",
            data: {
                c_id: c
            },
            success: function(e) {
                console.log(e);
                var a = e.data;
                t.setData({
                    info: a,
                    zid: a.zid,
                    useropenid: a.useropenid,
                    back_orser: a.back_orser,
                    key_words: a.key_words
                });
            }
        }), "tuwenwenzhen" == r && e.util.request({
            url: "entry/wxapp/zhuanjia.gettwdetail",
            data: {
                id: c
            },
            success: function(e) {
                console.log(e);
                var a = e.data;
                t.setData({
                    info: a,
                    zid: a.zid,
                    useropenid: a.openid,
                    back_orser: a.back_orser,
                    key_words: t.data.key_words
                });
            }
        }), "shipinwenzhen" == r && e.util.request({
            url: "entry/wxapp/zhuanjia.gettwzetail",
            data: {
                id: c
            },
            success: function(e) {
                console.log(e);
                var a = e.data;
                t.setData({
                    info: a,
                    zid: a.zid,
                    useropenid: a.openid,
                    back_orser: a.back_orser,
                    key_words: a.key_words
                });
            }
        }), "dianhuajizhen" == r && e.util.request({
            url: "entry/wxapp/zhuanjia.gettwzetail",
            data: {
                id: c
            },
            success: function(e) {
                console.log(e);
                var a = e.data;
                t.setData({
                    info: a,
                    zid: a.zid,
                    useropenid: a.openid,
                    back_orser: a.back_orser,
                    key_words: a.key_words
                });
            }
        }), e.util.request({
            url: "entry/wxapp/user.detail",
            data: {
                j_id: w
            },
            success: function(e) {
                console.log(e), t.setData({
                    userdeta: e.data
                });
            }
        }), a.conets) {
            var v = a.conets;
            t.setData({
                conets: v
            });
        }
        t.setData({
            pay: a.pay,
            c_id: c,
            text: y,
            zhenduan: m,
            j_id: w,
            yongyao: x,
            role: o,
            ifzj: s,
            inquiry: n,
            listgoodArr: d,
            key_words: r
        });
    },
    address: function() {
        for (var a = this, t = (a.data.listgoodArr, a.data.cartlist), s = [], o = [], n = 0; n < t.length; n++) s.push({
            num: t[n].num,
            yf_id: t[n].yf_id
        });
        wx.chooseAddress({
            success: function(t) {
                console.log("res"), console.log(t), console.log(JSON.stringify(t));
                t.userName, t.telNumber;
                o.push(t.provinceName, t.cityName, t.countyName);
                t.detailInfo;
                var n = {
                    name: t.userName,
                    phone: t.telNumber,
                    address: t.detailInfo,
                    region: o,
                    label: -1,
                    addlabel: ""
                };
                console.log(n);
                var r = n.name, i = n.phone, d = n.region[0] + "-" + n.region[1] + "-" + n.region[2] + "-" + n.address;
                e.util.request({
                    url: "entry/wxapp/goods.creatuseraddress",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        userName: r,
                        userPhone: i,
                        userAddress: d
                    },
                    success: function(e) {
                        console.log(e);
                        var t = e.data.addressId;
                        wx.setStorageSync("Address", e.data), a.setData({
                            addressid: t,
                            addresslist: e.data
                        }), "" == e.data ? a.setData({
                            addbox: !0
                        }) : a.setData({
                            addbox: !1
                        });
                    }
                }), s = wx.getStorageSync("Address") || [], a.setData({
                    addresslist: s
                });
                var c = {
                    name: t.userName,
                    tell: t.telNumber,
                    site: t.provinceName + t.cityName + t.countyName + t.detailInfo
                }, u = t.provinceName;
                a.setData({
                    ifaddress: !0,
                    addressmes: c,
                    provinceName: t.provinceName
                }), e.util.request({
                    url: "enter/wxapp/wuliu.peisong",
                    data: {
                        provinceName: u,
                        listgoodArr: s
                    },
                    success: function(e) {
                        e.data;
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    handleNumberClick: function(e) {
        var a = e.currentTarget.dataset.type, t = e.currentTarget.dataset.dex, s = (e.currentTarget.dataset.id, 
        this.data.cartlist);
        if ("add" == a) ++s[t].num; else if ("reduce" == a) {
            if (1 == s[t].num) return;
            --s[t].num;
        }
        0 == s.length && this.setData({
            cartpop: !1
        }), this.setData({
            cartlist: s
        });
        for (var o = [], n = 0; n < s.length; n++) {
            var r = 1 * s[n].num * (1 * s[n].smoney);
            o.push(r);
        }
        for (var i = 0, d = 0; d < o.length; d++) i += 1 * o[d];
        this.setData({
            totals: i.toFixed(2)
        });
    },
    deletedrup: function(e) {
        var a = e.currentTarget.dataset.dex, t = this.data.cartlist;
        e.currentTarget.dataset.id;
        t.splice(a, 1), 0 == t.length && this.setData({
            cartpop: !1
        }), this.setData({
            cartlist: t
        });
    },
    tainjiayaopin: function(e) {
        var a = getCurrentPages(), t = a[a.length - 2];
        console.log(t.data.druplist);
        for (var s = t.data.druplist, o = 0; o < s.length; o++) s[o].num = 0;
        s = s;
        t.setData({
            druplist: s,
            cartlist: [],
            sum: 0
        }), wx.navigateBack({
            delta: 1
        });
    },
    payordercf: function(a) {
        var t = this, s = parseFloat(a.currentTarget.dataset.totals), o = (e.siteInfo.uniacid, 
        t.data.orders), n = t.data.addressmes, r = t.data.cartlist, i = t.data.addressid, d = t.data.role;
        console.log(s);
        for (var c = [], u = 0; u < r.length; u++) c.push({
            sname: r[u].sname,
            smoney: r[u].smoney,
            snum: r[u].snum,
            sthumb: r[u].sthumb,
            num: r[u].num,
            sid: r[u].sid,
            s_id: r[u].s_id,
            yf_id: r[u].yf_id
        });
        var l = t.data.inquiry;
        if (console.log(l), !n.name) return wx.showToast({
            title: "请选择地址",
            icon: "none"
        }), !1;
        if ("4" == l) {
            var g = JSON.parse(t.data.conets);
            e.util.request({
                url: "entry/wxapp/zhuanjia.addchufangxq",
                data: {
                    openid: wx.getStorageSync("openid"),
                    key_words: "yuanchengkaifang",
                    arr: g,
                    cartlist: c,
                    j_id: t.data.j_id,
                    totals: s,
                    cid: 0,
                    addressid: i,
                    role: 1,
                    goodsid: t.data.goodsid
                },
                success: function(a) {
                    console.log(a);
                    var r = a.data.orderNo;
                    e.util.request({
                        url: "entry/wxapp/yuyue.paycforder",
                        header: {
                            "Content-Type": "application/xml"
                        },
                        method: "GET",
                        data: {
                            openid: wx.getStorageSync("openid"),
                            z_tw_money: s,
                            orders: r
                        },
                        success: function(a) {
                            console.log(a), wx.requestPayment({
                                timeStamp: a.data.timeStamp,
                                nonceStr: a.data.nonceStr,
                                package: a.data.package,
                                signType: a.data.signType,
                                paySign: a.data.paySign,
                                success: function(a) {
                                    console.log(a), e.util.request({
                                        url: "entry/wxapp/yuyue.upchufangwentype",
                                        data: {
                                            orders: r
                                        },
                                        success: function(e) {
                                            console.log(e);
                                        }
                                    }), e.util.request({
                                        url: "entry/wxapp/zhuanjia.addchufangxq",
                                        data: {
                                            openid: wx.getStorageSync("openid"),
                                            key_words: "yuanchengkaifang",
                                            arr: g,
                                            cartlist: c,
                                            j_id: t.data.j_id,
                                            totals: s,
                                            cid: 0,
                                            addressid: i,
                                            role: d,
                                            orders: o,
                                            goodsid: t.data.goodsid
                                        },
                                        success: function(e) {
                                            console.log(e);
                                        }
                                    }), e.util.request({
                                        url: "entry/wxapp/yuyue.upcforderadd",
                                        header: {
                                            "Content-Type": "application/xml"
                                        },
                                        method: "GET",
                                        data: {
                                            orders: r,
                                            addressmes: n
                                        },
                                        success: function(e) {
                                            wx.navigateTo({
                                                url: "/hyb_yl/userCommunicate/pages/order/order"
                                            });
                                        }
                                    });
                                },
                                fail: function(e) {
                                    console.log(e), wx.navigateTo({
                                        url: "/hyb_yl/userCommunicate/pages/order/order"
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else console.log("222"), console.log(s), console.log(o), e.util.request({
            url: "entry/wxapp/yuyue.paycforder",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: s,
                orders: o
            },
            success: function(a) {
                console.log(a), wx.requestPayment({
                    timeStamp: a.data.timeStamp,
                    nonceStr: a.data.nonceStr,
                    package: a.data.package,
                    signType: a.data.signType,
                    paySign: a.data.paySign,
                    success: function(a) {
                        console.log(a), e.util.request({
                            url: "entry/wxapp/zhuanjia.addchufangxq",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                key_words: "yuanchengkaifang",
                                arr: g,
                                cartlist: c,
                                j_id: t.data.j_id,
                                totals: s,
                                cid: 0,
                                addressid: i,
                                role: d,
                                orders: o,
                                goodsid: t.data.goodsid
                            }
                        }), e.util.request({
                            url: "entry/wxapp/yuyue.upcforderadd",
                            header: {
                                "Content-Type": "application/xml"
                            },
                            method: "GET",
                            data: {
                                orders: o,
                                addressmes: n
                            },
                            success: function(e) {
                                wx.navigateTo({
                                    url: "/hyb_yl/userCommunicate/pages/order/order"
                                });
                            }
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