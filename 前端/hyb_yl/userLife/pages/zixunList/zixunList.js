var t = getApp();

Page({
    data: {
        tabindex: 0,
        zx_id: ""
    },
    tabChose: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            tabindex: a,
            zx_id: t.currentTarget.dataset.zx_id
        }), this.getzixunlist();
    },
    btdetail: function(t) {
        var a = t.currentTarget.dataset.id, n = t.currentTarget.dataset.p_id, i = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + a + "&p_id=" + n + "&zid=" + i
        });
    },
    onLoad: function(a) {
        var n = this, i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), console.log(a.zixun), t.util.request({
            url: "entry/wxapp/index.zixunfenlei",
            success: function(t) {
                if (console.log(t), "undefined" == a.zx_id) var i = t.data[0].zx_id; else i = a.zx_id;
                if (n.setData({
                    tabList: t.data,
                    zx_id: i
                }), a.zx_id) for (var e = 0; e < t.data.length; e++) t.data[e].zx_id == a.zx_id && n.setData({
                    tabindex: e + 1
                });
                n.getzixunlist();
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getzixunlist: function() {
        var a = this;
        console.log(a.data.zx_id), t.util.request({
            url: "entry/wxapp/zixun.zixunyi",
            data: {
                zx_id: a.data.zx_id,
                tabindex: a.data.tabindex
            },
            success: function(t) {
                console.log(t.data), a.setData({
                    zixun: t.data
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
    onShareAppMessage: function() {}
});