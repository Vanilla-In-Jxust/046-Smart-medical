var n = getApp();

Page({
    data: {
        argeen: !1,
        typs: "",
        xieyi: !1
    },
    gosign: function() {
        var n = this, t = n.data.pinyin, a = n.data.typs, e = n.data.argeen;
        console.log(e), e ? wx.navigateTo({
            url: "/hyb_yl/userLife/pages/lianmlist/lianmlist?long=shoushu&pinyin=" + t + "&typs=" + a
        }) : wx.showModal({
            title: "提示",
            content: "请先订阅并同意" + n.data.detail.titles + "协议",
            success: function(e) {
                e.confirm && (n.setData({
                    argeen: !0
                }), wx.navigateTo({
                    url: "/hyb_yl/userLife/pages/lianmlist/lianmlist?long=shoushu&pinyin=" + t + "&typs=" + a
                }));
            }
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen,
            xieyi: !0
        });
    },
    closezhe: function() {
        this.setData({
            xieyi: !1
        });
    },
    onLoad: function(t) {
        var a = this, e = wx.getStorageSync("color"), o = t.pinyin, i = t.typs;
        "query" == i && null != i && a.setData({
            typs: i
        }), a.setData({
            pinyin: o
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), n.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: o
            },
            success: function(n) {
                console.log(n), a.setData({
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