getApp();

Page({
    data: {
        qylist1: [ {}, {}, {}, {} ],
        islist1: !1,
        qylist2: [ {}, {}, {}, {} ],
        islist2: !1,
        qylist3: [ {}, {}, {}, {} ],
        islist3: !1
    },
    search: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/patientsearch/patientsearch"
        });
    },
    toggleopen1: function() {
        this.data.islist1 ? this.setData({
            islist1: !1
        }) : this.setData({
            islist1: !0
        });
    },
    toggleopen2: function() {
        this.data.islist2 ? this.setData({
            islist2: !1
        }) : this.setData({
            islist2: !0
        });
    },
    toggleopen3: function() {
        this.data.islist3 ? this.setData({
            islist3: !1
        }) : this.setData({
            islist3: !0
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});