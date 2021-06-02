Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DEFAULT_PLAYER_CONFIG = exports.DEFAULT_PUSHER_CONFIG = exports.DEFAULT_COMPONENT_CONFIG = exports.EVENT = void 0;

exports.EVENT = {
    LOCAL_JOIN: "LOCAL_JOIN",
    LOCAL_LEAVE: "LOCAL_LEAVE",
    REMOTE_USER_JOIN: "REMOTE_USER_JOIN",
    REMOTE_USER_LEAVE: "REMOTE_USER_LEAVE",
    REMOTE_VIDEO_ADD: "REMOTE_VIDEO_ADD",
    REMOTE_VIDEO_REMOVE: "REMOTE_VIDEO_REMOVE",
    REMOTE_AUDIO_ADD: "REMOTE_AUDIO_ADD",
    REMOTE_AUDIO_REMOVE: "REMOTE_AUDIO_REMOVE",
    REMOTE_STATE_UPDATE: "REMOTE_STATE_UPDATE",
    LOCAL_NET_STATE_UPDATE: "LOCAL_NET_STATE_UPDATE",
    REMOTE_NET_STATE_UPDATE: "REMOTE_NET_STATE_UPDATE",
    LOCAL_AUDIO_VOLUME_UPDATE: "LOCAL_AUDIO_VOLUME_UPDATE",
    REMOTE_AUDIO_VOLUME_UPDATE: "REMOTE_AUDIO_VOLUME_UPDATE",
    VIDEO_FULLSCREEN_UPDATE: "VIDEO_FULLSCREEN_UPDATE",
    BGM_PLAY_START: "BGM_PLAY_START",
    BGM_PLAY_FAIL: "BGM_PLAY_FAIL",
    BGM_PLAY_PROGRESS: "BGM_PLAY_PROGRESS",
    BGM_PLAY_COMPLETE: "BGM_PLAY_COMPLETE",
    ERROR: "ERROR",
    IM_READY: "IM_READY",
    IM_MESSAGE_RECEIVED: "IM_MESSAGE_RECEIVED",
    IM_NOT_READY: "IM_NOT_READY",
    IM_KICKED_OUT: "IM_KICKED_OUT",
    IM_ERROR: "IM_ERROR"
};

exports.DEFAULT_COMPONENT_CONFIG = {
    sdkAppID: "",
    userID: "",
    userSig: "",
    template: "",
    debugMode: !1,
    enableIM: !0
};

exports.DEFAULT_PUSHER_CONFIG = {
    url: "",
    mode: "RTC",
    autopush: !1,
    enableCamera: !1,
    enableMic: !1,
    enableAgc: !1,
    enableAns: !1,
    enableEarMonitor: !1,
    enableAutoFocus: !0,
    enableZoom: !1,
    minBitrate: 600,
    maxBitrate: 900,
    videoWidth: 360,
    videoHeight: 640,
    beautyLevel: 0,
    whitenessLevel: 0,
    videoOrientation: "vertical",
    videoAspect: "9:16",
    frontCamera: "front",
    enableRemoteMirror: !1,
    localMirror: "auto",
    enableBackgroundMute: !1,
    audioQuality: "high",
    audioVolumeType: "voicecall",
    audioReverbType: 0,
    waitingImage: "https://mc.qcloudimg.com/static/img/daeed8616ac5df256c0591c22a65c4d3/pause_publish.jpg",
    waitingImageHash: "",
    beautyStyle: "smooth",
    filter: ""
};

exports.DEFAULT_PLAYER_CONFIG = {
    src: "",
    mode: "RTC",
    autoplay: !0,
    muteAudio: !0,
    muteVideo: !0,
    orientation: "vertical",
    objectFit: "fillCrop",
    enableBackgroundMute: !1,
    minCache: 1,
    maxCache: 2,
    soundMode: "speaker",
    enableRecvMessage: "false",
    autoPauseIfNavigate: !0,
    autoPauseIfOpenNative: !0
};