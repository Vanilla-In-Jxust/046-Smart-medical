var a = getApp();

Page({
    data: {
        page: 0,
        prenumber: 6
    },
    onLoad: function(a) {
        var t = this, e = wx.getStorageSync("log") || "";
        t.setData({
            token: e
        }), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        });
    },
    particulars: function(a) {
        console.log("详情页"), console.log(a.currentTarget.dataset.id), wx.setStorageSync("eduid", a.currentTarget.dataset.id), 
        wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/particulars/particulars"
        });
    },
    input: function(a) {
        console.log(a.detail.value), this.setData({
            input: a.detail.value
        }), this.onclick();
    },
    onclick: function(t) {
        this.setData({
            noFlag: !1
        });
        var e = this;
        wx.request({
            url: a.globalData.dic + "doctor/education/listDoctorEducation/0/" + e.data.prenumber,
            data: {
                title: e.data.input
            },
            success: function(a) {
                console.log(a.data.data), a.data.data.length <= 0 ? e.setData({
                    wzshow: !0,
                    arr: a.data.data
                }) : e.setData({
                    wzshow: !1,
                    arr: a.data.data,
                    page: 1
                });
            }
        });
    },
    lower: function() {
        if (!this.data.noFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var t, e = this, o = this.data.page, i = e.data.arr;
            wx.request({
                url: a.globalData.dic + "doctor/education/listDoctorEducation/" + o + "/" + e.data.prenumber,
                data: {
                    title: e.data.input
                },
                success: function(a) {
                    if (console.log(a), 200 == a.data.code) {
                        o++, e.setData({
                            page: o
                        });
                        var n = a.data.data;
                        if (t = i.concat(n), a.data.data.length == []) return e.setData({
                            noFlag: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), e.setData({
                            arr: t,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    },
    onShow: function() {},
    share: function(a) {
        console.log("分享"), console.log(a), wx.setStorageSync("currentSaid", this.data.arr[a.currentTarget.dataset.index]), 
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/publishSaid/publishSaid?fromType=2&patientType=3"
        });
    }
});