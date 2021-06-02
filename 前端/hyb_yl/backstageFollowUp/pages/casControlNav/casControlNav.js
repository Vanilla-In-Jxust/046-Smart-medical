var t = getApp();

Page({
    data: {
        hiddenmodalput: !0,
        nameInput: "",
        _num: 0,
        Wshow: !1,
        cdDisReason: "",
        nmDisReason: "",
        arr: []
    },
    onLoad: function(t) {
        var a = t.fenzuid, e = t.zid;
        this.setData({
            fenzuid: a,
            zid: e
        });
    },
    onReady: function() {
        this.getAllfenzuuser();
    },
    menuClick: function(t) {
        console.log(t.target.dataset), this.setData({
            _num: t.target.dataset.num,
            nmDisReason: t.target.dataset.text,
            cdDisReason: t.target.dataset.uuid
        });
    },
    Wconfirm: function(a) {
        var e = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("patientid") || "";
        wx.request({
            url: t.globalData.dic + "doctor/sign/break/" + n + "/" + o,
            data: {
                cdDisReason: e.data.cdDisReason,
                nmDisReason: e.data.nmDisReason
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), 200 == t.data.code && (e.setData({
                    Wshow: !1
                }), e.onClock());
            }
        });
    },
    Wcall: function(t) {
        this.setData({
            Wshow: !1
        });
    },
    shu: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/healthRecord/healthRecord"
        });
    },
    nameInput: function(t) {
        this.setData({
            nameInput: t.detail.value
        });
    },
    cancel: function() {
        this.setData({
            hiddenmodalput: !0
        });
    },
    confirm: function() {
        var a = this, e = wx.getStorageSync("log") || "", n = wx.getStorageSync("creater") || "", o = wx.getStorageSync("groupid") || "";
        a.setData({
            hiddenmodalput: !0
        }), console.log(a.data.nameInput), wx.request({
            url: t.globalData.dic + "doctor/manage/group/update/" + e,
            data: {
                groupName: a.data.nameInput,
                creater: n,
                groupId: o
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), a.setData({
                    name: a.data.nameInput
                });
            }
        });
    },
    sectionalizationImg: function(a) {
        var e = this;
        wx.getStorageSync("log"), wx.showActionSheet({
            itemList: [ "重命名分组", "解散分组" ],
            success: function(a) {
                console.log(a.tapIndex), 0 == a.tapIndex ? e.setData({
                    hiddenmodalput: !e.data.hiddenmodalput
                }) : wx.showModal({
                    title: "解散分组",
                    content: "确认解散分组吗？",
                    success: function(a) {
                        if (a.confirm) {
                            var e = wx.getStorageSync("log") || "", n = wx.getStorageSync("groupid") || "";
                            wx.request({
                                url: t.globalData.dic + "doctor/manage/group/delete/" + e + "/" + n,
                                success: function(t) {
                                    console.log(t.data), wx.navigateBack({
                                        delta: 1
                                    });
                                }
                            });
                        } else a.cancel;
                    }
                });
            }
        });
    },
    sectionalizationImg1: function(a) {
        var e = this, n = e.data.zid, o = a.currentTarget.dataset.q_id, s = a.currentTarget.dataset.name, i = a.currentTarget.dataset.u_id;
        wx.showActionSheet({
            itemList: [ "移出分组", "移动到其他分组", "解除签约", "修改备注" ],
            success: function(c) {
                0 == c.tapIndex ? t.util.request({
                    url: "entry/wxapp/docuser.Addfenzu",
                    data: {
                        q_id: o,
                        op: "yidongfenz"
                    },
                    success: function(t) {
                        console.log(t);
                        var a = getCurrentPages();
                        a[a.length - 2].setData({
                            type: 1
                        }), wx.showToast({
                            title: "移出分组成功",
                            icon: "none",
                            duration: 1e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 2e3);
                            }
                        });
                    }
                }) : 1 == c.tapIndex ? wx.navigateTo({
                    url: "/hyb_yl/backstageFollowUp/pages/casControlmovement/casControlmovement?u_id=" + i + "&zid=" + n + "&id=" + id + "&types=2"
                }) : 2 == c.tapIndex ? e.setData({
                    Wshow: !0
                }) : 3 == c.tapIndex && (wx.setStorageSync("wznameModifier", a.currentTarget.dataset.name), 
                wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/casControlname/casControlname?beizhu=" + s + "&id=" + id
                }));
            }
        });
    },
    onShow: function(t) {
        var a = getCurrentPages();
        1 == a[a.length - 1].data.type && this.getAllfenzuuser();
    },
    onClock: function(a) {
        var e = this, n = wx.getStorageSync("name") || "";
        e.setData({
            name: n
        });
        var o = wx.getStorageSync("log") || "", s = wx.getStorageSync("groupid") || "";
        wx.request({
            url: t.globalData.dic + "doctor/manage/listPatientByGroup/" + o + "/" + s,
            success: function(t) {
                console.log(t.data), e.setData({
                    arr: t.data.data
                }), 0 == t.data.data.length && wx.showToast({
                    title: "暂无患者",
                    icon: "none",
                    duration: 3e3
                });
            }
        });
    },
    getAllfenzuuser: function() {
        var a = this, e = a.data.fenzuid, n = a.data.zid;
        t.util.request({
            url: "entry/wxapp/docuser.fenzuuser",
            data: {
                fenzuid: e,
                zid: n,
                openid: wx.getStorageSync("openid"),
                op: "display"
            },
            success: function(t) {
                console.log(t), a.setData({
                    arr: t.data
                });
            }
        });
    }
});