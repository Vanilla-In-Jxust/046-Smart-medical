var t = getApp();

Page({
    data: {
        currentTab: 0,
        userbuystatus: 0
    },
    openvip: function() {
        0 == this.data.userbuystatus ? wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/vippay/vippay?type=0"
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/vippay/vippay?type=1"
        });
    },
    givevip: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/givevip/givevip"
        });
    },
    buyrecord: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/vipbuyrecord/vipbuyrecord"
        });
    },
    topNavChange: function(t) {
        var a = t.currentTarget.dataset.current, e = this.data.huiyuanlist[a].quanyi_content;
        this.setData({
            currentTab: a,
            nodes: e
        });
    },
    onLoad: function(a) {
        var e = this, n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), t.util.request({
            url: "entry/wxapp/huiyuan.setting",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                e.setData({
                    setting_goumai_thumb: t.data.setting_goumai_thumb,
                    setting_title: t.data.setting_title,
                    setting_content: t.data.setting_goumai_content,
                    userbuystatus: t.data.userbuystatus
                });
            }
        }), e.getAllhuiyuan();
    },
    getAllhuiyuan: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/huiyuan.allhuiyuan",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                if ("0" == a.data.currentTab) {
                    console.log(t.data[0]);
                    var e = t.data[0].quanyi_content;
                    a.setData({
                        nodes: e
                    });
                }
                a.setData({
                    huiyuanlist: t.data
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