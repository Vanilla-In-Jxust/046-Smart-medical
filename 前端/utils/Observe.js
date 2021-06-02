var n = n || [], e = e || [], t = t || [];

module.exports = {
    del: function(t, r) {
        var i = e.indexOf(t);
        if (~i) {
            var u = n[i], f = u.indexOf(r);
            ~f && (u.splice(f, 1), u.length || e.splice(i, 1));
        }
    },
    add: function(r, i) {
        var u = e.indexOf(r);
        ~u || (u = e.length, function(r) {
            e.push(r), n.push([]), t.push(Object.assign({}, r));
        }(r));
        var f = n[u];
        f.push(i);
        var s = function(n) {
            Object.defineProperty(r, n, {
                set: function(e) {
                    t[u][n] = e;
                    for (var i = 0; i < f.length; i++) f[i].apply(r, [ e, n ]);
                },
                get: function() {
                    return t[u][n];
                }
            });
        };
        for (var a in r) s(a);
        return r;
    }
};