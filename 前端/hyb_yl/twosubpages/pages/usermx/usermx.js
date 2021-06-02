var a = getApp();

Page({
    data: {
        wendaArr: [],
        list: [],
        page: 0,
        pagesize: 10,
        zid: "",
        did: ""
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
        var e = a.did, n = a.zid;
        "" != e && "undefined" != e && null != e && this.setData({
            did: e
        }), "" != n && "undefined" != n && null != n && this.setData({
            zid: n
        }), this.getList();
    },
    getList: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/green.tixian_list",
            data: {
                did: t.data.did,
                zid: t.data.zid,
                page: t.data.page,
                pagesize: t.data.pagesize
            },
            success: function(a) {
                if (a.data.length >= 10) var e = t.data.page + 1; else e = t.data.page;
                t.setData({
                    page: e,
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