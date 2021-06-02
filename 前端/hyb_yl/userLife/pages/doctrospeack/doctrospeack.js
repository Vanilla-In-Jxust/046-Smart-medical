var t = getApp();

Page({
    data: {
        tab: [ {
            name: "医说"
        }, {
            name: "患教"
        } ],
        current: 0,
        doctorspeack: []
    },
    chooseTab: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.i, n = this, o = e.target.dataset.i;
        t.util.request({
            url: "entry/wxapp/index.userhj",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                n.setData({
                    devalArr: t.data
                });
            }
        }), n.setData({
            current: o,
            index: a
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
    },
    onReady: function() {
        this.getYishuo();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getYishuo: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.userqydocall",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), e.setData({
                    doctorspeack: t.data
                });
            }
        });
    },
    speackdetail: function(t) {
        console.log(t);
        t.detail.index;
        var e = t.detail.yisid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?yisid=" + e
        });
    },
    selecthj: function(t) {
        var e = t.currentTarget.dataset.h_id, a = (t.detail.yisid, t.currentTarget.dataset.h_leixing);
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/particulars/particulars?h_id=" + e + "&h_type=" + a
        });
    }
});