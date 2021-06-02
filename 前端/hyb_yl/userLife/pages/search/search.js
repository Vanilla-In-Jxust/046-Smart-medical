var a = getApp();

Page({
    data: {
        checkword: "",
        searchtype: [ {
            picimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/yisheng.png?sign=d13163b9e958d543e5065076e94ed61e&t=1591607233",
            names: "医生"
        }, {
            picimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/yiyuan.png?sign=75d413bcae7e1092228ace45acc5d024&t=1591607253",
            names: "医院"
        } ],
        searchArr: [],
        resultif: !1,
        searchtab: [ "推荐", "医生", "医院" ],
        searchindex: 0,
        sindex: 0,
        zixun: [ {}, {}, {}, {} ],
        problem: [ {}, {}, {}, {} ],
        scrollTop: 0,
        searchlists: [ {
            names: "泰尔丝(一维A酸软胶囊)",
            citys: "上海宜信延安药业有限公司",
            grade: !0
        }, {
            names: "桂曼(盐酸米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "泰尔丝(一维A酸软胶囊)",
            citys: "上海宜信延安药业有限公司",
            grade: !0
        }, {
            names: "桂曼(盐酸米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "泰尔丝(一维A酸软胶囊)",
            citys: "上海宜信延安药业有限公司",
            grade: !0
        }, {
            names: "桂曼(盐酸米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "泰尔丝(一维A酸软胶囊)",
            citys: "上海宜信延安药业有限公司",
            grade: !0
        }, {
            names: "桂曼(盐酸米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        }, {
            names: "永喜(盐酸多米诺胶囊)",
            citys: "浩辉制药有限公司",
            grade: !1
        } ]
    },
    lookzixun: function(a) {
        wx.navigateTo({
            url: "/hyb_yl/tabBar/jibingyufang/jibingyufang?index=1"
        });
    },
    lookask: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblems/publicProblems"
        });
    },
    doctoritem: function(a) {
        var e = a.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + e
        });
    },
    btdetail: function(a) {
        var e = a.currentTarget.dataset.id, t = a.currentTarget.dataset.p_id, s = a.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + e + "&p_id=" + t + "&zid=" + s
        });
    },
    typesbtn: function(a) {
        "0" == a.currentTarget.dataset.dex ? wx.navigateTo({
            url: "../searchyisheng/searchyisheng"
        }) : "1" == a.currentTarget.dataset.dex ? wx.navigateTo({
            url: "../searchyiyuan/searchyiyuan"
        }) : "2" == a.currentTarget.dataset.dex && wx.navigateTo({
            url: "../searchyaopin/searchyaopin"
        });
    },
    getSearch: function(e) {
        var t = this, s = e.detail.value;
        a.util.request({
            url: "entry/wxapp/jiansuo.show_keywordssearch",
            data: {
                keywords: s
            },
            success: function(e) {
                console.log(e.data), e.data.length > 0 ? t.setData({
                    checkword: s,
                    resultif: !1,
                    searchlisttip: e.data
                }) : (t.setData({
                    checkword: s,
                    resultif: !0
                }), a.util.request({
                    url: "entry/wxapp/jiansuo.addsearch",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        checkword: s,
                        source: 0
                    }
                }), t.getSearchlist());
            }
        });
    },
    listitembtn: function(e) {
        var t = e.currentTarget.dataset.checkword;
        console.log(t), a.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: t,
                source: 0
            }
        }), this.setData({
            resultif: !0,
            checkword: t
        }), this.getSearchlist();
    },
    del: function() {
        this.data.searchArr;
        this.setData({
            searchArr: [],
            searchCont: ""
        }), wx.setStorage({
            key: "searchArr",
            data: this.data.searchArr
        });
    },
    searchHistory: function(e) {
        var t = e.currentTarget.dataset.checkword;
        a.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: t,
                source: 0
            }
        }), this.setData({
            resultif: !0,
            checkword: t
        }), this.getSearchlist();
    },
    searchtabs: function(a) {
        var e = a.currentTarget.dataset.index;
        this.setData({
            searchindex: e,
            sindex: e
        }), this.getSearchlist();
    },
    scroll: function(a) {
        var e = this;
        setTimeout(function() {
            console.log(a.detail.scrollTop);
            var t = e.data.list;
            t[e.data.curListId] && (t[e.data.curListId].scrollTop = a.detail.scrollTop, e.setData({
                list: t
            }));
        }, 300);
    },
    listitembtns: function(a) {
        var e = a.currentTarget.dataset.hid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/specialtyContent/specialtyContent?hid=" + e
        });
    },
    listitembtninfor: function(a) {
        wx.navigateTo({
            url: "../yaopindetail/yaopindetail?name=" + a.currentTarget.dataset.name
        });
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("searchArr") || [];
        this.setData({
            searchArr: e
        });
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), this.getHotsearch(), this.getHistorysearch();
    },
    getHotsearch: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/jiansuo.show_hotsearch",
            data: {
                source: 0
            },
            success: function(a) {
                e.setData({
                    findArr: a.data
                });
            }
        });
    },
    getHistorysearch: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/jiansuo.show_historysearch",
            data: {
                openid: wx.getStorageSync("openid"),
                source: 0
            },
            success: function(a) {
                e.setData({
                    searchArr: a.data
                });
            }
        });
    },
    getSearchlist: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/jiansuo.searchlist",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: e.data.checkword,
                source: 0,
                sindex: e.data.sindex
            },
            success: function(a) {
                0 == e.data.sindex && e.setData({
                    zixunlist: a.data.zixunlist,
                    answerlist: a.data.answerlist
                }), 1 == e.data.sindex && e.setData({
                    zhuanjialist: a.data.zhuanjialist
                }), 2 == e.data.sindex && e.setData({
                    hospitalist: a.data.yiyuanlist
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});