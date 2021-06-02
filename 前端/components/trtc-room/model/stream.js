var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../../@babel/runtime/helpers/classCallCheck")), s = e(require("../../../@babel/runtime/helpers/createClass")), r = require("../common/constants.js"), i = function() {
    function e(s) {
        (0, t.default)(this, e), Object.assign(this, r.DEFAULT_PLAYER_CONFIG, {
            userID: "",
            streamType: "",
            streamID: "",
            isVisible: !0,
            hasVideo: !1,
            hasAudio: !1,
            volume: 0,
            playerContext: void 0
        }, s);
    }
    return (0, s.default)(e, [ {
        key: "setProperty",
        value: function(e) {
            Object.assign(this, e);
        }
    }, {
        key: "reset",
        value: function() {
            this.playerContext && (this.playerContext.stop(), this.playerContext = void 0), 
            Object.assign(this, r.DEFAULT_PLAYER_CONFIG, {
                userID: "",
                streamType: "",
                streamID: "",
                isVisible: !0,
                hasVideo: !1,
                hasAudio: !1,
                volume: 0,
                playerContext: void 0
            });
        }
    } ]), e;
}();

exports.default = i;