var a = getApp();

Page({
    data: {
        argeen: !1
    },
    gosign: function() {
        var a = this, o = a.data.sid, t = a.data.key, e = a.data.name, n = a.data.argeen;
        console.log(n), n ? wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/hospital/hospital?sid=" + o + "&key=" + t + "&name=" + e
        }) : wx.showModal({
            title: "提示",
            content: "请先订阅并同意签约协议",
            success: function(n) {
                n.confirm && (a.setData({
                    argeen: !0
                }), wx.navigateTo({
                    url: "/hyb_yl/doctor/pages/familydoctor/hospital/hospital?sid=" + o + "&key=" + t + "&name=" + e
                }));
            }
        });
    },
    radioChange: function() {
        console.log("pppp"), this.setData({
            argeen: !this.data.argeen,
            xieyi: !0
        });
    },
    closezhe: function() {
        this.setData({
            xieyi: !1
        });
    },
    onLoad: function(o) {
        var t = this, e = o.sid, n = o.key, i = o.name;
        wx.setNavigationBarTitle({
            title: i
        }), t.setData({
            sid: e,
            key: n,
            name: i
        }), wx.createCanvasContext("myQrcode");
        var s = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: s
        }), a.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: n
            },
            success: function(a) {
                console.log(a), t.setData({
                    detail: a.data
                });
            },
            fail: function(a) {
                console.log(a);
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