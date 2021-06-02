var e = getApp();

Page({
    data: {
        argeen: !1,
        title: "",
        backgroundColor: "#00c792"
    },
    nextpage: function() {
        var e = this, a = (e.data.sid, e.data.key), t = (e.data.name, e.data.argeen), n = e.data.zid, i = e.data.key, o = e.data.money;
        if (t) return "yuanchengguahao" != a ? (wx.navigateTo({
            url: "/hyb_yl/userLife/pages/lianmlist/lianmlist?leixing=lvtong&pinyin=" + a + "&id=" + e.data.detail.id + "&name=" + e.data.name + "&money=" + e.data.info.money
        }), !1) : "1" !== e.data.ifzy ? (wx.navigateTo({
            url: "/hyb_yl/userLife/pages/lianmlist/lianmlist?long=long&pinyin=" + a
        }), !1) : (wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/orderedtime/orderedtime?inquiry=1&zid=" + n + "&server=" + i + "&money=" + o
        }), !1);
        wx.showModal({
            title: "提示",
            content: "请先订阅并同意" + e.data.detail.titles + "协议",
            success: function(a) {
                a.confirm && e.setData({
                    argeen: !0,
                    xieyi: !0
                });
            }
        });
    },
    urlpage1: function() {
        console.log(4546e3), wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/estimate/estimate?key=" + this.data.key
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
    onLoad: function(a) {
        var t = this, n = a.sid;
        if (null != a.key) var i = a.key; else if (null != a.key_words) i = a.key_words; else if (null != a.ser_key) i = a.ser_key;
        "yuanchengguahao" == i ? t.setData({
            title: "挂号"
        }) : t.setData({
            title: a.name,
            key: i
        }), t.getser_type();
        var o = a.name, s = wx.getStorageSync("color");
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: s
        }), null != a.name ? wx.setNavigationBarTitle({
            title: a.name
        }) : null != a.tit && wx.setNavigationBarTitle({
            title: a.tit
        }), e.util.request({
            url: "entry/wxapp/index.base",
            success: function(e) {
                var a = e.data.ztcolor;
                t.setData({
                    backgroundColor: a
                }), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: a
                });
            }
        }), null != a.name ? wx.setNavigationBarTitle({
            title: a.name
        }) : null != a.tit && wx.setNavigationBarTitle({
            title: a.tit
        }), a.zid) {
            var l = a.zid;
            t.setData({
                zid: l
            });
        }
        if (a.ifzy) {
            var r = a.ifzy;
            t.setData({
                ifzy: r
            });
        }
        if (a.money) {
            var u = a.money;
            t.setData({
                money: u
            });
        }
        t.setData({
            sid: n,
            key: i,
            name: o,
            bgc: s
        }), e.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: i
            },
            success: function(e) {
                console.log(e), t.setData({
                    detail: e.data
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    getser_type: function() {
        var a = this;
        e.util.request({
            url: "entry/wxapp/green.ser_type",
            data: {
                keyword: a.data.key
            },
            success: function(e) {
                a.setData({
                    info: e.data
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