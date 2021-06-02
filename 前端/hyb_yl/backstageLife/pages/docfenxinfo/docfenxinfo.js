var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/toot.js")), i = getApp(), n = require("../../../../utils/util.js");

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
    }, (0, e.default)(t, "listPatientBbsReplyVO", []), (0, e.default)(t, "dianj", 0), 
    t),
    xiugai: function(t) {
        console.log(t);
    },
    linechange: function(t) {
        console.log(t);
        var e = this, a = e.data.oldHeight;
        e.data.height, t.detail.lineCount > 4 || (t.detail.heightRpx > a ? e.setData({
            height: t.detail.heightRpx
        }) : e.setData({
            height: a
        }));
    },
    chooseImage: function(t) {
        var e = this, i = e.data.urlArr, n = this.data.imgUrlList;
        n.length >= 9 ? e.setData({
            addFlag: !1
        }) : a.default.chooseimageTwo(e, n, i), console.log(t);
    },
    delImage: function(t) {
        var e = this.data.imgUrlList, i = t.target.dataset.index;
        a.default.delImg(this, i, e);
    },
    previewImage: function(t) {
        var e = this.data.imgUrlList, a = t.target.dataset.imgindex;
        (0).previewImage(t, e, a);
    },
    previewImg: function(t) {
        console.log(t);
        var e = t.target.dataset.src, a = [];
        a.push(e), wx.previewImage({
            current: e,
            urls: a
        });
    },
    criticImage: function(t) {
        var e = this.data.listPatientBbsReplyVO, a = t.target.dataset.imgindex, i = t.currentTarget.dataset.ruid;
        e && e.forEach(function(t) {
            if (t.rid == i) return e = t.estimatePicBigUrl, !1;
        }), (0).previewImage(t, e, a);
    },
    goComment: function(t) {
        console.log(t);
        var e = this.data.a_id, a = this.data.comFlag;
        this.setData({
            comFlag: !a,
            a_id: e
        });
    },
    getText: function(t) {
        this.setData({
            rcontent: t.detail.value
        });
    },
    sendBtn: function(t) {
        var e = this, a = e.data.z_thumbs, n = e.data.imgUrlList, o = t.currentTarget.dataset.adminopenid, r = (n.length, 
        e.data.token, e.data.listPatientBbsReplyVO), s = e.data.huifuindex;
        if (e.data.pl_id) {
            var l = e.data.pl_id;
            console.log(l);
            var d = {
                fromUid: 1,
                rid: 1,
                id: 1,
                fromUidName: e.data.z_name,
                content: e.data.rcontent,
                replyType: "comment",
                hideFlag: 6
            };
            r[s].listPatientBbsReplyReplyVO.push(d), e.setData({
                listPatientBbsReplyVO: r,
                reviewCommentsFlag: !1
            });
            var c = "reply", u = e.data.pl_id;
        } else c = "comment", u = 0;
        e.data.imgUrlList;
        var g = e.data.a_id, p = (e.data.rcontent, i.siteInfo.uniacid, e.data.data_arr, 
        wx.getStorageSync("openid")), m = e.data.z_name;
        if (o == p) var h = 1; else h = 0;
        if (e.data.comFlag) {
            var f = {
                userIcon: a,
                author: h,
                name: e.data.z_name,
                rtimeDay: e.data.time,
                rid: 1,
                ruid: 1,
                rcontent: e.data.rcontent,
                estimatePicSmallUrl: e.data.imgUrlList,
                listPatientBbsReplyReplyVO: [],
                allFlag: 1
            };
            r.push(f), e.setData({
                listPatientBbsReplyVO: r,
                comFlag: !1,
                imgUrlList: []
            });
        }
        var y = e.data.data_arr;
        i.util.request({
            url: "entry/wxapp/share.pinglunadd",
            data: {
                pl_content: e.data.rcontent,
                adminopenid: o,
                useropenid: p,
                a_id: g,
                data_arr1: y,
                types: 0,
                usertoux: a,
                name: m,
                author: h,
                replyType: c,
                parentid: u
            },
            success: function(t) {
                console.log(t), e.getAllpinglun(g);
            }
        });
    },
    toLike: function(t) {
        var e = this, a = (t.currentTarget.dataset.index, t.currentTarget.dataset.status, 
        t.currentTarget.dataset.status), n = e.data.a_id;
        0 == a ? i.util.request({
            url: "entry/wxapp/share.userdianz",
            data: {
                op: "dianzan",
                parentid: n,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), e.setData({
                    dianj: 1
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
        var e = this.data.a_id;
        wx.showModal({
            title: "确认删除动态吗",
            confirmColor: "#3b4ca9",
            success: function(t) {
                t.confirm && i.util.request({
                    url: "entry/wxapp/share.deletecontent",
                    data: {
                        a_id: e
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
        var e = this, a = t.a_id, o = n.formatTime(new Date()), r = wx.getStorageSync("color"), s = wx.getStorageSync("userInfo"), l = wx.getStorageSync("openid");
        console.log(s), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: r
        }), e.setData({
            a_id: a,
            userInfo: s,
            time: o,
            bgc: r,
            useropenid: l
        }), this.getIfoverdian(), this.getAllpinglun(), i.util.request({
            url: "entry/wxapp/share.datainfo",
            data: {
                a_id: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    detailList: t.data,
                    z_thumbs: t.data.z_thumbs,
                    z_name: t.data.z_name
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
        var d = i.siteInfo.uniacid;
        i.util.request({
            url: "entry/wxapp/share.url",
            cachetime: "0",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data,
                    uniacid: d
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
        var e = this, a = t.currentTarget.dataset.pl_id, n = e.data.a_id;
        wx.showModal({
            content: "确定删除该评论？",
            success: function(t) {
                t.confirm && i.util.request({
                    url: "entry/wxapp/share.deletepl",
                    data: {
                        pl_id: a
                    },
                    success: function(t) {
                        console.log(t), e.getAllpinglun(n);
                    }
                });
            }
        });
    },
    reply: function(t) {
        this.data.comment = "reply", this.data.commentId = t.currentTarget.dataset.commentid, 
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
        var e = this, a = (t.currentTarget.dataset.index, t.currentTarget.dataset.pl_id), n = e.data.a_id;
        wx.showModal({
            content: "确定删除该评论吗？",
            success: function(t) {
                t.confirm && (i.util.request({
                    url: "entry/wxapp/share.deletepl",
                    data: {
                        pl_id: a
                    },
                    success: function(t) {
                        console.log(t), e.getAllpinglun(n);
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
        var e = this;
        wx.request({
            url: i.globalData.patient + "patient/reply/savePatBbsReplyReply",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                rid: e.data.commentId,
                replyType: t,
                content: e.data.rcontent,
                toUid: e.data.toUid,
                token: e.data.token
            },
            success: function(t) {
                e.setData({
                    reviewCommentsFlag: !1,
                    replyFlag: !1,
                    rcontent: "",
                    moreBoo: !0,
                    page: 0
                }), a.default.getDetails(e, 0);
            }
        });
    },
    changeList: function(t) {
        console.log(t), this.data.fatherIndex = t.currentTarget.dataset.index, this.data.ruid = t.currentTarget.dataset.ruid;
    },
    lookMore: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index;
        this.data.listPatientBbsReplyVO[e].allFlag = !0, this.data.listPatientBbsReplyVO[e].listPatientBbsReplyReplyVO.forEach(function(t) {
            t.hideFlag = !0;
        }), this.setData({
            listPatientBbsReplyVO: this.data.listPatientBbsReplyVO
        });
    },
    getAllpinglun: function() {
        var t = this, e = t.data.a_id;
        i.util.request({
            url: "entry/wxapp/share.alllist",
            data: {
                a_id: e
            },
            success: function(e) {
                console.log(e), t.setData({
                    listPatientBbsReplyVO: e.data
                });
            }
        });
    },
    getIfoverdian: function() {
        var t = this, e = t.data.a_id;
        i.util.request({
            url: "entry/wxapp/share.user_if_dianz",
            data: {
                a_id: e,
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                console.log(e), 1 == e.data && t.setData({
                    dianj: 1
                });
            }
        });
    }
});