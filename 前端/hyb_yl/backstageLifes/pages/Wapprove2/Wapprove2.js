var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../utils/toot.js")), t = getApp();

Page({
    data: {
        input: ""
    },
    input: function(e) {
        console.log(e.detail.value);
        var t = e.detail.value.replace("x", "X");
        this.setData({
            input: t
        });
    },
    foot: function(a) {
        var o = wx.getStorageSync("log") || "", n = this.data.input.trim();
        e.default.scCard(n) && wx.request({
            url: t.globalData.dic + "doctor/prove/update/" + o,
            data: {
                identityCard: this.data.input
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log(e), 200 == e.data.code ? wx.navigateBack({
                    delta: 1
                }) : 10020109 == e.data.code ? wx.showModal({
                    title: "提示",
                    content: "您已通过认证审核，不支持修改",
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), wx.switchTab({
                            url: "/pages/index/index"
                        })) : e.cancel && (console.log("用户点击取消"), wx.switchTab({
                            url: "/pages/index/index"
                        }));
                    }
                }) : wx.showModal({
                    title: "提示",
                    content: "网络异常，请稍后重试",
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), wx.switchTab({
                            url: "/pages/index/index"
                        })) : e.cancel && (console.log("用户点击取消"), wx.switchTab({
                            url: "/pages/index/index"
                        }));
                    }
                });
            }
        });
    }
});