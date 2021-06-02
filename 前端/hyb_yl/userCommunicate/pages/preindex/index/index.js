var a = getApp();

Page({
    data: {
        items: {
            name: "服务条款说明",
            value: "服务条款说明",
            checked: !1
        },
        maskey: !0
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value);
    },
    changeradio: function() {
        var a = this.data.items;
        console.log(a), a.checked = !a.checked, this.setData({
            items: a
        });
    },
    maskway: function() {
        1 == this.data.maskey ? this.setData({
            maskey: !1
        }) : 0 == this.data.maskey && this.setData({
            maskey: !0
        });
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var t = a.money, o = a.key, s = a.z_name, n = a.hospital, i = a.zid, u = a.name;
        this.setData({
            money: t,
            key: o,
            zid: i,
            z_name: s,
            hospital: n,
            name: u,
            bgc: e
        }), this.getYuyueinfo();
    },
    getUserInfo: function(e) {
        console.log(e), a.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    },
    getYuyueinfo: function() {
        var e = this, t = e.data.key;
        a.util.request({
            url: "entry/wxapp/Yuyue.shoushuinfo",
            data: {
                key: t
            },
            success: function(a) {
                e.setData({
                    tishi: a.data.tishi
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    yuyue: function(a) {
        var e = this.data.items.checked;
        console.log(e);
        var t = this.data.zid, o = this.data.money, s = this.data.key, n = this.data.name;
        e ? wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/preindex/pre/index?zid=" + t + "&money=" + o + "&key=" + s + "&name=" + n
        }) : wx.showToast({
            title: "请先同意服务条款说明",
            icon: "none"
        });
    }
});