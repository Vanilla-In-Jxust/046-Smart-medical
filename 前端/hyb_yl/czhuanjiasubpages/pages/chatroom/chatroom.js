var a = require("../../../../utils/broadcast"), t = getApp();

Page({
    data: {
        msgmb: "yes",
        popshow: !1,
        pingjia_cont: "",
        text_num: 0,
        hiddenmodalput: !0,
        username: {
            your: ""
        },
        shouwtab: !1,
        show: !0,
        hide: !1,
        xing: 0,
        evaluate: !1,
        figure: 0,
        dex: "",
        imgs: [ "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg", "https://img1.dxycdn.com/2020/0308/949/3400928984622785985-22.jpg" ],
        upload_picture_list: [],
        typedate: 0,
        time2: ""
    },
    iName: function(a) {
        console.log(a), this.setData({
            text_num: a.detail.cursor,
            pingjia_cont: a.detail.value
        });
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
        var t = a.currentTarget.dataset.img, e = this.data.imgs;
        wx.previewImage({
            current: t,
            urls: e
        });
    },
    closezhuiwen: function() {
        this.setData({
            shouwtab: !1
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
    submitformzw: function(a) {
        var e = this, n = a.detail.value.zhuiwen, o = e.data.upload_picture_list, s = e.data.id, i = e.data.zid, r = e.data.typedate, d = e.data.orders, u = {
            text: n,
            typedate: r,
            upload_picture_list: o
        };
        t.util.request({
            url: "entry/wxapp/zhuanjia.adduserzhuiwen",
            data: {
                arr: u,
                orders: d,
                zid: i
            },
            success: function(a) {
                console.log(a), e.getuserone(), e.getOrderlook, e.setData({
                    shouwtab: !1
                }), t.util.request({
                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                    data: {
                        id: s,
                        val: n,
                        near: "图文",
                        zid: i
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), t.util.request({
                    url: "entry/wxapp/tuwen.detail",
                    data: {
                        orders: d,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(a) {
                        console.log(a), e.setData({
                            detail: a.data,
                            addnum: parseInt(a.data.addnum),
                            ifpay: a.data.ifpay
                        });
                    }
                });
            }
        });
    },
    uploadimg: function() {
        var a = this, e = t.siteInfo.uniacid, n = a.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var o = t.tempFilePaths, s = 0; s < o.length; s++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: o[s],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        console.log(t), n.push(t.data), a.setData({
                            upload_picture_list: n,
                            typedate: 1
                        });
                    }
                });
            }
        });
    },
    closeevaluate: function() {
        this.setData({
            evaluate: !1
        });
    },
    cancelM: function(a) {
        console.log(a), this.setData({
            hiddenmodalput: !0
        });
    },
    confirmM: function(a) {
        var e = this, n = e.data.xing, o = e.data.pingjia_cont, s = e.data.zid, i = e.data.orders, r = e.data.j_id;
        wx.showModal({
            title: "评价医生",
            content: "是否提交评价",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/zhuanjia.addpingjia",
                    data: {
                        starsnum: n,
                        zid: s,
                        orders: i,
                        keywords: "tuwenwenzhen",
                        j_id: r,
                        openid: wx.getStorageSync("openid"),
                        content: o
                    },
                    success: function() {
                        console.log(a), wx.showToast({
                            title: "评价成功",
                            icon: "none"
                        }), e.setData({
                            hiddenmodalput: !0,
                            evaluate: !1
                        });
                    }
                });
            }
        });
    },
    xingclick: function(a) {
        var t = this.data.xing;
        this.data.zid, this.data.key_words, this.data.orders, this.data.j_id;
        "a" == a.currentTarget.dataset.type ? this.setData({
            xing: a.currentTarget.dataset.num
        }) : this.setData({
            xing: a.currentTarget.dataset.num + t
        }), console.log(this.data.xing), this.setData({
            hiddenmodalput: !this.data.hiddenmodalput
        });
    },
    submitform: function(a) {
        a.detail.value.liuyan;
    },
    onLoad: function(a) {
        wx.hideNavigationBarLoading();
        var e = this, n = a.key_words, o = JSON.parse(a.list), s = o.orders, i = o.zid, r = o.j_id;
        console.log(r);
        var d = a.money, u = a.currentData;
        if (a.txt && this.setData({
            txt: a.txt,
            popshow: "yes" == a.txt
        }), t.util.request({
            url: "entry/wxapp/index.techen",
            success: function(a) {
                console.log(a);
                var t = a.data.wxapp_mb;
                e.setData({
                    submitOrder: t.submitOrder,
                    OpenHalfcard: t.OpenHalfcard,
                    Mobile: t.Mobile,
                    hexiao: t.hexiao,
                    cfoverfcard: t.cfoverfcard
                });
            }
        }), t.util.request({
            url: "entry/wxapp/user.detail",
            data: {
                j_id: r
            },
            success: function(a) {
                console.log(a), e.setData({
                    usedetail: a.data
                });
            }
        }), a.ifpay) {
            var c = a.ifpay;
            e.setData({
                ifpay: c
            });
        }
        t.util.request({
            url: "entry/wxapp/zhuanjia.orderpj",
            data: {
                orders: s,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), 1 == a.data ? e.setData({
                    evaluate: !0
                }) : e.setData({
                    evaluate: !1
                });
            }
        }), t.util.request({
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
            orders: s,
            zid: i,
            key_words: n,
            back_orser: s,
            money: d,
            currentData: u
        });
        var l = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: l
        }), wx.setNavigationBarTitle({
            title: o.z_name
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), e.setData({
                    url: a.data
                });
            }
        });
    },
    onShow: function(a) {
        var e = this;
        e.getOrderlook(), e.getuserone();
        var n = e.data.orders;
        t.util.request({
            url: "entry/wxapp/tuwen.detail",
            data: {
                orders: n,
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), e.setData({
                    detail: a.data,
                    addnum: parseInt(a.data.addnum),
                    ifpay: a.data.ifpay
                });
            }
        });
    },
    onHide: function() {
        clearInterval(this.data.time2);
    },
    onUnload: function() {
        clearInterval(this.data.time2);
        var t = this.data.currentData, e = getCurrentPages();
        e[e.length - 2].setData({
            currentData: t
        }), a.fire("em.chatroom.leave");
    },
    onPullDownRefresh: function() {
        wx.hideNavigationBarLoading(), wx.showNavigationBarLoading(), this.selectComponent("#chat").getMore(), 
        wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
    },
    getuserone: function() {
        var a = this, e = a.data.orders;
        t.util.request({
            url: "entry/wxapp/tuwen.listall",
            data: {
                openid: wx.getStorageSync("openid"),
                back_orser: e,
                zid: a.data.zid
            },
            success: function(t) {
                a.setData({
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
    tabinput: function(a) {
        var t = this.data.orders, e = this.data.zid, n = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/edit/edit?back_orser=" + t + "&zid=" + e + "&id=" + n
        });
    },
    buttonclick: function(a) {
        var e = this, n = e.data.back_orser, o = e.data.key_words, s = a.currentTarget.dataset.open, i = a.currentTarget.dataset.id;
        console.log(n, o, i);
        var r = e.data.ifpay;
        if (0 == r || 1 == r || 8 == r || 2 == r) {
            if (1 == s) var d = "取消公开";
            var u = [ "删除订单" ];
        } else {
            if (1 == s) d = "取消公开"; else d = "公开问题";
            u = [ "删除订单", d ];
        }
        wx.showActionSheet({
            itemList: u,
            itemColor: "",
            success: function(a) {
                0 == a.tapIndex ? a.cancel || wx.showModal({
                    title: "是否删除订单？",
                    content: "删除后不可恢复",
                    success: function(a) {
                        a.confirm && t.util.request({
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
                }) : 1 == e.data.open ? t.util.request({
                    url: "enter/wxapp/user.openquestion",
                    data: {
                        back_orser: n,
                        key_words: o,
                        id: i
                    },
                    success: function(a) {
                        console.log(a), t.util.request({
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
                    success: function(a) {
                        console.log(a), a.confirm && t.util.request({
                            url: "enter/wxapp/user.openquestion",
                            data: {
                                back_orser: n,
                                key_words: o,
                                id: i
                            },
                            success: function(a) {
                                console.log(a), t.util.request({
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
    tabinputpay: function() {
        var a = this, e = a.data.back_orser, n = a.data.money, o = a.data.key_words, s = a.data.zid;
        console.log(e, n, o, s), t.util.request({
            url: "entry/wxapp/yuyue.paywenzhen",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: n,
                orders: e,
                key_words: o
            },
            success: function(e) {
                console.log(e), wx.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(e) {
                        console.log(e), a.getuserone(), t.util.request({
                            url: "entry/wxapp/zhuanjia.getdocmbtxing",
                            data: {
                                val: "图文订单提醒",
                                near: "图文问诊",
                                zid: s
                            },
                            success: function(a) {
                                console.log(a);
                            }
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        });
    },
    sqchufang: function(a) {
        var t = this.data.j_id, e = this.data.back_orser, n = (this.data.key_words, this.data.zid);
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/chufangmes/chufangmes?tit=远程开方&key_words=yuanchengkaifang&back_orser=" + e + "&zid=" + n + "&j_id=" + t
        });
    },
    tabtwoinput: function() {
        wx.reLaunch({
            url: "/hyb_yl/userLife/pages/faxian/faxian"
        });
    },
    tuikuan: function(a) {
        console.log(a);
        var e = this.data.orders, n = this.data.money;
        if (console.log(n), "0.00" == n) var o = "是否取消问诊", s = "取消成功"; else o = "是否申请退款", 
        s = "申请成功，请耐心等待退款";
        wx.showModal({
            title: o,
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/user.twtuikuan",
                    data: {
                        back_orser: e,
                        money: n
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: s,
                            icon: "none",
                            success: function(a) {
                                console.log(a), wx.navigateBack({
                                    detail: 1
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    previewImg: function(a) {
        console.log(a);
        var t = a.target.dataset.src, e = [];
        e.push(t), wx.previewImage({
            current: t,
            urls: e
        });
    },
    getOrderlook: function() {
        wx.hideNavigationBarLoading();
        var a = this, e = a.data.orders, n = a.data.ifpay;
        a.data.key_words;
        t.util.request({
            url: "entry/wxapp/tuwen.detail",
            data: {
                orders: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), 0 != n && 1 != n && 2 != n || (a.data.time2 = setInterval(function() {
                    a.getdetaillook(), a.getuserone();
                }, 1e3)), a.setData({
                    detail: t.data,
                    addnum: parseInt(t.data.addnum),
                    j_id: t.data.j_id,
                    ifgb: t.data.ifgb
                }), wx.hideNavigationBarLoading();
            }
        });
    },
    getdetaillook: function() {
        wx.hideNavigationBarLoading();
        var a = this, e = a.data.orders, n = a.data.ifpay, o = a.data.key_words;
        t.util.request({
            url: "entry/wxapp/tuwen.detail",
            data: {
                orders: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(s) {
                var i = parseInt(1e3 * s.data.overtime), r = new Date(i), d = new Date(), u = Date.parse(r) - Date.parse(d), c = parseInt(u % 864e5 / 36e5), l = parseInt(u % 36e5 / 6e4), p = u % 6e4 / 1e3;
                if (a.setData({
                    dumiao: c + ":" + l + ":" + p,
                    ifpay: s.data.ifpay
                }), 0 == u) return clearInterval(a.data.time2), t.util.request({
                    url: "entry/wxapp/zhuanjia.dopagetime",
                    data: {
                        orders: e,
                        ifpay: n,
                        key_words: o
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: "订单已结束",
                            icon: "none",
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        detail: 1
                                    }, 1500);
                                });
                            }
                        });
                    }
                }), !1;
                u <= 0 && (clearInterval(a.data.time2), a.setData({
                    dumiao: "00:00:00"
                }), t.util.request({
                    url: "entry/wxapp/zhuanjia.dopagetime",
                    data: {
                        orders: e,
                        ifpay: n,
                        key_words: o
                    },
                    success: function(a) {}
                })), a.setData({
                    detail: s.data,
                    addnum: parseInt(s.data.addnum),
                    j_id: s.data.j_id,
                    ifgb: s.data.ifgb
                }), wx.hideNavigationBarLoading();
            }
        });
    },
    ptiontitbtn: function(a) {
        console.log(a);
        var t = this.data.submitOrder, e = this.data.OpenHalfcard, n = this.data.Mobile;
        this.data.hexiao, this.data.cfoverfcard;
        wx.requestSubscribeMessage({
            tmplIds: [ t, e, n ],
            success: function(a) {
                console.log(a);
            }
        }), this.setData({
            applyFor: !0,
            msgmb: "non",
            popshow: !1
        });
    }
});