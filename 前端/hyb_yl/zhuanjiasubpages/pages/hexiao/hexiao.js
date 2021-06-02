var o = getApp();

Page({
    data: {
        path: ""
    },
    onLoad: function(o) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    tap_scanCode: function() {
        var n = this;
        wx.scanCode({
            success: function(t) {
                wx.showToast({
                    title: "扫码成功,信息查询中!"
                }), console.log(t);
                var e = t.path;
                n.setData({
                    path: e
                }), o.util.request({
                    url: "entry/wxapp/Store",
                    data: {
                        ky_yibao: e
                    },
                    success: function(t) {
                        console.log(t);
                        var a = t.data.data;
                        return console.log(a), n.setData({
                            order: a
                        }), "1" == a.zy_zhenzhuang ? (wx.showModal({
                            title: "核销失败",
                            content: "该订单已核销过,无法再次核销!",
                            showCancel: !1
                        }), !1) : a.zy_telephone != e ? (wx.showModal({
                            title: "核销失败",
                            content: "该订单不存在!",
                            showCancel: !1
                        }), !1) : void wx.showModal({
                            title: "提示",
                            content: "是否核销该订单",
                            confirmText: "确认核销",
                            success: function(t) {
                                console.log(t.confirm), t.confirm ? o.util.request({
                                    url: "entry/wxapp/Save_order",
                                    data: {
                                        oncode: a.zy_telephone,
                                        openid: wx.getStorageSync("openid")
                                    },
                                    success: function(o) {
                                        console.log(o), n.setData({
                                            hexiaop: o.data.data
                                        }), wx.showModal({
                                            title: "核销成功",
                                            content: "该订单已成功核销!",
                                            showCancel: !1
                                        });
                                    }
                                }) : t.cancel && console.log("用户点击取消");
                            }
                        });
                    }
                });
            },
            fail: function(o) {
                wx.showToast({
                    image: "../images/error.png",
                    title: "扫码失败!"
                });
            }
        });
    }
});