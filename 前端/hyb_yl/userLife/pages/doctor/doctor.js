var a = getApp();

Page({
    data: {
        arr: [],
        pic: 0,
        num: "2万",
        picArr: [],
        countPic: "",
        idArr: [],
        xitong: "",
        kfIndex: -1,
        types: 0,
        data_arr: []
    },
    onLoad: function(t) {
        var e = this, n = wx.getStorageSync("color");
        t.types;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        }), wx.showLoading({
            title: "搜索中请稍后"
        });
        var r = JSON.parse(t.kewords), o = JSON.parse(t.imgArr);
        a.util.request({
            url: "entry/wxapp/search.searching",
            data: {
                kewords: r
            },
            success: function(a) {
                console.log(a), wx.hideLoading(), e.setData({
                    arr: a.data.data
                });
            },
            fail: function(a) {
                console.log(a);
            }
        }), e.setData({
            bgc: n,
            kewords: r,
            conArr: o
        });
    },
    checkboxChange: function(a) {
        var t = this.data.picArr, e = this.data.idArr, n = Number(this.data.countPic), r = this.data.wzmoney, o = this.data.arr;
        this.data.xitong, a.currentTarget.dataset.id;
        if (this.findThis(t, a.currentTarget.dataset.index)) for (var i = 0, d = t.length; i < d; i++) t[i] == a.currentTarget.dataset.index && (t.splice(i, 1), 
        -1 === a.currentTarget.dataset.index ? (n -= Number(r), e.splice(i, 1)) : (n -= Number(o[a.currentTarget.dataset.index].wzmoney), 
        e.splice(i, 1))); else t.push(a.currentTarget.dataset.index), -1 === a.currentTarget.dataset.index ? (n += Number(r), 
        console.log(a.currentTarget.dataset.id), e.push(a.currentTarget.dataset.id)) : (n += Number(o[a.currentTarget.dataset.index].wzmoney), 
        e.push(o[a.currentTarget.dataset.index].zid));
        console.log(e), console.log(t), this.setData({
            picArr: t,
            countPic: n.toFixed(2),
            idArr: e
        });
    },
    findThis: function(a, t) {
        for (var e = 0, n = a.length; e < n; e++) if (a[e] == t) return !0;
        return !1;
    },
    complete: function(t) {
        var e = this, n = e.data.countPic, r = e.data.idArr, o = e.data.conArr, i = e.data.picArr, d = (wx.getStorageSync("openid"), 
        e.data.kewords);
        if ("" == i.length) wx.showToast({
            title: "请选择医生",
            icon: "none"
        }); else if (n > 0) a.util.request({
            url: e.data.url + "app/index.php?i=" + e.data.uniacid + "&c=entry&a=wxapp&do=Pay&m=hyb_yl",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: n
            },
            success: function(t) {
                wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        for (var i = e.data.data_arr, s = 0; s < o.length; s++) wx.uploadFile({
                            url: e.data.url + "app/index.php?i=" + e.data.uniacid + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                            filePath: o[s],
                            name: "upfile",
                            formData: [],
                            success: function(a) {
                                console.log(a), i.push(a.data), e.setData({
                                    data_arr: i
                                });
                            }
                        });
                        wx.showLoading({
                            title: "提交中，请稍后",
                            mask: !0
                        }), setTimeout(function() {
                            var t = e.data.data_arr;
                            a.util.request({
                                url: "entry/wxapp/tuwen.addkuaisu",
                                data: {
                                    msg: d,
                                    data_arr: t,
                                    useropenid: wx.getStorageSync("openid"),
                                    keywords: "kuaisuwenzhen",
                                    type: 0,
                                    zid: r,
                                    money: n,
                                    name: "快速问诊"
                                },
                                success: function(a) {
                                    console.log(a);
                                }
                            }), wx.hideLoading();
                        }, 2e3);
                    }
                });
            }
        }); else {
            for (var s = e.data.data_arr, c = 0; c < o.length; c++) wx.uploadFile({
                url: e.data.url + "app/index.php?i=" + e.data.uniacid + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                filePath: o[c],
                name: "upfile",
                formData: [],
                success: function(a) {
                    console.log(a), s.push(a.data), e.setData({
                        data_arr: s
                    });
                }
            });
            wx.showLoading({
                title: "提交中，请稍后",
                mask: !0
            }), setTimeout(function() {
                var t = e.data.data_arr;
                a.util.request({
                    url: "entry/wxapp/tuwen.addkuaisu",
                    data: {
                        msg: d,
                        data_arr: t,
                        useropenid: wx.getStorageSync("openid"),
                        keywords: "kuaisuwenzhen",
                        type: 0,
                        zid: r,
                        money: n,
                        name: "快速问诊"
                    },
                    success: function(a) {
                        console.log(a);
                    }
                }), wx.hideLoading();
            }, 2e3);
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});