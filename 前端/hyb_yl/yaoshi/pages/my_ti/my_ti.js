var t = getApp();

Page({
    data: {
        checked: !1,
        array: [ "微信", "线下" ],
        index: "",
        ifxian: !1,
        did: "",
        zid: "",
        money: "",
        money_index: 0,
        tx_type: "0",
        tx_name: "微信"
    },
    money_chose: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index, e = parseFloat(t.currentTarget.dataset.money);
        parseFloat(this.data.list.money) < e ? wx.showModal({
            title: "提示",
            content: "余额不足"
        }) : this.setData({
            money_index: a,
            money: e
        });
    },
    onLoad: function(t) {
        var a = t.y_id;
        this.setData({
            y_id: a
        }), this.getDetail(), this.getList(), this.getJiesuan();
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
    },
    getDetail: function() {
        var a = this;
        a.data.y_id;
        t.util.request({
            url: "entry/wxapp/yaoshi.index",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                a.setData({
                    list: t.data
                });
            }
        });
    },
    getList: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/yaoshi.tixian_list",
            success: function(t) {
                a.setData({
                    tixian_list: t.data
                });
            }
        });
    },
    getJiesuan: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/green.cash_base",
            success: function(t) {
                a.setData({
                    set: t.data,
                    money: t.data.money[0]
                });
            }
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
        var t = this.data.y_id;
        wx.navigateTo({
            url: "/hyb_yl/yaoshi/pages/usermx/usermx?y_id=" + t
        });
    },
    xuzhi: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/xuzhi/xuzhi"
        });
    },
    money: function(t) {
        var a = this.data.list.money;
        if (t.detail.value >= a) {
            var e = a;
            this.setData({
                money: e
            });
        } else this.setData({
            money: t.detail.value
        });
    },
    choosetype: function(t) {
        var a = t.currentTarget.dataset.index, e = t.currentTarget.dataset.name;
        this.setData({
            tx_type: a,
            tx_name: e
        });
    },
    subClick: function(a) {
        var e = parseFloat(this.data.money), n = parseFloat(this.data.list.money);
        console.log(n), console.log(e);
        var i = this.data.y_id, o = this.data.tx_type;
        "" == e ? wx.showToast({
            title: "请选择提现金额"
        }) : e > n ? wx.showToast({
            title: "余额不足"
        }) : "" == o ? wx.showToast({
            title: "请选择提现方式"
        }) : wx.showModal({
            title: "提示",
            content: "是否确认提现？",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/yaoshi.tixian",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        yid: i,
                        money: e,
                        tx_type: o
                    },
                    success: function(t) {
                        "1" == t.data.code ? wx.showModal({
                            title: "提示",
                            content: t.data.message
                        }) : wx.showModal({
                            title: "提示",
                            content: t.data.message,
                            success: function(t) {
                                t.confirm && wx.navigateBack({
                                    complete: function(t) {}
                                });
                            }
                        });
                    }
                });
            }
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