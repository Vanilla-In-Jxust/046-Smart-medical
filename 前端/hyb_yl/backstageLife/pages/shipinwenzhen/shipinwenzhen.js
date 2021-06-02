var t = getApp();

Page({
    data: {
        xieyi: !1
    },
    xieyibtn: function() {
        this.setData({
            xieyi: !0
        });
    },
    closezhe: function() {
        this.setData({
            xieyi: !1
        });
    },
    nextpage: function() {
        var t = this.data.ser_key, e = this.data.tit;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/faxian/faxian?tit=" + e + "&pinyin=" + t
        });
    },
    urlpage1: function() {
        this.data.ser_key;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/estimate/estimate?key=" + this.data.ser_key
        });
    },
    onLoad: function(e) {
        var a = this, i = e.tit, n = e.ser_key, o = wx.getStorageSync("color"), s = e.id;
        wx.setNavigationBarTitle({
            title: i
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), a.setData({
            bgc: o,
            tit: i,
            ser_key: n,
            id: s
        }), t.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: n,
                id: s
            },
            success: function(t) {
                console.log(t, "222222222222222222"), a.setData({
                    detail: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getDetailser: function() {
        this.data.ser_key;
    }
});