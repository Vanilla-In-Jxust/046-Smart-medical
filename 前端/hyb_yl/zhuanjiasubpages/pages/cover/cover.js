var i = getApp();

Page({
    data: {
        id: "",
        zid: "",
        z_name: "",
        is_mianfei: "",
        is_wzzk: "",
        hh_num: "",
        wz_num: "",
        wz_zhekou: "",
        is_jd: "",
        jd_num: "",
        num: "",
        old_price: "",
        new_price: "",
        is_hh: "",
        times: "",
        typs: "",
        notes: ""
    },
    onLoad: function(i) {
        var t = i.zid, a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        }), this.setData({
            zid: t
        }), this.getzhuanjia_year();
    },
    getzhuanjia_year: function(t) {
        var a = this;
        i.util.request({
            url: "entry/wxapp/zhuanjia.zhuanjia_year",
            data: {
                openid: wx.getStorageSync("openid"),
                zid: a.data.zid
            },
            success: function(i) {
                a.setData({
                    info: i.data,
                    is_mianfei: i.data.is_mianfei,
                    is_wzzk: i.data.is_wzzk,
                    is_jd: i.data.is_jd,
                    is_hh: i.data.is_hh,
                    typs: i.data.typs
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
    submit: function(t) {
        var a = this.data.info.id, e = t.detail.value;
        e.id = a, e.zid = this.data.zid, e.times = e.times, e.is_mianfei = this.data.is_mianfei, 
        e.is_wzzk = this.data.is_wzzk, e.hh_num = e.hh_num, e.wz_num = e.wz_num, e.wz_zhekou = e.wz_zhekou, 
        e.is_jd = this.data.is_jd, e.jd_num = e.jd_num, e.num = e.num, e.old_price = e.old_price, 
        e.new_price = e.new_price, e.is_hh = this.data.is_hh, e.typs = this.data.typs, i.util.request({
            url: "entry/wxapp/zhuanjia.edit_year",
            data: e,
            success: function(i) {
                wx.showToast({
                    title: "编辑成功",
                    icon: "none",
                    duration: 1500,
                    success: function(i) {
                        setTimeout(function() {
                            wx.navigateBack({
                                detail: 1
                            });
                        }, 1500);
                    }
                });
            }
        });
    },
    kt: function(i) {
        if (i.detail.value) var t = 1; else t = 0;
        this.setData({
            typs: t
        });
    },
    mianfei: function(i) {
        if (i.detail.value) var t = 1; else t = 0;
        this.setData({
            is_mianfei: t
        });
    },
    wzzk: function(i) {
        if (i.detail.value) var t = 1; else t = 0;
        this.setData({
            is_wzzk: t
        });
    },
    is_hh: function(i) {
        if (i.detail.value) t = 1; else var t = 0;
        this.setData({
            is_hh: t
        });
    },
    is_jd: function(i) {
        if (i.detail.value) t = 1; else var t = 0;
        this.setData({
            is_jd: t
        });
    }
});