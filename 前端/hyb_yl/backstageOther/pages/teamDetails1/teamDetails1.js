var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        this.setData({
            input: t.teamName
        });
    },
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    foot: function(a) {
        var e = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: t.globalData.dic + "doctor/team/update/" + e,
            data: {
                teamId: o,
                teamName: this.data.input
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), 200 == t.data.code && wx.navigateBack({
                    delta: 1
                });
            }
        });
    }
});