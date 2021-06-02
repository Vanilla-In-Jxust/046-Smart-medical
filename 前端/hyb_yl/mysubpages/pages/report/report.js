var t = getApp();

Page({
    data: {
        reportObj: {},
        tabdex: "",
        popshow: !1,
        page: 0,
        pagesize: 10,
        list: [],
        status: "",
        sick_index: "",
        type: "",
        tablist: [ {
            types: "所有人",
            list: [ {
                items: "我",
                checked: !1
            }, {
                items: "家庭成员",
                checked: !1
            }, {
                items: "亲戚",
                checked: !1
            }, {
                items: "朋友",
                checked: !1
            }, {
                items: "其他",
                checked: !1
            } ]
        }, {
            types: "报告类型",
            list: [ {
                items: "检验报告",
                checked: !1
            }, {
                items: "基因报告",
                checked: !1
            }, {
                items: "体检报告",
                checked: !1
            } ]
        }, {
            types: "解读状态",
            list: [ {
                items: "未解读",
                checked: !1
            }, {
                items: "已解读",
                checked: !1
            } ]
        } ],
        sicklist: []
    },
    tabbtn: function(t) {
        t.currentTarget.dataset.dex === this.data.tabdex ? this.setData({
            popshow: !1,
            tabdex: ""
        }) : this.setData({
            popshow: !0,
            tabdex: t.currentTarget.dataset.dex
        });
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
    onLoad: function(t) {
        wx.getStorageSync("openid");
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.getAlltijianbaogao("", "", "");
    },
    reportDetailClick: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport?id=" + e + "&ifzj=0"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data.sick_index, e = this.data.type, a = this.data.status;
        this.getAlltijianbaogao(t, e, a);
    },
    onShareAppMessage: function() {},
    getAlltijianbaogao: function(e, a, i) {
        var s = this;
        t.util.request({
            url: "entry/wxapp/user.tijianjiedu",
            data: {
                openid: wx.getStorageSync("openid"),
                sick_index: e,
                status: i,
                type: a,
                page: s.data.page,
                pagesize: s.data.pagesize
            },
            success: function(t) {
                s.data.page;
                s.setData({
                    list: s.data.list.concat(t.data)
                });
            }
        });
    }
});