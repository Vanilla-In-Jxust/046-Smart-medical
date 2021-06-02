function t(a, e, o, n, i, d) {
    wx.uploadFile({
        url: L.globalData.patient + "patient/report/uploadImage",
        method: "POST",
        header: {
            "content-type": "multipart/form-data"
        },
        filePath: a[e],
        name: "file",
        formData: {
            token: d.data.token
        },
        success: function(s) {
            ++e == o ? wx.request({
                url: L.globalData.patient + "patient/report/save/" + d.data.token,
                method: "POST",
                header: {
                    "content-type": "application/json"
                },
                data: {
                    cdEmItem: d.data.cdEmItem,
                    nmEmItem: d.data.nmEmItem,
                    testDate: n,
                    reportLabs: i
                },
                success: function(t) {
                    200 == t.data.code && wx.navigateBack({
                        detail: 1
                    });
                },
                fail: function(t) {
                    L.showToast();
                },
                complete: function() {
                    wx.hideLoading();
                }
            }) : t(a, e, o, n, i, d);
        },
        fail: function(t) {
            L.showToast();
        },
        complete: function() {}
    });
}

function a(t, a, e) {
    wx.request({
        url: L.globalData.patient + "patient/report/save/" + e.data.token,
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        data: {
            cdEmItem: e.data.cdEmItem,
            nmEmItem: e.data.nmEmItem,
            testDate: t,
            reportLabs: a
        },
        success: function(t) {
            200 == t.data.code && L.navigateBack(), 400 == t.data.code && wx.showToast({
                title: t.data.msg,
                icon: "none",
                duration: 4e3
            });
        },
        fail: function(t) {
            L.showToast();
        },
        complete: function() {
            wx.hideLoading();
        }
    });
}

function e(t, a, o, n, i, d) {
    wx.uploadFile({
        url: L.globalData.patient + "patient/report/uploadImage",
        method: "POST",
        header: {
            "content-type": "multipart/form-data"
        },
        filePath: t[a],
        name: "file",
        formData: {
            token: d.data.token
        },
        success: function(s) {
            ++a == o ? wx.request({
                url: L.globalData.patient + "patient/report/update/" + d.data.token,
                method: "POST",
                header: {
                    "content-type": "application/json"
                },
                data: {
                    reportId: d.data.reportId,
                    cdEmItem: d.data.cdEmItem,
                    nmEmItem: d.data.nmEmItem,
                    testDate: n,
                    reportLabs: i
                },
                success: function(t) {
                    200 == t.data.code && wx.navigateBack({
                        detail: 1
                    });
                },
                fail: function(t) {
                    L.showToast();
                },
                complete: function() {
                    wx.hideLoading();
                }
            }) : e(t, a, o, n, i, d);
        },
        fail: function(t) {
            L.showToast();
        },
        complete: function() {}
    });
}

function o(t, a, e) {
    wx.request({
        url: L.globalData.patient + "patient/report/update/" + e.data.token,
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        data: {
            reportId: e.data.reportId,
            cdEmItem: e.data.cdEmItem,
            nmEmItem: e.data.nmEmItem,
            testDate: t,
            reportLabs: a
        },
        success: function(t) {
            200 == t.data.code && L.navigateBack(), 400 == t.data.code && wx.showToast({
                title: t.data.msg,
                icon: "none",
                duration: 4e3
            });
        },
        fail: function(t) {
            L.showToast();
        },
        complete: function() {
            wx.hideLoading();
        }
    });
}

function n(t, a, e) {
    var o = [];
    if ("请选择" == t) return wx.showToast({
        title: "请选择检验时间",
        icon: "none",
        duration: 2e3
    }), "return";
    for (var n = 0; n < e.data.elementList.length; n++) {
        if ("number" == e.data.elementList[n].valType && !/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a.detail.value[e.data.elementList[n].nmIndexLis]) && "" != a.detail.value[e.data.elementList[n].nmIndexLis]) return wx.showToast({
            title: "小数点后两位数字哦！",
            icon: "none",
            duration: 2e3
        }), "return";
        1 == e.data.comFrom ? o.push({
            reportLabId: e.data.examinedateList.patientReportLabs[n].reportLabId,
            cdIndexLis: e.data.elementList[n].cdIndexLis,
            nmIndexLis: e.data.elementList[n].nmIndexLis,
            enIndexLis: e.data.elementList[n].enIndexLis,
            valueLis: a.detail.value[e.data.elementList[n].nmIndexLis],
            nmQuantiUnit: e.data.elementList[n].unit,
            limitLow: e.data.elementList[n].limitLow,
            limitHigh: e.data.elementList[n].limitHigh,
            descRrs: e.data.elementList[n].descRrs,
            valType: e.data.elementList[n].valType,
            valEnum: e.data.elementList[n].valEnum,
            flagChart: e.data.elementList[n].flagChart
        }) : o.push({
            cdIndexLis: e.data.elementList[n].cdIndexLis,
            nmIndexLis: e.data.elementList[n].nmIndexLis,
            enIndexLis: e.data.elementList[n].enIndexLis,
            valueLis: a.detail.value[e.data.elementList[n].nmIndexLis],
            nmQuantiUnit: e.data.elementList[n].unit,
            limitLow: e.data.elementList[n].limitLow,
            limitHigh: e.data.elementList[n].limitHigh,
            descRrs: e.data.elementList[n].descRrs,
            valType: e.data.elementList[n].valType,
            valEnum: e.data.elementList[n].valEnum,
            flagChart: e.data.elementList[n].flagChart
        });
    }
    return o;
}

function i(t, a, e) {
    if (1 == t.data.comFrom) {
        var o = t.data.urlArrList;
        o.splice(a - 1, 1);
    }
    e.splice(a, 1), e.length < 9 && t.setData({
        addFlag: !0
    }), t.setData({
        imgUrlList: e,
        urlArrList: o
    });
}

function d(t) {
    wx.request({
        url: L.globalData.httpOne + "mall/addr/listNation/" + t.data.id,
        success: function(a) {
            200 != a.data.code || 1 != t.data.id ? t.setData({
                cityList: a.data.data
            }) : t.setData({
                provinceList: a.data.data
            });
        },
        complete: function() {
            wx.hideLoading();
        }
    });
}

function s(t) {
    t.setData({
        noDataBoo: !1
    });
    var a = t.data.regionName, e = t.data.sectionName, o = t.data.hospitalName, n = (t.data.doctors, 
    t.data.currentResult);
    "科室" != e && "所有科室" != e || (e = ""), "医院名称" != o && "所有医院" != o || (o = ""), "全国" != t.data.regionName && "区域" != t.data.regionName || (a = "");
    t.data.keyWord, t.data.jobType, t.data.provinceName;
    "team/sign/search" == t.data.url && (t.data.keyWord, t.data.teamtypeFlag);
}

