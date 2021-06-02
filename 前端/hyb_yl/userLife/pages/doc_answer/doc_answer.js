Page({
    data: {},
    onLoad: function(o) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    subClick: function(o) {
        console.log(o);
        var n = o.detail.value.answer;
        wx.showLoading({
            title: ""
        }), setTimeout(function() {
            wx.hideLoading(), wx.showToast({
                title: "保存成功",
                success: function() {
                    wx.redirectTo({
                        url: "/hyb_yl/userLife/pages/doc_answer_detail/doc_answer_detail?con=" + n
                    });
                }
            });
        }, 500);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});