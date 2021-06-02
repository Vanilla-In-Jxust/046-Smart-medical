var t = getApp();

Page({
    data: {
        update: !1,
        collect: !1,
        shanchanglist: [ "全部(550)", "气胸(16)", "肺癌(18)", "胸腔积液(5)", "肋骨骨折(4)", "心包积液(2)", "多汗症(1)" ],
        money: "",
        time_leng: "",
        addnum: "",
        url: "",
        key_words: "",
        id: ""
    },
    teamlist: function() {
        this.setData({
            update: !this.data.update
        });
    },
    two_even: function(t) {
        this.setData({
            allserve: !0
        });
    },
    askdoctor: function(t) {
        t.currentTarget.dataset.num;
        var e = t.currentTarget.dataset.url, a = t.currentTarget.dataset.money, n = t.currentTarget.dataset.time_leng, i = parseInt(t.currentTarget.dataset.ptzhuiw), o = t.currentTarget.dataset.key_words;
        this.setData({
            money: a,
            time_leng: n,
            addnum: i,
            url: e,
            key_words: o
        });
    },
    team: function(t) {
        this.data.url;
        var e = this.data.id, a = this.data.money, n = this.data.time_leng, i = this.data.addnum, o = this.data.key_words;
        "" == o ? wx.showModal({
            title: "提示",
            content: "请选择服务包类型"
        }) : wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?inquiry=&tid=" + e + "&money=" + a + "&time_leng=" + n + "&addnum=" + i + "&key_words=" + o
        });
    },
    navicate: function() {
        wx.reLaunch({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        if (t.scene) {
            decodeURIComponent(t.scene);
            var a = res;
            this.setData({
                id: a
            });
        } else {
            wx.setNavigationBarTitle({
                title: t.title
            });
            a = t.id;
            this.setData({
                title: t.title,
                id: a
            });
        }
        this.getDetail(), this.getPingjia();
    },
    getDetail: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.detail",
            data: {
                id: e.data.id,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                e.setData({
                    info: t.data,
                    collect: t.data.collect
                });
            }
        });
    },
    collect: function() {
        t.util.request({
            url: "entry/wxapp/team.changelove",
            data: {
                zid: this.data.id,
                openid: wx.getStorageSync("openid"),
                cerated_type: 6
            },
            success: function(t) {
                console.log(t);
            }
        }), this.setData({
            collect: !this.data.collect
        }), 1 == this.data.collect ? wx.showToast({
            title: "关注成功",
            icon: "none"
        }) : wx.showToast({
            title: "取消关注成功",
            icon: "none"
        });
    },
    getPingjia: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.getpingjia",
            data: {
                id: e.data.id
            },
            success: function(t) {
                e.setData({
                    pingjia: t.data
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