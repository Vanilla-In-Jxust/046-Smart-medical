var t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), e = getApp();

Page({
    data: {
        header: [],
        managers: [],
        members: [],
        noFlag: !1,
        searchFlag: 1,
        teamitem: [ "团队成员", "邀请记录" ],
        teamindex: 0,
        type: 0,
        list: [],
        page: 0,
        pagesize: 10,
        myadd: [ {}, {} ],
        myyq: [ {}, {}, {}, {} ],
        id: ""
    },
    teamtab: function(t) {
        var e = t.currentTarget.dataset.dex;
        this.setData({
            teamindex: e,
            type: e,
            page: 0,
            list: []
        }), this.getList(e);
    },
    yaoqing: function(a) {
        var i, n = this, o = a.currentTarget.dataset.y_zid, r = a.currentTarget.dataset.y_openid, s = wx.getStorageSync("openid"), d = wx.getStorageSync("zid");
        e.util.request({
            url: "entry/wxapp/team.invitation",
            data: (i = {
                openid: s,
                zid: d,
                y_zid: o,
                y_openid: r
            }, (0, t.default)(i, "y_openid", r), (0, t.default)(i, "tid", n.data.id), i),
            success: function(t) {
                t.data.code, wx.showToast({
                    title: t.data.message
                }), n.setData({
                    page: 0,
                    list: []
                }), setTimeout(function() {
                    n.getList(1);
                }, 500);
            }
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var a = t.id;
        this.setData({
            id: a
        }), this.getList(0);
    },
    getList: function(t) {
        var a = this;
        e.util.request({
            url: "entry/wxapp/team.team_people",
            data: {
                id: a.data.id,
                page: a.data.page,
                pagesize: a.data.pagesize,
                type: t
            },
            success: function(t) {
                var e = a.data.page + 1;
                a.setData({
                    list: a.data.list.concat(t.data),
                    page: e
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
        var t = this.dat.type;
        this.getList(t);
    },
    onShareAppMessage: function() {}
});