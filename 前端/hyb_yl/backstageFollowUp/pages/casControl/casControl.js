var t = getApp();

Page({
    data: {
        show: !1,
        hiddenmodalput: !1,
        hiddenmodalput1: !1,
        name: "",
        input: "",
        Forname: [],
        Background: [ "#91b5ff", "#8894ea", "#7ccafe", "#65e4d3", "#79e5c9", "#ff9a64", "#fea692" ],
        Background1: [ "#939afe", "#7489dc", "#6bb0ff", "#45ced8", "#6cdfb5", "#ff9574", "#fb8188" ],
        _num: 0,
        Wshow: !1,
        cdDisReason: "",
        nmDisReason: "",
        arr: []
    },
    onLoad: function(a) {
        var e = this, n = a.zid, o = wx.getStorageSync("openid");
        t.util.request({
            url: "entry/wxapp/docuser.orderguanfenzu",
            data: {
                zid: n,
                openid: o
            },
            success: function(t) {
                console.log(t), e.setData({
                    UnbankedRegister: t.data.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/docuser.orderguanzhu",
            data: {
                zid: n
            },
            success: function(t) {
                console.log(t), e.setData({
                    signCount: t.data.count.length,
                    userlist: t.data.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/docuser.addfenzu",
            data: {
                zid: n,
                op: "display"
            },
            success: function(t) {
                console.log(t), e.setData({
                    arr: t.data
                });
            }
        }), e.setData({
            zid: n
        });
    },
    menuClick: function(t) {
        console.log(t.target.dataset), this.setData({
            _num: t.target.dataset.num,
            nmDisReason: t.target.dataset.text,
            cdDisReason: t.target.dataset.uuid
        });
    },
    Wconfirm: function(a) {
        var e = this, n = a.currentTarget.dataset.q_id, o = e.data.jiechuinput;
        t.util.request({
            url: "entry/wxapp/docuser.addfenzu",
            data: {
                jieyutext: o,
                q_id: n,
                op: "jieyue"
            },
            success: function(a) {
                wx.showToast({
                    title: "已解约成功",
                    icon: "none",
                    duration: 1e3,
                    success: function() {
                        e.setData({
                            Wshow: !1
                        });
                        var a = e.data.zid;
                        t.util.request({
                            url: "entry/wxapp/docuser.orderguanfenzu",
                            data: {
                                zid: a
                            },
                            success: function(t) {
                                console.log(t), e.setData({
                                    UnbankedRegister: t.data.data
                                });
                            }
                        });
                    }
                });
            }
        }), console.log(n);
    },
    Wcall: function(t) {
        this.setData({
            Wshow: !1
        });
    },
    shu: function(t) {
        var a = t.currentTarget.dataset.huzopenid, e = t.currentTarget.dataset.change;
        console.log(e), 1 == e ? wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/xinzengyiliao/xinzengyiliao?huzopenid=" + a + "&fuwu_name=患者病程"
        }) : wx.showToast({
            title: "患者未开启档案授权",
            icon: "none",
            duration: 1e3
        });
    },
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    jiechuinput: function(t) {
        console.log(t.detail.value), this.setData({
            jiechuinput: t.detail.value
        });
    },
    grabble: function(a) {
        var e = this.data.input, n = this.data.zid;
        "" == e ? wx.showToast({
            title: "请输入患者昵称或者姓名全称",
            icon: "none",
            duration: 1e3
        }) : t.util.request({
            url: "entry/wxapp/docuser.allfenzuuser",
            data: {
                zid: n,
                kewords: e,
                op: "sousuo"
            },
            success: function(t) {
                console.log(t);
                var a = JSON.stringify(t.data);
                wx.navigateTo({
                    url: "/hyb_yl/backstageFollowUp/pages/casControlSeet/casControlSeet?sousuinfo=" + a,
                    success: function(t) {}
                });
            }
        });
    },
    Wmodalinput: function() {
        this.setData({
            hiddenmodalput: !0
        });
    },
    Winput: function(t) {
        console.log(t.detail.value), this.setData({
            name: t.detail.value
        });
    },
    Winputa: function(t) {
        console.log(t.detail.value), this.setData({
            namea: t.detail.value
        });
    },
    cancel: function() {
        this.setData({
            hiddenmodalput: !1
        });
    },
    confirm: function() {
        var a = this.data.zid;
        if (wx.showLoading({
            title: "加载中",
            mask: !0
        }), "" == this.data.name) wx.showToast({
            title: "请设置分组名",
            icon: "none",
            duration: 2e3
        }); else {
            var e = this.data.name;
            t.util.request({
                url: "entry/wxapp/docuser.addfenzu",
                data: {
                    zid: a,
                    fenzname: e,
                    op: "post"
                },
                success: function(t) {
                    console.log(t), wx.hideLoading();
                }
            });
        }
    },
    cancela: function() {
        this.setData({
            hiddenmodalput1: !1
        });
    },
    confirma: function(a) {
        console.log(a);
        var e = this.data.zid, n = a.currentTarget.dataset.fenzuid, o = this.data.namea;
        t.util.request({
            url: "entry/wxapp/docuser.addfenzu",
            data: {
                zid: e,
                fenzname: o,
                fenzuid: n,
                op: "update"
            },
            success: function(t) {
                console.log(t);
            }
        });
    },
    onShow: function(a) {
        var e = this, n = getCurrentPages(), o = n[n.length - 1], s = e.data.zid;
        if (t.util.request({
            url: "entry/wxapp/docuser.orderguanzhu",
            data: {
                zid: s
            },
            success: function(t) {
                console.log(t), e.setData({
                    signCount: t.data.count.length,
                    userlist: t.data.data
                });
            }
        }), 1 == o.data.type) {
            s = (e = this).data.zid;
            t.util.request({
                url: "entry/wxapp/docuser.Orderguanfenzu",
                data: {
                    zid: s
                },
                success: function(t) {
                    console.log(t), e.setData({
                        UnbankedRegister: t.data.data
                    });
                }
            });
        }
        t.util.request({
            url: "entry/wxapp/docuser.addfenzu",
            data: {
                zid: s,
                op: "display"
            },
            success: function(t) {
                console.log(t), e.setData({
                    arr: t.data
                });
            }
        });
    },
    Wmovement: function(t) {
        var a = this, e = t.currentTarget.dataset.u_id, n = a.data.zid, o = t.currentTarget.dataset.q_id, s = t.currentTarget.dataset.beizhu;
        wx.showActionSheet({
            itemList: [ "移动", "解除签约", "修改备注" ],
            success: function(t) {
                console.log(t), 0 == t.tapIndex && wx.navigateTo({
                    url: "/hyb_yl/backstageFollowUp/pages/casControlmovement/casControlmovement?u_id=" + e + "&zid=" + n + "&q_id=" + o
                }), 1 == t.tapIndex && a.setData({
                    Wshow: !0,
                    q_id: o
                }), 2 == t.tapIndex && wx.navigateTo({
                    url: "/hyb_yl/backstageServicess/pages/casControlname/casControlname?q_id=" + o + "&beizhu=" + s + "&u_id=" + e
                });
            }
        });
    },
    onClock: function(t) {},
    onClock2: function(a) {
        var e = wx.getStorageSync("log") || "", n = this;
        wx.request({
            url: t.globalData.dic + "doctor/sign/listInform/" + e + "/0",
            data: {},
            success: function(t) {
                console.log(t.data.data.list);
                for (var a = 0; a < t.data.data.list.length; a++) if (0 == t.data.data.list[a].signState) return void n.setData({
                    show: !0
                });
            }
        });
    },
    bindTouchStart: function(t) {
        this.startTime = t.timeStamp;
    },
    bindTouchEnd: function(t) {
        this.endTime = t.timeStamp;
    },
    ClickGrouping: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.fenzuid, e = this.data.zid;
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/casControlNav/casControlNav?fenzuid=" + a + "&zid=" + e
        });
    },
    longTap: function(a) {
        var e = this;
        a.currentTarget.dataset.fenzuid, a.currentTarget.dataset.name;
        e.setData({
            creatername: a.currentTarget.dataset.name,
            fenzuid: a.currentTarget.dataset.fenzuid
        }), wx.showActionSheet({
            itemList: [ "解散分组", "分组重命名" ],
            success: function(n) {
                var o = wx.getStorageSync("log") || "", s = a.currentTarget.dataset.groupid;
                e.setData({
                    groupid: a.currentTarget.dataset.groupid,
                    creater: a.currentTarget.dataset.creater
                }), 0 == n.tapIndex ? wx.request({
                    url: t.globalData.dic + "doctor/manage/group/delete/" + o + "/" + s,
                    success: function(t) {
                        console.log(t), e.onClock(), e.onClock2();
                    }
                }) : 1 == n.tapIndex && e.setData({
                    hiddenmodalput1: !0
                });
            }
        });
    }
});