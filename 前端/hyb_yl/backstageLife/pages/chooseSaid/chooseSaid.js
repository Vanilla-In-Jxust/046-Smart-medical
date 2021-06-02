var a = getApp();

Page({
    data: {
        currenttype: 1,
        classifyIndex: -1,
        publicIndex: -1,
        loadingBoo: !0,
        moreBoo: !0,
        page: 0,
        prenumber: 10,
        upFlag: !1,
        classifyTypeArr: [ 1, 2, 3, 4, 5 ],
        classifyList: []
    },
    onLoad: function(a) {
        var t = a.zid;
        this.setData({
            zid: t
        }), this.getgetrem();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    choosetype: function(a) {
        console.log(a), a.target.dataset.currenttype != this.data.currenttype && (this.setData({
            currenttype: a.target.dataset.currenttype,
            page: 0,
            loadingBoo: !0,
            moreBoo: !0,
            noClassifyFlag: !1,
            upFlag: !1
        }), 1 == this.data.currenttype && this.selfDducation(), 2 == this.data.currenttype && this.collect(), 
        3 == this.data.currenttype && this.getAllhjfenl());
    },
    classifyType: function(a) {
        console.log(a), this.data.upFlag && (console.log(a), this.setData({
            upFlag: !this.data.upFlag,
            into_target_id: a.currentTarget.dataset.id
        })), a.target.dataset.index != this.data.classifyIndex && (this.setData({
            classifyIndex: a.target.dataset.index,
            page: 0,
            loadingBoo: !0,
            moreBoo: !0,
            noClassifyFlag: !1
        }), this.selfDducation());
    },
    publicType: function(a) {
        this.data.upFlag && (console.log(a), this.setData({
            upFlag: !this.data.upFlag,
            into_id: a.currentTarget.dataset.id
        })), a.target.dataset.index != this.data.publicIndex && (this.setData({
            publicIndex: a.target.dataset.index,
            page: 0,
            loadingBoo: !0,
            moreBoo: !0,
            noClassifyFlag: !1
        }), this.publicList());
    },
    selfDducation: function(t) {
        var e = this, i = e.data.zid;
        a.util.request({
            url: "entry/wxapp/yishuo.Allhjfenl",
            data: {
                op: "geren",
                zid: i
            },
            success: function(a) {
                console.log(a);
                var t = a.data.fenl, i = a.data.hjlist;
                e.setData({
                    Wpost: t,
                    hjlist: i,
                    loghjlist: i
                });
            }
        }), wx.hideNavigationBarLoading();
    },
    getMore: function() {
        var a = this;
        console.log(this.data.moreBoo), this.data.moreBoo && this.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), 1 == a.data.currenttype && a.selfDducation(), 2 == a.data.currenttype && a.collect(), 
        3 == this.data.currenttype && this.publicList());
    },
    collect: function() {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var t = this;
        wx.request({
            url: a.globalData.dic + "doctor/education/collect/" + t.data.page + "/" + t.data.prenumber + "/" + t.data.token,
            success: function(a) {
                console.log(a), 200 == a.data.code && (0 == t.data.page && null != a.data.data && a.data.data.length > 0 ? t.setData({
                    classifyList: a.data.data
                }) : 0 == t.data.page && t.setData({
                    noClassifyFlag: !0,
                    classifyList: a.data.data
                }), t.data.page > 0 && (null != a.data.data && a.data.data.length > 0 ? (a.data.data.forEach(function(a) {
                    t.data.classifyList.push(a);
                }), t.setData({
                    loadingBoo: !0,
                    classifyList: t.data.classifyList
                })) : t.setData({
                    moreBoo: !1,
                    loadingBoo: !0
                })), t.data.page++, t.setData({
                    page: t.data.page
                }), wx.hideLoading());
            },
            fail: function() {
                t.setData({
                    loadingBoo: !0
                }), wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    publicList: function() {
        var t = {
            cdType: (e = this).data.publicIndex
        };
        -1 == e.data.publicIndex && (t = {}), wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var e = this;
        wx.request({
            url: a.globalData.dic + "doctor/education/listDoctorEducation/" + e.data.page + "/" + e.data.prenumber,
            data: t,
            success: function(a) {
                console.log(a), 200 == a.data.code && (0 == e.data.page && null != a.data.data && a.data.data.length > 0 ? e.setData({
                    classifyList: a.data.data
                }) : 0 == e.data.page && e.setData({
                    noClassifyFlag: !0,
                    classifyList: a.data.data
                }), e.data.page > 0 && (null != a.data.data && a.data.data.length > 0 ? (a.data.data.forEach(function(a) {
                    e.data.classifyList.push(a);
                }), e.setData({
                    loadingBoo: !0,
                    classifyList: e.data.classifyList
                })) : e.setData({
                    moreBoo: !1,
                    loadingBoo: !0
                })), e.data.page++, e.setData({
                    page: e.data.page
                }), wx.hideLoading());
            },
            fail: function() {
                e.setData({
                    loadingBoo: !0
                }), wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    getSaid: function(a) {
        console.log(a);
        var t = this.data.currenttype, e = a.currentTarget.dataset.index;
        if (1 == t) {
            var i = this.data.hjlist[e];
            (o = getCurrentPages())[o.length - 2].setData({
                hjlistinfo: i
            }), wx.navigateBack({
                delta: 1
            });
        }
        if (2 == t) {
            var s = this.data.classifyList;
            console.log(s), console.log(s[e]), console.log(s[e].h_title);
        }
        if (3 == t) {
            var o, n = this.data.hjlist;
            i = n[e], n[e].h_id;
            (o = getCurrentPages())[o.length - 2].setData({
                hjlistinfo: i,
                ystype: 1
            }), wx.navigateBack({
                delta: 1
            });
        }
    },
    changeBtn: function(a) {
        console.log(a), this.setData({
            upFlag: !this.data.upFlag
        });
    },
    getAllhjfenl: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/yishuo.allhjfenl",
            data: {
                op: "display"
            },
            success: function(a) {
                console.log(a);
                var e = a.data.fenl, i = a.data.hjlist;
                t.setData({
                    Wpost: e,
                    hjlist: i
                });
            }
        });
    },
    getgetrem: function() {
        var t = this, e = t.data.zid;
        a.util.request({
            url: "entry/wxapp/huanjiao.allhjfenl",
            data: {
                op: "geren",
                zid: e
            },
            success: function(a) {
                console.log(a);
                var e = a.data.fenl, i = a.data.hjlist;
                a.data.dianzan.dianzan, a.data.yuedu.yuedu, a.data.zhuanfa.zhuanfa;
                t.setData({
                    Wpost: e,
                    hjlist: i,
                    loghjlist: i
                });
            }
        }), wx.hideNavigationBarLoading();
    }
});