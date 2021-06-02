var a = getApp();

Page({
    data: {
        wendaArr: [],
        list: [],
        page: 0,
        pagesize: 10,
        yid: "",
        did: ""
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
        var n = a.y_id;
        "" != n && "undefined" != n && null != n && this.setData({
            yid: n
        }), this.getList();
    },
    getList: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/yaoshi.yaoshi_tixian",
            data: {
                yid: t.data.yid,
                page: t.data.page,
                pagesize: t.data.pagesize
            },
            success: function(a) {
                var n = t.data.page + 1;
                t.setData({
                    page: n,
                    list: t.data.list.concat(a.data)
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