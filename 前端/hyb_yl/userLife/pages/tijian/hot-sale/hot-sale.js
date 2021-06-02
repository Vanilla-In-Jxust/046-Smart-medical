var t = getApp();

Page({
    data: {},
    onLoad: function(e) {
        var a = this;
        a.getCatefenleione(), e.id ? t.util.request({
            url: "entry/wxapp/tijian.detailist",
            data: {
                id: e.id
            },
            cachetime: "30",
            success: function(t) {
                wx.hideLoading(), a.setData({
                    list: t.data,
                    id: e.id
                });
            }
        }) : a.getAlllist();
        var i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getCatefenleione: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/tijian.catefenleione",
            success: function(t) {
                console.log(t), e.setData({
                    cate: t.data
                });
            }
        });
    },
    getAlllist: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/tijian.detailist",
            data: {
                id: 0
            },
            cachetime: "30",
            success: function(t) {
                console.log(t), wx.hideLoading(), e.setData({
                    list: t.data
                });
            }
        });
    },
    checkItemTap: function(e) {
        var a = this, i = e.currentTarget.dataset.id, n = e.currentTarget.dataset.index;
        wx.showLoading({
            title: "加载中"
        }), t.util.request({
            url: "entry/wxapp/tijian.detailist",
            data: {
                id: i
            },
            cachetime: "30",
            success: function(t) {
                wx.hideLoading(), a.setData({
                    list: t.data,
                    xuan: n,
                    id: ""
                });
            }
        });
    },
    goDetail: function(t) {
        var e = t.currentTarget.dataset.tid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/tijian/detail/detail?tid=" + e
        });
    }
});