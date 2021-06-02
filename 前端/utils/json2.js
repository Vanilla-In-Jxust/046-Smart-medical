var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault"), _typeof2 = _interopRequireDefault(require("../@babel/runtime/helpers/typeof"));

"object" !== ("undefined" == typeof JSON ? "undefined" : (0, _typeof2.default)(JSON)) && (JSON = {}), 
function() {
    function f(e) {
        return e < 10 ? "0" + e : e;
    }
    var cx, escapable, gap, indent, meta, rep;
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + e + '"';
    }
    function str(e, t) {
        var r, n, f, u, o, i = gap, a = t[e];
        switch (a && "object" === (0, _typeof2.default)(a) && "function" == typeof a.toJSON && (a = a.toJSON(e)), 
        "function" == typeof rep && (a = rep.call(t, e, a)), (0, _typeof2.default)(a)) {
          case "string":
            return quote(a);

          case "number":
            return isFinite(a) ? String(a) : "null";

          case "boolean":
          case "null":
            return String(a);

          case "object":
            if (!a) return "null";
            if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                for (u = a.length, r = 0; r < u; r += 1) o[r] = str(r, a) || "null";
                return f = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + i + "]" : "[" + o.join(",") + "]", 
                gap = i, f;
            }
            if (rep && "object" === (0, _typeof2.default)(rep)) for (u = rep.length, r = 0; r < u; r += 1) "string" == typeof rep[r] && (f = str(n = rep[r], a)) && o.push(quote(n) + (gap ? ": " : ":") + f); else for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (f = str(n, a)) && o.push(quote(n) + (gap ? ": " : ":") + f);
            return f = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + i + "}" : "{" + o.join(",") + "}", 
            gap = i, f;
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf();
    }), "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, 
    meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, JSON.stringify = function(e, t, r) {
        var n;
        if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1) indent += " "; else "string" == typeof r && (indent = r);
        if (rep = t, t && "function" != typeof t && ("object" !== (0, _typeof2.default)(t) || "number" != typeof t.length)) throw new Error("JSON.stringify");
        return str("", {
            "": e
        });
    }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, 
    JSON.parse = function(text, reviver) {
        var j;
        function walk(e, t) {
            var r, n, f = e[t];
            if (f && "object" === (0, _typeof2.default)(f)) for (r in f) Object.prototype.hasOwnProperty.call(f, r) && (void 0 !== (n = walk(f, r)) ? f[r] = n : delete f[r]);
            return reviver.call(e, t, f);
        }
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), 
        "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse");
    });
}();