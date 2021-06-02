var e = getApp();

Page({
    data: {
        tabIndex: 0,
        feileiIndex: !1,
        fenleiList: [ "专科", "脑科", "全科", "口腔科科", "肠胃科" ],
        fenleiText: "全部分类",
        choseItemIndex: 0,
        page: 0,
        pagesize: 10,
        groupid: "",
        order: "",
        list: []
    },
    goback: function(e) {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/specialtyContent/specialtyContent?hid=" + e.currentTarget.dataset.hid
        });
    },
    stor_btn: function(e) {
        console.log(e.currentTarget.dataset.index), this.setData({
            tabIndex: e.currentTarget.dataset.index,
            order: e.currentTarget.dataset.index,
            page: 0,
            list: []
        }), this.getList();
    },
    chose_fenlei: function(e) {
        this.setData({
            feileiIndex: !this.data.feileiIndex
        });
    },
    chose_item: function(e) {
        var t = e.currentTarget.dataset.index, a = e.currentTarget.dataset.id, i = e.currentTarget.dataset.name;
        "" == a ? this.setData({
            fenleiText: "全部分类",
            feileiIndex: !this.data.feileiIndex,
            choseItemIndex: 0,
            groupid: "",
            page: 0,
            list: []
        }) : this.setData({
            fenleiText: i,
            feileiIndex: !this.data.feileiIndex,
            choseItemIndex: t,
            groupid: a,
            page: 0,
            list: []
        }), this.getList();
    },
    onLoad: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/index.hospital_type",
            success: function(e) {
                a.setData({
                    type_arr: e.data
                });
            }
        }), a.getList();
    },
    getList: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/index.allhospital",
            data: {
                page: t.data.page,
                pagesize: t.data.pagesize,
                groupid: t.data.groupid,
                order: t.data.order
            },
            success: function(e) {
                var a = t.data.page;
                a += 1, t.setData({
                    page: a,
                    list: t.data.list.concat(e.data)
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
        this.getList();
    },
    onShareAppMessage: function() {}
});