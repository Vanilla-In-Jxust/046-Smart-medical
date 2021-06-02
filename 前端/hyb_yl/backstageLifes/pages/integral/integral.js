var t = getApp();

Page({
    data: {
        currentIndex: 0,
        loadingBoo: !0,
        moreBoo: !0,
        prenumber: 10,
        detailFlag: !1,
        page: 0,
        integral: 0,
        type: 0
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this.data.type;
        this.setData({
            moreBoo: !0
        }), this.getIntegral(t);
    },
    onHide: function() {},
    onUnload: function() {},
    sort: function(t) {
        var e = t.currentTarget.dataset.current;
        this.setData({
            currentIndex: t.target.dataset.current,
            detailFlag: !1,
            moreBoo: !0,
            page: 0
        }), this.getIntegral(e);
    },
    getIntegral: function(e) {
        var a = this, n = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Patientsing",
            data: {
                op: "myjifen",
                openid: n,
                type: e
            },
            success: function(t) {
                console.log(t);
                var e = t.data.getall;
                a.setData({
                    integralList: e,
                    integral: t.data.sum.credit
                });
            }
        });
    }
});