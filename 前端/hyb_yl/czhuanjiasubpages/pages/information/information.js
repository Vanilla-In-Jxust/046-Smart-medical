var t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        inquiry: "",
        upload_picture_list: [],
        typedate: 0,
        times: ""
    },
    deleteimg: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.upload_picture_list;
        a.splice(e, 1), this.setData({
            upload_picture_list: a
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
    infomationbtn: function(t) {
        var e = t.detail.value, a = this.data.time_leng, i = this.data.zid, n = this.data.data_time, o = this.data.month_time, s = this.data.week, u = e.describe, d = e.tell, l = this.data.upload_picture_list, r = (this.data.zongtime, 
        t.detail.value, i = this.data.zid, this.data.server), c = this.data.typedate;
        console.log(i, n, o, s, u, d, r);
        wx.getStorageSync("openid");
        var p = this.data.money, h = this.data.addnum, m = this.data.privateNum, f = {
            text: e.describe,
            upload_picture_list: l,
            typedate: c
        }, g = JSON.stringify(f);
        if (/^1[3456789]\d{9}$/.test(e.tell)) if ("" == e.describe) wx.showToast({
            title: "请填写症状描述",
            icon: "none"
        }); else {
            this.data.upload_picture_list;
            wx.navigateTo({
                url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=" + this.data.inquiry + "&zid=" + i + "&data_time=" + n + "&month_time=" + o + "&week=" + s + "&msg=" + u + "&phone=" + d + "&key_words=" + r + "&conets=" + g + "&time_leng=" + a + "&money=" + p + "&addnum=" + h + "&privateNum=" + m + "&arr=" + g
            });
        } else wx.showToast({
            title: "请填写接听手机",
            icon: "none"
        });
    },
    result: function() {
        wx.navigateBack({});
    },
    onLoad: function(e) {
        console.log(e);
        var a = wx.getStorageSync("color"), i = e.time_leng;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var n = this, o = e.zid, s = e.yearDate, u = e.times, d = e.day, l = e.money, r = e.addnum, c = e.privateNum;
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                n.setData({
                    url: t.data
                });
            }
        }), this.setData({
            server: e.server,
            zongtime: e.zongtime,
            zid: o,
            data_time: s,
            month_time: u,
            week: d,
            time_leng: i,
            money: l,
            addnum: r,
            privateNum: c
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});