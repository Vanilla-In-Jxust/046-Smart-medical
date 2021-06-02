var t = getApp();

Page({
    data: {},
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    grabble: function() {
        var a = this;
        if ("" == a.data.input) wx.showToast({
            title: "请输入医生名字",
            icon: "none",
            duration: 1e3
        }); else {
            var o = wx.getStorageSync("log") || "";
            wx.request({
                url: t.globalData.dic + "doctor/manage/searchMyPatient",
                data: {
                    token: o,
                    keyWord: wx.getStorageSync("input") || ""
                },
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    console.log(t.data.data), 0 == t.data.data.length ? wx.showToast({
                        title: "查无此人",
                        icon: "none",
                        duration: 2e3
                    }) : a.setData({
                        arr: t.data.data
                    });
                }
            });
        }
    },
    onLoad: function(a) {
        var o = this, n = a.hosid;
        t.util.request({
            url: "entry/wxapp/address",
            data: {
                op: "keshi",
                id: n
            },
            success: function(t) {
                console.log(t), o.setData({
                    keshi: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});