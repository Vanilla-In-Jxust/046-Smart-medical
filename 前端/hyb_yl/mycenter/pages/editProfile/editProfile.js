var t = getApp();

require("../../../../utils/citys.js");

Page({
    data: {
        step: 1,
        cityData: [],
        region: [],
        isindex: 1,
        ischeck: !0,
        issuss: !1,
        logo: "",
        array: [ "一甲", "二甲", "三甲" ],
        index: 0,
        modes: [ "药房", "医院", "机构" ],
        indexs: 0
    },
    bindRegionChange: function(t) {
        console.log(t), this.setData({
            cityData: t.detail.value,
            isindex: 0
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    bindModesChange: function(t) {
        this.setData({
            indexs: t.detail.value
        });
    },
    gotkhome: function() {
        wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/Organ/Organ"
        });
    },
    gotkagin: function() {
        this.setData({
            step: 1
        });
    },
    chooseimg: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e);
                var o = e.tempFilePaths;
                t.setData({
                    logo: o
                });
            }
        });
    },
    formSubmit: function(t) {
        console.log(t);
        var e = this, o = t.detail.value.names, n = t.detail.value.tel, i = e.data.cityData, a = (e.data.ischeck, 
        t.detail.value.comname), s = t.detail.value.address;
        "" != e.data.logo ? "" != a ? 0 != i.length ? "" != s ? "" != o ? "" != n ? /^1[34578]\d{9}$/.test(n) ? (wx.showToast({
            title: "提交成功"
        }), setTimeout(function() {
            e.setData({
                step: 2
            });
        }, 800)) : wx.showToast({
            title: "请输入正确的手机号",
            icon: "none"
        }) : wx.showToast({
            title: "请输入您的手机号",
            icon: "none"
        }) : wx.showToast({
            title: "请输入负责人姓名",
            icon: "none"
        }) : wx.showToast({
            title: "请输入您的详细地址",
            icon: "none"
        }) : wx.showToast({
            title: "请选择所在地",
            icon: "none"
        }) : wx.showToast({
            title: "请输入机构名称",
            icon: "none"
        }) : wx.showToast({
            title: "请您上传logo图片",
            icon: "none"
        });
    },
    checkboxChange: function(t) {
        console.log(t), 0 == t.detail.value.length ? this.setData({
            ischeck: !1
        }) : this.setData({
            ischeck: !0
        });
    },
    onLoad: function(t) {
        this.getjigouif();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getjigouif: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/regin.jigouif",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), e.setData({
                    state: t.data.state,
                    detail: t.data
                });
            }
        });
    }
});