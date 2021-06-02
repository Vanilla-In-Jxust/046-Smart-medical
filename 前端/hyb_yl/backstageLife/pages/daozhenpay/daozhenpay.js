Page({
    data: {
        argeen: !1
    },
    paybtn: function() {
        wx.showModal({
            title: "是否支付",
            success: function(n) {
                n.confirm ? wx.navigateTo({
                    url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=yes"
                }) : wx.navigateTo({
                    url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=no"
                });
            }
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});