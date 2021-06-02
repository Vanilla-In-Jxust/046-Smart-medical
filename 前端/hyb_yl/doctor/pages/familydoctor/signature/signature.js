var a = null, e = !1, n = [], t = [], i = [], o = 0, d = 0, s = getApp();

wx.getSystemInfo({
    success: function(a) {
        o = a.windowWidth, d = a.windowHeight;
    }
}), Page({
    data: {},
    cancel: function() {
        wx.navigateBack({});
    },
    onLoad: function(e) {
        var n = this, t = e.qyimg, i = e.t_id, o = e.sid, d = e.key, c = e.name, r = e.j_id, u = e.names, f = JSON.parse(e.ff_id), l = e.money, h = e.teamname, m = e.hzsfz, g = e.ifhz, y = e.zid;
        (a = wx.createCanvasContext("canvas")).beginPath(), a.setStrokeStyle("#000000"), 
        a.setLineWidth(4), a.setLineCap("round"), a.setLineJoin("round");
        var p = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: p
        }), s.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), n.setData({
                    url: a.data
                });
            }
        }), n.setData({
            t_id: i,
            sid: o,
            key: d,
            name: c,
            j_id: r,
            ff_id: f,
            bgc: p,
            qyimg: t,
            names: u,
            money: l,
            teamname: h,
            hzsfz: m,
            ifhz: g,
            zid: y
        });
    },
    canvasIdErrorCallback: function(a) {
        console.error(a.detail.errMsg);
    },
    canvasStart: function(a) {
        e = !0, i.push(0), n.push(a.changedTouches[0].x), t.push(a.changedTouches[0].y);
    },
    canvasMove: function(s) {
        e && (i.push(1), n.push(s.changedTouches[0].x), t.push(s.changedTouches[0].y));
        for (var c = 0; c < n.length; c++) 0 == i[c] ? a.moveTo(n[c], t[c]) : a.lineTo(n[c], t[c]);
        a.clearRect(0, 0, o, d), a.setStrokeStyle("#000000"), a.setLineWidth(4), a.setLineCap("round"), 
        a.setLineJoin("round"), a.stroke(), a.draw(!1);
    },
    canvasEnd: function(a) {
        e = !1;
    },
    cleardraw: function() {
        n = [], t = [], i = [], a.clearRect(0, 0, o, d), a.draw(!0);
    },
    getimg: function() {
        var e = this;
        e.data.zid;
        if (0 == n.length) return wx.showModal({
            title: "提示",
            content: "签名内容不能为空！",
            showCancel: !1
        }), !1;
        a.draw(!0, function() {
            wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: 640,
                height: 430,
                destWidth: 640,
                destHeight: 430,
                canvasId: "canvas",
                fileType: "jpg",
                quality: 1,
                success: function(a) {
                    console.log(a);
                    var n = a.tempFilePath;
                    e.saveimg(n);
                }
            });
        });
    },
    saveimg: function(a) {
        var e = this, n = s.siteInfo.uniacid, t = (e.data.ff_id, e.data.qyimg, e.data.t_id), i = (e.data.sid, 
        e.data.key), o = e.data.name, d = e.data.j_id, c = (e.data.names, e.data.money), r = e.data.teamname, u = e.data.hzsfz, f = e.data.ifhz, l = e.data.zid;
        wx.showLoading({
            title: "提交中"
        }), setTimeout(function() {
            wx.uploadFile({
                url: e.data.url + "app/index.php?i=" + n + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                filePath: a,
                name: "upfile",
                formData: {},
                success: function(a) {
                    console.log(a.data);
                    var n = a.data;
                    s.util.request({
                        url: "entry/wxapp/Office.addorders",
                        data: {
                            ff_id: e.data.ff_id,
                            qyimg: e.data.qyimg,
                            t_id: e.data.t_id,
                            sid: e.data.sid,
                            key: e.data.key,
                            name: e.data.name,
                            j_id: e.data.j_id,
                            names: e.data.names,
                            money: e.data.money,
                            qmimg: n,
                            hzsfz: u,
                            ifhz: f,
                            openid: wx.getStorageSync("openid")
                        },
                        success: function(a) {
                            console.log(a);
                            var e = a.data.ordernum, n = a.data.q_id;
                            wx.hideLoading(), wx.reLaunch({
                                url: "/hyb_yl/czhuanjiasubpages/pages/questends/index?t_id=" + t + "&name=" + o + "&keywords=" + i + "&j_id=" + d + "&order=" + e + "&money=" + c + "&teamname=" + r + "&q_id=" + n + "&zid=" + l
                            });
                        }
                    });
                },
                fail: function(a) {
                    console.log(a);
                }
            });
        }, 2e3);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});