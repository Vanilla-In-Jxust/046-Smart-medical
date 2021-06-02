var e, s = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page({
    data: (e = {
        currentTab: 0,
        commList: "",
        level: 0,
        currentResult: 0,
        commBoo: !0,
        loadingBoo: !0,
        moreBoo: !0,
        requsetBoo: !0
    }, (0, s.default)(e, "commList", {
        good: 10,
        middle: 20,
        bad: 30,
        goodDegree: 10
    }), (0, s.default)(e, "estimates", [ {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    }, {
        phoneMask: "老王",
        estimate: "好好好",
        estimateImages: [ "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png", "/assets/images/796.png" ],
        createTime: "2018-10-26",
        itemParam: 20
    } ]), e),
    onShareAppMessage: function() {
        return a.globalData.share;
    },
    onLoad: function(e) {
        var s = e.sid;
        this.data.page;
        this.setData({
            sid: s
        }), this.getAllpinglun();
    },
    getAllpinglun: function() {
        var e = this, s = e.data.sid;
        a.util.request({
            url: "entry/wxapp/Pinglun2",
            data: {
                sid: s
            },
            success: function(s) {
                console.log(s), e.setData({
                    estimates: s.data
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    swichNav: function(e) {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        if (this.data.currentTab != e.target.dataset.current) {
            var s = e.target.dataset.current;
            this.setData({
                currentTab: e.target.dataset.current,
                level: s,
                currentResult: 0,
                commBoo: !0,
                moreBoo: !0
            }), this.getAllpinglun();
        }
    },
    moreOrder: function() {},
    previewImage: function(e) {
        var s = e.target.dataset.targeturl, a = [];
        this.data.estimates.forEach(function(e) {
            e.estimateImages && e.estimateImages.forEach(function(e) {
                a.push(e);
            });
        }), wx.previewImage({
            current: s,
            urls: a,
            success: function(e) {}
        });
    }
});