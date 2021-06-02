var t = getApp();

Page({
    data: {
        nesARR: [],
        active: !0,
        showCalendar: !1,
        year: 0,
        month: 0,
        isToday: 0,
        isTodayWeek: !1,
        todayIndex: 0,
        time: "",
        selectVal: "",
        typeindex: !1,
        proIndex: 0,
        proshow: !1,
        cityname: "",
        money: 0,
        count: 0,
        total: 0,
        arr: [],
        addPackageList: [],
        listcity: [],
        tcProject: [],
        addproject: []
    },
    calenderOpen: function() {
        this.setData({
            showCalendar: !this.data.showCalendar
        });
    },
    closeMask: function() {
        this.setData({
            showCalendar: !this.data.showCalendar
        });
    },
    select: function(a) {
        console.log(a);
        var e = this;
        t.util.request({
            url: "entry/wxapp/tijian.timemumenone",
            data: {
                chooseDate: a.detail
            },
            success: function(t) {
                console.log(t), e.setData({
                    typeindex: !0,
                    week: t.data.week,
                    listcity: t.data.data
                });
            }
        }), e.setData({
            selectVal: a.detail,
            showCalendar: !this.data.showCalendar
        });
        var i = this.data.selectVal, n = i.substring(5, i.length);
        e.setData({
            time: n
        }), console.log(n);
    },
    goToCheckItemsDetail: function() {
        var t = JSON.stringify(this.data.detail), a = JSON.stringify(this.data.tcProject), e = this.data.tid;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/tijian/mealCont/mealCont?detail=" + t + "&tcProject=" + a + "&tid=" + e
        });
    },
    showInfo: function(t) {
        var a = t.currentTarget.dataset.itemName, e = t.currentTarget.dataset.itemIntro;
        console.log(t), wx.showModal({
            title: a,
            content: e,
            showCancel: !1,
            confirmText: "确定",
            confirmColor: "#fd965b",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        });
    },
    getCalendarData: function(t) {},
    handleTapView: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.addPackageList;
        e[a].checked = !e[a].checked;
        var i = this.data.total, n = this.data.count, o = [];
        console.log(e), console.log(i), console.log(n);
        for (var s = 0; s < e.length; s++) e[s].checked && o.push(e[s]);
        for (s = 0; s < o.length; s++) i += o[s].price;
        this.setData({
            zmoney: i,
            addproject: o
        });
    },
    onLoad: function(a) {
        for (var e = this, i = wx.getStorageSync("color"), n = JSON.parse(a.bm), o = e.data.nesARR, s = 0; s < n.length; s++) o.push(n[s].city);
        e.setData({
            nesARR: o
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), console.log(a);
        var d = JSON.parse(a.project);
        console.log(d);
        e = this;
        var c = new Date(), r = JSON.parse(decodeURIComponent(a.detail)), l = c.getFullYear(), u = c.getMonth() + 1, g = (a.count, 
        a.money), h = a.title, m = wx.getStorageSync("city");
        e.setData({
            year: l,
            month: u,
            today: c.getDate(),
            isToday: "" + l + u + c.getDate(),
            title: h,
            money: parseFloat(g),
            cityname: m,
            detail: r,
            bm: n,
            cityid: n[0].city.parentid,
            tcProject: d
        }), console.log(e.data.today);
        var y = a.tid;
        t.util.request({
            url: "entry/wxapp/tijian.detail",
            data: {
                id: y
            },
            success: function(t) {
                console.log(t), e.setData({
                    detail: t.data,
                    count: t.data.t_msg.length,
                    addPackageList: t.data.t_msg_fujia
                });
            }
        }), e.setData({
            tid: y
        }), t.util.request({
            url: "entry/wxapp/tijian.timelist",
            data: {
                q: 1
            },
            success: function(a) {
                console.log(a);
                for (var i = 0, o = (c = a.data)[0].date, s = 0; s < c.length; s++) {
                    var d = (r = c[s].date).substring(5, r.length);
                    c[s].date = d, 0 == [ s ] ? (c[s].active = !0, c[s].num = 0) : (c[s].active = !1, 
                    c[s].num = 0);
                }
                e.setData({
                    list_wedate: c,
                    time_in: o
                });
                i = 0;
                var c = e.data.list_wedate;
                for (s = 1; s < c.length; s++) i += 100, c[s].num = i;
                e.setData({
                    list_wedate: c
                });
                var r = c[0].date, l = (d = c[0].time) + "-" + r;
                console.log(l), t.util.request({
                    url: "entry/wxapp/tijian.timemumen",
                    data: {
                        chooseDate: l,
                        cityid: n[0].city.parentid
                    },
                    success: function(t) {
                        console.log(t), e.setData({
                            listcity: t.data.message,
                            chooseDate: l
                        });
                    }
                });
            }
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), e.setData({
                    url: t.data
                });
            }
        }), console.log(e.data.listcity);
    },
    onReady: function() {},
    onShow: function() {
        var a = this, e = getCurrentPages(), i = e[e.length - 1];
        if (i.data.cityname) {
            console.log(i.data.id);
            var n = a.data.index;
            t.util.request({
                url: "entry/wxapp/tijian.timelist",
                data: {
                    q: n
                },
                success: function(e) {
                    console.log(e);
                    for (var n = 0, o = (r = e.data)[0].date, s = 0; s < r.length; s++) {
                        var d = r[s].date, c = d.substring(5, d.length);
                        r[s].date = c, 0 == [ s ] ? (r[s].active = !0, r[s].num = 0) : (r[s].active = !1, 
                        r[s].num = 0);
                    }
                    a.setData({
                        list_wedate: r,
                        time_in: o
                    });
                    n = 0;
                    var r = a.data.list_wedate;
                    for (s = 1; s < r.length; s++) n += 100, r[s].num = n;
                    a.setData({
                        list_wedate: r
                    }), t.util.request({
                        url: "entry/wxapp/tijian.timemumen",
                        data: {
                            chooseDate: a.data.chooseDate,
                            cityid: i.data.id
                        },
                        success: function(t) {
                            console.log(t), a.setData({
                                listcity: t.data.message,
                                chooseDate: a.data.chooseDate,
                                cityid: i.data.id
                            });
                        }
                    });
                }
            });
        }
        i.data.names && (console.log(i.data), this.setData({
            names: i.data.names,
            tel: i.data.tel,
            numcard: i.data.numcard,
            sex: i.data.sex,
            j_id: i.data.j_id
        }));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    changeDate: function(a) {
        console.log(a);
        for (var e = this, i = a.currentTarget.dataset.index, n = e.data.list_wedate, o = a.currentTarget.dataset.chooseDate, s = (a.currentTarget.dataset.cityid, 
        0); s < n.length; s++) n[s].active = [ s ] == i;
        e.setData({
            list_wedate: n
        }), t.util.request({
            url: "entry/wxapp/tijian.timemumen",
            data: {
                chooseDate: o,
                cityid: a.currentTarget.dataset.cityid
            },
            success: function(t) {
                console.log(t), e.setData({
                    listcity: t.data.message,
                    time_in: o,
                    index: i
                });
            }
        });
    },
    changeDateweek: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/tijian.timelist",
            data: {
                q: 1
            },
            success: function(e) {
                for (var i = 0, n = e.data, o = 0; o < n.length; o++) {
                    var s = (d = n[o].date).substring(5, d.length);
                    n[o].date = s, 0 == [ o ] ? (n[o].active = !0, n[o].num = 0) : (n[o].active = !1, 
                    n[o].num = 0);
                }
                a.setData({
                    list_wedate: n
                });
                for (i = 0, n = a.data.list_wedate, o = 1; o < n.length; o++) i += 100, n[o].num = i;
                a.setData({
                    list_wedate: n
                });
                var d = n[0].date, c = (s = n[0].time) + "-" + d, r = a.data.cityid;
                console.log(r), t.util.request({
                    url: "entry/wxapp/tijian.timemumen",
                    data: {
                        chooseDate: c,
                        cityid: r
                    },
                    success: function(t) {
                        console.log(t), a.setData({
                            listcity: t.data.message,
                            typeindex: !1
                        });
                    }
                });
            }
        });
    },
    chooseCityTab: function() {
        var t = JSON.stringify(this.data.nesARR);
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/tijian/choose-city/choose-city?nesARR=" + t
        });
    },
    goAddon: function(t) {
        this.data.money, this.data.chooseDate;
        var a = this.data.time_in, e = t.currentTarget.dataset.agentname, i = t.currentTarget.dataset.hid;
        this.setData({
            proIndex: 1,
            proshow: !this.data.proshow,
            total: this.data.money,
            zmoney: this.data.money,
            agentname: e,
            time_in: a,
            bm_id: i
        });
    },
    goPre: function() {
        for (var t = this.data.addPackageList, a = this.data.addproject, e = 0; e < t.length; e++) t[e].checked = !1;
        var i = this.data.count;
        i = parseInt(i) - parseInt(a.length), a = [], this.setData({
            proIndex: 0,
            addPackageList: t,
            count: i,
            addproject: a,
            arr: []
        });
    },
    goNext: function() {
        var t = this.data.arr, a = this.data.tcProject, e = (this.data.addPackageList, this.data.zmoney, 
        this.data.addproject);
        console.log(e);
        var i = {
            itemName: this.data.title,
            itemprice: parseFloat(this.data.money),
            tcProject: a
        };
        console.log(i), t.push(i), console.log(t), this.setData({
            proIndex: 2,
            arr: t
        });
    },
    chooseContact: function() {
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?tijianper=1"
        });
    },
    nowpay: function(a) {
        var e = this, i = e.data.arr[0].tcProject, n = this.data.addproject;
        console.log(n);
        var o = parseFloat(a.currentTarget.dataset.money), s = e.data.bm_id, d = e.data.hid, c = (t.siteInfo.uniacid, 
        e.data.tid);
        console.log(c);
        var r = this.data.names, l = this.data.tel, u = this.data.numcard, g = this.data.sex;
        r || g || l || u ? wx.showModal({
            content: "是否支付",
            success: function(a) {
                a.confirm ? t.util.request({
                    url: "entry/wxapp/tijian.addtijian",
                    data: {
                        content: i,
                        money: o,
                        hid: d,
                        bm_id: s,
                        ifpay: 0,
                        yy_time: e.data.time_in,
                        tid: c,
                        openid: wx.getStorageSync("openid"),
                        addproject: n,
                        j_id: e.data.j_id
                    },
                    success: function(a) {
                        console.log(a);
                        var i = a.data.ordernums;
                        t.util.request({
                            url: "entry/wxapp/tijian.paytijianorder",
                            header: {
                                "Content-Type": "application/xml"
                            },
                            method: "GET",
                            data: {
                                openid: wx.getStorageSync("openid"),
                                z_tw_money: o,
                                orders: i
                            },
                            success: function(a) {
                                console.log(a), wx.requestPayment({
                                    timeStamp: a.data.timeStamp,
                                    nonceStr: a.data.nonceStr,
                                    package: a.data.package,
                                    signType: a.data.signType,
                                    paySign: a.data.paySign,
                                    success: function(a) {
                                        t.util.request({
                                            url: "entry/wxapp/tijian.tijmsgmobel",
                                            data: {
                                                yy_time: e.data.time_in,
                                                tid: c,
                                                openid: wx.getStorageSync("openid"),
                                                j_id: e.data.j_id,
                                                bm_id: s
                                            },
                                            success: function(t) {
                                                console.log(t);
                                            }
                                        }), t.util.request({
                                            url: "entry/wxapp/tijian.usermsgmobel",
                                            data: {
                                                yy_time: e.data.time_in,
                                                tid: c,
                                                openid: wx.getStorageSync("openid"),
                                                j_id: e.data.j_id,
                                                bm_id: s
                                            },
                                            success: function(t) {
                                                console.log(t);
                                            }
                                        }), t.util.request({
                                            url: "entry/wxapp/tijian.msgtzadmin",
                                            data: {
                                                yy_time: e.data.time_in,
                                                tid: c,
                                                openid: wx.getStorageSync("openid"),
                                                j_id: e.data.j_id,
                                                bm_id: s
                                            },
                                            success: function(t) {
                                                console.log(t);
                                            }
                                        }), wx.showToast({
                                            title: "支付成功",
                                            icon: "none",
                                            duration: 1500,
                                            success: function(t) {
                                                wx.redirectTo({
                                                    url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
                                                });
                                            }
                                        });
                                    },
                                    fail: function() {
                                        wx.redirectTo({
                                            url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
                                        });
                                    }
                                });
                            }
                        });
                    }
                }) : t.util.request({
                    url: "entry/wxapp/tijian.addtijian",
                    data: {
                        content: i,
                        money: o,
                        hid: d,
                        bm_id: s,
                        ifpay: 0,
                        yy_time: e.data.time_in,
                        tid: c,
                        openid: wx.getStorageSync("openid"),
                        addproject: n,
                        j_id: e.data.j_id
                    },
                    success: function(a) {
                        console.log(a), t.util.request({
                            url: "entry/wxapp/tijian.tijmsgmobel",
                            data: {
                                yy_time: e.data.time_in,
                                tid: c,
                                openid: wx.getStorageSync("openid"),
                                j_id: e.data.j_id,
                                bm_id: s
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        }), t.util.request({
                            url: "entry/wxapp/tijian.usermsgmobel",
                            data: {
                                yy_time: e.data.time_in,
                                tid: c,
                                openid: wx.getStorageSync("openid"),
                                j_id: e.data.j_id,
                                bm_id: s
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        }), t.util.request({
                            url: "entry/wxapp/tijian.msgtzadmin",
                            data: {
                                yy_time: e.data.time_in,
                                tid: c,
                                openid: wx.getStorageSync("openid"),
                                j_id: e.data.j_id,
                                bm_id: s
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        }), wx.redirectTo({
                            url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
                        });
                    }
                });
            }
        }) : wx.showToast({
            title: "请选择体检人",
            icon: "none"
        });
    }
});