(function(a) {
    a && a.__esModule;
})(require("../../../../utils/toot.js")), getApp();

Page({
    data: {
        Height: "",
        show: !1,
        show1: !0,
        Arr: {
            name: "小花",
            age: 30,
            nmBloodType: 1,
            height: 160,
            weight: 100,
            nephrosis: "无",
            ckdSubsection: 1,
            hemodialysisDay: "2018-10-24",
            bellyDialysisDay: "2018-10-24"
        },
        arr: {
            nmDietSitu: "胃口好",
            nmSleepSitu: "好",
            nmMicturitionSitu: 1,
            nocturiaNum: 1
        },
        flagBleed: 1,
        flagCardiovascular: 1,
        flagHighBlood: 1,
        flagHepatitis: 1,
        flagCerebrovascular: 1,
        flagFamily: 1,
        flagDiabetes: 1,
        flagMenstrual: 1,
        flagAnaphylaxis: 1,
        flagOther: 1,
        genderImg: "/assets/images/fuWu.png"
    },
    show: function(a) {
        this.setData({
            show: !1,
            show1: !0
        });
    },
    jia: function(a) {
        this.setData({
            show: !0,
            show1: !1
        });
    },
    onLoad: function(a) {},
    onShow: function() {
        var a = "";
        wx.getSystemInfo({
            success: function(t) {
                a = t.windowHeight;
            }
        }), this.setData({
            Height: a
        });
    },
    personalDetails: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/personalDetails/personalDetails"
        });
    },
    basic: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/basic/basic?teamId=" + this.data.teamId
        });
    }
});