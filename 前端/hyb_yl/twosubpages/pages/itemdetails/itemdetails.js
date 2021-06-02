require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

var t = getApp();

Page({
    data: {
        img: "",
        maskey: !0,
        list: [],
        page: 0,
        pagesize: 10
    },
    mask_key: function() {
        this.setData({
            maskey: !0
        });
    },
    navicate: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    listitem: function(t) {
        var e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/details/details?title=" + e + "&id=" + a
        });
    },
    onLoad: function(e) {
        var a = e.id;
        this.setData({
            id: a
        }), this.getList(), t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                var e = t.data.ztcolor;
                wx.setNavigationBarTitle({
                    title: t.data.show_title
                }), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: e
                }), wx.setStorage({
                    key: "color",
                    data: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getList: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/answer.zhengzhuan",
            data: {
                keshi_one: e.data.id,
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