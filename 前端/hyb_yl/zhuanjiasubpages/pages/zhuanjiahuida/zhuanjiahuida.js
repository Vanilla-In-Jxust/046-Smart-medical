var a = require("../../../../utils/broadcast"), t = getApp();

Page({
    data: {
        upload_picture_list: [],
        typedate: 0,
        username: {
            your: ""
        },
        shouwtab: !1,
        show: !0,
        hide: !1,
        xing: 0,
        evaluate: !0,
        figure: 0,
        dex: "",
        imgs: [ "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg" ],
        suc: "",
        list: [ {
            role: 0,
            text: "问题描述",
            imglist: [ "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg" ],
            erji: [ {
                advertisement: "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg",
                z_name: "医生",
                ystext: "回答",
                role: 1,
                imglist: [ "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg" ]
            } ]
        } ],
        isaddshow: !0
    },
    lookdetail: function() {
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=yes"
        });
    },
    atbuy: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/chufangjianyi/chufangjianyi"
        });
    },
    lookimg: function(a) {
        a.currentTarget.dataset.img, a.currentTarget.dataset.url, a.currentTarget.dataset.index;
        var t = a.currentTarget.dataset.img;
        wx.previewImage({
            current: t,
            urls: [ t ]
        });
    },
    closezhuiwen: function() {
        this.setData({
            shouwtab: !1
        });
    },
    submitformzw: function(a) {
        var e = this, i = a.detail.value.zhuiwen, n = e.data.upload_picture_list, s = e.data.id, u = e.data.zid, r = e.data.typedate, d = e.data.key_words, o = {
            text: i,
            typedate: r,
            upload_picture_list: n
        };
        if ("tuwenwenzhen" == d && t.util.request({
            url: "entry/wxapp/zhuanjia.addzhuiwen",
            data: {
                arr: o,
                val: i,
                zid: u,
                id: s
            },
            success: function(a) {
                e.getOrderlist(), e.setData({
                    shouwtab: !1
                }), t.util.request({
                    url: "entry/wxapp/zhuanjia.getmbtxing",
                    data: {
                        id: s,
                        val: i,
                        near: "图文"
                    },
                    success: function(a) {
                        console.log(a);
                    }
                });
            }
        }), "dianhuajizhen" != d && "shipinwenzhen" != d && "tijianjiedu" != d && "shoushukuaiyue" != d || t.util.request({
            url: "entry/wxapp/zhuanjia.addtelzhuiwen",
            data: {
                arr: o,
                val: i,
                zid: u,
                id: s,
                key_words: d
            },
            success: function(a) {
                console.log(a), e.getOrderlist(), e.setData({
                    shouwtab: !1
                }), t.util.request({
                    url: "entry/wxapp/zhuanjia.getmbtxing",
                    data: {
                        id: s,
                        val: i,
                        near: "电话"
                    },
                    success: function(a) {}
                });
            }
        }), "yuanchengkaifang" == d) {
            var c = e.data.back_orser;
            o = {
                text: i,
                text2: "",
                timleng: "",
                typedate: r,
                upload_picture_list: n
            };
            t.util.request({
                url: "entry/wxapp/user.addcfzhuiwen",
                data: {
                    arr: o,
                    zid: u,
                    keywords: d,
                    role: 1,
                    orders: c
                },
                success: function(a) {
                    e.getOrderlist(), e.setData({
                        shouwtab: !1
                    }), t.util.request({
                        url: "entry/wxapp/zhuanjia.getdocmbtxing",
                        data: {
                            id: s,
                            val: i,
                            near: "开处方",
                            zid: u
                        },
                        success: function(a) {}
                    });
                }
            });
        }
        if ("yuanchengguahao" == d) {
            c = e.data.back_orser, o = {
                text: i,
                text2: "",
                timleng: "",
                typedate: r,
                upload_picture_list: n
            };
            t.util.request({
                url: "entry/wxapp/zhuanjia.addguahaozhuiwen",
                data: {
                    arr: o,
                    val: i,
                    zid: u,
                    id: s,
                    key_words: d
                },
                success: function(a) {
                    console.log(a), e.getOrderlist(), e.setData({
                        shouwtab: !1
                    }), t.util.request({
                        url: "entry/wxapp/zhuanjia.getmbtxing",
                        data: {
                            id: s,
                            val: i,
                            near: "挂号"
                        },
                        success: function(a) {}
                    });
                }
            });
        }
    },
    uploadimg: function() {
        var a = this, e = t.siteInfo.uniacid, i = a.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var n = t.tempFilePaths, s = 0; s < n.length; s++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[s],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        i.push(t.data), a.setData({
                            upload_picture_list: i,
                            typedate: 1
                        });
                    }
                });
            }
        });
    },
    clearImg: function(a) {
        var t = a.currentTarget.dataset.ind, e = this.data.upload_picture_list;
        e.splice(t, 1), this.setData({
            upload_picture_list: e
        });
    },
    previewImage: function(a) {
        var t = a.target.dataset.src;
        wx.previewImage({
            current: t,
            urls: this.data.upload_picture_list
        });
    },
    closeevaluate: function() {
        this.setData({
            evaluate: !1
        });
    },
    xingclick: function(a) {
        var t = this.data.xing;
        "a" == a.currentTarget.dataset.type ? this.setData({
            xing: a.currentTarget.dataset.num
        }) : this.setData({
            xing: a.currentTarget.dataset.num + t
        });
    },
    submitform: function(a) {
        a.detail.value.liuyan;
    },
    onLoad: function(a) {
        var e = this, i = a.id, n = a.zid, s = a.typedate, u = a.key_words, r = a.suc;
        "" == r && null == r || e.setData({
            suc: r
        });
        var d = parseInt(1e3 * a.overtime), o = a.openid, c = a.ifpay, l = (new Date(d), 
        a.docindex);
        if (a.j_id) {
            var h = a.j_id;
            t.util.request({
                url: "entry/wxapp/user.detail",
                data: {
                    j_id: h
                },
                success: function(a) {
                    console.log(a), e.setData({
                        usedetail: a.data
                    });
                }
            }), e.setData({
                j_id: a.j_id
            });
        }
        if (a.back_orser) {
            var p = a.back_orser;
            o = a.openid;
            e.setData({
                back_orser: p,
                openid: o
            });
        }
        t.util.request({
            url: "entry/wxapp/user.tijianorder",
            data: {
                id: a.id,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), e.setData({
                    bglist: a.data
                });
            }
        }), e.setData({
            id: i,
            zid: n,
            typedate: s,
            key_words: u,
            ifpay: c,
            docindex: l
        }), e.getuserone(), e.getOrderlist(), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                e.setData({
                    url: a.data
                });
            }
        });
    },
    onShow: function(a) {
        var e = this, i = e.data.back_orser;
        t.util.request({
            url: "entry/wxapp/zhuanjia.chufangcont",
            data: {
                back_orser: i,
                c_id: e.data.id
            },
            success: function(a) {
                console.log(a), e.setData({
                    cfdata: a.data
                });
            }
        });
    },
    onHide: function() {
        clearInterval(null);
        var a = this.data.docindex, t = getCurrentPages();
        t[t.length - 2];
        this.setData({
            docindex: a
        });
    },
    onUnload: function() {
        a.fire("em.chatroom.leave"), clearInterval(null);
        var t = this.data.docindex, e = getCurrentPages();
        e[e.length - 2].setData({
            docindex: t
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
    },
    getuserone: function() {
        var a = this;
        if (a.data.orders) e = a.data.orders; else var e = a.data.back_orser;
        var i = a.data.id, n = a.data.key_words;
        "tuwenwenzhen" == n && t.util.request({
            url: "entry/wxapp/tuwen.oneorder",
            data: {
                openid: a.data.openid,
                id: i
            },
            success: function(t) {
                var e = t.data.overtime, i = t.data.ifpay;
                a.getSetimout("tuwenwenzhen", e, i), a.setData({
                    oneorder: t.data,
                    detail: t.data
                });
            }
        }), "dianhuajizhen" == n && t.util.request({
            url: "entry/wxapp/yuyue.oneorder",
            data: {
                openid: a.data.openid,
                id: i
            },
            success: function(t) {
                console.log(t);
                var e = t.data.overtime, i = t.data.ifpay;
                a.getSetimout("dianhuajizhen", e, i), a.setData({
                    oneorder: t.data,
                    detail: t.data
                });
            }
        }), "shipinwenzhen" != n && "tijianjiedu" != n && "shoushukuaiyue" != n || t.util.request({
            url: "entry/wxapp/yuyue.oneorder",
            data: {
                openid: wx.getStorageSync("openid"),
                id: i
            },
            success: function(t) {
                if ("shipinwenzhen" == e) var e = "shipinwenzhen";
                if ("tijianjiedu" == e) e = "tijianjiedu";
                if ("shoushukuaiyue" == e) e = "shoushukuaiyue";
                var i = t.data.overtime, n = t.data.ifpay;
                a.getSetimout(e, i, n), a.setData({
                    oneorder: t.data,
                    detail: t.data
                });
            }
        }), "yuanchengkaifang" == n && t.util.request({
            url: "entry/wxapp/yuyue.getordercfdetail",
            data: {
                openid: a.data.openid,
                orders: e
            },
            success: function(t) {
                console.log(t);
                var e = t.data.overtime, i = t.data.ifpay;
                a.getSetimout("yuanchengkaifang", e, i), a.setData({
                    detail: t.data
                });
            }
        }), "yuanchengguahao" == n && t.util.request({
            url: "entry/wxapp/yuyue.oneorderguahao",
            data: {
                openid: a.data.openid,
                id: i
            },
            success: function(t) {
                var e = t.data.overtime, i = t.data.ifpay;
                a.getSetimout("yuanchengguahao", e, i), a.setData({
                    oneorder: t.data,
                    detail: t.data
                });
            }
        });
    },
    getSetimout: function(a, t, e) {
        t = parseInt(1e3 * t), this.data.back_orser, new Date(t);
    },
    getOrderlist: function() {
        var a = this, e = a.data.id, i = a.data.zid, n = a.data.key_words, s = a.data.openid, u = a.data.back_orser;
        if ("tuwenwenzhen" == n && t.util.request({
            url: "entry/wxapp/tuwen.listall",
            data: {
                openid: s,
                zid: i,
                back_orser: u
            },
            success: function(t) {
                a.setData({
                    list: t.data
                });
            }
        }), "dianhuajizhen" != n && "shipinwenzhen" != n && "tijianjiedu" != n && "shoushukuaiyue" != n || t.util.request({
            url: "entry/wxapp/yuyue.alldochuida",
            data: {
                id: e,
                openid: s,
                zid: i,
                back_orser: u
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "yuanchengkaifang" == n) {
            if (a.data.openid) s = a.data.openid, u = a.data.back_orser;
            t.util.request({
                url: "entry/wxapp/yuyue.cflistalldoc",
                data: {
                    id: e,
                    zid: i,
                    openid: s,
                    back_orser: u,
                    key_words: n
                },
                success: function(t) {
                    a.setData({
                        list: t.data
                    });
                }
            });
        }
        "yuanchengguahao" == n && t.util.request({
            url: "entry/wxapp/yuyue.allguahaohuida",
            data: {
                id: e,
                openid: s,
                zid: i,
                back_orser: u
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        });
    },
    clickshow: function(a) {
        this.setData({
            show: !0,
            hide: !1
        });
    },
    clickshow1: function(a) {
        this.setData({
            show: !1,
            hide: !0
        });
    },
    tabinput2: function(a) {
        this.setData({
            shouwtab: !this.data.shouwtab
        });
    },
    tabinput: function(a) {
        var e = this, i = e.data.id, n = e.data.back_orser, s = e.data.key_words;
        "tuwenwenzhen" == s && t.util.request({
            url: "entry/wxapp/zhuanjia.updatetwstate",
            data: {
                back_orser: n
            },
            success: function(a) {
                console.log(a), clearInterval(null), t.util.request({
                    url: "entry/wxapp/zhuanjia.tuwenmsgdh",
                    data: {
                        id: i
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), e.setData({
                    shouwtab: !this.data.shouwtab
                }), e.getuserone();
            }
        }), "dianhuajizhen" != s && "shipinwenzhen" != s && "tijianjiedu" != s && "shoushukuaiyue" != s || t.util.request({
            url: "entry/wxapp/zhuanjia.updatewzstate",
            data: {
                back_orser: n
            },
            success: function(a) {
                console.log(a), clearInterval(null), t.util.request({
                    url: "entry/wxapp/zhuanjia.dianhuamsgdh",
                    data: {
                        id: i
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), "shipinwenzhen" == s && t.util.request({
                    url: "entry/wxapp/zhuanjia.mbstrat",
                    data: {
                        id: i
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), e.setData({
                    shouwtab: !this.data.shouwtab
                }), e.getuserone();
            }
        }), "yuanchengkaifang" == s && t.util.request({
            url: "entry/wxapp/zhuanjia.updatecfstate",
            data: {
                back_orser: n
            },
            success: function(a) {
                clearInterval(null), t.util.request({
                    url: "entry/wxapp/zhuanjia.kfjzmsgdh",
                    data: {
                        id: i
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), e.setData({
                    shouwtab: !this.data.shouwtab
                }), e.getuserone();
            }
        }), "yuanchengguahao" == s && t.util.request({
            url: "entry/wxapp/zhuanjia.updateghstate",
            data: {
                back_orser: n
            },
            success: function(a) {
                console.log(a), clearInterval(null), e.setData({
                    shouwtab: !this.data.shouwtab
                }), e.getuserone();
            }
        });
    },
    buttonclick: function() {},
    getchar: function(a) {
        var t = this.data.id, e = this.data.zid, i = this.data.typedate, n = this.data.key_words, s = this.data.j_id, u = this.data.list[0].content.text, r = a.currentTarget.dataset.openid;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yishengkaifang/yishengkaifang?id=" + t + "&zid=" + e + "&typedate=" + i + "&key_words=" + n + "&zid=" + e + "&j_id=" + s + "&ifzj=1&text=" + u + "&openid=" + r
        });
    },
    previewImg: function(a) {
        var t = a.target.dataset.src, e = [];
        e.push(t), wx.previewImage({
            current: t,
            urls: e
        });
    },
    twentrec: function(a) {
        var e = this.data.back_orser;
        "tuwenwenzhen" == this.data.key_words && wx.showModal({
            title: "提示",
            content: "是否接诊",
            success: function(a) {
                a.confirm ? t.util.request({
                    url: "entry/wxapp/zhuanjia.updatetwstate",
                    data: {
                        back_orser: e
                    },
                    success: function(a) {}
                }) : a.cancel;
            }
        });
    },
    lookreport: function(a) {
        var t = a.currentTarget.dataset.id, e = this.data.id, i = this.data.zid, n = this.data.back_orser;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport?id=" + t + "&ifzj=1&wzid=" + e + "&zid=" + i + "&back_orser=" + n
        });
    }
});