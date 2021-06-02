var t = getApp();

Page({
    data: {
        num: 0,
        item: {},
        tyType: !1,
        tyTypeindex: !1,
        tyTypeindex2: !1,
        time1: null
    },
    tyxqBtn: function(t) {
        var e = t.currentTarget.dataset.name;
        this.setData({
            tyName: e
        });
    },
    plase: function(t) {
        console.log(t);
        var e = t.detail.value;
        this.setData({
            num: e
        });
    },
    closeZhe: function() {
        var e = this, a = e.data.title, n = e.data.tjid, i = e.data.type, o = e.data.id, r = e.data.num;
        if (console.log(r), "" == r) return wx.showToast({
            title: "数据不能为空",
            icon: "none"
        }), !1;
        t.util.request({
            url: "entry/wxapp/tijian.addjson",
            data: {
                title: a,
                id: n,
                orderid: o,
                type: i,
                num: r
            },
            success: function(t) {
                console.log(t), e.getAlltijian(), e.setData({
                    tyType: !1
                });
            }
        });
    },
    onLoad: function(e) {
        var a = this, n = wx.getStorageSync("openid"), i = wx.getStorageSync("color");
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), e.scene) {
            var o = decodeURIComponent(e.scene), r = o.split("&")[0], s = o.split("=")[1].split("&")[0], d = o.split("&")[2].split("=")[1];
            t.util.request({
                url: "entry/wxapp/index.hospitaladmin",
                data: {
                    id: s
                },
                success: function(t) {
                    var e = t.data;
                    if (a.setData({
                        adminopenid: e
                    }), e !== n || "" == n) return wx.showModal({
                        title: "提示",
                        content: "您暂无权限，或授权失效，请重新授权",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && wx.reLaunch({
                                url: "/hyb_yl/tabBar/index/index"
                            });
                        }
                    }), !1;
                }
            }), t.util.request({
                url: "entry/wxapp/tijian.taocandetail",
                data: {
                    tjid: r
                },
                success: function(t) {
                    console.log(t), a.setData({
                        title: t.data.title,
                        tjid: r
                    });
                }
            }), a.setData({
                tjid: r,
                id: s,
                tyType: !0,
                type: d
            });
        } else {
            var c = e.overtime, u = (s = e.id, c.split("-").join("/")), l = new Date(u);
            a.data.ifpay;
            a.data.time1 = setInterval(function() {
                var t = new Date(), e = Date.parse(l) - Date.parse(t), n = parseInt(e % 864e5 / 36e5), i = parseInt(e % 36e5 / 6e4), o = e % 6e4 / 1e3;
                a.setData({
                    dumiao: n + ":" + i + ":" + o
                }), n <= 0 && i <= 0 && o <= 0 && (a.setData({
                    dumiao: "00:00:00"
                }), clearTimeout(a.data.time1));
            }, 1e3);
        }
        t.util.request({
            url: "entry/wxapp/tijian.oderinfo",
            data: {
                id: s
            },
            success: function(t) {
                a.setData({
                    detail: t.data,
                    content: t.data.content,
                    addproject: t.data.addproject
                });
            }
        }), a.setData({
            id: s,
            overtime: c,
            bgc: i
        });
    },
    big_img: function(t) {
        var e = t.currentTarget.dataset.src;
        wx.previewImage({
            urls: [ e ]
        });
    },
    paybtn: function(e) {
        var a = e.currentTarget.dataset.money, n = e.currentTarget.dataset.orders;
        t.util.request({
            url: "entry/wxapp/tijian.paytijianorder",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: a,
                orders: n
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        wx.showToast({
                            title: "支付成功",
                            icon: "none",
                            duration: 1500,
                            success: function(t) {
                                wx.redirectTo({
                                    url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    openbtn: function(e) {
        var a = this, n = e.currentTarget.dataset.type, i = e.currentTarget.dataset.title, o = e.currentTarget.dataset.dex, r = e.currentTarget.dataset.id, s = a.data.id, d = e.currentTarget.dataset.ifcz;
        this.data.content, this.data.addproject;
        wx.showLoading({
            title: "体检码生成中，请稍后"
        }), t.util.request({
            url: "entry/wxapp/tijian.erweima",
            data: {
                title: i,
                id: r,
                orderid: s,
                type: n,
                ifcz: d
            },
            success: function(t) {
                console.log(t), a.getAlltijian(n, o), wx.hideLoading(), a.setData({
                    typeIndex: o,
                    type: n,
                    tyTypeindex: !0
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
    getAlltijian: function(e, a) {
        var n = this, i = n.data.id;
        t.util.request({
            url: "entry/wxapp/tijian.oderinfo",
            data: {
                id: i
            },
            success: function(t) {
                console.log(t), n.setData({
                    detail: t.data,
                    content: t.data.content,
                    addproject: t.data.addproject
                });
                var i = n.data.content, o = n.data.addproject;
                1 == e ? i[a].open = !i[a].open : 2 == e && (o[a].open = !o[a].open), n.setData({
                    content: i,
                    addproject: o
                });
            }
        });
    },
    show: function() {
        wx.showToast({
            title: "支付后可查",
            icon: "none"
        });
    },
    create: function() {
        var e = this;
        wx.showModal({
            title: "提示",
            content: "确定已完成所有检查项",
            success: function(a) {
                if (a.confirm) {
                    var n = e.data.id;
                    t.util.request({
                        url: "entry/wxapp/tijian.updatebaogao",
                        data: {
                            id: n
                        },
                        success: function(t) {
                            console.log(t), wx.showToast({
                                title: "生成报告成功",
                                icon: "none",
                                duration: 2e3
                            });
                        }
                    });
                } else a.cancel && console.log("用户点击取消");
            }
        });
    }
});