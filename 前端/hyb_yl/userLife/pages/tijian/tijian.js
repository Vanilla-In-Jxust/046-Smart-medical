var t = getApp();

Page({
    data: {
        bannerArr: {
            picLink: []
        }
    },
    goReport: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/report/report"
        });
    },
    goCardList: function() {
        wx.showToast({
            title: "卡密功能待开放",
            icon: "none"
        });
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: t.tit
        }), this.getBase(), this.getCatefenlei(), this.gettijianlist();
        var e = t.title;
        wx.setNavigationBarTitle({
            title: e
        });
        var a = wx.getStorageSync("city"), n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), this.setData({
            city: a
        });
    },
    goDetail: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.tid;
        wx.navigateTo({
            url: "detail/detail?tid=" + e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getCatefenlei: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/tijian.catefenlei",
            success: function(t) {
                console.log(t), e.setData({
                    catefenlei: t.data
                });
            }
        });
    },
    gettijianlist: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/tijian.listall",
            success: function(t) {
                console.log(t), e.setData({
                    packageList: t.data
                });
            }
        });
    },
    goHotSale: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/tijian/hot-sale/hot-sale?id=" + e
        });
    },
    getBase: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                console.log(t), e.setData({
                    tj_thumb: t.data.tj_thumb
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});