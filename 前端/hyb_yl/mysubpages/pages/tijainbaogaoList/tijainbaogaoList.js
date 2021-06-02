var t = getApp();

Page({
    data: {
        type: "体检",
        reportObj: {},
        tabdex: "",
        popshow: !1,
        page: 0,
        pagesize: 10,
        list: [],
        status: "",
        sick_index: "",
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
                items: "体检报告",
                checked: !1
            }, {
                items: "基因报告",
                checked: !1
            }, {
                items: "检验报告",
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
        sicklist: [],
        tabState: 0
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
    chose_tab: function(t) {
        var e = t.currentTarget.dataset.index;
        if ("0" == e) var a = "体检";
        if ("1" == e) a = "基因";
        if ("2" == e) a = "检验";
        var i = this.data.status;
        console.log(e, a, i), this.setData({
            tabState: e,
            type: a,
            list: []
        }), wx.showLoading({
            title: "加载中..."
        }), this.getAlltijianbaogao("", a, "");
    },
    onLoad: function(t) {
        if (t.openid) t.openid; else wx.getStorageSync("openid");
        t.zid && this.setData({
            zid: t.zid
        });
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.getAlltijianbaogao("", "", "");
    },
    reportDetailClick: function(t) {
        var e = t.currentTarget.dataset.id;
        if (this.data.zid) var a = 1; else a = 0;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport?id=" + e + "&ifzj=" + a
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
                openid: s.data.openid,
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
                }), wx.hideLoading();
            }
        });
    }
});