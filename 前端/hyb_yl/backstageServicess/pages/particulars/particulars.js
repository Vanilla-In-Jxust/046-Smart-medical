var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var a = wx.getStorageSync("money1") || "";
        1 == a ? this.form() : 2 == a && this.form1();
    },
    form: function(a) {
        var e = wx.getStorageSync("log") || "", d = wx.getStorageSync("particularsid") || "", s = this;
        wx.request({
            url: t.globalData.dic + "doctor/withdraw/record/detail",
            data: {
                token: e,
                moneyBagDetailId: d
            },
            success: function(t) {
                console.log(t.data.data), s.setData({
                    arr: t.data.data
                }), 1 == t.data.data.status ? s.setData({
                    text: "审核中"
                }) : 2 == t.data.data.status ? s.setData({
                    text: "已审核"
                }) : 3 == t.data.data.status ? s.setData({
                    text: "交易完成"
                }) : 4 == t.data.data.status ? s.setData({
                    text: "交易失败"
                }) : 5 == t.data.data.status ? s.setData({
                    text: "已退款"
                }) : -1 == t.data.data.status && s.setData({
                    text: "审核失败"
                }), 1 == t.data.data.type ? s.setData({
                    text1: "提现"
                }) : 2 == t.data.data.type ? s.setData({
                    text1: "充值"
                }) : 3 == t.data.data.type && s.setData({
                    text1: "交易"
                });
            }
        });
    },
    form1: function(a) {
        var e = wx.getStorageSync("log") || "", d = wx.getStorageSync("teamId") || "", s = wx.getStorageSync("particularsid") || "", o = this;
        wx.request({
            url: t.globalData.dic + "doctor/team/withdraw/record/detail",
            data: {
                token: e,
                teamId: d,
                moneyBagDetailId: s
            },
            success: function(t) {
                console.log(t.data.data), o.setData({
                    arr: t.data.data
                }), 1 == t.data.data.status ? o.setData({
                    text: "审核中"
                }) : 2 == t.data.data.status ? o.setData({
                    text: "已审核"
                }) : 3 == t.data.data.status ? o.setData({
                    text: "交易完成"
                }) : 4 == t.data.data.status ? o.setData({
                    text: "交易失败"
                }) : 5 == t.data.data.status ? o.setData({
                    text: "已退款"
                }) : -1 == t.data.data.status && o.setData({
                    text: "审核失败"
                }), 1 == t.data.data.type ? o.setData({
                    text1: "提现"
                }) : 2 == t.data.data.type ? o.setData({
                    text1: "充值"
                }) : 3 == t.data.data.type && o.setData({
                    text1: "交易"
                });
            }
        });
    }
});