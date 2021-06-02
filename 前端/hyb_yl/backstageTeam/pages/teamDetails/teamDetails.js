var t = getApp();

Page({
    data: {
        windowWidth: 0,
        windowHeight: 0,
        t_status: !1,
        isopera: !1
    },
    teamPerson: function() {
        var a = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/teamPerson/teamPerson?id=" + a
        });
    },
    fuwu: function() {
        var a = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/openservice/openservice?id=" + a
        });
    },
    nodes: function() {
        var a = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/notice/notice?id=" + a
        });
    },
    ishaibao: function() {
        this.setData({
            isopera: !0
        }), this.sharecon();
    },
    closeshare: function() {
        this.setData({
            isopera: !1
        });
    },
    sharecon: function() {
        var a = this;
        a.setData({
            t_status: !0
        }), wx.showLoading({
            title: "请等待"
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowWidth: t.screenWidth,
                    windowHeight: t.screenHeight
                });
            }
        }), console.log(a.data.info);
        var t = a.data.info.rule.background, e = a.data.info.rule.thumb, i = a.data.info.erweima, o = a.data.info.advertisement, n = a.data.info.fuze.z_name + "(" + a.data.info.fuze.keshi + a.data.info.fuze.zhicheng + ")", s = a.data.info.fuze.jigou;
        wx.getImageInfo({
            src: t,
            success: function(t) {
                console.log(t);
                var d = t.path, c = wx.createCanvasContext("canvass");
                wx.getImageInfo({
                    src: e,
                    success: function(t) {
                        wx.getImageInfo({
                            src: i,
                            success: function(t) {
                                var e = t.path;
                                wx.getImageInfo({
                                    src: o,
                                    success: function(t) {
                                        t.path;
                                        var i = t.path;
                                        c.drawImage(d, 0, 0, .9 * a.data.windowWidth, .8 * a.data.windowWidth * 1.79), c.drawImage(i, (.9 * a.data.windowWidth - .75 * a.data.windowWidth) / 2, (.25 * a.data.windowWidth * 1 + .1 * a.data.windowWidth) / 2, .65 * a.data.windowWidth, .8 * a.data.windowWidth), 
                                        c.font = "12px bold 黑体", c.fillStyle = "#fff", c.textAlign = "center", c.textBaseline = "middle", 
                                        c.fillText("拥有自己专属的品牌页面", (.9 * a.data.windowWidth - .1 * a.data.windowWidth) / 2, 50), 
                                        c.font = "13px bold 黑体", c.fillStyle = "#333", c.textAlign = "center", c.textBaseline = "middle", 
                                        c.fillText(n, (.9 * a.data.windowWidth - .1 * a.data.windowWidth) / 2, 175), c.font = "12px bold 黑体", 
                                        c.fillStyle = "#333", c.textAlign = "center", c.textBaseline = "middle", c.fillText(s, (.9 * a.data.windowWidth - .1 * a.data.windowWidth) / 2, 200), 
                                        c.drawImage(o, .9 * a.data.windowWidth / 2 - 50, 90, 60, 60), c.drawImage(e, .9 * a.data.windowWidth / 2 - 80, 250, 120, 120), 
                                        wx.hideLoading(), a.setData({
                                            t_status: !0
                                        }), setTimeout(function() {
                                            c.draw();
                                        }, 100);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    operation: function() {
        var a = this;
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvasId: "canvass",
            success: function(t) {
                console.log(t), wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.showToast({
                            title: "保存成功"
                        }), setTimeout(function() {
                            a.setData({
                                t_status: !1,
                                isopera: !1
                            });
                        }, 1e3);
                    }
                });
            }
        });
    },
    onLoad: function(a) {
        var t = a.id;
        this.setData({
            id: t
        }), this.getDetail();
    },
    getDetail: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/team.detail",
            data: {
                id: a.data.id,
                zid: wx.getStorageSync("zid")
            },
            success: function(t) {
                a.setData({
                    info: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    tapFlag: function() {
        console.log(111), this.setData({
            teamDescFlag: !this.data.teamDescFlag
        }), this.data.teamDescFlag ? this.setData({
            downFlag: !1
        }) : this.setData({
            downFlag: !0
        });
    },
    serve: function(a) {
        var t = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/category/category?id=" + t
        });
    },
    qianyue: function(a) {
        var t = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/patientman/patientman?id=" + t
        });
    },
    list: function(a) {
        var t = this.data.teampic, e = this.data.t_id, i = this.data.zid, o = this.data.teamtext, n = this.data.teamname, s = this.data.z_name, d = this.data.z_thumbs;
        1 == this.data.yaoqing ? wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/list/list?teampic=" + t + "&t_id=" + e + "&zid=" + i + "&teamtext=" + o + "&teamname=" + n + "&z_name=" + s + "&z_thumbs=" + d + "&yaoqing=" + this.data.yaoqing
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/list/list?teampic=" + t + "&t_id=" + e + "&zid=" + i + "&teamtext=" + o + "&teamname=" + n + "&z_name=" + s + "&z_thumbs=" + d
        });
    },
    clickname: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/teamDetails1/teamDetails1?teamName=" + this.data.detailList.teamName
        });
    },
    clicknameText: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/teamDetails2/teamDetails2?briefIntroduce=" + this.data.detailList.teamDesc
        });
    },
    member: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/teamDetails3/teamDetails3"
        });
    },
    Wimg: function(t) {
        var e = this, i = (wx.getStorageSync("log"), wx.getStorageSync("teamId") || "");
        wx.chooseImage({
            count: 1,
            sizeType: [ "orignal", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                console.log(t.tempFilePaths[0]), e.setData({
                    img: t.tempFilePaths[0]
                });
                var o = wx.getStorageSync("log") || "";
                wx.uploadFile({
                    url: a.globalData.dic + "doctor/team/update/" + o,
                    filePath: t.tempFilePaths[0],
                    name: "file",
                    formData: {
                        teamId: i,
                        flag: 1
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(t) {
                        console.log(t), wx.request({
                            url: a.globalData.dic + "doctor/team/detail/" + e.data.token + "/" + e.data.teamId,
                            success: function(a) {
                                if (console.log(a), 200 == a.data.code) {
                                    wx.hideLoading();
                                    var t = a.data.data.createTime.split(" ");
                                    a.data.data.createTime = t[0], e.setData({
                                        detailList: a.data.data,
                                        img: a.data.data.teamHeaderUrl
                                    }), console.log(e.data.detailList);
                                }
                            }
                        });
                    }
                });
            }
        });
    },
    navCode: function(t) {
        var e = this.data.t_id, i = this.data.z_thumbs, o = this.data.z_name;
        a.util.request({
            url: "entry/wxapp/Studio.teamerweima",
            data: {
                t_id: e
            },
            success: function(a) {
                console.log(a);
                var t = a.data.tderweima, e = JSON.stringify(a.data);
                wx.navigateTo({
                    url: "/hyb_yl/backstageTeam/pages/teamDetails4/teamDetails4?info=" + e + "&tderweima=" + t + "&z_name=" + o + "&z_thumbs=" + i
                });
            }
        });
    },
    shanchu: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.dic + "doctor/team/getTeamUnfinishedOrder",
            data: {
                teamId: e.data.teamId
            },
            success: function(t) {
                console.log(), t.data.data ? wx.showModal({
                    title: "请先结束未完成咨询！",
                    showCancel: !1,
                    confirmColor: "#3b4ca9",
                    confirmText: "取消",
                    success: function(a) {
                        a.confirm || a.cancel;
                    }
                }) : wx.showModal({
                    title: "提示",
                    content: "您确认解散团队吗？",
                    success: function(t) {
                        t.confirm ? wx.request({
                            url: a.globalData.dic + "doctor/team/break",
                            data: {
                                token: e.data.token,
                                teamId: e.data.teamId
                            },
                            method: "POST",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                if (console.log(a.data), 200 == a.data.code) {
                                    if (1 == e.data.groupFlag) return void wx.navigateBack({
                                        delta: 3
                                    });
                                    wx.navigateBack({
                                        delta: 2
                                    });
                                }
                            }
                        }) : t.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    shanchu1: function(t) {
        var e = this;
        wx.showModal({
            title: "提示",
            content: "您确认退出团队吗？",
            success: function(t) {
                t.confirm ? wx.request({
                    url: a.globalData.dic + "doctor/team/quit/" + e.data.token + "/" + e.data.teamId,
                    success: function(a) {
                        if (console.log(a.data.code), 200 == a.data.code) {
                            if (1 == e.data.groupFlag) return void wx.navigateBack({
                                delta: 3
                            });
                            wx.navigateBack({
                                delta: 2
                            });
                        }
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    invitation: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/teamDetails5/teamDetails5"
        });
    },
    entersubmit: function(t) {
        var e = this, i = t.detail.target.id, o = e.data.yao_id, n = t.detail.formId, s = e.data.t_id;
        a.util.request({
            url: "entry/wxapp/UserFormId",
            data: {
                form_id: n,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), a.util.request({
                    url: "entry/wxapp/Yaoqing",
                    data: {
                        yao_type: i,
                        yao_id: o,
                        t_id: s,
                        op: "entryyao"
                    },
                    success: function(a) {
                        console.log(a), 0 == a.data ? 1 == i ? (wx.showToast({
                            title: "同意成功",
                            icon: "none",
                            duration: 2e3
                        }), e.setData({
                            type: 1
                        })) : wx.showToast({
                            title: "拒绝成功",
                            icon: "none",
                            duration: 2e3
                        }) : 1 == i ? (wx.showToast({
                            title: "同意成功",
                            icon: "none",
                            duration: 2e3
                        }), e.setData({
                            type: 1
                        })) : wx.showToast({
                            title: "拒绝成功",
                            icon: "none",
                            duration: 2e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.reLaunch({
                                        url: "/hyb_yl/tabBar/index/index"
                                    });
                                }, 2e3);
                            }
                        });
                    }
                });
            }
        });
    },
    getMyiftongyi: function() {
        var t = this, e = t.data.t_id;
        a.util.request({
            url: "entry/wxapp/Yaoqing",
            data: {
                t_id: e,
                openid: wx.getStorageSync("openid"),
                op: "ifduiz"
            },
            success: function(a) {
                console.log(a), 1 == a.data ? t.setData({
                    type: 0
                }) : t.setData({
                    type: 1
                });
            }
        });
    }
});