var t = getApp();

Page({
    data: {
        message: {},
        zan_num: 0,
        pinglun_num: 2,
        status: !1,
        pinglun: []
    },
    zan: function(t) {
        var n = parseInt(t.currentTarget.dataset.value), a = this.data.status;
        a ? (n--, a = !a) : (n++, a = !a), this.setData({
            zan_num: n,
            status: a
        });
    },
    pageScrollToBottom: function() {
        wx.createSelectorQuery().select("#j_page").boundingClientRect(function(t) {
            wx.pageScrollTo({
                scrollTop: t.bottom
            });
        }).exec();
    },
    open_map_chonse: function() {
        var t = this;
        wx.chooseLocation({
            success: function(n) {
                t.setData({
                    loc_lon: n.longitude,
                    loc_lat: n.latitude,
                    accuracy: n.address
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    inputfocus: function() {
        this.setData({
            inputfocus: !0
        }), this.pageScrollToBottom();
    },
    textblur: function() {
        this.setData({
            inputfocus: !1
        });
    },
    textblur2: function(t) {
        var n = t.currentTarget.dataset.ida, a = this.data.pinglun;
        a[n].reply_focus = !1, this.setData({
            pinglun: a
        });
    },
    replay: function(t) {
        for (var n = t.currentTarget.dataset.index, a = this.data.pinglun, e = 0; e < a.length; e++) a[e].reply_focus = !1;
        a[n].reply_focus = !0, this.setData({
            pinglun: a
        });
    },
    onLoad: function(t) {
        var n = t.hz_id;
        console.log(n);
        var a = t.hz_name;
        wx.setNavigationBarTitle({
            title: a
        }), this.setData({
            hz_id: n
        });
    },
    onReady: function() {
        this.getFwlistnew();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getFwlistnew: function() {
        var n = this, a = n.data.hz_id;
        t.util.request({
            url: "entry/wxapp/Zzhzxq",
            data: {
                hz_id: a
            },
            success: function(t) {
                console.log(t), n.setData({
                    hzxq: t.data.data
                }), WxParse.wxParse("articles", "html", t.data.data.hz_count, n, 5);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onPullDownRefresh: function() {
        this.getFwlistnew();
        var t = wx.getStorageSync("title");
        wx.setNavigationBarTitle({
            title: t
        }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
    }
});