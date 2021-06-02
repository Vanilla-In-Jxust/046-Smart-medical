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
        var a = t.currentTarget.dataset.index, e = t.currentTarget.dataset.money;
        this.data.list.money < e ? wx.showModal({
            title: "提示",
            content: "余额不足"
        }) : this.setData({
            money_index: a,
            money: e
        });
    },
    onLoad: function(t) {
        var a = t.zid, e = t.did;
        "" != e && "undefined" != e && null != e && (this.setData({
            did: e
        }), this.getDetail()), "" != a && "undefined" != a && null != a && (this.setData({
            zid: a
        }), this.getZhuanjia()), this.getList(), this.getJiesuan();
        var i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
    },
    getList: function() {
        var a = this, e = a.data.zid, i = a.data.did;
        if ("" != e) var n = "1"; else if ("" != i) n = "2";
        t.util.request({
            url: "entry/wxapp/green.tixian_listall",
            data: {
                type: n
            },
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
    getDetail: function(a) {
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
    getZhuanjia: function(a) {
        var e = this;
        t.util.request({
            url: "enrey/wxapp/green.zhuanjia_info",
            data: {
                zid: e.data.zid
            },
            success: function(t) {
                e.setData({
                    list: t.data
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
        var t = this.data.did, a = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/usermx/usermx?zid=" + a + "&did=" + t
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
        var e = this.data.money, i = this.data.list.money, n = this.data.did, s = this.data.zid, o = this.data.tx_type;
        "" == e ? wx.showToast({
            title: "请选择提现金额"
        }) : e > i ? wx.showToast({
            title: "余额不足"
        }) : "" == o ? wx.showToast({
            title: "请选择提现方式"
        }) : wx.showModal({
            title: "提示",
            content: "是否确认提现？",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/green.tixian",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        did: n,
                        zid: s,
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