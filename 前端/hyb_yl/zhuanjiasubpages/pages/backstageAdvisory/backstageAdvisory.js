var t = require("../../../../template/backstageTemplate.js"), a = (function(t) {}(), 
getApp()), e = 1;

Page({
    data: {
        curHdIndex: 1,
        type: "0",
        index: 5,
        page: 0,
        pagesize: 10,
        list: [],
        pageOne: 0,
        pageTwo: 0,
        prenumber: 20,
        tsid: 1,
        loadingBoo: !0,
        moreBooOne: !0,
        moreBooTwo: !0,
        communityListOne: [],
        communityListTwo: [],
        url: "patient/community/list/",
        oneBoo: !1,
        twoBoo: !1,
        mask: !0,
        currindex: 0,
        itemList: [],
        ismore: !0,
        teamitem: [ "我创建的", "我加入的" ],
        teamindex: 0,
        myfound: [ {}, {}, {} ],
        myadd: [ {}, {} ],
        keyword: ""
    },
    teamindex: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.zid;
        wx.getStorageSync("zid") == e ? wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/teamDetails/teamDetails?id=" + a
        }) : wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/teamcenters/teamcenters?id=" + a
        });
    },
    agree: function(t) {
        var e = this, i = t.currentTarget.dataset.id, o = t.currentTarget.dataset.status;
        wx.showModal({
            title: "提示",
            content: "确认加入该团队吗？",
            success: function(t) {
                t.confirm && a.util.request({
                    url: "entry/wxapp/zhuanjia.addteam",
                    data: {
                        zid: wx.getStorageSync("zid"),
                        id: i,
                        status: o
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "加入成功"
                        }), e.setData({
                            page: 0,
                            list: []
                        }), wx.setTimeout(function() {
                            e.getList(e.data.type, e.data.keyword);
                        }, 500);
                    }
                });
            }
        });
    },
    teamtab: function(t) {
        var a = t.currentTarget.dataset.dex;
        this.setData({
            type: a,
            page: 0,
            list: []
        }), this.getList(a, this.data.keyword);
    },
    createteam: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/createTeam/createTeam"
        });
    },
    onLoad: function(a) {
        t.tabbar("tabBar", 1, this);
        var i = wx.getStorageSync("color");
        this.setData({
            bgc: i
        }), e = 1, this.getAllshare(e);
        i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
        this.getList(0, "");
    },
    getList: function(t, e) {
        var i = this;
        a.util.request({
            url: "entry/wxapp/zhuanjia.teamlists",
            data: {
                zid: wx.getStorageSync("zid"),
                page: i.data.page,
                pagesize: i.data.pagesize,
                type: t,
                keyword: e
            },
            success: function(t) {
                var a = i.data.page + 1;
                i.setData({
                    page: a,
                    list: i.data.list.concat(t.data)
                });
            }
        });
    },
    changes: function(t) {
        var a = t.detail.value;
        this.setData({
            keyword: a
        });
    },
    searchs: function() {
        var t = this.data.type, a = this.data.keyword;
        this.setData({
            page: 0,
            list: []
        }), this.getList(t, a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data.type, a = this.data.keyword;
        this.getList(t, a);
    },
    onShareAppMessage: function() {},
    addCommunity: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/addDynamic/addDynamic"
        });
    },
    getAllshare: function(t) {
        var e = this;
        a.util.request({
            url: "entry/wxapp/share.allshare",
            data: {
                openid: wx.getStorageSync("openid"),
                page: t,
                pagback: 5,
                state: 1
            },
            success: function(t) {
                console.log(t), t.data.length < 5 && e.setData({
                    ismore: !1
                });
                var a = e.data.itemList;
                console.log(a);
                for (var i = t.data.length, o = 0; o < i; o++) a.push(t.data[o]);
                wx.hideLoading(), e.setData({
                    communityListOne: a,
                    page: 1
                });
            }
        });
    },
    previewImage: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index, e = t.currentTarget.dataset.url, i = t.currentTarget.dataset.data;
        console.log(a, e, i), wx.previewImage({
            current: e,
            urls: i
        });
    },
    scrolltolower: function() {
        console.log(this.data.ismore), this.data.ismore && (e++, console.log(e), this.getAllshare(e));
    }
});