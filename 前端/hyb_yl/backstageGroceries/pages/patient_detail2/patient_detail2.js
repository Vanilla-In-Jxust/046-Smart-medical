var a = getApp();

Page({
    data: {
        disabled: !1,
        img_arr: [],
        data_arr: []
    },
    chakanimg: function(a) {
        wx.previewImage({
            current: a.currentTarget.dataset.src,
            urls: this.data.info.pic
        });
    },
    upload: function() {
        for (var a = this, t = a.data.uniacid, e = a.data.data_arr, n = 0; n < this.data.img_arr.length; n++) wx.uploadFile({
            url: a.data.url + "app/index.php?i=" + t + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
            filePath: a.data.img_arr[n],
            name: "upfile",
            formData: [],
            success: function(t) {
                console.log(t), e.push(t.data), a.setData({
                    data_arr: e
                });
            }
        });
        this.setData({
            formdata: ""
        });
    },
    upimg: function() {
        var a = this;
        console.log(this.data.img_arr), this.data.img_arr.length < 3 ? wx.chooseMessageFile({
            count: 3,
            type: "all",
            success: function(t) {
                console.log(t), 3 == t.tempFiles.length && a.setData({
                    hide: !0
                }), a.setData({
                    img_arr: a.data.img_arr.concat(t.tempFiles[0].path),
                    name: t.tempFiles[0].name,
                    ppt: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/ppt.png"
                });
            }
        }) : wx.showToast({
            title: "最多上传三张图片",
            icon: "loading",
            duration: 3e3
        });
    },
    formSubmit: function(t) {
        var e = t.detail.value, n = e.dmoney, o = e.rg, i = e.hzid, s = e.zid, d = e.username, r = e.dorder, c = e.docname, u = e.cfzhenj, l = this.data.data_arr, m = this.data.useropenid;
        this.upload(), wx.showToast({
            title: "上传中，请稍后",
            icon: "loading"
        }), setTimeout(function() {
            "" == t.detail.value.rg ? wx.showToast({
                title: "请填写处方",
                image: "/hyb_yl/images/err.png"
            }) : a.util.request({
                url: "entry/wxapp/Saverecipe",
                data: {
                    userid: i,
                    content: o,
                    docid: s,
                    orderarr: r,
                    username: e.username,
                    pic: l,
                    useropenid: m,
                    docname: c,
                    cfzhenj: u
                },
                success: function(t) {
                    a.util.request({
                        url: "entry/wxapp/Dyjj",
                        data: {
                            username: d,
                            content: o,
                            dmoney: n,
                            docname: c,
                            ky_yibao: r
                        },
                        success: function(a) {}
                    }), wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3,
                        success: function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }
                    });
                },
                fail: function(a) {
                    console.log(a);
                }
            });
        }, 3e3);
    },
    onLoad: function(t) {
        var e = this, n = t.username, o = t.ksname, i = t.money, s = t.phone, d = t.tjtime, r = t.yytime, c = t.dorder, u = t.sex, l = t.age, m = t.zjid, p = t.hzid, f = wx.getStorageSync("color"), h = t.cid, g = t.useropenid, y = a.siteInfo.uniacid, x = t.xq;
        a.util.request({
            url: "entry/wxapp/url",
            cachetime: "0",
            success: function(a) {
                console.log(a), e.setData({
                    url: a.data
                });
            }
        }), "undefined" !== t.utype && e.setData({
            utype: t.utype
        }), h && a.util.request({
            url: "entry/wxapp/Selcetcfinfo",
            data: {
                cid: h
            },
            success: function(a) {
                console.log(a), e.setData({
                    dorder: a.data.data.orderarr,
                    username: a.data.data.username,
                    sex: a.data.data.mysex,
                    age: a.data.data.myage,
                    phone: a.data.data.myphone,
                    dmoney: a.data.data.dmoney,
                    money: a.data.data.money,
                    content: a.data.data.content,
                    info: a.data.data,
                    cfzhenj: a.data.data.cfzhenj
                });
            }
        });
        var w = t.z_name;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: f
        });
        e = this, t.id, t.ky_yibao;
        e.setData({
            username: n,
            ksname: o,
            money: i,
            phone: s,
            tjtime: d,
            yytime: r,
            dorder: c,
            sex: u,
            age: l,
            zjid: m,
            hzid: p,
            z_name: w,
            uniacid: y,
            useropenid: g,
            xq: x
        });
    },
    onReady: function() {
        this.getDocinfo();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getDocinfo: function() {
        var t = this, e = t.data.zjid;
        a.util.request({
            url: "entry/wxapp/Docinfo",
            data: {
                zid: e
            },
            success: function(a) {
                console.log(a), t.setData({
                    z_name: a.data.data.z_name
                });
            }
        });
    }
});