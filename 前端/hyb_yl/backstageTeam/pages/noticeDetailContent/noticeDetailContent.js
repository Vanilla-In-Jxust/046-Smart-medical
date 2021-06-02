var t = getApp();

Page({
    data: {
        hideFalg: !1
    },
    onLoad: function(t) {
        var a = t.g_id;
        this.setData({
            g_id: a
        }), this.getGonggao(a);
    },
    previewImage: function(t) {
        console.log(t);
        this.setData({
            hideFalg: !0
        }), t.currentTarget.dataset.index, wx.previewImage({
            current: t.target.dataset.url,
            urls: this.data.noticeDetail.messageImage
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.data.hideFalg || this.setData({
            hideFalg: !1
        });
    },
    onUnload: function() {},
    delBtn: function() {
        var a = this.data.g_id;
        wx.showModal({
            title: "确实删除吗？",
            confirmColor: "#3b4ca9",
            success: function(e) {
                e.confirm ? t.util.request({
                    url: "entry/wxapp/studio.delete",
                    data: {
                        g_id: a
                    },
                    success: function(t) {
                        console.log(t);
                    }
                }) : e.cancel;
            }
        });
    },
    getGonggao: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/studio.addgongg",
            data: {
                g_id: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    noticeDetail: t.data
                });
            }
        });
    }
});