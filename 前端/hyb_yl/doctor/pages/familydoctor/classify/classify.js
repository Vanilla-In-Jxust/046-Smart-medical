Page({
    data: {
        classify: [ {
            title: "糖尿病服务包"
        }, {
            title: "高血压服务包"
        }, {
            title: "心脏病服务包"
        }, {
            title: "孕产妇服务包"
        }, {
            title: "脑血栓服务包"
        } ],
        select: !0
    },
    whether: function(t) {
        console.log(t), this.setData({
            select: t.detail.value
        });
    },
    packdetail: function() {
        wx.navigateTo({
            url: "/pages/familydoctor/packdetail/packdetail"
        });
    },
    addserver: function() {
        wx.navigateTo({
            url: "/pages/familydoctor/addpack/addpack"
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