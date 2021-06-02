getApp();

Page({
    data: {
        UnbankedRegister: [ {
            userId: 1,
            userIcon: "/assets/images / head.png",
            name: "小明",
            nmGender: "女",
            age: 30,
            remarkName: "小红"
        }, {
            userId: 1,
            userIcon: "/assets/images / head.png",
            name: "小明",
            nmGender: "女",
            age: 30,
            remarkName: "小红"
        }, {
            userId: 1,
            userIcon: "/assets/images / head.png",
            name: "小明",
            nmGender: "男",
            age: 30,
            remarkName: "小红"
        } ]
    },
    input: function(e) {
        console.log(e.detail.value), this.setData({
            input: e.detail.value
        });
    },
    grabble: function(e) {
        var n = this;
        console.log(n.data.input), wx.setStorageSync("input", n.data.input), "" != n.data.input ? wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/casControlSeet/casControlSeet",
            success: function(e) {}
        }) : wx.showToast({
            title: "请输入患者名字",
            icon: "none",
            duration: 1e3
        });
    },
    agree: function(e) {
        var n = this.data.hzinfo[e.currentTarget.dataset.index], a = getCurrentPages();
        a[a.length - 2].setData({
            daninfo: n,
            perfect: 1
        }), wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(e) {
        var n = JSON.parse(e.hzinfo);
        console.log(n), this.setData({
            hzinfo: n
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