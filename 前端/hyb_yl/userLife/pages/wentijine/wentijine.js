var t = getApp();

Page({
    data: {},
    onsubmit: function(n) {
        var o = n.detail.value.z_tw_money, e = (wx.getStorageSync("openid"), this.data.id);
        t.util.request({
            url: "entry/wxapp/Questiommm",
            data: {
                id: e,
                z_tw_money: o
            },
            success: function(t) {
                wx.showToast({
                    title: "设置成功~",
                    icon: "none",
                    duration: 2e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                detail: "1"
                            });
                        }, 1e3);
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onLoad: function(t) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
        var o = t.zid;
        this.setData({
            id: o
        });
    },
    onReady: function() {
        this.getMymoneysite();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getMymoneysite: function() {
        var n = this, o = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Mymoneysite",
            data: {
                openid: o
            },
            success: function(t) {
                n.setData({
                    z_tw_money: t.data.data.z_tw_money
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});