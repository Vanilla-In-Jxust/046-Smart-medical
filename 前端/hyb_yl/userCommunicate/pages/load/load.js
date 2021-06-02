var t = getApp();

Page({
    data: {
        list: []
    },
    onLoad: function(o) {
        var n = this, a = o.spid, e = wx.getStorageSync("color"), s = o.gsname, i = o.orders, d = o.shname, r = (a = o.spid, 
        o.com), u = o.num, c = o.orderstatus, l = o.id;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), t.util.request({
            url: "entry/wxapp/index.kuaidiselect",
            data: {
                spid: a,
                com: r,
                num: u
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var o = t.data.data;
                "500" == t.data.returnCode ? n.setData({
                    list: [],
                    type: 0
                }) : (o.map(function(t, o) {
                    t.id = o;
                }), n.setData({
                    list: o,
                    type: 1
                }));
            }
        }), n.setData({
            gsname: s,
            orders: i,
            shname: d,
            spid: a,
            id: l,
            orderstatus: c,
            num: u
        }), this.getGoodsdetail();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getGoodsdetail: function() {
        var o = this.data.id;
        t.util.request({
            url: "entry/wxapp/goods.detail",
            data: {
                sid: o
            },
            success: function(t) {
                console.log(t);
            }
        });
    }
});