var t = getApp(), a = require("../../../../utils/util.js");

Page({
    data: {
        targetIndex: 1,
        height: 40,
        oldHeight: 40,
        text: "",
        currentResult: 0,
        loadingBoo: !0,
        moreBoo: !0,
        list: [],
        discuss: 6,
        detailMsg: {
            mettingPush: {
                speed: 1
            },
            deptMarketingResources: {
                coverImg: 1,
                content: 1,
                contentType: 1,
                title: "宣传片",
                desc: "感冒是怎么来的"
            },
            doctorName: "小明",
            createTime: "2018-10-26"
        }
    },
    onLoad: function(a) {
        var e = this, i = wx.getStorageSync("color");
        if (0 == a.types) {
            var n = a.yisid;
            t.util.request({
                url: "entry/wxapp/allyishuo",
                data: {
                    yisid: n,
                    op: "xiangiqng"
                },
                success: function(t) {
                    console.log(t), e.setData({
                        h_text: t.data.data.h_text,
                        zhuanjiainfo: t.data.data,
                        yisid: n
                    });
                }
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
    },
    onReady: function() {
        this.getZhuanjiaxiangqing();
    },
    onShow: function() {},
    onHide: function() {},
    bindlinechange: function(t) {
        t.detail.lineCount < 5 ? this.setData({
            heightFlag: !0
        }) : this.setData({
            heightFlag: !1
        });
    },
    sendBtn: function(e) {
        var i = this.data.text, n = a.formatTime(new Date()), o = this.data.yisid, s = wx.getStorageSync("openid"), u = wx.getStorageSync("userInfo");
        console.log(u);
        var l = u.nickName, d = u.avatarUrl, r = this.data.list, g = {
            name: l,
            createTime: n,
            pingtext: i,
            touxiang: d
        };
        r.push(g), this.setData({
            list: r
        }), t.util.request({
            url: "entry/wxapp/Savehuanjiaopl",
            data: {
                openid: s,
                name: l,
                touxiang: d,
                yisid: o,
                pingtext: i,
                op: "add"
            },
            success: function(t) {
                console.log(t);
            }
        });
    },
    getText: function(t) {
        this.setData({
            text: t.detail.value
        });
    },
    tapFun: function(t) {
        var a = this.data.yisid;
        2 == t.currentTarget.dataset.index && this.getAllpinglun(a), t.currentTarget.dataset.index != this.data.targetIndex && this.setData({
            targetIndex: t.currentTarget.dataset.index
        });
    },
    getMore: function() {
        this.data.moreBoo && this.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), this.getComm());
    },
    getComm: function() {},
    getZhuanjiaxiangqing: function() {
        var a = this, e = a.data.zid;
        1 == a.data.h_leixing && t.util.request({
            url: "entry/wxapp/Zhuanjiaxiangqing",
            data: {
                id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    zhuanjiainfo: t.data.data
                });
            }
        });
    },
    gethjinfo: function(a, e) {
        var i = this;
        t.util.request({
            url: "entry/wxapp/Allhjfenl",
            data: {
                h_id: a,
                h_leixing: e,
                op: "post"
            },
            success: function(t) {
                console.log(t);
                var a = t.data.auth;
                i.setData({
                    info: t.data,
                    auth: a
                });
            }
        });
    },
    getAllpinglun: function(a) {
        console.log(a);
        var e = this;
        t.util.request({
            url: "entry/wxapp/Savehuanjiaopl",
            data: {
                yisid: a,
                op: "all"
            },
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        });
    }
});