function r(t) {
    var a = t.data.regionName;
    if ("全国" == t.data.regionName || "区域" == t.data.regionName || "" == t.data.regionName) return a = "", 
    void wx.showToast({
        title: "请先选择一个城市"
    });
    wx.request({
        url: L.globalData.httpLogin + "dic/hospital",
        data: {
            city: a,
            name: ""
        },
        success: function(a) {
            200 == a.data.code && t.setData({
                hospitalList: a.data.data
            });
        },
        complete: function() {
            wx.hideLoading();
        }
    });
}

function l(t) {
    wx.request({
        url: L.globalData.patient + t.data.url + t.data.token + "/" + t.data.doctorId + "/0",
        success: function(a) {
            if (200 == a.data.code) {
                if (console.log(a.data.data), wx.hideLoading(), a.data.data.team) return void t.setData({
                    doctor: a.data.data.team,
                    relation: a.data.data.relation,
                    service: a.data.data.service,
                    twoStripSaidEducation: a.data.data.twoStripSaidEducation
                });
                a.data.data.doctor.bgGoodAt && (a.data.data.doctor.bgGoodAt = a.data.data.doctor.bgGoodAt.split("、")), 
                t.setData({
                    doctor: a.data.data.doctor,
                    relation: a.data.data.relation,
                    service: a.data.data.service,
                    twoStripSaidEducation: a.data.data.twoStripSaidEducation
                });
            }
        },
        fail: function(t) {
            wx.hideLoading();
        }
    });
}

function c(t) {
    wx.showLoading({
        mask: !0
    }), wx.request({
        url: L.globalData.patient + "patient/sign/submit/" + t.data.token + "/" + t.data.doctorId + "/" + t.data.signType,
        success: function(a) {
            200 == a.data.code && (t.setData({
                modelBoo: !1,
                backBoo: !0
            }), l(t)), 10020115 == a.data.code && wx.showModal({
                title: a.data.msg,
                showCancel: !1,
                confirmText: "取消",
                confirmColor: "#3b4ca9",
                success: function(t) {
                    t.confirm;
                }
            });
        },
        complete: function() {
            wx.hideLoading();
        }
    });
}

function u(t) {
    wx.showLoading({
        mask: !0
    }), wx.request({
        url: L.globalData.patient + "patient/sign/cancel/" + t.data.token + "/" + t.data.signId,
        success: function(a) {
            200 == a.data.code && (wx.hideLoading(), 1 == t.data.signType && (wx.removeStorageSync("myDoctor"), 
            t.data.myDoctor = []), 2 == t.data.signType && (wx.removeStorageSync("myNurse"), 
            t.data.myNurse = []), 3 == t.data.signType && (wx.removeStorageSync("myTeam"), t.data.myTeam = []), 
            t.setData({
                relation: null,
                backBoo: !1
            }), l(t), t.data.confirmFlag && ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                url: "patient/sign/doctorInfo/get/"
            }), "team/sign/info/" == t.data.oldUrl && t.setData({
                url: "team/sign/info/"
            }), y.signedBtn(t)));
        },
        complete: function() {}
    });
}

function g(t) {
    wx.showLoading({
        mask: !0
    });
    var a = t.data.relation;
    wx.request({
        url: L.globalData.patient + "patient/sign/break/" + t.data.token + "/" + t.data.signId,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: {
            cdDisReason: t.data.reasonIndex,
            nmDisReason: t.data.reasonText
        },
        success: function(e) {
            if (wx.hideLoading(), 10020112 != e.data.code) {
                if (200 == e.data.code) {
                    if (t.data.confirmFlag) return t.setData({
                        ReasonFlag: !1,
                        doctorId: t.data.oldDoctorId
                    }), "patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                        url: "patient/sign/doctorInfo/get/"
                    }), "team/sign/info/" == t.data.oldUrl && t.setData({
                        url: "team/sign/info/"
                    }), void c(t);
                    a.signState = 2, t.setData({
                        myDcoBoo: !0,
                        relation: a,
                        ReasonFlag: !1
                    }), 2 == t.data.lookOverBoo && wx.navigateBack({
                        delta: 3
                    }), 4 == t.data.lookOverBoo && wx.navigateBack({
                        delta: 2
                    });
                }
            } else wx.showModal({
                title: "团队已解散，无需再解约~",
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#3b4ca9",
                success: function(t) {
                    t.confirm && wx.switchTab({
                        url: "/pages/index/index"
                    });
                }
            });
        },
        complete: function() {}
    });
}

function m(t, a) {
    t.data.papersCode, t.data.papersArray, wx.request({
        url: L.globalData.patient + "patient/vital/list/" + t.data.token + "/" + a + "/" + t.data.currentResult + "/0",
        data: {},
        success: function(a) {
            if (200 == a.data.code) {
                if (!a.data.data) return void t.setData({
                    papersArrayBoo: !1,
                    papersCode: [],
                    papersArray: []
                });
                var e = [], o = [];
                a.data.data.vitals.forEach(function(t) {
                    for (var a in t) {
                        for (var n = t[a], i = 0; i < n.length; i++) {
                            var d = n[i].testDate;
                            n[i].testDate = d.slice(5);
                        }
                        e.push(a), o.push(t[a]);
                    }
                }), t.setData({
                    papersArray: o,
                    papersCode: e,
                    currentResult: a.data.data.page.nextResult
                });
            }
        }
    });
}

function p(t, a) {
    wx.showLoading({
        mask: !0
    });
    var e = t.data.listPatientBbsReplyVO, o = t.data.page;
    wx.request({
        url: L.globalData.patient + "patient/reply/patBbsTopicParticulars/" + t.data.token + "/" + t.data.tid + "/" + o,
        success: function(n) {
            200 == n.data.code && (wx.hideLoading(), n.data.data.list.length > 0 ? (1 == a ? n.data.data.list.forEach(function(t) {
                e.push(t);
            }) : e = n.data.data.list, t.setData({
                noCommFlag: !1
            })) : 0 != o ? t.setData({
                loadingBoo: !0,
                moreBoo: !1
            }) : t.setData({
                noCommFlag: !0
            }), e.length > 0 && e.forEach(function(t) {
                t.ruid == n.data.data.tuid && (t.author = 1);
            }), t.setData({
                detailList: n.data.data.patientBbsTopicVO,
                listPatientBbsReplyVO: e,
                loadingBoo: !0,
                page: n.data.data.page.nextResult,
                userId: n.data.data.userId
            }));
        },
        complete: function() {}
    });
}

function f(t) {
    return !1 !== h(t) && !1 !== w(t) && !1 !== x(t) && !1 !== I(t);
}

function h(t) {
    return !1 !== /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(t);
}

function w(t) {
    var a = t.substr(0, 2);
    return null != T[a];
}

