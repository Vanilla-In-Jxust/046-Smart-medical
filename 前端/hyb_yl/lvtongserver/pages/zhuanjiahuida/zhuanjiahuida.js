require("../../../../utils/broadcast");

var t = getApp(), a = null;

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
        imgs: [],
        list: [],
        isaddshow: !0
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
    submitformzw: function(a) {
        var e = this, i = a.detail.value.zhuiwen, s = e.data.upload_picture_list, r = e.data.typedate, n = e.data.back_orser, u = {
            text: i,
            typedate: r,
            upload_picture_list: s
        };
        t.util.request({
            url: "entry/wxapp/green.guidance_reply",
            data: {
                arr: u,
                back_orser: n
            },
            success: function(t) {
                e.getOrder_detail(), e.setData({
                    shouwtab: !1
                });
            }
        });
    },
    uploadimg: function() {
        var a = this, e = t.siteInfo.uniacid, i = a.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var s = t.tempFilePaths, r = 0; r < s.length; r++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: s[r],
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
    clearImg: function(t) {
        var a = t.currentTarget.dataset.ind, e = this.data.upload_picture_list;
        e.splice(a, 1), this.setData({
            upload_picture_list: e
        });
    },
    previewImage: function(t) {
        var a = t.target.dataset.src;
        wx.previewImage({
            current: a,
            urls: this.data.upload_picture_list
        });
    },
    closeevaluate: function() {
        this.setData({
            evaluate: !1
        });
    },
    xingclick: function(t) {
        var a = this.data.xing;
        "a" == t.currentTarget.dataset.type ? this.setData({
            xing: t.currentTarget.dataset.num
        }) : this.setData({
            xing: t.currentTarget.dataset.num + a
        });
    },
    submitform: function(t) {
        t.detail.value.liuyan;
    },
    onLoad: function(a) {
        var e = this, i = a.id, s = a.did, r = (a.typedate, a.key_words), n = a.openid, u = a.ifpay, o = a.docindex;
        if (a.j_id) {
            var c = a.j_id;
            t.util.request({
                url: "entry/wxapp/user.detail",
                data: {
                    j_id: c
                },
                success: function(t) {
                    console.log(t), e.setData({
                        usedetail: t.data
                    });
                }
            }), e.setData({
                j_id: a.j_id
            });
        }
        if (a.back_orser) {
            var d = a.back_orser;
            n = a.openid;
            e.setData({
                back_orser: d,
                openid: n
            });
        }
        e.setData({
            id: i,
            did: s,
            key_words: r,
            ifpay: u,
            back_orser: d,
            docindex: o
        }), e.getOrder_detail(), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                e.setData({
                    url: t.data
                });
            }
        });
    },
    getOrder_detail: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/green.order_detail",
            data: {
                id: e.data.id
            },
            success: function(t) {
                "2" != t.data.ifpay && "5" != t.data.ifpay && clearInterval(a), e.setData({
                    list: t.data
                }), console.log(e.data.list);
            }
        });
    },
    jiezhen: function(a) {
        var e = this, i = a.currentTarget.dataset.id, s = e.data.did;
        wx.showModal({
            title: "提示",
            content: "是否确认接诊",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/green.order_accept",
                    data: {
                        id: i,
                        did: s
                    },
                    success: function(t) {
                        wx.showModal({
                            title: "提示",
                            content: t.data.message,
                            showCancel: !1,
                            success: function(t) {
                                e.setData({
                                    page: 0,
                                    list: []
                                }), e.getOrder_detail();
                            }
                        });
                    }
                });
            }
        });
    },
    onShow: function(t) {
        this.getUptotime(), wx.showNavigationBarLoading();
    },
    getUptotime: function() {
        var t = this;
        wx.showNavigationBarLoading(), a = setInterval(function() {
            t.getOrder_detail();
        }, 1e3), wx.showNavigationBarLoading();
    },
    onHide: function() {},
    onUnload: function() {
        clearInterval(a);
        var t = this.data.currentData, e = getCurrentPages();
        e[e.length - 2];
        this.setData({
            currentData: t
        });
    },
    onPullDownRefresh: function() {},
    clickshow: function(t) {
        this.setData({
            show: !0,
            hide: !1
        });
    },
    clickshow1: function(t) {
        this.setData({
            show: !1,
            hide: !0
        });
    },
    tabinput2: function(t) {
        this.setData({
            shouwtab: !this.data.shouwtab
        });
    },
    previewImg: function(t) {
        var a = t.target.dataset.src, e = [];
        e.push(a), wx.previewImage({
            current: a,
            urls: e
        });
    }
});