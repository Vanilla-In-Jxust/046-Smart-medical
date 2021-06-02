var o = getApp();

Page({
    data: {
        coupontab: [ "未使用", "已使用", "已过期" ],
        couindex: 0,
        avai: !1
    },
    coupontabs: function(o) {
        this.setData({
            couindex: o.currentTarget.dataset.dex
        }), this.getUsercoupon();
    },
    couinp: function(o) {
        var t = o.detail.value;
        console.log(t), t > 0 ? this.setData({
            avai: !0,
            duihuanma: t
        }) : this.setData({
            avai: !1,
            duihuanma: t
        });
    },
    exchange: function() {
        var t = this;
        console.log(t.data.duihuanma), o.util.request({
            url: "entry/wxapp/coupon.exchange",
            data: {
                openid: wx.getStorageSync("openid"),
                duihuanma: t.data.duihuanma
            },
            success: function(o) {
                console.log(o), "兑换成功!" != o.data ? wx.showToast({
                    title: o.data,
                    icon: "none"
                }) : (wx.showToast({
                    title: o.data
                }), setTimeout(function() {
                    t.getUsercoupon();
                }, 1e3));
            }
        });
    },
    onLoad: function(o) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), this.getUsercoupon();
    },
    getUsercoupon: function() {
        var t = this, n = t.data.couindex;
        o.util.request({
            url: "entry/wxapp/coupon.userlist",
            data: {
                openid: wx.getStorageSync("openid"),
                couindex: n
            },
            success: function(o) {
                console.log(o.data), t.setData({
                    list: o.data
                });
            }
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