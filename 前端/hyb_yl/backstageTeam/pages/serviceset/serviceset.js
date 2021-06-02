var t = getApp();

Page({
    data: {
        title: ""
    },
    onLoad: function(e) {
        console.log(e);
        var n = this, o = e.id;
        e.state;
        n.setData({
            title: e.title
        });
        e.ids;
        t.util.request({
            url: "entry/wxapp/team.server_detail",
            data: {
                id: o
            },
            success: function(t) {
                console.log(t), n.setData({
                    detail: t.data
                });
            }
        }), n.setData({
            id: o
        });
    },
    onReady: function() {},
    formSubmit: function(e) {
        console.log(e);
        var n = this.data.id, o = e.detail.value.ptmoney, a = e.detail.value.ptzhuiw, i = e.detail.value.hymoney, u = e.detail.value.hyzhuiw;
        t.util.request({
            url: "entry/wxapp/team.update_detail",
            data: {
                id: n,
                ptmoney: o,
                ptzhuiw: a,
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
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});