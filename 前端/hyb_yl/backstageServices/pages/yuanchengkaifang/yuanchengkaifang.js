var t = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var i = this, e = wx.getStorageSync("color"), n = a.ifzy;
        if (a.zid) {
            var o = a.zid, s = a.addnum, r = a.money;
            i.setData({
                zid: o,
                money: r,
                addnum: s
            });
        }
        if (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), a.ser_key) var d = a.ser_key; else d = a.key_words;
        i.setData({
            ser_key: d,
            tit: a.tit,
            ifzy: n,
            bgc: e
        }), wx.setNavigationBarTitle({
            title: a.tit
        }), t.util.request({
            url: "entry/wxapp/index.detailserones",
            data: {
                ser_key: d
            },
            success: function(t) {
                console.log(t), i.setData({
                    detail: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    mereport: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/my_hzprescription/my_hzprescription"
        });
    },
    havereport: function() {
        var t = this.data.ser_key, a = this.data.tit, i = this.data.ifzy, e = this.data.zid, n = this.data.money, o = this.data.addnum;
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/kaiyao/kaiyao?inquiry=4&key_words=" + t + "&tit=" + a + "&ifzy=" + i + "&zid=" + e + "&money=" + n + "&addnum=" + o
        });
    },
    nonereport: function() {
        var t = this.data.ser_key, a = this.data.tit, i = this.data.ifzy, e = this.data.zid, n = this.data.money, o = this.data.addnum;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/chufangmes/chufangmes?inquiry=3&key_words=" + t + "&tit=" + a + "&ifzy=" + i + "&zid=" + e + "&money=" + n + "&addnum=" + o
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