var t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        inquiry: "",
        checkboxlist: [ {
            text: "7天",
            checked: !1
        }, {
            text: "14天",
            checked: !1
        }, {
            text: "1个月",
            checked: !1
        }, {
            text: "2个月",
            checked: !1
        }, {
            text: "3个月",
            checked: !1
        } ],
        upload_picture_list: [],
        typedate: 0
    },
    infomationbtn: function(t) {
        console.log(t);
        var e = t.detail.value, a = this.data.upload_picture_list, i = this.data.typedate, n = this.data.key_words, o = this.data.timeleng, s = this.data.tit, c = this.data.ifzy, r = this.data.money, d = {
            text: e.zhengzhuang,
            text2: e.yaopin,
            timleng: o,
            upload_picture_list: a,
            typedate: i
        }, u = JSON.stringify(d);
        if (console.log(d), "" == e.zhengzhuang) wx.showToast({
            title: "提问至少10字",
            icon: "none"
        }); else if (this.data.back_orser) {
            var l = this.data.back_orser, h = this.data.zid, p = this.data.j_id;
            wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=-1&conets=" + u + "&key_words=" + n + "&pinyin=" + n + "&tit=" + s + "&back_orser=" + l + "&zid=" + h + "&j_id=" + p + "&ifzy=" + c + "&money=" + r
            });
        } else {
            h = this.data.zid;
            wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=" + this.data.inquiry + "&conets=" + u + "&key_words=" + n + "&pinyin=" + n + "&tit=" + s + "&ifzy=" + c + "&zid=" + h + "&money=" + r
            });
        }
    },
    deleteimg: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.upload_picture_list;
        console.log(a), a.splice(e, 1), this.setData({
            upload_picture_list: a,
            typedate: 0
        });
    },
    uploadimg: function() {
        var e = this, a = t.siteInfo.uniacid, i = e.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var n = t.tempFilePaths, o = 0; o < n.length; o++) wx.uploadFile({
                    url: e.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[o],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        console.log(t), i.push(t.data), e.setData({
                            upload_picture_list: i,
                            typedate: 1
                        });
                    }
                });
            }
        });
    },
    checkcommon: function(t) {
        var e = this.data.checkboxlist, a = t.currentTarget.dataset.i;
        e[a].checked = !e[a].checked, this.setData({
            checkboxlist: e,
            timeleng: t.currentTarget.dataset.timeleng
        });
    },
    onLoad: function(e) {
        var a = this, i = wx.getStorageSync("color"), n = e.ifzy, o = e.key_words;
        if (e.zid && a.setData({
            zid: e.zid
        }), e.money && a.setData({
            money: e.money
        }), e.back_orser) {
            var s = e.zid, c = e.j_id;
            a.setData({
                back_orser: e.back_orser,
                zid: s,
                j_id: c
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                a.setData({
                    url: t.data
                });
            }
        }), a.setData({
            inquiry: e.inquiry,
            key_words: o,
            tit: e.tit,
            ifzy: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});