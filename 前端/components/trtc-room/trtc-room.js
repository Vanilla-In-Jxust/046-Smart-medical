var e = require("../../@babel/runtime/helpers/interopRequireWildcard"), t = require("../../@babel/runtime/helpers/interopRequireDefault"), s = t(require("../../@babel/runtime/helpers/defineProperty")), a = t(require("controller/user-controller.js")), o = t(require("model/pusher.js")), r = require("common/constants.js"), i = t(require("utils/event.js")), n = e(require("utils/environment.js")), u = t(require("libs/tim-wx.js")), l = t(require("libs/mta_analysis.js"));

function c(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), s.push.apply(s, a);
    }
    return s;
}

var d = "TRTC-ROOM", h = u.default.TYPES.GRP_CHATROOM, m = 0, g = 0;

Component({
    properties: {
        config: {
            type: Object,
            value: {
                sdkAppID: "",
                userID: "",
                userSig: "",
                template: "",
                debugMode: !1,
                enableIM: !1
            },
            observer: function(e, t) {
                this._propertyObserver({
                    name: "config",
                    newVal: e,
                    oldVal: t
                });
            }
        }
    },
    data: {
        pusher: null,
        debugPanel: !0,
        debug: !1,
        streamList: [],
        visibleStreamList: [],
        userList: [],
        template: "",
        cameraPosition: "",
        panelName: "",
        localVolume: 0,
        remoteVolumeList: [],
        enableIM: !1,
        showIMPanel: !1,
        exitIMThrottle: !1,
        messageContent: "",
        messageList: [],
        maxMessageListLength: 10,
        messageListScrollTop: 0,
        appVersion: n.APP_VERSION,
        libVersion: n.LIB_VERSION,
        hasGridPageTipsShow: !1,
        gridPageCount: 0,
        gridCurrentPage: 1,
        gridPlayerPerPage: 4,
        gridPagePlaceholderStreamList: [],
        isFullscreenDevice: n.IS_FULLSCREEN_DEVICE,
        isShowMoreMenu: !1,
        MICVolume: 50,
        BGMVolume: 50,
        BGMProgress: 0,
        beautyStyle: "smooth",
        beautyStyleArray: [ {
            value: "smooth",
            label: "光滑",
            checked: !0
        }, {
            value: "nature",
            label: "自然",
            checked: !1
        }, {
            value: "close",
            label: "关闭",
            checked: !1
        } ],
        filterIndex: 0,
        filterArray: [ {
            value: "standard",
            label: "标准"
        }, {
            value: "pink",
            label: "粉嫩"
        }, {
            value: "nostalgia",
            label: "怀旧"
        }, {
            value: "blues",
            label: "蓝调"
        }, {
            value: "romantic",
            label: "浪漫"
        }, {
            value: "cool",
            label: "清凉"
        }, {
            value: "fresher",
            label: "清新"
        }, {
            value: "solor",
            label: "日系"
        }, {
            value: "aestheticism",
            label: "唯美"
        }, {
            value: "whitening",
            label: "美白"
        }, {
            value: "cerisered",
            label: "樱红"
        } ],
        audioReverbType: 0,
        audioReverbTypeArray: [ "关闭", "KTV", "小房间", "大会堂", "低沉", "洪亮", "金属声", "磁性" ]
    },
    lifetimes: {
        created: function() {
            console.log(d, "created", n), l.default.App.init({
                appID: "500710685",
                eventID: "500710697",
                autoReport: !0,
                statParam: !0
            });
        },
        attached: function() {
            console.log(d, "attached"), this._init(), l.default.Page.stat();
        },
        ready: function() {
            console.log(d, "ready");
        },
        detached: function() {
            console.log(d, "detached"), this.exitRoom();
        },
        error: function(e) {
            console.log(d, "error", e);
        }
    },
    pageLifetimes: {
        show: function() {
            var e = this;
            if (console.log(d, "show status:", this.status), this.status.isPending) this.status.isPending = !1, 
            this.enterRoom({
                roomID: this.data.config.roomID
            }).then(function() {}); else if (n.IS_ANDROID && "hide" === this.status.pageLife && this.status.isOnHideAddStream && this.data.streamList.length > 0) {
                for (var t = this.data.streamList, s = [], a = 0; a < t.length; a++) if (t[a].isOnHideAdd && t[a].playerContext) {
                    var o = t[a];
                    s.push(o), o.playerContext = void 0, t.splice(a, 1);
                }
                this._setList({
                    streamList: t
                }).then(function() {
                    for (var a = 0; a < s.length; a++) t.push(s[a]);
                    e._setList({
                        streamList: t
                    }).then(function() {
                        for (var t = 0; t < s.length; t++) s[t] = wx.createLivePlayerContext(s[t].streamID, e);
                        s = [];
                    });
                }), this.status.isOnHideAddStream = !1;
            }
            this.status.pageLife = "show";
        },
        hide: function() {
            console.log(d, "hide"), this.status.pageLife = "hide";
        },
        resize: function(e) {
            console.log(d, "resize", e);
        }
    },
    methods: {
        _init: function() {
            console.log(d, "_init"), this.userController = new a.default(this), this._emitter = new i.default(), 
            this.EVENT = r.EVENT, this._initStatus(), this._bindEvent(), this._gridBindEvent(), 
            this._keepScreenOn(), console.log(d, "_init success component:", this);
        },
        _initStatus: function() {
            this.status = {
                isPush: !1,
                isPending: !1,
                pageLife: "",
                isOnHideAddStream: !1
            }, this._lastTapTime = 0, this._beforeLastTapTime = 0, this._lastTapCoordinate = {
                x: 0,
                y: 0
            }, this._isFullscreen = !1;
        },
        _propertyObserver: function(e) {
            if (console.log(d, "_propertyObserver", e, this.data.config), "config" === e.name) {
                var t = Object.assign({}, r.DEFAULT_COMPONENT_CONFIG, e.newVal);
                console.log(d, "_propertyObserver config:", t), "string" == typeof t.debugMode && (t.debugMode = "true" === t.debugMode), 
                t.enableIM && t.sdkAppID && this._initIM(t), t.sdkAppID && e.oldVal.sdkAppID !== t.sdkAppID && l.default && l.default.Event.stat("sdkAppID", {
                    value: t.sdkAppID
                }), this.setData({
                    enableIM: t.enableIM,
                    template: t.template,
                    debugMode: t.debugMode || !1,
                    debug: t.debugMode || !1
                }), this._setPusherConfig(t);
            }
        },
        enterRoom: function(e) {
            var t = this;
            return new Promise(function(a, o) {
                console.log(d, "enterRoom"), console.log(d, "params", e), console.log(d, "config", t.data.config), 
                console.log(d, "pusher", t.data.pusher), e && (Object.assign(t.data.pusher, e), 
                Object.assign(t.data.config, e)), t._checkParam(t.data.config) ? (t._getPushUrl(t.data.config).then(function(e) {
                    t.data.pusher.url = e, t.setData({
                        pusher: t.data.pusher
                    }, function() {
                        console.log(d, "enterRoom", t.data.pusher), t.data.pusher.getPusherContext().start(), 
                        t.status.isPush = !0, a();
                    });
                }).catch(function(e) {
                    console.error(d, "enterRoom error", e), o(e);
                }), t._loginIM(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(a), !0).forEach(function(t) {
                            (0, s.default)(e, t, a[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                        });
                    }
                    return e;
                }({}, t.data.config, {
                    roomID: e.roomID
                }))) : o(new Error("缺少必要参数"));
            });
        },
        exitRoom: function() {
            var e = this;
            return "hide" === this.status.pageLife && console.warn(d, "小程序最小化时不能调用 exitRoom，如果不想听到远端声音，可以调用取消订阅，如果不想远端听到声音，可以调用取消发布"), 
            new Promise(function(t, s) {
                console.log(d, "exitRoom"), e._exitIM(), e.data.pusher.reset(), e.status.isPush = !1;
                var a = e.userController.reset();
                e.setData({
                    pusher: e.data.pusher,
                    userList: a.userList,
                    streamList: a.streamList,
                    visibleStreamList: e._filterVisibleStream(a.streamList)
                }, function() {
                    t({
                        userList: e.data.userList,
                        streamList: e.data.streamList
                    }), console.log(d, "exitRoom success", e.data.pusher, e.data.streamList, e.data.userList), 
                    e._emitter.emit(r.EVENT.LOCAL_LEAVE, {
                        userID: e.data.pusher.userID
                    });
                });
            });
        },
        publishLocalVideo: function() {
            return console.log(d, "publishLocalVideo 开启摄像头"), this._setPusherConfig({
                enableCamera: !0
            });
        },
        unpublishLocalVideo: function() {
            return console.log(d, "unpublshLocalVideo 关闭摄像头"), this._setPusherConfig({
                enableCamera: !1
            });
        },
        publishLocalAudio: function() {
            return console.log(d, "publishLocalAudio 开启麦克风"), this._setPusherConfig({
                enableMic: !0
            });
        },
        unpublishLocalAudio: function() {
            return console.log(d, "unpublshLocalAudio 关闭麦克风"), this._setPusherConfig({
                enableMic: !1
            });
        },
        subscribeRemoteVideo: function(e) {
            console.log(d, "subscribeRemoteVideo", e);
            var t = {
                muteVideo: !1
            }, s = "small" === e.streamType ? "main" : e.streamType, a = this.userController.getStream({
                userID: e.userID,
                streamType: s
            });
            return a.muteVideoPrev = !1, "small" !== e.streamType && "main" !== e.streamType || a && "main" === a.streamType && (console.log(d, "subscribeRemoteVideo switch small", a.src), 
            "small" === e.streamType ? (t.src = a.src.replace("main", "small"), t._definitionType = "small") : "main" === e.streamType && (a.src = a.src.replace("small", "main"), 
            t._definitionType = "main"), console.log(d, "subscribeRemoteVideo", a.src)), this._setPlayerConfig({
                userID: e.userID,
                streamType: s,
                config: t
            });
        },
        unsubscribeRemoteVideo: function(e) {
            return console.log(d, "unsubscribeRemoteVideo", e), this.userController.getStream({
                userID: e.userID,
                streamType: e.streamType
            }).muteVideoPrev = !0, this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    muteVideo: !0
                }
            });
        },
        subscribeRemoteAudio: function(e) {
            return console.log(d, "subscribeRemoteAudio", e), this._setPlayerConfig({
                userID: e.userID,
                streamType: "main",
                config: {
                    muteAudio: !1
                }
            });
        },
        unsubscribeRemoteAudio: function(e) {
            return console.log(d, "unsubscribeRemoteAudio", e), this._setPlayerConfig({
                userID: e.userID,
                streamType: "main",
                config: {
                    muteAudio: !0
                }
            });
        },
        on: function(e, t, s) {
            this._emitter.on(e, t, s);
        },
        off: function(e, t) {
            this._emitter.off(e, t);
        },
        getRemoteUserList: function() {
            return this.data.userList;
        },
        switchCamera: function() {
            var e = this;
            this.data.cameraPosition || (this.data.cameraPosition = this.data.pusher.frontCamera), 
            console.log(d, "switchCamera", this.data.cameraPosition), this.data.cameraPosition = "front" === this.data.cameraPosition ? "back" : "front", 
            this.setData({
                cameraPosition: this.data.cameraPosition
            }, function() {
                console.log(d, "switchCamera success", e.data.cameraPosition);
            }), this.data.pusher.getPusherContext().switchCamera();
        },
        setViewRect: function(e) {
            return console.log(d, "setViewRect", e), "custom" !== this.data.template && console.warn('如需使用setViewRect方法，请初始化时设置template:"custom", 当前 template:"'.concat(this.data.template, '"')), 
            console.info("不建议使用该方法动态修改样式，避免引起微信小程序渲染问题，建议直接修改 wxml wxss 进行样式定制化"), this.data.pusher.userID === e.userID ? this._setPusherConfig({
                xAxis: e.xAxis,
                yAxis: e.yAxis,
                width: e.width,
                height: e.height
            }) : this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    xAxis: e.xAxis,
                    yAxis: e.yAxis,
                    width: e.width,
                    height: e.height
                }
            });
        },
        setViewVisible: function(e) {
            return console.log(d, "setViewVisible", e), "custom" !== this.data.template && console.warn('如需使用setViewVisible方法，请初始化时设置template:"custom", 当前 template:"'.concat(this.data.template, '"')), 
            console.info("不建议使用该方法动态修改样式，避免引起微信小程序渲染问题，建议直接修改 wxml wxss 进行样式定制化"), this.data.pusher.userID === e.userID ? this._setPusherConfig({
                isVisible: e.isVisible
            }) : this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    isVisible: e.isVisible
                }
            });
        },
        setViewZIndex: function(e) {
            return console.log(d, "setViewZIndex", e), "custom" !== this.data.template && console.warn('如需使用setViewZIndex方法，请初始化时设置template:"custom", 当前 template:"'.concat(this.data.template, '"')), 
            console.info("不建议使用该方法动态修改样式，避免引起微信小程序渲染问题，建议直接修改 wxml wxss 进行样式定制化"), this.data.pusher.userID === e.userID ? this._setPusherConfig({
                zIndex: e.zindex || e.zIndex
            }) : this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    zIndex: e.zindex || e.zIndex
                }
            });
        },
        playBGM: function(e) {
            var t = this;
            return new Promise(function(s, a) {
                t.data.pusher.getPusherContext().playBGM({
                    url: e.url,
                    success: function() {
                        console.log(d, "播放背景音成功"), s();
                    },
                    fail: function() {
                        console.log(d, "播放背景音失败"), t._emitter.emit(r.EVENT.BGM_PLAY_FAIL), a(new Error("播放背景音失败"));
                    }
                });
            });
        },
        stopBGM: function() {
            this.data.pusher.getPusherContext().stopBGM();
        },
        pauseBGM: function() {
            this.data.pusher.getPusherContext().pauseBGM();
        },
        resumeBGM: function() {
            this.data.pusher.getPusherContext().resumeBGM();
        },
        setBGMVolume: function(e) {
            console.log(d, "setBGMVolume", e), this.data.pusher.getPusherContext().setBGMVolume({
                volume: e.volume
            });
        },
        setMICVolume: function(e) {
            console.log(d, "setMICVolume", e), this.data.pusher.getPusherContext().setMICVolume({
                volume: e.volume
            });
        },
        sendSEI: function(e) {
            var t = this;
            return new Promise(function(s, a) {
                t.data.pusher.getPusherContext().sendMessage({
                    msg: e.message,
                    success: function(e) {
                        s(e);
                    }
                });
            });
        },
        snapshot: function(e) {
            var t = this;
            return console.log(d, "snapshot", e), new Promise(function(s, a) {
                t.captureSnapshot(e).then(function(e) {
                    wx.saveImageToPhotosAlbum({
                        filePath: e.tempImagePath,
                        success: function(t) {
                            wx.showToast({
                                title: "已保存到相册"
                            }), console.log("save photo is success", t), s(e);
                        },
                        fail: function(e) {
                            wx.showToast({
                                icon: "none",
                                title: "保存失败"
                            }), console.log("save photo is fail", e), a(e);
                        }
                    });
                }).catch(function(e) {
                    a(e);
                });
            });
        },
        captureSnapshot: function(e) {
            var t = this;
            return new Promise(function(s, a) {
                e.userID === t.data.pusher.userID ? t.data.pusher.getPusherContext().snapshot({
                    quality: "raw",
                    complete: function(e) {
                        console.log(d, "snapshot pusher", e), e.tempImagePath ? s(e) : (console.log("snapShot 回调失败", e), 
                        a(new Error("截图失败")));
                    }
                }) : t.userController.getStream(e).playerContext.snapshot({
                    quality: "raw",
                    complete: function(e) {
                        console.log(d, "snapshot player", e), e.tempImagePath ? s(e) : (console.log("snapShot 回调失败", e), 
                        a(new Error("截图失败")));
                    }
                });
            });
        },
        enterFullscreen: function(e) {
            var t = this;
            return console.log(d, "enterFullscreen", e), new Promise(function(s, a) {
                t.userController.getStream(e).playerContext.requestFullScreen({
                    direction: e.direction || 0,
                    success: function(e) {
                        console.log(d, "enterFullscreen success", e), s(e);
                    },
                    fail: function(e) {
                        console.log(d, "enterFullscreen fail", e), a(e);
                    }
                });
            });
        },
        exitFullscreen: function(e) {
            var t = this;
            return console.log(d, "exitFullscreen", e), new Promise(function(s, a) {
                t.userController.getStream(e).playerContext.exitFullScreen({
                    success: function(e) {
                        console.log(d, "exitFullScreen success", e), s(e);
                    },
                    fail: function(e) {
                        console.log(d, "exitFullScreen fail", e), a(e);
                    }
                });
            });
        },
        setRemoteOrientation: function(e) {
            return this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    orientation: e.orientation
                }
            });
        },
        setViewOrientation: function(e) {
            return this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    orientation: e.orientation
                }
            });
        },
        setRemoteFillMode: function(e) {
            return this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    objectFit: e.fillMode
                }
            });
        },
        setViewFillMode: function(e) {
            return this._setPlayerConfig({
                userID: e.userID,
                streamType: e.streamType,
                config: {
                    objectFit: e.fillMode
                }
            });
        },
        sendC2CTextMessage: function(e) {
            if (this.tim) {
                console.log(d, "sendC2CTextMessage", e);
                var t = this.tim.createTextMessage({
                    to: e.userID + "",
                    conversationType: u.default.TYPES.CONV_C2C,
                    payload: {
                        text: e.message
                    }
                }), s = this.tim.sendMessage(t);
                return s.then(function(e) {
                    console.log(d, "sendC2CTextMessage success", e);
                }).catch(function(e) {
                    console.warn(d, "sendC2CTextMessage error:", e);
                }), s;
            }
            console.warn(d, "未开启IM功能，该方法无法使用", e);
        },
        sendC2CCustomMessage: function(e) {
            if (this.tim) {
                console.log(d, "sendC2CCustomMessage", e);
                var t = this.tim.createCustomMessage({
                    to: e.userID + "",
                    conversationType: u.default.TYPES.CONV_C2C,
                    payload: e.payload
                }), s = this.tim.sendMessage(t);
                return s.then(function(e) {
                    console.log(d, "sendMessage success", e);
                }).catch(function(e) {
                    console.warn(d, "sendMessage error:", e);
                }), s;
            }
            console.warn(d, "未开启IM功能，该方法无法使用", e);
        },
        sendGroupTextMessage: function(e) {
            if (this.tim) {
                console.log(d, "sendGroupTextMessage", e);
                var t = this.tim.createTextMessage({
                    to: e.roomID + "",
                    conversationType: u.default.TYPES.CONV_GROUP,
                    payload: {
                        text: e.message
                    }
                }), s = this.tim.sendMessage(t);
                return s.then(function(e) {
                    console.log(d, "sendGroupTextMessage success", e);
                }).catch(function(e) {
                    console.warn(d, "sendGroupTextMessage error:", e);
                }), s;
            }
            console.warn(d, "未开启IM功能，该方法无法使用", e);
        },
        sendGroupCustomMessage: function(e) {
            if (this.tim) {
                console.log(d, "sendGroupCustomMessage", e);
                var t = this.tim.createCustomMessage({
                    to: e.roomID + "",
                    conversationType: u.default.TYPES.CONV_GROUP,
                    payload: e.payload
                }), s = this.tim.sendMessage(t);
                return s.then(function(e) {
                    console.log(d, "sendMessage success", e);
                }).catch(function(e) {
                    console.warn(d, "sendMessage error:", e);
                }), s;
            }
            console.warn(d, "未开启IM功能，该方法无法使用", e);
        },
        _setPusherConfig: function(e) {
            var t = this, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return s || console.log(d, "_setPusherConfig", e, this.data.pusher), new Promise(function(a, r) {
                t.data.pusher ? Object.assign(t.data.pusher, e) : t.data.pusher = new o.default(e), 
                t.setData({
                    pusher: t.data.pusher
                }, function() {
                    s || console.log(d, "_setPusherConfig setData compelete", "config:", e, "pusher:", t.data.pusher), 
                    a(e);
                });
            });
        },
        _setPlayerConfig: function(e) {
            var t = this, s = e.userID, a = e.streamType, o = e.config;
            return console.log(d, "_setPlayerConfig", e), new Promise(function(r, i) {
                var n = t.userController.getUser(s);
                n && n.streams[a] ? (Object.assign(n.streams[a], o), t.setData({
                    streamList: t.data.streamList,
                    visibleStreamList: t._filterVisibleStream(t.data.streamList, !0)
                }, function() {
                    r(e);
                })) : console.warn(d, "指定 userID 或者 streamType 不存在");
            });
        },
        _setList: function(e) {
            var t = this;
            console.log(d, "_setList", e, this.data.template);
            var s = e.userList, a = e.streamList;
            return new Promise(function(o, r) {
                var i = [], n = {
                    userList: s || t.data.userList,
                    streamList: a || t.data.streamList
                };
                "grid" === t.data.template && (i = t._filterVisibleStream(a), n.visibleStreamList = i || t.data.visibleStreamList, 
                n.gridPagePlaceholderStreamList = t.data.gridPagePlaceholderStreamList, n.gridCurrentPage = t.data.gridCurrentPage, 
                n.gridPageCount = t.data.gridPageCount), t.setData(n, function() {
                    o(e);
                });
            });
        },
        _checkParam: function(e) {
            return console.log(d, "checkParam config:", e), e.sdkAppID ? void 0 === e.roomID ? (console.error("未设置 roomID"), 
            !1) : e.roomID < 1 || e.roomID > 4294967296 ? (console.error("roomID 超出取值范围 1 ~ 4294967295"), 
            !1) : e.userID ? e.userSig ? !!e.template || (console.error("未设置 template"), !1) : (console.error("未设置 userSig"), 
            !1) : (console.error("未设置 userID"), !1) : (console.error("未设置 sdkAppID"), !1);
        },
        _getPushUrl: function(e) {
            if (console.log(d, "_getPushUrl", e), n.IS_TRTC) return new Promise(function(t, s) {
                e.scene = e.scene && "rtc" !== e.scene ? e.scene : "videocall", e.enableBlackStream = e.enableBlackStream || "", 
                e.encsmall = e.encsmall || 0, e.cloudenv = e.cloudenv || "PRO", e.streamID = e.streamID || "", 
                e.userDefineRecordID = e.userDefineRecordID || "", e.privateMapKey = e.privateMapKey || "", 
                e.pureAudioMode = e.pureAudioMode || "", e.recvMode = e.recvMode || 1;
                var a = "";
                a = /^\d+$/.test(e.roomID) ? "&roomid=" + e.roomID : "&strroomid=" + e.roomID, setTimeout(function() {
                    var s = "room://cloud.tencent.com/rtc?sdkappid=" + e.sdkAppID + a + "&userid=" + e.userID + "&usersig=" + e.userSig + "&appscene=" + e.scene + "&encsmall=" + e.encsmall + "&cloudenv=" + e.cloudenv + "&enableBlackStream=" + e.enableBlackStream + "&streamid=" + e.streamID + "&userdefinerecordid=" + e.userDefineRecordID + "&privatemapkey=" + e.privateMapKey + "&pureaudiomode=" + e.pureAudioMode + "&recvmode=" + e.recvMode;
                    console.warn(d, "getPushUrl result:", s), t(s);
                }, 0);
            });
            console.error(d, "组件仅支持微信 App iOS >=7.0.9, Android >= 7.0.8, 小程序基础库版 >= 2.10.0"), 
            console.error(d, "需要真机运行，开发工具不支持实时音视频");
        },
        _requestSigServer: function(e) {
            console.log(d, "_requestSigServer:", e);
            var t = e.sdkAppID, s = e.userID, a = e.userSig, o = e.roomID, r = e.privateMapKey;
            e.useCloud = void 0 === e.useCloud || e.useCloud;
            var i = e.useCloud ? "https://official.opensso.tencent-cloud.com/v4/openim/jsonvideoapp" : "https://yun.tim.qq.com/v4/openim/jsonvideoapp";
            i += "?sdkappid=" + t + "&identifier=" + s + "&usersig=" + a + "&random=" + Date.now() + "&contenttype=json";
            var n = {
                Cmd: 1,
                SeqNo: 1,
                BusType: 7,
                GroupId: o
            }, u = {
                PrivMapEncrypt: r,
                TerminalType: 1,
                FromType: 3,
                SdkVersion: 26280566
            };
            return console.log(d, "_requestSigServer:", i, n, u), new Promise(function(a, r) {
                wx.request({
                    url: i,
                    data: {
                        ReqHead: n,
                        ReqBody: u
                    },
                    method: "POST",
                    success: function(i) {
                        console.log("_requestSigServer success:", i), (i.data.ErrorCode || 0 !== i.data.RspHead.ErrorCode) && (console.error("获取roomsig失败"), 
                        r(i));
                        var n = JSON.stringify(i.data.RspBody), u = "room://cloud.tencent.com?sdkappid=" + t + "&roomid=" + o + "&userid=" + s + "&roomsig=" + encodeURIComponent(n);
                        if (e.pureAudioPushMod || e.recordId) {
                            var l = {
                                Str_uc_params: {
                                    pure_audio_push_mod: 0,
                                    record_id: 0
                                }
                            };
                            e.pureAudioPushMod ? l.Str_uc_params.pure_audio_push_mod = e.pureAudioPushMod : delete l.Str_uc_params.pure_audio_push_mod, 
                            e.recordId ? l.Str_uc_params.record_id = e.recordId : delete l.Str_uc_params.record_id, 
                            u += "&bizbuf=" + encodeURIComponent(JSON.stringify(l));
                        }
                        console.log("roomSigInfo", u), a(u);
                    },
                    fail: function(e) {
                        console.log(d, "requestSigServer fail:", e), r(e);
                    }
                });
            });
        },
        _doubleTabToggleFullscreen: function(e) {
            var t = this, s = e.timeStamp, a = this._lastTapTime, o = this._lastTapCoordinate, r = e.detail, i = Math.sqrt(Math.pow(Math.abs(r.x - o.x), 2) + Math.pow(Math.abs(r.y - o.y), 2));
            this._lastTapCoordinate = r;
            var n = this._beforeLastTapTime;
            if (console.log(d, "_doubleTabToggleFullscreen", e, a, n, i), s - a > 0 && s - a < 300 && a - n > 1500 && i < 20) {
                var u = e.currentTarget.dataset.userid, l = e.currentTarget.dataset.streamtype;
                if (this._isFullscreen) this.exitFullscreen({
                    userID: u,
                    streamType: l
                }).then(function() {
                    t._isFullscreen = !1;
                }).catch(function() {}); else this.enterFullscreen({
                    userID: u,
                    streamType: l,
                    direction: void 0
                }).then(function() {
                    t._isFullscreen = !0;
                }).catch(function() {});
                this._beforeLastTapTime = a;
            }
            this._lastTapTime = s;
        },
        _bindEvent: function() {
            var e = this;
            this.userController.on(r.EVENT.REMOTE_USER_JOIN, function(t) {
                console.log(d, "远端用户进房", t, t.data.userID), e.setData({
                    userList: t.data.userList
                }, function() {
                    e._emitter.emit(r.EVENT.REMOTE_USER_JOIN, {
                        userID: t.data.userID
                    });
                }), console.log(d, "REMOTE_USER_JOIN", "streamList:", e.data.streamList, "userList:", e.data.userList);
            }), this.userController.on(r.EVENT.REMOTE_USER_LEAVE, function(t) {
                console.log(d, "远端用户离开", t, t.data.userID), t.data.userID && e._setList({
                    userList: t.data.userList,
                    streamList: t.data.streamList
                }).then(function() {
                    e._emitter.emit(r.EVENT.REMOTE_USER_LEAVE, {
                        userID: t.data.userID
                    });
                }), console.log(d, "REMOTE_USER_LEAVE", "streamList:", e.data.streamList, "userList:", e.data.userList);
            }), this.userController.on(r.EVENT.REMOTE_VIDEO_ADD, function(t) {
                console.log(d, "远端视频可用", t, t.data.stream.userID);
                var s = t.data.stream;
                "hide" === e.status.pageLife && (e.status.isOnHideAddStream = !0, s.isOnHideAdd = !0), 
                e._setList({
                    userList: t.data.userList,
                    streamList: t.data.streamList
                }).then(function() {
                    s.playerContext = wx.createLivePlayerContext(s.streamID, e), e._emitter.emit(r.EVENT.REMOTE_VIDEO_ADD, {
                        userID: s.userID,
                        streamType: s.streamType
                    });
                }), console.log(d, "REMOTE_VIDEO_ADD", "streamList:", e.data.streamList, "userList:", e.data.userList);
            }), this.userController.on(r.EVENT.REMOTE_VIDEO_REMOVE, function(t) {
                console.log(d, "远端视频移除", t, t.data.stream.userID);
                var s = t.data.stream;
                e._setList({
                    userList: t.data.userList,
                    streamList: t.data.streamList
                }).then(function() {
                    s.userID && s.streamType && e._emitter.emit(r.EVENT.REMOTE_VIDEO_REMOVE, {
                        userID: s.userID,
                        streamType: s.streamType
                    });
                }), console.log(d, "REMOTE_VIDEO_REMOVE", "streamList:", e.data.streamList, "userList:", e.data.userList);
            }), this.userController.on(r.EVENT.REMOTE_AUDIO_ADD, function(t) {
                console.log(d, "远端音频可用", t);
                var s = t.data.stream;
                e._setList({
                    userList: t.data.userList,
                    streamList: t.data.streamList
                }).then(function() {
                    s.playerContext = wx.createLivePlayerContext(s.streamID, e), e._emitter.emit(r.EVENT.REMOTE_AUDIO_ADD, {
                        userID: s.userID,
                        streamType: s.streamType
                    });
                }), console.log(d, "REMOTE_AUDIO_ADD", "streamList:", e.data.streamList, "userList:", e.data.userList);
            }), this.userController.on(r.EVENT.REMOTE_AUDIO_REMOVE, function(t) {
                console.log(d, "远端音频移除", t, t.data.stream.userID);
                var s = t.data.stream;
                e._setList({
                    userList: t.data.userList,
                    streamList: t.data.streamList
                }).then(function() {
                    s.userID && s.streamType && e._emitter.emit(r.EVENT.REMOTE_AUDIO_REMOVE, {
                        userID: s.userID,
                        streamType: s.streamType
                    });
                }), console.log(d, "REMOTE_AUDIO_REMOVE", "streamList:", e.data.streamList, "userList:", e.data.userList);
            });
        },
        _pusherStateChangeHandler: function(e) {
            var t = e.detail.code, s = e.detail.message;
            switch (console.log(d, "pusherStateChange：", t, e), t) {
              case 0:
                console.log(d, s, t);
                break;

              case 1001:
                console.log(d, "已经连接推流服务器", t);
                break;

              case 1002:
                console.log(d, "已经与服务器握手完毕,开始推流", t);
                break;

              case 1003:
                console.log(d, "打开摄像头成功", t);
                break;

              case 1004:
                console.log(d, "录屏启动成功", t);
                break;

              case 1005:
                console.log(d, "推流动态调整分辨率", t);
                break;

              case 1006:
                console.log(d, "推流动态调整码率", t);
                break;

              case 1007:
                console.log(d, "首帧画面采集完成", t);
                break;

              case 1008:
                console.log(d, "编码器启动", t);
                break;

              case 1018:
                console.log(d, "进房成功", t), this._emitter.emit(r.EVENT.LOCAL_JOIN, {
                    userID: this.data.pusher.userID
                });
                break;

              case 1019:
                console.log(d, "退出房间", t);
                break;

              case 2003:
                console.log(d, "渲染首帧视频", t);
                break;

              case 1020:
              case 1031:
              case 1032:
              case 1033:
              case 1034:
                this.userController.userEventHandler(e);
                break;

              case -1301:
                console.error(d, "打开摄像头失败: ", t), this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
                break;

              case -1302:
                console.error(d, "打开麦克风失败: ", t), this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
                break;

              case -1303:
                console.error(d, "视频编码失败: ", t), this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
                break;

              case -1304:
                console.error(d, "音频编码失败: ", t), this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
                break;

              case -1307:
                console.error(d, "推流连接断开: ", t), this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
                break;

              case -100018:
                console.error(d, "进房失败: userSig 校验失败，请检查 userSig 是否填写正确", t, s), this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
                break;

              case 5e3:
                console.log(d, "小程序被挂起: ", t);
                break;

              case 5001:
                console.log(d, "小程序悬浮窗被关闭: ", t), this.status.isPending = !0, this.status.isPush && this.exitRoom();
                break;

              case 1021:
                console.log(d, "网络类型发生变化，需要重新进房", t);
                break;

              case 2007:
                console.log(d, "本地视频播放loading: ", t);
                break;

              case 2004:
                console.log(d, "本地视频播放开始: ", t);
                break;

              default:
                console.log(d, s, t);
            }
        },
        _pusherNetStatusHandler: function(e) {
            this._emitter.emit(r.EVENT.LOCAL_NET_STATE_UPDATE, e);
        },
        _pusherErrorHandler: function(e) {
            console.warn(d, "pusher error", e);
            try {
                var t = e.detail.errCode, s = e.detail.errMsg;
                this._emitter.emit(r.EVENT.ERROR, {
                    code: t,
                    message: s
                });
            } catch (t) {
                console.error(d, "pusher error data parser exception", e, t);
            }
        },
        _pusherBGMStartHandler: function(e) {},
        _pusherBGMProgressHandler: function(e) {
            this._emitter.emit(r.EVENT.BGM_PLAY_PROGRESS, e);
        },
        _pusherBGMCompleteHandler: function(e) {
            this._emitter.emit(r.EVENT.BGM_PLAY_COMPLETE, e);
        },
        _pusherAudioVolumeNotify: function(e) {
            this._emitter.emit(r.EVENT.LOCAL_AUDIO_VOLUME_UPDATE, e);
        },
        _playerStateChange: function(e) {
            this._emitter.emit(r.EVENT.REMOTE_STATE_UPDATE, e);
        },
        _playerFullscreenChange: function(e) {
            this._emitter.emit(r.EVENT.REMOTE_FULLSCREEN_UPDATE, e), this._emitter.emit(r.EVENT.VIDEO_FULLSCREEN_UPDATE, e);
        },
        _playerNetStatus: function(e) {
            var t = this.userController.getStream({
                userID: e.currentTarget.dataset.userid,
                streamType: e.currentTarget.dataset.streamtype
            });
            !t || t.videoWidth === e.detail.info.videoWidth && t.videoHeight === e.detail.info.videoHeight || (console.log(d, "_playerNetStatus update video size", e), 
            t.videoWidth = e.detail.info.videoWidth, t.videoHeight = e.detail.info.videoHeight), 
            this._emitter.emit(r.EVENT.REMOTE_NET_STATE_UPDATE, e);
        },
        _playerAudioVolumeNotify: function(e) {
            this._emitter.emit(r.EVENT.REMOTE_AUDIO_VOLUME_UPDATE, e);
        },
        _filterVisibleStream: function(e, t) {
            var s = e.filter(function(e) {
                return e.hasVideo || e.hasAudio;
            });
            return s.sort(function(e, t) {
                var s = e.userID.toUpperCase(), a = t.userID.toUpperCase();
                return s < a ? -1 : s > a ? 1 : 0;
            }), "grid" !== this.data.template || t || (this._filterGridPageVisibleStream(s), 
            this.data.gridCurrentPage > 1 && this.data.gridPagePlaceholderStreamList.length === this.data.gridPlayerPerPage && this._gridPageToPrev(s)), 
            s;
        },
        _filterGridPageVisibleStream: function(e) {
            var t = e.length;
            this.data.gridPageCount = Math.ceil((t + 1) / this.data.gridPlayerPerPage), this.data.gridPagePlaceholderStreamList = [];
            var s, a = 0;
            s = this.data.gridPlayerPerPage > 3 ? 1 === this.data.gridCurrentPage ? [ -1, this.data.gridPlayerPerPage - 1 ] : [ this.data.gridCurrentPage * this.data.gridPlayerPerPage - (this.data.gridPlayerPerPage + 2), this.data.gridCurrentPage * this.data.gridPlayerPerPage - 1 ] : [ this.data.gridCurrentPage * this.data.gridPlayerPerPage - (this.data.gridPlayerPerPage + 1), this.data.gridCurrentPage * this.data.gridPlayerPerPage ];
            for (var o = 0; o < t; o++) o > s[0] && o < s[1] ? (e[o].isVisible = !0, e[o].muteVideo = void 0 === e[o].muteVideoPrev ? e[o].muteVideo : e[o].muteVideoPrev, 
            a++) : (e[o].isVisible = !1, e[o].muteVideo = !0);
            if (1 !== this.data.gridCurrentPage) for (var r = 0; r < this.data.gridPlayerPerPage - a; r++) this.data.gridPagePlaceholderStreamList.push({
                id: "holder-" + r
            });
            return e;
        },
        _keepScreenOn: function() {
            setInterval(function() {
                wx.setKeepScreenOn({
                    keepScreenOn: !0
                });
            }, 2e4);
        },
        _initIM: function(e) {
            if (e.enableIM && e.sdkAppID && !this.tim) {
                console.log(d, "_initIM", e);
                var t = u.default.create({
                    SDKAppID: e.sdkAppID
                });
                e.debugMode ? t.setLogLevel(1) : t.setLogLevel(4), t.off(u.default.EVENT.SDK_READY, this._onIMReady), 
                t.off(u.default.EVENT.MESSAGE_RECEIVED, this._onIMMessageReceived), t.off(u.default.EVENT.SDK_NOT_READY, this._onIMNotReady), 
                t.off(u.default.EVENT.KICKED_OUT, this._onIMKickedOut), t.off(u.default.EVENT.ERROR, this._onIMError), 
                t.on(u.default.EVENT.SDK_READY, this._onIMReady, this), t.on(u.default.EVENT.MESSAGE_RECEIVED, this._onIMMessageReceived, this), 
                t.on(u.default.EVENT.SDK_NOT_READY, this._onIMNotReady, this), t.on(u.default.EVENT.KICKED_OUT, this._onIMKickedOut, this), 
                t.on(u.default.EVENT.ERROR, this._onIMError, this), this.tim = t, wx.tim = t;
            }
        },
        _loginIM: function(e) {
            if (this.tim) return console.log(d, "_loginIM", e), this.tim.login({
                userID: e.userID,
                userSig: e.userSig
            });
        },
        _logoutIM: function() {
            if (this.tim) return console.log(d, "_logoutIM"), this.tim.logout();
        },
        _exitIM: function() {
            var e = this;
            if (!this.data.exitIMThrottle && this.tim) {
                this.data.exitIMThrottle = !0;
                var t = this.getRemoteUserList(), s = this.data.config.roomID, a = this.data.config.userID;
                this._searchGroup({
                    roomID: s
                }).then(function(o) {
                    o.data.group.ownerID === a && 0 === t.length ? e._dismissGroup({
                        roomID: s
                    }).then(function() {
                        e.data.exitIMThrottle = !1, e._logoutIM();
                    }).catch(function(t) {
                        e.data.exitIMThrottle = !1, e._logoutIM();
                    }) : o.data.group.ownerID === a ? (e.data.exitIMThrottle = !1, e._logoutIM()) : e._quitGroup({
                        roomID: s
                    }).then(function() {
                        e.data.exitIMThrottle = !1, e._logoutIM();
                    }).catch(function(t) {
                        e.data.exitIMThrottle = !1, e._logoutIM();
                    });
                }).catch(function(t) {
                    e.data.exitIMThrottle = !1, e._logoutIM();
                });
            }
        },
        _searchGroup: function(e) {
            if (this.tim) {
                console.log(d, "_searchGroup", e);
                var t = this.tim.searchGroupByID(e.roomID + "");
                return t.then(function(e) {
                    console.log(d, "_searchGroup success", e);
                }).catch(function(e) {
                    console.warn(d, "_searchGroup fail，TIM 报错信息不影响后续逻辑，可以忽略", e);
                }), t;
            }
        },
        _createGroup: function(e) {
            if (this.tim) {
                console.log(d, "_createGroup", e);
                var t = this.tim.createGroup({
                    groupID: e.roomID + "",
                    name: e.roomID + "",
                    type: h
                });
                return t.then(function(e) {
                    console.log(d, "_createGroup success", e.data.group);
                }).catch(function(e) {
                    console.warn(d, "_createGroup error", e);
                }), t;
            }
        },
        _joinGroup: function(e) {
            if (this.tim) {
                console.log(d, "_joinGroup", e);
                var t = this.tim.joinGroup({
                    groupID: e.roomID + "",
                    type: h
                });
                return t.then(function(e) {
                    switch (e.data.status) {
                      case u.default.TYPES.JOIN_STATUS_WAIT_APPROVAL:
                        break;

                      case u.default.TYPES.JOIN_STATUS_SUCCESS:
                      case u.default.TYPES.JOIN_STATUS_ALREADY_IN_GROUP:
                        console.log(d, "_joinGroup success", e);
                    }
                }).catch(function(e) {
                    console.warn(d, "joinGroup error", e);
                }), t;
            }
        },
        _quitGroup: function(e) {
            if (this.tim) {
                console.log(d, "_quitGroup", e);
                var t = this.tim.quitGroup(e.roomID + "");
                return t.then(function(e) {
                    console.log(d, "_quitGroup success", e);
                }).catch(function(e) {
                    console.warn(d, "quitGroup error", e);
                }), t;
            }
        },
        _dismissGroup: function(e) {
            if (this.tim) {
                console.log(d, "_dismissGroup", e);
                var t = this.tim.dismissGroup(e.roomID + "");
                return t.then(function(e) {
                    console.log(d, "_dismissGroup success", e);
                }).catch(function(e) {
                    console.warn(d, "_dismissGroup error", e);
                }), t;
            }
        },
        _onIMReady: function(e) {
            var t = this;
            console.log(d, "IM.READY", e), this._emitter.emit(r.EVENT.IM_READY, e);
            var s = this.data.config.roomID;
            this._searchGroup({
                roomID: s
            }).then(function(e) {
                t._joinGroup({
                    roomID: s
                });
            }).catch(function() {
                t._createGroup({
                    roomID: s
                }).then(function(e) {
                    t._joinGroup({
                        roomID: s
                    });
                }).catch(function(a) {
                    10021 === a.code && (console.log(d, "群已存在，直接进群", e), t._joinGroup({
                        roomID: s
                    }));
                });
            });
        },
        _onIMMessageReceived: function(e) {
            console.log(d, "IM.MESSAGE_RECEIVED", e);
            for (var t = e.data, s = this.data.config.roomID + "", a = this.data.config.userID + "", o = 0; o < t.length; o++) {
                var i = t[o];
                i.to !== s + "" && i.to !== a || (console.log(d, "IM.MESSAGE_RECEIVED", i, i.type, u.default.TYPES.MSG_TEXT), 
                i.type === u.default.TYPES.MSG_TEXT ? this._pushMessageList({
                    name: i.from,
                    message: i.payload.text
                }) : i.type === u.default.TYPES.MSG_GRP_SYS_NOTICE && 2 === i.payload.operationType && this._pushMessageList({
                    name: "系统通知",
                    message: "欢迎 ".concat(a)
                }));
            }
            this._emitter.emit(r.EVENT.IM_MESSAGE_RECEIVED, e);
        },
        _onIMNotReady: function(e) {
            console.log(d, "IM.NOT_READY", e), this._emitter.emit(r.EVENT.IM_NOT_READY, e);
        },
        _onIMKickedOut: function(e) {
            console.log(d, "IM.KICKED_OUT", e), this._emitter.emit(r.EVENT.IM_KICKED_OUT, e);
        },
        _onIMError: function(e) {
            console.log(d, "IM.ERROR", e), this._emitter.emit(r.EVENT.IM_ERROR, e);
        },
        _toggleVideo: function() {
            this.data.pusher.enableCamera ? this.unpublishLocalVideo() : this.publishLocalVideo();
        },
        _toggleAudio: function() {
            this.data.pusher.enableMic ? this.unpublishLocalAudio() : this.publishLocalAudio();
        },
        _debugToggleRemoteVideo: function(e) {
            console.log(d, "_debugToggleRemoteVideo", e.currentTarget.dataset);
            var t = e.currentTarget.dataset.userID, s = e.currentTarget.dataset.streamType;
            this.data.streamList.find(function(e) {
                return e.userID === t && e.streamType === s;
            }).muteVideo ? this.subscribeRemoteVideo({
                userID: t,
                streamType: s
            }) : this.unsubscribeRemoteVideo({
                userID: t,
                streamType: s
            });
        },
        _debugToggleRemoteAudio: function(e) {
            console.log(d, "_debugToggleRemoteAudio", e.currentTarget.dataset);
            var t = e.currentTarget.dataset.userID, s = e.currentTarget.dataset.streamType;
            this.data.streamList.find(function(e) {
                return e.userID === t && e.streamType === s;
            }).muteAudio ? this.subscribeRemoteAudio({
                userID: t
            }) : this.unsubscribeRemoteAudio({
                userID: t
            });
        },
        _debugToggleVideoDebug: function() {
            this.setData({
                debug: !this.data.debug
            });
        },
        _debugExitRoom: function() {
            this.exitRoom();
        },
        _debugEnterRoom: function() {
            var e = this;
            Object.assign(this.data.pusher, this.data.config), this.enterRoom({
                roomID: this.data.config.roomID
            }).then(function() {
                setTimeout(function() {
                    e.publishLocalVideo(), e.publishLocalAudio();
                }, 2e3);
            });
        },
        _debugGoBack: function() {
            wx.navigateBack({
                delta: 1
            });
        },
        _debugTogglePanel: function() {
            this.setData({
                debugPanel: !this.data.debugPanel
            });
        },
        _debugSendRandomMessage: function() {
            var e = this.getRemoteUserList();
            if (0 === e.length || !this.tim) return !1;
            var t = this.data.config.roomID, s = "Hello! ".concat(e[0].userID, " ").concat(9999 * Math.random()), a = e[0].userID;
            this.sendC2CTextMessage({
                userID: a,
                message: s
            });
            var o = this.sendGroupTextMessage({
                roomID: t,
                message: s
            });
            this._pushMessageList({
                name: a,
                message: s
            }), o.then(function(e) {
                console.log(d, "_debugSendRandomMessage success", e), wx.showToast({
                    title: "发送成功",
                    icon: "success",
                    duration: 1e3
                });
            }).catch(function(e) {
                console.warn(d, "_debugSendRandomMessage error", e), wx.showToast({
                    title: "发送失败",
                    icon: "none",
                    duration: 1e3
                });
            });
        },
        _toggleAudioVolumeType: function() {
            "voicecall" === this.data.pusher.audioVolumeType ? this._setPusherConfig({
                audioVolumeType: "media"
            }) : this._setPusherConfig({
                audioVolumeType: "voicecall"
            });
        },
        _toggleSoundMode: function() {
            if (0 !== this.data.userList.length) {
                var e = this.userController.getStream({
                    userID: this.data.userList[0].userID,
                    streamType: "main"
                });
                e && ("speaker" === e.soundMode ? e.soundMode = "ear" : e.soundMode = "speaker", 
                this._setPlayerConfig({
                    userID: e.userID,
                    streamType: "main",
                    config: {
                        soundMode: e.soundMode
                    }
                }));
            }
        },
        _hangUp: function() {
            this.exitRoom(), wx.navigateBack({
                delta: 1
            });
        },
        handleSubscribeAudio: function() {
            this.data.pusher.enableMic ? this.unpublishLocalAudio() : this.publishLocalAudio();
        },
        _handleSubscribeRemoteVideo: function(e) {
            var t = e.currentTarget.dataset.userID, s = e.currentTarget.dataset.streamType;
            this.data.streamList.find(function(e) {
                return e.userID === t && e.streamType === s;
            }).muteVideo ? this.subscribeRemoteVideo({
                userID: t,
                streamType: s
            }) : this.unsubscribeRemoteVideo({
                userID: t,
                streamType: s
            });
        },
        _handleSubscribeRemoteAudio: function(e) {
            var t = e.currentTarget.dataset.userID, s = e.currentTarget.dataset.streamType;
            this.data.streamList.find(function(e) {
                return e.userID === t && e.streamType === s;
            }).muteAudio ? this.subscribeRemoteAudio({
                userID: t
            }) : this.unsubscribeRemoteAudio({
                userID: t
            });
        },
        _switchMemberListPanel: function() {
            this.setData({
                panelName: "memberlist-panel" !== this.data.panelName ? "memberlist-panel" : ""
            });
        },
        _switchSettingPanel: function() {
            this.setData({
                panelName: "setting-panel" !== this.data.panelName ? "setting-panel" : ""
            });
        },
        _switchBGMPanel: function() {
            this.setData({
                panelName: "bgm-panel" !== this.data.panelName ? "bgm-panel" : ""
            });
        },
        _handleMaskerClick: function() {
            this.setData({
                panelName: ""
            });
        },
        _setPuserProperty: function(e) {
            console.log(d, "_setPuserProperty", e);
            var t = e.currentTarget.dataset.key, s = e.currentTarget.dataset.valueType, a = e.currentTarget.dataset.value, o = {};
            "boolean" === s && (a = "true" === a, o[t] = !this.data.pusher[t]), "number" === s && a.indexOf("|") > 0 && (a = a.split("|"), 
            this.data.pusher[t] === Number(a[0]) ? o[t] = Number(a[1]) : o[t] = Number(a[0])), 
            "string" === s && a.indexOf("|") > 0 && (a = a.split("|"), this.data.pusher[t] === a[0] ? o[t] = a[1] : o[t] = a[0]), 
            this._setPusherConfig(o);
        },
        _setPlayerProperty: function(e) {
            console.log(d, "_setPlayerProperty", e);
            var t = e.currentTarget.dataset.userid, s = e.currentTarget.dataset.streamtype, a = e.currentTarget.dataset.key, o = e.currentTarget.dataset.value, r = this.userController.getStream({
                userID: t,
                streamType: s
            });
            if (r) {
                var i = {};
                "true" === o ? o = !0 : "false" === o && (o = !1), "boolean" == typeof o ? i[a] = !r[a] : "string" == typeof o && o.indexOf("|") > 0 && (o = o.split("|"), 
                r[a] === o[0] ? i[a] = o[1] : i[a] = o[0]), console.log(d, "_setPlayerProperty", i), 
                this._setPlayerConfig({
                    userID: t,
                    streamType: s,
                    config: i
                });
            }
        },
        _changeProperty: function(e) {
            var t = e.currentTarget.dataset.propertyName, s = {};
            s[t] = e.detail.value, this.setData(s);
            var a = s[t] / 100;
            switch (t) {
              case "MICVolume":
                this.setMICVolume({
                    volume: a
                });
                break;

              case "BGMVolume":
                this.setBGMVolume({
                    volume: a
                });
            }
        },
        _switchStreamType: function(e) {
            var t = e.currentTarget.dataset.userid, s = e.currentTarget.dataset.streamtype, a = this.userController.getStream({
                userID: t,
                streamType: s
            });
            a && "main" === a.streamType && ("small" === a._definitionType ? this.subscribeRemoteVideo({
                userID: t,
                streamType: "main"
            }) : this.subscribeRemoteVideo({
                userID: t,
                streamType: "small"
            }));
        },
        _handleSnapshotClick: function(e) {
            wx.showToast({
                title: "开始截屏",
                icon: "none",
                duration: 1e3
            });
            var t = e.currentTarget.dataset.userid, s = e.currentTarget.dataset.streamtype;
            this.snapshot({
                userID: t,
                streamType: s
            });
        },
        _gridBindEvent: function() {
            var e = this;
            this.on(r.EVENT.REMOTE_AUDIO_VOLUME_UPDATE, function(t) {
                var s = t.data, a = s.currentTarget.dataset.userid, o = s.currentTarget.dataset.streamtype, r = s.detail.volume, i = e.userController.getStream({
                    userID: a,
                    streamType: "aux" === o ? "main" : o
                });
                i && (i.volume = r), e.setData({
                    streamList: e.data.streamList,
                    visibleStreamList: e._filterVisibleStream(e.data.streamList, !0)
                }, function() {});
            }), this.on(r.EVENT.BGM_PLAY_PROGRESS, function(t) {
                var s = t.data.detail.progress / t.data.detail.duration * 100;
                e.setData({
                    BGMProgress: s
                });
            }), this.on(r.EVENT.LOCAL_AUDIO_VOLUME_UPDATE, function(t) {
                var s = t.data.detail.volume;
                e._setPusherConfig({
                    volume: s
                }, !0);
            });
        },
        _handleGridTouchStart: function(e) {
            m = e.changedTouches[0].clientX, g = e.changedTouches[0].clientY;
        },
        _handleGridTouchEnd: function(e) {
            var t = e.changedTouches[0].clientX, s = e.changedTouches[0].clientY;
            t - m > 50 && Math.abs(s - g) < 50 ? this._gridPagePrev() : t - m < -50 && Math.abs(s - g) < 50 && this._gridPageNext();
        },
        _gridPageToPrev: function(e) {
            var t = this._filterGridPageVisibleStream(e);
            if (this.data.gridPagePlaceholderStreamList.length !== this.data.gridPlayerPerPage) return t;
            this.data.gridCurrentPage--, this._gridPageToPrev(e);
        },
        _gridPageNext: function() {
            this.data.gridCurrentPage++, this.data.gridCurrentPage > this.data.gridPageCount && (this.data.gridCurrentPage = 1), 
            this._gridPageSetData();
        },
        _gridPagePrev: function() {
            this.data.gridCurrentPage--, this.data.gridCurrentPage < 1 && (this.data.gridCurrentPage = this.data.gridPageCount), 
            this._gridPageSetData();
        },
        _gridPageSetData: function() {
            this._gridShowPageTips();
            var e = this._filterVisibleStream(this.data.streamList);
            this.setData({
                gridCurrentPage: this.data.gridCurrentPage,
                gridPageCount: this.data.gridPageCount,
                visibleStreamList: e,
                streamList: this.data.streamList,
                gridPagePlaceholderStreamList: this.data.gridPagePlaceholderStreamList
            }, function() {});
        },
        _gridShowPageTips: function(e) {
            var t = this;
            this.data.gridPageCount < 2 || (console.log(d, "_gridShowPageTips", this.data), 
            this.data.hasGridPageTipsShow && clearTimeout(this.data.hasGridPageTipsShow), this.animate(".pages-container", [ {
                opacity: 1
            } ], 100, function() {}), this.data.hasGridPageTipsShow = setTimeout(function() {
                t.animate(".pages-container", [ {
                    opacity: 1
                }, {
                    opacity: .3
                } ], 600, function() {});
            }, 3e3));
        },
        _toggleFullscreen: function(e) {
            var t = this;
            console.log(d, "_toggleFullscreen", e);
            var s = e.currentTarget.dataset.userID, a = e.currentTarget.dataset.streamType;
            if (this._isFullscreen) this.exitFullscreen({
                userID: s,
                streamType: a
            }).then(function() {
                t._isFullscreen = !1;
            }).catch(function() {}); else {
                this.enterFullscreen({
                    userID: s,
                    streamType: a,
                    direction: 0
                }).then(function() {
                    t._isFullscreen = !0;
                }).catch(function() {});
            }
        },
        _toggleMoreMenu: function() {
            this.setData({
                isShowMoreMenu: !this.data.isShowMoreMenu
            });
        },
        _toggleIMPanel: function() {
            this.data.enableIM || wx.showToast({
                icon: "none",
                title: "当前没有开启IM功能，请设置 enableIM:true"
            }), this.setData({
                showIMPanel: !this.data.showIMPanel
            });
        },
        _handleBGMOperation: function(e) {
            var t = e.currentTarget.dataset.operationName;
            this[t] && this[t]({
                url: "https://trtc-1252463788.cos.ap-guangzhou.myqcloud.com/web/assets/bgm-test.mp3"
            });
        },
        _selectBeautyStyle: function(e) {
            var t = this;
            console.log(d, "_selectBeautyStyle", e);
            var s = e.detail.value;
            this.setData({
                beautyStyle: s
            }, function() {
                t._setPusherConfig({
                    beautyLevel: "close" === s ? 0 : 9,
                    beautyStyle: "close" === s ? "smooth" : s
                });
            });
        },
        _selectFilter: function(e) {
            var t = this;
            console.log(d, "_selectFilter", e);
            var s = parseInt(e.detail.value);
            this.setData({
                filterIndex: s
            }, function() {
                t._setPusherConfig({
                    filter: t.data.filterArray[s].value
                });
            });
        },
        _selectAudioReverbType: function(e) {
            console.log(d, "_selectAudioReverbType", e);
            var t = parseInt(e.detail.value);
            this._setPusherConfig({
                audioReverbType: t
            });
        },
        _sendIMMessage: function(e) {
            if (console.log(d, "_sendIMMessage", e), this.data.messageContent) {
                var t = this.data.config.roomID, s = this.data.messageContent, a = this.data.config.userID;
                this.sendGroupTextMessage({
                    roomID: t,
                    message: s
                }), this._pushMessageList({
                    name: a,
                    message: s
                }), this.setData({
                    messageContent: ""
                });
            }
        },
        _inputIMMessage: function(e) {
            this.setData({
                messageContent: e.detail.value
            });
        },
        _pushMessageList: function(e) {
            this.data.messageList.length === this.data.maxMessageListLength && this.data.messageList.shift(), 
            this.data.messageList.push(e), this.setData({
                messageList: this.data.messageList,
                messageListScrollTop: 100 * this.data.messageList.length
            }, function() {});
        }
    }
});