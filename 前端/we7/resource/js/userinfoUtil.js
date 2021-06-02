var o = {}, e = getApp();

require("../js/util.js");

o.getOpenId = function(o) {
    var n = this;
    "" == e.globalData.openId ? e.util.request({
        url: "entry/wxapp/GetUid",
        data: {
            code: o
        },
        success: function(o) {
            var a = o.data.data;
            if (wx.hideLoading(), console.log(o.data), null != a) {
                if (console.log("获取用户openID:" + a.userinfo.openid), null != e.globalData.userInfo && "" != e.globalData.openId) {
                    var t = wx.getStorageSync("have_status_user");
                    console.log("have_user:" + t), t && (console.log("检查一次用户信息"), n.check_user_have());
                }
                e.globalData.openId = a.openid, wx.setStorageSync("openId", a.openid);
            } else console.log("======解析失败==openid=======");
        }
    }) : wx.setStorageSync("openId", e.globalData.openId);
}, o.getUserinfo_det = function(o) {
    var n = this, a = wx.getStorageSync("openId");
    "" != a && null != a ? (e.globalData.openId = a, console.log("缓存Store:" + e.globalData.openId)) : "" == e.globalData.openId && null != e.globalData.openId ? n.getOpenId(o) : console.log("缓存App:" + e.globalData.openId);
    var t = wx.getStorageSync("ubinfo");
    "" != t && null != t ? (e.globalData.userInfo = t, console.log("缓存stroe:" + JSON.stringify(t))) : null == e.globalData.userInfo && (wx.getUserInfo({
        success: function(o) {
            var n = o.userInfo;
            console.log("实时用户信息>>>"), console.log(n), e.globalData.userInfo = n, wx.setStorageSync("ubinfo", n);
        }
    }), setTimeout(function() {
        "" == e.globalData.openId && wx.login({
            success: function(o) {
                o.code && n.getOpenId(o.code);
            }
        });
    }, 1500)), setTimeout(function() {
        if (null != e.globalData.userInfo && "" != e.globalData.openId) {
            var o = wx.getStorageSync("have_status_user");
            console.log("have_user:" + o), o && (console.log("检查一次用户信息"), n.check_user_have());
        }
    }, 1200);
}, o.getUserinfo = function() {
    var o = this;
    wx.login({
        success: function(e) {
            e.code && wx.getUserInfo({
                success: function(n) {
                    o.getUserinfo_det(e.code);
                },
                fail: function() {
                    wx.showModal({
                        title: "提示",
                        content: "授权获取用户信息失败,将不可发布消息和评论!",
                        confirmText: "去设置",
                        success: function(e) {
                            e.confirm ? wx.openSetting({
                                success: function(e) {
                                    e && (1 == e.authSetting["scope.userInfo"] ? (console.log("取得用户信息授权成功"), wx.login({
                                        success: function(e) {
                                            e.code && o.getUserinfo_det(e.code);
                                        }
                                    })) : o.getUserinfo());
                                }
                            }) : o.getUserinfo();
                        }
                    });
                }
            });
        }
    });
}, o.check_user_have = function() {
    var o = {};
    o.u_unionid = e.globalData.unionId, o.u_openid = e.globalData.openId, o.u_nickname = e.globalData.userInfo.nickName, 
    o.u_city = e.globalData.userInfo.city, o.u_avatarurl = e.globalData.userInfo.avatarUrl, 
    o.u_gender = e.globalData.userInfo.gender, o.u_province = e.globalData.userInfo.province, 
    o.u_country = e.globalData.userInfo.country, "" != o.u_openid && e.util.request({
        url: "entry/wxapp/check_user_have",
        data: o,
        success: function(o) {
            console.log("检查用户信息:"), console.log(o.data.data), wx.setStorageSync("have_status_user", o.data.data.user_have);
        }
    });
}, o.pay_user_account = function() {}, o.pay_wx_api = function() {}, o.gps_loc = function() {}, 
module.exports = o;