var a = getApp();

Page({
    data: {
        upload_picture_list: [],
        typedate: 0
    },
    uploadimg: function() {
        var t = this, e = a.siteInfo.uniacid, i = t.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                for (var n = a.tempFilePaths, d = 0; d < n.length; d++) wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[d],
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
    handleContentInput: function(a) {
        this.setData({
            text: a.detail.value
        });
    },
    submit: function(t) {
        var e = this, i = this.data.text, n = this.data.typedate, d = this.data.upload_picture_list, o = e.data.id, s = e.data.zid, u = e.data.orders, r = {
            text: i,
            typedate: n,
            upload_picture_list: d
        };
        "tijianjiedu" == e.data.key_words ? a.util.request({
            url: "entry/wxapp/tijian.addsuggest",
            data: {
                data: r,
                back_orser: e.data.back_orser,
                zid: s,
                wzid: e.data.wzid,
                id: e.data.id
            },
            success: function(a) {
                console.log(a), wx.showToast({
                    title: "提交成功",
                    icon: "none",
                    success: function() {
                        wx.navigateTo({
                            url: "/hyb_yl/mysubpages/pages/backstageIndex/backstageIndex"
                        });
                    }
                });
            }
        }) : a.util.request({
            url: "entry/wxapp/zhuanjia.adduserzhuiwen",
            data: {
                arr: r,
                orders: u,
                zid: s
            },
            success: function(t) {
                console.log(t), a.util.request({
                    url: "entry/wxapp/zhuanjia.getdocmbtxing",
                    data: {
                        id: o,
                        val: i,
                        near: "图文",
                        zid: s
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), a.util.request({
                    url: "entry/wxapp/tuwen.detail",
                    data: {
                        orders: u,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(a) {
                        console.log(a), e.setData({
                            detail: a.data,
                            addnum: parseInt(a.data.addnum),
                            ifpay: a.data.ifpay
                        }), wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        var e = this;
        if ("tijianjiedu" == t.key_words) {
            wx.setNavigationBarTitle({
                title: "解读患者报告，综合建议"
            });
            var i = t.key_words;
            e.setData({
                key_words: i,
                id: t.id,
                back_orser: t.back_orser,
                zid: t.zid,
                wzid: t.wzid
            });
        } else {
            var n = t.back_orser, d = t.zid, o = t.id;
            e.setData({
                orders: n,
                zid: d,
                id: o
            });
        }
        a.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                console.log(a), e.setData({
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