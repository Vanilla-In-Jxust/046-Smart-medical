var e = require("../debug/generatetestusersig.js");

getApp();

Page({
    data: {
        rtcConfig: {
            sdkAppID: "",
            userID: "",
            userSig: "",
            template: ""
        },
        showTipToast: !1,
        subscribeList: {}
    },
    enterRoom: function(o) {
        var t = this;
        o.template = o.template || "1v1", o.roomID = o.roomID || this.randomRoomID(), o.userID = o.userID || this.randomUserID(), 
        console.log("* room enterRoom", o);
        var n = (0, e.gentestusersig)(o.userID);
        o.sdkAppID = n.sdkAppID, o.userSig = n.userSig, this.template = o.template, "grid" === o.template ? this.data.rtcConfig = {
            sdkAppID: o.sdkAppID,
            userID: o.userID,
            userSig: o.userSig,
            template: o.template,
            debugMode: o.debugMode,
            frontCamera: o.frontCamera,
            enableEarMonitor: o.enableEarMonitor,
            enableAutoFocus: o.enableAutoFocus,
            localMirror: o.localMirror,
            enableAgc: o.enableAgc,
            enableAns: o.enableAns,
            videoWidth: o.videoWidth,
            videoHeight: o.videoHeight,
            maxBitrate: o.maxBitrate,
            minBitrate: o.minBitrate,
            beautyLevel: 9,
            enableIM: !0,
            audioVolumeType: o.audioVolumeType,
            audioQuality: o.audioQuality,
            scene: o.scene,
            encsmall: o.encsmall ? 1 : 0,
            cloudenv: o.cloudenv,
            enableBlackStream: o.enableBlackStream,
            streamID: o.streamID,
            userDefineRecordID: o.userDefineRecordID,
            privateMapKey: o.privateMapKey,
            pureAudioMode: o.pureAudioMode,
            recvMode: o.recvMode
        } : this.data.rtcConfig = {
            sdkAppID: o.sdkAppID,
            userID: o.userID,
            userSig: o.userSig,
            template: o.template,
            debugMode: o.debugMode,
            beautyLevel: 9,
            enableIM: !0,
            audioVolumeType: o.audioVolumeType
        }, this.setData({
            rtcConfig: this.data.rtcConfig
        }, function() {
            t.trtcComponent.enterRoom({
                roomID: o.roomID
            }).then(function() {
                "custom" === t.template && t.trtcComponent.setViewRect({
                    userID: o.userID,
                    xAxis: "480rpx",
                    yAxis: "160rpx",
                    width: "240rpx",
                    height: "320rpx"
                });
            }).catch(function(e) {
                console.error("* room joinRoom 进房失败:", e);
            });
        });
    },
    bindTRTCRoomEvent: function() {
        var e = this, o = this.trtcComponent.EVENT;
        this.timestamp = [], this.trtcComponent.on(o.LOCAL_JOIN, function(o) {
            console.log("* room LOCAL_JOIN", o), !0 !== e.options.localVideo && "1v1" !== e.options.template || e.trtcComponent.publishLocalVideo(), 
            !0 !== e.options.localAudio && "1v1" !== e.options.template || e.trtcComponent.publishLocalAudio(), 
            "custom" === e.options.template && e.trtcComponent.setViewRect({
                userID: o.userID,
                xAxis: "0rpx",
                yAxis: "0rpx",
                width: "240rpx",
                height: "320rpx"
            });
        }), this.trtcComponent.on(o.LOCAL_LEAVE, function(e) {
            console.log("* room LOCAL_LEAVE", e);
        }), this.trtcComponent.on(o.ERROR, function(e) {
            console.log("* room ERROR", e);
        }), this.trtcComponent.on(o.REMOTE_USER_JOIN, function(o) {
            (console.log("* room REMOTE_USER_JOIN", o, e.trtcComponent.getRemoteUserList()), 
            e.timestamp.push(new Date()), "1v1" === e.template && e.timestamp.length > 1) && (e.timestamp[1] - e.timestamp[0] < 1e3 && e.setData({
                showTipToast: !0
            }, function() {
                setTimeout(function() {
                    e.setData({
                        showTipToast: !1
                    }), wx.navigateBack({
                        delta: 1
                    });
                }, 4e3);
            }));
        }), this.trtcComponent.on(o.REMOTE_USER_LEAVE, function(o) {
            console.log("* room REMOTE_USER_LEAVE", o, e.trtcComponent.getRemoteUserList()), 
            "1v1" === e.template && (e.timestamp = []), "1v1" === e.template && e.remoteUser === o.data.userID && (e.remoteUser = null);
        }), this.trtcComponent.on(o.REMOTE_VIDEO_ADD, function(o) {
            console.log("* room REMOTE_VIDEO_ADD", o, e.trtcComponent.getRemoteUserList());
            var t = e.trtcComponent.getRemoteUserList(), n = o.data;
            if ("1v1" !== e.template || e.remoteUser && e.remoteUser !== n.userID ? (e.trtcComponent.subscribeRemoteVideo({
                userID: n.userID,
                streamType: n.streamType
            }), e.data.subscribeList[n.userID + "-video"] = !0) : (e.remoteUser = n.userID, 
            e.trtcComponent.subscribeRemoteVideo({
                userID: n.userID,
                streamType: n.streamType
            })), "custom" === e.template && n.userID && n.streamType) {
                var r = t.findIndex(function(e) {
                    return e.userID === n.userID;
                }), s = 320 * ++r + 160;
                e.trtcComponent.setViewRect({
                    userID: n.userID,
                    streamType: n.streamType,
                    xAxis: "480rpx",
                    yAxis: s + "rpx",
                    width: "240rpx",
                    height: "320rpx"
                });
            }
        }), this.trtcComponent.on(o.REMOTE_VIDEO_REMOVE, function(o) {
            console.log("* room REMOTE_VIDEO_REMOVE", o, e.trtcComponent.getRemoteUserList());
        }), this.trtcComponent.on(o.REMOTE_AUDIO_ADD, function(o) {
            console.log("* room REMOTE_AUDIO_ADD", o, e.trtcComponent.getRemoteUserList());
            var t = o.data;
            "1v1" !== e.template || e.remoteUser && e.remoteUser !== t.userID ? (e.trtcComponent.subscribeRemoteAudio({
                userID: t.userID
            }), e.data.subscribeList[t.userID + "-audio"] = !0) : (e.remoteUser = t.userID, 
            e.trtcComponent.subscribeRemoteAudio({
                userID: t.userID
            }));
        }), this.trtcComponent.on(o.REMOTE_AUDIO_REMOVE, function(o) {
            console.log("* room REMOTE_AUDIO_REMOVE", o, e.trtcComponent.getRemoteUserList());
        }), this.trtcComponent.on(o.IM_READY, function(e) {
            console.log("* room IM_READY", e);
        }), this.trtcComponent.on(o.IM_MESSAGE_RECEIVED, function(e) {
            console.log("* room IM_MESSAGE_RECEIVED", e);
        });
    },
    randomUserID: function() {
        return new Date().getTime().toString(16).split("").reverse().join("");
    },
    randomRoomID: function() {
        return parseInt(9999 * Math.random());
    },
    onLoad: function(e) {
        console.log("room onload", e), wx.setKeepScreenOn({
            keepScreenOn: !0
        }), this.trtcComponent = this.selectComponent("#trtc-component"), this.bindTRTCRoomEvent(), 
        Object.getOwnPropertyNames(e).forEach(function(o) {
            "true" === e[o] && (e[o] = !0), "false" === e[o] && (e[o] = !1);
        }), this.options = e, this.enterRoom({
            roomID: Number(e.roomID),
            userID: e.userID,
            template: e.template,
            debugMode: e.debugMode,
            frontCamera: e.frontCamera,
            localVideo: e.localVideo,
            localAudio: e.localAudio,
            enableEarMonitor: e.enableEarMonitor,
            enableAutoFocus: e.enableAutoFocus,
            localMirror: e.localMirror,
            enableAgc: e.enableAgc,
            enableAns: e.enableAns,
            videoHeight: e.videoHeight,
            videoWidth: e.videoWidth,
            maxBitrate: Number(e.maxBitrate),
            minBitrate: Number(e.minBitrate),
            audioVolumeType: e.audioVolumeType,
            audioQuality: e.audioQuality,
            scene: e.scene,
            encsmall: e.encsmall,
            cloudenv: e.cloudenv,
            enableBlackStream: e.enableBlackStream,
            streamID: e.streamID,
            userDefineRecordID: e.userDefineRecordID,
            privateMapKey: e.privateMapKey,
            pureAudioMode: e.pureAudioMode,
            recvMode: e.recvMode,
            enableRecvMessage: e.enableRecvMessage
        });
    },
    onReady: function() {
        console.log("room ready"), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    onShow: function() {
        console.log("room show"), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    onHide: function() {
        console.log("room hide");
    },
    onUnload: function() {
        console.log("room unload"), wx.setKeepScreenOn({
            keepScreenOn: !1
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    _hangUp: function(e) {
        console.log(e);
    }
});