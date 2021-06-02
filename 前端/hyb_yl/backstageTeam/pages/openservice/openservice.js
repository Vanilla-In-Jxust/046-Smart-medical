var t = getApp();

Page({
    data: {
        twcheck: !1,
        timeLeft: "",
        zxcheck: !1,
        timezx: "",
        service: []
    },
    opening: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.state, a = t.currentTarget.dataset.id, n = t.currentTarget.dataset.title;
        return wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/serviceset/serviceset?state=" + e + "&id=" + a + "&title=" + n
        }), !1;
    },
    open: function() {
        return console.log("开通"), !1;
    },
    twchanges: function(e) {
        var a = this, n = e.currentTarget.dataset.id, s = e.currentTarget.dataset.stateback, i = e.currentTarget.dataset.money, c = e.currentTarget.dataset.gq;
        "0" == s ? wx.showModal({
            title: "提示",
            content: "确认开启该服务吗？",
            success: function(e) {
                e.confirm && (c && "0" != i && "0.00" != i && "" != i ? t.util.request({
                    url: "entry/wxapp/team.server_pay",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        money: i,
                        id: n,
                        typs: "team"
                    },
                    success: function(e) {
                        wx.requestPayment({
                            timeStamp: e.data.timeStamp,
                            nonceStr: e.data.nonceStr,
                            package: e.data.package,
                            signType: e.data.signType,
                            paySign: e.data.paySign,
                            success: function(e) {
                                t.util.request({
                                    url: "entry/wxapp/team.update_switch",
                                    data: {
                                        id: n,
                                        stateback: 1
                                    },
                                    success: function(t) {
                                        a.getServelist(a.data.id);
                                    }
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    }
                }) : t.util.request({
                    url: "entry/wxapp/team.update_switch",
                    data: {
                        id: n,
                        stateback: 1
                    },
                    success: function(t) {
                        a.getServelist(a.data.id);
                    }
                }));
            }
        }) : wx.showModal({
            title: "提示",
            content: "确认关闭该服务吗？",
            success: function(e) {
                e.confirm && t.util.request({
                    url: "entry/wxapp/team.update_switch",
                    data: {
                        id: n,
                        stateback: 0
                    },
                    success: function(t) {
                        console.log(t), a.getServelist(a.data.id);
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        var e = t.id;
        this.setData({
            id: e
        }), this.getServelist(e);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getServelist: function(e) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/team.servertime",
            data: {
                id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    server: t.data
                });
            }
        });
    }
});