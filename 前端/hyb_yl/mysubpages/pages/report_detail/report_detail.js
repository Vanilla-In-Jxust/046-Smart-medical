Page({
    data: {
        states: 0,
        argeen: !1
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
        });
    },
    paybtn: function() {
        wx.showModal({
            title: "是否支付",
            success: function(n) {
                n.confirm ? wx.navigateTo({
                    url: "../zhifuend/zhifuend?txt=yes"
                }) : wx.navigateTo({
                    url: "../zhifuend/zhifuend?txt=no"
                });
            }
        });
    },
    onLoad: function(n) {
        var o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
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