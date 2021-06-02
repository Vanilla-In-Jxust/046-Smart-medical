var t = getApp();

Page({
    data: {},
    jujue: function() {
        wx.navigateBack({
            delta: 1
        });
        var t = getCurrentPages();
        t[t.length - 1];
        t[t.length - 2].setData({
            maskshow: !0,
            maskCont: !1,
            firstmask: !0
        });
    },
    bindGetUserInfo: function(a) {
        a.detail.userInfo ? (t.globalData.wxInfo = a.detail.userInfo, this.getLoginInfo()) : console.log("用户点击了“拒绝授权”");
    },
    getLoginInfo: function() {
        var a = this;
        wx.login({
            success: function(e) {
                console.log(e), wx.setStorageSync("code", e.code), e.code && t.util.request({
                    url: "entry/wxapp/authorize.getuid",
                    data: {
                        code: e.code
                    },
                    success: function(e) {
                        console.log(e), wx.setStorageSync("sessionKey", e.data.userinfo.session_key), t.globalData.sessionInfo = e.data, 
                        a.isLogin();
                    }
                });
            }
        });
    },
    isLogin: function() {
        var a = this, e = t.globalData.sessionInfo.openid, o = t.globalData.wxInfo.nickName, n = t.globalData.wxInfo.avatarUrl;
        t.util.request({
            url: "entry/wxapp/authorize.tymember",
            data: {
                u_name: o,
                u_thumb: n,
                openid: e
            },
            success: function(o) {
                console.log(o), t.util.request({
                    url: "entry/wxapp/authorize.ifregister",
                    data: {
                        openid: e
                    },
                    success: function(a) {
                        console.log(a), "" != a.data && null != a.data && "undefined" != a.data && a.data ? t.util.request({
                            url: "entry/wxapp/authorize.ifregister",
                            data: {
                                openid: e
                            },
                            success: function(t) {
                                var a = t.data;
                                wx.setStorage({
                                    key: "myUsername",
                                    data: a
                                });
                            }
                        }) : t.util.request({
                            url: "entry/wxapp/authorize.updateadmin",
                            data: {
                                openid: e
                            },
                            success: function(t) {
                                console.log("aaa", t);
                            }
                        });
                        var o = getCurrentPages();
                        o[o.length - 1];
                        o[o.length - 2].setData({
                            maskshow: !0,
                            maskCont: !1,
                            firstmask: !1
                        }), wx.navigateBack({
                            delta: 1
                        });
                    }
                }), t.globalData.userInfo = o.data, wx.setStorageSync("openid", e), wx.setStorageSync("userInfo", o.data), 
                a.setData({
                    maskshow: !1,
                    maskCont: !1,
                    firstmask: !1
                }), a.triggerEvent("flagEvent", {});
            }
        });
    },
    onLoad: function(t) {},
    onReady: function() {
        this.getBase();
    },
    getBase: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                var e = t.data.ztcolor, o = t.data.baidukey, n = t.data.show_title;
                wx.setStorageSync("bastitle", n), wx.setStorageSync("baidukey", o), a.setData({
                    baseinfo: t.data,
                    bastitle: n
                }), wx.setNavigationBarTitle({
                    title: t.data.show_title
                }), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: e
                }), wx.setStorage({
                    key: "color",
                    data: e
                });
            },
            fail: function(t) {}
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});