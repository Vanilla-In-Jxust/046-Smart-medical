var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

(function(t) {
    t && t.__esModule;
})(require("../../../../utils/toot.js")), getApp();

Page({
    data: {
        curHdIndex: 0,
        serviceFlag: !0,
        doctor: (t = {
            jobType: 1,
            userIcon: "/assets/images/796.png",
            doctorName: "小明",
            nmDepartment: 123,
            nmHospital: 321
        }, (0, e.default)(t, "nmHospital", 456), (0, e.default)(t, "teamHeaderUrl", "/assets/images/796.png"), 
        (0, e.default)(t, "teamName", "小红"), (0, e.default)(t, "creater", {
            doctorName: "小强"
        }), t),
        cost: [ {
            icon: "/assets/shop_images/pho.png",
            nmInterroga: "图片咨询",
            servicePrice: 5e4,
            currentPrice: 1e4,
            cdInterroga: 1
        }, {
            icon: "/assets/shop_images/phone.png",
            nmInterroga: "电话咨询",
            servicePrice: 5e4,
            currentPrice: 1e4,
            cdInterroga: 2
        } ],
        relation: {
            freeState: 1
        },
        authStateBoo: !1
    },
    choose_type: function(t) {
        this.setData({
            curHdIndex: t.currentTarget.dataset.id
        });
    },
    goConsult: function(t) {
        var e = t.currentTarget.dataset.id, o = this.data.cost, a = this.data.curHdIndex;
        o.map(function(t) {
            if (t.cdInterroga == e) {
                var o = wx.setStorageSync("costs", o) || {};
                o = t, wx.setStorageSync("costs", o), console.log(t);
            }
        }), 0 == a ? wx.navigateTo({
            url: "/hyb_yl/userShopping/pages/submitConsultation/submitConsultation"
        }) : this.setData({
            modelBoo: !0
        });
    },
    onLoad: function(t) {
        console.log(t);
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.setData({
            signType: t.signType,
            signId: t.signId,
            doctorId: t.doctorId,
            token: wx.getStorageSync("logs")
        }), 290101 == t.cdinterroga ? this.setData({
            curHdIndex: 0
        }) : this.setData({
            curHdIndex: 1
        });
    },
    goProtocol: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/protocol/protocol"
        });
    },
    abolishBtn: function() {
        this.setData({
            modelBoo: !1
        });
    },
    signedBtn: function() {
        1 == this.data.authStateBoo ? (wx.navigateTo({
            url: "/hyb_yl/userShopping/pages/consultingPayments/consultingPayments"
        }), this.setData({
            modelBoo: !1
        })) : wx.showToast({
            title: "请同意惠邦肾服务协议",
            icon: "none",
            duration: 2e3
        });
    },
    checkboxChange: function(t) {
        var e = this.data.authStateBoo;
        this.setData({
            authStateBoo: !e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        wx.removeStorageSync("costData");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});