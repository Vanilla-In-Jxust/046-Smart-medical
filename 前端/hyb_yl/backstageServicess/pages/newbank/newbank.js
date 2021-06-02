var t = getApp();

Page({
    data: {
        time: "获取验证码",
        currentTime: 60,
        clicktime: "clicktime",
        input2: "",
        input3: "",
        name: "foot1",
        show: !1,
        clickname: "",
        arr: ""
    },
    input1: function(t) {
        console.log(t.detail.value), this.setData({
            wzname: t.detail.value
        });
    },
    input2: function(t) {
        console.log(t.detail.value), this.setData({
            input2: t.detail.value
        }), this.data.input2.length > 12 && "" != this.data.input3 && "" != this.data.arr ? this.setData({
            name: "foot",
            clickname: "clickname"
        }) : this.setData({
            name: "foot1",
            clickname: ""
        });
    },
    focus: function(a) {
        this.data.nextFlag = !0;
        var e = this;
        this.data.input2.replace(/\s+/g, "").length < 12 ? this.data.nextFlag = !1 : wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/validateAndCacheCardInfo",
            data: {
                cardNo: e.data.input2
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data.data), e.data.nextFlag = !1, 200 == t.data.code ? e.setData({
                    arr: t.data.data,
                    show: !0
                }) : 500 == t.data.code && (wx.showToast({
                    title: "卡号错误",
                    icon: "none",
                    duration: 2e3
                }), e.setData({
                    show: !1,
                    arr: ""
                })), e.data.input2.length > 12 && "" != e.data.input3 && "" != e.data.arr ? e.setData({
                    name: "foot",
                    clickname: "clickname"
                }) : e.setData({
                    name: "foot1",
                    clickname: ""
                });
            },
            fail: function() {
                this.data.nextFlag = !1;
            }
        });
    },
    input3: function(t) {
        console.log(t.detail.value), this.setData({
            input3: t.detail.value
        }), this.data.input2.length > 12 && "" != this.data.input3 && "" != this.data.arr ? this.setData({
            name: "foot",
            clickname: "clickname"
        }) : this.setData({
            name: "foot1",
            clickname: ""
        });
    },
    clickname: function(a) {
        var e = this;
        this.data.input2.replace(/\s+/g, "").length < 12 ? wx.showToast({
            title: "请正确输入卡号",
            icon: "none",
            duration: 2e3
        }) : 0 != e.data.input3.replace(/(^\s*)|(\s*$)/g, "").length ? (wx.showLoading({
            title: "添加中...",
            mask: !0
        }), wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/add",
            data: {
                token: wx.getStorageSync("log") || "",
                authCode: e.data.input3,
                cardNo: e.data.input2,
                name: e.data.wzname
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data.data), wx.hideLoading(), 200 == t.data.code && (wx.showToast({
                    title: "添加成功",
                    icon: "none",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3)), 500 == t.data.code && wx.showToast({
                    title: "添加失败，请检查卡号和银行是否正确",
                    icon: "none",
                    duration: 2e3
                }), 11030103 == t.data.code && wx.showToast({
                    title: "验证码已过期",
                    icon: "none",
                    duration: 2e3
                }), 11030102 == t.data.code && wx.showToast({
                    title: "验证码错误",
                    icon: "none",
                    duration: 2e3
                }), 11030113 == t.data.code && wx.showToast({
                    title: "暂不支持此类银行卡",
                    icon: "none",
                    duration: 2e3
                });
            }
        })) : wx.showToast({
            title: "请输入验证码",
            icon: "none",
            duration: 2e3
        });
    },
    onLoad: function(t) {
        this.setData({
            wzname: wx.getStorageSync("clientsOfBanks") || ""
        });
    },
    onShow: function() {
        wx.getStorageSync("bankMsg") && (this.setData({
            arr: wx.getStorageSync("bankMsg"),
            show: !0
        }), this.data.input2.length > 12 && "" != this.data.input3 && "" != this.data.arr ? this.setData({
            name: "foot",
            clickname: "clickname"
        }) : this.setData({
            name: "foot1",
            clickname: ""
        })), wx.removeStorageSync("bankMsg");
    },
    clicktime: function(a) {
        this.getCode(), wx.request({
            url: t.globalData.dic + "doctor/withdraw/bank/getAuthCode",
            data: {
                token: wx.getStorageSync("log") || ""
            },
            success: function(t) {
                console.log(t.data.data), t.data.code;
            }
        });
    },
    getCode: function() {
        var t = this, a = t.data.currentTime;
        t.setData({
            time: a + "秒",
            clicktime: ""
        });
        var e = setInterval(function() {
            t.setData({
                time: a - 1 + "秒"
            }), --a <= 0 && (clearInterval(e), t.setData({
                time: "重新获取",
                currentTime: 60,
                clicktime: "clicktime"
            }));
        }, 1e3);
    },
    navclick: function(t) {
        this.data.nextFlag || wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/newbank1/newbank1"
        });
    }
});