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
    doctab: function(a) {
        var e = this, s = a.currentTarget.dataset.dex;
        console.log(a);
        var n = e.data.key_words, r = e.data.zid, i = e.data.id;
        "dianhuajizhen" != n && "shipinwenzhen" != n || t.util.request({
            url: "entry/wxapp/zhuanjia.dhorderlistser",
            data: {
                zid: r,
                key_words: n,
                id: i,
                ifpay: s
            },
            success: function(t) {
                console.log(t), e.setData({
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
                console.log(t), e.setData({
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
                console.log(t), e.setData({
                    list: t.data
                });
            }
        }), this.setData({
            docindex: s - 1
        });
    },
    onLoad: function(a) {
        var e = this, s = a.state, n = a.titlme, r = a.id, i = a.key_words, d = a.zid, o = e.data.ifpay, u = a.z_telephone;
        e.setData({
            docindex: s,
            ftitle: n,
            id: r,
            key_words: i,
            z_telephone: u,
            zid: d
        }), wx.setNavigationBarTitle({
            title: n + "订单"
        }), "dianhuajizhen" != i && "shipinwenzhen" != i || t.util.request({
            url: "entry/wxapp/zhuanjia.dhorderlistser",
            data: {
                zid: d,
                key_words: i,
                id: r,
                ifpay: o
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        }), "tuwenwenzhen" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.doclistser",
            data: {
                zid: d,
                key_words: i,
                id: r,
                ifpay: o
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        }), "yuanchengkaifang" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: d,
                key_words: i,
                id: r,
                ifpay: o
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this, e = getCurrentPages(), s = e[e.length - 1];
        if ("undefined" == s.__data__.docindex || null == s.__data__.docindex) var n = parseInt(0); else n = parseInt(s.__data__.docindex);
        var r = n + 1, i = a.data.key_words, d = a.data.zid, o = a.data.id;
        console.log(n, r, i, d, o), s.data.docindex && ("dianhuajizhen" != i && "shipinwenzhen" != i || t.util.request({
            url: "entry/wxapp/zhuanjia.dhorderlistser",
            data: {
                zid: d,
                key_words: i,
                id: o,
                ifpay: r
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "tuwenwenzhen" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.doclistser",
            data: {
                zid: d,
                key_words: i,
                id: o,
                ifpay: r
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        }), "yuanchengkaifang" == i && t.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: d,
                key_words: i,
                id: o,
                ifpay: r
            },
            success: function(t) {
                console.log(t), a.setData({
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
        var a = t.currentTarget.dataset.id, e = this.data.zid, s = t.currentTarget.dataset.typedate, n = this.data.key_words, r = t.currentTarget.dataset.j_id, i = t.currentTarget.dataset.back_orser, d = t.currentTarget.dataset.openid, o = t.currentTarget.dataset.overtime, u = t.currentTarget.dataset.ifpay, c = this.data.docindex;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + a + "&zid=" + e + "&typedate=" + s + "&key_words=" + n + "&j_id=" + r + "&back_orser=" + i + "&openid=" + d + "&overtime=" + o + "&ifpay=" + u + "&docindex=" + c
        });
    },
    joinm: function(a) {
        console.log(a);
        var e = a.currentTarget.dataset.roomid, s = a.currentTarget.dataset.sdkappid, n = a.currentTarget.dataset.template, r = a.currentTarget.dataset.userid, i = a.currentTarget.dataset.id, d = a.currentTarget.dataset.usersig, o = a.currentTarget.dataset.orders;
        t.util.request({
            url: "entry/wxapp/zhuanjia.updatesporder",
            data: {
                orders: o
            },
            success: function(t) {
                console.log(t);
            }
        });
        var u = "/hyb_yl/webrtc-room/room/room?roomID=" + e + "&template=" + n + "&sdkAppID=" + s + "&userId=" + r + "&userSig=" + d + "&id=" + i + "&typeindex=1";
        wx.navigateTo({
            url: u
        });
    },
    entrec: function(a) {
        var e = this.data.z_telephone, s = a.currentTarget.dataset.j_id, n = a.currentTarget.dataset.private;
        console.log(e, s, n);
        var r = a.currentTarget.dataset.back_orser;
        this.data.zid;
        t.util.request({
            url: "entry/wxapp/yuyue.setaxndel",
            data: {
                doc_phone: e,
                back_orser: r,
                privateNum: n
            },
            success: function(a) {
                console.log(a), "1016001" == a.data.resultcode ? wx.showToast({
                    title: "您已拨打过电话"
                }) : "Success" == a.data.resultdesc && wx.makePhoneCall({
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
    twentrec: function(a) {
        var e = a.currentTarget.dataset.j_id, s = a.currentTarget.dataset.back_orser, n = this.data.zid, r = this.data.key_words, i = a.currentTarget.dataset.id, d = a.currentTarget.dataset.openid;
        wx.showModal({
            title: "提示",
            content: "是否接诊",
            success: function(a) {
                a.confirm ? (t.util.request({
                    url: "entry/wxapp/zhuanjia.updatetwstate",
                    data: {
                        back_orser: s
                    },
                    success: function(t) {
                        console.log(t);
                        var a = t.data.overtime;
                        wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + i + "&zid=" + n + "&key_words=" + r + "&j_id=" + e + "&back_orser=" + s + "&openid=" + d + "&overtime=" + a
                        });
                    }
                }), console.log("用户点击确定")) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    chufangentr: function(a) {
        var e = a.currentTarget.dataset.j_id, s = a.currentTarget.dataset.back_orser, n = this.data.zid, r = this.data.key_words, i = a.currentTarget.dataset.id, d = a.currentTarget.dataset.openid;
        wx.showModal({
            title: "提示",
            content: "是否接诊",
            success: function(a) {
                a.confirm ? (t.util.request({
                    url: "entry/wxapp/zhuanjia.updatecfstate",
                    data: {
                        back_orser: s
                    },
                    success: function(t) {
                        console.log(t);
                        var a = t.data.overtime;
                        wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + i + "&zid=" + n + "&key_words=" + r + "&j_id=" + e + "&back_orser=" + s + "&openid=" + d + "&overtime=" + a
                        });
                    }
                }), console.log("用户点击确定")) : a.cancel && console.log("用户点击取消");
            }
        });
    }
});