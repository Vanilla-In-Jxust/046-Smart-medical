var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.IS_FULLSCREEN_DEVICE = exports.LIB_VERSION = exports.APP_VERSION = exports.IS_MAC = exports.IS_ANDROID = exports.IS_IOS = exports.IS_WX = exports.IS_QQ = exports.IS_TRTC = void 0;

var r = e(require("./compare-version.js")), o = wx || qq;

o || console.error("TRTC-ROOM", "不支持当前小程序环境");

var s, t = o.getSystemInfoSync(), i = t.safeArea;

("iOS 13.3" === t.system || "iPhoneX" === t.model && "iOS 13.3.1" === t.system) && console.log("use media audio volume type"), 
console.log("TRTC-ROOM", "SystemInfo", t), "undefined" != typeof qq ? s = !0 : "undefined" != typeof wx && (s = (0, 
r.default)(t.version, "7.0.8") >= 0 || (0, r.default)(t.version, "2.4.0") >= 0 && (0, 
r.default)(t.version, "6.0.0") < 0 && (0, r.default)(t.SDKVersion, "2.10.0") >= 0);

var S = s;

exports.IS_TRTC = S;

var n = "undefined" != typeof qq;

exports.IS_QQ = n;

var I = "undefined" != typeof wx;

exports.IS_WX = I;

var p = /iOS/i.test(t.system);

exports.IS_IOS = p;

var a = /Android/i.test(t.system);

exports.IS_ANDROID = a;

var _ = /mac/i.test(t.system);

exports.IS_MAC = _;

var d = t.version;

exports.APP_VERSION = d;

var v = t.SDKBuild ? t.SDKVersion + "-" + t.SDKBuild : t.SDKVersion;

exports.LIB_VERSION = v;

var x = !1;

t.screenHeight > i.bottom && (x = !0);

var u = x;

exports.IS_FULLSCREEN_DEVICE = u, console.log("TRTC-ROOM", "APP_VERSION:", d, " LIB_VERSION:", v, " is new version:", S);