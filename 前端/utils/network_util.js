var o;

(o = require("util.js")) && o.__esModule, module.exports = {
    _get: function(o, t, e) {
        console.log("------start---_get----"), wx.request({
            url: o,
            header: {},
            success: function(o) {
                t(o);
            },
            fail: function(o) {
                e(o);
            }
        }), console.log("----end-----_get----");
    },
    _post: function(o, t, e, n) {
        console.log("----_post--start-------"), wx.request({
            url: o,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                data: t
            },
            success: function(o) {
                e(o);
            },
            fail: function(o) {
                n(o);
            }
        }), console.log("----end-----_get----");
    },
    _post1: function(o, t, e, n) {
        console.log("----_post--start-------"), wx.request({
            url: o,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: t,
            success: function(o) {
                e(o);
            },
            fail: function(o) {
                n(o);
            }
        }), console.log("----end-----_get----");
    },
    _post_json: function(o, t, e, n) {
        console.log("----_post--start-------"), wx.request({
            url: o,
            method: "POST",
            data: t,
            success: function(o) {
                e(o);
            },
            fail: function(o) {
                n(o);
            }
        }), console.log("----end----_post-----");
    }
};