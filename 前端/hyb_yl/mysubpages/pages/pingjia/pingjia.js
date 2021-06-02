var t = getApp();

Page({
    data: {
        errshow: !1,
        subboor: !0,
        pingfen: 0,
        state: 1
    },
    onLoad: function(e) {
        var a = this, n = e.keywords, i = e.zid, o = e.j_id, s = e.orders;
        t.util.request({
            url: "entry/wxapp/Hzbingli.url",
            success: function(t) {
                console.log(t), a.setData({
                    url: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/Zhuanjia.docinfo",
            data: {
                zid: i
            },
            success: function(t) {
                console.log(t), a.setData({
                    xiangqing: t.data.data
                });
            }
        }), a.setData({
            keywords: n,
            zid: i,
            j_id: o,
            orders: s
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
        var a = this, n = a.data.pingfen, i = a.data.keywords, o = a.data.zid, s = a.data.j_id, r = a.data.orders, d = e.detail.value;
        if (0 == n) a.setData({
            errtext: "请您评分！",
            errshow: !0
        }), setTimeout(function() {
            a.setData({
                errshow: !1
            });
        }, 1e3); else if ("" == d.bingqing) a.setData({
            errtext: "请您输入文字评价！",
            errshow: !0
        }), setTimeout(function() {
            a.setData({
                errshow: !1
            });
        }, 1e3); else {
            a.setData({
                state: 0
            }), d.pf = n;
            var u = d.bingqing, c = t.siteInfo.uniacid;
            console.log(i), t.util.request({
                url: a.data.url + "app/index.php?i=" + c + "&c=entry&a=wxapp&do=pinglun&m=hyb_yl",
                data: {
                    starsnum: n,
                    content: u,
                    openid: wx.getStorageSync("openid"),
                    orders: r,
                    zid: o,
                    keywords: i,
                    j_id: s
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