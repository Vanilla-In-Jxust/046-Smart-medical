var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp(), a = require("../../../../utils/util.js");

Page({
    data: (0, t.default)({
        data_arr: [],
        listFlag: !1,
        news_input_val: "",
        disableFlag: !1,
        show: !0,
        hide: !1,
        setintervalFunction: "",
        ClickRseply: !0,
        ClickRseply1: !1,
        tempFilePaths: "",
        imgBoo: !0,
        upFlag: !1,
        oppositeList: [],
        imgUrlArr: [],
        imgUrl: [],
        loadingBoo: !0,
        moreBoo: !0,
        currentResult: 0,
        scrollTop: 1e3,
        height: 40,
        oldHeight: 40,
        msgIdArr: [],
        seqIdArr: [],
        centendata: [],
        record_text: "按住 说话",
        recordFlag: !1,
        backoutFlag: !0,
        contactList: [ {
            patientSimpleVo: {
                userIcon: "/assets/images/head.png",
                name: "小米",
                nmGender: 1,
                age: 30
            },
            dpMedOrderVo: {
                msgTxt: "十万个冷笑话",
                msgPicSmall: [ "/assets/images/head.png", "/assets/images/head.png" ],
                sessionDateBegin: "2018-10-22-15:06"
            }
        } ]
    }, "oppositeList", [ {
        from: 1,
        parting: 1,
        ctime: "小花",
        msgType: "SINGLE_VIDEO",
        msg: "你好",
        playFlag: "",
        duration: "哈哈"
    }, {
        from: 1,
        parting: 1,
        ctime: "小花",
        msgType: "SINGLE_TEXT",
        msg: "你好",
        playFlag: "呵呵哒",
        duration: "哈哈"
    }, {
        from: 1,
        parting: 1,
        ctime: "小花",
        msgType: "SINGLE_VIDEO",
        msg: "你好",
        playFlag: "呵呵哒",
        duration: "哈哈"
    }, {
        from: 1,
        parting: 1,
        ctime: "小花",
        msgType: "SINGLE_IMAGE",
        msg: "你好",
        playFlag: "呵呵哒",
        duration: "哈哈"
    } ]),
    bottom: function() {
        var t = this, e = wx.createSelectorQuery();
        e.select("#hei").boundingClientRect(), e.selectViewport().scrollOffset(), e.exec(function(e) {
            t.setData({
                scrollTop: e[0].height
            });
        });
    },
    toRecord: function(t) {
        1 == this.data.if_over ? wx.showToast({
            title: "当前会话已结束",
            icon: "none",
            duration: 2e3
        }) : this.setData({
            recordFlag: !this.data.recordFlag
        });
    },
    getRecord: function() {
        var t = this;
        o ? (o.start(i), this.data.flagBoo = !1, this.data.recordBoo && wx.showModal({
            title: "提示",
            content: "您暂未授权录音功能，请打开右上角 -> 关于 -> 右上角 -> 设置中授权录音功能",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        }), this.data.recordBooTwo && wx.getSetting({
            success: function(e) {
                console.log(e), 0 == e.authSetting["scope.record"] && (wx.showModal({
                    title: "提示",
                    content: "您暂未授权录音功能，请打开右上角 -> 关于 -> 右上角 -> 设置中授权录音功能",
                    showCancel: !1,
                    confirmColor: "#3b4ca9",
                    confirmText: "我知道了"
                }), t.setData({
                    recordBoo: !0,
                    recordBooTwo: !1
                }));
            }
        })) : wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
    },
    shopRecord: function() {
        o && (this.data.flagBoo = !0, o.stop());
    },
    scrollS: function(t) {
        this.setData({
            tempFilePaths: ""
        });
    },
    bindlinechange: function(t) {
        console.log(t);
        var e = this;
        if (wx.createSelectorQuery) {
            var a = wx.createSelectorQuery();
            a.select("#textarea_bottom").boundingClientRect(), a.exec(function(t) {
                console.log(t), e.setData({
                    text_padding: t[0].height,
                    scrollTop: e.data.scrollTop + 100
                });
            });
        }
        t.detail.lineCount >= 5 ? this.setData({
            heightFlag: !1
        }) : this.setData({
            heightFlag: !0
        });
    },
    Clickshow: function(t) {
        this.setData({
            show: !0,
            hide: !1
        });
    },
    Clickshow1: function(t) {
        this.setData({
            show: !1,
            hide: !0
        });
    },
    ClickRseply: function(t) {
        this.setData({
            ClickRseply: !1,
            ClickRseply1: !0
        });
    },
    lookPaint: function() {
        wx.showModal({
            title: "温馨提示",
            content: "您未有查看权限，需患者授权~",
            confirmColor: "#3b4ca9"
        });
    },
    bigImage: function(t) {
        console.log(t);
        var e = [], a = t.currentTarget.dataset.src;
        e.push(a), wx.previewImage({
            current: a,
            urls: e
        });
    },
    previewImage: function(t) {
        var a = this.data.contactList.dpMedOrderVo.msgPicBig, o = t.target.dataset.imgindex;
        e.previewImage(t, a, o);
    },
    onLoad: function(t) {
        var i = this, s = e.siteInfo.uniacid, d = wx.getStorageSync("userInfo");
        wx.getStorageSync("openid"), t.touxiang;
        e.util.request({
            url: "entry/wxapp/url",
            success: function(t) {
                i.setData({
                    url: t.data
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                i.setData({
                    scroll_height: t.windowHeight
                });
            }
        }), this.getKfuid(), wx.getRecorderManager && (o.onStart(function() {
            console.log("recorder start"), i.setData({
                record_text: "松开 结束"
            }), i.data.flagBoo && o.stop();
        }), o.onStop(function(t) {
            console.log("recorder stop", t);
            var o = t.tempFilePath, n = (t.duration / 1e3).toFixed();
            if (n <= 0) return wx.showToast({
                title: "太短了",
                icon: "none",
                duration: 500
            }), void i.setData({
                record_text: "按住 说话"
            });
            i.setData({
                time: n,
                width: 50 + 400 * n / 60,
                record_text: "按住 说话",
                RecordFlag: !0,
                tempFilePath: o
            }), console.log(o), e.util.request({
                url: "entry/wxapp/url",
                success: function(t) {
                    var n = t.data;
                    console.log(n), wx.uploadFile({
                        url: n + "app/index.php?i=" + s + "&c=entry&a=wxapp&do=uploadevideo&m=hyb_yl",
                        filePath: o,
                        name: "upfile",
                        success: function(t) {
                            console.log(t.data), e.util.request({
                                url: "entry/wxapp/SaveChatMsg",
                                data: {
                                    openid: wx.getStorageSync("openid"),
                                    fid: i.data.f_id,
                                    tid: i.data.t_id,
                                    t_msg: t.data,
                                    f_name: i.data.f_name,
                                    nickName: i.data.myname,
                                    touxiang: i.data.touxiang,
                                    is_img: i.data.is_img,
                                    docid: i.data.docid,
                                    typetext: 3,
                                    kfid: i.data.kfid,
                                    ifkf: 3
                                },
                                success: function(t) {
                                    console.log(t);
                                }
                            });
                            var o = i.data.centendata, s = new Date(), d = a.formatTime(s), r = {
                                is_show_right: 1,
                                typetext: 3,
                                msg: t.data,
                                playFlag: !1,
                                duration: d
                            };
                            o.push(r), i.setData({
                                centendata: o,
                                ymurl: n + "attachment/"
                            });
                        }
                    });
                }
            });
        })), wx.createInnerAudioContext && (n.onPlay(function() {
            console.log("开始播放"), i.data.oppositeList[i.data.playIndex] && (i.data.oppositeList[i.data.playIndex].playFlag = !0, 
            i.setData({
                oppositeList: i.data.oppositeList
            }));
        }), n.onError(function(t) {
            console.log(t.errMsg), console.log(t.errCode);
        }), n.onStop(function() {
            console.log("停止播放");
        }), n.onEnded(function() {
            console.log("播放完毕了"), i.data.oppositeList[i.data.playIndex] && (i.data.oppositeList[i.data.playIndex].playFlag = !1, 
            i.setData({
                oppositeList: i.data.oppositeList
            }));
        })), i.setData({
            docid: t.docid,
            f_id: t.f_id,
            m_id: t.m_id,
            t_id: t.t_id,
            nickName: d.nickName,
            avatarUrl: d.avatarUrl,
            f_name: t.f_name,
            is_img: t.is_img,
            touxiang: t.touxiang,
            uniacid: s
        }), this.getUserinfo(t.t_id), e.util.request({
            url: "entry/wxapp/ReadMsg",
            data: {
                openid: wx.getStorageSync("openid"),
                fid: i.data.f_id,
                tid: i.data.t_id,
                ifkf: 0
            },
            success: function(t) {
                console.log(t), i.setData({
                    centendata: t.data.data.chat_list
                }), i.bottom();
            }
        });
        var r = wx.getStorageSync("huihuaover");
        if (1 !== r || "" !== r) {
            var c = setInterval(function() {
                e.util.request({
                    url: "entry/wxapp/ReadMsg",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        fid: i.data.f_id,
                        tid: i.data.t_id,
                        ifkf: 0
                    },
                    success: function(t) {
                        i.setData({
                            centendata: t.data.data.chat_list,
                            open: !1
                        });
                    }
                }), wx.hideNavigationBarLoading(), i.bottom();
            }, 6e3);
            i.setData({
                setinterval: c
            });
        }
    },
    toPlay: function(t) {
        var e = this, a = t.currentTarget.dataset.src, o = t.currentTarget.dataset.index, i = e.data.centendata, n = e.data.url + "attachment/";
        i[o].playFlag = !0, wx.playBackgroundAudio({
            dataUrl: n + a
        }), e.setData({
            centendata: i
        });
    },
    goText: function(t) {
        1 == this.data.if_over ? wx.showToast({
            title: "当前会话已结束",
            icon: "none",
            duration: 2e3
        }) : this.setData({
            recordFlag: !1
        });
    },
    sendRecord: function() {
        var t = this, e = t.data.oppositeList, a = new Date().getTime(), o = {
            version: 1,
            operation: 5,
            seqId: a,
            data: {
                to: t.data.patientId,
                from: t.data.doctorId,
                ctime: a,
                msgType: "SINGLE_VIDEO",
                content: t.data.videoPath,
                sessionId: t.data.sessionId,
                role: t.data.role,
                duration: parseInt(t.data.time)
            }
        }, i = JSON.stringify(o);
        wx.sendSocketMessage({
            data: i,
            success: function(t) {}
        }), e.push({
            from: t.data.doctorId,
            msgType: "SINGLE_VIDEO",
            content: t.data.video,
            seqId: a,
            duration: parseInt(t.data.time)
        }), wx.removeStorageSync("contentText"), t.setData({
            oppositeList: e,
            scrollTop: t.data.scrollTop + 1e3
        });
    },
    onShow: function() {
        var t = this;
        0, wx.getStorageSync("contentText") && this.setData({
            imgBoo: !1,
            heightFlag: !0,
            recordFlag: !1
        }), wx.getSetting({
            success: function(e) {
                console.log(e), 0 == e.authSetting["scope.record"] && t.setData({
                    recordBoo: !0
                }), null == e.authSetting["scope.record"] && t.setData({
                    recordBooTwo: !0
                }), e.authSetting["scope.record"] && t.setData({
                    recordBoo: !1
                });
            }
        });
    },
    onUnload: function() {
        clearInterval(this.data.setinterval);
    },
    scrolltoupper: function() {
        this.data.currentResult <= 0 || function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }.default.scrolltoupper(this);
    },
    heartbeat: function() {
        var t = {
            version: 1,
            operation: 3,
            seqId: new Date().getTime(),
            data: {}
        }, e = JSON.stringify(t);
        wx.sendSocketMessage({
            data: e,
            success: function(t) {}
        });
    },
    pullMsg: function(t, e, a) {
        console.log(a.data.sessionId);
        var o = {
            version: 1,
            operation: 11,
            seqId: new Date().getTime(),
            data: {
                userId: a.data.userId,
                offset: t,
                limit: e,
                sessionId: a.data.sessionId,
                medType: a.data.signType
            }
        }, i = JSON.stringify(o);
        wx.sendSocketMessage({
            data: i,
            success: function(t) {}
        });
    },
    toast: function() {
        if (this.data.disableFlag) return console.log(22222), void wx.showToast({
            title: "对方已结束本次咨询",
            icon: "none",
            duration: 2e3
        });
    },
    getText: function(t) {
        this.setData({
            news_input_val: t.detail.value
        }), 1 == this.data.if_over ? wx.showToast({
            title: "咨询已结束",
            icon: "none",
            duration: 2e3
        }) : 0 != t.detail.value.replace(/(^\s*)|(\s*$)/g, "").length ? this.setData({
            imgBoo: !1
        }) : this.setData({
            imgBoo: !0
        });
    },
    sendChooseImg: function() {
        var t = this, e = (t.data.tempFilePaths, t.data.uniacid);
        1 == t.data.if_over ? wx.showToast({
            title: "当前会话已结束",
            icon: "none",
            duration: 2e3
        }) : wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                console.log(a.tempFilePaths), wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadsarray&m=hyb_yl",
                    filePath: a.tempFilePaths[0],
                    name: "upfile",
                    formData: {
                        path: "wxchat"
                    },
                    success: function(e) {
                        console.log(e.data), t.setData({
                            uplogo: e.data,
                            imgBoo: !1
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                }), t.setData({
                    tempFilePaths: a.tempFilePaths[0]
                });
            }
        });
    },
    closeBtn: function() {
        var t = this.data.m_id;
        wx.showModal({
            title: "确定要结束咨询吗？",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm && e.util.request({
                    url: "entry/wxapp/Jieshuzix",
                    data: {
                        m_id: t
                    },
                    success: function(t) {
                        1 == t.data ? wx.showToast({
                            title: "会话结束成功",
                            icon: "none",
                            duration: 2e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 2e3);
                            }
                        }) : wx.showToast({
                            title: "当前会话已结束",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    backout: function(t) {
        var e = this, a = t.target.dataset.backmsg, o = this.data.seqIdArr.indexOf(a), i = t.target.dataset.index, n = new Date().getTime();
        console.log(n - o), console.log(t), e.data.backoutFlag = !1, wx.showActionSheet({
            itemList: [ "撤回" ],
            success: function(t) {
                if (console.log(t.tapIndex), e.data.backoutFlag = !0, 0 == t.tapIndex) {
                    if (n - e.data.seqIdArr[o] > 12e4 || -1 == o) return void wx.showToast({
                        title: "超过2分钟不能撤回哦",
                        icon: "none",
                        duration: 2e3
                    });
                    console.log(e.data.role);
                    var a = {
                        version: 1,
                        operation: 15,
                        seqId: new Date().getTime(),
                        data: {
                            sessionId: e.data.sessionId,
                            to: e.data.patientId,
                            from: e.data.doctorId,
                            msgType: "SINGLE_IMAGE",
                            msgId: e.data.msgIdArr[o],
                            role: e.data.role
                        }
                    }, s = JSON.stringify(a);
                    wx.sendSocketMessage({
                        data: s,
                        success: function(t) {
                            var a = e.data.oppositeList;
                            a.splice(i, 1), e.setData({
                                oppositeList: a
                            });
                        }
                    });
                }
            },
            fail: function(t) {
                console.log(t), e.data.backoutFlag = !0;
            }
        });
    },
    getUserinfo: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/Binrinfo",
            data: {
                openid: t
            },
            success: function(t) {
                console.log(t);
                var e = t.data.if_over;
                1 == t.data.if_over && wx.setStorageSync("huihuaover", e), a.setData({
                    t_msg: t.data,
                    if_over: t.data.if_over,
                    myname: t.data.myname
                });
            }
        });
    },
    add: function(t) {
        var o = this, i = new Date(), n = a.formatTime(i), s = t.detail.formId, d = o.data.f_name;
        console.log(d);
        var r = o.data.myname, c = o.data.docid, l = o.data.is_img, u = wx.getStorageSync("openid"), g = o.data.uplogo;
        if ("" == this.data.tempFilePaths && "" == o.data.news_input_val) wx.showModal({
            title: "提示",
            content: "输入消息不能为空"
        }); else {
            if ("" !== this.data.tempFilePaths && "" == o.data.news_input_val) var p = 1; else if ("" !== this.data.tempFilePaths && "" !== o.data.news_input_val) p = 2; else p = 0;
            wx.showLoading({
                title: "发送中..",
                icon: "none",
                mask: !0
            }), e.util.request({
                url: "entry/wxapp/UserFormId",
                data: {
                    form_id: s,
                    openid: u
                },
                success: function(t) {
                    console.log(t), e.util.request({
                        url: "entry/wxapp/SaveChatMsg",
                        data: {
                            openid: wx.getStorageSync("openid"),
                            fid: o.data.f_id,
                            tid: o.data.t_id,
                            t_msg: o.data.news_input_val,
                            data_arr: g,
                            f_name: d,
                            nickName: r,
                            touxiang: o.data.touxiang,
                            is_img: l,
                            docid: c,
                            typetext: p,
                            ifkf: 3,
                            kfid: o.data.kfid
                        },
                        success: function(t) {
                            if (console.log(t), (e = o.data.centendata).push({
                                time: n,
                                is_show_right: 0,
                                is_img: l,
                                show_rignt: !0,
                                content: o.data.news_input_val,
                                typetext: 0
                            }), t) {
                                var e = o.data.centendata;
                                o.setData({
                                    centendata: e,
                                    news_input_val: "",
                                    imgBoo: !0,
                                    tempFilePaths: "",
                                    open: !1
                                }), o.bottom();
                            }
                            wx.hideLoading();
                        }
                    });
                }
            });
        }
    },
    getKfuid: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/Kfuid",
            success: function(e) {
                t.setData({
                    kfid: e.data.zid
                });
            }
        });
    }
});

var o = wx.getRecorderManager ? wx.getRecorderManager() : null, i = {
    duration: 6e4,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192e3,
    format: "mp3",
    frameSize: 50
}, n = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;