function x(t) {
    var a = t.length;
    if ("15" == a) {
        return D("19" + (o = (e = t.match(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/))[2]), n = e[3], i = e[4], d = new Date("19" + o + "/" + n + "/" + i));
    }
    if ("18" == a) {
        var e = t.match(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/), o = e[2], n = e[3], i = e[4], d = new Date(o + "/" + n + "/" + i);
        return D(o, n, i, d);
    }
    return !1;
}

function D(t, a, e, o) {
    var n = new Date().getFullYear();
    if (o.getFullYear() == t && o.getMonth() + 1 == a && o.getDate() == e) {
        var i = n - t;
        return i >= 0 && i <= 130;
    }
    return !1;
}

function I(t) {
    if ("18" == (t = v(t)).length) {
        var a, e = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), o = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), n = 0;
        for (a = 0; a < 17; a++) n += t.substr(a, 1) * e[a];
        return o[n % 11] == t.substr(17, 1);
    }
    return !1;
}

function v(t) {
    if ("15" == t.length) {
        var a, e = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), o = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), n = 0;
        for (t = t.substr(0, 6) + "19" + t.substr(6, t.length - 6), a = 0; a < 17; a++) n += t.substr(a, 1) * e[a];
        return t + o[n % 11];
    }
    return t;
}

