var t = getApp();

Page({
    data: {
        title: ""
    },
    onLoad: function(e) {
        console.log(e);
        var a = this;
        e.state;
        a.setData({
            title: e.title
        });
        var n = e.ids;
        t.util.request({
            url: "entry/wxapp/zhuanjia.server_detail",
            data: {
                ids: n
            },
            success: function(t) {
                console.log(t), a.setData({
                    detail: t.data
                });
            }
        }), a.setData({
            ids: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    formSubmit: function(e) {
        console.log(e);
        var a = this.data.ids, n = e.detail.value.ptmoney, o = e.detail.value.ptzhuiw, i = e.detail.value.hymoney, u = e.detail.value.hyzhuiw;
        t.util.request({
            url: "entry/wxapp/zhuanjia.update_detail",
            data: {
                ids: a,
                ptmoney: n,
                ptzhuiw: o,
                hymoney: i,
                hyzhuiw: u
            },
            success: function(t) {
                console.log(t), wx.showToast({
                    title: "编辑成功",
                    icon: "none"
                }), wx.navigateBack({
                    complete: function(t) {}
                });
            }
        });
    }
});