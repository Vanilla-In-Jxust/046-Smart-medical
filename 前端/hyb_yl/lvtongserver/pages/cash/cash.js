var t = getApp();

Page({
    data: {
        checked: !1,
        array: [ "微信", "线下" ],
        index: "",
        ifxian: !1
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("did"), o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), this.setData({
            did: e
        }), this.getDetail();
    },
    getDetail: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/green.guidance_detail",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                e.setData({
                    list: t.data
                });
            }
        });
    },
    mingClick: function() {
        var t = wx.getStorageSync("openid");
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/usermx/usermx?openid=" + t
        });
    },
    xuzhi: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/xuzhi/xuzhi"
        });
    },
    money: function(t) {
        var e = this.data.money;
        if (t.detail.value >= e) {
            var o = e;
            this.setData({
                value: o
            });
        }
    },
    subClick: function(e) {
        var o = this.data.base, a = parseInt(o.min_money), n = o.expert_fee, i = this.data.zid, s = e.detail.value;
        console.log(e), s.openid = wx.getStorageSync("openid");
        var l = parseFloat(s.tx_cost), c = parseFloat(s.sj_cost), u = l - c * n, d = c * n;
        this.data.countmoney, this.data.ifxian;
        0 == e.detail.value.sj_cost.length ? wx.showModal({
            content: "您的账户暂无金额"
        }) : 0 == e.detail.value.tx_cost.length ? wx.showModal({
            content: "请输提现金额"
        }) : "" == e.detail.value.tx_type || null == e.detail.value.tx_type ? wx.showModal({
            content: "请选择提现方式"
        }) : l > c ? wx.showModal({
            content: "超出实际金额"
        }) : l < a ? wx.showModal({
            content: "提现金额必须大于等于" + a
        }) : wx.showModal({
            content: " 实际到帐" + u + "扣除" + d + "手续费",
            success: function(o) {
                if (o.confirm) {
                    console.log(o.confirm), console.log("用户点击确定");
                    var a = e.detail.value.tx_cost, n = e.detail.value.tx_type, s = e.detail.value.tx_admin, l = wx.getStorageSync("openid");
                    t.util.request({
                        url: "entry/wxapp/zhuanjia.saveTx",
                        data: {
                            sj_cost: u,
                            tx_cost: a,
                            tx_type: n,
                            openid: l,
                            tx_admin: s,
                            zjid: i
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.code ? wx.showToast({
                                title: "提交失败"
                            }) : (wx.showToast({
                                title: "提交成功"
                            }), wx.redirectTo({
                                url: "../my/my"
                            }));
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    });
                } else o.cancel && console.log("用户点击取消");
            }
        });
    },
    onReady: function() {
        this.getBase();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getBase: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.tixiansite",
            success: function(t) {
                console.log(t), e.setData({
                    base: t.data
                });
            },
            fail: function(t) {}
        });
    }
});