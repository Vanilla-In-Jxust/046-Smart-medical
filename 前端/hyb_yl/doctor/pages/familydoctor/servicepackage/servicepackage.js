var t = getApp();

Page({
    data: {
        isshow: !0,
        list: [ {
            id: 0,
            title: "老年人家庭医生签约服务基本包",
            price: "0.0",
            isshow: !1
        }, {
            id: 1,
            title: "老年人家庭医生签约服务基本包",
            price: "0.0",
            isshow: !1
        }, {
            id: 2,
            title: "老年人家庭医生签约服务基本包",
            price: "0.0",
            isshow: !1
        }, {
            id: 3,
            title: "老年人家庭医生签约服务基本包",
            price: "0.0",
            isshow: !1
        }, {
            id: 4,
            title: "老年人家庭医生签约服务基本包",
            price: "0.0",
            isshow: !1
        }, {
            id: 5,
            title: "老年人家庭医生签约服务基本包",
            price: "0.0",
            isshow: !1
        } ],
        check: !1,
        index: ""
    },
    choose: function(t) {
        var i = t.currentTarget.dataset.index, a = this.data.fwlist;
        a[i].isshow = !a[i].isshow, this.setData({
            fwlist: a,
            index: i
        });
        for (var s = 0, e = 0; e < a.length; e++) 1 == a[e].isshow && (s += parseFloat(a[e].fw_money));
        s = parseFloat(s.toFixed(2)), this.setData({
            sum: s
        });
    },
    step: function() {
        var t = this.data.index, i = this.data.fwlist, a = this.data.t_id, s = this.data.sid, e = this.data.key, o = this.data.name, n = this.data.j_id, d = this.data.names, r = this.data.sum, f = this.data.teamname, h = this.data.ifhz, l = this.data.hzsfz, c = this.data.zid;
        if ("" === t) wx.showToast({
            title: "请选择签约服务包",
            icon: "none"
        }); else {
            i = this.data.fwlist;
            for (var g = [], u = 0; u < i.length; u++) 1 == i[u].isshow && g.push(i[u]);
            for (var w = [], m = (u = 0, g.length); u < m; u++) g[u].ff_id && w.push(g[u].ff_id);
            var p = JSON.stringify(w);
            wx.navigateTo({
                url: "/hyb_yl/doctor/pages/familydoctor/sign/sign?item=" + p + "&t_id=" + a + "&sid=" + s + "&key=" + e + "&name=" + o + "&j_id=" + n + "&names=" + d + "&money=" + r + "&teamname=" + f + "&ifhz=" + h + "&hzsfz=" + l + "&zid=" + c
            });
        }
    },
    server: function(t) {
        var i = t.currentTarget.dataset.ff_id, a = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/signing/signing?ff_id=" + i + "&title=" + a
        });
    },
    onLoad: function(i) {
        console.log(i);
        var a = this, s = wx.getStorageSync("color"), e = i.teamname, o = i.t_id, n = i.sid, d = i.key, r = i.name, f = i.j_id, h = i.hzsfz, l = i.ifhz, c = i.names, g = i.zid;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: s
        });
        var u = JSON.parse(i.arr);
        console.log(u), a.setData({
            bgc: s,
            t_id: o,
            key: d,
            sid: n,
            name: r,
            j_id: f,
            names: c,
            teamname: e,
            hzsfz: h,
            ifhz: l,
            zid: g
        }), t.util.request({
            url: "entry/wxapp/Office.allinfo",
            data: {
                arr: u
            },
            success: function(t) {
                for (var i = t.data, s = 0; s < i.length; s++) i[s].isshow = !1;
                a.setData({
                    fwlist: i
                }), console.log(i);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});