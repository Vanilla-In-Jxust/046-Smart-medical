var t = getApp();

Page({
    data: {},
    getText: function(t) {
        this.setData({
            text: t.detail.value
        });
    },
    save: function() {
        var e = this, o = e.data.text;
        wx.getStorageSync("log"), 0 != o.replace(/(^\s*)|(\s*$)/g, "").length ? wx.request({
            url: t.globalData.dic + "doctor/reply/update",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: e.data.id,
                templateContent: o,
                templateType: 1,
                sort: e.data.sort
            },
            success: function(t) {
                console.log(t), 200 == t.data.code && wx.navigateBack({
                    delta: 1
                });
            }
        }) : wx.showToast({
            title: "请输入内容",
            icon: "none",
            duration: 2e3
        });
    },
    onLoad: function(e) {
        console.log(2222);
        var o = this;
        this.setData({
            id: e.id,
            sort: e.sort
        }), wx.request({
            url: t.globalData.dic + "doctor/reply/getuser/" + this.data.id,
            success: function(t) {
                console.log(t), 200 == t.data.code && o.setData({
                    text: t.data.data.templateContent
                });
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