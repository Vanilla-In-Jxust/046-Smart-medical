var e = getApp(), t = require("../../../../utils/util.js"), a = require("../../../webrtc-room/debug/generatetestusersig.js");

Page({
    data: {
        types: "",
        tablistwz: [ "待支付", "待接诊", "已接诊", "已结束", "退款", "已取消" ],
        tablistss: [ "待支付", "待接诊", "已接诊", "已结束", "退款", "已取消" ],
        currentData: 0,
        ifpay: 0,
        accomplish: []
    },
    bindchange: function(e) {
        this.setData({
            currentData: e.detail.current
        });
    },
    checkCurrent: function(t) {
        console.log(t);
        var a = this, r = t.target.dataset.current, n = a.data.key_words, s = Date.parse(new Date());
        s /= 1e3, "tuwenwenzhen" == n && e.util.request({
            url: "entry/wxapp/tuwen.oderstate",
            data: {
                openid: wx.getStorageSync("openid"),
                ifpay: r,
                key_words: n
            },
            success: function(e) {
                console.log(e), a.setData({
                    tuwenwz: e.data,
                    ifpay: r,
                    currentData: r
                });
            }
        }), "dianhuajizhen" != n && "shipinwenzhen" != n && "shoushukuaiyue" != n || e.util.request({
            url: "entry/wxapp/yuyue.oderstate",
            data: {
                openid: wx.getStorageSync("openid"),
                ifpay: r,
                key_words: n
            },
            success: function(e) {
                console.log(e), a.setData({
                    lilst: e.data
                });
            }
        }), "yuanchengkaifang" == n && e.util.request({
            url: "entry/wxapp/yuyue.odercf",
            data: {
                openid: wx.getStorageSync("openid"),
                ispay: r,
                key_words: n,
                timestamp: s
            },
            success: function(e) {
                console.log(e), a.setData({
                    lilst: e.data
                });
            }
        }), a.setData({
            currentData: t.target.dataset.current
        });
    },
    onLoad: function(a) {
        this.channel = "", this.uid = t.getUid(), this.lock = !1;
        var r = a.key_words, n = wx.getStorageSync("userInfo");
        n && this.setData({
            hasUserInfo: !0,
            userInfo: n,
            u_name: n.u_name,
            u_thumb: n.u_thumb
        });
        var s = this, o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), s.setData({
            backgroundColor: o,
            types: a.type,
            key_words: r
        }), s.getalltuwenwz(), e.util.request({
            url: "entry/wxapp/index.techen",
            success: function(e) {
                console.log(e);
                var t = e.data.wxapp_mb;
                s.setData({
                    submitOrder: t.submitOrder,
                    OpenHalfcard: t.OpenHalfcard,
                    Mobile: t.Mobile,
                    hexiao: t.hexiao,
                    spstratSuccess: t.spstratSuccess
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this, a = t.data.key_words, r = getCurrentPages(), n = r[r.length - 1].data.currentData;
        "tuwenwenzhen" == a && e.util.request({
            url: "entry/wxapp/tuwen.oderstate",
            data: {
                openid: wx.getStorageSync("openid"),
                ifpay: n,
                key_words: a
            },
            success: function(e) {
                console.log(e), t.setData({
                    tuwenwz: e.data,
                    ifpay: n,
                    currentData: n
                });
            }
        }), "dianhuajizhen" != a && "shipinwenzhen" != a && "shoushukuaiyue" != a || e.util.request({
            url: "entry/wxapp/yuyue.oderstate",
            data: {
                openid: wx.getStorageSync("openid"),
                ifpay: n,
                key_words: a
            },
            success: function(e) {
                t.setData({
                    lilst: e.data
                });
            }
        }), "yuanchengkaifang" == a && e.util.request({
            url: "entry/wxapp/yuyue.odercf",
            data: {
                openid: wx.getStorageSync("openid"),
                ispay: n,
                key_words: a
            },
            success: function(e) {
                console.log(e), t.setData({
                    lilst: e.data
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getalltuwenwz: function() {
        var t = this, a = t.data.ifpay, r = t.data.key_words;
        "tuwenwenzhen" == r && e.util.request({
            url: "entry/wxapp/tuwen.oderstate",
            data: {
                openid: wx.getStorageSync("openid"),
                ifpay: a,
                key_words: r
            },
            success: function(e) {
                console.log(e), t.setData({
                    tuwenwz: e.data
                });
            }
        }), "dianhuajizhen" != r && "shipinwenzhen" != r && "shoushukuaiyue" != r || e.util.request({
            url: "entry/wxapp/yuyue.oderstate",
            data: {
                openid: wx.getStorageSync("openid"),
                ifpay: a,
                key_words: r
            },
            success: function(e) {
                console.log(e), t.setData({
                    lilst: e.data
                });
            }
        }), "yuanchengkaifang" == r && e.util.request({
            url: "entry/wxapp/yuyue.odercf",
            data: {
                openid: wx.getStorageSync("openid"),
                ispay: a,
                key_words: r
            },
            success: function(e) {
                console.log(e), t.setData({
                    lilst: e.data
                });
            }
        }), "shoushukuaiyue" == r && e.util.request({
            url: "entry/wxapp/user.allshoushuorder",
            data: {
                openid: wx.getStorageSync("openid"),
                index: a
            },
            success: function(e) {
                console.log(e), t.setData({
                    lilst: e.data
                });
            }
        });
    },
    zixunxq: function(e) {
        var t = this;
        console.log(e);
        var a = e.currentTarget.dataset, r = e.currentTarget.dataset.orders, n = e.currentTarget.dataset.j_id, s = t.data.key_words;
        console.log(s);
        var o = e.currentTarget.dataset.zid, i = e.currentTarget.dataset.ifpay, u = e.currentTarget.dataset.money, c = e.currentTarget.dataset.overtime, d = t.data.currentData, g = e.currentTarget.dataset.ifgb;
        wx.setStorage({
            key: "userinfotype",
            data: "user"
        });
        var l = wx.getStorageSync("userInfo");
        console.log(l);
        var y = e.currentTarget.dataset.bl_id;
        wx.setStorage({
            key: "userInfo",
            data: l
        });
        var p = e.currentTarget.dataset.z_thumbs;
        wx.setStorage({
            key: "z_thumbs",
            data: p
        });
        wx.setStorageSync("sate", 0), wx.setStorageSync("docroom", h);
        var w = e.currentTarget.dataset.myroom, h = e.currentTarget.dataset.docroom, f = e.currentTarget.dataset.dex;
        wx.setStorageSync("docroom", h);
        var x = {
            myName: w,
            your: h,
            bl_id: y
        };
        console.log(e);
        (t = this).data.spstratSuccess;
        var m = t.data.OpenHalfcard, S = t.data.Mobile;
        t.data.hexiao, t.data.settled;
        if (wx.requestSubscribeMessage({
            tmplIds: [ S, m ],
            success: function(e) {
                console.log(e);
            }
        }), 5 == i) return wx.showToast({
            title: "退款申请中无法查看详情",
            icon: "none"
        }), !1;
        if (6 == i) return wx.showToast({
            title: "已退款",
            icon: "none"
        }), !1;
        if ("tuwenwenzhen" == s && wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username=" + JSON.stringify(x) + "&list=" + JSON.stringify(a) + "&z_name=" + e.currentTarget.dataset.z_name + "&orders=" + r + "&dex=" + f + "&key_words=" + s + "&ifpay=" + i + "&money=" + u + "&overtime=" + c + "&currentData=" + d + "&ifgb=" + g + "&txt=yes"
        }), "dianhuajizhen" != s && "shipinwenzhen" != s && "shoushukuaiyue" != s || wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=yes&zid=" + o + "&back_orser=" + r + "&key_words=" + s + "&j_id=" + n + "&ifpay=" + i + "&money=" + u + "&overtime=" + c + "&currentData=" + d + "&ifgb=" + g
        }), "yuanchengkaifang" == s) {
            var _ = e.currentTarget.dataset.c_id;
            wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=yes&zid=" + o + "&back_orser=" + r + "&key_words=" + s + "&j_id=" + n + "&ifpay=" + i + "&money=" + u + "&overtime=" + c + "&currentData=" + d + "&ifgb=" + g + "&c_id=" + _
            });
        }
        "shoushukuaiyue" == s && wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?txt=yes&zid=" + o + "&back_orser=" + r + "&key_words=" + s + "&j_id=" + n + "&ifpay=" + i + "&money=" + u + "&overtime=" + c + "&currentData=" + d + "&ifgb=" + g
        });
    },
    pingjia: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.keywords, a = e.currentTarget.dataset.zid, r = e.currentTarget.dataset.orders, n = e.currentTarget.dataset.j_id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/pingjia/pingjia?keywords=" + t + "&zid=" + a + "&orders=" + r + "&j_id=" + n
        });
    },
    gettel: function(e) {
        "1" == e.currentTarget.dataset.ifpay && wx.showToast({
            title: "待接诊",
            icon: "none"
        });
    },
    joinRoom: function(e) {
        console.log(e);
        this.data.userID = new Date().getTime().toString(16);
        var t = a.gentestusersig(this.data.userID);
        if (console.log(t, this.data.userID), "1" == e.currentTarget.dataset.ifpay) return wx.showToast({
            title: "请等待医生接诊",
            icon: "none"
        }), !1;
        var r = new Date();
        if (!(r - this.data.tapTime < 1e3)) {
            this.data.userID = new Date().getTime().toString(16);
            t = a.gentestusersig(this.data.userID);
            var n = "../../../webrtc-room/room/room?roomID=".concat("123456", "&template=1v1&sdkAppID=").concat(t.sdkAppID, "&userId=").concat(this.data.userID, "&userSig=").concat(t.userSig);
            console.log(n), wx.navigateTo({
                url: n
            }), wx.showToast({
                title: "进入房间",
                icon: "success",
                duration: 1e3
            }), this.setData({
                tapTime: r
            });
        }
    }
});