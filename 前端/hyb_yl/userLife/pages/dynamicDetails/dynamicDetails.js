var t, a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), n = getApp(), i = require("../../../../utils/util.js");

Page({
    data: (t = {
        oldHeight: 50,
        pl_pic: [],
        data_arr: [],
        height: 50,
        urlArr: [],
        page: 0,
        prenumber: 10,
        listPatientBbsReplyVO: [],
        bigFilePath: "",
        smallFilePath: "",
        comFlag: !1,
        loadingBoo: !0,
        moreBoo: !0,
        scrollTop: 0,
        topFlag: !1,
        rcontent: "",
        huifuindex: "",
        addFlag: !0,
        imgUrlList: [],
        detailList: {},
        currindex: 0
    }, (0, a.default)(t, "listPatientBbsReplyVO", []), (0, a.default)(t, "dianj", 0), 
    t),
    xiugai: function(t) {
        console.log(t);
    },
    linechange: function(t) {
        console.log(t);
        var a = this, e = a.data.oldHeight;
        a.data.height, t.detail.lineCount > 4 || (t.detail.heightRpx > e ? a.setData({
            height: t.detail.heightRpx
        }) : a.setData({
            height: e
        }));
    },
    chooseImage: function(t) {
        var a = this, n = a.data.urlArr, i = this.data.imgUrlList;
        i.length >= 9 ? a.setData({
            addFlag: !1
        }) : e.default.chooseimageTwo(a, i, n), console.log(t);
    },
    delImage: function(t) {
        var a = this.data.imgUrlList, n = t.target.dataset.index;
        e.default.delImg(this, n, a);
    },
    previewImage: function(t) {
        var a = this.data.imgUrlList, e = t.target.dataset.imgindex;
        (0).previewImage(t, a, e);
    },
    previewImg: function(t) {
        console.log(t);
        var a = t.target.dataset.src, e = [];
        e.push(a), wx.previewImage({
            current: a,
            urls: e
        });
    },
    criticImage: function(t) {
        var a = this.data.listPatientBbsReplyVO, e = t.target.dataset.imgindex, n = t.currentTarget.dataset.ruid;
        a && a.forEach(function(t) {
            if (t.rid == n) return a = t.estimatePicBigUrl, !1;
        }), (0).previewImage(t, a, e);
    },
    goComment: function(t) {
        console.log(t);
        var a = this.data.a_id, e = this.data.comFlag;
        this.setData({
            comFlag: !e,
            a_id: a
        });
    },
    getText: function(t) {
        this.setData({
            rcontent: t.detail.value
        });
    },
    sendBtn: function(t) {
        var a = this, e = a.data.avatarUrl, i = a.data.imgUrlList, o = t.currentTarget.dataset.adminopenid, r = (i.length, 
        a.data.token, a.data.pl_id);
        if (console.log(r), r) {
            console.log("回复");
            s = "reply", l = r;
            a.setData({
                reviewCommentsFlag: !1,
                replyFlag: !1
            });
        } else {
            console.log("楼主");
            var s = "comment", l = 0;
            a.setData({
                comFlag: !1
            });
        }
        a.data.imgUrlList;
        var d = a.data.a_id, c = (a.data.rcontent, n.siteInfo.uniacid, a.data.data_arr, 
        wx.getStorageSync("openid")), u = a.data.nickName;
        if (o == c) var g = 1; else g = 0;
        var p = a.data.data_arr;
        n.util.request({
            url: "entry/wxapp/share.pinglunadd",
            data: {
                pl_content: a.data.rcontent,
                adminopenid: o,
                useropenid: c,
                a_id: d,
                data_arr1: p,
                types: 0,
                usertoux: e,
                name: u,
                author: g,
                replyType: s,
                parentid: l
            },
            success: function(t) {
                console.log(t), a.getAllpinglun(d);
            }
        });
    },
    toLike: function(t) {
        var a = this, e = a.data.dianzan, i = a.data.a_id;
        console.log(e), 0 == e ? n.util.request({
            url: "entry/wxapp/share.userdianz",
            data: {
                op: "dianzan",
                parentid: i,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                wx.showToast({
                    title: "点赞成功",
                    icon: "none",
                    duration: 1500,
                    success: function() {
                        a.setData({
                            dianzan: 1
                        });
                    }
                });
            }
        }) : wx.showToast({
            title: "点赞是严肃的，不可以反悔哦！",
            icon: "none",
            duration: 1500
        });
    },
    moreState: function() {},
    bindscroll: function(t) {},
    toTop: function(t) {
        this.setData({
            topFlag: !1,
            scrollTop: 0
        });
    },
    remove: function(t) {
        var a = this.data.a_id;
        wx.showModal({
            title: "确认删除动态吗",
            confirmColor: "#3b4ca9",
            success: function(t) {
                t.confirm && n.util.request({
                    url: "entry/wxapp/share.deletecontent",
                    data: {
                        a_id: a
                    },
                    success: function(t) {
                        console.log(t), wx.showToast({
                            title: "删除成功",
                            icon: "none",
                            duration: 2e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        detail: 1
                                    });
                                }, 2e3);
                            }
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        var a = this, e = t.a_id, o = i.formatTime(new Date()), r = wx.getStorageSync("color"), s = wx.getStorageSync("userInfo"), l = wx.getStorageSync("openid");
        if (s.u_thumb) var d = s.u_thumb, c = s.u_name; else d = s.avatarUrl, c = s.nickName;
        console.log(s), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), a.setData({
            a_id: e,
            userInfo: s,
            avatarUrl: d,
            time: o,
            bgc: r,
            nickName: c,
            useropenid: l
        }), n.util.request({
            url: "entry/wxapp/share.addliulannum",
            data: {
                a_id: e
            }
        }), n.util.request({
            url: "entry/wxapp/share.datainfo",
            data: {
                a_id: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t.data), a.setData({
                    detailList: t.data,
                    dianzan: t.data.dianzan
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.getAllpinglun();
        var u = n.siteInfo.uniacid;
        n.util.request({
            url: "entry/wxapp/share.url",
            cachetime: "0",
            success: function(t) {
                console.log(t), a.setData({
                    url: t.data,
                    uniacid: u
                });
            }
        });
    },
    onReady: function() {},
    reviewComments: function(t) {
        console.log(t), this.data.pl_id = t.currentTarget.dataset.pl_id, this.data.toUid = t.currentTarget.dataset.toid, 
        this.data.comment = "comment", console.log("回复你"), this.setData({
            reviewCommentsFlag: !0,
            comFlag: !1,
            rcontent: "",
            huifuindex: t.currentTarget.dataset.index
        });
    },
    removepl: function(t) {
        var a = this, e = t.currentTarget.dataset.pl_id, i = a.data.a_id;
        wx.showModal({
            content: "确定删除该评论？",
            success: function(t) {
                t.confirm && n.util.request({
                    url: "entry/wxapp/share.deletepl",
                    data: {
                        pl_id: e
                    },
                    success: function(t) {
                        console.log(t), a.getAllpinglun(i);
                    }
                });
            }
        });
    },
    reply: function(t) {
        this.data.comment = "reply", this.data.commentId = t.currentTarget.dataset.commentid, 
        this.data.pl_id = t.currentTarget.dataset.pl_id, this.data.huifuindex = t.currentTarget.dataset.index, 
        this.data.toUid = t.currentTarget.dataset.toid, this.setData({
            replyFlag: !0,
            comFlag: !1,
            rcontent: "",
            byReplyName: t.currentTarget.dataset.name
        });
    },
    mask: function() {
        this.setData({
            reviewCommentsFlag: !1,
            replyFlag: !1,
            huifuindex: ""
        });
    },
    removeBtn: function(t) {
        console.log(t);
        var a = this, e = (t.currentTarget.dataset.index, t.currentTarget.dataset.pl_id), i = a.data.a_id;
        wx.showModal({
            content: "确定删除该评论吗？",
            success: function(t) {
                t.confirm && (n.util.request({
                    url: "entry/wxapp/share.deletepl",
                    data: {
                        pl_id: e
                    },
                    success: function(t) {
                        console.log(t), a.getAllpinglun(i);
                    }
                }), wx.showToast({
                    title: "删除成功",
                    icon: "none",
                    duration: 2e3
                }));
            }
        });
    },
    commentEach: function(t) {
        var a = this;
        wx.request({
            url: n.globalData.patient + "patient/reply/savePatBbsReplyReply",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                rid: a.data.commentId,
                replyType: t,
                content: a.data.rcontent,
                toUid: a.data.toUid,
                token: a.data.token
            },
            success: function(t) {
                a.setData({
                    reviewCommentsFlag: !1,
                    replyFlag: !1,
                    rcontent: "",
                    moreBoo: !0,
                    page: 0
                }), e.default.getDetails(a, 0);
            }
        });
    },
    changeList: function(t) {
        console.log(t), this.data.fatherIndex = t.currentTarget.dataset.index, this.data.ruid = t.currentTarget.dataset.ruid;
    },
    lookMore: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index;
        this.data.listPatientBbsReplyVO[a].allFlag = !0, this.data.listPatientBbsReplyVO[a].listPatientBbsReplyReplyVO.forEach(function(t) {
            t.hideFlag = !0;
        }), this.setData({
            listPatientBbsReplyVO: this.data.listPatientBbsReplyVO
        });
    },
    getAllpinglun: function() {
        var t = this, a = t.data.a_id;
        n.util.request({
            url: "entry/wxapp/share.allpinglunlist",
            data: {
                a_id: a
            },
            success: function(a) {
                console.log(a), t.setData({
                    listPatientBbsReplyVO: a.data
                });
            }
        });
    }
});