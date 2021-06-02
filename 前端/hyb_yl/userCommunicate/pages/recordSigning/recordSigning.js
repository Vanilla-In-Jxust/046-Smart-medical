var e, t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page((e = {
    data: {
        list: [],
        page: 0,
        pagesize: 10
    },
    onLoad: function(e) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
    },
    getOrder: function() {
        var e = this, t = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/user.qianyuelist",
            data: {
                openid: t,
                page: e.data.page,
                pagesize: e.data.pagesize
            },
            success: function(t) {
                var a = e.data.page + 1;
                e.setData({
                    list: e.data.list.concat(t.data),
                    page: a
                });
            }
        });
    },
    renewpay: function(e) {
        e.currentTarget.dataset.tid, e.currentTarget.dataset.oid;
    },
    onReady: function() {},
    onShow: function() {
        this.getOrder();
    },
    teamdetail: function(e) {
        var t = e.currentTarget.dataset.tid, a = e.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/servercenter/servercenter?id=" + t + "&title=" + a
        });
    }
}, (0, t.default)(e, "renewpay", function() {
    wx.navigateTo({
        url: "/hyb_yl/zhuanjiasubpages/pages/huanzhezhifu/huanzhezhifu"
    });
}), (0, t.default)(e, "onHide", function() {}), (0, t.default)(e, "onUnload", function() {}), 
(0, t.default)(e, "onPullDownRefresh", function() {}), (0, t.default)(e, "onReachBottom", function() {
    this.getOrder();
}), (0, t.default)(e, "detail", function(e) {
    var t = e.currentTarget.dataset.t_id, a = e.currentTarget.dataset.sid, n = e.currentTarget.dataset.name, r = e.currentTarget.dataset.teamname, i = e.currentTarget.dataset.q_id, u = e.currentTarget.dataset.ordernum;
    wx.navigateTo({
        url: "/hyb_yl/doctor/pages/familydoctor/teams/teams?t_id=" + t + "&sid=" + a + "&key=zhuanjiatuandui&name=" + n + "&teamname=" + r + "&q_id=" + i + "&ismyinfo=1&ordernum=" + u
    });
}), (0, t.default)(e, "dandetail", function() {
    wx.navigateTo({
        url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?myinfo=open"
    });
}), e));