var t = getApp();

Page({
    data: {
        searchvals: "",
        list: [],
        keyword: "",
        page: 0,
        pagesize: 10,
        chatwo: [ {
            title: "体检解读",
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/cha4.jpg?sign=d19473581d0352ced01382431ee77d0e&t=1585151520",
            type: "3"
        }, {
            title: "家庭常备药",
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/cha5.jpg?sign=7518761189e90e64b9673a62766cca06&t=1585151533",
            type: "4"
        }, {
            title: "法定传染病",
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/cha6.jpg?sign=baf97cc04a10c877796236eb87b50641&t=1585151543",
            type: "5"
        } ]
    },
    handleTap: function(t) {
        var a = t.currentTarget.dataset.type;
        "查疾病" == t.currentTarget.dataset.detail ? wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/more/more"
        }) : wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/itemdetail/itemdetail?type=" + a
        });
    },
    todetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/details/details?id=" + a + "&title=" + e
        });
    },
    getvalus: function(t) {
        this.setData({
            keyword: t.detail.value
        });
    },
    searchs: function() {
        this.setData({
            list: [],
            page: 0
        }), this.getHot(this.data.keyword);
    },
    onLoad: function(t) {
        this.getHot("");
    },
    getHot: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/answer.hot_tank",
            data: {
                keyword: a,
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
        var t = this.data.keyword;
        this.getHot(t);
    },
    onShareAppMessage: function() {}
});