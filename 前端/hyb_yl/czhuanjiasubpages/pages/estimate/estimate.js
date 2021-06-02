var a = getApp();

Page({
    data: {
        page: 0,
        pagesize: 10,
        list: [],
        zid: "",
        key: ""
    },
    onLoad: function(a) {
        var t = a.key;
        this.setData({
            key: t
        }), null != a.zid && this.setData({
            zid: a.zid
        }), this.getList();
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
    },
    getList: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/zhuanjia.allpingjia",
            data: {
                key: t.data.key,
                page: t.data.page,
                pagesize: t.data.pagesize,
                zid: t.data.zid
            },
            success: function(a) {
                t.data.page;
                t.setData({
                    page: t.data.page,
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