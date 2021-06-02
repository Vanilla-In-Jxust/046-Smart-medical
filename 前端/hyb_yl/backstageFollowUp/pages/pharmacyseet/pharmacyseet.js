wx.getStorageSync("log");

var a = getApp();

Page({
    data: {
        objx: [ {
            id: 1,
            nmTag: "感冒药",
            effectTimeString: "2018-11-2",
            content: "俩天见效"
        }, {
            id: 1,
            nmTag: "感冒药",
            effectTimeString: "2018-11-2",
            content: "俩天见效"
        }, {
            id: 1,
            nmTag: "感冒药",
            effectTimeString: "2018-11-2",
            content: "俩天见效"
        }, {
            id: 1,
            nmTag: "感冒药",
            effectTimeString: "2018-11-2",
            content: "俩天见效"
        } ],
        currentResult: 0,
        arr: []
    },
    lower: function() {
        if (!this.data.noFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var t = this, e = wx.getStorageSync("patientId") || "", s = wx.getStorageSync("log") || "";
            console.log(e + "_" + s);
            s = e + "_" + s + t.data.teamId;
            var n, o, c = wx.getStorageSync("flag") || "", g = this.data.currentResult, d = t.data.objx, l = t.data.arr;
            console.log(g), wx.request({
                url: a.globalData.patient + "patient/drugEffect/list/" + s + "/" + g + "/" + c,
                data: {},
                success: function(a) {
                    if (console.log(a), console.log(a.data.data.page.nextResult), 200 == a.data.code) {
                        t.setData({
                            currentResult: a.data.data.page.nextResult
                        });
                        var e = a.data.data.effects;
                        if (n = d.concat(e), console.log(e), console.log(n), a.data.data.effects.length == []) return t.setData({
                            noFlag: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        });
                        for (var s = [], c = 0; c < a.data.data.effects.length; c++) 270101 == a.data.data.effects[c].cdTag ? s.push("/assets/images/75.png") : 270102 == a.data.data.effects[c].cdTag ? s.push("/assets/images/73.png") : 270103 == a.data.data.effects[c].cdTag ? s.push("/assets/images/83.png") : 270104 == a.data.data.effects[c].cdTag && s.push("/assets/images/84.png");
                        o = l.concat(s), t.setData({
                            objx: n,
                            arr: o,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    } else t.setData({
                        closureFlag: !1
                    });
                },
                fail: function(a) {
                    wx.showToast({
                        title: "系统繁忙，请稍后重试",
                        icon: "none",
                        duration: 2e3
                    }), t.setData({
                        closureFlag: !1
                    });
                }
            });
        }
    },
    onClickadd: function() {
        var t = this, e = wx.getStorageSync("patientId") || "", s = wx.getStorageSync("log") || "";
        console.log(e + "_" + s);
        s = e + "_" + s + t.data.teamId;
        var n = wx.getStorageSync("flag") || "";
        wx.request({
            url: a.globalData.patient + "patient/drugEffect/list/" + s + "/0/" + n,
            data: {},
            success: function(a) {
                if (console.log(a.data.data.effects), a.data.data.effects.length <= 0) wx.showToast({
                    title: "暂无此项记录",
                    icon: "none",
                    duration: 2e3
                }); else {
                    for (var e = [], s = 0; s < a.data.data.effects.length; s++) 270101 == a.data.data.effects[s].cdTag ? e.push("/assets/images/75.png") : 270102 == a.data.data.effects[s].cdTag ? e.push("/assets/images/73.png") : 270103 == a.data.data.effects[s].cdTag ? e.push("/assets/images/83.png") : 270104 == a.data.data.effects[s].cdTag && e.push("/assets/images/84.png");
                    t.setData({
                        objx: a.data.data.effects,
                        arr: e,
                        currentResult: a.data.data.page.nextResult
                    });
                }
            }
        });
    },
    onLoad: function(a) {
        var t = this;
        t.setData({
            teamId: a.teamId || ""
        }), t.onClickadd(), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        });
    },
    navClick: function(a) {
        wx.redirectTo({
            url: "/hyb_yl/backstageFollowUp/pages/pharmacyAddresult/pharmacyAddresult"
        });
    }
});