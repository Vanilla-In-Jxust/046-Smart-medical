Page({
    data: {
        argeen: !1
    },
    gosign: function() {
        var o = this.data.sid, a = this.data.key, n = this.data.name;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/hospital/hospital?sid=" + o + "&key=" + a + "&name=" + n
        });
    },
    radioChange: function() {
        console.log("pppp"), this.setData({
            argeen: !this.data.argeen
        });
    },
    onLoad: function(o) {
        var a = o.sid, n = o.key, t = o.name;
        wx.setNavigationBarTitle({
            title: t
        }), this.setData({
            sid: a,
            key: n,
            name: t
        }), wx.createCanvasContext("myQrcode");
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
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