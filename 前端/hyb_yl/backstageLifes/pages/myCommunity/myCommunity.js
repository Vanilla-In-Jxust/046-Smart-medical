var t = getApp();

Page({
    data: {
        page: 0,
        show: !1
    },
    previewImg1: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.text, e = t.target.dataset.id;
        console.log(a), console.log(this.data.text[a].estimateTcontentImgBig);
        var o = this.data.text[a].estimateTcontentImgBig;
        wx.previewImage({
            current: o[e],
            urls: o
        });
    },
    advisory1: function(t) {
        var a = t.currentTarget.dataset.fx_id;
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/docfenxinfo/docfenxinfo?fx_id=" + a
        });
    },
    advisoryW: function(t) {
        console.log(t.currentTarget.dataset.tid), wx.setStorageSync("tid", t.currentTarget.dataset.tid), 
        wx.setStorageSync("rid", t.currentTarget.dataset.rid), wx.setStorageSync("tsid", t.currentTarget.dataset.tsid), 
        wx.setStorageSync("Wcomment", "1"), wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/advisory1/advisory1"
        });
    },
    onLoad: function(t) {
        var a = t.zid;
        this.getZhuanjiakeshi(a);
    },
    dzhan1: function(a) {
        var e = this, o = a.target.dataset.id, s = a.target.dataset.tid, n = a.target.dataset.index, i = e.data.text, r = wx.getStorageSync("log") || "";
        if (e.setData({
            show: !0
        }), 1 == o) return wx.showToast({
            title: "[点赞]是严肃的不可以反悔哦",
            icon: "none",
            duration: 2e3
        }), void e.setData({
            show: !1
        });
        wx.request({
            url: t.globalData.dic + "doctor/community/updateTpraise",
            data: {
                tid: s,
                status: 1,
                token: r
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                wx.showToast({
                    title: "点赞成功",
                    icon: "none",
                    duration: 2e3,
                    mask: !0
                }), console.log(t), i[n].status = 1, i[n].tpraiseCount = parseInt(i[n].tpraiseCount) + 1, 
                e.setData({
                    text: i,
                    show: !1
                });
            }
        });
    },
    onShow: function(t) {
        var a = this;
        a.onClick(), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    height: t.windowHeight
                });
            }
        });
    },
    onClick: function(t) {
        this.setData({
            noFlag: !1
        });
        var a = {
            tid: 1,
            tsid: 1,
            userIcon: "/assets/images/head.png",
            name: "小花",
            ttimeDay: "2018-10-23",
            tcontentText: "回家",
            estimateTcontentImgSmll: [ "/assets/images/head.png", "/assets/images/head.png" ],
            status: 1,
            tpraiseCount: 1,
            treplyCount: 1
        }, e = [ a, a, a, a ];
        this.setData({
            text: e
        });
    },
    lower: function() {
        if (!this.data.noFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var a, e = this, o = this.data.page, s = e.data.text, n = wx.getStorageSync("log") || "";
            console.log(o), wx.request({
                url: t.globalData.dic + "doctor/mycommunity/list/" + o + "/5/" + n,
                data: {},
                success: function(t) {
                    if (console.log(t), 200 == t.data.code) {
                        o++, e.setData({
                            page: o
                        });
                        var n = t.data.data;
                        if (a = s.concat(n), console.log(n), console.log(a), console.log(t.data.data.length), 
                        t.data.data.length == []) return e.setData({
                            noFlag: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), e.setData({
                            text: a,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    },
    getZhuanjiakeshi: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/Fabushare",
            data: {
                op: "docfenxiang",
                zid: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    fxlist: t.data
                });
            }
        });
    }
});