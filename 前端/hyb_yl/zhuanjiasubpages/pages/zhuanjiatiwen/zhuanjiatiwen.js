var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp(), e = require("../../../../utils/util.js");

Page({
    data: {
        agree: !1,
        data_arr: [],
        arr: [],
        inputtext: "",
        upload_picture_list: [],
        key_words: "",
        typedate: 0,
        cursor: 0,
        year: "",
        week: "",
        month_time: "",
        time_leng: "",
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
    handleClickNext: function(t) {
        var a = this.data.text, e = this.data.cursor, i = this.data.upload_picture_list, n = this.data.typedate, s = this.data.agree, o = this.data.zid, r = this.data.money, d = this.data.addnum, u = this.data.arr, l = this.data.year, h = this.data.week, c = this.data.time_leng, m = this.data.month_time;
        console.log(u);
        for (var g = [], y = 0; y < u.length; y++) g.push(u[y].text.bq);
        if (console.log(g), 0 == u.length) return wx.showToast({
            title: "请选择关键字",
            icon: "none"
        }), !1;
        if (s) p = 1; else var p = 0;
        if ("0" == e) return wx.showToast({
            title: "请填写病情描述",
            icon: "none"
        }), !1;
        var _ = {
            text: a,
            typedate: n,
            upload_picture_list: i
        }, f = JSON.stringify(_);
        u = JSON.stringify(g);
        if (console.log(this.data.tjorder), this.data.tjorder) return wx.redirectTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?key_words=" + this.data.key_words + "&conets=" + f + "&zid=" + o + "&cfstate=" + p + "&money=" + r + "&addnum=" + d + "&arr=" + u + "&data_time=" + l + "&week=" + h + "&time_leng=" + c + "&month_time=" + m + "&tjorder=" + this.data.tjorder
        }), !1;
        wx.redirectTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?key_words=" + this.data.key_words + "&conets=" + f + "&zid=" + o + "&cfstate=" + p + "&money=" + r + "&addnum=" + d + "&arr=" + u + "&data_time=" + l + "&week=" + h + "&time_leng=" + c + "&month_time=" + m
        });
    },
    onLoad: function(t) {
        this.channel = "", this.uid = e.getUid(), this.lock = !1;
        var i = t.addnum;
        "shoushukuaiyue" != t.key_words && "shoushukuaiyue" != t.server || wx.setNavigationBarTitle({
            title: "手术安排"
        }), "tijianjiedu" != t.key_words && "tijianjiedu" != t.server || wx.setNavigationBarTitle({
            title: "体检解读"
        });
        var n = wx.getStorageSync("userInfo");
        console.log(n), n && this.setData({
            hasUserInfo: !0,
            userInfo: n,
            u_name: n.u_name,
            u_thumb: n.u_thumb
        });
        var s = this, o = t.zid, r = "";
        if (t.tjorder) {
            t.tjorder;
            s.setData({
                tjorder: t.tjorder
            });
        }
        null != t.key_words && (r = t.key_words), null != t.server && (r = t.server), console.log(r), 
        a.util.request({
            url: "entry/wxapp/zhuanjia.getdocinfo",
            data: {
                zid: o,
                key: r
            },
            success: function(t) {
                console.log(t);
                for (var a = t.data.authority, e = [], i = 0; i < a.length; i++) e.push({
                    text: a[i],
                    state: 0
                });
                s.setData({
                    authority: e
                }), console.log(e);
            }
        });
        var d = wx.getStorageSync("color"), u = t.key_words, l = t.money;
        console.log(t.times);
        var h = t.times;
        if (null != h) {
            var c = h.split(" "), m = c[0] + " " + c[1], g = c[2], y = c[1];
            this.setData({
                year: m,
                week: g,
                month_time: y
            });
        }
        null != t.time_leng && this.setData({
            time_leng: t.time_leng
        }), this.setData({
            key_words: r,
            money: l,
            addnum: i,
            zid: o
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: d
        }), a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), s.setData({
                    url: t.data
                });
            }
        }), a.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: o,
                key: r
            },
            success: function(t) {
                console.log(t), s.setData({
                    xiangqing: t.data,
                    bgc: d,
                    keywords: u,
                    docopenid: t.data.openid,
                    zid: t.data.zid,
                    z_name: t.data.z_name
                });
            }
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
    seluser: function() {
        this.data.keywords;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi"
        });
    },
    nextbu: function(t) {
        var e = this, i = e.data.inputtext, n = e.data.data_arr, s = e.data.j_id, o = e.data.names, r = e.data.keywords, d = e.data.name, u = e.data.u_name, l = e.data.u_thumb, h = e.data.z_thumbs, c = e.data.z_name, m = wx.getStorageSync("myUsername"), g = e.data.randnum, y = e.data.money, p = e.data.zid;
        if ("" !== n.length) var _ = 0; else _ = 1;
        if ("" == i) return wx.showToast({
            title: "请简单描述病情",
            icon: "none"
        }), !1;
        a.util.request({
            url: "entry/wxapp/tuwen.addbl",
            data: {
                msg: i,
                data_arr: n,
                u_name: u,
                u_thumb: l,
                z_thumbs: h,
                z_name: c,
                useropenid: wx.getStorageSync("openid"),
                docopenid: e.data.docopenid,
                j_id: s,
                keywords: r,
                type: _,
                myroom: m,
                docroom: g,
                names: o,
                name: d,
                zid: p,
                money: y
            },
            success: function(t) {
                console.log(t);
                var a = t.data.orders;
                wx.navigateTo({
                    url: "/hyb_yl/czhuanjiasubpages/pages/questends/index?phone=" + e.data.tel + "&zid=" + p + "&name=" + d + "&keywords=" + r + "&j_id=" + s + "&allone_key=2&name=" + d + "&order=" + a + "&money=" + y + "&myroom=" + m + "&docroom=" + g
                });
            }
        });
    },
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
    selhuanzhe: function() {
        var t = this.data.zid, a = this.data.name, e = this.data.keywords, i = this.data.j_id;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?zid=" + t + "&name=" + a + "&keywords=" + e + "&j_id=" + i
        });
    },
    handleContentInput: function(t) {
        this.setData({
            text: t.detail.value,
            cursor: t.detail.cursor
        });
    }
});