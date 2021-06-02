var t = getApp();

Page({
    data: {
        index: -1,
        i: 0,
        sickrela: [ {
            relation: "家庭成员",
            index: 1
        }, {
            relation: "亲戚",
            index: 2
        }, {
            relation: "朋友",
            index: 3
        }, {
            relation: "其他",
            index: 4
        } ]
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("color"), e = t.zid, i = t.tid, n = t.inquiry, s = t.ifzy, r = t.last, d = t.leixing;
        if (console.log(t), t.gren) {
            var o = t.gren;
            this.setData({
                gren: o
            });
        }
        if (r ? this.setData({
            last: r
        }) : this.setData({
            last: ""
        }), t.tjorder && this.setData({
            tjorder: t.tjorder
        }), t.tijianper) {
            var h = t.tijianper;
            this.setData({
                tijianper: h
            });
        }
        if (t.arr) {
            var u = JSON.parse(t.arr);
            this.setData({
                arr: u
            });
        }
        if (1 == t.doc) {
            var c = t.openid;
            this.setData({
                openid: c,
                doc: t.doc
            });
        } else {
            c = wx.getStorageSync("openid");
            this.setData({
                openid: c,
                doc: ""
            });
        }
        var g = t.addnum;
        if ("-1" == t.inquiry) {
            var l = t.back_orser;
            n = t.inquiry;
            this.setData({
                back_orser: l,
                inquiry: n
            });
        }
        if (t.exist && this.setData({
            exist: t.exist
        }), t.type && this.setData({
            type: t.type
        }), t.tit) {
            t.tit;
            this.setData({
                tit: t.tit
            });
        }
        if (t.key_words) {
            if (t.conets) var y = JSON.parse(t.conets); else y = "";
            var f = t.key_words, _ = t.cfstate, m = t.money, p = t.time_leng, x = t.phone, z = t.data_time, w = t.month_time, k = t.week;
            if (null != t.textarr) var j = JSON.parse(t.conets).text;
            this.setData({
                zid: e,
                conets: y,
                key_words: f,
                cfstate: _,
                money: m,
                time_leng: p,
                phone: x,
                data_time: z,
                month_time: w,
                week: k,
                addnum: g,
                text: j,
                ifzy: s
            });
        } else "lvtong" == d && (this.setData({
            did: t.did,
            server: t.server,
            money: t.money,
            hid: t.hid,
            keshi_two: t.keshi_two,
            typeid: t.tid,
            leixing: t.leixing,
            conets: t.conets,
            cfstate: t.cfstate,
            arr: t.arr,
            time: t.time,
            zid: t.zid
        }), "" != t.fuwus && null != t.fuwus && this.setData({
            fuwus: t.fuwus
        }));
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        }), this.setData({
            bgc: a,
            tid: i,
            inquiry: n
        }), this.getMyalluser();
    },
    onReady: function() {},
    next: function() {
        this.data.msg;
        var t = this.data.j_id, a = this.data.zid, e = this.data.tid, i = this.data.ifzy, n = this.data.cfstate, s = JSON.stringify(this.data.conets), r = this.data.money, d = this.data.key_words, o = this.data.time_leng, h = this.data.phone, u = this.data.data_time, c = this.data.week, g = this.data.month_time, l = this.data.addnum, y = JSON.stringify(this.data.arr), f = this.data.text, _ = this.data.inquiry, m = this.data.tijianper, p = this.data.fuwus;
        if ("1" == m) {
            var x = this.data.names, z = this.data.numcard, w = this.data.sex, k = this.data.tel, j = this.data.region, v = getCurrentPages(), b = v[v.length - 2];
            t = this.data.j_id;
            return b.setData({
                names: x,
                numcard: z,
                sex: w,
                tel: k,
                region: j,
                j_id: t
            }), wx.navigateBack({
                detail: 1
            }), !1;
        }
        if (this.data.exist) this.data.exist;
        if ("" != e && null != e && "undefined" != e && "lvtong" != this.data.leixing) return wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifus/huanzhezhifus?inquiry=" + this.data.inquiry + "&ser_key=" + d + "&pinyin=" + d + "&tid=" + e + "&key_words=" + d + "&j_id=" + t + "&addnum=" + l + "&money=" + r
        }), !1;
        if ("-1" == this.data.inquiry) {
            console.log("1");
            var D = this.data.tit, T = this.data.back_orser;
            a = this.data.zid;
            return wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?inquiry=" + this.data.inquiry + "&conets=" + s + "&ser_key=" + d + "&pinyin=" + d + "&tit=" + D + "&j_id=" + t + "&back_orser=" + T + "&zid=" + a + "&cfstate=1&key_words=" + d + "&addnum=" + l + "&arr=" + y
            }), !1;
        }
        if (console.log(d, _, i), 4 == _) return wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/xuanzeyaopin/xuanzeyaopin?key_words=" + d + "&j_id=" + t + "&ser_key=" + d + "&pinyin=" + d + "&inquiry=" + this.data.inquiry + "&conets=" + s + "&text=" + f
        }), !1;
        if ("tuwenwenzhen" != d && "tijianjiedu" != d || (this.data.tjorder ? wx.reLaunch({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?key_words=" + d + "&zid=" + a + "&j_id=" + t + "&cfstate=" + n + "&conets=" + s + "&money=" + r + "&time_leng=" + o + "&phone=" + h + "&addnum=" + l + "&arr=" + y + "&tjorder=" + this.data.tjorder
        }) : wx.reLaunch({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?key_words=" + d + "&zid=" + a + "&j_id=" + t + "&cfstate=" + n + "&conets=" + s + "&money=" + r + "&time_leng=" + o + "&phone=" + h + "&addnum=" + l + "&arr=" + y
        })), "dianhuajizhen" != d && "shipinwenzhen" != d && "shoushukuaiyue" != d && "yuanchengguahao" != d || wx.redirectTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?key_words=" + d + "&zid=" + a + "&j_id=" + t + "&cfstate=" + n + "&conets=" + s + "&money=" + r + "&time_leng=" + o + "&phone=" + h + "&data_time=" + u + "&month_time=" + g + "&week=" + c + "&addnum=" + l + "&arr=" + y
        }), "yuanchengkaifang" == d && 3 == _ && 1 == i) {
            D = this.data.tit;
            return wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?key_words=" + d + "&conets=" + s + "&zid=" + a + "&j_id=" + t + "&typs=0&money=" + r + "&addnum=" + l + "&ser_key=" + d + "&arr=undefined"
            }), !1;
        }
        if ("yuanchengkaifang" == d && 3 == _ && 0 == i) {
            D = this.data.tit;
            return wx.navigateTo({
                url: "/hyb_yl/userLife/pages/faxian/faxian?inquiry=" + this.data.inquiry + "&conets=" + s + "&ser_key=" + d + "&pinyin=" + d + "&tit=" + D + "&j_id=" + t + "&addnum=" + l + "&arr=" + y
            }), !1;
        }
        return "lvtong" == this.data.leixing ? (wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu?did=" + this.data.did + "&server=" + this.data.server + "&money=" + this.data.money + "&hid=" + this.data.hid + "&keshi_two=" + this.data.keshi_two + "&tid=" + this.data.typeid + "&leixing=" + this.data.leixing + "&conets=" + this.data.conets + "&cfstate=" + this.data.cfstate + "&arr=" + this.data.arr + "&time=" + this.data.time + "&j_id=" + t + "&fuwus=" + p + "&zid=" + a
        }), !1) : void 0;
    },
    onShow: function() {
        this.getMyown(), this.getMyalluser();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    addPeo: function(t) {
        var a = JSON.stringify(this.data.sickrela), e = t.currentTarget.dataset.sick_index;
        console.log(e), wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/preindex/sickinfo/index?sickrela=" + a + "&sick_index=" + e + "&last=" + this.data.last
        });
    },
    getMyown: function() {
        var a = this, e = wx.getStorageSync("userInfo"), i = a.data.openid, n = e.u_name;
        t.util.request({
            url: "entry/wxapp/user.myinformation",
            data: {
                names: n,
                openid: i
            },
            success: function(t) {
                if (console.log(t), t.data) var e = 1; else e = 0;
                console.log("aaa", t.data), a.setData({
                    use_own: t.data,
                    j_id: t.data.j_id,
                    region: t.data.region,
                    sex: t.data.sex,
                    names: t.data.names,
                    numcard: t.data.numcard,
                    tel: t.data.tel,
                    age: t.data.age,
                    sick_index: e
                });
            }
        });
    },
    getMyalluser: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/user.alluserfamily",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), t.data.length > 0 && a.setData({
                    archivesArr: t.data,
                    j_id: t.data[0].j_id
                });
            },
            fail: function(t) {}
        });
    },
    detalmsg: function(t) {
        var a = "/hyb_yl/zhuanjiasubpages/pages/danganList/danganList?j_id=" + t.currentTarget.dataset.j_id + "&doc=0&type=1&titlme=" + t.currentTarget.dataset.names + "&openid=" + t.currentTarget.dataset.openid;
        wx.navigateTo({
            url: a
        });
    },
    choosepeo: function(t) {
        t.currentTarget.dataset.sick_index, this.data.zid, this.data.name, this.data.keywords;
        var a = t.currentTarget.dataset.numcard, e = t.currentTarget.dataset.sex, i = t.currentTarget.dataset.names, n = t.currentTarget.dataset.j_id, s = t.currentTarget.dataset.tel, r = t.currentTarget.dataset.region, d = t.currentTarget.dataset.ind;
        "undefined" !== d ? this.setData({
            i: d,
            j_id: n,
            names: i,
            numcard: a,
            sex: e,
            tel: s,
            region: r
        }) : this.setData({
            i: -1,
            j_id: n,
            names: i,
            numcard: a,
            sex: e,
            tel: s,
            region: r
        });
    }
});