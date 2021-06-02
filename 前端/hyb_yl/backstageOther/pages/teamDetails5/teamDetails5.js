var a = getApp();

Page({
    data: {
        managers: []
    },
    onLoad: function(a) {
        this.setData({
            teamId: wx.getStorageSync("teamId"),
            token: wx.getStorageSync("log")
        }), this.onlist();
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        }), console.log(t.data.managers.length);
    },
    onShow: function() {
        this.onlist();
    },
    onlist: function(t) {
        var e = this, o = [], s = [], r = [], n = [];
        wx.request({
            url: a.globalData.dic + "doctor/team/myInviteList/" + e.data.token + "/" + e.data.teamId + "/0",
            success: function(a) {
                for (console.log(a.data), e.setData({
                    managers: a.data.data.list
                }), e.data.managers.length <= 0 && wx.showToast({
                    title: "暂无此项纪录",
                    icon: "none",
                    duration: 2e3
                }), console.log(e.data.managers), console.log(e.data.managers.length), t = 0; t < e.data.managers.length; t++) 0 == e.data.managers[t].teamState ? (o.push("等待同意"), 
                n.push("color:#3b4ca9")) : 1 == e.data.managers[t].teamState ? (o.push("已入团"), n.push("color: #ccc;")) : 2 == e.data.managers[t].teamState ? (o.push("已退团"), 
                n.push("color: #333;")) : 3 == e.data.managers[t].teamState ? (o.push("取消申请"), n.push("color: #ccc;")) : 4 == e.data.managers[t].teamState && (o.push("拒绝邀请"), 
                n.push("color: #ccc;"));
                for (var t = 0; t < e.data.managers.length; t++) 1 == e.data.managers[t].jobType ? (s.push("医生"), 
                r.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : 2 == e.data.managers[t].jobType && (s.push("护士"), 
                r.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                e.setData({
                    managerspostArr: o,
                    managerspostArr1: s,
                    managerspostArrColor: r,
                    managerspostArrColor1: n,
                    currentResult: a.data.data.page.nextResult
                });
            }
        });
    },
    lower: function() {
        var t, e = this, o = (wx.getStorageSync("log"), e.data.managers), s = e.data.currentResult, r = e.data.managerspostArr, n = e.data.managerspostArr1, g = e.data.managerspostArrColor, c = e.data.managerspostArrColor1;
        console.log(s);
        wx.request({
            url: a.globalData.dic + "doctor/team/myInviteList/" + this.data.token + "/" + this.data.teamId + "/" + s,
            success: function(a) {
                if (console.log(a.data.data), 200 == a.data.code) {
                    for (var s = a.data.data.list, d = 0; d < s.length; d++) 0 == s[d].teamState ? (r.push("等待同意"), 
                    c.push("color:#3b4ca9")) : 1 == s[d].teamState ? (r.push("已入团"), c.push("color: #ccc;")) : 2 == s[d].teamState ? (r.push("已退团"), 
                    c.push("color: #333;")) : 3 == s[d].teamState ? (r.push("取消申请"), c.push("color: #ccc;")) : 4 == s[d].teamState && (r.push("拒绝邀请"), 
                    c.push("color: #ccc;"));
                    for (d = 0; d < s.length; d++) 1 == s[d].jobType ? (n.push("医生"), g.push("background-image: linear-gradient(#7dcafe, #6aaeff)")) : 2 == s[d].jobType && (n.push("护士"), 
                    g.push("background-image: linear-gradient(#ff9bb5, #fa7dbf)"));
                    if (s = a.data.data.list, t = o.concat(s), console.log(t), s.length == []) return void wx.showToast({
                        title: "已到达底部",
                        icon: "none",
                        duration: 3e3
                    });
                    wx.showLoading({
                        title: "加载中",
                        icon: "loading"
                    }), setTimeout(function() {
                        e.setData({
                            managers: t,
                            managerspostArr: r,
                            managerspostArr1: n,
                            managerspostArrColor: g,
                            managerspostArrColor1: c,
                            currentResult: a.data.data.page.nextResult
                        }), wx.hideLoading();
                    }, 1500);
                }
            }
        });
    }
});