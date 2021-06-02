var t = getApp();

Page({
    data: {
        symArr: [ "", "", "" ]
    },
    onLoad: function(e) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var n = this, o = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Getallhis",
            data: {
                openid: o
            },
            success: function(t) {
                console.log(t), n.setData({
                    getallhis: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    checkClick: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.data;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/check/check?id=" + e + "&title=" + a
        });
    },
    delClick: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.index, n = e.currentTarget.dataset.id, o = this.data.getallhis;
        o.splice(a, 1), t.util.request({
            url: "entry/wxapp/Delnotes",
            data: {
                sl_id: n
            },
            success: function(t) {
                console.log(t);
            }
        }), this.setData({
            getallhis: o
        });
    },
    allDel: function() {
        var e = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Delallnotes",
            data: {
                openid: e
            },
            success: function(t) {
                console.log(t);
            }
        }), this.setData({
            getallhis: []
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