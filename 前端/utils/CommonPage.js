var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = t(require("../@babel/runtime/helpers/classCallCheck")), a = t(require("../@babel/runtime/helpers/createClass")), r = t(require("Navigator")), n = function() {
    function t() {
        (0, e.default)(this, t), this.$setData = function(t) {
            this.setData ? this.setData(t) : Object.assign(this.data = this.data ? this.data : {}, t);
        }, this.$route = function(t) {
            var e = t.path, a = void 0 === e ? "" : e, n = t.query, o = void 0 === n ? {} : n, i = t.clazzName, u = void 0 === i ? "" : i, s = "";
            if (Object.keys(o).length) {
                for (var c in s = "?", o) o.hasOwnProperty(c) && (s += c + "=" + o[c] + "&");
                s = s.substring(0, s.length - 1);
            }
            var l = r.default.getPage(u);
            l && l.$onNavigator ? (l.$onNavigator && l.$onNavigator(o), setTimeout(function() {
                wx.navigateTo({
                    url: "".concat(a + s)
                });
            }, 150)) : wx.navigateTo({
                url: "".concat(a + s)
            });
        }, this.$put = function(e, a, r) {
            e && a && (t.prototype._pageValues["".concat(this.data.clazzName, "?").concat(e)] = t._$delay(this, a, r));
        }, this.$take = function(e) {
            if (e) {
                var a = t.prototype._pageValues["".concat(this.data.clazzName, "?").concat(e)];
                return delete t.prototype._pageValues["".concat(this.data.clazzName, "?").concat(e)], 
                a;
            }
            return null;
        }, this.$resolve = function(e) {
            var a = t.prototype.currentPageContext;
            a && a.resolve && a.resolve(e), t.prototype.currentPageContext = null;
        }, this.$reject = function(e, a) {
            var r = t.prototype.currentPageContext;
            r && r.reject && r.reject(e, a), t.prototype.currentPageContext = null;
        };
        for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
        if (n.length) {
            var i = n[0].clazzName;
            i && (this.data = {
                clazzName: i
            }, r.default.putPage(i, this));
        }
    }
    return (0, a.default)(t, [ {
        key: "$init",
        value: function(t) {
            Object.assign(this.data = this.data ? this.data : {}, t), this.$origin = JSON.parse(JSON.stringify(this.data)), 
            Object.freeze(this.$origin);
        }
    }, {
        key: "onLoad",
        value: function(t) {}
    }, {
        key: "onReady",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {}
    }, {
        key: "onHide",
        value: function() {}
    }, {
        key: "onUnload",
        value: function() {
            if (this.data.clazzName) {
                var t = r.default.getPage(this.data.clazzName);
                if (!t || !t.$origin) return void console.error("请先在页面的constructor方法中注入init(data)，以避免出现不必要的错误");
                t.data = JSON.parse(JSON.stringify(t.$origin));
            }
        }
    } ], [ {
        key: "_$delay",
        value: function(e, a, r) {
            return new Promise(function(n, o) {
                e.resolve = n, e.reject = o, t.prototype.currentPageContext = e, a && a(r, n, o);
            });
        }
    } ]), t;
}();

exports.default = n, n.prototype._pageValues = {}, n.prototype.currentPageContext = null;