var t, e, a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), n = function(t) {
    return {
        default: t
    };
}(), o = getApp(), r = 0;

Page((e = {
    data: (t = {
        prenumber: 10,
        url: "patient/mycommunity/list/",
        curHdIndex: 1,
        communityListOne: [],
        pageOne: 0,
        moreBooOne: !0,
        loadingBoo: !0,
        oneBoo: !1,
        mask: !0
    }, (0, a.default)(t, "communityListOne", []), (0, a.default)(t, "currindex", 0), 
    t),
    addCommunity: function() {
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/addDynamic/addDynamic"
        });
    },
    bindscroll: function(t) {
        t.detail.scrollTop > this.data.windowHeight ? this.setData({
            topFlag: !0
        }) : this.setData({
            topFlag: !1
        });
    },
    toTop: function(t) {
        this.setData({
            topFlag: !1,
            scrollTop: 0
        });
    },
    moreState: function() {
        this.data.prenumber, this.data.token;
    },
    toLike: function(t) {
        var e = this, a = t.currentTarget.dataset.index, o = t.currentTarget.dataset.status;
        1 != o ? e.data.currindex != a || 1 == o ? (e.setData({
            currindex: a
        }), n.default.toLike(e, t, 1)) : wx.showToast({
            title: "【点赞】是严肃的，不可以反悔哦！",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "【点赞】是严肃的，不可以反悔哦！",
            icon: "none",
            duration: 1500
        });
    },
    previewImage: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.url, n = t.currentTarget.dataset.data;
        console.log(e, a, n), wx.previewImage({
            current: a,
            urls: n
        });
    }
}, (0, a.default)(e, "toLike", function(t) {
    var e = this, a = (t.currentTarget.dataset.index, t.currentTarget.dataset.status, 
    t.currentTarget.dataset.status), n = e.data.a_id;
    0 == a ? app.util.request({
        url: "entry/wxapp/share.userdianz",
        data: {
            op: "dianzan",
            parentid: n,
            openid: wx.getStorageSync("openid")
        },
        success: function(t) {
            console.log(t), e.setData({
                dianj: 1
            });
        }
    }) : wx.showToast({
        title: "点赞是严肃的，不可以反悔哦！",
        icon: "none",
        duration: 1500
    });
}), (0, a.default)(e, "goComment", function(t) {
    console.log(t);
    var e = this.data.a_id, a = this.data.comFlag;
    this.setData({
        comFlag: !a,
        a_id: e
    });
}), (0, a.default)(e, "onLoad", function(t) {
    var e = wx.getStorageSync("color");
    wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: e
    }), this.getAllmyshare();
}), (0, a.default)(e, "onReady", function() {}), (0, a.default)(e, "onShow", function() {
    this.getAllmyshare();
}), (0, a.default)(e, "onHide", function() {
    1 == r && this.setData({
        communityListOne: []
    }), r = 1;
}), (0, a.default)(e, "getAllmyshare", function() {
    var t = this;
    o.util.request({
        url: "entry/wxapp/share.myshare",
        data: {
            openid: wx.getStorageSync("openid")
        },
        success: function(e) {
            console.log(e), t.setData({
                communityListOne: e.data
            });
        }
    });
}), e));