wx.getStorageSync("log");

var t = getApp();

Page({
    data: {
        curHdIndex: 1,
        judge: !0,
        judges: !1,
        id: 1,
        obj: [ {
            nmOrdItemImg: "/assets/images/more.png",
            nmOrdItem: "维生素",
            nmFreq: "1天",
            numSingle: 2,
            numSingleUnit: "颗",
            beginTime: "2018-10-24"
        }, {
            nmOrdItemImg: "/assets/images/more.png",
            nmOrdItem: "维生素",
            nmFreq: "1天",
            numSingle: 2,
            numSingleUnit: "颗",
            beginTime: "2018-10-24"
        }, {
            nmOrdItemImg: "/assets/images/more.png",
            nmOrdItem: "维生素",
            nmFreq: "1天",
            numSingle: 2,
            numSingleUnit: "颗",
            beginTime: "2018-10-24"
        } ],
        objx: [ {
            id: 1,
            nmTag: "维生素B",
            effectTimeString: "2018-10-24",
            content: "味道好"
        }, {
            id: 1,
            nmTag: "维生素C",
            effectTimeString: "2018-10-24",
            content: "味道好"
        } ],
        objs: [ {
            nmOrdItemImg: "/assets/images/more.png",
            nmOrdItem: "2018-10-24",
            nmFreq: 1,
            numSingle: 1,
            numSingleUnit: 1,
            beginTime: "2018-10-24"
        }, {
            nmOrdItemImg: "/assets/images/more.png",
            nmOrdItem: "2018-10-24",
            nmFreq: 1,
            numSingle: 1,
            numSingleUnit: 1,
            beginTime: "2018-10-24"
        } ],
        currentResult: 0,
        arr: [],
        index: ""
    },
    tabClick: function(t) {
        console.log(t.target.dataset.id);
        var a = t.target.dataset.id;
        this.setData({
            curHdIndex: t.target.dataset.id,
            id: a,
            noFlag: !1
        }), 1 == t.target.dataset.id ? (this.setData({
            judge: !0,
            judges: !1
        }), this.onClick1()) : 2 == t.target.dataset.id && (this.setData({
            judge: !1,
            judges: !0
        }), this.onClick2());
    },
    onClick1: function() {
        var a = this, e = wx.getStorageSync("patientId") || "", n = wx.getStorageSync("log") || "";
        console.log(e + "_" + n);
        n = e + "_" + n + a.data.teamId;
        var s = wx.getStorageSync("flag") || "";
        wx.request({
            url: t.globalData.patient + "patient/drugRecord/list/" + n + "/1/" + s,
            data: {},
            success: function(t) {
                console.log(t.data.data), t.data.data.length <= 0 ? wx.showToast({
                    title: "患者没有添加用药记录",
                    icon: "none",
                    duration: 2e3
                }) : a.setData({
                    obj: t.data.data
                });
            }
        });
    },
    onClick2: function() {
        var a = this, e = wx.getStorageSync("patientId") || "", n = wx.getStorageSync("log") || "";
        console.log(e + "_" + n);
        n = e + "_" + n + a.data.teamId;
        var s = wx.getStorageSync("flag") || "";
        wx.request({
            url: t.globalData.patient + "patient/drugRecord/list/" + n + "/0/" + s,
            data: {},
            success: function(t) {
                console.log(t.data), t.data.data.length <= 0 ? wx.showToast({
                    title: "患者没有添加用药记录",
                    icon: "none",
                    duration: 2e3
                }) : a.setData({
                    objs: t.data.data
                });
            }
        });
    },
    lower: function() {
        if (!this.data.noFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var a, e, n = this, s = this.data.currentResult, g = n.data.objx, o = n.data.arr;
            console.log(s);
            var d = wx.getStorageSync("patientId") || "", i = wx.getStorageSync("log") || "";
            console.log(d + "_" + i);
            i = d + "_" + i + n.data.teamId;
            var r = wx.getStorageSync("flag") || "";
            wx.request({
                url: t.globalData.patient + "patient/drugEffect/list/" + i + "/" + s + "/" + r,
                data: {},
                success: function(t) {
                    if (console.log(t), console.log(t.data.data.page.nextResult), 200 == t.data.code) {
                        n.setData({
                            currentResult: t.data.data.page.nextResult
                        });
                        var s = t.data.data.effects;
                        if (a = g.concat(s), console.log(s), console.log(a), t.data.data.effects.length == []) return n.setData({
                            noFlag: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        });
                        for (var d = [], i = 0; i < t.data.data.effects.length; i++) 270101 == t.data.data.effects[i].cdTag ? d.push("/assets/images/75.png") : 270102 == t.data.data.effects[i].cdTag ? d.push("/assets/images/73.png") : 270103 == t.data.data.effects[i].cdTag ? d.push("/assets/images/83.png") : 270104 == t.data.data.effects[i].cdTag && d.push("/assets/images/84.png");
                        e = o.concat(d), n.setData({
                            objx: a,
                            arr: e,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                },
                fail: function() {
                    wx.showToast({
                        title: "系统繁忙，请稍后重试",
                        icon: "none",
                        duration: 2e3
                    }), n.setData({
                        closureFlag: !1
                    });
                }
            });
        }
    },
    onClickadd: function() {
        var a = this, e = wx.getStorageSync("patientId") || "", n = wx.getStorageSync("log") || "";
        console.log(e + "_" + n);
        n = e + "_" + n + a.data.teamId;
        var s = wx.getStorageSync("flag") || "";
        wx.request({
            url: t.globalData.patient + "patient/drugEffect/list/" + n + "/0/" + s,
            data: {},
            success: function(t) {
                console.log(t.data);
                for (var e = [], n = 0; n < t.data.data.effects.length; n++) 270101 == t.data.data.effects[n].cdTag ? e.push("/assets/images/75.png") : 270102 == t.data.data.effects[n].cdTag ? e.push("/assets/images/73.png") : 270103 == t.data.data.effects[n].cdTag ? e.push("/assets/images/83.png") : 270104 == t.data.data.effects[n].cdTag && e.push("/assets/images/84.png");
                a.setData({
                    objx: t.data.data.effects,
                    arr: e,
                    currentResult: t.data.data.page.nextResult
                });
            }
        });
    },
    onLoad: function(t) {
        var a = this;
        a.setData({
            teamId: t.teamId || ""
        }), a.onClick1(), a.onClickadd(), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    height: t.windowHeight
                });
            }
        });
    },
    seet: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/pharmacyseet/pharmacyseet?teamId=" + this.data.teamId
        });
    },
    alter: function(t) {
        console.log(t.currentTarget.dataset.id);
        var a = t.currentTarget.dataset.id;
        wx.setStorageSync("drugId", a), wx.navigateTo({
            url: "/hyb_yl/index/pharmacyAlter/pharmacyAlter"
        });
    },
    navClick: function(t) {
        console.log(t.currentTarget.dataset.id), wx.setStorageSync("effectId", t.currentTarget.dataset.id), 
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/pharmacyAddresult/pharmacyAddresult?teamId=" + this.data.teamId
        });
    }
});