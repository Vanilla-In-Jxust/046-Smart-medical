var t = getApp();

Page({
    data: {
        needFix: !1,
        bannerHeight: 0,
        searchCont: "",
        openmore: !1,
        tabdex: "",
        popshow: !1,
        list: [],
        page: 0,
        pagesize: 10
    },
    hidepop: function() {
        this.setData({
            popshow: !1,
            tabdex: ""
        });
    },
    qianyue: function(e) {
        var a = this;
        wx.showModal({
            title: "签约中,签约后才可使用专家服务",
            content: "是否重新申请",
            success: function(i) {
                i.confirm && t.util.request({
                    url: "entry/wxapp/zhuanjia.savecollectup",
                    data: {
                        goods_id: e.currentTarget.dataset.zid,
                        cerated_type: 7,
                        ifqianyue: 1,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(t) {
                        a.setData({
                            page: 0,
                            list: []
                        }), a.getList();
                    }
                });
            }
        });
    },
    authorize: function(e) {
        var a = this, i = e.currentTarget.dataset.id, n = e.currentTarget.dataset.change;
        t.util.request({
            url: "entry/wxapp/zhuanjia.upauthorize",
            data: {
                id: i,
                change: n
            },
            success: function(t) {
                a.setData({
                    page: 0,
                    list: []
                }), a.getList();
            }
        });
    },
    jieyue: function(e) {
        var a = this;
        wx.showModal({
            title: "签约中,签约后才可使用专家服务",
            content: "是否取消申请",
            success: function(i) {
                i.confirm && t.util.request({
                    url: "entry/wxapp/zhuanjia.savecollectup",
                    data: {
                        goods_id: e.currentTarget.dataset.zid,
                        cerated_type: 7,
                        ifqianyue: 3,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(t) {
                        a.setData({
                            page: 0,
                            list: []
                        }), a.getList();
                    }
                });
            }
        });
    },
    quxiao: function(e) {
        var a = this;
        wx.showModal({
            title: "签约中,签约后才可使用专家服务",
            content: "是否取消申请",
            success: function(i) {
                i.confirm && t.util.request({
                    url: "entry/wxapp/zhuanjia.savecollectup",
                    data: {
                        goods_id: e.currentTarget.dataset.zid,
                        cerated_type: 7,
                        ifqianyue: 4,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(t) {
                        a.setData({
                            page: 0,
                            list: []
                        }), a.getList();
                    }
                });
            }
        });
    },
    tabbtn: function(t) {
        t.currentTarget.dataset.dex === this.data.tabdex ? this.setData({
            popshow: !1,
            tabdex: ""
        }) : (wx.pageScrollTo({
            scrollTop: 100
        }), this.setData({
            popshow: !0,
            tabdex: t.currentTarget.dataset.dex
        }));
    },
    itemchecked: function(t) {
        var e = this.data.tablist, a = this.data.tabdex, i = t.currentTarget.dataset.dex;
        e[a].list.map(function(t) {
            t.checked = !1;
        }), e[a].types = e[a].list[i].items, e[a].list[i].checked = !0, this.setData({
            tablist: e,
            popshow: !1,
            tabdex: ""
        });
    },
    openmore: function() {
        this.setData({
            openmore: !this.data.openmore
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var a = t.typs;
        this.setData({
            typs: a
        }), "siren_doc" == a ? wx.setNavigationBarTitle({
            title: "我签约的医生"
        }) : "gz_doc" == a ? wx.setNavigationBarTitle({
            title: "我关注的医生"
        }) : "gz_team" == a && wx.setNavigationBarTitle({
            title: "我关注的团队"
        }), this.getList();
    },
    getList: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.user_collect",
            data: {
                openid: wx.getStorageSync("openid"),
                page: e.data.page,
                pagesize: e.data.pagesize,
                typs: e.data.typs
            },
            success: function(t) {
                e.data.page;
                e.setData({
                    list: e.data.list.concat(t.data),
                    page: e.data.page
                });
            }
        });
    },
    onPageScroll: function(t) {
        var e = t.scrollTop;
        this.data.needFix;
        e > 10 + this.data.bannerHeight ? this.setData({
            needFix: !0
        }) : e < 20 && this.setData({
            needFix: !1
        }), this.setData({
            bannerHeight: e
        });
    },
    doctoritem: function(t) {
        var e = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + e
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