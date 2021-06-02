var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        this.getList({}, 1);
    },
    onShow: function() {},
    getList: function(a, e) {
        var s = this;
        wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/list",
            data: a,
            success: function(t) {
                console.log(t), 200 == t.data.code ? (2 == e && s.setData({
                    searchList: t.data.data
                }), 1 == e && s.setData({
                    wapList: t.data.data
                })) : wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    gettMarginFlag: function(t) {
        this.setData({
            marginFlag: !0
        });
    },
    getText: function(t) {
        this.setData({
            marginFlag: !0
        });
        var a = t.detail.value;
        0 != a.replace(/(^\s*)|(\s*$)/g, "").length ? (this.setData({
            searchFlag: !0
        }), this.getList({
            bankName: a
        }, 2)) : this.setData({
            searchFlag: !1
        });
    },
    chooseWap: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index;
        1 == t.currentTarget.dataset.current && wx.setStorageSync("bankMsg", this.data.wapList.hotBanks[a]), 
        2 == t.currentTarget.dataset.current && wx.setStorageSync("bankMsg", this.data.wapList.banks[a]), 
        3 == t.currentTarget.dataset.current && wx.setStorageSync("bankMsg", this.data.searchList[a]), 
        wx.navigateBack({
            delta: 1
        });
    }
});