var e = getApp();

Page({
    data: {
        buyId: 0,
        lingqu: 0,
        bigMask: !1,
        receiveid: 0
    },
    zengli: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/vippay/vippay?type=2"
        });
    },
    islingqu: function() {
        console.log(wx.getStorageSync("openid"), this.data.receiveid), e.util.request({
            url: "entry/wxapp/huiyuan.zengsong_lingqu",
            data: {
                openid: wx.getStorageSync("openid"),
                receiveid: this.data.receiveid
            },
            success: function(e) {
                "领取成功" == e.data ? (wx.showToast({
                    title: "领取成功"
                }), setTimeout(function() {
                    wx.reLaunch({
                        url: "/hyb_yl/tabBar/index/index"
                    });
                }, 1e3)) : wx.showToast({
                    title: "领取失败",
                    icon: "none"
                });
            }
        });
    },
    onLoad: function(t) {
        var n = this, i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), wx.getStorageSync("openid") ? n.setData({
            bigMask: !0
        }) : n.setData({
            bigMask: !1
        }), e.util.request({
            url: "entry/wxapp/huiyuan.setting",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                n.setData({
                    setting_zengsong_thumb: e.data.setting_zengsong_thumb,
                    setting_title: e.data.setting_title,
                    setting_content: e.data.setting_zengsong_content
                });
            }
        }), null != t.receiveid && e.util.request({
            url: "entry/wxapp/huiyuan.zengsong_lingquinfo",
            data: {
                receiveid: t.receiveid
            },
            success: function(e) {
                n.setData({
                    lingqu: 1,
                    receiveid: t.receiveid,
                    zhufu: e.data.s_content
                });
            }
        });
    },
    zhufuyu: function(e) {
        this.setData({
            zhufu: e.detail.value
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.util.request({
            url: "entry/wxapp/huiyuan.zengsong_give",
            data: {
                openid: wx.getStorageSync("openid"),
                buyId: this.data.buyId,
                zhufu: this.data.zhufu
            }
        }), {
            title: "会员赠送",
            path: "/hyb_yl/backstageServices/pages/givevip/givevip?receiveid=" + this.data.buyId,
            success: function(e) {
                console.log(e, "转发成功");
            },
            fail: function(e) {
                console.log(e, "转发失败");
            }
        };
    }
});