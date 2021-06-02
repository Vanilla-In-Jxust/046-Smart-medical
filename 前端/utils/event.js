module.exports = function(n) {
    var t = {}, e = [];
    (n = n || this).on = function(e, r, l) {
        return (t[e] = t[e] || []).push([ r, l ]), n;
    }, n.off = function(r, l) {
        r || (t = {});
        for (var i = t[r] || e, o = i.length = l ? i.length : 0; o--; ) l == i[o][0] && i.splice(o, 1);
        return n;
    }, n.emit = function(r) {
        for (var l, i = t[r] || e, o = i.length > 0 ? i.slice(0, i.length) : i, u = 0; l = o[u++]; ) l[0].apply(l[1], e.slice.call(arguments, 1));
        return n;
    };
};