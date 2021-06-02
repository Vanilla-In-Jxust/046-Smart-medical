var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var i = t.ty_id;
        this.getTijian_yiyuanxq(i), this.getTijian_yiyuantaocanlist(i);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), setTimeout(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, 1e3);
        var t = data.ty_id;
        this.getTijian_yiyuanxq(t);
    },
    getTijian_yiyuanxq: function(a) {
        var i = this;
        console.log(t), t.util.request({
            url: "entry/wxapp/Tijian_yiyuanxq",
            data: {
                ty_id: a
            },
            cachetime: "30",
            success: function(t) {
                i.setData({
                    tijian_yiyuanxq: t.data.data
                }), wx.setNavigationBarTitle({
                    title: i.data.tijian_yiyuanxq.ty_name
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getTijian_yiyuantaocanlist: function(a) {
        var i = this;
        console.log(t), t.util.request({
            url: "entry/wxapp/Tijian_yiyuantaocanlist",
            data: {
                ty_id: a
            },
            cachetime: "30",
            success: function(t) {
                i.setData({
                    tijian_yiyuantaocanxq: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    tjxqClick: function(t) {
        var a = t.currentTarget.dataset.tt_id, i = t.currentTarget.dataset.ty_id;
        wx.navigateTo({
            url: "../tcxq/tcxq?tt_id=" + a + "&ty_id=" + i
        });
    },
    mapClick: function() {
        this.openMap();
    },
    openMap: function(t) {
        wx.openLocation({
            latitude: parseFloat(this.data.tijian_yiyuanxq.latitude),
            longitude: parseFloat(this.data.tijian_yiyuanxq.longitude),
            address: this.data.tijian_yiyuanxq.ty_address,
            scale: 22
        });
    }
});