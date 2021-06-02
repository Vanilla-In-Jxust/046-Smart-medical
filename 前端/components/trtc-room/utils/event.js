var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/classCallCheck")), s = e(require("../../../@babel/runtime/helpers/createClass")), r = function() {
    function e() {
        (0, t.default)(this, e);
    }
    return (0, s.default)(e, [ {
        key: "on",
        value: function(e, t, s) {
            "function" == typeof t ? (this._stores = this._stores || {}, (this._stores[e] = this._stores[e] || []).push({
                cb: t,
                ctx: s
            })) : console.error("listener must be a function");
        }
    }, {
        key: "emit",
        value: function(e) {
            this._stores = this._stores || {};
            var t, s = this._stores[e];
            if (s) {
                s = s.slice(0), (t = [].slice.call(arguments, 1))[0] = {
                    eventCode: e,
                    data: t[0]
                };
                for (var r = 0, i = s.length; r < i; r++) s[r].cb.apply(s[r].ctx, t);
            }
        }
    }, {
        key: "off",
        value: function(e, t) {
            if (this._stores = this._stores || {}, arguments.length) {
                var s = this._stores[e];
                if (s) if (1 !== arguments.length) {
                    for (var r = 0, i = s.length; r < i; r++) if (s[r].cb === t) {
                        s.splice(r, 1);
                        break;
                    }
                } else delete this._stores[e];
            } else this._stores = {};
        }
    } ]), e;
}();

module.exports = r;