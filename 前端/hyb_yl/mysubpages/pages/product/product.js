var t, a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), s = require("../../../../utils/wxParse.js"), e = require("../../../../utils/throttle.js"), o = getApp();

Page((t = {
    data: {
        buttonClicked: !1,
        bigmoney: "",
        smallmoney: "",
        lunbo: [ "/assets/images/medimg.jpg" ],
        collect: !1,
        instructions: [ {
            title: "药品类型",
            name: "中成药",
            img: "/assets/images/yao.png"
        }, {
            title: "批准文号",
            name: "国药准字z37021368",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "东阿阿胶股份有限公司",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "阿胶",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "一日一次",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "血虚，眩晕心悸，心烦不眠，肥皂可造",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "本品为补血滋阴制剂，性质粘腻，饭脾胃虚弱者，食入难消",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "本品为补血滋阴制剂，性质粘腻，饭脾胃虚弱者，食入难消",
            img: "/assets/images/yao.png"
        }, {
            title: "药品类型",
            name: "本品为补血滋阴制剂，性质粘腻，饭脾胃虚弱者，食入难消",
            img: "/assets/images/yao.png"
        } ],
        parameter: !0,
        sale: !0,
        cash: [ {
            id: 0,
            intro: "仅可购买京东健康自营药房慢病用药部分商品",
            startTime: "2019-11-2",
            over: "2019-11-7",
            full: 159,
            subtract: 10,
            statu: 0,
            usable: 0
        }, {
            id: 1,
            intro: "仅可购买京东健康自营药房慢病用药部分商品",
            startTime: "2019-11-2",
            over: "2019-11-11",
            full: 264,
            subtract: 50,
            statu: 0,
            usable: 0
        } ],
        choseprod: !0,
        chosekey: 0,
        num: 1,
        price: "",
        img: "",
        gg_ke: "",
        gg_bh: "",
        drugName: "",
        arr: [],
        appraise: [ {
            headimg: "/assets/images/head.png",
            name: "MckennaGrace",
            starNum: 5,
            time: "2019 - 06 - 26",
            sign_text: "非常棒，每次都在京东购买这些必需品，真的太好了都不晓得说什么了，总之就是好",
            medio_img: "/assets/images/medimg.jpg"
        }, {
            headimg: "/assets/images/head.png",
            name: "MckennaGrace",
            starNum: 5,
            time: "2019 - 06 - 26",
            sign_text: "非常棒，每次都在京东购买这些必需品，真的太好了都不晓得说什么了，总之就是好",
            medio_img: ""
        } ],
        tabkey: 0,
        amount: 0,
        amountShop: 0
    },
    askdoctor: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/faxian/faxian"
        });
    },
    shopcar: function() {
        var t = this.data.ifcfy;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/shopList/shopList?ifcfy=" + t
        });
    },
    drugbtn: function() {
        var t = this.data.ifcfy;
        console.log(t), wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/druglist/druglist?ifcfy=" + t
        });
    },
    collectbtn: function() {
        this.setData({
            collect: !this.data.collect
        }), 1 == this.data.collect ? wx.showToast({
            title: "收藏成功",
            icon: "none"
        }) : wx.showToast({
            title: "取消成功",
            icon: "none"
        });
    },
    commodity: function() {
        this.setData({
            parameter: !1
        });
    },
    closepara: function() {
        this.setData({
            parameter: !0
        });
    },
    move: function() {},
    discounts: function() {
        this.setData({
            sale: !1
        });
    },
    closedisc: function() {
        this.setData({
            sale: !0
        });
    },
    btnget: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index;
        (o = this.data.cash)[a].statu = 1;
        var s = [];
        this.setData({
            cash: o
        }), console.log(this.data.cash);
        for (var e = 0; e < o.length; e++) 1 == o[e].statu && s.push(o[e]);
        this.setData({
            already: s
        });
        var o = wx.getStorageSync("cash") || [];
        s = wx.getStorageSync("coupon") || [];
        s = this.data.already, wx.setStorageSync("coupon", this.data.already), o = this.data.cash, 
        console.log(o), wx.setStorageSync("cash", o);
    },
    chose_clo: function() {
        this.setData({
            choseprod: !0
        });
    },
    popchoose: function() {
        var t, a = this.data.chosekey, s = this.data.proList;
        console.log(s.item.guige), t = s.item.guige, console.log(t), console.log(t[a].gg_id), 
        this.setData({
            choseprod: !1,
            img: t[a].gg_thumb,
            price: t[a].gg_money,
            drugName: t[a].gg_name,
            gg_ke: t[a].gg_ke,
            gg_bh: t[a].gg_bh,
            gg_id: t[a].gg_id
        });
    },
    closeprod: function() {
        this.setData({
            choseprod: !0
        });
    },
    num: function(t) {
        console.log(t), this.setData({
            num: t.detail.value
        }), console.log(this.data.num);
    },
    getnum: function(t) {
        this.data.num < 1 && (wx.showToast({
            title: "至少输入一个商品",
            icon: "none"
        }), this.setData({
            num: 1
        }));
        var a = this.data.proList.item;
        this.data.num == this.data.mostgt ? this.data.num > a.snum && (wx.showToast({
            title: "商品不能超过" + a.snum + "个",
            icon: "none"
        }), this.setData({
            num: a.snum
        })) : this.data.num > this.data.mostgt && (wx.showToast({
            title: "商品不能超过" + this.data.mostgt + "个",
            icon: "none"
        }), this.setData({
            num: this.data.mostgt
        }));
    },
    choserul: function(t) {
        console.log(t);
        var a = this.data.proList, s = t.currentTarget.dataset.gg_name, e = t.currentTarget.dataset.item, o = this.data.price, i = e.gg_id;
        a.item.smoney = e.gg_money, o = e.gg_money;
        var n = e.gg_name;
        this.setData({
            chosekey: t.currentTarget.dataset.index,
            price: o,
            drugName: n,
            img: e.gg_thumb,
            gg_ke: e.gg_ke,
            gg_bh: e.gg_bh,
            proList: a,
            gg_name: s,
            gg_id: i
        }), console.log(a);
    },
    preview: function(t) {
        console.log(t);
        var a = [];
        a[0] = t.currentTarget.dataset.img;
        var s = t.currentTarget.dataset.img;
        wx.previewImage({
            current: s,
            urls: a
        });
    },
    imgbtn: function(t) {
        console.log(t);
        var a = this.data.appraise, s = t.currentTarget.dataset.index;
        console.log(a);
        var e = t.currentTarget.dataset.item;
        wx.previewImage({
            current: e,
            urls: a[s].pl_text.pic
        });
    },
    addlist: function() {
        var t = this.data.list_num;
        t++, this.setData({
            list_num: t
        });
    },
    goTop: function(t) {
        wx.pageScrollTo ? wx.pageScrollTo({
            scrollTop: 0
        }) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    bindMinus: function() {
        var t = this.data.num;
        --t < 1 ? wx.showToast({
            title: "至少一件商品",
            icon: "none"
        }) : this.setData({
            num: t
        });
    },
    bindPlus: function() {
        var t = this.data.num;
        t++, this.setData({
            num: t
        }), this.data.num > this.data.mostgt && (wx.showToast({
            title: "商品不能超过200个",
            icon: "none"
        }), this.setData({
            num: this.data.mostgt
        })), console.log(this.data.num);
    }
}, (0, a.default)(t, "addlist", function() {
    var t = this.data.list_num;
    t++, this.setData({
        list_num: t
    });
}), (0, a.default)(t, "addcar", function(t) {
    console.log(t);
    var a = this.data.num;
    console.log(a);
    this.data.chosekey;
    var s = this.data.proList.item, e = this.data.ifcfy, o = this.data.g_kuaidi, i = this.data.drugName, n = (a = this.data.num, 
    this.data.mostgt), g = this.data.gg_ke, r = this.data.gg_id, d = this.data.addressid;
    console.log(s);
    var u = {
        sid: s.sid,
        sname: s.sname,
        sthumb: s.sthumb,
        snum: s.snum,
        num: this.data.num,
        smoney: s.smoney,
        g_kuaidi: o,
        gg_name: i,
        mostgt: n,
        gg_ke: g,
        ifcfy: e,
        gg_id: r,
        addressid: d
    };
    console.log(u);
    var c = wx.getStorageSync("shopcar") || [], l = this.data.amountShop;
    if (c.length > 0) {
        for (var m in c) if (c[m].sid == u.sid && c[m].gg_id == u.gg_id) {
            if (c[m].num = c[m].num + u.num, console.log(c[m].num), 0 == c[m].mostgt) {
                if (c[m].num > c[m].snum) {
                    c[m].num = c[m].snum;
                    try {
                        wx.setStorageSync("shopcar", c), l = l, this.setData({
                            num: 1
                        });
                    } catch (t) {
                        console.log(t);
                    }
                    return void wx.showToast({
                        title: "加入购物车成功！",
                        icon: "success",
                        duration: 2e3
                    });
                }
            } else if (c[m].num > c[m].mostgt) {
                c[m].num = c[m].mostgt;
                try {
                    wx.setStorageSync("shopcar", c), console.log(c), l = l, this.setData({
                        num: 1
                    });
                } catch (t) {
                    console.log(t);
                }
                return void wx.showToast({
                    title: "加入购物车成功！",
                    icon: "success",
                    duration: 2e3
                });
            }
            try {
                wx.setStorageSync("shopcar", c), l += u.num, console.log(l), this.setData({
                    amountShop: l,
                    num: 1
                });
            } catch (t) {
                console.log(t);
            }
            return void wx.showToast({
                title: "加入购物车成功！",
                icon: "success",
                duration: 2e3
            });
        }
        c.push(u), l += u.num, this.setData({
            amountShop: l,
            num: 1
        });
    } else c.push(u), l += u.num, this.setData({
        amountShop: l,
        num: 1
    });
    try {
        return wx.setStorageSync("shopcar", c), wx.showToast({
            title: "加入购物车成功！",
            icon: "success",
            duration: 2e3
        }), void this.setData({
            choseprod: !0
        });
    } catch (t) {
        console.log(t);
    }
}), (0, a.default)(t, "addDruglist", function(t) {
    console.log(t);
    var a = this.data.num;
    console.log(a);
    this.data.chosekey;
    var s = this.data.proList.item, e = this.data.ifcfy, o = this.data.g_kuaidi, i = t.currentTarget.dataset.drugname, n = (a = this.data.num, 
    this.data.mostgt), g = this.data.gg_ke, r = this.data.gg_id, d = this.data.addressid;
    console.log(s);
    var u = {
        sid: s.sid,
        sname: s.sname,
        sthumb: s.sthumb,
        snum: s.snum,
        num: this.data.num,
        smoney: s.smoney,
        g_kuaidi: o,
        gg_name: i,
        mostgt: n,
        gg_ke: g,
        ifcfy: e,
        gg_id: r,
        addressid: d,
        first: this.data.first,
        first_price: this.data.first_price,
        continue: this.data.continue,
        continue_price: this.data.continue_price
    };
    console.log(u);
    var c = wx.getStorageSync("druglist") || [], l = this.data.amount;
    if (c.length > 0) {
        for (var m in c) if (c[m].sid == u.sid && c[m].gg_id == u.gg_id) {
            if (c[m].num = parseFloat(c[m].num) + parseFloat(u.num), 0 == c[m].mostgt) {
                if (c[m].num > c[m].snum) {
                    c[m].num = c[m].snum;
                    try {
                        wx.setStorageSync("druglist", c), l = l, this.setData({
                            amount: l,
                            num: 1
                        });
                    } catch (t) {
                        console.log(t);
                    }
                    return wx.showToast({
                        title: "加入药品清单成功",
                        icon: "success",
                        duration: 2e3
                    }), void this.chose_clo();
                }
            } else if (c[m].num > c[m].mostgt) {
                c[m].num = c[m].mostgt;
                try {
                    wx.setStorageSync("druglist", c), console.log(c), l = l, this.setData({
                        amount: l,
                        num: 1
                    });
                } catch (t) {
                    console.log(t);
                }
                return wx.showToast({
                    title: "加入药品清单成功",
                    icon: "success",
                    duration: 2e3
                }), void this.chose_clo();
            }
            try {
                wx.setStorageSync("druglist", c), l += u.num, this.setData({
                    amount: l,
                    num: 1
                });
            } catch (t) {
                console.log(t);
            }
            return wx.showToast({
                title: "加入药品清单成功",
                icon: "success",
                duration: 2e3
            }), void this.chose_clo();
        }
        l += u.num, this.setData({
            amount: l,
            num: 1
        }), console.log(l), c.push(u);
    } else l += u.num, this.setData({
        amount: l,
        num: 1
    }), this.chose_clo(), c.push(u);
    try {
        return console.log("1111111111111"), wx.setStorageSync("druglist", c), wx.showToast({
            title: "加入药品清单成功",
            icon: "success",
            duration: 2e3
        }), void this.setData({
            choseprod: !0
        });
    } catch (t) {
        console.log(t);
    }
}), (0, a.default)(t, "tap", function(t) {
    console.log(this.data.nodes);
    var a = new RegExp('(?<=(src="))[^ "]*?(?=")'), s = this.data.nodes.match(a), e = s[0];
    console.log(e);
    var o = [];
    o[0] = e, console.log(o), console.log(s), wx.previewImage({
        current: e,
        urls: o
    });
}), (0, a.default)(t, "shopNow", function(t) {
    console.log(t);
    t.currentTarget.dataset.smoney;
    var a = this.data.proList.item;
    console.log(this.data.ifcfy);
    var s = this.data.ifcfy, e = this.data.g_kuaidi, o = this.data.drugName, i = (this.data.num, 
    this.data.mostgt), n = this.data.gg_ke, g = this.data.gg_id, r = this.data.addressid;
    this.setData({
        choseprod: !0
    });
    var d = [];
    a = {
        sid: a.sid,
        sname: a.sname,
        sthumb: a.sthumb,
        snum: a.snum,
        num: this.data.num,
        smoney: a.smoney,
        g_kuaidi: e,
        gg_name: o,
        mostgt: i,
        gg_ke: n,
        ifcfy: s,
        gg_id: g,
        addressid: r,
        first: this.data.first,
        first_price: this.data.first_price,
        continue: this.data.continue,
        continue_price: this.data.continue_price
    };
    d.push(a), this.setData({
        num: 1
    }), console.log(d), wx.navigateTo({
        url: "/hyb_yl/mysubpages/pages/shopdetail/shopdetail?arr=" + JSON.stringify(d) + "&ifcfy=" + s
    });
}), (0, a.default)(t, "tabdian", function(t) {
    console.log(t.currentTarget.dataset.index), this.setData({
        tabkey: t.currentTarget.dataset.index
    });
}), (0, a.default)(t, "wxaddress", function(t) {
    e.buttonClicked(this);
    var a = [], s = [], i = this, n = t.currentTarget.dataset.yf_id, g = t.currentTarget.dataset.g_baoyou;
    wx.chooseAddress({
        success: function(t) {
            console.log(JSON.stringify(t));
            t.userName, t.telNumber;
            a.push(t.provinceName, t.cityName, t.countyName);
            t.detailInfo;
            var e = {
                name: t.userName,
                phone: t.telNumber,
                address: t.detailInfo,
                region: a,
                label: -1,
                addlabel: ""
            };
            console.log(e);
            var r = e.name, d = e.phone, u = e.region[0] + "-" + e.region[1] + "-" + e.region[2] + "-" + e.address;
            o.util.request({
                url: "entry/wxapp/goods.creatuseraddress",
                data: {
                    openid: wx.getStorageSync("openid"),
                    userName: r,
                    userPhone: d,
                    userAddress: u,
                    yf_id: n,
                    g_baoyou: g
                },
                success: function(t) {
                    console.log(t), wx.setStorageSync("Address", t.data), i.setData({
                        addressid: t.data.addressId,
                        addresslist: t.data,
                        first: t.data.first,
                        first_price: t.data.first_price,
                        continue: t.data.continue,
                        continue_price: t.data.continue_price
                    });
                }
            }), s = wx.getStorageSync("Address") || [], i.setData({
                addresslist: s
            });
        }
    });
}), (0, a.default)(t, "getAllpinglun", function() {
    var t = this, a = t.data.sid;
    o.util.request({
        url: "entry/wxapp/goods.pinglun",
        data: {
            sid: a
        },
        success: function(a) {
            console.log(a), t.setData({
                appraise: a.data
            });
        }
    });
}), (0, a.default)(t, "getamount", function() {
    for (var t = 0, a = wx.getStorageSync("druglist"), s = 0; s < a.length; s++) t = parseFloat(t) + parseFloat(a[s].num);
    console.log(t), this.setData({
        amount: t
    });
}), (0, a.default)(t, "amountShop", function() {
    for (var t = 0, a = wx.getStorageSync("shopcar"), s = 0; s < a.length; s++) t = parseFloat(t) + parseFloat(a[s].num);
    this.setData({
        amountShop: t
    });
}), (0, a.default)(t, "onLoad", function(t) {
    var a = wx.getStorageSync("color");
    this.setData({
        bg_color: a
    }), wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: a
    }), wx.getStorageSync("openid") ? this.setData({
        isAuthor: !0
    }) : this.setData({
        isAuthor: !1
    });
    var s = wx.getStorageSync("Address");
    console.log(s.addressId), this.setData({
        addresslist: s,
        addressid: s.addressId
    });
    var e = t.sid;
    this.setData({
        sid: e
    });
    var o = wx.getStorageSync("cash") || [];
    wx.setStorageSync("cash", this.data.cash), this.setData({
        cash: o
    }), this.getgoodshoping(e);
}), (0, a.default)(t, "onReady", function() {
    this.getAllpinglun(), this.getAllyjq();
}), (0, a.default)(t, "onShow", function() {
    var t = wx.getStorageSync("cash") || [];
    wx.setStorageSync("cash", this.data.cash), this.setData({
        cash: t
    }), this.getamount(), this.amountShop();
}), (0, a.default)(t, "onHide", function() {}), (0, a.default)(t, "onUnload", function() {}), 
(0, a.default)(t, "onReachBottom", function() {}), (0, a.default)(t, "getgoodshoping", function(t) {
    var a = this, e = a.data.chosekey;
    o.util.request({
        url: "entry/wxapp/goods.detail",
        data: {
            sid: t
        },
        success: function(t) {
            console.log(t);
            var o = t.data.item.guige, i = t.data.contents, n = t.data.item.g_kuaidi, g = t.data.item.mostgt;
            if (s.wxParse("scontent", "html", t.data.contents, a, 5), 0 != o.length) {
                a.setData({
                    gg_ke: o[e].gg_ke,
                    smallmoney: o[e].gg_money,
                    gg_id: o[e].gg_id
                });
                for (var r = 0; r < o.length; r++) for (var d = 0; d < o.length - r; d++) o[r].gg_money > o[d].gg_money && a.setData({
                    bigmoney: o[r].gg_money,
                    drugName: o[d].gg_name
                });
            } else a.setData({
                drugName: t.data.item.sname
            });
            a.setData({
                proList: t.data,
                nodes: i,
                yf_id: t.data.item.yf_id,
                g_baoyou: t.data.item.g_baoyou,
                g_kuaidi: n,
                mostgt: g,
                ifcfy: t.data.item.ifcfy
            });
            a.data.proList;
        }
    });
}), (0, a.default)(t, "getAllyjq", function() {
    var t = this;
    o.util.request({
        url: "entry/wxapp/goods.yhuq",
        success: function(a) {
            console.log(a), t.setData({
                yhq: a.data
            });
        }
    });
}), (0, a.default)(t, "evaldetail", function(t) {
    var a = t.currentTarget.dataset.pl_id;
    wx.navigateTo({
        url: "/hyb_yl/mysubpages/pages/commevaldetail/commevaldetail?pl_id=" + a
    });
}), (0, a.default)(t, "eval", function() {
    var t = this.data.sid;
    wx.navigateTo({
        url: "/hyb_yl/mysubpages/pages/allevalation/allevalation?sid=" + t
    });
}), t));