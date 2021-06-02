var t, e, a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), o = function(t) {
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
        groupChatFlag: !0,
        record_text: "按住 说话",
        recordFlag: !1,
        backoutFlag: !0,
        contactList: {
            teamBaseInfoVo: {
                teamHeaderUrl: "/assets/images/796.png",
                teamName: "小强",
                teamLeaderName: "老三"
            },
            dpMedOrderVo: {
                msgTxt: "冬天吃啥",
                msgPicSmall: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ]
            }
        },
        switchText: "授权管理"
    }, (0, a.default)(t, "oppositeList", [ {
        from: 1,
        parting: 1,
        ctime: "2018-10-30",
        msgType: "GROUP_IMAGE",
        playFlag: "",
        duration: "回家",
        msg: "/assets/images/796.png",
        bigImg: "在外面",
        headerUrl: "/assets/images/796.png",
        seqId: 1
    }, {
        from: 2,
        parting: 2,
        ctime: "2018-10-30",
        msgType: "GROUP_TEXT",
        playFlag: 10,
        duration: 20,
        msg: "多喝水",
        bigImg: "在外面",
        headerUrl: "/assets/images/796.png",
        seqId: 1
    }, {
        from: 1,
        parting: 1,
        ctime: "2018-10-30",
        msgType: "GROUP_VIDEO",
        playFlag: 10,
        duration: 20,
        msg: "感冒怎么治",
        bigImg: "在外面",
        headerUrl: "/assets/images/796.png",
        seqId: 1
    }, {
        from: 2,
        parting: 2,
        ctime: "2018-10-30",
        msgType: "GROUP_VIDEO",
        playFlag: 10,
        duration: 20,
        msg: "/assets/images/796.png",
        bigImg: "在外面",
        headerUrl: "/assets/images/796.png",
        seqId: 1
    } ]), (0, a.default)(t, "userId", 1), t),
    toRecord: function(t) {
        this.setData({
            recordFlag: !this.data.recordFlag
        });
    },
    getRecord: function() {
        if (wx.getRecorderManager) {
            var t = this;
            i.start(r), this.data.flagBoo = !1, this.data.recordBoo && wx.showModal({
                title: "提示",
                content: "您暂未授权录音功能，请打开右上角 -> 关于惠邦肾 -> 右上角 -> 设置中授权录音功能",
                showCancel: !1,
                confirmColor: "#3b4ca9",
                confirmText: "我知道了"
            }), this.data.recordBooTwo && wx.getSetting({
                success: function(e) {
                    console.log(e), 0 == e.authSetting["scope.record"] && (wx.showModal({
                        title: "提示",
                        content: "您暂未授权录音功能，请打开右上角 -> 关于惠邦肾 -> 右上角 -> 设置中授权录音功能",
                        showCancel: !1,
                        confirmColor: "#3b4ca9",
                        confirmText: "我知道了"
                    }), t.setData({
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
    shopRecord: function() {
        wx.getRecorderManager && (this.data.flagBoo = !0, i.stop());
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
    switch1Change: function(t) {
        var e = this;
        console.log(t), t.detail.value ? (e.setData({
            flag: 1
        }), 3 == e.data.signType ? wx.showModal({
            title: "档案授权",
            content: "授权团队查看档案",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? o.default.authorized(e, t) : a.cancel && e.setData({
                    authStateBoo: !1
                });
            }
        }) : 1 == e.data.contactList.doctorBaseInfoVO.jobType ? wx.showModal({
            title: "档案授权",
            content: "授权医生查看档案",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? o.default.authorized(e, t) : a.cancel && e.setData({
                    authStateBoo: !1
                });
            }
        }) : 2 == e.data.contactList.doctorBaseInfoVO.jobType && wx.showModal({
            title: "档案授权",
            content: "授权护士查看档案",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? o.default.authorized(e, t) : a.cancel && e.setData({
                    authStateBoo: !1
                });
            }
        })) : (e.setData({
            flag: 0
        }), 3 == e.data.signType ? wx.showModal({
            title: "取消授权",
            content: "取消团队查看档案权限",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? o.default.authorized(e, t) : a.cancel && e.setData({
                    authStateBoo: !0
                });
            }
        }) : 1 == e.data.contactList.doctorBaseInfoVO.jobType ? wx.showModal({
            title: "取消授权",
            content: "取消医生查看档案权限",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? o.default.authorized(e, t) : a.cancel && e.setData({
                    authStateBoo: !0
                });
            }
        }) : 2 == e.data.contactList.doctorBaseInfoVO.jobType && wx.showModal({
            title: "取消授权",
            content: "取消护士查看档案权限",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? o.default.authorized(e, t) : a.cancel && e.setData({
                    authStateBoo: !0
                });
            }
        }));
    },
    packUp: function() {
        var t = this.data.upFlag, e = this.data.upText;
        e = "问题查看" == e ? "收起" : "问题查看", this.setData({
            upFlag: !t,
            upText: e
        });
    },
    previewImage: function(t) {
        var e = this.data.contactList.dpMedOrderVo.msgPicBig;
        console.log(e);
        var a = t.target.dataset.imgindex;
        console.log(a), s.previewImage(t, e, a);
    },
    bigImage: function(t) {
        console.log(t);
        wx.previewImage({
            current: t.target.dataset.bigimg,
            urls: this.data.imgUrlArr
        });
    },
    scrolltoupper: function() {
        this.data.currentResult <= 0 || o.default.scrolltoupper(this);
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var n = this;
        if (this.setData({
            token: wx.getStorageSync("logs"),
            doctorId: t.doctorId,
            sessionId: t.sessionId,
            patientId: t.patientId,
            jump: t.jump || 2,
            signType: t.signType
        }), console.log(t), wx.onSocketClose(function(t) {
            console.log("链接关闭"), e && clearInterval(e);
            var a = Math.floor(3 * Math.random() + 3);
            setTimeout(function() {
                n.socket(n);
            }, 1e3 * a), console.log(a);
        }), o.default.authState(n), wx.createSelectorQuery) {
            var r = wx.createSelectorQuery();
            r.select("#mjltest").boundingClientRect(), r.select("#textarea_bottom").boundingClientRect(), 
            r.exec(function(t) {
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
        o.default.getFirstMsg(n), wx.getRecorderManager && (i.onStart(function() {
            console.log("recorder start"), n.setData({
                record_text: "松开 结束"
            }), n.data.flagBoo && i.stop();
        }), i.onStop(function(t) {
            console.log("recorder stop", t);
            var e = t.tempFilePath, a = (t.duration / 1e3).toFixed();
            if (a <= 0) return wx.showToast({
                title: "太短了",
                icon: "none",
                duration: 500
            }), void n.setData({
                record_text: "按住 说话"
            });
            n.setData({
                time: a,
                width: 50 + 400 * a / 60,
                record_text: "按住 说话",
                RecordFlag: !0,
                tempFilePath: e
            }), console.log(a), wx.uploadFile({
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
        })), wx.createInnerAudioContext && (c.onPlay(function() {
            console.log("开始播放"), n.data.oppositeList[n.data.playIndex] && (n.data.oppositeList[n.data.playIndex].playFlag = !0, 
            n.setData({
                oppositeList: n.data.oppositeList
            }));
        }), c.onError(function(t) {
            console.log(t.errMsg), console.log(t.errCode);
        }), c.onStop(function() {
            console.log("停止播放");
        }), c.onEnded(function() {
            console.log("播放完毕了"), n.data.oppositeList[n.data.playIndex] && (n.data.oppositeList[n.data.playIndex].playFlag = !1, 
            n.setData({
                oppositeList: n.data.oppositeList
            }));
        }));
    },
    toPlay: function(t) {
        if (wx.createInnerAudioContext) {
            if (this.data.backoutFlag) {
                var e = this;
                console.log(t), t.currentTarget.dataset.index == this.data.playIndex || !this.data.playIndex && 0 != this.data.playIndex || e.data.oppositeList[e.data.playIndex] && (e.data.oppositeList[e.data.playIndex].playFlag = !1, 
                e.setData({
                    oppositeList: e.data.oppositeList
                })), this.data.playIndex = t.currentTarget.dataset.index, c.src = t.currentTarget.dataset.src, 
                this.data.oppositeList[this.data.playIndex].playFlag ? (c.stop(), e.data.oppositeList[e.data.playIndex].playFlag = !1, 
                e.setData({
                    oppositeList: e.data.oppositeList
                })) : c.play();
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
        var t = this, e = t.data.oppositeList, a = new Date().getTime(), o = {
            version: 1,
            operation: 5,
            seqId: a,
            data: {
                to: t.data.sessionId,
                from: t.data.userId,
                ctime: a,
                msgType: "GROUP_VIDEO",
                msg: t.data.videoPath,
                sessionId: t.data.sessionId,
                role: 0,
                duration: parseInt(t.data.time)
            }
        };
        console.log(o);
        var n = JSON.stringify(o);
        wx.sendSocketMessage({
            data: n,
            success: function(t) {}
        }), e.push({
            from: t.data.userId,
            msgType: "GROUP_VIDEO",
            msg: t.data.video,
            ctime: s.toDate(a),
            seqId: a,
            duration: parseInt(t.data.time)
        }), t.setData({
            oppositeList: e,
            scrollTop: t.data.scrollTop + 1e3
        });
    },
    onReady: function() {},
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
            var a = JSON.stringify({
                version: 1,
                operation: 1,
                seqId: new Date().getTime(),
                data: {
                    token: t.data.token,
                    to: t.data.sessionId
                }
            });
            wx.sendSocketMessage({
                data: a,
                success: function(t) {
                    console.log(t);
                }
            });
        }), wx.onSocketMessage(function(a) {
            var o = JSON.parse(a.data);
            switch (console.log(o), o.operation) {
              case 2:
                200 == o.data.code && (t.setData({
                    userId: o.data.userId
                }), t.pullMsg(0, 10, t)), t.heartbeat(), e = setInterval(t.heartbeat, 5e4);
                break;

              case 4:
                console.log("心跳ok");
                break;

              case 6:
                console.log(o), t.data.msgIdArr.push(o.data.msgId), t.data.seqIdArr.push(parseInt(o.data.seqId));
                break;

              case 8:
                console.log(o);
                break;

              case 9:
                var i = t.data.oppositeList, r = t.data.imgUrlArr, c = t.data.imgUrl;
                for (console.log(t.data.oppositeList), console.log(o.data), o.data.ctime = s.toDate(o.data.ctime), 
                p = 0; p < t.data.contactList.listGroupHeaderUrl.length; p++) o.data.from != t.data.contactList.listGroupHeaderUrl[p].userId || (o.data.headerUrl = t.data.contactList.listGroupHeaderUrl[p].headerUrl);
                "GROUP_IMAGE" == o.data.msgType ? (c = o.data.msg.split("|"), o.data.msg = c[0], 
                r.push(c[1]), o.data.bigImg = c[1], i.push(o.data), t.setData({
                    oppositeList: i,
                    imgUrlArr: r,
                    scrollTop: t.data.scrollTop + 1e3
                })) : (i.push(o.data), t.setData({
                    oppositeList: i,
                    scrollTop: t.data.scrollTop + 1e3
                }));
                var l = {
                    version: 1,
                    operation: 7,
                    seqId: new Date().getTime(),
                    data: {
                        to: t.data.sessionId,
                        msgId: o.data.msgId
                    }
                }, d = JSON.stringify(l);
                wx.sendSocketMessage({
                    data: d,
                    success: function(t) {}
                });
                break;

              case 10:
                console.log(o);
                break;

              case 14:
                console.log(o), o.data.sessionid == t.data.sessionId && t.setData({
                    disableFlag: !0
                }), console.log("对方结束了本次咨询：sessionId:" + o.data.sessionid + ", from:" + o.data.from + ",msg:" + o.data.msg);
                break;

              case 16:
                console.log(o);
                var g = o.data.msgId;
                i = t.data.oppositeList;
                console.log(i);
                for (var p = 0; p < i.length; p++) if (i[p].msgId == g) {
                    console.log(1111111), i.splice(p, 1), console.log(p), t.setData({
                        oppositeList: i
                    });
                    break;
                }
                console.log(t.data.oppositeList), console.log("对方撤回了消息，sessionId:" + o.data.sessionId + ", from:" + o.data.from + ",msgId:" + o.data.msgId);
                break;

              case 12:
                var u = [], m = t.data.msgIdArr.reverse();
                null != o.data.list && (u = o.data.list, console.log(o.data.list), u.forEach(function(e, a) {
                    0 == a && 0 == n && (e.parting = 1), n++, console.log(m.indexOf(e.msgId));
                    var o = -1 == m.indexOf(e.msgId) ? 0 : m.indexOf(e.msgId);
                    t.data.oppositeList.splice(o, 1), console.log(m), console.log(e.msgId), console.log(o), 
                    console.log(s), m.splice(-1 == m.indexOf(e.msgId) ? 0 : m.indexOf(e.msgId), 1);
                    for (var s = t.data.oppositeList, i = t.data.imgUrlArr, r = t.data.imgUrl, c = 0; c < t.data.contactList.listGroupHeaderUrl.length; c++) e.msgFrom != t.data.contactList.listGroupHeaderUrl[c].userId || (e.headerUrl = t.data.contactList.listGroupHeaderUrl[c].headerUrl);
                    e.msg = e.message, e.from = e.msgFrom, "GROUP_IMAGE" == e.msgType ? (r = e.msg.split("|"), 
                    e.msg = r[0], i.push(r[1]), e.bigImg = r[1], t.data.oppositeList.push(e)) : t.data.oppositeList.push(e), 
                    t.setData({
                        imgUrlArr: i,
                        msgIdArr: m
                    });
                })), null != o.data.list && o.data.list.length > 0 ? (g = o.data.list[o.data.list.length - 1].msgId, 
                console.log("msgId:" + g), t.pullMsg(g, 10, t)) : t.setData({
                    oppositeList: t.data.oppositeList,
                    scrollTop: t.data.scrollTop + 3e3
                });
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
        }, s = JSON.stringify(o);
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
        var a = e.data.oppositeList;
        if (0 == !t.detail.value.textarea.replace(/(^\s*)|(\s*$)/g, "").length) {
            e.setData({
                imgBoo: !1,
                textMsg: t.detail.value.textarea
            });
            var o = new Date().getTime(), n = {
                version: 1,
                operation: 5,
                seqId: o,
                data: {
                    to: e.data.sessionId,
                    from: e.data.userId,
                    ctime: o,
                    msgType: "GROUP_TEXT",
                    msg: e.data.textMsg,
                    sessionId: e.data.sessionId,
                    role: 0,
                    duration: 0
                }
            };
            console.log(n);
            var i = JSON.stringify(n);
            if (wx.sendSocketMessage({
                data: i,
                success: function(t) {}
            }), a.push({
                from: e.data.userId,
                msgType: "GROUP_TEXT",
                msg: e.data.textMsg,
                ctime: s.toDate(o),
                seqId: o
            }), e.setData({
                oppositeList: a,
                textValue: "",
                textMsg: "",
                height: 40,
                imgBoo: !0,
                scrollTop: e.data.scrollTop + 1e3
            }), wx.createSelectorQuery) {
                var r = wx.createSelectorQuery();
                r.select("#textarea_bottom").boundingClientRect(), r.exec(function(t) {
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
        var t = this, e = t.data.oppositeList, a = t.data.imgPath, o = t.data.imgUrl, n = t.data.imgUrlArr, i = new Date().getTime(), r = {
            version: 1,
            operation: 5,
            seqId: i,
            data: {
                to: t.data.sessionId,
                from: t.data.userId,
                ctime: i,
                msgType: "GROUP_IMAGE",
                msg: a,
                sessionId: t.data.sessionId,
                role: 0,
                duration: 0
            }
        }, c = JSON.stringify(r);
        console.log(t.data.imgUrl), wx.sendSocketMessage({
            data: c,
            success: function(t) {}
        }), o = o.split("|"), e.push({
            from: t.data.userId,
            msgType: "GROUP_IMAGE",
            msg: o[0],
            ctime: s.toDate(i),
            bigImg: o[1],
            seqId: i
        }), n.push(o[1]), t.setData({
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
                for (var a = 0; a < e.tempFilePaths.length; a++) wx.uploadFile({
                    url: s.globalData.patient + "patient/askmed/upload/image",
                    filePath: e.tempFilePaths[a],
                    name: "file",
                    success: function(e) {
                        if (200 == e.statusCode) {
                            var a = JSON.parse(e.data).data;
                            console.log(a), t.setData({
                                imgUrl: a.picSmallHttpUrl + "|" + a.picBigHttpUrl,
                                imgPath: a.smallFilePath + "|" + a.bigFilepath
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
            success: function(a) {
                a.confirm ? wx.request({
                    url: s.globalData.patient + "patient/askmed/patientMedOrder/close",
                    data: {
                        sessionId: t.data.sessionId
                    },
                    success: function(a) {
                        if (200 == a.data.code) {
                            var o = {
                                version: 1,
                                operation: 13,
                                seqId: new Date().getTime(),
                                data: {
                                    to: t.data.sessionId,
                                    from: t.data.userId,
                                    sessionId: t.data.sessionId,
                                    msgType: "GROUP_IMAGE"
                                }
                            }, s = JSON.stringify(o);
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
                            }), wx.removeStorageSync("myDoctor"), wx.removeStorageSync("myNurse"), wx.removeStorageSync("myTeam"), 
                            wx.navigateBack({
                                delta: 1
                            }), clearInterval(e);
                        }
                    }
                }) : a.cancel;
            }
        });
    },
    toDoctor: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/myTeam/myTeam"
        });
    },
    backout: function(t) {
        var e = this, a = t.target.dataset.backmsg, o = this.data.seqIdArr.indexOf(a), s = t.target.dataset.index;
        console.log(o);
        var n = new Date().getTime();
        console.log(n - o), console.log(t), this.data.backoutFlag = !1, wx.showActionSheet({
            itemList: [ "撤回" ],
            success: function(t) {
                if (console.log(t), e.data.backoutFlag = !0, console.log(t.tapIndex), 0 == t.tapIndex) {
                    if (n - e.data.seqIdArr[o] > 12e4 || -1 == o) return void wx.showToast({
                        title: "超过2分钟不能撤回哦",
                        icon: "none",
                        duration: 2e3
                    });
                    var a = {
                        version: 1,
                        operation: 15,
                        seqId: new Date().getTime(),
                        data: {
                            sessionId: e.data.sessionId,
                            to: e.data.sessionId,
                            from: e.data.userId,
                            msgType: "GROUP_IMAGE",
                            msgId: e.data.msgIdArr[o],
                            role: 0
                        }
                    }, i = JSON.stringify(a);
                    wx.sendSocketMessage({
                        data: i,
                        success: function(t) {
                            var a = e.data.oppositeList;
                            console.log(a), a.splice(s, 1), console.log(a), e.setData({
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
    }
});

var i = wx.getRecorderManager ? wx.getRecorderManager() : null, r = {
    duration: 6e4,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192e3,
    format: "mp3",
    frameSize: 50
}, c = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;