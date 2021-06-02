var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), o = getApp(), s = 0;

Page({
    data: (0, e.default)({
        listFlag: !1,
        disableFlag: !1,
        show: !0,
        hide: !1,
        ClickRseply: !0,
        ClickRseply1: !1,
        tempFilePaths: [],
        imgBoo: !0,
        upFlag: !1,
        oppositeList: [],
        imgUrlArr: [],
        imgUrl: [],
        loadingBoo: !0,
        moreBoo: !0,
        currentResult: 0,
        scrollTop: 1e3,
        height: 45,
        oldHeight: 45,
        msgIdArr: [],
        seqIdArr: [],
        groupChatFlag: !0,
        record_text: "按住 说话",
        recordFlag: !1,
        backoutFlag: !0,
        contactList: {
            teamBaseInfoVo: {
                myTeamRole: 1,
                teamId: 1,
                teamName: "小花",
                userIcon: "/assets/images/head.png",
                name: "小明",
                age: 30
            },
            dpMedOrderVo: {
                msgTxt: 1,
                sessionDateBegin: "2018-10-22",
                msgPicSmall: [ "/assets/images/head.png", "/assets/images/head.png" ]
            }
        }
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
    toRecord: function(t) {
        this.setData({
            recordFlag: !this.data.recordFlag
        });
    },
    getRecord: function() {
        if (i) {
            var t = this;
            i.start(n), this.data.flagBoo = !1, this.data.recordBoo && wx.showModal({
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
        i && (this.data.flagBoo = !0, i.stop());
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
        var t = this;
        wx.request({
            url: o.globalData.doctor + "doctor/manage/showPatientAllowArchives/" + t.data.patientId,
            success: function(e) {
                console.log(e), 200 == e.data.code && (1 == e.data.data ? (wx.setStorageSync("patientId", t.data.patientId), 
                wx.navigateTo({
                    url: "/hyb_yl/index/healthRecord/healthRecord?teamId=_" + t.data.doctorId
                })) : 0 == e.data.data && wx.showModal({
                    title: "温馨提示",
                    content: "您未有查看权限，需患者授权~",
                    confirmColor: "#3b4ca9"
                }));
            }
        });
    },
    bigImage: function(t) {
        console.log(t);
        wx.previewImage({
            current: t.target.dataset.bigimg,
            urls: this.data.imgUrlArr
        });
    },
    previewImage: function(t) {
        var e = this.data.contactList.dpMedOrderVo.msgPicBig, a = t.target.dataset.imgindex;
        o.previewImage(t, e, a);
    },
    onLoad: function(e) {
        var s = this;
        if (wx.createSelectorQuery) {
            var n = wx.createSelectorQuery();
            n.select("#mjltest").boundingClientRect(), n.select("#textarea_bottom").boundingClientRect(), 
            n.exec(function(t) {
                console.log(t), s.setData({
                    text_height: t[0].height,
                    text_padding: t[1].height
                }), wx.getSystemInfo({
                    success: function(t) {
                        console.log(t.windowHeight), s.setData({
                            scroll_height: t.windowHeight - s.data.text_height
                        });
                    }
                });
            });
        } else s.setData({
            serviceFlag: !0
        }), wx.getSystemInfo({
            success: function(t) {
                console.log(t.windowHeight), s.setData({
                    scroll_height: 490
                });
            }
        });
        console.log(e), wx.onSocketClose(function(e) {
            console.log("链接关闭"), t && clearInterval(t);
            var a = Math.floor(3 * Math.random() + 3);
            setTimeout(function() {
                s.socket(s);
            }, 1e3 * a), console.log(a);
        }), s.setData({
            doctorId: e.doctorId,
            sessionId: e.sessionId,
            patientId: e.userId,
            token: wx.getStorageSync("log"),
            signType: e.signType,
            teamMyUserId: e.teamMyUserId
        }), wx.setStorageSync("flag", 2), wx.setStorageSync("patientId", s.data.patientId), 
        a.default.getFirstMsg(s), i && (i.onStart(function() {
            console.log("recorder start"), s.setData({
                record_text: "松开 结束"
            }), s.data.flagBoo && i.stop();
        }), i.onStop(function(t) {
            console.log("recorder stop", t);
            var e = t.tempFilePath, a = (t.duration / 1e3).toFixed();
            if (a <= 0) return wx.showToast({
                title: "太短了",
                icon: "none",
                duration: 500
            }), void s.setData({
                record_text: "按住 说话"
            });
            s.setData({
                time: a,
                width: 50 + 400 * a / 60,
                record_text: "按住 说话",
                RecordFlag: !0,
                tempFilePath: e
            }), console.log(a), wx.uploadFile({
                url: o.globalData.patient + "patient/askmed/upload/video",
                filePath: e,
                name: "file",
                success: function(t) {
                    if (console.log(t), 200 == t.statusCode) {
                        var e = JSON.parse(t.data).data;
                        s.data.video = e.videoPathHttpUrl, s.data.videoPath = e.videoPath, wx.onSocketClose(function(t) {
                            s.socket(s);
                        }), s.sendRecord();
                    }
                }
            });
        })), d && (d.onPlay(function() {
            console.log("开始播放"), s.data.oppositeList[s.data.playIndex] && (s.data.oppositeList[s.data.playIndex].playFlag = !0, 
            s.setData({
                oppositeList: s.data.oppositeList
            }));
        }), d.onError(function(t) {
            console.log(t.errMsg), console.log(t.errCode);
        }), d.onStop(function() {
            console.log("停止播放");
        }), d.onEnded(function() {
            console.log("播放完毕了"), s.data.oppositeList[s.data.playIndex] && (s.data.oppositeList[s.data.playIndex].playFlag = !1, 
            s.setData({
                oppositeList: s.data.oppositeList
            }));
        }));
    },
    toPlay: function(t) {
        if (d) {
            if (this.data.backoutFlag) {
                var e = this;
                console.log(t), t.currentTarget.dataset.index == this.data.playIndex || !this.data.playIndex && 0 != this.data.playIndex || e.data.oppositeList[e.data.playIndex] && (e.data.oppositeList[e.data.playIndex].playFlag = !1, 
                e.setData({
                    oppositeList: e.data.oppositeList
                })), this.data.playIndex = t.currentTarget.dataset.index, d.src = t.currentTarget.dataset.src, 
                this.data.oppositeList[this.data.playIndex].playFlag ? (d.stop(), e.data.oppositeList[e.data.playIndex].playFlag = !1, 
                e.setData({
                    oppositeList: e.data.oppositeList
                })) : d.play();
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
        var t = this, e = t.data.oppositeList;
        console.log(t.data.role);
        var a = new Date().getTime(), s = {
            version: 1,
            operation: 5,
            seqId: a,
            data: {
                to: t.data.sessionId,
                from: t.data.teamMyUserId,
                ctime: a,
                msgType: "GROUP_VIDEO",
                msg: t.data.videoPath,
                sessionId: t.data.sessionId,
                role: t.data.role,
                duration: parseInt(t.data.time)
            }
        };
        console.log(s);
        var i = JSON.stringify(s);
        wx.sendSocketMessage({
            data: i,
            success: function(t) {}
        }), e.push({
            from: t.data.teamMyUserId,
            msgType: "GROUP_VIDEO",
            msg: t.data.video,
            ctime: o.toDate(a),
            seqId: a,
            duration: parseInt(t.data.time)
        }), wx.removeStorageSync("contentText"), t.setData({
            oppositeList: e,
            scrollTop: t.data.scrollTop + 1e3
        });
    },
    onShow: function() {
        s = 0;
        var t = this;
        wx.getStorageSync("contentText") && this.setData({
            textMsg: wx.getStorageSync("contentText"),
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
        wx.removeStorageSync("contentText"), wx.closeSocket({
            success: function(t) {
                console.log(t);
            }
        }), wx.onSocketClose(function(e) {
            console.log("WebSocket 已关闭！"), console.log(e), clearInterval(t);
        });
    },
    scrolltoupper: function() {
        this.data.currentResult <= 0 || a.default.scrolltoupper(this);
    },
    socket: function(e) {
        wx.connectSocket({
            url: e.data.chatUrl,
            header: {
                "content-type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log(t);
            }
        }), wx.onSocketOpen(function(t) {
            console.log("WebSocket连接已打开！");
            var a = JSON.stringify({
                version: 1,
                operation: 1,
                seqId: new Date().getTime(),
                data: {
                    token: e.data.token,
                    to: e.data.sessionId
                }
            });
            wx.sendSocketMessage({
                data: a,
                success: function(t) {
                    console.log(t);
                }
            });
        }), wx.onSocketMessage(function(a) {
            var i = JSON.parse(a.data);
            switch (i.operation) {
              case 2:
                console.log(i), 200 == i.data.code && (e.setData({
                    userId: i.data.userId
                }), e.pullMsg(0, 10, e)), e.heartbeat(), t = setInterval(e.heartbeat, 5e4);
                break;

              case 4:
                console.log("心跳ok");
                break;

              case 6:
                console.log(i), e.data.msgIdArr.push(i.data.msgId), e.data.seqIdArr.push(parseInt(i.data.seqId));
                break;

              case 8:
                break;

              case 9:
                var n = e.data.oppositeList, d = e.data.imgUrlArr, r = e.data.imgUrl;
                for (console.log(i.data), i.data.ctime = o.toDate(i.data.ctime), p = 0; p < e.data.contactList.listGroupHeaderUrl.length; p++) i.data.from != e.data.contactList.listGroupHeaderUrl[p].userId || (i.data.headerUrl = e.data.contactList.listGroupHeaderUrl[p].headerUrl);
                "GROUP_IMAGE" == i.data.msgType ? (r = i.data.msg.split("|"), i.data.msg = r[0], 
                i.data.bigImg = r[1], d.push(r[1]), e.setData({
                    imgUrlArr: d
                }), n.push(i.data), e.setData({
                    oppositeList: n,
                    scrollTop: e.data.scrollTop + 1e3
                })) : (n.push(i.data), console.log(n), e.setData({
                    oppositeList: n,
                    scrollTop: e.data.scrollTop + 1e3
                }), console.log(e.data.oppositeList));
                var l = {
                    version: 1,
                    operation: 7,
                    seqId: new Date().getTime(),
                    data: {
                        to: e.data.teamMyUserId,
                        msgId: i.data.msgId
                    }
                }, c = JSON.stringify(l);
                wx.sendSocketMessage({
                    data: c,
                    success: function(t) {}
                });
                break;

              case 10:
                break;

              case 14:
                console.log(i), i.data.sessionid == e.data.sessionId && (console.log("条件成立了"), e.setData({
                    disableFlag: !0
                })), console.log("对方结束了本次咨询：sessionId:" + i.data.sessionId + ", from:" + i.data.from + ",msg:" + i.data.msg);
                break;

              case 16:
                console.log(i);
                for (var g = i.data.msgId, p = (n = e.data.oppositeList, 0); p < n.length; p++) if (n[p].msgId == g) {
                    n.splice(p, 1), e.setData({
                        oppositeList: n
                    });
                    break;
                }
                console.log("对方撤回了消息，sessionId:" + i.data.sessionId + ", from:" + i.data.from + ",msgId:" + i.data.msgId);
                break;

              case 12:
                console.log(i);
                var u = [], m = e.data.msgIdArr.reverse();
                null != i.data.list && (u = i.data.list, console.log(i.data.list), u.forEach(function(t, a) {
                    0 == a && 0 == s && (t.parting = 1), s++;
                    var o = -1 == m.indexOf(t.msgId) ? 0 : m.indexOf(t.msgId);
                    console.log(i), e.data.oppositeList.splice(o, 1), console.log(m), console.log(t.msgId), 
                    console.log(o), console.log(i), m.splice(-1 == m.indexOf(t.msgId) ? 0 : m.indexOf(t.msgId), 1);
                    for (var i = e.data.oppositeList, n = e.data.imgUrlArr, d = e.data.imgUrl, r = 0; r < e.data.contactList.listGroupHeaderUrl.length; r++) t.msgFrom != e.data.contactList.listGroupHeaderUrl[r].userId || (t.headerUrl = e.data.contactList.listGroupHeaderUrl[r].headerUrl);
                    t.msg = t.message, t.from = t.msgFrom, "GROUP_IMAGE" == t.msgType ? (d = t.msg.split("|"), 
                    t.msg = d[0], n.push(d[1]), t.bigImg = d[1], e.data.oppositeList.push(t)) : e.data.oppositeList.push(t), 
                    e.setData({
                        imgUrlArr: n,
                        msgIdArr: m
                    });
                })), null != i.data.list && i.data.list.length > 0 ? (g = i.data.list[i.data.list.length - 1].msgId, 
                console.log("msgId:" + g), e.pullMsg(g, 10, e)) : e.setData({
                    oppositeList: e.data.oppositeList,
                    scrollTop: e.data.scrollTop + 3e3
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
                heightFlag: !1,
                height: e.data.oldHeight,
                textMsg: t.detail.value.textarea
            }), console.log(e.data.role);
            var s = new Date().getTime(), i = {
                version: 1,
                operation: 5,
                seqId: s,
                data: {
                    to: e.data.sessionId,
                    from: e.data.teamMyUserId,
                    ctime: s,
                    msgType: "GROUP_TEXT",
                    msg: e.data.textMsg,
                    sessionId: e.data.sessionId,
                    role: e.data.role,
                    duration: 0
                }
            };
            console.log(i);
            var n = JSON.stringify(i);
            if (wx.sendSocketMessage({
                data: n,
                success: function(t) {}
            }), a.push({
                from: e.data.teamMyUserId,
                msgType: "GROUP_TEXT",
                msg: e.data.textMsg,
                ctime: o.toDate(s),
                seqId: s
            }), wx.removeStorageSync("contentText"), e.setData({
                oppositeList: a,
                textMsg: "",
                imgBoo: !0,
                scrollTop: e.data.scrollTop + 1e3
            }), wx.createSelectorQuery) {
                var d = wx.createSelectorQuery();
                d.select("#textarea_bottom").boundingClientRect(), d.exec(function(t) {
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
        var t = this, e = t.data.oppositeList, a = t.data.imgPath, s = t.data.imgUrl, i = t.data.imgUrlArr, n = new Date().getTime(), d = {
            version: 1,
            operation: 5,
            seqId: n,
            data: {
                to: t.data.sessionId,
                from: t.data.teamMyUserId,
                ctime: n,
                msgType: "GROUP_IMAGE",
                msg: a,
                sessionId: t.data.sessionId,
                role: t.data.role,
                duration: 0
            }
        }, r = JSON.stringify(d);
        console.log(t.data.imgUrl), wx.sendSocketMessage({
            data: r,
            success: function(t) {}
        }), s = s.split("|"), console.log(s), e.push({
            from: t.data.teamMyUserId,
            msgType: "GROUP_IMAGE",
            msg: s[0],
            ctime: o.toDate(n),
            bigImg: s[1],
            seqId: n
        }), i.push(s[1]), t.setData({
            oppositeList: e,
            imgUrlArr: i,
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
                    url: o.globalData.patient + "patient/askmed/upload/image",
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
        var e = this;
        wx.showModal({
            title: "确定要结束咨询吗？",
            confirmColor: "#3b4ca9",
            success: function(a) {
                a.confirm ? wx.request({
                    url: o.globalData.doctor + "doctor/advicemanage/medOrder/close",
                    data: {
                        sessionId: e.data.sessionId
                    },
                    success: function(a) {
                        if (200 == a.data.code) {
                            var o = {
                                version: 1,
                                operation: 13,
                                seqId: new Date().getTime(),
                                data: {
                                    to: e.data.sessionId,
                                    from: e.data.teamMyUserId,
                                    sessionId: e.data.sessionId,
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
                            }), wx.navigateBack({
                                delta: 1
                            }), clearInterval(t);
                        }
                    }
                }) : a.cancel;
            }
        });
    },
    backout: function(t) {
        var e = this, a = t.target.dataset.backmsg, o = this.data.seqIdArr.indexOf(a), s = t.target.dataset.index;
        console.log(o);
        var i = new Date().getTime();
        console.log(i - o), console.log(t), e.data.backoutFlag = !1, wx.showActionSheet({
            itemList: [ "撤回" ],
            success: function(t) {
                if (console.log(t.tapIndex), e.data.backoutFlag = !0, 0 == t.tapIndex) {
                    if (i - e.data.seqIdArr[o] > 12e4 || -1 == o) return void wx.showToast({
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
                            to: e.data.sessionId,
                            from: e.data.teamMyUserId,
                            msgType: "GROUP_IMAGE",
                            msgId: e.data.msgIdArr[o],
                            role: e.data.role
                        }
                    }, n = JSON.stringify(a);
                    wx.sendSocketMessage({
                        data: n,
                        success: function(t) {
                            var a = e.data.oppositeList;
                            a.splice(s, 1), e.setData({
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

var i = wx.getRecorderManager ? wx.getRecorderManager() : null, n = {
    duration: 6e4,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192e3,
    format: "mp3",
    frameSize: 50
}, d = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;