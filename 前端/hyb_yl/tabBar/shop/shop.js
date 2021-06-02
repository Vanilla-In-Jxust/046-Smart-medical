var t = getApp();

Page({
    data: {
        boo: !1,
        proList: "",
        maBoo: !0,
        noFlag: !1,
        imageArr: [],
        bigMask: !1,
        footer: {
            footerTab: 3,
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
        }
    },
    goback: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/shopType/shopType?fid=0"
        });
    },
    onLoad: function(t) {
        this.getfooter(), wx.createCanvasContext("myQrcode");
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var e = t.index;
        this.setData({
            backgroundColor: a,
            index: e
        });
    },
    ma: function() {
        var t = !this.data.maBoo;
        this.setData({
            maBoo: t
        }), drawQrcode({
            width: 200,
            height: 200,
            canvasId: "myQrcode",
            text: "15210865395"
        });
    },
    onShareAppMessage: function(t) {
        return a.globalData.share;
    },
    onShow: function() {
        this.getBase(), this.getallgoods();
        var t = wx.getStorageSync("openid");
        console.log(t), t ? this.setData({
            bigMask: !0
        }) : this.setData({
            bigMask: !1
        });
    },
    onReady: function() {
        this.getallgoods(), this.getBase();
    },
    onPullDownRefresh: function() {
        var a = this;
        wx.showNavigationBarLoading(), t.util.request({
            url: "entry/wxapp/goods.listgoods",
            success: function(t) {
                console.log(t);
                var e = t.data;
                a.setData({
                    proList: e
                });
            }
        });
    },
    getallgoods: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/goods.listgoods",
            success: function(t) {
                console.log(t);
                var e = t.data;
                a.setData({
                    proList: e
                });
            }
        });
    },
    getBase: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/index.base",
            cachetime: "30",
            success: function(t) {
                console.log(t);
                var e = t.data;
                a.setData({
                    imageArr: e
                });
            }
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
        wx.redirectTo({
            url: "/hyb_yl/tabBar/my/my"
        });
    },
    toast4: function() {
        wx.redirectTo({
            url: "/hyb_yl/userLife/pages/jibingyufang/jibingyufang?biaoti2=资讯"
        });
    },
    getfooter: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/index.footerlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                var e = {
                    footerTab: a.data.index,
                    footerlist: t.data
                };
                a.setData({
                    footer: e
                });
            }
        });
    }
});