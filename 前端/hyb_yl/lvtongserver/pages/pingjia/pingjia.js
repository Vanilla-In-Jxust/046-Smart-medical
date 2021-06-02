var t = getApp();

Page({
    data: {
        errshow: !1,
        subboor: !0,
        pingfen: 0,
        state: 1,
        zid: "",
        did: ""
    },
    onLoad: function(e) {
        var a = this, n = e.keywords, i = e.j_id, o = e.did, s = e.orders, r = e.zid;
        "" != r && "null" != r && null != r && a.setData({
            zid: r
        }), "" != o && "null" != o && null != o && a.setData({
            did: o
        }), t.util.request({
            url: "entry/wxapp/Hzbingli.url",
            success: function(t) {
                console.log(t), a.setData({
                    url: t.data
                });
            }
        }), a.setData({
            keywords: n,
            did: o,
            j_id: i,
            orders: s
        }), a.getDocinfo();
    },
    getDocinfo: function() {
        var e = this, a = e.data.did, n = e.data.zid;
        "" != a ? t.util.request({
            url: "entry/wxapp/green.dz_info",
            data: {
                id: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    xiangqing: t.data.data
                });
            }
        }) : "" != n && t.util.request({
            url: "entry/wxapp/zhuanjia.getdocinfo",
            data: {
                zid: n
            },
            success: function(t) {
                e.setData({
                    xiangqing: t.data
                });
            }
        });
    },
    jianxing: function(t) {
        var e = parseInt(t.currentTarget.dataset.dex);
        this.setData({
            pingfen: e
        });
    },
    jiaxing: function(t) {
        var e = this.data.pingfen;
        e += t.currentTarget.dataset.dex, this.setData({
            pingfen: ++e
        });
    },
    wenzhenform: function(e) {
        console.log(e);
        var a = this, n = a.data.pingfen, i = a.data.keywords, o = a.data.did, s = a.data.zid, r = a.data.j_id, d = a.data.orders, u = e.detail.value;
        if (0 == n) a.setData({
            errtext: "请您评分！",
            errshow: !0
        }), setTimeout(function() {
            a.setData({
                errshow: !1
            });
        }, 1e3); else if ("" == u.bingqing) a.setData({
            errtext: "请您输入文字评价！",
            errshow: !0
        }), setTimeout(function() {
            a.setData({
                errshow: !1
            });
        }, 1e3); else {
            a.setData({
                state: 0
            }), u.pf = n;
            var c = u.bingqing;
            t.siteInfo.uniacid;
            console.log(i), t.util.request({
                url: "entry/wxapp/green.pingjia",
                data: {
                    starsnum: n,
                    content: c,
                    openid: wx.getStorageSync("openid"),
                    orders: d,
                    did: o,
                    zid: s,
                    keywords: i,
                    j_id: r
                },
                success: function(t) {
                    console.log(t), wx.showToast({
                        title: "评价成功",
                        icon: "loading",
                        duration: 1e3,
                        success: function() {
                            var t = getCurrentPages();
                            t[t.length - 2].setData({
                                pingjia: 1
                            }), setTimeout(function() {
                                wx.navigateBack({
                                    detail: 1
                                });
                            }, 1e3);
                        }
                    });
                }
            });
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        var t = this.data.wanc;
        if (console.log(t), 1 == t && getCurrentPages().length > 2) {
            var e = getCurrentPages(), a = e[e.length - 2];
            a.data;
            a.setData({
                isBack: !0
            });
        }
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});