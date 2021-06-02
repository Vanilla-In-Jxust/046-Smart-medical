var n = [], i = [];

function t() {
    i.push(this), n.push({});
}

t.prototype = {
    on: function(t, e) {
        var f = n[i.indexOf(this)], r = f[t] = f[t] || [];
        ~r.indexOf(e) || r.push(e);
    },
    off: function(t, e) {
        var f = n[i.indexOf(this)], r = f[t] = f[t] || [], o = r.indexOf(e);
        ~o && r.splice(o, 1);
    },
    fire: function(t) {
        for (var e = n[i.indexOf(this)], f = e[t] = e[t] || [], r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) o[s - 1] = arguments[s];
        for (var u = 0; u < f.length; u++) f[u].apply(null, o);
    }
}, module.exports = t;