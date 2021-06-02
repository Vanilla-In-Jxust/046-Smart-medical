Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, t) {
    e = e.split("."), t = t.split(".");
    var r = Math.max(e.length, t.length);
    for (;e.length < r; ) e.push("0");
    for (;t.length < r; ) t.push("0");
    for (var n = 0; n < r; n++) {
        var s = parseInt(e[n]), u = parseInt(t[n]);
        if (s > u) return 1;
        if (s < u) return -1;
    }
    return 0;
};