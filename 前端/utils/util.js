var t, e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/defineProperty")), n = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, o = [], r = !1, c = "".concat(parseInt(1e6 * Math.random())), i = function(t) {
    var e = t.getFullYear(), n = t.getMonth() + 1, o = t.getDate(), r = t.getHours(), c = t.getMinutes(), i = t.getSeconds(), s = t.getMilliseconds();
    return [ e, n, o ].map(u).join("/") + " " + [ r, c, i, s ].map(u).join(":");
}, u = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, s = function(t, e) {
    var n = i(new Date());
    o.push("".concat(n, ": ").concat(t)), "error" === e ? console.error("".concat(n, ": ").concat(t)) : console.log("".concat(n, ": ").concat(t));
};

module.exports = (0, e.default)({
    getUid: function() {
        return c;
    },
    checkSystemInfo: function(t) {
        r || (r = !0, wx.getSystemInfo({
            success: function(e) {
                s("".concat(JSON.stringify(e)));
                var n = e.SDKVersion.split("."), o = parseInt(n[0]), r = parseInt(n[1]);
                t.globalData.systemInfo = e, o <= 1 && r < 7 && wx.showModal({
                    title: "版本过低",
                    content: "微信版本过低，部分功能可能无法工作",
                    success: function(t) {
                        t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
                    }
                });
            }
        }));
    },
    formatTime: i,
    requestPermission: function(t, e) {
        wx.getSetting({
            success: function(n) {
                n.authSetting[t] ? e && e() : wx.authorize({
                    scope: t,
                    success: function() {
                        e && e();
                    }
                });
            }
        });
    },
    log: s,
    clearLogs: function() {
        o = [];
    },
    getLogs: function() {
        return o;
    },
    mashupUrl: function(t, e) {
        return t;
    },
    debounce: function(e, n) {
        return function() {
            var o = this, r = arguments;
            clearTimeout(t), t = setTimeout(function() {
                e.apply(o, r);
            }, n);
        };
    }
}, "formatTime", function(t) {
    var e = t.getFullYear(), o = t.getMonth() + 1, r = t.getDate(), c = t.getHours(), i = t.getMinutes(), u = t.getSeconds();
    return [ e, o, r ].map(n).join("-") + " " + [ c, i, u ].map(n).join(":");
});