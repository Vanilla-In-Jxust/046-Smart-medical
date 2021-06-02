var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("./lib-generate-test-usersig-es.min.js"));

module.exports = {
    gentestusersig: function(r) {
        var t = wx.getStorageSync("sdkappid"), s = wx.getStorageSync("secretkey");
        return console.log(t, s), {
            sdkAppID: t,
            userSig: new e.default(t, s, 604800).gentestusersig(r)
        };
    }
};