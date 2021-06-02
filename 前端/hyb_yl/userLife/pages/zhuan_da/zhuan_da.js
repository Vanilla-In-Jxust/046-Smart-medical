var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp(), n = require("../../../../utils/util.js");

Page((t = {
    data: {
        id: 1,
        nav: {
            nav_list: [ {
                con: "全部"
            }, {
                con: "已回答"
            }, {
                con: "未回答"
            } ],
            currentTab: 0,
            qs: {
                doc: []
            }
        },
        values: "",
        currentInput: ""
    },
    swichNav: function(t) {
        var e = this.data.nav;
        e.currentTab = t.currentTarget.dataset.current, this.setData({
            nav: e
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var a = t.zid, n = t.qid, i = t.user_openid, r = wx.getStorageSync("openid");
        this.setData({
            zid: a,
            qid: n,
            user_openid: i,
            openid: r
        });
    },
    yulan: function(t) {
        console.log(t);
        var e = t.target.dataset.index, a = (t.currentTarget.dataset.idx, this.data.qs);
        console.log(a);
        var n = a.user_picture[e], i = a.user_picture;
        wx.previewImage({
            current: n,
            urls: i
        });
    },
    zanClick: function(t) {
        var e = this.data.qs;
        console.log(t);
        var a = t.currentTarget.dataset.index;
        e[a].checked = !e[a].checked, this.setData({
            wendaArr: e
        });
    },
    switchChange: function(t) {
        var e = t.detail.value, n = this.data.qid, i = t.currentTarget.dataset.q_category;
        if (console.log("switch2 发生 change 事件，携带值为", t.detail.value), t.detail.value) {
            r = this.data.values;
            a.util.request({
                url: "entry/wxapp/Delover",
                data: {
                    qid: n,
                    state: e,
                    q_category: i
                },
                success: function(t) {
                    console.log(t);
                }
            });
        } else {
            var r = "";
            a.util.request({
                url: "entry/wxapp/Delover",
                data: {
                    q_category: i,
                    qid: n,
                    state: e
                },
                success: function(t) {
                    console.log(t);
                }
            });
        }
        this.setData({
            paySH: t.detail.value,
            values: r
        });
    },
    confirm: function(t) {
        console.log(t);
        var e = this, n = (e.data.zid, e.data.user_openid, t.detail.value.money);
        t.detail.value.kid;
        a.util.request({
            url: "entry/wxapp/Saveover",
            data: {
                gbmoney: n,
                qid1: t.detail.value.qid
            },
            success: function(t) {
                console.log(t), e.setData({
                    siwth: t.data.data
                });
            }
        }), setTimeout(function() {
            wx.hideLoading(), wx.showToast({
                title: "保存成功",
                icon: "none",
                duration: 1500
            });
        }, 500);
    },
    tiwenClick: function(t) {
        var e = t.currentTarget.dataset.qid;
        this.setData({
            overFlow1: "true",
            focus: !0,
            qid: e
        });
    },
    hideClick: function() {
        this.setData({
            overFlow1: ""
        });
    },
    inputClick: function(t) {
        var e = t.detail.value;
        this.setData({
            value: e,
            currentInput: e
        });
    },
    faClick: function(t) {
        var e = this, i = (e.data.qs, e.data.value), r = (e.data.index, e.data.qid), o = e.data.zid, u = t.currentTarget.dataset.q_docthumb, s = t.currentTarget.dataset.z_name, d = t.currentTarget.dataset.z_thumbs, l = t.currentTarget.dataset.z_zhiwu, c = t.currentTarget.dataset.docopenid, f = t.currentTarget.dataset.user, g = d, v = new Date();
        n.formatTime(v);
        a.util.request({
            url: "entry/wxapp/Fromque",
            data: {
                question: i,
                parentid: r,
                q_dname: s,
                fromuser: f,
                user_openid: c,
                q_thumb: g,
                q_zhiwei: l,
                p_id: o,
                qid: r,
                q_docthumb: u
            },
            success: function(t) {
                var n = e.data.currentInput;
                console.log(n), a.util.request({
                    url: "entry/wxapp/Tongzhiuser",
                    data: {
                        user_openid: f,
                        z_name: s,
                        question: n
                    },
                    success: function(t) {
                        console.log(t);
                    }
                }), e.getAllquestion();
            }
        });
    }
}, (0, e.default)(t, "hideClick", function() {
    this.setData({
        overFlow1: ""
    });
}), (0, e.default)(t, "buling", function(t) {
    return t = t > 10 ? t : "0" + t, console.log(t), t;
}), (0, e.default)(t, "onReady", function() {
    this.getAllquestion();
}), (0, e.default)(t, "onShow", function() {
    var t = this.data;
    console.log(t);
}), (0, e.default)(t, "onHide", function() {}), (0, e.default)(t, "onUnload", function() {}), 
(0, e.default)(t, "onPullDownRefresh", function() {}), (0, e.default)(t, "onReachBottom", function() {}), 
(0, e.default)(t, "onShareAppMessage", function() {}), (0, e.default)(t, "getAllquestion", function() {
    var t = this, e = t.data.zid, n = wx.getStorageSync("openid"), i = t.data.user_openid, r = t.data.qid;
    a.util.request({
        url: "entry/wxapp/Allquestion",
        data: {
            qid: r,
            zid: e,
            user_openid: i,
            fromuser: n
        },
        success: function(e) {
            if (console.log(e), 1 == e.data.data.if_over) var a = !0; else a = !1;
            t.setData({
                paySH: a,
                qs: e.data.data
            });
        }
    });
}), t));