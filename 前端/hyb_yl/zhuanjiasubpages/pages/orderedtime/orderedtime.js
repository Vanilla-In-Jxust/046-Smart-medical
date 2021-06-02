var e = getApp(), a = Date.parse(new Date()), t = new Date(a).getFullYear();

Page({
    data: {
        server: "",
        dex: 0,
        times: [ "19:00-20:00", "20:00-21:00", "20:00-21:00", "20:00-21:00" ]
    },
    getdate: function(a) {
        var i = this, s = a.currentTarget.dataset.i, n = i.data.list_wedate, r = a.currentTarget.dataset.week, d = a.currentTarget.dataset.day, o = i.data.server;
        console.log(i.data.server);
        for (var l = 0; l < n.length; l++) n[l].active = [ l ] == s;
        if ("一月" == (u = i.data.month)) var u = "01"; else if ("二月" == u) u = "02"; else if ("三月" == u) u = "03"; else if ("四月" == u) u = "04"; else if ("五月" == u) u = "05"; else if ("六月" == u) u = "06"; else if ("七月" == u) u = "07"; else if ("八月" == u) u = "08"; else if ("九月" == u) u = "09"; else if ("十月" == u) u = "10"; else if ("十一月" == u) u = "11"; else if ("十二月" == u) u = "12";
        e.util.request({
            url: "entry/wxapp/zhuanjia.alldocservertime",
            data: {
                zid: i.data.zid,
                week: r,
                keywords: o
            },
            success: function(e) {
                console.log(e), e && i.setData({
                    time: e.data
                });
            }
        }), this.setData({
            list_wedate: n,
            month: i.data.month,
            time_date: t + "-" + u + "-" + d,
            day: "周" + n[s].week
        });
    },
    seltime: function(e) {
        var a = this.data.time_leng, t = e.currentTarget.dataset.time, i = this.data.time_date, s = this.data.day, n = i + " " + t + " " + s, r = this.data.money, d = this.data.zid, o = this.data.server, l = this.data.addnum, u = this.data.privateNum, m = parseInt(e.currentTarget.dataset.nums), h = parseInt(e.currentTarget.dataset.yynum);
        if (console.log(this.data.server), m == h) return wx.showToast({
            title: "预约已满",
            icon: "none"
        }), !1;
        "tijianjiedu" == this.data.server ? wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/noreport/noreport?server=" + o + "&times=" + n + "&zid=" + d + "&money=" + r + "&time_leng=" + a + "&addnum=" + l
        }) : "tuwenwenzhen" == this.data.server ? wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?server=" + o + "&times=" + n + "&zid=" + d + "&money=" + r + "&time_leng=" + a + "&addnum=" + l
        }) : "shipinwenzhen" == this.data.server || "dianhuajizhen" == this.data.server ? wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/information/information?server=" + o + "&zongtime=" + n + "&zid=" + d + "&yearDate=" + i + "&day=" + s + "&times=" + t + "&money=" + r + "&time_leng=" + a + "&addnum=" + l + "&privateNum=" + u
        }) : "shoushukuaiyue" != this.data.server && "yuanchengguahao" != this.data.server || wx.redirectTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwen/zhuanjiatiwen?server=" + o + "&times=" + n + "&zid=" + d + "&money=" + r + "&time_leng=" + a + "&addnum=" + l
        });
    },
    onLoad: function(a) {
        var i = this, s = a.money, n = wx.getStorageSync("color"), r = a.time_leng, d = a.addnum, o = a.privateNum;
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), null != a.key_words) var l = a.key_words; else if (null != a.server) l = a.server;
        i.setData({
            zid: a.zid,
            server: l,
            money: s,
            time_leng: r,
            addnum: d,
            privateNum: o
        }), e.util.request({
            url: "entry/wxapp/zhuanjia.timelist",
            data: {
                zid: a.zid
            },
            success: function(s) {
                console.log(s), s.data.timearr[0].active = !0;
                var n = s.data.timearr;
                if (i.setData({
                    list_wedate: s.data.timearr,
                    month: s.data.month
                }), "一月" == (r = s.data.month)) var r = "01"; else if ("二月" == r) r = "02"; else if ("三月" == r) r = "03"; else if ("四月" == r) r = "04"; else if ("五月" == r) r = "05"; else if ("六月" == r) r = "06"; else if ("七月" == r) r = "07"; else if ("八月" == r) r = "08"; else if ("九月" == r) r = "09"; else if ("十月" == r) r = "10"; else if ("十一月" == r) r = "11"; else if ("十二月" == r) r = "12";
                var d = n[0].time;
                i.setData({
                    time_date: t + "-" + r + "-" + d,
                    day: "周" + n[0].week
                });
                var o = s.data.timearr[0].week2;
                e.util.request({
                    url: "entry/wxapp/zhuanjia.alldocservertime",
                    data: {
                        zid: i.data.zid,
                        week: o,
                        keywords: a.key_words
                    },
                    success: function(e) {
                        console.log(e), i.setData({
                            time: e.data
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});