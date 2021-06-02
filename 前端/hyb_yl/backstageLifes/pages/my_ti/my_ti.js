var t = getApp();

Page({
    data: {
        checked: !1,
        array: [ "微信", "线下" ],
        index: "",
        ifxian: !1
    },
    onLoad: function(t) {
        var a = t.zid, e = t.docmoney, o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), this.setData({
            docmoney: e,
            zid: a
        });
    },
    bindPickerChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        this.data.ifxian;
        "1" == t.detail.value ? this.setData({
            ifxian: !0
        }) : this.setData({
            ifxian: !1
        }), this.setData({
            index: t.detail.value
        });
    },
    mingClick: function() {
        var t = wx.getStorageSync("openid");
        wx.navigateTo({
            url: "/hyb_yl/usermx/usermx?openid=" + t
        });
    },
    xuzhi: function() {
        wx.navigateTo({
            url: "/hyb_yl/xuzhi/xuzhi"
        });
    },
    money: function(t) {
        var a = this.data.money;
        if (t.detail.value >= a) {
            var e = a;
            this.setData({
                value: e
            });
        }
    },
    subClick: function(a) {
        var e = this.data.base, o = parseInt(e.zdtx), n = e.txsx, i = this.data.zid, s = a.detail.value;
        s.openid = wx.getStorageSync("openid");
        var l = parseFloat(s.tx_cost), c = parseFloat(s.sj_cost), u = (l - l * (n / 100)).toFixed(2), d = n + "%", r = parseFloat(c - l), x = (this.data.countmoney, 
        this.data.ifxian);
        console.log(r), 0 == a.detail.value.sj_cost.length ? wx.showModal({
            content: "您的账户暂无金额"
        }) : 0 == a.detail.value.tx_cost.length ? wx.showModal({
            content: "请输提现金额"
        }) : "" == a.detail.value.tx_type || null == a.detail.value.tx_type ? wx.showModal({
            content: "请选择提现方式"
        }) : l > c ? wx.showModal({
            content: "超出实际金额"
        }) : l < o ? wx.showModal({
            content: "提现金额必须大于等于" + o
        }) : "1" == x && 0 == a.detail.value.tx_admin.length ? wx.showModal({
            content: "请输入联系方式"
        }) : wx.showModal({
            content: " 实际到帐" + u + "扣除" + d + "手续费",
            success: function(e) {
                if (e.confirm) {
                    console.log(e.confirm), console.log("用户点击确定");
                    var o = a.detail.value.tx_cost, n = a.detail.value.tx_type, s = a.detail.value.tx_admin, l = wx.getStorageSync("openid");
                    t.util.request({
                        url: "entry/wxapp/SaveTx",
                        data: {
                            sj_cost: u,
                            tx_cost: o,
                            tx_type: n,
                            openid: l,
                            tx_admin: s,
                            zjid: i,
                            sy_money: r
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(t) {
                            if (console.log(t), 1 == t.data.code) wx.showToast({
                                title: "提交失败"
                            }); else {
                                wx.showToast({
                                    title: "提交成功"
                                });
                                var a = getCurrentPages();
                                a[a.length - 2].setData({
                                    state: 1
                                }), wx.reLaunch({
                                    url: "/hyb_yl/zhuanjiasubpages/pages/backstageMy/backstageMy"
                                });
                            }
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    });
                } else e.cancel && console.log("用户点击取消");
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
        var a = this;
        t.util.request({
            url: "entry/wxapp/Base",
            success: function(t) {
                console.log(t), a.setData({
                    base: t.data.data
                });
            },
            fail: function(t) {}
        });
    }
});