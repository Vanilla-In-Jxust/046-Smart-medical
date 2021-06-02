var a = getApp();

Page({
    data: {
        show: !0,
        show1: !1,
        managers1: [],
        managerspostArr1Seet: [],
        managerspostArrColorSeet: [],
        currentIndex: 1
    },
    pass: function(t) {
        var e = this, o = t.currentTarget.dataset.yaoid, n = t.currentTarget.dataset.yaotype, r = e.data.t_id;
        3 == n && wx.showModal({
            content: "是否通过申请",
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/yaoqing.pass",
                    data: {
                        yao_id: o
                    },
                    success: function(a) {
                        console.log(a), e.getyaoqingyih(r);
                    }
                });
            }
        }), 4 == n && wx.showModal({
            content: "是否踢出成员",
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/yaoqing.dellyihu",
                    data: {
                        yao_id: o
                    },
                    success: function(a) {
                        console.log(a), e.getyaoqingyih(r);
                    }
                });
            }
        });
    },
    onLoad: function(a) {
        a.yaoqing && this.setData({
            yaoqing: a.yaoqing
        });
        var t = a.teampic, e = a.t_id, o = a.zid, n = a.teamtext, r = a.teamname, s = {
            teampic: t,
            t_id: e,
            zid: o,
            teamtext: n,
            z_name: a.z_name,
            teamname: r,
            z_thumbs: a.z_thumbs
        }, i = JSON.stringify(s);
        this.setData({
            arr: i,
            t_id: e,
            zid: o
        }), this.getyaoqingyih(e);
    },
    wzclicknavTwo: function(a) {
        console.log(a);
        1 == this.data.yaoqing ? wx.showToast({
            title: "暂无权限",
            icon: "none",
            duration: 2e3
        }) : wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/addPerson/addPerson?arr=" + this.data.arr
        });
    },
    onShow: function() {
        var t = this, e = t.data.index, o = t.data.t_id;
        2 == e ? a.util.request({
            url: "entry/wxapp/yaoqing.yaoqingjilu",
            data: {
                t_id: o
            },
            success: function(a) {
                console.log(a), t.setData({
                    zhuanjia: a.data
                });
            }
        }) : this.getyaoqingyih(o), this.setData({
            noFalg: !1
        });
    },
    onlist: function(t) {
        var e = this, o = [], n = [], r = [], s = [], i = [];
        wx.request({
            url: a.globalData.dic + "doctor/team/member/list/" + e.data.token + "/" + e.data.teamId,
            success: function(a) {
                for (console.log(a), console.log(a.data.data), e.setData({
                    commons: a.data.data.commons,
                    managers: a.data.data.managers
                }), console.log(e.data.managers), t = 0; t < e.data.managers.length; t++) 1 == e.data.managers[t].managerRole ? o.push("团队长") : 2 == e.data.managers[t].managerRole ? o.push("管理员") : 3 == e.data.managers[t].managerRole && o.push("普通团员");
                for (t = 0; t < e.data.managers.length; t++) "1" == e.data.managers[t].jobType ? (n.push("医生"), 
                r.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : "2" == e.data.managers[t].jobType && (n.push("护士"), 
                r.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                for (var t = 0; t < e.data.commons.length; t++) "1" == e.data.commons[t].jobType ? (s.push("医生"), 
                i.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : "2" == e.data.commons[t].jobType && (s.push("护士"), 
                i.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                e.setData({
                    managerspostArr: o,
                    managerspostArr1: n,
                    managerspostArrColor: r,
                    commonsArr: s,
                    commonsArrArrColor: i
                });
            }
        });
    },
    clicknav: function(a) {
        var t = a.currentTarget.dataset.zid, e = a.currentTarget.dataset.type, o = a.currentTarget.dataset.yao_id;
        console.log(t), wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/intro/intro?zid=" + t + "&arr=" + this.data.arr + "&yao_type=" + e + "&yao_id=" + o
        });
    },
    clicknavTwo: function(a) {
        console.log(a), console.log(a.target.dataset.doctorid);
        var t = String(a.currentTarget.dataset.managerrole);
        wx.setStorageSync("doctorId", a.currentTarget.dataset.doctorid), wx.setStorageSync("managerRole1", t), 
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/doctorIntro/doctorIntro?type=1"
        });
    },
    input: function(t) {
        var e = this, o = [], n = [], r = [];
        console.log(t.detail.value), wx.request({
            url: a.globalData.dic + "doctor/team/member/search",
            data: {
                teamId: e.data.teamId,
                keyWord: t.detail.value
            },
            success: function(a) {
                if (console.log(a.data.data), null == a.data.data) e.setData({
                    show: !0,
                    show1: !1
                }); else if (a.data.data.length > 0) {
                    for (e.setData({
                        show: !1,
                        show1: !0
                    }), e.setData({
                        managers1: a.data.data
                    }), t = 0; t < e.data.managers1.length; t++) 1 == e.data.managers1[t].managerRole ? o.push("团队长") : 2 == e.data.managers1[t].managerRole ? o.push("管理员") : 3 == e.data.managers1[t].managerRole && o.push("团员");
                    for (var t = 0; t < e.data.managers1.length; t++) 1 == e.data.managers1[t].jobType ? (n.push("医生"), 
                    r.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : 2 == e.data.managers1[t].jobType && (n.push("护士"), 
                    r.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                    e.setData({
                        managerspostArrSeet: o,
                        managerspostArr1Seet: n,
                        managerspostArrColorSeet: r
                    }), console.log(e.data.managers1);
                }
            }
        });
    },
    tap: function(t) {
        var e = this, o = e.data.t_id;
        2 == t.target.dataset.current ? a.util.request({
            url: "entry/wxapp/yaoqing.yaoqingjilu",
            data: {
                t_id: o
            },
            success: function(a) {
                console.log(a), e.setData({
                    zhuanjia: a.data,
                    index: 2
                });
            }
        }) : this.getyaoqingyih(o), this.setData({
            currentIndex: t.target.dataset.current,
            noFalg: !1
        });
    },
    lower: function() {
        var a = this, t = (wx.getStorageSync("log"), a.data.askmanagers, a.data.currentResult);
        a.data.askmanagerspostArr, a.data.askmanagerspostArr1, a.data.askmanagerspostArrColor, 
        a.data.askmanagerspostArrColor1;
        console.log(t);
    },
    getyaoqingyih: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/yaoqing.display",
            data: {
                t_id: t
            },
            success: function(a) {
                console.log(a), e.setData({
                    zhuanjia: a.data
                });
            }
        });
    }
});