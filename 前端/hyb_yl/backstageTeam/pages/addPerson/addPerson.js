var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), o = getApp();

Page({
    data: (0, t.default)({
        curHdIndex: 0,
        isfull: !1,
        qyshow: !0,
        nzshow: !0,
        pxshow: !0,
        provinceList: [],
        cityList: [],
        codeData: [],
        hospitalList: [],
        provinceName: "",
        regionName: "区域",
        sectionName: "科室",
        hospitalName: "医院名称",
        cityIndex: null,
        provinceIndex: null,
        sectionIndex: null,
        hospitalIndex: null,
        moreBoo: !0,
        loadingBoo: !0,
        currentResult: 1,
        id: 1,
        jobType: 1,
        doctors: [],
        noDataBoo: !1,
        url: "patient/sign/doctor/submit/",
        keyWord: ""
    }, "doctors", [ {
        doctor: {
            doctorId: 1,
            userIcon: "/assets/images/head.png",
            doctorName: "小花",
            title: "主治医师",
            activeFlag: 1,
            jobType: 1,
            nmHospital: "山西大医院",
            nmDepartment: "骨科",
            patientCount: 4,
            askNum: 5,
            bgGoodAt: 6
        }
    }, {
        doctor: {
            doctorId: 1,
            userIcon: "/assets/images/head.png",
            doctorName: "小花",
            title: "主治医师",
            activeFlag: 0,
            jobType: 0,
            nmHospital: "山西大医院",
            nmDepartment: "骨科",
            patientCount: 4,
            askNum: 5,
            bgGoodAt: 6
        }
    } ]),
    tabFun: function(t) {
        e.default.tabFun(t, this);
    },
    select: function(t) {
        e.default.select(t, this);
    },
    selectPartsAll: function(t) {
        console.log(t);
        e.default.selectPartsAll(t, this);
    },
    selectParts: function(t) {
        console.log(t), e.default.selectParts(t, this);
    },
    selectCity: function(t) {
        e.default.selectCity(t, this);
    },
    selectSectionAll: function(t) {
        e.default.selectSectionAll(t, this);
    },
    selectSection: function(t) {
        e.default.selectSection(t, this);
    },
    selectHosptalAll: function(t) {
        e.default.selectHosptalAll(t, this);
    },
    selectHosptal: function(t) {
        e.default.selectHosptal(t, this);
    },
    changeInput: function(t) {
        var o = t.detail.value;
        console.log(o), this.setData({
            currentResult: 1,
            doctors: [],
            moreBoo: !0
        }), this.setData({
            keyWord: o
        }), e.default.searchSome(this);
    },
    getMore: function() {
        var t = this;
        t.data.loadingBoo && !t.data.moreBoo || t.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), e.default.searchSome(t));
    },
    onLoad: function(t) {
        var e = t.arr;
        console.log(e), this.setData({
            arr: e
        }), this.getAllzhuanjia();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getAllzhuanjia: function() {
        var t = this;
        o.util.request({
            url: "entry/wxapp/zhuanjia.alldoc",
            success: function(e) {
                console.log(e);
                var o = e.data;
                t.setData({
                    zhuanjia: o
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});