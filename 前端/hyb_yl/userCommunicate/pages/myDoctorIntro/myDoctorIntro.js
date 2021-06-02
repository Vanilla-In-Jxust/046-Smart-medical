var e, t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../utils/toot.js"));

getApp();

Page({
    data: (e = {
        modelBoo: !1,
        backBoo: !1,
        authState: null,
        lookOverBoo: 1,
        url: "patient/sign/doctorInfo/get/",
        doctor: {
            userIcon: "/assets/images/796.png",
            doctorName: "小红",
            nmDepartment: "输液的",
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
        } ],
        relation: {
            signState: 1,
            signId: 0
        },
        reasonList: [ "技术菜", "收费高", "不回信息" ]
    }, (0, t.default)(e, "service", [ {
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
        var t = e.target.dataset.signid;
        this.setData({
            signId: t
        }), this.setData({
            ReasonFlag: !0
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
    checkboxChange: function(e) {
        o.default.authorized(this, e);
    },
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
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/replied/replied"
        });
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