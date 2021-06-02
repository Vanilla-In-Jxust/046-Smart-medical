var t = getApp();

Page({
    data: {
        input: ""
    },
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value.replace(/\s+/g, "")
        });
    },
    foot: function(e) {
        var o = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/, a = wx.getStorageSync("log") || "", n = this;
        console.log(!o.test(n.data.input)), n.data.input.length <= 1 ? wx.showToast({
            title: "请正确输入姓名",
            icon: "none",
            duration: 2e3
        }) : o.test(n.data.input) ? wx.request({
            url: t.globalData.dic + "doctor/prove/update/" + a,
            data: {
                doctorName: n.data.input
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            success: function(t) {
                console.log(t.data), 200 == t.data.code ? wx.navigateBack({
                    delta: 1
                }) : 10020109 == t.data.code ? wx.showModal({
                    title: "提示",
                    content: "您已通过认证审核，不支持修改",
                    success: function(t) {
                        t.confirm ? (console.log("用户点击确定"), wx.switchTab({
                            url: "/pages/index/index"
                        })) : t.cancel && (console.log("用户点击取消"), wx.switchTab({
                            url: "/pages/index/index"
                        }));
                    }
                }) : wx.showModal({
                    title: "提示",
                    content: "网络异常，请稍后重试",
                    success: function(t) {
                        t.confirm ? (console.log("用户点击确定"), wx.switchTab({
                            url: "/pages/index/index"
                        })) : t.cancel && (console.log("用户点击取消"), wx.switchTab({
                            url: "/pages/index/index"
                        }));
                    }
                });
            }
        }) : (console.log(1111), wx.showToast({
            title: "请正确输入姓名",
            icon: "none",
            duration: 2e3
        }));
    }
});