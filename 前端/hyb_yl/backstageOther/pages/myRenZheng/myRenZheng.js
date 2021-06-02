var a = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), t = getApp();

Page({
    data: {
        fqname: "",
        zgzimgurl1: "",
        zgzimgurl2: "",
        zczimgurl: "",
        sfzimgurl1: "",
        sfzimgurl2: "",
        gzzimgurl: "",
        zkbianhao: "",
        sfzbianhao: "",
        zgzimgurl1back: "",
        zgzimgurl2back: "",
        zczimgurlback: "",
        sfzimgurl1back: "",
        sfzimgurl2back: "",
        advertisement: "",
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
        WpostID: [],
        z_zhicheng: "",
        z_zhichengID: "",
        bgGoodAt: "",
        Wcertificate: "请完善",
        name: "",
        identityCard: "",
        show: !0,
        show1: !0,
        briefIntroduce: "",
        num: 0,
        numText: "已认证",
        array: [ "女", "男" ],
        index: 0,
        arrays: [ "综合医院", "中医医院", "中西医结合医院", "民族医医院", "专科医院", "康复医院", "妇幼保健院", "中心卫生院", "乡（镇）卫生院", "街道卫生院", "疗养院" ],
        indexs: 0,
        title: [],
        index2: 0,
        disease: [ "感冒", "接骨" ],
        index3: 0,
        IMG1: "/assets/images/head.png",
        IMG2: "/assets/images/head.png",
        z_sex: 1,
        zid: 0
    },
    zkbianhao: function(a) {
        this.setData({
            zkbianhao: a.detail.value
        });
    },
    sfzbianhao: function(a) {
        this.setData({
            sfzbianhao: a.detail.value
        });
    },
    name: function(a) {
        var t = a.detail.value;
        this.setData({
            name: t
        });
    },
    input: function(a) {
        console.log(a);
        var t = a.detail.value;
        this.setData({
            authority: t
        });
    },
    replace: function() {
        var a = this, e = t.siteInfo.uniacid;
        a.data.zhuanjiaImg, wx.getStorageSync("openid");
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var i = t.tempFilePaths[0];
                wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=uploadback&m=hyb_yl",
                    filePath: i,
                    name: "upfile",
                    formData: {
                        path: "wxchat"
                    },
                    success: function(t) {
                        console.log(t.data), a.setData({
                            uplogo: t.data,
                            z_thumbs: i
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                }), a.setData({
                    logo: i
                });
            }
        });
    },
    bindPickerChange: function(a) {
        if (console.log("picker发送选择改变，携带值为", a), 0 == a.detail.value) var t = 0; else t = 1;
        var e = this.data.array[a.detail.value];
        this.setData({
            index: a.detail.value,
            WGendertext: e,
            z_sex: t
        });
    },
    chosefenlei: function(a) {
        console.log(a);
        var t = this.data.fenleiList, e = this.data.fenleiList[a.detail.value].id, i = a.detail.value;
        this.setData({
            fenleiIndex: a.detail.value,
            qx_id: e,
            fqname: t[i].name
        });
    },
    bindPickerChange2: function(a) {
        var t = this.data.arrays[a.detail.value];
        this.setData({
            indexs: a.detail.value,
            WclassesText: t
        });
    },
    bindPickerChange3: function(a) {
        console.log(a);
        this.data.title[a.detail.value].job_name;
        var t = this.data.title[a.detail.value].id;
        console.log(t), this.setData({
            index2: a.detail.value,
            z_zhicheng: t
        });
    },
    bindPickerChange4: function(a) {
        var t = this.data.title[a.detail.value];
        this.setData({
            index3: a.detail.value,
            bgGoodAt: t
        });
    },
    identityCard: function(a) {
        console.log(a);
        var t = a.detail.value;
        !1 === /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t) ? wx.showToast({
            title: "身份证错误",
            icon: "none",
            duration: 2e3
        }) : this.setData({
            sfzbianhao: t
        });
    },
    imgQualifications: function() {
        var a = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                console.log(t);
                var e = t.tempFilePaths[0];
                a.setData({
                    IMG1: e
                });
            }
        });
    },
    uploadimgs: function(a) {
        var e = t.siteInfo.uniacid, i = this, o = a.currentTarget.dataset.mnames;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var t = a.tempFilePaths[0];
                wx.uploadFile({
                    url: i.data.url + "app/index.php?i=" + e + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: t,
                    name: "upfile",
                    formData: {},
                    success: function(a) {
                        console.log(a), "zgzimgurl1" == o ? i.setData({
                            zgzimgurl1: a.data
                        }) : "zgzimgurl2" == o ? i.setData({
                            zgzimgurl2: a.data
                        }) : "zczimgurl" == o ? i.setData({
                            zczimgurl: a.data
                        }) : "sfzimgurl1" == o ? i.setData({
                            sfzimgurl1: a.data
                        }) : "sfzimgurl2" == o ? i.setData({
                            sfzimgurl2: a.data
                        }) : "gzzimgurl" == o ? i.setData({
                            gzzimgurl: a.data
                        }) : "advertisement" == o ? i.setData({
                            advertisement: a.data
                        }) : console.log(o);
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        });
    },
    imgQualifications2: function() {
        var a = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                console.log(t);
                var e = t.tempFilePaths[0];
                a.setData({
                    IMG2: e
                });
            }
        });
    },
    getPhoneNumber: function(a) {
        console.log(a);
        var e = this, i = (a.detail.errMsg, a.detail.iv, a.detail.encryptedData, wx.getStorageSync("code")), o = wx.getStorageSync("sessionKey");
        console.log(o, i), "getPhoneNumber:fail user deny" == a.detail.errMsg ? wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "未授权",
            success: function(a) {}
        }) : t.util.request({
            url: "entry/wxapp/user.mdpwd",
            data: {
                iv: a.detail.iv,
                code: i,
                sessionKey: o,
                encryptedData: a.detail.encryptedData
            },
            success: function(a) {
                if (console.log(a), "1" == a.data.gstage) {
                    var i = JSON.parse(a.data.rdata);
                    console.log(i);
                    var o = i.phoneNumber;
                    t.util.request({
                        url: "entry/wxapp/user.updatephone",
                        data: {
                            openid: wx.getStorageSync("openid"),
                            u_phone: o
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    }), e.setData({
                        z_telephone: i.phoneNumber
                    }), wx.showToast({
                        title: "绑定手机号码成功!",
                        icon: "none"
                    });
                }
            }
        });
    },
    Wimg: function(a) {
        var t = this;
        t.setData({
            num: 0,
            numText: "保存"
        }), wx.chooseImage({
            count: 1,
            sizeType: [ "orignal", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                console.log(a.tempFilePaths[0]), t.setData({
                    z_thumbs: a.tempFilePaths[0],
                    show: !1
                });
                wx.getStorageSync("log");
            }
        });
    },
    Whospital: function(a) {
        console.log(a), "" == a.currentTarget.dataset.fqname ? wx.showToast({
            title: "请先选择所属分组",
            icon: "none"
        }) : (this.setData({
            num: 0,
            numText: "保存"
        }), wx.setStorageSync("url", "doctor/info/update/"), wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveWhospital/WapproveWhospital?qx_id=" + this.data.qx_id
        }));
    },
    WadministrativeOffice: function(a) {
        var t = a.currentTarget.dataset.hid;
        console.log(t), t ? wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/WapproveWhospitaloffice/WapproveWhospitaloffice?hid=" + t
        }) : wx.showToast({
            title: "请先选择医院",
            icon: "none",
            duration: 2e3
        });
    },
    z_name: function(a) {
        console.log(a);
        this.setData({
            z_name: a.detail.value
        });
    },
    bgGoodAt: function(a) {
        this.setData({
            num: 0,
            numText: "保存"
        }), wx.setStorageSync("url", "doctor/info/update/");
        var t = this;
        "" != t.data.jobType ? (wx.setStorageSync("jobType", t.data.jobType), wx.navigateTo({
            url: "/hyb_yl/index/WapproveJ/WapproveJ"
        })) : "" == t.data.jobType && wx.showModal({
            title: "提示",
            content: "请选着类别",
            success: function(a) {
                a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
            }
        });
    },
    WTT: function(a) {
        var e = this.data.zid, i = this.data.sfzbianhao, o = this.data.z_telephone, n = this.data.z_content, s = this.data.agentname, l = (this.data.name, 
        this.data.z_sex), d = this.data.z_room, r = this.data.qx_id;
        console.log(r);
        var c = this.data.hid, u = this.data.z_name, g = this.data.authority, h = this.data.zgzimgurl1, m = (this.data.zgzimgurl2back, 
        this.data.zczimgurlback, this.data.sfzimgurl1), z = this.data.sfzimgurl2, p = this.data.advertisement, f = (this.data.zkbianhao, 
        i = this.data.sfzbianhao, p = this.data.advertisement, this.data.z_zhicheng), x = this.data.parentid, v = this.data.address, b = this.data.lng, w = this.data.lat;
        if (this.data.uplogo) this.data.uplogo; else this.data.z_thumbsback;
        "" == u ? wx.showToast({
            title: "姓名不能为空",
            icon: "none",
            duration: 2e3
        }) : "" == i || null == i ? wx.showToast({
            title: "请填写身份证",
            icon: "none",
            duration: 2e3
        }) : "" == s ? wx.showToast({
            title: "请选择医院",
            icon: "none",
            duration: 2e3
        }) : "" == f ? wx.showToast({
            title: "请选择职称",
            icon: "none",
            duration: 2e3
        }) : "" == g || null == g ? wx.showToast({
            title: "擅长疾病不能为空",
            icon: "none",
            duration: 2e3
        }) : "" == n || null == n ? wx.showToast({
            title: "请填写个人简介",
            icon: "none",
            duration: 2e3
        }) : "" == h ? wx.showToast({
            title: "请上传证件照",
            icon: "none",
            duration: 2e3
        }) : "" == i ? wx.showToast({
            title: "请填写身份证号",
            icon: "none",
            duration: 2e3
        }) : "" == m ? wx.showToast({
            title: "请上传身份证正面",
            icon: "none",
            duration: 2e3
        }) : "" == z ? wx.showToast({
            title: "请上传身份证反面",
            icon: "none",
            duration: 2e3
        }) : "" == p ? wx.showToast({
            title: "请上传工作证",
            icon: "none",
            duration: 2e3
        }) : wx.showModal({
            title: "提示",
            content: " 确认提交么？ ",
            success: function(s) {
                if (s.confirm) {
                    a.detail.value;
                    t.util.request({
                        url: "entry/wxapp/regin.zhuce",
                        data: {
                            address: v,
                            lng: b,
                            lat: w,
                            zid: e,
                            z_telephone: o,
                            z_content: n,
                            z_sex: l,
                            z_room: d,
                            parentid: x,
                            hid: c,
                            z_zhicheng: f,
                            z_name: u,
                            openid: wx.getStorageSync("openid"),
                            zgzimgurl1back: h,
                            sfzimgurl1back: m,
                            sfzimgurl2back: z,
                            advertisement: p,
                            sfzbianhao: i,
                            authority: g,
                            qx_id: r
                        },
                        success: function(a) {
                            console.log(a), wx.showToast({
                                title: "提交成功",
                                icon: "none",
                                duration: 2e3,
                                success: function() {
                                    setTimeout(function() {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 2e3);
                                }
                            });
                        },
                        fail: function(a) {
                            console.log(a);
                        }
                    });
                } else s.cancel && console.log("用户点击取消");
            }
        });
    },
    onLoad: function(e) {
        var i = this, o = e.zid ? e.zid : 0;
        if (e.numText) {
            var n = e.numText;
            i.setData({
                numText: n
            });
        }
        t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(a) {
                i.setData({
                    url: a.data,
                    imgurl: a.data + "attachment/"
                });
            }
        }), t.util.request({
            url: "entry/wxapp/regin.zjinfo",
            data: {
                id: o
            },
            success: function(t) {
                var e;
                console.log(t.data.jigouqx.name);
                var o = t.data.z_sex;
                if (0 == o) var n = "女";
                if (1 == o) n = "男";
                t.data.z_room;
                i.setData((e = {
                    address: t.data.address,
                    userinfo: t.data,
                    index: n,
                    touxiangurl: t.data.z_thumbs,
                    z_thumbs: t.data.z_thumbs,
                    z_thumbsback: t.data.z_thumbsback,
                    z_name: t.data.z_name,
                    z_telephone: t.data.z_telephone,
                    agentname: t.data.agentname,
                    name: t.data.name,
                    z_content: t.data.z_content,
                    z_thumb: t.data.z_thumb,
                    hid: t.data.hid,
                    z_room: t.data.z_room,
                    z_zhicheng: t.data.z_zhicheng,
                    authority: t.data.authority,
                    sfzbianhao: t.data.sfzbianhao,
                    zgzimgurl1: t.data.zgzimgurl1back,
                    zgzimgurl2: t.data.zgzimgurl2back,
                    zczimgurl: t.data.zczimgurlback,
                    sfzimgurl1: t.data.sfzimgurl1back,
                    sfzimgurl2: t.data.sfzimgurl2back,
                    advertisement: t.data.advertisement,
                    zkbianhao: t.data.zkbianhao
                }, (0, a.default)(e, "sfzbianhao", t.data.sfzbianhao), (0, a.default)(e, "exa", t.data.exa), 
                (0, a.default)(e, "parentid", t.data.parentid), (0, a.default)(e, "z_sex", t.data.z_sex), 
                (0, a.default)(e, "qx_id", t.data.qx_id), (0, a.default)(e, "fqname", t.data.jigouqx.name), 
                e));
            },
            fail: function(a) {
                console.log(a);
            }
        }), i.getaJoblist(), i.getHostleve(), i.setData({
            zid: o
        });
    },
    onShow: function() {
        var a = this, e = getCurrentPages();
        console.log(a.data);
        var i = e[e.length - 1];
        if (console.log(i.data.agentname), i.data.hid && i.data.agentname && a.setData({
            hid: i.data.hid,
            agentname: i.data.agentname
        }), i.data.lat && i.data.lng && a.setData({
            lat: i.data.lat,
            lng: i.data.lng
        }), i.data.introduce && (console.log(i.data.introduce), a.setData({
            z_content: i.data.introduce
        })), i.data.z_telephone && a.setData({
            z_telephone: i.data.z_telephone
        }), i.data.parentid2) {
            var o = i.data.parentid2;
            t.util.request({
                url: "entry/wxapp/index.ksbiaoqian",
                data: {
                    id: o
                },
                success: function(t) {
                    console.log(t), a.setData({
                        authority: t.data.description
                    });
                }
            }), a.setData({
                parentid: i.data.parentid2,
                z_room: i.data.z_room,
                name: i.data.name
            });
        }
    },
    getaJoblist: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/index.getjoblist",
            success: function(t) {
                console.log(t), a.setData({
                    title: t.data
                });
            }
        });
    },
    mapViewTap: function() {
        var a = this;
        wx.authorize({
            scope: "scope.userLocation",
            complete: function(t) {
                console.log(t), wx.chooseLocation({
                    success: function(t) {
                        console.log(t);
                        var e = t.latitude, i = t.longitude, o = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + t.latitude + "," + t.longitude + "&key=V7DBZ-K7C22-SXXUJ-CDUE7-AM2LH-AEFCM&get_poi=1";
                        wx.request({
                            url: o,
                            success: function(t) {
                                console.log(t);
                                t.data.result.address_component.province, t.data.result.address_component.city, 
                                t.data.result.address_component.district;
                                var o = t.data.result.address_component.province + "-" + t.data.result.address_component.city + "-" + t.data.result.address_component.district;
                                console.log(o), a.setData({
                                    address: o,
                                    lng: i,
                                    lat: e
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    getHostleve: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/regin.jurisdiction",
            data: {},
            success: function(t) {
                console.log(t);
                var e = t.data;
                a.setData({
                    fenleiList: e,
                    fenleiIndex: 0
                });
            }
        });
    }
});