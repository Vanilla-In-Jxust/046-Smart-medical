var t = getApp();

Page({
    data: {
        img: "",
        WGender: [],
        WGenderID: [],
        WGendertext: "",
        WGenderIDID: "",
        Whospital: "",
        office: "",
        Wclasses: [ "医生", "护士" ],
        WclassesText: "",
        jobType: "",
        Wpost: [],
        WpostID: [],
        WpostText: "",
        WpostTextID: "",
        bgGoodAt: "",
        Wcertificate: "请完善",
        name: "",
        identityCard: "",
        show: !0,
        show1: !0,
        briefIntroduce: ""
    },
    WZsz: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveSz/WapproveSz"
        });
    },
    Wimg: function(a) {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "orignal", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                console.log(a.tempFilePaths[0]), e.setData({
                    img: a.tempFilePaths[0],
                    show: !1
                });
                var o = wx.getStorageSync("log") || "";
                wx.uploadFile({
                    url: t.globalData.dic + "doctor/prove/uploadImage",
                    filePath: a.tempFilePaths[0],
                    name: "file",
                    formData: {
                        token: o,
                        flag: 1
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(t) {
                        console.log(1234), console.log(t);
                    }
                });
            }
        });
    },
    WGender: function(a) {
        var e = this;
        a.currentTarget.dataset.id, wx.showActionSheet({
            itemList: [ "男", "女" ],
            success: function(a) {
                var o = e.data.WGender, c = a.tapIndex;
                e.setData({
                    WGendertext: o[c],
                    WGenderIDID: e.data.WGenderID[c]
                });
                var n = wx.getStorageSync("log") || "";
                wx.request({
                    url: t.globalData.dic + "doctor/prove/update/" + n,
                    data: {
                        cdGender: e.data.WGenderIDID,
                        nmGender: e.data.WGendertext
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        console.log(t), 200 != t.data.code && wx.showModal({
                            title: "提示",
                            content: "您已通过认证审核，不支持修改",
                            success: function(t) {
                                t.confirm ? (console.log("用户点击确定"), wx.switchTab({
                                    url: "/pages/index/index"
                                })) : t.cancel && (console.log("用户点击取消"), wx.switchTab({
                                    url: "/pages/index/index"
                                }));
                            }
                        });
                    }
                });
            }
        });
    },
    Whospital: function(t) {
        wx.setStorageSync("url", "doctor/prove/update/"), wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveWhospital/WapproveWhospital"
        });
    },
    WadministrativeOffice: function(t) {
        wx.setStorageSync("url", "doctor/prove/update/"), wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveWhospitaloffice/WapproveWhospitaloffice"
        });
    },
    Wclasses: function(a) {
        var e = this, o = wx.getStorageSync("log") || "";
        a.currentTarget.dataset.id, wx.showActionSheet({
            itemList: [ "医生", "护士" ],
            success: function(a) {
                var c = e.data.Wclasses;
                console.log(a.tapIndex + 1);
                var n = a.tapIndex;
                wx.setStorageSync("indexxx", a.tapIndex), e.setData({
                    WclassesText: c[n],
                    jobType: a.tapIndex + 1,
                    WpostText: "",
                    bgGoodAt: ""
                }), wx.request({
                    url: t.globalData.dic + "doctor/prove/update/" + o,
                    data: {
                        jobType: e.data.jobType,
                        title: "",
                        bgGoodAt: ""
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        console.log(t), 200 != t.data.code && wx.showModal({
                            title: "提示",
                            content: "您已通过认证审核，不支持修改",
                            success: function(t) {
                                t.confirm ? (console.log("用户点击确定"), wx.switchTab({
                                    url: "/pages/index/index"
                                })) : t.cancel && (console.log("用户点击取消"), wx.switchTab({
                                    url: "/pages/index/index"
                                }));
                            }
                        });
                    }
                }), 0 == n ? wx.request({
                    url: t.globalData.dicc + "dic/comdicbase",
                    data: {
                        code: 3e5
                    },
                    success: function(t) {
                        console.log(t.data.data);
                        var a = t.data.data, o = [], c = [];
                        for (var n in a) o.push(a[n]), c.push(n);
                        console.log(o), e.setData({
                            Wpost: o,
                            WpostID: c
                        }), wx.setStorageSync("Wpost", {
                            Wpost: o,
                            WpostID: c
                        });
                    }
                }) : 1 == n && wx.request({
                    url: t.globalData.dicc + "dic/comdicbase",
                    data: {
                        code: 31e4
                    },
                    success: function(t) {
                        console.log(t.data.data);
                        var a = t.data.data, o = [], c = [];
                        for (var n in a) o.push(a[n]), c.push(n);
                        console.log(o), e.setData({
                            Wpost: o,
                            WpostID: c
                        }), wx.setStorageSync("Wpost", {
                            Wpost: o,
                            WpostID: c
                        });
                    }
                });
            }
        });
    },
    bgGoodAt: function(t) {
        var a = this;
        "" != a.data.jobType && null != a.data.jobType ? (wx.setStorageSync("jobType", a.data.jobType), 
        wx.setStorageSync("url", "doctor/prove/update/"), wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveJ/WapproveJ"
        })) : "" != a.data.jobType && null != a.data.jobType || wx.showModal({
            title: "提示",
            content: "请选择类别",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        });
    },
    Wpost: function(a) {
        var e = this, o = wx.getStorageSync("log") || "", c = (a.currentTarget.dataset.id, 
        e.data.Wpost), n = e.data.WpostID, s = wx.getStorageSync("Wpost");
        "" != e.data.jobType && null != e.data.jobType ? (c.length <= 0 && (c = s.Wpost, 
        n = s.WpostID), wx.showActionSheet({
            itemList: c,
            success: function(a) {
                var s = c;
                console.log(a.tapIndex);
                var l = a.tapIndex;
                e.setData({
                    WpostText: s[l],
                    WpostTextID: n[l]
                }), wx.request({
                    url: t.globalData.dic + "doctor/prove/update/" + o,
                    data: {
                        title: e.data.WpostText
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        console.log(t);
                    }
                });
            }
        })) : "" != e.data.jobType && null != e.data.jobType || wx.showModal({
            title: "提示",
            content: "请选择类别",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        });
    },
    Wcertificate: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveWcertificate/WapproveWcertificate"
        });
    },
    WTT: function(a) {
        var e = wx.getStorageSync("log") || "", o = (wx.getStorageSync("cdDepartment"), 
        this);
        null == o.data.img || "" == o.data.img ? wx.showModal({
            title: "提示",
            content: "请上传头像",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.name || "" == o.data.name ? wx.showModal({
            title: "提示",
            content: "请填写姓名",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.WGendertext || "" == o.data.WGendertext ? wx.showModal({
            title: "提示",
            content: "请选择性别",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.identityCard || "" == o.data.identityCard ? wx.showModal({
            title: "提示",
            content: "请填写身份证号码",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.phone || "" == o.data.phone ? wx.showModal({
            title: "提示",
            content: "请验证手机号",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.Whospital || "" == o.data.Whospital ? wx.showModal({
            title: "提示",
            content: "请选择医院",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.office || "" == o.data.office ? wx.showModal({
            title: "提示",
            content: "请选择科室",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : null == o.data.WclassesText || "" == o.data.WclassesText ? wx.showModal({
            title: "提示",
            content: "请选择类别",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : "" == o.data.WpostText || null == o.data.WpostText ? wx.showModal({
            title: "提示",
            content: "请选择职称",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : "" == o.data.bgGoodAt || null == o.data.bgGoodAt ? wx.showModal({
            title: "提示",
            content: "请选择擅长疾病",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : "" == o.data.IMG1 || null == o.data.IMG1 ? wx.showModal({
            title: "提示",
            content: "请上传资质证书",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : "" == o.data.IMG2 || null == o.data.IMG2 ? wx.showModal({
            title: "提示",
            content: "请上传资质证书",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        }) : wx.request({
            url: t.globalData.dic + "doctor/prove/submit/" + e,
            success: function(t) {
                console.log(t), 11030104 == t.data.code && wx.showToast({
                    title: "请完整填写认证信息",
                    icon: "none",
                    duration: 2e3
                }), 200 == t.data.code && (wx.showToast({
                    title: "提交申请成功",
                    icon: "none",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/index/index"
                    });
                }, 2e3));
            }
        });
    },
    onLoad: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.dicc + "dic/comdicbase",
            data: {
                code: 1e5
            },
            success: function(t) {
                var a = t.data.data, o = [], c = [];
                for (var n in a) o.push(a[n]), c.push(n);
                e.setData({
                    WGender: o,
                    WGenderID: c
                });
            }
        });
        var o = wx.getStorageSync("log") || "";
        wx.request({
            url: t.globalData.dic + "doctor/prove/get/" + o,
            data: {},
            success: function(t) {
                console.log(t.data.data), e.setData({
                    img: t.data.data.userIcon
                });
            }
        });
    },
    onShow: function() {
        var a = this, e = wx.getStorageSync("office") || "", o = wx.getStorageSync("YY") || "";
        a.setData({
            office: e,
            Whospital: o
        });
        var c = wx.getStorageSync("log") || "";
        wx.request({
            url: t.globalData.dic + "doctor/prove/get/" + c,
            data: {},
            success: function(t) {
                console.log(t.data.data), a.setData({
                    WGenderIDID: t.data.data.cdGender
                }), "" != t.data.data.userIcon ? a.setData({
                    show: !1
                }) : "" == t.data.data.qualificaCertificate && "" == t.data.data.licPhysicianQualificaCer || a.setData({
                    show1: !1
                }), 1 == t.data.data.jobType ? a.setData({
                    WclassesText: "医生"
                }) : 2 == t.data.data.jobType && a.setData({
                    WclassesText: "护士"
                }), a.setData({
                    name: t.data.data.doctorName,
                    WGendertext: t.data.data.nmGender,
                    identityCard: t.data.data.identityCard,
                    phone: t.data.data.phone,
                    Whospital: t.data.data.nmHospital,
                    office: t.data.data.nmDepartment,
                    jobType: t.data.data.jobType,
                    WpostText: t.data.data.title,
                    IMG1: t.data.data.qualificaCertificate,
                    IMG2: t.data.data.licPhysicianQualificaCer,
                    bgGoodAt: t.data.data.bgGoodAt,
                    briefIntroduce: t.data.data.briefIntroduce
                }), (a.data.IMG1 || a.data.IMG2) && a.setData({
                    show1: !1
                });
            }
        });
    }
});