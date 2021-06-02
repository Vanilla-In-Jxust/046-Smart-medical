var r = getApp();

Component({
    properties: {},
    data: {
        reportArr: []
    },
    methods: {
        setListData: function() {
            var t = r.globalData.reportArr;
            this.setData({
                reportArr: t
            }), r.globalData.reportArr = [], this.calculationLeft(t);
        },
        calculationLeft: function(r) {
            console.log(r);
            for (var t = 0; t < r.length; t++) for (var e = 0; e < r[t].secArr1.length; e++) if (3 == r[t].secArr1[e].displaytype) {
                var a = Number(r[t].secArr1[e].highStandard) + (Number(r[t].secArr1[e].highStandard) - Number(r[t].secArr1[e].lowStandard)), s = Number(r[t].secArr1[e].lowStandard) - (Number(r[t].secArr1[e].highStandard) - Number(r[t].secArr1[e].lowStandard)), o = a - s, n = Number(r[t].secArr1[e].description), i = n - s;
                console.log(a, s, n, i), r[t].secArr1[e].left = i / o * 100;
            }
            this.setData({
                reportArr: r
            });
        },
        openClick: function(r) {
            var t = r.currentTarget.dataset.index, e = r.currentTarget.dataset.idx, a = this.data.reportArr;
            a[e].project[t].open = !0, this.setData({
                reportArr: a
            });
        },
        closeClick: function(r) {
            var t = r.currentTarget.dataset.index, e = r.currentTarget.dataset.idx, a = this.data.reportArr;
            a[e].project[t].open = !1, this.setData({
                reportArr: a
            });
        },
        abnormalClick: function() {
            this.triggerEvent("abnormal", {});
        },
        suggestion: function() {
            wx.navigateTo({
                url: "/hyb_yl/mysubpages/pages/suggestion/suggestion"
            });
        }
    },
    ready: function() {
        this.setListData();
    }
});