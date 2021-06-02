getApp();

Page({
    data: {},
    onLoad: function(a) {
        var o = a.docmoney;
        console.log(o);
        var t = a.z_name, i = a.zid, n = JSON.parse(a.record);
        this.setData({
            docmoney: o,
            z_name: t,
            detailed: n,
            zid: i
        });
    },
    onclick: function() {},
    onShow: function() {
        this.onclick();
    },
    withdraw: function() {
        var a = this.data.zid, o = this.data.docmoney;
        wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/my_ti/my_ti?zid=" + a + "&docmoney=" + o
        });
    }
});