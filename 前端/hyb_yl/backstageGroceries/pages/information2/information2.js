var e, t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page({
    data: (e = {
        doctor: {
            doctorName: "小花",
            nmDepartment: "骨科",
            jobType: 1,
            nmHospital: "山西大医院",
            patientCount: 100,
            askNum: 10,
            bgGoodAt: [ "脚气", "骨科" ],
            briefIntroduce: "专业骨科20年",
            userIcon: "/assets/images/796.png"
        },
        myDoctor: "",
        myNurse: "",
        myTeam: "",
        lookOverBoo: 0,
        relation: {
            signState: 2
        },
        confirmFlag: 0,
        reasonList: [ "技术菜", "收费高", "不回信息" ],
        arr: [ {
            img: "/assets/images/xiong1.png",
            name: "小花",
            title: "主治医师",
            department: "骨科",
            number: 20,
            evaluate: 2.1,
            good: "接骨,按摩"
        }, {
            img: "/assets/images/xiong1.png",
            name: "小花",
            title: "主治医师",
            department: "骨科",
            number: 20,
            evaluate: 2.1,
            good: "接骨,按摩"
        }, {
            img: "/assets/images/xiong1.png",
            name: "小花",
            title: "主治医师",
            department: "骨科",
            number: 20,
            evaluate: 2.1,
            good: "接骨,按摩"
        }, {
            img: "/assets/images/xiong1.png",
            name: "小花",
            title: "主治医师",
            department: "骨科",
            number: 20,
            evaluate: 2.1,
            good: "接骨,按摩"
        }, {
            img: "/assets/images/xiong1.png",
            name: "小花",
            title: "主治医师",
            department: "骨科",
            number: 20,
            evaluate: 2.1,
            good: "接骨,按摩"
        }, {
            img: "/assets/images/xiong1.png",
            name: "小花",
            title: "主治医师",
            department: "骨科",
            number: 20,
            evaluate: 2.1,
            good: "接骨,按摩"
        } ],
        service: [ (0, t.default)({
            cdInterroga: 290101,
            saleMoney: 1,
            currentPrice: 1e3,
            servicePrice: 2e3
        }, "saleMoney", 1), (0, t.default)({
            cdInterroga: 290102,
            saleMoney: 1,
            currentPrice: 1e3,
            servicePrice: 2e3
        }, "saleMoney", 1) ],
        servicePackage: [ {
            title: "手术快约",
            state: 0,
            id: 1
        }, {
            title: "专家坐诊",
            state: 1,
            id: 2
        }, {
            title: "点名会诊",
            state: 0,
            id: 3
        } ],
        page: 0,
        prenumber: 12,
        loadingBoo: !0,
        moreBoo: !0,
        currentPlay: -1,
        saidList: [ {
            nameUrl: "/assets/images/head.png",
            saidId: 1,
            name: "小花",
            datTime: "2018-10-23",
            patientCount: 3,
            monentIdea: "人是怎么感冒的",
            contentType: 1,
            playFlag: 1,
            duration: 1,
            contentImg: [ "/assets/images/head.png", "/assets/images/head.png" ],
            content: 1,
            title: "病毒引起的",
            coverImg: "/assets/images/head.png",
            eduType: 2
        }, {
            nameUrl: "/assets/images/head.png",
            saidId: 1,
            name: "小花",
            datTime: "2018-10-23",
            patientCount: 3,
            monentIdea: "人是怎么感冒的",
            contentType: 1,
            playFlag: 1,
            duration: 1,
            contentImg: [ "/assets/images/head.png", "/assets/images/head.png" ],
            content: 1,
            title: "病毒引起的",
            coverImg: "/assets/images/head.png",
            eduType: 2
        }, {
            nameUrl: "/assets/images/head.png",
            saidId: 1,
            name: "小花",
            datTime: "2018-10-23",
            patientCount: 3,
            monentIdea: "人是怎么感冒的",
            contentType: 1,
            playFlag: 1,
            duration: 1,
            contentImg: [ "/assets/images/head.png", "/assets/images/head.png" ],
            content: 1,
            title: "病毒引起的",
            coverImg: "/assets/images/head.png",
            eduType: 2
        } ],
        choices: 1,
        myDcoBoo: !0
    }, (0, t.default)(e, "lookOverBoo", 0), (0, t.default)(e, "backBoo", !1), (0, t.default)(e, "modelBoo", !1), 
    e),
    choice: function(e) {
        var t = e.target.id;
        this.setData({
            choices: t
        });
    },
    record: function(e) {
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/particulars/particulars"
        });
    },
    previewImage: function(e) {
        wx.previewImage({
            current: "/assets/images/head.png",
            urls: "/assets/images/head.png"
        });
    },
    special: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.state, o = e.currentTarget.dataset.index, n = this.data.servicePackage[o].title;
        0 == a ? wx.showToast({
            title: n + "现在不约",
            icon: "none",
            duration: 2e3
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageGroceries/pages/choosePerson/choosePerson?id=" + t
        });
    },
    selectBtn: function() {
        if (0 != this.data.doctor.activeFlag) {
            var e = this;
            if (1 == e.data.personalFlag) if (e.data.personalArr.gender && e.data.personalArr.name && e.data.personalArr.phone) {
                if (0 != e.data.myDoctor.length) return console.log(111), void e.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与其他健康顾问签约，不能再签约此健康顾问，需要与当前健康顾问解约后，才能与此健康顾问签约。",
                    targetDoctor: e.data.myDoctor
                });
                if (0 != e.data.myNurse.length) return console.log(2222), void e.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与护理顾问签约，不能再签约健康顾问，需要与护理顾问解约后，才能与健康顾问签约。",
                    targetDoctor: e.data.myNurse
                });
                if (0 != e.data.myTeam.length) return console.log(3333), void e.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与团队顾问签约，不能再签约健康顾问，需要与团队顾问解约后，才能与健康顾问签约。",
                    targetDoctor: e.data.myTeam
                });
                this.setData({
                    modelBoo: !0
                });
            } else wx.showModal({
                title: "个人信息未完善",
                cancelText: "以后再说",
                confirmText: "去完善",
                confirmColor: "#3b4ca9",
                success: function(e) {
                    e.confirm && wx.navigateTo({
                        url: "/hyb_yl/userShopping/pages/index1/index1"
                    });
                }
            }); else {
                if (0 != e.data.myDoctor.length) return console.log(111), void e.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与其他健康顾问签约，不能再签约此健康顾问，需要与当前健康顾问解约后，才能与此健康顾问签约。",
                    targetDoctor: e.data.myDoctor
                });
                if (0 != e.data.myNurse.length) return console.log(2222), void e.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与护理顾问签约，不能再签约健康顾问，需要与护理顾问解约后，才能与健康顾问签约。",
                    targetDoctor: e.data.myNurse
                });
                if (0 != e.data.myTeam.length) return console.log(3333), void e.setData({
                    yetFlag: !0,
                    yetMsg: "当前您已与团队顾问签约，不能再签约健康顾问，需要与团队顾问解约后，才能与健康顾问签约。",
                    targetDoctor: e.data.myTeam
                });
                this.setData({
                    modelBoo: !0
                });
            }
        } else {
            var t = this.data.doctor.stopMedNotify || "";
            wx.showModal({
                title: "停诊中",
                content: t,
                showCancel: !1,
                confirmText: "取消",
                confirmColor: "#3b4ca9",
                success: function(e) {
                    e.confirm;
                }
            });
        }
    },
    cancelBtn: function(e) {
        var t = e.target.dataset.signid, a = this;
        a.setData({
            signId: t
        }), 1 == a.data.confirmFlag ? wx.showModal({
            title: "团队已同意，不能取消申请",
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#3b4ca9",
            success: function() {
                a.setData({});
            }
        }) : (wx.showModal({
            title: "确定要取消申请吗？",
            confirmColor: "#3b4ca9"
        }), a.setData({
            backBoo: !0,
            confirmFlag: 0,
            lookOverBoo: 2,
            "relation.signState": 2
        }));
    },
    abolishBtn: function() {
        this.setData({
            modelBoo: !1
        });
    },
    signedBtn: function() {
        var e = this;
        e.setData({
            myDoctor: 1,
            modelBoo: !1,
            "relation.signState": 0,
            backBoo: !0,
            lookOverBoo: 3
        }), console.log(e.data.relation.signState), console.log(e.data.backBoo), setTimeout(function() {
            e.setData({
                confirmFlag: 1,
                myDcoBoo: !1,
                lookOverBoo: 1,
                "relation.signState": 1
            });
        }, 3e3);
    },
    relieveBtn: function() {
        this.setData({
            ReasonFlag: !0
        });
    },
    goInquiry: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.service[t].cdInterroga;
        console.log(t), wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/healthConsultant/healthConsultant?cdinterroga=" + a
        });
    },
    yetBtn: function() {
        this.setData({
            yetFlag: !1
        });
    },
    chooseReason: function(e) {
        console.log(e), this.setData({
            reasonIndex: e.target.dataset.disreason,
            reasonText: e.target.dataset.text
        });
    },
    offBtn: function() {
        this.setData({
            ReasonFlag: !1
        });
    },
    onLoad: function(e) {
        var t = e.t_id;
        this.setData({
            t_id: t
        });
    },
    onReady: function() {
        this.getDocteam();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getDocteam: function() {
        var e = this, t = e.data.t_id;
        a.util.request({
            url: "entry/wxapp/Seledocteam",
            data: {
                t_id: t,
                op: "post"
            },
            success: function(t) {
                console.log(t), e.setData({
                    teaminfo: t.data.data
                });
            }
        });
    }
});