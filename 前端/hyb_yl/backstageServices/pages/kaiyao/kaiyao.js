var t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        textareatxt: "",
        popif: !1,
        inquiry: "",
        argeen: !0,
        steps: [ "上传处方", "完善信息", "选择药品", "医生开药" ],
        upload_picture_list: [],
        stepnum: 0,
        typedate: 0,
        speedlist: [ {
            tit: "祛斑/去痘印",
            text: "祛斑/去痘印"
        }, {
            tit: "痔疮/痘痘",
            text: "痔疮/痘痘"
        }, {
            tit: "去黑头",
            text: "去黑头"
        }, {
            tit: "脚气",
            text: "脚气"
        }, {
            tit: "湿疹",
            text: "湿疹"
        }, {
            tit: "避孕",
            text: "避孕"
        } ]
    },
    infomationbtn: function(t) {
        var a = this.data.inquiry, e = this.data.upload_picture_list, i = this.data.typedate, n = this.data.key_words, s = this.data.ifshop;
        if ("4" == this.data.inquiry) {
            var o = t.detail.value.zhengzhuang;
            if (0 == e.length) return wx.showToast({
                title: "请上传处方凭证",
                icon: "none"
            }), !1;
        }
        if ("3" == this.data.inquiry) o = t.detail.value;
        console.log(t);
        var u = {
            text: o,
            text2: "",
            timleng: "",
            upload_picture_list: e,
            typedate: i
        }, r = JSON.stringify(u);
        if ("" == t.detail.value.zhengzhuang.zhengzhuang) wx.showToast({
            title: "提问至少10字",
            icon: "none"
        }); else {
            this.data.upload_picture_list;
            if ("1" == s) {
                var l = getCurrentPages();
                l[l.length - 2].setData({
                    typedate: this.data.typedate,
                    conets: r
                }), wx.navigateBack({
                    delta: 1
                });
            } else wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?key_words=" + n + "&conets=" + r + "&inquiry=" + a
            });
        }
    },
    chooseLabel: function(t) {
        var a = t.currentTarget.dataset.dex, e = this.data.speedlist;
        this.setData({
            textareatxt: e[a].text
        });
    },
    closepop: function() {
        this.setData({
            popif: !1
        });
    },
    nopingzheng: function() {
        this.setData({
            popif: !0
        });
    },
    textarr: function(t) {
        var a = t.detail.value, e = t.detail.value.cursor;
        this.setData({
            zhengzhuang: a,
            cursor: e
        });
    },
    navUrgent: function() {
        var t = this.data.key_words, a = this.data.inquiry, e = this.data.upload_picture_list, i = this.data.typedate;
        t = this.data.key_words, this.data.ifshop;
        if (console.log(this.data.cursor), "4" == this.data.inquiry) var n = this.data.zhengzhuang;
        if ("3" == this.data.inquiry) n = this.data.zhengzhuang;
        if ("" == this.data.cursor || 0 == this.data.cursor) return wx.showToast({
            title: "提问至少10字",
            icon: "none"
        }), !1;
        var s = {
            text: n,
            text2: "",
            timleng: "",
            upload_picture_list: e,
            typedate: i
        }, o = JSON.stringify(s);
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?key_words=" + t + "&conets=" + o + "&inquiry=" + a
        });
    },
    deleteimg: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.upload_picture_list;
        e.splice(a, 1), this.setData({
            upload_picture_list: e,
            typedate: 0
        });
    },
    uploadimg: function() {
        var a = this, e = t.siteInfo.uniacid, i = a.data.upload_picture_list;
        wx.chooseImage({
            count: 5,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                console.log(t);
                for (var n = t.tempFilePaths, s = 0; s < n.length; s++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[s],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        console.log(t), i.push(t.data), a.setData({
                            upload_picture_list: i,
                            typedate: 1
                        });
                    }
                });
            }
        });
    },
    radioChange: function() {
        this.setData({
            argeen: !this.data.argeen
        });
    },
    onLoad: function(a) {
        var e = this, i = wx.getStorageSync("color");
        a.ifshop && e.setData({
            ifshop: a.ifshop
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
        var n = a.key_words;
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                e.setData({
                    url: t.data
                });
            }
        }), this.setData({
            inquiry: a.inquiry,
            key_words: n,
            bgc: i
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});