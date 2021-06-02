var a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/typeof")), t = getApp(), e = {};

Page({
    data: {
        array: [ "男", "女" ],
        index: "",
        current: 0,
        date: "",
        date1: "",
        date2: "",
        relative: [],
        array1: [],
        array2: [ "" ],
        index2: "",
        index1: "",
        imgArr: [],
        imgArr1: [],
        img_arr: [],
        data_arr: [],
        lianxiren: []
    },
    onLoad: function(a) {
        var e = this, i = wx.getStorageSync("color"), n = a.lpid, r = t.siteInfo.uniacid, l = wx.getStorageSync("openid");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), t.util.request({
            url: "entry/wxapp/url",
            cachetime: "0",
            success: function(a) {
                console.log(a), e.setData({
                    url: a.data
                });
            }
        }), e.setData({
            backgroundColor: i,
            uniacid: r,
            openid: l,
            lpid: n
        });
    },
    bindPickerChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            index: a.detail.value
        });
    },
    bindPickerChange1: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            index1: a.detail.value
        });
    },
    bindPickerChange2: function(a) {
        var t = this.data.array_fid;
        console.log(t);
        var e = t[a.detail.value].fid;
        console.log(e), this.setData({
            index1: a.detail.value,
            fid: e
        });
    },
    bindDateChange1: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            date1: a.detail.value
        });
    },
    bindDateChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            date: a.detail.value
        });
    },
    bindDateChange2: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            date2: a.detail.value
        });
    },
    nextClick: function() {
        this.setData({
            current: 1
        });
    },
    nextClick2: function() {
        this.setData({
            current: 2
        });
    },
    nextClick3: function() {
        this.setData({
            current: 3
        });
    },
    lastClick: function() {
        this.setData({
            current: 0
        });
    },
    lastClick2: function() {
        this.setData({
            current: 0
        });
    },
    lastClick3: function() {
        this.setData({
            current: 1
        });
    },
    lastClick4: function() {
        this.setData({
            current: 2
        });
    },
    add: function(a) {
        var t = this.data.relative, e = t.length, i = {};
        i.names1 = "names_" + e, i.types1 = "types_" + e, i.phones1 = "phones_" + e, t.push(i), 
        this.setData({
            relative: t
        });
    },
    chooseImgArr: function() {
        var a = this;
        console.log(this.data.img_arr), this.data.img_arr.length < 4 ? wx.chooseImage({
            count: 4,
            sizeType: [ "original", "compressed" ],
            success: function(t) {
                console.log(t), 4 == t.tempFilePaths.length && a.setData({
                    hide: !0
                }), a.setData({
                    img_arr: a.data.img_arr.concat(t.tempFilePaths)
                });
            }
        }) : wx.showToast({
            title: "最多上传四张图片",
            icon: "loading",
            duration: 3e3
        });
    },
    del: function(a) {
        var t = a.currentTarget.dataset.index, e = this.data.img_arr;
        e.splice(t, 1), this.setData({
            imgArr: e
        });
    },
    onReady: function() {
        this.getFwleix(), this.getOne();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    inputClick10: function(t) {
        var e = this.data.lianxiren, i = t.currentTarget.dataset.index;
        if (console.log((0, a.default)(e[i])), "object" == (0, a.default)(e[i])) e[i].names = t.detail.value; else {
            var n = {};
            n.names = t.detail.value, e[i] = n;
        }
        this.setData({
            lianxiren: e
        });
    },
    inputClick11: function(t) {
        var e = this.data.lianxiren, i = t.currentTarget.dataset.index;
        if ("object" == (0, a.default)(e[i])) e[i].types = t.detail.value; else {
            var n = {};
            n.types = t.detail.value, e[i] = n;
        }
        this.setData({
            lianxiren: e
        });
    },
    inputClick12: function(t) {
        var e = this.data.lianxiren, i = t.currentTarget.dataset.index;
        if ("object" == (0, a.default)(e[i])) e[i].phones = t.detail.value; else {
            var n = {};
            n.phones = t.detail.value, e[i] = n;
        }
        this.setData({
            lianxiren: e
        });
    },
    subClick: function(a) {
        console.log(a);
        var i = a.detail.formId, n = wx.getStorageSync("openid"), r = a.detail.value;
        e = a.detail.value;
        var l = a.detail.target.dataset.index, o = this.data.data_arr, s = this.data.lianxiren;
        [].push(s), r.lianxi = s, console.log(r), 1 == l && (console.log(o), this.upload(), 
        wx.showToast({
            title: "上传中，请稍后",
            icon: "loading"
        }), setTimeout(function() {
            t.util.request({
                url: "entry/wxapp/Inseruser",
                data: {
                    value: r,
                    data_arr: o
                },
                success: function(a) {
                    t.util.request({
                        url: "entry/wxapp/QQemail",
                        data: {
                            cyname: r.cyname,
                            phone: r.uerPhone
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    });
                }
            });
        }, 3e3)), t.util.request({
            url: "entry/wxapp/UserFormId",
            data: {
                form_id: i,
                openid: n
            },
            success: function(a) {}
        });
    },
    upload: function() {
        for (var a = this, t = a.data.uniacid, i = a.data.data_arr, n = 0; n < this.data.img_arr.length; n++) wx.uploadFile({
            url: a.data.url + "app/index.php?i=" + t + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
            filePath: a.data.img_arr[n],
            name: "upfile",
            formData: e,
            success: function(t) {
                console.log(t), i.push(t.data), a.setData({
                    data_arr: i
                });
            }
        });
        this.setData({
            formdata: ""
        });
    },
    getOne: function() {
        var a = this, e = a.data.lpid;
        t.util.request({
            url: "entry/wxapp/Alonelip",
            data: {
                lpid: e
            },
            success: function(t) {
                console.log(t);
                var e = a.data.array1;
                console.log(e);
                for (var i = 0; i < e.length; i++) if (e[i] == t.data.data.fwname) var n = i;
                a.setData({
                    alone: t.data.data,
                    relative: t.data.data.name_0,
                    lianxiren: t.data.data.name_0,
                    img_arr: t.data.data.userpic,
                    index: t.data.data.sex,
                    date1: t.data.data.date1,
                    date2: t.data.data.date2,
                    date: t.data.data.date,
                    index1: n
                });
            }
        });
    },
    getFwleix: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/Fwleix",
            success: function(t) {
                console.log(t.data.data.fwname), a.setData({
                    array1: t.data.data.fwname,
                    array_fid: t.data.data
                });
            }
        });
    }
});