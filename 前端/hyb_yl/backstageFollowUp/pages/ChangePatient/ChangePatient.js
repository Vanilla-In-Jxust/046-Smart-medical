var t = getApp();

Page({
    data: {
        onPatientFlag: !1,
        patientList: {},
        searchPersonList: [],
        arr: []
    },
    onLoad: function(a) {
        var e = this, i = a.zid, n = a.sourceType;
        t.util.request({
            url: "entry/wxapp/yishuo.listliebiao",
            data: {
                zid: i
            },
            success: function(t) {
                console.log(t);
                var a = t.data;
                a.data.map(function(t) {
                    t.groupCheck = !0, t.user.map(function(t) {
                        t.patientCheck = !0;
                    });
                });
                var i = t.data.weifenzu;
                i.map(function(t) {
                    t.patientCheck = !0;
                }), console.log(a), console.log(i), e.setData({
                    patientList: a.data,
                    weifenzu: i
                });
            }
        }), e.setData({
            zid: i,
            sourceType: n
        });
    },
    onReady: function() {},
    onShow: function() {
        wx.getStorageSync("patientList") && this.setData({
            patientList: wx.getStorageSync("patientList")
        });
    },
    onHide: function() {},
    onUnload: function() {
        1 != this.data.sourceType && wx.removeStorageSync("patientList");
    },
    groupUnfold: function(t) {
        console.log(t);
        var a = parseInt(t.currentTarget.dataset.index);
        this.data.patientList.groups[a].groupUnfoldFlag ? (this.data.patientList.groups[a].groupUnfoldFlag = !1, 
        this.setData({
            patientList: this.data.patientList
        })) : (this.data.patientList.groups[a].groupUnfoldFlag = !0, this.setData({
            patientList: this.data.patientList
        }));
    },
    All: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.patientList;
        e[a].groupCheck = !e[a].groupCheck, 1 == e[a].groupCheck ? e[a].user.map(function(t, i) {
            e[a].user[i].patientCheck = !0;
        }) : e[a].user.map(function(t, i) {
            e[a].user[i].patientCheck = !1;
        }), console.log(e), this.setData({
            patientList: e
        });
    },
    checkPatient: function(t) {
        console.log(t);
        var a = this.data.patientList;
        console.log(a);
        var e = t.currentTarget.dataset.index, i = (t.currentTarget.dataset.groupindex, 
        t.currentTarget.dataset.targettype), n = t.currentTarget.dataset.itemindex;
        2 == i && (a[e].user[n].patientCheck = !a[e].user[n].patientCheck, a[e].user.map(function(t, i) {
            0 == a[e].user[i].patientCheck ? a[e].groupCheck = !1 : a[e].groupCheck = !0;
        }));
        var s = this.data.weifenzu;
        3 == i && (s[e].patientCheck = !s[e].patientCheck), console.log(this.data.arr), 
        this.setData({
            patientList: a,
            weifenzu: s
        });
    },
    nextBtn: function() {
        console.log(this.data.zid);
        for (var t = this.data.patientList, a = [], e = 0; e < t.length; e++) a = t[e].user;
        var i = this.data.weifenzu, n = [], s = [];
        a.map(function(t) {
            1 == t.patientCheck && s.push(t.u_id);
        }), console.log(i), i.map(function(t) {
            1 == t.patientCheck && n.push(t.u_id);
        }), console.log("已分组成员ID：" + s), console.log("未分组成员ID：" + n);
        var o = s.concat(n);
        console.log(o), wx.setStorageSync("patientList", this.data.arr), wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/publishSaid/publishSaid?arr=" + o + "&zid=" + this.data.zid
        });
    },
    saveBtn: function() {
        wx.setStorageSync("patientList", this.data.patientList), wx.navigateBack({
            delta: 1
        });
    },
    search: function(a) {
        var e = this, i = a.detail.value;
        this.setData({
            searchFlag: !0,
            searchOnPatent: !1
        }), 0 != i.replace(/(^\s*)|(\s*$)/g, "").length ? (1 == this.data.patientType && (this.data.searchUrl = "doctor/manage/searchMyPatient", 
        this.data.searchData = {
            token: this.data.token,
            keyWord: i
        }), 2 == this.data.patientType && (this.data.searchUrl = "doctor/team/manage/searchMyPatient", 
        this.data.searchData = {
            token: this.data.token,
            teamId: this.data.teamId,
            keyWord: i
        }), wx.request({
            url: t.globalData.dic + e.data.searchUrl,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: e.data.searchData,
            success: function(t) {
                console.log(t), 200 == t.data.code && (t.data.data.length > 0 && null != t.data.data ? (t.data.data.forEach(function(t) {
                    if (null != e.data.patientList.groups && e.data.patientList.groups.length > 0) for (i = 0; i < e.data.patientList.groups.length; i++) if (null != e.data.patientList.groups[i].patients && e.data.patientList.groups[i].patients.length > 0) for (var a = 0; a < e.data.patientList.groups[i].patients.length; a++) if (e.data.patientList.groups[i].patients[a].userId == t.userId) {
                        t.patientCheck = e.data.patientList.groups[i].patients[a].patientCheck;
                        break;
                    }
                    if (null != e.data.patientList.unGroupPatientList && e.data.patientList.unGroupPatientList.length > 0) for (var i = 0; i < e.data.patientList.unGroupPatientList.length; i++) if (e.data.patientList.unGroupPatientList[i].userId == t.userId) {
                        t.patientCheck = e.data.patientList.unGroupPatientList[i].patientCheck;
                        break;
                    }
                }), e.setData({
                    searchPersonList: t.data.data,
                    searchOnPatent: !1
                })) : e.setData({
                    searchOnPatent: !0,
                    searchPersonList: t.data.data
                }));
            }
        })) : this.setData({
            searchFlag: !1,
            searchOnPatent: !1
        });
    }
});