var o = require("../@babel/runtime/helpers/interopRequireDefault")(require("./WebIMConfig"));

console.group = console.group || {}, console.groupEnd = console.groupEnd || {};

var e = {}, n = e.WebIM = websdk;

e.WebIM.config = o.default, n.isDebug = function(o) {
    o && (n.config.isDebug = o.isDebug, function(o) {
        Strophe.Strophe.log = function(o, e) {}, Strophe.Strophe.Connection.prototype.rawOutput = o ? function(o) {
            try {
                console.group("%csend # " + (e = new Date(), n = e.getHours(), t = e.getMinutes(), 
                i = e.getSeconds(), (n < 10 ? "0" + n : n) + ":" + (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i) + " "), "color: blue; font-size: large"), 
                console.log("%c" + o, "color: blue"), console.groupEnd();
            } catch (o) {
                console.log(o);
            }
            var e, n, t, i;
        } : function() {};
    }(n.config.isDebug));
}, n.config.autoSignIn = !1, n.config.autoSignIn && (n.config.autoSignInName = "lwz2", 
n.config.autoSignInPwd = "1"), n.parseEmoji = function(o) {
    if (void 0 === n.Emoji || void 0 === n.Emoji.map) return o;
    var e = n.Emoji, t = null, i = [], a = [];
    for (var r in e.map) if (e.map.hasOwnProperty(r)) for (;o.indexOf(r) > -1; ) o = o.replace(r, "^" + e.map[r] + "^");
    for (var c = o.split("^"), u = (t = /^e.*g$/, 0); u < c.length; u++) "" != c[u] && i.push(c[u]);
    for (u = 0; u < i.length; u++) {
        var g;
        if (t.test(i[u])) (g = {}).data = i[u], g.type = "emoji", a.push(g); else (g = {}).data = i[u], 
        g.type = "txt", a.push(g);
    }
    return a;
}, n.time = function() {
    var o = new Date(), e = o.getHours(), n = o.getMinutes(), t = o.getSeconds();
    return o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate() + " " + (e < 10 ? "0" + e : e) + ":" + (n < 10 ? "0" + n : n) + ":" + (t < 10 ? "0" + t : t);
}, n.Emoji = {
    path: "../../../../../images/faces/",
    map: {}
}, n.EmojiObj = {
    path: "../../../../../images/faces/",
    map1: {},
    map2: {},
    map3: {},
    map4: {},
    map5: {},
    map6: {
        "[del]": "del.png"
    }
}, n.conn = new n.connection({
    isMultiLoginSessions: n.config.isMultiLoginSessions,
    https: "boolean" == typeof n.config.https ? n.config.https : "https:" === location.protocol,
    url: n.config.xmppURL,
    apiUrl: n.config.apiURL,
    isAutoLogin: !1,
    heartBeatWait: n.config.heartBeatWait,
    autoReconnectNumMax: n.config.autoReconnectNumMax,
    autoReconnectInterval: n.config.autoReconnectInterval
}), module.exports = {
    default: n
};