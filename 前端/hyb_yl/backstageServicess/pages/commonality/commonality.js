var t = getApp();

Page({
    data: {
        show: !1,
        num: 0,
        page: 0,
        prenumber: 6,
        cdType: "",
        wzshow: !0
    },
    particulars: function(t) {},
    dictionaries: function(t) {},
    clockColor: function(t) {
        console.log(t.target.dataset.num), console.log(t.target.dataset.id);
        this.setData({
            into_id: t.currentTarget.dataset.ueid,
            num: t.target.dataset.num,
            cdType: t.target.dataset.id,
            hj_id: t.target.dataset.id,
            show: !1,
            arr: "",
            page: 0,
            noFlag: !1
        }), this.getAllhjfllist();
    },
    clickshow: function(t) {
        this.setData({
            show: !0
        });
    },
    clickhide: function(t) {
        this.setData({
            show: !1
        });
    },
    onclick1: function(t) {},
    lower1: function() {},
    onLoad: function(t) {
        var a = t.hj_id;
        this.setData({
            hj_id: a
        }), this.getAllhjfllist();
    },
    onShow: function() {},
    share: function(t) {},
    getAllhjfllist: function() {
        var a = this, i = a.data.hj_id;
        console.log(i), t.util.request({
            url: "entry/wxapp/huanjiao.allhjfenl",
            data: {
                hj_id: i,
                op: "post"
            },
            success: function(t) {
                console.log(t);
                var i = t.data.fenl, o = t.data.hjlist;
                a.setData({
                    Wpost: i,
                    hjlist: o
                });
            }
        });
    }
});