var t = getApp();

Page({
    data: {
        currentData: 0,
        tab: [ {
            name: "全部"
        }, {
            name: "待支付"
        }, {
            name: "待解读"
        }, {
            name: "已完成"
        } ],
        current: 0,
        orderlist: [],
        sicklist: []
    },
    lookreport: function(t) {
        1 == t.currentTarget.dataset.status ? wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/report_detail/report_detail"
        }) : wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport"
        });
    },
    chooseTab: function(t) {
        var e = t.target.dataset.i;
        this.setData({
            current: e,
            currentData: e
        }), console.log(e), this.getAlljieduorder(e);
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.setData({
            orderlist: this.data.sicklist
        }), this.getAlljieduorder();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getAlljieduorder: function(e) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/user.alljiedu",
            data: {
                openid: wx.getStorageSync("openid"),
                index: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    unscramble: t.data
                });
            }
        });
    },
    reportDetailClick: function(t) {
        t.currentTarget.dataset;
        var e = t.currentTarget.dataset.orders, a = t.currentTarget.dataset.j_id, r = (this.data.key_words, 
        t.currentTarget.dataset.zid), n = t.currentTarget.dataset.ifpay, o = t.currentTarget.dataset.money, i = t.currentTarget.dataset.overtime, s = t.currentTarget.dataset.id, u = this.data.currentData, d = t.currentTarget.dataset.ifgb;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhifuend/zhifuend?id=" + s + "&txt=yes&zid=" + r + "&back_orser=" + e + "&key_words=tijianjiedu&j_id=" + a + "&ifpay=" + n + "&money=" + o + "&overtime=" + i + "&currentData=" + u + "&ifgb=" + d
        });
    }
});