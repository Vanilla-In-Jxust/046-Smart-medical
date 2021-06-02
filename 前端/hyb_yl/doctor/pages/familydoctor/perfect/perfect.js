var t = getApp();

Page({
    data: {
        region: [ "北京市", "北京市", "东城区" ],
        crowd: [],
        selected: 1,
        username: "",
        idnumber: "",
        phone: "",
        address: "",
        household: "",
        arr: []
    },
    username: function(t) {
        this.setData({
            username: t.detail.value
        });
    },
    idnumber: function(t) {
        this.setData({
            idnumber: t.detail.value
        });
    },
    phone: function(t) {
        this.setData({
            phone: t.detail.value
        });
    },
    address: function(t) {
        this.setData({
            address: t.detail.value
        });
    },
    household: function(t) {
        this.setData({
            household: t.detail.value
        });
    },
    bindRegionChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            region: t.detail.value
        });
    },
    choose: function(t) {
        var a = t.currentTarget.dataset.id;
        console.log(a), this.setData({
            selected: a
        });
    },
    select: function(t) {
        console.log(t);
        t.currentTarget.dataset.id;
        var a = this.data.crowd, e = t.currentTarget.dataset.index;
        a[e].isshow = !a[e].isshow, this.setData({
            crowd: a
        });
        for (var s = [], o = 0; o < a.length; o++) 1 == a[o].isshow && s.push(a[o]);
        this.setData({
            arr: s
        });
    },
    next: function(t) {
        var a = this.data.t_id, e = this.data.sid, s = this.data.key, o = this.data.name, n = this.data.j_id, i = this.data.names, d = this.data.teamname, r = this.data.arr, l = this.data.zid;
        "" == this.data.names ? wx.showToast({
            title: "姓名不能为空",
            icon: "none"
        }) : "" == this.data.numcard ? wx.showToast({
            title: "份证号不能为空",
            icon: "none"
        }) : "" == this.data.tel ? wx.showToast({
            title: "手机号不能为空",
            icon: "none"
        }) : /^1[3456789]\d{9}$/.test(this.data.tel) ? "" == this.data.address ? wx.showToast({
            title: "地址不能为空",
            icon: "none"
        }) : 1 == this.data.selected && "" == this.data.household ? wx.showToast({
            title: "户主身份证号不能为空",
            icon: "none"
        }) : 0 == r.length ? wx.showToast({
            title: "请选择人群",
            icon: "none"
        }) : wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/servicepackage/servicepackage?arr=" + JSON.stringify(this.data.arr) + "&t_id=" + a + "&sid=" + e + "&key=" + s + "&name=" + o + "&j_id=" + n + "&names=" + i + "&teamname=" + d + "&hzsfz=" + this.data.household + "&ifhz=" + this.data.selected + "&zid=" + l
        }) : wx.showToast({
            title: "请输入正确的手机号",
            icon: "none"
        });
    },
    onLoad: function(a) {
        var e = this, s = a.t_id, o = a.sid, n = a.key, i = a.name, d = a.j_id, r = a.names, l = a.teamname, c = a.zid, h = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: h
        }), t.util.request({
            url: "entry/wxapp/user.ifself",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t);
                var a = t.data.region.split(",");
                console.log(a), e.setData({
                    names: t.data.names,
                    j_id: t.data.j_id,
                    region: a,
                    datetime: t.data.datetime,
                    numcard: t.data.numcard,
                    tel: t.data.tel
                });
            }
        }), t.util.request({
            url: "entry/wxapp/Office.fllist",
            success: function(t) {
                for (var a = t.data, s = 0; s < a.length; ++s) a[s].isshow = !1;
                e.setData({
                    crowd: t.data
                }), console.log(t);
            }
        }), e.setData({
            bgc: h,
            t_id: s,
            sid: o,
            key: n,
            name: i,
            j_id: d,
            names: r,
            teamname: l,
            zid: c
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