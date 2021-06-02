var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/classCallCheck")), i = e(require("../@babel/runtime/helpers/createClass")), r = require("./util.js"), u = function() {
    function e() {
        (0, t.default)(this, e), this.init();
    }
    return (0, i.default)(e, [ {
        key: "init",
        value: function() {
            this.perf = [], this.ts = new Date().getTime();
        }
    }, {
        key: "profile",
        value: function(e) {
            var t = new Date().getTime();
            this.perf.push("".concat(e, ": ").concat(t - this.ts, "ms"));
        }
    }, {
        key: "dump",
        value: function() {
            r.log("".concat(JSON.stringify(this.perf)));
        }
    } ]), e;
}();

module.exports = new u();