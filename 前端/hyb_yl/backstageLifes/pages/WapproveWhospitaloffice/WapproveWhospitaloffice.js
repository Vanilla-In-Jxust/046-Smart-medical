var t = getApp();

Page({
    data: {
        keshi1: [],
        idIndex: 0
    },
    Click: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.text, e = getCurrentPages();
        e[e.length - 2].setData({
            nksinfo: a
        }), wx.navigateBack({
            delta: 1
        });
    },
    changeMenu: function(a) {
        var e = this, n = a.currentTarget.dataset.index, s = a.currentTarget.dataset.id, r = a.currentTarget.dataset.ctname;
        t.util.request({
            url: "entry/wxapp/index.parentclass",
            data: {
                id: s,
                op: "parent"
            },
            success: function(t) {
                console.log(t), e.setData({
                    parks: t.data,
                    ctname: r,
                    z_room: s
                });
            }
        }), this.setData({
            idIndex: n
        });
    },
    scroll: function(t) {
        console.log(t), this.setData({
            idIndex: t.detail.current
        });
    },
    onLoad: function(a) {
        var e = this, n = a.hosid;
        t.util.request({
            url: "entry/wxapp/index.address",
            data: {
                op: "keshi",
                id: n
            },
            success: function(a) {
                console.log(a);
                var n = a.data[0].id;
                t.util.request({
                    url: "entry/wxapp/index.parentclass",
                    data: {
                        id: n,
                        op: "parent"
                    },
                    success: function(t) {
                        console.log(t), e.setData({
                            parks: t.data
                        });
                    }
                }), e.setData({
                    keshi: a.data,
                    ctname: a.data[0].ctname,
                    z_room: n
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), e.setData({
            id: n
        });
    },
    enterbt: function(t) {
        var a = this.data.z_room, e = t.currentTarget.dataset.id, n = getCurrentPages(), s = n[n.length - 2], r = t.currentTarget.dataset.name;
        console.log(a, e, r), s.setData({
            parentid2: e,
            z_room: a,
            name: r
        }), wx.navigateBack({
            detail: 1
        });
    }
});