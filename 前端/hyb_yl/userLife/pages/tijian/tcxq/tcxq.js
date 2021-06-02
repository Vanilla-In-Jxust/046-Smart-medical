var t = getApp();

Page({
    data: {
        ty_id: ""
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var n = t.tt_id;
        t.ty_id;
        this.setData({
            ty_id: t.ty_id
        });
        t.ty_id;
        this.gettijian_yiyuantaocanxq(n), this.gettijian_yiyuantaocan(n);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), setTimeout(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, 1e3);
        var t = data.tt_id;
        this.gettijian_yiyuantaocanxq(t), this.gettijian_yiyuantaocan(t);
    },
    gettijian_yiyuantaocanxq: function(a) {
        var n = this;
        console.log(t), t.util.request({
            url: "entry/wxapp/tijian_yiyuantaocanxq",
            data: {
                tt_id: a
            },
            cachetime: "30",
            success: function(t) {
                n.setData({
                    tijian_taocanxq: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    gettijian_yiyuantaocan: function(a) {
        var n = this;
        console.log(t), t.util.request({
            url: "entry/wxapp/tijian_yiyuantaocan",
            data: {
                tt_id: a
            },
            cachetime: "30",
            success: function(t) {
                n.setData({
                    tijian_taocan: t.data.data
                }), WxParse.wxParse("article", "html", t.data.data.tt_tongzhi, n, 5);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    yyClick: function(t) {
        var a = t.currentTarget.dataset.tt_id, n = t.currentTarget.dataset.ty_id;
        wx.navigateTo({
            url: "../yybianji/yybianji?tt_id=" + a + "&ty_id=" + n
        });
    }
});