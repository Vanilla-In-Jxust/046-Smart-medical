!function(o) {
    o && o.__esModule;
}(require("../../../../utils/toot.js"));

getApp();

Page({
    data: {
        myDcoBoo: !0,
        modelBoo: !1,
        backBoo: !1,
        authState: null,
        id: 1,
        url: "patient/sign/doctorInfo/get/",
        doctor: {
            userIcon: "/assets/images/795.png",
            doctorName: "小明",
            nmDepartment: "骨科",
            jobType: 1,
            nmHospital: "山西大医院",
            askNum: 100,
            patientCount: 200,
            bgGoodAt: [ "接骨", "接骨", "接骨" ],
            briefIntroduce: "专业接骨30年"
        }
    },
    onLoad: function(o) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});