var t = getApp();

Page({
    data: {},
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("url") || "";
        console.log(e), this.setData({
            url: e,
            input: t.briefIntroduce
        }), wx.getStorageSync("log");
    },
    foot: function(e) {
        var a = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: t.globalData.dic + "doctor/team/update/" + a,
            data: {
                teamId: o,
                teamDesc: this.data.input || ""
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t), wx.navigateBack({
                    delta: 1
                });
            }
        });
    }
});