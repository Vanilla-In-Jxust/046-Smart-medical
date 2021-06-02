var t = getApp();

Page({
    data: {},
    newclick: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/newbank/newbank"
        });
    },
    onLoad: function(t) {},
    click: function(a) {
        console.log(a.currentTarget.dataset.id);
        var o = wx.getStorageSync("log") || "";
        wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/setDefault",
            data: {
                token: o,
                bankId: a.currentTarget.dataset.id
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data.data), 200 == t.data.code && wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    onclick: function(a) {
        var o = this, e = wx.getStorageSync("log") || "";
        wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/myCardList",
            data: {
                token: e
            },
            success: function(t) {
                console.log(t.data.data), o.setData({
                    arr: t.data.data
                });
            }
        });
    },
    onShow: function() {
        this.onclick();
    },
    bindTouchStart: function(t) {
        this.startTime = t.timeStamp;
    },
    bindTouchEnd: function(t) {
        this.endTime = t.timeStamp;
    },
    longTap: function(a) {
        console.log("长按删除"), console.log(a.currentTarget.dataset.id);
        var o = this, e = wx.getStorageSync("log") || "";
        wx.showModal({
            title: "提示",
            content: "确认删除吗",
            success: function(n) {
                n.confirm ? (console.log("用户点击确定"), wx.request({
                    url: t.globalData.dic + "doctor/withdraw/bank/delete",
                    data: {
                        token: e,
                        bankId: a.currentTarget.dataset.id
                    },
                    success: function(t) {
                        console.log(t.data.data), 200 == t.data.code && o.onclick();
                    }
                })) : n.cancel && console.log("用户点击取消");
            }
        });
    }
});