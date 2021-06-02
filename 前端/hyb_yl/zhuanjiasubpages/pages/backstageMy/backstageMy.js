var t = getApp(), a = require("../../../../template/backstageTemplate.js");

Page({
    data: {
        _num: 2,
        text: "未认证",
        showshow: !1,
        wrapBox: !0,
        nameText: "",
        wzshow: !1,
        wzshow1: !0,
        forbidden: !0,
        stateset: [ {
            title: "拒绝接单",
            tip: "休息中拒绝所有患者问诊"
        }, {
            title: "工作中",
            tip: "工作中可接受患者问诊"
        } ],
        stateindex: 0,
        ispopup: !1,
        xieyi: !1
    },
    gohome: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    zijin: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/capitacenter/capitacenter?zid=" + wx.getStorageSync("zid")
        });
    },
    server: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/openservice/openservice?zid=" + wx.getStorageSync("zid")
        });
    },
    stateset: function(a) {
        var e = a.currentTarget.dataset.dex, n = this;
        n.setData({
            stateindex: e,
            ispopup: !1
        }), t.util.request({
            url: "entry/wxapp/zhuanjia.stateset",
            data: {
                zid: wx.getStorageSync("zid"),
                openid: wx.getStorageSync("openid"),
                status: e
            },
            success: function() {
                n.Images(), n.getMyzhuan(), n.getMymoney(), t.util.request({
                    url: "entry/wxapp/studio.ifzhuanjia",
                    data: {
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(t) {
                        console.log(t);
                        t.data.zid;
                        n.setData({
                            info: t.data,
                            total_money: t.data.shouyi
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    },
    statesetshow: function() {
        this.setData({
            ispopup: !0
        });
    },
    closepopup: function() {
        this.setData({
            ispopup: !1
        });
    },
    nkset: function() {
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/cover/cover?zid=" + wx.getStorageSync("zid")
        });
    },
    editdata: function() {
        var t = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/myRenZheng/myRenZheng?zid=" + t
        });
    },
    pingjia: function() {
        var t = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/estimate/estimate?zid=" + t
        });
    },
    qianyue: function() {
        var t = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/patientman/patientman?state=1&zid=" + t
        });
    },
    lodinserweis: function() {
        var a = this.data.zid;
        t.util.request({
            url: "entry/wxapp/Docerweima",
            data: {
                zid: a
            },
            success: function(t) {
                console.log(t);
                var a = t.data.data.weweima, e = JSON.stringify(t.data.data);
                wx.navigateTo({
                    url: "/hyb_yl/backstageLifes/pages/dialysis/dialysis?info= " + e + "&weweima=" + a
                });
            }
        });
    },
    sign: function(a) {
        var e = wx.getStorageSync("log") || "", n = this;
        wx.request({
            url: t.globalData.dic + "doctor/arrive/doctorSignin/" + e + "/1/4",
            success: function(a) {
                if (200 == a.data.code) {
                    n.setData({
                        wzshow: !0,
                        wzshow1: !1
                    }), console.log(a.data.data), console.log(a.data.data.getIntegral), wx.showToast({
                        title: "签到成功，恭喜你获得" + a.data.data.getIntegral + "积分",
                        icon: "none",
                        duration: 3e3
                    });
                    var e = wx.getStorageSync("log") || "";
                    wx.request({
                        url: t.globalData.dic + "doctor/personal/info/get/" + e,
                        data: {},
                        success: function(t) {
                            n.setData({
                                arr: t.data.data
                            });
                        }
                    });
                }
            }
        });
    },
    signs: function(t) {
        wx.showToast({
            title: "您已签到",
            icon: "none",
            duration: 3e3
        });
    },
    alet: function(t) {
        this.setData({
            showshow: !1
        });
    },
    wrapBox: function(t) {
        this.setData({
            showshow: !0
        });
    },
    onLoad: function(e) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
        var i = this;
        this.Images(), this.getMyzhuan(), this.getMymoney(), a.tabbar("tabBar", 3, this), 
        t.util.request({
            url: "entry/wxapp/studio.ifzhuanjia",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t);
                var a = t.data.zid, e = t.data.shouyi;
                i.updocmoney(a, e);
            },
            fail: function(t) {
                console.log(t);
            }
        }), t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                i.setData({
                    baseinfo: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    radioChange: function() {
        this.setData({
            xieyi: !0
        });
    },
    closezhe: function() {
        this.setData({
            xieyi: !1
        });
    },
    onShow: function(a) {
        var e = this, n = getCurrentPages();
        1 == n[n.length - 1].data.state && e.getMymoney(), t.util.request({
            url: "entry/wxapp/studio.ifzhuanjia",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t);
                var a = t.data.zid, n = t.data.shouyi;
                e.updocmoney(a, n);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    RenZheng: function(t) {
        var a = t.currentTarget.dataset.zid;
        console.log(t), wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/myRenZheng/myRenZheng?zid=" + a
        });
    },
    wrap: function(t) {
        this.setData({
            hidehide: !0
        });
    },
    Images: function(t) {},
    getMyzhuan: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/studio.ifzhuanjia",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), a.setData({
                    zhuanjiaImg: t.data.z_thumbs,
                    zid: t.data.zid,
                    zhuanjia: t.data,
                    z_yy_sheng: t.data.exa
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getMymoney: function() {},
    zongClick: function(t) {
        t.currentTarget.dataset.docmoney, t.currentTarget.dataset.z_name, this.data.zid;
    },
    mo_money: function(t) {
        var a = parseFloat(t.currentTarget.dataset.zmoney), e = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/my_ti/my_ti?zmoney=" + a + "&zid=" + e
        });
    },
    updocmoney: function(a, e) {
        var n = this;
        a = a, e = e;
        t.util.request({
            url: "entry/wxapp/zhuanjia.uptotalmoney",
            data: {
                zid: a,
                total_money: e
            },
            success: function(e) {
                console.log(e), t.util.request({
                    url: "entry/wxapp/studio.ifzhuanjia",
                    data: {
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(t) {
                        n.setData({
                            zid: a,
                            info: t.data,
                            total_money: t.data.total_money
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    },
    set_jurisdiction: function() {
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/set_jurisdiction/set_jurisdiction?zid=" + wx.getStorageSync("zid")
        });
    }
});