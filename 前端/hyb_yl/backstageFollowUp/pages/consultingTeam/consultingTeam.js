var e = getApp();

Page({
    data: {
        currentResultOne: 0,
        currentResultTwo: 0,
        loadingBoo: !0,
        moreBooOne: !0,
        moreBooTwo: !0,
        resultListOne: [ {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 0,
            nonReadCount: 0
        }, {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 0,
            nonReadCount: 0
        }, {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 1,
            nonReadCount: 0
        }, {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 0,
            nonReadCount: 2
        } ],
        resultListTwo: [ {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 0,
            nonReadCount: 0
        }, {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 0,
            nonReadCount: 0
        }, {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 1,
            nonReadCount: 0
        }, {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小花",
                nmGender: "女",
                age: 30
            },
            medType: 1,
            teamMyUserId: 1,
            msgTxt: "你是谁",
            sessionDateBegin: "2018-10-22 16:11",
            status: 1,
            nonReadCount: 2
        } ],
        explanBooOne: !1,
        explanBooTwo: !1
    },
    clickNum: function(e) {
        console.log(e.target.dataset.num);
        this.setData({
            _num: e.target.dataset.num,
            explanBooOne: !1,
            explanBooTwo: !1,
            currentResultOne: 0,
            currentResultTwo: 0
        }), this.getPatientList(this);
    },
    reply: function(e) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/explanationReply/explanationReply"
        });
    },
    onLoad: function(e) {
        this.setData({
            _num: 0,
            teamName: e.teamName,
            teamId: e.teamId
        }), wx.setNavigationBarTitle({
            title: this.data.teamName
        });
    },
    onShow: function() {
        var e = this;
        e.setData({
            currentResultOne: 0,
            currentResultTwo: 0,
            explanBooTwo: !1,
            explanBooOne: !1
        }), e.setData({
            token: wx.getStorageSync("log")
        }), console.log(e.data._num), e.getPatientList(e);
    },
    getMore: function() {
        console.log("下一页"), this.getPatient(this);
    },
    getPatient: function(t) {
        if (console.log(t.data._num), 0 == t.data._num) var a = t.data.resultListOne, n = t.data.currentResultOne, o = t.data.moreBooOne; else if (1 == t.data._num) a = t.data.resultListTwo, 
        n = t.data.currentResultTwo, o = t.data.moreBooTwo;
        o && t.data.loadingBoo && (0 != n && this.setData({
            loadingBoo: !1
        }), console.log(111111), wx.request({
            url: e.globalData.doctor + "doctor/advicemanage/teamMedOrder/list",
            data: {
                token: t.data.token,
                currentResult: n,
                status: t.data._num,
                teamId: t.data.teamId
            },
            success: function(o) {
                if (console.log(o), 200 == o.data.code) {
                    if (t.setData({
                        loadingBoo: !0
                    }), wx.hideLoading(), o.data.data.result.length <= 0 && 0 != n) return t.setData({
                        loadingBoo: !0
                    }), 0 == t.data._num && t.setData({
                        moreBooOne: !1
                    }), 1 == t.data._num && t.setData({
                        moreBooTwo: !1
                    }), console.log(t.data.moreBooTwo), void console.log(t.data.moreBooOne);
                    o.data.data.result.forEach(function(t) {
                        t.sessionDateBegin = e.toDate(t.sessionDateBegin), a.push(t);
                    }), 0 == t.data._num ? (t.setData({
                        resultListOne: a,
                        currentResultOne: o.data.data.page.nextResult,
                        loadingBoo: !0
                    }), 0 == a.length && t.setData({
                        explanBooOne: !0
                    })) : 1 == t.data._num && (t.setData({
                        resultListTwo: a,
                        currentResultTwo: o.data.data.page.nextResult,
                        loadingBoo: !0
                    }), 0 == a.length && t.setData({
                        explanBooTwo: !0
                    }));
                }
            },
            fail: function() {
                wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        }));
    },
    getPatientList: function(t) {
        var a = [];
        if (0 == t.data._num) n = t.data.currentResultOne; else if (1 == t.data._num) var n = t.data.currentResultTwo;
        console.log(111111), wx.request({
            url: e.globalData.doctor + "doctor/advicemanage/teamMedOrder/list",
            data: {
                token: t.data.token,
                currentResult: n,
                status: t.data._num,
                teamId: t.data.teamId
            },
            success: function(n) {
                console.log(n), 200 == n.data.code && (wx.hideLoading(), n.data.data.result.length > 0 && n.data.data.result.forEach(function(t) {
                    t.sessionDateBegin = e.toDate(t.sessionDateBegin), a.push(t);
                }), 0 == t.data._num ? (t.setData({
                    resultListOne: a,
                    currentResultOne: n.data.data.page.nextResult
                }), 0 == a.length && t.setData({
                    explanBooOne: !0
                })) : 1 == t.data._num && (t.setData({
                    resultListTwo: a,
                    currentResultTwo: n.data.data.page.nextResult
                }), 0 == a.length && t.setData({
                    explanBooTwo: !0
                })));
            },
            fail: function() {
                wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});