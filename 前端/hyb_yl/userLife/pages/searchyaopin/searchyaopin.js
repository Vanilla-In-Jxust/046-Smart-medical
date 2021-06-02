Page({
    data: {
        searchCont: "",
        findArr: [ "痔疮", "感冒", "咳嗽", "退热", "阵痛", "避孕", "腹泻", "痛经" ],
        searchlist: [ {
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
    getSearch: function(a) {
        this.setData({
            searchCont: a.detail.value
        });
    },
    listitembtn: function(a) {
        wx.navigateTo({
            url: "../yaopindetail/yaopindetail?name=" + a.currentTarget.dataset.name
        });
    },
    searchHistory: function(a) {
        console.log(a), this.setData({
            searchCont: a.currentTarget.dataset.item
        });
    },
    onLoad: function(a) {
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    doctoritem: function() {
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye"
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});