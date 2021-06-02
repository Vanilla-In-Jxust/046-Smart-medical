var a = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var e = wx.getStorageSync("wznameModifier") || "";
        this.setData({
            wznameModifier: e
        });
    },
    input: function(a) {
        console.log(a.detail.value), this.setData({
            wznameModifier: a.detail.value
        });
    },
    onClock: function(e) {
        var t = wx.getStorageSync("log") || "", o = wx.getStorageSync("patientid") || "", n = wx.getStorageSync("teamId") || "";
        wx.request({
            url: a.globalData.dic + "doctor/team/manage/remark/patient",
            data: {
                token: t,
                teamId: n,
                patientId: o,
                remarkName: this.data.wznameModifier
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log(a.data), wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    onShow: function() {}
});