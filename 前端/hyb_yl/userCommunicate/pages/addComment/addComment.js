var t = getApp();

Page({
    data: {
        confirm: !1,
        height: 300,
        pathArr: [],
        picPath: "",
        title: "",
        starList: [ {
            text: "非常差",
            starBoo: !1
        }, {
            text: "差",
            starBoo: !1
        }, {
            text: "一般",
            starBoo: !1
        }, {
            text: "好",
            starBoo: !1
        }, {
            text: "非常好",
            starBoo: !1
        } ],
        starText: "",
        chooseImageBoo: !1
    },
    onLoad: function(a) {
        var e = this, o = a.sid, s = a.id;
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data
                });
            }
        }), e.setData({
            sid: o,
            id: s
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    bindFormSubmit: function() {
        var a = this.data.estimate, e = this.data.pathArr, o = this.data.dengj, s = this.data.id;
        t.util.request({
            url: "entry/wxapp/pinglun.goodspj",
            data: {
                openid: wx.getStorageSync("openid"),
                text: a,
                sid: this.data.sid,
                dengj: o,
                pic: e,
                id: s
            },
            success: function(t) {
                console.log(t);
                var a = getCurrentPages();
                a[a.length - 2].setData({
                    plstate: 1
                }), wx.navigateBack({
                    detail: 1
                }), wx.showToast({
                    title: "评价成功",
                    icon: "none"
                });
            }
        });
    },
    chooseImage: function() {
        var a = this, e = a.data.pathArr, o = t.siteInfo.uniacid;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var s = t.tempFilePaths, n = t.tempFilePaths, i = 0; i < n.length; i++) {
                    if (e.length >= 9) {
                        a.setData({
                            chooseImageBoo: !0
                        });
                        break;
                    }
                    wx.uploadFile({
                        url: a.data.url + "app/index.php?i=" + o + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                        filePath: s[i],
                        name: "upfile",
                        formData: {},
                        success: function(t) {
                            console.log(t), e.push(t.data), a.setData({
                                pathArr: e
                            });
                        }
                    });
                }
            }
        });
    },
    bindblur: function(t) {
        var a = t.detail.value;
        this.setData({
            estimate: a
        });
    },
    changeStar: function(t) {
        console.log(t);
        for (var a = t.target.dataset.current, e = this.data.starList, o = 0; o < e.length; o++) e[o].starBoo = o <= a;
        this.setData({
            starList: e,
            starText: e[a].text,
            dengj: t.target.dataset.current
        });
    }
});