var t = getApp();

Page({
    data: {
        order3: [ {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/organ1.png?sign=fe50ccd4bd2584609c3024aedb4ca04f&t=1592043301",
            title: "管理入口",
            url: "/hyb_yl/mysubpages/pages/capitacenter/capitacenter"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/organ2.png?sign=0c070da8d3600398518a603223ede780&t=1592043310",
            title: "专家管理",
            url: "/hyb_yl/mycenter/pages/expertAdmin/expertAdmin"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/organ3.png?sign=46d13f02541fcc145e8c9588a46b4c0f&t=1592043320",
            title: "账户设置",
            url: ""
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/organ4.png?sign=b94ea5e671df543827ef25862dae78a0&t=1592043329",
            title: "修改资料",
            url: "/hyb_yl/mycenter/pages/organApply/organApply"
        } ],
        ispopup: !1
    },
    zsservice: function(t) {
        var e = t.currentTarget.dataset.url, a = t.currentTarget.dataset.index, n = this.data.hid;
        0 == a ? this.setData({
            ispopup: !0
        }) : wx.navigateTo({
            url: e + "?hid=" + n
        });
    },
    closebind: function() {
        this.setData({
            ispopup: !1
        });
    },
    onLoad: function(t) {},
    onReady: function() {
        this.getjigouif();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getjigouif: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/regin.jigouif",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), e.setData({
                    state: t.data.state,
                    detail: t.data,
                    hid: t.data.hid
                });
            }
        });
    }
});