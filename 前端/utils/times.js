function t(t, e) {
    var n = {}, r = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六"), a = new Date(t);
    a.setDate(a.getDate() + e);
    var o = a.getDay(), g = (a.getFullYear(), a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1), u = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
    return n.time = g + "月" + u + "日", n.week = r[o], n;
}

var e = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, a = t.getDate(), o = t.getHours(), g = t.getMinutes(), u = t.getSeconds();
        return [ n, r, a ].map(e).join("/") + " " + [ o, g, u ].map(e).join(":");
    },
    formatDate: function(t) {
        return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(e).join("-");
    },
    getDates: function(e, n) {
        for (var r = [], a = 0; a < e; a++) {
            var o = t(n, a);
            r.push(o);
        }
        return r;
    }
};