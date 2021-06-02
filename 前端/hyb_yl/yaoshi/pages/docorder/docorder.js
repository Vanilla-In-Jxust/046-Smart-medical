var t = getApp();

Page({
    data: {
        page: 0,
        pagesize: 10,
        list: [],
        typs: "",
        y_id: ""
    },
    onLoad: function(t) {
        var a = t.y_id, e = t.typs;
        if ("yishen" == e) var i = "已省"; else if ("shenhe" == e) i = "审核";
        wx.setNavigationBarTitle({
            title: i + "订单"
        }), this.setData({
            y_id: a,
            typs: e
        });
    },
    getOrder: function() {
        var a = this, e = a.data.typs, i = a.data.y_id;
        t.util.request({
            url: "enret/wxapp/yaoshi.order_list",
            data: {
                y_id: i,
                page: a.data.page,
                pagesize: a.data.pagesize,
                typs: e
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
    shenhe: function(a) {
        var e = this, i = a.currentTarget.dataset.id, s = a.currentTarget.dataset.status;
        wx.showModal({
            title: "提示",
            content: "是否确认审核改订单",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/yaoshi.shenhe_order",
                    data: {
                        id: i,
                        y_id: e.data.y_id,
                        status: s
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "审核成功"
                        }), e.setData({
                            page: 0,
                            list: []
                        }), setTimeout(function() {
                            e.getOrder();
                        }, 500);
                    }
                });
            }
        });
    },
    todetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.orderstatus;
        wx.navigateTo({
            url: "/hyb_yl/yaoshi/pages/chufangjianyi/chufangjianyi?id=" + a + "&orderStatus=" + e + "&xufang=1&y_id=" + this.data.y_id
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            page: 0,
            list: []
        }), this.getOrder();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getOrder();
    }
});