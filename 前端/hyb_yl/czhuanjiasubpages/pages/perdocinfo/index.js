var a = getApp();

Page({
    data: {
        items: [],
        mask_key: !0,
        textarea: "",
        title: [ "请填写疾病名称或症状", "选择病程", "最近去医院就诊过吗", "现在的病情变化情况", "病情主诉", "图片材料" ],
        raditem1: [ {
            name: "一月内",
            value: "一月内",
            checked: !1
        }, {
            name: "一周内",
            value: "一周内",
            checked: !1
        }, {
            name: "半年内",
            value: "半年内",
            checked: !1
        }, {
            name: "大于半年",
            value: "大于半年",
            checked: !1
        } ],
        raditem2: [ {
            name: "没有就诊过",
            value: "没有就诊过",
            checked: !1
        }, {
            name: "就诊过",
            value: "就诊过",
            checked: !1
        } ],
        raditem3: [ {
            name: "基本稳定",
            value: "基本稳定",
            checked: !1
        }, {
            name: "基本痊愈",
            value: "基本痊愈",
            checked: !1
        }, {
            name: "急性发作期",
            value: "急性发作期",
            checked: !1
        } ],
        img_arr: [],
        data_arr: [],
        two_input_key: !1,
        all_key: !1,
        hospital: "",
        department: "",
        inputtext: "",
        radiodata1: "",
        radiodata2: "",
        radiodata3: "",
        trantitle: [ "请填写疾病名称或症状", "选择病程", "最近去医院就诊过吗？", "现在的病情变化情况", "病情主诉", "图片材料" ],
        trancont: [],
        tranprev: []
    },
    checkboxChange: function(a) {
        console.log("checkbox发生change事件，携带value值为：", a.detail.value), wx.setStorageSync("jbname", a.detail.value);
    },
    deldata: function(a) {
        console.log(a.currentTarget.dataset.index);
        var t = a.currentTarget.dataset.index;
        this.data.items.splice(t, 1), this.setData({
            items: this.data.items
        }), wx.setStorageSync("jbname", this.data.items);
    },
    showpop: function() {
        this.setData({
            textarea: "",
            mask_key: !1,
            all_key: !0
        });
    },
    getext: function(a) {
        this.setData({
            textarea: a.detail.value
        });
    },
    addinfo: function(a) {
        var t = a.currentTarget.dataset.index;
        this.setData({
            mask_key: !0,
            all_key: !1
        });
        for (var e = 0; e < this.data.items.length; e++) if (this.data.textarea == this.data.items[e].value) return wx.showToast({
            title: "请勿重复添加",
            icon: "none"
        }), !1;
        if (1 == t && this.data.textarea) {
            var i = {
                name: this.data.textarea,
                value: this.data.textarea,
                checked: !0
            };
            this.data.items.push(i), this.setData({
                items: this.data.items
            }), wx.setStorageSync("jbname", this.data.items);
        }
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value), this.setData({
            radiodata1: a.detail.value
        });
    },
    radioChange2: function(a) {
        console.log("radio发生change事件，携带value值为：", a), "没有就诊过" == a.detail.value ? this.setData({
            two_input_key: !1
        }) : "就诊过" == a.detail.value && this.setData({
            two_input_key: !0
        }), this.setData({
            radiodata2: a.detail.value
        });
    },
    radioChange3: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value), this.setData({
            radiodata3: a.detail.value
        });
    },
    addimg: function() {
        var t = this, e = a.siteInfo.uniacid, i = t.data.data_arr;
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
                        console.log(a), i.push(a.data), wx.setStorageSync("img_arr", i), t.setData({
                            img_arr: i
                        });
                    }
                });
            }
        });
    },
    delimg: function(a) {
        var t = a.currentTarget.dataset.index;
        this.data.img_arr.splice(t, 1), this.setData({
            img_arr: this.data.img_arr
        });
    },
    hospital: function(a) {
        console.log(a);
        a.detail.value;
        this.setData({
            hospital: a.detail.value
        });
    },
    department: function(a) {
        a.detail.value;
        this.setData({
            department: a.detail.value
        });
    },
    inputtext: function(a) {
        a.detail.value;
        this.setData({
            inputtext: a.detail.value
        });
    },
    nextpage: function() {
        var a = {
            question: "选择希望得到的帮助",
            anser: this.data.tranprev
        }, t = {
            question: this.data.title[0],
            anser: this.data.items
        }, e = {
            question: this.data.title[1],
            anser: this.data.radiodata1
        }, i = {
            question: this.data.title[2],
            anser: this.data.radiodata2,
            input1: this.data.hospital,
            input2: this.data.department
        }, n = {
            question: this.data.title[3],
            anser: this.data.radiodata3
        }, s = {
            question: this.data.title[4],
            anser: this.data.inputtext
        }, o = {
            question: this.data.title[5],
            anser: this.data.img_arr
        };
        if (0 == this.data.items.length) wx.showToast({
            title: "请添加新疾病",
            icon: "none"
        }); else if ("" == this.data.radiodata1) wx.showToast({
            title: "请选择病程",
            icon: "none"
        }); else if ("" == this.data.radiodata2) wx.showToast({
            title: "请补充信息",
            icon: "none"
        }); else if ("" == this.data.radiodata3) wx.showToast({
            title: "请选择病情变化情况",
            icon: "none"
        }); else if ("" == this.data.inputtext) wx.showToast({
            title: "请选择病情主诉",
            icon: "none"
        }); else if (0 == this.data.img_arr.length) wx.showToast({
            title: "请添加图片材料",
            icon: "none"
        }); else {
            this.data.trancont.push(a, t, e, i, n, s, o), this.setData({
                trancont: this.data.trancont
            });
            for (var d = wx.getStorageSync("items"), l = 0; l < d.length; l++) if (1 == d[l].checked) {
                var r = {
                    value1: d[l].value,
                    value2: d[l].textarea
                };
                this.data.tranprev.push(r), this.setData({
                    tranprev: this.data.tranprev
                });
            }
            console.log("报告数组：", this.data.trancont), wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/tijiandetail/index?num=3"
            });
        }
    },
    onLoad: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                e.setData({
                    url: a.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});