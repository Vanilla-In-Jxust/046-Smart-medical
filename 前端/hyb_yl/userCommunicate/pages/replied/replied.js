var t, e, o = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), s = getApp(), n = 0;

Page({
    data: (t = {
        disableFlag: !1,
        replidBoo: !0,
        switchBoo: !0,
        upFlag: !0,
        upText: "问题查看",
        textValue: "",
        imgBoo: !0,
        oppositeList: [],
        imgUrl: "",
        imgUrlArr: [],
        overFlowBoo: !1,
        loadingBoo: !0,
        moreBoo: !0,
        currentResult: 0,
        viewHeight: 276,
        scrollTop: 1e3,
        height: 40,
        oldHeight: 40,
        msgIdArr: [],
        seqIdArr: [],
        record_text: "按住 说话",
        recordFlag: !1,
        backoutFlag: !0,
        contactList: {
            doctorBaseInfoVO: {
                userIcon: "/assets/images/796.png",
                doctorName: "小强",
                jobType: 2
            },
            dpMedOrderVo: {
                msgTxt: "你感冒了",
                msgPicSmall: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ]
            }
        }
    }, (0, o.default)(t, "switchBoo", 123), (0, o.default)(t, "switchText", "档案授权"), 
    (0, o.default)(t, "oppositeList", [ {
        from: 1,
        parting: 1,
        ctime: "2018-10-30",
        msgType: "SINGLE_VIDEO",
        playFlag: "",
        duration: "回家",
        msg: "/assets/images/796.png",
        bigImg: "在外面"
    }, {
        from: 2,
        parting: 2,
        ctime: "2018-10-30",
        msgType: "SINGLE_IMAGE",
        playFlag: 10,
        duration: 20,
        msg: "/assets/images/796.png",
        bigImg: "在外面"
    }, {
        from: 1,
        parting: 1,
        ctime: "2018-10-30",
        msgType: "SINGLE_TEXT",
        playFlag: 10,
        duration: 20,
        msg: "感冒怎么治",
        bigImg: "在外面"
    }, {
        from: 2,
        parting: 2,
        ctime: "2018-10-30",
        msgType: "SINGLE_VIDEO",
        playFlag: 10,
        duration: 20,
        msg: "/assets/images/796.png",
        bigImg: "在外面"
    } ]), t),
    toRecord: function(t) {
        this.setData({
            recordFlag: !this.data.recordFlag
        });
    },
    getRecord: function(t) {
        if (console.log(t), console.log("触摸"), wx.getRecorderManager) {
            var e = this;
            i.start(c), this.data.flagBoo = !1, this.data.recordBoo && wx.showModal({
                title: "提示",
                content: "您暂未授权录音功能，请打开右上角 -> 关于惠邦肾 -> 右上角 -> 设置中授权录音功能",
                showCancel: !1,
                confirmColor: "#3b4ca9",
                confirmText: "我知道了"
            }), this.data.recordBooTwo && wx.getSetting({
                success: function(t) {
                    console.log(t), 0 == t.authSetting["scope.record"] && (wx.showModal({
                        title: "提示",
                        content: "您暂未授权录音功能，请打开右上角 -> 关于惠邦肾 -> 右上角 -> 设置中授权录音功能",
                        showCancel: !1,
                        confirmColor: "#3b4ca9",
                        confirmText: "我知道了"
                    }), e.setData({
                        recordBoo: !0,
                        recordBooTwo: !1
                    }));
                }
            });
        } else wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
    },
    shopRecord: function(t) {
        if (wx.getRecorderManager) {
            i.stop(), this.data.flagBoo = !0;
        }
    },
    bindlinechange: function(t) {
        console.log(t);
        var e = this;
        if (wx.createSelectorQuery) {
            var o = wx.createSelectorQuery();
            o.select("#textarea_bottom").boundingClientRect(), o.exec(function(t) {
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
    switch1Change: function(t) {
        var e = this;
        console.log(t), t.detail.value ? (e.setData({
            flag: 1
        }), 1 == e.data.contactList.doctorBaseInfoVO.jobType ? wx.showModal({
            title: "档案授权",
            content: "授权医生查看档案",
            confirmColor: "#3b4ca9",
            success: function(o) {
                o.confirm ? a.default.authorized(e, t) : o.cancel && e.setData({
                    authStateBoo: !1
                });
            }
        }) : 2 == e.data.contactList.doctorBaseInfoVO.jobType && wx.showModal({
            title: "档案授权",
            content: "授权护士查看档案",
            confirmColor: "#3b4ca9",
            success: function(o) {
                o.confirm ? a.default.authorized(e, t) : o.cancel && e.setData({
                    authStateBoo: !1
                });
            }
        })) : (e.setData({
            flag: 0
        }), 1 == e.data.contactList.doctorBaseInfoVO.jobType ? wx.showModal({
            title: "取消授权",
            content: "取消医生查看档案权限",
            confirmColor: "#3b4ca9",
            success: function(o) {
                o.confirm ? a.default.authorized(e, t) : o.cancel && e.setData({
                    authStateBoo: !0
                });
            }
        }) : 2 == e.data.contactList.doctorBaseInfoVO.jobType && wx.showModal({
            title: "取消授权",
            content: "取消护士查看档案权限",
            confirmColor: "#3b4ca9",
            success: function(o) {
                o.confirm ? a.default.authorized(e, t) : o.cancel && e.setData({
                    authStateBoo: !0
                });
            }
        }));
    },
    packUp: function() {
        var t = this.data.upFlag, e = this.data.upText;
        "问题查看" == e ? (e = "收起", this.data.contactList.dpMedOrderVo.msgPicSmall) : e = "问题查看", 
        this.setData({
            upFlag: !t,
            upText: e
        });
    },
    previewImage: function(t) {
        var e = this.data.contactList.dpMedOrderVo.msgPicBig;
        console.log(e);
        var o = t.target.dataset.imgindex;
        console.log(o), s.previewImage(t, e, o);
    },
    bigImage: function(t) {
        console.log(t);
        wx.previewImage({
            current: t.target.dataset.bigimg,
            urls: this.data.imgUrlArr
        });
    },
    scrolltoupper: function() {
        this.data.currentResult <= 0 || a.default.scrolltoupper(this);
    },
    onLoad: function(t) {
        var o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        });
        var n = this;
        if (this.setData({
            token: wx.getStorageSync("logs"),
            doctorId: t.doctorId,
            sessionId: t.sessionId,
            patientId: t.patientId,
            jump: t.jump || 2,
            signType: t.signType
        }), console.log(t), a.default.authState(n), wx.createSelectorQuery) {
            var c = wx.createSelectorQuery();
            c.select("#mjltest").boundingClientRect(), c.select("#textarea_bottom").boundingClientRect(), 
            c.exec(function(t) {
                console.log(t), n.setData({
                    text_height: t[0].height,
                    text_padding: t[1].height
                }), wx.getSystemInfo({
                    success: function(t) {
                        n.setData({
                            scroll_height: t.windowHeight - n.data.text_height
                        });
                    }
                });
            });
        } else n.setData({
            serviceFlag: !0
        }), wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    scroll_height: 486
                });
            }
        });
        wx.onSocketClose(function(t) {
            console.log("链接关闭"), e && clearInterval(e);
            var o = Math.floor(3 * Math.random() + 3);
            setTimeout(function() {
                n.socket(n);
            }, 1e3 * o), console.log(o);
        }), a.default.getFirstMsg(n), console.log(n.data.signType), wx.request({
            url: s.globalData.im + "chat/iplist",
            data: {
                token: n.data.token,
                to: n.data.patientId,
                medType: n.data.signType
            },
            success: function(t) {
                console.log(t), 200 == t.data.code && (n.setData({
                    chatUrl: t.data.data.chatUrl
                }), n.socket(n));
            }
        }), i && (i.onStart(function() {
            console.log("recorder start"), n.setData({
                record_text: "松开 结束"
            }), n.data.flagBoo && i.stop();
        }), i.onStop(function(t) {
            console.log("recorder stop", t);
            var e = t.tempFilePath, o = (t.duration / 1e3).toFixed();
            if (o <= 0) return wx.showToast({
                title: "太短了",
                icon: "none",
                duration: 500
            }), void n.setData({
                record_text: "按住 说话"
            });
            n.setData({
                time: o,
                width: 50 + 400 * o / 60,
                record_text: "按住 说话",
                RecordFlag: !0,
                tempFilePath: e
            }), console.log(o), wx.uploadFile({
                url: s.globalData.patient + "patient/askmed/upload/video",
                filePath: e,
                name: "file",
                success: function(t) {
                    if (console.log(t), 200 == t.statusCode) {
                        var e = JSON.parse(t.data).data;
                        n.data.video = e.videoPathHttpUrl, n.data.videoPath = e.videoPath, wx.onSocketClose(function(t) {
                            n.socket(n);
                        }), n.sendRecord();
                    }
                }
            });
        })), wx.createInnerAudioContext && (console.log("注册播放事件"), r.onPlay(function() {
            console.log("开始播放"), n.data.oppositeList[n.data.playIndex] && (n.data.oppositeList[n.data.playIndex].playFlag = !0, 
            n.setData({
                oppositeList: n.data.oppositeList
            }));
        }), r.onError(function(t) {
            console.log(t.errMsg), console.log(t.errCode);
        }), r.onStop(function() {
            console.log("停止播放");
        }), r.onEnded(function() {
            console.log("播放完毕了"), n.data.oppositeList[n.data.playIndex] && (n.data.oppositeList[n.data.playIndex].playFlag = !1, 
            n.setData({
                oppositeList: n.data.oppositeList
            }));
        }));
    },
    onReady: function() {},
    toPlay: function(t) {
        if (wx.createInnerAudioContext) {
            if (console.log("播放"), this.data.backoutFlag) {
                console.log("播放中");
                var e = this;
                console.log(t), console.log(this.data.playIndex), t.currentTarget.dataset.index == this.data.playIndex || !this.data.playIndex && 0 != this.data.playIndex || e.data.oppositeList[e.data.playIndex] && (e.data.oppositeList[e.data.playIndex].playFlag = !1, 
                e.setData({
                    oppositeList: e.data.oppositeList
                })), this.data.playIndex = t.currentTarget.dataset.index, r.src = t.currentTarget.dataset.src, 
                this.data.oppositeList[this.data.playIndex].playFlag ? (r.stop(), e.data.oppositeList[e.data.playIndex].playFlag = !1, 
                e.setData({
                    oppositeList: e.data.oppositeList
                })) : (console.log("触发播放"), r.play());
            }
        } else wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
    },
    goText: function() {
        this.setData({
            recordFlag: !1
        });
    },
    sendRecord: function() {
        console.log(1111);
        var t = this, e = t.data.oppositeList, o = new Date().getTime(), a = {
            version: 1,
            operation: 5,
            seqId: o,
            data: {
                to: t.data.doctorId,
                from: t.data.userId,
                ctime: o,
                msgType: "SINGLE_VIDEO",
                msg: t.data.videoPath,
                sessionId: t.data.sessionId,
                duration: parseInt(t.data.time),
                role: 0
            }
        };
        console.log(a);
        var n = JSON.stringify(a);
        wx.sendSocketMessage({
            data: n,
            success: function(t) {
                console.log(t);
            }
        }), e.push({
            from: t.data.userId,
            msgType: "SINGLE_VIDEO",
            msg: t.data.video,
            ctime: s.toDate(o),
            seqId: o,
            duration: parseInt(t.data.time)
        }), t.setData({
            oppositeList: e,
            scrollTop: t.data.scrollTop + 1e3
        });
    },
    onShow: function() {
        n = 0;
        var t = this;
        wx.getSetting({
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
    onHide: function() {},
    onUnload: function() {
        wx.closeSocket({
            success: function(t) {
                console.log(t);
            }
        }), wx.onSocketClose(function(t) {
            console.log("WebSocket 已关闭！"), console.log(t), clearInterval(e);
        }), 1 == this.data.jump && wx.navigateBack({
            delta: 2
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    socket: function(t) {
        wx.connectSocket({
            url: t.data.chatUrl,
            header: {
                "content-type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log(t);
            }
        }), wx.onSocketOpen(function(e) {
            console.log("WebSocket连接已打开！");
            var o = JSON.stringify({
                version: 1,
                operation: 1,
                seqId: new Date().getTime(),
                data: {
                    token: t.data.token,
                    to: t.data.doctorId
                }
            });
            wx.sendSocketMessage({
                data: o,
                success: function(t) {
                    console.log(t);
                }
            });
        }), wx.onSocketMessage(function(o) {
            var a = JSON.parse(o.data);
            switch (console.log(a), a.operation) {
              case 2:
                200 == a.data.code && (t.setData({
                    userId: a.data.userId
                }), t.pullMsg(0, 10, t)), t.heartbeat(), e = setInterval(t.heartbeat, 5e4);
                break;

              case 4:
                console.log("心跳ok");
                break;

              case 6:
                console.log(a), t.data.msgIdArr.push(a.data.msgId), t.data.seqIdArr.push(parseInt(a.data.seqId));
                break;

              case 8:
                console.log(a);
                break;

              case 9:
                var i = t.data.oppositeList, c = t.data.imgUrlArr, r = t.data.imgUrl;
                console.log(t.data.oppositeList), console.log(a.data), a.data.ctime = s.toDate(a.data.ctime), 
                "SINGLE_IMAGE" == a.data.msgType ? (r = a.data.msg.split("|"), a.data.msg = r[0], 
                c.push(r[1]), a.data.bigImg = r[1], i.push(a.data), t.setData({
                    oppositeList: i,
                    imgUrlArr: c,
                    scrollTop: t.data.scrollTop + 1e3
                })) : (i.push(a.data), t.setData({
                    oppositeList: i,
                    scrollTop: t.data.scrollTop + 1e3
                }));
                var l = {
                    version: 1,
                    operation: 7,
                    seqId: new Date().getTime(),
                    data: {
                        to: a.data.from,
                        msgId: a.data.msgId
                    }
                }, d = JSON.stringify(l);
                wx.sendSocketMessage({
                    data: d,
                    success: function(t) {}
                });
                break;

              case 10:
                console.log(a);
                break;

              case 14:
                console.log(a), a.data.sessionid == t.data.sessionId && t.setData({
                    disableFlag: !0
                }), console.log("对方结束了本次咨询：sessionId:" + a.data.sessionid + ", from:" + a.data.from + ",msg:" + a.data.msg);
                break;

              case 16:
                console.log(a);
                for (var g = a.data.msgId, u = (i = t.data.oppositeList, 0); u < i.length; u++) if (i[u].msgId == g) {
                    i.splice(u, 1), t.setData({
                        oppositeList: i
                    });
                    break;
                }
                console.log("对方撤回了消息，sessionId:" + a.data.sessionId + ", from:" + a.data.from + ",msgId:" + a.data.msgId);
                break;

              case 12:
                var p = [];
                null != a.data.list && (p = a.data.list, console.log(a.data.list), p.forEach(function(e, o) {
                    var a = t.data.oppositeList, s = t.data.imgUrlArr, i = t.data.imgUrl;
                    console.log(n), 0 == o && 0 == n && (e.parting = 1), n++, e.msg = e.message, e.from = e.msgFrom, 
                    "SINGLE_IMAGE" == e.msgType ? (i = e.msg.split("|"), e.msg = i[0], s.push(i[1]), 
                    e.bigImg = i[1], a.push(e)) : a.push(e), t.setData({
                        oppositeList: a,
                        imgUrlArr: s,
                        scrollTop: t.data.scrollTop + 2e3
                    });
                })), null != a.data.list && a.data.list.length > 0 && (g = a.data.list[a.data.list.length - 1].msgId, 
                console.log("msgId:" + g), t.pullMsg(g, 10, t));
            }
        });
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
    pullMsg: function(t, e, o) {
        console.log(o.data.sessionId);
        var a = {
            version: 1,
            operation: 11,
            seqId: new Date().getTime(),
            data: {
                userId: o.data.userId,
                offset: t,
                limit: e,
                sessionId: o.data.sessionId,
                medType: o.data.signType
            }
        }, s = JSON.stringify(a);
        wx.sendSocketMessage({
            data: s,
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
        this.data.disableFlag ? wx.showToast({
            title: "咨询已结束",
            icon: "none",
            duration: 2e3
        }) : 0 != t.detail.value.replace(/(^\s*)|(\s*$)/g, "").length ? this.setData({
            imgBoo: !1
        }) : this.setData({
            imgBoo: !0
        });
    },
    sendMsg: function(t) {
        var e = this;
        wx.onSocketClose(function(t) {
            e.socket(e);
        });
        var o = e.data.oppositeList;
        if (0 == !t.detail.value.textarea.replace(/(^\s*)|(\s*$)/g, "").length) {
            e.setData({
                imgBoo: !1,
                textMsg: t.detail.value.textarea
            });
            var a = new Date().getTime(), n = {
                version: 1,
                operation: 5,
                seqId: a,
                data: {
                    to: e.data.doctorId,
                    from: e.data.userId,
                    ctime: a,
                    msgType: "SINGLE_TEXT",
                    msg: e.data.textMsg,
                    sessionId: e.data.sessionId,
                    duration: 0,
                    role: 0
                }
            }, i = JSON.stringify(n);
            if (wx.sendSocketMessage({
                data: i,
                success: function(t) {}
            }), o.push({
                from: e.data.userId,
                msgType: "SINGLE_TEXT",
                msg: e.data.textMsg,
                ctime: s.toDate(a),
                seqId: a,
                duration: 0
            }), e.setData({
                oppositeList: o,
                textValue: "",
                textMsg: "",
                height: 40,
                imgBoo: !0,
                scrollTop: e.data.scrollTop + 1e3
            }), wx.createSelectorQuery) {
                var c = wx.createSelectorQuery();
                c.select("#textarea_bottom").boundingClientRect(), c.exec(function(t) {
                    console.log(t), e.setData({
                        text_padding: t[0].height
                    });
                });
            }
        } else wx.showToast({
            title: "内容不能为空",
            icon: "none",
            duration: 2e3
        });
    },
    sendFile: function() {
        var t = this, e = t.data.oppositeList, o = t.data.imgPath, a = t.data.imgUrl, n = t.data.imgUrlArr, i = new Date().getTime(), c = {
            version: 1,
            operation: 5,
            seqId: i,
            data: {
                to: t.data.doctorId,
                from: t.data.userId,
                ctime: i,
                msgType: "SINGLE_IMAGE",
                msg: o,
                sessionId: t.data.sessionId,
                duration: 0,
                role: 0
            }
        }, r = JSON.stringify(c);
        console.log(t.data.imgUrl), wx.sendSocketMessage({
            data: r,
            success: function(t) {}
        }), a = a.split("|"), e.push({
            from: t.data.userId,
            msgType: "SINGLE_IMAGE",
            msg: a[0],
            ctime: s.toDate(i),
            bigImg: a[1],
            seqId: i,
            duration: 0
        }), n.push(a[1]), t.setData({
            oppositeList: e,
            imgUrlArr: n,
            scrollTop: t.data.scrollTop + 1e3
        });
    },
    sendChooseImg: function() {
        var t = this;
        t.data.imgUrl, wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var o = 0; o < e.tempFilePaths.length; o++) wx.uploadFile({
                    url: s.globalData.patient + "patient/askmed/upload/image",
                    filePath: e.tempFilePaths[o],
                    name: "file",
                    success: function(e) {
                        if (200 == e.statusCode) {
                            var o = JSON.parse(e.data).data;
                            console.log(o), t.setData({
                                imgUrl: o.picSmallHttpUrl + "|" + o.picBigHttpUrl,
                                imgPath: o.smallFilePath + "|" + o.bigFilepath
                            }), wx.onSocketClose(function(e) {
                                t.socket(t);
                            }), t.sendFile();
                        }
                    }
                });
            }
        });
    },
    closeBtn: function() {
        var t = this;
        wx.showModal({
            title: "确定要结束咨询吗？",
            confirmColor: "#3b4ca9",
            success: function(o) {
                o.confirm ? wx.request({
                    url: s.globalData.patient + "patient/askmed/patientMedOrder/close",
                    data: {
                        sessionId: t.data.sessionId
                    },
                    success: function(o) {
                        if (200 == o.data.code) {
                            var a = {
                                version: 1,
                                operation: 13,
                                seqId: new Date().getTime(),
                                data: {
                                    to: t.data.doctorId,
                                    from: t.data.userId,
                                    sessionId: t.data.sessionId,
                                    msgType: "SINGLE_IMAGE"
                                }
                            }, s = JSON.stringify(a);
                            wx.sendSocketMessage({
                                data: s,
                                success: function(t) {
                                    console.log("结束通知发送成功");
                                }
                            }), wx.closeSocket({
                                success: function(t) {
                                    console.log(t);
                                }
                            }), wx.onSocketClose(function(t) {
                                console.log("WebSocket 已关闭！"), console.log(t);
                            }), wx.removeStorageSync("myDoctor"), wx.removeStorageSync("myNurse"), wx.navigateBack({
                                delta: 1
                            }), clearInterval(e);
                        }
                    }
                }) : o.cancel;
            }
        });
    },
    toDoctor: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/nurseInfro/nurseInfro"
        });
    },
    backout: function(t) {
        var e = this;
        console.log(t), console.log(this.data.msgIdArr), console.log(this.data.seqIdArr);
        var o = t.target.dataset.backmsg, a = this.data.seqIdArr.indexOf(o), s = t.target.dataset.index;
        console.log(a);
        var n = new Date().getTime();
        console.log(n - a), this.data.backoutFlag = !1, console.log(t), wx.showActionSheet({
            itemList: [ "撤回" ],
            success: function(t) {
                if (console.log(t.tapIndex), e.data.backoutFlag = !0, 0 == t.tapIndex) {
                    if (n - e.data.seqIdArr[a] > 12e4 || -1 == a) return void wx.showToast({
                        title: "超过2分钟不能撤回哦",
                        icon: "none",
                        duration: 2e3
                    });
                    console.log(e.data.msgIdArr[a]);
                    var o = {
                        version: 1,
                        operation: 15,
                        seqId: new Date().getTime(),
                        data: {
                            sessionId: e.data.sessionId,
                            to: e.data.doctorId,
                            from: e.data.userId,
                            msgType: "SINGLE_IMAGE",
                            msgId: e.data.msgIdArr[a],
                            role: 0
                        }
                    }, i = JSON.stringify(o);
                    wx.sendSocketMessage({
                        data: i,
                        success: function(t) {
                            var o = e.data.oppositeList;
                            o.splice(s, 1), e.setData({
                                oppositeList: o
                            });
                        }
                    });
                }
            },
            fail: function(t) {
                console.log(t), e.data.backoutFlag = !0;
            }
        });
    }
});

var i = wx.getRecorderManager ? wx.getRecorderManager() : null, c = {
    duration: 6e4,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192e3,
    format: "mp3",
    frameSize: 50
}, r = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;