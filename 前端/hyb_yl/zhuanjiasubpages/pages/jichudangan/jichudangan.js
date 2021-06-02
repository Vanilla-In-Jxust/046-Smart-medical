var n = getApp();

Page({
    data: {
        bingshiList: [ {
            name: "高血压病史",
            bool: "有"
        }, {
            name: "糖尿病病史",
            bool: "有"
        }, {
            name: "肝功能",
            bool: "好"
        }, {
            name: "肾功能",
            bool: "好"
        }, {
            name: "药物过敏史",
            bool: "无"
        } ]
    },
    onLoad: function(n) {
        var o = n.openid, t = n.names;
        wx.setNavigationBarTitle({
            title: t + "的档案"
        }), this.setData({
            openid: o
        }), this.getmydan();
    },
    getmydan: function() {
        var o = this, t = o.data.openid;
        n.util.request({
            url: "entry/wxapp/user.detailmyjds",
            data: {
                openid: t
            },
            success: function(n) {
                console.log(n);
                parseInt(n.data.sick_index);
                n.data && o.setData({
                    myinfo: n.data
                });
            }
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