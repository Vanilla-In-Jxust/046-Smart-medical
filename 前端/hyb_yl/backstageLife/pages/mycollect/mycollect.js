var t = getApp();

Page({
    data: {
        num: 0,
        page: 0,
        page1: 0,
        prenumber: 6,
        cdType: "",
        wzshow: !0
    },
    particulars: function(t) {
        console.log("详情页"), console.log(t.currentTarget.dataset.id), wx.setStorageSync("eduid", t.currentTarget.dataset.id), 
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/particulars/particulars"
        });
    },
    onclick1: function(t) {
        var a = {
            collectRow: 1,
            title: "小花",
            collectAuthor: "小明",
            releaseDayTime: "2018-10-23",
            collectModule: "小强",
            coverImg: "/assets/images/vd.png",
            collectType: 2
        }, e = [ a, a, a, a ];
        this.setData({
            arr: e
        });
    },
    lower1: function() {
        if (!this.data.noFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var a, e = this, o = e.data.page1, c = e.data.arr;
            wx.request({
                url: t.globalData.dic + "doctor/education/collect/" + o + "/" + e.data.prenumber + "/" + e.data.token,
                success: function(t) {
                    if (console.log(t), 200 == t.data.code) {
                        o++, e.setData({
                            page1: o
                        });
                        var n = t.data.data;
                        if (a = c.concat(n), t.data.data.length == []) return e.setData({
                            noFlag: !0,
                            closureFlag: !1
                        }), !1;
                        e.setData({
                            arr: a,
                            closureFlag: !1
                        }), wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    },
    click: function(a) {
        var e = this;
        console.log(a.currentTarget.dataset.id);
        var o = a.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "您确认取消收藏吗",
            success: function(a) {
                a.confirm ? (console.log("用户点击确定"), wx.request({
                    url: t.globalData.dic + "doctor/education/deleteCollect/" + o + "/" + e.data.token,
                    success: function(t) {
                        console.log(t), e.onclick1();
                    }
                })) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            token: wx.getStorageSync("log") || ""
        });
    },
    onShow: function() {
        var t = this;
        this.setData({
            noFlag: !1
        }), t.onclick1(), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        });
    },
    share: function(t) {
        console.log("分享"), console.log(t), wx.setStorageSync("currentSaid", this.data.arr[t.currentTarget.dataset.index]), 
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/publishSaid/publishSaid?fromType=2&patientType=3"
        });
    }
});