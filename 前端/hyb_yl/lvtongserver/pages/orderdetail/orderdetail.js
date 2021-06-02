var t = getApp(), a = null;

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
    succ: function(a) {
        var e = a.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "确认订单已完成吗？",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/green.over_order",
                    data: {
                        id: e
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "操作成功"
                        }), setTimeout(function() {
                            wx.navigateBack({
                                complete: function(t) {}
                            });
                        }, 1e3);
                    }
                });
            }
        });
    },
    tabinput: function(t) {
        this.setData({
            shouwtab: !this.data.shouwtab
        });
    },
    xing: function(t) {
        var a = t.currentTarget.dataset.dex;
        this.setData({
            pjxing: 1 * a + 1
        });
    },
    addxing: function(t) {
        var a = 1 * t.currentTarget.dataset.dex + 1 * this.data.pjxing + 1;
        this.setData({
            pjxing: a
        });
    },
    pjtextarea: function(t) {
        this.setData({
            pjvalue: t.detail.value
        });
    },
    submitpj: function() {
        this.data.pjxing, this.data.pjvalue;
        this.setData({
            pingjia: !1
        });
    },
    onLoad: function(a) {
        wx.showNavigationBarLoading();
        var e = this, n = a.zid, i = a.back_orser, o = wx.getStorageSync("color"), s = a.key_words, r = a.j_id, c = a.ifpay, u = a.money, d = a.currentData;
        if (e.setData({
            zid: n,
            back_orser: i,
            key_words: s,
            j_id: r,
            ifpay: c,
            money: u,
            currentData: d
        }), a.id) {
            var l = a.id;
            e.setData({
                id: l
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), t.util.request({
            url: "entry/wxapp/user.detail",
            data: {
                j_id: r
            },
            success: function(t) {
                console.log(t), e.setData({
                    usedetail: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data
                });
            }
        }), a.txt && this.setData({
            txt: a.txt
        });
    },
    pingjia: function(t) {
        var a = t.currentTarget.dataset.keywords, e = t.currentTarget.dataset.zid, n = t.currentTarget.dataset.orders, i = t.currentTarget.dataset.j_id, o = t.currentTarget.dataset.title, s = t.currentTarget.dataset.did;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/pingjia/pingjia?keywords=" + a + "&zid=" + e + "&orders=" + n + "&j_id=" + i + "&title=" + o + "&did=" + s
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
        clearInterval(a);
    },
    onReady: function() {
        wx.showNavigationBarLoading(), this.getUserchar();
    },
    onShow: function() {
        this.getUptotime(), wx.showNavigationBarLoading();
    },
    onUnload: function() {
        clearInterval(a);
        var t = this.data.currentData, e = getCurrentPages();
        e[e.length - 2];
        this.setData({
            currentData: t
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getUserchar: function() {
        var a = this, e = a.data.back_orser;
        t.util.request({
            url: "entry/wxapp/green.order_message",
            data: {
                back_orser: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                a.setData({
                    list: t.data
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
                for (var i = t.tempFilePaths, o = 0; o < i.length; o++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: i[o],
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
    clearImg: function(t) {
        var a = t.currentTarget.dataset.ind;
        console.log(a);
        var e = this.data.upload_picture_list;
        e.splice(a, 1), this.setData({
            upload_picture_list: e
        });
    },
    submitformzw: function(a) {
        var e = this, n = a.detail.value.zhuiwen, i = e.data.upload_picture_list, o = (e.data.zid, 
        e.data.typedate), s = e.data.back_orser;
        parseInt(e.data.addnum);
        if (e.data.id) e.data.id;
        var r = {
            text: n,
            typedate: o,
            upload_picture_list: i
        };
        t.util.request({
            url: "entry/wxapp/green.adduserzhuiwen",
            data: {
                arr: r,
                back_orser: s
            },
            success: function(t) {
                console.log(t), e.getUserchar(), e.setData({
                    shouwtab: !1
                });
            }
        });
    },
    cancel: function(a) {
        var e = a.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/green.order_change",
            data: {
                id: e,
                ifpay: "8"
            },
            success: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "取消成功",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && wx.navigateBack({
                            complete: function(t) {}
                        });
                    }
                });
            }
        });
    },
    refund: function(a) {
        var e = a.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/green.order_change",
            data: {
                id: e,
                ifpay: "5"
            },
            success: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "申请成功",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && wx.navigateBack({
                            complete: function(t) {}
                        });
                    }
                });
            }
        });
    },
    buttonclick: function(a) {
        var e = this.data.back_orser, n = (this.data.key_words, a.currentTarget.dataset.open, 
        this.data.id);
        if ("3" == this.data.ifpay) var i = [ "删除订单", msg ]; else i = [ "删除订单" ];
        wx.showActionSheet({
            itemList: i,
            itemColor: "",
            success: function(a) {
                a.cancel || wx.showModal({
                    title: "是否删除订单？",
                    content: "删除后不可恢复",
                    success: function(a) {
                        a.confirm && t.util.request({
                            url: "entry/wxapp/green.del_order",
                            data: {
                                back_orser: e,
                                id: n
                            },
                            success: function(t) {
                                console.log(t), wx.showToast({
                                    title: "删除成功",
                                    icon: "none",
                                    success: function(t) {
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
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    tabinputpay: function(e) {
        console.log(e);
        var n = this, i = n.data.back_orser, o = n.data.money, s = n.data.key_words, r = n.data.zid;
        console.log(i, o, s, r), t.util.request({
            url: "entry/wxapp/green.payorder",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: o,
                orders: i,
                key_words: s
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        console.log(t);
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function(t) {
                        clearInterval(a), "requestPayment:ok" == t.errMsg && (wx.showModal({
                            title: "提示",
                            content: "支付成功"
                        }), n.getOrderdetail());
                    }
                });
            }
        });
    },
    tuikuan: function(a) {
        console.log(a);
        var e = this.data.back_orser, n = this.data.key_words, i = this.data.money;
        if ("0.00" == i) var o = "是否取消问诊"; else o = "是否申请退款";
        wx.showModal({
            title: o,
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/user.tuikuan",
                    data: {
                        back_orser: e,
                        money: i,
                        key_words: n
                    },
                    success: function(t) {
                        if ("0.00" == i) var a = "取消成功"; else a = "申请成功，请耐心等待退款";
                        wx.showToast({
                            title: a,
                            icon: "none",
                            success: function(t) {
                                console.log(t), setTimeout(function() {
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
        var t = this.data.info.title, a = this.data.info.key_words;
        wx.reLaunch({
            url: "/hyb_yl/czhuanjiasubpages/pages/longsever/index?ser_key=" + a + "&name=" + t
        });
    },
    getOrderdetail: function() {
        var a = this;
        a.data.orders, a.data.key_words;
        t.util.request({
            url: "entry/wxapp/green.order_detail",
            data: {
                id: a.data.id
            },
            success: function(t) {
                a.setData({
                    info: t.data
                });
            }
        });
    },
    getUptotime: function() {
        var t = this;
        wx.showNavigationBarLoading(), a = setInterval(function() {
            t.getOrderdetail(), t.getUserchar();
        }, 1e3), wx.showNavigationBarLoading();
    }
});