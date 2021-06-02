var t = getApp();

Page({
    data: {
        typeArr: [],
        type: "请选择",
        textareaHeight: 250,
        currenttype: 1,
        saidtype: 1,
        patientIdArr: [],
        teamList: [],
        monentIdea: "",
        monentIdeaText: "",
        imgArr: [],
        imgArr2: [],
        imgPath: "",
        imgList: [],
        showFlag: !1,
        propagandaId: "",
        sendFalg: !0,
        gotoUrl: "/hyb_yl/backstageFollowUp/pages/ChangePatient/ChangePatient",
        time: null,
        data_arr: [],
        h_leixing: 2
    },
    bindType: function(t) {
        var a = this.data.typeArr2;
        this.setData({
            type: this.data.typeArr[t.detail.value],
            hj_id: a[t.detail.value].hj_id
        });
    },
    onLoad: function(e) {
        console.log(this);
        var o = this, i = e.zid, s = e.z_name, r = t.siteInfo.uniacid;
        o.setData({
            zid: i,
            uniacid: r,
            z_name: s
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), o.setData({
                    url: t.data
                });
            }
        }), wx.getRecorderManager && (a.onStart(function() {
            console.log("recorder start"), o.setData({
                voiceFlag: !0
            }), o.data.flagBoo && a.stop();
        }), a.onStop(function(t) {
            var a = t.tempFilePath, e = (t.duration / 1e3).toFixed();
            e <= 0 ? wx.showToast({
                title: "太短了",
                icon: "none",
                duration: 500
            }) : (o.setData({
                time: e,
                soundFlag: !0,
                tempFilePath: [ a ]
            }), console.log(e));
        })), wx.createInnerAudioContext && (n.onPlay(function(t) {
            console.log(t), console.log("开始播放"), o.setData({
                playFlag: !0
            });
        }), n.onError(function(t) {}), n.onStop(function() {
            o.setData({
                playFlag: !1
            });
        }), n.onEnded(function() {
            console.log("播放完毕了"), o.setData({
                playFlag: !1
            });
        }));
    },
    touxiang: function() {
        var a = this, e = t.siteInfo.uniacid;
        a.data.imgs;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var n = t.tempFilePaths[0];
                wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadsarray&m=hyb_yl",
                    filePath: n,
                    name: "upfile",
                    formData: {},
                    success: function(t) {
                        console.log(t.data), a.setData({
                            uplogo: t.data,
                            touxiangurl: n,
                            touxiang: !1
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                }), a.setData({
                    logo: n
                });
            }
        });
    },
    onReady: function() {
        this.getAllhjfenl();
    },
    onShow: function() {
        var t = this;
        if (wx.getSetting({
            success: function(a) {
                0 == a.authSetting["scope.record"] && t.setData({
                    recordBoo: !0
                }), null == a.authSetting["scope.record"] && t.setData({
                    recordBooTwo: !0
                }), a.authSetting["scope.record"] && t.setData({
                    recordBoo: !1
                });
            }
        }), this.setData({
            patientList: wx.getStorageSync("patientList") || "",
            token: wx.getStorageSync("log"),
            currentSaid: wx.getStorageSync("currentSaid") || ""
        }), !this.data.showFlag) {
            if ("" == this.data.patientList) this.setData({
                patientFlag: !1
            }); else {
                if (1 == this.data.patientType) {
                    var a = 0, e = 0, n = [], o = [];
                    null != this.data.patientList.groups && this.data.patientList.groups.length > 0 && this.data.patientList.groups.forEach(function(t) {
                        t.groupCheck && null != t.patients && t.patients.length > 0 && a++, null != t.patients && t.patients.length > 0 && t.patients.forEach(function(t) {
                            t.patientCheck && (n.push(t.userId), e++);
                        });
                    }), null != this.data.patientList.unGroupPatientList && this.data.patientList.unGroupPatientList.length > 0 && this.data.patientList.unGroupPatientList.forEach(function(t) {
                        t.patientCheck && (n.push(t.userId), e++);
                    }), console.log(a), console.log(e), console.log(n), 0 == a && 0 == e && n.length <= 0 ? this.setData({
                        patientFlag: !1
                    }) : this.setData({
                        patientFlag: !0,
                        groupNum: a,
                        totalNum: e,
                        patientIdArr: n,
                        teamList: []
                    });
                }
                if (2 == this.data.patientType) {
                    a = 0, e = 0, n = [], o = [];
                    var i = [];
                    null != this.data.patientList.groups && this.data.patientList.groups.length > 0 && this.data.patientList.groups.forEach(function(t) {
                        t.groupCheck && null != t.patients && t.patients.length > 0 && a++, null != t.patients && t.patients.length > 0 && t.patients.forEach(function(t) {
                            t.patientCheck && (i.push(t.userId), e++);
                        });
                    }), null != this.data.patientList.unGroupPatientList && this.data.patientList.unGroupPatientList.length > 0 && this.data.patientList.unGroupPatientList.forEach(function(t) {
                        t.patientCheck && (i.push(t.userId), e++);
                    }), console.log(a), console.log(e), console.log(i), 0 == a && 0 == e && i.length <= 0 ? this.setData({
                        patientFlag: !1
                    }) : (o.push({
                        teamId: this.data.teamId,
                        receiveIds: i
                    }), this.setData({
                        patientFlag: !0,
                        groupNum: a,
                        totalNum: e,
                        patientIdArr: n,
                        teamList: o
                    }));
                }
                if (3 == this.data.patientType) {
                    a = 0, e = 0, n = [], o = [], i = [];
                    this.data.patientList.teams.forEach(function(t, s) {
                        0 == s && (t.groups.length > 0 && t.groups.forEach(function(t) {
                            t.groupCheck && null != t.patients && t.patients.length > 0 && a++, null != t.patients && t.patients.length > 0 && t.patients.forEach(function(t) {
                                t.patientCheck && (n.push(t.userId), e++);
                            });
                        }), t.unGroupPatients.length > 0 && t.unGroupPatients.forEach(function(t) {
                            t.patientCheck && (n.push(t.userId), e++);
                        })), s > 0 && (i = [], t.groups.length > 0 && t.groups.forEach(function(t) {
                            t.groupCheck && null != t.patients && t.patients.length > 0 && a++, null != t.patients && t.patients.length > 0 && t.patients.forEach(function(t) {
                                t.patientCheck && (i.push(t.userId), e++);
                            });
                        }), t.unGroupPatients.length > 0 && t.unGroupPatients.forEach(function(t) {
                            t.patientCheck && (i.push(t.userId), e++);
                        }), i.length > 0 && o.push({
                            teamId: t.teamId,
                            receiveIds: i
                        }));
                    }), console.log(a), console.log(e), console.log(n), 0 == a && 0 == e && n.length <= 0 ? this.setData({
                        patientFlag: !1
                    }) : this.setData({
                        patientFlag: !0,
                        groupNum: a,
                        totalNum: e,
                        patientIdArr: n,
                        teamList: o
                    });
                }
            }
            this.data.currentSaid && (this.data.propagandaId = this.data.currentSaid.eduId ? this.data.currentSaid.eduId : this.data.currentSaid.id);
        }
        this.setData({
            showFlag: !1
        });
    },
    onHide: function() {},
    onUnload: function() {
        2 == this.data.fromType && wx.removeStorageSync("patientList"), wx.removeStorageSync("currentSaid");
    },
    tapSaidTextType: function(t) {
        console.log(t), t.target.dataset.currenttype != this.data.currenttype && (1 == t.target.dataset.currenttype && n.stop(), 
        this.setData({
            currenttype: t.target.dataset.currenttype,
            soundFlag: !1,
            tempFilePath: [],
            time: null,
            monentIdeaText: ""
        }));
    },
    touchstart: function(t) {
        var n = this;
        a ? (a.start(e), this.data.flagBoo = !1, this.data.recordBoo && (wx.showModal({
            title: "提示",
            content: "您暂未授权录音功能，请打开右上角 -> 关于惠邦肾 -> 右上角 -> 设置中授权录音功能",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        }), a.stop()), this.data.recordBooTwo && (wx.getSetting({
            success: function(t) {
                console.log(t), 0 == t.authSetting["scope.record"] && (wx.showModal({
                    title: "提示",
                    content: "您暂未授权录音功能，请打开右上角 -> 关于惠邦肾 -> 右上角 -> 设置中授权录音功能",
                    showCancel: !1,
                    confirmColor: "#3b4ca9",
                    confirmText: "我知道了"
                }), n.setData({
                    recordBoo: !0,
                    recordBooTwo: !1
                }));
            }
        }), a.stop())) : wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
    },
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
        n ? (n.src = this.data.tempFilePath[0], this.data.playFlag ? n.stop() : n.play()) : wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
    },
    tapSaidType: function(t) {
        t.target.dataset.saidtype != this.data.saidtype && (this.setData({
            saidtype: t.target.dataset.saidtype,
            h_leixing: 1
        }), 2 == this.data.saidtype ? this.setData({
            imgArr: []
        }) : (console.log("2"), this.setData({
            propagandaId: "",
            currentSaid: "",
            h_leixing: 2
        }), wx.removeStorageSync("currentSaid")));
    },
    getText: function(t) {
        this.setData({
            monentIdeaText: t.detail.value
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
                for (var e = a.tempFilePaths, n = 0; n < e.length && 9 != t.data.imgArr.length; n++) t.data.imgArr.push(e[n]);
                9 == t.data.imgArr.length && t.setData({
                    addImgFlag: !0
                }), t.setData({
                    imgArr: t.data.imgArr
                }), console.log(t);
            }
        });
    },
    chooseVideo: function() {
        var t = this;
        wx.chooseVideo({
            count: 9,
            sizeType: [ "original", "compressed" ],
            maxDuration: 60,
            camera: "back",
            compressed: !1,
            success: function(a) {
                console.log(a), console.log(t);
            }
        });
    },
    chooseImage2: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                console.log(a);
                for (var e = a.tempFilePaths, n = 0; n < e.length && 9 != t.data.imgArr2.length; n++) t.data.imgArr2.push(e[n]);
                1 == t.data.imgArr2.length && t.setData({
                    addImgFlag: !0
                }), t.setData({
                    imgArr2: t.data.imgArr2
                }), console.log(t);
            }
        }), console.log(t);
    },
    delImage: function(t) {
        console.log(t), this.data.imgArr.splice(t.target.dataset.index, 1), this.data.imgArr.length < 9 && this.setData({
            addImgFlag: !1
        }), this.setData({
            imgArr: this.data.imgArr
        }), console.log(this.data.imgArr);
    },
    delImage2: function(t) {
        console.log(t);
        this.setData({
            touxiangurl: !1
        });
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
    publishBtn: function() {
        var t = this;
        t.data.h_leixing;
        if (1 == t.data.currenttype) {
            if (0 == t.data.monentIdeaText.replace(/(^\s*)|(\s*$)/g, "").length) return void wx.showToast({
                title: "请输入文字",
                icon: "none",
                duration: 2e3
            });
            this.data.monentIdea = this.data.monentIdeaText;
        }
        if (2 == t.data.currenttype && t.data.tempFilePath.length <= 0) wx.showToast({
            title: "请录制语音",
            icon: "none",
            duration: 2e3
        }); else {
            if (1 == t.data.saidtype) {
                var a = this.data.imgArr, e = a.length, n = t.data.imgPath;
                if (wx.showLoading({
                    title: "发表中...",
                    icon: "none",
                    mask: !0
                }), this.setData({
                    sendFalg: !1
                }), e <= 0) return void (2 == this.data.currenttype ? t.sendVoice(n) : t.send(n));
                t.sendImg(a, 0, e);
            }
            if (2 == t.data.saidtype) {
                if (!t.data.propagandaId) return void wx.showToast({
                    title: "请选择患教",
                    icon: "none",
                    duration: 2e3
                });
                wx.showLoading({
                    title: "发表中...",
                    icon: "none",
                    mask: !0
                }), t.setData({
                    sendFalg: !1
                }), 2 == t.data.currenttype ? t.sendVoice(t.data.propagandaId) : t.send(t.data.propagandaId);
            }
        }
    },
    titles: function(t) {
        var a = t.detail.value;
        this.setData({
            hj_title: a
        });
    },
    sendImg: function() {
        var a = this, e = this.data.monentIdeaText, n = a.data.hj_id, o = a.data.hj_title, i = a.data.uplogo, s = a.data.z_name;
        if (a.data.imgArr) var r = 0;
        var l = a.data.data_arr, d = a.data.h_leixing;
        this.upload(), wx.showToast({
            title: "上传中，请稍后",
            icon: "loading"
        }), setTimeout(function() {
            t.util.request({
                url: "entry/wxapp/yishuo.savegerenhj",
                data: {
                    zid: a.data.zid,
                    h_type: r,
                    h_thumb: l,
                    h_text: e,
                    h_flid: n,
                    h_title: o,
                    h_pic: i,
                    z_name: s,
                    op: "post",
                    h_leixing: d
                },
                success: function(t) {
                    console.log(t), wx.hideLoading(), wx.showToast({
                        title: "上传成功",
                        icon: "none",
                        duration: 1e3,
                        success: function(t) {
                            var a = getCurrentPages();
                            a[a.length - 2].setData({
                                type: 1
                            }), setTimeout(function() {
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
    },
    send: function(t) {
        var a = this.data.monentIdea;
        console.log(a), this.setData({
            hj_tex: a
        });
    },
    getAllhjfenl: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/yishuo.Allhjfenl",
            data: {
                op: "display"
            },
            success: function(t) {
                console.log(t);
                var e = t.data.fenl, n = [];
                e.map(function(t) {
                    n.push(t.hj_name);
                });
                var o = t.data.hjlist;
                a.setData({
                    typeArr: n,
                    typeArr2: e,
                    hjlist: o
                });
            }
        });
    },
    upload: function() {
        var t = this, a = t.data.uniacid, e = t.data.data_arr;
        console.log(e), console.log(this.data.imgArr);
        for (var n = 0; n < this.data.imgArr.length; n++) wx.uploadFile({
            url: t.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
            filePath: t.data.imgArr[n],
            name: "upfile",
            formData: {},
            success: function(a) {
                console.log(a), e.push(a.data), t.setData({
                    data_arr: e
                });
            }
        });
    },
    sendVoice: function(a) {
        var e = this;
        console.log(e), wx.uploadFile({
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

var a = wx.getRecorderManager ? wx.getRecorderManager() : null, e = {
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192e3,
    format: "mp3",
    frameSize: 50
}, n = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;