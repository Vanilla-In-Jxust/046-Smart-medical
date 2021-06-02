var t = getApp();

Page({
    data: {
        list: [ 1, 2, 3, 4, 5 ]
    },
    onLoad: function(o) {
        this.data.token = wx.getStorageSync("log");
        var n = this;
        wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/toWithdrawDeposit",
            data: {
                token: this.data.token
            },
            success: function(t) {
                200 == t.data.code ? n.setData({
                    list: t.data.data.config.ruleDesc.split("|")
                }) : console.log(1);
            },
            fail: function() {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {}
});