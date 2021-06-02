var a = getApp();

Page({
    data: {
        focus: !0,
        progress: 10,
        date: [],
        currindex: 0,
        textvalue: "",
        tranbiglist: [],
        data_arr: [],
        chosesmoke: !1,
        chosewine: !1,
        choseactive: !1,
        list: {
            question: "体检图片",
            img: []
        },
        blockques1: "",
        blockques2: "",
        picker_key1: !0,
        picker_key2: !0,
        picker_key3: !0
    },
    uploadimg2: function() {
        var e = this, t = a.siteInfo.uniacid, n = e.data.data_arr;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                for (var i = a.tempFilePaths, o = 0; o < i.length; o++) wx.uploadFile({
                    url: e.data.url + "app/index.php?i=" + t + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: i[o],
                    name: "upfile",
                    formData: {},
                    success: function(a) {
                        console.log(a), e.data.list.img = n.push(a.data), e.setData({
                            img2: n
                        });
                    }
                });
            }
        });
    },
    downimg2: function(a) {
        console.log(a.currentTarget.dataset.index);
        var e = a.currentTarget.dataset.index;
        this.data.img2.splice(e, 1), this.setData({
            img2: this.data.img2
        });
    },
    next: function() {
        var e = this, t = e.data.img2;
        if (wx.setStorageSync("img2", e.data.img2), t.length <= 0) wx.showToast({
            title: "请先上传体检报告",
            icon: "none"
        }); else {
            var n = e.data.zid, i = (e.data.name, e.data.keywords), o = e.data.j_id, s = {
                question: "体检图片",
                img: t
            }, d = e.data.tranbiglist;
            d.push(s), e.setData({
                tranbiglist: d
            }), a.util.request({
                url: "entry/wxapp/hzbingli.addbingli",
                data: {
                    msglist: d,
                    sicktel: e.data.tel,
                    openid: wx.getStorageSync("openid"),
                    j_id: o,
                    keywords: i
                },
                success: function(t) {
                    console.log(t);
                    var s = t.data, d = e.data.name;
                    a.util.request({
                        url: "entry/wxapp/hzbingli.addorder",
                        data: {
                            zid: n,
                            name: d,
                            keywords: i,
                            openid: wx.getStorageSync("openid"),
                            bl_id: s,
                            money: e.data.newmoney,
                            j_id: o
                        },
                        success: function(a) {
                            console.log(a);
                            var t = a.data.name, d = a.data.order, r = e.data.newmoney, l = a.data.oid;
                            wx.navigateTo({
                                url: "/hyb_yl/czhuanjiasubpages/pages/questends/index?phone=" + e.data.tel + "&zid=" + n + "&name=" + t + "&keywords=" + i + "&j_id=" + o + "&allone_key=1&name=" + t + "&order=" + d + "&money=" + r + "&oid=" + l + "&bl_id=" + s
                            });
                        }
                    });
                }
            });
        }
    },
    onLoad: function(e) {
        var t = this, n = e.zid, i = e.name, o = e.keywords;
        console.log(o);
        var s = e.j_id, d = e.tel;
        a.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: n,
                key: o
            },
            success: function(a) {
                t.setData({
                    newmoney: a.data.data.newmoney
                });
            }
        }), a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), t.setData({
                    url: a.data,
                    trandatas: e,
                    zid: n,
                    name: i,
                    keywords: o,
                    j_id: s,
                    tel: d
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