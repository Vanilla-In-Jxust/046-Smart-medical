function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function t(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function n(e) {
    var t = e + "0010000app";
    return console.log(t), a.hex_md5(t);
}

function r() {
    return "0000";
}

function o() {
    return function() {
        var e = new Date(), t = e.getMonth() + 1, n = e.getDate();
        return t >= 1 && t <= 9 && (t = "0" + t), n >= 0 && n <= 9 && (n = "0" + n), e.getFullYear() + "-" + t + "-" + n + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
    }();
}

function u() {
    return "0010000app";
}

function i(e) {
    var t = o();
    return e.set("ko", "0000"), e.set("time", t), e.set("token", n(t)), e;
}

var g, a = require("md5.js");

module.exports = (g = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), u = e.getHours(), i = e.getMinutes(), g = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ u, i, g ].map(t).join(":");
    },
    getToken: n,
    getKo: r,
    getTime: o,
    getPswId: u
}, e(g, "getPswId", u), e(g, "tokenAndKo", i), e(g, "tokenAndKo", i), g);