var t = getApp();

Page({
    data: {
        tablist: [ "全部", "待付款", "服务中", "已过期" ],
        currentData: 0,
        list: [],
        page: 0,
        pagesize: 10
    },
    checkCurrent: function(t) {
        this.setData({
            currentData: t.currentTarget.dataset.current,
            page: 0,
            list: []
        }), this.getList();
    },
    carddetail: function() {
        1 == this.data.currentData ? wx.navigateTo({
            url: "../yearcard/yearcard"
        }) : wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye"
        });
    },
    onLoad: function(t) {
        wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        }), this.getList();
    },
    pay: function(a) {
        var e = a.currentTarget.dataset.zid, n = a.currentTarget.dataset.yid, r = a.currentTarget.dataset.money, i = a.currentTarget.dataset.wz_num, u = a.currentTarget.dataset.wz_zhekou, c = a.currentTarget.dataset.jd_num, o = a.currentTarget.dataset.hh_num, s = a.currentTarget.dataset.times, d = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/zhuanjia.user_blyear",
            data: {
                zid: e,
                yid: n,
                openid: d,
                money: r,
                wz_num: i,
                wz_zhekou: u,
                jd_num: c,
                hh_num: o,
                times: s
            },
            success: function(a) {
                var e = a.data.created;
                r > "0.00" && "" != r ? t.util.request({
                    url: "entry/wxapp/zhuanjia.pay_year",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: d,
                        created: e,
                        money: r
                    },
                    success: function(t) {
                        wx.requestPayment({
                            timeStamp: t.data.timeStamp,
                            nonceStr: t.data.nonceStr,
                            package: t.data.package,
                            signType: t.data.signType,
                            paySign: t.data.paySign,
                            success: function(t) {
                                wx.showModal({
                                    title: "提示",
                                    content: "办理成功",
                                    success: function(t) {
                                        t.confirm && wx.switchTab({
                                            url: "/hyb_yl/tabBar/index/index"
                                        });
                                    }
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    }
                }) : wx.showModal({
                    title: "提示",
                    content: "办理成功",
                    success: function(t) {
                        t.confirm && wx.reLaunch({
                            url: "/hyb_yl/tabBar/index/index"
                        });
                    }
                });
            }
        });
    },
    getList: function() {
        var a = this, e = a.data.currentData;
        t.util.request({
            url: "entry/wxapp/user.user_yearcard",
            data: {
                openid: wx.getStorageSync("openid"),
                page: a.data.page,
                pagesize: a.data.pagesize,
                type: e
            },
            success: function(t) {
                var e = a.data.page + 1;
                a.setData({
                    page: e,
                    list: a.data.list.concat(t.data)
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getList();
    },
    onShareAppMessage: function() {}
});