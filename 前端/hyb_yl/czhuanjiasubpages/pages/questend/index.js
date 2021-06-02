var e = getApp();

Page({
    data: {
        tel: ""
    },
    getel: function(e) {
        this.setData({
            tel: e.detail.value
        }), console.log(this.data.tel);
    },
    nextpage: function() {
        var a = this, t = a.data.zid, n = (a.data.name, a.data.keywords), o = a.data.j_id, d = wx.getStorageSync("modul"), i = JSON.parse(d);
        a.data.tel ? e.util.request({
            url: "entry/wxapp/hzbingli.addbingli",
            data: {
                msglist: i,
                sicktel: a.data.tel,
                openid: wx.getStorageSync("openid"),
                j_id: o,
                keywords: n
            },
            success: function(d) {
                console.log(d);
                var i = d.data, s = a.data.name;
                e.util.request({
                    url: "entry/wxapp/hzbingli.addorder",
                    data: {
                        zid: t,
                        name: s,
                        keywords: n,
                        openid: wx.getStorageSync("openid"),
                        bl_id: i,
                        money: a.data.newmoney,
                        j_id: o
                    },
                    success: function(e) {
                        console.log(e);
                        var d = e.data.name, i = e.data.order, s = e.data.money;
                        wx.navigateTo({
                            url: "/hyb_yl/czhuanjiasubpages/pages/questends/index?phone=" + a.data.tel + "&zid=" + t + "&name=" + d + "&keywords=" + n + "&j_id=" + o + "&allone_key=1&name=" + d + "&order=" + i + "&money=" + s
                        });
                    }
                });
            }
        }) : wx.showToast({
            title: "请输入有效号码",
            icon: "none"
        });
    },
    onLoad: function(a) {
        var t = this, n = a.zid, o = a.name, d = a.keywords, i = a.j_id, s = a.tel;
        e.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: n,
                key: d
            },
            success: function(e) {
                t.setData({
                    newmoney: e.data.data.newmoney
                });
            }
        }), t.setData({
            trandatas: a,
            zid: n,
            name: o,
            keywords: d,
            j_id: i,
            tel: s
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