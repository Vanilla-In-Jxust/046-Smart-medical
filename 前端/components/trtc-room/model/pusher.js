var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../../@babel/runtime/helpers/classCallCheck")), s = e(require("../../../@babel/runtime/helpers/createClass")), r = require("../common/constants.js"), u = function() {
    function e(s) {
        (0, t.default)(this, e), Object.assign(this, r.DEFAULT_PUSHER_CONFIG, {
            isVisible: !0
        }, s);
    }
    return (0, s.default)(e, [ {
        key: "getPusherContext",
        value: function(e) {
            return this.pusherContext || (this.pusherContext = wx.createLivePusherContext(e)), 
            this.pusherContext;
        }
    }, {
        key: "reset",
        value: function() {
            console.log("Pusher reset", this.pusherContext), this.pusherContext && (console.log("Pusher pusherContext.stop()"), 
            this.pusherContext.stop(), this.pusherContext = null), Object.assign(this, r.DEFAULT_PUSHER_CONFIG, {
                isVisible: !0
            });
        }
    } ]), e;
}();

exports.default = u;