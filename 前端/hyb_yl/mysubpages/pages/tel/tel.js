var t = getApp();

Page({
    data: {
        send: !1,
        alreadySend: !1,
        second: 60,
        disabled: !0,
        buttonType: "default",
        phoneNum: "",
        code: "",
        smscode: "",
        otherInfo: "",
        u_phone: ""
    },
    onLoad: function(e) {
        var a = wx.getStorageSync("color"), n = e.u_phone;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var o = this;
        o.setData({
            bgc: a,
            u_phone: n
        });
        wx.getStorageSync("openid");
        e.enter && o.setData({
            enter: e.enter
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), o.setData({
                    url: t.data
                });
            }
        });
    },
    inputPhoneNum: function(t) {
        var e = t.detail.value;
        11 === e.length ? this.checkPhoneNum(e) && (this.setData({
            phoneNum: e
        }), console.log("phoneNum" + this.data.phoneNum), this.showSendMsg(), this.activeButton()) : (this.setData({
            phoneNum: ""
        }), this.hideSendMsg());
    },
    checkPhoneNum: function(t) {
        return !!/^1\d{10}$/.test(t) || (wx.showToast({
            title: "手机号不正确",
            image: "../../../images/error.png"
        }), !1);
    },
    showSendMsg: function() {
        this.data.alreadySend || this.setData({
            send: !0
        });
    },
    hideSendMsg: function() {
        this.setData({
            send: !1,
            disabled: !0,
            buttonType: "default"
        });
    },
    sendMsg: function() {
        var e = this, a = t.siteInfo.uniacid;
        t.util.request({
            url: e.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=SendSms&m=hyb_yl",
            data: {
                phoneNum: this.data.phoneNum
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    smscode: t.data.data
                });
            }
        }), this.setData({
            alreadySend: !0,
            send: !1
        }), this.timer();
    },
    timer: function() {
        var t = this;
        new Promise(function(e, a) {
            var n = setInterval(function() {
                t.setData({
                    second: t.data.second - 1
                }), t.data.second <= 0 && (t.setData({
                    second: 60,
                    alreadySend: !1,
                    send: !0
                }), e(n));
            }, 1e3);
        }).then(function(t) {
            clearInterval(t);
        });
    },
    addOtherInfo: function(t) {
        console.log(t), this.setData({
            otherInfo: t.detail.value
        }), this.activeButton(), console.log("otherInfo: " + this.data.otherInfo);
    },
    addCode: function(t) {
        console.log(t), this.setData({
            code: t.detail.value
        }), this.activeButton(), console.log("code" + this.data.code);
    },
    activeButton: function() {
        var t = this.data, e = t.phoneNum, a = t.code, n = t.otherInfo;
        console.log(n), e && a && n ? this.setData({
            disabled: !1,
            buttonType: "primary"
        }) : this.setData({
            disabled: !0,
            buttonType: "default"
        });
    },
    onSubmit: function(e) {
        var a = wx.getStorageSync("openid"), n = this.data.phoneNum, o = parseInt(this.data.code), s = this.data.smscode;
        if ("" == s || o != s) wx.showToast({
            title: "验证失败",
            icon: "error"
        }); else if (1 == this.data.enter) {
            var i = getCurrentPages();
            i[i.length - 2].setData({
                myphone: n
            }), wx.navigateBack({
                delta: 1
            });
        } else t.util.request({
            url: "entry/wxapp/Savemyphone",
            data: {
                u_phone: n,
                openid: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), wx.showToast({
                    title: "保存成功",
                    icon: "none",
                    success: function(t) {
                        wx.redirectTo({
                            url: "/hyb_yl/tabBar/my/my"
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});