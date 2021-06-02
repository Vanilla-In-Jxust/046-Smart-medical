Page({
    data: {
        current: 0,
        keshilist: [ {
            title: "小儿科",
            moner: 6,
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class0.png?sign=2652e409f307507c20fdab949da3d5ec&t=1584935529",
            selimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class0_1.png?sign=3d020fd745fad0fff8c7657e3dd4fc61&t=1584935542"
        }, {
            title: "皮肤科",
            moner: 5,
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class1.png?sign=55291d6e2f711dd641423ea91454d743&t=1584935575",
            selimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class1_1.png?sign=b4396e4688e603f06dc4f2fc8b4105af&t=1584935585"
        }, {
            title: "妇科",
            moner: 5,
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class2.png?sign=3b99f2ec1218fc01da3dae76428010d9&t=1584935615",
            selimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class2_1.png?sign=e4146e5de8911653fd6761ab9f59bd96&t=1584935626"
        }, {
            title: "产科",
            moner: 5,
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class3.png?sign=9dd4a866614d0304f6c2e398c545aa06&t=1584935683",
            selimg: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/class3_1.png?sign=9413c11a550606959a72c8825a6c5738&t=1584935694"
        } ]
    },
    selclass: function(a) {
        this.setData({
            current: a.currentTarget.dataset.dex
        });
    },
    comego: function() {
        wx.navigateTo({
            url: "../daozhenyisheng/daozhenyisheng"
        });
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
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