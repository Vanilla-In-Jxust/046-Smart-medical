var t = getApp();

Page({
    data: {
        tabitem: [ "订单流水", "提现流水" ],
        docindex: 0,
        capitalist: [ {}, {}, {} ],
        did: "",
        keyword: "",
        page: 0,
        pagesize: 10,
        list: []
    },
    doctab: function(t) {
        var a = t.currentTarget.dataset.dex;
        this.setData({
            docindex: a
        });
    },
    onLoad: function(t) {
        var a = t.did, e = t.keyword;
        this.setData({
            did: a,
            keyword: e
        }), this.getList();
    },
    getList: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/green.pay_list",
            data: {
                did: a.data.did,
                openid: wx.getStorageSync("openid"),
                page: a.data.page,
                pagesize: a.data.pagesize,
                keyword: a.data.keyword
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