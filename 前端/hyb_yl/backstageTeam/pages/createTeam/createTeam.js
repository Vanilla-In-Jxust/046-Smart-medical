var t = getApp();

Page({
    data: {
        imgFlag: [],
        addressBoo: !0,
        provinceBoo: !0,
        text: "",
        city: "",
        intro: "",
        cityData: [],
        region: [],
        tapFlag: !0,
        height: 500,
        textFlag: !0,
        typeHeight: 400,
        typeindex: 0,
        is_index: 0,
        jigou_onearr: [],
        jigou_oneindex: 0,
        jigou_twoarr: [],
        jigou_twoindex: 0,
        keshi_onearr: [],
        keshi_oneindex: 0,
        keshi_twoindex: 0,
        keshi_twoarr: [],
        thumb: "",
        imgpath: "",
        typeArray: [ "线上团队", "线下团队" ],
        sexArray: [ "线上科室", "自由团体" ],
        shequArray: [],
        shequindex: 0,
        sexIndex: "",
        data_arr: [],
        Gender: [ "女", "男" ],
        Hospital: [ "山西大医院", "山西省第三人民医院" ],
        hosindex: "",
        Department: [ "科室1", "科室2" ],
        deparindex: "",
        docTitle: [ "职称1", "职称2" ],
        docindex: "",
        belist: [ {
            name: "青光眼",
            checked: !1
        }, {
            name: "青光眼",
            checked: !1
        }, {
            name: "青光眼",
            checked: !1
        } ],
        id: ""
    },
    bindRegionChange: function(t) {
        this.setData({
            cityData: t.detail.value,
            isindex: 0
        });
    },
    clicks: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.label_arr;
        0 == e[a].checked ? e[a].checked = !0 : e[a].checked = !1, this.setData({
            label_arr: e
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            hosindex: t.detail.value
        });
    },
    bindhosindexChange: function(t) {
        this.setData({
            deparindex: t.detail.value
        });
    },
    binddocTitle: function(t) {
        this.setData({
            docindex: t.detail.value
        });
    },
    formSubmit: function(a) {
        var e = a.detail.value;
        e.thumb = this.data.thumb, e.imgpath = this.data.imgpath, e.cid = this.data.cid;
        var i = this.data.cityData;
        e.address = i[0] + i[1] + i[2], e.province = i[0], e.city = i[1], e.district = i[2], 
        e.openid = wx.getStorageSync("openid"), e.zid = wx.getStorageSync("zid"), e.id = this.data.id, 
        e.jigou_one = this.data.jigou_one, e.jigou_two = this.data.jigou_two, e.keshi_one = this.data.keshi_one, 
        e.keshi_two = this.data.keshi_two, e.label = e.checkbox;
        e.thumb ? e.imgpath ? e.title ? e.telphone ? /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(e.telphone) ? e.type ? e.province ? e.is_index ? e.jigou_one ? e.jigou_two ? e.keshi_one ? e.keshi_two ? "" == e.checkbox.length ? wx.showToast({
            title: "请选择您的擅长",
            icon: "none"
        }) : e.xn_answer ? e.xn_chufang ? e.times ? e.content ? t.util.request({
            url: "entry/wxapp/team.add_team",
            data: e,
            success: function(t) {
                wx.showToast({
                    title: "申请成功，请等待审核",
                    icon: "none"
                }), setTimeout(function() {
                    wx.navigateBack({});
                }, 3e3);
            }
        }) : wx.showToast({
            title: "请输入简介",
            icon: "none"
        }) : wx.showToast({
            title: "请输入响应时间",
            icon: "none"
        }) : wx.showToast({
            title: "请输入虚拟月处方",
            icon: "none"
        }) : wx.showToast({
            title: "请填写虚拟月回答",
            icon: "none"
        }) : wx.showToast({
            title: "请选择二级科室",
            icon: "none"
        }) : wx.showToast({
            title: "请选择一级科室",
            icon: "none"
        }) : wx.showToast({
            title: "请选择二级机构",
            icon: "none"
        }) : wx.showToast({
            title: "请选择一级机构",
            icon: "none"
        }) : wx.showToast({
            title: "请选择是否显示",
            icon: "none"
        }) : wx.showToast({
            title: "请选择所在地",
            icon: "none"
        }) : wx.showToast({
            title: "请选择类别",
            icon: "none"
        }) : wx.showToast({
            title: "请正确填写联系电话",
            icon: "none"
        }) : wx.showToast({
            title: "请填写联系电话",
            icon: "none"
        }) : wx.showToast({
            title: "请填写团队名称",
            icon: "none"
        }) : wx.showToast({
            title: "请上传荣誉资质",
            icon: "none"
        }) : wx.showToast({
            title: "请上传团队LOGO",
            icon: "none"
        });
    },
    bindSexChange: function(t) {
        console.log(t), this.setData({
            sexIndex: t.detail.value
        }), 0 == t.detail.value && (this.data.teamType = 1), 1 == t.detail.value && (this.data.teamType = 2);
    },
    chooseImage: function() {
        var t = this, a = t.data.uniacid;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var i = e.tempFilePaths[0];
                console.log(i), wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=upload&m=hyb_yl",
                    filePath: i,
                    name: "upfile",
                    formData: {},
                    success: function(a) {
                        console.log(a.data), t.setData({
                            uplogo: a.data
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                }), t.setData({
                    logo: i
                });
            }
        });
    },
    getText: function(t) {
        this.setData({
            text: t.detail.value
        });
    },
    getIntro: function(t) {
        this.setData({
            intro: t.detail.value
        });
    },
    bindlinechange: function(t) {
        1 != this.data.type ? t.detail.heightRpx > 500 && this.setData({
            height: t.detail.heightRpx
        }) : t.detail.heightRpx > 400 && this.setData({
            typeHeight: t.detail.heightRpx
        });
    },
    getCity: function(t) {},
    save: function() {
        var a = this.data.text, e = this.data.address, i = this.data.intro, n = this.data.sexIndex, o = this.data.teampic1, s = this.data.t_id;
        t.util.request({
            url: "entry/wxapp/studio.docteam",
            data: {
                teamname: a,
                teamaddress: e,
                teamtext: i,
                teamtype: n,
                teampic: o,
                zid: this.data.zid,
                t_id: s
            },
            success: function(t) {
                console.log(t), wx.showToast({
                    title: "保存成功",
                    icon: "none",
                    duration: 2e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3);
                    }
                });
            }
        });
    },
    creat: function() {
        var a = this.data.text, e = this.data.address, i = this.data.intro, n = this.data.sexIndex;
        if ("" == a) wx.showToast({
            title: "请填写团队名称",
            icon: "none",
            duration: 2e3
        }); else if (null == e) wx.showToast({
            title: "请选择团队所在地区",
            icon: "none",
            duration: 2e3
        }); else if (null == n) wx.showToast({
            title: "请选择团队类型",
            icon: "none",
            duration: 2e3
        }); else if ("" == i) wx.showToast({
            title: "请填写团队简介",
            icon: "none",
            duration: 2e3
        }); else {
            var o = this.data.uplogo;
            t.util.request({
                url: "entry/wxapp/studio.docteam",
                data: {
                    teamname: a,
                    teamaddress: e,
                    teamtext: i,
                    teamtype: n,
                    teampic: o,
                    zid: this.data.zid
                },
                success: function(t) {
                    console.log(t), wx.showToast({
                        title: "创建成功",
                        icon: "none",
                        duration: 2e3,
                        success: function() {
                            setTimeout(function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }, 1e3);
                        }
                    });
                }
            });
        }
    },
    onLoad: function(a) {
        var e = this, i = a.id, n = t.siteInfo.uniacid;
        null != a.t_id && t.util.request({
            url: "entry/wxapp/team.team_detail",
            data: {
                id: i
            },
            success: function(t) {
                e.setData({
                    thumb: t.data.thumb,
                    imgpath: t.data.imgpath,
                    info: t.data,
                    id: a.id
                });
            }
        }), t.util.request({
            url: "entry/wxapp/Hzbingli.url",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data
                });
            }
        }), e.setData({
            uniacid: n
        }), e.getshequ(), e.getKeshi_one(), e.getHospital();
    },
    getshequ: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/team.shequ",
            success: function(t) {
                var e = [];
                for (var i in t.data) e.push(t.data[i].title);
                a.setData({
                    shequArray: e,
                    shequArrays: t.data
                });
            }
        });
    },
    getKeshi_one: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/team.keshi_one",
            success: function(t) {
                var e = [];
                for (var i in t.data) e.push(t.data[i].ctname);
                a.setData({
                    keshi_onearr: e,
                    keshi_onearrs: t.data
                });
            }
        });
    },
    getKeshi_two: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.keshi_two",
            data: {
                id: a
            },
            success: function(t) {
                var a = [];
                for (var i in t.data) a.push(t.data[i].name);
                e.setData({
                    keshi_twoarr: a,
                    keshi_twoarrs: t.data
                });
            }
        });
    },
    getHospital: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/team.hospital",
            success: function(t) {
                var e = [];
                for (var i in t.data) e.push(t.data[i].name);
                a.setData({
                    jigou_onearr: e,
                    jigou_onearrs: t.data
                });
            }
        });
    },
    getjigou_two: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.jigou_two",
            data: {
                id: a
            },
            success: function(t) {
                var a = [];
                for (var i in t.data) a.push(t.data[i].agentname);
                e.setData({
                    jigou_twoarr: a,
                    jigou_twoarrs: t.data
                });
            }
        });
    },
    bindtypeChange: function(t) {
        this.setData({
            typeindex: t.detail.value,
            type: t.detail.value
        });
    },
    bindshequChange: function(t) {
        var a = this.data.shequArrays[t.detail.value].id;
        this.setData({
            shequindex: t.detail.value,
            cid: a
        });
    },
    bindjgoneChange: function(t) {
        var a = this.data.jigou_onearrs[t.detail.value].id;
        this.setData({
            jigou_oneindex: t.detail.value,
            jigou_one: a
        }), this.getjigou_two(a);
    },
    bindjgtwoChange: function(t) {
        var a = t.detail.value, e = this.data.jigou_twoarrs[a].hid;
        this.setData({
            jigou_twoindex: t.detail.value,
            jigou_two: e
        });
    },
    bindksoneChange: function(t) {
        var a = this.data.keshi_onearrs[t.detail.value].id;
        this.setData({
            keshi_oneindex: t.detail.value,
            keshi_one: a
        }), this.getKeshi_two(a);
    },
    bindkstwoChange: function(t) {
        var a = this.data.keshi_twoarrs[t.detail.value].id;
        this.setData({
            keshi_twoindex: t.detail.value,
            keshi_two: a
        }), this.getLabel(a);
    },
    chooseimg: function() {
        var t = this, a = t.data.uniacid;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var i = e.tempFilePaths, n = 0; n < i.length; n++) wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: i[n],
                    name: "upfile",
                    formData: [],
                    success: function(a) {
                        t.setData({
                            thumb: a.data
                        });
                    }
                });
            }
        });
    },
    chooseimgpath: function() {
        var t = this, a = t.data.uniacid;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var i = e.tempFilePaths, n = 0; n < i.length; n++) wx.uploadFile({
                    url: t.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: i[n],
                    name: "upfile",
                    formData: [],
                    success: function(a) {
                        t.setData({
                            imgpath: a.data
                        });
                    }
                });
            }
        });
    },
    getLabel: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/team.labels",
            data: {
                id: a
            },
            success: function(t) {
                e.setData({
                    label_arr: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.createAnimation({
            duration: 800,
            timingFunction: "ease"
        });
        this.animation = t;
    },
    chooseLocation: function() {
        var t = this;
        wx.chooseAddress ? wx.chooseAddress({
            success: function(a) {
                console.log(JSON.stringify(a));
                var e = a.provinceName + a.cityName + a.countyName + a.detailInfo;
                console.log(a), t.setData({
                    address: e,
                    flag: !1
                });
            },
            fail: function(t) {
                console.log(JSON.stringify(t)), console.info("收货地址授权失败");
            }
        }) : console.log("当前微信版本不支持chooseAddress");
    },
    tapProvince: function(t) {
        this.setData({
            cityList: ""
        });
        var e = t.target.id, i = t.target.dataset.index, n = t.target.dataset.province, o = this;
        this.setData({
            provinceIndex: i,
            province: n,
            Seng: t.currentTarget.dataset.province
        }), o.data.provinceBoo && wx.request({
            url: a.globalData.httpOne + "mall/addr/listNation/" + e,
            success: function(t) {
                200 == t.data.code && o.setData({
                    cityList: t.data.data,
                    cityIndex: "none",
                    districtIndex: "none",
                    provinceBoo: !0,
                    province: n
                });
            }
        }), o.setData({
            provinceBoo: !1
        });
    },
    tapCity: function(t) {
        this.setData({
            city: "",
            textFlag: !0
        });
        var a = t.target.dataset.index, e = t.target.dataset.city, i = this.data.province;
        this.animation.translateX(1200).step(), this.setData({
            code: t.target.dataset.code,
            cityIndex: a,
            city: e,
            area: i + "-" + e,
            addressBoo: !0,
            animationData: this.animation.export(),
            SHI: t.currentTarget.dataset.city
        });
    },
    closesearea: function() {
        this.setData({
            textFlag: !0
        }), this.animation.translateX(1200).step(), this.setData({
            addressBoo: !0,
            animationData: this.animation.export()
        });
    },
    onHide: function() {},
    shanchu1: function(t) {
        var e = this;
        wx.showModal({
            title: "提示",
            content: "您确认退出团队吗？",
            success: function(t) {
                t.confirm ? wx.request({
                    url: a.globalData.dic + "doctor/team/quit/" + e.data.token + "/" + e.data.teamId,
                    success: function(t) {
                        if (200 == t.data.code) {
                            if (1 == e.data.groupFlag) return void wx.navigateBack({
                                delta: 4
                            });
                            wx.navigateBack({
                                delta: 3
                            });
                        }
                    }
                }) : t.cancel;
            }
        });
    },
    shanchu: function(a) {
        var e = this.data.t_id;
        wx.showModal({
            content: "是否解散团队",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/seledocteam",
                    data: {
                        t_id: e,
                        op: "delete"
                    },
                    success: function(t) {
                        console.log(t), wx.showToast({
                            title: "解散成功",
                            icon: "none",
                            duration: 2e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 2
                                    });
                                }, 2e3);
                            }
                        });
                    }
                });
            }
        });
    }
});