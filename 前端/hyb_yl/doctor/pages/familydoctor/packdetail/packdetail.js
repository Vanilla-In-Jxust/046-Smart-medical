var t = getApp();

Page({
    data: {
        select: !1,
        price: ""
    },
    whether: function(e) {
        console.log(e);
        var a = this, i = e.detail.value, o = e.currentTarget.dataset.id, n = a.data.t_id, d = a.data.ff_id, s = a.data.price, c = a.data.fl_id;
        "" == a.data.price ? (wx.showToast({
            title: "请输入实际价格",
            icon: "none"
        }), a.setData({
            select: !1
        })) : (i ? (t.util.request({
            url: "entry/wxapp/studio.addfwb",
            data: {
                ff_id: d,
                t_id: n,
                price: s,
                fl_id: c
            },
            success: function(t) {
                console.log(t), a.setData({
                    id: t.data
                });
            }
        }), wx.showToast({
            title: "开通成功",
            icon: "none"
        })) : (t.util.request({
            url: "entry/wxapp/studio.delfwb",
            data: {
                id: o,
                t_id: n
            },
            success: function(t) {
                console.log(t);
            }
        }), wx.showToast({
            title: "关闭成功",
            icon: "none"
        })), a.setData({
            select: e.detail.value
        }));
    },
    price: function(t) {
        this.setData({
            price: t.detail.value
        });
    },
    onLoad: function(e) {
        var a = this, i = e.ff_id, o = e.t_id, n = e.fl_id;
        t.util.request({
            url: "entry/wxapp/studio.ifexist",
            data: {
                t_id: o,
                ff_id: i,
                fl_id: n
            },
            success: function(t) {
                console.log(t), 1 == t.data.data ? a.setData({
                    select: !0,
                    id: t.data.id,
                    price: t.data.fw_sjmoney
                }) : a.setData({
                    select: !1
                });
            }
        }), t.util.request({
            url: "entry/wxapp/Office.fwdetail",
            data: {
                ff_id: i
            },
            success: function(t) {
                console.log(t), a.setData({
                    detail: t.data,
                    nodes: t.data.fw_xy
                });
            }
        }), a.setData({
            t_id: o,
            ff_id: i,
            fl_id: n
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