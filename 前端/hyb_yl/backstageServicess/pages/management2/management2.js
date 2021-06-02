var a = getApp();

Page({
    data: {
        Wshow: !1,
        _num: 0,
        grouping: !1,
        groups: [ {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小花",
            remarkName: "小明"
        }, {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小花",
            remarkName: "小明"
        }, {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小花",
            remarkName: "小明"
        } ]
    },
    shu: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/healthRecord/healthRecord"
        });
    },
    menuClick: function(a) {
        console.log(a.target.dataset), this.setData({
            _num: a.target.dataset.num,
            nmDisReason: a.target.dataset.text,
            cdDisReason: a.target.dataset.uuid
        });
    },
    wzconfirm: function(e) {
        var t = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "";
        wx.request({
            url: a.globalData.dic + "doctor/team/sign/break",
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
    Wmovement: function(e) {
        console.log("移动，解约");
        var t = e.currentTarget.dataset.patientid, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("teamId") || "", s = this;
        wx.showActionSheet({
            itemList: [ "移动到分组", "移出分组", "解除签约", "修改备注" ],
            success: function(r) {
                0 == r.tapIndex ? 1 == s.data.managerRole || 2 == s.data.managerRole ? (wx.setStorageSync("patientid", t), 
                wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/management1/management1"
                })) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 1 == r.tapIndex ? 1 == s.data.managerRole || 2 == s.data.managerRole ? wx.request({
                    url: a.globalData.dic + "doctor/team/manage/group/movePatient",
                    data: {
                        token: n,
                        patientId: t,
                        teamId: o
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        console.log(a.data), s.onClock();
                    }
                }) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 2 == r.tapIndex ? 1 == s.data.managerRole || 2 == s.data.managerRole ? s.setData({
                    Wshow: !0,
                    patientid: t
                }) : wx.showToast({
                    title: "暂无权限",
                    icon: "none",
                    duration: 2e3
                }) : 3 == r.tapIndex && (wx.setStorageSync("patientid", e.currentTarget.dataset.patientid), 
                wx.setStorageSync("wznameModifier", e.currentTarget.dataset.name), wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/casControlname1/casControlname1"
                }));
            }
        });
    },
    onClock: function(e) {
        var t = this, n = wx.getStorageSync("log") || "", o = wx.getStorageSync("groupid") || "", s = wx.getStorageSync("managerRole") || "";
        wx.request({
            url: a.globalData.dic + "doctor/team/manage/listPatientByGroup/" + n + "/" + o,
            success: function(a) {
                console.log(a.data.data), a.data.data.length <= 0 ? t.setData({
                    grouping: !0
                }) : t.setData({
                    grouping: !1
                }), t.setData({
                    groups: a.data.data,
                    managerRole: s
                });
            }
        });
    },
    onLoad: function(a) {},
    onShow: function() {}
});