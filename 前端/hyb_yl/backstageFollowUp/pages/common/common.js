var t = getApp();

Page({
    data: {
        currentIndex: 1,
        prenumberSelf: 40,
        prenumber: 40,
        selfPage: 0,
        defaulPage: 0,
        loadingBoo: !0,
        moreBooOne: !0,
        moreBooTwo: !0,
        selfFlag: !0,
        defaulList: [ {
            templateContent: 123
        }, {
            templateContent: 123
        }, {
            templateContent: 123
        }, {
            templateContent: 123
        } ],
        selfList: [ {
            id: 1,
            templateContent: 123,
            sort: 321
        }, {
            id: 1,
            templateContent: 123,
            sort: 321
        }, {
            id: 1,
            templateContent: 123,
            sort: 321
        } ]
    },
    list: function(t) {
        console.log(t);
        var e = this, a = t.currentTarget.dataset.index;
        this.setData({
            currentIndex: a
        }), 1 == a ? e.data.selfList.length <= 0 && (e.setData({
            selfFlag: !0,
            moreBooOne: !0,
            selfPage: 0
        }), e.getSelf(e)) : e.data.defaulList.length <= 0 && (e.setData({
            moreBooTwo: !0,
            defaulPage: 0
        }), e.defaultDate(e));
    },
    delBtn: function(e) {
        console.log(e);
        var a = this, o = e.currentTarget.dataset.id, n = e.currentTarget.dataset.index, l = a.data.selfList;
        wx.showModal({
            title: "确实删除吗",
            confirmColor: "#3b4ca9",
            success: function(e) {
                e.confirm && wx.request({
                    url: t.globalData.dic + "doctor/reply/delete/" + o,
                    success: function(t) {
                        console.log(t), 200 == t.data.code && (l.splice(n, 1), l.length <= 0 && a.setData({
                            selfFlag: !1,
                            maxSort: 1
                        }), a.setData({
                            selfList: l
                        }));
                    }
                });
            }
        });
    },
    goUp: function(e) {
        console.log(e);
        var a = this, o = a.data.selfList, n = e.currentTarget.dataset.index;
        0 != n && (wx.showLoading({
            title: "",
            mask: !0
        }), wx.request({
            url: t.globalData.dic + "doctor/reply/update",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: o[n].id,
                templateContent: o[n].templateContent,
                templateType: 1,
                sort: o[n - 1].sort
            },
            success: function(e) {
                console.log(e), 200 == e.data.code && wx.request({
                    url: t.globalData.dic + "doctor/reply/update",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        id: o[n - 1].id,
                        templateContent: o[n - 1].templateContent,
                        templateType: 1,
                        sort: o[n].sort
                    },
                    success: function(t) {
                        if (console.log(t), 200 == t.data.code) {
                            wx.hideLoading();
                            var e = o[n].sort, l = o[n - 1].sort, s = o[n];
                            o[n] = o[n - 1], o[n - 1] = s, o[n].sort = e, o[n - 1].sort = l, a.setData({
                                selfList: o
                            }), console.log(a.data.selfList);
                        }
                    }
                });
            }
        }));
    },
    goDown: function(e) {
        console.log(e);
        var a = this, o = a.data.selfList, n = e.currentTarget.dataset.index;
        n != o.length - 1 && (wx.showLoading({
            title: "",
            mask: !0
        }), wx.request({
            url: t.globalData.dic + "doctor/reply/update",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: o[n].id,
                templateContent: o[n].templateContent,
                templateType: 1,
                sort: o[n + 1].sort
            },
            success: function(e) {
                console.log(e), 200 == e.data.code && wx.request({
                    url: t.globalData.dic + "doctor/reply/update",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        id: o[n + 1].id,
                        templateContent: o[n + 1].templateContent,
                        templateType: 1,
                        sort: o[n].sort
                    },
                    success: function(t) {
                        if (console.log(t), 200 == t.data.code) {
                            wx.hideLoading();
                            var e = o[n].sort, l = o[n + 1].sort, s = o[n];
                            o[n] = o[n + 1], o[n + 1] = s, o[n].sort = e, o[n + 1].sort = l, a.setData({
                                selfList: o
                            }), console.log(a.data.selfList);
                        }
                    }
                });
            }
        }));
    },
    getContent: function(t) {
        console.log(t), wx.setStorageSync("contentText", t.currentTarget.dataset.text), 
        wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(t) {
        this.setData({
            token: wx.getStorageSync("log")
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        t.setData({
            selfPage: 0,
            defaulPage: 0,
            moreBooOne: !0,
            moreBooTwo: !0,
            selfFlag: !0
        }), t.getSelf(t);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getSelf: function(e) {
        var a = e.data.selfPage, o = e.data.selfList;
        wx.request({
            url: t.globalData.dic + "doctor/reply/listuser/" + e.data.token + "/" + a + "/" + e.data.prenumberSelf,
            success: function(t) {
                if (console.log(t), 200 == t.data.code) {
                    if (wx.hideLoading(), t.data.data.listUserReply.length <= 0 && a > 0) return;
                    if (0 == a) return t.data.data.listUserReply.length <= 0 && e.setData({
                        selfFlag: !1
                    }), void e.setData({
                        selfList: t.data.data.listUserReply,
                        selfPage: a,
                        maxSort: t.data.data.maxSort
                    });
                    a++, t.data.data.listUserReply.length > 0 && t.data.data.listUserReply.forEach(function(t) {
                        o.push(t);
                    }), e.setData({
                        selfList: o,
                        selfPage: a,
                        maxSort: t.data.data.maxSort
                    });
                }
            }
        });
    },
    defaultDate: function(e) {
        var a = e.data.defaulList, o = e.data.prenumber;
        wx.request({
            url: t.globalData.dic + "doctor/reply/listsystem/" + e.data.defaulPage + "/" + o,
            success: function(t) {
                if (console.log(t), 200 == t.data.code) {
                    if (wx.hideLoading(), t.data.data.length <= 0 && o > 0) return;
                    o++, t.data.data.length > 0 && t.data.data.forEach(function(t) {
                        a.push(t);
                    }), e.setData({
                        defaulList: a,
                        prenumber: o
                    });
                }
            }
        });
    }
});