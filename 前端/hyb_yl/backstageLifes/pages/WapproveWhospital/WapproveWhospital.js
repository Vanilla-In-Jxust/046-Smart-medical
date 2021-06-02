var t = getApp();

Page({
    data: {
        addressBoo: !0,
        province: "",
        city: "",
        cityList: "",
        hospitalBoo: !0,
        hospitalCode: "",
        hospitalName: "",
        provinceListIndex: 0,
        none: !0,
        Seng: "",
        SHI: "",
        url: "",
        provinceList: [],
        indexs: 0
    },
    onLoad: function(a) {
        var e = this, i = a.qx_id;
        e.setData({
            qx_id: i
        }), t.util.request({
            url: "entry/wxapp/index.address",
            data: {
                op: "quyu"
            },
            success: function(t) {
                console.log(t);
                t.data;
                e.setData({
                    provinceList: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onShow: function() {
        this.setData({
            provinceBoo: !0
        });
        var t = wx.createAnimation({
            duration: 800,
            timingFunction: "ease"
        });
        this.animation = t;
    },
    choosearea: function() {
        this.animation.translateX(0).step(), this.setData({
            addressBoo: !1,
            animationData: this.animation.export()
        });
    },
    tapProvince: function(t) {
        this.setData({
            provinceIndex: t.target.dataset.index,
            provinceListIndex: t.target.dataset.index,
            province: t.target.dataset.province
        });
    },
    tapCity: function(a) {
        var e = this;
        e.setData({
            city: ""
        });
        var i = a.target.id, s = a.target.dataset.index, o = a.target.dataset.city, n = e.data.province;
        console.log(i, o, n), e.animation.translateX(1200).step(), t.util.request({
            url: "entry/wxapp/index.address",
            data: {
                op: "yiyuan",
                address: o,
                id: i,
                qx_id: e.data.qx_id
            },
            success: function(t) {
                console.log(t);
                t.data;
                e.setData({
                    hospitalList: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), e.setData({
            cityIndex: s,
            city: o,
            area: n + "-" + o,
            addressBoo: !0,
            animationData: this.animation.export(),
            hospitalName: "",
            SHI: a.currentTarget.dataset.city,
            id: i
        });
    },
    closesearea: function() {
        this.setData({
            textarea: !1
        }), this.animation.translateX(1200).step(), this.setData({
            addressBoo: !0,
            animationData: this.animation.export()
        });
    },
    chooseHospital: function(a) {
        console.log(a);
        var e = this, i = a.currentTarget.dataset.id;
        console.log(i);
        var s = e.data.SHI;
        t.util.request({
            url: "entry/wxapp/index.address",
            data: {
                op: "yiyuan",
                address: s,
                id: i
            },
            success: function(t) {
                console.log(t);
                t.data;
                e.setData({
                    hospitalList: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.setData({
            hospitalList: [],
            hospitalBoo: !1
        });
        var o = [];
        "" != a.detail.value && e.setData({
            hospitalList: o
        });
    },
    choseHospital: function(t) {
        var a = this.data.hospitalList, e = (t.target.dataset.hospitalcode, t.target.dataset.current);
        wx.setStorageSync("YY", a[e].name), console.log(a[e]), this.setData({
            hospital: a[e].agentname,
            hospitalBoo: !0,
            hid: a[e].hid
        });
    },
    hospitalSave: function(t) {
        console.log(t);
        var a = this.data.hid, e = this.data.hospital, i = getCurrentPages();
        i[i.length - 2].setData({
            hid: a,
            agentname: e
        }), wx.navigateBack({
            delta: 1
        });
    },
    choseYiyuan: function(t) {
        var a = t.currentTarget.dataset.name, e = t.currentTarget.dataset.id;
        this.setData({
            hospital: a,
            hid: e
        });
    }
});