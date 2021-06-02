var n = getApp();

Page({
    data: {},
    xufangbtn: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/chufangjianyi/chufangjianyi?xufang=xufang"
        });
    },
    look_detail: function(a) {
        var t = a.currentTarget.dataset.id, o = a.currentTarget.dataset.orderstatus;
        n.util.request({
            url: "entry/wxapp/user.cfimg",
            data: {
                id: t
            },
            success: function(n) {
                console.log(n), wx.navigateTo({
                    url: "/hyb_yl/backstageServices/pages/chufangjianyi/chufangjianyi?id=" + t + "&orderStatus=" + o + "&xufang=1"
                });
            }
        });
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
        var o = this;
        n.util.request({
            url: "entry/wxapp/user.mycflist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(n) {
                console.log(n), o.setData({
                    infos: n.data
                });
            },
            fail: function(n) {
                console.log(n);
            }
        }), o.setData({
            bgc: t
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