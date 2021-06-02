var t = getApp(), a = require("../../../../utils/wxParse.js");

Page({
    data: {
        loading: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/wx.png?sign=7684e30e918be8926b99bf9b95c08115&t=1584685670"
    },
    onLoad: function(e) {
        var i = this;
        if (e.hy_id) {
            var o = e.hy_id;
            t.util.request({
                url: "entry/wxapp/Xianguanhuiy",
                data: {
                    hy_id: o,
                    op: "post"
                },
                success: function(t) {
                    console.log(t), i.setData({
                        title: t.data.hy_title
                    }), a.wxParse("article", "html", t.data.hy_desc, i, 5);
                },
                fail: function(t) {
                    console.log(t);
                }
            }), i.setData({
                hy_id: o
            });
        }
        if (e.id) {
            var n = e.id;
            i.setData({
                id: n
            }), this.getAllathud();
        }
        var l = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: l
        });
    },
    onShareAppMessage: function() {},
    onReady: function() {},
    getAllathud: function() {
        var e = this, i = e.data.id;
        t.util.request({
            url: "entry/wxapp/Xiangq",
            data: {
                id: i
            },
            success: function(t) {
                console.log(t), e.setData({
                    title: t.data.data.title
                }), a.wxParse("article", "html", t.data.data.content, e, 5);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});