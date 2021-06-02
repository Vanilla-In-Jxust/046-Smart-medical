var t = getApp();

Page({
    data: {
        currentCity: "定位中...",
        letterArr: [],
        city1: []
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var e = wx.getStorageSync("city");
        this.setData({
            currentCity: e
        }), this.getCity();
        var r = "".searchLetter, i = "".cityList(), o = r;
        this.setData({
            city1: i,
            letterArr: o
        });
    },
    getCity: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/Remencity",
            success: function(t) {
                console.log(t), a.setData({
                    info: t.data.data
                });
            }
        });
    },
    confirmClick: function(t) {
        var a = t.target.dataset.a_id;
        console.log(a), wx.setStorage({
            key: "city",
            data: a
        });
        var e = new RegExp("[一-龥]+", "g");
        a.search(e) || (console.log(t.target.dataset.a_id), wx.setStorageSync("city", t.target.dataset.a_id), 
        wx.switchTab({
            url: "/hyb_yl/tabBar/index/index"
        }));
    },
    anchorClick: function(t) {
        var a = t.currentTarget.dataset.a_id;
        this.setData({
            toView: a
        });
    }
});