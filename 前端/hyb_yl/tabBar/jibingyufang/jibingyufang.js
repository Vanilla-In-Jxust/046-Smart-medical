var t = getApp();

Page({
    data: {
        zx_id: 0,
        currentTab: 0,
        bigMask: !1,
        zixun: [],
        page: 0,
        pagesize: 10,
        reward: [ 1, 2, 3, 4, 5, 6, 7 ],
        consulList: [ {
            icon: "../../images/tsjyiocn.png",
            title: "新冠肺炎",
            tip: "辟谣 防护知识"
        }, {
            icon: "../../images/tsjyiocn.png",
            title: "新冠肺炎",
            tip: "辟谣 防护知识"
        }, {
            icon: "../../images/tsjyiocn.png",
            title: "新冠肺炎",
            tip: "辟谣 防护知识"
        }, {
            icon: "../../images/tsjyiocn.png",
            title: "新冠肺炎",
            tip: "辟谣 防护知识"
        } ],
        footer: {
            footerTab: 1,
            footerlist: [ {
                text: "首页",
                img: "/hyb_yl/images/tab01.png",
                selimg: "/hyb_yl/images/tab1.png",
                url: "/hyb_yl/tabBar/index/index"
            }, {
                text: "资讯",
                img: "/hyb_yl/images/tab02.png",
                selimg: "/hyb_yl/images/tab2.png",
                url: "/hyb_yl/tabBar/jibingyufang/jibingyufang"
            }, {
                text: "分享",
                img: "/hyb_yl/images/tab03.png",
                selimg: "/hyb_yl/images/tab3.png",
                url: "/hyb_yl/tabBar/community/community"
            }, {
                text: "药房",
                img: "/hyb_yl/images/tab04.png",
                selimg: "/hyb_yl/images/tab4.png",
                url: "/hyb_yl/tabBar/shop/shop"
            }, {
                text: "问诊",
                img: "/hyb_yl/images/tab04.png",
                selimg: "/hyb_yl/images/tab4.png",
                url: "/hyb_yl/tabBar/fastnavigate/fastnavigate"
            }, {
                text: "我的",
                img: "/hyb_yl/images/tab05.png",
                selimg: "/hyb_yl/images/tab5.png",
                url: "/hyb_yl/tabBar/my/my"
            } ]
        },
        tabindex: 0,
        deparshow: !1
    },
    tabChose: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            tabchoseStyle: a,
            tabcid: t.currentTarget.dataset.tabcid
        });
    },
    departab: function(t) {
        var a = t.currentTarget.dataset.dex;
        if (console.log(a), 0 == a) var e = 0; else e = t.currentTarget.dataset.zx_id;
        console.log(e), this.setData({
            tabindex: a,
            tabpid: e,
            zixun: [],
            page: 0
        }), this.getzixunlist(e);
    },
    deparlist: function() {
        this.data.deparshow ? this.setData({
            deparshow: !1
        }) : this.setData({
            deparshow: !0
        });
    },
    departabs: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.dex;
        if (0 == a) var e = 0; else e = t.currentTarget.dataset.zx_id;
        this.setData({
            tabindex: a,
            deparshow: !1,
            tabpid: e,
            zixun: [],
            page: 0
        }), this.getzixunlist(e);
    },
    tiaozhuan: function(t) {
        console.log(t.currentTarget.dataset.zx_id), wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunList/zixunList?zx_id=" + t.currentTarget.dataset.zx_id
        });
    },
    goBack: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunList/zixunList"
        });
    },
    btdetail: function(a) {
        var e = a.currentTarget.dataset.id, i = a.currentTarget.dataset.p_id, n = a.currentTarget.dataset.zid;
        t.util.request({
            url: "entry/wxapp/zixun.addyuedu",
            data: {
                id: e
            },
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        }), t.util.request({
            url: "entry/wxapp/zixun.erweima",
            data: {
                id: e,
                p_id: i
            },
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        }), wx.navigateTo({
            url: "/hyb_yl/userLife/pages/zixunanlixq/zixunanlixq?id=" + e + "&p_id=" + i + "&zid=" + n
        });
    },
    searchbtn: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/search/search"
        });
    },
    onLoad: function(t) {
        this.getfooter();
        var a = t.zx_id, e = t.index, i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        });
        console.log(1), this.setData({
            currentTab: e,
            bgc: i,
            zx_id: a
        });
    },
    toast: function() {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    toast1: function(t) {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/community/community"
        });
    },
    toast2: function() {
        wx.redirectTo({
            url: "/hyb_yl/mysubpages/pages/shop/shop"
        });
    },
    toast3: function() {
        var a = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Myphone",
            data: {
                openid: a
            },
            success: function(e) {
                t.globalData.myphone = e.data.data, t.globalData.openid = a;
            },
            fail: function(t) {
                console.log(t);
            }
        }), setTimeout(function() {
            wx.redirectTo({
                url: "/hyb_yl/tabBar/my/my"
            });
        }, 350);
    },
    toast4: function() {
        var a = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/Myphone",
            data: {
                openid: a
            },
            success: function(e) {
                t.globalData.myphone = e.data.data, t.globalData.openid = a;
            },
            fail: function(t) {
                console.log(t);
            }
        }), wx.redirectTo({
            url: "/hyb_yl/userLife/pages/jibingyufang/jibingyufang"
        });
    },
    onReady: function() {
        this.getShowzixunfenlei(), this.getzixunlist(0), this.getalluser();
    },
    onShow: function() {
        wx.hideNavigationBarLoading();
        this.data.zx_id;
        var t = wx.getStorageSync("openid");
        console.log(t), t ? this.setData({
            bigMask: !0
        }) : this.setData({
            bigMask: !1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getzixunlist();
    },
    onShareAppMessage: function() {},
    getfooter: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/index.footerlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                var e = {
                    footerTab: 1,
                    footerlist: t.data
                };
                a.setData({
                    footer: e
                });
            }
        });
    },
    getzixunlist: function(a) {
        var e = this;
        e.data.zx_id = a, t.util.request({
            url: "entry/wxapp/zixun.zixunlists",
            data: {
                tabIndex: 0,
                page: e.data.page,
                pagesize: e.data.pagesize,
                zx_id: e.data.zx_id
            },
            success: function(t) {
                console.log(t);
                var a = e.data.page + 1;
                e.setData({
                    page: a,
                    zixun: e.data.zixun.concat(t.data)
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getalluser: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/zixun.getalluser",
            success: function(t) {
                console.log(t, "===================="), a.setData({
                    rew: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getShowzixunfenlei: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/zixun.showzixunfenlei",
            success: function(t) {
                console.log(t, "===================="), a.setData({
                    taocan: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});