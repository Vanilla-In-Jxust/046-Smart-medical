var a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

Page({
    data: {
        name: "",
        background: [ "7dcafe", "65e4d3", "65e4d3", "7dcafe" ],
        background1: [ "6aaeff", "43cdd8", "43cdd8", "6aaeff" ],
        hiddenmodalput: !1,
        hiddenmodalput1: !1,
        creatername: "",
        Wshow: !1,
        _num: 0,
        xx: !1,
        grouping: !1,
        sumCount: 4,
        groups: [ (0, a.default)({
            groupId: 1,
            groupName: "小花",
            principal: "小强",
            count: 1,
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小红",
            remarkName: "心脏病"
        }, "principal", {
            doctorName: "斐叔"
        }), (0, a.default)({
            groupId: 1,
            groupName: "小花",
            principal: "小强",
            count: 1,
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小红",
            remarkName: "心脏病"
        }, "principal", {
            doctorName: "斐叔"
        }), (0, a.default)({
            groupId: 1,
            groupName: "小花",
            principal: "小强",
            count: 1,
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小红",
            remarkName: "心脏病"
        }, "principal", {
            doctorName: "斐叔"
        }), (0, a.default)({
            groupId: 1,
            groupName: "小花",
            principal: "小强",
            count: 1,
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小红",
            remarkName: "心脏病"
        }, "principal", {
            doctorName: "斐叔"
        }) ],
        UnbankedRegister: [ (0, a.default)({
            groupId: 1,
            groupName: "小花",
            principal: "小强",
            count: 1,
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小红",
            remarkName: "心脏病"
        }, "principal", {
            doctorName: "斐叔"
        }), (0, a.default)({
            groupId: 1,
            groupName: "小花",
            principal: "小强",
            count: 1,
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小红",
            remarkName: "心脏病"
        }, "principal", {
            doctorName: "斐叔"
        }) ]
    },
    assign: function(a) {
        1 == this.data.managerRole || 2 == this.data.managerRole ? (wx.setStorageSync("groupid", a.currentTarget.dataset.groupid), 
        wx.setStorageSync("groupname", a.currentTarget.dataset.groupname), wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/management2list/management2list"
        })) : wx.showToast({
            title: "暂无权限",
            icon: "none",
            duration: 2e3
        });
    },
    menuClick: function(a) {
        console.log(a.target.dataset), this.setData({
            _num: a.target.dataset.num,
            nmDisReason: a.target.dataset.text,
            cdDisReason: a.target.dataset.uuid
        });
    },
    wzconfirm: function(a) {
        var t = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: e.globalData.dic + "doctor/team/sign/break",
            data: {
                token: n,
                patientId: t.data.patientid,
                teamId: o,
                cdDisReason: t.data.cdDisReason,
                nmDisReason: t.data.nmDisReason
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log(a.data), 200 == a.data.code && (t.setData({
                    Wshow: !1
                }), t.onClock());
            }
        });
    },
    call: function(a) {
        this.setData({
            Wshow: !1
        });
    },
    shu: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/healthRecord/healthRecord"
        });
    },
    Wmovement: function(a) {
        console.log("移动，解约");
        var e = a.currentTarget.dataset.patientid, t = this;
        wx.showActionSheet({
            itemList: [ "移动到分组", "解除签约", "修改备注" ],
            success: function(n) {
                0 == n.tapIndex ? 1 == t.data.managerRole || 2 == t.data.managerRole ? (wx.setStorageSync("patientid", e), 
                wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/management1/management1"
                })) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 1 == n.tapIndex ? 1 == t.data.managerRole || 2 == t.data.managerRole ? t.setData({
                    Wshow: !0,
                    patientid: e
                }) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 2 == n.tapIndex && (wx.setStorageSync("patientid", a.currentTarget.dataset.patientid), 
                wx.setStorageSync("wznameModifier", a.currentTarget.dataset.name), wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/casControlname1/casControlname1"
                }));
            }
        });
    },
    clickanv: function(a) {
        console.log(a.currentTarget.dataset.name), wx.setStorageSync("groupid", a.currentTarget.dataset.groupid), 
        wx.setStorageSync("wzname", a.currentTarget.dataset.name), wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/management2/management2"
        });
    },
    seet: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/management/management"
        });
    },
    listnew: function(a) {
        var e = this;
        1 == e.data.managerRole || 2 == e.data.managerRole ? e.setData({
            hiddenmodalput: !0
        }) : wx.showToast({
            title: "暂无权限",
            icon: "none",
            duration: 2e3
        });
    },
    Winput: function(a) {
        console.log(a.detail.value), this.setData({
            name: a.detail.value
        });
    },
    Winputa: function(a) {
        console.log(a.detail.value), this.setData({
            namea: a.detail.value
        });
    },
    cancel: function() {
        this.setData({
            hiddenmodalput: !1
        });
    },
    confirm: function() {
        var a = this;
        if (wx.showLoading({
            title: "加载中",
            mask: !0
        }), "" == a.data.name) wx.showToast({
            title: "请设置分组名",
            icon: "none",
            duration: 2e3
        }); else {
            var t = wx.getStorageSync("log") || "", n = wx.getStorageSync("teamId") || "";
            wx.request({
                url: e.globalData.dic + "doctor/team/manage/group/add/" + t,
                data: {
                    groupName: a.data.name,
                    teamId: n
                },
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    console.log(e.data), a.setData({
                        hiddenmodalput: !1,
                        name: ""
                    }), wx.hideLoading(), a.onClock();
                }
            });
        }
    },
    cancela: function() {
        this.setData({
            hiddenmodalput1: !1
        });
    },
    confirma: function() {
        var a = this;
        if (wx.showLoading({
            title: "加载中",
            mask: !0
        }), "" == a.data.namea) wx.showToast({
            title: "请设置分组名",
            icon: "none",
            duration: 2e3
        }); else {
            var t = wx.getStorageSync("log") || "";
            wx.request({
                url: e.globalData.dic + "doctor/team/manage/group/update/" + t,
                data: {
                    groupName: a.data.namea,
                    groupId: a.data.groupid
                },
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    console.log(e.data), a.setData({
                        hiddenmodalput1: !1,
                        namea: ""
                    }), wx.hideLoading(), a.onClock();
                }
            });
        }
    },
    longTap: function(a) {
        var t = this;
        console.log(a), console.log(a.currentTarget.dataset.name), t.setData({
            creatername: a.currentTarget.dataset.name
        }), wx.showActionSheet({
            itemList: [ "解散分组", "分组重命名" ],
            success: function(n) {
                var o = wx.getStorageSync("log") || "", r = a.currentTarget.dataset.groupid;
                t.setData({
                    groupid: a.currentTarget.dataset.groupid
                }), 0 == n.tapIndex ? 1 == t.data.managerRole || 2 == t.data.managerRole ? wx.request({
                    url: e.globalData.dic + "doctor/team/manage/group/delete/" + o + "/" + r,
                    success: function(a) {
                        console.log(a), t.onClock();
                    }
                }) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 1 == n.tapIndex && (1 == t.data.managerRole || 2 == t.data.managerRole ? t.setData({
                    hiddenmodalput1: !0
                }) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }));
            }
        });
    },
    onClock: function(a) {
        var t = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: e.globalData.dic + "doctor/team/manage/list/patient/" + n + "/" + o,
            success: function(a) {
                console.log(a.data.data), t.setData({
                    groups: a.data.data.groups,
                    UnbankedRegister: a.data.data.unGroupPatientList,
                    managerRole: a.data.data.member.managerRole,
                    sumCount: a.data.data.sumCount
                }), a.data.data.groups.length <= 0 ? t.setData({
                    grouping: !0
                }) : t.setData({
                    grouping: !1
                }), a.data.data.unGroupPatientList.length <= 0 ? t.setData({
                    xx: !0
                }) : t.setData({
                    xx: !1
                }), wx.setStorageSync("managerRole", a.data.data.member.managerRole);
            }
        });
    },
    onLoad: function(a) {
        this.setData({
            teamId: wx.getStorageSync("teamId")
        });
        var t = this;
        wx.request({
            url: e.globalData.dicc + "dic/comdicbase",
            data: {
                code: 38e4
            },
            success: function(a) {
                console.log(a.data.data);
                var e = a.data.data, n = [], o = [];
                for (var r in e) n.push(e[r]), o.push(r);
                console.log(n[0]), t.setData({
                    text: n,
                    textID: o,
                    cdDisReason: o[0],
                    nmDisReason: n[0]
                });
            }
        }), t.onClock();
    },
    onShow: function() {
        this.onClock();
    },
    bindTouchStart: function(a) {
        this.startTime = a.timeStamp;
    },
    bindTouchEnd: function(a) {
        this.endTime = a.timeStamp;
    },
    onUnload: function() {
        wx.removeStorageSync("patientList"), wx.removeStorageSync("currentSaid");
    }
});