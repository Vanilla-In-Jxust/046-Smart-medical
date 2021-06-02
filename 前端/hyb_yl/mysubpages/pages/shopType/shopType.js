var t = getApp();

Page({
    data: {
        fid: 0,
        loadingBoo: !0,
        moreBoo: !0,
        categories: [ {
            id: 1,
            name: "维生素"
        }, {
            id: 2,
            name: "维生素"
        }, {
            id: 3,
            name: "维生素"
        }, {
            id: 4,
            name: "维生素"
        } ],
        proList: [],
        hide: !0,
        index: "",
        filtant: [ "综合", "最新上架", "价格最低", "价格最高", "评价最多" ],
        arry: "0",
        serchName: "",
        serchList: []
    },
    serchShop: function(t) {
        console.log(t.detail.value);
        for (var e = t.detail.value, a = this.data.proList, o = [], s = 0; s < a.length; s++) -1 != a[s].sname.indexOf(e) && o.push(a[s]);
        this.setData({
            serchName: e,
            serchList: o
        });
    },
    filtes: function(t) {
        0 == t.currentTarget.dataset.index ? 1 == this.data.hide ? this.setData({
            hide: !1,
            index: 0
        }) : 0 == this.data.hide && this.setData({
            hide: !0
        }) : 1 == t.currentTarget.dataset.index && this.setData({
            index: 1,
            hide: !0
        });
    },
    choseitem: function(t) {
        this.setData({
            hide: !0,
            arry: t.currentTarget.dataset.index
        });
    },
    tapFun: function(e) {
        var a = this, o = e.target.dataset.fid;
        t.util.request({
            url: "entry/wxapp/allfenlgoods",
            data: {
                fid: o
            },
            success: function(t) {
                console.log(t), a.setData({
                    proList: t.data.flgoods,
                    categories: t.data.fenli
                });
            }
        });
    },
    shopdetail: function(t) {
        if (console.log(this.data.type), 1 == this.data.type) {
            console.log(this.data.type);
            var e = getCurrentPages();
            e[e.length - 2].setData({
                state: 1
            }), wx.navigateBack({
                detail: 1
            });
        }
    },
    onLoad: function(e) {
        var a = this;
        if (console.log(e.type), e.type) {
            e.type;
            t.util.request({
                url: "entry/wxapp/goods.allgoods",
                success: function(t) {
                    console.log(t), a.setData({
                        shop: t.data
                    });
                }
            }), a.setData({
                type: e.type
            });
        }
        var o = e.fid;
        a.setData({
            fid: o
        }), this.getAllfenlgoods, console.log(this.data.proList);
    },
    onReady: function() {
        this.getAllfenlgoods();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getAllfenlgoods: function() {
        var e = this, a = e.data.fid;
        t.util.request({
            url: "entry/wxapp/goods.allfenlgoods",
            data: {
                fid: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    proList: t.data
                });
            }
        });
    }
});