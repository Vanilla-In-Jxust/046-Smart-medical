var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../../@babel/runtime/helpers/Objectvalues");

var t, n, r = e(require("../../../@babel/runtime/helpers/typeof"));

t = void 0, n = function() {
    var e = {
        SDK_READY: "sdkStateReady",
        SDK_NOT_READY: "sdkStateNotReady",
        SDK_DESTROY: "sdkDestroy",
        MESSAGE_RECEIVED: "onMessageReceived",
        MESSAGE_REVOKED: "onMessageRevoked",
        CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
        GROUP_LIST_UPDATED: "onGroupListUpdated",
        GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice",
        PROFILE_UPDATED: "onProfileUpdated",
        BLACKLIST_UPDATED: "blacklistUpdated",
        KICKED_OUT: "kickedOut",
        ERROR: "error",
        NET_STATE_CHANGE: "netStateChange"
    }, t = {
        MSG_TEXT: "TIMTextElem",
        MSG_IMAGE: "TIMImageElem",
        MSG_SOUND: "TIMSoundElem",
        MSG_AUDIO: "TIMSoundElem",
        MSG_FILE: "TIMFileElem",
        MSG_FACE: "TIMFaceElem",
        MSG_VIDEO: "TIMVideoFileElem",
        MSG_GEO: "TIMLocationElem",
        MSG_GRP_TIP: "TIMGroupTipElem",
        MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
        MSG_CUSTOM: "TIMCustomElem",
        MSG_PRIORITY_HIGH: "High",
        MSG_PRIORITY_NORMAL: "Normal",
        MSG_PRIORITY_LOW: "Low",
        MSG_PRIORITY_LOWEST: "Lowest",
        CONV_C2C: "C2C",
        CONV_GROUP: "GROUP",
        CONV_SYSTEM: "@TIM#SYSTEM",
        GRP_PRIVATE: "Private",
        GRP_PUBLIC: "Public",
        GRP_CHATROOM: "ChatRoom",
        GRP_AVCHATROOM: "AVChatRoom",
        GRP_MBR_ROLE_OWNER: "Owner",
        GRP_MBR_ROLE_ADMIN: "Admin",
        GRP_MBR_ROLE_MEMBER: "Member",
        GRP_TIP_MBR_JOIN: 1,
        GRP_TIP_MBR_QUIT: 2,
        GRP_TIP_MBR_KICKED_OUT: 3,
        GRP_TIP_MBR_SET_ADMIN: 4,
        GRP_TIP_MBR_CANCELED_ADMIN: 5,
        GRP_TIP_GRP_PROFILE_UPDATED: 6,
        GRP_TIP_MBR_PROFILE_UPDATED: 7,
        MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
        MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
        MSG_REMIND_DISCARD: "Discard",
        GENDER_UNKNOWN: "Gender_Type_Unknown",
        GENDER_FEMALE: "Gender_Type_Female",
        GENDER_MALE: "Gender_Type_Male",
        KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
        KICKED_OUT_MULT_DEVICE: "multipleDevice",
        KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
        ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
        ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
        ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
        FORBID_TYPE_NONE: "AdminForbid_Type_None",
        FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
        JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
        JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
        JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
        JOIN_STATUS_SUCCESS: "JoinedSuccess",
        JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
        JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
        GRP_PROFILE_OWNER_ID: "ownerID",
        GRP_PROFILE_CREATE_TIME: "createTime",
        GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
        GRP_PROFILE_MEMBER_NUM: "memberNum",
        GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
        GRP_PROFILE_JOIN_OPTION: "joinOption",
        GRP_PROFILE_INTRODUCTION: "introduction",
        GRP_PROFILE_NOTIFICATION: "notification",
        NET_STATE_CONNECTED: "connected",
        NET_STATE_CONNECTING: "connecting",
        NET_STATE_DISCONNECTED: "disconnected"
    };
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == (0, r.default)(Symbol.iterator) ? function(e) {
            return (0, r.default)(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0, 
            r.default)(e);
        })(e);
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach(function(t) {
                a(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && h(e, t);
    }
    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    function f(e, t, n) {
        return (f = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (e) {
                return !1;
            }
        }() ? Reflect.construct : function(e, t, n) {
            var r = [ null ];
            r.push.apply(r, t);
            var o = new (Function.bind.apply(e, r))();
            return n && h(o, n.prototype), o;
        }).apply(null, arguments);
    }
    function g(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (g = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
            }
            function r() {
                return f(e, arguments, p(this).constructor);
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), h(r, e);
        })(e);
    }
    function d(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function m(e, t) {
        return !t || "object" != (0, r.default)(t) && "function" != typeof t ? d(e) : t;
    }
    function y(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == a.return || a.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function v(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    var _ = function() {
        function e() {
            o(this, e), this.cache = [], this.options = null;
        }
        return s(e, [ {
            key: "use",
            value: function(e) {
                if ("function" != typeof e) throw "middleware must be a function";
                return this.cache.push(e), this;
            }
        }, {
            key: "next",
            value: function(e) {
                if (this.middlewares && this.middlewares.length > 0) return this.middlewares.shift().call(this, this.options, this.next.bind(this));
            }
        }, {
            key: "run",
            value: function(e) {
                return this.middlewares = this.cache.map(function(e) {
                    return e;
                }), this.options = e, this.next();
            }
        } ]), e;
    }(), C = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function I(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }
    var M, D, S, T = I(function(e, t) {
        var n, o, i, s, a, u, c, l, p, h, f, g, d, m, y, v, _, I;
        e.exports = (n = "function" == typeof Promise, o = "object" == ("undefined" == typeof self ? "undefined" : (0, 
        r.default)(self)) ? self : C, i = "undefined" != typeof Symbol, s = "undefined" != typeof Map, 
        a = "undefined" != typeof Set, u = "undefined" != typeof WeakMap, c = "undefined" != typeof WeakSet, 
        l = "undefined" != typeof DataView, p = i && void 0 !== Symbol.iterator, h = i && void 0 !== Symbol.toStringTag, 
        f = a && "function" == typeof Set.prototype.entries, g = s && "function" == typeof Map.prototype.entries, 
        d = f && Object.getPrototypeOf(new Set().entries()), m = g && Object.getPrototypeOf(new Map().entries()), 
        y = p && "function" == typeof Array.prototype[Symbol.iterator], v = y && Object.getPrototypeOf([][Symbol.iterator]()), 
        _ = p && "function" == typeof String.prototype[Symbol.iterator], I = _ && Object.getPrototypeOf(""[Symbol.iterator]()), 
        function(e) {
            var t = (0, r.default)(e);
            if ("object" !== t) return t;
            if (null === e) return "null";
            if (e === o) return "global";
            if (Array.isArray(e) && (!1 === h || !(Symbol.toStringTag in e))) return "Array";
            if ("object" == ("undefined" == typeof window ? "undefined" : (0, r.default)(window)) && null !== window) {
                if ("object" == (0, r.default)(window.location) && e === window.location) return "Location";
                if ("object" == (0, r.default)(window.document) && e === window.document) return "Document";
                if ("object" == (0, r.default)(window.navigator)) {
                    if ("object" == (0, r.default)(window.navigator.mimeTypes) && e === window.navigator.mimeTypes) return "MimeTypeArray";
                    if ("object" == (0, r.default)(window.navigator.plugins) && e === window.navigator.plugins) return "PluginArray";
                }
                if (("function" == typeof window.HTMLElement || "object" == (0, r.default)(window.HTMLElement)) && e instanceof window.HTMLElement) {
                    if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement";
                    if ("TD" === e.tagName) return "HTMLTableDataCellElement";
                    if ("TH" === e.tagName) return "HTMLTableHeaderCellElement";
                }
            }
            var i = h && e[Symbol.toStringTag];
            if ("string" == typeof i) return i;
            var p = Object.getPrototypeOf(e);
            return p === RegExp.prototype ? "RegExp" : p === Date.prototype ? "Date" : n && p === Promise.prototype ? "Promise" : a && p === Set.prototype ? "Set" : s && p === Map.prototype ? "Map" : c && p === WeakSet.prototype ? "WeakSet" : u && p === WeakMap.prototype ? "WeakMap" : l && p === DataView.prototype ? "DataView" : s && p === m ? "Map Iterator" : a && p === d ? "Set Iterator" : y && p === v ? "Array Iterator" : _ && p === I ? "String Iterator" : null === p ? "Object" : Object.prototype.toString.call(e).slice(8, -1);
        });
    }), E = "undefined" != typeof window, k = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync, w = E && window.navigator && window.navigator.userAgent || "", A = /AppleWebKit\/([\d.]+)/i.exec(w), R = (A && parseFloat(A.pop()), 
    /iPad/i.test(w), /iPhone/i.test(w), /iPod/i.test(w), (M = w.match(/OS (\d+)_/i)) && M[1] && M[1], 
    /Android/i.test(w)), O = (function() {
        var e = w.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!e) return null;
        var t = e[1] && parseFloat(e[1]), n = e[2] && parseFloat(e[2]);
        t && n && parseFloat(e[1] + "." + e[2]);
    }(), !(R && /webkit/i.test(w), /Firefox/i.test(w), /Edge/i.test(w)) && /Chrome/i.test(w), 
    function() {
        var e = w.match(/Chrome\/(\d+)/);
        e && e[1] && parseFloat(e[1]);
    }(), /MSIE/.test(w)), L = (/MSIE\s8\.0/.test(w), function() {
        var e = /MSIE\s(\d+)\.\d/.exec(w), t = e && parseFloat(e[1]);
        return !t && /Trident\/7.0/i.test(w) && /rv:11.0/.test(w) && (t = 11), t;
    }()), N = (/Safari/i.test(w), /TBS\/\d+/i.test(w)), b = (function() {
        var e = w.match(/TBS\/(\d+)/i);
        e && e[1] && e[1];
    }(), !N && /MQQBrowser\/\d+/i.test(w), !N && / QQBrowser\/\d+/i.test(w), /(micromessenger|webbrowser)/i.test(w)), P = (/Windows/i.test(w), 
    /MAC OS X/i.test(w), /MicroMessenger/i.test(w), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    D = "undefined" != typeof console ? console : void 0 !== P && P.console ? P.console : "undefined" != typeof window && window.console ? window.console : {};
    for (var G = function() {}, q = [ "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn" ], U = q.length; U--; ) S = q[U], 
    console[S] || (D[S] = G);
    D.methods = q;
    var x = D, F = 0, H = new Map();
    function B() {
        var e = new Date();
        return "TIM " + e.toLocaleTimeString("en-US", {
            hour12: !1
        }) + "." + function(e) {
            var t;
            switch (e.toString().length) {
              case 1:
                t = "00" + e;
                break;

              case 2:
                t = "0" + e;
                break;

              default:
                t = e;
            }
            return t;
        }(e.getMilliseconds()) + ":";
    }
    var K = {
        _data: [],
        _length: 0,
        _visible: !1,
        arguments2String: function(e) {
            var t;
            if (1 === e.length) t = B() + e[0]; else {
                t = B();
                for (var n = 0, r = e.length; n < r; n++) J(e[n]) ? Z(e[n]) ? t += ie(e[n]) : t += JSON.stringify(e[n]) : t += e[n], 
                t += " ";
            }
            return t;
        },
        debug: function() {
            if (F <= -1) {
                var e = this.arguments2String(arguments);
                K.record(e, "debug"), x.debug(e);
            }
        },
        log: function() {
            if (F <= 0) {
                var e = this.arguments2String(arguments);
                K.record(e, "log"), x.log(e);
            }
        },
        info: function() {
            if (F <= 1) {
                var e = this.arguments2String(arguments);
                K.record(e, "info"), x.info(e);
            }
        },
        warn: function() {
            if (F <= 2) {
                var e = this.arguments2String(arguments);
                K.record(e, "warn"), x.warn(e);
            }
        },
        error: function() {
            if (F <= 3) {
                var e = this.arguments2String(arguments);
                K.record(e, "error"), x.error(e);
            }
        },
        time: function(e) {
            H.set(e, re.now());
        },
        timeEnd: function(e) {
            if (H.has(e)) {
                var t = re.now() - H.get(e);
                return H.delete(e), t;
            }
            return x.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 
            0;
        },
        setLevel: function(e) {
            e < 4 && x.log(B() + "set level from " + F + " to " + e), F = e;
        },
        record: function(e, t) {
            1100 === K._length && (K._data.splice(0, 100), K._length = 1e3), K._length++, K._data.push("".concat(e, " [").concat(t, "] \n"));
        },
        getLog: function() {
            return K._data;
        }
    }, V = function(e) {
        return "file" === ee(e);
    }, j = function(e) {
        return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === n(e) && e.constructor === Number);
    }, $ = function(e) {
        return "string" == typeof e;
    }, Y = function(e) {
        return null !== e && "object" === n(e);
    }, z = function(e) {
        if ("object" !== n(e) || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var r = t; null !== Object.getPrototypeOf(r); ) r = Object.getPrototypeOf(r);
        return t === r;
    }, W = function(e) {
        return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === ee(e);
    }, X = function(e) {
        return void 0 === e;
    }, J = function(e) {
        return W(e) || Y(e);
    }, Q = function(e) {
        return "function" == typeof e;
    }, Z = function(e) {
        return e instanceof Error;
    }, ee = function(e) {
        return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase();
    }, te = function(e) {
        if ("string" != typeof e) return !1;
        var t = e[0];
        return !/[^a-zA-Z0-9]/.test(t);
    }, ne = 0;
    Date.now || (Date.now = function() {
        return new Date().getTime();
    });
    var re = {
        now: function() {
            0 === ne && (ne = Date.now() - 1);
            var e = Date.now() - ne;
            return e > 4294967295 ? (ne += 4294967295, Date.now() - ne) : e;
        },
        utc: function() {
            return Math.round(Date.now() / 1e3);
        }
    }, oe = function e(t, n, r, o) {
        if (!J(t) || !J(n)) return 0;
        for (var i, s = 0, a = Object.keys(n), u = 0, c = a.length; u < c; u++) if (i = a[u], 
        !(X(n[i]) || r && r.includes(i))) if (J(t[i]) && J(n[i])) s += e(t[i], n[i], r, o); else {
            if (o && o.includes(n[i])) continue;
            t[i] !== n[i] && (t[i] = n[i], s += 1);
        }
        return s;
    }, ie = function(e) {
        return JSON.stringify(e, [ "message", "code" ]);
    }, se = function() {
        var e, t = new Date(), n = t.toISOString(), r = t.getTimezoneOffset() / 60;
        return e = r < 0 ? r > -10 ? "+0" + Math.abs(100 * r) : "+" + Math.abs(100 * r) : r >= 10 ? "-" + 100 * r : "-0" + 100 * r, 
        n.replace("Z", e);
    }, ae = function(e) {
        if (0 === e.length) return 0;
        for (var t = 0, n = 0, r = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t]; ) n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === r ? 3 : 2;
        return n;
    }, ue = function(e) {
        var t = e || 99999999;
        return Math.round(Math.random() * t);
    }, ce = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", le = ce.length, pe = function(e, t) {
        for (var n in e) if (e[n] === t) return !0;
        return !1;
    }, he = {}, fe = function() {
        if (k) return "https:";
        var e = window.location.protocol;
        return [ "http:", "https:" ].indexOf(e) < 0 && (e = "http:"), e;
    }, ge = function(e) {
        return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? "https://" + e : e.replace(/https|http/, "https");
    };
    function de(e, t) {
        W(e) && W(t) ? t.forEach(function(t) {
            var n = t.key, r = t.value, o = e.find(function(e) {
                return e.key === n;
            });
            o ? o.value = r : e.push({
                key: n,
                value: r
            });
        }) : K.warn("updateCustomField target 或 source 不是数组，忽略此次更新。");
    }
    var me = function(e) {
        return e === t.GRP_PUBLIC;
    }, ye = function(e) {
        return e === t.GRP_AVCHATROOM;
    }, ve = function(e) {
        return $(e) && e === t.CONV_SYSTEM;
    };
    function _e(e, t) {
        var n = {};
        return Object.keys(e).forEach(function(r) {
            n[r] = t(e[r], r);
        }), n;
    }
    var Ce = Object.prototype.hasOwnProperty;
    function Ie(e) {
        if (null == e) return !0;
        if ("boolean" == typeof e) return !1;
        if ("number" == typeof e) return 0 === e;
        if ("string" == typeof e) return 0 === e.length;
        if ("function" == typeof e) return 0 === e.length;
        if (Array.isArray(e)) return 0 === e.length;
        if (e instanceof Error) return "" === e.message;
        if (z(e)) {
            for (var t in e) if (Ce.call(e, t)) return !1;
            return !0;
        }
        return !("map" !== ee(e) && !function(e) {
            return "set" === ee(e);
        }(e) && !V(e)) && 0 === e.size;
    }
    function Me(e, t, n, r) {
        if (void 0 === t) return !0;
        var o = !0;
        return t.required && Ie(e) && (x.error("TIM [".concat(n, '] Missing required params: "').concat(r, '".')), 
        o = !1), Ie(e) || T(e).toLowerCase() === t.type.toLowerCase() || (x.error("TIM [".concat(n, '] Invalid params: type check failed for "').concat(r, '".Expected ').concat(t.type, ".")), 
        o = !1), t.validator && !t.validator(e) && (x.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")), 
        o = !1), o;
    }
    var De = "JoinedSuccess", Se = "WaitAdminApproval", Te = 0, Ee = {
        IS_LOGIN: 1,
        IS_NOT_LOGIN: 0
    }, ke = {
        UNSEND: "unSend",
        SUCCESS: "success",
        FAIL: "fail"
    }, we = {
        NOT_START: "notStart",
        PENDING: "pengding",
        RESOLVED: "resolved",
        REJECTED: "rejected"
    }, Ae = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_TEXT, this.content = {
                text: n.text || ""
            };
        }
        return s(e, [ {
            key: "setText",
            value: function(e) {
                this.content.text = e;
            }
        }, {
            key: "sendable",
            value: function() {
                return 0 !== this.content.text.length;
            }
        } ]), e;
    }(), Re = {
        JSON: {
            TYPE: {
                C2C: {
                    NOTICE: 1,
                    COMMON: 9,
                    EVENT: 10
                },
                GROUP: {
                    COMMON: 3,
                    TIP: 4,
                    SYSTEM: 5,
                    TIP2: 6
                },
                FRIEND: {
                    NOTICE: 7
                },
                PROFILE: {
                    NOTICE: 8
                }
            },
            SUBTYPE: {
                C2C: {
                    COMMON: 0,
                    READED: 92,
                    KICKEDOUT: 96
                },
                GROUP: {
                    COMMON: 0,
                    LOVEMESSAGE: 1,
                    TIP: 2,
                    REDPACKET: 3
                }
            },
            OPTIONS: {
                GROUP: {
                    JOIN: 1,
                    QUIT: 2,
                    KICK: 3,
                    SET_ADMIN: 4,
                    CANCEL_ADMIN: 5,
                    MODIFY_GROUP_INFO: 6,
                    MODIFY_MEMBER_INFO: 7
                }
            }
        },
        PROTOBUF: {},
        IMAGE_TYPES: {
            ORIGIN: 1,
            LARGE: 2,
            SMALL: 3
        },
        IMAGE_FORMAT: {
            JPG: 1,
            JPEG: 1,
            GIF: 2,
            PNG: 3,
            BMP: 4,
            UNKNOWN: 255
        }
    }, Oe = {
        NICK: "Tag_Profile_IM_Nick",
        GENDER: "Tag_Profile_IM_Gender",
        BIRTHDAY: "Tag_Profile_IM_BirthDay",
        LOCATION: "Tag_Profile_IM_Location",
        SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
        ALLOWTYPE: "Tag_Profile_IM_AllowType",
        LANGUAGE: "Tag_Profile_IM_Language",
        AVATAR: "Tag_Profile_IM_Image",
        MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
        ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
        LEVEL: "Tag_Profile_IM_Level",
        ROLE: "Tag_Profile_IM_Role"
    }, Le = {
        UNKNOWN: "Gender_Type_Unknown",
        FEMALE: "Gender_Type_Female",
        MALE: "Gender_Type_Male"
    }, Ne = {
        NONE: "AdminForbid_Type_None",
        SEND_OUT: "AdminForbid_Type_SendOut"
    }, be = {
        NEED_CONFIRM: "AllowType_Type_NeedConfirm",
        ALLOW_ANY: "AllowType_Type_AllowAny",
        DENY_ANY: "AllowType_Type_DenyAny"
    }, Pe = function() {
        function e(n) {
            o(this, e), this._imageMemoryURL = "", this._file = n.file, k ? this.createImageDataASURLInWXMiniApp(n.file) : this.createImageDataASURLInWeb(n.file), 
            this._initImageInfoModel(), this.type = t.MSG_IMAGE, this._percent = 0, this.content = {
                imageFormat: Re.IMAGE_FORMAT[n.imageFormat] || Re.IMAGE_FORMAT.UNKNOWN,
                uuid: n.uuid,
                imageInfoArray: []
            }, this.initImageInfoArray(n.imageInfoArray), this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", 
            this._autoFixUrl();
        }
        return s(e, [ {
            key: "_initImageInfoModel",
            value: function() {
                var e = this;
                this._ImageInfoModel = function(t) {
                    this.instanceID = ue(9999999), this.sizeType = t.type || 0, this.size = t.size || 0, 
                    this.width = t.width || 0, this.height = t.height || 0, this.imageUrl = t.url || "", 
                    this.url = t.url || e._imageMemoryURL || e._defaultImage;
                }, this._ImageInfoModel.prototype = {
                    setSizeType: function(e) {
                        this.sizeType = e;
                    },
                    setImageUrl: function(e) {
                        e && (this.imageUrl = e);
                    },
                    getImageUrl: function() {
                        return this.imageUrl;
                    }
                };
            }
        }, {
            key: "initImageInfoArray",
            value: function(e) {
                for (var t = 2, n = null, r = null; t >= 0; ) r = void 0 === e || void 0 === e[t] ? {
                    type: 0,
                    size: 0,
                    width: 0,
                    height: 0,
                    url: ""
                } : e[t], (n = new this._ImageInfoModel(r)).setSizeType(t + 1), this.addImageInfo(n), 
                t--;
            }
        }, {
            key: "updateImageInfoArray",
            value: function(e) {
                for (var t, n = this.content.imageInfoArray.length, r = 0; r < n; r++) t = this.content.imageInfoArray[r], 
                e.size && (t.size = e.size), e.url && t.setImageUrl(e.url), e.width && (t.width = e.width), 
                e.height && (t.height = e.height);
            }
        }, {
            key: "_autoFixUrl",
            value: function() {
                for (var e = this.content.imageInfoArray.length, t = "", n = "", r = [ "http", "https" ], o = null, i = 0; i < e; i++) this.content.imageInfoArray[i].url && "" !== (o = this.content.imageInfoArray[i]).imageUrl && (n = o.imageUrl.slice(0, o.imageUrl.indexOf("://") + 1), 
                t = o.imageUrl.slice(o.imageUrl.indexOf("://") + 1), r.indexOf(n) < 0 && (n = "https:"), 
                this.content.imageInfoArray[i].setImageUrl([ n, t ].join("")));
            }
        }, {
            key: "updatePercent",
            value: function(e) {
                this._percent = e, this._percent > 1 && (this._percent = 1);
            }
        }, {
            key: "updateImageFormat",
            value: function(e) {
                this.content.imageFormat = e;
            }
        }, {
            key: "createImageDataASURLInWeb",
            value: function(e) {
                void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]));
            }
        }, {
            key: "createImageDataASURLInWXMiniApp",
            value: function(e) {
                e && e.url && (this._imageMemoryURL = e.url);
            }
        }, {
            key: "replaceImageInfo",
            value: function(e, t) {
                this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e);
            }
        }, {
            key: "addImageInfo",
            value: function(e) {
                this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e);
            }
        }, {
            key: "sendable",
            value: function() {
                return 0 !== this.content.imageInfoArray.length && "" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size;
            }
        } ]), e;
    }(), Ge = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_FACE, this.content = n || null;
        }
        return s(e, [ {
            key: "sendable",
            value: function() {
                return null !== this.content;
            }
        } ]), e;
    }(), qe = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_AUDIO, this._percent = 0, this.content = {
                downloadFlag: 2,
                second: n.second,
                size: n.size,
                url: n.url,
                remoteAudioUrl: "",
                uuid: n.uuid
            };
        }
        return s(e, [ {
            key: "updatePercent",
            value: function(e) {
                this._percent = e, this._percent > 1 && (this._percent = 1);
            }
        }, {
            key: "updateAudioUrl",
            value: function(e) {
                this.content.remoteAudioUrl = e;
            }
        }, {
            key: "sendable",
            value: function() {
                return "" !== this.content.remoteAudioUrl;
            }
        } ]), e;
    }(), Ue = {
        from: !0,
        groupID: !0,
        groupName: !0,
        to: !0
    }, xe = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_GRP_TIP, this.content = {}, this._initContent(n);
        }
        return s(e, [ {
            key: "_initContent",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                    switch (n) {
                      case "remarkInfo":
                        break;

                      case "groupProfile":
                        t.content.groupProfile = {}, t._initGroupProfile(e[n]);
                        break;

                      case "operatorInfo":
                      case "memberInfoList":
                        break;

                      case "msgMemberInfo":
                        t.content.memberList = e[n], Object.defineProperty(t.content, "msgMemberInfo", {
                            get: function() {
                                return K.warn("!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n", "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n", "参考：群提示消息 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupTipPayload"), 
                                t.content.memberList.map(function(e) {
                                    return {
                                        userID: e.userID,
                                        shutupTime: e.muteTime
                                    };
                                });
                            }
                        });
                        break;

                      default:
                        t.content[n] = e[n];
                    }
                }), this.content.userIDList || (this.content.userIDList = [ this.content.operatorID ]);
            }
        }, {
            key: "_initGroupProfile",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    Ue[r] && (this.content.groupProfile[r] = e[r]);
                }
            }
        } ]), e;
    }(), Fe = {
        from: !0,
        groupID: !0,
        name: !0,
        to: !0
    }, He = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(n);
        }
        return s(e, [ {
            key: "_initContent",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                    switch (n) {
                      case "memberInfoList":
                        break;

                      case "remarkInfo":
                        t.content.handleMessage = e[n];
                        break;

                      case "groupProfile":
                        t.content.groupProfile = {}, t._initGroupProfile(e[n]);
                        break;

                      default:
                        t.content[n] = e[n];
                    }
                });
            }
        }, {
            key: "_initGroupProfile",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    Fe[r] && (this.content.groupProfile[r] = e[r]);
                }
            }
        } ]), e;
    }(), Be = {
        70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",
        70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。",
        70003: "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。",
        70005: "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。",
        70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。",
        70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配，您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
        70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配，您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
        70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(https://cloud.tencent.com/document/product/269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。",
        70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",
        70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
        70051: "帐号被拉入黑名单。",
        70052: "UserSig 已经失效，请重新生成，再次尝试。",
        70107: "因安全原因被限制登录，请不要频繁登录。",
        70169: "请求的用户帐号不存在。",
        70114: "服务端内部超时，请稍后重试。",
        70202: "服务端内部超时，请稍后重试。",
        70206: "请求中批量数量不合法。",
        70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",
        70403: "请求失败，需要 App 管理员权限。",
        70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(https://cloud.tencent.com/document/product/269/32458)。",
        70500: "服务端内部错误，请稍后重试。",
        71000: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",
        20001: "请求包非法。",
        20002: "UserSig 或 A2 失效。",
        20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",
        20004: "网络异常，请重试。",
        20005: "服务端内部错误，请重试。",
        20006: "触发发送单聊消息之前回调，App 后台返回禁止下发该消息。",
        20007: "发送单聊消息，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(https://cloud.tencent.com/document/product/269/38656)。",
        20009: "消息发送双方互相不是好友，禁止发送（配置单聊消息校验好友关系才会出现）。",
        20010: "发送单聊消息，自己不是对方的好友（单向关系），禁止发送。",
        20011: "发送单聊消息，对方不是自己的好友（单向关系），禁止发送。",
        20012: "发送方被禁言，该条消息被禁止发送。",
        20016: "消息撤回超过了时间限制（默认2分钟）。",
        20018: "删除漫游内部错误。",
        90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",
        90002: "JSON 格式请求包中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(https://cloud.tencent.com/document/product/269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。",
        90003: "JSON 格式请求包体中缺少 To_Account 字段或者 To_Account 帐号不存在。",
        90005: "JSON 格式请求包体中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。",
        90006: "JSON 格式请求包体中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。",
        90007: "JSON 格式请求包体中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。",
        90008: "JSON 格式请求包体中缺少 From_Account 字段或者 From_Account 帐号不存在。",
        90009: "请求需要 App 管理员权限。",
        90010: "JSON 格式请求包不符合消息格式描述，请参考 TIMMsgElement 对象的定义(https://cloud.tencent.com/document/product/269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。",
        90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",
        90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",
        90026: "消息离线存储时间错误（最多不能超过7天）。",
        90031: "JSON 格式请求包体中 SyncOtherMachine 字段不是 Integer 类型。",
        90044: "JSON 格式请求包体中 MsgLifeTime 字段不是 Integer 类型。",
        90048: "请求的用户帐号不存在。",
        90054: "撤回请求中的 MsgKey 不合法。",
        90994: "服务内部错误，请重试。",
        90995: "服务内部错误，请重试。",
        91000: "服务内部错误，请重试。",
        90992: "服务内部错误，请重试；如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。",
        93000: "JSON 数据包超长，消息包体请不要超过8k。",
        91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",
        10002: "服务端内部错误，请重试。",
        10003: "请求中的接口名称错误，请核对接口名称并重试。",
        10004: "参数非法，请根据错误描述检查请求是否正确。",
        10005: "请求包体中携带的帐号数量过多。",
        10006: "操作频率限制，请尝试降低调用的频率。",
        10007: "操作权限不足，例如 Public 群组中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。",
        10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",
        10009: "该群不允许群主主动退出。",
        10010: "群组不存在，或者曾经存在过，但是目前已经被解散。",
        10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",
        10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",
        10013: "被邀请加入的用户已经是群成员。",
        10014: "群已满员，无法将请求中的用户加入群组，如果是批量加人，可以尝试减少加入用户的数量。",
        10015: "群组 ID 非法，请检查群组 ID 是否填写正确。",
        10016: "App 后台通过第三方回调拒绝本次操作。",
        10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。",
        10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",
        10019: "请求的用户帐号不存在。",
        10021: "群组 ID 已被使用，请选择其他的群组 ID。",
        10023: "发消息的频率超限，请延长两次发消息时间的间隔。",
        10024: "此邀请或者申请请求已经被处理。",
        10025: "群组 ID 已被使用，并且操作者为群主，可以直接使用。",
        10026: "该 SDKAppID 请求的命令字已被禁用。",
        10030: "请求撤回的消息不存在。",
        10031: "消息撤回超过了时间限制（默认2分钟）。",
        10032: "请求撤回的消息不支持撤回操作。",
        10033: "群组类型不支持消息撤回操作。",
        10034: "该消息类型不支持删除操作。",
        10035: "音视频聊天室和在线成员广播大群不支持删除消息。",
        10036: "音视频聊天室创建数量超过了限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买预付费套餐“IM音视频聊天室”。",
        10037: "单个用户可创建和加入的群组数量超过了限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买或升级预付费套餐“单人可创建与加入群组数”。",
        10038: "群成员数量超过限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买或升级预付费套餐“扩展群人数上限”。",
        10041: "该应用（SDKAppID）已配置不支持群消息撤回。"
    }, Ke = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this))).code = e.code, n.message = Be[e.code] || e.message, 
            n.data = e.data || {}, n;
        }
        return l(t, g(Error)), t;
    }(), Ve = 2103, je = 2900, $e = 2999, Ye = "MessageController.constructor() 需要参数 options", ze = "无法发送空文件", We = "回调函数运行时遇到错误，请检查接入侧代码", Xe = "文件大小超过100M，无法发送 ", Je = "updateMyProfile 无标配资料字段或自定义资料字段", Qe = "不规范的参数名称", Ze = "接口需要 SDK 处于 ready 状态后才能调用", et = [ "jpg", "jpeg", "gif", "png" ], tt = [ "mp4" ], nt = function() {
        function e(n) {
            o(this, e);
            var r = this._check(n);
            if (r instanceof Ke) throw r;
            this.type = t.MSG_FILE, this._percent = 0;
            var i = this._getFileInfo(n);
            this.content = {
                downloadFlag: 2,
                fileUrl: n.url || "",
                uuid: n.uuid,
                fileName: i.name || "",
                fileSize: i.size || 0
            };
        }
        return s(e, [ {
            key: "_getFileInfo",
            value: function(e) {
                if (e.fileName && e.fileSize) return {
                    size: e.fileSize,
                    name: e.fileName
                };
                if (k) return {};
                var t = e.file.files[0];
                return {
                    size: t.size,
                    name: t.name,
                    type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase()
                };
            }
        }, {
            key: "updatePercent",
            value: function(e) {
                this._percent = e, this._percent > 1 && (this._percent = 1);
            }
        }, {
            key: "updateFileUrl",
            value: function(e) {
                this.content.fileUrl = e;
            }
        }, {
            key: "_check",
            value: function(e) {
                if (e.size > 104857600) return new Ke({
                    code: 2402,
                    message: "".concat(Xe, ": ").concat(104857600, " bytes")
                });
            }
        }, {
            key: "sendable",
            value: function() {
                return "" !== this.content.fileUrl && "" !== this.content.fileName && 0 !== this.content.fileSize;
            }
        } ]), e;
    }(), rt = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_CUSTOM, this.content = {
                data: n.data || "",
                description: n.description || "",
                extension: n.extension || ""
            };
        }
        return s(e, [ {
            key: "setData",
            value: function(e) {
                return this.content.data = e, this;
            }
        }, {
            key: "setDescription",
            value: function(e) {
                return this.content.description = e, this;
            }
        }, {
            key: "setExtension",
            value: function(e) {
                return this.content.extension = e, this;
            }
        }, {
            key: "sendable",
            value: function() {
                return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length;
            }
        } ]), e;
    }(), ot = function() {
        function e(n) {
            o(this, e), this.type = t.MSG_VIDEO, this._percent = 0, this.content = {
                remoteVideoUrl: n.remoteVideoUrl,
                videoFormat: n.videoFormat,
                videoSecond: parseInt(n.videoSecond, 10),
                videoSize: n.videoSize,
                videoUrl: n.videoUrl,
                videoDownloadFlag: 2,
                videoUUID: n.videoUUID,
                thumbUUID: n.thumbUUID,
                thumbFormat: n.thumbFormat,
                thumbWidth: n.thumbWidth,
                thumbHeight: n.thumbHeight,
                thumbSize: n.thumbSize,
                thumbDownloadFlag: 2,
                thumbUrl: n.thumbUrl
            };
        }
        return s(e, [ {
            key: "updatePercent",
            value: function(e) {
                this._percent = e, this._percent > 1 && (this._percent = 1);
            }
        }, {
            key: "updateVideoUrl",
            value: function(e) {
                e && (this.content.remoteVideoUrl = e);
            }
        }, {
            key: "sendable",
            value: function() {
                return "" !== this.content.remoteVideoUrl;
            }
        } ]), e;
    }(), it = function e(n) {
        o(this, e), this.type = t.MSG_GEO, this.content = n;
    }, st = {
        1: t.MSG_PRIORITY_HIGH,
        2: t.MSG_PRIORITY_NORMAL,
        3: t.MSG_PRIORITY_LOW,
        4: t.MSG_PRIORITY_LOWEST
    }, at = function() {
        function e(n) {
            o(this, e), this.ID = "", this.conversationID = n.conversationID || null, this.conversationType = n.conversationType || t.CONV_C2C, 
            this.conversationSubType = n.conversationSubType, this.time = n.time || Math.ceil(Date.now() / 1e3), 
            this.sequence = n.sequence || 0, this.clientSequence = n.clientSequence || n.sequence || 0, 
            this.random = n.random || ue(), this.priority = this._computePriority(n.priority), 
            this._elements = [], this.isPlaceMessage = n.isPlaceMessage || 0, this.isRevoked = 2 === n.isPlaceMessage || 8 === n.msgFlagBits, 
            this.geo = {}, this.from = n.from || null, this.to = n.to || null, this.flow = "", 
            this.isSystemMessage = n.isSystemMessage || !1, this.protocol = n.protocol || "JSON", 
            this.isResend = !1, this.isRead = !1, this.status = n.status || ke.SUCCESS, this.reInitialize(n.currentUser), 
            this.extractGroupInfo(n.groupProfile || null);
        }
        return s(e, [ {
            key: "getElements",
            value: function() {
                return this._elements;
            }
        }, {
            key: "extractGroupInfo",
            value: function(e) {
                if (null !== e) {
                    var t = e.messageFromAccountExtraInformation;
                    this.nick = "", "string" == typeof e.fromAccountNick && (this.nick = e.fromAccountNick), 
                    this.avatar = "", "string" == typeof e.fromAccountHeadurl && (this.avatar = e.fromAccountHeadurl), 
                    this.nameCard = "", "object" === n(t) && t.nameCard && (this.nameCard = t.nameCard);
                }
            }
        }, {
            key: "_initProxy",
            value: function() {
                this.payload = this._elements[0].content, this.type = this._elements[0].type;
            }
        }, {
            key: "reInitialize",
            value: function(e) {
                e && (this.status = this.from ? ke.SUCCESS : ke.UNSEND, !this.from && (this.from = e)), 
                this._initFlow(e), this._initielizeSequence(e), this._concactConversationID(e), 
                this.generateMessageID(e);
            }
        }, {
            key: "isSendable",
            value: function() {
                return 0 !== this._elements.length && ("function" != typeof this._elements[0].sendable ? (K.warn("".concat(this._elements[0].type, ' need "boolean : sendable()" method')), 
                !1) : this._elements[0].sendable());
            }
        }, {
            key: "_initTo",
            value: function(e) {
                this.conversationType === t.CONV_GROUP && (this.to = e.groupID);
            }
        }, {
            key: "_initielizeSequence",
            value: function(e) {
                0 === this.clientSequence && e && (this.clientSequence = function(e) {
                    if (!e) return K.error("autoincrementIndex(string: key) need key parameter"), !1;
                    if (void 0 === he[e]) {
                        var t = new Date(), n = "3".concat(t.getHours()).slice(-2), r = "0".concat(t.getMinutes()).slice(-2), o = "0".concat(t.getSeconds()).slice(-2);
                        he[e] = parseInt([ n, r, o, "0001" ].join("")), n = null, r = null, o = null, K.warn("utils.autoincrementIndex() create new sequence : ".concat(e, " = ").concat(he[e]));
                    }
                    return he[e]++;
                }(e)), 0 === this.sequence && this.conversationType === t.CONV_C2C && (this.sequence = this.clientSequence);
            }
        }, {
            key: "generateMessageID",
            value: function(e) {
                var t = e === this.from ? 1 : 0, n = this.sequence > 0 ? this.sequence : this.clientSequence;
                this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t);
            }
        }, {
            key: "_initFlow",
            value: function(e) {
                "" !== e && (e === this.from ? (this.flow = "out", this.isRead = !0) : this.flow = "in");
            }
        }, {
            key: "_concactConversationID",
            value: function(e) {
                var n = this.to, r = "", o = this.conversationType;
                o !== t.CONV_SYSTEM ? (r = o === t.CONV_C2C ? e === this.from ? n : this.from : this.to, 
                this.conversationID = "".concat(o).concat(r)) : this.conversationID = t.CONV_SYSTEM;
            }
        }, {
            key: "isElement",
            value: function(e) {
                return e instanceof Ae || e instanceof Pe || e instanceof Ge || e instanceof qe || e instanceof nt || e instanceof ot || e instanceof xe || e instanceof He || e instanceof rt || e instanceof it;
            }
        }, {
            key: "setElement",
            value: function(e) {
                var n = this;
                if (this.isElement(e)) return this._elements = [ e ], void this._initProxy();
                var r = function(e) {
                    switch (e.type) {
                      case t.MSG_TEXT:
                        n.setTextElement(e.content);
                        break;

                      case t.MSG_IMAGE:
                        n.setImageElement(e.content);
                        break;

                      case t.MSG_AUDIO:
                        n.setAudioElement(e.content);
                        break;

                      case t.MSG_FILE:
                        n.setFileElement(e.content);
                        break;

                      case t.MSG_VIDEO:
                        n.setVideoElement(e.content);
                        break;

                      case t.MSG_CUSTOM:
                        n.setCustomElement(e.content);
                        break;

                      case t.MSG_GEO:
                        n.setGEOElement(e.content);
                        break;

                      case t.MSG_GRP_TIP:
                        n.setGroupTipElement(e.content);
                        break;

                      case t.MSG_GRP_SYS_NOTICE:
                        n.setGroupSystemNoticeElement(e.content);
                        break;

                      case t.MSG_FACE:
                        n.setFaceElement(e.content);
                        break;

                      default:
                        K.warn(e.type, e.content, "no operation......");
                    }
                };
                if (Array.isArray(e)) for (var o = 0; o < e.length; o++) r(e[o]); else r(e);
                this._initProxy();
            }
        }, {
            key: "setTextElement",
            value: function(e) {
                var t = "string" == typeof e ? e : e.text, n = new Ae({
                    text: t
                });
                this._elements.push(n);
            }
        }, {
            key: "setImageElement",
            value: function(e) {
                var t = new Pe(e);
                this._elements.push(t);
            }
        }, {
            key: "setAudioElement",
            value: function(e) {
                var t = new qe(e);
                this._elements.push(t);
            }
        }, {
            key: "setFileElement",
            value: function(e) {
                var t = new nt(e);
                this._elements.push(t);
            }
        }, {
            key: "setVideoElement",
            value: function(e) {
                var t = new ot(e);
                this._elements.push(t);
            }
        }, {
            key: "setGEOElement",
            value: function(e) {
                var t = new it(e);
                this._elements.push(t);
            }
        }, {
            key: "setCustomElement",
            value: function(e) {
                var t = new rt(e);
                this._elements.push(t);
            }
        }, {
            key: "setGroupTipElement",
            value: function(e) {
                var t = new xe(e);
                this._elements.push(t);
            }
        }, {
            key: "setGroupSystemNoticeElement",
            value: function(e) {
                var t = new He(e);
                this._elements.push(t);
            }
        }, {
            key: "setFaceElement",
            value: function(e) {
                var t = new Ge(e);
                this._elements.push(t);
            }
        }, {
            key: "setIsRead",
            value: function(e) {
                this.isRead = e;
            }
        }, {
            key: "_computePriority",
            value: function(e) {
                if (X(e)) return t.MSG_PRIORITY_NORMAL;
                if ($(e) && -1 !== Object.values(st).indexOf(e)) return e;
                if (j(e)) {
                    var n = "" + e;
                    if (-1 !== Object.keys(st).indexOf(n)) return st[n];
                }
                return t.MSG_PRIORITY_NORMAL;
            }
        }, {
            key: "elements",
            get: function() {
                return K.warn("！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"), 
                this._elements;
            }
        } ]), e;
    }(), ut = {
        login: {
            userID: {
                type: "String",
                required: !0
            },
            userSig: {
                type: "String",
                required: !0
            }
        },
        addToBlacklist: {
            userIDList: {
                type: "Array",
                required: !0
            }
        },
        mutilParam: [ {
            name: "paramName",
            type: "Number",
            required: !0
        }, {
            name: "paramName",
            type: "String",
            required: !0
        } ],
        on: [ {
            name: "eventName",
            type: "String",
            validator: function(e) {
                return "string" == typeof e && 0 !== e.length || (console.warn("on 接口的 eventName 参数必须是 String 类型，且不能为空。"), 
                !1);
            }
        }, {
            name: "handler",
            type: "Function",
            validator: function(e) {
                return "function" != typeof e ? (console.warn("on 接口的 handler 参数必须是 Function 类型。"), 
                !1) : ("" === e.name && console.warn("on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"), 
                !0);
            }
        } ],
        once: [ {
            name: "eventName",
            type: "String",
            validator: function(e) {
                return "string" == typeof e && 0 !== e.length || (console.warn("once 接口的 eventName 参数必须是 String 类型，且不能为空。"), 
                !1);
            }
        }, {
            name: "handler",
            type: "Function",
            validator: function(e) {
                return "function" != typeof e ? (console.warn("once 接口的 handler 参数必须是 Function 类型。"), 
                !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"), !0);
            }
        } ],
        off: [ {
            name: "eventName",
            type: "String",
            validator: function(e) {
                return "string" == typeof e && 0 !== e.length || (console.warn("off 接口的 eventName 参数必须是 String 类型，且不能为空。"), 
                !1);
            }
        }, {
            name: "handler",
            type: "Function",
            validator: function(e) {
                return "function" != typeof e ? (console.warn("off 接口的 handler 参数必须是 Function 类型。"), 
                !1) : ("" === e.name && console.warn("off 接口的 handler 参数为匿名函数，无法取消订阅。"), !0);
            }
        } ],
        sendMessage: [ {
            name: "message",
            type: "Object",
            required: !0
        } ],
        getMessageList: {
            conversationID: {
                type: "String",
                required: !0
            },
            nextReqMessageID: {
                type: "String"
            },
            count: {
                type: "Number",
                validator: function(e) {
                    return !(!X(e) && !/^[1-9][0-9]*$/.test(e) && (console.warn("getMessageList 接口的 count 参数必须为正整数"), 
                    1));
                }
            }
        },
        getConversationProfile: [ {
            name: "conversationID",
            type: "String",
            required: !0,
            validator: function(e) {
                return !(!e || !($(n = e) && n.slice(0, 3) === t.CONV_C2C || function(e) {
                    return $(e) && e.slice(0, 5) === t.CONV_GROUP;
                }(e) || ve(e)) && (console.warn("非法的会话 ID:".concat(e, "。会话 ID 组成方式：\n      C2C + userID（单聊）\n      GROUP + groupID（群聊）\n      @TIM#SYSTEM（系统通知会话）")), 
                1));
                var n;
            }
        } ],
        deleteConversation: [ {
            name: "conversationID",
            type: "String",
            required: !0
        } ],
        getGroupList: {
            groupProfileFilter: {
                type: "Array"
            }
        },
        getGroupProfile: {
            groupID: {
                type: "String",
                required: !0
            },
            groupCustomFieldFilter: {
                type: "Array"
            },
            memberCustomFieldFilter: {
                type: "Array"
            }
        },
        getGroupProfileAdvance: {
            groupIDList: {
                type: "Array",
                required: !0
            }
        },
        createGroup: {
            name: {
                type: "String",
                required: !0
            }
        },
        joinGroup: {
            groupID: {
                type: "String",
                required: !0
            },
            type: {
                type: "String"
            },
            applyMessage: {
                type: "String"
            }
        },
        quitGroup: [ {
            name: "groupID",
            type: "String",
            required: !0
        } ],
        handleApplication: {
            message: {
                type: "Object",
                required: !0
            },
            handleAction: {
                type: "String",
                required: !0
            },
            handleMessage: {
                type: "String"
            }
        },
        changeGroupOwner: {
            groupID: {
                type: "String",
                required: !0
            },
            newOwnerID: {
                type: "String",
                required: !0
            }
        },
        updateGroupProfile: {
            groupID: {
                type: "String",
                required: !0
            }
        },
        dismissGroup: [ {
            name: "groupID",
            type: "String",
            required: !0
        } ],
        searchGroupByID: [ {
            name: "groupID",
            type: "String",
            required: !0
        } ],
        getGroupMemberList: {
            groupID: {
                type: "String",
                required: !0
            },
            offset: {
                type: "Number"
            },
            count: {
                type: "Number"
            }
        },
        getGroupMemberProfile: {
            groupID: {
                type: "String",
                required: !0
            },
            userIDList: {
                type: "Array",
                required: !0
            },
            memberCustomFieldFilter: {
                type: "Array"
            }
        },
        addGroupMemeber: {
            groupID: {
                type: "String",
                required: !0
            },
            userIDList: {
                type: "Array",
                required: !0
            }
        },
        setGroupMemberRole: {
            groupID: {
                type: "String",
                required: !0
            },
            userID: {
                type: "String",
                required: !0
            },
            role: {
                type: "String",
                required: !0
            }
        },
        setGroupMemberMuteTime: {
            groupID: {
                type: "String",
                required: !0
            },
            userID: {
                type: "String",
                required: !0
            },
            muteTime: {
                type: "Number",
                validator: function(e) {
                    return e >= 0;
                }
            }
        },
        setGroupMemberNameCard: {
            groupID: {
                type: "String",
                required: !0
            },
            userID: {
                type: "String"
            },
            nameCard: {
                type: "String",
                required: !0,
                validator: function(e) {
                    return !0 !== /^\s+$/.test(e);
                }
            }
        },
        setMessageRemindType: {
            groupID: {
                type: "String",
                required: !0
            },
            messageRemindType: {
                type: "String",
                required: !0
            }
        },
        setGroupMemberCustomField: {
            groupID: {
                type: "String",
                required: !0
            },
            userID: {
                type: "String"
            },
            memberCustomField: {
                type: "Array",
                required: !0
            }
        },
        deleteGroupMember: {
            groupID: {
                type: "String",
                required: !0
            }
        },
        createTextMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0,
                validator: function(e) {
                    return $(e.text) ? 0 !== e.text.length || (console.warn("createTextMessage 消息内容不能为空。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage"), 
                    !1) : (console.warn("createTextMessage payload.text 类型必须为字符串。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage"), 
                    !1);
                }
            }
        },
        createCustomMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0
            }
        },
        createImageMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0,
                validator: function(e) {
                    if (X(e.file)) return console.warn("createImageMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), 
                    !1;
                    if (E) {
                        if (!(e.file instanceof HTMLInputElement || V(e.file))) return console.warn("createImageMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), 
                        !1;
                        if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn("createImageMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), 
                        !1;
                    }
                    return !0;
                },
                onProgress: {
                    type: "Function",
                    required: !1,
                    validator: function(e) {
                        return X(e) && console.warn("createImageMessage 没有 onProgress 回调，您将无法获取图片上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), 
                        !0;
                    }
                }
            }
        },
        createAudioMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0
            },
            onProgress: {
                type: "Function",
                required: !1,
                validator: function(e) {
                    return X(e) && console.warn("createAudioMessage 没有 onProgress 回调，您将无法获取音频上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createAudioMessage"), 
                    !0;
                }
            }
        },
        createVideoMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0
            },
            onProgress: {
                type: "Function",
                required: !1,
                validator: function(e) {
                    return X(e) && console.warn("createVideoMessage 没有 onProgress 回调，您将无法获取视频上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"), 
                    !0;
                }
            }
        },
        createFaceMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0,
                validator: function(e) {
                    return !(!z(e) || (j(e.index) ? !$(e.data) && (console.warn("createFaceMessage payload.data 类型必须为 String！"), 
                    1) : (console.warn("createFaceMessage payload.index 类型必须为 Number！"), 1)));
                }
            }
        },
        createFileMessage: {
            to: {
                type: "String",
                required: !0
            },
            conversationType: {
                type: "String",
                required: !0
            },
            payload: {
                type: "Object",
                required: !0,
                validator: function(e) {
                    if (X(e.file)) return console.warn("createFileMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), 
                    !1;
                    if (E) {
                        if (!(e.file instanceof HTMLInputElement || V(e.file))) return console.warn("createFileMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), 
                        !1;
                        if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn("createFileMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), 
                        !1;
                    }
                    return !0;
                }
            },
            onProgress: {
                type: "Function",
                required: !1,
                validator: function(e) {
                    return X(e) && console.warn("createFileMessage 没有 onProgress 回调，您将无法获取文件上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), 
                    !0;
                }
            }
        },
        revokeMessage: [ {
            name: "message",
            type: "Object",
            required: !0,
            validator: function(e) {
                return e instanceof at ? e.conversationType === t.CONV_SYSTEM ? (console.warn("revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"), 
                !1) : !0 !== e.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"), !1) : (console.warn("revokeMessage 参数 message 必须为 Message(https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html) 实例。"), 
                !1);
            }
        } ],
        getUserProfile: {
            userIDList: {
                type: "Array",
                validator: function(e) {
                    return W(e) ? (0 === e.length && console.warn("getUserProfile userIDList 不能为空数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#getUserProfile"), 
                    !0) : (console.warn("getUserProfile userIDList 必须为数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#getUserProfile"), 
                    !1);
                }
            }
        },
        updateMyProfile: {
            profileCustomField: {
                type: "Array",
                validator: function(e) {
                    return !!X(e) || !!W(e) || (console.warn("updateMyProfile profileCustomField 必须为数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile"), 
                    !1);
                }
            }
        }
    }, ct = {
        login: "login",
        logout: "logout",
        on: "on",
        once: "once",
        off: "off",
        setLogLevel: "setLogLevel",
        downloadLog: "downloadLog",
        registerPlugin: "registerPlugin",
        destroy: "destroy",
        createTextMessage: "createTextMessage",
        createImageMessage: "createImageMessage",
        createAudioMessage: "createAudioMessage",
        createVideoMessage: "createVideoMessage",
        createCustomMessage: "createCustomMessage",
        createFaceMessage: "createFaceMessage",
        createFileMessage: "createFileMessage",
        sendMessage: "sendMessage",
        resendMessage: "resendMessage",
        getMessageList: "getMessageList",
        setMessageRead: "setMessageRead",
        revokeMessage: "revokeMessage",
        getConversationList: "getConversationList",
        getConversationProfile: "getConversationProfile",
        deleteConversation: "deleteConversation",
        getGroupList: "getGroupList",
        getGroupProfile: "getGroupProfile",
        createGroup: "createGroup",
        joinGroup: "joinGroup",
        updateGroupProfile: "updateGroupProfile",
        quitGroup: "quitGroup",
        dismissGroup: "dismissGroup",
        changeGroupOwner: "changeGroupOwner",
        searchGroupByID: "searchGroupByID",
        setMessageRemindType: "setMessageRemindType",
        handleGroupApplication: "handleGroupApplication",
        getGroupMemberProfile: "getGroupMemberProfile",
        getGroupMemberList: "getGroupMemberList",
        addGroupMember: "addGroupMember",
        deleteGroupMember: "deleteGroupMember",
        setGroupMemberNameCard: "setGroupMemberNameCard",
        setGroupMemberMuteTime: "setGroupMemberMuteTime",
        setGroupMemberRole: "setGroupMemberRole",
        setGroupMemberCustomField: "setGroupMemberCustomField",
        getMyProfile: "getMyProfile",
        getUserProfile: "getUserProfile",
        updateMyProfile: "updateMyProfile",
        getBlacklist: "getBlacklist",
        addToBlacklist: "addToBlacklist",
        removeFromBlacklist: "removeFromBlacklist",
        getFriendList: "getFriendList"
    }, lt = "1.7.3", pt = "537048168", ht = "10", ft = "protobuf", gt = "json", dt = {
        HOST: {
            TYPE: 3,
            ACCESS_LAYER_TYPES: {
                SANDBOX: 1,
                TEST: 2,
                PRODUCTION: 3
            },
            CURRENT: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            PRODUCTION: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            SANDBOX: {
                COMMON: "https://events.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            TEST: {
                COMMON: "https://test.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            setCurrent: function() {
                switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3) {
                  case this.ACCESS_LAYER_TYPES.SANDBOX:
                    this.CURRENT = this.SANDBOX, this.TYPE = this.ACCESS_LAYER_TYPES.SANDBOX;
                    break;

                  case this.ACCESS_LAYER_TYPES.TEST:
                    this.CURRENT = this.TEST, this.TYPE = this.ACCESS_LAYER_TYPES.TEST;
                    break;

                  default:
                    this.CURRENT = this.PRODUCTION, this.TYPE = this.ACCESS_LAYER_TYPES.PRODUCTION;
                }
            }
        },
        NAME: {
            OPEN_IM: "openim",
            GROUP: "group_open_http_svc",
            FRIEND: "sns",
            PROFILE: "profile",
            RECENT_CONTACT: "recentcontact",
            PIC: "openpic",
            BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
            BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc",
            IM_OPEN_STAT: "imopenstat",
            WEB_IM: "webim",
            IM_COS_SIGN: "im_cos_sign_svr"
        },
        CMD: {
            ACCESS_LAYER: "accesslayer",
            LOGIN: "login",
            LOGOUT_LONG_POLL: "longpollinglogout",
            LOGOUT_ALL: "logout",
            PORTRAIT_GET: "portrait_get_all",
            PORTRAIT_SET: "portrait_set",
            GET_LONG_POLL_ID: "getlongpollingid",
            LONG_POLL: "longpolling",
            AVCHATROOM_LONG_POLL: "get_msg",
            FRIEND_ADD: "friend_add",
            FRIEND_GET_ALL: "friend_get_all",
            FRIEND_DELETE: "friend_delete",
            RESPONSE_PENDENCY: "friend_response",
            GET_PENDENCY: "pendency_get",
            DELETE_PENDENCY: "pendency_delete",
            GET_GROUP_PENDENCY: "get_pendency",
            GET_BLACKLIST: "black_list_get",
            ADD_BLACKLIST: "black_list_add",
            DELETE_BLACKLIST: "black_list_delete",
            CREATE_GROUP: "create_group",
            GET_JOINED_GROUPS: "get_joined_group_list",
            SEND_MESSAGE: "sendmsg",
            REVOKE_C2C_MESSAGE: "msgwithdraw",
            SEND_GROUP_MESSAGE: "send_group_msg",
            REVOKE_GROUP_MESSAGE: "group_msg_recall",
            GET_GROUP_INFO: "get_group_info",
            GET_GROUP_MEMBER_INFO: "get_specified_group_member_info",
            GET_GROUP_MEMBER_LIST: "get_group_member_info",
            QUIT_GROUP: "quit_group",
            CHANGE_GROUP_OWNER: "change_group_owner",
            DESTROY_GROUP: "destroy_group",
            ADD_GROUP_MEMBER: "add_group_member",
            DELETE_GROUP_MEMBER: "delete_group_member",
            SEARCH_GROUP_BY_ID: "get_group_public_info",
            APPLY_JOIN_GROUP: "apply_join_group",
            HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
            MODIFY_GROUP_INFO: "modify_group_base_info",
            MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
            DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
            GET_CONVERSATION_LIST: "get",
            PAGING_GET_CONVERSATION_LIST: "page_get",
            DELETE_CONVERSATION: "delete",
            GET_MESSAGES: "getmsg",
            GET_C2C_ROAM_MESSAGES: "getroammsg",
            GET_GROUP_ROAM_MESSAGES: "group_msg_get",
            SET_C2C_MESSAGE_READ: "msgreaded",
            SET_GROUP_MESSAGE_READ: "msg_read_report",
            FILE_READ_AND_WRITE_AUTHKEY: "authkey",
            FILE_UPLOAD: "pic_up",
            COS_SIGN: "cos",
            TIM_WEB_REPORT: "tim_web_report",
            BIG_DATA_HALLWAY_AUTH_KEY: "authkey"
        },
        CHANNEL: {
            SOCKET: 1,
            XHR: 2,
            AUTO: 0
        },
        NAME_VERSION: {
            openim: "v4",
            group_open_http_svc: "v4",
            sns: "v4",
            profile: "v4",
            recentcontact: "v4",
            openpic: "v4",
            group_open_http_noauth_svc: "v1",
            group_open_long_polling_http_noauth_svc: "v1",
            imopenstat: "v4",
            im_cos_sign_svr: "v4",
            webim: "v4"
        }
    };
    dt.HOST.setCurrent(dt.HOST.ACCESS_LAYER_TYPES.PRODUCTION);
    var mt = {
        request: {
            toAccount: "To_Account",
            fromAccount: "From_Account",
            to: "To_Account",
            from: "From_Account",
            groupID: "GroupId",
            avatar: "FaceUrl"
        },
        response: {
            GroupId: "groupID",
            Member_Account: "userID",
            MsgList: "messageList",
            SyncFlag: "syncFlag",
            To_Account: "to",
            From_Account: "from",
            MsgSeq: "sequence",
            MsgRandom: "random",
            MsgTimeStamp: "time",
            MsgContent: "content",
            MsgBody: "elements",
            GroupWithdrawInfoArray: "revokedInfos",
            WithdrawC2cMsgNotify: "c2cMessageRevokedNotify",
            C2cWithdrawInfoArray: "revokedInfos",
            MsgRand: "random",
            MsgType: "type",
            MsgShow: "messageShow",
            NextMsgSeq: "nextMessageSeq",
            FaceUrl: "avatar",
            ProfileDataMod: "profileModify",
            Profile_Account: "userID",
            ValueBytes: "value",
            ValueNum: "value",
            NoticeSeq: "noticeSequence",
            NotifySeq: "notifySequence",
            MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
            Operator_Account: "operatorID",
            OpType: "operationType",
            ReportType: "operationType",
            UserId: "userID",
            User_Account: "userID",
            List_Account: "userIDList",
            MsgOperatorMemberExtraInfo: "operatorInfo",
            MsgMemberExtraInfo: "memberInfoList",
            ImageUrl: "avatar",
            NickName: "nick",
            MsgGroupNewInfo: "newGroupProfile",
            Owner_Account: "ownerID",
            GroupName: "name",
            GroupFaceUrl: "avatar",
            GroupIntroduction: "introduction",
            GroupNotification: "notification",
            GroupApplyJoinOption: "joinOption",
            MsgKey: "messageKey",
            GroupInfo: "groupProfile",
            ShutupTime: "muteTime",
            Desc: "description",
            Ext: "extension"
        },
        ignoreKeyWord: [ "C2C", "ID", "USP" ]
    }, yt = "_contextWasUpdated", vt = "_contextWasReset", _t = "_a2KeyAndTinyIDUpdated", Ct = "_specifiedConfigUpdated", It = "_noticeIsSynchronizing", Mt = "_noticeIsSynchronized", Dt = "_messageSent", St = "_syncMessageProcessing", Tt = "_syncMessageFinished", Et = "_receiveInstantMessage", kt = "_receiveGroupInstantMessage", wt = "_receveGroupSystemNotice", At = "_messageRevoked", Rt = "_longPollGetIDFailed", Ot = "_longPollRequestFailed", Lt = "_longPollResponseOK", Nt = "_longPollFastStart", bt = "_longPollSlowStart", Pt = "_longPollKickedOut", Gt = "_longPollMitipuleDeviceKickedOut", qt = "_longPollGetNewC2CNotice", Ut = "_longPollGetNewGroupMessages", xt = "_longPollGetNewGroupTips", Ft = "_longPollGetNewGroupNotice", Ht = "_longPollGetNewFriendMessages", Bt = "_longPollProfileModified", Kt = " _longpollGroupMessageRevoked", Vt = "_longpollC2CMessageRevoked", jt = "_avlongPollRequestFailed", $t = "_avlongPollResponseOK", Yt = "_onGroupListUpdated", zt = "_loginSuccess", Wt = "_signLogoutExcuting", Xt = "_logoutSuccess", Jt = "_a2keyExpired", Qt = "_errorHasBeenDetected", Zt = "_onConversationListUpdated", en = "_onConversationListProfileUpdated", tn = "_conversationDeleted", nn = "onProfileUpdated", rn = "joinAVChatRoomSuccess", on = "_sdkStateReady";
    function sn(e, t) {
        if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
        var n;
        return t = Object.assign({
            pascalCase: !1
        }, t), 0 === (e = Array.isArray(e) ? e.map(function(e) {
            return e.trim();
        }).filter(function(e) {
            return e.length;
        }).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = an(e)), 
        n = e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(e, t) {
            return t.toUpperCase();
        }).replace(/\d+(\w|$)/g, function(e) {
            return e.toUpperCase();
        }), t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n);
    }
    var an = function(e) {
        for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) {
            var i = e[o];
            t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, o) + "-" + e.slice(o), 
            t = !1, r = n, n = !0, o++) : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1), 
            r = n, n = !1, t = !0) : (t = i.toLowerCase() === i && i.toUpperCase() !== i, r = n, 
            n = i.toUpperCase() === i && i.toLowerCase() !== i);
        }
        return e;
    };
    function un(e, t, n) {
        var r = [], o = 0, i = function e(t, n) {
            if (++o > 10) return o--, t;
            if (W(t)) {
                var i = t.map(function(t) {
                    return Y(t) ? e(t, n) : t;
                });
                return o--, i;
            }
            if (Y(t)) {
                var s = (a = t, u = function(e, t) {
                    if (!te(t)) return !1;
                    if ((s = t) !== sn(s)) {
                        for (var o = !0, i = 0; i < mt.ignoreKeyWord.length; i++) if (t.includes(mt.ignoreKeyWord[i])) {
                            o = !1;
                            break;
                        }
                        o && r.push(t);
                    }
                    var s;
                    return X(n[t]) ? function(e) {
                        return e[0].toUpperCase() + sn(e).slice(1);
                    }(t) : n[t];
                }, c = Object.create(null), Object.keys(a).forEach(function(e) {
                    var t = u(a[e], e);
                    t && (c[t] = a[e]);
                }), c);
                return s = _e(s, function(t, r) {
                    return W(t) || Y(t) ? e(t, n) : t;
                }), o--, s;
            }
            var a, u, c;
        }(e, t = c({}, mt.request, {}, t));
        return r.length > 0 && n.innerEmitter.emit(Qt, {
            code: je,
            message: Qe
        }), i;
    }
    var cn = function() {
        function e(t) {
            var n = this;
            o(this, e), this.url = "", this.requestData = null, this.method = t.method || "POST", 
            this.callback = function(e) {
                return function e(t, n) {
                    if (n = c({}, mt.response, {}, n), W(t)) return t.map(function(t) {
                        return Y(t) ? e(t, n) : t;
                    });
                    if (Y(t)) {
                        var r = (o = t, i = function(e, t) {
                            return X(n[t]) ? sn(t) : n[t];
                        }, s = {}, Object.keys(o).forEach(function(e) {
                            s[i(o[e], e)] = o[e];
                        }), s);
                        return _e(r, function(t) {
                            return W(t) || Y(t) ? e(t, n) : t;
                        });
                    }
                    var o, i, s;
                }(e = t.decode(e), n._getResponseMap(t));
            }, this._initializeServerMap(), this._initializeURL(t), this._initializeRequestData(t);
        }
        return s(e, [ {
            key: "_initializeServerMap",
            value: function() {
                this._serverMap = Object.create(null);
                var e = "";
                for (var t in dt.NAME) if (Object.prototype.hasOwnProperty.call(dt.NAME, t)) switch (e = dt.NAME[t]) {
                  case dt.NAME.PIC:
                    this._serverMap[e] = dt.HOST.CURRENT.PIC;
                    break;

                  case dt.NAME.IM_COS_SIGN:
                    this._serverMap[e] = dt.HOST.CURRENT.COS;
                    break;

                  default:
                    this._serverMap[e] = dt.HOST.CURRENT.COMMON;
                }
            }
        }, {
            key: "_getHost",
            value: function(e) {
                if (void 0 !== this._serverMap[e]) return this._serverMap[e];
                throw new Ke({
                    code: 2803,
                    message: "打包错误，未定义的 serverName"
                });
            }
        }, {
            key: "_initializeURL",
            value: function(e) {
                var t = e.serverName, n = e.cmd, r = this._getHost(t), o = "".concat(r, "/").concat(dt.NAME_VERSION[t], "/").concat(t, "/").concat(n);
                o += "?".concat(this._getQueryString(e.queryString)), this.url = o;
            }
        }, {
            key: "getUrl",
            value: function() {
                return this.url.replace(/&reqtime=(\d+)/, "&reqtime=".concat(Math.ceil(+new Date() / 1e3)));
            }
        }, {
            key: "_initializeRequestData",
            value: function(e) {
                var t, n = e.requestData;
                t = this._requestDataCleaner(n), this.requestData = e.encode(t);
            }
        }, {
            key: "_requestDataCleaner",
            value: function(e) {
                var t = Array.isArray(e) ? [] : Object.create(null);
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && te(r) && null !== e[r] && ("object" !== n(e[r]) ? t[r] = e[r] : t[r] = this._requestDataCleaner.bind(this)(e[r]));
                return t;
            }
        }, {
            key: "_getQueryString",
            value: function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && ("function" != typeof e[n] ? t.push("".concat(n, "=").concat(e[n])) : t.push("".concat(n, "=").concat(e[n]())));
                return t.join("&");
            }
        }, {
            key: "_getResponseMap",
            value: function(e) {
                if (e.keyMaps && e.keyMaps.response && Object.keys(e.keyMaps.response).length > 0) return e.keyMaps.response;
            }
        } ]), e;
    }();
    function ln(e) {
        this.mixin(e);
    }
    ln.mixin = function(e) {
        var t = e.prototype || e;
        t._isReady = !1, t.ready = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e) return this._isReady ? void (t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], 
            void this._readyQueue.push(e));
        }, t.triggerReady = function() {
            var e = this;
            this._isReady = !0, setTimeout(function() {
                var t = e._readyQueue;
                e._readyQueue = [], t && t.length > 0 && t.forEach(function(e) {
                    e.call(this);
                }, e);
            }, 1);
        }, t.resetReady = function() {
            this._isReady = !1, this._readyQueue = [];
        }, t.isReady = function() {
            return this._isReady;
        };
    };
    var pn = function() {
        function e(t) {
            o(this, e), ln.mixin(this), this.tim = t;
        }
        return s(e, [ {
            key: "isLoggedIn",
            value: function() {
                return this.tim.context.login === Ee.IS_LOGIN || !!this.tim.context.a2Key;
            }
        }, {
            key: "createTransportCapsule",
            value: function(e) {
                var t = this.tim.packageConfig.get(e);
                return t ? new cn(t) : null;
            }
        }, {
            key: "request",
            value: function(e) {
                var t = this.createTransportCapsule(e);
                return t || K.error("unknown transport capsule, please check!", e), this.tim.connectionController.request(t);
            }
        }, {
            key: "emitInnerEvent",
            value: function(e, t) {
                this.tim.innerEmitter.emit(e, t);
            }
        }, {
            key: "emitOuterEvent",
            value: function(e, t) {
                this.tim.outerEmitter.emit(e, t);
            }
        }, {
            key: "reset",
            value: function() {
                K.warn([ "method: IMController.reset() method must be implemented" ].join());
            }
        }, {
            key: "probeNetwork",
            value: function() {
                return this.tim.netMonitor.probe();
            }
        }, {
            key: "getNetworkType",
            value: function() {
                return this.tim.netMonitor.getNetworkType();
            }
        }, {
            key: "getPlatform",
            value: function() {
                var e = "web";
                return b ? e = "wechat" : k && (e = "wxmp"), e;
            }
        } ]), e;
    }(), hn = function() {
        function e(t, n) {
            o(this, e), this.data = t, this._innerEmitter = n, this.defaultData = {}, Object.assign(this.defaultData, t), 
            this.initGetterAndSetter();
        }
        return s(e, [ {
            key: "initGetterAndSetter",
            value: function() {
                var e = this, t = function(t) {
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return e.data[t];
                        },
                        set: function(n) {
                            e.data[t] !== n && (e.data[t] = n, e.onChange.bind(e)(t, n));
                        }
                    });
                };
                for (var n in e.data) Object.prototype.hasOwnProperty.call(e.data, n) && t(n);
            }
        }, {
            key: "onChange",
            value: function(e, t) {
                this._innerEmitter.emit(yt, {
                    key: e,
                    value: t
                });
            }
        }, {
            key: "reset",
            value: function() {
                for (var e in K.log("Context.reset"), this.data) Object.prototype.hasOwnProperty.call(this.data, e) && (this.data[e] = this.defaultData.hasOwnProperty(e) ? this.defaultData[e] : null);
            }
        } ]), e;
    }(), fn = function(e) {
        function t(e) {
            var n;
            o(this, t);
            var r = (n = m(this, p(t).call(this, e))).tim.loginInfo;
            return n._context = new hn({
                login: Ee.IS_NOT_LOGIN,
                SDKAppID: r.SDKAppID,
                appIDAt3rd: null,
                accountType: r.accountType,
                identifier: r.identifier,
                tinyID: null,
                identifierNick: r.identifierNick,
                userSig: r.userSig,
                a2Key: null,
                contentType: "json",
                apn: 1
            }, n.tim.innerEmitter), n._initListener(), n;
        }
        return l(t, pn), s(t, [ {
            key: "reset",
            value: function() {
                this._context.reset(), this.emitInnerEvent(vt);
            }
        }, {
            key: "_initListener",
            value: function() {
                this.tim.innerEmitter.on(yt, this._onContextMemberChange, this), this.tim.innerEmitter.on(zt, this._updateA2KeyAndTinyID, this);
            }
        }, {
            key: "_updateA2KeyAndTinyID",
            value: function(e) {
                var t = e.data, n = t.a2Key, r = t.tinyID;
                this._context.a2Key = n, this._context.tinyID = r, this.emitInnerEvent(_t), this.triggerReady();
            }
        }, {
            key: "getContext",
            value: function() {
                return this._context;
            }
        }, {
            key: "_onContextMemberChange",
            value: function(e) {
                var t = e.data, n = t.key, r = t.value;
                ("tinyID" === n || "a2Key" === n) && (r.length <= 0 ? this._context.login = Ee.IS_NOT_LOGIN : this._context.login = null !== this._context.a2Key ? Ee.IS_LOGIN : Ee.IS_NOT_LOGIN);
            }
        } ]), t;
    }(), gn = function e(t) {
        o(this, e), this.code = 0, this.data = t || {};
    }, dn = null, mn = function(e) {
        return e instanceof gn ? (K.warn("IMPromise.resolve 此函数会自动用options创建IMResponse实例，调用侧不需创建，建议修改！"), 
        Promise.resolve(e)) : Promise.resolve(new gn(e));
    }, yn = function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t instanceof Ke) return n && null !== dn && dn.emit(e.ERROR, t), Promise.reject(t);
        if (t instanceof Error) {
            var r = new Ke({
                code: 2903,
                message: t.message
            });
            return n && null !== dn && dn.emit(e.ERROR, r), Promise.reject(r);
        }
        if (X(t) || X(t.code) || X(t.message)) K.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!"); else {
            if (j(t.code) && $(t.message)) {
                var o = new Ke(t);
                return n && null !== dn && dn.emit(e.ERROR, o), Promise.reject(o);
            }
            K.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!");
        }
    }, vn = "sdkReady", _n = "longpolling", Cn = "longpollingAV", In = "sendMessage", Mn = "initGroupList", Dn = function() {
        function e() {
            o(this, e), this.SDKAppID = "", this.version = "", this.tinyID = "", this.userID = "", 
            this.platform = "", this.method = "", this.time = "", this.startts = 0, this.endts = 0, 
            this.timespan = 0, this.codeint = 0, this.message = "", this.text = "", this.msgType = "", 
            this.networkType = "", this.platform = "", this._sentFlag = !1;
        }
        return s(e, [ {
            key: "setCommonInfo",
            value: function(e, t, n, r, o) {
                this.SDKAppID = "".concat(e), this.version = "".concat(t), this.tinyID = n, this.userID = r, 
                this.platform = o, this.time = se(), this.startts && this.endts && !this.timespan && (this.timespan = Math.abs(this.endts - this.startts));
            }
        }, {
            key: "setMethod",
            value: function(e) {
                return this.method = e, this;
            }
        }, {
            key: "setStart",
            value: function() {
                this.startts = Date.now();
            }
        }, {
            key: "setEnd",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._sentFlag || (this.endts = Date.now(), t ? (this._sentFlag = !0, this._eventStatController.pushIn(this)) : setTimeout(function() {
                    e._sentFlag = !0, e._eventStatController.pushIn(e);
                }, 0));
            }
        }, {
            key: "setError",
            value: function(e, t, n) {
                return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ? (e.code && this.setCode(e.code), 
                e.message && this.setMessage(e.message)) : (this.setCode(2805), this.setMessage("未连接到网络"))), 
                this) : (K.warn("SSOLogData.setError value not instanceof Error, please check!"), 
                this);
            }
        }, {
            key: "setCode",
            value: function(e) {
                return X(e) || this._sentFlag || (j(e) ? this.codeint = e : K.warn("SSOLogData.setCode value not a number, please check!")), 
                this;
            }
        }, {
            key: "setMessage",
            value: function(e) {
                return X(e) || this._sentFlag ? this : $(e) ? (this.message = e, this) : this;
            }
        }, {
            key: "setText",
            value: function(e) {
                return j(e) ? this.text = e.toString() : $(e) && (this.text = e), this;
            }
        }, {
            key: "setMessageType",
            value: function(e) {
                return this.msgType = e, this;
            }
        }, {
            key: "setNetworkType",
            value: function(e) {
                return X(e) ? K.warn("SSOLogData.setNetworkType value is undefined, please check!") : this.networkType = e, 
                this;
            }
        } ], [ {
            key: "bindController",
            value: function(t) {
                e.prototype._eventStatController = t;
            }
        } ]), e;
    }(), Sn = "sdkConstruct", Tn = function(n) {
        function r(e) {
            var t;
            return o(this, r), (t = m(this, p(r).call(this, e)))._initializeListener(), t;
        }
        return l(r, pn), s(r, [ {
            key: "login",
            value: function(e) {
                if (this.isLoggedIn()) {
                    var t = "您已经登录账号".concat(e.identifier, "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。");
                    return K.warn(t), mn({
                        actionStatus: "OK",
                        errorCode: 0,
                        errorInfo: t,
                        repeatLogin: !0
                    });
                }
                K.log("SignController.login userID=", e.identifier), K.time("login");
                var n = this._checkLoginInfo(e);
                return Ie(n) ? (this.tim.context.identifier = e.identifier, this.tim.context.userSig = e.userSig, 
                this.tim.context.SDKAppID = e.SDKAppID, this.tim.context.accountType = e.accountType, 
                this.tim.context.identifier && this.tim.context.userSig ? this._accessLayer() : void 0) : yn(n);
            }
        }, {
            key: "_isLoginCurrentUser",
            value: function(e) {
                return this.tim.context.identifier === e;
            }
        }, {
            key: "_initializeListener",
            value: function() {
                var e = this.tim.innerEmitter;
                e.on(Pt, this._onKickedOut, this), e.on(Gt, this._onMultipleDeviceKickedOut, this), 
                e.on(Jt, this._onUserSigExpired, this);
            }
        }, {
            key: "_accessLayer",
            value: function() {
                var e = this, t = new Dn();
                return t.setMethod("accessLayer").setStart(), K.log("SignController._accessLayer."), 
                this.request({
                    name: "accessLayer",
                    action: "query"
                }).then(function(n) {
                    return t.setCode(0).setNetworkType(e.getNetworkType()).setText(n.data.webImAccessLayer).setEnd(), 
                    K.log("SignController._accessLayer ok. webImAccessLayer=".concat(n.data.webImAccessLayer)), 
                    1 === n.data.webImAccessLayer && dt.HOST.setCurrent(n.data.webImAccessLayer), e._login();
                }).catch(function(n) {
                    return e.probeNetwork().then(function(r) {
                        var o = y(r, 2), i = o[0], s = o[1];
                        t.setError(n, i, s).setEnd(!0), e.tim.eventStatController.reportAtOnce();
                    }), K.error("SignController._accessLayer failed. error:".concat(n)), yn(n);
                });
            }
        }, {
            key: "_login",
            value: function() {
                var e = this, t = new Dn();
                return t.setMethod("login").setStart(), this.request({
                    name: "login",
                    action: "query"
                }).then(function(n) {
                    var r = null;
                    if (!n.data.tinyID) throw r = new Ke({
                        code: 2022,
                        message: "无 tinyID"
                    }), t.setError(r, !0, e.getNetworkType()).setEnd(), r;
                    if (!n.data.a2Key) throw r = new Ke({
                        code: 2023,
                        message: "无 a2key"
                    }), t.setError(r, !0, e.getNetworkType()).setEnd(), r;
                    return t.setCode(0).setNetworkType(e.getNetworkType()).setText("".concat(e.tim.loginInfo.identifier)).setEnd(), 
                    K.log("SignController.login ok. userID=".concat(e.tim.loginInfo.identifier, " loginCost=").concat(K.timeEnd("login"), "ms")), 
                    e.emitInnerEvent(zt, {
                        a2Key: n.data.a2Key,
                        tinyID: n.data.tinyID
                    }), mn(n.data);
                }).catch(function(n) {
                    return e.probeNetwork().then(function(e) {
                        var r = y(e, 2), o = r[0], i = r[1];
                        t.setError(n, o, i).setEnd(!0);
                    }), K.error("SignController.login failed. error:".concat(n)), yn(n);
                });
            }
        }, {
            key: "logout",
            value: function() {
                return K.info("SignController.logout"), this.emitInnerEvent(Wt), this._logout(1).then(this._emitLogoutSuccess.bind(this)).catch(this._emitLogoutSuccess.bind(this));
            }
        }, {
            key: "_logout",
            value: function(e) {
                var t = this.tim.notificationController, n = 0 === e ? "logout" : "longPollLogout", r = 0 === e ? {
                    name: n,
                    action: "query"
                } : {
                    name: n,
                    action: "query",
                    param: {
                        longPollID: t.getLongPollID()
                    }
                };
                return this.request(r).catch(function(e) {
                    return K.error("SignController._logout error:", e), yn(e);
                });
            }
        }, {
            key: "_checkLoginInfo",
            value: function(e) {
                var t = 0, n = "";
                return null === e.SDKAppID ? (t = 2e3, n = "无 SDKAppID") : null === e.accountType ? (t = 2001, 
                n = "无 accountType") : null === e.identifier ? (t = 2002, n = "无 userID") : null === e.userSig && (t = 2003, 
                n = "无 userSig"), Ie(t) || Ie(n) ? {} : {
                    code: t,
                    message: n
                };
            }
        }, {
            key: "_emitLogoutSuccess",
            value: function() {
                return this.emitInnerEvent(Xt), mn({});
            }
        }, {
            key: "_onKickedOut",
            value: function() {
                var n = this;
                K.warn("SignController._onKickedOut kicked out. userID=".concat(this.tim.loginInfo.identifier)), 
                this.tim.logout().then(function() {
                    n.emitOuterEvent(e.KICKED_OUT, {
                        type: t.KICKED_OUT_MULT_ACCOUNT
                    });
                });
            }
        }, {
            key: "_onMultipleDeviceKickedOut",
            value: function() {
                var n = this;
                K.warn("SignController._onMultipleDeviceKickedOut kicked out. userID=".concat(this.tim.loginInfo.identifier)), 
                this.tim.logout().then(function() {
                    n.emitOuterEvent(e.KICKED_OUT, {
                        type: t.KICKED_OUT_MULT_DEVICE
                    });
                });
            }
        }, {
            key: "_onUserSigExpired",
            value: function() {
                K.warn("SignController._onUserSigExpired: userSig 签名过期被踢下线"), this.emitOuterEvent(e.KICKED_OUT, {
                    type: t.KICKED_OUT_USERSIG_EXPIRED
                }), this.tim.resetSDK();
            }
        }, {
            key: "reset",
            value: function() {
                K.info("SignController.reset");
            }
        } ]), r;
    }(), En = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n);
        };
    }, kn = Object.prototype.toString;
    function wn(e) {
        return "[object Array]" === kn.call(e);
    }
    function An(e) {
        return void 0 === e;
    }
    function Rn(e) {
        return null !== e && "object" == (0, r.default)(e);
    }
    function On(e) {
        return "[object Function]" === kn.call(e);
    }
    function Ln(e, t) {
        if (null != e) if ("object" != (0, r.default)(e) && (e = [ e ]), wn(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
    }
    var Nn = {
        isArray: wn,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === kn.call(e);
        },
        isBuffer: function(e) {
            return null !== e && !An(e) && null !== e.constructor && !An(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function(e) {
            return "string" == typeof e;
        },
        isNumber: function(e) {
            return "number" == typeof e;
        },
        isObject: Rn,
        isUndefined: An,
        isDate: function(e) {
            return "[object Date]" === kn.call(e);
        },
        isFile: function(e) {
            return "[object File]" === kn.call(e);
        },
        isBlob: function(e) {
            return "[object Blob]" === kn.call(e);
        },
        isFunction: On,
        isStream: function(e) {
            return Rn(e) && On(e.pipe);
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
        },
        forEach: Ln,
        merge: function e() {
            var t = {};
            function n(n, o) {
                "object" == (0, r.default)(t[o]) && "object" == (0, r.default)(n) ? t[o] = e(t[o], n) : t[o] = n;
            }
            for (var o = 0, i = arguments.length; o < i; o++) Ln(arguments[o], n);
            return t;
        },
        deepMerge: function e() {
            var t = {};
            function n(n, o) {
                "object" == (0, r.default)(t[o]) && "object" == (0, r.default)(n) ? t[o] = e(t[o], n) : t[o] = "object" == (0, 
                r.default)(n) ? e({}, n) : n;
            }
            for (var o = 0, i = arguments.length; o < i; o++) Ln(arguments[o], n);
            return t;
        },
        extend: function(e, t, n) {
            return Ln(t, function(t, r) {
                e[r] = n && "function" == typeof t ? En(t, n) : t;
            }), e;
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
    };
    function bn(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    var Pn = function(e, t, n) {
        if (!t) return e;
        var r;
        if (n) r = n(t); else if (Nn.isURLSearchParams(t)) r = t.toString(); else {
            var o = [];
            Nn.forEach(t, function(e, t) {
                null != e && (Nn.isArray(e) ? t += "[]" : e = [ e ], Nn.forEach(e, function(e) {
                    Nn.isDate(e) ? e = e.toISOString() : Nn.isObject(e) && (e = JSON.stringify(e)), 
                    o.push(bn(t) + "=" + bn(e));
                }));
            }), r = o.join("&");
        }
        if (r) {
            var i = e.indexOf("#");
            -1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + r;
        }
        return e;
    };
    function Gn() {
        this.handlers = [];
    }
    Gn.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1;
    }, Gn.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null);
    }, Gn.prototype.forEach = function(e) {
        Nn.forEach(this.handlers, function(t) {
            null !== t && e(t);
        });
    };
    var qn = Gn, Un = function(e, t, n) {
        return Nn.forEach(n, function(n) {
            e = n(e, t);
        }), e;
    }, xn = function(e) {
        return !(!e || !e.__CANCEL__);
    };
    function Fn() {
        throw new Error("setTimeout has not been defined");
    }
    function Hn() {
        throw new Error("clearTimeout has not been defined");
    }
    var Bn = Fn, Kn = Hn;
    function Vn(e) {
        if (Bn === setTimeout) return setTimeout(e, 0);
        if ((Bn === Fn || !Bn) && setTimeout) return Bn = setTimeout, setTimeout(e, 0);
        try {
            return Bn(e, 0);
        } catch (t) {
            try {
                return Bn.call(null, e, 0);
            } catch (t) {
                return Bn.call(this, e, 0);
            }
        }
    }
    "function" == typeof P.setTimeout && (Bn = setTimeout), "function" == typeof P.clearTimeout && (Kn = clearTimeout);
    var jn, $n = [], Yn = !1, zn = -1;
    function Wn() {
        Yn && jn && (Yn = !1, jn.length ? $n = jn.concat($n) : zn = -1, $n.length && Xn());
    }
    function Xn() {
        if (!Yn) {
            var e = Vn(Wn);
            Yn = !0;
            for (var t = $n.length; t; ) {
                for (jn = $n, $n = []; ++zn < t; ) jn && jn[zn].run();
                zn = -1, t = $n.length;
            }
            jn = null, Yn = !1, function(e) {
                if (Kn === clearTimeout) return clearTimeout(e);
                if ((Kn === Hn || !Kn) && clearTimeout) return Kn = clearTimeout, clearTimeout(e);
                try {
                    Kn(e);
                } catch (t) {
                    try {
                        return Kn.call(null, e);
                    } catch (t) {
                        return Kn.call(this, e);
                    }
                }
            }(e);
        }
    }
    function Jn(e, t) {
        this.fun = e, this.array = t;
    }
    function Qn() {}
    Jn.prototype.run = function() {
        this.fun.apply(null, this.array);
    };
    var Zn = Qn, er = Qn, tr = Qn, nr = Qn, rr = Qn, or = Qn, ir = Qn, sr = P.performance || {}, ar = sr.now || sr.mozNow || sr.msNow || sr.oNow || sr.webkitNow || function() {
        return new Date().getTime();
    }, ur = new Date(), cr = {
        nextTick: function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            $n.push(new Jn(e, t)), 1 !== $n.length || Yn || Vn(Xn);
        },
        title: "browser",
        browser: !0,
        env: {},
        argv: [],
        version: "",
        versions: {},
        on: Zn,
        addListener: er,
        once: tr,
        off: nr,
        removeListener: rr,
        removeAllListeners: or,
        emit: ir,
        binding: function(e) {
            throw new Error("process.binding is not supported");
        },
        cwd: function() {
            return "/";
        },
        chdir: function(e) {
            throw new Error("process.chdir is not supported");
        },
        umask: function() {
            return 0;
        },
        hrtime: function(e) {
            var t = .001 * ar.call(sr), n = Math.floor(t), r = Math.floor(t % 1 * 1e9);
            return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [ n, r ];
        },
        platform: "browser",
        release: {},
        config: {},
        uptime: function() {
            return (new Date() - ur) / 1e3;
        }
    }, lr = function(e, t) {
        Nn.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
        });
    }, pr = function(e, t, n, r, o) {
        return function(e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, 
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                };
            }, e;
        }(new Error(e), t, n, r, o);
    }, hr = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ], fr = Nn.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
        function r(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), 
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            };
        }
        return e = r(window.location.href), function(t) {
            var n = Nn.isString(t) ? r(t) : t;
            return n.protocol === e.protocol && n.host === e.host;
        };
    }() : function() {
        return !0;
    }, gr = Nn.isStandardBrowserEnv() ? {
        write: function(e, t, n, r, o, i) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)), Nn.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), 
            Nn.isString(r) && s.push("path=" + r), Nn.isString(o) && s.push("domain=" + o), 
            !0 === i && s.push("secure"), document.cookie = s.join("; ");
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5);
        }
    } : {
        write: function() {},
        read: function() {
            return null;
        },
        remove: function() {}
    }, dr = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    function mr(e, t) {
        !Nn.isUndefined(e) && Nn.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }
    var yr, vr = {
        adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== cr && "[object process]" === Object.prototype.toString.call(cr)) && (yr = function(e) {
            return new Promise(function(t, n) {
                var r = e.data, o = e.headers;
                Nn.isFormData(r) && delete o["Content-Type"];
                var i = new XMLHttpRequest();
                if (e.auth) {
                    var s = e.auth.username || "", a = e.auth.password || "";
                    o.Authorization = "Basic " + btoa(s + ":" + a);
                }
                var u, c, l = (u = e.baseURL, c = e.url, u && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c) ? function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
                }(u, c) : c);
                if (i.open(e.method.toUpperCase(), Pn(l, e.params, e.paramsSerializer), !0), i.timeout = e.timeout, 
                i.onreadystatechange = function() {
                    if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) {
                        var r, o, s, a, u, c = "getAllResponseHeaders" in i ? (r = i.getAllResponseHeaders(), 
                        u = {}, r ? (Nn.forEach(r.split("\n"), function(e) {
                            if (a = e.indexOf(":"), o = Nn.trim(e.substr(0, a)).toLowerCase(), s = Nn.trim(e.substr(a + 1)), 
                            o) {
                                if (u[o] && hr.indexOf(o) >= 0) return;
                                u[o] = "set-cookie" === o ? (u[o] ? u[o] : []).concat([ s ]) : u[o] ? u[o] + ", " + s : s;
                            }
                        }), u) : u) : null, l = {
                            data: e.responseType && "text" !== e.responseType ? i.response : i.responseText,
                            status: i.status,
                            statusText: i.statusText,
                            headers: c,
                            config: e,
                            request: i
                        };
                        !function(e, t, n) {
                            var r = n.config.validateStatus;
                            !r || r(n.status) ? e(n) : t(pr("Request failed with status code " + n.status, n.config, null, n.request, n));
                        }(t, n, l), i = null;
                    }
                }, i.onabort = function() {
                    i && (n(pr("Request aborted", e, "ECONNABORTED", i)), i = null);
                }, i.onerror = function() {
                    n(pr("Network Error", e, null, i)), i = null;
                }, i.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(pr(t, e, "ECONNABORTED", i)), 
                    i = null;
                }, Nn.isStandardBrowserEnv()) {
                    var p = gr, h = (e.withCredentials || fr(l)) && e.xsrfCookieName ? p.read(e.xsrfCookieName) : void 0;
                    h && (o[e.xsrfHeaderName] = h);
                }
                if ("setRequestHeader" in i && Nn.forEach(o, function(e, t) {
                    void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : i.setRequestHeader(t, e);
                }), Nn.isUndefined(e.withCredentials) || (i.withCredentials = !!e.withCredentials), 
                e.responseType) try {
                    i.responseType = e.responseType;
                } catch (t) {
                    if ("json" !== e.responseType) throw t;
                }
                "function" == typeof e.onDownloadProgress && i.addEventListener("progress", e.onDownloadProgress), 
                "function" == typeof e.onUploadProgress && i.upload && i.upload.addEventListener("progress", e.onUploadProgress), 
                e.cancelToken && e.cancelToken.promise.then(function(e) {
                    i && (i.abort(), n(e), i = null);
                }), void 0 === r && (r = null), i.send(r);
            });
        }), yr),
        transformRequest: [ function(e, t) {
            return lr(t, "Accept"), lr(t, "Content-Type"), Nn.isFormData(e) || Nn.isArrayBuffer(e) || Nn.isBuffer(e) || Nn.isStream(e) || Nn.isFile(e) || Nn.isBlob(e) ? e : Nn.isArrayBufferView(e) ? e.buffer : Nn.isURLSearchParams(e) ? (mr(t, "application/x-www-form-urlencoded;charset=utf-8"), 
            e.toString()) : Nn.isObject(e) ? (mr(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
        } ],
        transformResponse: [ function(e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e);
            } catch (e) {}
            return e;
        } ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function(e) {
            return e >= 200 && e < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    Nn.forEach([ "delete", "get", "head" ], function(e) {
        vr.headers[e] = {};
    }), Nn.forEach([ "post", "put", "patch" ], function(e) {
        vr.headers[e] = Nn.merge(dr);
    });
    var _r = vr;
    function Cr(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
    }
    var Ir = function(e) {
        return Cr(e), e.headers = e.headers || {}, e.data = Un(e.data, e.headers, e.transformRequest), 
        e.headers = Nn.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), 
        Nn.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
            delete e.headers[t];
        }), (e.adapter || _r.adapter)(e).then(function(t) {
            return Cr(e), t.data = Un(t.data, t.headers, e.transformResponse), t;
        }, function(t) {
            return xn(t) || (Cr(e), t && t.response && (t.response.data = Un(t.response.data, t.response.headers, e.transformResponse))), 
            Promise.reject(t);
        });
    }, Mr = function(e, t) {
        t = t || {};
        var n = {}, r = [ "url", "method", "params", "data" ], o = [ "headers", "auth", "proxy" ], i = [ "baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath" ];
        Nn.forEach(r, function(e) {
            void 0 !== t[e] && (n[e] = t[e]);
        }), Nn.forEach(o, function(r) {
            Nn.isObject(t[r]) ? n[r] = Nn.deepMerge(e[r], t[r]) : void 0 !== t[r] ? n[r] = t[r] : Nn.isObject(e[r]) ? n[r] = Nn.deepMerge(e[r]) : void 0 !== e[r] && (n[r] = e[r]);
        }), Nn.forEach(i, function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]);
        });
        var s = r.concat(o).concat(i), a = Object.keys(t).filter(function(e) {
            return -1 === s.indexOf(e);
        });
        return Nn.forEach(a, function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]);
        }), n;
    };
    function Dr(e) {
        this.defaults = e, this.interceptors = {
            request: new qn(),
            response: new qn()
        };
    }
    Dr.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, 
        (e = Mr(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [ Ir, void 0 ], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
            t.unshift(e.fulfilled, e.rejected);
        }), this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected);
        }); t.length; ) n = n.then(t.shift(), t.shift());
        return n;
    }, Dr.prototype.getUri = function(e) {
        return e = Mr(this.defaults, e), Pn(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
    }, Nn.forEach([ "delete", "get", "head", "options" ], function(e) {
        Dr.prototype[e] = function(t, n) {
            return this.request(Nn.merge(n || {}, {
                method: e,
                url: t
            }));
        };
    }), Nn.forEach([ "post", "put", "patch" ], function(e) {
        Dr.prototype[e] = function(t, n, r) {
            return this.request(Nn.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }));
        };
    });
    var Sr = Dr;
    function Tr(e) {
        this.message = e;
    }
    Tr.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    }, Tr.prototype.__CANCEL__ = !0;
    var Er = Tr;
    function kr(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e;
        });
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new Er(e), t(n.reason));
        });
    }
    kr.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
    }, kr.source = function() {
        var e;
        return {
            token: new kr(function(t) {
                e = t;
            }),
            cancel: e
        };
    };
    var wr = kr;
    function Ar(e) {
        var t = new Sr(e), n = En(Sr.prototype.request, t);
        return Nn.extend(n, Sr.prototype, t), Nn.extend(n, t), n;
    }
    var Rr = Ar(_r);
    Rr.Axios = Sr, Rr.create = function(e) {
        return Ar(Mr(Rr.defaults, e));
    }, Rr.Cancel = Er, Rr.CancelToken = wr, Rr.isCancel = xn, Rr.all = function(e) {
        return Promise.all(e);
    }, Rr.spread = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    };
    var Or = Rr, Lr = Rr;
    Or.default = Lr;
    var Nr = Or, br = Nr.create({
        timeout: 3e4,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    });
    br.interceptors.response.use(function(e) {
        var t = e.data, n = t.error_code, r = t.ErrorCode;
        return j(n) && (r = n), r !== Te && (e.data.ErrorCode = Number(r)), e;
    }, function(e) {
        return "Network Error" === e.message && (!0 === br.defaults.withCredentials && K.warn("Network Error, try to close `IMAxios.defaults.withCredentials` to false. (IMAxios.js)"), 
        br.defaults.withCredentials = !1), Promise.reject(e);
    });
    var Pr = function() {
        function e() {
            o(this, e);
        }
        return s(e, [ {
            key: "request",
            value: function(e) {
                console.warn("请注意： ConnectionBase.request() 方法必须被派生类重写:"), console.log("参数如下：\n    * @param {String} options.url string 是 开发者服务器接口地址\n    * @param {*} options.data - string/object/ArrayBuffer 否 请求的参数\n    * @param {Object} options.header - Object 否 设置请求的 header，\n    * @param {String} options.method - string GET 否 HTTP 请求方法\n    * @param {String} options.dataType - string json 否 返回的数据格式\n    * @param {String} options.responseType - string text 否 响应的数据类型\n    * @param {Boolean} isRetry - string text false 是否为重试的请求\n   ");
            }
        }, {
            key: "_checkOptions",
            value: function(e) {
                if (0 == !!e.url) throw new Ke({
                    code: 2802,
                    message: "网络层初始化错误，缺少 URL 参数"
                });
            }
        }, {
            key: "_initOptions",
            value: function(e) {
                e.method = [ "POST", "GET", "PUT", "DELETE", "OPTION" ].indexOf(e.method) >= 0 ? e.method : "POST", 
                e.dataType = e.dataType || "json", e.responseType = e.responseType || "json";
            }
        } ]), e;
    }(), Gr = function(e) {
        function t() {
            var e;
            return o(this, t), (e = m(this, p(t).call(this))).retry = 2, e;
        }
        return l(t, Pr), s(t, [ {
            key: "request",
            value: function(e) {
                return this._checkOptions(e), this._initOptions(e), this._requestWithRetry({
                    url: e.url,
                    data: e.data,
                    method: e.method
                });
            }
        }, {
            key: "_requestWithRetry",
            value: function(e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return br(e).catch(function(r) {
                    return t.retry && n < t.retry ? t._requestWithRetry(e, ++n) : yn(new Ke({
                        code: r.code || "",
                        message: r.message || ""
                    }));
                });
            }
        } ]), t;
    }(), qr = [], Ur = [], xr = "undefined" != typeof Uint8Array ? Uint8Array : Array, Fr = !1;
    function Hr() {
        Fr = !0;
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) qr[t] = e[t], 
        Ur[e.charCodeAt(t)] = t;
        Ur["-".charCodeAt(0)] = 62, Ur["_".charCodeAt(0)] = 63;
    }
    function Br(e, t, n) {
        for (var r, o, i = [], s = t; s < n; s += 3) r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], 
        i.push(qr[(o = r) >> 18 & 63] + qr[o >> 12 & 63] + qr[o >> 6 & 63] + qr[63 & o]);
        return i.join("");
    }
    function Kr(e) {
        var t;
        Fr || Hr();
        for (var n = e.length, r = n % 3, o = "", i = [], s = 0, a = n - r; s < a; s += 16383) i.push(Br(e, s, s + 16383 > a ? a : s + 16383));
        return 1 === r ? (t = e[n - 1], o += qr[t >> 2], o += qr[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], 
        o += qr[t >> 10], o += qr[t >> 4 & 63], o += qr[t << 2 & 63], o += "="), i.push(o), 
        i.join("");
    }
    function Vr(e, t, n, r, o) {
        var i, s, a = 8 * o - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, p = n ? o - 1 : 0, h = n ? -1 : 1, f = e[t + p];
        for (p += h, i = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; i = 256 * i + e[t + p], 
        p += h, l -= 8) ;
        for (s = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += h, 
        l -= 8) ;
        if (0 === i) i = 1 - c; else {
            if (i === u) return s ? NaN : 1 / 0 * (f ? -1 : 1);
            s += Math.pow(2, r), i -= c;
        }
        return (f ? -1 : 1) * s * Math.pow(2, i - r);
    }
    function jr(e, t, n, r, o, i) {
        var s, a, u, c = 8 * i - o - 1, l = (1 << c) - 1, p = l >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : i - 1, g = r ? 1 : -1, d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || 1 / 0 === t ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), 
        t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + p >= 1 ? h / u : h * Math.pow(2, 1 - p)) * u >= 2 && (s++, 
        u /= 2), s + p >= l ? (a = 0, s = l) : s + p >= 1 ? (a = (t * u - 1) * Math.pow(2, o), 
        s += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + f] = 255 & a, 
        f += g, a /= 256, o -= 8) ;
        for (s = s << o | a, c += o; c > 0; e[n + f] = 255 & s, f += g, s /= 256, c -= 8) ;
        e[n + f - g] |= 128 * d;
    }
    var $r = {}.toString, Yr = Array.isArray || function(e) {
        return "[object Array]" == $r.call(e);
    };
    function zr() {
        return Xr.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function Wr(e, t) {
        if (zr() < t) throw new RangeError("Invalid typed array length");
        return Xr.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Xr.prototype : (null === e && (e = new Xr(t)), 
        e.length = t), e;
    }
    function Xr(e, t, n) {
        if (!(Xr.TYPED_ARRAY_SUPPORT || this instanceof Xr)) return new Xr(e, t, n);
        if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return Zr(this, e);
        }
        return Jr(this, e, t, n);
    }
    function Jr(e, t, n, r) {
        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
            if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
            return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), 
            Xr.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Xr.prototype : e = eo(e, t), e;
        }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
            if ("string" == typeof n && "" !== n || (n = "utf8"), !Xr.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | ro(t, n), o = (e = Wr(e, r)).write(t, n);
            return o !== r && (e = e.slice(0, o)), e;
        }(e, t, n) : function(e, t) {
            if (no(t)) {
                var n = 0 | to(t.length);
                return 0 === (e = Wr(e, n)).length || t.copy(e, 0, 0, n), e;
            }
            if (t) {
                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? Wr(e, 0) : eo(e, t);
                if ("Buffer" === t.type && Yr(t.data)) return eo(e, t.data);
            }
            var r;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(e, t);
    }
    function Qr(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
    }
    function Zr(e, t) {
        if (Qr(t), e = Wr(e, t < 0 ? 0 : 0 | to(t)), !Xr.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
    }
    function eo(e, t) {
        var n = t.length < 0 ? 0 : 0 | to(t.length);
        e = Wr(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
    }
    function to(e) {
        if (e >= zr()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + zr().toString(16) + " bytes");
        return 0 | e;
    }
    function no(e) {
        return !(null == e || !e._isBuffer);
    }
    function ro(e, t) {
        if (no(e)) return e.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ;) switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;

          case "utf8":
          case "utf-8":
          case void 0:
            return Ao(e).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;

          case "hex":
            return n >>> 1;

          case "base64":
            return Ro(e).length;

          default:
            if (r) return Ao(e).length;
            t = ("" + t).toLowerCase(), r = !0;
        }
    }
    function oo(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r;
    }
    function io(e, t, n, r, o) {
        if (0 === e.length) return -1;
        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
        n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
            if (o) return -1;
            n = e.length - 1;
        } else if (n < 0) {
            if (!o) return -1;
            n = 0;
        }
        if ("string" == typeof t && (t = Xr.from(t, r)), no(t)) return 0 === t.length ? -1 : so(e, t, n, r, o);
        if ("number" == typeof t) return t &= 255, Xr.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : so(e, [ t ], n, r, o);
        throw new TypeError("val must be string, number or Buffer");
    }
    function so(e, t, n, r, o) {
        var i, s = 1, a = e.length, u = t.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            s = 2, a /= 2, u /= 2, n /= 2;
        }
        function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
            var l = -1;
            for (i = n; i < a; i++) if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
                if (-1 === l && (l = i), i - l + 1 === u) return l * s;
            } else -1 !== l && (i -= i - l), l = -1;
        } else for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
            for (var p = !0, h = 0; h < u; h++) if (c(e, i + h) !== c(t, h)) {
                p = !1;
                break;
            }
            if (p) return i;
        }
        return -1;
    }
    function ao(e, t, n, r) {
        n = Number(n) || 0;
        var o = e.length - n;
        r ? (r = Number(r)) > o && (r = o) : r = o;
        var i = t.length;
        if (i % 2 != 0) throw new TypeError("Invalid hex string");
        r > i / 2 && (r = i / 2);
        for (var s = 0; s < r; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[n + s] = a;
        }
        return s;
    }
    function uo(e, t, n, r) {
        return Oo(Ao(t, e.length - n), e, n, r);
    }
    function co(e, t, n, r) {
        return Oo(function(e) {
            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
            return t;
        }(t), e, n, r);
    }
    function lo(e, t, n, r) {
        return co(e, t, n, r);
    }
    function po(e, t, n, r) {
        return Oo(Ro(t), e, n, r);
    }
    function ho(e, t, n, r) {
        return Oo(function(e, t) {
            for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, 
            o = n % 256, i.push(o), i.push(r);
            return i;
        }(t, e.length - n), e, n, r);
    }
    function fo(e, t, n) {
        return 0 === t && n === e.length ? Kr(e) : Kr(e.slice(t, n));
    }
    function go(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], o = t; o < n; ) {
            var i, s, a, u, c = e[o], l = null, p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (o + p <= n) switch (p) {
              case 1:
                c < 128 && (l = c);
                break;

              case 2:
                128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
                break;

              case 3:
                i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                break;

              case 4:
                i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
            }
            null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), 
            l = 56320 | 1023 & l), r.push(l), o += p;
        }
        return function(e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            for (var n = "", r = 0; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
            return n;
        }(r);
    }
    function mo(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
        return r;
    }
    function yo(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
        return r;
    }
    function vo(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var o = "", i = t; i < n; ++i) o += wo(e[i]);
        return o;
    }
    function _o(e, t, n) {
        for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
        return o;
    }
    function Co(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
    }
    function Io(e, t, n, r, o, i) {
        if (!no(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
    }
    function Mo(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
    }
    function Do(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255;
    }
    function So(e, t, n, r, o, i) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
    }
    function To(e, t, n, r, o) {
        return o || So(e, 0, n, 4), jr(e, t, n, r, 23, 4), n + 4;
    }
    function Eo(e, t, n, r, o) {
        return o || So(e, 0, n, 8), jr(e, t, n, r, 52, 8), n + 8;
    }
    Xr.TYPED_ARRAY_SUPPORT = void 0 === P.TYPED_ARRAY_SUPPORT || P.TYPED_ARRAY_SUPPORT, 
    Xr.poolSize = 8192, Xr._augment = function(e) {
        return e.__proto__ = Xr.prototype, e;
    }, Xr.from = function(e, t, n) {
        return Jr(null, e, t, n);
    }, Xr.TYPED_ARRAY_SUPPORT && (Xr.prototype.__proto__ = Uint8Array.prototype, Xr.__proto__ = Uint8Array), 
    Xr.alloc = function(e, t, n) {
        return function(e, t, n, r) {
            return Qr(t), t <= 0 ? Wr(e, t) : void 0 !== n ? "string" == typeof r ? Wr(e, t).fill(n, r) : Wr(e, t).fill(n) : Wr(e, t);
        }(null, e, t, n);
    }, Xr.allocUnsafe = function(e) {
        return Zr(null, e);
    }, Xr.allocUnsafeSlow = function(e) {
        return Zr(null, e);
    }, Xr.isBuffer = function(e) {
        return null != e && (!!e._isBuffer || Lo(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && Lo(e.slice(0, 0));
        }(e));
    }, Xr.compare = function(e, t) {
        if (!no(e) || !no(t)) throw new TypeError("Arguments must be Buffers");
        if (e === t) return 0;
        for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o) if (e[o] !== t[o]) {
            n = e[o], r = t[o];
            break;
        }
        return n < r ? -1 : r < n ? 1 : 0;
    }, Xr.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;

          default:
            return !1;
        }
    }, Xr.concat = function(e, t) {
        if (!Yr(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return Xr.alloc(0);
        var n;
        if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        var r = Xr.allocUnsafe(t), o = 0;
        for (n = 0; n < e.length; ++n) {
            var i = e[n];
            if (!no(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(r, o), o += i.length;
        }
        return r;
    }, Xr.byteLength = ro, Xr.prototype._isBuffer = !0, Xr.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) oo(this, t, t + 1);
        return this;
    }, Xr.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) oo(this, t, t + 3), oo(this, t + 1, t + 2);
        return this;
    }, Xr.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8) oo(this, t, t + 7), oo(this, t + 1, t + 6), oo(this, t + 2, t + 5), 
        oo(this, t + 3, t + 4);
        return this;
    }, Xr.prototype.toString = function() {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? go(this, 0, e) : function(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ;) switch (e) {
              case "hex":
                return vo(this, t, n);

              case "utf8":
              case "utf-8":
                return go(this, t, n);

              case "ascii":
                return mo(this, t, n);

              case "latin1":
              case "binary":
                return yo(this, t, n);

              case "base64":
                return fo(this, t, n);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _o(this, t, n);

              default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), r = !0;
            }
        }.apply(this, arguments);
    }, Xr.prototype.equals = function(e) {
        if (!no(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === Xr.compare(this, e);
    }, Xr.prototype.inspect = function() {
        var e = "";
        return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), 
        this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
    }, Xr.prototype.compare = function(e, t, n, r, o) {
        if (!no(e)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), 
        void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
        if (r >= o && t >= n) return 0;
        if (r >= o) return -1;
        if (t >= n) return 1;
        if (this === e) return 0;
        for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(i, s), u = this.slice(r, o), c = e.slice(t, n), l = 0; l < a; ++l) if (u[l] !== c[l]) {
            i = u[l], s = c[l];
            break;
        }
        return i < s ? -1 : s < i ? 1 : 0;
    }, Xr.prototype.includes = function(e, t, n) {
        return -1 !== this.indexOf(e, t, n);
    }, Xr.prototype.indexOf = function(e, t, n) {
        return io(this, e, t, n, !0);
    }, Xr.prototype.lastIndexOf = function(e, t, n) {
        return io(this, e, t, n, !1);
    }, Xr.prototype.write = function(e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) r = t, 
        n = this.length, t = 0; else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        }
        var o = this.length - t;
        if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var i = !1; ;) switch (r) {
          case "hex":
            return ao(this, e, t, n);

          case "utf8":
          case "utf-8":
            return uo(this, e, t, n);

          case "ascii":
            return co(this, e, t, n);

          case "latin1":
          case "binary":
            return lo(this, e, t, n);

          case "base64":
            return po(this, e, t, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ho(this, e, t, n);

          default:
            if (i) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), i = !0;
        }
    }, Xr.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    }, Xr.prototype.slice = function(e, t) {
        var n, r = this.length;
        if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), 
        t < e && (t = e), Xr.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = Xr.prototype; else {
            var o = t - e;
            n = new Xr(o, void 0);
            for (var i = 0; i < o; ++i) n[i] = this[i + e];
        }
        return n;
    }, Xr.prototype.readUIntLE = function(e, t, n) {
        e |= 0, t |= 0, n || Co(e, t, this.length);
        for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
        return r;
    }, Xr.prototype.readUIntBE = function(e, t, n) {
        e |= 0, t |= 0, n || Co(e, t, this.length);
        for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); ) r += this[e + --t] * o;
        return r;
    }, Xr.prototype.readUInt8 = function(e, t) {
        return t || Co(e, 1, this.length), this[e];
    }, Xr.prototype.readUInt16LE = function(e, t) {
        return t || Co(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, Xr.prototype.readUInt16BE = function(e, t) {
        return t || Co(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, Xr.prototype.readUInt32LE = function(e, t) {
        return t || Co(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, Xr.prototype.readUInt32BE = function(e, t) {
        return t || Co(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, Xr.prototype.readIntLE = function(e, t, n) {
        e |= 0, t |= 0, n || Co(e, t, this.length);
        for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
        return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }, Xr.prototype.readIntBE = function(e, t, n) {
        e |= 0, t |= 0, n || Co(e, t, this.length);
        for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); ) i += this[e + --r] * o;
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, Xr.prototype.readInt8 = function(e, t) {
        return t || Co(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, Xr.prototype.readInt16LE = function(e, t) {
        t || Co(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 4294901760 | n : n;
    }, Xr.prototype.readInt16BE = function(e, t) {
        t || Co(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 4294901760 | n : n;
    }, Xr.prototype.readInt32LE = function(e, t) {
        return t || Co(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, Xr.prototype.readInt32BE = function(e, t) {
        return t || Co(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, Xr.prototype.readFloatLE = function(e, t) {
        return t || Co(e, 4, this.length), Vr(this, e, !0, 23, 4);
    }, Xr.prototype.readFloatBE = function(e, t) {
        return t || Co(e, 4, this.length), Vr(this, e, !1, 23, 4);
    }, Xr.prototype.readDoubleLE = function(e, t) {
        return t || Co(e, 8, this.length), Vr(this, e, !0, 52, 8);
    }, Xr.prototype.readDoubleBE = function(e, t) {
        return t || Co(e, 8, this.length), Vr(this, e, !1, 52, 8);
    }, Xr.prototype.writeUIntLE = function(e, t, n, r) {
        e = +e, t |= 0, n |= 0, r || Io(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var o = 1, i = 0;
        for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = e / o & 255;
        return t + n;
    }, Xr.prototype.writeUIntBE = function(e, t, n, r) {
        e = +e, t |= 0, n |= 0, r || Io(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var o = n - 1, i = 1;
        for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = e / i & 255;
        return t + n;
    }, Xr.prototype.writeUInt8 = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 1, 255, 0), Xr.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 
        this[t] = 255 & e, t + 1;
    }, Xr.prototype.writeUInt16LE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 2, 65535, 0), Xr.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
        this[t + 1] = e >>> 8) : Mo(this, e, t, !0), t + 2;
    }, Xr.prototype.writeUInt16BE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 2, 65535, 0), Xr.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, 
        this[t + 1] = 255 & e) : Mo(this, e, t, !1), t + 2;
    }, Xr.prototype.writeUInt32LE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 4, 4294967295, 0), Xr.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, 
        this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : Do(this, e, t, !0), 
        t + 4;
    }, Xr.prototype.writeUInt32BE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 4, 4294967295, 0), Xr.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, 
        this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Do(this, e, t, !1), 
        t + 4;
    }, Xr.prototype.writeIntLE = function(e, t, n, r) {
        if (e = +e, t |= 0, !r) {
            var o = Math.pow(2, 8 * n - 1);
            Io(this, e, t, n, o - 1, -o);
        }
        var i = 0, s = 1, a = 0;
        for (this[t] = 255 & e; ++i < n && (s *= 256); ) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), 
        this[t + i] = (e / s >> 0) - a & 255;
        return t + n;
    }, Xr.prototype.writeIntBE = function(e, t, n, r) {
        if (e = +e, t |= 0, !r) {
            var o = Math.pow(2, 8 * n - 1);
            Io(this, e, t, n, o - 1, -o);
        }
        var i = n - 1, s = 1, a = 0;
        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); ) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), 
        this[t + i] = (e / s >> 0) - a & 255;
        return t + n;
    }, Xr.prototype.writeInt8 = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 1, 127, -128), Xr.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 
        e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, Xr.prototype.writeInt16LE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 2, 32767, -32768), Xr.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
        this[t + 1] = e >>> 8) : Mo(this, e, t, !0), t + 2;
    }, Xr.prototype.writeInt16BE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 2, 32767, -32768), Xr.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, 
        this[t + 1] = 255 & e) : Mo(this, e, t, !1), t + 2;
    }, Xr.prototype.writeInt32LE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 4, 2147483647, -2147483648), Xr.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
        this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Do(this, e, t, !0), 
        t + 4;
    }, Xr.prototype.writeInt32BE = function(e, t, n) {
        return e = +e, t |= 0, n || Io(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), 
        Xr.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
        this[t + 3] = 255 & e) : Do(this, e, t, !1), t + 4;
    }, Xr.prototype.writeFloatLE = function(e, t, n) {
        return To(this, e, t, !0, n);
    }, Xr.prototype.writeFloatBE = function(e, t, n) {
        return To(this, e, t, !1, n);
    }, Xr.prototype.writeDoubleLE = function(e, t, n) {
        return Eo(this, e, t, !0, n);
    }, Xr.prototype.writeDoubleBE = function(e, t, n) {
        return Eo(this, e, t, !1, n);
    }, Xr.prototype.copy = function(e, t, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), 
        t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var o, i = r - n;
        if (this === e && n < t && t < r) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n]; else if (i < 1e3 || !Xr.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
        return i;
    }, Xr.prototype.fill = function(e, t, n, r) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, 
            n = this.length), 1 === e.length) {
                var o = e.charCodeAt(0);
                o < 256 && (e = o);
            }
            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !Xr.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        } else "number" == typeof e && (e &= 255);
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        var i;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < n; ++i) this[i] = e; else {
            var s = no(e) ? e : Ao(new Xr(e, r).toString()), a = s.length;
            for (i = 0; i < n - t; ++i) this[i + t] = s[i % a];
        }
        return this;
    };
    var ko = /[^+\/0-9A-Za-z-_]/g;
    function wo(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
    }
    function Ao(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
            if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                if (!o) {
                    if (n > 56319) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                    }
                    if (s + 1 === r) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                    }
                    o = n;
                    continue;
                }
                if (n < 56320) {
                    (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                    continue;
                }
                n = 65536 + (o - 55296 << 10 | n - 56320);
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, n < 128) {
                if ((t -= 1) < 0) break;
                i.push(n);
            } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                i.push(n >> 6 | 192, 63 & n | 128);
            } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
            } else {
                if (!(n < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
            }
        }
        return i;
    }
    function Ro(e) {
        return function(e) {
            var t, n, r, o, i, s;
            Fr || Hr();
            var a = e.length;
            if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            i = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, s = new xr(3 * a / 4 - i), 
            r = i > 0 ? a - 4 : a;
            var u = 0;
            for (t = 0, n = 0; t < r; t += 4, n += 3) o = Ur[e.charCodeAt(t)] << 18 | Ur[e.charCodeAt(t + 1)] << 12 | Ur[e.charCodeAt(t + 2)] << 6 | Ur[e.charCodeAt(t + 3)], 
            s[u++] = o >> 16 & 255, s[u++] = o >> 8 & 255, s[u++] = 255 & o;
            return 2 === i ? (o = Ur[e.charCodeAt(t)] << 2 | Ur[e.charCodeAt(t + 1)] >> 4, s[u++] = 255 & o) : 1 === i && (o = Ur[e.charCodeAt(t)] << 10 | Ur[e.charCodeAt(t + 1)] << 4 | Ur[e.charCodeAt(t + 2)] >> 2, 
            s[u++] = o >> 8 & 255, s[u++] = 255 & o), s;
        }(function(e) {
            if ((e = function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
            }(e).replace(ko, "")).length < 2) return "";
            for (;e.length % 4 != 0; ) e += "=";
            return e;
        }(e));
    }
    function Oo(e, t, n, r) {
        for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
        return o;
    }
    function Lo(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    var No = function(e) {
        function t() {
            var e;
            return o(this, t), (e = m(this, p(t).call(this))).retry = 2, e._request = e.promisify(wx.request), 
            e;
        }
        return l(t, Pr), s(t, [ {
            key: "request",
            value: function(e) {
                return this._checkOptions(e), this._initOptions(e), e = c({}, e, {
                    responseType: "text"
                }), this._requestWithRetry(e);
            }
        }, {
            key: "_requestWithRetry",
            value: function(e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return this._request(e).then(this._handleResolve).catch(function(r) {
                    if ($(r.errMsg)) {
                        if (r.errMsg.includes("abort")) return mn({});
                        if (r.errMsg.includes("timeout")) return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : yn(new Ke({
                            code: 2801,
                            message: r.errMsg
                        }));
                        if (r.errMsg.includes("fail")) return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : yn(new Ke({
                            code: 2800,
                            message: r.errMsg
                        }));
                    }
                    return yn(new Ke(c({
                        code: 2903,
                        message: r.message
                    }, r)));
                });
            }
        }, {
            key: "_handleResolve",
            value: function(e) {
                var t = e.data, n = t.error_code, r = t.ErrorCode;
                return "number" == typeof n && (r = n), r !== Te && (e.data.ErrorCode = Number("".concat(r))), 
                e;
            }
        }, {
            key: "promisify",
            value: function(e) {
                return function(t) {
                    return new Promise(function(n, r) {
                        var o = e(Object.assign({}, t, {
                            success: n,
                            fail: r
                        }));
                        t.updateAbort && t.updateAbort(function() {
                            o && Q(o.abort) && o.abort();
                        });
                    });
                };
            }
        } ]), t;
    }(), bo = function() {
        function e() {
            o(this, e), this.request = 0, this.success = 0, this.fail = 0, this.reportRate = 10, 
            this.requestTimeCost = [];
        }
        return s(e, [ {
            key: "report",
            value: function() {
                if (1 !== this.request) {
                    if (this.request % this.reportRate != 0) return null;
                    var e = this.avgRequestTime(), t = "runLoop reports: success=".concat(this.success, ",fail=").concat(this.fail, ",total=").concat(this.request, ",avg=").concat(e, ",cur=").concat(this.requestTimeCost[this.requestTimeCost.length - 1], ",max=").concat(Math.max.apply(null, this.requestTimeCost), ",min=").concat(Math.min.apply(null, this.requestTimeCost));
                    K.log(t);
                }
            }
        }, {
            key: "setRequestTime",
            value: function(e, t) {
                var n = Math.abs(t - e);
                100 === this.requestTimeCost.length && this.requestTimeCost.shift(), this.requestTimeCost.push(n);
            }
        }, {
            key: "avgRequestTime",
            value: function() {
                for (var e, t = this.requestTimeCost.length, n = 0, r = 0; r < t; r++) n += this.requestTimeCost[r];
                return e = n / t, Math.round(100 * e) / 100;
            }
        } ]), e;
    }(), Po = Nr.create({
        timeout: 6e3,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    });
    Po.interceptors.response.use(function(e) {
        var t = e.data, n = t.error_code, r = t.ErrorCode;
        return j(n) && (r = n), r !== Te && (e.data.ErrorCode = Number(r)), e;
    }, function(e) {
        return "Network Error" === e.message && (!0 === Po.defaults.withCredentials && K.warn("Network Error, try to close `IMAxiosAVChatroom.defaults.withCredentials` to false. (IMAxiosAVChatroom.js)"), 
        Po.defaults.withCredentials = !1), Promise.reject(e);
    });
    var Go = Nr.CancelToken, qo = function() {
        function e(t) {
            o(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new bo();
        }
        return s(e, [ {
            key: "destructor",
            value: function() {
                clearTimeout(this._seedID);
                var e = this._index();
                for (var t in this) Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null);
                return e;
            }
        }, {
            key: "setIndex",
            value: function(e) {
                this._index = e;
            }
        }, {
            key: "getIndex",
            value: function() {
                return this._index;
            }
        }, {
            key: "isRunning",
            value: function() {
                return !this._stoped;
            }
        }, {
            key: "_initializeOptions",
            value: function(e) {
                this.options = e;
            }
        }, {
            key: "_initializeMembers",
            value: function() {
                this._index = -1, this._seedID = 0, this._requestStatus = !1, this._stoped = !1, 
                this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, 
                this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, 
                this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, 
                this.options.isAVChatRoomLoop ? this.requestor = Po : this.requestor = br, K.log("XHRRunLoop._initializeMembers isAVChatRoomLoop=".concat(!!this.options.isAVChatRoomLoop)), 
                this.abort = null;
            }
        }, {
            key: "start",
            value: function() {
                0 === this._seedID ? (this._stoped = !1, this._send()) : K.log('XHRRunLoop.start(), XHRRunLoop is running now, if you want to restart runLoop , please run "stop()" first.');
            }
        }, {
            key: "_reset",
            value: function() {
                K.log("XHRRunLoop._reset(), reset long poll _intervalTime", this._intervalTime), 
                this.stop(), this.start();
            }
        }, {
            key: "_intervalTimeIncrease",
            value: function() {
                this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), 
                this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold));
            }
        }, {
            key: "_intervalTimeDecrease",
            value: function() {
                0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), 
                this._intervalTime < 0 && (this._intervalTime = 0));
            }
        }, {
            key: "_intervalTimeAdjustment",
            value: function() {
                var e = Date.now();
                100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), 
                this._responseTime = e;
            }
        }, {
            key: "_intervalTimeAdjustmentBaseOnResponseData",
            value: function(e) {
                e.ErrorCode === Te ? this._intervalTimeDecrease() : this._intervalTimeIncrease();
            }
        }, {
            key: "_send",
            value: function() {
                var e = this;
                if (!0 !== this._requestStatus) {
                    this._requestStatus = !0, this.status.request++, "function" == typeof this.options.before && this.options.before(this.options.pack.requestData);
                    var t = Date.now(), n = 0;
                    this.requestor.request({
                        url: this.options.pack.getUrl(),
                        data: this.options.pack.requestData,
                        method: this.options.pack.method,
                        cancelToken: new Go(function(t) {
                            e.abort = t;
                        })
                    }).then(function(r) {
                        if (e._intervalTimeAdjustmentBaseOnResponseData.bind(e)(r.data), e._retryCount > 0 && (e._retryCount = 0), 
                        e.status.success++, n = Date.now(), e.status.setRequestTime(t, n), r.data.timecost = n - t, 
                        "function" == typeof e.options.success) try {
                            e.options.success({
                                pack: e.options.pack,
                                error: !1,
                                data: e.options.pack.callback(r.data)
                            });
                        } catch (e) {
                            K.warn("XHRRunLoop._send(), error:", e);
                        }
                        e._requestStatus = !1, !1 === e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)), 
                        e.status.report();
                    }).catch(function(r) {
                        if (e.status.fail++, e._retryCount++, e._intervalTimeAdjustment.bind(e)(), !1 === e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)), 
                        e._requestStatus = !1, "function" == typeof e.options.fail && void 0 !== r.request) try {
                            e.options.fail({
                                pack: e.options.pack,
                                error: r,
                                data: !1
                            });
                        } catch (e) {
                            K.warn("XHRRunLoop._send(), fail callback error:"), K.error(e);
                        }
                        n = Date.now(), e.status.setRequestTime(t, n), e.status.report();
                    });
                }
            }
        }, {
            key: "stop",
            value: function() {
                this._clearAllTimeOut(), this._stoped = !0;
            }
        }, {
            key: "_clearAllTimeOut",
            value: function() {
                clearTimeout(this._seedID), this._seedID = 0;
            }
        } ]), e;
    }(), Uo = function() {
        function e(t) {
            o(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new bo();
        }
        return s(e, [ {
            key: "destructor",
            value: function() {
                clearTimeout(this._seedID);
                var e = this._index();
                for (var t in this) Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null);
                return e;
            }
        }, {
            key: "setIndex",
            value: function(e) {
                this._index = e;
            }
        }, {
            key: "isRunning",
            value: function() {
                return !this._stoped;
            }
        }, {
            key: "getIndex",
            value: function() {
                return this._index;
            }
        }, {
            key: "_initializeOptions",
            value: function(e) {
                this.options = e;
            }
        }, {
            key: "_initializeMembers",
            value: function() {
                this._index = -1, this._seedID = 0, this._requestStatus = !1, this._stoped = !1, 
                this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, 
                this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, 
                this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, 
                this.requestor = new No(), this.abort = null;
            }
        }, {
            key: "start",
            value: function() {
                0 === this._seedID ? (this._stoped = !1, this._send()) : K.log('WXRunLoop.start(): WXRunLoop is running now, if you want to restart runLoop , please run "stop()" first.');
            }
        }, {
            key: "_reset",
            value: function() {
                K.log("WXRunLoop.reset(), long poll _intervalMaxRate", this._intervalMaxRate), this.stop(), 
                this.start();
            }
        }, {
            key: "_intervalTimeIncrease",
            value: function() {
                this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), 
                this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold));
            }
        }, {
            key: "_intervalTimeDecrease",
            value: function() {
                0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), 
                this._intervalTime < 0 && (this._intervalTime = 0));
            }
        }, {
            key: "_intervalTimeAdjustment",
            value: function() {
                var e = Date.now();
                100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), 
                this._responseTime = e;
            }
        }, {
            key: "_intervalTimeAdjustmentBaseOnResponseData",
            value: function(e) {
                e.ErrorCode === Te ? this._intervalTimeDecrease() : this._intervalTimeIncrease();
            }
        }, {
            key: "_send",
            value: function() {
                var e = this;
                if (!0 !== this._requestStatus) {
                    var t = this;
                    this._requestStatus = !0, this.status.request++, "function" == typeof this.options.before && this.options.before(t.options.pack.requestData);
                    var n = Date.now(), r = 0;
                    this.requestor.request({
                        url: t.options.pack.getUrl(),
                        data: t.options.pack.requestData,
                        method: t.options.pack.method,
                        updateAbort: function(t) {
                            e.abort = t;
                        }
                    }).then(function(o) {
                        if (t._intervalTimeAdjustmentBaseOnResponseData.bind(e)(o.data), t._retryCount > 0 && (t._retryCount = 0), 
                        e.status.success++, r = Date.now(), e.status.setRequestTime(n, r), o.data.timecost = r - n, 
                        "function" == typeof t.options.success) try {
                            e.options.success({
                                pack: e.options.pack,
                                error: !1,
                                data: e.options.pack.callback(o.data)
                            });
                        } catch (e) {
                            K.warn("WXRunLoop._send(), error:", e);
                        }
                        t._requestStatus = !1, !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), 
                        e.status.report();
                    }).catch(function(o) {
                        if (e.status.fail++, t._retryCount++, t._intervalTimeAdjustment.bind(e)(), !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), 
                        t._requestStatus = !1, "function" == typeof t.options.fail) try {
                            e.options.fail({
                                pack: e.options.pack,
                                error: o,
                                data: !1
                            });
                        } catch (e) {
                            K.warn("WXRunLoop._send(), fail callback error:"), K.error(e);
                        }
                        r = Date.now(), e.status.setRequestTime(n, r), e.status.report();
                    });
                }
            }
        }, {
            key: "stop",
            value: function() {
                this._clearAllTimeOut(), this._stoped = !0;
            }
        }, {
            key: "_clearAllTimeOut",
            value: function() {
                clearTimeout(this._seedID), this._seedID = 0;
            }
        } ]), e;
    }(), xo = function() {
        function e(t) {
            o(this, e), this.tim = t, this.httpConnection = k ? new No() : new Gr(), this.keepAliveConnections = [];
        }
        return s(e, [ {
            key: "initializeListener",
            value: function() {
                this.tim.innerEmitter.on(Wt, this._stopAllRunLoop, this);
            }
        }, {
            key: "request",
            value: function(e) {
                var t = {
                    url: e.url,
                    data: e.requestData,
                    method: e.method,
                    callback: e.callback
                };
                return this.httpConnection.request(t).then(function(t) {
                    return t.data = e.callback(t.data), t.data.errorCode !== Te ? yn(new Ke({
                        code: t.data.errorCode,
                        message: t.data.errorInfo
                    })) : t;
                });
            }
        }, {
            key: "createRunLoop",
            value: function(e) {
                var t = this.createKeepAliveConnection(e);
                return t.setIndex(this.keepAliveConnections.push(t) - 1), t;
            }
        }, {
            key: "stopRunLoop",
            value: function(e) {
                e.stop();
            }
        }, {
            key: "_stopAllRunLoop",
            value: function() {
                for (var e = this.keepAliveConnections.length, t = 0; t < e; t++) this.keepAliveConnections[t].stop();
            }
        }, {
            key: "destroyRunLoop",
            value: function(e) {
                e.stop();
                var t = e.destructor();
                this.keepAliveConnections.slice(t, 1);
            }
        }, {
            key: "startRunLoopExclusive",
            value: function(e) {
                for (var t = e.getIndex(), n = 0; n < this.keepAliveConnections.length; n++) n !== t && this.keepAliveConnections[n].stop();
                e.start();
            }
        }, {
            key: "createKeepAliveConnection",
            value: function(e) {
                return k ? new Uo(e) : (2 === this.tim.options.runLoopNetType || this.tim.options.runLoopNetType, 
                new qo(e));
            }
        }, {
            key: "clearAll",
            value: function() {
                this.conn.cancelAll();
            }
        }, {
            key: "reset",
            value: function() {
                this.keepAliveConnections = [];
            }
        } ]), e;
    }(), Fo = function() {
        function t(e) {
            o(this, t), this.tim = e, this.tim.innerEmitter.on(Qt, this._onErrorDetected, this);
        }
        return s(t, [ {
            key: "_onErrorDetected",
            value: function(t) {
                var n = t.data;
                n.code ? K.warn("Oops! code:".concat(n.code, " message:").concat(n.message)) : K.warn("Oops! message:".concat(n.message, " stack:").concat(n.stack)), 
                this.tim.outerEmitter.emit(e.ERROR, n);
            }
        } ]), t;
    }(), Ho = function() {
        function e(n) {
            var r = this;
            o(this, e), Ie(n) || (this.userID = n.userID || "", this.nick = n.nick || "", this.gender = n.gender || "", 
            this.birthday = n.birthday || 0, this.location = n.location || "", this.selfSignature = n.selfSignature || "", 
            this.allowType = n.allowType || t.ALLOW_TYPE_ALLOW_ANY, this.language = n.language || 0, 
            this.avatar = n.avatar || "", this.messageSettings = n.messageSettings || 0, this.adminForbidType = n.adminForbidType || t.FORBID_TYPE_NONE, 
            this.level = n.level || 0, this.role = n.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], 
            Ie(n.profileCustomField) || n.profileCustomField.forEach(function(e) {
                r.profileCustomField.push({
                    key: e.key,
                    value: e.value
                });
            }));
        }
        return s(e, [ {
            key: "validate",
            value: function(e) {
                var t = !0, n = "";
                if (Ie(e)) return {
                    valid: !1,
                    tips: "empty options"
                };
                if (e.profileCustomField) for (var r = e.profileCustomField.length, o = null, i = 0; i < r; i++) {
                    if (o = e.profileCustomField[i], !$(o.key) || -1 === o.key.indexOf("Tag_Profile_Custom")) return {
                        valid: !1,
                        tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom"
                    };
                    if (!$(o.value)) return {
                        valid: !1,
                        tips: "自定义资料字段的 value 必须是字符串"
                    };
                }
                for (var s in e) if (Object.prototype.hasOwnProperty.call(e, s)) {
                    if ("profileCustomField" === s) continue;
                    if (Ie(e[s]) && !$(e[s]) && !j(e[s])) {
                        n = "key:" + s + ", invalid value:" + e[s], t = !1;
                        continue;
                    }
                    switch (s) {
                      case "nick":
                        $(e[s]) || (n = "nick should be a string", t = !1), ae(e[s]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(ae(e[s]), " bytes"), 
                        t = !1);
                        break;

                      case "gender":
                        pe(Le, e.gender) || (n = "key:gender, invalid value:" + e.gender, t = !1);
                        break;

                      case "birthday":
                        j(e.birthday) || (n = "birthday should be a number", t = !1);
                        break;

                      case "location":
                        $(e.location) || (n = "location should be a string", t = !1);
                        break;

                      case "selfSignature":
                        $(e.selfSignature) || (n = "selfSignature should be a string", t = !1);
                        break;

                      case "allowType":
                        pe(be, e.allowType) || (n = "key:allowType, invalid value:" + e.allowType, t = !1);
                        break;

                      case "language":
                        j(e.language) || (n = "language should be a number", t = !1);
                        break;

                      case "avatar":
                        $(e.avatar) || (n = "avatar should be a string", t = !1);
                        break;

                      case "messageSettings":
                        0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1", 
                        t = !1);
                        break;

                      case "adminForbidType":
                        pe(Ne, e.adminForbidType) || (n = "key:adminForbidType, invalid value:" + e.adminForbidType, 
                        t = !1);
                        break;

                      case "level":
                        j(e.level) || (n = "level should be a number", t = !1);
                        break;

                      case "role":
                        j(e.role) || (n = "role should be a number", t = !1);
                        break;

                      default:
                        n = "unknown key:" + s + "  " + e[s], t = !1;
                    }
                }
                return {
                    valid: t,
                    tips: n
                };
            }
        } ]), e;
    }(), Bo = function() {
        function t(e) {
            o(this, t), this.userController = e, this.TAG = "profile", this.Actions = {
                Q: "query",
                U: "update"
            }, this.accountProfileMap = new Map(), this.expirationTime = 864e5;
        }
        return s(t, [ {
            key: "setExpirationTime",
            value: function(e) {
                this.expirationTime = e;
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                var t = this, n = e.userIDList;
                e.fromAccount = this.userController.getMyAccount(), n.length > 100 && (K.warn("ProfileHandler.getUserProfile 获取用户资料人数不能超过100人"), 
                n.length = 100);
                for (var r, o = [], i = [], s = 0, a = n.length; s < a; s++) r = n[s], this.userController.isMyFriend(r) && this._containsAccount(r) ? i.push(this._getProfileFromMap(r)) : o.push(r);
                if (0 === o.length) return mn(i);
                e.toAccount = o;
                var u = e.bFromGetMyProfile || !1, c = [];
                e.toAccount.forEach(function(e) {
                    c.push({
                        toAccount: e,
                        standardSequence: 0,
                        customSequence: 0
                    });
                }), e.userItem = c;
                var l = new Dn();
                l.setMethod("getUserProfile").setStart();
                var p = this.userController.generateConfig(this.TAG, this.Actions.Q, e);
                return this.userController.request(p).then(function(e) {
                    l.setCode(0).setNetworkType(t.userController.getNetworkType()).setText(e.data.userProfileItem.length).setEnd(), 
                    K.info("ProfileHandler.getUserProfile ok");
                    var n = t._handleResponse(e).concat(i);
                    return u ? (t.userController.onGotMyProfile(), new gn(n[0])) : new gn(n);
                }).catch(function(e) {
                    return t.userController.probeNetwork().then(function(t) {
                        var n = y(t, 2), r = n[0], o = n[1];
                        l.setError(e, r, o).setEnd();
                    }), K.error("ProfileHandler.getUserProfile error:", e), yn(e);
                });
            }
        }, {
            key: "getMyProfile",
            value: function() {
                var e = this.userController.getMyAccount();
                if (K.log("ProfileHandler.getMyProfile myAccount=" + e), this._fillMap(), this._containsAccount(e)) {
                    var t = this._getProfileFromMap(e);
                    return K.debug("ProfileHandler.getMyProfile from cache, myProfile:" + JSON.stringify(t)), 
                    this.userController.onGotMyProfile(), mn(t);
                }
                return this.getUserProfile({
                    fromAccount: e,
                    userIDList: [ e ],
                    bFromGetMyProfile: !0
                });
            }
        }, {
            key: "_handleResponse",
            value: function(e) {
                for (var t, n, r = re.now(), o = e.data.userProfileItem, i = [], s = 0, a = o.length; s < a; s++) "@TLS#NOT_FOUND" !== o[s].to && "" !== o[s].to && (t = o[s].to, 
                n = this._updateMap(t, this._getLatestProfileFromResponse(t, o[s].profileItem)), 
                i.push(n));
                return K.log("ProfileHandler._handleResponse cost " + (re.now() - r) + " ms"), i;
            }
        }, {
            key: "_getLatestProfileFromResponse",
            value: function(e, t) {
                var n = {};
                if (n.userID = e, n.profileCustomField = [], !Ie(t)) for (var r = 0, o = t.length; r < o; r++) if (t[r].tag.indexOf("Tag_Profile_Custom") > -1) n.profileCustomField.push({
                    key: t[r].tag,
                    value: t[r].value
                }); else switch (t[r].tag) {
                  case Oe.NICK:
                    n.nick = t[r].value;
                    break;

                  case Oe.GENDER:
                    n.gender = t[r].value;
                    break;

                  case Oe.BIRTHDAY:
                    n.birthday = t[r].value;
                    break;

                  case Oe.LOCATION:
                    n.location = t[r].value;
                    break;

                  case Oe.SELFSIGNATURE:
                    n.selfSignature = t[r].value;
                    break;

                  case Oe.ALLOWTYPE:
                    n.allowType = t[r].value;
                    break;

                  case Oe.LANGUAGE:
                    n.language = t[r].value;
                    break;

                  case Oe.AVATAR:
                    n.avatar = t[r].value;
                    break;

                  case Oe.MESSAGESETTINGS:
                    n.messageSettings = t[r].value;
                    break;

                  case Oe.ADMINFORBIDTYPE:
                    n.adminForbidType = t[r].value;
                    break;

                  case Oe.LEVEL:
                    n.level = t[r].value;
                    break;

                  case Oe.ROLE:
                    n.role = t[r].value;
                    break;

                  default:
                    K.warn("ProfileHandler._handleResponse unkown tag->", t[r].tag, t[r].value);
                }
                return n;
            }
        }, {
            key: "updateMyProfile",
            value: function(t) {
                var n = this, r = new Ho().validate(t);
                if (!r.valid) return K.error("ProfileHandler.updateMyProfile info:".concat(r.tips, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile")), 
                yn({
                    code: 2721,
                    message: "传入 updateMyProfile 接口的参数无效"
                });
                var o = [];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && ("profileCustomField" === i ? t.profileCustomField.forEach(function(e) {
                    o.push({
                        tag: e.key,
                        value: e.value
                    });
                }) : o.push({
                    tag: Oe[i.toUpperCase()],
                    value: t[i]
                }));
                if (0 === o.length) return K.error("ProfileHandler.updateMyProfile info:".concat(Je, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile")), 
                yn({
                    code: 2722,
                    message: Je
                });
                var s = this.userController.generateConfig(this.TAG, this.Actions.U, {
                    fromAccount: this.userController.getMyAccount(),
                    profileItem: o
                });
                return this.userController.request(s).then(function(r) {
                    K.info("ProfileHandler.updateMyProfile ok");
                    var o = n._updateMap(n.userController.getMyAccount(), t);
                    return n.userController.emitOuterEvent(e.PROFILE_UPDATED, [ o ]), mn(o);
                }).catch(function(e) {
                    return K.error("ProfileHandler.updateMyProfile error:", e), yn(e);
                });
            }
        }, {
            key: "onProfileModified",
            value: function(t) {
                var n = t.data;
                if (!Ie(n)) {
                    var r, o, i = n.length;
                    K.info("ProfileHandler.onProfileModified length=" + i);
                    for (var s = [], a = 0; a < i; a++) r = n[a].userID, o = this._updateMap(r, this._getLatestProfileFromResponse(r, n[a].profileList)), 
                    s.push(o);
                    this.userController.emitInnerEvent(nn, s), this.userController.emitOuterEvent(e.PROFILE_UPDATED, s);
                }
            }
        }, {
            key: "_fillMap",
            value: function() {
                if (0 === this.accountProfileMap.size) {
                    for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, r = e.length; n < r; n++) t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
                    K.log("ProfileHandler._fillMap from cache, map.size=" + this.accountProfileMap.size);
                }
            }
        }, {
            key: "_updateMap",
            value: function(e, t) {
                var n, r = Date.now();
                return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t.profileCustomField && de(n.profileCustomField, t.profileCustomField), 
                oe(n, t, [ "profileCustomField" ]), n.lastUpdatedTime = r) : (n = new Ho(t), (this.userController.isMyFriend(e) || e === this.userController.getMyAccount()) && (n.lastUpdatedTime = r, 
                this.accountProfileMap.set(e, n))), this._flushMap(e === this.userController.getMyAccount()), 
                n;
            }
        }, {
            key: "_flushMap",
            value: function(e) {
                var t = v(this.accountProfileMap.values()), n = this.userController.tim.storage;
                K.debug("ProfileHandler._flushMap length=".concat(t.length, " flushAtOnce=").concat(e)), 
                n.setItem(this.TAG, t, e);
            }
        }, {
            key: "_containsAccount",
            value: function(e) {
                return this.accountProfileMap.has(e);
            }
        }, {
            key: "_getProfileFromMap",
            value: function(e) {
                return this.accountProfileMap.get(e);
            }
        }, {
            key: "_getCachedProfiles",
            value: function() {
                var e = this.userController.tim.storage.getItem(this.TAG);
                return Ie(e) ? [] : e;
            }
        }, {
            key: "onConversationsProfileUpdated",
            value: function(e) {
                for (var t, n, r, o = [], i = 0, s = e.length; i < s; i++) n = (t = e[i]).userID, 
                this.userController.isMyFriend(n) && (this._containsAccount(n) ? (r = this._getProfileFromMap(n), 
                oe(r, t) > 0 && o.push(n)) : o.push(t.userID));
                0 !== o.length && (K.info("ProfileHandler.onConversationsProfileUpdated toAccount:", o), 
                this.getUserProfile({
                    userIDList: o
                }));
            }
        }, {
            key: "reset",
            value: function() {
                this._flushMap(!0), this.accountProfileMap.clear();
            }
        } ]), t;
    }(), Ko = function() {
        function e(t) {
            o(this, e), this.options = t ? t.options : {
                enablePointer: !0
            }, this.pointsList = {}, this.reportText = {}, this.maxNameLen = 0, this.gapChar = "-", 
            this.log = console.log, this.currentTask = "";
        }
        return s(e, [ {
            key: "newTask",
            value: function(e) {
                !1 !== this.options.enablePointer && (e || (e = [ "task", this._timeFormat() ].join("-")), 
                this.pointsList[e] = [], this.currentTask = e, console.log("Pointer new Task : ".concat(this.currentTask)));
            }
        }, {
            key: "deleteTask",
            value: function(e) {
                !1 !== this.options.enablePointer && (e || (e = this.currentTask), this.pointsList[e].length = 0, 
                delete this.pointsList[e]);
            }
        }, {
            key: "dot",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0;
                if (!1 !== this.options.enablePointer) {
                    t = t || this.currentTask;
                    var n = +new Date();
                    this.maxNameLen = this.maxNameLen < e.length ? e.length : this.maxNameLen, this.flen = this.maxNameLen + 10, 
                    this.pointsList[t].push({
                        pointerName: e,
                        time: n
                    });
                }
            }
        }, {
            key: "_analisys",
            value: function(e) {
                if (!1 !== this.options.enablePointer) {
                    e = e || this.currentTask;
                    for (var t = this.pointsList[e], n = t.length, r = [], o = [], i = 0; i < n; i++) 0 !== i && (o = this._analisysTowPoints(t[i - 1], t[i]), 
                    r.push(o.join("")));
                    return o = this._analisysTowPoints(t[0], t[n - 1], !0), r.push(o.join("")), r.join("");
                }
            }
        }, {
            key: "_analisysTowPoints",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!1 !== this.options.enablePointer) {
                    var r = this.flen, o = (t.time - e.time).toString(), i = e.pointerName + this.gapChar.repeat(r - e.pointerName.length), s = t.pointerName + this.gapChar.repeat(r - t.pointerName.length), a = this.gapChar.repeat(4 - o.length) + o;
                    return n ? [ "%c", i, s, a, "ms\n%c" ] : [ i, s, a, "ms\n" ];
                }
            }
        }, {
            key: "report",
            value: function(e) {
                if (!1 !== this.options.enablePointer) {
                    e = e || this.currentTask;
                    var t = this._analisys(e);
                    this.pointsList = [];
                    var n = this._timeFormat(), r = "Pointer[".concat(e, "(").concat(n, ")]"), o = 4 * this.maxNameLen, i = (o - r.length) / 2;
                    console.log([ "-".repeat(i), r, "-".repeat(i) ].join("")), console.log("%c" + t, "color:#66a", "color:red", "color:#66a"), 
                    console.log("-".repeat(o));
                }
            }
        }, {
            key: "_timeFormat",
            value: function() {
                var e = new Date(), t = this.zeroFix(e.getMonth() + 1, 2), n = this.zeroFix(e.getDate(), 2);
                return "".concat(t, "-").concat(n, " ").concat(e.getHours(), ":").concat(e.getSeconds(), ":").concat(e.getMinutes(), "~").concat(e.getMilliseconds());
            }
        }, {
            key: "zeroFix",
            value: function(e, t) {
                return ("000000000" + e).slice(-t);
            }
        }, {
            key: "reportAll",
            value: function() {
                if (!1 !== this.options.enablePointer) for (var e in this.pointsList) Object.prototype.hasOwnProperty.call(this.pointsList, e) && this.eport(e);
            }
        } ]), e;
    }(), Vo = function e(t, n) {
        o(this, e), this.userID = t;
        var r = {};
        if (r.userID = t, !Ie(n)) for (var i = 0, s = n.length; i < s; i++) switch (n[i].tag) {
          case Oe.NICK:
            r.nick = n[i].value;
            break;

          case Oe.GENDER:
            r.gender = n[i].value;
            break;

          case Oe.BIRTHDAY:
            r.birthday = n[i].value;
            break;

          case Oe.LOCATION:
            r.location = n[i].value;
            break;

          case Oe.SELFSIGNATURE:
            r.selfSignature = n[i].value;
            break;

          case Oe.ALLOWTYPE:
            r.allowType = n[i].value;
            break;

          case Oe.LANGUAGE:
            r.language = n[i].value;
            break;

          case Oe.AVATAR:
            r.avatar = n[i].value;
            break;

          case Oe.MESSAGESETTINGS:
            r.messageSettings = n[i].value;
            break;

          case Oe.ADMINFORBIDTYPE:
            r.adminForbidType = n[i].value;
            break;

          case Oe.LEVEL:
            r.level = n[i].value;
            break;

          case Oe.ROLE:
            r.role = n[i].value;
            break;

          default:
            K.debug("snsProfileItem unkown tag->", n[i].tag);
        }
        this.profile = new Ho(r);
    }, jo = function() {
        function e(t) {
            o(this, e), this.userController = t, this.TAG = "friend", this.Actions = {
                G: "get",
                D: "delete"
            }, this.friends = new Map(), this.pointer = new Ko();
        }
        return s(e, [ {
            key: "isMyFriend",
            value: function(e) {
                var t = this.friends.has(e);
                return t || K.debug("FriendHandler.isMyFriend " + e + " is not my friend"), t;
            }
        }, {
            key: "_transformFriendList",
            value: function(e) {
                if (!Ie(e) && !Ie(e.infoItem)) {
                    K.info("FriendHandler._transformFriendList friendNum=" + e.friendNum);
                    for (var t, n, r = e.infoItem, o = 0, i = r.length; o < i; o++) n = r[o].infoAccount, 
                    t = new Vo(n, r[o].snsProfileItem), this.friends.set(n, t);
                }
            }
        }, {
            key: "_friends2map",
            value: function(e) {
                var t = new Map();
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.set(n, e[n]);
                return t;
            }
        }, {
            key: "getFriendList",
            value: function() {
                var e = this, t = {};
                t.fromAccount = this.userController.getMyAccount(), K.info("FriendHandler.getFriendList myAccount=" + t.fromAccount);
                var n = this.userController.generateConfig(this.TAG, this.Actions.G, t);
                return this.userController.request(n).then(function(t) {
                    K.info("FriendHandler.getFriendList ok"), e._transformFriendList(t.data);
                    var n = v(e.friends.values());
                    return mn(n);
                }).catch(function(e) {
                    return K.error("FriendHandler.getFriendList error:", JSON.stringify(e)), yn(e);
                });
            }
        }, {
            key: "deleteFriend",
            value: function(e) {
                if (!Array.isArray(e.toAccount)) return K.error("FriendHandler.deleteFriend options.toAccount 必需是数组"), 
                yn({
                    code: 2700,
                    message: "传入 deleteFriend 接口的参数无效"
                });
                e.toAccount.length > 1e3 && (K.warn("FriendHandler.deleteFriend 删除好友人数不能超过1000人"), 
                e.toAccount.length = 1e3);
                var t = this.userController.generateConfig(this.TAG, this.Actions.D, e);
                return this.userController.request(t).then(function(e) {
                    return K.info("FriendHandler.deleteFriend ok"), mn();
                }).catch(function(e) {
                    return K.error("FriendHandler.deleteFriend error:", e), yn(e);
                });
            }
        } ]), e;
    }(), $o = function e(t) {
        o(this, e), Ie || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0);
    }, Yo = function() {
        function t(e) {
            o(this, t), this.userController = e, this.TAG = "blacklist", this.Actions = {
                G: "get",
                C: "create",
                D: "delete"
            }, this.blacklistMap = new Map(), this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0;
        }
        return s(t, [ {
            key: "getBlacklist",
            value: function() {
                var e = this, t = {};
                t.fromAccount = this.userController.getMyAccount(), t.maxLimited = this.maxLimited, 
                t.startIndex = 0, t.lastSequence = this.curruentSequence;
                var n = new Dn();
                n.setMethod("getBlacklist").setStart();
                var r = this.userController.generateConfig(this.TAG, this.Actions.G, t);
                return this.userController.request(r).then(function(t) {
                    var r = Ie(t.data.blackListItem) ? 0 : t.data.blackListItem.length;
                    return n.setCode(0).setNetworkType(e.userController.getNetworkType()).setText(r).setEnd(), 
                    K.info("BlacklistHandler.getBlacklist ok"), e.curruentSequence = t.data.curruentSequence, 
                    e._handleResponse(t.data.blackListItem, !0), e._onBlacklistUpdated();
                }).catch(function(t) {
                    return e.userController.probeNetwork().then(function(e) {
                        var r = y(e, 2), o = r[0], i = r[1];
                        n.setError(t, o, i).setEnd();
                    }), K.error("BlacklistHandler.getBlacklist error:", t), yn(t);
                });
            }
        }, {
            key: "addBlacklist",
            value: function(e) {
                var t = this;
                if (!W(e.userIDList)) return K.error("BlacklistHandler.addBlacklist options.userIDList 必需是数组"), 
                yn({
                    code: 2740,
                    message: "传入 addToBlacklist 接口的参数无效"
                });
                var n = this.userController.tim.loginInfo.identifier;
                if (1 === e.userIDList.length && e.userIDList[0] === n) return K.error("BlacklistHandler.addBlacklist 不能把自己拉黑"), 
                yn({
                    code: 2742,
                    message: "不能拉黑自己"
                });
                e.userIDList.includes(n) && (e.userIDList = e.userIDList.filter(function(e) {
                    return e !== n;
                }), K.warn("BlacklistHandler.addBlacklist 不能把自己拉黑，已过滤")), e.fromAccount = this.userController.getMyAccount(), 
                e.toAccount = e.userIDList;
                var r = this.userController.generateConfig(this.TAG, this.Actions.C, e);
                return this.userController.request(r).then(function(e) {
                    return K.info("BlacklistHandler.addBlacklist ok"), t._handleResponse(e.data.resultItem, !0), 
                    t._onBlacklistUpdated();
                }).catch(function(e) {
                    return K.error("BlacklistHandler.addBlacklist error:", e), yn(e);
                });
            }
        }, {
            key: "_handleResponse",
            value: function(e, t) {
                if (!Ie(e)) for (var n, r, o, i = 0, s = e.length; i < s; i++) r = e[i].to, o = e[i].resultCode, 
                (X(o) || 0 === o) && (t ? ((n = this.blacklistMap.has(r) ? this.blacklistMap.get(r) : new $o()).userID = r, 
                !Ie(e[i].addBlackTimeStamp) && (n.timeStamp = e[i].addBlackTimeStamp), this.blacklistMap.set(r, n)) : this.blacklistMap.has(r) && (n = this.blacklistMap.get(r), 
                this.blacklistMap.delete(r)));
                K.log("BlacklistHandler._handleResponse total=" + this.blacklistMap.size + " bAdd=" + t);
            }
        }, {
            key: "deleteBlacklist",
            value: function(e) {
                var t = this;
                if (!W(e.userIDList)) return K.error("BlacklistHandler.deleteBlacklist options.userIDList 必需是数组"), 
                yn({
                    code: 2741,
                    message: "传入 removeFromBlacklist 接口的参数无效"
                });
                e.fromAccount = this.userController.getMyAccount(), e.toAccount = e.userIDList;
                var n = this.userController.generateConfig(this.TAG, this.Actions.D, e);
                return this.userController.request(n).then(function(e) {
                    return K.info("BlacklistHandler.deleteBlacklist ok"), t._handleResponse(e.data.resultItem, !1), 
                    t._onBlacklistUpdated();
                }).catch(function(e) {
                    return K.error("BlacklistHandler.deleteBlacklist error:", e), yn(e);
                });
            }
        }, {
            key: "_onBlacklistUpdated",
            value: function() {
                var t = v(this.blacklistMap.keys());
                return this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, t), mn(t);
            }
        }, {
            key: "handleBlackListDelAccount",
            value: function(t) {
                for (var n, r = [], o = 0, i = t.length; o < i; o++) n = t[o], this.blacklistMap.has(n) && (this.blacklistMap.delete(n), 
                r.push(n));
                r.length > 0 && (K.log("BlacklistHandler.handleBlackListDelAccount delCount=" + r.length + " : " + r.join(",")), 
                this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, v(this.blacklistMap.keys())));
            }
        }, {
            key: "handleBlackListAddAccount",
            value: function(t) {
                for (var n, r = [], o = 0, i = t.length; o < i; o++) n = t[o], this.blacklistMap.has(n) || (this.blacklistMap.set(n, new $o({
                    userID: n
                })), r.push(n));
                r.length > 0 && (K.log("BlacklistHandler.handleBlackListAddAccount addCount=" + r.length + " : " + r.join(",")), 
                this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, v(this.blacklistMap.keys())));
            }
        }, {
            key: "reset",
            value: function() {
                this.blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0;
            }
        } ]), t;
    }(), zo = function() {
        function e(t) {
            o(this, e), this.userController = t, this.TAG = "applyC2C", this.Actions = {
                C: "create",
                G: "get",
                D: "delete",
                U: "update"
            };
        }
        return s(e, [ {
            key: "applyAddFriend",
            value: function(e) {
                var t = this, n = this.userController.generateConfig(this.TAG, this.Actions.C, e), r = this.userController.request(n);
                return r.then(function(e) {
                    t.userController.isActionSuccessful("applyAddFriend", t.Actions.C, e);
                }).catch(function(e) {}), r;
            }
        }, {
            key: "getPendency",
            value: function(e) {
                var t = this, n = this.userController.generateConfig(this.TAG, this.Actions.G, e), r = this.userController.request(n);
                return r.then(function(e) {
                    t.userController.isActionSuccessful("getPendency", t.Actions.G, e);
                }).catch(function(e) {}), r;
            }
        }, {
            key: "deletePendency",
            value: function(e) {
                var t = this, n = this.userController.generateConfig(this.TAG, this.Actions.D, e), r = this.userController.request(n);
                return r.then(function(e) {
                    t.userController.isActionSuccessful("deletePendency", t.Actions.D, e);
                }).catch(function(e) {}), r;
            }
        }, {
            key: "replyPendency",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.userController.generateConfig(this.TAG, this.Actions.U, t), r = this.userController.request(n);
                return r.then(function(t) {
                    e.userController.isActionSuccessful("replyPendency", e.Actions.U, t);
                }).catch(function(e) {}), r;
            }
        } ]), e;
    }(), Wo = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this, e))).profileHandler = new Bo(d(n)), 
            n.friendHandler = new jo(d(n)), n.blacklistHandler = new Yo(d(n)), n.applyC2CHandler = new zo(d(n)), 
            n._initializeListener(), n;
        }
        return l(t, pn), s(t, [ {
            key: "_initializeListener",
            value: function(e) {
                var t = this.tim.innerEmitter;
                t.on(_t, this.onContextUpdated, this), t.on(Bt, this.onProfileModified, this), t.on(Ht, this.onNewFriendMessages, this), 
                t.on(en, this.onConversationsProfileUpdated, this);
            }
        }, {
            key: "onContextUpdated",
            value: function(e) {
                var t = this.tim.context;
                0 != !!t.a2Key && 0 != !!t.tinyID && (this.profileHandler.getMyProfile(), this.friendHandler.getFriendList(), 
                this.blacklistHandler.getBlacklist());
            }
        }, {
            key: "onGotMyProfile",
            value: function() {
                this.triggerReady();
            }
        }, {
            key: "onProfileModified",
            value: function(e) {
                this.profileHandler.onProfileModified(e);
            }
        }, {
            key: "onNewFriendMessages",
            value: function(e) {
                K.debug("onNewFriendMessages", JSON.stringify(e.data)), Ie(e.data.blackListDelAccount) || this.blacklistHandler.handleBlackListDelAccount(e.data.blackListDelAccount), 
                Ie(e.data.blackListAddAccount) || this.blacklistHandler.handleBlackListAddAccount(e.data.blackListAddAccount);
            }
        }, {
            key: "onConversationsProfileUpdated",
            value: function(e) {
                this.profileHandler.onConversationsProfileUpdated(e.data);
            }
        }, {
            key: "getMyAccount",
            value: function() {
                return this.tim.context.identifier;
            }
        }, {
            key: "isMyFriend",
            value: function(e) {
                return this.friendHandler.isMyFriend(e);
            }
        }, {
            key: "generateConfig",
            value: function(e, t, n) {
                return {
                    name: e,
                    action: t,
                    param: n
                };
            }
        }, {
            key: "getMyProfile",
            value: function() {
                return this.profileHandler.getMyProfile();
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                return this.profileHandler.getUserProfile(e);
            }
        }, {
            key: "updateMyProfile",
            value: function(e) {
                return this.profileHandler.updateMyProfile(e);
            }
        }, {
            key: "getFriendList",
            value: function() {
                return this.friendHandler.getFriendList();
            }
        }, {
            key: "deleteFriend",
            value: function(e) {
                return this.friendHandler.deleteFriend(e);
            }
        }, {
            key: "getBlacklist",
            value: function() {
                return this.blacklistHandler.getBlacklist();
            }
        }, {
            key: "addBlacklist",
            value: function(e) {
                return this.blacklistHandler.addBlacklist(e);
            }
        }, {
            key: "deleteBlacklist",
            value: function(e) {
                return this.blacklistHandler.deleteBlacklist(e);
            }
        }, {
            key: "applyAddFriend",
            value: function(e) {
                return this.applyC2CHandler.applyAddFriend(e);
            }
        }, {
            key: "getPendency",
            value: function(e) {
                return this.applyC2CHandler.getPendency(e);
            }
        }, {
            key: "deletePendency",
            value: function(e) {
                return this.applyC2CHandler.deletePendency(e);
            }
        }, {
            key: "replyPendency",
            value: function(e) {
                return this.applyC2CHandler.replyPendency(e);
            }
        }, {
            key: "reset",
            value: function() {
                K.info("UserController.reset"), this.resetReady(), this.profileHandler.reset(), 
                this.blacklistHandler.reset(), this.checkTimes = 0;
            }
        } ]), t;
    }(), Xo = [ "groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField" ], Jo = function() {
        function e(t) {
            o(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", 
            this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", 
            this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = {
                messageRemindType: "",
                joinTime: "",
                nameCard: "",
                role: ""
            }, this.lastMessage = {
                lastTime: "",
                lastSequence: "",
                fromAccount: "",
                messageForShow: ""
            }, this.nextMessageSeq = "", this.memberNum = "", this.maxMemberNum = "", this.joinOption = "", 
            this.groupCustomField = [], this._initGroup(t);
        }
        return s(e, [ {
            key: "_initGroup",
            value: function(e) {
                for (var t in e) Xo.indexOf(t) < 0 || ("selfInfo" !== t ? this[t] = e[t] : this.updateSelfInfo(e[t]));
            }
        }, {
            key: "updateGroup",
            value: function(e) {
                e.lastMsgTime && (this.lastMessage.lastTime = e.lastMsgTime), e.groupCustomField && de(this.groupCustomField, e.groupCustomField), 
                oe(this, e, [ "members", "errorCode", "lastMsgTime", "groupCustomField" ]);
            }
        }, {
            key: "updateSelfInfo",
            value: function(e) {
                var t = e.nameCard, n = e.joinTime, r = e.role, o = e.messageRemindType;
                oe(this.selfInfo, {
                    nameCard: t,
                    joinTime: n,
                    role: r,
                    messageRemindType: o
                }, [], [ "", null, void 0, 0, NaN ]);
            }
        }, {
            key: "setSelfNameCard",
            value: function(e) {
                this.selfInfo.nameCard = e;
            }
        } ]), e;
    }(), Qo = function(e, n) {
        if (X(n)) return "";
        switch (e) {
          case t.MSG_TEXT:
            return n.text;

          case t.MSG_IMAGE:
            return "[图片]";

          case t.MSG_GEO:
            return "[位置]";

          case t.MSG_AUDIO:
            return "[语音]";

          case t.MSG_VIDEO:
            return "[视频]";

          case t.MSG_FILE:
            return "[文件]";

          case t.MSG_CUSTOM:
            return "[自定义消息]";

          case t.MSG_GRP_TIP:
            return "[群提示消息]";

          case t.MSG_GRP_SYS_NOTICE:
            return "[群系统通知]";

          case t.MSG_FACE:
            return "[动画表情]";

          default:
            return "";
        }
    }, Zo = function() {
        function e(t) {
            var n;
            o(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0, 
            this.type = t.type || "", this.lastMessage = (n = t.lastMessage, X(n) ? {
                lastTime: 0,
                lastSequence: 0,
                fromAccount: 0,
                messageForShow: "",
                payload: null,
                type: "",
                isRevoked: !1
            } : n instanceof at ? {
                lastTime: n.time || 0,
                lastSequence: n.sequence || 0,
                fromAccount: n.from || "",
                messageForShow: Qo(n.type, n.payload),
                payload: n.payload || null,
                type: n.type || null,
                isRevoked: !1
            } : c({}, n, {
                isRevoked: !1,
                messageForShow: Qo(n.type, n.payload)
            })), this._isInfoCompleted = !1, this._initProfile(t);
        }
        return s(e, [ {
            key: "_initProfile",
            value: function(e) {
                var n = this;
                Object.keys(e).forEach(function(t) {
                    switch (t) {
                      case "userProfile":
                        n.userProfile = e.userProfile;
                        break;

                      case "groupProfile":
                        n.groupProfile = e.groupProfile;
                    }
                }), X(this.userProfile) && this.type === t.CONV_C2C ? this.userProfile = new Ho({
                    userID: e.conversationID.replace("C2C", "")
                }) : X(this.groupProfile) && this.type === t.CONV_GROUP && (this.groupProfile = new Jo({
                    groupID: e.conversationID.replace("GROUP", "")
                }));
            }
        }, {
            key: "updateUnreadCount",
            value: function(e, n) {
                X(e) || (this.subType === t.GRP_CHATROOM || ye(this.subType) ? this.unreadCount = 0 : n && this.type === t.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e);
            }
        }, {
            key: "reduceUnreadCount",
            value: function() {
                this.unreadCount >= 1 && (this.unreadCount -= 1);
            }
        }, {
            key: "isLastMessageRevoked",
            value: function(e) {
                var n = e.sequence, r = e.time;
                return this.type === t.CONV_C2C && n === this.lastMessage.lastSequence && r === this.lastMessage.lastTime || this.type === t.CONV_GROUP && n === this.lastMessage.lastSequence;
            }
        }, {
            key: "setLastMessageRevoked",
            value: function(e) {
                this.lastMessage.isRevoked = e;
            }
        }, {
            key: "toAccount",
            get: function() {
                return this.conversationID.replace("C2C", "").replace("GROUP", "");
            }
        }, {
            key: "subType",
            get: function() {
                return this.groupProfile ? this.groupProfile.type : "";
            }
        } ]), e;
    }(), ei = function(n) {
        function r(e) {
            var t;
            return o(this, r), (t = m(this, p(r).call(this, e))).pagingStatus = we.NOT_START, 
            t.pagingTimeStamp = 0, t.conversationMap = new Map(), t.tempGroupList = [], t._initListeners(), 
            t;
        }
        return l(r, pn), s(r, [ {
            key: "hasLocalConversationMap",
            value: function() {
                return this.conversationMap.size > 0;
            }
        }, {
            key: "createLocalConversation",
            value: function(e) {
                return this.conversationMap.has(e) ? this.conversationMap.get(e) : new Zo({
                    conversationID: e,
                    type: e.slice(0, 3) === t.CONV_C2C ? t.CONV_C2C : t.CONV_GROUP
                });
            }
        }, {
            key: "hasLocalConversation",
            value: function(e) {
                return this.conversationMap.has(e);
            }
        }, {
            key: "getConversationList",
            value: function() {
                var e = this;
                K.log("ConversationController.getConversationList."), this.pagingStatus === we.REJECTED && (K.log("ConversationController.getConversationList. continue to sync conversationList"), 
                this._syncConversationList());
                var t = new Dn();
                return t.setMethod("getConversationList").setStart(), this.request({
                    name: "conversation",
                    action: "query"
                }).then(function(n) {
                    var r = n.data.conversations, o = void 0 === r ? [] : r, i = e._getConversationOptions(o);
                    return e._updateLocalConversationList(i, !0), e._setStorageConversationList(), t.setCode(0).setText(o.length).setEnd(), 
                    K.log("ConversationController.getConversationList ok."), mn({
                        conversationList: e.getLocalConversationList()
                    });
                }).catch(function(n) {
                    return e.probeNetwork().then(function(e) {
                        var r = y(e, 2), o = r[0], i = r[1];
                        t.setError(n, o, i).setEnd();
                    }), K.error("ConversationController.getConversationList error:", n), yn(n);
                });
            }
        }, {
            key: "_syncConversationList",
            value: function() {
                var e = this, t = new Dn();
                return t.setMethod("syncConversationList").setStart(), this.pagingStatus === we.NOT_START && this.conversationMap.clear(), 
                this._autoPagingSyncConversationList().then(function(n) {
                    return e.pagingStatus = we.RESOLVED, e._setStorageConversationList(), t.setCode(0).setText("".concat(e.conversationMap.size)).setEnd(), 
                    n;
                }).catch(function(n) {
                    return e.pagingStatus = we.REJECTED, t.setText(e.pagingTimeStamp), e.probeNetwork().then(function(e) {
                        var r = y(e, 2), o = r[0], i = r[1];
                        t.setError(n, o, i).setEnd();
                    }), yn(n);
                });
            }
        }, {
            key: "_autoPagingSyncConversationList",
            value: function() {
                var e = this;
                return this.pagingStatus = we.PENDING, this.request({
                    name: "conversation",
                    action: "pagingQuery",
                    param: {
                        fromAccount: this.tim.context.identifier,
                        timeStamp: this.pagingTimeStamp,
                        orderType: 1
                    }
                }).then(function(t) {
                    var n = t.data, r = n.completeFlag, o = n.conversations, i = void 0 === o ? [] : o, s = n.timeStamp;
                    if (K.log("ConversationController._autoPagingSyncConversationList completeFlag=".concat(r, " nums=").concat(i.length)), 
                    i.length > 0) {
                        var a = e._getConversationOptions(i);
                        e._updateLocalConversationList(a, !0);
                    }
                    return e._isReady ? e._emitConversationUpdate() : e.triggerReady(), e.pagingTimeStamp = s, 
                    1 !== r ? e._autoPagingSyncConversationList() : mn();
                });
            }
        }, {
            key: "getConversationProfile",
            value: function(e) {
                var n = this.conversationMap.has(e) ? this.conversationMap.get(e) : this.createLocalConversation(e);
                return n._isInfoCompleted || n.type === t.CONV_SYSTEM ? mn({
                    conversation: n
                }) : (K.log("ConversationController.getConversationProfile. conversationID:", e), 
                this._updateUserOrGroupProfileCompletely(n).then(function(t) {
                    return K.log("ConversationController.getConversationProfile ok. conversationID:", e), 
                    t;
                }).catch(function(e) {
                    return K.error("ConversationController.getConversationProfile error:", e), yn(e);
                }));
            }
        }, {
            key: "deleteConversation",
            value: function(e) {
                var n = this, r = {};
                if (!this.conversationMap.has(e)) {
                    var o = new Ke({
                        code: 2500,
                        message: "没有找到相应的会话，请检查传入参数"
                    });
                    return yn(o);
                }
                switch (this.conversationMap.get(e).type) {
                  case t.CONV_C2C:
                    r.type = 1, r.toAccount = e.slice(3);
                    break;

                  case t.CONV_GROUP:
                    r.type = 2, r.toGroupID = e.slice(5);
                    break;

                  case t.CONV_SYSTEM:
                    return this.tim.groupController.deleteGroupSystemNotice({
                        messageList: this.tim.messageController.getLocalMessageList(e)
                    }), this.deleteLocalConversation(e), mn({
                        conversationID: e
                    });

                  default:
                    var i = new Ke({
                        code: 2502,
                        message: "未记录的会话类型"
                    });
                    return yn(i);
                }
                return K.log("ConversationController.deleteConversation. conversationID:", e), this.tim.setMessageRead({
                    conversationID: e
                }).then(function() {
                    return n.request({
                        name: "conversation",
                        action: "delete",
                        param: r
                    });
                }).then(function() {
                    return K.log("ConversationController.deleteConversation ok. conversationID:", e), 
                    n.deleteLocalConversation(e), mn({
                        conversationID: e
                    });
                }).catch(function(e) {
                    return K.error("ConversationController.deleteConversation error:", e), yn(e);
                });
            }
        }, {
            key: "getLocalConversationList",
            value: function() {
                return v(this.conversationMap.values());
            }
        }, {
            key: "getLocalConversation",
            value: function(e) {
                return this.conversationMap.get(e);
            }
        }, {
            key: "_initLocalConversationList",
            value: function() {
                var e = new Dn();
                e.setMethod("getConversationListInStorage").setStart(), K.time("initConversationList"), 
                K.log("ConversationController._initLocalConversationList init");
                var t = this._getStorageConversationList();
                if (t) {
                    for (var n = t.length, r = 0; r < n; r++) this.conversationMap.set(t[r].conversationID, new Zo(t[r]));
                    this._emitConversationUpdate(!0, !1), e.setCode(0).setNetworkType(this.getNetworkType()).setText(n).setEnd();
                } else e.setCode(0).setNetworkType(this.getNetworkType()).setText(0).setEnd();
                this._syncConversationList();
            }
        }, {
            key: "_getStorageConversationList",
            value: function() {
                return this.tim.storage.getItem("conversationMap");
            }
        }, {
            key: "_setStorageConversationList",
            value: function() {
                var e = this.getLocalConversationList().slice(0, 20).map(function(e) {
                    return {
                        conversationID: e.conversationID,
                        type: e.type,
                        subType: e.subType,
                        lastMessage: e.lastMessage,
                        groupProfile: e.groupProfile,
                        userProfile: e.userProfile
                    };
                });
                this.tim.storage.setItem("conversationMap", e);
            }
        }, {
            key: "_initListeners",
            value: function() {
                var e = this;
                this.tim.innerEmitter.once(_t, this._initLocalConversationList, this), this.tim.innerEmitter.on(Dt, this._onSendOrReceiveMessage, this), 
                this.tim.innerEmitter.on(St, this._handleSyncMessages, this), this.tim.innerEmitter.on(Tt, this._handleSyncMessages, this), 
                this.tim.innerEmitter.on(Et, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(kt, this._onSendOrReceiveMessage, this), 
                this.tim.innerEmitter.on(wt, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(Yt, this._onGroupListUpdated, this), 
                this.tim.innerEmitter.on(nn, this._updateConversationUserProfile, this), this.tim.innerEmitter.on(At, this._onMessageRevoked, this), 
                this.ready(function() {
                    e.tempGroupList.length > 0 && (e._updateConversationGroupProfile(e.tempGroupList), 
                    e.tempGroupList.length = 0);
                });
            }
        }, {
            key: "_onGroupListUpdated",
            value: function(e) {
                this._updateConversationGroupProfile(e.data);
            }
        }, {
            key: "_updateConversationGroupProfile",
            value: function(e) {
                var t = this;
                W(e) && 0 === e.length || (this.hasLocalConversationMap() ? (e.forEach(function(e) {
                    var n = "GROUP".concat(e.groupID);
                    if (t.conversationMap.has(n)) {
                        var r = t.conversationMap.get(n);
                        r.groupProfile = e, r.lastMessage.lastSequence = e.nextMessageSeq - 1, r.subType || (r.subType = e.type);
                    }
                }), this._emitConversationUpdate(!0, !1)) : this.tempGroupList = e);
            }
        }, {
            key: "_updateConversationUserProfile",
            value: function(e) {
                var t = this;
                e.data.forEach(function(e) {
                    var n = "C2C".concat(e.userID);
                    t.conversationMap.has(n) && (t.conversationMap.get(n).userProfile = e);
                }), this._emitConversationUpdate(!0, !1);
            }
        }, {
            key: "_onMessageRevoked",
            value: function(e) {
                var t = this, n = e.data;
                if (0 !== n.length) {
                    var r = null, o = !1;
                    n.forEach(function(e) {
                        (r = t.conversationMap.get(e.conversationID)) && r.isLastMessageRevoked(e) && (o = !0, 
                        r.setLastMessageRevoked(!0));
                    }), o && this._emitConversationUpdate(!0, !1);
                }
            }
        }, {
            key: "_handleSyncMessages",
            value: function(e) {
                this._onSendOrReceiveMessage(e, !0);
            }
        }, {
            key: "_onSendOrReceiveMessage",
            value: function(e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = e.data.eventDataList;
                this._isReady ? 0 !== r.length && (this._updateLocalConversationList(r, !1, n), 
                this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready(function() {
                    t._onSendOrReceiveMessage(e, n);
                });
            }
        }, {
            key: "_updateLocalConversationList",
            value: function(e, t, n) {
                var r;
                r = this._updateTempConversations(e, t, n), this.conversationMap = new Map(this._sortConversations([].concat(v(r.conversations), v(this.conversationMap)))), 
                t || this._updateUserOrGroupProfile(r.newerConversations);
            }
        }, {
            key: "_updateTempConversations",
            value: function(e, n, r) {
                for (var o = [], i = [], s = 0, a = e.length; s < a; s++) {
                    var u = new Zo(e[s]), c = this.conversationMap.get(u.conversationID);
                    if (this.conversationMap.has(u.conversationID)) {
                        var l = [ "unreadCount", "allowType", "adminForbidType", "payload" ];
                        r && l.push("lastMessage"), oe(c, u, l, [ null, void 0, "", 0, NaN ]), c.updateUnreadCount(u.unreadCount, n), 
                        r || (c.lastMessage.payload = e[s].lastMessage.payload), this.conversationMap.delete(c.conversationID), 
                        o.push([ c.conversationID, c ]);
                    } else {
                        if (u.type === t.CONV_GROUP) {
                            var p = u.groupProfile.groupID, h = this.tim.groupController.getLocalGroupProfile(p);
                            h && (u.groupProfile = h, u.updateUnreadCount(0));
                        }
                        i.push(u), o.push([ u.conversationID, u ]);
                    }
                }
                return {
                    conversations: o,
                    newerConversations: i
                };
            }
        }, {
            key: "_sortConversations",
            value: function(e) {
                return e.sort(function(e, t) {
                    return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime;
                });
            }
        }, {
            key: "_updateUserOrGroupProfile",
            value: function(e) {
                var n = this;
                if (0 !== e.length) {
                    var r = [], o = [];
                    e.forEach(function(e) {
                        if (e.type === t.CONV_C2C) r.push(e.toAccount); else if (e.type === t.CONV_GROUP) {
                            var i = e.toAccount;
                            n.tim.groupController.hasLocalGroup(i) ? e.groupProfile = n.tim.groupController.getLocalGroupProfile(i) : o.push(i);
                        }
                    }), r.length > 0 && this.tim.getUserProfile({
                        userIDList: r
                    }).then(function(e) {
                        var t = e.data;
                        W(t) ? t.forEach(function(e) {
                            n.conversationMap.get("C2C".concat(e.userID)).userProfile = e;
                        }) : n.conversationMap.get("C2C".concat(t.userID)).userProfile = t;
                    }), o.length > 0 && this.tim.groupController.getGroupProfileAdvance({
                        groupIDList: o,
                        responseFilter: {
                            groupBaseInfoFilter: [ "Type", "Name", "FaceUrl" ]
                        }
                    }).then(function(e) {
                        e.data.successGroupList.forEach(function(e) {
                            var t = "GROUP".concat(e.groupID);
                            if (n.conversationMap.has(t)) {
                                var r = n.conversationMap.get(t);
                                oe(r.groupProfile, e, [], [ null, void 0, "", 0, NaN ]), !r.subType && e.type && (r.subType = e.type);
                            }
                        });
                    });
                }
            }
        }, {
            key: "_updateUserOrGroupProfileCompletely",
            value: function(e) {
                var n = this;
                return e.type === t.CONV_C2C ? this.tim.getUserProfile({
                    userIDList: [ e.toAccount ]
                }).then(function(t) {
                    var r = t.data;
                    return 0 === r.length ? yn(new Ke({
                        code: 2501,
                        message: "没有找到相应的用户或群组，请检查传入参数"
                    })) : (e.userProfile = r[0], e._isInfoCompleted = !0, n._unshiftConversation(e), 
                    mn({
                        conversation: e
                    }));
                }) : this.tim.getGroupProfile({
                    groupID: e.toAccount
                }).then(function(t) {
                    return e.groupProfile = t.data.group, e._isInfoCompleted = !0, n._unshiftConversation(e), 
                    mn({
                        conversation: e
                    });
                });
            }
        }, {
            key: "_unshiftConversation",
            value: function(e) {
                e instanceof Zo && !this.conversationMap.has(e.conversationID) && (this.conversationMap = new Map([ [ e.conversationID, e ] ].concat(v(this.conversationMap))), 
                this._setStorageConversationList(), this._emitConversationUpdate(!0, !1));
            }
        }, {
            key: "deleteLocalConversation",
            value: function(e) {
                return this.conversationMap.delete(e), this._setStorageConversationList(), this.emitInnerEvent(tn, e), 
                this._emitConversationUpdate(!0, !1), this.conversationMap.has(e);
            }
        }, {
            key: "_getConversationOptions",
            value: function(e) {
                var t = [], n = e.filter(function(e) {
                    var t = e.lastMsg;
                    return z(t);
                }).map(function(e) {
                    if (1 === e.type) {
                        var n = {
                            userID: e.userID,
                            nick: e.c2CNick,
                            avatar: e.c2CImage
                        };
                        return t.push(n), {
                            conversationID: "C2C".concat(e.userID),
                            type: "C2C",
                            lastMessage: {
                                lastTime: e.time,
                                lastSequence: e.sequence,
                                fromAccount: e.lastC2CMsgFromAccount,
                                messageForShow: e.messageShow,
                                type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                                payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null
                            },
                            userProfile: new Ho(n)
                        };
                    }
                    return {
                        conversationID: "GROUP".concat(e.groupID),
                        type: "GROUP",
                        lastMessage: {
                            lastTime: e.time,
                            lastSequence: e.messageReadSeq + e.unreadCount,
                            fromAccount: e.msgGroupFromAccount,
                            messageForShow: e.messageShow,
                            type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                            payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null
                        },
                        groupProfile: new Jo({
                            groupID: e.groupID,
                            name: e.groupNick,
                            avatar: e.groupImage
                        }),
                        unreadCount: e.unreadCount
                    };
                });
                return t.length > 0 && this.emitInnerEvent(en, t), n;
            }
        }, {
            key: "_emitConversationUpdate",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = v(this.conversationMap.values());
                n && this.emitInnerEvent(Zt, r), t && this.emitOuterEvent(e.CONVERSATION_LIST_UPDATED, r);
            }
        }, {
            key: "_conversationMapTreeShaking",
            value: function(e) {
                var n = this, r = new Map(v(this.conversationMap));
                e.forEach(function(e) {
                    return r.delete(e.conversationID);
                }), r.has(t.CONV_SYSTEM) && r.delete(t.CONV_SYSTEM);
                var o = this.tim.groupController.getJoinedAVChatRoom();
                o && r.delete("".concat(t.CONV_GROUP).concat(o.groupID)), v(r.keys()).forEach(function(e) {
                    return n.conversationMap.delete(e);
                });
            }
        }, {
            key: "reset",
            value: function() {
                this.pagingStatus = we.NOT_START, this.pagingTimeStamp = 0, this.conversationMap.clear(), 
                this.resetReady(), this.tim.innerEmitter.once(_t, this._initLocalConversationList, this);
            }
        } ]), r;
    }(), ti = function() {
        function e(t) {
            if (o(this, e), void 0 === t) throw new Ke({
                code: Ve,
                message: Ye
            });
            if (void 0 === t.tim) throw new Ke({
                code: Ve,
                message: "".concat(Ye, ".tim")
            });
            this.list = new Map(), this.tim = t.tim, this._initializeOptions(t);
        }
        return s(e, [ {
            key: "getLocalOldestMessageByConversationID",
            value: function(e) {
                if (!e) return null;
                if (!this.list.has(e)) return null;
                var t = this.list.get(e).values();
                return t ? t.next().value : null;
            }
        }, {
            key: "_initializeOptions",
            value: function(e) {
                this.options = {};
                var t = {
                    memory: {
                        maxDatasPerKey: 100,
                        maxBytesPerData: 256,
                        maxKeys: 0
                    },
                    cache: {
                        maxDatasPerKey: 10,
                        maxBytesPerData: 256,
                        maxKeys: 0
                    }
                };
                for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (void 0 === e[n]) {
                        this.options[n] = t[n];
                        continue;
                    }
                    var r = t[n];
                    for (var o in r) if (Object.prototype.hasOwnProperty.call(r, o)) {
                        if (void 0 === e[n][o]) {
                            this.options[n][o] = r[o];
                            continue;
                        }
                        this.options[n][o] = e[n][o];
                    }
                }
            }
        }, {
            key: "pushIn",
            value: function(e) {
                var t = e.conversationID, n = e.ID, r = !0;
                return this.list.has(t) || this.list.set(t, new Map()), this.list.has(t) && this.list.get(t).has(n) ? r = !1 : this.list.get(t).set(n, e), 
                r;
            }
        }, {
            key: "unshift",
            value: function(e) {
                W(e) ? e.length > 0 && this._unshiftMultipleMessages(e) : this._unshiftSingleMessage(e);
            }
        }, {
            key: "_unshiftSingleMessage",
            value: function(e) {
                var t = e.conversationID, n = e.ID;
                if (!this.list.has(t)) return this.list.set(t, new Map()), void this.list.get(t).set(n, e);
                var r = Array.from(this.list.get(t));
                r.unshift([ n, e ]), this.list.set(t, new Map(r));
            }
        }, {
            key: "_unshiftMultipleMessages",
            value: function(e) {
                for (var t = e.length, n = [], r = e[0].conversationID, o = this.list.has(r) ? Array.from(this.list.get(r)) : [], i = 0; i < t; i++) n.push([ e[i].ID, e[i] ]);
                this.list.set(r, new Map(n.concat(o)));
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = e.conversationID, n = e.ID;
                this.list.has(t) && this.list.get(t).delete(n);
            }
        }, {
            key: "revoke",
            value: function(e, t, n) {
                if (K.debug("revoke message", e, t, n), this.list.has(e)) {
                    var r = this.list.get(e), o = !0, i = !1, s = void 0;
                    try {
                        for (var a, u = r[Symbol.iterator](); !(o = (a = u.next()).done); o = !0) {
                            var c = y(a.value, 2)[1];
                            if (c.sequence === t && !c.isRevoked && (X(n) || c.random === n)) return c.isRevoked = !0, 
                            c;
                        }
                    } catch (e) {
                        i = !0, s = e;
                    } finally {
                        try {
                            o || null == u.return || u.return();
                        } finally {
                            if (i) throw s;
                        }
                    }
                }
                return null;
            }
        }, {
            key: "removeByConversationID",
            value: function(e) {
                this.list.has(e) && this.list.delete(e);
            }
        }, {
            key: "hasLocalMessageList",
            value: function(e) {
                return this.list.has(e);
            }
        }, {
            key: "getLocalMessageList",
            value: function(e) {
                return this.hasLocalMessageList(e) ? v(this.list.get(e).values()) : [];
            }
        }, {
            key: "hasLocalMessage",
            value: function(e, t) {
                return !!this.hasLocalMessageList(e) && this.list.get(e).has(t);
            }
        }, {
            key: "getLocalMessage",
            value: function(e, t) {
                return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null;
            }
        }, {
            key: "reset",
            value: function() {
                this.list.clear();
            }
        } ]), e;
    }(), ni = function() {
        function e(t, n) {
            o(this, e), this.tim = t, this.messageController = n;
        }
        return s(e, [ {
            key: "setMessageRead",
            value: function(e) {
                var n = e.conversationID, r = e.messageID, o = this.tim.conversationController.getLocalConversation(n);
                if (K.log("ReadReportHandler.setMessageRead conversationID=".concat(n, " unreadCount=").concat(o ? o.unreadCount : 0)), 
                !o || 0 === o.unreadCount) return mn();
                var i = r ? this.tim.messageController.getLocalMessage(n, r) : null;
                switch (o.type) {
                  case t.CONV_C2C:
                    return this._setC2CMessageRead({
                        conversationID: n,
                        lastMessageTime: i ? i.time : o.lastMessage.lastTime
                    });

                  case t.CONV_GROUP:
                    return this._setGroupMessageRead({
                        conversationID: n,
                        lastMessageSeq: i ? i.sequence : o.lastMessage.lastSequence
                    });

                  case t.CONV_SYSTEM:
                    return o.unreadCount = 0, mn();

                  default:
                    return mn();
                }
            }
        }, {
            key: "_setC2CMessageRead",
            value: function(e) {
                var t = this, n = e.conversationID, r = e.lastMessageTime;
                K.log("ReadReportHandler._setC2CMessageRead conversationID=".concat(n, " lastMessageTime=").concat(r)), 
                this._updateIsReadAfterReadReport({
                    conversationID: n,
                    lastMessageTime: r
                }), this._updateUnreadCount(n);
                var o = new Dn();
                return o.setMethod("setC2CMessageRead").setText("".concat(n, "-").concat(r)).setStart(), 
                this.messageController.request({
                    name: "conversation",
                    action: "setC2CMessageRead",
                    param: {
                        C2CMsgReaded: {
                            cookie: "",
                            C2CMsgReadedItem: [ {
                                toAccount: n.replace("C2C", ""),
                                lastMessageTime: r
                            } ]
                        }
                    }
                }).then(function() {
                    return o.setCode(0).setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(), 
                    K.log("ReadReportHandler._setC2CMessageRead ok."), new gn();
                }).catch(function(e) {
                    return t.tim.netMonitor.probe().then(function(t) {
                        var n = y(t, 2), r = n[0], i = n[1];
                        o.setError(e, r, i).setEnd();
                    }), K.log("ReadReportHandler._setC2CMessageRead failed. ".concat(e)), yn(e);
                });
            }
        }, {
            key: "_setGroupMessageRead",
            value: function(e) {
                var t = this, n = e.conversationID, r = e.lastMessageSeq;
                K.log("ReadReportHandler._setGroupMessageRead conversationID=".concat(n, " lastMessageSeq=").concat(r)), 
                this._updateIsReadAfterReadReport({
                    conversationID: n,
                    lastMessageSeq: r
                }), this._updateUnreadCount(n);
                var o = new Dn();
                return o.setMethod("setGroupMessageRead").setText("".concat(n, "-").concat(r)).setStart(), 
                this.messageController.request({
                    name: "conversation",
                    action: "setGroupMessageRead",
                    param: {
                        groupID: n.replace("GROUP", ""),
                        messageReadSeq: r
                    }
                }).then(function() {
                    return o.setCode(0).setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(), 
                    K.log("ReadReportHandler._setGroupMessageRead ok."), new gn();
                }).catch(function(e) {
                    return t.tim.netMonitor.probe().then(function(t) {
                        var n = y(t, 2), r = n[0], i = n[1];
                        o.setError(e, r, i).setEnd();
                    }), K.log("ReadReportHandler._setGroupMessageRead failed. ".concat(e)), yn(e);
                });
            }
        }, {
            key: "_updateUnreadCount",
            value: function(e) {
                var t = this.tim, n = t.conversationController, r = t.messageController, o = n.getLocalConversation(e), i = r.getLocalMessageList(e);
                o && (o.unreadCount = i.filter(function(e) {
                    return !e.isRead;
                }).length);
            }
        }, {
            key: "_updateIsReadAfterReadReport",
            value: function(e) {
                var t = e.conversationID, n = e.lastMessageSeq, r = e.lastMessageTime, o = this.tim.messageController.getLocalMessageList(t);
                if (0 !== o.length) for (var i = o.length - 1; i >= 0; i--) {
                    var s = o[i];
                    if (!(r && s.time > r || n && s.sequence > n)) {
                        if ("in" === s.flow && s.isRead) break;
                        s.setIsRead(!0);
                    }
                }
            }
        }, {
            key: "updateIsRead",
            value: function(e) {
                var n = this.tim, r = n.conversationController, o = n.messageController, i = r.getLocalConversation(e), s = o.getLocalMessageList(e);
                if (i && 0 !== s.length && !ve(i.type)) {
                    for (var a = [], u = 0; u < s.length; u++) "in" !== s[u].flow ? "out" !== s[u].flow || s[u].isRead || s[u].setIsRead(!0) : a.push(s[u]);
                    var c = 0;
                    if (i.type === t.CONV_C2C) {
                        var l = a.slice(-i.unreadCount).filter(function(e) {
                            return e.isRevoked;
                        }).length;
                        c = a.length - i.unreadCount - l;
                    } else c = a.length - i.unreadCount;
                    for (var p = 0; p < c && !a[p].isRead; p++) a[p].setIsRead(!0);
                }
            }
        } ]), e;
    }(), ri = function() {
        function e(t) {
            var n = t.tim, r = t.messageController;
            o(this, e), this.tim = n, this.messageController = r, this.completedMap = new Map(), 
            this._initListener();
        }
        return s(e, [ {
            key: "getMessageList",
            value: function(e) {
                var t = this, n = e.conversationID, r = e.nextReqMessageID, o = e.count;
                if (this.tim.groupController.checkJoinedAVChatRoomByID(n.replace("GROUP", ""))) return K.log("GetMessageHandler.getMessageList not available in avchatroom. conversationID=".concat(n)), 
                mn({
                    messageList: [],
                    nextReqMessageID: "",
                    isCompleted: !0
                });
                (X(o) || o > 15) && (o = 15);
                var i = this._computeLeftCount({
                    conversationID: n,
                    nextReqMessageID: r
                });
                return K.log("GetMessageHandler.getMessageList. conversationID=".concat(n, " leftCount=").concat(i, " count=").concat(o, " nextReqMessageID=").concat(r)), 
                this._needGetHistory({
                    conversationID: n,
                    leftCount: i,
                    count: o
                }) ? this.messageController.getHistoryMessages({
                    conversationID: n,
                    count: 20
                }).then(function() {
                    return i = t._computeLeftCount({
                        conversationID: n,
                        nextReqMessageID: r
                    }), new gn(t._computeResult({
                        conversationID: n,
                        nextReqMessageID: r,
                        count: o,
                        leftCount: i
                    }));
                }) : (K.log("GetMessageHandler.getMessageList. get messagelist from memory"), mn(this._computeResult({
                    conversationID: n,
                    nextReqMessageID: r,
                    count: o,
                    leftCount: i
                })));
            }
        }, {
            key: "setCompleted",
            value: function(e) {
                K.log("GetMessageHandler.setCompleted. conversationID=".concat(e)), this.completedMap.set(e, !0);
            }
        }, {
            key: "deleteCompletedItem",
            value: function(e) {
                K.log("GetMessageHandler.deleteCompletedItem. conversationID=".concat(e)), this.completedMap.delete(e);
            }
        }, {
            key: "_initListener",
            value: function() {
                var e = this;
                this.tim.innerEmitter.on(on, function() {
                    e.setCompleted(t.CONV_SYSTEM);
                }), this.tim.innerEmitter.on(rn, function(n) {
                    var r = n.data;
                    e.setCompleted("".concat(t.CONV_GROUP).concat(r));
                });
            }
        }, {
            key: "_getMessageListSize",
            value: function(e) {
                return this.messageController.getLocalMessageList(e).length;
            }
        }, {
            key: "_needGetHistory",
            value: function(e) {
                var n = e.conversationID, r = e.leftCount, o = e.count, i = this.tim.conversationController.getLocalConversation(n), s = !!i && i.type === t.CONV_SYSTEM, a = !!i && i.subType === t.GRP_AVCHATROOM;
                return !s && !a && r < o && !this.completedMap.has(n);
            }
        }, {
            key: "_computeResult",
            value: function(e) {
                var t = e.conversationID, n = e.nextReqMessageID, r = e.count, o = e.leftCount, i = this._computeMessageList({
                    conversationID: t,
                    nextReqMessageID: n,
                    count: r
                }), s = this._computeIsCompleted({
                    conversationID: t,
                    leftCount: o,
                    count: r
                }), a = this._computeNextReqMessageID({
                    messageList: i,
                    isCompleted: s,
                    conversationID: t
                });
                return K.log("GetMessageHandler._computeResult. conversationID=".concat(t, " leftCount=").concat(o, " count=").concat(r, " nextReqMessageID=").concat(a, " nums=").concat(i.length, " isCompleted=").concat(s)), 
                {
                    messageList: i,
                    nextReqMessageID: a,
                    isCompleted: s
                };
            }
        }, {
            key: "_computeNextReqMessageID",
            value: function(e) {
                var t = e.messageList, n = e.isCompleted, r = e.conversationID;
                if (!n) return 0 === t.length ? "" : t[0].ID;
                var o = this.messageController.getLocalMessageList(r);
                return 0 === o.length ? "" : o[0].ID;
            }
        }, {
            key: "_computeMessageList",
            value: function(e) {
                var t = e.conversationID, n = e.nextReqMessageID, r = e.count, o = this.messageController.getLocalMessageList(t), i = this._computeIndexEnd({
                    nextReqMessageID: n,
                    messageList: o
                }), s = this._computeIndexStart({
                    indexEnd: i,
                    count: r
                });
                return o.slice(s, i);
            }
        }, {
            key: "_computeIndexEnd",
            value: function(e) {
                var t = e.messageList, n = void 0 === t ? [] : t, r = e.nextReqMessageID;
                return r ? n.findIndex(function(e) {
                    return e.ID === r;
                }) : n.length;
            }
        }, {
            key: "_computeIndexStart",
            value: function(e) {
                var t = e.indexEnd, n = e.count;
                return t > n ? t - n : 0;
            }
        }, {
            key: "_computeLeftCount",
            value: function(e) {
                var t = e.conversationID, n = e.nextReqMessageID;
                return n ? this.messageController.getLocalMessageList(t).findIndex(function(e) {
                    return e.ID === n;
                }) : this._getMessageListSize(t);
            }
        }, {
            key: "_computeIsCompleted",
            value: function(e) {
                var t = e.conversationID;
                return !!(e.leftCount <= e.count && this.completedMap.has(t));
            }
        }, {
            key: "reset",
            value: function() {
                K.log("GetMessageHandler.reset"), this.completedMap.clear();
            }
        } ]), e;
    }(), oi = function e(t) {
        o(this, e), this.value = t, this.next = null;
    }, ii = function() {
        function e(t) {
            o(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map(), 
            K.log("SinglyLinkedList init MAX_LENGTH=".concat(this.MAX_LENGTH));
        }
        return s(e, [ {
            key: "pushIn",
            value: function(e) {
                var t = new oi(e);
                if (this.map.size < this.MAX_LENGTH) null === this.pTail ? (this.pTail = t, this.pNodeToDel = t) : (this.pTail.next = t, 
                this.pTail = t), this.map.set(e, 1); else {
                    var n = this.pNodeToDel;
                    this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n.next = null, 
                    n = null, this.pTail.next = t, this.pTail = t, this.map.set(e, 1);
                }
            }
        }, {
            key: "has",
            value: function(e) {
                return this.map.has(e);
            }
        }, {
            key: "reset",
            value: function() {
                for (var e; null !== this.pNodeToDel; ) e = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, 
                e.next = null, e = null;
                this.pTail = null, this.map.clear();
            }
        } ]), e;
    }(), si = function() {
        function e(t) {
            o(this, e), this.tim = t;
        }
        return s(e, [ {
            key: "upload",
            value: function(e) {
                switch (e.type) {
                  case t.MSG_IMAGE:
                    return this._uploadImage(e);

                  case t.MSG_FILE:
                    return this._uploadFile(e);

                  case t.MSG_AUDIO:
                    return this._uploadAudio(e);

                  case t.MSG_VIDEO:
                    return this._uploadVideo(e);

                  default:
                    return Promise.resolve();
                }
            }
        }, {
            key: "_uploadImage",
            value: function(e) {
                var t = this.tim, n = t.uploadController, r = t.messageController, o = e.getElements()[0], i = r.getMessageOptionByID(e.messageID);
                return n.uploadImage({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e), Q(i.onProgress)) try {
                            i.onProgress(e);
                        } catch (e) {
                            return yn(new Ke({
                                code: 2109,
                                message: "".concat(We)
                            }));
                        }
                    }
                }).then(function(e) {
                    var t, n = e.location, r = e.fileType, i = e.fileSize, s = ge(n);
                    return o.updateImageFormat(r), o.updateImageInfoArray({
                        size: i,
                        url: s
                    }), t = o._imageMemoryURL, k ? new Promise(function(e, n) {
                        wx.getImageInfo({
                            src: t,
                            success: function(t) {
                                e({
                                    width: t.width,
                                    height: t.height
                                });
                            },
                            fail: function() {
                                e({
                                    width: 0,
                                    height: 0
                                });
                            }
                        });
                    }) : O && 9 === L ? Promise.resolve({
                        width: 0,
                        height: 0
                    }) : new Promise(function(e, n) {
                        var r = new Image();
                        r.onload = function() {
                            e({
                                width: this.width,
                                height: this.height
                            }), r = null;
                        }, r.onerror = function() {
                            e({
                                width: 0,
                                height: 0
                            }), r = null;
                        }, r.src = t;
                    });
                }).then(function(t) {
                    var n = t.width, r = t.height;
                    return o.updateImageInfoArray({
                        width: n,
                        height: r
                    }), e;
                });
            }
        }, {
            key: "_uploadFile",
            value: function(e) {
                var t = this.tim, n = t.uploadController, r = t.messageController, o = e.getElements()[0], i = r.getMessageOptionByID(e.messageID);
                return n.uploadFile({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e), Q(i.onProgress)) try {
                            i.onProgress(e);
                        } catch (e) {
                            return yn(new Ke({
                                code: 2109,
                                message: "".concat(We)
                            }));
                        }
                    }
                }).then(function(t) {
                    var n = t.location, r = ge(n);
                    return o.updateFileUrl(r), e;
                });
            }
        }, {
            key: "_uploadAudio",
            value: function(e) {
                var t = this.tim, n = t.uploadController, r = t.messageController, o = e.getElements()[0], i = r.getMessageOptionByID(e.messageID);
                return n.uploadAudio({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e), Q(i.onProgress)) try {
                            i.onProgress(e);
                        } catch (e) {
                            return yn(new Ke({
                                code: 2109,
                                message: "".concat(We)
                            }));
                        }
                    }
                }).then(function(t) {
                    var n = t.location, r = ge(n);
                    return o.updateAudioUrl(r), e;
                });
            }
        }, {
            key: "_uploadVideo",
            value: function(e) {
                var t = this.tim, n = t.uploadController, r = t.messageController, o = e.getElements()[0], i = r.getMessageOptionByID(e.messageID);
                return n.uploadVideo({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e), Q(i.onProgress)) try {
                            i.onProgress(e);
                        } catch (e) {
                            return yn(new Ke({
                                code: 2109,
                                message: "".concat(We)
                            }));
                        }
                    }
                }).then(function(t) {
                    if (k) {
                        var n = ge(t.location);
                        return o.updateVideoUrl(n), e;
                    }
                });
            }
        } ]), e;
    }(), ai = function(n) {
        function r(e) {
            var t;
            return o(this, r), (t = m(this, p(r).call(this, e)))._initializeMembers(), t._initializeListener(), 
            t._initialzeHandlers(), t.messageOptionMap = new Map(), t;
        }
        return l(r, pn), s(r, [ {
            key: "_initializeMembers",
            value: function() {
                this.messagesList = new ti({
                    tim: this.tim
                }), this.currentMessageKey = {}, this.singlyLinkedList = new ii(100);
            }
        }, {
            key: "_initialzeHandlers",
            value: function() {
                this.readReportHandler = new ni(this.tim, this), this.getMessageHandler = new ri({
                    messageController: this,
                    tim: this.tim
                }), this.uploadFileHandler = new si(this.tim);
            }
        }, {
            key: "reset",
            value: function() {
                this.messagesList.reset(), this.currentMessageKey = {}, this.getMessageHandler.reset(), 
                this.singlyLinkedList.reset(), this.messageOptionMap.clear();
            }
        }, {
            key: "_initializeListener",
            value: function() {
                var e = this.tim.innerEmitter;
                e.on(qt, this._onReceiveC2CMessage, this), e.on(It, this._onSyncMessagesProcessing, this), 
                e.on(Mt, this._onSyncMessagesFinished, this), e.on(Ut, this._onReceiveGroupMessage, this), 
                e.on(xt, this._onReceiveGroupTips, this), e.on(Ft, this._onReceiveSystemNotice, this), 
                e.on(Kt, this._onReceiveGroupMessageRevokedNotice, this), e.on(Vt, this._onReceiveC2CMessageRevokedNotice, this), 
                e.on(tn, this._clearConversationMessages, this);
            }
        }, {
            key: "sendMessageInstance",
            value: function(e) {
                var n, r = this, o = this.tim.sumStatController, i = null;
                switch (e.conversationType) {
                  case t.CONV_C2C:
                    i = this._handleOnSendC2CMessageSuccess.bind(this);
                    break;

                  case t.CONV_GROUP:
                    i = this._handleOnSendGroupMessageSuccess.bind(this);
                    break;

                  default:
                    return yn(new Ke({
                        code: 2106,
                        message: 'Message.conversationType 只能为 "C2C" 或 "GROUP"'
                    }));
                }
                return this.singlyLinkedList.pushIn(e.random), this.uploadFileHandler.upload(e).then(function() {
                    var i = null;
                    return e.isSendable() ? (o.addTotalCount(In), n = Date.now(), e.conversationType === t.CONV_C2C ? i = r._createC2CMessagePack(e) : e.conversationType === t.CONV_GROUP && (i = r._createGroupMessagePack(e)), 
                    r.request(i)) : yn({
                        code: 2403,
                        message: "缺少必要的参数文件 URL"
                    });
                }).then(function(s) {
                    return o.addSuccessCount(In), o.addCost(In, Math.abs(Date.now() - n)), e.conversationType === t.CONV_GROUP && (e.sequence = s.data.sequence, 
                    e.time = s.data.time, e.generateMessageID(r.tim.context.identifier)), r.messagesList.pushIn(e), 
                    i(e, s.data), r.messageOptionMap.delete(e.messageID), r.emitInnerEvent(Dt, {
                        eventDataList: [ {
                            conversationID: e.conversationID,
                            unreadCount: 0,
                            type: e.conversationType,
                            subType: e.conversationSubType,
                            lastMessage: e
                        } ]
                    }), new gn({
                        message: e
                    });
                }).catch(function(t) {
                    e.status = ke.FAIL;
                    var n = new Dn();
                    return n.setMethod("sendMessage").setMessageType(e.type).setText("".concat(r._generateTjgID(e), "-").concat(e.type, "-").concat(e.from, "-").concat(e.to)).setStart(), 
                    r.probeNetwork().then(function(e) {
                        var r = y(e, 2), o = r[0], i = r[1];
                        n.setError(t, o, i).setEnd();
                    }), K.error("MessageController.sendMessageInstance error:", t), yn(new Ke({
                        code: t && t.code ? t.code : 2100,
                        message: t && t.message ? t.message : "消息发送失败",
                        data: {
                            message: e
                        }
                    }));
                });
            }
        }, {
            key: "resendMessage",
            value: function(e) {
                return e.isResend = !0, e.status = ke.UNSEND, this.sendMessageInstance(e);
            }
        }, {
            key: "_isFileLikeMessage",
            value: function(e) {
                return [ t.MSG_IMAGE, t.MSG_FILE, t.MSG_AUDIO, t.MSG_VIDEO ].indexOf(e.type) >= 0;
            }
        }, {
            key: "_resendBinaryTypeMessage",
            value: function() {}
        }, {
            key: "_createC2CMessagePack",
            value: function(e) {
                return {
                    name: "c2cMessage",
                    action: "create",
                    tjgID: this._generateTjgID(e),
                    param: {
                        toAccount: e.to,
                        msgBody: e.getElements(),
                        msgSeq: e.sequence,
                        msgRandom: e.random
                    }
                };
            }
        }, {
            key: "_handleOnSendC2CMessageSuccess",
            value: function(e, t) {
                e.status = ke.SUCCESS, e.time = t.time;
            }
        }, {
            key: "_createGroupMessagePack",
            value: function(e) {
                return {
                    name: "groupMessage",
                    action: "create",
                    tjgID: this._generateTjgID(e),
                    param: {
                        groupID: e.to,
                        msgBody: e.getElements(),
                        random: e.random,
                        priority: e.priority,
                        clientSequence: e.clientSequence
                    }
                };
            }
        }, {
            key: "_handleOnSendGroupMessageSuccess",
            value: function(e, t) {
                e.sequence = t.sequence, e.time = t.time, e.status = ke.SUCCESS;
            }
        }, {
            key: "_onReceiveC2CMessage",
            value: function(n) {
                K.debug("MessageController._onReceiveC2CMessage nums=".concat(n.data.length));
                var r = this._newC2CMessageStoredAndSummary({
                    notifiesList: n.data,
                    type: t.CONV_C2C,
                    C2CRemainingUnreadList: n.C2CRemainingUnreadList
                }), o = r.eventDataList, i = r.result;
                o.length > 0 && this.emitInnerEvent(Et, {
                    eventDataList: o,
                    result: i
                }), i.length > 0 && this.emitOuterEvent(e.MESSAGE_RECEIVED, i);
            }
        }, {
            key: "_onReceiveGroupMessage",
            value: function(t) {
                K.debug("MessageController._onReceiveGroupMessage nums=".concat(t.data.length));
                var n = this.newGroupMessageStoredAndSummary(t.data), r = n.eventDataList, o = n.result;
                r.length > 0 && this.emitInnerEvent(kt, {
                    eventDataList: r,
                    result: o,
                    isGroupTip: !1
                }), o.length > 0 && this.emitOuterEvent(e.MESSAGE_RECEIVED, o);
            }
        }, {
            key: "_onReceiveGroupTips",
            value: function(t) {
                var n = t.data;
                K.debug("MessageController._onReceiveGroupTips nums=".concat(n.length));
                var r = this.newGroupTipsStoredAndSummary(n), o = r.eventDataList, i = r.result;
                o.length > 0 && this.emitInnerEvent(kt, {
                    eventDataList: o,
                    result: i,
                    isGroupTip: !0
                }), i.length > 0 && this.emitOuterEvent(e.MESSAGE_RECEIVED, i);
            }
        }, {
            key: "_onReceiveSystemNotice",
            value: function(t) {
                var n = t.data, r = n.groupSystemNotices, o = n.type;
                K.debug("MessageController._onReceiveSystemNotice nums=".concat(r.length));
                var i = this.newSystemNoticeStoredAndSummary({
                    notifiesList: r,
                    type: o
                }), s = i.eventDataList, a = i.result;
                s.length > 0 && this.emitInnerEvent(wt, {
                    eventDataList: s,
                    result: a,
                    type: o
                }), a.length > 0 && "poll" === o && this.emitOuterEvent(e.MESSAGE_RECEIVED, a);
            }
        }, {
            key: "_onReceiveGroupMessageRevokedNotice",
            value: function(t) {
                var n = this;
                K.debug("MessageController._onReceiveGroupMessageRevokedNotice nums=".concat(t.data.length));
                var r = [], o = null;
                t.data.forEach(function(e) {
                    e.elements.revokedInfos.forEach(function(e) {
                        (o = n.messagesList.revoke("GROUP".concat(e.groupID), e.sequence)) && r.push(o);
                    });
                }), 0 !== r.length && (this.emitInnerEvent(At, r), this.emitOuterEvent(e.MESSAGE_REVOKED, r));
            }
        }, {
            key: "_onReceiveC2CMessageRevokedNotice",
            value: function(t) {
                var n = this;
                K.debug("MessageController._onReceiveC2CMessageRevokedNotice nums=".concat(t.data.length));
                var r = [], o = null;
                t.data.forEach(function(e) {
                    e.c2cMessageRevokedNotify.revokedInfos.forEach(function(e) {
                        (o = n.messagesList.revoke("C2C".concat(e.from), e.sequence, e.random)) && r.push(o);
                    });
                }), 0 !== r.length && (this.emitInnerEvent(At, r), this.emitOuterEvent(e.MESSAGE_REVOKED, r));
            }
        }, {
            key: "_clearConversationMessages",
            value: function(e) {
                var t = e.data;
                this.messagesList.removeByConversationID(t), this.getMessageHandler.deleteCompletedItem(t);
            }
        }, {
            key: "_pushIntoNoticeResult",
            value: function(e, t) {
                var n = this.messagesList.pushIn(t), r = this.singlyLinkedList.has(t.random);
                return !(!n || !1 !== r || (e.push(t), 0));
            }
        }, {
            key: "_newC2CMessageStoredAndSummary",
            value: function(e) {
                for (var n = e.notifiesList, r = e.type, o = e.C2CRemainingUnreadList, i = e.isFromSync, s = null, a = [], u = [], c = {}, l = this.tim.bigDataHallwayController, p = 0, h = n.length; p < h; p++) {
                    var f = n[p];
                    (f.currentUser = this.tim.context.identifier, f.conversationType = r, f.isSystemMessage = !!f.isSystemMessage, 
                    s = new at(f), f.elements = l.parseElements(f.elements, f.from), s.setElement(f.elements), 
                    i || this._pushIntoNoticeResult(u, s)) && (void 0 === c[s.conversationID] ? c[s.conversationID] = a.push({
                        conversationID: s.conversationID,
                        unreadCount: "out" === s.flow ? 0 : 1,
                        type: s.conversationType,
                        subType: s.conversationSubType,
                        lastMessage: s
                    }) - 1 : (a[c[s.conversationID]].type = s.conversationType, a[c[s.conversationID]].subType = s.conversationSubType, 
                    a[c[s.conversationID]].lastMessage = s, "in" === s.flow && a[c[s.conversationID]].unreadCount++));
                }
                if (W(o)) for (var g = function(e, n) {
                    var r = a.find(function(t) {
                        return t.conversationID === "C2C".concat(o[e].from);
                    });
                    r ? r.unreadCount += o[e].count : a.push({
                        conversationID: "C2C".concat(o[e].from),
                        unreadCount: o[e].count,
                        type: t.CONV_C2C
                    });
                }, d = 0, m = o.length; d < m; d++) g(d);
                return {
                    eventDataList: a,
                    result: u
                };
            }
        }, {
            key: "newGroupMessageStoredAndSummary",
            value: function(e) {
                for (var n = null, r = [], o = {}, i = [], s = t.CONV_GROUP, a = this.tim.bigDataHallwayController, u = 0, c = e.length; u < c; u++) {
                    var l = e[u];
                    l.currentUser = this.tim.context.identifier, l.conversationType = s, l.isSystemMessage = !!l.isSystemMessage, 
                    n = new at(l), l.elements = a.parseElements(l.elements, l.from), n.setElement(l.elements), 
                    this._isMessageFromAVChatroom(n) || this._pushIntoNoticeResult(i, n) && (void 0 === o[n.conversationID] ? o[n.conversationID] = r.push({
                        conversationID: n.conversationID,
                        unreadCount: "out" === n.flow ? 0 : 1,
                        type: n.conversationType,
                        subType: n.conversationSubType,
                        lastMessage: n
                    }) - 1 : (r[o[n.conversationID]].type = n.conversationType, r[o[n.conversationID]].subType = n.conversationSubType, 
                    r[o[n.conversationID]].lastMessage = n, "in" === n.flow && r[o[n.conversationID]].unreadCount++));
                }
                return {
                    eventDataList: r,
                    result: i
                };
            }
        }, {
            key: "_isMessageFromAVChatroom",
            value: function(e) {
                var t = e.conversationID.slice(5);
                return this.tim.groupController.checkJoinedAVChatRoomByID(t);
            }
        }, {
            key: "newGroupTipsStoredAndSummary",
            value: function(e) {
                for (var n = null, r = [], o = [], i = {}, s = 0, a = e.length; s < a; s++) {
                    var u = e[s];
                    u.currentUser = this.tim.context.identifier, u.conversationType = t.CONV_GROUP, 
                    (n = new at(u)).setElement({
                        type: t.MSG_GRP_TIP,
                        content: c({}, u.elements, {
                            groupProfile: u.groupProfile
                        })
                    }), n.isSystemMessage = !1, this._isMessageFromAVChatroom(n) || this._pushIntoNoticeResult(o, n) && (void 0 === i[n.conversationID] ? i[n.conversationID] = r.push({
                        conversationID: n.conversationID,
                        unreadCount: "out" === n.flow ? 0 : 1,
                        type: n.conversationType,
                        subType: n.conversationSubType,
                        lastMessage: n
                    }) - 1 : (r[i[n.conversationID]].type = n.conversationType, r[i[n.conversationID]].subType = n.conversationSubType, 
                    r[i[n.conversationID]].lastMessage = n, "in" === n.flow && r[i[n.conversationID]].unreadCount++));
                }
                return {
                    eventDataList: r,
                    result: o
                };
            }
        }, {
            key: "newSystemNoticeStoredAndSummary",
            value: function(e) {
                var n = e.notifiesList, r = e.type, o = null, i = n.length, s = 0, a = [], u = {
                    conversationID: t.CONV_SYSTEM,
                    unreadCount: 0,
                    type: t.CONV_SYSTEM,
                    subType: null,
                    lastMessage: null
                };
                for (s = 0; s < i; s++) {
                    var l = n[s];
                    15 !== l.elements.operationType && (l.currentUser = this.tim.context.identifier, 
                    l.conversationType = t.CONV_SYSTEM, l.conversationID = t.CONV_SYSTEM, (o = new at(l)).setElement({
                        type: t.MSG_GRP_SYS_NOTICE,
                        content: c({}, l.elements, {
                            groupProfile: l.groupProfile
                        })
                    }), o.isSystemMessage = !0, (1 === o.sequence && 1 === o.random || 2 === o.sequence && 2 === o.random) && (o.sequence = ue(), 
                    o.random = ue(), o.generateMessageID(l.currentUser), K.log("MessageController.newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID=".concat(o.ID))), 
                    this._pushIntoNoticeResult(a, o) && ("poll" === r ? u.unreadCount++ : "sync" === r && o.setIsRead(!0), 
                    u.subType = o.conversationSubType));
                }
                return u.lastMessage = a[a.length - 1], {
                    eventDataList: a.length > 0 ? [ u ] : [],
                    result: a
                };
            }
        }, {
            key: "_onSyncMessagesProcessing",
            value: function(e) {
                var n = this._newC2CMessageStoredAndSummary({
                    notifiesList: e.data,
                    type: t.CONV_C2C,
                    isFromSync: !0,
                    C2CRemainingUnreadList: e.C2CRemainingUnreadList
                }), r = n.eventDataList, o = n.result;
                this.emitInnerEvent(St, {
                    eventDataList: r,
                    result: o
                });
            }
        }, {
            key: "_onSyncMessagesFinished",
            value: function(e) {
                this.triggerReady();
                var n = this._newC2CMessageStoredAndSummary({
                    notifiesList: e.data.messageList,
                    type: t.CONV_C2C,
                    isFromSync: !0,
                    C2CRemainingUnreadList: e.data.C2CRemainingUnreadList
                }), r = n.eventDataList, o = n.result;
                this.emitInnerEvent(Tt, {
                    eventDataList: r,
                    result: o
                });
            }
        }, {
            key: "getHistoryMessages",
            value: function(e) {
                if (e.conversationID === t.CONV_SYSTEM) return mn();
                !e.count && (e.count = 15), e.count > 20 && (e.count = 20);
                var n = this.messagesList.getLocalOldestMessageByConversationID(e.conversationID);
                n || ((n = {}).time = 0, n.sequence = 0, 0 === e.conversationID.indexOf(t.CONV_C2C) ? (n.to = e.conversationID.replace(t.CONV_C2C, ""), 
                n.conversationType = t.CONV_C2C) : 0 === e.conversationID.indexOf(t.CONV_GROUP) && (n.to = e.conversationID.replace(t.CONV_GROUP, ""), 
                n.conversationType = t.CONV_GROUP));
                var r = "";
                switch (n.conversationType) {
                  case t.CONV_C2C:
                    return r = e.conversationID.replace(t.CONV_C2C, ""), this.getC2CRoamMessages({
                        conversationID: e.conversationID,
                        peerAccount: r,
                        count: e.count,
                        lastMessageTime: void 0 === this.currentMessageKey[e.conversationID] ? 0 : n.time
                    });

                  case t.CONV_GROUP:
                    return this.getGroupRoamMessages({
                        conversationID: e.conversationID,
                        groupID: n.to,
                        count: e.count,
                        sequence: n.sequence - 1
                    });

                  default:
                    return mn();
                }
            }
        }, {
            key: "getC2CRoamMessages",
            value: function(e) {
                var n = this, r = void 0 !== this.currentMessageKey[e.conversationID] ? this.currentMessageKey[e.conversationID] : "";
                K.log("MessageController.getC2CRoamMessages toAccount=".concat(e.peerAccount, " count=").concat(e.count || 15, " lastMessageTime=").concat(e.lastMessageTime || 0, " messageKey=").concat(r));
                var o = new Dn();
                return o.setMethod("getC2CRoamingMessages").setStart(), this.request({
                    name: "c2cMessage",
                    action: "query",
                    param: {
                        peerAccount: e.peerAccount,
                        count: e.count || 15,
                        lastMessageTime: e.lastMessageTime || 0,
                        messageKey: r
                    }
                }).then(function(i) {
                    var s = i.data, a = s.complete, u = s.messageList;
                    X(u) ? K.log("MessageController.getC2CRoamMessages ok. complete=".concat(a, " but messageList is undefined!")) : K.log("MessageController.getC2CRoamMessages ok. complete=".concat(a, " nums=").concat(u.length)), 
                    o.setCode(0).setNetworkType(n.getNetworkType()).setText("".concat(e.peerAccount, "-").concat(e.count || 15, "-").concat(e.lastMessageTime || 0, "-").concat(r, "-").concat(a, "-").concat(u ? u.length : "undefined")).setEnd(), 
                    1 === a && n.getMessageHandler.setCompleted(e.conversationID);
                    var c = n._roamMessageStore(u, t.CONV_C2C, e.conversationID);
                    return n.readReportHandler.updateIsRead(e.conversationID), n.currentMessageKey[e.conversationID] = i.data.messageKey, 
                    c;
                }).catch(function(t) {
                    return n.probeNetwork().then(function(n) {
                        var i = y(n, 2), s = i[0], a = i[1];
                        o.setError(t, s, a).setText("".concat(e.peerAccount, "-").concat(e.count || 15, "-").concat(e.lastMessageTime || 0, "-").concat(r)).setEnd();
                    }), K.warn("MessageController.getC2CRoamMessages failed. ".concat(t)), yn(t);
                });
            }
        }, {
            key: "_computeLastSequence",
            value: function(e) {
                return e.sequence >= 0 ? Promise.resolve(e.sequence) : this.tim.groupController.getGroupLastSequence(e.groupID);
            }
        }, {
            key: "getGroupRoamMessages",
            value: function(e) {
                var n = this, r = new Dn(), o = 0;
                return this._computeLastSequence(e).then(function(t) {
                    return o = t, K.log("MessageController.getGroupRoamMessages groupID=".concat(e.groupID, " lastSequence=").concat(o)), 
                    r.setMethod("getGroupRoamingMessages").setStart(), n.request({
                        name: "groupMessage",
                        action: "query",
                        param: {
                            groupID: e.groupID,
                            count: 21,
                            sequence: o
                        }
                    });
                }).then(function(i) {
                    var s = i.data, a = s.messageList, u = s.complete;
                    X(a) ? K.log("MessageController.getGroupRoamMessages ok. complete=".concat(u, " but messageList is undefined!")) : K.log("MessageController.getGroupRoamMessages ok. complete=".concat(u, " nums=").concat(a.length)), 
                    r.setCode(0).setNetworkType(n.getNetworkType()).setText("".concat(e.groupID, "-").concat(o, "-").concat(u, "-").concat(a ? a.length : "undefined")).setEnd();
                    var c = "GROUP".concat(e.groupID);
                    if (2 === u || Ie(a)) return n.getMessageHandler.setCompleted(c), [];
                    var l = n._roamMessageStore(a, t.CONV_GROUP, c);
                    return n.readReportHandler.updateIsRead(c), l;
                }).catch(function(t) {
                    return n.probeNetwork().then(function(n) {
                        var i = y(n, 2), s = i[0], a = i[1];
                        r.setError(t, s, a).setText("".concat(e.groupID, "-").concat(o)).setEnd();
                    }), K.warn("MessageController.getGroupRoamMessages failed. ".concat(t)), yn(t);
                });
            }
        }, {
            key: "_roamMessageStore",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, o = null, i = [], s = 0, a = e.length, u = null, l = n === t.CONV_GROUP, p = this.tim.bigDataHallwayController, h = function() {
                    s = l ? e.length - 1 : 0, a = l ? 0 : e.length;
                }, f = function() {
                    l ? --s : ++s;
                }, g = function() {
                    return l ? s >= a : s < a;
                };
                for (h(); g(); f()) l && 1 === e[s].sequence && this.getMessageHandler.setCompleted(r), 
                1 !== e[s].isPlaceMessage && ((o = new at(e[s])).to = e[s].to, o.isSystemMessage = !!e[s].isSystemMessage, 
                o.conversationType = n, e[s].event === Re.JSON.TYPE.GROUP.TIP ? u = {
                    type: t.MSG_GRP_TIP,
                    content: c({}, e[s].elements, {
                        groupProfile: e[s].groupProfile
                    })
                } : (e[s].elements = p.parseElements(e[s].elements, e[s].from), u = e[s].elements), 
                o.setElement(u), o.reInitialize(this.tim.context.identifier), i.push(o));
                return this.messagesList.unshift(i), h = f = g = null, i;
            }
        }, {
            key: "getLocalMessageList",
            value: function(e) {
                return this.messagesList.getLocalMessageList(e);
            }
        }, {
            key: "getLocalMessage",
            value: function(e, t) {
                return this.messagesList.getLocalMessage(e, t);
            }
        }, {
            key: "hasLocalMessage",
            value: function(e, t) {
                return this.messagesList.hasLocalMessage(e, t);
            }
        }, {
            key: "deleteLocalMessage",
            value: function(e) {
                e instanceof at && this.messagesList.remove(e);
            }
        }, {
            key: "revokeMessage",
            value: function(e) {
                var n, r = this;
                e.conversationType === t.CONV_C2C ? n = {
                    name: "c2cMessageWillBeRevoked",
                    action: "create",
                    param: {
                        msgInfo: {
                            fromAccount: e.from,
                            toAccount: e.to,
                            msgSeq: e.sequence,
                            msgRandom: e.random,
                            msgTimeStamp: e.time
                        }
                    }
                } : e.conversationType === t.CONV_GROUP && (n = {
                    name: "groupMessageWillBeRevoked",
                    action: "create",
                    param: {
                        to: e.to,
                        msgSeqList: [ {
                            msgSeq: e.sequence
                        } ]
                    }
                });
                var o = new Dn();
                return o.setMethod("revokeMessage").setMessageType(e.type).setText("".concat(this._generateTjgID(e), "-").concat(e.type, "-").concat(e.from, "-").concat(e.to)).setStart(), 
                this.request(n).then(function(t) {
                    var n = t.data.recallRetList;
                    if (!Ie(n) && 0 !== n[0].retCode) {
                        var i = new Ke({
                            code: n[0].retCode,
                            message: Be[n[0].retCode] || "消息撤回失败",
                            data: {
                                message: e
                            }
                        });
                        return o.setCode(i.code).setMessage(i.message).setEnd(), yn(i);
                    }
                    return K.info("MessageController.revokeMessage ok. ID=".concat(e.ID)), e.isRevoked = !0, 
                    o.setCode(0).setEnd(), r.emitInnerEvent(At, [ e ]), new gn({
                        message: e
                    });
                }).catch(function(t) {
                    r.probeNetwork().then(function(e) {
                        var n = y(e, 2), r = n[0], i = n[1];
                        o.setError(t, r, i).setEnd();
                    });
                    var n = new Ke({
                        code: t && t.code ? t.code : 2110,
                        message: t && t.message ? t.message : "消息撤回失败",
                        data: {
                            message: e
                        }
                    });
                    return K.warn("MessageController.revokeMessage failed. ID=".concat(e.ID, " code=").concat(n.code, " message=").concat(n.message)), 
                    yn(n);
                });
            }
        }, {
            key: "setMessageRead",
            value: function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    t.ready(function() {
                        t.readReportHandler.setMessageRead(e).then(n).catch(r);
                    });
                });
            }
        }, {
            key: "getMessageList",
            value: function(e) {
                return this.getMessageHandler.getMessageList(e);
            }
        }, {
            key: "createTextMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new at(e), n = "string" == typeof e.payload ? e.payload : e.payload.text, r = new Ae({
                    text: n
                });
                return t.setElement(r), t;
            }
        }, {
            key: "createCustomMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new at(e), n = new rt({
                    data: e.payload.data,
                    description: e.payload.description,
                    extension: e.payload.extension
                });
                return t.setElement(n), t;
            }
        }, {
            key: "createImageMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new at(e);
                if (k) {
                    var n = e.payload.file;
                    if (V(n)) return void K.warn("微信小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象");
                    var r = n.tempFilePaths[0], o = {
                        url: r,
                        name: r.slice(r.lastIndexOf("/") + 1),
                        size: n.tempFiles[0].size,
                        type: r.slice(r.lastIndexOf(".") + 1).toLowerCase()
                    };
                    e.payload.file = o;
                } else if (E && V(e.payload.file)) {
                    var i = e.payload.file;
                    e.payload.file = {
                        files: [ i ]
                    };
                }
                var s = new Pe({
                    imageFormat: "UNKNOWN",
                    uuid: this._generateUUID(),
                    file: e.payload.file
                });
                return t.setElement(s), this.messageOptionMap.set(t.messageID, e), t;
            }
        }, {
            key: "createFileMessage",
            value: function(e) {
                if (!k) {
                    if (E && V(e.payload.file)) {
                        var t = e.payload.file;
                        e.payload.file = {
                            files: [ t ]
                        };
                    }
                    e.currentUser = this.tim.context.identifier;
                    var n = new at(e), r = new nt({
                        uuid: this._generateUUID(),
                        file: e.payload.file
                    });
                    return n.setElement(r), this.messageOptionMap.set(n.messageID, e), n;
                }
                K.warn("微信小程序目前不支持选择文件， createFileMessage 接口不可用！");
            }
        }, {
            key: "createAudioMessage",
            value: function(e) {
                if (k) {
                    var t = e.payload.file;
                    if (k) {
                        var n = {
                            url: t.tempFilePath,
                            name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1),
                            size: t.fileSize,
                            second: parseInt(t.duration) / 1e3,
                            type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                        };
                        e.payload.file = n;
                    }
                    e.currentUser = this.tim.context.identifier;
                    var r = new at(e), o = new qe({
                        second: Math.floor(t.duration / 1e3),
                        size: t.fileSize,
                        url: t.tempFilePath,
                        uuid: this._generateUUID()
                    });
                    return r.setElement(o), this.messageOptionMap.set(r.messageID, e), r;
                }
                K.warn("createAudioMessage 目前只支持微信小程序发语音消息");
            }
        }, {
            key: "createVideoMessage",
            value: function(e) {
                if (k) {
                    if (e.currentUser = this.tim.context.identifier, k) {
                        e.payload.file.thumbUrl = "https://webim-1252463788.cos.ap-shanghai.myqcloud.com/assets/images/transparent.png", 
                        e.payload.file.thumbSize = 1668;
                        var t = e.payload.file, n = {
                            url: t.tempFilePath,
                            name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1),
                            size: t.size,
                            second: t.duration,
                            type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                        };
                        e.payload.file.videoFile = n;
                        var r = new at(e), o = new ot({
                            videoFormat: n.type,
                            videoSecond: Number(n.second.toFixed(0)),
                            videoSize: n.size,
                            remoteVideoUrl: "",
                            videoUrl: n.url,
                            videoUUID: this._generateUUID(),
                            thumbUUID: this._generateUUID(),
                            thumbWidth: t.width,
                            thumbHeight: t.height,
                            thumbUrl: t.thumbUrl,
                            thumbSize: t.thumbSize,
                            thumbFormat: t.thumbUrl.slice(t.thumbUrl.lastIndexOf(".") + 1).toLowerCase()
                        });
                        return r.setElement(o), this.messageOptionMap.set(r.messageID, e), r;
                    }
                } else K.warn("createVideoMessage 目前只支持微信小程序发视频消息");
            }
        }, {
            key: "createFaceMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new at(e), n = new Ge(e.payload);
                return t.setElement(n), t;
            }
        }, {
            key: "_generateUUID",
            value: function() {
                var e = this.tim.context;
                return "".concat(e.SDKAppID, "-").concat(e.identifier, "-").concat(function() {
                    for (var e = "", t = 32; t > 0; --t) e += ce[Math.floor(Math.random() * le)];
                    return e;
                }());
            }
        }, {
            key: "_generateTjgID",
            value: function(e) {
                return this.tim.context.tinyID + "-" + e.random;
            }
        }, {
            key: "getMessageOptionByID",
            value: function(e) {
                return this.messageOptionMap.get(e);
            }
        } ]), r;
    }(), ui = function() {
        function e(t) {
            o(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", 
            this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, 
            this.memberCustomField = [], this._initMember(t);
        }
        return s(e, [ {
            key: "_initMember",
            value: function(e) {
                this.updateMember(e);
            }
        }, {
            key: "updateMember",
            value: function(e) {
                var t = [ null, void 0, "", 0, NaN ];
                e.memberCustomField && de(this.memberCustomField, e.memberCustomField), oe(this, e, [ "memberCustomField" ], t);
            }
        }, {
            key: "updateRole",
            value: function(e) {
                [ "Owner", "Admin", "Member" ].indexOf(e) < 0 || (this.role = e);
            }
        }, {
            key: "updateMuteUntil",
            value: function(e) {
                X(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3));
            }
        }, {
            key: "updateNameCard",
            value: function(e) {
                X(e) || (this.nameCard = e);
            }
        }, {
            key: "updateMemberCustomField",
            value: function(e) {
                e && de(this.memberCustomField, e);
            }
        } ]), e;
    }(), ci = function() {
        function e(t) {
            o(this, e), this.tim = t.tim, this.groupController = t.groupController, this._initListeners();
        }
        return s(e, [ {
            key: "_initListeners",
            value: function() {
                this.tim.innerEmitter.on(kt, this._onReceivedGroupTips, this);
            }
        }, {
            key: "_onReceivedGroupTips",
            value: function(e) {
                var t = this, n = e.data, r = n.result;
                n.isGroupTip && r.forEach(function(e) {
                    switch (e.payload.operationType) {
                      case 1:
                        t._onNewMemberComeIn(e);
                        break;

                      case 2:
                        t._onMemberQuit(e);
                        break;

                      case 3:
                        t._onMemberKickedOut(e);
                        break;

                      case 4:
                        t._onMemberSetAdmin(e);
                        break;

                      case 5:
                        t._onMemberCancelledAdmin(e);
                        break;

                      case 6:
                        t._onGroupProfileModified(e);
                        break;

                      case 7:
                        t._onMemberInfoModified(e);
                        break;

                      default:
                        K.warn("GroupTipsHandler._onReceivedGroupTips Unhandled groupTips. operationType=", e.payload.operationType);
                    }
                });
            }
        }, {
            key: "_onNewMemberComeIn",
            value: function(e) {
                var t = e.payload, n = t.memberNum, r = t.groupProfile.groupID, o = this.groupController.getLocalGroupProfile(r);
                o && j(n) && (o.memberNum = n);
            }
        }, {
            key: "_onMemberQuit",
            value: function(e) {
                var t = e.payload, n = t.memberNum, r = t.groupProfile.groupID, o = this.groupController.getLocalGroupProfile(r);
                o && j(n) && (o.memberNum = n), this.groupController.deleteLocalGroupMembers(r, e.payload.userIDList);
            }
        }, {
            key: "_onMemberKickedOut",
            value: function(e) {
                var t = e.payload, n = t.memberNum, r = t.groupProfile.groupID, o = this.groupController.getLocalGroupProfile(r);
                o && j(n) && (o.memberNum = n), this.groupController.deleteLocalGroupMembers(r, e.payload.userIDList);
            }
        }, {
            key: "_onMemberSetAdmin",
            value: function(e) {
                var n = this, r = e.payload.groupProfile.groupID;
                e.payload.userIDList.forEach(function(e) {
                    var o = n.groupController.getLocalGroupMemberInfo(r, e);
                    o && o.updateRole(t.GRP_MBR_ROLE_ADMIN);
                });
            }
        }, {
            key: "_onMemberCancelledAdmin",
            value: function(e) {
                var n = this, r = e.payload.groupProfile.groupID;
                e.payload.userIDList.forEach(function(e) {
                    var o = n.groupController.getLocalGroupMemberInfo(r, e);
                    o && o.updateRole(t.GRP_MBR_ROLE_MEMBER);
                });
            }
        }, {
            key: "_onGroupProfileModified",
            value: function(e) {
                var t = this, n = e.payload.newGroupProfile, r = e.payload.groupProfile.groupID, o = this.groupController.getLocalGroupProfile(r);
                Object.keys(n).forEach(function(e) {
                    switch (e) {
                      case "ownerID":
                        t._ownerChaged(o, n);
                        break;

                      default:
                        o[e] = n[e];
                    }
                }), this.groupController.emitGroupListUpdate(!0, !0);
            }
        }, {
            key: "_ownerChaged",
            value: function(e, n) {
                var r = e.groupID, o = this.groupController.getLocalGroupProfile(r), i = this.tim.context.identifier;
                if (i === n.ownerID) {
                    o.updateGroup({
                        selfInfo: {
                            role: t.GRP_MBR_ROLE_OWNER
                        }
                    });
                    var s = this.groupController.getLocalGroupMemberInfo(r, i), a = this.groupController.getLocalGroupProfile(r).ownerID, u = this.groupController.getLocalGroupMemberInfo(r, a);
                    s && s.updateRole(t.GRP_MBR_ROLE_OWNER), u && u.updateRole(t.GRP_MBR_ROLE_MEMBER);
                }
            }
        }, {
            key: "_onMemberInfoModified",
            value: function(e) {
                var t = this, n = e.payload.groupProfile.groupID;
                e.payload.memberList.forEach(function(e) {
                    var r = t.groupController.getLocalGroupMemberInfo(n, e.userID);
                    r && e.muteTime && r.updateMuteUntil(e.muteTime);
                });
            }
        } ]), e;
    }(), li = function() {
        function n(e) {
            o(this, n), this.groupController = e.groupController, this.tim = e.tim, this.pendencyMap = new Map(), 
            this._initLiceners();
        }
        return s(n, [ {
            key: "_initLiceners",
            value: function() {
                this.tim.innerEmitter.on(wt, this._onReceivedGroupSystemNotice, this), this.tim.innerEmitter.on(Mt, this._clearGroupSystemNotice, this);
            }
        }, {
            key: "_clearGroupSystemNotice",
            value: function() {
                var e = this;
                this.getPendencyList().then(function(n) {
                    n.forEach(function(t) {
                        e.pendencyMap.set("".concat(t.from, "_").concat(t.groupID, "_").concat(t.to), t);
                    });
                    var r = e.tim.messageController.getLocalMessageList(t.CONV_SYSTEM), o = [];
                    r.forEach(function(t) {
                        var n = t.payload, r = n.operatorID, i = n.operationType, s = n.groupProfile;
                        if (1 === i) {
                            var a = "".concat(r, "_").concat(s.groupID, "_").concat(s.to), u = e.pendencyMap.get(a);
                            u && j(u.handled) && 0 !== u.handled && o.push(t);
                        }
                    }), e.groupController.deleteGroupSystemNotice({
                        messageList: o
                    });
                });
            }
        }, {
            key: "getPendencyList",
            value: function(e) {
                var t = this;
                return this.groupController.request({
                    name: "group",
                    action: "getGroupPendency",
                    param: {
                        startTime: e && e.startTime ? e.startTime : 0,
                        limit: e && e.limit ? e.limit : 10,
                        handleAccount: this.tim.context.identifier
                    }
                }).then(function(e) {
                    var n = e.data, r = n.pendencyList;
                    return 0 !== n.nextStartTime ? t.getPendencyList({
                        startTime: n.nextStartTime
                    }).then(function(e) {
                        return [].concat(v(r), v(e));
                    }) : r;
                });
            }
        }, {
            key: "_onReceivedGroupSystemNotice",
            value: function(t) {
                var n = this, r = t.data, o = r.result;
                "sync" !== r.type && o.forEach(function(t) {
                    switch (t.payload.operationType) {
                      case 1:
                        n._onApplyGroupRequest(t);
                        break;

                      case 2:
                        n._onApplyGroupRequestAgreed(t);
                        break;

                      case 3:
                        n._onApplyGroupRequestRefused(t);
                        break;

                      case 4:
                        n._onMemberKicked(t);
                        break;

                      case 5:
                        n._onGroupDismissed(t);
                        break;

                      case 6:
                        break;

                      case 7:
                        n._onInviteGroup(t);
                        break;

                      case 8:
                        n._onQuitGroup(t);
                        break;

                      case 9:
                        n._onSetManager(t);
                        break;

                      case 10:
                        n._onDeleteManager(t);
                        break;

                      case 11:
                      case 12:
                      case 15:
                        break;

                      case 255:
                        n.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                            message: t,
                            type: 255
                        });
                    }
                });
            }
        }, {
            key: "_onApplyGroupRequest",
            value: function(t) {
                this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 1
                });
            }
        }, {
            key: "_onApplyGroupRequestAgreed",
            value: function(t) {
                var n = this, r = t.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(r) || this.groupController.getGroupProfile({
                    groupID: r
                }).then(function(e) {
                    var t = e.data.group;
                    t && (n.groupController.updateGroupMap([ t ]), n.groupController.emitGroupListUpdate());
                }), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 2
                });
            }
        }, {
            key: "_onApplyGroupRequestRefused",
            value: function(t) {
                this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 3
                });
            }
        }, {
            key: "_onMemberKicked",
            value: function(t) {
                var n = t.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(n) && this.groupController.deleteLocalGroupAndConversation(n), 
                this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 4
                });
            }
        }, {
            key: "_onGroupDismissed",
            value: function(t) {
                var n = t.payload.groupProfile.groupID, r = this.groupController.hasLocalGroup(n), o = this.groupController.AVChatRoomHandler;
                r && this.groupController.deleteLocalGroupAndConversation(n), o.checkJoinedAVChatRoomByID(n) && o.reset(), 
                this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 5
                });
            }
        }, {
            key: "_onInviteGroup",
            value: function(t) {
                var n = this, r = t.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(r) || this.groupController.getGroupProfile({
                    groupID: r
                }).then(function(e) {
                    var t = e.data.group;
                    t && (n.groupController.updateGroupMap([ t ]), n.groupController.emitGroupListUpdate());
                }), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 7
                });
            }
        }, {
            key: "_onQuitGroup",
            value: function(t) {
                var n = t.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(n) && this.groupController.deleteLocalGroupAndConversation(n), 
                this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: t,
                    type: 8
                });
            }
        }, {
            key: "_onSetManager",
            value: function(n) {
                var r = n.payload.groupProfile, o = r.to, i = r.groupID, s = this.groupController.getLocalGroupMemberInfo(i, o);
                s && s.updateRole(t.GRP_MBR_ROLE_ADMIN), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: n,
                    type: 9
                });
            }
        }, {
            key: "_onDeleteManager",
            value: function(n) {
                var r = n.payload.groupProfile, o = r.to, i = r.groupID, s = this.groupController.getLocalGroupMemberInfo(i, o);
                s && s.updateRole(t.GRP_MBR_ROLE_MEMBER), this.groupController.emitOuterEvent(e.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: n,
                    type: 10
                });
            }
        }, {
            key: "reset",
            value: function() {
                this.pendencyMap.clear();
            }
        } ]), n;
    }(), pi = {
        3: !0,
        4: !0,
        5: !0,
        6: !0
    }, hi = function() {
        function n(e) {
            var t = e.tim, r = e.groupController;
            o(this, n), this.tim = t, this.groupController = r, this.AVChatRoomLoop = null, 
            this.key = "", this.startSeq = 0, this.group = {};
        }
        return s(n, [ {
            key: "hasJoinedAVChatRoom",
            value: function() {
                return !(!this.group || X(this.group.groupID));
            }
        }, {
            key: "checkJoinedAVChatRoomByID",
            value: function(e) {
                return !(!this.group && X(this.group.groupID)) && e === this.group.groupID;
            }
        }, {
            key: "getJoinedAVChatRoom",
            value: function() {
                return this.hasJoinedAVChatRoom() ? this.group : null;
            }
        }, {
            key: "_updateProperties",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                    t[n] = e[n];
                });
            }
        }, {
            key: "start",
            value: function() {
                var e = {
                    key: this.key,
                    startSeq: this.startSeq
                };
                if (null === this.AVChatRoomLoop) {
                    var t = this.groupController.createTransportCapsule({
                        name: "AVChatRoom",
                        action: "startLongPoll",
                        param: e
                    });
                    this.AVChatRoomLoop = this.tim.connectionController.createRunLoop({
                        pack: t,
                        before: this._updateRequestData.bind(this),
                        success: this._handleSuccess.bind(this),
                        fail: this._handleFailure.bind(this),
                        isAVChatRoomLoop: !0
                    }), this.AVChatRoomLoop.start(), K.log("AVChatRoomHandler.start message channel started");
                } else this.AVChatRoomLoop.isRunning() || this.AVChatRoomLoop.start();
            }
        }, {
            key: "stop",
            value: function() {
                null !== this.AVChatRoomLoop && this.AVChatRoomLoop.isRunning() && (this.AVChatRoomLoop.abort(), 
                this.AVChatRoomLoop.stop(), K.log("AVChatRoomHandler.stop message channel stopped"));
            }
        }, {
            key: "startRunLoop",
            value: function(e) {
                var t = this;
                return this._precheck().then(function() {
                    var n = e.longPollingKey, r = e.group;
                    return t._updateProperties({
                        key: n,
                        startSeq: 0,
                        group: r || {}
                    }), t.groupController.updateGroupMap([ r ]), t.groupController.emitGroupListUpdate(!0, !1), 
                    t.start(), t.groupController.isLoggedIn() ? mn({
                        status: De,
                        group: r
                    }) : mn({
                        status: De
                    });
                });
            }
        }, {
            key: "joinWithoutAuth",
            value: function(e) {
                var t = this;
                return this.groupController.request({
                    name: "group",
                    action: "applyJoinAVChatRoom",
                    param: e
                }).then(function(n) {
                    var r = n.data.longPollingKey;
                    if (X(r)) return yn(new Ke({
                        code: 2662,
                        message: "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群"
                    }));
                    K.log("AVChatRoomHandler.joinWithoutAuth ok. groupID:", e.groupID), t.groupController.emitInnerEvent(rn, e.groupID);
                    var o = new Jo({
                        groupID: e.groupID
                    });
                    return t.startRunLoop({
                        group: o,
                        longPollingKey: r
                    }), new gn({
                        status: De
                    });
                }).catch(function(t) {
                    return K.error("AVChatRoomHandler.joinWithoutAuth error:".concat(t.message, ". groupID:").concat(e.groupID)), 
                    yn(t);
                });
            }
        }, {
            key: "_precheck",
            value: function() {
                if (!this.hasJoinedAVChatRoom()) return Promise.resolve();
                if (this.groupController.isLoggedIn()) {
                    if (this.group.selfInfo.role !== t.GRP_MBR_ROLE_OWNER && this.group.ownerID !== this.tim.loginInfo.identifier) return this.groupController.quitGroup(this.group.groupID);
                    this.groupController.deleteLocalGroupAndConversation(this.group.groupID);
                } else this.groupController.deleteLocalGroupAndConversation(this.group.groupID);
                return this.reset(), Promise.resolve();
            }
        }, {
            key: "_updateRequestData",
            value: function(e) {
                e.StartSeq = this.startSeq, e.Key = this.key, this.tim.sumStatController.addTotalCount(Cn);
            }
        }, {
            key: "_handleSuccess",
            value: function(e) {
                this.tim.sumStatController.addSuccessCount(Cn), this.tim.sumStatController.addCost(Cn, e.data.timecost), 
                this.startSeq = e.data.nextSeq, this.key = e.data.key, Array.isArray(e.data.rspMsgList) && e.data.rspMsgList.forEach(function(e) {
                    e.to = e.groupID;
                }), e.data.rspMsgList && e.data.rspMsgList.length > 0 && this._dispatchNotice(e.data.rspMsgList), 
                this.groupController.emitInnerEvent($t);
            }
        }, {
            key: "_handleFailure",
            value: function(e) {
                if (e.error) if ("ECONNABORTED" === e.error.code || 2801 === e.error.code) if (e.error.config) {
                    var t = e.error.config.url, n = e.error.config.data;
                    K.log("AVChatRoomHandler._handleFailure request timed out. url=".concat(t, " data=").concat(n));
                } else K.log("AVChatRoomHandler._handleFailure request timed out"); else K.log("AVChatRoomHandler._handleFailure request failed due to network error");
                this.groupController.emitInnerEvent(jt);
            }
        }, {
            key: "_dispatchNotice",
            value: function(n) {
                if (W(n) && 0 !== n.length) {
                    for (var r = null, o = [], i = [], s = 0; s < n.length; s++) pi[n[s].event] ? (r = this.packMessage(n[s], n[s].event), 
                    this.tim.messageController.hasLocalMessage(r.conversationID, r.ID) || (r.conversationType === t.CONV_SYSTEM && i.push(r), 
                    o.push(r))) : K.warn("AVChatRoomHandler._dispatchMessage 未处理的 event 类型：", n[s].event);
                    if (i.length > 0 && this.groupController.emitInnerEvent(wt, {
                        result: i,
                        eventDataList: [],
                        type: "poll"
                    }), 0 !== o.length) {
                        var a = this.packConversationOption(o);
                        a.length > 0 && this.groupController.emitInnerEvent(kt, {
                            eventDataList: a,
                            type: "poll"
                        }), K.debug("AVChatRoomHandler._dispatchNotice nums=".concat(o.length)), this.groupController.emitOuterEvent(e.MESSAGE_RECEIVED, o);
                    }
                }
            }
        }, {
            key: "packMessage",
            value: function(e, n) {
                e.currentUser = this.tim.context.identifier, e.conversationType = 5 === n ? t.CONV_SYSTEM : t.CONV_GROUP, 
                e.isSystemMessage = !!e.isSystemMessage;
                var r = new at(e), o = this.packElements(e, n);
                return r.setElement(o), r;
            }
        }, {
            key: "packElements",
            value: function(e, n) {
                return 4 === n || 6 === n ? {
                    type: t.MSG_GRP_TIP,
                    content: c({}, e.elements, {
                        groupProfile: e.groupProfile
                    })
                } : 5 === n ? {
                    type: t.MSG_GRP_SYS_NOTICE,
                    content: c({}, e.elements, {
                        groupProfile: e.groupProfile
                    })
                } : this.tim.bigDataHallwayController.parseElements(e.elements, e.from);
            }
        }, {
            key: "packConversationOption",
            value: function(e) {
                for (var t = new Map(), n = 0; n < e.length; n++) {
                    var r = e[n], o = r.conversationID;
                    if (t.has(o)) {
                        var i = t.get(o);
                        i.lastMessage = r, "in" === r.flow && i.unreadCount++;
                    } else t.set(o, {
                        conversationID: r.conversationID,
                        unreadCount: "out" === r.flow ? 0 : 1,
                        type: r.conversationType,
                        subType: r.conversationSubType,
                        lastMessage: r
                    });
                }
                return v(t.values());
            }
        }, {
            key: "reset",
            value: function() {
                null !== this.AVChatRoomLoop && (K.log("AVChatRoomHandler.reset"), this.stop(), 
                this.AVChatRoomLoop = null, this.key = "", this.startSeq = 0, this.group = {});
            }
        } ]), n;
    }(), fi = function(n) {
        function r(e) {
            var t;
            return o(this, r), (t = m(this, p(r).call(this, e))).groupMap = new Map(), t.groupMemberListMap = new Map(), 
            t.groupNoticeHandler = new li({
                tim: e,
                groupController: d(t)
            }), t.groupTipsHandler = new ci({
                tim: e,
                groupController: d(t)
            }), t.AVChatRoomHandler = new hi({
                tim: e,
                groupController: d(t)
            }), t._initListeners(), t;
        }
        return l(r, pn), s(r, [ {
            key: "createGroup",
            value: function(e) {
                var n = this;
                if (![ "Public", "Private", "ChatRoom", "AVChatRoom" ].includes(e.type)) {
                    var r = new Ke({
                        code: 2600,
                        message: "非法的群类型，请检查传入参数"
                    });
                    return yn(r);
                }
                ye(e.type) && !X(e.memberList) && e.memberList.length > 0 && (K.warn("GroupController.createGroup 创建AVChatRoom时不能添加群成员，自动忽略该字段"), 
                e.memberList = void 0), me(e.type) || X(e.joinOption) || (K.warn("GroupController.createGroup 创建Private/ChatRoom/AVChatRoom群时不能设置字段：joinOption，自动忽略该字段"), 
                e.joinOption = void 0);
                var o = new Dn();
                return o.setMethod("createGroup").setStart(), K.log("GroupController.createGroup."), 
                this.request({
                    name: "group",
                    action: "create",
                    param: e
                }).then(function(r) {
                    if (o.setCode(0).setNetworkType(n.getNetworkType()).setText("groupType=".concat(e.type, " groupID=").concat(r.data.groupID)).setEnd(), 
                    K.log("GroupController.createGroup ok. groupID:", r.data.groupID), e.type === t.GRP_AVCHATROOM) return n.getGroupProfile({
                        groupID: r.data.groupID
                    });
                    n.updateGroupMap([ c({}, e, {
                        groupID: r.data.groupID
                    }) ]);
                    var i = n.tim.createCustomMessage({
                        to: r.data.groupID,
                        conversationType: t.CONV_GROUP,
                        payload: {
                            data: "group_create",
                            extension: "".concat(n.tim.context.identifier, "创建群组")
                        }
                    });
                    return n.tim.sendMessage(i), n.emitGroupListUpdate(), n.getGroupProfile({
                        groupID: r.data.groupID
                    });
                }).then(function(e) {
                    var n = e.data.group;
                    return n.selfInfo.messageRemindType = t.MSG_REMIND_ACPT_AND_NOTE, n.selfInfo.role = t.GRP_MBR_ROLE_OWNER, 
                    e;
                }).catch(function(t) {
                    return o.setText("groupType=".concat(e.type)), n.probeNetwork().then(function(e) {
                        var n = y(e, 2), r = n[0], i = n[1];
                        o.setError(t, r, i).setEnd();
                    }), K.error("GroupController.createGroup error:", t), yn(t);
                });
            }
        }, {
            key: "joinGroup",
            value: function(e) {
                if (this.hasLocalGroup(e.groupID)) {
                    var n = {
                        status: t.JOIN_STATUS_ALREADY_IN_GROUP
                    };
                    return mn(n);
                }
                if (e.type === t.GRP_PRIVATE) {
                    var r = new Ke({
                        code: 2601,
                        message: "不能加入 Private 类型的群组"
                    });
                    return yn(r);
                }
                return K.log("GroupController.joinGroup. groupID:", e.groupID), this.isLoggedIn() ? this.applyJoinGroup(e) : this.AVChatRoomHandler.joinWithoutAuth(e);
            }
        }, {
            key: "quitGroup",
            value: function(e) {
                var t = this;
                K.log("GroupController.quitGroup. groupID:", e);
                var n = this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
                if (n && !this.isLoggedIn()) return K.log("GroupController.quitGroup anonymously ok. groupID:", e), 
                this.deleteLocalGroupAndConversation(e), this.AVChatRoomHandler.reset(), mn({
                    groupID: e
                });
                var r = new Dn();
                return r.setMethod("quitGroup").setStart(), this.request({
                    name: "group",
                    action: "quitGroup",
                    param: {
                        groupID: e
                    }
                }).then(function() {
                    return r.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e)).setEnd(), 
                    K.log("GroupController.quitGroup ok. groupID:", e), n && t.AVChatRoomHandler.reset(), 
                    t.deleteLocalGroupAndConversation(e), new gn({
                        groupID: e
                    });
                }).catch(function(n) {
                    return r.setText("groupID=".concat(e)), t.probeNetwork().then(function(e) {
                        var t = y(e, 2), o = t[0], i = t[1];
                        r.setError(n, o, i).setEnd();
                    }), K.error("GroupController.quitGroup error.  error:".concat(n, ". groupID:").concat(e)), 
                    yn(n);
                });
            }
        }, {
            key: "changeGroupOwner",
            value: function(e) {
                var n = this;
                if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === t.GRP_AVCHATROOM) return yn(new Ke({
                    code: 2620,
                    message: "AVChatRoom 类型的群组不能转让群主"
                }));
                if (e.newOwnerID === this.tim.loginInfo.identifier) return yn(new Ke({
                    code: 2621,
                    message: "不能把群主转让给自己"
                }));
                var r = new Dn();
                return r.setMethod("changeGroupOwner").setStart(), K.log("GroupController.changeGroupOwner. groupID:", e.groupID), 
                this.request({
                    name: "group",
                    action: "changeGroupOwner",
                    param: e
                }).then(function() {
                    r.setCode(0).setNetworkType(n.getNetworkType()).setText("groupID=".concat(e.groupID)).setEnd(), 
                    K.log("GroupController.changeGroupOwner ok. groupID:", e.groupID);
                    var t = e.groupID, o = e.newOwnerID;
                    n.groupMap.get(t).ownerID = o;
                    var i = n.groupMemberListMap.get(t);
                    if (i instanceof Map) {
                        var s = i.get(n.tim.loginInfo.identifier);
                        X(s) || (s.updateRole("Member"), n.groupMap.get(t).selfInfo.role = "Member");
                        var a = i.get(o);
                        X(a) || a.updateRole("Owner");
                    }
                    return n.emitGroupListUpdate(!0, !1), new gn({
                        group: n.groupMap.get(t)
                    });
                }).catch(function(t) {
                    return r.setText("groupID=".concat(e.groupID)), n.probeNetwork().then(function(e) {
                        var n = y(e, 2), o = n[0], i = n[1];
                        r.setError(t, o, i).setEnd();
                    }), K.error("GroupController.changeGroupOwner error:".concat(t, ". groupID:").concat(e.groupID)), 
                    yn(t);
                });
            }
        }, {
            key: "dismissGroup",
            value: function(e) {
                var n = this;
                if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === t.GRP_PRIVATE) return yn(new Ke({
                    code: 2622,
                    message: "不能解散 Private 类型的群组"
                }));
                var r = new Dn();
                return r.setMethod("dismissGroup").setStart(), K.log("GroupController.dismissGroup. groupID:".concat(e)), 
                this.request({
                    name: "group",
                    action: "destroyGroup",
                    param: {
                        groupID: e
                    }
                }).then(function() {
                    return r.setCode(0).setNetworkType(n.getNetworkType()).setText("groupID=".concat(e)).setEnd(), 
                    K.log("GroupController.dismissGroup ok. groupID:".concat(e)), n.deleteLocalGroupAndConversation(e), 
                    n.checkJoinedAVChatRoomByID(e) && n.AVChatRoomHandler.reset(), new gn({
                        groupID: e
                    });
                }).catch(function(t) {
                    return r.setText("groupID=".concat(e)), n.probeNetwork().then(function(e) {
                        var n = y(e, 2), o = n[0], i = n[1];
                        r.setError(t, o, i).setEnd();
                    }), K.error("GroupController.dismissGroup error:".concat(t, ". groupID:").concat(e)), 
                    yn(t);
                });
            }
        }, {
            key: "updateGroupProfile",
            value: function(e) {
                var t = this;
                !this.hasLocalGroup(e.groupID) || me(this.getLocalGroupProfile(e.groupID).type) || X(e.joinOption) || (K.warn("GroupController.modifyGroup: Private/ChatRoom/AVChatRoom群不能设置字段：joinOption，自动忽略该字段"), 
                e.joinOption = void 0);
                var n = new Dn();
                return n.setMethod("updateGroupProfile").setStart(), K.log("GroupController.modifyGroup. groupID:", e.groupID), 
                this.request({
                    name: "group",
                    action: "updateGroupProfile",
                    param: e
                }).then(function() {
                    return n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID)).setEnd(), 
                    K.log("GroupController.modifyGroup ok. groupID:", e.groupID), t.hasLocalGroup(e.groupID) && (t.groupMap.get(e.groupID).updateGroup(e), 
                    t._setStorageGroupList()), new gn({
                        group: t.groupMap.get(e.groupID)
                    });
                }).catch(function(r) {
                    return n.setText("groupID=".concat(e.groupID)), t.probeNetwork().then(function(e) {
                        var t = y(e, 2), o = t[0], i = t[1];
                        n.setError(r, o, i).setEnd();
                    }), K.log("GroupController.modifyGroup error. error:".concat(r, " groupID:").concat(e.groupID)), 
                    yn(r);
                });
            }
        }, {
            key: "setGroupMemberRole",
            value: function(e) {
                var n = this, r = e.groupID, o = e.userID, i = e.role, s = this.groupMap.get(r);
                if (s.selfInfo.role !== t.GRP_MBR_ROLE_OWNER) return yn(new Ke({
                    code: 2681,
                    message: "你不是群主，只有群主才有权限操作"
                }));
                if ([ t.GRP_PRIVATE, t.GRP_AVCHATROOM ].includes(s.type)) return yn(new Ke({
                    code: 2682,
                    message: "不能在 Private / AVChatRoom 类型的群中设置群成员身份"
                }));
                if ([ t.GRP_MBR_ROLE_ADMIN, t.GRP_MBR_ROLE_MEMBER ].indexOf(i) < 0) return yn(new Ke({
                    code: 2683,
                    message: "不合法的群成员身份，请检查传入参数"
                }));
                if (o === this.tim.loginInfo.identifier) return yn(new Ke({
                    code: 2684,
                    message: "不能设置自己的群成员身份，请检查传入参数"
                }));
                var a = new Dn();
                return a.setMethod("setGroupMemberRole").setStart(), a.setText("groupID=".concat(r, " userID=").concat(o, " role=").concat(i)), 
                K.log("GroupController.setGroupMemberRole. groupID:".concat(r, ". userID: ").concat(o)), 
                this._modifyGroupMemberInfo({
                    groupID: r,
                    userID: o,
                    role: i
                }).then(function(e) {
                    return a.setCode(0).setNetworkType(n.getNetworkType()).setEnd(), K.log("GroupController.setGroupMemberRole ok. groupID:".concat(r, ". userID: ").concat(o)), 
                    new gn({
                        group: s,
                        member: e
                    });
                }).catch(function(e) {
                    return n.probeNetwork().then(function(t) {
                        var n = y(t, 2), r = n[0], o = n[1];
                        a.setError(e, r, o).setEnd();
                    }), K.error("GroupController.setGroupMemberRole error:".concat(e, ". groupID:").concat(r, ". userID:").concat(o)), 
                    yn(e);
                });
            }
        }, {
            key: "setGroupMemberMuteTime",
            value: function(e) {
                var t = this, n = e.groupID, r = e.userID, o = e.muteTime;
                if (r === this.tim.loginInfo.identifier) return yn(new Ke({
                    code: 2685,
                    message: "不能将自己禁言，请检查传入参数"
                }));
                K.log("GroupController.setGroupMemberMuteTime. groupID:".concat(n, ". userID: ").concat(r));
                var i = new Dn();
                return i.setMethod("setGroupMemberMuteTime").setStart(), i.setText("groupID=".concat(n, " userID=").concat(r, " muteTime=").concat(o)), 
                this._modifyGroupMemberInfo({
                    groupID: n,
                    userID: r,
                    muteTime: o
                }).then(function(e) {
                    return i.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), K.log("GroupController.setGroupMemberMuteTime ok. groupID:".concat(n, ". userID: ").concat(r)), 
                    new gn({
                        group: t.getLocalGroupProfile(n),
                        member: e
                    });
                }).catch(function(e) {
                    return t.probeNetwork().then(function(t) {
                        var n = y(t, 2), r = n[0], o = n[1];
                        i.setError(e, r, o).setEnd();
                    }), K.error("GroupController.setGroupMemberMuteTime error:".concat(e, ". groupID:").concat(n, ". userID:").concat(r)), 
                    yn(e);
                });
            }
        }, {
            key: "setMessageRemindType",
            value: function(e) {
                var t = this;
                K.log("GroupController.setMessageRemindType. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || this.tim.loginInfo.identifier));
                var n = e.groupID, r = e.messageRemindType;
                return this._modifyGroupMemberInfo({
                    groupID: n,
                    messageRemindType: r,
                    userID: this.tim.loginInfo.identifier
                }).then(function() {
                    K.log("GroupController.setMessageRemindType ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || t.tim.loginInfo.identifier));
                    var n = t.getLocalGroupProfile(e.groupID);
                    return n && (n.selfInfo.messageRemindType = r), new gn({
                        group: n
                    });
                }).catch(function(n) {
                    return K.error("GroupController.setMessageRemindType error:".concat(n, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID || t.tim.loginInfo.identifier)), 
                    yn(n);
                });
            }
        }, {
            key: "setGroupMemberNameCard",
            value: function(e) {
                var t = this, n = e.groupID, r = e.userID, o = void 0 === r ? this.tim.loginInfo.identifier : r, i = e.nameCard;
                K.log("GroupController.setGroupMemberNameCard. groupID:".concat(n, ". userID: ").concat(o));
                var s = new Dn();
                return s.setMethod("setGroupMemberNameCard").setStart(), s.setText("groupID=".concat(n, " userID=").concat(o, " nameCard=").concat(i)), 
                this._modifyGroupMemberInfo({
                    groupID: n,
                    userID: o,
                    nameCard: i
                }).then(function(e) {
                    K.log("GroupController.setGroupMemberNameCard ok. groupID:".concat(n, ". userID: ").concat(o)), 
                    s.setCode(0).setNetworkType(t.getNetworkType()).setEnd();
                    var r = t.getLocalGroupProfile(n);
                    return o === t.tim.loginInfo.identifier && r && r.setSelfNameCard(i), new gn({
                        group: r,
                        member: e
                    });
                }).catch(function(e) {
                    return t.probeNetwork().then(function(t) {
                        var n = y(t, 2), r = n[0], o = n[1];
                        s.setError(e, r, o).setEnd();
                    }), K.error("GroupController.setGroupMemberNameCard error:".concat(e, ". groupID:").concat(n, ". userID:").concat(o)), 
                    yn(e);
                });
            }
        }, {
            key: "setGroupMemberCustomField",
            value: function(e) {
                var t = this, n = e.groupID, r = e.userID, o = void 0 === r ? this.tim.loginInfo.identifier : r, i = e.memberCustomField;
                K.log("GroupController.setGroupMemberCustomField. groupID:".concat(n, ". userID: ").concat(o));
                var s = new Dn();
                return s.setMethod("setGroupMemberCustomField").setStart(), s.setText("groupID=".concat(n, " userID=").concat(o, " memberCustomField=").concat(i)), 
                this._modifyGroupMemberInfo({
                    groupID: n,
                    userID: o,
                    memberCustomField: i
                }).then(function(e) {
                    return s.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), K.log("GroupController.setGroupMemberCustomField ok. groupID:".concat(n, ". userID: ").concat(o)), 
                    new gn({
                        group: t.groupMap.get(n),
                        member: e
                    });
                }).catch(function(e) {
                    return t.probeNetwork().then(function(t) {
                        var n = y(t, 2), r = n[0], o = n[1];
                        s.setError(e, r, o).setEnd();
                    }), K.error("GroupController.setGroupMemberCustomField error:".concat(e, ". groupID:").concat(n, ". userID:").concat(o)), 
                    yn(e);
                });
            }
        }, {
            key: "getGroupList",
            value: function(e) {
                var t = this, n = new Dn();
                n.setMethod("getGroupList").setStart(), K.log("GroupController.getGroupList");
                var r = {
                    introduction: "Introduction",
                    notification: "Notification",
                    createTime: "CreateTime",
                    ownerID: "Owner_Account",
                    lastInfoTime: "LastInfoTime",
                    memberNum: "MemberNum",
                    maxMemberNum: "MaxMemberNum",
                    joinOption: "ApplyJoinOption"
                }, o = [ "Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime" ];
                return e && e.groupProfileFilter && e.groupProfileFilter.forEach(function(e) {
                    r[e] && o.push(r[e]);
                }), this.request({
                    name: "group",
                    action: "list",
                    param: {
                        responseFilter: {
                            groupBaseInfoFilter: o,
                            selfInfoFilter: [ "Role", "JoinTime", "MsgFlag" ]
                        }
                    }
                }).then(function(e) {
                    var r = e.data.groups;
                    return n.setCode(0).setNetworkType(t.getNetworkType()).setText(r.length).setEnd(), 
                    K.log("GroupController.getGroupList ok. nums=".concat(r.length)), t._groupListTreeShaking(r), 
                    t.updateGroupMap(r), t.tempConversationList && (t._handleUpdateGroupLastMessage(t.tempConversationList), 
                    t.tempConversationList = null), t.emitGroupListUpdate(), new gn({
                        groupList: t.getLocalGroups()
                    });
                }).catch(function(e) {
                    return t.probeNetwork().then(function(t) {
                        var r = y(t, 2), o = r[0], i = r[1];
                        n.setError(e, o, i).setEnd();
                    }), K.error("GroupController.getGroupList error: ", e), yn(e);
                });
            }
        }, {
            key: "getGroupMemberList",
            value: function(e) {
                var t = this, n = e.groupID, r = e.offset, o = void 0 === r ? 0 : r, i = e.count, s = void 0 === i ? 15 : i;
                K.log("GroupController.getGroupMemberList groupID: ".concat(n, " offset: ").concat(o, " count: ").concat(s));
                var a = [];
                return this.request({
                    name: "group",
                    action: "getGroupMemberList",
                    param: {
                        groupID: n,
                        offset: o,
                        limit: s > 100 ? 100 : s,
                        memberInfoFilter: [ "Role", "NameCard" ]
                    }
                }).then(function(e) {
                    var r = e.data, o = r.members, i = r.memberNum;
                    return W(o) && 0 !== o.length ? (t.hasLocalGroup(n) && (t.getLocalGroupProfile(n).memberNum = i), 
                    a = t._updateLocalGroupMemberMap(n, o), t.tim.getUserProfile({
                        userIDList: o.map(function(e) {
                            return e.userID;
                        }),
                        tagList: [ Oe.NICK, Oe.AVATAR ]
                    })) : Promise.resolve([]);
                }).then(function(e) {
                    var r = e.data;
                    if (!W(r) || 0 === r.length) return mn({
                        memberList: []
                    });
                    var o = r.map(function(e) {
                        return {
                            userID: e.userID,
                            nick: e.nick,
                            avatar: e.avatar
                        };
                    });
                    return t._updateLocalGroupMemberMap(n, o), K.log("GroupController.getGroupMemberList ok."), 
                    new gn({
                        memberList: a
                    });
                }).catch(function(e) {
                    return K.error("GroupController.getGroupMemberList error: ", e), yn(e);
                });
            }
        }, {
            key: "getLocalGroups",
            value: function() {
                return v(this.groupMap.values());
            }
        }, {
            key: "getLocalGroupProfile",
            value: function(e) {
                return this.groupMap.get(e);
            }
        }, {
            key: "hasLocalGroup",
            value: function(e) {
                return this.groupMap.has(e);
            }
        }, {
            key: "getLocalGroupMemberInfo",
            value: function(e, t) {
                return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null;
            }
        }, {
            key: "setLocalGroupMember",
            value: function(e, t) {
                if (this.groupMemberListMap.has(e)) this.groupMemberListMap.get(e).set(t.userID, t); else {
                    var n = new Map().set(t.userID, t);
                    this.groupMemberListMap.set(e, n);
                }
            }
        }, {
            key: "hasLocalGroupMember",
            value: function(e, t) {
                return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t);
            }
        }, {
            key: "hasLocalGroupMemberMap",
            value: function(e) {
                return this.groupMemberListMap.has(e);
            }
        }, {
            key: "getGroupProfile",
            value: function(e) {
                var t = this;
                K.log("GroupController.getGroupProfile. groupID:", e.groupID);
                var n = e.groupID, r = e.groupCustomFieldFilter, o = {
                    groupIDList: [ n ],
                    responseFilter: {
                        groupBaseInfoFilter: [ "Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq" ],
                        groupCustomFieldFilter: r
                    }
                };
                return this.getGroupProfileAdvance(o).then(function(r) {
                    var o, i = r.data, s = i.successGroupList, a = i.failureGroupList;
                    return K.log("GroupController.getGroupProfile ok. groupID:", e.groupID), a.length > 0 ? yn(a[0]) : (ye(s[0].type) && !t.hasLocalGroup(n) ? o = new Jo(s[0]) : (t.updateGroupMap(s), 
                    o = t.getLocalGroupProfile(n)), o && o.selfInfo && !o.selfInfo.nameCard ? t.updateSelfInfo(o).then(function(e) {
                        return new gn({
                            group: e
                        });
                    }) : new gn({
                        group: o
                    }));
                }).catch(function(t) {
                    return K.error("GroupController.getGroupProfile error:".concat(t, ". groupID:").concat(e.groupID)), 
                    yn(t);
                });
            }
        }, {
            key: "getGroupMemberProfile",
            value: function(e) {
                var t = this;
                K.log("GroupController.getGroupMemberProfile groupID:".concat(e.groupID, " userIDList:").concat(e.userIDList.join(","))), 
                e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50));
                var n = e.groupID, r = e.userIDList;
                return this._getGroupMemberProfileAdvance(c({}, e, {
                    userIDList: r
                })).then(function(e) {
                    var r = e.data.members;
                    return W(r) && 0 !== r.length ? (t._updateLocalGroupMemberMap(n, r), t.tim.getUserProfile({
                        userIDList: r.map(function(e) {
                            return e.userID;
                        }),
                        tagList: [ Oe.NICK, Oe.AVATAR ]
                    })) : mn([]);
                }).then(function(e) {
                    var o = e.data.map(function(e) {
                        return {
                            userID: e.userID,
                            nick: e.nick,
                            avatar: e.avatar
                        };
                    });
                    t._updateLocalGroupMemberMap(n, o);
                    var i = r.filter(function(e) {
                        return t.hasLocalGroupMember(n, e);
                    }).map(function(e) {
                        return t.getLocalGroupMemberInfo(n, e);
                    });
                    return new gn({
                        memberList: i
                    });
                });
            }
        }, {
            key: "_getGroupMemberProfileAdvance",
            value: function(e) {
                return this.request({
                    name: "group",
                    action: "getGroupMemberProfile",
                    param: c({}, e, {
                        memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : [ "Role", "JoinTime", "NameCard", "ShutUpUntil" ]
                    })
                });
            }
        }, {
            key: "updateSelfInfo",
            value: function(e) {
                var t = e.groupID;
                K.log("GroupController.updateSelfInfo groupID:", t);
                var n = {
                    groupID: t,
                    userIDList: [ this.tim.loginInfo.identifier ]
                };
                return this.getGroupMemberProfile(n).then(function(n) {
                    var r = n.data.memberList;
                    return K.log("GroupController.updateSelfInfo ok. groupID:", t), e && 0 !== r.length && e.updateSelfInfo(r[0]), 
                    e;
                });
            }
        }, {
            key: "addGroupMember",
            value: function(e) {
                var t = this.getLocalGroupProfile(e.groupID);
                if (ye(t.type)) {
                    var n = new Ke({
                        code: 2661,
                        message: "AVChatRoom 类型的群不支持邀请群成员"
                    });
                    return yn(n);
                }
                return e.userIDList = e.userIDList.map(function(e) {
                    return {
                        userID: e
                    };
                }), K.log("GroupController.addGroupMember. groupID:", e.groupID), this.request({
                    name: "group",
                    action: "addGroupMember",
                    param: e
                }).then(function(n) {
                    var r = n.data.members;
                    K.log("GroupController.addGroupMember ok. groupID:", e.groupID);
                    var o = r.filter(function(e) {
                        return 1 === e.result;
                    }).map(function(e) {
                        return e.userID;
                    }), i = r.filter(function(e) {
                        return 0 === e.result;
                    }).map(function(e) {
                        return e.userID;
                    }), s = r.filter(function(e) {
                        return 2 === e.result;
                    }).map(function(e) {
                        return e.userID;
                    });
                    return 0 === o.length ? new gn({
                        successUserIDList: o,
                        failureUserIDList: i,
                        existedUserIDList: s
                    }) : (t.memberNum += o.length, new gn({
                        successUserIDList: o,
                        failureUserIDList: i,
                        existedUserIDList: s,
                        group: t
                    }));
                }).catch(function(t) {
                    return K.error("GroupController.addGroupMember error:".concat(t, ", groupID:").concat(e.groupID)), 
                    yn(t);
                });
            }
        }, {
            key: "deleteGroupMember",
            value: function(e) {
                var n = this;
                K.log("GroupController.deleteGroupMember groupID:".concat(e.groupID, " userIDList:").concat(e.userIDList));
                var r = this.getLocalGroupProfile(e.groupID);
                return r.type === t.GRP_AVCHATROOM ? yn(new Ke({
                    code: 2680,
                    message: "不能在 AVChatRoom 类型的群组踢人"
                })) : this.request({
                    name: "group",
                    action: "deleteGroupMember",
                    param: e
                }).then(function() {
                    return K.log("GroupController.deleteGroupMember ok"), r.memberNum--, n.deleteLocalGroupMembers(e.groupID, e.userIDList), 
                    new gn({
                        group: r,
                        userIDList: e.userIDList
                    });
                }).catch(function(t) {
                    return K.error("GroupController.deleteGroupMember error:".concat(t.code, ", groupID:").concat(e.groupID)), 
                    yn(t);
                });
            }
        }, {
            key: "searchGroupByID",
            value: function(e) {
                var t = {
                    groupIDList: [ e ]
                };
                return K.log("GroupController.searchGroupByID. groupID:".concat(e)), this.request({
                    name: "group",
                    action: "searchGroupByID",
                    param: t
                }).then(function(t) {
                    var n = t.data.groupProfile;
                    if (K.log("GroupController.searchGroupByID ok. groupID:".concat(e)), n[0].errorCode !== Te) throw new Ke({
                        code: n[0].errorCode,
                        message: n[0].errorInfo
                    });
                    return new gn({
                        group: new Jo(n[0])
                    });
                }).catch(function(t) {
                    return K.error("GroupController.searchGroupByID error:".concat(t, ", groupID:").concat(e)), 
                    yn(t);
                });
            }
        }, {
            key: "applyJoinGroup",
            value: function(e) {
                var t = this, n = new Dn();
                return n.setMethod("applyJoinGroup").setStart(), this.request({
                    name: "group",
                    action: "applyJoinGroup",
                    param: e
                }).then(function(r) {
                    var o = r.data, i = o.joinedStatus, s = o.longPollingKey;
                    switch (n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID, " joinedStatus=").concat(i)).setEnd(), 
                    K.log("GroupController.joinGroup ok. groupID:", e.groupID), i) {
                      case Se:
                        return new gn({
                            status: Se
                        });

                      case De:
                        return t.getGroupProfile({
                            groupID: e.groupID
                        }).then(function(n) {
                            var r = n.data.group, o = {
                                status: De,
                                group: r
                            };
                            return X(s) ? new gn(o) : (t.emitInnerEvent(rn, e.groupID), t.AVChatRoomHandler.startRunLoop({
                                longPollingKey: s,
                                group: r
                            }));
                        });

                      default:
                        var a = new Ke({
                            code: 2660,
                            message: "加群失败，请检查传入参数或重试"
                        });
                        return K.error("GroupController.joinGroup error:".concat(a, ". groupID:").concat(e.groupID)), 
                        yn(a);
                    }
                }).catch(function(r) {
                    return n.setText("groupID=".concat(e.groupID)), t.probeNetwork().then(function(e) {
                        var t = y(e, 2), o = t[0], i = t[1];
                        n.setError(r, o, i).setEnd();
                    }), K.error("GroupController.joinGroup error:".concat(r, ". groupID:").concat(e.groupID)), 
                    yn(r);
                });
            }
        }, {
            key: "applyJoinAVChatRoom",
            value: function(e) {
                return this.AVChatRoomHandler.applyJoinAVChatRoom(e);
            }
        }, {
            key: "handleGroupApplication",
            value: function(e) {
                var t = this, n = e.message.payload, r = n.groupProfile.groupID, o = n.authentication, i = n.messageKey, s = n.operatorID;
                return K.log("GroupController.handleApplication. groupID:", r), this.request({
                    name: "group",
                    action: "handleApplyJoinGroup",
                    param: c({}, e, {
                        applicant: s,
                        groupID: r,
                        authentication: o,
                        messageKey: i
                    })
                }).then(function() {
                    return K.log("GroupController.handleApplication ok. groupID:", r), t.deleteGroupSystemNotice({
                        messageList: [ e.message ]
                    }), new gn({
                        group: t.getLocalGroupProfile(r)
                    });
                }).catch(function(e) {
                    return K.error("GroupController.handleApplication error.  error:".concat(e, ". groupID:").concat(r)), 
                    yn(e);
                });
            }
        }, {
            key: "deleteGroupSystemNotice",
            value: function(e) {
                var n = this;
                return W(e.messageList) && 0 !== e.messageList.length ? (K.log("GroupController.deleteGroupSystemNotice " + e.messageList.map(function(e) {
                    return e.ID;
                })), this.request({
                    name: "group",
                    action: "deleteGroupSystemNotice",
                    param: {
                        messageListToDelete: e.messageList.map(function(e) {
                            return {
                                from: t.CONV_SYSTEM,
                                messageSeq: e.clientSequence,
                                messageRandom: e.random
                            };
                        })
                    }
                }).then(function() {
                    return K.log("GroupController.deleteGroupSystemNotice ok"), e.messageList.forEach(function(e) {
                        n.tim.messageController.deleteLocalMessage(e);
                    }), new gn();
                }).catch(function(e) {
                    return K.error("GroupController.deleteGroupSystemNotice error:", e), yn(e);
                })) : mn();
            }
        }, {
            key: "getGroupProfileAdvance",
            value: function(e) {
                return W(e.groupIDList) && e.groupIDList.length > 50 && (K.warn("GroupController.getGroupProfileAdvance 获取群资料的数量不能超过50个"), 
                e.groupIDList.length = 50), K.log("GroupController.getGroupProfileAdvance. groupIDList:", e.groupIDList), 
                this.request({
                    name: "group",
                    action: "query",
                    param: e
                }).then(function(e) {
                    K.log("GroupController.getGroupProfileAdvance ok.");
                    var t = e.data.groups, n = t.filter(function(e) {
                        return X(e.errorCode) || e.errorCode === Te;
                    }), r = t.filter(function(e) {
                        return e.errorCode && e.errorCode !== Te;
                    }).map(function(e) {
                        return new Ke({
                            code: Number("500".concat(e.errorCode)),
                            message: e.errorInfo,
                            data: {
                                groupID: e.groupID
                            }
                        });
                    });
                    return new gn({
                        successGroupList: n,
                        failureGroupList: r
                    });
                }).catch(function(t) {
                    return K.error("GroupController.getGroupProfileAdvance error:".concat(t, ". groupID:").concat(e.groupID)), 
                    yn(t);
                });
            }
        }, {
            key: "_deleteLocalGroup",
            value: function(e) {
                return this.groupMap.delete(e), this.groupMemberListMap.delete(e), this._setStorageGroupList(), 
                this.groupMap.has(e) && this.groupMemberListMap.has(e);
            }
        }, {
            key: "_initGroupList",
            value: function() {
                var e = this, t = new Dn();
                t.setMethod("getGroupListInStorage").setStart(), K.time(Mn), K.log("GroupController._initGroupList");
                var n = this._getStorageGroupList();
                W(n) && n.length > 0 ? (n.forEach(function(t) {
                    e.groupMap.set(t.groupID, new Jo(t));
                }), this.emitGroupListUpdate(!0, !1), t.setCode(0).setNetworkType(this.getNetworkType()).setText(this.groupMap.size).setEnd()) : t.setCode(0).setNetworkType(this.getNetworkType()).setText(0).setEnd(), 
                this.triggerReady(), K.log("GroupController._initGroupList ok. initCost=".concat(K.timeEnd(Mn), "ms")), 
                this.getGroupList();
            }
        }, {
            key: "_initListeners",
            value: function() {
                var e = this.tim.innerEmitter;
                e.once(_t, this._initGroupList, this), e.on(Zt, this._handleUpdateGroupLastMessage, this), 
                e.on(kt, this._handleReceivedGroupMessage, this), e.on(nn, this._handleProfileUpdated, this);
            }
        }, {
            key: "emitGroupListUpdate",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = this.getLocalGroups();
                n && this.emitInnerEvent(Yt, r), t && this.emitOuterEvent(e.GROUP_LIST_UPDATED, r);
            }
        }, {
            key: "_handleReceivedGroupMessage",
            value: function(e) {
                var n = this, r = e.data.eventDataList;
                Array.isArray(r) && r.forEach(function(e) {
                    var r = e.conversationID.replace(t.CONV_GROUP, "");
                    n.groupMap.has(r) && (n.groupMap.get(r).nextMessageSeq = e.lastMessage.sequence + 1);
                });
            }
        }, {
            key: "_onReceivedGroupSystemNotice",
            value: function(e) {
                var t = e.data;
                this.groupNoticeHandler._onReceivedGroupNotice(t);
            }
        }, {
            key: "_handleUpdateGroupLastMessage",
            value: function(e) {
                var n = e.data;
                if (0 !== this.groupMap.size) {
                    for (var r = !1, o = 0; o < n.length; o++) {
                        var i = n[o], s = i.type === t.CONV_GROUP;
                        if (i.conversationID && s) {
                            var a = i.conversationID.split(/^GROUP/)[1], u = this.getLocalGroupProfile(a);
                            u && (u.lastMessage = i.lastMessage, r = !0);
                        }
                    }
                    r && (this.groupMap = this._sortLocalGroupList(this.groupMap), this.emitGroupListUpdate(!0, !1));
                } else this.tempConversationList = n;
            }
        }, {
            key: "_sortLocalGroupList",
            value: function(e) {
                var t = v(e).filter(function(e) {
                    var t = y(e, 2);
                    return t[0], !Ie(t[1].lastMessage);
                });
                return t.sort(function(e, t) {
                    return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime;
                }), new Map([].concat(v(t), v(e)));
            }
        }, {
            key: "_getStorageGroupList",
            value: function() {
                return this.tim.storage.getItem("groupMap");
            }
        }, {
            key: "_setStorageGroupList",
            value: function() {
                var e = this.getLocalGroups().filter(function(e) {
                    var t = e.type;
                    return !ye(t);
                }).slice(0, 20).map(function(e) {
                    return {
                        groupID: e.groupID,
                        name: e.name,
                        avatar: e.avatar,
                        type: e.type
                    };
                });
                this.tim.storage.setItem("groupMap", e);
            }
        }, {
            key: "updateGroupMap",
            value: function(e) {
                var t = this;
                e.forEach(function(e) {
                    t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new Jo(e));
                }), this._setStorageGroupList();
            }
        }, {
            key: "_updateLocalGroupMemberMap",
            value: function(e, t) {
                var n = this;
                return W(t) && 0 !== t.length ? t.map(function(t) {
                    return n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new ui(t)), 
                    n.getLocalGroupMemberInfo(e, t.userID);
                }) : [];
            }
        }, {
            key: "deleteLocalGroupMembers",
            value: function(e, t) {
                var n = this.groupMemberListMap.get(e);
                n && t.forEach(function(e) {
                    n.delete(e);
                });
            }
        }, {
            key: "_modifyGroupMemberInfo",
            value: function(e) {
                var t = this, n = e.groupID, r = e.userID;
                return this.request({
                    name: "group",
                    action: "modifyGroupMemberInfo",
                    param: e
                }).then(function() {
                    if (t.hasLocalGroupMember(n, r)) {
                        var o = t.getLocalGroupMemberInfo(n, r);
                        return X(e.muteTime) || o.updateMuteUntil(e.muteTime), X(e.role) || o.updateRole(e.role), 
                        X(e.nameCard) || o.updateNameCard(e.nameCard), X(e.memberCustomField) || o.updateMemberCustomField(e.memberCustomField), 
                        o;
                    }
                    return t.getGroupMemberProfile({
                        groupID: n,
                        userIDList: [ r ]
                    }).then(function(e) {
                        return y(e.data.memberList, 1)[0];
                    });
                });
            }
        }, {
            key: "_groupListTreeShaking",
            value: function(e) {
                for (var t = new Map(v(this.groupMap)), n = 0, r = e.length; n < r; n++) t.delete(e[n].groupID);
                this.AVChatRoomHandler.hasJoinedAVChatRoom() && t.delete(this.AVChatRoomHandler.group.groupID);
                for (var o = v(t.keys()), i = 0, s = o.length; i < s; i++) this.groupMap.delete(o[i]);
            }
        }, {
            key: "_handleProfileUpdated",
            value: function(e) {
                for (var t = this, n = e.data, r = function(e) {
                    var r = n[e];
                    t.groupMemberListMap.forEach(function(e) {
                        e.has(r.userID) && e.get(r.userID).updateMember({
                            nick: r.nick,
                            avatar: r.avatar
                        });
                    });
                }, o = 0; o < n.length; o++) r(o);
            }
        }, {
            key: "getJoinedAVChatRoom",
            value: function() {
                return this.AVChatRoomHandler.getJoinedAVChatRoom();
            }
        }, {
            key: "deleteLocalGroupAndConversation",
            value: function(e) {
                this._deleteLocalGroup(e), this.tim.conversationController.deleteLocalConversation("GROUP".concat(e)), 
                this.emitGroupListUpdate(!0, !1);
            }
        }, {
            key: "checkJoinedAVChatRoomByID",
            value: function(e) {
                return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
            }
        }, {
            key: "getGroupLastSequence",
            value: function(e) {
                var t = this, n = new Dn();
                n.setMethod("getGroupLastSequence").setStart();
                var r = 0;
                if (this.hasLocalGroup(e)) {
                    var o = this.getLocalGroupProfile(e);
                    if (o.lastMessage.lastSequence > 0) return r = o.lastMessage.lastSequence, K.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from local group profile[lastMessage.lastSequence]. groupID=").concat(e)), 
                    n.setCode(0).setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(r, " from local group profile[lastMessage.lastSequence]. groupID=").concat(e)).setEnd(), 
                    Promise.resolve(r);
                    if (o.nextMessageSeq > 1) return r = o.nextMessageSeq - 1, K.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from local group profile[nextMessageSeq]. groupID=").concat(e)), 
                    n.setCode(0).setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(r, " from local group profile[nextMessageSeq]. groupID=").concat(e)).setEnd(), 
                    Promise.resolve(r);
                }
                var i = "GROUP".concat(e), s = this.tim.conversationController.getLocalConversation(i);
                if (s && s.lastMessage.lastSequence) return r = s.lastMessage.lastSequence, K.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from local conversation profile[lastMessage.lastSequence]. groupID=").concat(e)), 
                n.setCode(0).setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(r, " from local conversation profile[lastMessage.lastSequence]. groupID=").concat(e)).setEnd(), 
                Promise.resolve(r);
                var a = {
                    groupIDList: [ e ],
                    responseFilter: {
                        groupBaseInfoFilter: [ "NextMsgSeq" ]
                    }
                };
                return this.getGroupProfileAdvance(a).then(function(o) {
                    var i = o.data.successGroupList;
                    return r = i[0].nextMessageSeq - 1, K.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from getGroupProfileAdvance. groupID=").concat(e)), 
                    n.setCode(0).setNetworkType(t.getNetworkType()).setText("got lastSequence=".concat(r, " from getGroupProfileAdvance. groupID=").concat(e)).setEnd(), 
                    r;
                }).catch(function(r) {
                    return t.probeNetwork().then(function(t) {
                        var o = y(t, 2), i = o[0], s = o[1];
                        n.setError(r, i, s).setText("get lastSequence failed from getGroupProfileAdvance. groupID=".concat(e)).setEnd();
                    }), K.warn("GroupController.getGroupLastSequence failed. ".concat(r)), yn(r);
                });
            }
        }, {
            key: "reset",
            value: function() {
                this.groupMap.clear(), this.groupMemberListMap.clear(), this.resetReady(), this.groupNoticeHandler.reset(), 
                this.AVChatRoomHandler.reset(), this.tim.innerEmitter.once(_t, this._initGroupList, this);
            }
        } ]), r;
    }(), gi = function(n) {
        function r(e) {
            var n;
            o(this, r), (n = m(this, p(r).call(this, e))).REALTIME_MESSAGE_TIMEOUT = 11e4, n.LONGPOLLING_ID_TIMEOUT = 3e5, 
            n._currentState = t.NET_STATE_CONNECTED, n._status = {
                OPENIM: {
                    lastResponseReceivedTime: 0,
                    jitterCount: 0,
                    failedCount: 0
                },
                AVCHATROOM: {
                    lastResponseReceivedTime: 0,
                    jitterCount: 0,
                    failedCount: 0
                }
            };
            var i = n.tim.innerEmitter;
            return i.on(Rt, n._onGetLongPollIDFailed, d(n)), i.on(Lt, n._onOpenIMResponseOK, d(n)), 
            i.on(Ot, n._onOpenIMRequestFailed, d(n)), i.on($t, n._onAVChatroomResponseOK, d(n)), 
            i.on(jt, n._onAVChatroomRequestFailed, d(n)), n;
        }
        return l(r, pn), s(r, [ {
            key: "_onGetLongPollIDFailed",
            value: function() {
                this._currentState !== t.NET_STATE_DISCONNECTED && this._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED);
            }
        }, {
            key: "_onOpenIMResponseOK",
            value: function() {
                this._onResponseOK("OPENIM");
            }
        }, {
            key: "_onOpenIMRequestFailed",
            value: function() {
                this._onRequestFailed("OPENIM");
            }
        }, {
            key: "_onAVChatroomResponseOK",
            value: function() {
                this.isLoggedIn() || this._onResponseOK("AVCHATROOM");
            }
        }, {
            key: "_onAVChatroomRequestFailed",
            value: function() {
                this.isLoggedIn() || this._onRequestFailed("AVCHATROOM");
            }
        }, {
            key: "_onResponseOK",
            value: function(e) {
                var n = this._status[e], r = Date.now();
                if (0 !== n.lastResponseReceivedTime) {
                    var o = r - n.lastResponseReceivedTime;
                    if (K.debug("StatusController._onResponseOK key=".concat(e, " currentState=").concat(this._currentState, " interval=").concat(o, " failedCount=").concat(n.failedCount, " jitterCount=").concat(n.jitterCount)), 
                    n.failedCount > 0 && (n.failedCount = 0, n.jitterCount += 1, this._currentState !== t.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(t.NET_STATE_CONNECTED)), 
                    o <= this.REALTIME_MESSAGE_TIMEOUT) {
                        if (n.jitterCount >= 3) {
                            var i = new Dn();
                            i.setMethod("networkJitter").setStart(), i.setCode(0).setText("".concat(e, "-").concat(o, "-").concat(n.jitterCount)).setNetworkType(this.getNetworkType()).setEnd(), 
                            n.jitterCount = 0;
                        }
                    } else if (o >= this.REALTIME_MESSAGE_TIMEOUT && o < this.LONGPOLLING_ID_TIMEOUT) {
                        var s = new Dn();
                        s.setMethod("fastStart").setStart(), s.setCode(0).setText("".concat(e, "-").concat(o)).setNetworkType(this.getNetworkType()).setEnd(), 
                        K.warn("StatusController._onResponseOK, fast start. key=".concat(e, " interval=").concat(o, " ms")), 
                        this.emitInnerEvent(Nt);
                    } else if (o >= this.LONGPOLLING_ID_TIMEOUT) {
                        var a = new Dn();
                        a.setMethod("slowStart").setStart(), a.setCode(0).setText("".concat(e, "-").concat(o)).setNetworkType(this.getNetworkType()).setEnd(), 
                        K.warn("StatusController._onResponseOK, slow start. key=".concat(e, " interval=").concat(o, " ms")), 
                        this.emitInnerEvent(bt);
                    }
                    n.lastResponseReceivedTime = r;
                } else n.lastResponseReceivedTime = r;
            }
        }, {
            key: "_onRequestFailed",
            value: function(e) {
                var n = this, r = this._status[e];
                Date.now() - r.lastResponseReceivedTime >= this.LONGPOLLING_ID_TIMEOUT ? this._currentState !== t.NET_STATE_DISCONNECTED && (K.warn("StatusController._onRequestFailed, disconnected, longpolling unavailable more than 5min. key=".concat(e, " networkType=").concat(this.getNetworkType())), 
                this._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED)) : (r.failedCount += 1, 
                r.failedCount > 5 ? this.probeNetwork().then(function(o) {
                    var i = y(o, 2), s = i[0], a = i[1];
                    s ? (n._currentState !== t.NET_STATE_CONNECTING && n._emitNetStateChangeEvent(t.NET_STATE_CONNECTING), 
                    K.warn("StatusController._onRequestFailed, connecting, network jitter. key=".concat(e, " networkType=").concat(a))) : (n._currentState !== t.NET_STATE_DISCONNECTED && n._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED), 
                    K.warn("StatusController._onRequestFailed, disconnected, longpolling unavailable. key=".concat(e, " networkType=").concat(a))), 
                    r.failedCount = 0, r.jitterCount = 0;
                }) : this._currentState === t.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(t.NET_STATE_CONNECTING));
            }
        }, {
            key: "_emitNetStateChangeEvent",
            value: function(t) {
                K.log("StatusController._emitNetStateChangeEvent net state changed from ".concat(this._currentState, " to ").concat(t)), 
                this._currentState = t, this.emitOuterEvent(e.NET_STATE_CHANGE, {
                    state: t
                });
            }
        }, {
            key: "reset",
            value: function() {
                K.log("StatusController.reset"), this._currentState = t.NET_STATE_CONNECTED, this._status = {
                    OPENIM: {
                        lastResponseReceivedTime: 0,
                        jitterCount: 0,
                        failedCount: 0
                    },
                    AVCHATROOM: {
                        lastResponseReceivedTime: 0,
                        jitterCount: 0,
                        failedCount: 0
                    }
                };
            }
        } ]), r;
    }();
    function di() {
        return null;
    }
    var mi = function() {
        function e(t) {
            o(this, e), this.tim = t, this.isWX = k, this.storageQueue = new Map(), this.checkTimes = 0, 
            this.checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3), this._errorTolerantHandle();
        }
        return s(e, [ {
            key: "_errorTolerantHandle",
            value: function() {
                !this.isWX && X(window.localStorage) && (this.getItem = di, this.setItem = di, this.removeItem = di, 
                this.clear = di);
            }
        }, {
            key: "_onCheckTimer",
            value: function() {
                if (this.checkTimes++, this.checkTimes % 20 == 0) {
                    if (0 === this.storageQueue.size) return;
                    this._doFlush();
                }
            }
        }, {
            key: "_doFlush",
            value: function() {
                try {
                    var e = !0, t = !1, n = void 0;
                    try {
                        for (var r, o = this.storageQueue[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var i = y(r.value, 2), s = i[0], a = i[1];
                            this.isWX ? wx.setStorageSync(this._getKey(s), a) : localStorage.setItem(this._getKey(s), JSON.stringify(a));
                        }
                    } catch (e) {
                        t = !0, n = e;
                    } finally {
                        try {
                            e || null == o.return || o.return();
                        } finally {
                            if (t) throw n;
                        }
                    }
                    this.storageQueue.clear();
                } catch (e) {
                    K.warn("Storage._doFlush error", e);
                }
            }
        }, {
            key: "_getPrefix",
            value: function() {
                var e = this.tim.loginInfo, t = e.SDKAppID, n = e.identifier;
                return "TIM_".concat(t, "_").concat(n, "_");
            }
        }, {
            key: "getItem",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    var n = t ? this._getKey(e) : e;
                    return this.isWX ? wx.getStorageSync(n) : JSON.parse(localStorage.getItem(n));
                } catch (e) {
                    K.warn("Storage.getItem error:", e);
                }
            }
        }, {
            key: "setItem",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (n) {
                    var o = r ? this._getKey(e) : e;
                    this.isWX ? wx.setStorageSync(o, t) : localStorage.setItem(o, JSON.stringify(t));
                } else this.storageQueue.set(e, t);
            }
        }, {
            key: "clear",
            value: function() {
                try {
                    this.isWX ? wx.clearStorageSync() : localStorage.clear();
                } catch (e) {
                    K.warn("Storage.clear error:", e);
                }
            }
        }, {
            key: "removeItem",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    var n = t ? this._getKey(e) : e;
                    this.isWX ? wx.removeStorageSync(n) : localStorage.removeItem(n);
                } catch (e) {
                    K.warn("Storage.removeItem error:", e);
                }
            }
        }, {
            key: "getSize",
            value: function(e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b";
                try {
                    var r = {
                        size: 0,
                        limitSize: 5242880,
                        unit: n
                    };
                    if (Object.defineProperty(r, "leftSize", {
                        enumerable: !0,
                        get: function() {
                            return r.limitSize - r.size;
                        }
                    }), this.isWX && (r.limitSize = 1024 * wx.getStorageInfoSync().limitSize), e) r.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length; else if (this.isWX) {
                        wx.getStorageInfoSync().keys.forEach(function(e) {
                            r.size += JSON.stringify(wx.getStorageSync(e)).length + t._getKey(e).length;
                        });
                    } else for (var o in localStorage) localStorage.hasOwnProperty(o) && (r.size += localStorage.getItem(o).length + o.length);
                    return this._convertUnit(r);
                } catch (e) {
                    K.warn("Storage.getSize error:", e);
                }
            }
        }, {
            key: "_convertUnit",
            value: function(e) {
                var t = {}, n = e.unit;
                for (var r in t.unit = n, e) "number" == typeof e[r] && ("kb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024) : "mb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024 / 1024) : t[r] = e[r]);
                return t;
            }
        }, {
            key: "_getKey",
            value: function(e) {
                return "".concat(this._getPrefix()).concat(e);
            }
        }, {
            key: "reset",
            value: function() {
                this._doFlush(), this.checkTimes = 0;
            }
        } ]), e;
    }(), yi = I(function(e) {
        var t = Object.prototype.hasOwnProperty, n = "~";
        function r() {}
        function o(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1;
        }
        function i(e, t, r, i, s) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var a = new o(r, i || e, s), u = n ? n + t : t;
            return e._events[u] ? e._events[u].fn ? e._events[u] = [ e._events[u], a ] : e._events[u].push(a) : (e._events[u] = a, 
            e._eventsCount++), e;
        }
        function s(e, t) {
            0 == --e._eventsCount ? e._events = new r() : delete e._events[t];
        }
        function a() {
            this._events = new r(), this._eventsCount = 0;
        }
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1)), 
        a.prototype.eventNames = function() {
            var e, r, o = [];
            if (0 === this._eventsCount) return o;
            for (r in e = this._events) t.call(e, r) && o.push(n ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
        }, a.prototype.listeners = function(e) {
            var t = n ? n + e : e, r = this._events[t];
            if (!r) return [];
            if (r.fn) return [ r.fn ];
            for (var o = 0, i = r.length, s = new Array(i); o < i; o++) s[o] = r[o].fn;
            return s;
        }, a.prototype.listenerCount = function(e) {
            var t = n ? n + e : e, r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0;
        }, a.prototype.emit = function(e, t, r, o, i, s) {
            var a = n ? n + e : e;
            if (!this._events[a]) return !1;
            var u, c, l = this._events[a], p = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
                  case 1:
                    return l.fn.call(l.context), !0;

                  case 2:
                    return l.fn.call(l.context, t), !0;

                  case 3:
                    return l.fn.call(l.context, t, r), !0;

                  case 4:
                    return l.fn.call(l.context, t, r, o), !0;

                  case 5:
                    return l.fn.call(l.context, t, r, o, i), !0;

                  case 6:
                    return l.fn.call(l.context, t, r, o, i, s), !0;
                }
                for (c = 1, u = new Array(p - 1); c < p; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u);
            } else {
                var h, f = l.length;
                for (c = 0; c < f; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), 
                p) {
                  case 1:
                    l[c].fn.call(l[c].context);
                    break;

                  case 2:
                    l[c].fn.call(l[c].context, t);
                    break;

                  case 3:
                    l[c].fn.call(l[c].context, t, r);
                    break;

                  case 4:
                    l[c].fn.call(l[c].context, t, r, o);
                    break;

                  default:
                    if (!u) for (h = 1, u = new Array(p - 1); h < p; h++) u[h - 1] = arguments[h];
                    l[c].fn.apply(l[c].context, u);
                }
            }
            return !0;
        }, a.prototype.on = function(e, t, n) {
            return i(this, e, t, n, !1);
        }, a.prototype.once = function(e, t, n) {
            return i(this, e, t, n, !0);
        }, a.prototype.removeListener = function(e, t, r, o) {
            var i = n ? n + e : e;
            if (!this._events[i]) return this;
            if (!t) return s(this, i), this;
            var a = this._events[i];
            if (a.fn) a.fn !== t || o && !a.once || r && a.context !== r || s(this, i); else {
                for (var u = 0, c = [], l = a.length; u < l; u++) (a[u].fn !== t || o && !a[u].once || r && a[u].context !== r) && c.push(a[u]);
                c.length ? this._events[i] = 1 === c.length ? c[0] : c : s(this, i);
            }
            return this;
        }, a.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new r(), 
            this._eventsCount = 0), this;
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, 
        a.prefixed = n, a.EventEmitter = a, e.exports = a;
    }), vi = function(e) {
        var t, n, r, o, i;
        return Ie(e.context) ? (t = "", n = 0, r = 0, o = 0, i = 1) : (t = e.context.a2Key, 
        n = e.context.tinyID, r = e.context.SDKAppID, o = e.context.contentType, i = e.context.apn), 
        {
            platform: ht,
            websdkappid: pt,
            v: lt,
            a2: t,
            tinyid: n,
            sdkappid: r,
            contentType: o,
            apn: i,
            reqtime: function() {
                return +new Date();
            }
        };
    }, _i = function() {
        function e(t) {
            o(this, e), this.tim = t, this.tim.innerEmitter.on(yt, this._update, this), this.tim.innerEmitter.on(vt, this._update, this), 
            this.tim.innerEmitter.on(Ct, this._updateSpecifiedConfig, this), this._initConfig();
        }
        return s(e, [ {
            key: "_update",
            value: function(e) {
                this._initConfig();
            }
        }, {
            key: "_updateSpecifiedConfig",
            value: function(e) {
                var t = this;
                e.data.forEach(function(e) {
                    t._set(e);
                });
            }
        }, {
            key: "get",
            value: function(e) {
                var t = e.name, r = e.action, o = e.param, i = e.tjgID;
                if (X(this.config[t]) || X(this.config[t][r])) throw new Ke({
                    code: 2804,
                    message: "".concat("未定义的 packageConfig", ": PackageConfig.").concat(t)
                });
                var s = function e(t) {
                    if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null);
                    var r = Array.isArray(t) ? [] : Object.create(null), o = "";
                    for (var i in t) null !== t[i] ? void 0 !== t[i] ? (o = n(t[i]), [ "string", "number", "function", "boolean" ].indexOf(o) >= 0 ? r[i] = t[i] : r[i] = e(t[i])) : r[i] = void 0 : r[i] = null;
                    return r;
                }(this.config[t][r]);
                return s.requestData = this._initRequestData(o, s), s.encode = this._initEncoder(s), 
                s.decode = this._initDecoder(s), i && (s.queryString.tjg_id = i), s;
            }
        }, {
            key: "_set",
            value: function(e) {
                var t = e.key, r = e.value;
                if (0 != !!t) {
                    var o = t.split(".");
                    o.length <= 0 || function e(t, r, o, i) {
                        var s = r[o];
                        "object" === n(t[s]) ? e(t[s], r, o + 1, i) : t[s] = i;
                    }(this.config, o, 0, r);
                }
            }
        }, {
            key: "_initConfig",
            value: function() {
                var e;
                this.config = {}, this.config.accessLayer = (e = this.tim, {
                    create: null,
                    query: {
                        serverName: dt.NAME.WEB_IM,
                        cmd: dt.CMD.ACCESS_LAYER,
                        channel: dt.CHANNEL.XHR,
                        protocol: gt,
                        method: "POST",
                        queryString: {
                            platform: ht,
                            identifier: e.context.identifier,
                            usersig: e.context.userSig,
                            contentType: e.context.contentType,
                            apn: null !== e.context ? e.context.apn : 1,
                            websdkappid: pt,
                            v: lt
                        },
                        requestData: {}
                    },
                    update: null,
                    delete: null
                }), this.config.login = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.LOGIN,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                identifier: e.loginInfo.identifier,
                                usersig: e.loginInfo.userSig,
                                sdkappid: e.loginInfo.SDKAppID,
                                accounttype: e.loginInfo.accountType,
                                contentType: null !== e.context ? e.context.contentType : 0,
                                apn: null !== e.context ? e.context.apn : 1,
                                reqtime: +new Date() / 1e3
                            },
                            requestData: {
                                state: "Online"
                            },
                            keyMaps: {
                                request: {
                                    tinyID: "tinyId"
                                },
                                response: {
                                    TinyId: "tinyID"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.logout = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.LOGOUT_ALL,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                a2: null !== e.context ? e.context.a2Key : "",
                                tinyid: null !== e.context ? e.context.tinyID : "",
                                sdkappid: null !== e.loginInfo ? e.loginInfo.SDKAppID : 0,
                                contentType: null !== e.context ? e.context.contentType : 0,
                                apn: null !== e.context ? e.context.apn : "",
                                reqtime: +new Date() / 1e3
                            },
                            requestData: {}
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.longPollLogout = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.LOGOUT_LONG_POLL,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                a2: null !== e.context ? e.context.a2Key : "",
                                tinyid: null !== e.context ? e.context.tinyID : 0,
                                sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                                contentType: null !== e.context ? e.context.contentType : 0,
                                apn: null !== e.context ? e.context.apn : 1,
                                reqtime: function() {
                                    return Date.now();
                                }
                            },
                            requestData: {
                                longPollID: ""
                            },
                            keyMaps: {
                                request: {
                                    longPollID: "LongPollingId"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.profile = function(e) {
                    var t = vi(e), n = dt.NAME.PROFILE, r = dt.CHANNEL.XHR, o = gt;
                    return {
                        query: {
                            serverName: n,
                            cmd: dt.CMD.PORTRAIT_GET,
                            channel: r,
                            protocol: o,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                userItem: []
                            },
                            keyMaps: {
                                request: {
                                    toAccount: "To_Account",
                                    standardSequence: "StandardSequence",
                                    customSequence: "CustomSequence"
                                }
                            }
                        },
                        update: {
                            serverName: n,
                            cmd: dt.CMD.PORTRAIT_SET,
                            channel: r,
                            protocol: o,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                profileItem: [ {
                                    tag: Oe.NICK,
                                    value: ""
                                }, {
                                    tag: Oe.GENDER,
                                    value: ""
                                }, {
                                    tag: Oe.ALLOWTYPE,
                                    value: ""
                                }, {
                                    tag: Oe.AVATAR,
                                    value: ""
                                } ]
                            }
                        }
                    };
                }(this.tim), this.config.group = function(e) {
                    var n = {
                        websdkappid: pt,
                        v: lt,
                        platform: ht,
                        a2: null !== e.context && e.context.a2Key ? e.context.a2Key : void 0,
                        tinyid: null !== e.context && e.context.tinyID ? e.context.tinyID : void 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        accounttype: null !== e.context ? e.context.accountType : 0
                    }, r = {
                        request: {
                            ownerID: "Owner_Account",
                            userID: "Member_Account",
                            newOwnerID: "NewOwner_Account",
                            maxMemberNum: "MaxMemberCount",
                            groupCustomField: "AppDefinedData",
                            memberCustomField: "AppMemberDefinedData",
                            groupCustomFieldFilter: "AppDefinedDataFilter_Group",
                            memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember",
                            messageRemindType: "MsgFlag",
                            userIDList: "MemberList",
                            groupIDList: "GroupIdList",
                            applyMessage: "ApplyMsg",
                            muteTime: "ShutUpTime",
                            joinOption: "ApplyJoinOption"
                        },
                        response: {
                            GroupIdList: "groups",
                            MsgFlag: "messageRemindType",
                            AppDefinedData: "groupCustomField",
                            AppMemberDefinedData: "memberCustomField",
                            AppDefinedDataFilter_Group: "groupCustomFieldFilter",
                            AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                            InfoSeq: "infoSequence",
                            MemberList: "members",
                            GroupInfo: "groups",
                            ShutUpUntil: "muteUntil",
                            ApplyJoinOption: "joinOption"
                        }
                    };
                    return {
                        create: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.CREATE_GROUP,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                type: t.GRP_PRIVATE,
                                name: void 0,
                                groupID: void 0,
                                ownerID: e.loginInfo.identifier,
                                introduction: void 0,
                                notification: void 0,
                                avatar: void 0,
                                maxMemberNum: void 0,
                                joinOption: void 0,
                                memberList: void 0,
                                groupCustomField: void 0
                            },
                            keyMaps: r
                        },
                        list: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.GET_JOINED_GROUPS,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                userID: e.loginInfo.identifier,
                                limit: void 0,
                                offset: void 0,
                                groupType: void 0,
                                responseFilter: void 0
                            },
                            keyMaps: r
                        },
                        query: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.GET_GROUP_INFO,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupIDList: void 0,
                                responseFilter: void 0
                            },
                            keyMaps: r
                        },
                        getGroupMemberProfile: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.GET_GROUP_MEMBER_INFO,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                userIDList: void 0,
                                memberInfoFilter: void 0,
                                memberCustomFieldFilter: void 0
                            },
                            keyMaps: {
                                request: c({}, r.request, {
                                    userIDList: "Member_List_Account"
                                }),
                                response: r.response
                            }
                        },
                        getGroupMemberList: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.GET_GROUP_MEMBER_LIST,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                limit: 0,
                                offset: 0,
                                memberRoleFilter: void 0,
                                memberInfoFilter: void 0
                            },
                            keyMaps: r
                        },
                        quitGroup: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.QUIT_GROUP,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0
                            }
                        },
                        changeGroupOwner: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.CHANGE_GROUP_OWNER,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                newOwnerID: void 0
                            },
                            keyMaps: r
                        },
                        destroyGroup: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.DESTROY_GROUP,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0
                            }
                        },
                        updateGroupProfile: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.MODIFY_GROUP_INFO,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                name: void 0,
                                introduction: void 0,
                                notification: void 0,
                                avatar: void 0,
                                maxMemberNum: void 0,
                                joinOption: void 0,
                                groupCustomField: void 0
                            },
                            keyMaps: {
                                request: c({}, r.request, {
                                    groupCustomField: "AppDefinedData"
                                }),
                                response: r.response
                            }
                        },
                        modifyGroupMemberInfo: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.MODIFY_GROUP_MEMBER_INFO,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                userID: void 0,
                                messageRemindType: void 0,
                                nameCard: void 0,
                                role: void 0,
                                memberCustomField: void 0,
                                muteTime: void 0
                            },
                            keyMaps: r
                        },
                        addGroupMember: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.ADD_GROUP_MEMBER,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                silence: void 0,
                                userIDList: void 0
                            },
                            keyMaps: r
                        },
                        deleteGroupMember: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.DELETE_GROUP_MEMBER,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                userIDList: void 0,
                                reason: void 0
                            },
                            keyMaps: {
                                request: {
                                    userIDList: "MemberToDel_Account"
                                }
                            }
                        },
                        searchGroupByID: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.SEARCH_GROUP_BY_ID,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupIDList: void 0,
                                responseFilter: {
                                    groupBasePublicInfoFilter: [ "Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption" ]
                                }
                            },
                            keyMaps: {
                                request: {
                                    groupIDList: "GroupIdList"
                                }
                            }
                        },
                        applyJoinGroup: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.APPLY_JOIN_GROUP,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                applyMessage: void 0,
                                userDefinedField: void 0
                            },
                            keyMaps: r
                        },
                        applyJoinAVChatRoom: {
                            serverName: dt.NAME.BIG_GROUP_NO_AUTH,
                            cmd: dt.CMD.APPLY_JOIN_GROUP,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                                contentType: null !== e.context ? e.context.contentType : 0,
                                accounttype: null !== e.context ? e.context.accountType : 0
                            },
                            requestData: {
                                groupID: void 0,
                                applyMessage: void 0,
                                userDefinedField: void 0
                            },
                            keyMaps: r
                        },
                        handleApplyJoinGroup: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.HANDLE_APPLY_JOIN_GROUP,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                applicant: void 0,
                                handleAction: void 0,
                                handleMessage: void 0,
                                authentication: void 0,
                                messageKey: void 0,
                                userDefinedField: void 0
                            },
                            keyMaps: {
                                request: {
                                    applicant: "Applicant_Account",
                                    handleAction: "HandleMsg",
                                    handleMessage: "ApprovalMsg",
                                    messageKey: "MsgKey"
                                },
                                response: {
                                    MsgKey: "messageKey"
                                }
                            }
                        },
                        deleteGroupSystemNotice: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.DELETE_GROUP_SYSTEM_MESSAGE,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                messageListToDelete: void 0
                            },
                            keyMaps: {
                                request: {
                                    messageListToDelete: "DelMsgList",
                                    messageSeq: "MsgSeq",
                                    messageRandom: "MsgRandom"
                                }
                            }
                        },
                        getGroupPendency: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.GET_GROUP_PENDENCY,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: n,
                            requestData: {
                                startTime: void 0,
                                limit: void 0,
                                handleAccount: void 0
                            },
                            keyMaps: {
                                request: {
                                    handleAccount: "Handle_Account"
                                }
                            }
                        }
                    };
                }(this.tim), this.config.longPollID = function(e) {
                    return {
                        create: {},
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.GET_LONG_POLL_ID,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                a2: null !== e.context ? e.context.a2Key : "",
                                tinyid: null !== e.context ? e.context.tinyID : 0,
                                sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                                contentType: null !== e.context ? e.context.contentType : 0,
                                apn: null !== e.context ? e.context.apn : 1,
                                reqtime: +new Date() / 1e3
                            },
                            requestData: {},
                            keyMaps: {
                                response: {
                                    LongPollingId: "longPollingID"
                                }
                            }
                        },
                        update: {},
                        delete: {}
                    };
                }(this.tim), this.config.longPoll = function(e) {
                    var t = {
                        websdkappid: pt,
                        v: lt,
                        platform: ht,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        accounttype: null !== e.context ? e.loginInfo.accountType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: Math.ceil(+new Date() / 1e3)
                    };
                    return {
                        create: {},
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.LONG_POLL,
                            channel: dt.CHANNEL.AUTO,
                            protocol: gt,
                            queryString: t,
                            requestData: {
                                timeout: null,
                                cookie: {
                                    notifySeq: 0,
                                    noticeSeq: 0,
                                    longPollingID: 0
                                }
                            },
                            keyMaps: {
                                response: {
                                    C2cMsgArray: "C2CMessageArray",
                                    GroupMsgArray: "groupMessageArray",
                                    GroupTips: "groupTips",
                                    C2cNotifyMsgArray: "C2CNotifyMessageArray",
                                    ClientSeq: "clientSequence",
                                    MsgPriority: "priority",
                                    NoticeSeq: "noticeSequence",
                                    MsgContent: "content",
                                    MsgType: "type",
                                    MsgBody: "elements",
                                    ToGroupId: "to",
                                    Desc: "description",
                                    Ext: "extension"
                                }
                            }
                        },
                        update: {},
                        delete: {}
                    };
                }(this.tim), this.config.applyC2C = function(e) {
                    var t = vi(e), n = dt.NAME.FRIEND, r = dt.CHANNEL.XHR, o = gt;
                    return {
                        create: {
                            serverName: n,
                            cmd: dt.CMD.FRIEND_ADD,
                            channel: r,
                            protocol: o,
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                addFriendItem: []
                            }
                        },
                        get: {
                            serverName: n,
                            cmd: dt.CMD.GET_PENDENCY,
                            channel: r,
                            protocol: o,
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                pendencyType: "Pendency_Type_ComeIn"
                            }
                        },
                        update: {
                            serverName: n,
                            cmd: dt.CMD.RESPONSE_PENDENCY,
                            channel: r,
                            protocol: o,
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                responseFriendItem: []
                            }
                        },
                        delete: {
                            serverName: n,
                            cmd: dt.CMD.DELETE_PENDENCY,
                            channel: r,
                            protocol: o,
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                toAccount: [],
                                pendencyType: "Pendency_Type_ComeIn"
                            }
                        }
                    };
                }(this.tim), this.config.friend = function(e) {
                    var t = vi(e), n = dt.NAME.FRIEND, r = dt.CHANNEL.XHR, o = gt;
                    return {
                        get: {
                            serverName: n,
                            cmd: dt.CMD.FRIEND_GET_ALL,
                            channel: r,
                            protocol: o,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                timeStamp: 0,
                                startIndex: 0,
                                getCount: 100,
                                lastStandardSequence: 0,
                                tagList: [ "Tag_Profile_IM_Nick", "Tag_SNS_IM_Remark" ]
                            },
                            keyMaps: {
                                request: {},
                                response: {}
                            }
                        },
                        delete: {
                            serverName: n,
                            cmd: dt.CMD.FRIEND_DELETE,
                            channel: r,
                            protocol: o,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                toAccount: [],
                                deleteType: "Delete_Type_Single"
                            }
                        }
                    };
                }(this.tim), this.config.blacklist = function(e) {
                    var t = vi(e);
                    return {
                        create: {
                            serverName: dt.NAME.FRIEND,
                            cmd: dt.CMD.ADD_BLACKLIST,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                toAccount: []
                            }
                        },
                        get: {
                            serverName: dt.NAME.FRIEND,
                            cmd: dt.CMD.GET_BLACKLIST,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                startIndex: 0,
                                maxLimited: 30,
                                lastSequence: 0
                            }
                        },
                        delete: {
                            serverName: dt.NAME.FRIEND,
                            cmd: dt.CMD.DELETE_BLACKLIST,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: "",
                                toAccount: []
                            }
                        },
                        update: {}
                    };
                }(this.tim), this.config.c2cMessage = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function() {
                            return +new Date();
                        }
                    }, n = {
                        request: {
                            fromAccount: "From_Account",
                            toAccount: "To_Account",
                            msgTimeStamp: "MsgTimeStamp",
                            msgSeq: "MsgSeq",
                            msgRandom: "MsgRandom",
                            msgBody: "MsgBody",
                            count: "MaxCnt",
                            lastMessageTime: "LastMsgTime",
                            messageKey: "MsgKey",
                            peerAccount: "Peer_Account",
                            data: "Data",
                            description: "Desc",
                            extension: "Ext",
                            type: "MsgType",
                            content: "MsgContent",
                            sizeType: "Type",
                            uuid: "UUID",
                            imageUrl: "URL",
                            fileUrl: "Url",
                            remoteAudioUrl: "Url",
                            remoteVideoUrl: "VideoUrl",
                            thumbUUID: "ThumbUUID",
                            videoUUID: "VideoUUID",
                            videoUrl: "",
                            downloadFlag: "Download_Flag"
                        },
                        response: {
                            MsgContent: "content",
                            MsgTime: "time",
                            Data: "data",
                            Desc: "description",
                            Ext: "extension",
                            MsgKey: "messageKey",
                            MsgType: "type",
                            MsgBody: "elements",
                            Download_Flag: "downloadFlag"
                        }
                    };
                    return {
                        create: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.SEND_MESSAGE,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: e.loginInfo.identifier,
                                toAccount: "",
                                msgTimeStamp: Math.ceil(+new Date() / 1e3),
                                msgSeq: 0,
                                msgRandom: 0,
                                msgBody: []
                            },
                            keyMaps: n
                        },
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.GET_C2C_ROAM_MESSAGES,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                peerAccount: "",
                                count: 15,
                                lastMessageTime: 0,
                                messageKey: "",
                                withRecalledMsg: 1
                            },
                            keyMaps: n
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.c2cMessageWillBeRevoked = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function() {
                            return +new Date();
                        }
                    };
                    return {
                        create: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.REVOKE_C2C_MESSAGE,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                msgInfo: {
                                    fromAccount: "",
                                    toAccount: "",
                                    msgTimeStamp: Math.ceil(+new Date() / 1e3),
                                    msgSeq: 0,
                                    msgRandom: 0
                                }
                            },
                            keyMaps: {
                                request: {
                                    msgInfo: "MsgInfo",
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    msgTimeStamp: "MsgTimeStamp",
                                    msgSeq: "MsgSeq",
                                    msgRandom: "MsgRandom",
                                    msgBody: "MsgBody"
                                }
                            }
                        }
                    };
                }(this.tim), this.config.groupMessage = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function() {
                            return +new Date();
                        }
                    }, n = {
                        request: {
                            to: "GroupId",
                            extension: "Ext",
                            data: "Data",
                            description: "Desc",
                            random: "Random",
                            sequence: "ReqMsgSeq",
                            count: "ReqMsgNumber",
                            type: "MsgType",
                            priority: "MsgPriority",
                            content: "MsgContent",
                            elements: "MsgBody",
                            sizeType: "Type",
                            uuid: "UUID",
                            imageUrl: "URL",
                            fileUrl: "Url",
                            remoteAudioUrl: "Url",
                            remoteVideoUrl: "VideoUrl",
                            thumbUUID: "ThumbUUID",
                            videoUUID: "VideoUUID",
                            videoUrl: "",
                            downloadFlag: "Download_Flag",
                            clientSequence: "ClientSeq"
                        },
                        response: {
                            Random: "random",
                            MsgTime: "time",
                            MsgSeq: "sequence",
                            ReqMsgSeq: "sequence",
                            RspMsgList: "messageList",
                            IsPlaceMsg: "isPlaceMessage",
                            IsSystemMsg: "isSystemMessage",
                            ToGroupId: "to",
                            EnumFrom_AccountType: "fromAccountType",
                            EnumTo_AccountType: "toAccountType",
                            GroupCode: "groupCode",
                            MsgPriority: "priority",
                            MsgBody: "elements",
                            MsgType: "type",
                            MsgContent: "content",
                            IsFinished: "complete",
                            Download_Flag: "downloadFlag",
                            ClientSeq: "clientSequence"
                        }
                    };
                    return {
                        create: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.SEND_GROUP_MESSAGE,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                groupID: "",
                                fromAccount: e.loginInfo.identifier,
                                random: 0,
                                clientSequence: 0,
                                priority: "",
                                msgBody: []
                            },
                            keyMaps: n
                        },
                        query: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.GET_GROUP_ROAM_MESSAGES,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                withRecalledMsg: 1,
                                groupID: "",
                                count: 15,
                                sequence: ""
                            },
                            keyMaps: n
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.groupMessageWillBeRevoked = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function() {
                            return +new Date();
                        }
                    };
                    return {
                        create: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.REVOKE_GROUP_MESSAGE,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                to: "",
                                msgSeqList: []
                            },
                            keyMaps: {
                                request: {
                                    to: "GroupId",
                                    msgSeqList: "MsgSeqList",
                                    msgSeq: "MsgSeq"
                                }
                            }
                        }
                    };
                }(this.tim), this.config.conversation = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1
                    };
                    return {
                        query: {
                            serverName: dt.NAME.RECENT_CONTACT,
                            cmd: dt.CMD.GET_CONVERSATION_LIST,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: e.loginInfo.identifier,
                                count: 0
                            },
                            keyMaps: {
                                request: {},
                                response: {
                                    SessionItem: "conversations",
                                    ToAccount: "groupID",
                                    To_Account: "userID",
                                    UnreadMsgCount: "unreadCount",
                                    MsgGroupReadedSeq: "messageReadSeq"
                                }
                            }
                        },
                        pagingQuery: {
                            serverName: dt.NAME.RECENT_CONTACT,
                            cmd: dt.CMD.PAGING_GET_CONVERSATION_LIST,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: void 0,
                                timeStamp: void 0,
                                orderType: void 0
                            },
                            keyMaps: {
                                request: {},
                                response: {
                                    SessionItem: "conversations",
                                    ToAccount: "groupID",
                                    To_Account: "userID",
                                    UnreadMsgCount: "unreadCount",
                                    MsgGroupReadedSeq: "messageReadSeq"
                                }
                            }
                        },
                        delete: {
                            serverName: dt.NAME.RECENT_CONTACT,
                            cmd: dt.CMD.DELETE_CONVERSATION,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                fromAccount: e.loginInfo.identifier,
                                toAccount: void 0,
                                type: 1,
                                toGroupID: void 0
                            },
                            keyMaps: {
                                request: {
                                    toGroupID: "ToGroupid"
                                }
                            }
                        },
                        setC2CMessageRead: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.SET_C2C_MESSAGE_READ,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                C2CMsgReaded: void 0
                            },
                            keyMaps: {
                                request: {
                                    lastMessageTime: "LastedMsgTime"
                                }
                            }
                        },
                        setGroupMessageRead: {
                            serverName: dt.NAME.GROUP,
                            cmd: dt.CMD.SET_GROUP_MESSAGE_READ,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                groupID: void 0,
                                messageReadSeq: void 0
                            },
                            keyMaps: {
                                request: {
                                    messageReadSeq: "MsgReadedSeq"
                                }
                            }
                        }
                    };
                }(this.tim), this.config.syncMessage = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function() {
                            return [ Math.ceil(+new Date()), Math.random() ].join("");
                        }
                    };
                    return {
                        create: null,
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.GET_MESSAGES,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                cookie: "",
                                syncFlag: 0,
                                needAbstract: 1
                            },
                            keyMaps: {
                                request: {
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    from: "From_Account",
                                    to: "To_Account",
                                    time: "MsgTimeStamp",
                                    sequence: "MsgSeq",
                                    random: "MsgRandom",
                                    elements: "MsgBody"
                                },
                                response: {
                                    MsgList: "messageList",
                                    SyncFlag: "syncFlag",
                                    To_Account: "to",
                                    From_Account: "from",
                                    ClientSeq: "clientSequence",
                                    MsgSeq: "sequence",
                                    NoticeSeq: "noticeSequence",
                                    NotifySeq: "notifySequence",
                                    MsgRandom: "random",
                                    MsgTimeStamp: "time",
                                    MsgContent: "content",
                                    ToGroupId: "groupID",
                                    MsgKey: "messageKey",
                                    GroupTips: "groupTips",
                                    MsgBody: "elements",
                                    MsgType: "type",
                                    C2CRemainingUnreadCount: "C2CRemainingUnreadList"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.AVChatRoom = function(e) {
                    return {
                        startLongPoll: {
                            serverName: dt.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH,
                            cmd: dt.CMD.AVCHATROOM_LONG_POLL,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                sdkappid: e.loginInfo.SDKAppID,
                                accounttype: "792",
                                apn: null !== e.context ? e.context.apn : 1,
                                reqtime: function() {
                                    return +new Date();
                                }
                            },
                            requestData: {
                                USP: 1,
                                startSeq: 1,
                                holdTime: 90,
                                key: void 0
                            },
                            keyMaps: {
                                request: {
                                    USP: "USP"
                                },
                                response: {
                                    ToGroupId: "groupID",
                                    MsgPriority: "priority"
                                }
                            }
                        }
                    };
                }(this.tim), this.config.cosUpload = function(e) {
                    var t = {
                        platform: ht,
                        websdkappid: pt,
                        v: lt,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType: null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function() {
                            return Date.now();
                        }
                    };
                    return {
                        create: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.FILE_UPLOAD,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                appVersion: "2.1",
                                fromAccount: "",
                                toAccount: "",
                                sequence: 0,
                                time: function() {
                                    return Math.ceil(Date.now() / 1e3);
                                },
                                random: function() {
                                    return ue();
                                },
                                fileStrMd5: "",
                                fileSize: "",
                                serverVer: 1,
                                authKey: "",
                                busiId: 1,
                                pkgFlag: 1,
                                sliceOffset: 0,
                                sliceSize: 0,
                                sliceData: "",
                                contentType: "application/x-www-form-urlencoded"
                            },
                            keyMaps: {
                                request: {},
                                response: {}
                            }
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.cosSig = function(e) {
                    var t = {
                        sdkappid: function() {
                            return e.loginInfo.SDKAppID;
                        },
                        identifier: function() {
                            return e.loginInfo.identifier;
                        },
                        userSig: function() {
                            return e.context.userSig;
                        }
                    };
                    return {
                        create: null,
                        query: {
                            serverName: dt.NAME.IM_COS_SIGN,
                            cmd: dt.CMD.COS_SIGN,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                cmd: "open_im_cos_svc",
                                subCmd: "get_cos_token",
                                duration: 300,
                                version: 2
                            },
                            keyMaps: {
                                request: {
                                    userSig: "usersig",
                                    subCmd: "sub_cmd",
                                    cmd: "cmd",
                                    duration: "duration",
                                    version: "version"
                                },
                                response: {
                                    expired_time: "expiredTime",
                                    bucket_name: "bucketName",
                                    session_token: "sessionToken",
                                    tmp_secret_id: "secretId",
                                    tmp_secret_key: "secretKey"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    };
                }(this.tim), this.config.bigDataHallwayAuthKey = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: dt.NAME.OPEN_IM,
                            cmd: dt.CMD.BIG_DATA_HALLWAY_AUTH_KEY,
                            channel: dt.CHANNEL.XHR,
                            protocol: gt,
                            method: "POST",
                            queryString: {
                                websdkappid: pt,
                                v: lt,
                                platform: ht,
                                sdkappid: e.loginInfo.SDKAppID,
                                accounttype: "792",
                                apn: null !== e.context ? e.context.apn : 1,
                                reqtime: function() {
                                    return +new Date();
                                }
                            },
                            requestData: {}
                        }
                    };
                }(this.tim), this.config.ssoEventStat = function(e) {
                    var t = {
                        sdkappid: e.loginInfo.SDKAppID,
                        reqtime: Math.ceil(+new Date() / 1e3)
                    };
                    return {
                        create: {
                            serverName: dt.NAME.IM_OPEN_STAT,
                            cmd: dt.CMD.TIM_WEB_REPORT,
                            channel: dt.CHANNEL.AUTO,
                            protocol: gt,
                            queryString: t,
                            requestData: {
                                table: "",
                                report: []
                            },
                            keyMaps: {
                                request: {
                                    table: "table",
                                    report: "report",
                                    SDKAppID: "sdkappid",
                                    version: "version",
                                    tinyID: "tinyid",
                                    userID: "userid",
                                    platform: "platform",
                                    method: "method",
                                    time: "time",
                                    start: "start",
                                    end: "end",
                                    cost: "cost",
                                    status: "status",
                                    codeint: "codeint",
                                    message: "message",
                                    pointer: "pointer",
                                    text: "text",
                                    msgType: "msgtype",
                                    networkType: "networktype",
                                    startts: "startts",
                                    endts: "endts",
                                    timespan: "timespan"
                                }
                            }
                        },
                        query: {},
                        update: {},
                        delete: {}
                    };
                }(this.tim), this.config.ssoSumStat = function(e) {
                    var t = null;
                    return null !== e.context && (t = {
                        sdkappid: e.context.SDKAppID,
                        reqtime: Math.ceil(+new Date() / 1e3)
                    }), {
                        create: {
                            serverName: dt.NAME.IM_OPEN_STAT,
                            cmd: dt.CMD.TIM_WEB_REPORT,
                            channel: dt.CHANNEL.AUTO,
                            protocol: gt,
                            queryString: t,
                            requestData: {
                                table: "",
                                report: []
                            },
                            keyMaps: {
                                request: {
                                    table: "table",
                                    report: "report",
                                    SDKAppID: "sdkappid",
                                    version: "version",
                                    tinyID: "tinyid",
                                    userID: "userid",
                                    item: "item",
                                    lpID: "lpid",
                                    platform: "platform",
                                    networkType: "networktype",
                                    total: "total",
                                    successRate: "successrate",
                                    avg: "avg",
                                    timespan: "timespan",
                                    time: "time"
                                }
                            }
                        },
                        query: {},
                        update: {},
                        delete: {}
                    };
                }(this.tim);
            }
        }, {
            key: "_initRequestData",
            value: function(e, t) {
                if (void 0 === e) return un(t.requestData, this._getRequestMap(t), this.tim);
                var n = t.requestData, r = Object.create(null);
                for (var o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
                    if (r[o] = "function" == typeof n[o] ? n[o]() : n[o], void 0 === e[o]) continue;
                    r[o] = e[o];
                }
                return un(r, this._getRequestMap(t), this.tim);
            }
        }, {
            key: "_getRequestMap",
            value: function(e) {
                if (e.keyMaps && e.keyMaps.request && Object.keys(e.keyMaps.request).length > 0) return e.keyMaps.request;
            }
        }, {
            key: "_initEncoder",
            value: function(e) {
                switch (e.protocol) {
                  case gt:
                    return function(e) {
                        if ("string" === n(e)) try {
                            return JSON.parse(e);
                        } catch (t) {
                            return e;
                        }
                        return e;
                    };

                  case ft:
                    return function(e) {
                        return e;
                    };

                  default:
                    return function(e) {
                        return K.warn("PackageConfig._initEncoder(), unknow response type, data: ", JSON.stringify(e)), 
                        e;
                    };
                }
            }
        }, {
            key: "_initDecoder",
            value: function(e) {
                switch (e.protocol) {
                  case gt:
                    return function(e) {
                        if ("string" === n(e)) try {
                            return JSON.parse(e);
                        } catch (t) {
                            return e;
                        }
                        return e;
                    };

                  case ft:
                    return function(e) {
                        return e;
                    };

                  default:
                    return function(e) {
                        return K.warn("PackageConfig._initDecoder(), unknow response type, data: ", e), 
                        e;
                    };
                }
            }
        } ]), e;
    }(), Ci = function(e) {
        var t = e.length, n = e[t - 1];
        if ("string" != typeof n) return "";
        if (n.length > 1) return "";
        var r = e[t - 1];
        return delete e[t - 1], e.length -= t === e.length ? 1 : 0, r;
    }, Ii = {
        C2CMessageArray: 1,
        groupMessageArray: 1,
        groupTips: 1,
        C2CNotifyMessageArray: 1,
        profileModify: 1,
        friendListMod: 1
    }, Mi = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this, e)))._initialization(), n;
        }
        return l(t, pn), s(t, [ {
            key: "_initialization",
            value: function() {
                this._syncOffset = "", this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = !1, 
                this._syncMessagesFinished = !1, this._isLongPoll = !1, this._longPollID = 0, this._noticeSequence = 0, 
                this._initializeListener(), this._runLoop = null, this._initShuntChannels();
            }
        }, {
            key: "_initShuntChannels",
            value: function() {
                this._shuntChannels = Object.create(null), this._shuntChannels.C2CMessageArray = this._C2CMessageArrayChannel.bind(this), 
                this._shuntChannels.groupMessageArray = this._groupMessageArrayChannel.bind(this), 
                this._shuntChannels.groupTips = this._groupTipsChannel.bind(this), this._shuntChannels.C2CNotifyMessageArray = this._C2CNotifyMessageArrayChannel.bind(this), 
                this._shuntChannels.profileModify = this._profileModifyChannel.bind(this), this._shuntChannels.friendListMod = this._friendListModChannel.bind(this);
            }
        }, {
            key: "_C2CMessageArrayChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(qt, t);
            }
        }, {
            key: "_groupMessageArrayChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(Ut, t);
            }
        }, {
            key: "_groupTipsChannel",
            value: function(e, t, n) {
                var r = this;
                switch (e) {
                  case 4:
                    this.emitInnerEvent(xt, t);
                    break;

                  case 5:
                    t.forEach(function(e) {
                        W(e.elements.revokedInfos) ? r.emitInnerEvent(Kt, t) : r.emitInnerEvent(Ft, {
                            groupSystemNotices: t,
                            type: n
                        });
                    });
                    break;

                  default:
                    K.log("NotificationController._groupTipsChannel unknown event=".concat(e, " type=").concat(n), t);
                }
            }
        }, {
            key: "_C2CNotifyMessageArrayChannel",
            value: function(e, t, n) {
                this._isKickedoutNotice(t) ? this.emitInnerEvent(Gt) : this._isSysCmdMsgNotify(t) ? this.emitInnerEvent("_longPollNoticeReceiveSystemOrders") : this._isC2CMessageRevokedNotify(t) && this.emitInnerEvent(Vt, t);
            }
        }, {
            key: "_profileModifyChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(Bt, t);
            }
        }, {
            key: "_friendListModChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(Ht, t);
            }
        }, {
            key: "_dispatchNotice",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "poll";
                if (W(e)) for (var n = null, r = null, o = "", i = "", s = "", a = 0, u = 0, c = e.length; u < c; u++) a = (n = e[u]).event, 
                o = Object.keys(n).find(function(e) {
                    return void 0 !== Ii[e];
                }), Q(this._shuntChannels[o]) ? (r = n[o], "poll" === t && this._updatenoticeSequence(r), 
                this._shuntChannels[o](a, r, t)) : ("poll" === t && this._updatenoticeSequence(), 
                i = "".concat(2901), s = "".concat("意料外的通知条件", ": ").concat(a, ", ").concat(o), 
                this.emitInnerEvent(Qt, new Ke({
                    code: i,
                    message: s,
                    data: {
                        payloadName: o,
                        event: a
                    }
                })), i = "", s = "");
            }
        }, {
            key: "getLongPollID",
            value: function() {
                return this._longPollID;
            }
        }, {
            key: "_IAmReady",
            value: function() {
                this.triggerReady();
            }
        }, {
            key: "reset",
            value: function() {
                this._noticeSequence = 0, this._resetSync(), this.closeNoticeChannel();
            }
        }, {
            key: "_resetSync",
            value: function() {
                this._syncOffset = "", this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = !1, 
                this._syncMessagesFinished = !1;
            }
        }, {
            key: "_setNoticeSeqInRequestData",
            value: function(e) {
                e.Cookie.NoticeSeq = this._noticeSequence, this.tim.sumStatController.addTotalCount(_n);
            }
        }, {
            key: "_updatenoticeSequence",
            value: function(e) {
                if (e) {
                    var t = e[e.length - 1].noticeSequence;
                    t && "number" == typeof t ? t <= this._noticeSequence || (this._noticeSequence = t) : this._noticeSequence++;
                } else this._noticeSequence++;
            }
        }, {
            key: "_initializeListener",
            value: function() {
                var e = this.tim.innerEmitter;
                e.on(_t, this._startSyncMessages, this), e.on(Xt, this.closeNoticeChannel, this), 
                e.on(Nt, this._onFastStart, this);
            }
        }, {
            key: "openNoticeChannel",
            value: function() {
                K.log("NotificationController.openNoticeChannel"), this._getLongPollID();
            }
        }, {
            key: "closeNoticeChannel",
            value: function() {
                K.log("NotificationController.closeNoticeChannel"), (this._runLoop instanceof qo || this._runLoop instanceof Uo) && (this._runLoop.abort(), 
                this._runLoop.stop()), this._longPollID = 0, this._isLongPoll = !1;
            }
        }, {
            key: "_getLongPollID",
            value: function() {
                var e = this;
                if (0 === this._longPollID) {
                    var t = new Dn();
                    t.setMethod("getLongPollID").setStart(), this.request({
                        name: "longPollID",
                        action: "query"
                    }).then(function(n) {
                        var r = n.data.longPollingID;
                        e._onGetLongPollIDSuccess(r), t.setCode(0).setText("longPollingID=".concat(r)).setNetworkType(e.getNetworkType()).setEnd();
                    }).catch(function(n) {
                        var r = new Ke({
                            code: n.code || 2904,
                            message: n.message || "获取 longpolling id 失败"
                        });
                        e.emitInnerEvent(Rt), e.emitInnerEvent(Qt, r), e.probeNetwork().then(function(e) {
                            var n = y(e, 2), o = n[0], i = n[1];
                            t.setError(r, o, i).setEnd();
                        });
                    });
                } else this._onGetLongPollIDSuccess(this._longPollID);
            }
        }, {
            key: "_onGetLongPollIDSuccess",
            value: function(e) {
                this.emitInnerEvent(Ct, [ {
                    key: "long_poll_logout.query.requestData.longPollingID",
                    value: e
                }, {
                    key: "longPoll.query.requestData.cookie.longPollingID",
                    value: e
                } ]), this._longPollID = e, this._startLongPoll(), this._IAmReady(), this.tim.sumStatController.recordLongPollingID(this._longPollID);
            }
        }, {
            key: "_startLongPoll",
            value: function() {
                if (!0 !== this._isLongPoll) {
                    K.log("NotificationController._startLongPoll...");
                    var e = this.tim.connectionController, t = this.createTransportCapsule({
                        name: "longPoll",
                        action: "query"
                    });
                    this._isLongPoll = !0, this._runLoop = e.createRunLoop({
                        pack: t,
                        before: this._setNoticeSeqInRequestData.bind(this),
                        success: this._onNoticeReceived.bind(this),
                        fail: this._onNoticeFail.bind(this)
                    }), this._runLoop.start();
                } else K.log("NotificationController._startLongPoll is running...");
            }
        }, {
            key: "_onFastStart",
            value: function() {
                this.closeNoticeChannel(), this.syncMessage();
            }
        }, {
            key: "_onNoticeReceived",
            value: function(e) {
                var t = e.data;
                if (t.errorCode !== Te) {
                    var n = new Dn();
                    n.setMethod("longPollingError").setStart(), n.setMessage(t.errorInfo).setCode(t.errorCode).setNetworkType(this.getNetworkType()).setEnd(), 
                    this._onResponseError(t);
                } else this.emitInnerEvent(Lt);
                this.tim.sumStatController.addSuccessCount(_n), this.tim.sumStatController.addCost(_n, t.timecost), 
                e.data.eventArray && this._dispatchNotice(e.data.eventArray);
            }
        }, {
            key: "_onResponseError",
            value: function(e) {
                switch (e.errorCode) {
                  case 91101:
                    K.warn("NotificationController._onResponseError, longPollingID=".concat(this._longPollID, " was kicked out")), 
                    this.emitInnerEvent(Pt), this.closeNoticeChannel();
                    break;

                  case 20002:
                  case 70001:
                    this.emitInnerEvent(Jt);
                    break;

                  default:
                    this.emitInnerEvent(Qt, new Ke({
                        code: e.errorCode,
                        message: e.errorInfo
                    }));
                }
            }
        }, {
            key: "_onNoticeFail",
            value: function(e) {
                if (e.error) if ("ECONNABORTED" === e.error.code || 2801 === e.error.code) if (e.error.config) {
                    var t = e.error.config.url, n = e.error.config.data;
                    K.log("NotificationController._onNoticeFail request timed out. url=".concat(t, " data=").concat(n));
                } else K.log("NotificationController._onNoticeFail request timed out."); else K.log("NotificationController._onNoticeFail request failed due to network error");
                this.emitInnerEvent(Ot);
            }
        }, {
            key: "_isKickedoutNotice",
            value: function(e) {
                return !!e[0].hasOwnProperty("kickoutMsgNotify");
            }
        }, {
            key: "_isSysCmdMsgNotify",
            value: function(e) {
                if (!e[0]) return !1;
                var t = e[0];
                return !!Object.prototype.hasOwnProperty.call(t, "sysCmdMsgNotify");
            }
        }, {
            key: "_isC2CMessageRevokedNotify",
            value: function(e) {
                var t = e[0];
                return !!Object.prototype.hasOwnProperty.call(t, "c2cMessageRevokedNotify");
            }
        }, {
            key: "_startSyncMessages",
            value: function(e) {
                !0 !== this._syncMessagesFinished && this.syncMessage();
            }
        }, {
            key: "syncMessage",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this._syncMessagesIsRunning = !0, this.request({
                    name: "syncMessage",
                    action: "query",
                    param: {
                        cookie: t,
                        syncFlag: n
                    }
                }).then(function(t) {
                    var n = t.data;
                    switch (function() {
                        for (var e = [], t = Ci(arguments), n = 0; n < arguments.length; n++) Number.isInteger(arguments[n]) ? e.push(arguments[n]) : e.push(1 == !!arguments[n] ? "1" : "0");
                        return e.join(t);
                    }(n.cookie, n.syncFlag)) {
                      case "00":
                      case "01":
                        e.emitInnerEvent(Qt, {
                            code: 2902,
                            message: "_syncOffset 丢失"
                        });
                        break;

                      case "10":
                      case "11":
                        n.eventArray && e._dispatchNotice(n.eventArray, "sync"), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), 
                        e.emitInnerEvent(It, {
                            data: n.messageList,
                            C2CRemainingUnreadList: n.C2CRemainingUnreadList
                        }), e._syncOffset = n.cookie, e.syncMessage(n.cookie, n.syncFlag);
                        break;

                      case "12":
                        n.eventArray && e._dispatchNotice(n.eventArray, "sync"), e.openNoticeChannel(), 
                        e._syncNoticeList = e._syncNoticeList.concat(n.messageList), e.emitInnerEvent(Mt, {
                            messageList: n.messageList,
                            C2CRemainingUnreadList: n.C2CRemainingUnreadList
                        }), e._syncOffset = n.cookie, e._syncNoticeList = [], e._syncMessagesIsRunning = !1, 
                        e._syncMessagesFinished = !0;
                    }
                }).catch(function(t) {
                    e._syncMessagesIsRunning = !1, K.error("NotificationController.syncMessage failed. error:".concat(t));
                });
            }
        } ]), t;
    }(), Di = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this, e)))._initializeListener(), n;
        }
        return l(t, pn), s(t, [ {
            key: "_initializeMembers",
            value: function(e) {
                this.expiredTimeLimit = 300, this.appid = e.appid || "", this.bucketName = e.bucketName || "", 
                this.ciUrl = e.ciUrl || "", this.directory = e.directory || "", this.downloadUrl = e.downloadUrl || "", 
                this.uploadUrl = e.uploadUrl || "", this.expiredTimeOut = e.expiredTimeOut || this.expiredTimeLimit, 
                this.region = "ap-shanghai", this.cos = null, this.cosOptions = {
                    secretId: e.secretId,
                    secretKey: e.secretKey,
                    sessionToken: e.sessionToken,
                    expiredTime: e.expiredTime
                }, this._initUploaderMethod();
            }
        }, {
            key: "_expiredTimer",
            value: function() {
                var e = this, t = setInterval(function() {
                    Math.ceil(Date.now() / 1e3) >= e.cosOptions.expiredTime - 20 && (e._isReady = !1, 
                    e._getAuthorizationKey(), clearInterval(t));
                }, 1e4);
            }
        }, {
            key: "_initializeListener",
            value: function() {
                this.tim.innerEmitter.on(_t, this._initialization, this);
            }
        }, {
            key: "_initialization",
            value: function() {
                this._initCOSSDKPlugin(), this.COSSDK ? (this._initializeMembers({}), this._getAuthorizationKey()) : K.warn("UploadController._initialization 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin");
            }
        }, {
            key: "_getAuthorizationKey",
            value: function() {
                var e = this, t = Math.ceil(Date.now() / 1e3);
                this.request({
                    name: "cosSig",
                    action: "query",
                    param: {
                        duration: this.expiredTimeLimit
                    }
                }).then(function(n) {
                    var r = n.data.expiredTime - t;
                    n.data.expiredTimeOut = r, K.log("UploadController._getAuthorizationKey timeout=".concat(r, "s")), 
                    e._initializeMembers(n.data), e._expiredTimer(), e._initUploaderMethod();
                }).catch(function(e) {
                    K.warn("UploadController._getAuthorizationKey. error:", e);
                });
            }
        }, {
            key: "_initCOSSDKPlugin",
            value: function() {
                var e = k ? "cos-wx-sdk" : "cos-js-sdk";
                this.COSSDK = this.tim.getPlugin(e);
            }
        }, {
            key: "_initUploaderMethod",
            value: function() {
                var e = this;
                this.appid && (this.cos = k ? new this.COSSDK({
                    ForcePathStyle: !0,
                    getAuthorization: this._getAuthorization.bind(this)
                }) : new this.COSSDK({
                    getAuthorization: this._getAuthorization.bind(this)
                }), this._cosUploadMethod = k ? function(t, n) {
                    e.cos.postObject(t, n);
                } : function(t, n) {
                    e.cos.uploadFiles(t, n);
                }, this.triggerReady());
            }
        }, {
            key: "_getAuthorization",
            value: function(e, t) {
                t({
                    TmpSecretId: this.cosOptions.secretId,
                    TmpSecretKey: this.cosOptions.secretKey,
                    XCosSecurityToken: this.cosOptions.sessionToken,
                    ExpiredTime: this.cosOptions.expiredTime
                });
            }
        }, {
            key: "uploadImage",
            value: function(e) {
                if (!e.file) return yn(new Ke({
                    code: 2251,
                    message: "请先选择一个图片"
                }));
                var t = this._checkImageType(e.file);
                if (!0 !== t) return t;
                var n = this._checkImageMime(e.file);
                if (!0 !== n) return n;
                var r = this._checkImageSize(e.file);
                return !0 !== r ? r : this.upload(e);
            }
        }, {
            key: "_checkImageType",
            value: function(e) {
                var t = "";
                return t = k ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1), 
                et.indexOf(t.toLowerCase()) >= 0 || yn(new Ke({
                    coe: 2252,
                    message: "只允许上传 jpg png jpeg gif 格式的图片"
                }));
            }
        }, {
            key: "_checkImageMime",
            value: function(e) {
                return !0;
            }
        }, {
            key: "_checkImageSize",
            value: function(e) {
                var t;
                return 0 === (t = k ? e.size : e.files[0].size) ? yn(new Ke({
                    code: 2108,
                    message: "".concat(ze)
                })) : t < 20971520 || yn(new Ke({
                    coe: 2253,
                    message: "".concat("图片大小超过20M，无法发送")
                }));
            }
        }, {
            key: "uploadFile",
            value: function(e) {
                var t = null;
                return e.file ? e.file.files[0].size > 104857600 ? (t = new Ke({
                    code: 2402,
                    message: Xe
                }), yn(t)) : 0 === e.file.files[0].size ? (t = new Ke({
                    code: 2108,
                    message: "".concat(ze)
                }), yn(t)) : this.upload(e) : (t = new Ke({
                    code: 2401,
                    message: "请先选择一个文件"
                }), yn(t));
            }
        }, {
            key: "uploadVideo",
            value: function(e) {
                if (k) return e.file.videoFile.size > 20971520 ? yn(new Ke({
                    code: 2351,
                    message: "".concat("视频大小超过20M，无法发送")
                })) : 0 === e.file.videoFile.size ? yn(new Ke({
                    code: 2108,
                    message: "".concat(ze)
                })) : -1 === tt.indexOf(e.file.videoFile.type) ? yn(new Ke({
                    code: 2352,
                    message: "".concat("只允许上传 mp4 格式的视频")
                })) : this.handleVideoUpload({
                    file: e.file.videoFile
                });
            }
        }, {
            key: "handleVideoUpload",
            value: function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    t.upload(e).then(function(e) {
                        n(e);
                    }).catch(function() {
                        t.upload(e).then(function(e) {
                            n(e);
                        }).catch(function() {
                            r(new Ke({
                                code: 2350,
                                message: "视频上传失败"
                            }));
                        });
                    });
                });
            }
        }, {
            key: "uploadAudio",
            value: function(e) {
                return e.file ? e.file.size > 20971520 ? yn(new Ke({
                    code: 2301,
                    message: "".concat("语音大小大于20M，无法发送")
                })) : 0 === e.file.size ? yn(new Ke({
                    code: 2108,
                    message: "".concat(ze)
                })) : this.upload(e) : yn(new Ke({
                    code: 2300,
                    message: "语音上传失败"
                }));
            }
        }, {
            key: "upload",
            value: function(e) {
                var t = this;
                if (!Q(this._cosUploadMethod)) return K.warn("UploadController.upload 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin"), 
                yn(new Ke({
                    code: 2040,
                    message: "未检测到 COS 上传插件"
                }));
                var n = new Dn();
                n.setMethod("upload").setStart(), K.time("upload");
                var r = k ? e.file : e.file.files[0];
                return new Promise(function(o, i) {
                    var s = k ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e), a = t;
                    t._cosUploadMethod(s, function(e, s) {
                        var u = Object.create(null);
                        if (s) {
                            if (t._isUploadError(s, e)) return i(s.files[0].error), K.warn("UploadController.upload failed, network error:".concat(s.files[0].error.error)), 
                            void n.setCode(2400).setMessage("文件上传失败").setEnd();
                            u.fileName = r.name, u.fileSize = r.size, u.fileType = r.type.slice(r.type.indexOf("/") + 1).toLowerCase(), 
                            u.location = k ? s.Location : s.files[0].data.Location;
                            var c = K.timeEnd("upload"), l = a._formatFileSize(r.size), p = a._formatSpeed(1e3 * r.size / c), h = "size=".concat(l, ",time=").concat(c, "ms,speed=").concat(p);
                            return K.log("UploadController.upload success name=".concat(r.name, ",").concat(h)), 
                            o(u), void n.setCode(0).setNetworkType(t.getNetworkType()).setText(h).setEnd();
                        }
                        n.setCode(2400).setMessage("文件上传失败").setEnd(), K.warn("UploadController.upload failed, error:".concat(e)), 
                        i(e);
                    });
                });
            }
        }, {
            key: "_isUploadError",
            value: function(e, t) {
                return k ? !!t : null !== e.files[0].error;
            }
        }, {
            key: "_formatFileSize",
            value: function(e) {
                return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math.floor(e / 1048576) + "MB";
            }
        }, {
            key: "_formatSpeed",
            value: function(e) {
                return e <= 1048576 ? (e / 1024).toFixed(1) + "KB/s" : (e / 1048576).toFixed(1) + "MB/s";
            }
        }, {
            key: "_createCosOptionsWeb",
            value: function(e) {
                var t = this.tim.context.identifier, n = this._genFileName(t, e.to, e.file.files[0].name);
                return {
                    files: [ {
                        Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                        Region: this.region,
                        Key: "".concat(this.directory, "/").concat(n),
                        Body: e.file.files[0]
                    } ],
                    SliceSize: 1048576,
                    onProgress: function(t) {
                        if ("function" == typeof e.onProgress) try {
                            e.onProgress(t.percent);
                        } catch (e) {
                            K.warn("onProgress callback error:"), K.error(e);
                        }
                    },
                    onFileFinish: function(e, t, n) {}
                };
            }
        }, {
            key: "_createCosOptionsWXMiniApp",
            value: function(e) {
                var t = this.tim.context.identifier, n = this._genFileName(t, e.to, e.file.name), r = e.file.url;
                return {
                    Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                    Region: this.region,
                    Key: "".concat(this.directory, "/").concat(n),
                    FilePath: r,
                    onProgress: function(t) {
                        if (K.log(JSON.stringify(t)), "function" == typeof e.onProgress) try {
                            e.onProgress(t.percent);
                        } catch (e) {
                            K.warn("onProgress callback error:"), K.error(e);
                        }
                    }
                };
            }
        }, {
            key: "_genFileName",
            value: function(e, t, n) {
                return "".concat(e, "-").concat(t, "-").concat(ue(99999), "-").concat(n);
            }
        } ]), t;
    }(), Si = function(e) {
        function n(e) {
            var t;
            return o(this, n), (t = m(this, p(n).call(this, e))).FILETYPE = {
                SOUND: 2106,
                FILE: 2107,
                VIDEO: 2113
            }, t._bdh_download_server = "grouptalk.c2c.qq.com", t._BDHBizID = 10001, t._authKey = "", 
            t._expireTime = 0, t.tim.innerEmitter.on(_t, t._getAuthKey, d(t)), t;
        }
        return l(n, pn), s(n, [ {
            key: "_getAuthKey",
            value: function() {
                var e = this;
                this.request({
                    name: "bigDataHallwayAuthKey",
                    action: "query"
                }).then(function(t) {
                    t.data.authKey && (e._authKey = t.data.authKey, e._expireTime = parseInt(t.data.expireTime));
                });
            }
        }, {
            key: "_isFromOlderVersion",
            value: function(e) {
                return 2 !== e.content.downloadFlag;
            }
        }, {
            key: "parseElements",
            value: function(e, t) {
                if (!W(e) || !t) return [];
                for (var n = [], r = null, o = 0; o < e.length; o++) r = e[o], this._needParse(r) ? n.push(this._parseElement(r, t)) : n.push(e[o]);
                return n;
            }
        }, {
            key: "_needParse",
            value: function(e) {
                return !(!this._isFromOlderVersion(e) || e.type !== t.MSG_AUDIO && e.type !== t.MSG_FILE && e.type !== t.MSG_VIDEO);
            }
        }, {
            key: "_parseElement",
            value: function(e, n) {
                switch (e.type) {
                  case t.MSG_AUDIO:
                    return this._parseAudioElement(e, n);

                  case t.MSG_FILE:
                    return this._parseFileElement(e, n);

                  case t.MSG_VIDEO:
                    return this._parseVideoElement(e, n);
                }
            }
        }, {
            key: "_parseAudioElement",
            value: function(e, t) {
                return e.content.url = this._genAudioUrl(e.content.uuid, t), e;
            }
        }, {
            key: "_parseFileElement",
            value: function(e, t) {
                return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName), 
                e;
            }
        }, {
            key: "_parseVideoElement",
            value: function(e, t) {
                return e.content.url = this._genVideoUrl(e.content.uuid, t), e;
            }
        }, {
            key: "_genAudioUrl",
            value: function(e, t) {
                return "" === this._authKey ? (K.warn("BigDataHallwayController._genAudioUrl no authKey!"), 
                "") : "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t, "&ver=0");
            }
        }, {
            key: "_genFileUrl",
            value: function(e, t, n) {
                return "" === this._authKey ? (K.warn("BigDataHallwayController._genFileUrl no authKey!"), 
                "") : (n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now())), 
                "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t, "&ver=0&filename=").concat(encodeURIComponent(n)));
            }
        }, {
            key: "_genVideoUrl",
            value: function(e, t) {
                return "" === this._authKey ? (K.warn("BigDataHallwayController._genVideoUrl no authKey!"), 
                "") : "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t, "&ver=0");
            }
        }, {
            key: "reset",
            value: function() {
                this._authKey = "", this.expireTime = 0;
            }
        } ]), n;
    }(), Ti = {
        app_id: "",
        event_id: "",
        api_base: "https://pingtas.qq.com/pingd",
        prefix: "_mta_",
        version: "1.3.9",
        stat_share_app: !1,
        stat_pull_down_fresh: !1,
        stat_reach_bottom: !1,
        stat_param: !0
    };
    function Ei() {
        try {
            var e = "s" + ki();
            return wx.setStorageSync(Ti.prefix + "ssid", e), e;
        } catch (e) {}
    }
    function ki(e) {
        for (var t = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], n = 10; 1 < n; n--) {
            var r = Math.floor(10 * Math.random()), o = t[r];
            t[r] = t[n - 1], t[n - 1] = o;
        }
        for (n = r = 0; 5 > n; n++) r = 10 * r + t[n];
        return (e || "") + (r + "") + +new Date();
    }
    function wi() {
        try {
            var e = getCurrentPages(), t = "/";
            return 0 < e.length && (t = e.pop().__route__), t;
        } catch (e) {
            console.log("get current page path error:" + e);
        }
    }
    function Ai() {
        var e, t = {
            dm: "wechat.apps.xx",
            url: encodeURIComponent(wi() + Li(Ni.Data.pageQuery)),
            pvi: "",
            si: "",
            ty: 0
        };
        return t.pvi = ((e = function() {
            try {
                return wx.getStorageSync(Ti.prefix + "auid");
            } catch (e) {}
        }()) || (e = function() {
            try {
                var e = ki();
                return wx.setStorageSync(Ti.prefix + "auid", e), e;
            } catch (e) {}
        }(), t.ty = 1), e), t.si = function() {
            var e = function() {
                try {
                    return wx.getStorageSync(Ti.prefix + "ssid");
                } catch (e) {}
            }();
            return e || (e = Ei()), e;
        }(), t;
    }
    function Ri() {
        var e = function() {
            var e = wx.getSystemInfoSync();
            return {
                adt: encodeURIComponent(e.model),
                scl: e.pixelRatio,
                scr: e.windowWidth + "x" + e.windowHeight,
                lg: e.language,
                fl: e.version,
                jv: encodeURIComponent(e.system),
                tz: encodeURIComponent(e.platform)
            };
        }();
        return wx.getNetworkType({
            success: function(e) {
                !function(e) {
                    try {
                        wx.setStorageSync(Ti.prefix + "ntdata", e);
                    } catch (e) {}
                }(e.networkType);
            }
        }), e.ct = wx.getStorageSync(Ti.prefix + "ntdata") || "4g", e;
    }
    function Oi() {
        var e, t = Ni.Data.userInfo, n = [];
        for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]);
        return t = n.join(";"), {
            r2: Ti.app_id,
            r4: "wx",
            ext: "v=" + Ti.version + (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : "")
        };
    }
    function Li(e) {
        if (!Ti.stat_param || !e) return "";
        e = function(e) {
            if (1 > Ti.ignore_params.length) return e;
            var t, n = {};
            for (t in e) 0 <= Ti.ignore_params.indexOf(t) || (n[t] = e[t]);
            return n;
        }(e);
        var t, n = [];
        for (t in e) n.push(t + "=" + e[t]);
        return 0 < n.length ? "?" + n.join("&") : "";
    }
    var Ni = {
        App: {
            init: function(e) {
                "appID" in e && (Ti.app_id = e.appID), "eventID" in e && (Ti.event_id = e.eventID), 
                "statShareApp" in e && (Ti.stat_share_app = e.statShareApp), "statPullDownFresh" in e && (Ti.stat_pull_down_fresh = e.statPullDownFresh), 
                "statReachBottom" in e && (Ti.stat_reach_bottom = e.statReachBottom), "ignoreParams" in e && (Ti.ignore_params = e.ignoreParams), 
                "statParam" in e && (Ti.stat_param = e.statParam), Ei();
                try {
                    "lauchOpts" in e && (Ni.Data.lanchInfo = e.lauchOpts, Ni.Data.lanchInfo.landing = 1);
                } catch (e) {}
                "autoReport" in e && e.autoReport && function() {
                    var e = Page;
                    Page = function(t) {
                        var n = t.onLoad;
                        t.onLoad = function(e) {
                            n && n.call(this, e), Ni.Data.lastPageQuery = Ni.Data.pageQuery, Ni.Data.pageQuery = e, 
                            Ni.Data.lastPageUrl = Ni.Data.pageUrl, Ni.Data.pageUrl = wi(), Ni.Data.show = !1, 
                            Ni.Page.init();
                        }, e(t);
                    };
                }();
            }
        },
        Page: {
            init: function() {
                var e, t = getCurrentPages()[getCurrentPages().length - 1];
                t.onShow && (e = t.onShow, t.onShow = function() {
                    if (!0 === Ni.Data.show) {
                        var t = Ni.Data.lastPageQuery;
                        Ni.Data.lastPageQuery = Ni.Data.pageQuery, Ni.Data.pageQuery = t, Ni.Data.lastPageUrl = Ni.Data.pageUrl, 
                        Ni.Data.pageUrl = wi();
                    }
                    Ni.Data.show = !0, Ni.Page.stat(), e.apply(this, arguments);
                }), Ti.stat_pull_down_fresh && t.onPullDownRefresh && function() {
                    var e = t.onPullDownRefresh;
                    t.onPullDownRefresh = function() {
                        Ni.Event.stat(Ti.prefix + "pulldownfresh", {
                            url: t.__route__
                        }), e.apply(this, arguments);
                    };
                }(), Ti.stat_reach_bottom && t.onReachBottom && function() {
                    var e = t.onReachBottom;
                    t.onReachBottom = function() {
                        Ni.Event.stat(Ti.prefix + "reachbottom", {
                            url: t.__route__
                        }), e.apply(this, arguments);
                    };
                }(), Ti.stat_share_app && t.onShareAppMessage && function() {
                    var e = t.onShareAppMessage;
                    t.onShareAppMessage = function() {
                        return Ni.Event.stat(Ti.prefix + "shareapp", {
                            url: t.__route__
                        }), e.apply(this, arguments);
                    };
                }();
            },
            multiStat: function(e, t) {
                if (1 == t) Ni.Page.stat(e); else {
                    var n = getCurrentPages()[getCurrentPages().length - 1];
                    n.onShow && function() {
                        var t = n.onShow;
                        n.onShow = function() {
                            Ni.Page.stat(e), t.call(this, arguments);
                        };
                    }();
                }
            },
            stat: function(e) {
                if ("" != Ti.app_id) {
                    var t = [], n = Oi();
                    if (e && (n.r2 = e), e = [ Ai(), n, Ri() ], Ni.Data.lanchInfo) {
                        e.push({
                            ht: Ni.Data.lanchInfo.scene
                        }), Ni.Data.pageQuery && Ni.Data.pageQuery._mta_ref_id && e.push({
                            rarg: Ni.Data.pageQuery._mta_ref_id
                        });
                        try {
                            1 == Ni.Data.lanchInfo.landing && (n.ext += ";lp=1", Ni.Data.lanchInfo.landing = 0);
                        } catch (e) {}
                    }
                    e.push({
                        rdm: "/",
                        rurl: 0 >= Ni.Data.lastPageUrl.length ? Ni.Data.pageUrl + Li(Ni.Data.lastPageQuery) : encodeURIComponent(Ni.Data.lastPageUrl + Li(Ni.Data.lastPageQuery))
                    }), e.push({
                        rand: +new Date()
                    }), n = 0;
                    for (var r = e.length; n < r; n++) for (var o in e[n]) e[n].hasOwnProperty(o) && t.push(o + "=" + (void 0 === e[n][o] ? "" : e[n][o]));
                    wx.request({
                        url: Ti.api_base + "?" + t.join("&").toLowerCase()
                    });
                }
            }
        },
        Event: {
            stat: function(e, t) {
                if ("" != Ti.event_id) {
                    var n = [], r = Ai(), o = Oi();
                    r.dm = "wxapps.click", r.url = e, o.r2 = Ti.event_id;
                    var i, s = void 0 === t ? {} : t, a = [];
                    for (i in s) s.hasOwnProperty(i) && a.push(encodeURIComponent(i) + "=" + encodeURIComponent(s[i]));
                    for (s = a.join(";"), o.r5 = s, s = 0, o = (r = [ r, o, Ri(), {
                        rand: +new Date()
                    } ]).length; s < o; s++) for (var u in r[s]) r[s].hasOwnProperty(u) && n.push(u + "=" + (void 0 === r[s][u] ? "" : r[s][u]));
                    wx.request({
                        url: Ti.api_base + "?" + n.join("&").toLowerCase()
                    });
                }
            }
        },
        Data: {
            userInfo: null,
            lanchInfo: null,
            pageQuery: null,
            lastPageQuery: null,
            pageUrl: "",
            lastPageUrl: "",
            show: !1
        }
    }, bi = Ni, Pi = function() {
        function e() {
            o(this, e), this.cache = [], this.MtaWX = null, this._init();
        }
        return s(e, [ {
            key: "report",
            value: function(e, t) {
                var n = this;
                try {
                    E ? window.MtaH5 ? (window.MtaH5.clickStat(e, t), this.cache.forEach(function(e) {
                        var t = e.name, r = e.param;
                        window.MtaH5.clickStat(t, r), n.cache.shift();
                    })) : this.cache.push({
                        name: e,
                        param: t
                    }) : k && (this.MtaWX ? (this.MtaWX.Event.stat(e, t), this.cache.forEach(function(e) {
                        var t = e.name, r = e.param;
                        n.MtaWX.stat(t, r), n.cache.shift();
                    })) : this.cache.push({
                        name: e,
                        param: t
                    }));
                } catch (e) {}
            }
        }, {
            key: "stat",
            value: function() {
                try {
                    E && window.MtaH5 ? window.MtaH5.pgv() : k && this.MtaWX && this.MtaWX.Page.stat();
                } catch (e) {}
            }
        }, {
            key: "_init",
            value: function() {
                try {
                    if (E) {
                        window._mtac = {
                            autoReport: 0
                        };
                        var e = document.createElement("script"), t = fe();
                        e.src = "".concat(t, "//pingjs.qq.com/h5/stats.js?v2.0.4"), e.setAttribute("name", "MTAH5"), 
                        e.setAttribute("sid", "500690998"), e.setAttribute("cid", "500691017");
                        var n = document.getElementsByTagName("script")[0];
                        n.parentNode.insertBefore(e, n);
                    } else k && (this.MtaWX = bi, this.MtaWX.App.init({
                        appID: "500690995",
                        eventID: "500691014",
                        autoReport: !1,
                        statParam: !0
                    }));
                } catch (e) {}
            }
        } ]), e;
    }(), Gi = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this, e))).tim = e, n.MTA = new Pi(), 
            n._initListener(), n;
        }
        return l(t, pn), s(t, [ {
            key: "_initListener",
            value: function() {
                var e = this;
                this.tim.innerEmitter.on(on, function() {
                    e.MTA.report("sdkappid", {
                        value: e.tim.context.SDKAppID
                    }), e.MTA.report("version", {
                        value: Wi.VERSION
                    }), e.MTA.stat();
                });
            }
        } ]), t;
    }(), qi = function() {
        function e(t) {
            o(this, e), this._table = "timwebii", this._report = [];
        }
        return s(e, [ {
            key: "pushIn",
            value: function(e) {
                K.debug("SSOLogBody.pushIn", this._report.length, e), this._report.push(e);
            }
        }, {
            key: "backfill",
            value: function(e) {
                var t;
                W(e) && 0 !== e.length && (K.debug("SSOLogBody.backfill", this._report.length, e.length), 
                (t = this._report).unshift.apply(t, v(e)));
            }
        }, {
            key: "getLogsNumInMemory",
            value: function() {
                return this._report.length;
            }
        }, {
            key: "isEmpty",
            value: function() {
                return 0 === this._report.length;
            }
        }, {
            key: "_reset",
            value: function() {
                this._report.length = 0, this._report = [];
            }
        }, {
            key: "getTable",
            value: function() {
                return this._table;
            }
        }, {
            key: "getLogsInMemory",
            value: function() {
                var e = this._report.slice();
                return this._reset(), e;
            }
        } ]), e;
    }(), Ui = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this, e))).TAG = "im-ssolog-event", n._reportBody = new qi(), 
            n._version = "2.5.1", n.MIN_THRESHOLD = 20, n.MAX_THRESHOLD = 100, n.WAITING_TIME = 6e4, 
            n.INTERVAL = 2e4, n._timerID = 0, n._resetLastReportTime(), n._startReportTimer(), 
            n._retryCount = 0, n.MAX_RETRY_COUNT = 3, n.tim.innerEmitter.on(zt, n._onLoginSuccess, d(n)), 
            n;
        }
        return l(t, pn), s(t, [ {
            key: "reportAtOnce",
            value: function() {
                K.debug("EventStatController.reportAtOnce"), this._report();
            }
        }, {
            key: "_onLoginSuccess",
            value: function() {
                var e = this, t = this.tim.storage, n = t.getItem(this.TAG, !1);
                Ie(n) || (K.log("EventStatController._onLoginSuccess get ssolog in storage, nums=" + n.length), 
                n.forEach(function(t) {
                    e._reportBody.pushIn(t);
                }), t.removeItem(this.TAG, !1));
            }
        }, {
            key: "pushIn",
            value: function(e) {
                e instanceof Dn && (e.setCommonInfo(this.tim.context.SDKAppID, this._version, this.tim.context.tinyID, this.tim.loginInfo.identifier, this.getPlatform()), 
                this._reportBody.pushIn(e), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report());
            }
        }, {
            key: "_resetLastReportTime",
            value: function() {
                this._lastReportTime = Date.now();
            }
        }, {
            key: "_startReportTimer",
            value: function() {
                var e = this;
                this._timerID = setInterval(function() {
                    Date.now() < e._lastReportTime + e.WAITING_TIME || e._reportBody.isEmpty() || e._report();
                }, this.INTERVAL);
            }
        }, {
            key: "_stopReportTimer",
            value: function() {
                this._timerID > 0 && (clearInterval(this._timerID), this._timerID = 0);
            }
        }, {
            key: "_report",
            value: function() {
                var e = this;
                if (!this._reportBody.isEmpty()) {
                    var t = this._reportBody.getLogsInMemory();
                    this.request({
                        name: "ssoEventStat",
                        action: "create",
                        param: {
                            table: this._reportBody.getTable(),
                            report: t
                        }
                    }).then(function() {
                        e._resetLastReportTime(), e._retryCount > 0 && (K.debug("EventStatController.report retry success"), 
                        e._retryCount = 0);
                    }).catch(function(n) {
                        if (K.warn("EventStatController.report, online:".concat(e.getNetworkType(), " error:").concat(n)), 
                        e._reportBody.backfill(t), e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD || e._retryCount === e.MAX_RETRY_COUNT || 0 === e._timerID) return e._retryCount = 0, 
                        void e._flushAtOnce();
                        e._retryCount += 1;
                    });
                }
            }
        }, {
            key: "_flushAtOnce",
            value: function() {
                var e = this.tim.storage, t = e.getItem(this.TAG, !1), n = this._reportBody.getLogsInMemory();
                if (Ie(t)) K.log("EventStatController._flushAtOnce nums=" + n.length), e.setItem(this.TAG, n, !0, !1); else {
                    var r = n.concat(t);
                    r.length > this.MAX_THRESHOLD && (r = r.slice(0, this.MAX_THRESHOLD)), K.log("EventStatController._flushAtOnce nums=" + r.length), 
                    e.setItem(this.TAG, r, !0, !1);
                }
            }
        }, {
            key: "reset",
            value: function() {
                K.log("EventStatController.reset"), this._stopReportTimer(), this._report();
            }
        } ]), t;
    }(), xi = "none", Fi = "online", Hi = function() {
        function e() {
            o(this, e), this._networkType = "", this.maxWaitTime = 3e3;
        }
        return s(e, [ {
            key: "start",
            value: function() {
                var e = this;
                k ? (wx.getNetworkType({
                    success: function(t) {
                        e._networkType = t.networkType, t.networkType === xi ? K.warn("NetMonitor no network, please check!") : K.info("NetMonitor networkType:".concat(t.networkType));
                    }
                }), wx.onNetworkStatusChange(this._onWxNetworkStatusChange.bind(this))) : this._networkType = Fi;
            }
        }, {
            key: "_onWxNetworkStatusChange",
            value: function(e) {
                this._networkType = e.networkType, e.isConnected ? K.info("NetMonitor networkType:".concat(e.networkType)) : K.warn("NetMonitor no network, please check!");
            }
        }, {
            key: "probe",
            value: function() {
                var e = this;
                return new Promise(function(t, n) {
                    if (k) wx.getNetworkType({
                        success: function(n) {
                            e._networkType = n.networkType, n.networkType === xi ? (K.warn("NetMonitor no network, please check!"), 
                            t([ !1, n.networkType ])) : (K.info("NetMonitor networkType:".concat(n.networkType)), 
                            t([ !0, n.networkType ]));
                        }
                    }); else if (window && window.fetch) fetch("".concat(fe(), "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=").concat(Math.random())).then(function(e) {
                        e.ok ? t([ !0, Fi ]) : t([ !1, xi ]);
                    }).catch(function(e) {
                        t([ !1, xi ]);
                    }); else {
                        var r = new XMLHttpRequest(), o = setTimeout(function() {
                            K.warn("NetMonitor fetch timeout. Probably no network, please check!"), r.abort(), 
                            e._networkType = xi, t([ !1, xi ]);
                        }, e.maxWaitTime);
                        r.onreadystatechange = function() {
                            4 === r.readyState && (clearTimeout(o), 200 === r.status || 304 === r.status ? (this._networkType = Fi, 
                            t([ !0, Fi ])) : (K.warn("NetMonitor fetch status:".concat(r.status, ". Probably no network, please check!")), 
                            this._networkType = xi, t([ !1, xi ])));
                        }, r.open("GET", "".concat(fe(), "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=").concat(Math.random())), 
                        r.send();
                    }
                });
            }
        }, {
            key: "getNetworkType",
            value: function() {
                return this._networkType;
            }
        }, {
            key: "reset",
            value: function() {
                this._networkType = "";
            }
        } ]), e;
    }(), Bi = function() {
        function e(t) {
            var n = this;
            o(this, e), W(t) ? (this._map = new Map(), t.forEach(function(e) {
                n._map.set(e, []);
            })) : K.warn("AverageCalculator.constructor need keys");
        }
        return s(e, [ {
            key: "push",
            value: function(e, t) {
                return !(X(e) || !this._map.has(e) || !j(t) || (this._map.get(e).push(t), 0));
            }
        }, {
            key: "getSize",
            value: function(e) {
                return X(e) || !this._map.has(e) ? -1 : this._map.get(e).length;
            }
        }, {
            key: "getAvg",
            value: function(e) {
                if (X(e) || !this._map.has(e)) return -1;
                var t = this._map.get(e), n = t.length;
                if (0 === n) return 0;
                var r = 0;
                return t.forEach(function(e) {
                    r += e;
                }), t.length = 0, this._map.set(e, []), parseInt(r / n);
            }
        }, {
            key: "getMax",
            value: function(e) {
                return X(e) || !this._map.has(e) ? -1 : Math.max.apply(null, this._map.get(e));
            }
        }, {
            key: "getMin",
            value: function(e) {
                return X(e) || !this._map.has(e) ? -1 : Math.min.apply(null, this._map.get(e));
            }
        }, {
            key: "reset",
            value: function() {
                this._map.forEach(function(e) {
                    e.length = 0;
                });
            }
        } ]), e;
    }(), Ki = function() {
        function e(t) {
            var n = this;
            o(this, e), W(t) ? (this._map = new Map(), t.forEach(function(e) {
                n._map.set(e, {
                    totalCount: 0,
                    successCount: 0
                });
            })) : K.warn("SuccessRateCalculator.constructor need keys");
        }
        return s(e, [ {
            key: "addTotalCount",
            value: function(e) {
                return !(X(e) || !this._map.has(e) || (this._map.get(e).totalCount += 1, 0));
            }
        }, {
            key: "addSuccessCount",
            value: function(e) {
                return !(X(e) || !this._map.has(e) || (this._map.get(e).successCount += 1, 0));
            }
        }, {
            key: "getSuccessRate",
            value: function(e) {
                if (X(e) || !this._map.has(e)) return -1;
                var t = this._map.get(e);
                if (0 === t.totalCount) return 1;
                var n = parseFloat((t.successCount / t.totalCount).toFixed(2));
                return t.totalCount = t.successCount = 0, n;
            }
        }, {
            key: "getTotalCount",
            value: function(e) {
                return X(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount;
            }
        }, {
            key: "reset",
            value: function() {
                this._map.forEach(function(e) {
                    e.totalCount = 0, e.successCount = 0;
                });
            }
        } ]), e;
    }(), Vi = function(e) {
        function t(e) {
            var n;
            return o(this, t), (n = m(this, p(t).call(this, e))).TABLE = "timwebsum", n.TAG = "im-ssolog-sumstat", 
            n._items = [ _n, Cn, In ], n._thresholdMap = new Map(), n._thresholdMap.set(_n, 100), 
            n._thresholdMap.set(Cn, 150), n._thresholdMap.set(In, 15), n._lpID = "", n._platform = n.getPlatform(), 
            n._lastReportTime = 0, n._statInfoArr = [], n._retryCount = 0, n._avgCalc = new Bi(n._items), 
            n._successRateCalc = new Ki(n._items), n.tim.innerEmitter.on(zt, n._onLoginSuccess, d(n)), 
            n;
        }
        return l(t, pn), s(t, [ {
            key: "_onLoginSuccess",
            value: function() {
                var e = this, t = this.tim.storage, n = t.getItem(this.TAG, !1);
                Ie(n) || (K.log("SumStatController._onLoginSuccess get sumstatlog in storage, nums=" + n.length), 
                n.forEach(function(t) {
                    e._statInfoArr.pushIn(t);
                }), t.removeItem(this.TAG, !1));
            }
        }, {
            key: "recordLongPollingID",
            value: function(e) {
                this._lpID = e;
            }
        }, {
            key: "addTotalCount",
            value: function(e) {
                this._successRateCalc.addTotalCount(e) ? 1 === this._successRateCalc.getTotalCount(e) && (this._lastReportTime = Date.now()) : K.warn("SumStatController.addTotalCount invalid key:", e);
            }
        }, {
            key: "addSuccessCount",
            value: function(e) {
                this._successRateCalc.addSuccessCount(e) || K.warn("SumStatController.addSuccessCount invalid key:", e);
            }
        }, {
            key: "addCost",
            value: function(e, t) {
                this._avgCalc.push(e, t) ? (K.debug("SumStatController.addCost", e, t, this._avgCalc.getSize(e)), 
                this._avgCalc.getSize(e) >= this._thresholdMap.get(e) && this._report(e)) : K.warn("SumStatController.addCost invalid key or cost:", e, t);
            }
        }, {
            key: "_getItemNum",
            value: function(e) {
                switch (e) {
                  case _n:
                    return 1;

                  case Cn:
                    return 2;

                  case In:
                    return 3;

                  default:
                    return 100;
                }
            }
        }, {
            key: "_getStatInfo",
            value: function(e) {
                var t = null;
                return this._avgCalc.getSize(e) > 0 && (t = {
                    SDKAppID: "".concat(this.tim.context.SDKAppID),
                    version: "".concat("2.5.1"),
                    tinyID: this.tim.context.tinyID,
                    userID: this.tim.loginInfo.identifier,
                    item: this._getItemNum(e),
                    lpID: e === _n ? this._lpID : "",
                    platform: this._platform,
                    networkType: this.getNetworkType(),
                    total: this._successRateCalc.getTotalCount(e),
                    successRate: this._successRateCalc.getSuccessRate(e),
                    avg: this._avgCalc.getAvg(e),
                    timespan: Date.now() - this._lastReportTime,
                    time: se()
                }), t;
            }
        }, {
            key: "_report",
            value: function(e) {
                var t = this, n = [], r = null;
                X(e) ? this._items.forEach(function(e) {
                    null !== (r = t._getStatInfo(e)) && n.push(r);
                }) : null !== (r = this._getStatInfo(e)) && n.push(r), K.debug("SumStatController._report", n), 
                this._statInfoArr.length > 0 && (n = n.concat(this.statInfoArr), this._statInfoArr = []), 
                this._doReport(n);
            }
        }, {
            key: "_doReport",
            value: function(e) {
                var t = this;
                Ie(e) ? K.warn("SumStatController._doReport statInfoArr is empty, do nothing") : this.request({
                    name: "ssoSumStat",
                    action: "create",
                    param: {
                        table: this.TABLE,
                        report: e
                    }
                }).then(function() {
                    t._lastReportTime = Date.now(), t._retryCount > 0 && (K.debug("SumStatController._doReport retry success"), 
                    t._retryCount = 0);
                }).catch(function(n) {
                    K.warn("SumStatController._doReport, online:".concat(t.getNetworkType(), " error:"), n, e), 
                    t._retryCount <= 1 ? setTimeout(function() {
                        K.info("SumStatController._doReport retry", e), t._retryCount += 1, t._doReport(e);
                    }, 5e3) : (t._retryCount = 0, t._statInfoArr = t._statInfoArr.concat(e), t._flusgAtOnce());
                });
            }
        }, {
            key: "_flushAtOnce",
            value: function() {
                var e = this.tim.storage, t = e.getItem(this.TAG, !1), n = this._statInfoArr;
                if (Ie(t)) K.log("SumStatController._flushAtOnce nums=" + n.length), e.setItem(this.TAG, n, !0, !1); else {
                    var r = n.concat(t);
                    r.length > 10 && (r = r.slice(0, 10)), K.log("SumStatController._flushAtOnce nums=" + r.length), 
                    e.setItem(this.TAG, r, !0, !1);
                }
                this._statInfoArr = [];
            }
        }, {
            key: "reset",
            value: function() {
                K.info("SumStatController.reset"), this._report(), this._avgCalc.reset(), this._successRateCalc.reset();
            }
        } ]), t;
    }(), ji = function() {
        function e() {
            o(this, e), this._funcMap = new Map();
        }
        return s(e, [ {
            key: "defense",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                if ("string" != typeof e) return null;
                if (0 === e.length) return null;
                if ("function" != typeof t) return null;
                if (this._funcMap.has(e) && this._funcMap.get(e).has(t)) return this._funcMap.get(e).get(t);
                this._funcMap.has(e) || this._funcMap.set(e, new Map());
                var r = null;
                return this._funcMap.get(e).has(t) ? r = this._funcMap.get(e).get(t) : (r = this._pack(t, n), 
                this._funcMap.get(e).set(t, r)), r;
            }
        }, {
            key: "defenseOnce",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return "function" != typeof e ? null : this._pack(e, t);
            }
        }, {
            key: "find",
            value: function(e, t) {
                return "string" != typeof e || 0 === e.length || "function" != typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (K.log("SafetyCallback.find: 找不到 func —— ".concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")), 
                null) : (K.log("SafetyCallback.find: 找不到 eventName-".concat(e, " 对应的 func")), null);
            }
        }, {
            key: "delete",
            value: function(e, t) {
                return "function" == typeof t && !!this._funcMap.has(e) && !!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t), 
                0 === this._funcMap.get(e).size && this._funcMap.delete(e), !0);
            }
        }, {
            key: "_pack",
            value: function(e, t) {
                return function() {
                    try {
                        e.apply(t, Array.from(arguments));
                    } catch (e) {
                        console.error(e);
                    }
                };
            }
        } ]), e;
    }(), $i = function() {
        function t(e) {
            o(this, t);
            var n = new Dn();
            n.setMethod(Sn).setStart(), ln.mixin(this), this._initOptions(e), this._initMemberVariables(), 
            this._initControllers(), this._initListener(), Dn.bindController(this.eventStatController), 
            n.setCode(0).setText("mp=".concat(k, "-ua=").concat(w)).setEnd(), K.info("SDK inWxMiniApp:".concat(k, ", SDKAppID:").concat(e.SDKAppID, ", UserAgent:").concat(w)), 
            this._safetyCallbackFactory = new ji();
        }
        return s(t, [ {
            key: "login",
            value: function(e) {
                return K.time(vn), this._ssoLog = new Dn(), this._ssoLog.setMethod("sdkReady").setStart(), 
                this.netMonitor.start(), this.loginInfo.identifier = e.identifier || e.userID, this.loginInfo.userSig = e.userSig, 
                this.signController.login(this.loginInfo);
            }
        }, {
            key: "logout",
            value: function() {
                var e = this.signController.logout();
                return this.resetSDK(), e;
            }
        }, {
            key: "on",
            value: function(e, t, n) {
                K.debug("on", "eventName:".concat(e)), this.outerEmitter.on(e, this._safetyCallbackFactory.defense(e, t, n), n);
            }
        }, {
            key: "once",
            value: function(e, t, n) {
                K.debug("once", "eventName:".concat(e)), this.outerEmitter.once(e, this._safetyCallbackFactory.defenseOnce(t, n), n || this);
            }
        }, {
            key: "off",
            value: function(e, t, n, r) {
                K.debug("off", "eventName:".concat(e));
                var o = this._safetyCallbackFactory.find(e, t);
                null !== o && (this.outerEmitter.off(e, o, n, r), this._safetyCallbackFactory.delete(e, t));
            }
        }, {
            key: "registerPlugin",
            value: function(e) {
                var t = this;
                this.plugins || (this.plugins = {}), Object.keys(e).forEach(function(n) {
                    t.plugins[n] = e[n];
                });
            }
        }, {
            key: "getPlugin",
            value: function(e) {
                return this.plugins[e] || void 0;
            }
        }, {
            key: "setLogLevel",
            value: function(e) {
                e <= 0 && (console.log([ "", " ________  ______  __       __  __       __  ________  _______", "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\", " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\", "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$", "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$", "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\", "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$", "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$", "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$", "", "" ].join("\n")), 
                console.log("%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc", "color:#ff0000"), 
                console.log([ "", "参考以下文档，会更快解决问题哦！(#^.^#)\n", "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n", "SDK 接口文档: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html\n", "常见问题: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/tutorial-01-faq.html\n", "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n", "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n" ].join("\n"))), 
                K.setLevel(e);
            }
        }, {
            key: "downloadLog",
            value: function() {
                var e = document.createElement("a"), t = new Date(), n = new Blob(this.getLog());
                e.download = "TIM-" + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + this.loginInfo.SDKAppID + "-" + this.context.identifier + ".txt", 
                e.href = URL.createObjectURL(n), e.click(), URL.revokeObjectURL(n);
            }
        }, {
            key: "destroy",
            value: function() {
                this.logout(), this.outerEmitter.emit(e.SDK_DESTROY, {
                    SDKAppID: this.loginInfo.SDKAppID
                });
            }
        }, {
            key: "createTextMessage",
            value: function(e) {
                return this.messageController.createTextMessage(e);
            }
        }, {
            key: "createImageMessage",
            value: function(e) {
                return this.messageController.createImageMessage(e);
            }
        }, {
            key: "createAudioMessage",
            value: function(e) {
                return this.messageController.createAudioMessage(e);
            }
        }, {
            key: "createVideoMessage",
            value: function(e) {
                return this.messageController.createVideoMessage(e);
            }
        }, {
            key: "createCustomMessage",
            value: function(e) {
                return this.messageController.createCustomMessage(e);
            }
        }, {
            key: "createFaceMessage",
            value: function(e) {
                return this.messageController.createFaceMessage(e);
            }
        }, {
            key: "createFileMessage",
            value: function(e) {
                return this.messageController.createFileMessage(e);
            }
        }, {
            key: "sendMessage",
            value: function(e) {
                return e instanceof at ? this.messageController.sendMessageInstance(e) : yn(new Ke({
                    code: 2105,
                    message: "需要 Message 的实例"
                }));
            }
        }, {
            key: "revokeMessage",
            value: function(e) {
                return this.messageController.revokeMessage(e);
            }
        }, {
            key: "resendMessage",
            value: function(e) {
                return this.messageController.resendMessage(e);
            }
        }, {
            key: "getMessageList",
            value: function(e) {
                return this.messageController.getMessageList(e);
            }
        }, {
            key: "setMessageRead",
            value: function(e) {
                return this.messageController.setMessageRead(e);
            }
        }, {
            key: "getConversationList",
            value: function() {
                return this.conversationController.getConversationList();
            }
        }, {
            key: "getConversationProfile",
            value: function(e) {
                return this.conversationController.getConversationProfile(e);
            }
        }, {
            key: "deleteConversation",
            value: function(e) {
                return this.conversationController.deleteConversation(e);
            }
        }, {
            key: "getMyProfile",
            value: function() {
                return this.userController.getMyProfile();
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                return this.userController.getUserProfile(e);
            }
        }, {
            key: "updateMyProfile",
            value: function(e) {
                return this.userController.updateMyProfile(e);
            }
        }, {
            key: "getFriendList",
            value: function() {
                return this.userController.getFriendList();
            }
        }, {
            key: "deleteFriend",
            value: function(e) {
                return this.userController.deleteFriend(e);
            }
        }, {
            key: "getBlacklist",
            value: function() {
                return this.userController.getBlacklist();
            }
        }, {
            key: "addToBlacklist",
            value: function(e) {
                return this.userController.addBlacklist(e);
            }
        }, {
            key: "removeFromBlacklist",
            value: function(e) {
                return this.userController.deleteBlacklist(e);
            }
        }, {
            key: "getGroupList",
            value: function(e) {
                return this.groupController.getGroupList(e);
            }
        }, {
            key: "getGroupProfile",
            value: function(e) {
                return this.groupController.getGroupProfile(e);
            }
        }, {
            key: "createGroup",
            value: function(e) {
                return this.groupController.createGroup(e);
            }
        }, {
            key: "dismissGroup",
            value: function(e) {
                return this.groupController.dismissGroup(e);
            }
        }, {
            key: "updateGroupProfile",
            value: function(e) {
                return this.groupController.updateGroupProfile(e);
            }
        }, {
            key: "joinGroup",
            value: function(e) {
                return this.groupController.joinGroup(e);
            }
        }, {
            key: "quitGroup",
            value: function(e) {
                return this.groupController.quitGroup(e);
            }
        }, {
            key: "searchGroupByID",
            value: function(e) {
                return this.groupController.searchGroupByID(e);
            }
        }, {
            key: "changeGroupOwner",
            value: function(e) {
                return this.groupController.changeGroupOwner(e);
            }
        }, {
            key: "handleGroupApplication",
            value: function(e) {
                return this.groupController.handleGroupApplication(e);
            }
        }, {
            key: "setMessageRemindType",
            value: function(e) {
                return this.groupController.setMessageRemindType(e);
            }
        }, {
            key: "getGroupMemberList",
            value: function(e) {
                return this.groupController.getGroupMemberList(e);
            }
        }, {
            key: "getGroupMemberProfile",
            value: function(e) {
                return this.groupController.getGroupMemberProfile(e);
            }
        }, {
            key: "addGroupMember",
            value: function(e) {
                return this.groupController.addGroupMember(e);
            }
        }, {
            key: "deleteGroupMember",
            value: function(e) {
                return this.groupController.deleteGroupMember(e);
            }
        }, {
            key: "setGroupMemberMuteTime",
            value: function(e) {
                return this.groupController.setGroupMemberMuteTime(e);
            }
        }, {
            key: "setGroupMemberRole",
            value: function(e) {
                return this.groupController.setGroupMemberRole(e);
            }
        }, {
            key: "setGroupMemberNameCard",
            value: function(e) {
                return this.groupController.setGroupMemberNameCard(e);
            }
        }, {
            key: "setGroupMemberCustomField",
            value: function(e) {
                return this.groupController.setGroupMemberCustomField(e);
            }
        }, {
            key: "_initOptions",
            value: function(e) {
                this.plugins = {}, this.loginInfo = {
                    SDKAppID: e.SDKAppID || null,
                    accountType: ue(),
                    identifier: null,
                    userSig: null
                }, this.options = {
                    runLoopNetType: e.runLoopNetType || 2,
                    enablePointer: e.enablePointer || !1
                };
            }
        }, {
            key: "_initMemberVariables",
            value: function() {
                var e;
                this.context = {}, this.innerEmitter = new yi(), this.outerEmitter = new yi(), e = this.outerEmitter, 
                dn = e, this.packageConfig = new _i(this), this.storage = new mi(this), this.netMonitor = new Hi(), 
                this.outerEmitter._emit = this.outerEmitter.emit, this.outerEmitter.emit = function(e, t) {
                    var n = arguments[0], r = [ n, {
                        name: arguments[0],
                        data: arguments[1]
                    } ];
                    K.debug("emit outer event:".concat(n), r[1]), this.outerEmitter._emit.apply(this.outerEmitter, r);
                }.bind(this), this.innerEmitter._emit = this.innerEmitter.emit, this.innerEmitter.emit = function(e, t) {
                    var n;
                    z(arguments[1]) && arguments[1].data ? (K.warn("inner eventData has data property, please check!"), 
                    n = [ e, {
                        name: arguments[0],
                        data: arguments[1].data
                    } ]) : n = [ e, {
                        name: arguments[0],
                        data: arguments[1]
                    } ], K.debug("emit inner event:".concat(e), n[1]), this.innerEmitter._emit.apply(this.innerEmitter, n);
                }.bind(this);
            }
        }, {
            key: "_initControllers",
            value: function() {
                this.exceptionController = new Fo(this), this.connectionController = new xo(this), 
                this.contextController = new fn(this), this.context = this.contextController.getContext(), 
                this.signController = new Tn(this), this.messageController = new ai(this), this.conversationController = new ei(this), 
                this.userController = new Wo(this), this.groupController = new fi(this), this.notificationController = new Mi(this), 
                this.bigDataHallwayController = new Si(this), this.statusController = new gi(this), 
                this.uploadController = new Di(this), this.eventStatController = new Ui(this), this.sumStatController = new Vi(this), 
                this.mtaReportController = new Gi(this), this._initReadyListener();
            }
        }, {
            key: "_initListener",
            value: function() {
                var e = this;
                if (this.innerEmitter.on(bt, this._onSlowStart, this), k && "function" == typeof wx.onAppShow && "function" == typeof wx.onAppHide) {
                    var t = null;
                    wx.onAppHide(function() {
                        (t = new Dn()).setMethod("mpHideToShow").setStart();
                    }), wx.onAppShow(function() {
                        null !== t && t.setCode(0).setNetworkType(e.netMonitor.getNetworkType()).setEnd();
                    });
                }
            }
        }, {
            key: "_initReadyListener",
            value: function() {
                for (var e = this, t = this.readyList, n = 0, r = t.length; n < r; n++) this[t[n]].ready(function() {
                    return e._readyHandle();
                });
            }
        }, {
            key: "_onSlowStart",
            value: function() {
                K.log("slow start longpolling..."), this.resetSDK(), this.login(this.loginInfo);
            }
        }, {
            key: "resetSDK",
            value: function() {
                var t = this;
                this.initList.forEach(function(e) {
                    t[e].reset && t[e].reset();
                }), this.netMonitor.reset(), this.storage.reset(), this.resetReady(), this._initReadyListener(), 
                this.outerEmitter.emit(e.SDK_NOT_READY);
            }
        }, {
            key: "_readyHandle",
            value: function() {
                for (var t = this.readyList, n = !0, r = 0, o = t.length; r < o; r++) if (!this[t[r]].isReady()) {
                    n = !1;
                    break;
                }
                if (n) {
                    var i = K.timeEnd(vn);
                    K.warn("SDK is ready. cost=".concat(i, "ms")), this.triggerReady(), this.innerEmitter.emit(on), 
                    this.outerEmitter.emit(e.SDK_READY), this._ssoLog.setCode(0).setNetworkType(this.netMonitor.getNetworkType()).setText(i).setEnd();
                }
            }
        } ]), t;
    }();
    $i.prototype.readyList = [ "conversationController" ], $i.prototype.initList = [ "exceptionController", "connectionController", "signController", "contextController", "messageController", "conversationController", "userController", "groupController", "notificationController", "eventStatController", "sumStatController" ];
    var Yi = {
        login: "login",
        on: "on",
        off: "off",
        ready: "ready",
        setLogLevel: "setLogLevel",
        joinGroup: "joinGroup",
        quitGroup: "quitGroup",
        registerPlugin: "registerPlugin"
    }, zi = {}, Wi = {};
    return Wi.create = function(t) {
        if (t.SDKAppID && zi[t.SDKAppID]) return zi[t.SDKAppID];
        K.log("TIM.create");
        var n = new $i(t);
        n.on(e.SDK_DESTROY, function(e) {
            zi[e.data.SDKAppID] = null, delete zi[e.data.SDKAppID];
        });
        var r = function(e) {
            var t = Object.create(null);
            return Object.keys(ct).forEach(function(n) {
                if (e[n]) {
                    var r = ct[n], o = new _();
                    t[r] = function() {
                        var t = Array.from(arguments);
                        return o.use(function(t, r) {
                            if (function(e, t) {
                                return !(!e.isReady() && void 0 === Yi[t] && (e.innerEmitter.emit(Qt, new Ke({
                                    code: $e,
                                    message: "".concat(t, " ").concat(Ze, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_READY")
                                })), 1));
                            }(e, n)) return r();
                        }).use(function(e, t) {
                            if (!0 === function(e, t, n) {
                                if (void 0 === t) return !0;
                                var r = !0;
                                if ("object" === T(t).toLowerCase()) Object.keys(t).forEach(function(o) {
                                    var i = 1 === e.length ? e[0][o] : void 0;
                                    r = !!Me(i, t[o], n, o) && r;
                                }); else if ("array" === T(t).toLowerCase()) for (var o = 0; o < t.length; o++) r = !!Me(e[o], t[o], n, t[o].name) && r;
                                if (r) return r;
                                throw new Error("Params validate failed.");
                            }(e, ut[n], r)) return t();
                        }).use(function(t, r) {
                            return e[n].apply(e, t);
                        }), o.run(t);
                    };
                }
            }), t;
        }(n);
        return zi[t.SDKAppID] = r, K.log("TIM.create ok"), r;
    }, Wi.TYPES = t, Wi.EVENT = e, Wi.VERSION = "2.5.1", K.log("TIM.VERSION: ".concat(Wi.VERSION)), 
    Wi;
}, "object" == ("undefined" == typeof exports ? "undefined" : (0, r.default)(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).TIM = n();