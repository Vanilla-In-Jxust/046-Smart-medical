var e = getApp();

Page({
    data: {
        wendaArr: [],
        editCon: "编辑",
        a: !1,
        edit: !1
    },
    swichNav: function(e) {
        var t = this.data.nav;
        t.currentTab = e.currentTarget.dataset.current, this.setData({
            nav: t
        });
    },
    onLoad: function(t) {
        var a = this, n = wx.getStorageSync("color"), o = wx.getStorageSync("openid");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), e.util.request({
            url: "entry/wxapp/Alllipei",
            data: {
                openid: o
            },
            success: function(e) {
                console.log(e), a.setData({
                    wendaArr: e.data.data
                });
            }
        }), a.setData({
            backgroundColor: n
        });
    },
    editClick: function() {
        if (this.data.edit) ; else var e = !1;
        this.setData({
            edit: !this.data.edit,
            a: e
        });
    },
    checkboxChange: function(e) {
        console.log("checkbox发生change事件，携带value值为：", e.detail.value);
        if (0 == e.detail.value.length) var t = !1; else t = !0;
        this.setData({
            a: t
        });
    },
    del: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.index, a = this.data.wendaArr;
        console.log(a[t].checked), 0 == a[t].checked || null == a[t].checked ? a[t].checked = 1 : a[t].checked = 0, 
        this.setData({
            wendaArr: a
        });
    },
    subClick: function(t) {
        console.log(t);
        var a = this.data.wendaArr, n = t.detail.value.checkBox;
        e.util.request({
            url: "entry/wxapp/Delelip",
            data: {
                lpid: n
            },
            success: function(e) {
                e.data.data;
                console.log(e);
            },
            fail: function(e) {
                console.log(e);
            }
        });
        for (var o = 0, c = a.length; o < c; o++) console.log(a[o]), 1 == a[o].checked && (a.splice(o, 1), 
        o--, c--);
        this.setData({
            wendaArr: a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    lipeils: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.lpid;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/patient2/patient2?lpid=" + t
        });
    }
});