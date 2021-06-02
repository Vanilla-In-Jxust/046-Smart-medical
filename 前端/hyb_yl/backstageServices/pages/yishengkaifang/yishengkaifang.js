var t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        textareatxt: "",
        popif: !1,
        inquiry: "",
        argeen: !0,
        steps: [ "医生开方", "选择药品", "医生医嘱", "发送处方" ],
        upload_picture_list: [],
        stepnum: 0,
        speedlist: [ {
            tit: "祛斑/去痘印",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "痔疮/痘痘",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "去黑头",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "脚气",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "阳痿",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "早泄",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "湿疹",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "避孕",
            text: "的哈哈大华大厦宏大的"
        }, {
            tit: "阴道炎",
            text: "的哈哈大华大厦宏大的"
        } ]
    },
    infomationbtn: function(t) {
        t.detail.value, this.data.ifzj;
        var a = t.detail.value.zhenduan, e = t.detail.value.yongyao, i = t.detail.target.dataset.text, n = this.data.id, o = this.data.j_id, s = this.data.key_words;
        "" == a ? wx.showToast({
            title: "请输入诊断结果",
            icon: "none"
        }) : "" == e ? wx.showToast({
            title: "请输入建议用药",
            icon: "none"
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/xuanzeyaopin/xuanzeyaopin?inquiry=" + this.data.inquiry + "&zhenduan=" + a + "&yongyao=" + e + "&text=" + i + "&c_id=" + n + "&j_id=" + o + "&ifzj=1&key_words=" + s
        });
    },
    chooseLabel: function(t) {
        var a = t.currentTarget.dataset.dex, e = this.data.speedlist;
        console.log(a), console.log(e), this.setData({
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
    navUrgent: function() {
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/chufangmes/chufangmes?inquiry=3"
        });
    },
    deleteimg: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.data_arr;
        e.splice(a, 1), this.setData({
            upload_picture_list: e
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
                for (var n = t.tempFilePaths, o = 0; o < n.length; o++) wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: n[o],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        console.log(t), i.push(t.data), a.setData({
                            upload_picture_list: i
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
        var e = this, i = a.id, n = wx.getStorageSync("color"), o = a.j_id, s = a.c_id, u = a.ifzj, r = a.text, l = a.key_words;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                e.setData({
                    url: t.data
                });
            }
        }), this.setData({
            id: i,
            j_id: o,
            c_id: s,
            ifzj: u,
            text: r,
            key_words: l
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});