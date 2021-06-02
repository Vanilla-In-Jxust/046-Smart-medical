var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var e = t.beizhu, i = t.id;
        this.setData({
            beizhu: e,
            id: i,
            u_id: t.u_id
        });
    },
    input: function(t) {
        console.log(t.detail.value), this.setData({
            wznameModifier: t.detail.value
        });
    },
    onClock: function(e) {
        var i = this.data.id, a = this.data.u_id, n = this.data.wznameModifier;
        t.util.request({
            url: "entry/wxapp/Docuser.addfenzu",
            data: {
                id: i,
                u_id: a,
                beizhu: n,
                op: "xiugaibeizhu"
            },
            success: function(t) {
                console.log(t);
                var e = getCurrentPages();
                e[e.length - 2].setData({
                    type: 1
                }), wx.showToast({
                    title: "修改备注成功",
                    icon: "none",
                    duration: 1e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    }
                });
            }
        });
    },
    onShow: function() {}
});