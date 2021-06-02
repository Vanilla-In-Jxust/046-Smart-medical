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
        array: [],
        index: 0,
        modes: [],
        indexs: 0,
        upload_picture_list: "",
        data_arr: "",
        state: "-1"
    },
    bindRegionChange: function(e) {
        console.log(e);
        var a = this;
        wx.authorize({
            scope: "scope.userLocation",
            complete: function(e) {
                console.log(e), wx.chooseLocation({
                    success: function(e) {
                        console.log(e);
                        var i = e.latitude, o = e.longitude, n = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + e.latitude + "," + e.longitude + "&key=V7DBZ-K7C22-SXXUJ-CDUE7-AM2LH-AEFCM&get_poi=1";
                        wx.request({
                            url: n,
                            success: function(e) {
                                console.log(e);
                                var n = e.data.result.address_component.province, s = e.data.result.address_component.city, d = e.data.result.address_component.district, c = e.data.result.address_component.province + "-" + e.data.result.address_component.city + "-" + e.data.result.address_component.district;
                                console.log(c), t.util.request({
                                    url: "entry/wxapp/Regin.getjigouid",
                                    data: {
                                        province: n,
                                        city: s,
                                        district: d
                                    },
                                    success: function(t) {
                                        console.log(t), a.setData({
                                            cityid: t.data.city.id,
                                            districtid: t.data.district.id,
                                            provinceid: t.data.province.id
                                        });
                                    }
                                }), a.setData({
                                    address: c,
                                    lng: o,
                                    lat: i
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    bindPickerChange: function(t) {
        var e = this.data.list, a = t.detail.value;
        console.log(t), this.setData({
            index: t.detail.value,
            level_name: e[a].level_name,
            grade: e[a].id
        });
    },
    bindModesChange: function(t) {
        var e = this.data.orlist, a = t.detail.value;
        this.setData({
            indexs: t.detail.value,
            name: e[a].name,
            groupid: e[a].id
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
        var e = this, a = t.siteInfo.uniacid;
        e.data.upload_picture_list;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var i = t.tempFilePaths, o = 0; o < i.length; o++) wx.uploadFile({
                    url: e.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: i[o],
                    name: "upfile",
                    formData: [],
                    success: function(t) {
                        console.log(t), e.setData({
                            upload_picture_list: t.data
                        });
                    }
                });
            }
        });
    },
    formSubmit: function(e) {
        console.log(e);
        var a = this, i = e.detail.value.agentname, o = a.data.lng, n = a.data.lat, s = e.detail.value.xxaddress, d = a.data.state;
        if ("0" != d) {
            if (a.data.grade) var c = a.data.grade; else c = a.data.list[0].id;
            if (a.data.groupid) var l = a.data.groupid; else l = a.data.orlist[0].id;
            var r = e.detail.value.realname, u = e.detail.value.hospitaltel, g = a.data.address, p = a.data.cityid ? a.data.cityid : e.detail.value.provinceid;
            a.data.districtid ? a.data.districtid : e.detail.value.districtid, a.data.provinceid ? a.data.provinceid : e.detail.value.provinceid;
            console.log(c, l), "" != a.data.upload_picture_list ? "" != i ? "" != g ? "" != s ? "" != r ? "" != u ? /^1[34578]\d{9}$/.test(u) ? "1" != d && "5" != d ? "2" != d ? "3" != d ? t.util.request({
                url: "entry/wxapp/regin.addjigou",
                data: {
                    agentname: i,
                    longitude: o,
                    latitude: n,
                    address: g,
                    grade: c,
                    groupid: l,
                    realname: r,
                    hospitaltel: u,
                    xxaddress: s,
                    openid: wx.getStorageSync("openid"),
                    username: i,
                    logo: a.data.upload_picture_list,
                    cityid: p,
                    districtid: a.data.districtid,
                    provinceid: a.data.provinceid
                },
                success: function(t) {
                    console.log(t), wx.showToast({
                        title: "提交成功",
                        icon: "none"
                    }), a.getIfjigou(), setTimeout(function() {
                        a.setData({
                            step: 2
                        });
                    }, 800);
                }
            }) : wx.showModal({
                title: "提示",
                content: "认证到期是否续费",
                success: function(t) {
                    t.confirm && console.log("用户点击确定");
                }
            }) : wx.showModal({
                title: "提示",
                content: "您的认证被暂停，请联系管理员",
                success: function(t) {
                    t.confirm && console.log("用户点击确定");
                }
            }) : wx.showModal({
                title: "提示",
                content: "确定修改资料吗",
                success: function(e) {
                    e.confirm && t.util.request({
                        url: "entry/wxapp/regin.addjigou",
                        data: {
                            agentname: i,
                            longitude: o,
                            latitude: n,
                            address: g,
                            grade: c,
                            groupid: l,
                            realname: r,
                            hospitaltel: u,
                            xxaddress: s,
                            openid: wx.getStorageSync("openid"),
                            username: i,
                            logo: a.data.upload_picture_list,
                            cityid: p,
                            districtid: a.data.districtid,
                            provinceid: a.data.provinceid
                        },
                        success: function(t) {
                            console.log(t), wx.showToast({
                                title: "提交成功",
                                icon: "none"
                            }), a.getIfjigou(), setTimeout(function() {
                                a.setData({
                                    step: 2
                                });
                            }, 800);
                        }
                    });
                }
            }) : wx.showToast({
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
        } else wx.showModal({
            title: "提示",
            content: "资料审核中",
            success: function(t) {}
        });
    },
    checkboxChange: function(t) {
        console.log(t), 0 == t.detail.value.length ? this.setData({
            ischeck: !1
        }) : this.setData({
            ischeck: !0
        });
    },
    onLoad: function(e) {
        var a = this;
        a.getIfjigou(), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), a.setData({
                    url: t.data
                });
            }
        });
    },
    onReady: function() {
        this.getjigoudemgji(), this.getjigoujurisdiction();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getjigoudemgji: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/regin.getorganlevel",
            data: {},
            success: function(t) {
                console.log(t), e.setData({
                    list: t.data
                });
            }
        });
    },
    getjigoujurisdiction: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/regin.jurisdiction",
            data: {},
            success: function(t) {
                console.log(t.data[0].id), e.setData({
                    orlist: t.data
                });
            }
        });
    },
    getIfjigou: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/regin.jigouif",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), e.setData({
                    detail: t.data,
                    level_name: t.data.level_name,
                    name: t.data.name,
                    address: t.data.address,
                    xxaddress: t.data.xxaddress,
                    upload_picture_list: t.data.logo,
                    provinceid: t.data.province,
                    cityid: t.data.city,
                    districtid: t.data.district,
                    grade: t.data.grade,
                    groupid: t.data.groupid,
                    lng: t.data.longitude,
                    lat: t.data.latitude,
                    state: t.data.state
                });
            }
        });
    }
});