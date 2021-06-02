var a = getApp();

Page({
    data: {
        attendSuccessImg: "",
        src: "",
        isshow: !1,
        arr: [],
        data_arr: []
    },
    takePictures: function() {
        var t = this, e = a.siteInfo.uniacid;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var s, i = "";
                wx.getSystemInfo({
                    success: function(a) {
                        i = a.model;
                    }
                }), i.indexOf("iPhone") <= 0 ? t.setData({
                    isshow: !0
                }) : ((s = wx.createCanvasContext("attendCanvasId")).drawImage(n[0], 0, 0, 94, 96), 
                s.draw(), t.prodImageOpt());
                var n = a.tempFilePaths[0];
                wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n,
                    name: "upfile",
                    formData: {},
                    success: function(a) {
                        console.log(a.data), t.setData({
                            attendSuccessImg: a.data
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        });
    },
    prodImageOpt: function() {
        var a = this;
        wx.canvasToTempFilePath({
            canvasId: "attendCanvasId",
            success: function(t) {
                a.setData({
                    canvasImgUrl: t.tempFilePath
                }), a.uploadFileOpt(a.data.canvasImgUrl);
            },
            complete: function(a) {}
        });
    },
    affirm: function() {
        var a = this.data.ff_id;
        if ("" == this.data.attendSuccessImg) wx.showToast({
            title: "请拍照",
            icon: "none"
        }); else {
            var t = this.data.attendSuccessImg, e = this.data.t_id, s = this.data.sid, i = this.data.key, n = this.data.name, o = this.data.j_id, d = this.data.names, c = this.data.money, r = this.data.teamname, f = this.data.hzsfz, m = this.data.ifhz, u = this.data.zid;
            wx.navigateTo({
                url: "/hyb_yl/doctor/pages/familydoctor/signature/signature?ff_id=" + a + "&qyimg=" + t + "&t_id=" + e + "&sid=" + s + "&key=" + i + "&name=" + n + "&j_id=" + o + "&names=" + d + "&money=" + c + "&teamname=" + r + "&hzsfz=" + f + "&ifhz=" + m + "&zid=" + u
            });
        }
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var s = this, i = t.t_id, n = t.sid, o = t.key, d = t.name, c = t.j_id, r = t.names, f = t.money, m = t.teamname, u = t.ifhz, h = t.hzsfz, l = t.zid;
        if (a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), s.setData({
                    url: a.data,
                    t_id: i,
                    sid: n,
                    key: o,
                    name: d,
                    j_id: c,
                    names: r,
                    money: f,
                    teamname: m,
                    ifhz: u,
                    hzsfz: h,
                    zid: l
                });
            }
        }), "" != s.data.attendSuccessImg && s.setData({
            isshow: !0
        }), t.item) {
            var g = t.item;
            console.log(g), s.setData({
                ff_id: g,
                bgc: e
            });
        }
    },
    onReady: function() {},
    onShow: function() {
        "" === this.data.attendSuccessImg ? this.setData({
            isshow: !1
        }) : this.setData({
            isshow: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});