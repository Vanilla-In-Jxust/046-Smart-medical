var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../../@babel/runtime/helpers/classCallCheck")), s = e(require("../../../@babel/runtime/helpers/createClass")), r = e(require("../utils/event.js")), i = e(require("../model/user.js")), a = e(require("../model/stream.js")), u = require("../common/constants.js"), n = "UserController", o = function() {
    function e(s) {
        (0, t.default)(this, e), this.userMap = new Map(), this.userList = [], this.streamList = [], 
        this._emitter = new r.default(), this.componentContext = s, this.isNewVersion = s.isNewVersion;
    }
    return (0, s.default)(e, [ {
        key: "userEventHandler",
        value: function(e) {
            var t, s = e.detail.code;
            if (!e.detail.message || "string" != typeof e.detail.message) return console.warn(n, "userEventHandler 数据格式错误"), 
            !1;
            try {
                t = JSON.parse(e.detail.message);
            } catch (e) {
                return console.warn(n, "userEventHandler 数据格式错误", e), !1;
            }
            switch (s) {
              case 1020:
                this.isNewVersion;
                break;

              case 1031:
                this.addUser(t);
                break;

              case 1032:
                this.removeUser(t);
                break;

              case 1033:
                this.updateUserVideo(t);
                break;

              case 1034:
                this.updateUserAudio(t);
            }
        }
    }, {
        key: "addUser",
        value: function(e) {
            var t = this, s = e.userlist, r = this.userMap;
            Array.isArray(s) && s.length > 0 && s.forEach(function(e) {
                var s = e.userid, a = t.getUser(s);
                a || (a = new i.default({
                    userID: s
                }), t.userList.push({
                    userID: s
                })), r.set(s, a), t._emitter.emit(u.EVENT.REMOTE_USER_JOIN, {
                    userID: s,
                    userList: t.userList
                });
            });
        }
    }, {
        key: "removeUser",
        value: function(e) {
            var t = this, s = e.userlist;
            Array.isArray(s) && s.length > 0 && s.forEach(function(e) {
                var s = e.userid, r = t.getUser(s);
                r && r.streams && (t._removeUserAndStream(s), r.streams.main && r.streams.main.reset(), 
                r.streams.aux && r.streams.aux.reset(), t._emitter.emit(u.EVENT.REMOTE_USER_LEAVE, {
                    userID: s,
                    userList: t.userList,
                    streamList: t.streamList
                }), r = void 0, t.userMap.delete(s));
            });
        }
    }, {
        key: "updateUserVideo",
        value: function(e) {
            var t = this;
            console.log(n, "updateUserVideo", e);
            var s = e.userlist;
            Array.isArray(s) && s.length > 0 && s.forEach(function(e) {
                var s = e.userid, r = e.streamtype, i = s + "_" + r, o = e.hasvideo, m = e.playurl, l = t.getUser(s);
                if (l) {
                    var d = l.streams[r];
                    console.log(n, "updateUserVideo start", l, r, d), d ? (d.setProperty({
                        hasVideo: o
                    }), o || d.hasAudio || t._removeStream(d)) : (l.streams[r] = d = new a.default({
                        userID: s,
                        streamID: i,
                        hasVideo: o,
                        src: m,
                        streamType: r
                    }), t._addStream(d)), "aux" === r && (o ? (d.objectFit = "contain", t._addStream(d)) : t._removeStream(d)), 
                    t.userList.find(function(e) {
                        if (e.userID === s) return e["has".concat(r.replace(/^\S/, function(e) {
                            return e.toUpperCase();
                        }), "Video")] = o, !0;
                    }), console.log(n, "updateUserVideo end", l, r, d);
                    var c = o ? u.EVENT.REMOTE_VIDEO_ADD : u.EVENT.REMOTE_VIDEO_REMOVE;
                    t._emitter.emit(c, {
                        stream: d,
                        streamList: t.streamList,
                        userList: t.userList
                    });
                }
            });
        }
    }, {
        key: "updateUserAudio",
        value: function(e) {
            var t = this, s = e.userlist;
            Array.isArray(s) && s.length > 0 && s.forEach(function(e) {
                var s = e.userid, r = s + "_main", i = e.hasaudio, n = e.playurl, o = t.getUser(s);
                if (o) {
                    var m = o.streams.main;
                    m ? (m.setProperty({
                        hasAudio: i
                    }), i || m.hasVideo || t._removeStream(m)) : (o.streams.main = m = new a.default({
                        userID: s,
                        streamID: r,
                        hasAudio: i,
                        src: n,
                        streamType: "main"
                    }), t._addStream(m)), t.userList.find(function(e) {
                        if (e.userID === s) return e["has".concat("main".replace(/^\S/, function(e) {
                            return e.toUpperCase();
                        }), "Audio")] = i, !0;
                    });
                    var l = i ? u.EVENT.REMOTE_AUDIO_ADD : u.EVENT.REMOTE_AUDIO_REMOVE;
                    t._emitter.emit(l, {
                        stream: m,
                        streamList: t.streamList,
                        userList: t.userList
                    });
                }
            });
        }
    }, {
        key: "getUser",
        value: function(e) {
            return this.userMap.get(e);
        }
    }, {
        key: "getStream",
        value: function(e) {
            var t = e.userID, s = e.streamType, r = this.userMap.get(t);
            if (r) return r.streams[s];
        }
    }, {
        key: "getUserList",
        value: function() {
            return this.userList;
        }
    }, {
        key: "getStreamList",
        value: function() {
            return this.streamList;
        }
    }, {
        key: "reset",
        value: function() {
            return this.streamList.forEach(function(e) {
                e.reset();
            }), this.streamList = [], this.userList = [], this.userMap.clear(), {
                userList: this.userList,
                streamList: this.streamList
            };
        }
    }, {
        key: "on",
        value: function(e, t, s) {
            this._emitter.on(e, t, s);
        }
    }, {
        key: "off",
        value: function(e, t) {
            this._emitter.off(e, t);
        }
    }, {
        key: "_removeUserAndStream",
        value: function(e) {
            this.streamList = this.streamList.filter(function(t) {
                return t.userID !== e && "" !== t.userID;
            }), this.userList = this.userList.filter(function(t) {
                return t.userID !== e;
            });
        }
    }, {
        key: "_addStream",
        value: function(e) {
            this.streamList.includes(e) || this.streamList.push(e);
        }
    }, {
        key: "_removeStream",
        value: function(e) {
            this.streamList = this.streamList.filter(function(t) {
                return t.userID !== e.userID || t.streamType !== e.streamType;
            }), this.getUser(e.userID).streams[e.streamType] = void 0;
        }
    } ]), e;
}();

exports.default = o;