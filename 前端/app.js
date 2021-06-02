App({
    bgcolor: function(t) {
        this.globalData.bg = t;
    },
    globalData: {
        bg: "",
        unReadMessageNum: 0,
        userInfo: null,
        saveFriendList: [],
        saveGroupInvitedList: [],
        isIPX: !1,
        audioList: [],
        playIndex: "",
        sdkappid: "",
        secretkey: ""
    },
    onLaunch: function() {
        this.autoUpdate(), wx.setInnerAudioOption({
            obeyMuteSwitch: !1
        });
        var t = wx.getStorageSync("logs") || [];
        t.unshift(Date.now()), wx.setStorageSync("logs", t);
    },
    autoUpdate: function() {
        console.log(new Date());
        var t = this;
        if (wx.canIUse("getUpdateManager")) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(o) {
                o.hasUpdate && (e.onUpdateReady(function() {
                    console.log(new Date()), wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(o) {
                            o.confirm ? e.applyUpdate() : o.cancel && wx.showModal({
                                title: "温馨提示~",
                                content: "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
                                success: function(e) {
                                    t.autoUpdate();
                                }
                            });
                        }
                    });
                }), e.onUpdateFailed(function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    getUserInfo: function(t) {
        var e = this;
        this.globalData.userInfo ? "function" == typeof t && t(this.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(o) {
                        e.globalData.userInfo = o.userInfo, "function" == typeof t && t(e.globalData.userInfo);
                    }
                });
            }
        });
    },
    checkIsIPhoneX: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                -1 != e.model.search("iPhone X") && (t.globalData.isIPX = !0);
            }
        });
    },
    onShow: function() {
        var t = wx.getUpdateManager();
        t.onCheckForUpdate(function(t) {
            console.log(t.hasUpdate);
        }), t.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                success: function(e) {
                    e.confirm && t.applyUpdate();
                }
            });
        }), t.onUpdateFailed(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本下载失败",
                showCancel: !1
            });
        });
    },
    util: require("we7/resource/js/util.js"),
    siteInfo: require("siteinfo.js")
});