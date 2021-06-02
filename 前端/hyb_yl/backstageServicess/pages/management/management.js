var t = getApp();

Page({
    data: {
        _num: 0,
        Wshow: !1,
        grouping: !1
    },
    menuClick: function(t) {
        console.log(t.target.dataset), this.setData({
            _num: t.target.dataset.num,
            nmDisReason: t.target.dataset.text,
            cdDisReason: t.target.dataset.uuid
        });
    },
    wzconfirm: function(a) {
        var e = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: t.globalData.dic + "doctor/team/sign/break",
            data: {
                token: n,
                patientId: e.data.patientid,
                teamId: o,
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
                }), e.seet());
            }
        });
    },
    call: function(t) {
        this.setData({
            Wshow: !1
        });
    },
    Wmovement: function(t) {
        console.log("移动，解约");
        var a = t.currentTarget.dataset.patientid, e = this;
        wx.showActionSheet({
            itemList: [ "移动到分组", "解除签约", "修改备注" ],
            success: function(n) {
                0 == n.tapIndex ? 1 == e.data.managerRole || 2 == e.data.managerRole ? (wx.setStorageSync("patientid", a), 
                wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/management1/management1"
                })) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 1 == n.tapIndex ? 1 == e.data.managerRole || 2 == e.data.managerRole ? e.setData({
                    Wshow: !0,
                    patientid: a
                }) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 2 == n.tapIndex && (wx.setStorageSync("patientid", t.currentTarget.dataset.patientid), 
                wx.setStorageSync("wznameModifier", t.currentTarget.dataset.name), wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/casControlname1/casControlname1"
                }));
            }
        });
    },
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    seet: function(a) {
        var e = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: t.globalData.dic + "doctor/team/manage/searchMyPatient",
            data: {
                token: n,
                teamId: o,
                keyWord: e.data.input
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data), e.setData({
                    groups: t.data.data
                }), t.data.data.length <= 0 ? e.setData({
                    grouping: !0
                }) : e.setData({
                    grouping: !1
                });
            }
        });
    },
    shu: function(a) {
        console.log(a.currentTarget.dataset.patientid), wx.request({
            url: t.globalData.dic + "doctor/manage/showPatientAllowArchives/" + a.currentTarget.dataset.patientid,
            success: function(t) {
                if (console.log(t.data.data), 1 != t.data.data) wx.showModal({
                    title: "提示",
                    content: "患者没有授权",
                    success: function(t) {
                        t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
                    }
                }); else {
                    wx.setStorageSync("patientId", a.currentTarget.dataset.patientid);
                    var e = wx.getStorageSync("teamId") || "";
                    wx.setStorageSync("flag", "2"), wx.navigateTo({
                        url: "/hyb_yl/backstageFollowUp/pages/healthRecord/healthRecord?teamId=_" + e
                    });
                }
            }
        });
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("managerRole") || "", n = this;
        n.setData({
            managerRole: e
        }), wx.request({
            url: t.globalData.dicc + "dic/comdicbase",
            data: {
                code: 38e4
            },
            success: function(t) {
                console.log(t.data.data);
                var a = t.data.data, e = [], o = [];
                for (var s in a) e.push(a[s]), o.push(s);
                console.log(e[0]), n.setData({
                    text: e,
                    textID: o,
                    cdDisReason: o[0],
                    nmDisReason: e[0]
                });
            }
        });
    },
    onShow: function() {
        this.seet();
    }
});