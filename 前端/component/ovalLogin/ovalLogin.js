require("../../we7/resource/js/util.js");

var t = getApp();

Component({
    properties: {},
    data: {
        maskshow: !0,
        maskCont: !0,
        firstmask: !1
    },
    methods: {
        goOn: function() {
            this.triggerEvent("flagEvent", {});
        },
        quxiao: function() {
            this.setData({
                maskshow: !1,
                maskCont: !1,
                firstmask: !0
            });
        },
        tanchu: function() {
            this.setData({
                maskshow: !0,
                maskCont: !0,
                firstmask: !1
            });
        },
        bindGetUserInfo: function(e) {
            e.detail.userInfo ? (t.globalData.wxInfo = e.detail.userInfo, this.getLoginInfo()) : console.log("用户点击了“拒绝授权”");
        },
        getLoginInfo: function() {
            var e = this;
            wx.login({
                success: function(a) {
                    console.log(a), wx.setStorageSync("code", a.code), a.code && t.util.request({
                        url: "entry/wxapp/authorize.getuid",
                        data: {
                            code: a.code
                        },
                        success: function(a) {
                            console.log(a), wx.setStorageSync("sessionKey", a.data.userinfo.session_key), t.globalData.sessionInfo = a.data, 
                            e.isLogin();
                        }
                    });
                }
            });
        },
        isLogin: function() {
            var e = this, a = t.globalData.sessionInfo.openid, o = t.globalData.wxInfo.nickName, s = t.globalData.wxInfo.avatarUrl;
            t.util.request({
                url: "entry/wxapp/authorize.tymember",
                data: {
                    u_name: o,
                    u_thumb: s,
                    openid: a
                },
                success: function(o) {
                    console.log(o), t.util.request({
                        url: "entry/wxapp/authorize.ifregister",
                        data: {
                            openid: a
                        },
                        success: function(e) {
                            console.log(e), "" != e.data && null != e.data && "undefined" != e.data && e.data ? t.util.request({
                                url: "entry/wxapp/authorize.ifregister",
                                data: {
                                    openid: a
                                },
                                success: function(t) {
                                    var e = t.data;
                                    wx.setStorage({
                                        key: "myUsername",
                                        data: e
                                    });
                                }
                            }) : t.util.request({
                                url: "entry/wxapp/authorize.updateadmin",
                                data: {
                                    openid: a
                                },
                                success: function(t) {
                                    console.log(t);
                                }
                            });
                        }
                    }), t.globalData.userInfo = o.data, wx.setStorageSync("openid", a), wx.setStorageSync("userInfo", o.data), 
                    e.setData({
                        maskshow: !1,
                        maskCont: !1,
                        firstmask: !1
                    }), e.triggerEvent("flagEvent", {});
                }
            });
        }
    }
});