var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/classCallCheck")), o = e(require("../@babel/runtime/helpers/createClass")), i = 310, r = "请求参数信息有误", a = 600, n = "系统错误", s = 1e3, u = 200, l = {
    location2query: function(e) {
        if ("string" == typeof e) return e;
        for (var t = "", o = 0; o < e.length; o++) {
            var i = e[o];
            t && (t += ";"), i.location && (t = t + i.location.lat + "," + i.location.lng), 
            i.latitude && i.longitude && (t = t + i.latitude + "," + i.longitude);
        }
        return t;
    },
    getWXLocation: function(e, t, o) {
        wx.getLocation({
            type: "gcj02",
            success: e,
            fail: t,
            complete: o
        });
    },
    getLocationParam: function(e) {
        if ("string" == typeof e) {
            var t = e.split(",");
            e = 2 === t.length ? {
                latitude: e.split(",")[0],
                longitude: e.split(",")[1]
            } : {};
        }
        return e;
    },
    polyfillParam: function(e) {
        e.success = e.success || function() {}, e.fail = e.fail || function() {}, e.complete = e.complete || function() {};
    },
    checkParamKeyEmpty: function(e, t) {
        if (!e[t]) {
            var o = this.buildErrorConfig(i, r + t + "参数格式有误");
            return e.fail(o), e.complete(o), !0;
        }
        return !1;
    },
    checkKeyword: function(e) {
        return !this.checkParamKeyEmpty(e, "keyword");
    },
    checkLocation: function(e) {
        var t = this.getLocationParam(e.location);
        if (!t || !t.latitude || !t.longitude) {
            var o = this.buildErrorConfig(i, r + " location参数格式有误");
            return e.fail(o), e.complete(o), !1;
        }
        return !0;
    },
    buildErrorConfig: function(e, t) {
        return {
            status: e,
            message: t
        };
    },
    buildWxRequestConfig: function(e, t) {
        var o = this;
        return t.header = {
            "content-type": "application/json"
        }, t.method = "GET", t.success = function(t) {
            var o = t.data;
            0 === o.status ? e.success(o) : e.fail(o);
        }, t.fail = function(t) {
            t.statusCode = s, e.fail(o.buildErrorConfig(s, result.errMsg));
        }, t.complete = function(t) {
            switch (+t.statusCode) {
              case s:
                e.complete(o.buildErrorConfig(s, t.errMsg));
                break;

              case u:
                var i = t.data;
                0 === i.status ? e.complete(i) : e.complete(o.buildErrorConfig(i.status, i.message));
                break;

              default:
                e.complete(o.buildErrorConfig(a, n));
            }
        }, t;
    },
    locationProcess: function(e, t, o, i) {
        var r = this;
        if (o = o || function(t) {
            t.statusCode = s, e.fail(r.buildErrorConfig(s, t.errMsg));
        }, i = i || function(t) {
            t.statusCode == s && e.complete(r.buildErrorConfig(s, t.errMsg));
        }, e.location) {
            if (r.checkLocation(e)) {
                t(l.getLocationParam(e.location));
            }
        } else r.getWXLocation(t, o, i);
    }
}, c = function() {
    function e(o) {
        if ((0, t.default)(this, e), !o.key) throw Error("key值不能为空");
        this.key = o.key;
    }
    return (0, o.default)(e, [ {
        key: "search",
        value: function(e) {
            if (e = e || {}, l.polyfillParam(e), l.checkKeyword(e)) {
                var t = {
                    keyword: e.keyword,
                    orderby: e.orderby || "_distance",
                    page_size: e.page_size || 10,
                    page_index: e.page_index || 1,
                    output: "json",
                    key: this.key
                };
                e.address_format && (t.address_format = e.address_format), e.filter && (t.filter = e.filter);
                var o = e.distance || "1000", i = e.auto_extend || 1;
                l.locationProcess(e, function(r) {
                    t.boundary = "nearby(" + r.latitude + "," + r.longitude + "," + o + "," + i + ")", 
                    wx.request(l.buildWxRequestConfig(e, {
                        url: "https://apis.map.qq.com/ws/place/v1/search",
                        data: t
                    }));
                });
            }
        }
    }, {
        key: "getSuggestion",
        value: function(e) {
            if (e = e || {}, l.polyfillParam(e), l.checkKeyword(e)) {
                var t = {
                    keyword: e.keyword,
                    region: e.region || "全国",
                    region_fix: e.region_fix || 0,
                    policy: e.policy || 0,
                    output: "json",
                    key: this.key
                };
                wx.request(l.buildWxRequestConfig(e, {
                    url: "https://apis.map.qq.com/ws/place/v1/suggestion",
                    data: t
                }));
            }
        }
    }, {
        key: "reverseGeocoder",
        value: function(e) {
            e = e || {}, l.polyfillParam(e);
            var t = {
                coord_type: e.coord_type || 5,
                get_poi: e.get_poi || 0,
                output: "json",
                key: this.key
            };
            e.poi_options && (t.poi_options = e.poi_options);
            l.locationProcess(e, function(o) {
                t.location = o.latitude + "," + o.longitude, wx.request(l.buildWxRequestConfig(e, {
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: t
                }));
            });
        }
    }, {
        key: "geocoder",
        value: function(e) {
            if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "address")) {
                var t = {
                    address: e.address,
                    output: "json",
                    key: this.key
                };
                wx.request(l.buildWxRequestConfig(e, {
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: t
                }));
            }
        }
    }, {
        key: "getCityList",
        value: function(e) {
            e = e || {}, l.polyfillParam(e);
            var t = {
                output: "json",
                key: this.key
            };
            wx.request(l.buildWxRequestConfig(e, {
                url: "https://apis.map.qq.com/ws/district/v1/list",
                data: t
            }));
        }
    }, {
        key: "getDistrictByCityId",
        value: function(e) {
            if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "id")) {
                var t = {
                    id: e.id || "",
                    output: "json",
                    key: this.key
                };
                wx.request(l.buildWxRequestConfig(e, {
                    url: "https://apis.map.qq.com/ws/district/v1/getchildren",
                    data: t
                }));
            }
        }
    }, {
        key: "calculateDistance",
        value: function(e) {
            if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "to")) {
                var t = {
                    mode: e.mode || "walking",
                    to: l.location2query(e.to),
                    output: "json",
                    key: this.key
                };
                e.from && (e.location = e.from), l.locationProcess(e, function(o) {
                    t.from = o.latitude + "," + o.longitude, wx.request(l.buildWxRequestConfig(e, {
                        url: "https://apis.map.qq.com/ws/distance/v1/",
                        data: t
                    }));
                });
            }
        }
    } ]), e;
}();

module.exports = c;