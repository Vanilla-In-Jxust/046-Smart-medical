Component({
    properties: {
        shop: {
            type: Array,
            value: []
        },
        num: {
            type: Number
        }
    },
    data: {},
    pageLifetimes: {
        show: function() {
            this.setData({
                type: this.properties.num
            });
        }
    },
    methods: {
        shopdetail: function(t) {
            var e = t.currentTarget.dataset.sid, a = t.currentTarget.dataset.sname, s = t.currentTarget.dataset.sthumb;
            if (1 == this.data.type) {
                console.log(this.data.type);
                var r = getCurrentPages();
                r[r.length - 2].setData({
                    sid: e,
                    sname: a,
                    sthumb: s
                }), wx.navigateBack({
                    detail: 1
                });
            } else wx.navigateTo({
                url: "/hyb_yl/onesubpages/pages/shopdetail/shopdetail"
            });
        }
    }
});