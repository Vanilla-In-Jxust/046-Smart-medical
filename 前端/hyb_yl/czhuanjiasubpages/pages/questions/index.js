var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page({
    data: {
        progress: "0",
        pagenum: 1,
        pro_grap: [ {
            question: "本次患病多久了？",
            ansers: [ "一周内", "一月内", "半年内", "大于半年" ]
        }, {
            question: "本次咨询的疾病名称或症状？",
            questi: "例糖尿病，白癜风或头疼",
            one_items: []
        }, {
            question: "本次咨询的疾病去医院就诊过吗？",
            questi: "曾经的就诊经历，是给医生的重要参考",
            ansers: [ "就诊过", "没就诊过" ],
            one_items: [],
            input1: "",
            input2: ""
        }, {
            question: "有可以反映病情的患处照片吗？",
            ansers: [ "有", "暂时没有" ],
            img: []
        }, {
            question: "当前是否有正在使用的药物？",
            ansers: [ "有", "没有" ],
            img: []
        }, {
            question: "是否有过手术，放化疗等重大疾病治疗经历及慢性病史",
            questi: "患者但是每年的萨满的拿手的拿手的",
            ansers: [ "有", "没有" ],
            one_items: []
        }, {
            question: "是否有过敏史？",
            questi: "如有变化请补充",
            ansers: [ "有", "没有" ],
            one_items: []
        }, {
            question: "希望获得医生什么帮助",
            questi: "可向医生询问是否可去门诊就诊，如何控制病情，是否需要手术等",
            textarea: ""
        } ],
        data_arr: [],
        items: [],
        input1: "",
        input2: "",
        img: [],
        img2: [],
        one_mask_key: !0,
        one_textarea: "",
        addinfo_key: !0,
        addinfos_key: !0,
        threedown_key: !0,
        fourdown_key: !0,
        fivedown_key: !0,
        five_mask_key: !0,
        five_items: [],
        five_textarea: "",
        sixdown_key: !0,
        six_items: [],
        six_mask_key: !0,
        six_textarea: "",
        doc_advi: "",
        trandata: [],
        cindex: 0
    },
    dianbtn: function(t) {
        this.setData({
            ans_index: t.currentTarget.dataset.cindex
        });
        var a = t.currentTarget.dataset.index, e = t.currentTarget.dataset.cindex;
        this.setData({
            cindex: e
        }), 2 == a && 0 == e ? this.setData({
            addinfo_key: !1
        }) : 2 == a && 0 != e ? this.setData({
            addinfo_key: !0
        }) : 3 == a && 0 == e ? this.setData({
            threedown_key: !1
        }) : 3 == a && 0 != e ? this.setData({
            threedown_key: !0
        }) : 4 == a && 0 == e ? this.setData({
            fourdown_key: !1
        }) : 4 == a && 0 != e ? this.setData({
            fourdown_key: !0
        }) : 5 == a && 0 == e ? this.setData({
            fivedown_key: !1
        }) : 5 == a && 0 != e ? this.setData({
            fivedown_key: !0
        }) : 6 == a && 0 == e ? this.setData({
            sixdown_key: !1
        }) : 6 == a && 0 != e && this.setData({
            sixdown_key: !0
        });
    },
    btn_prev: function() {
        if (this.data.pagenum -= 1, this.data.pagenum <= 0) return !1;
        3 != this.data.pagenum && this.setData({
            addinfo_key: !0
        });
        var t = parseFloat(this.data.pagenum) - 1;
        this.data.trandata.splice(t, 1), this.setData({
            trandata: this.data.trandata
        }), console.log("上一题病例数组", this.data.trandata);
        var a = parseFloat(this.data.progress);
        a -= 10, this.setData({
            pagenum: this.data.pagenum,
            progress: a,
            onedown_key: !0,
            threedown_key: !0,
            fourdown_key: !0,
            fivedown_key: !0,
            sixdown_key: !0
        });
    },
    btn_next: function() {
        this.data.zid, this.data.name, this.data.keywords;
        var t = parseFloat(this.data.pagenum);
        if (console.log("本题数", t), this.data.pro_grap[t - 1].ansers) {
            if (null == this.data.ans_index || -1 == this.data.ans_index) return wx.showToast({
                title: "请选择",
                icon: "none"
            }), !1;
            this.getarr(), this.getnext();
        } else if (null == this.data.pro_grap[t - 1].ansers) {
            if (this.getarr(), 2 == t && 0 == this.data.pro_grap[1].one_items.length) return wx.showToast({
                title: "请补充信息",
                icon: "none"
            }), !1;
            this.getnext();
        }
    },
    getarr: function() {
        var t = parseFloat(this.data.pagenum);
        if (2 !== t && 8 !== t) {
            console.log(!1);
            var a = t - 1, e = this.data.cindex, i = {
                quest: this.data.pro_grap[a].question,
                anser: this.data.pro_grap[a].ansers[e],
                one_items: this.data.pro_grap[a].one_items,
                img: this.data.pro_grap[a].img
            };
            this.data.trandata.push(i), console.log("下一题病例数组", this.data.trandata);
        } else if (2 == t && this.data.pro_grap[1].one_items.length > 0) {
            var s = t - 1, n = (this.data.pro_grap[s].question, this.data.pro_grap[1].one_items, 
            {
                quest: this.data.pro_grap[s].question,
                contarr: this.data.pro_grap[1].one_items
            });
            this.data.trandata.push(n), console.log("contarr", this.data.trandata);
        } else if (8 == t && this.data.pro_grap[7].textarea) {
            this.data.pro_grap[index].question, this.data.pro_grap[7].one_items;
            var r = {
                quest: this.data.pro_grap[index].question,
                textarea: this.data.pro_grap[7].textarea
            };
            this.data.trandata.push(r), console.log("contarr", this.data.trandata);
        }
    },
    getnext: function() {
        var t = this.data.zid, a = this.data.name, e = this.data.keywords, i = (this.data.pro_grap.length, 
        this.data.j_id), s = parseFloat(this.data.pagenum);
        if (s += 1, this.data.pagenum >= this.data.pro_grap.length) {
            var n = {
                quest: this.data.pro_grap[7].question,
                anser: this.data.doc_advi
            };
            this.data.trandata.push(n), console.log(this.data.trandata);
            var r = JSON.stringify(this.data.trandata);
            console.log(r), wx.setStorageSync("modul", r), wx.setStorageSync("sickname", this.data.one_items), 
            wx.setStorageSync("hospatil", this.data.items), wx.setStorageSync("sickimg", this.data.img), 
            wx.setStorageSync("medimg", this.data.img2), wx.setStorageSync("sickhisty", this.data.five_items), 
            wx.setStorageSync("allergy", this.data.six_items), wx.setStorageSync("dochelp", this.data.doc_advi);
            var o = this.data.tel, d = [ r, this.data.one_items, this.data.items, this.data.img, this.data.img2, this.data.five_items, this.data.six_items, this.data.doc_advi ];
            return wx.setStorage({
                key: "nextdata",
                data: d
            }), wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/questend/index?zid=" + t + "&name=" + a + "&keywords=" + e + "&j_id=" + i + "&tel=" + o
            }), !1;
        }
        var h = parseFloat(this.data.progress);
        h += 10, console.log("进度条", h), this.setData({
            pagenum: s,
            progress: h,
            ans_index: -1,
            addinfo_key: !0,
            onedown_key: !0,
            threedown_key: !0,
            fourdown_key: !0,
            fivedown_key: !0,
            sixdown_key: !0
        });
    },
    od_checkboxChange: function(t) {
        console.log("checkbox发生change事件，携带value值为：", t.detail.value);
    },
    od_changeradio: function(a) {
        var e = a.currentTarget.dataset.index, i = "one_items[" + e + "]checked";
        this.setData((0, t.default)({}, i, !this.data.one_items[e].checked));
    },
    od_getext: function(t) {
        this.setData({
            one_textarea: t.detail.value
        });
    },
    od_showpop: function(t) {
        this.setData({
            one_mask_key: !1,
            one_textarea: ""
        });
    },
    od_enter: function(a) {
        var e = a.currentTarget.dataset.index;
        if (this.setData({
            one_mask_key: !0
        }), 1 == e && this.data.one_textarea) {
            var i = {
                name: this.data.one_textarea,
                value: this.data.one_textarea,
                checked: !0
            };
            this.data.pro_grap[1].one_items;
            this.data.pro_grap[1].one_items.push(i);
            this.setData((0, t.default)({}, "pro_grap[1].one_items", this.data.pro_grap[1].one_items));
        }
    },
    od_deldata: function(a) {
        var e = a.currentTarget.dataset.index;
        this.data.pro_grap[1].one_items.splice(e, 1);
        this.setData((0, t.default)({}, "pro_grap[1].one_items", this.data.pro_grap[1].one_items));
    },
    input1: function(a) {
        this.setData((0, t.default)({}, "pro_grap[2].input1", a.detail.value));
    },
    input2: function(a) {
        this.setData((0, t.default)({}, "pro_grap[2].input2", a.detail.value));
    },
    enter: function(a) {
        var e = a.currentTarget.dataset.index;
        if (0 == e) this.setData({
            addinfo_key: !0
        }); else if (1 == e) {
            var i = this.data.pro_grap[2].one_items, s = i.length, n = this.data.pro_grap[2].input1, r = this.data.pro_grap[2].input2;
            console.log("items", i, "itemlen", s, "input1", n, "input2", r);
            for (var o = 0; o < s; o++) if (i[o].name1 == n || i[o].name2 == r) return this.setData({
                addinfos_key: !1
            }), !1;
            if ("" == n || "" == r) wx.showToast({
                title: "请输入医院名称或科室名称",
                icon: "none"
            }); else {
                var d, h = {
                    name1: this.data.pro_grap[2].input1,
                    name2: this.data.pro_grap[2].input2,
                    value1: this.data.pro_grap[2].input1,
                    value2: this.data.pro_grap[2].input2,
                    checked: !0
                };
                this.data.pro_grap[2].one_items.push(h);
                this.setData((d = {
                    addinfos_key: !1
                }, (0, t.default)(d, "pro_grap[2].one_items", this.data.pro_grap[2].one_items), 
                (0, t.default)(d, "pro_grap[2].input1", ""), (0, t.default)(d, "pro_grap[2].input2", ""), 
                d));
            }
        }
    },
    checkboxChange: function(t) {
        console.log("checkbox发生change事件，携带value值为：", t.detail.value);
    },
    changeradio: function(a) {
        var e = a.currentTarget.dataset.index, i = "items[" + e + "].checked";
        this.setData((0, t.default)({}, i, !this.data.items[e].checked)), console.log(e);
    },
    deldata: function(a) {
        var e = a.currentTarget.dataset.index;
        this.data.pro_grap[2].one_items.splice(e, 1);
        this.setData((0, t.default)({}, "pro_grap[2].one_items", this.data.pro_grap[2].one_items));
    },
    addevent: function() {
        this.setData({
            addinfos_key: !0
        });
    },
    uploadimg: function() {
        var e = this, i = a.siteInfo.uniacid, s = e.data.data_arr;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                for (var n = a.tempFilePaths, r = 0; r < n.length; r++) wx.uploadFile({
                    url: e.data.url + "app/index.php?i=" + i + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[r],
                    name: "upfile",
                    formData: [],
                    success: function(a) {
                        console.log(a), s.push(a.data);
                        e.setData((0, t.default)({}, "pro_grap[3].img", s));
                    }
                });
            }
        });
    },
    downimg: function(a) {
        console.log(a.currentTarget.dataset.index);
        var e = a.currentTarget.dataset.index;
        this.data.pro_grap[3].img.splice(e, 1);
        this.setData((0, t.default)({}, "pro_grap[3].img", this.data.img));
    },
    uploadimg2: function() {
        var a = this;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                e.tempFilePaths;
                a.setData((0, t.default)({}, "pro_grap[4].img", a.data.pro_grap[4].img.concat(e.tempFilePaths)));
            }
        });
    },
    downimg2: function(a) {
        console.log(a.currentTarget.dataset.index);
        var e = a.currentTarget.dataset.index;
        this.data.pro_grap[4].img.splice(e, 1);
        this.setData((0, t.default)({}, "pro_grap[4].img", this.data.pro_grap[4].img));
    },
    fd_checkboxChange: function(t) {
        console.log("checkbox发生change事件，携带value值为：", t.detail.value);
    },
    fd_changeradio: function(a) {
        var e = a.currentTarget.dataset.index, i = "five_items[" + e + "]checked";
        this.setData((0, t.default)({}, i, !this.data.five_items[e].checked));
    },
    fd_getext: function(t) {
        this.setData({
            five_textarea: t.detail.value
        });
    },
    fd_showpop: function(t) {
        this.setData({
            five_mask_key: !1,
            five_textarea: ""
        });
    },
    fd_enter: function(a) {
        var e = a.currentTarget.dataset.index;
        if (this.setData({
            five_mask_key: !0
        }), 1 == e && this.data.five_textarea) {
            var i = {
                name: this.data.five_textarea,
                value: this.data.five_textarea,
                checked: !0
            };
            this.data.pro_grap[5].one_items.push(i);
            this.setData((0, t.default)({}, "pro_grap[5].one_items", this.data.pro_grap[5].one_items));
        }
    },
    fd_deldata: function(a) {
        var e = a.currentTarget.dataset.index;
        this.data.pro_grap[5].one_items.splice(e, 1);
        this.setData((0, t.default)({}, "pro_grap[5].one_items", this.data.pro_grap[5].one_items));
    },
    six_checkboxChange: function(t) {
        console.log("checkbox发生change事件，携带value值为：", t.detail.value);
    },
    six_changeradio: function(a) {
        var e = a.currentTarget.dataset.index, i = "six_items[" + e + "]checked";
        this.setData((0, t.default)({}, i, !this.data.six_items[e].checked));
    },
    six_getext: function(t) {
        this.setData({
            six_textarea: t.detail.value
        });
    },
    six_showpop: function(t) {
        this.setData({
            six_mask_key: !1,
            six_textarea: ""
        });
    },
    six_enter: function(a) {
        var e = a.currentTarget.dataset.index;
        this.setData({
            six_mask_key: !0
        });
        for (var i = 0; i < this.data.pro_grap[6].one_items.length; i++) if (this.data.pro_grap[6].one_items[i].value == this.data.six_textarea) return !1;
        if (1 == e && this.data.six_textarea) {
            var s = {
                name: this.data.six_textarea,
                value: this.data.six_textarea,
                checked: !0
            };
            this.data.pro_grap[6].one_items.push(s), this.setData((0, t.default)({}, "pro_grap[6].one_items", this.data.pro_grap[6].one_items));
        }
    },
    six_deldata: function(a) {
        var e = a.currentTarget.dataset.index;
        this.data.pro_grap[6].one_items.splice(e, 1);
        this.setData((0, t.default)({}, "pro_grap[6].one_items", this.data.pro_grap[6].one_items));
    },
    doc_advi: function(t) {
        this.setData({
            doc_advi: t.detail.value
        });
    },
    onLoad: function(t) {
        var e = this, i = (wx.getStorageSync("num"), wx.getStorageSync("progress"), t.zid), s = t.name, n = t.keywords, r = t.j_id, o = t.tel;
        a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data,
                    zid: i,
                    name: s,
                    keywords: n,
                    j_id: r,
                    tel: o
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        console.log("题目数", this.data.pro_grap.length);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});