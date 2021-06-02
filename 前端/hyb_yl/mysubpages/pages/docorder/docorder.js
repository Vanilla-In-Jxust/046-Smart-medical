var t = getApp();

Page({
    data: {
        tabitem: [ "待接诊", "已接诊", "已结束", "已退回" ],
        docindex: 0,
        orderlist: [ {
            state: 0
        }, {
            state: 1
        }, {
            state: 2
        }, {
            state: 3
        } ],
        ifpay: 1
    },
    doctab: function(e) {
        var a = this, s = e.currentTarget.dataset.dex;
        console.log(e);
        var n = a.data.key_words, r = a.data.zid, i = a.data.id;
        "dianhuajizhen" != n && "shipinwenzhen" != n || t.util.request({
            url: "entry/wxapp/zhuanjia.dhorderlistser",
            data: {
                zid: r,
                key_words: n,
                id: i,
                ifpay: s
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "tuwenwenzhen" == n && t.util.request({
            url: "entry/wxapp/zhuanjia.doclistser",
            data: {
                zid: r,
                key_words: n,
                id: i,
                ifpay: s
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "yuanchengkaifang" == n && t.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: r,
                key_words: n,
                id: i,
                ifpay: s
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), this.setData({
            docindex: s - 1
        });
    },
    onLoad: function(e) {
        var a = this, s = e.state, n = e.titlme, r = e.id, i = e.key_words, o = e.zid, d = a.data.ifpay, u = e.z_telephone;
        a.setData({
            docindex: s,
            ftitle: n,
            id: r,
            key_words: i,
            z_telephone: u,
            zid: o
        }), wx.setNavigationBarTitle({
            title: n + "订单"
        }), "dianhuajizhen" != i && "shipinwenzhen" != i || t.util.request({
            url: "entry/wxapp/zhuanjia.dhorderlistser",
            data: {
                zid: o,
                key_words: i,
                id: r,
                ifpay: d
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "tuwenwenzhen" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.doclistser",
            data: {
                zid: o,
                key_words: i,
                id: r,
                ifpay: d
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "yuanchengkaifang" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: o,
                key_words: i,
                id: r,
                ifpay: d
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this, a = getCurrentPages(), s = a[a.length - 1];
        if ("undefined" == s.data.docindex || null == s.data.docindex) var n = parseInt(0); else n = parseInt(s.data.docindex);
        var r = n + 1, i = e.data.key_words, o = e.data.zid, d = e.data.id;
        console.log(n, r, i, o, d), s.data.docindex && ("dianhuajizhen" != i && "shipinwenzhen" != i || t.util.request({
            url: "entry/wxapp/zhuanjia.dhorderlistser",
            data: {
                zid: o,
                key_words: i,
                id: d,
                ifpay: r
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        }), "tuwenwenzhen" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.doclistser",
            data: {
                zid: o,
                key_words: i,
                id: d,
                ifpay: r
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        }), "yuanchengkaifang" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: o,
                key_words: i,
                id: d,
                ifpay: r
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        }), this.setData({
            docindex: s.data.docindex
        }));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getchar: function(t) {
        var e = t.currentTarget.dataset.id, a = this.data.zid, s = t.currentTarget.dataset.typedate, n = this.data.key_words, r = t.currentTarget.dataset.j_id, i = t.currentTarget.dataset.back_orser, o = t.currentTarget.dataset.openid, d = t.currentTarget.dataset.overtime, u = t.currentTarget.dataset.ifpay, c = this.data.docindex;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + e + "&zid=" + a + "&typedate=" + s + "&key_words=" + n + "&j_id=" + r + "&back_orser=" + i + "&openid=" + o + "&overtime=" + d + "&ifpay=" + u + "&docindex=" + c
        });
    },
    joinm: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.roomid, s = e.currentTarget.dataset.sdkappid, n = e.currentTarget.dataset.template, r = e.currentTarget.dataset.userid, i = e.currentTarget.dataset.id, o = e.currentTarget.dataset.usersig, d = e.currentTarget.dataset.orders;
        t.util.request({
            url: "entry/wxapp/zhuanjia.updatesporder",
            data: {
                orders: d
            },
            success: function(t) {
                console.log(t);
            }
        });
        var u = "/hyb_yl/webrtc-room/room/room?roomID=" + a + "&template=" + n + "&sdkAppID=" + s + "&userId=" + r + "&userSig=" + o + "&id=" + i + "&typeindex=1";
        wx.navigateTo({
            url: u
        });
    },
    entrec: function(e) {
        var a = this.data.z_telephone, s = e.currentTarget.dataset.j_id, n = e.currentTarget.dataset.private;
        console.log(a, s, n);
        var r = e.currentTarget.dataset.back_orser;
        this.data.zid;
        t.util.request({
            url: "entry/wxapp/yuyue.setaxndel",
            data: {
                doc_phone: a,
                back_orser: r,
                privateNum: n
            },
            success: function(e) {
                console.log(e), "1016001" == e.data.resultcode ? wx.showToast({
                    title: "您已拨打过电话"
                }) : "Success" == e.data.resultdesc && wx.makePhoneCall({
                    phoneNumber: n,
                    success: function() {
                        console.log("拨打电话成功！"), t.util.request({
                            url: "entry/wxapp/zhuanjia.updatesporder",
                            data: {
                                orders: r
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    fail: function() {
                        console.log("拨打电话失败！");
                    },
                    complete: function() {}
                });
            }
        });
    },
    twentrec: function(e) {
        var a = e.currentTarget.dataset.j_id, s = e.currentTarget.dataset.back_orser, n = this.data.zid, r = this.data.key_words, i = e.currentTarget.dataset.id, o = e.currentTarget.dataset.openid;
        wx.showModal({
            title: "提示",
            content: "是否接诊",
            success: function(e) {
                e.confirm ? (t.util.request({
                    url: "entry/wxapp/zhuanjia.updatetwstate",
                    data: {
                        back_orser: s
                    },
                    success: function(e) {
                        console.log(e), t.util.request({
                            url: "entry/wxapp/zhuanjia.tuwenmsgdh",
                            data: {
                                id: i
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        });
                        var d = e.data.overtime;
                        wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + i + "&zid=" + n + "&key_words=" + r + "&j_id=" + a + "&back_orser=" + s + "&openid=" + o + "&overtime=" + d
                        });
                    }
                }), console.log("用户点击确定")) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    chufangentr: function(e) {
        var a = e.currentTarget.dataset.j_id, s = e.currentTarget.dataset.back_orser, n = this.data.zid, r = this.data.key_words, i = e.currentTarget.dataset.id, o = e.currentTarget.dataset.openid;
        console.log(i), wx.showModal({
            title: "提示",
            content: "是否接诊",
            success: function(e) {
                e.confirm ? (t.util.request({
                    url: "entry/wxapp/zhuanjia.updatecfstate",
                    data: {
                        back_orser: s
                    },
                    success: function(e) {
                        console.log(e), t.util.request({
                            url: "entry/wxapp/zhuanjia.kfjzmsgdh",
                            data: {
                                id: i
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        });
                        var d = e.data.overtime;
                        wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + i + "&zid=" + n + "&key_words=" + r + "&j_id=" + a + "&back_orser=" + s + "&openid=" + o + "&overtime=" + d
                        });
                    }
                }), console.log("用户点击确定")) : e.cancel && console.log("用户点击取消");
            }
        });
    }
});