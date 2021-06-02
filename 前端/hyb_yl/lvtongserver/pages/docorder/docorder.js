var t = getApp();

Page({
    data: {
        tabitem: [ "待接诊", "已接诊", "已结束", "退款单", "已取消" ],
        docindex: 0,
        page: 0,
        pagesize: 10,
        orderlist: [ {
            state: 0
        }, {
            state: 1
        }, {
            state: 2
        }, {
            state: 3
        } ],
        ifpay: 1,
        list: [],
        did: "",
        zid: "",
        doc: ""
    },
    onLoad: function(t) {
        var a = t.title, e = t.did, d = t.zid, i = t.doc;
        "" != i && "undefined" != i && null != i && this.setData({
            doc: i
        }), "" != e && "undefined" != e && null != e ? this.setData({
            did: e
        }) : "" != d && "undefined" != d && null != d && this.setData({
            zid: d
        });
        var n = t.keyword;
        this.setData({
            title: a,
            keyword: n
        }), wx.setNavigationBarTitle({
            title: a + "订单"
        });
    },
    doctab: function(t) {
        var a = t.currentTarget.dataset.dex;
        this.setData({
            docindex: a,
            list: [],
            page: 0
        }), this.getOrder(a);
    },
    getOrder: function(a) {
        var e = this;
        e.data.did;
        "" == e.data.doc ? t.util.request({
            url: "entry/wxapp/green.guidance_order",
            data: {
                did: e.data.did,
                keyword: e.data.keyword,
                page: e.data.page,
                pagesize: e.data.pagesize,
                type: a
            },
            success: function(t) {
                var a = e.data.page + 1;
                e.setData({
                    page: a,
                    list: e.data.list.concat(t.data)
                });
            }
        }) : t.util.request({
            url: "entry/wxapp/green.baogao_order",
            data: {
                zid: e.data.zid,
                keyword: e.data.keyword,
                page: e.data.page,
                pagesize: e.data.pagesize,
                type: a
            },
            success: function(t) {
                var a = e.data.page + 1;
                e.setData({
                    page: a,
                    list: e.data.list.concat(t.data)
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this.data.docindex;
        this.getOrder(t);
    },
    jiezhen: function(a) {
        var e = this, d = a.currentTarget.dataset.id, i = e.data.did, n = e.data.zid;
        if ("1" == e.data.doc) n = wx.getStorageSync("zid"); else i = wx.getStorageSync("did");
        wx.showModal({
            title: "提示",
            content: "是否确认接诊",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/green.order_accept",
                    data: {
                        id: d,
                        did: i,
                        zid: n
                    },
                    success: function(t) {
                        wx.showModal({
                            title: "提示",
                            content: t.data.message,
                            showCancel: !1,
                            success: function(t) {
                                e.setData({
                                    page: 0,
                                    list: []
                                }), e.getOrder(e.data.docindex);
                            }
                        });
                    }
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getchar: function(t) {
        var a = t.currentTarget.dataset.id, e = (this.data.zid, t.currentTarget.dataset.did), d = t.currentTarget.dataset.key_words, i = t.currentTarget.dataset.j_id, n = t.currentTarget.dataset.back_orser, r = t.currentTarget.dataset.openid, s = t.currentTarget.dataset.ifpay, o = this.data.docindex;
        wx.navigateTo({
            url: "/hyb_yl/lvtongserver/pages/zhuanjiahuida/zhuanjiahuida?id=" + a + "&did=" + e + "&key_words=" + d + "&j_id=" + i + "&back_orser=" + n + "&openid=" + r + "&ifpay=" + s + "&docindex=" + o
        });
    }
});