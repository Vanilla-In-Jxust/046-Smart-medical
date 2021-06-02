var e = getApp();

Page({
    data: {},
    onsubmit: function(t) {
        var o = this, n = t.detail.value, a = wx.getStorageSync("openid"), i = n.age, s = n.gender, c = n.miaoshu, u = n.yibao, r = n.idcad, l = n.tel, d = n.user, y = n.my_id;
        console.log(y), "" == n.user ? wx.showModal({
            content: "姓名不能为空"
        }) : "" == n.age ? wx.showModal({
            content: "请填写您的年龄"
        }) : "点击验证手机号" == n.tel ? (o.setData({
            title: "请填前往个人中心验证手机号",
            close: !0
        }), setTimeout(function() {
            o.setData({
                close: !1
            });
        }, 2e3)) : "" == n.idcad || n.idcad.length < 18 ? wx.showModal({
            content: "请正确填写您的身份证号"
        }) : "" !== n.my_id ? e.util.request({
            url: "entry/wxapp/Myinfors",
            data: {
                my_id: y,
                age: i,
                gender: s,
                miaoshu: c,
                tel: l,
                user: d,
                yibao: u,
                idcad: r,
                openid: a
            },
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "修改成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        wx.reLaunch({
                            url: "/hyb_yl/tabBar/my/my"
                        });
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            }
        }) : e.util.request({
            url: "entry/wxapp/Myinfors",
            data: {
                my_id: y,
                age: i,
                gender: s,
                miaoshu: c,
                tel: l,
                user: d,
                yibao: u,
                idcad: r,
                openid: a
            },
            success: function(e) {
                wx.showToast({
                    title: "添加成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        if (1 == o.data.types) {
                            var e = getCurrentPages();
                            e[e.length - 2].setData({
                                types: 2
                            }), wx.navigateBack({
                                delta: 1
                            });
                        } else wx.reLaunch({
                            url: "/hyb_yl/tabBar/my/my"
                        });
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onLoad: function(t) {
        var o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        });
        var n = this, a = wx.getStorageSync("openid"), i = e.siteInfo.uniacid;
        t.types && n.setData({
            types: t.types
        }), e.util.request({
            url: "entry/wxapp/Myinforsarray",
            data: {
                openid: a,
                uniacid: i
            },
            success: function(e) {
                console.log(e), n.setData({
                    myinforsarray: e.data.data
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onReady: function() {
        this.getMyphone();
    },
    onShow: function() {
        this.getMyphone();
        var e = getCurrentPages(), t = e[e.length - 1];
        console.log(t.data.myphone), "" !== t.data.myphone && void 0 !== t.data.myphone && this.setData({
            myinforphone: t.data.myphone
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getMyphone: function() {
        var t = this, o = wx.getStorageSync("openid");
        e.util.request({
            url: "entry/wxapp/Myinforphone",
            data: {
                openid: o
            },
            success: function(e) {
                t.setData({
                    myinforphone: e.data.data.u_phone
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    tiaozhuan: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/tel/tel?enter=1"
        });
    }
});