var t = getApp();

Page({
    data: {
        groups: [ {
            groupName: 1
        }, {
            groupName: 1
        }, {
            groupName: 1
        } ]
    },
    onLoad: function(t) {},
    click: function(a) {
        var e = wx.getStorageSync("log") || "";
        console.log(a.target.dataset.id);
        var o = wx.getStorageSync("patientid") || "", n = wx.getStorageSync("teamId") || "";
        wx.request({
            url: t.globalData.dic + "doctor/team/manage/group/movePatient",
            data: {
                token: e,
                patientId: o,
                teamId: n,
                groupId: a.target.dataset.id || ""
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    onShow: function() {},
    onClock: function(a) {
        var e = this, o = wx.getStorageSync("log") || "", n = wx.getStorageSync("teamId") || "";
        wx.request({
            url: t.globalData.dic + "doctor/team/manage/list/patient/" + o + "/" + n,
            success: function(t) {
                console.log(t.data.data), e.setData({
                    groups: t.data.data.groups
                });
            }
        });
    }
});