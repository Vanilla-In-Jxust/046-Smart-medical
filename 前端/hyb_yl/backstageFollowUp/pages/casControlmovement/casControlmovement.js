var t = getApp();

Page({
    data: {
        arr: []
    },
    onLoad: function(e) {
        var a = this, n = e.zid, i = e.u_id, s = e.id;
        e.types && a.setData({
            types: e.types
        }), t.util.request({
            url: "entry/wxapp/docuser.addfenzu",
            data: {
                zid: n,
                op: "display"
            },
            success: function(t) {
                console.log(t), a.setData({
                    arr: t.data
                });
            }
        }), a.setData({
            zid: n,
            u_id: i,
            id: s
        });
    },
    click: function(e) {
        console.log(e);
        var a = this, n = e.currentTarget.dataset.fenzuid, i = a.data.zid, s = a.data.u_id, o = a.data.id;
        t.util.request({
            url: "entry/wxapp/docuser.ydfenzu",
            data: {
                u_id: s,
                zid: i,
                fenzuid: n,
                id: o
            },
            success: function(t) {
                var e;
                (console.log(t), 2 == a.data.types) ? 1 == t.data && ((e = getCurrentPages())[e.length - 2].setData({
                    type: 1
                }), wx.showToast({
                    title: "移动成功",
                    icon: "none",
                    duration: 1e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 2
                            });
                        }, 2e3);
                    }
                })) : 1 == t.data && ((e = getCurrentPages())[e.length - 2].setData({
                    type: 1
                }), wx.showToast({
                    title: "移动成功",
                    icon: "none",
                    duration: 1e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    }
                }));
            }
        });
    },
    onShow: function() {},
    onClock: function(t) {}
});