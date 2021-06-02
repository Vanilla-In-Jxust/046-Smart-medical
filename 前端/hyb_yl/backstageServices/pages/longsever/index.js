var n = getApp();

Page({
    data: {
        argeen: !0
    },
    nextpage: function() {
        var n = this, a = (n.data.sid, n.data.key), e = (n.data.name, n.data.argeen);
        console.log(e), e ? wx.navigateTo({
            url: "/hyb_yl/userLife/pages/lianmlist/lianmlist?long=long&pinyin=" + a
        }) : wx.showModal({
            title: "提示",
            content: "请先订阅并同意" + n.data.detail.titles + "协议",
            success: function(e) {
                e.confirm && (n.setData({
                    argeen: !0
                }), wx.navigateTo({
                    url: "/hyb_yl/userLife/pages/lianmlist/lianmlist?long=long&pinyin=" + a
                }));
            }
        });
    },
    urlpage1: function() {
        console.log(4546e3), wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/appraise/index"
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
        });
    },
    onLoad: function(a) {
        var e = this, o = a.sid, t = a.key, i = a.name, s = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: s
        }), e.setData({
            sid: o,
            key: t,
            name: i,
            bgc: s
        }), n.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: t
            },
            success: function(n) {
                console.log(n), e.setData({
                    detail: n.data
                });
            },
            fail: function(n) {
                console.log(n);
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