var t = getApp();

Page({
    data: {
        windowWidth: 0,
        windowHeight: 0,
        t_status: !1,
        isopera: !1,
        id: ""
    },
    yishen: function() {
        var t = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/yaoshi/pages/docorder/docorder?y_id=" + t + "&typs=yishen"
        });
    },
    tixian: function() {
        var t = this.data.id;
        "0.00" == this.data.yaoshi.money ? wx.showModal({
            title: "提示",
            content: "您的余额为零"
        }) : wx.navigateTo({
            url: "/hyb_yl/yaoshi/pages/my_ti/my_ti?y_id=" + t
        });
    },
    shenhe: function() {
        var t = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/yaoshi/pages/docorder/docorder?y_id=" + t + "&typs=shenhe"
        });
    },
    onLoad: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                console.log(t), e.setData({
                    base: t.data
                });
            }
        }), e.getyaoshi();
        var o = wx.getStorageSync("color");
        this.setData({
            bg_color: o
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getyaoshi();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getyaoshi: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/yaoshi.index",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                var a = t.data.id;
                wx.setStorageSync("yid", a), e.setData({
                    yaoshi: t.data,
                    id: t.data.id,
                    thumb: t.data.thumb
                });
            }
        });
    },
    goExplanation: function() {
        var t = this, a = t.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/explanation/explanation?zid=" + a,
            success: function() {
                t.setData({
                    nonReadBoo: !0
                });
            }
        });
    },
    hzwenzhen: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.title, e = t.currentTarget.dataset.keyword, o = t.currentTarget.dataset.did;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/docorder/docorder?title=" + a + "&keyword=" + e + "&did=" + o
        });
    },
    goBack: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.titlme, e = t.currentTarget.dataset.key_words, o = t.currentTarget.dataset.id, i = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/serviceList/serviceList?titlme=" + a + "&key_words=" + e + "&id=" + o + "&zid=" + i
        });
    }
});