var L = getApp(), T = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
}, y = {
    uploadDIY: t,
    getReportLabs: n,
    postMsg: a,
    getExaminedate: function(t, a, e) {
        var o = [], n = [];
        wx.request({
            url: L.globalData.patient + "patient/report/detail/" + t + "/" + a + "/0",
            success: function(t) {
                200 == t.data.code && ((o = t.data.data).report.dateEm = L.getDate(o.report.dateEm), 
                o.images.forEach(function(t) {
                    n.push(t.imageUrl);
                }), o.patientReportLabs.length > 0 && o.patientReportLabs.forEach(function(t) {
                    "text" == t.valType && (t.casIndex = "", t.casArray = t.valEnum.split("|"), t.valueLis = parseInt(t.valueLis));
                }), e.setData({
                    examinedateList: o,
                    imgUrlList: n
                }));
            },
            fail: function() {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getEmItem: function(t, a) {
        a.setData({
            cdEmItem: t.cdEmItem || "",
            nmEmItem: t.nmEmItem || "",
            reportId: t.reportId || "",
            reportLabId: t.reportLabId || "",
            token: wx.getStorageSync("logs")
        });
    },
    chooseimage: function(t, a, e) {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(o) {
                for (var n = 0; n < o.tempFilePaths.length; n++) a.push(o.tempFilePaths[n]), 1 == t.data.comFrom && e.push(o.tempFilePaths[n]);
                t.setData({
                    imgUrlList: a,
                    urlArrList: e
                });
            }
        });
    },
    delImg: i,
    checkDictionary: function(t, a) {
        wx.request({
            url: L.globalData.loginDic + "comdicunit?code=" + a.data.cdEmItem,
            success: function(t) {
                if (200 == t.data.code) {
                    var e = t.data.data;
                    e.length > 0 && e.forEach(function(t) {
                        "text" == t.valType && (t.casIndex = "", t.casArray = t.valEnum.split("|"));
                    }), a.setData({
                        elementList: e
                    });
                }
            },
            fail: function() {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    deleteImage: function(t, a) {
        wx.request({
            url: L.globalData.patient + "patient/report/deleteImage/" + a.target.dataset.id + "/" + t.data.reportId,
            success: function(e) {
                if (200 == e.data.code) {
                    i(t, a.target.dataset.index, t.data.imgUrlList);
                    var o = t.data.examinedateList;
                    o.images.splice(a.target.dataset.index, 1), t.setData({
                        examinedateList: o
                    });
                }
            },
            fail: function() {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    editUploadDIY: e,
    editPostMsg: o,
    delRecord: function(t) {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), wx.request({
            url: L.globalData.patient + "patient/report/delete/" + t.data.token + "/" + t.data.reportId,
            success: function(t) {
                200 == t.data.code && wx.navigateBack({
                    delta: 1
                });
            },
            fail: function() {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getCheckData: function(i, d) {
        var s = i.data.imgUrlList, r = s.length;
        if (1 == i.data.comFrom) l = "请选择" == i.data.date ? i.data.examinedateList.report.dateEm : i.data.date; else var l = i.data.date;
        var c = n(l, d, i);
        if ("return" != c) return 1 == i.data.comFrom ? (s = i.data.urlArrList, (r = i.data.urlArrList.length) <= 0 ? void o(l, c, i) : void e(s, 0, r, l, c, i)) : void (r <= 0 ? a(l, c, i) : t(s, 0, r, l, c, i));
    },
    getTimeData: function(t, a, e, o) {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var n = null;
        wx.request({
            url: L.globalData.patient + "patient/report/listByCdIndexLis/" + t.data.token + "/" + a + "/" + e + "/0",
            success: function(a) {
                if (200 == a.data.code) {
                    var e = a.data.data, i = [], d = [], s = "", r = 0, l = 10, c = t.data.areaChartArr;
                    if (e.length > 0) {
                        e.forEach(function(t) {
                            s = t.nmIndexLis, r = parseFloat(t.limitLow) || 0, l = parseFloat(t.limitHigh) || 10, 
                            "" != t.valueLis && (d.push(parseFloat(t.valueLis)), i.push(L.getDate(t.dateEm)));
                        }), n = t.chartList(o, t.data.windowWidth, i.reverse(), d.reverse(), r, l, s);
                        for (var u = 0; u < c.length; u++) if (c[u].opts.canvasId == o) return c[u] = n, 
                        t.setData({
                            areaChartArr: c
                        }), void wx.hideLoading();
                        c.push(n), t.setData({
                            areaChartArr: c,
                            msgData: e
                        });
                    } else n = "canvas" == o ? t.chartList(o, t.data.windowWidth, i.reverse(), d.reverse(), r, l, t.data.cdName) : t.chartList(o, t.data.windowWidth, i.reverse(), d.reverse(), r, l, o);
                }
                wx.hideLoading();
            }
        });
    },
    bindlinechange: function(t, a) {
        var e = 2 * t.detail.height, o = a.data.initialHeight;
        e > o ? a.setData({
            height: e
        }) : a.setData({
            height: o
        });
    },
    dataDictionary: function(t, a) {
        wx.request({
            url: L.globalData.loginDic + "comdicbase",
            data: {
                code: t
            },
            success: function(t) {
                200 == t.data.code && a.setData({
                    codeData: t.data.data
                });
            }
        });
    },
    tabFun: function(t, a) {
        L.list(t, a), 0 == a.data.curHdIndex && a.setData({
            selectIndex: 0,
            isfull: !1,
            qyshow: !0,
            nzshow: !0,
            pxshow: !0,
            isShow: !1
        });
    },
    select: function(t, a) {
        if (t.currentTarget.dataset.id != a.data.selectIndex) {
            if (1 == t.currentTarget.dataset.id) wx.showLoading({
                mask: !0
            }), a.setData({
                qyshow: !1,
                nzshow: !0,
                pxshow: !0
            }), d(a); else if (2 == t.currentTarget.dataset.id) a.setData({
                qyshow: !0,
                nzshow: !1,
                pxshow: !0
            }); else if (3 == t.currentTarget.dataset.id) {
                if ("全国" == a.data.regionName || "区域" == a.data.regionName || "" == a.data.regionName) return wx.showToast({
                    title: "请先选择一个城市",
                    icon: "none",
                    duration: 2e3
                }), void a.setData({
                    qyshow: !0,
                    nzshow: !0,
                    pxshow: !0,
                    selectIndex: 0,
                    isfull: !1,
                    isShow: !1
                });
                wx.showLoading({
                    mask: !0
                }), a.setData({
                    qyshow: !0,
                    nzshow: !0,
                    pxshow: !1
                }), r(a);
            }
            a.setData({
                selectIndex: t.currentTarget.dataset.id,
                isfull: !0,
                isShow: !0
            });
        } else a.setData({
            selectIndex: 0,
            isfull: !1
        });
    },
    selectPartsAll: function(t, a) {
        a.setData({
            provinceIndex: t.target.dataset.index,
            partsName: "",
            regionName: "区域",
            provinceName: "",
            cityList: [],
            cityIndex: null,
            isfull: !1,
            isShow: !0,
            qyshow: !1,
            selectIndex: 0,
            id: 1,
            currentResult: 1,
            doctors: [],
            moreBoo: !0,
            loadingBoo: !0
        }), s(a);
    },
    selectParts: function(t, a) {
        wx.showLoading({
            mask: !0
        }), a.setData({
            provinceIndex: t.target.dataset.index,
            provinceName: t.target.dataset.province,
            cityIndex: null,
            id: t.target.dataset.id,
            cityList: []
        }), d(a);
    },
    selectCity: function(t, a) {
        a.setData({
            cityIndex: t.target.dataset.index,
            regionName: t.target.dataset.city,
            isfull: !1,
            isShow: !0,
            qyshow: !1,
            selectIndex: 0,
            currentResult: 1,
            doctors: [],
            moreBoo: !0,
            loadingBoo: !0
        }), s(a);
    },
    selectSectionAll: function(t, a) {
        a.setData({
            sectionIndex: t.target.dataset.index,
            sectionName: "所有科室",
            isfull: !1,
            isShow: !0,
            nzshow: !1,
            selectIndex: 0,
            currentResult: 1,
            doctors: [],
            moreBoo: !0,
            loadingBoo: !0
        }), s(a);
    },
    selectSection: function(t, a) {
        a.setData({
            sectionIndex: t.target.dataset.index,
            sectionName: t.target.dataset.section,
            isfull: !1,
            isShow: !0,
            nzshow: !1,
            selectIndex: 0,
            currentResult: 1,
            doctors: [],
            moreBoo: !0,
            loadingBoo: !0
        }), s(a);
    },
    selectHosptalAll: function(t, a) {
        a.setData({
            hospitalIndex: t.target.dataset.index,
            hospitalName: "所有医院",
            isfull: !1,
            isShow: !0,
            pxshow: !1,
            selectIndex: 0,
            currentResult: 1,
            doctors: [],
            moreBoo: !0,
            loadingBoo: !0
        }), s(a);
    },
    selectHosptal: function(t, a) {
        a.setData({
            hospitalIndex: t.target.dataset.index,
            hospitalName: t.target.dataset.hospital,
            isfull: !1,
            isShow: !0,
            pxshow: !1,
            selectIndex: 0,
            currentResult: 1,
            doctors: [],
            moreBoo: !0,
            loadingBoo: !0
        }), s(a);
    },
    searchSome: s,
    chooseArea: d,
    getHospital: r,
    doctorIntro: l,
    signedBtn: c,
    cancelBtn: u,
    relieve: g,
    authState: function(t) {
        wx.request({
            url: L.globalData.patient + "patient/record/get/authState/" + t.data.token,
            success: function(a) {
                200 == a.data.code && (1 == a.data.data && t.setData({
                    authStateBoo: !0,
                    switchText: "档案已授权"
                }), 0 == a.data.data && t.setData({
                    authStateBoo: !1,
                    switchText: "档案未授权"
                }), t.setData({
                    showFlag: !0
                }));
            }
        });
    },
    authorized: function(t, a) {
        wx.showLoading({
            mask: !0
        }), 1 == a.detail.value && t.setData({
            flag: 1
        }), 0 == a.detail.value && t.setData({
            flag: 0
        }), wx.request({
            url: L.globalData.patient + "patient/record/auth/" + t.data.token + "/" + t.data.flag,
            success: function(a) {
                200 == a.data.code && (wx.hideLoading(), 1 == t.data.flag && t.setData({
                    authStateBoo: !0,
                    switchText: "档案已授权"
                }), 0 == t.data.flag && t.setData({
                    authStateBoo: !1,
                    switchText: "档案未授权"
                }));
            },
            complete: function() {}
        });
    },
    record: function(t) {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var a = t.data.recordList;
        wx.request({
            url: L.globalData.patient + "patient/sign/history/" + t.data.token + "/" + t.data.currentResult,
            success: function(e) {
                if (200 == e.data.code) {
                    if (e.data.data.result.length > 0 && e.data.data.result.forEach(function(t) {
                        a.push(t);
                    }), e.data.data.result.length <= 0 && 0 != t.data.currentResult) return void t.setData({
                        recordList: a,
                        loadingBoo: !0,
                        moreBoo: !1
                    });
                    e.data.data.result.length <= 0 && 0 == t.data.currentResult && t.setData({
                        recordBoo: !0
                    }), t.setData({
                        recordList: a,
                        currentResult: e.data.data.page.nextResult,
                        loadingBoo: !0
                    });
                }
            },
            fail: function() {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    medOrder: function(t) {
        wx.request({
            url: L.globalData.patient + "patient/askmed/generateMedOrder",
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            data: {
                token: t.data.token,
                doctorId: t.data.doctorId,
                serviceId: t.data.serviceId,
                msgText: t.data.msgText,
                msgSmallUrl: t.data.msgSmallUrl,
                msgBigUrl: t.data.msgBigUrl,
                smallFilePath: t.data.smallFilePath,
                bigFilePath: t.data.bigFilePath,
                recordFalg: 0,
                medType: t.data.signType
            },
            success: function(a) {
                999 != a.data.code && 200 != a.data.code && wx.showModal({
                    title: "服务已关闭",
                    confirmColor: "#3b4ca9",
                    confirmText: "返回",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 2
                        });
                    }
                }), 200 == a.data.code && (wx.setStorageSync("InfoMsg", a.data.data), wx.navigateTo({
                    url: "/pages/index/consultingPayments/consultingPayments?signType=" + t.data.signType
                }));
            },
            fail: function() {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    consultingImage: function t(a, e, o, n) {
        var i = n.data.msgSmallUrl, d = n.data.msgBigUrl, s = n.data.smallFilePath, r = n.data.bigFilePath;
        wx.uploadFile({
            url: L.globalData.patient + "patient/askmed/upload/image",
            method: "POST",
            header: {
                "content-type": "multipart/form-data"
            },
            filePath: a[e],
            name: "file",
            formData: {
                token: n.data.token
            },
            success: function(l) {
                var c = JSON.parse(l.data).data;
                "" == i ? (i = c.picSmallHttpUrl, d = c.picBigHttpUrl, s = c.smallFilePath, r = c.bigFilepath) : (i += "|" + c.picSmallHttpUrl, 
                d += "|" + c.picBigHttpUrl, s += "|" + c.smallFilePath, r += "|" + c.bigFilepath), 
                n.setData({
                    msgSmallUrl: i,
                    msgBigUrl: d,
                    smallFilePath: s,
                    bigFilePath: r
                }), ++e == o ? wx.request({
                    url: L.globalData.patient + "patient/askmed/generateMedOrder",
                    method: "POST",
                    header: {
                        "content-type": "application/json"
                    },
                    data: {
                        token: n.data.token,
                        doctorId: n.data.doctorId,
                        serviceId: n.data.serviceId,
                        msgText: n.data.msgText,
                        msgSmallUrl: n.data.msgSmallUrl,
                        msgBigUrl: n.data.msgBigUrl,
                        smallFilePath: n.data.smallFilePath,
                        bigFilePath: n.data.bigFilePath,
                        recordFalg: 0,
                        medType: n.data.signType
                    },
                    success: function(t) {
                        999 != t.data.code && 200 != t.data.code && wx.showModal({
                            title: "服务已关闭",
                            confirmColor: "#3b4ca9",
                            confirmText: "返回",
                            showCancel: !1,
                            success: function() {
                                wx.navigateBack({
                                    delta: 2
                                });
                            }
                        }), 200 == t.data.code && (wx.hideLoading(), wx.setStorageSync("InfoMsg", t.data.data), 
                        wx.navigateTo({
                            url: "/pages/index/consultingPayments/consultingPayments?signType=" + n.data.signType
                        }));
                    },
                    fail: function(t) {
                        L.showToast();
                    },
                    complete: function() {}
                }) : t(a, e, o, n);
            },
            fail: function(t) {
                L.showToast();
            },
            complete: function() {}
        });
    },
    onClickadd: m,
    lower: function(t, a) {
        if (t.data.loadingBoo && t.data.moreBoo) {
            t.data.currentResult, t.data.papersCode, t.data.papersArray, t.setData({
                loadingBoo: !1
            });
            var e = t.data.papersCode, o = t.data.papersArray;
            wx.request({
                url: L.globalData.patient + "patient/vital/list/" + t.data.token + "/" + a + "/" + t.data.currentResult + "/0",
                data: {},
                success: function(a) {
                    if (200 == a.data.code) {
                        var n = [], i = [];
                        if (!a.data.data) return void t.setData({
                            loadingBoo: !0,
                            moreBoo: !1
                        });
                        a.data.data.vitals.forEach(function(t) {
                            for (var a in t) {
                                for (var d = t[a], s = 0; s < d.length; s++) {
                                    var r = d[s].testDate;
                                    d[s].testDate = r.slice(5);
                                }
                                e[e.length - 1] == a ? t[a].forEach(function(t) {
                                    o[e.length - 1].push(t);
                                }) : (n.push(a), i.push(t[a]));
                            }
                        });
                        var d = o.concat(i), s = e.concat(n);
                        t.setData({
                            papersCode: s,
                            papersArray: d,
                            currentResult: a.data.data.page.nextResult,
                            loadingBoo: !0
                        });
                    }
                }
            });
        }
    },
    omit: function(t, a, e) {
        a.setData({
            moreBoo: !0
        });
        var o = t.currentTarget.dataset.id;
        wx.showLoading({
            mask: !0
        }), wx.request({
            url: L.globalData.patient + "patient/vital/delete/" + a.data.token + "/" + o,
            data: {},
            success: function(t) {
                200 == t.data.code && (wx.hideLoading(), m(a, e), a.getSignsData(a, a.data.code, a.data.name), 
                a.getCanvasData(a, a.data.code, a.data.name));
            }
        });
    },
    getCommunityList: function(t, a, e) {
        if (1 == t.data.curHdIndex) var o = t.data.communityListOne, n = t.data.pageOne, i = t.data.moreBooOne; else o = t.data.communityListTwo, 
        n = t.data.pageTwo, i = t.data.moreBooTwo;
        i && t.data.loadingBoo && (0 != n && t.setData({
            loadingBoo: !1
        }), wx.showLoading({
            mask: !0
        }), wx.request({
            url: L.globalData.patient + t.data.url + n + "/" + e,
            data: a,
            success: function(a) {
                if (200 == a.data.code) {
                    if (wx.hideLoading(), a.data.data && a.data.data.forEach(function(t) {
                        o.push(t);
                    }), a.data.data.length <= 0 && 0 != n) return t.setData({
                        loadingBoo: !0
                    }), void (1 == t.data.curHdIndex ? t.setData({
                        moreBooOne: !1
                    }) : t.setData({
                        moreBooTwo: !1
                    }));
                    0 != n && t.setData({
                        loadingBoo: !0
                    }), o.length > 0 && n++, 1 == t.data.curHdIndex ? (t.setData({
                        pageOne: n,
                        communityListOne: o
                    }), o.length <= 0 && 0 == n && t.setData({
                        oneBoo: !0
                    })) : (o.length <= 0 && 0 == n && t.setData({
                        twoBoo: !0
                    }), t.setData({
                        pageTwo: n,
                        communityListTwo: o
                    }));
                }
            },
            fail: function() {
                wx.hideLoading(), wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            },
            complete: function() {}
        }));
    },
    toLike: function(t, a, e) {
        a.currentTarget.dataset.status;
        var o = a.currentTarget.dataset.tid;
        if (1 == e) {
            var n = a.currentTarget.dataset.index;
            if (1 == t.data.curHdIndex) i = t.data.communityListOne; else var i = t.data.communityListTwo;
        } else var d = t.data.detailList;
        wx.request({
            url: L.globalData.patient + "patient/community/updateTpraise",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                tid: o,
                status: 1,
                token: t.data.token
            },
            success: function(a) {
                if (200 == a.data.code) {
                    if (1 == e ? (i[n].status = 1, i[n].tpraiseCount = parseInt(i[n].tpraiseCount) + 1, 
                    wx.showToast({
                        title: "成功点赞",
                        icon: "none",
                        duration: 2e3,
                        mask: !0
                    })) : (d.status = 1, d.tpraiseCount = parseInt(d.tpraiseCount) + 1, wx.showToast({
                        title: "点赞成功~",
                        icon: "none",
                        duration: 2e3,
                        mask: !0
                    })), 2 == e) return void t.setData({
                        detailList: d,
                        currindex: null
                    });
                    1 == t.data.curHdIndex ? t.setData({
                        communityListOne: i
                    }) : t.setData({
                        communityListTwo: i
                    }), t.setData({
                        mask: !1,
                        currindex: null
                    });
                }
            },
            complete: function() {}
        });
    },
    communityImage: function t(a, e, o, n, i, d) {
        console.log(a), console.log(e), console.log(o), console.log(n), console.log(i), 
        wx.showLoading({
            mask: !0
        });
        var s = n.data.smallFilePath, r = n.data.bigFilePath, l = n.data.url, c = n.data.uniacid;
        wx.uploadFile({
            url: l + "app/index.php?i=" + c + "&c=entry&a=wxapp&do=Upload&m=hyb_yl",
            method: "POST",
            header: {
                "content-type": "multipart/form-data"
            },
            filePath: a[e],
            name: "upfile",
            success: function(l) {
                console.log(l);
                var c = l.data;
                if ("" == s ? (s = c.smallFilePath, r = c.bigFilepath) : (s += "|" + c.smallFilePath, 
                r += "|" + c.bigFilepath), n.setData({
                    smallFilePath: s,
                    bigFilePath: r
                }), ++e == o) {
                    if (1 == d) u = {
                        tsid: n.data.tsid,
                        tcontentText: n.data.tcontentText,
                        tcontentImgBig: n.data.bigFilePath,
                        tcontentImgSmll: n.data.smallFilePath
                    }; else var u = {
                        rsid: 1,
                        rtid: n.data.tid,
                        rcontent: n.data.rcontent,
                        picBigUrl: n.data.bigFilePath,
                        picSmallUrl: n.data.smallFilePath
                    };
                    wx.request({
                        url: L.globalData.patient + i,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: u,
                        success: function(t) {
                            200 == t.data.code && (n.setData({
                                rcontent: ""
                            }), 1 == d ? wx.navigateBack({
                                delta: 1
                            }) : (n.setData({
                                comFlag: !1,
                                listPatientBbsReplyVO: [],
                                imgUrlList: [],
                                bigFilePath: "",
                                smallFilePath: "",
                                page: 0,
                                moreBoo: !0
                            }), p(n, 0)));
                        },
                        fail: function(t) {
                            L.showToast();
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                } else t(a, e, o, n, i, d);
            },
            fail: function(t) {
                L.showToast();
            },
            complete: function() {}
        });
    },
    communityText: function(t, a, e, o) {
        wx.showLoading({
            mask: !0
        }), wx.request({
            url: L.globalData.patient + a,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: e,
            success: function(a) {
                200 == a.data.code && (t.setData({
                    rcontent: ""
                }), 1 == o ? wx.navigateBack({
                    delta: 1
                }) : (t.setData({
                    comFlag: !1,
                    imgUrlList: [],
                    page: 0,
                    bigFilePath: "",
                    smallFilePath: "",
                    moreBoo: !0
                }), p(t, 0)));
            },
            fail: function(t) {
                L.showToast();
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getDetails: p,
    getFirstMsg: function(t) {
        var a = t.data.oppositeList, e = t.data.imgUrlArr, o = t.data.imgUrl;
        wx.request({
            url: L.globalData.patient + "patient/askmed/contiueAskMed",
            data: {
                sessionId: t.data.sessionId,
                doctorId: t.data.doctorId,
                patientId: t.data.patientId,
                currentResult: t.data.currentResult,
                medType: t.data.signType
            },
            success: function(n) {
                if (200 == n.data.code) {
                    var i = n.data.data;
                    if (3 == t.data.signType) return i.dpMedOrderVo.msgPicSmall && (i.dpMedOrderVo.msgPicSmall = i.dpMedOrderVo.msgPicSmall.split("|"), 
                    i.dpMedOrderVo.msgPicBig = i.dpMedOrderVo.msgPicBig.split("|")), (d = i.listDpMedOrderItem).length > 0 && (d.forEach(function(n) {
                        a = t.data.oppositeList, e = t.data.imgUrlArr, o = t.data.imgUrl, n.from = n.msgFrom, 
                        t.data.msgIdArr.push(n.msgId), t.data.seqIdArr.push(parseInt(n.msgSeq)), n.seqId = parseInt(n.msgSeq), 
                        n.ctime = L.toDate(n.createTime), "GROUP_IMAGE" == n.msgType ? (o = n.message.split("|"), 
                        n.msg = o[0], n.bigImg = o[1], e.unshift(o[1])) : n.msg = n.message;
                        for (var d = 0; d < i.listGroupHeaderUrl.length; d++) n.from != i.listGroupHeaderUrl[d].userId || (n.headerUrl = i.listGroupHeaderUrl[d].headerUrl);
                        t.data.oppositeList.unshift(n);
                    }), t.setData({
                        oppositeList: a,
                        imgUrlArr: e,
                        scrollTop: t.data.scrollTop + 2e3
                    })), i.listDpMedOrderItem.length > 0 && t.setData({
                        currentResult: i.page.nextResult
                    }), t.setData({
                        contactList: i
                    }), wx.hideLoading(), void wx.request({
                        url: L.globalData.im + "chat/iplist",
                        data: {
                            token: t.data.token,
                            to: t.data.sessionId,
                            medType: t.data.signType
                        },
                        success: function(a) {
                            200 == a.data.code && (t.setData({
                                chatUrl: a.data.data.chatUrl
                            }), t.socket(t));
                        }
                    });
                    i.dpMedOrderVo.msgPicSmall && (i.dpMedOrderVo.msgPicSmall = i.dpMedOrderVo.msgPicSmall.split("|"), 
                    i.dpMedOrderVo.msgPicBig = i.dpMedOrderVo.msgPicBig.split("|"));
                    var d = i.listDpMedOrderItem;
                    d.length > 0 && (d.forEach(function(n) {
                        n.seqId = parseInt(n.msgSeq), t.data.msgIdArr.push(n.msgId), t.data.seqIdArr.push(parseInt(n.msgSeq)), 
                        a = t.data.oppositeList, e = t.data.imgUrlArr, o = t.data.imgUrl, n.from = n.msgFrom, 
                        n.ctime = L.toDate(n.createTime), "SINGLE_IMAGE" == n.msgType ? (o = n.message.split("|"), 
                        n.msg = o[0], n.bigImg = o[1], e.unshift(o[1])) : n.msg = n.message, a.unshift(n);
                    }), t.setData({
                        oppositeList: a,
                        imgUrlArr: e,
                        scrollTop: t.data.scrollTop + 2e3
                    })), i.listDpMedOrderItem.length > 0 && t.setData({
                        currentResult: i.page.nextResult
                    }), t.setData({
                        contactList: i
                    }), wx.hideLoading();
                }
            }
        });
    },
    scrolltoupper: function(t) {
        if (t.data.loadingBoo && t.data.moreBoo) {
            t.setData({
                loadingBoo: !1
            });
            var a = t.data.imgUrl, e = t.data.imgUrlArr;
            wx.request({
                url: L.globalData.patient + "patient/askmed/dpMedOrderItem/list",
                data: {
                    sessionId: t.data.sessionId,
                    currentResult: t.data.currentResult,
                    patientId: t.data.patientId,
                    medType: t.data.signType
                },
                success: function(o) {
                    if (200 == o.data.code) {
                        if (o.data.data.result.length <= 0) return void t.setData({
                            loadingBoo: !0,
                            moreBoo: !1
                        });
                        if (3 == t.data.signType) {
                            for (var n = [], i = t.data.oppositeList, d = o.data.data.result.reverse(), s = [], r = [], l = 0; l < d.length; l++) r.push(d[l].msgId);
                            for (l = 0; l < i.length; l++) s.push(i[l].msgId);
                            for (l = 0; l < r.length; l++) -1 == s.indexOf(r[l]) && n.unshift(d[l]);
                            return n.length > 0 && n.forEach(function(o) {
                                o.from = o.msgFrom, o.ctime = L.toDate(o.createTime), "GROUP_IMAGE" == o.msgType ? (a = o.message.split("|"), 
                                o.msg = a[0], o.bigImg = a[1], e.unshift(a[1])) : o.msg = o.message;
                                for (var n = 0; n < t.data.contactList.listGroupHeaderUrl.length; n++) o.from != t.data.contactList.listGroupHeaderUrl[n].userId || (o.headerUrl = t.data.contactList.listGroupHeaderUrl[n].headerUrl);
                                i.unshift(o);
                            }), void t.setData({
                                currentResult: o.data.data.page.nextResult,
                                oppositeList: i,
                                loadingBoo: !0
                            });
                        }
                        for (n = [], i = t.data.oppositeList, d = o.data.data.result.reverse(), s = [], 
                        r = [], l = 0; l < d.length; l++) r.push(d[l].msgId);
                        for (l = 0; l < i.length; l++) s.push(i[l].msgId);
                        for (l = 0; l < r.length; l++) -1 == s.indexOf(r[l]) && n.unshift(d[l]);
                        n.length > 0 && n.forEach(function(t) {
                            t.from = t.msgFrom, t.ctime = L.toDate(t.createTime), "SINGLE_IMAGE" == t.msgType ? (a = t.message.split("|"), 
                            t.msg = a[0], t.bigImg = a[1], e.unshift(a[1])) : t.msg = t.message, i.unshift(t);
                        }), t.setData({
                            currentResult: o.data.data.page.nextResult,
                            oppositeList: i,
                            loadingBoo: !0
                        });
                    }
                }
            });
        }
    },
    carousel: function(t, a) {
        wx.request({
            url: L.globalData.carousel + a,
            success: function(e) {
                200 == e.data.code && (8 == a && (wx.getStorageSync("patientsMeImg") || "") != e.data.data[0].image && wx.setStorageSync("patientsMeImg", e.data.data[0].image), 
                7 == a && (wx.getStorageSync("MeImg") || "") != e.data.data[0].image && wx.setStorageSync("MeImg", e.data.data[0].image), 
                5 == a && (wx.getStorageSync("boyImg") || "") != e.data.data[0].image && wx.setStorageSync("boyImg", e.data.data[0].image), 
                6 == a && (wx.getStorageSync("girlImg") || "") != e.data.data[0].image && wx.setStorageSync("girlImg", e.data.data[0].image), 
                t.setData({
                    imageArr: e.data.data,
                    genderImg: e.data.data[0].image
                }));
            }
        });
    },
    chooseimageTwo: function(t, a, e) {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var o = 0; o < e.tempFilePaths.length; o++) if (a.push(e.tempFilePaths[o]), 
                9 == a.length) return void t.setData({
                    imgUrlList: a,
                    addFlag: !1
                });
                t.setData({
                    imgUrlList: a
                });
            }
        });
    },
    scCard: function(t) {
        return 0 != t.length ? !!f(t) || (wx.showToast({
            title: "非法身份证！",
            icon: "none",
            duration: 2e3
        }), !1) : (wx.showToast({
            title: "请输入证件号码",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    checkCard: f,
    isCardNo: h,
    checkProvince: w,
    checkBirthday: x,
    verifyBirthday: D,
    checkParity: I,
    changeFivteenToEighteen: v,
    getDoctor: function(t) {
        wx.request({
            url: L.globalData.patient + t.data.url + t.data.token + "/" + t.data.doctorId + "/0",
            success: function(a) {
                if (200 == a.data.code) {
                    if (a.data.data.team) {
                        if (a.data.data.team && !a.data.data.relation) return t.data.confirmFlag ? ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                            url: "patient/sign/doctorInfo/get/"
                        }), "team/sign/info/" == t.data.oldUrl && t.setData({
                            url: "team/sign/info/"
                        }), t.setData({
                            ReasonFlag: !1,
                            doctorId: t.data.oldDoctorId
                        }), void c(t)) : void wx.showModal({
                            title: "团队已忽略",
                            showCancel: !1,
                            confirmText: "我知道了",
                            confirmColor: "#3b4ca9",
                            success: function(t) {
                                t.confirm && wx.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                        if (a.data.data.team && 1 == a.data.data.relation.signState) return t.data.confirmFlag ? ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                            url: "patient/sign/doctorInfo/get/"
                        }), "team/sign/info/" == t.data.oldUrl && t.setData({
                            url: "team/sign/info/"
                        }), t.setData({
                            ReasonFlag: !1,
                            doctorId: t.data.oldDoctorId
                        }), void g(t)) : void wx.showModal({
                            title: "团队已同意，不能取消申请",
                            showCancel: !1,
                            confirmText: "我知道了",
                            confirmColor: "#3b4ca9",
                            success: function(t) {
                                t.confirm && wx.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                        if (t.data.confirmFlag) return "patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                            url: "patient/sign/doctorInfo/get/"
                        }), "team/sign/info/" == t.data.oldUrl && t.setData({
                            url: "team/sign/info/"
                        }), t.setData({
                            ReasonFlag: !1,
                            doctorId: t.data.oldDoctorId
                        }), void u(t);
                        wx.showModal({
                            title: "确定要取消申请吗？",
                            confirmColor: "#3b4ca9",
                            success: function(a) {
                                a.confirm ? u(t) : a.cancel;
                            }
                        });
                    }
                    if (a.data.data.team) return;
                    if (2 == a.data.data.doctor.jobType && !a.data.data.relation) return t.data.confirmFlag ? ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                        url: "patient/sign/doctorInfo/get/"
                    }), "team/sign/info/" == t.data.oldUrl && t.setData({
                        url: "team/sign/info/"
                    }), t.setData({
                        ReasonFlag: !1,
                        doctorId: t.data.oldDoctorId
                    }), void c(t)) : void wx.showModal({
                        title: "护士已忽略",
                        showCancel: !1,
                        confirmText: "我知道了",
                        confirmColor: "#3b4ca9",
                        success: function(t) {
                            t.confirm && wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }
                    });
                    if (1 == a.data.data.doctor.jobType && !a.data.data.relation) return t.data.confirmFlag ? ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                        url: "patient/sign/doctorInfo/get/"
                    }), "team/sign/info/" == t.data.oldUrl && t.setData({
                        url: "team/sign/info/"
                    }), t.setData({
                        ReasonFlag: !1,
                        doctorId: t.data.oldDoctorId
                    }), void c(t)) : void wx.showModal({
                        title: "医生已忽略",
                        showCancel: !1,
                        confirmText: "我知道了",
                        confirmColor: "#3b4ca9",
                        success: function(t) {
                            t.confirm && wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }
                    });
                    if (2 == a.data.data.doctor.jobType && 1 == a.data.data.relation.signState) return t.data.confirmFlag ? ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                        url: "patient/sign/doctorInfo/get/"
                    }), "team/sign/info/" == t.data.oldUrl && t.setData({
                        url: "team/sign/info/"
                    }), t.setData({
                        ReasonFlag: !1,
                        doctorId: t.data.oldDoctorId
                    }), void g(t)) : void wx.showModal({
                        title: "护士已同意，不能取消申请",
                        showCancel: !1,
                        confirmText: "我知道了",
                        confirmColor: "#3b4ca9",
                        success: function(t) {
                            t.confirm && wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }
                    });
                    if (1 == a.data.data.doctor.jobType && 1 == a.data.data.relation.signState) return t.data.confirmFlag ? ("patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                        url: "patient/sign/doctorInfo/get/"
                    }), "team/sign/info/" == t.data.oldUrl && t.setData({
                        url: "team/sign/info/"
                    }), t.setData({
                        ReasonFlag: !1,
                        doctorId: t.data.oldDoctorId
                    }), void g(t)) : void wx.showModal({
                        title: "医生已同意，不能取消申请",
                        showCancel: !1,
                        confirmText: "我知道了",
                        confirmColor: "#3b4ca9",
                        success: function(t) {
                            t.confirm && wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }
                    });
                    if (t.data.confirmFlag) return "patient/sign/doctorInfo/get/" == t.data.oldUrl && t.setData({
                        url: "patient/sign/doctorInfo/get/"
                    }), "team/sign/info/" == t.data.oldUrl && t.setData({
                        url: "team/sign/info/"
                    }), t.setData({
                        ReasonFlag: !1,
                        doctorId: t.data.oldDoctorId
                    }), void u(t);
                    wx.showModal({
                        title: "确定要取消申请吗？",
                        confirmColor: "#3b4ca9",
                        success: function(a) {
                            a.confirm ? u(t) : a.cancel;
                        }
                    });
                }
            },
            fail: function(t) {}
        });
    },
    getReason: function(t) {
        wx.request({
            url: L.globalData.hbpublic + "dic/comdicbase?code=370000",
            success: function(a) {
                200 == a.data.code && t.setData({
                    reasonList: a.data.data
                });
            }
        });
    },
    getBasicInfo: function(t) {
        wx.request({
            url: L.globalData.patient + "patient/sign/verifyBasicInfo/" + t.data.token,
            success: function(a) {
                console.log(a.data.data), a.data.data && t.setData({
                    personalArr: a.data.data
                });
            }
        });
    },
    clickRate: function(t) {
        wx.request({
            url: L.globalData.hbpublic + "ad/update",
            data: {
                id: t
            },
            success: function(t) {
                console.log(t);
            }
        });
    },
    endOfActivity: function(t, a, e, o) {
        o.data.gotoAdFlag || wx.request({
            url: L.globalData.hbpublic + "ad/get/isEndActivity",
            data: {
                id: t
            },
            success: function(n) {
                console.log(n), 200 == n.data.code && ("false" == n.data.data.isEnd ? wx.navigateTo({
                    url: a + "?id=" + t
                }) : wx.navigateTo({
                    url: e + "?id=" + t
                })), setTimeout(function() {
                    o.setData({
                        gotoAdFlag: !1,
                        activityCloseFlag: !0
                    });
                }, 1e3);
            }
        });
    },
    rotationMap: function(t, a, e) {
        wx.request({
            url: L.globalData.hbpublic + "ad/get",
            data: {
                appType: a,
                adType: e
            },
            success: function(a) {
                console.log(a), 200 == a.data.code && t.setData({
                    imageArr: a.data.data
                });
            }
        });
    },
    activityFun: function(t, a, e) {
        wx.request({
            url: L.globalData.hbpublic + "ad/get",
            data: {
                appType: a,
                adType: e
            },
            success: function(a) {
                console.log(a.data.data), a.data.data.length <= 0 ? t.setData({
                    activityCloseFlag: !0
                }) : t.setData({
                    activityList: a.data.data,
                    activityCloseFlag: !1
                });
            }
        });
    },
    unread: function(t) {
        wx.request({
            url: L.globalData.patient + "patient/askmed/nonRedTip",
            data: {
                token: wx.getStorageSync("logs")
            },
            success: function(a) {
                200 == a.data.code && (a.data.data.extOne_count > 0 && 1 != t.data.currentPage && t.getSaid(), 
                t.setData({
                    doctorText: a.data.data.doctorMedNotifyCount,
                    nurseTest: a.data.data.nurseMedNotifyCount,
                    teamText: a.data.data.teamMedNotifyCount,
                    saidText: a.data.data.extOne_count
                }), 1 == t.data.signType && t.setData({
                    unreadText: a.data.data.doctorMedNotifyCount
                }), 2 == t.data.signType && t.setData({
                    unreadText: a.data.data.nurseMedNotifyCount
                }), 3 == t.data.signType && t.setData({
                    unreadText: a.data.data.teamMedNotifyCount
                }), a.data.data.doctorMedNotifyCount > 100 && t.setData({
                    doctorText: "...",
                    unreadText: "..."
                }), a.data.data.nurseMedNotifyCount > 100 && t.setData({
                    nurseTest: "...",
                    unreadText: "..."
                }), a.data.data.teamMedNotifyCount > 100 && t.setData({
                    teamText: "...",
                    unreadText: "..."
                }));
            }
        });
    }
};

module.exports = y;