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
        otherInfo: ""
    },
    onLoad: function() {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var a = this, o = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Myphone",
            data: {
                openid: o
            },
            success: function(t) {
                console.log(t), a.setData({
                    myphone: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), a.setData({
            bgc: e
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
            image: "../../../images/err.png"
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
        var e = this;
        t.util.request({
            url: "entry/wxapp/SendSms",
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
            var o = setInterval(function() {
                t.setData({
                    second: t.data.second - 1
                }), t.data.second <= 0 && (t.setData({
                    second: 60,
                    alreadySend: !1,
                    send: !0
                }), e(o));
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
        var t = this.data, e = t.phoneNum, a = t.code, o = t.otherInfo;
        console.log(o), e && a && o ? this.setData({
            disabled: !1,
            buttonType: "primary"
        }) : this.setData({
            disabled: !0,
            buttonType: "default"
        });
    },
    onSubmit: function(t) {
        wx.getStorageSync("openid");
        var e = this.data.phoneNum, a = parseInt(this.data.code), o = this.data.smscode;
        if (console.log(o), "" == o || a != o) wx.showToast({
            title: "验证失败",
            icon: "error"
        }); else {
            var n = getCurrentPages();
            n[n.length - 2].setData({
                z_telephone: e
            }), wx.navigateBack({
                delta: 1
            });
        }
    }
});