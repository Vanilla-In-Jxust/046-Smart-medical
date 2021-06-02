var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../@babel/runtime/helpers/classCallCheck")), r = e(require("../@babel/runtime/helpers/createClass")), u = function() {
    function e() {
        (0, t.default)(this, e);
    }
    return (0, r.default)(e, null, [ {
        key: "init",
        value: function(e) {
            e.clazzName = e.constructor.name;
        }
    }, {
        key: "putPage",
        value: function(e, t) {
            this.pages[e] = t;
        }
    }, {
        key: "getPage",
        value: function(e) {
            return this.pages[e];
        }
    }, {
        key: "removePage",
        value: function(e) {
            delete this.pages[e];
        }
    } ]), e;
}();

exports.default = u, u.pages = {};