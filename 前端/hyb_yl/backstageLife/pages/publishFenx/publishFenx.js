var t = getApp();

Page({
    data: {
        textareaHeight: 250,
        currenttype: 1,
        saidtype: 1,
        patientIdArr: [],
        teamList: [],
        monentIdea: "",
        monentIdeaText: "",
        imgArr: [],
        imgPath: "",
        showFlag: !1,
        propagandaId: "",
        sendFalg: !0,
        gotoUrl: "/hyb_yl/backstageFollowUp/pages/ChangePatient/ChangePatient",
        time: null,
        data_arr: []
    },
    onLoad: function(a) {
        var e = this, i = t.siteInfo.uniacid, o = a.zid;
        if (a.arr) {
            var n = JSON.parse(a.arr);
            e.setData({
                arr: n,
                uniacid: i,
                zid: o
            });
        }
        if (a.hjlistinfo) {
            var s = JSON.parse(a.hjlistinfo);
            console.log(s), a.saidtype && e.setData({
                saidtype: a.saidtype,
                hjlistinfo: s,
                zid: o,
                uniacid: i
            });
        }
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = getCurrentPages(), a = t[t.length - 1];
        void 0 !== a.data.hjlistinfo && this.setData({
            hjlistinfo: a.data.hjlistinfo,
            ystype: 1
        });
        var e = wx.getStorageSync("patientList");
        console.log(e.weifenzu), e.weifenzu && this.setData({
            arr: e.weifenzu
        });
    },
    onHide: function() {},
    onUnload: function() {},
    touchend: function(t) {
        a && (this.data.flagBoo = !0, a.stop(), this.setData({
            voiceFlag: !1
        }));
    },
    againBtn: function() {
        this.setData({
            soundFlag: !1,
            tempFilePath: [],
            time: null
        });
    },
    toPlay: function() {
        e ? (e.src = this.data.tempFilePath[0], this.data.playFlag ? e.stop() : e.play()) : wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
    },
    tapSaidType: function(t) {
        console.log(t), t.target.dataset.saidtype != this.data.saidtype && (this.setData({
            saidtype: t.target.dataset.saidtype
        }), 2 == this.data.saidtype ? this.setData({
            imgArr: []
        }) : (this.setData({
            propagandaId: "",
            currentSaid: "",
            hjlistinfo: ""
        }), wx.removeStorageSync("currentSaid")));
    },
    getText: function(t) {
        this.setData({
            ystext: t.detail.value
        });
    },
    bindlinechange: function(t) {
        console.log(t), t.detail.heightRpx > 250 ? this.setData({
            textareaHeight: t.detail.heightRpx
        }) : this.setData({
            textareaHeight: 250
        });
    },
    chooseImage: function() {
        var t = this;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                console.log(a);
                for (var e = a.tempFilePaths, i = 0; i < e.length && 9 != t.data.imgArr.length; i++) t.data.imgArr.push(e[i]);
                9 == t.data.imgArr.length && t.setData({
                    addImgFlag: !0
                }), t.setData({
                    imgArr: t.data.imgArr
                });
            }
        });
    },
    delImage: function(t) {
        console.log(t), this.data.imgArr.splice(t.target.dataset.index, 1), this.data.imgArr.length < 9 && this.setData({
            addImgFlag: !1
        }), this.setData({
            imgArr: this.data.imgArr
        }), console.log(this.data.imgArr);
    },
    previewImage: function(t) {
        console.log(t);
        this.setData({
            showFlag: !0
        }), wx.previewImage({
            current: t.target.dataset.url,
            urls: this.data.imgArr
        });
    },
    tapSaidTextType: function(t) {
        console.log(t), t.target.dataset.currenttype != this.data.currenttype && (1 == t.target.dataset.currenttype && e.stop(), 
        this.setData({
            currenttype: t.target.dataset.currenttype,
            soundFlag: !1,
            tempFilePath: [],
            time: null,
            monentIdeaText: ""
        }));
    },
    publishBtn: function() {
        var a = this;
        if (a.data.arr.length <= 0) wx.showToast({
            title: "请先选择患者",
            icon: "none",
            duration: 2e3
        }); else {
            var e = a.data.ystext, i = a.data.arr;
            if (console.log(a.data.ystype), 1 == a.data.ystype) {
                console.log("123");
                var o = a.data.hjlistinfo.h_id;
            } else {
                o = 0;
                console.log("qwe");
            }
            this.data.monentIdeaText;
            this.upload();
            var n = a.data.data_arr;
            wx.showToast({
                title: "发表中...",
                icon: "loading",
                duration: 3e3
            }), setTimeout(function() {
                console.log(n), t.util.request({
                    url: "entry/wxapp/Saveyishuo",
                    data: {
                        zid: a.data.zid,
                        hid: o,
                        yspic: n,
                        ystext: e,
                        user: i,
                        op: "post"
                    },
                    success: function(t) {
                        console.log(t), wx.showToast({
                            title: "发表成功",
                            icon: "none",
                            duration: 1e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 2e3);
                            }
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }, 3e3);
        }
    },
    upload: function() {
        var t = this, a = t.data.uniacid, e = t.data.data_arr;
        console.log(e), console.log(this.data.imgArr);
        for (var i = 0; i < this.data.imgArr.length; i++) wx.uploadFile({
            url: t.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
            filePath: t.data.imgArr[i],
            name: "upfile",
            formData: {},
            success: function(a) {
                console.log(a), e.push(a.data), t.setData({
                    data_arr: e
                });
            }
        });
    },
    send: function(t) {},
    sendVoice: function(a) {
        var e = this;
        wx.uploadFile({
            url: t.globalData.dic + "doctor/said/upload",
            method: "POST",
            header: {
                "content-type": "multipart/form-data"
            },
            filePath: this.data.tempFilePath[0],
            name: "file",
            formData: {
                token: e.data.token
            },
            success: function(t) {
                console.log(t), 200 == t.statusCode && (e.data.monentIdea = JSON.parse(t.data).data, 
                e.send(a));
            }
        });
    }
});

var a = wx.getRecorderManager ? wx.getRecorderManager() : null, e = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;