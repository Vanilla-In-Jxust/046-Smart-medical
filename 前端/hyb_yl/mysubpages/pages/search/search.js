var t = getApp();

Page({
    data: {
        checkword: "",
        searchtype: [ {
            picimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/yisheng.png?sign=d13163b9e958d543e5065076e94ed61e&t=1591607233",
            names: "医生"
        }, {
            picimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/yiyuan.png?sign=75d413bcae7e1092228ace45acc5d024&t=1591607253",
            names: "医院"
        }, {
            picimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/yiyaopin.png?sign=4b09909458316c253eafc286ff6b0202&t=1591607272",
            names: "药品"
        } ],
        searchArr: [],
        resultif: !1,
        searchtab: [ "推荐", "医生", "医院" ],
        searchindex: 0,
        sindex: 0,
        zixun: [],
        problem: [],
        scrollTop: 0,
        searchlists: []
    },
    hotdetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.title, s = t.currentTarget.dataset.typs, r = t.currentTarget.dataset.state;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblemsInfor/publicProblemsInfor?id=" + a + "&title=" + e + "&typs=" + s + "&state=" + r
        });
    },
    delsearch: function() {
        var a = this;
        wx.showModal({
            title: "确认删除全部历史记录？",
            cancelColor: "green",
            success: function(e) {
                e.confirm && t.util.request({
                    url: "entry/wxapp/jiansuo.delsearch",
                    data: {
                        openid: wx.getStorageSync("openid")
                    },
                    success: function() {
                        wx.showToast({
                            title: "删除成功"
                        }), setTimeout(function() {
                            a.getHistorysearch();
                        }, 2e3);
                    }
                });
            }
        });
    },
    lookzixun: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/tabBar/jibingyufang/jibingyufang?index=1"
        });
    },
    lookask: function() {
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblems/publicProblems"
        });
    },
    doctoritem: function(t) {
        var a = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + a
        });
    },
    btdetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.p_id, s = t.currentTarget.dataset.zid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + a + "&p_id=" + e + "&zid=" + s
        });
    },
    typesbtn: function(t) {
        "0" == t.currentTarget.dataset.dex ? wx.navigateTo({
            url: "../searchyisheng/searchyisheng"
        }) : "1" == t.currentTarget.dataset.dex ? wx.navigateTo({
            url: "../searchyiyuan/searchyiyuan"
        }) : "2" == t.currentTarget.dataset.dex && wx.navigateTo({
            url: "../searchyaopin/searchyaopin"
        });
    },
    getSearch: function(a) {
        var e = this, s = a.detail.value;
        t.util.request({
            url: "entry/wxapp/jiansuo.show_keywordssearch",
            data: {
                keywords: s
            },
            success: function(a) {
                console.log(a.data), a.data.length > 0 ? e.setData({
                    checkword: s,
                    resultif: !1,
                    searchlisttip: a.data
                }) : (e.setData({
                    checkword: s,
                    resultif: !0
                }), t.util.request({
                    url: "entry/wxapp/jiansuo.gentestusersig",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        checkword: s,
                        source: 0
                    }
                }), e.getSearchlist());
            }
        });
    },
    listitembtn: function(a) {
        var e = a.currentTarget.dataset.checkword;
        console.log(e), t.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: e,
                source: 0
            }
        }), this.setData({
            resultif: !0,
            checkword: e
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
    searchHistory: function(a) {
        var e = a.currentTarget.dataset.checkword;
        t.util.request({
            url: "entry/wxapp/jiansuo.addsearch",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: e,
                source: 0
            }
        }), this.setData({
            resultif: !0,
            checkword: e
        }), this.getSearchlist();
    },
    searchtabs: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            searchindex: a,
            sindex: a
        }), this.getSearchlist();
    },
    swipertab: function(t) {
        var a = t.detail.current;
        this.setData({
            searchindex: a,
            sindex: a
        }), this.getSearchlist();
    },
    scroll: function(t) {
        var a = this;
        setTimeout(function() {
            console.log(t.detail.scrollTop);
            var e = a.data.list;
            e[a.data.curListId] && (e[a.data.curListId].scrollTop = t.detail.scrollTop, a.setData({
                list: e
            }));
        }, 300);
    },
    listitembtns: function(t) {
        var a = t.currentTarget.dataset.hid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/specialtyContent/specialtyContent?hid=" + a
        });
    },
    listitembtninfor: function(t) {
        wx.navigateTo({
            url: "../yaopindetail/yaopindetail?name=" + t.currentTarget.dataset.name
        });
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("searchArr") || [];
        this.setData({
            searchArr: a
        });
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.getHotsearch(), this.getHistorysearch();
    },
    getHotsearch: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.show_hotsearch",
            data: {
                source: 0
            },
            success: function(t) {
                a.setData({
                    findArr: t.data
                });
            }
        });
    },
    getHistorysearch: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.show_historysearch",
            data: {
                openid: wx.getStorageSync("openid"),
                source: 0
            },
            success: function(t) {
                a.setData({
                    searchArr: t.data
                });
            }
        });
    },
    getSearchlist: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.searchlist",
            data: {
                openid: wx.getStorageSync("openid"),
                checkword: a.data.checkword,
                source: 0,
                sindex: a.data.sindex
            },
            success: function(t) {
                0 == a.data.sindex && a.setData({
                    zixunlist: t.data.zixunlist,
                    answerlist: t.data.answerlist
                }), 1 == a.data.sindex && a.setData({
                    zhuanjialist: t.data.zhuanjialist
                }), 2 == a.data.sindex && a.setData({
                    hospitalist: t.data.yiyuanlist
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