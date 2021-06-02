var t = getApp();

Page({
    data: {
        officelist: [],
        typs: ""
    },
    onLoad: function(t) {
        var a = t.hid, i = t.pinyin, n = t.tit, e = t.typs, o = t.leixing, s = t.id, l = t.money, d = t.name;
        if ("" != d && null != d && this.setData({
            name: d
        }), "" != l && null != l && this.setData({
            money: l
        }), "" != o && null != o && this.setData({
            leixing: o
        }), "" != s && null != s && this.setData({
            tid: s
        }), null != e && this.setData({
            typs: e
        }), t.j_id) {
            t.j_id;
            this.setData({
                j_id: t.j_id
            });
        }
        if (t.conets) {
            var r = JSON.parse(t.conets);
            this.setData({
                conets: r
            });
        }
        var c = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: c
        }), this.getAlldepartment(), wx.setNavigationBarTitle({
            title: "科室选择"
        }), this.setData({
            hid: a,
            pinyin: i,
            tit: n
        });
    },
    handleTap: function(t) {
        var a = this;
        console.log(t);
        var i = a.data.hid, n = a.data.pinyin, e = t.currentTarget.dataset.id, o = a.data.typs;
        if (a.data.tit) var s = a.data.tit; else s = t.currentTarget.dataset.tit;
        var l = a.data.name, d = JSON.stringify(a.data.conets), r = a.data.j_id, c = a.data.leixing;
        console.log(c);
        var u = a.data.tid;
        "lvtong" == c ? wx.showModal({
            title: "提示",
            content: "是否去选择导诊",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/hyb_yl/userCommunicate/pages/changeDoctors/changeDoctors?tit=" + s + "&tid=" + u + "&id=" + e + "&hid=" + i + "&ser_key=" + n + "&leixing=" + c + "&money=" + a.data.money + "&name=" + l + "&zid="
                }) : wx.navigateTo({
                    url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiatiwens/zhuanjiatiwens?leixing=lvtong&tit=" + s + "&tid=" + u + "&keshi_two=" + e + "&hid=" + i + "&server=" + n + "&leixing=" + c + "&money=" + a.data.money + "&name=" + l + "&did=&zid="
                });
            }
        }) : wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/changeDoctor/changeDoctor?tit=" + s + "&long=" + this.data.long + "&id=" + e + "&hid=" + i + "&ser_key=" + n + "&conets=" + d + "&j_id=" + r + "&typs=" + o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getAlldepartment: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/faxian.departments",
            data: {},
            success: function(t) {
                console.log(t);
                var i = t.data;
                a.setData({
                    officelist: i
                });
            }
        });
    }
});