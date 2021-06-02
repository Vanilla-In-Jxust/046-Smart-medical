var t = getApp();

Page({
    data: {
        footer: {
            footerTab: 4,
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
    fastnavigate: function(t) {
        var e = t.currentTarget.dataset.tit, a = t.currentTarget.dataset.url, i = t.currentTarget.dataset.ser_key, n = t.currentTarget.dataset.id;
        "shoushukuaiyue" == i ? wx.navigateTo({
            url: a + "?tit=" + e + "&ser_key=" + i + "&pinyin=" + i + "&typs=query&id=" + n + "&key_words=" + i + "&ifzy=0"
        }) : "tijianjiedu" == i ? wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/baogaojiedu/baogaojiedu?key_words=tijianjiedu&id=" + n + "&key_words=" + i + "&ifzy=0"
        }) : wx.navigateTo({
            url: a + "?tit=" + e + "&ser_key=" + i + "&id=" + n + "&key_words=" + i + "&ifzy=0&name=" + e
        });
    },
    onLoad: function(t) {
        this.getfooter(), this.getServer();
        var e = t.index;
        this.setData({
            index: e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getfooter: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.footerlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                var a = {
                    footerTab: e.data.index,
                    footerlist: t.data
                };
                e.setData({
                    footer: a
                });
            }
        });
    },
    getServer: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/index.kjserverlist",
            success: function(t) {
                console.log(t), e.setData({
                    types: t.data
                });
            }
        });
    }
});