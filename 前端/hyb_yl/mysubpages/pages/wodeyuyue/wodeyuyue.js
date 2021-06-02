var t = getApp();

Page({
    data: {
        tab: [ "已完成", "已取消/未完成" ],
        current: null,
        userInfo: {}
    },
    tab: function(e) {
        var a = this, n = e.currentTarget.dataset.index, o = wx.getStorageSync("openid");
        if (0 == n) t.util.request({
            url: "entry/wxapp/Selectord1",
            data: {
                openid: o
            },
            method: "POST",
            success: function(t) {
                console.log(t.data.data), a.setData({
                    selectord: t.data.data
                });
            }
        }); else {
            o = wx.getStorageSync("openid");
            t.util.request({
                url: "entry/wxapp/Selectord2",
                data: {
                    openid: o
                },
                success: function(t) {
                    console.log(t), a.setData({
                        selectord1: t.data.data
                    });
                }
            });
        }
        this.setData({
            current: e.currentTarget.dataset.index
        });
    },
    tab1: function(e) {
        var a = this, n = e.currentTarget.dataset.index, o = wx.getStorageSync("openid");
        n || t.util.request({
            url: "entry/wxapp/Selectord",
            data: {
                openid: o
            },
            success: function(t) {
                console.log(t.data.data), a.setData({
                    selectord: t.data.data
                });
            }
        }), this.setData({
            current: null
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var a = this;
        wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(t) {
                        var e = t.userInfo;
                        a.setData({
                            userInfo: e
                        });
                    }
                });
            }
        });
    },
    delOrder: function(e) {
        var a = e.currentTarget.dataset.index, n = this.data.selectord;
        n.splice(a, 1);
        var o = e.currentTarget.dataset.id;
        t.util.request({
            url: "entry/wxapp/Delorder",
            data: {
                zy_id: o
            },
            success: function(t) {
                wx.showToast({
                    title: "删除成功"
                });
            }
        }), this.setData({
            selectord: n
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getlist();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    ddxqClick: function(e) {
        var a = e.currentTarget.dataset.id, n = e.currentTarget.dataset.time;
        t.util.request({
            url: "entry/wxapp/Dmoney",
            data: {
                id: a
            },
            success: function(t) {
                wx.navigateTo({
                    url: "/hyb_yl/mysubpages/pages/ddxq/ddxq?id=" + a + "&yytime=" + n
                });
            }
        });
    },
    getlist: function() {
        var e = this, a = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Selectord",
            data: {
                openid: a
            },
            success: function(t) {
                e.setData({
                    selectord: t.data.data
                });
            }
        });
    }
});