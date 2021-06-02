var t, e, a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), o = getApp();

Page((e = {
    data: (t = {
        checked: !1,
        items: [ {
            name: "退货无忧￥0.40 可享一次免费上门取件",
            checked: !1,
            value: "退货无忧￥0.40 可享一次免费上门取件"
        } ],
        addrkey: !0,
        price: "",
        addresslist: [],
        repicelist: [],
        addbox: !0,
        medicbox: !0,
        parway: [ "货到付款", "在线预付" ],
        payindex: 1,
        maskbox: !0,
        delivery: [ "药房配送", "京东物流" ],
        deliveryIndex: 0,
        num: 1
    }, (0, a.default)(t, "price", ""), (0, a.default)(t, "sum", ""), (0, a.default)(t, "frieght", 6), 
    (0, a.default)(t, "sales", .4), (0, a.default)(t, "invoice", !0), (0, a.default)(t, "electron", [ "电子发票" ]), 
    (0, a.default)(t, "invoiceTitle", [ "个人", "单位" ]), (0, a.default)(t, "unitName", ""), 
    (0, a.default)(t, "ratepayer", ""), (0, a.default)(t, "invoiceIndex", 0), (0, a.default)(t, "invoiceCont", [ "明细", "不开发票" ]), 
    (0, a.default)(t, "partIndex", 1), (0, a.default)(t, "coupon", !0), (0, a.default)(t, "couponTitle", [ {
        usable: 0,
        title: "可用优惠券"
    }, {
        usable: 1,
        title: "不可用优惠券"
    } ]), (0, a.default)(t, "couponIndex", 0), (0, a.default)(t, "instru", !0), (0, 
    a.default)(t, "already", []), (0, a.default)(t, "arr", []), (0, a.default)(t, "favorable", ""), 
    (0, a.default)(t, "commodity", []), (0, a.default)(t, "druglist", !0), (0, a.default)(t, "countmoney", 0), 
    (0, a.default)(t, "summoney", 0), (0, a.default)(t, "feight", 0), (0, a.default)(t, "statu", 1), 
    t),
    touchmove: function() {},
    chooseradio: function() {
        this.setData({
            checked: !this.data.checked
        }), this.getsum();
    },
    num: function(t) {
        console.log(t);
        var e = this.data.commodity;
        e[t.target.dataset.index].num = t.detail.value;
        this.data.num;
        this.setData({
            commodity: e
        });
    },
    getnum: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = this.data.commodity;
        console.log(a);
        var o = parseInt(this.data.mostgt);
        console.log(o), a[e].num < 1 ? (wx.showToast({
            title: "至少输入一个商品",
            icon: "none"
        }), a[e].num = 1, this.setData({
            commodity: a
        }), this.getsum()) : this.getsum(), 0 == a[e].mostgt ? a[e].num > parseInt(a[e].snum) && (wx.showToast({
            title: "最多不超过" + a[e].snum + "件",
            icon: "none"
        }), a[e].num = a[e].snum, this.setData({
            commodity: a
        }), this.getsum()) : a[e].num > parseInt(a[e].mostgt) && (wx.showToast({
            title: "最多不超过" + a[e].mostgt + "件",
            icon: "none"
        }), a[e].num = a[e].mostgt, this.setData({
            commodity: a
        }), this.getsum());
    },
    add: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = this.data.commodity;
        a[e].num++, 0 == a[e].mostgt ? a[e].num > parseInt(a[e].snum) && (wx.showToast({
            title: "最多不超过" + a[e].snum + "件",
            icon: "none"
        }), a[e].num = a[e].snum, this.setData({
            commodity: a
        }), this.getsum()) : a[e].num > parseInt(a[e].mostgt) && (wx.showToast({
            title: "最多不超过" + a[e].mostgt + "件",
            icon: "none"
        }), a[e].num = a[e].mostgt, this.setData({
            commodity: a
        }), this.getsum()), this.setData({
            commodity: a
        }), this.getsum();
    },
    suv: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = this.data.commodity;
        a[e].num <= 1 ? (wx.showToast({
            title: "至少1件",
            icon: "none"
        }), a[e].num = 1, this.setData({
            commodity: a
        })) : (a[e].num--, this.setData({
            commodity: a
        })), this.getsum();
    },
    getsum: function() {
        var t = this.data.commodity;
        console.log(t);
        var e = 0;
        console.log(e);
        for (var a = 0, o = 0, s = this.data.summoney, n = 0; n < t.length; n++) a += parseFloat((t[n].num * t[n].gg_ke).toFixed(3)), 
        e += parseFloat((t[n].num * t[n].smoney).toFixed(2)), o = t[n].g_kuaidi;
        a = parseFloat(a).toFixed(3), e = parseFloat(e).toFixed(2), s = (parseFloat(e) + parseFloat(o)).toFixed(2), 
        console.log(a), console.log(e), console.log(s), this.setData({
            feight: a,
            countmoney: e,
            g_kuaidi: o,
            summoney: s
        });
    },
    onPageScroll: function(t) {
        t.scrollTop > 150 ? this.setData({
            addrkey: !1
        }) : this.setData({
            addrkey: !0
        });
    },
    address: function() {
        wx.navigateTo({
            url: "/hyb_yl/onesubpages/pages/shipping/shipping"
        });
    },
    tian: function() {
        var t = this;
        wx.chooseAddress({
            success: function(e) {
                console.log(JSON.stringify(e));
                var a = e.provinceName + e.cityName + e.countyName + e.detailInfo;
                console.log(a);
                var o = {
                    userAddress: a,
                    userName: e.userName,
                    userPhone: e.telNumber
                };
                console.log(o), t.setData({
                    addresslist: o
                }), wx.setStorageSync("Address", o);
            },
            fail: function(t) {
                console.log(JSON.stringify(t)), console.info("收货地址授权失败"), wx.showToast({
                    title: "授权失败，您将无法进行下单支付;重新授权请删除小程序后再次进入",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    pattern: function() {
        this.setData({
            maskbox: !this.data.maskbox
        });
    },
    close: function() {
        this.setData({
            maskbox: !this.data.maskbox,
            payindex: 1,
            deliveryIndex: 0
        });
    },
    choosepay: function(t) {
        this.setData({
            payindex: t.currentTarget.dataset.index
        });
    },
    choosedelivery: function(t) {
        this.setData({
            deliveryIndex: t.currentTarget.dataset.index
        });
    },
    question: function() {
        this.setData({
            maskbox: !this.data.maskbox
        });
    },
    bill: function() {
        this.setData({
            invoice: !this.data.invoice
        });
    },
    closeInvoice: function() {
        this.setData({
            invoice: !this.data.invoice,
            invoiceIndex: 0,
            parway: 0
        });
    },
    chooseInvoice: function(t) {
        this.setData({
            invoiceIndex: t.currentTarget.dataset.index
        });
    },
    selectCont: function(t) {
        this.setData({
            partIndex: t.currentTarget.dataset.index
        });
    },
    unitName: function(t) {
        this.setData({
            unitName: t.detail.value
        });
    },
    ratepayer: function(t) {
        this.setData({
            ratepayer: t.detail.value
        });
    },
    questionBill: function() {
        if (1 == this.data.invoiceIndex) {
            var t = this.data.unitName, e = this.data.ratepayer;
            "" == t ? wx.showToast({
                title: "请填写单位名称",
                icon: "none"
            }) : "" == e ? wx.showToast({
                title: "请填写购买方纳税号",
                icon: "none"
            }) : this.setData({
                invoice: !this.data.invoice
            });
        } else 0 == this.data.invoiceIndex && this.setData({
            invoice: !this.data.invoice
        });
    },
    discounts: function() {
        this.setData({
            coupon: !this.data.coupon
        });
    },
    closecou: function() {
        this.setData({
            coupon: !this.data.coupon
        });
    },
    selectCoupon: function(t) {
        this.setData({
            couponIndex: t.currentTarget.dataset.index
        });
    },
    questionCoupon: function() {
        this.setData({
            coupon: !this.data.coupon
        });
    },
    instructions: function() {
        this.setData({
            instru: !this.data.instru
        });
    },
    know: function() {
        this.setData({
            instru: !this.data.instru
        });
    },
    druglist: function() {
        this.setData({
            druglist: !this.data.druglist
        });
    },
    closedrug: function() {
        this.setData({
            druglist: !this.data.druglist
        });
    },
    onLoad: function(t) {
        console.log(t), console.log(JSON.parse(t.arr));
        var e = JSON.parse(t.arr);
        console.log(e);
        var a = e.g_kuaidi, o = t.ifcfy;
        console.log(o);
        var s = e[0].mostgt, n = e.gg_id;
        this.setData({
            commodity: e,
            price: e.price,
            num: e.num,
            g_kuaidi: a,
            mostgt: s,
            ifcfy: o,
            gg_id: n
        }), this.getsum();
        var i = wx.getStorageSync("coupon"), d = wx.getStorageSync("Address");
        this.setData({
            addresslist: d,
            already: i,
            addressid: d.addressId
        }), "" == this.data.addresslist ? this.setData({
            addbox: !0
        }) : this.setData({
            addbox: !1
        });
        var c = wx.getStorageSync("medicemess").slice(0, 1);
        this.setData({
            repicelist: c
        }), "" == c ? this.setData({
            medicbox: !0
        }) : this.setData({
            medicbox: !1
        });
        var r = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), this.setData({
            bgc: r
        });
    },
    onReady: function() {},
    onShow: function() {
        console.log("222");
        var t = wx.getStorageSync("coupon"), e = wx.getStorageSync("Address");
        this.setData({
            already: t,
            addressid: e.addressId
        });
        var a = wx.getStorageSync("medicemess").slice(0, 1);
        this.setData({
            repicelist: a
        }), "" == a ? this.setData({
            medicbox: !0
        }) : this.setData({
            medicbox: !1
        });
        var s = getCurrentPages(), n = s[s.length - 1], i = this;
        if (console.log(n.data.conets), n.data.conets) {
            var d = n.data.typedate, c = n.data.conets;
            "1" == d ? i.setData({
                medicbox: !1
            }) : i.setData({
                medicbox: !0
            }), i.setData({
                typedate: d,
                conets: c
            });
        }
        if (n.data.j_id) {
            i = this;
            var r = n.data.j_id;
            o.util.request({
                url: "entry/wxapp/user.detailmyjd",
                data: {
                    j_id: r
                },
                success: function(t) {
                    console.log(t), i.setData({
                        age: t.data.age,
                        sex: t.data.sex,
                        phone: t.data.tel,
                        username: t.data.names,
                        medicbox: !1,
                        cf_id: n.data.cf_id
                    });
                }
            });
        }
    },
    onHide: function() {
        var t = wx.getStorageSync("medicemess").slice(0, 1);
        this.setData({
            repicelist: t
        }), "" == t || this.setData({
            medicbox: !1
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    submit: function(t) {
        console.log(t);
        var e = this.data.conets;
        if ("" == this.data.addresslist) wx.showToast({
            title: "请先填写收货地址",
            icon: "none"
        }); else if (this.data.medicbox && 0 == this.data.ifcfy) wx.showToast({
            title: "请先填写处方信息",
            icon: "none"
        }); else {
            var a = this.data.commodity;
            console.log(a);
            var s = t.currentTarget.dataset.countmoney, n = t.currentTarget.dataset.feight, i = t.currentTarget.dataset.num, d = t.currentTarget.dataset.summoney, c = t.currentTarget.dataset.u_id, r = (this.data.totalMoney, 
            this.data.deliverMoney), u = this.data.addressid;
            console.log(u), o.util.request({
                url: "entry/wxapp/goods.creatorder",
                data: {
                    ifcf: this.data.ifcfy,
                    ifshop: 0,
                    conets: e,
                    goodarr: a,
                    countmoney: s,
                    feight: n,
                    num: i,
                    realTotalMoney: d,
                    totalMoney: s,
                    deliverMoney: r,
                    u_id: c,
                    addressid: u,
                    openid: wx.getStorageSync("openid")
                },
                success: function(t) {
                    console.log(t);
                    var e = t.data;
                    o.util.request({
                        url: "entry/wxapp/yuyue.paycforder",
                        header: {
                            "Content-Type": "application/xml"
                        },
                        method: "GET",
                        data: {
                            openid: wx.getStorageSync("openid"),
                            z_tw_money: s,
                            orders: e
                        },
                        success: function(t) {
                            console.log(t), wx.requestPayment({
                                timeStamp: t.data.timeStamp,
                                nonceStr: t.data.nonceStr,
                                package: t.data.package,
                                signType: t.data.signType,
                                paySign: t.data.paySign,
                                success: function(t) {
                                    console.log(t), wx.reLaunch({
                                        url: "/hyb_yl/userCommunicate/pages/order/order"
                                    });
                                },
                                fail: function() {
                                    wx.reLaunch({
                                        url: "/hyb_yl/userCommunicate/pages/order/order"
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }
}, (0, a.default)(e, "address", function() {
    console.log(1);
    var t = [], e = [], a = this;
    wx.chooseAddress({
        success: function(s) {
            console.log("res"), console.log(s), console.log(JSON.stringify(s));
            s.userName, s.telNumber;
            t.push(s.provinceName, s.cityName, s.countyName);
            s.detailInfo;
            var n = {
                name: s.userName,
                phone: s.telNumber,
                address: s.detailInfo,
                region: t,
                label: -1,
                addlabel: ""
            };
            console.log(n);
            var i = n.name, d = n.phone, c = n.region[0] + "-" + n.region[1] + "-" + n.region[2] + "-" + n.address;
            o.util.request({
                url: "entry/wxapp/goods.creatuseraddress",
                data: {
                    openid: wx.getStorageSync("openid"),
                    userName: i,
                    userPhone: d,
                    userAddress: c
                },
                success: function(t) {
                    console.log(t);
                    var e = t.data.addressId;
                    wx.setStorageSync("Address", t.data), a.setData({
                        addressid: e,
                        addresslist: t.data
                    }), "" == t.data ? a.setData({
                        addbox: !0
                    }) : a.setData({
                        addbox: !1
                    });
                }
            }), e = wx.getStorageSync("Address") || [], a.setData({
                addresslist: e
            });
        },
        fail: function(t) {
            a.openConfirm();
        }
    });
}), (0, a.default)(e, "openConfirm", function() {
    wx.showModal({
        content: "检测到您没打开地址权限，是否去设置打开？",
        confirmText: "确认",
        cancelText: "取消",
        success: function(t) {
            t.confirm ? wx.openSetting({
                success: function(t) {
                    console.log(t);
                }
            }) : console.log("用户点击取消");
        }
    });
}), e));