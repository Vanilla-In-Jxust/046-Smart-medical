var a = getApp();

Page({
    data: {
        tabitem: [ "待接诊", "咨询中", "已结束", "已退回" ],
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
    doctab: function(t) {
        var e = t.currentTarget.dataset.dex, s = this, r = s.data.zid, i = s.data.key_words;
        console.log(i);
        var d = s.data.id;
        "tijianjiedu" != i && "shoushukuaiyue" != i || a.util.request({
            url: "entry/wxapp/zhuanjia.getbglistser",
            data: {
                zid: r,
                key_words: i,
                id: d,
                ifpay: e
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        }), "yuanchengkaifang" == i && a.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: r,
                key_words: i,
                id: d,
                ifpay: e
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        }), "sirenyisheng" == i && a.util.request({
            url: "entry/wxapp/zhuanjia.getqylistser",
            data: {
                goods_id: r,
                cerated_type: 7
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        }), "yuanchengguahao" == i && a.util.request({
            url: "entry/wxapp/zhuanjia.getghlistser",
            data: {
                zid: r,
                key_words: i,
                id: d,
                ifpay: e
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        }), this.setData({
            docindex: e - 1
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        this.setData({
            bg_color: e
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var s = this, r = t.state, i = t.titlme, d = t.id, n = t.key_words, u = t.zid, o = s.data.ifpay;
        s.setData({
            docindex: r,
            ftitle: i,
            id: d,
            key_words: n,
            zid: u
        }), wx.setNavigationBarTitle({
            title: i + "订单"
        }), "yuanchengkaifang" == n && a.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: u,
                key_words: n,
                id: d,
                ifpay: o
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        }), "tijianjiedu" != n && "shoushukuaiyue" != n || a.util.request({
            url: "entry/wxapp/zhuanjia.getbglistser",
            data: {
                zid: u,
                key_words: n,
                id: d,
                ifpay: 1
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        }), "yuanchengguahao" == n && a.util.request({
            url: "entry/wxapp/zhuanjia.getghlistser",
            data: {
                zid: u,
                key_words: n,
                id: d,
                ifpay: 1
            },
            success: function(a) {
                console.log(a), s.setData({
                    list: a.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this, e = t.data.zid, s = t.data.key_words, r = t.data.id, i = t.data.ifpay;
        "yuanchengkaifang" == s && a.util.request({
            url: "entry/wxapp/zhuanjia.getcflistser",
            data: {
                zid: e,
                key_words: s,
                id: r,
                ifpay: i
            },
            success: function(a) {
                console.log(a), t.setData({
                    list: a.data
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getchar: function(a) {
        var t = a.currentTarget.dataset.id, e = this.data.zid, s = a.currentTarget.dataset.typedate, r = this.data.key_words, i = a.currentTarget.dataset.j_id;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yishengkaifang/yishengkaifang?id=" + t + "&zid=" + e + "&typedate=" + s + "&key_words=" + r + "&zid=" + e + "&j_id=" + i
        });
    },
    entrec: function(t) {
        var e = t.currentTarget.dataset.id, s = t.currentTarget.dataset.zid, r = t.currentTarget.dataset.typedate, i = this.data.key_words, d = t.currentTarget.dataset.useropenid, n = t.currentTarget.dataset.back_orser;
        wx.showModal({
            title: "是否确认接诊",
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/zhuanjia.updatecforder",
                    data: {
                        back_orser: n
                    },
                    success: function(a) {
                        console.log(a), wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + e + "&zid=" + s + "&typedate=" + r + "&key_words=" + i + "&openid=" + d + "&back_orser=" + n
                        });
                    }
                });
            }
        });
    },
    entrec2: function(t) {
        var e = t.currentTarget.dataset.id, s = t.currentTarget.dataset.zid, r = t.currentTarget.dataset.typedate, i = this.data.key_words, d = t.currentTarget.dataset.useropenid, n = t.currentTarget.dataset.back_orser;
        wx.showModal({
            title: "是否确认接诊",
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/zhuanjia.updateghorder",
                    data: {
                        back_orser: n
                    },
                    success: function(a) {
                        console.log(a), wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + e + "&zid=" + s + "&typedate=" + r + "&key_words=" + i + "&openid=" + d + "&back_orser=" + n
                        });
                    }
                });
            }
        });
    },
    entrec3: function(t) {
        var e = t.currentTarget.dataset.id, s = t.currentTarget.dataset.zid, r = t.currentTarget.dataset.typedate, i = this.data.key_words, d = t.currentTarget.dataset.useropenid, n = t.currentTarget.dataset.back_orser;
        wx.showModal({
            title: "是否确认接诊",
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/zhuanjia.updatesskyorder",
                    data: {
                        back_orser: n
                    },
                    success: function(a) {
                        console.log(a), wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + e + "&zid=" + s + "&typedate=" + r + "&key_words=" + i + "&openid=" + d + "&back_orser=" + n
                        });
                    }
                });
            }
        });
    },
    reply: function(a) {
        var t = a.currentTarget.dataset.id, e = a.currentTarget.dataset.zid, s = a.currentTarget.dataset.typedate, r = this.data.key_words, i = a.currentTarget.dataset.useropenid, d = a.currentTarget.dataset.back_orser, n = a.currentTarget.dataset.j_id, u = this.data.docindex;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + t + "&zid=" + e + "&typedate=" + s + "&key_words=" + r + "&openid=" + i + "&back_orser=" + d + "&j_id=" + n + "&docindex=" + u
        });
    }
});