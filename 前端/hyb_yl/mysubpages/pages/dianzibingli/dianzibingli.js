var t = getApp();

Page({
    data: {
        tabitem: [ "待接诊", "已接诊", "已结束", "已退回" ],
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
        list: [],
        ifpay: 1
    },
    onLoad: function(t) {
        var a = t.zid, e = t.openid;
        this.setData({
            zid: a,
            openid: e
        }), wx.setNavigationBarTitle({
            title: "电子病历"
        });
    },
    getOrder: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.all_userorder",
            data: {
                openid: a.data.openid,
                page: a.data.page,
                pagesize: a.data.pagesize
            },
            success: function(t) {
                var e = a.data.page + 1;
                a.setData({
                    list: a.data.list.concat(t.data),
                    page: e
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getOrder();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getOrder();
    },
    getchar: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.zid, i = t.currentTarget.dataset.typedate, r = t.currentTarget.dataset.key_words, n = t.currentTarget.dataset.j_id, d = t.currentTarget.dataset.back_orser, s = t.currentTarget.dataset.openid, o = t.currentTarget.dataset.overtime, u = t.currentTarget.dataset.ifpay, c = this.data.docindex;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiahuida/zhuanjiahuida?id=" + a + "&zid=" + e + "&typedate=" + i + "&key_words=" + r + "&j_id=" + n + "&back_orser=" + d + "&openid=" + s + "&overtime=" + o + "&ifpay=" + u + "&docindex=" + c + "&suc=suc"
        });
    }
});