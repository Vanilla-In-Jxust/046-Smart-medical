var e, t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../utils/toot.js")), a = getApp();

Page({
    data: (e = {
        myDcoBoo: !1,
        modelBoo: !1,
        backBoo: !1,
        authState: null,
        lookOverBoo: 1,
        url: "patient/sign/doctorInfo/get/",
        doctor: {
            userIcon: "/assets/images/796.png",
            doctorName: "小红",
            nmDepartment: "买药的",
            jobType: 1,
            nmHospital: "山西大医院",
            patientCount: 100,
            askNum: 200,
            bgGoodAt: [ "骨科", "牙科", "大脑" ],
            briefIntroduce: "专业治病20年"
        },
        service: [ {
            cdInterroga: "290101",
            currentPrice: 5e3,
            servicePrice: 3e3
        }, {
            cdInterroga: "290102",
            currentPrice: 5e3,
            servicePrice: 3e3
        }, {
            cdInterroga: "290103",
            currentPrice: 5e3,
            servicePrice: 3e3
        }, {
            cdInterroga: "290104",
            currentPrice: 5e3,
            servicePrice: 3e3
        } ]
    }, (0, t.default)(e, "myDcoBoo", 123), (0, t.default)(e, "signState", 2), (0, t.default)(e, "service", [ {
        cdInterroga: 290101,
        currentPrice: 1e3,
        servicePrice: 2e3
    }, {
        cdInterroga: 290102,
        currentPrice: 1e3,
        servicePrice: 2e3
    }, {
        cdInterroga: 290103,
        currentPrice: 1e3,
        servicePrice: 2e3
    }, {
        cdInterroga: 290104,
        currentPrice: 1e3,
        servicePrice: 2e3
    } ]), (0, t.default)(e, "options", 0), (0, t.default)(e, "works", [ {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: ""
    }, {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: "50"
    }, {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: "10"
    }, {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: "80"
    }, {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: "50"
    }, {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: "10"
    }, {
        title: "说说怎么预防感冒",
        tiem: "50",
        money: "80"
    } ]), (0, t.default)(e, "servicePackage", [ {
        title: "手术快约",
        state: 0
    }, {
        title: "手术快约",
        state: 1
    }, {
        title: "手术快约",
        state: 0
    } ]), (0, t.default)(e, "specialService", [ {
        effect: 80,
        satisfied: 60,
        about: 200,
        title: "换骨头方案"
    }, {
        effect: 80,
        satisfied: 60,
        about: 200,
        title: "换骨头方案"
    }, {
        effect: 80,
        satisfied: 60,
        about: 200,
        title: "换骨头方案"
    }, {
        effect: 80,
        satisfied: 60,
        about: 200,
        title: "换骨头方案"
    }, {
        effect: 80,
        satisfied: 60,
        about: 200,
        title: "换骨头方案"
    } ]), e),
    relieveBtn: function(e) {
        var t = e.target.dataset.signid, n = this;
        this.setData({
            signId: t
        }), o.default.getReason(n), wx.request({
            url: a.globalData.patient + "patient/sign/getUnfinishedOrder",
            data: {
                token: n.data.token,
                doctorId: n.data.doctorId
            },
            success: function(e) {
                if (200 == e.data.code) {
                    if (console.log(e), e.data.data) return void wx.showModal({
                        title: "请先结束未完成咨询！",
                        showCancel: !1,
                        confirmColor: "#3b4ca9",
                        confirmText: "取消",
                        success: function(e) {
                            e.confirm || e.cancel;
                        }
                    });
                    n.setData({
                        ReasonFlag: !0
                    });
                }
            }
        });
    },
    selectBtn: function() {
        if (0 != this.data.doctor.activeFlag) this.setData({
            modelBoo: !0
        }); else {
            var e = this.data.doctor.stopMedNotify || "";
            wx.showModal({
                title: "停诊中",
                content: e,
                showCancel: !1,
                confirmText: "取消",
                confirmColor: "#3b4ca9",
                success: function(e) {
                    e.confirm;
                }
            });
        }
    },
    abolishBtn: function() {
        this.setData({
            modelBoo: !1
        });
    },
    signedBtn: function() {
        o.default.signedBtn(this);
    },
    cancelBtn: function(e) {
        var t = e.target.dataset.signid;
        this.setData({
            signId: t
        }), o.default.getDoctor(this);
    },
    checkboxChange: function(e) {},
    onLoad: function(e) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), this.setData({
            token: wx.getStorageSync("logs"),
            doctorId: e.doctorId,
            jobType: e.jobType,
            currentPage: e.currentPage || "",
            lookOverBoo: e.lookOverBoo || 1,
            signType: e.signType || ""
        }), wx.showLoading({
            title: "加载中...",
            mask: !0
        }), o.default.doctorIntro(this), o.default.authState(this);
    },
    goInquiry: function() {
        var e = this;
        if (0 != e.data.doctor.activeFlag) wx.request({
            url: a.globalData.patient + "patient/sign/getCost/" + e.data.doctorId + "/" + e.data.relation.signId,
            success: function(t) {
                if (console.log(t), 10020112 != t.data.code) {
                    if (200 == t.data.code) {
                        if (console.log(e.data.cost), wx.setStorageSync("costData", t.data.data), 1 == e.data.currentPage) return void wx.navigateBack({
                            delta: 1
                        });
                        if (0 == e.data.dpMedOrder.status && e.data.dpMedOrder.doctorId == e.data.doctorId) return void wx.navigateTo({
                            url: "/hyb_yl/userCommunicate/pages/replied/replied?doctorId=" + e.data.dpMedOrder.doctorId + "&sessionId=" + e.data.dpMedOrder.orderId + "&patientId=" + e.data.dpMedOrder.patientId + "&signType=" + e.data.signType
                        });
                        wx.navigateTo({
                            url: "/hyb_yl/userCommunicate/pages/healthConsultant/healthConsultant?signId=" + e.data.relation.signId + "&doctorId=" + e.data.doctor.doctorId + "&signType=" + e.data.signType
                        });
                    }
                } else wx.showModal({
                    title: "抱歉团队已解散",
                    showCancel: !1,
                    confirmText: "我知道了",
                    confirmColor: "#3b4ca9",
                    success: function(e) {
                        e.confirm && wx.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                });
            }
        }); else {
            var t = e.data.doctor.stopMedNotify || "";
            wx.showModal({
                title: "停诊中",
                content: t,
                showCancel: !1,
                confirmText: "取消",
                confirmColor: "#3b4ca9"
            });
        }
    },
    onReady: function() {},
    onShow: function() {
        var e = wx.getStorageSync("myDoctor"), t = wx.getStorageSync("myNurse");
        1 == this.data.jobType ? this.setData({
            dpMedOrder: e.dpMedOrder || ""
        }) : this.setData({
            dpMedOrder: t.dpMedOrder || ""
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    confirmBtn: function(e) {
        this.data.reasonIndex && this.data.reasonText ? o.default.relieve(this) : wx.showToast({
            title: "请选择解约原因",
            icon: "none",
            duration: 2e3
        });
    },
    offBtn: function() {
        this.setData({
            ReasonFlag: !1
        });
    },
    chooseReason: function(e) {
        console.log(e), this.setData({
            reasonIndex: e.target.dataset.disreason,
            reasonText: e.target.dataset.text
        });
    },
    Select: function(e) {
        console.log(e);
        var t = Number(e.target.dataset.current);
        this.setData({
            options: t
        });
    }
});