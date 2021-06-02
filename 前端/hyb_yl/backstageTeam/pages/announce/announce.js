var t = getApp();

Page({
    data: {
        titleHeight: 40,
        oldTitleHeight: 40,
        contentHeight: 420,
        oldContentHeight: 420,
        imgList: [],
        addFlag: !1,
        TitleText: "",
        contentText: "",
        state: 0,
        releaseFlag: !0,
        amendImgList: [],
        data_arr: []
    },
    previewImage: function(t) {
        wx.previewImage({
            current: t.target.dataset.url,
            urls: this.data.imgList
        });
    },
    getTitleText: function(t) {
        this.setData({
            TitleText: t.detail.value
        });
    },
    titleChange: function(t) {
        var e = this, a = (e.data.titleHeight, e.data.oldTitleHeight);
        console.log(t), console.log(t.detail.heightRpx), console.log(a), t.detail.heightRpx > a && (2 == t.detail.lineCount ? e.setData({
            titleHeight: 86
        }) : e.setData({
            titleHeight: t.detail.heightRpx
        }));
    },
    getContetnText: function(t) {
        this.setData({
            contentText: t.detail.value
        });
    },
    contentChange: function(t) {
        var e = this, a = (e.data.contentHeight, e.data.oldContentHeight);
        t.detail.heightRpx > a ? e.setData({
            contentHeight: t.detail.heightRpx
        }) : e.setData({
            contentHeight: a
        }), console.log(t);
    },
    chooseImage: function() {
        var t = this, e = t.data.imgList;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                if (console.log(a), "chooseImage:ok" == a.errMsg) {
                    for (var i = 0; i < a.tempFilePaths.length; i++) if (e.push(a.tempFilePaths[i]), 
                    t.data.amendImgList.push(a.tempFilePaths[i]), e.length >= 9) return void t.setData({
                        imgList: e,
                        amendImgList: t.data.amendImgList,
                        addFlag: !0
                    });
                    console.log(e), t.setData({
                        imgList: e,
                        amendImgList: t.data.amendImgList
                    }), console.log(t.data.amendImgList);
                }
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    delImage: function(e) {
        console.log(e);
        var a = this, i = this.data.imgList, n = this.data.amendImgList;
        console.log(n);
        var o = e.currentTarget.dataset.url, s = n.indexOf(o);
        console.log(s), -1 != s ? (i.splice(e.currentTarget.dataset.index, 1), n.splice(s, 1), 
        i.length < 9 && this.setData({
            addFlag: !1
        }), this.setData({
            imgList: i,
            amendImgList: n
        })) : wx.request({
            url: t.globalData.dic + "doctor/notice/delete/image",
            data: {
                token: a.data.token,
                comMsgInfoId: a.data.msgInfoId,
                imagePath: o
            },
            success: function(t) {
                console.log(t), 200 == t.data.code && (i.splice(e.currentTarget.dataset.index, 1), 
                console.log(n), i.length < 9 && a.setData({
                    addFlag: !1
                }), a.setData({
                    imgList: i
                }));
            }
        });
    },
    switchChange: function(t) {
        console.log(t), t.detail.value ? this.setData({
            state: 1
        }) : this.setData({
            state: 0
        });
    },
    release: function() {
        var e = this, a = e.data.imgList, i = e.data.contentText, n = e.data.TitleText;
        if ("" == n) wx.showToast({
            title: "请输入标题",
            icon: "none",
            duration: 2e3
        }); else if ("" == i) wx.showToast({
            title: "请输入内容",
            icon: "none",
            duration: 2e3
        }); else {
            for (var o = e.data.uniacid, s = e.data.data_arr, l = e.data.state, d = 0; d < a.length; d++) wx.uploadFile({
                url: e.data.url + "app/index.php?i=" + o + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
                filePath: a[d],
                name: "upfile",
                formData: {},
                success: function(t) {
                    console.log(t), s.push(t.data), e.setData({
                        data_arr: s
                    });
                }
            });
            wx.showToast({
                title: "发布中请稍后......",
                icon: "none",
                duration: 2e3
            }), setTimeout(function() {
                console.log(s), t.util.request({
                    url: "entry/wxapp/studio.saveteam",
                    data: {
                        title: n,
                        teamtext: i,
                        thumbarr: s,
                        t_id: e.data.t_id,
                        state: l
                    },
                    success: function(t) {
                        console.log(t), e.setData({
                            url: t.data
                        });
                    }
                }), wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 2e3
                });
            }, 1500), setTimeout(function() {
                wx.navigateBack({
                    complete: function(t) {}
                });
            }, 500);
        }
    },
    onLoad: function(e) {
        var a = this, i = t.siteInfo.uniacid;
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            cachetime: "0",
            success: function(t) {
                console.log(t), a.setData({
                    url: t.data
                });
            }
        }), e.bianji && t.util.request({
            url: "entry/wxapp/studio.addgongg",
            data: {
                g_id: e.g_id
            },
            success: function(t) {
                console.log(t), a.setData({
                    releaseFlag: t.data,
                    contentText: t.data.teamtext,
                    TitleText: t.data.title,
                    imgList: t.data.thumbarr,
                    state: t.data.menttypes
                });
            }
        }), this.setData({
            t_id: e.t_id,
            uniacid: i,
            bianji: e.bianji
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    uploadDIY: function(t, e, a, i) {},
    save: function() {
        var t = this.data.amendImgList;
        console.log(t), wx.showToast({
            title: "请输入标题",
            icon: "none",
            duration: 2e3
        });
    }
});