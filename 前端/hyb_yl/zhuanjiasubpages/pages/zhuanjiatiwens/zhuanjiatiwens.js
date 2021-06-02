var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp(), e = require("../../../../utils/util.js");

Page({
    data: {
        agree: !1,
        data_arr: [],
        arr: [],
        inputtext: "",
        upload_picture_list: [],
        key_words: "",
        money: "0",
        typedate: 0,
        time: "",
        dayText: "",
        timeText: "",
        cursor: 0,
        year: "",
        week: "",
        fuwu: [],
        did: "",
        zid: "",
        month_time: "",
        time_leng: "",
        feiyongStare: !0,
        tabList: [ {
            id: 1,
            text: "aaa",
            state: !1
        }, {
            id: 2,
            text: "bbb",
            state: !1
        } ]
    },
    selzixun: function(a) {
        a.currentTarget.dataset.id;
        var e = a.currentTarget.dataset.dex, i = [], n = "authority[" + e + "].state";
        this.setData((0, t.default)({}, n, !this.data.authority[e].state));
        for (var s = 0; s < this.data.authority.length; s++) 1 == this.data.authority[s].state && i.push(this.data.authority[s]);
        this.setData({
            arr: i
        });
    },
    handlePrescriptionSuggestChange: function() {
        this.setData({
            agree: !this.data.agree
        });
    },
    dayChose: function(t) {
        console.log(t), this.setData({
            dayText: t.detail.value
        });
    },
    timeChose: function(t) {
        console.log(t), this.setData({
            timeText: t.detail.value
        });
    },
    handleClickNext: function(t) {
        var a = this.data.text, e = this.data.cursor, i = this.data.upload_picture_list, n = this.data.typedate, s = this.data.agree, o = this.data.did, u = this.data.money, r = this.data.arr, d = (u = this.data.money, 
        this.data.dayText), h = this.data.timeText, l = d + " " + h, c = this.data.hid, f = this.data.keshi_two, g = this.data.server, p = this.data.tid, m = this.data.fuwu;
        console.log(m);
        for (var y = 0; y < m.length; y++) 0 == m[y].state && m.splice(y, 1);
        var x = this.data.leixing, w = [];
        for (y = 0; y < r.length; y++) w.push(r[y].text);
        if (0 == r.length && "" != o) return wx.showToast({
            title: "请选择关键字",
            icon: "none"
        }), !1;
        if ("baogaojiaji" != g && ("" == d || "" == h)) return wx.showToast({
            title: "请选择预约时间",
            icon: "none"
        }), !1;
        if (s) v = 1; else var v = 0;
        if ("0" == e) return wx.showToast({
            title: "请填写病情描述",
            icon: "none"
        }), !1;
        var D = {
            text: a,
            typedate: n,
            upload_picture_list: i
        };
        if ("baogaojiaji" == g && "0" == m.length) return wx.showToast({
            title: "请选择服务项目",
            icon: "none"
        }), !1;
        var _ = JSON.stringify(m), T = JSON.stringify(D);
        r = JSON.stringify(w);
        wx.redirectTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?did=" + o + "&server=" + g + "&money=" + u + "&hid=" + c + "&keshi_two=" + f + "&tid=" + p + "&leixing=" + x + "&conets=" + T + "&cfstate=" + v + "&arr=" + r + "&time=" + l + "&fuwus=" + _ + "&zid=" + this.data.zid
        });
    },
    onLoad: function(t) {
        var i = this, n = t.did, s = t.server, o = t.money, u = t.hid, r = t.keshi_two, d = t.tid, h = t.leixing, l = t.name, c = t.zid;
        i.setData({
            did: n,
            server: s,
            hid: u,
            keshi_two: r,
            tid: d,
            name: l,
            leixing: h,
            zid: c
        }), "baogaojiaji" != s && i.setData({
            money: o
        }), wx.setNavigationBarTitle({
            title: l
        }), this.channel = "", this.uid = e.getUid(), this.lock = !1, "" != t.did && null != t.did && "undefined" != t.did && i.getDocinfo(), 
        "" != t.zid && null != t.zid && "undefined" != t.zid && i.getZhuanjiainfo(), "baogaojiaji" == s && i.getFuwu();
        var f = wx.getStorageSync("userInfo");
        f && this.setData({
            hasUserInfo: !0,
            userInfo: f,
            u_name: f.u_name,
            u_thumb: f.u_thumb
        });
        i = this;
        var g = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: g
        }), a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), i.setData({
                    url: t.data
                });
            }
        });
    },
    getFuwu: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/green.server",
            data: {
                keyword: t.data.server
            },
            success: function(a) {
                t.setData({
                    fuwu: a.data
                });
            }
        });
    },
    getDocinfo: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/green.dz_info",
            data: {
                id: t.data.did
            },
            success: function(a) {
                for (var e = a.data.authority, i = [], n = 0; n < e.length; n++) i.push({
                    text: e[n],
                    state: 0
                });
                t.setData({
                    info: a.data,
                    authority: i
                }), console.log(t.data.info), console.log(t.data.authority);
            }
        });
    },
    getZhuanjiainfo: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/zhuanjia.getdocinfo",
            data: {
                zid: t.data.zid,
                key: t.data.server
            },
            success: function(a) {
                var e = a.data;
                e.thumb = e.advertisement, e.title = e.z_name;
                for (var i = a.data.authority, n = [], s = 0; s < i.length; s++) n.push({
                    text: i[s].bq,
                    state: 0
                });
                t.setData({
                    authority: n,
                    info: e
                });
            }
        });
    },
    addMoney: function(t) {
        this.setData({
            fuwuStatr: !0
        });
    },
    addNum: function(t) {
        var a = t.currentTarget.dataset.index;
        console.log(a);
        var e = this.data.fuwu;
        e[a].num++, this.TotalFun(), this.setData({
            fuwu: e
        });
    },
    removeNum: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.fuwu;
        if (console.log(e[a].num), 1 == e[a].num) return e[a].num--, e[a].state = !1, this.TotalFun(), 
        this.setData({
            fuwu: e
        });
        e[a].num--, this.TotalFun(), this.setData({
            fuwu: e
        });
    },
    checkChose: function(t) {
        var a = t.currentTarget.dataset.index;
        console.log(a);
        var e = this.data.fuwu;
        e[a].state = !e[a].state, e[a].state ? e[a].num = 1 : e[a].num = 0, this.TotalFun(), 
        this.setData({
            fuwu: e
        });
    },
    TotalFun: function() {
        for (var t = this.data.fuwu, a = 0, e = t.length - 1; e >= 0; e--) a += t[e].num * t[e].money, 
        console.log(t[e].num), console.log(t[e].money);
        console.log(a), this.setData({
            money: a
        });
    },
    close: function(t) {
        for (var a = this.data.fuwu, e = [], i = 0; i < a.length; i++) a[i].state && e.push(a[i].title);
        var n = e.join(",");
        this.setData({
            feiyongStare: !0,
            nameText: n
        });
    },
    showFeiyong: function() {
        this.setData({
            feiyongStare: !1
        });
    },
    onReady: function() {},
    onShow: function(t) {
        var a = getCurrentPages(), e = a[a.length - 1];
        e.data.names && this.setData({
            names: e.data.names
        }), e.data.j_id && this.setData({
            j_id: e.data.j_id
        }), e.data.tel && this.setData({
            tel: e.data.tel
        }), e.data.region && 1 == e.data.state && this.setData({
            region: e.data.region
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    uploadimg: function() {
        var t = this, e = a.siteInfo.uniacid, i = t.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                for (var n = a.tempFilePaths, s = 0; s < n.length; s++) wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[s],
                    name: "upfile",
                    formData: [],
                    success: function(a) {
                        console.log(a), i.push(a.data), t.setData({
                            upload_picture_list: i,
                            typedate: 1
                        });
                    }
                });
            }
        });
    },
    deleteimg: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.data_arr;
        e.splice(a, 1), this.setData({
            upload_picture_list: e,
            typedate: 0
        });
    },
    computing_word: function(t) {
        var a = t.detail.value;
        this.setData({
            inputtext: a
        });
    },
    handleContentInput: function(t) {
        console.log(t);
        this.setData({
            text: t.detail.value,
            cursor: t.detail.cursor
        });
    }
});