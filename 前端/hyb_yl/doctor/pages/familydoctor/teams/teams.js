var t = getApp();

Page({
    data: {
        list: [ {
            title: "重性精神初级包"
        }, {
            title: "统一自定义初级包"
        }, {
            title: "统一冠心病初级包"
        }, {
            title: "统一严重精神障碍患者初级包"
        }, {
            title: "统一残疾人初级包"
        }, {
            title: "统一肺结核患者初级包"
        }, {
            title: "统一计划生育特殊家庭初级包"
        }, {
            title: "同意高血压初级包"
        }, {
            title: "统一糖尿病初级包"
        } ],
        hospitalName: "桥东中心第一团队"
    },
    extract: function() {
        var t = (t = this.data.hospitalName).substr(0, 3) + "...";
        this.setData({
            hospitalName: t
        }), console.log(this.data.hospitalName);
    },
    serverdetail: function(t) {
        var a = t.currentTarget.dataset.ff_id, e = t.currentTarget.dataset.title;
        wx.navigateTo({
            url: "/hyb_yl/doctor/pages/familydoctor/signing/signing?ff_id=" + a + "&title=" + e
        });
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("color"), n = a.zid;
        if (a.ordernum) {
            var o = a.ordernum;
            t.util.request({
                url: "entry/wxapp/docuser.jtdoc",
                data: {
                    ordernum: o
                },
                success: function(t) {
                    console.log(t), i.setData({
                        fuwbao: t.data
                    });
                }
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var i = this, s = a.t_id;
        t.util.request({
            url: "entry/wxapp/Office.fwlist",
            data: {
                t_id: s
            },
            success: function(t) {
                console.log(t);
                var a = t.data;
                i.setData({
                    crowd: a
                });
            }
        });
        var c = a.sid, u = a.key, d = a.name, r = a.teamname;
        i.setData({
            t_id: s,
            sid: c,
            key: u,
            name: d,
            bgc: e,
            teamname: r,
            q_id: a.q_id,
            ordernum: a.ordernum,
            zid: n
        }), i.extract(), wx.setNavigationBarTitle({
            title: "服务详情"
        }), i.getTeamoffice(), i.getMydangan();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getTeamoffice: function() {
        var a = this, e = a.data.t_id;
        t.util.request({
            url: "entry/wxapp/Office.qianyue",
            data: {
                t_id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    detail: t.data
                });
            }
        });
    },
    adduser: function(t) {
        wx.showModal({
            content: "只能选择您本人的健康档案",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi"
                });
            }
        });
    },
    getMydangan: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/user.ifself",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), a.setData({
                    names: t.data.names,
                    j_id: t.data.j_id
                });
            }
        });
    },
    pay: function() {
        var a = this, e = a.data.fw;
        t.util.request({
            url: "entry/wxapp/docuser.pay",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: wx.getStorageSync("openid"),
                z_tw_money: e.money
            },
            success: function(e) {
                console.log(e), wx.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(e) {
                        console.log(e), t.util.request({
                            url: "entry/wxapp/docuser.updateorder",
                            data: {
                                q_id: a.data.q_id
                            },
                            success: function(e) {
                                t.util.request({
                                    url: "entry/wxapp/docuser.jtdoc",
                                    data: {
                                        q_id: a.data.q_id
                                    },
                                    success: function(t) {
                                        console.log(t), a.setData({
                                            fw: t.data,
                                            fuwbao: t.data.fuwbao,
                                            q_id: a.data.q_id
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    quxiao: function() {
        var a = this.data.q_id;
        wx.showModal({
            content: "是否取消申请",
            success: function(e) {
                e.confirm && t.util.request({
                    url: "entry/wxapp/docuser.updatequxiao",
                    data: {
                        q_id: a
                    },
                    success: function(t) {
                        console.log(t), wx.showToast({
                            title: "取消成功",
                            success: function(t) {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        detail: 1
                                    });
                                }, 1e3);
                            }
                        });
                    }
                });
            }
        });
    },
    cxshenq: function() {
        this.data.sid;
        wx.showModal({
            content: "是否重新申请",
            success: function(t) {
                t.confirm && wx.redirectTo({
                    url: "/hyb_yl/doctor/pages/familydoctor/mydoctor/mydoctor?key=zhuanjiatuandui&name=家庭医生&sid="
                });
            }
        });
    }
});