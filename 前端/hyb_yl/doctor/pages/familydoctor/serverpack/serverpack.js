var t = getApp();

Page({
    data: {
        classify: [ ,  ],
        select: !0
    },
    whether: function(t) {
        console.log(t), this.setData({
            select: t.detail.value
        });
    },
    packdetail: function(t) {
        var a = t.currentTarget.dataset.ff_id, i = this.data.t_id, e = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/packdetail/packdetail?ff_id=" + a + "&t_id=" + i + "&fl_id=" + e
        });
    },
    onLoad: function(a) {
        var i = this, e = a.id, n = a.t_id;
        t.util.request({
            url: "entry/wxapp/office.allfwb",
            data: {
                id: e
            },
            success: function(t) {
                console.log(t), i.setData({
                    classify: t.data
                });
            }
        }), i.setData({
            t_id: n,
            id: e
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