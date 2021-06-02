var t = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/defineProperty"));

module.exports = {
    equallyList: function(o, a, s) {
        var e = new (require("qqmap-wx-jssdk.js"))({
            key: "LXOBZ-4H3CV-YNYPK-UZCTT-UUYU6-QJFO7"
        }), n = s.data.doctors, c = s.data.doctorss;
        if (0 == c.length) {
            for (var r = 0; r < n.length; r++) n[r].doctor.distance || (n[r].doctor.distance = 0);
            console.log(s.data.doctors);
            for (var l = function(c, r) {
                var l = n[r].doctor.hospitalProvince + n[r].doctor.hospitalCity + n[r].doctor.nmHospital;
                e.geocoder({
                    address: l,
                    success: function(e) {
                        var n, c = e.result.location.lng, l = e.result.location.lat, i = o, h = a, d = l, M = c;
                        console.log(i), console.log(h), console.log(d), console.log(M);
                        var u = i * Math.PI / 180;
                        console.log(u);
                        var g = d * Math.PI / 180;
                        console.log(g);
                        var P = u - g;
                        console.log(P);
                        var p = h * Math.PI / 180 - M * Math.PI / 180;
                        console.log(p);
                        var v = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(P / 2), 2) + Math.cos(u) * Math.cos(g) * Math.pow(Math.sin(p / 2), 2)));
                        console.log(v), v > 1e3 && (v = Math.round(v / 1e3)), console.log(v), console.log(c), 
                        console.log(l), console.log(i), console.log(M);
                        var f = "doctors[" + r + "].doctor.distance";
                        s.setData((n = {}, (0, t.default)(n, f, v), (0, t.default)(n, "waitFor", 1), n));
                    }
                });
            }, i = 0, h = n.length; i < h; i++) l(0, i);
        } else {
            for (var d = 0; d < c.length; d++) c[d].doctor.distance || (c[d].doctor.distance = 0);
            for (var M = function(r, l) {
                var i = c[r].doctor.hospitalProvince + c[r].doctor.hospitalCity + c[r].doctor.nmHospital;
                e.geocoder({
                    address: i,
                    success: function(e) {
                        var l = e.result.location.lng, i = e.result.location.lat, h = a, d = i, M = l, u = o * Math.PI / 180, g = d * Math.PI / 180, P = u - g, p = h * Math.PI / 180 - M * Math.PI / 180, v = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(P / 2), 2) + Math.cos(u) * Math.cos(g) * Math.pow(Math.sin(p / 2), 2)));
                        v > 1e3 && (v = Math.round(v / 1e3));
                        var f, I = "doctorss[" + r + "].doctor.distance";
                        (s.setData((0, t.default)({}, I, v)), 0 != c[9].doctor.distance) && (f = n.concat(c), 
                        s.setData({
                            doctors: f,
                            waitFor: 1
                        }));
                    }
                });
            }, u = 0, g = c.length; u < g; u++) M(u);
        }
    },
    differentList: function(t, o, a) {
        var s = a.data.doctors, e = a.data.doctorss;
        if (0 == e.length) for (var n = 0, c = s.length; n < c; n++) {
            var r = s[n].doctor.location.longitude, l = o, i = s[n].doctor.location.latitude, h = r, d = (P = t * Math.PI / 180) - (p = i * Math.PI / 180), M = l * Math.PI / 180 - h * Math.PI / 180;
            (v = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(d / 2), 2) + Math.cos(P) * Math.cos(p) * Math.pow(Math.sin(M / 2), 2)))) > 1e3 && (v = Math.round(v / 1e3)), 
            s[n].doctor.location.distance = v, 9 == n && a.setData({
                doctor: s
            });
        } else for (var u = 0, g = e.length; u < g; u++) {
            var P, p, v, f, I = s[u].doctor.location.longitude, w = o, q = s[u].doctor.location.latitude, D = I;
            if (d = (P = t * Math.PI / 180) - (p = q * Math.PI / 180), M = w * Math.PI / 180 - D * Math.PI / 180, 
            (v = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(d / 2), 2) + Math.cos(P) * Math.cos(p) * Math.pow(Math.sin(M / 2), 2)))) > 1e3 && (v = Math.round(v / 1e3)), 
            e[u].doctor.location.distance = v, 9 == u) f = s.concat(e), a.setData({
                doctors: f
            });
        }
    },
    equallyDetails: function(t, o, a) {
        var s = a.data.doctors, e = new (require("qqmap-wx-jssdk.js"))({
            key: "LXOBZ-4H3CV-YNYPK-UZCTT-UUYU6-QJFO7"
        }), n = s.hospitalProvince + s.hospitalCity + s.nmHospital;
        e.geocoder({
            address: n,
            success: function(e) {
                var n = e.result.location.lng, c = e.result.location.lat, r = o, l = c, i = n, h = t * Math.PI / 180, d = l * Math.PI / 180, M = h - d, u = r * Math.PI / 180 - i * Math.PI / 180, g = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(M / 2), 2) + Math.cos(h) * Math.cos(d) * Math.pow(Math.sin(u / 2), 2)));
                g > 1e3 && (g = Math.round(g / 1e3)), s.location.distance = g, s.distance = g, a.setData({
                    doctors: s
                });
            }
        });
    },
    differentDetails: function(t, o, a) {
        var s = a.data.doctors, e = s.location.longitude, n = o, c = s.location.latitude, r = e, l = t * Math.PI / 180, i = c * Math.PI / 180, h = l - i, d = n * Math.PI / 180 - r * Math.PI / 180, M = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(h / 2), 2) + Math.cos(l) * Math.cos(i) * Math.pow(Math.sin(d / 2), 2)));
        M > 1e3 && (M = Math.round(M / 1e3)), s.location.distance = M, a.setData({
            doctors: s
        });
    }
};