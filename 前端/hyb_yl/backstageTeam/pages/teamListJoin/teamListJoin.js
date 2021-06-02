var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

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
        jobType: 3,
        doctors: [],
        noDataBoo: !1,
        url: "team/sign/search",
        keyWord: "",
        tablistIndex: 0,
        tabshow: !0,
        tabshow1: !1
    }, "doctors", []),
    tapFun1: function(t) {
        console.log(t.target.dataset.current), this.setData({
            tablistIndex: t.target.dataset.current
        }), 1 == t.target.dataset.current && this.setData({
            tabshow: !0,
            tabshow1: !1,
            currentResult: 1
        }), 0 == t.target.dataset.current && this.setData({
            tabshow: !1,
            tabshow1: !0,
            currentResult: 1
        }), this.searchSome(this);
    },
    scanCode: function() {
        console.log(1111), wx.scanCode({
            success: function(t) {
                console.log(t), "scanCode:ok" == t.errMsg && (console.log(t), wx.navigateTo({
                    url: "/hyb_yl/backstageTeam/pages/teamIntro/teamIntro?teamId=" + t.result
                }));
            }
        });
    },
    changeInput: function(t) {
        var e = t.detail.value;
        console.log(e), this.setData({
            currentResult: 1,
            doctors: [],
            moreBoo: !0
        }), this.setData({
            keyWord: e
        }), console.log(e), e.length || this.searchSome(this);
    },
    searchSomeOne: function() {
        this.setData({
            currentResult: 1,
            moreBoo: !0,
            loadingBoo: !0
        }), this.searchSome(this);
    },
    getMore: function() {
        var t = this;
        t.data.loadingBoo && !t.data.moreBoo || t.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), t.searchSome(t));
    },
    onLoad: function() {
        this.searchSome(this);
    },
    searchSome: function(t) {
        var a = this;
        t.setData({
            noDataBoo: !1
        }), t.data.regionName;
        var o = t.data.sectionName, s = t.data.hospitalName, n = (t.data.doctors, t.data.currentResult, 
        t.data.tablistIndex);
        "科室" != o && "所有科室" != o || (o = ""), "医院名称" != s && "所有医院" != s || (s = ""), "全国" != t.data.regionName && t.data.regionName, 
        e.util.request({
            url: "entry/wxapp/Yaoqing.allteam",
            data: {
                teamtype: n
            },
            success: function(t) {
                console.log(t), a.setData({
                    doctors: t.data
                });
            }
        });
    }
});