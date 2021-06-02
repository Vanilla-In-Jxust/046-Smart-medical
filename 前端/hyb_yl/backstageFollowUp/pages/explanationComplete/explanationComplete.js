var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), o = getApp(), s = 0;

Page({
    data: (0, e.default)({
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
        scrollTop: 2e3,
        msgIdArr: [],
        seqIdArr: [],
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
                    url: "/hyb_yl/index/healthRecord/healthRecord"
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
    onLoad: function(t) {
        var e = this;
        if (wx.createSelectorQuery) {
            var s = wx.createSelectorQuery();
            s.select("#mjltest").boundingClientRect(), s.exec(function(t) {
                console.log(t), e.setData({
                    text_height: t[0].height
                }), wx.getSystemInfo({
                    success: function(t) {
                        console.log(t.windowHeight), e.setData({
                            scroll_height: t.windowHeight - e.data.text_height
                        });
                    }
                });
            });
        } else e.setData({
            serviceFlag: !0
        }), wx.getSystemInfo({
            success: function(t) {
                console.log(t.windowHeight), e.setData({
                    scroll_height: t.windowHeight
                });
            }
        });
        console.log(t), e.setData({
            doctorId: t.doctorId,
            sessionId: t.sessionId,
            patientId: t.userId,
            token: wx.getStorageSync("log"),
            signType: t.signType,
            teamMyUserId: t.doctorId
        }), wx.setStorageSync("flag", 1), wx.setStorageSync("patientId", e.data.patientId), 
        a.default.getFirstMsg(e), wx.request({
            url: o.globalData.im + "chat/iplist",
            data: {
                token: e.data.token,
                to: e.data.doctorId,
                medType: e.data.signType
            },
            success: function(t) {
                console.log(t), 200 == t.data.code && (e.setData({
                    chatUrl: t.data.data.chatUrl
                }), e.socket(e));
            }
        }), wx.createInnerAudioContext && (i.onPlay(function() {
            console.log("开始播放"), e.data.oppositeList[e.data.playIndex] && (e.data.oppositeList[e.data.playIndex].playFlag = !0, 
            e.setData({
                oppositeList: e.data.oppositeList
            }));
        }), i.onError(function(t) {
            console.log(t.errMsg), console.log(t.errCode);
        }), i.onStop(function() {
            console.log("停止播放");
        }), i.onEnded(function() {
            console.log("播放完毕了"), e.data.oppositeList[e.data.playIndex] && (e.data.oppositeList[e.data.playIndex].playFlag = !1, 
            e.setData({
                oppositeList: e.data.oppositeList
            }));
        }));
    },
    toPlay: function(t) {
        if (i) {
            var e = this;
            console.log(t), t.currentTarget.dataset.index == this.data.playIndex || !this.data.playIndex && 0 != this.data.playIndex || e.data.oppositeList[e.data.playIndex] && (e.data.oppositeList[e.data.playIndex].playFlag = !1, 
            e.setData({
                oppositeList: e.data.oppositeList
            })), this.data.playIndex = t.currentTarget.dataset.index, i.src = t.currentTarget.dataset.src, 
            this.data.oppositeList[this.data.playIndex].playFlag ? (i.stop(), e.data.oppositeList[e.data.playIndex].playFlag = !1, 
            e.setData({
                oppositeList: e.data.oppositeList
            })) : i.play();
        } else wx.showModal({
            content: "您当前微信版本过低，暂不支持语音功能，请更新微信版本后重试",
            showCancel: !1,
            confirmColor: "#3b4ca9",
            confirmText: "我知道了"
        });
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
                    to: e.data.patientId
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
                200 == i.data.code && (e.setData({
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
                var n = e.data.oppositeList, l = e.data.imgUrlArr, d = e.data.imgUrl;
                console.log(i.data), i.data.ctime = o.toDate(i.data.ctime), "SINGLE_IMAGE" == i.data.msgType ? (d = i.data.msg.split("|"), 
                i.data.msg = d[0], i.data.bigImg = d[1], l.push(d[1]), e.setData({
                    imgUrlArr: l
                }), n.push(i.data), e.setData({
                    oppositeList: n,
                    scrollTop: e.data.scrollTop + 1e3
                })) : (n.push(i.data), console.log(n), e.setData({
                    oppositeList: n,
                    scrollTop: e.data.scrollTop + 1e3
                }), console.log(e.data.oppositeList));
                var r = {
                    version: 1,
                    operation: 7,
                    seqId: new Date().getTime(),
                    data: {
                        to: i.data.from,
                        msgId: i.data.msgId
                    }
                }, c = JSON.stringify(r);
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
                var u = [];
                null != i.data.list && (u = i.data.list, console.log(i.data.list), u.forEach(function(t, a) {
                    var o = e.data.oppositeList, i = e.data.imgUrlArr, n = e.data.imgUrl;
                    console.log(s), 0 == a && 0 == s && (t.parting = 1), s++, t.msg = t.message, t.from = t.msgFrom, 
                    "SINGLE_IMAGE" == t.msgType ? (n = t.msg.split("|"), t.msg = n[0], i.push(n[1]), 
                    t.bigImg = n[1], o.push(t)) : o.push(t), e.setData({
                        oppositeList: o,
                        imgUrlArr: i,
                        scrollTop: e.data.scrollTop + 2e3
                    });
                })), null != i.data.list && i.data.list.length > 0 ? (g = i.data.list[i.data.list.length - 1].msgId, 
                console.log("msgId:" + g), e.pullMsg(g, 10, e)) : (wx.closeSocket({
                    success: function(t) {
                        console.log(t);
                    }
                }), wx.onSocketClose(function(e) {
                    console.log("WebSocket 已关闭！"), console.log(e), clearInterval(t);
                }));
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
    onUnload: function() {
        wx.closeSocket({
            success: function(t) {
                console.log(t);
            }
        }), wx.onSocketClose(function(e) {
            console.log("WebSocket 已关闭！"), console.log(e), clearInterval(t);
        });
    },
    scrolltoupper: function() {
        a.default.scrolltoupper(this);
    },
    onReady: function() {},
    onShow: function() {
        s = 0;
    }
});

var i = wx.createInnerAudioContext ? wx.createInnerAudioContext() : null;