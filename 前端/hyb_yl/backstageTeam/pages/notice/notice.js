var t = getApp();

Page({
    data: {
        yaoqing: !0,
        noticeList: [],
        loadingBoo: !0,
        moreBoo: !0,
        currentResult: 0,
        noFlag: !1,
        hideFalg: !1
    },
    previewImage: function(t) {
        console.log(t);
        this.setData({
            hideFalg: !0
        });
        t.currentTarget.dataset.index;
        var o = "/assets/images/set_Img.png";
        wx.previewImage({
            current: o,
            urls: o
        });
    },
    onLoad: function(t) {
        var o = t.id;
        t.yaoqing && this.setData({
            yaoqing: t.yaoqing
        }), this.setData({
            id: t.id
        }), this.getNoticeList(o);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.data.hideFalg || this.setData({
            hideFalg: !1
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getMore: function() {
        var t = this;
        t.data.moreBoo && t.data.loadingBoo && (t.setData({
            loadingBoo: !1
        }), t.getNoticeList(t));
    },
    getNoticeList: function(o) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/studio.gonggaolist",
            data: {
                t_id: o,
                zid: wx.getStorageSync("zid")
            },
            success: function(t) {
                console.log(t), a.setData({
                    noticeList1: t.data.noticeList,
                    zhiding: t.data.zhiding,
                    fuze: t.data.fuze
                });
            }
        });
    }
});