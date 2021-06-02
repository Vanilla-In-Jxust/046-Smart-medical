var t = getApp();

Page({
    data: {
        navbar: [ "平台服务包", "团队服务包" ],
        currentIndex: 0,
        packlist: [ {
            title: "糖尿病服务包",
            img: "https://img14.360buyimg.com/n2/s240x240_jfs/t24886/216/888717536/150820/d34c7002/5b7f5af2Nbde7f59b.jpg!q70.jpg"
        }, {
            title: "高血压服务包",
            img: "https://img14.360buyimg.com/n2/s240x240_jfs/t24886/216/888717536/150820/d34c7002/5b7f5af2Nbde7f59b.jpg!q70.jpg"
        }, {
            title: "心脏病服务包",
            img: "https://img14.360buyimg.com/n2/s240x240_jfs/t24886/216/888717536/150820/d34c7002/5b7f5af2Nbde7f59b.jpg!q70.jpg"
        }, {
            title: "孕产妇服务包",
            img: "https://img14.360buyimg.com/n2/s240x240_jfs/t24886/216/888717536/150820/d34c7002/5b7f5af2Nbde7f59b.jpg!q70.jpg"
        }, {
            title: "脑血栓服务包",
            img: "https://img14.360buyimg.com/n2/s240x240_jfs/t24886/216/888717536/150820/d34c7002/5b7f5af2Nbde7f59b.jpg!q70.jpg"
        } ]
    },
    navbarTab: function(t) {
        console.log(t.currentTarget.dataset.index), this.setData({
            currentIndex: t.currentTarget.dataset.index
        });
    },
    packserver: function(t) {
        var a = this.data.t_id;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/serverpack/serverpack?id=" + t.detail.id + "&t_id=" + a
        });
    },
    teampack: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/serverpack/serverpack?"
        });
    },
    addserver: function() {
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/addpack/addpack"
        });
    },
    onLoad: function(a) {
        var e = this, i = a.t_id;
        t.util.request({
            url: "entry/wxapp/office.fllistdoc",
            success: function(t) {
                console.log(t);
                t.data;
                e.setData({
                    packlist: t.data
                });
            }
        }), e.setData({
            t_id: i
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