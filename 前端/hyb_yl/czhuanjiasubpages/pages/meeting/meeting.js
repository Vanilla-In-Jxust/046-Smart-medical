var t = getApp(), e = require("../../../../utils/util.js"), n = require("../../../../lib/Agora_Miniapp_SDK_for_WeChat.js"), o = require("../../../../utils/layout.js"), i = require("../../../../utils/config.js").APPID, a = require("../../../../utils/uploader.js"), c = a.LogUploader, r = a.LogUploaderTask;

Page({
    data: {
        media: [],
        muted: !1,
        beauty: 0,
        totalUser: 1,
        debug: !1
    },
    onLoad: function(t) {
        e.log("onLoad"), this.channel = t.channel, this.role = t.role || "broadcaster", 
        this.uid = e.getUid(), this.client = null, this.layouter = null, this.leaving = !1, 
        wx.setNavigationBarTitle({
            title: "".concat(this.channel, "(").concat(this.uid, ")")
        }), wx.setKeepScreenOn({
            keepScreenOn: !0
        }), /^sdktest.*$/.test(this.channel) && (this.testEnv = !0, wx.showModal({
            title: "提示",
            content: "您正处于测试环境",
            showCancel: !1
        }));
    },
    onReady: function() {
        var t = this, n = this.channel, o = this.uid;
        e.log("onReady"), this.logTimer = setInterval(function() {
            t.uploadLogs();
        }, 36e5), this.initLayouter(), this.initAgoraChannel(o, n).then(function(i) {
            e.log("channel: ".concat(n, ", uid: ").concat(o)), e.log("pushing ".concat(i));
            var a = new Date().getTime();
            t.isBroadcaster() && t.addMedia(0, t.uid, i, {
                key: a
            });
        }).catch(function(t) {
            console.log(t), e.log("init agora client failed: ".concat(t)), wx.showToast({
                title: "客户端初始化失败",
                icon: "none",
                duration: 5e3
            });
        });
    },
    onShareAppMessage: function() {},
    syncLayout: function(t) {
        for (var e = this.layouter.getSize(t.length), n = 0; n < e.length; n++) {
            var o = e[n], i = t[n];
            i.holding || (i.left = parseFloat(o.x).toFixed(2), i.top = parseFloat(o.y).toFixed(2), 
            i.width = parseFloat(o.width).toFixed(2), i.height = parseFloat(o.height).toFixed(2));
        }
        return t;
    },
    hasMedia: function(t, e) {
        return (this.data.media || []).filter(function(n) {
            return n.type === t && "".concat(n.uid) === "".concat(e);
        }).length > 0;
    },
    addMedia: function(t, n, o, i) {
        e.log("add media ".concat(t, " ").concat(n, " ").concat(o));
        var a = this.data.media || [];
        return 0 === t ? a.splice(0, 0, {
            key: i.key,
            type: t,
            uid: "".concat(n),
            holding: !1,
            url: o,
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }) : a.push({
            key: i.key,
            rotation: i.rotation,
            type: t,
            uid: "".concat(n),
            holding: !1,
            url: o,
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }), a = this.syncLayout(a), this.refreshMedia(a);
    },
    removeMedia: function(t) {
        e.log("remove media ".concat(t));
        var n = this.data.media || [];
        if ((n = n.filter(function(e) {
            return "".concat(e.uid) !== "".concat(t);
        })).length === this.data.media.length) return e.log("media not changed: ".concat(JSON.stringify(n))), 
        Promise.resolve();
        n = this.syncLayout(n), this.refreshMedia(n);
    },
    updateMedia: function(t, n) {
        e.log("update media ".concat(t, " ").concat(JSON.stringify(n)));
        for (var o = this.data.media || [], i = !1, a = 0; a < o.length; a++) {
            var c = o[a];
            if ("".concat(c.uid) === "".concat(t)) {
                o[a] = Object.assign(c, n), i = !0, e.log("after update media ".concat(t, " ").concat(JSON.stringify(c)));
                break;
            }
        }
        return i ? this.refreshMedia(o) : (e.log("media not changed: ".concat(JSON.stringify(o))), 
        Promise.resolve());
    },
    refreshMedia: function(t) {
        var n = this;
        return new Promise(function(o) {
            for (var i = 0; i < t.length; i++) t[i].holding = !(i < 10);
            t.length > 10 && wx.showToast({
                title: "由于房内人数超过7人，部分视频未被加载显示"
            }), e.log("updating media: ".concat(JSON.stringify(t))), n.setData({
                media: t
            }, function() {
                o();
            });
        });
    },
    onShow: function() {
        var t = this;
        (this.data.media || []).forEach(function(n) {
            if (0 !== n.type) {
                var o = t.getPlayerComponent(n.uid);
                o ? o.start() : e.log("player ".concat(n.uid, " component no longer exists"), "error");
            }
        });
    },
    onHide: function() {},
    onError: function(t) {
        e.log("error: ".concat(JSON.stringify(t)));
    },
    onUnload: function() {
        e.log("onUnload"), clearInterval(this.logTimer), clearTimeout(this.reconnectTimer), 
        this.logTimer = null, this.reconnectTimer = null;
        var t = getCurrentPages();
        (console.log(t), t.length > 1) && t[2].unlockJoin();
        if (this.isBroadcaster()) try {
            this.client && this.client.unpublish();
        } catch (t) {
            e.log("unpublish failed ".concat(t));
        }
        this.client && this.client.leave();
    },
    onLeave: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    navigateBack: function() {
        e.log("attemps to navigate back"), getCurrentPages().length > 1 ? wx.navigateBack({}) : wx.redirectTo({
            url: "../index/index"
        });
    },
    onPusherFailed: function() {
        var t = this;
        e.log("pusher failed completely", "error"), wx.showModal({
            title: "发生错误",
            content: "推流发生错误，请重新进入房间重试",
            showCancel: !1,
            success: function() {
                t.navigateBack();
            }
        });
    },
    onMute: function() {
        this.data.muted ? this.client.unmuteLocal("audio", function() {
            console.log("unmuteLocal success");
        }, function(t) {
            console.log(t);
        }) : this.client.muteLocal("audio", function() {
            console.log("muteLocal success");
        }, function(t) {
            console.log(t);
        }), this.setData({
            muted: !this.data.muted
        });
    },
    onSwitchCamera: function() {
        e.log("switching camera");
        var t = this.getPusherComponent();
        t && t.switchCamera();
    },
    onMakeup: function() {
        var t = 5 == this.data.beauty ? 0 : 5;
        this.setData({
            beauty: t
        });
    },
    uploadLogs: function() {
        var t = e.getLogs();
        e.clearLogs();
        t.length;
        var n = [], o = 0, i = new Date().getTime();
        do {
            var a = t.splice(0, 500);
            n.push(new r(a, this.channel, o++, i, this.uid));
        } while (t.length > 500);
        wx.showLoading({
            title: "0%",
            mask: !0
        }), c.off("progress").on("progress", function(t) {
            var n = t.remain, o = t.total;
            e.log("log upload progress ".concat(o - n, "/").concat(o)), 0 === n ? (wx.hideLoading(), 
            wx.showToast({
                title: "上传成功"
            })) : wx.showLoading({
                mask: !0,
                title: "".concat(((o - n) / o * 100).toFixed(2), "%")
            });
        }), c.on("error"), c.scheduleTasks(n);
    },
    onSubmitLog: function() {
        var t = this, n = this, o = this.isBroadcaster() ? "下麦" : "上麦";
        wx.showActionSheet({
            itemList: [ o, "上传日志" ],
            success: function(o) {
                var i = o.tapIndex;
                if (0 == i) if (t.isBroadcaster()) t.becomeAudience().then(function() {
                    t.removeMedia(t.uid);
                }).catch(function(t) {
                    e.log("switch to audience failed ".concat(t.stack));
                }); else {
                    var a = new Date().getTime();
                    t.becomeBroadcaster().then(function(e) {
                        t.addMedia(0, t.uid, e, {
                            key: a
                        });
                    }).catch(function(t) {
                        e.log("switch to broadcaster failed ".concat(t.stack));
                    });
                } else 1 === i && (t.setData({
                    debug: !t.data.debug
                }), wx.showModal({
                    title: "遇到使用问题?",
                    content: "点击确定可以上传日志，帮助我们了解您在使用过程中的问题",
                    success: function(t) {
                        t.confirm ? (console.log("用户点击确定"), n.uploadLogs()) : t.cancel && console.log("用户点击取消");
                    }
                }));
            }
        });
    },
    initLayouter: function() {
        var e = t.globalData.systemInfo;
        console.log(e), this.layouter = new o(e.windowWidth, e.windowHeight - 64);
    },
    initAgoraChannel: function(t, o) {
        var a = this;
        return new Promise(function(c, r) {
            var s = {};
            s = a.testEnv ? new n.Client({
                servers: [ "wss://miniapp.agoraio.cn/120-131-14-112/api" ]
            }) : new n.Client(), a.subscribeEvents(s), n.LOG.onLog = function(t) {
                e.log(t);
            }, n.LOG.setLogLevel(-1), a.client = s, s.setRole(a.role), s.init(i, function() {
                e.log("client init success"), s.join(void 0, o, t, function() {
                    e.log("client join channel success"), a.isBroadcaster() ? s.publish(function(t) {
                        e.log("client publish success"), c(t);
                    }, function(t) {
                        e.log("client publish failed: ".concat(t.code, " ").concat(t.reason)), r(t);
                    }) : c();
                }, function(t) {
                    e.log("client join channel failed: ".concat(t.code, " ").concat(t.reason)), r(t);
                });
            }, function(t) {
                e.log("client init failed: ".concat(t, " ").concat(t.code, " ").concat(t.reason)), 
                r(t);
            });
        });
    },
    reinitAgoraChannel: function(t, o) {
        var a = this;
        return new Promise(function(c, r) {
            var s = {};
            s = a.testEnv ? new n.Client({
                servers: [ "wss://miniapp.agoraio.cn/120-131-14-112/api" ]
            }) : new n.Client(), a.subscribeEvents(s), n.LOG.onLog = function(t) {
                e.log(t);
            }, n.LOG.setLogLevel(-1);
            var l = a.data.media.map(function(t) {
                return t.uid;
            });
            a.client = s, s.setRole(a.role), s.init(i, function() {
                e.log("client init success"), e.log("rejoin with uids: ".concat(JSON.stringify(l))), 
                s.rejoin(void 0, o, t, l, function() {
                    e.log("client join channel success"), a.isBroadcaster() ? s.publish(function(t) {
                        e.log("client publish success"), c(t);
                    }, function(t) {
                        e.log("client publish failed: ".concat(t.code, " ").concat(t.reason)), r(t);
                    }) : c();
                }, function(t) {
                    e.log("client join channel failed: ".concat(t.code, " ").concat(t.reason)), r(t);
                });
            }, function(t) {
                e.log("client init failed: ".concat(t, " ").concat(t.code, " ").concat(t.reason)), 
                r(t);
            });
        });
    },
    getPlayerComponent: function(t) {
        return this.selectComponent("#rtc-player-".concat(t));
    },
    getPusherComponent: function() {
        return this.selectComponent("#rtc-pusher");
    },
    becomeBroadcaster: function() {
        var t = this;
        return new Promise(function(n, o) {
            if (!t.client) return o(new Error("no client available"));
            var i = t.client;
            t.role = "broadcaster", i.setRole(t.role), e.log("client switching role to ".concat(t.role)), 
            i.publish(function(t) {
                e.log("client publish success"), n(t);
            }, function(t) {
                e.log("client publish failed: ".concat(t.code, " ").concat(t.reason)), o(t);
            });
        });
    },
    becomeAudience: function() {
        var t = this;
        return new Promise(function(n, o) {
            if (!t.client) return o(new Error("no client available"));
            var i = t.client;
            i.unpublish(function() {
                e.log("client unpublish success"), t.role = "audience", e.log("client switching role to ".concat(t.role)), 
                i.setRole(t.role), n();
            }, function(t) {
                e.log("client unpublish failed: ".concat(t.code, " ").concat(t.reason)), o(t);
            });
        });
    },
    reconnect: function() {
        var t = this;
        wx.showToast({
            title: "尝试恢复链接...",
            icon: "none",
            duration: 5e3
        }), this.client && this.client.destroy(), this.reconnectTimer = setTimeout(function() {
            var n = t.uid, o = t.channel;
            t.reinitAgoraChannel(n, o).then(function(i) {
                e.log("channel: ".concat(o, ", uid: ").concat(n)), e.log("pushing ".concat(i));
                var a = new Date().getTime();
                t.isBroadcaster() && (t.hasMedia(0, t.uid) ? t.updateMedia(t.uid, {
                    url: i,
                    key: a
                }) : (e.log("pusher not yet exists when rejoin...adding"), t.addMedia(0, t.uid, i, {
                    key: a
                })));
            }).catch(function(n) {
                return e.log("reconnect failed: ".concat(n)), t.reconnect();
            });
        }, 1e3);
    },
    isBroadcaster: function() {
        return "broadcaster" === this.role;
    },
    subscribeEvents: function(t) {
        var n = this;
        t.on("video-rotation", function(t) {
            e.log("video rotated: ".concat(t.rotation, " ").concat(t.uid)), setTimeout(function() {
                var e = n.getPlayerComponent(t.uid);
                e && e.rotate(t.rotation);
            }, 1e3);
        }), t.on("stream-added", function(o) {
            var i = o.uid, a = new Date().getTime();
            e.log("stream ".concat(i, " added")), t.subscribe(i, function(t, o) {
                e.log("stream ".concat(i, " subscribed successful"));
                for (var c = n.data.media || [], r = null, s = 0; s < c.length; s++) {
                    var l = n.data.media[s];
                    if ("".concat(l.uid) === "".concat(i)) {
                        r = l;
                        break;
                    }
                }
                r ? n.updateMedia(r.uid, {
                    url: t,
                    key: a
                }) : n.addMedia(1, i, t, {
                    key: a,
                    rotation: o
                });
            }, function(t) {
                e.log("stream subscribed failed ".concat(t, " ").concat(t.code, " ").concat(t.reason));
            });
        }), t.on("stream-removed", function(t) {
            var o = t.uid;
            e.log("stream ".concat(o, " removed")), n.removeMedia(o);
        }), t.on("error", function(t) {
            var o = t || {}, i = o.code || 0, a = o.reason || "";
            e.log("error: ".concat(i, ", reason: ").concat(a));
            new Date().getTime();
            501 !== i && 904 !== i || n.reconnect();
        }), t.on("update-url", function(t) {
            e.log("update-url: ".concat(JSON.stringify(t)));
            var o = t.uid, i = t.url, a = new Date().getTime();
            "".concat(o) === "".concat(n.uid) ? e.log("ignore update-url") : n.updateMedia(o, {
                url: i,
                key: a
            });
        });
    }
});