var a = getApp();

Page({
    data: {
        show: !0,
        show1: !1,
        managers1: [],
        managerspostArr1Seet: [],
        managerspostArrColorSeet: []
    },
    onLoad: function(a) {
        this.setData({
            teamId: wx.getStorageSync("teamId"),
            token: wx.getStorageSync("log")
        }), this.onlist();
    },
    onShow: function() {
        this.onlist();
    },
    onlist: function(e) {
        var t = this, o = [], r = [], n = [], s = [], g = [];
        wx.request({
            url: a.globalData.dic + "doctor/team/member/list/" + t.data.token + "/" + t.data.teamId,
            success: function(a) {
                for (console.log(a.data.data), t.setData({
                    commons: a.data.data.commons,
                    managers: a.data.data.managers
                }), console.log(t.data.managers), e = 0; e < t.data.managers.length; e++) 1 == t.data.managers[e].managerRole ? o.push("团队长") : 2 == t.data.managers[e].managerRole ? o.push("管理员") : 3 == t.data.managers[e].managerRole && o.push("普通团员");
                for (e = 0; e < t.data.managers.length; e++) "1" == t.data.managers[e].jobType ? (r.push("医生"), 
                n.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : "2" == t.data.managers[e].jobType && (r.push("护士"), 
                n.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                for (var e = 0; e < t.data.commons.length; e++) "1" == t.data.commons[e].jobType ? (s.push("医生"), 
                g.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : "2" == t.data.commons[e].jobType && (s.push("护士"), 
                g.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                t.setData({
                    managerspostArr: o,
                    managerspostArr1: r,
                    managerspostArrColor: n,
                    commonsArr: s,
                    commonsArrArrColor: g
                });
            }
        });
    },
    clicknav: function(e) {
        var t = this, o = wx.getStorageSync("groupid") || "", r = wx.getStorageSync("groupname") || "", n = e.currentTarget.dataset.name;
        wx.showModal({
            title: "提示",
            content: "设置" + n + "为责任人",
            success: function(n) {
                n.confirm ? (console.log("用户点击确定"), wx.request({
                    url: a.globalData.dic + "doctor/team/manage/group/update/" + t.data.token,
                    data: {
                        groupId: o,
                        groupName: r,
                        personLiable: e.currentTarget.dataset.doctorid
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        console.log(a.data), wx.navigateBack({
                            delta: 1
                        });
                    }
                })) : n.cancel && console.log("用户点击取消");
            }
        });
    },
    input: function(e) {
        var t = this, o = [], r = [], n = [];
        console.log(e.detail.value), wx.request({
            url: a.globalData.dic + "doctor/team/member/search",
            data: {
                teamId: t.data.teamId,
                keyWord: e.detail.value
            },
            success: function(a) {
                if (console.log(a.data.data), null == a.data.data) t.setData({
                    show: !0,
                    show1: !1
                }); else if (a.data.data.length > 0) {
                    for (t.setData({
                        show: !1,
                        show1: !0
                    }), t.setData({
                        managers1: a.data.data
                    }), e = 0; e < t.data.managers1.length; e++) 1 == t.data.managers1[e].managerRole ? o.push("团队长") : 2 == t.data.managers1[e].managerRole ? o.push("管理员") : 3 == t.data.managers1[e].managerRole && o.push("团员");
                    for (var e = 0; e < t.data.managers1.length; e++) 1 == t.data.managers1[e].jobType ? (r.push("医生"), 
                    n.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : 2 == t.data.managers1[e].jobType && (r.push("护士"), 
                    n.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                    t.setData({
                        managerspostArrSeet: o,
                        managerspostArr1Seet: r,
                        managerspostArrColorSeet: n
                    }), console.log(t.data.managers1);
                }
            }
        });
    }
});