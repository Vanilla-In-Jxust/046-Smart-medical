var t = getApp();

Page({
    data: {
        y_id: "",
        xufang: "",
        counttime: "",
        copyright: [ {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/renzheng.png?sign=99d87d2d65c67c848a10aaf43bafb66e&t=1583825248",
            text: "药监认证"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/people.png?sign=717fc4019448bfc2a03ac538022f7ed8&t=1583825298",
            text: "药师审核"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/yinsi.png?sign=f45888dbb9b06874e8d079f99d6018f5&t=1583825342",
            text: "隐私包装"
        } ]
    },
    shenhe: function(a) {
        var e = this, n = a.currentTarget.dataset.id, o = a.currentTarget.dataset.status;
        wx.showModal({
            title: "提示",
            content: "是否确认审核改订单",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/yaoshi.shenhe_order",
                    data: {
                        id: n,
                        y_id: e.data.y_id,
                        status: o
                    },
                    success: function(a) {
                        wx.showToast({
                            title: "审核成功"
                        }), e.setData({
                            page: 0,
                            list: []
                        }), setTimeout(function() {
                            t.util.request({
                                url: "entry/wxapp/user.cfdetail",
                                data: {
                                    id: e.data.id
                                },
                                success: function(t) {
                                    console.log(t), e.setData({
                                        conets: t.data.conets,
                                        goodlist: t.data.sid,
                                        cfimg: t.data.cfimg,
                                        info: t.data
                                    });
                                }
                            });
                        }, 500);
                    }
                });
            }
        });
    },
    loogchufang: function(a) {
        console.log(a);
        var e = this.data.id, n = a.currentTarget.dataset.cfimg;
        console.log(n), t.util.request({
            url: "entry/wxapp/user.gongzhangimg",
            data: {
                id: e,
                cfimg: n
            },
            success: function(t) {
                console.log(t), wx.previewImage({
                    urls: [ t.data ]
                });
            }
        });
    },
    onLoad: function(a) {
        var e = this, n = a.id, o = a.orderStatus, s = a.y_id;
        e.setData({
            orderStatus: o,
            id: n,
            y_id: s
        }), t.util.request({
            url: "entry/wxapp/user.cfdetail",
            data: {
                id: n
            },
            success: function(t) {
                console.log(t), e.setData({
                    conets: t.data.conets,
                    goodlist: t.data.sid,
                    cfimg: t.data.cfimg,
                    info: t.data
                });
            }
        });
        var i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), a.xufang && this.setData({
            xufang: a.xufang
        }), e.setData({
            bgc: i
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