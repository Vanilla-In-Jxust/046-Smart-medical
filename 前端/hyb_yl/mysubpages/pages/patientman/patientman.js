var t = getApp();

Page({
    data: {
        tabitem: [ "签约患者", "普通患者", "年卡患者" ],
        docindex: 0,
        qyPatient: [ {}, {}, {} ],
        ptPatient: [ {}, {}, {}, {} ],
        nkPatient: [ {}, {}, {}, {}, {} ],
        list: [],
        page: 0,
        pagesize: 10
    },
    doctab: function(t) {
        var a = t.currentTarget.dataset.dex;
        this.setData({
            docindex: a,
            list: [],
            page: 0
        }), wx.showLoading({
            title: "login.."
        }), this.getList(a);
    },
    onLoad: function(t) {
        var a = t.zid, e = t.state - 1;
        this.setData({
            zid: a,
            docindex: e
        }), this.getList(e);
    },
    getList: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.getqylistser",
            data: {
                goods_id: e.data.zid,
                cerated_type: 7,
                index: a,
                page: e.data.page,
                pagesize: e.data.pagesize
            },
            success: function(t) {
                console.log(t);
                var a = e.data.page + 1;
                e.setData({
                    list: e.data.list.concat(t.data),
                    page: a
                }), wx.hideLoading();
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getList(this.data.docindex);
    },
    onShareAppMessage: function() {},
    see: function(t) {
        var a = t.currentTarget.dataset.change, e = t.currentTarget.dataset.openid, n = t.currentTarget.dataset.names;
        "1" == a ? wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/danganList/danganList?openid=" + e + "&doc=1&type=1&titlme=" + n
        }) : wx.showToast({
            title: "患者未授权",
            icon: "none"
        });
    },
    tongguo: function(a) {
        var e = this, n = a.currentTarget.dataset.id, i = e.data.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.updateqianyue",
            data: {
                id: n
            },
            success: function(a) {
                console.log(a), t.util.request({
                    url: "entry/wxapp/zhuanjia.getqylistser",
                    data: {
                        goods_id: i,
                        cerated_type: 7
                    },
                    success: function(t) {
                        console.log(t), e.setData({
                            list: t.data
                        });
                    }
                });
            }
        });
    },
    jujue: function(a) {
        var e = this, n = a.currentTarget.dataset.id, i = e.data.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.updatejujueqianyue",
            data: {
                id: n
            },
            success: function(a) {
                console.log(a), t.util.request({
                    url: "entry/wxapp/zhuanjia.getqylistser",
                    data: {
                        goods_id: i,
                        cerated_type: 7
                    },
                    success: function(t) {
                        console.log(t), e.setData({
                            list: t.data
                        });
                    }
                });
            }
        });
    },
    jiechu: function(a) {
        var e = this, n = a.currentTarget.dataset.id, i = e.data.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.updatejiechuqianyue",
            data: {
                id: n
            },
            success: function(a) {
                console.log(a), t.util.request({
                    url: "entry/wxapp/zhuanjia.getqylistser",
                    data: {
                        goods_id: i,
                        cerated_type: 7
                    },
                    success: function(t) {
                        console.log(t), e.setData({
                            list: t.data
                        });
                    }
                });
            }
        });
    }
});