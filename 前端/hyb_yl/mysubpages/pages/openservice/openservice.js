var t = getApp();

Page({
    data: {
        twcheck: !1,
        timeLeft: "",
        zxcheck: !1,
        timezx: "",
        service: [ {
            icon: "../../../images/service1.png",
            title: "图文问诊",
            price: 2,
            tip: "通过文字、图片向医生提问，含2次追op问的机会适合常见的病及健康类问题咨询。",
            twcheck: !1,
            isopen: !0,
            time: ""
        }, {
            icon: "../../../images/service2.png",
            title: "在线开方",
            price: 2,
            tip: "通过在线的方式向医生提供相关诊断，医生根据诊断开出相关的处方。",
            twcheck: !0,
            isopen: !0,
            time: "28天5小时"
        }, {
            icon: "../../../images/service3.png",
            title: "报告解读",
            price: 2,
            tip: "在线向医生发送体检报告，医生查看报告后在线解读，可向医生提出相关问题。",
            twcheck: !1,
            isopen: !1,
            time: ""
        }, {
            icon: "../../../images/service4.png",
            title: "视频问诊",
            price: 2,
            tip: "可以和医生通过视频的方式进行面对面的询问不用出门即可进行诊断。",
            twcheck: !1,
            isopen: !1,
            time: ""
        }, {
            icon: "../../../images/service5.png",
            title: "电话问诊",
            price: 2,
            tip: "通过打电话的方式向医生描述自己的病况，医生根据病况实时解答，但只适合初步诊断。",
            twcheck: !1,
            isopen: !1,
            time: ""
        }, {
            icon: "../../../images/service6.png",
            title: "实时会话",
            price: 2,
            tip: "与医生进行实时会话，以视频问诊和电话问诊类似，可以随叫随到，随时在线。",
            twcheck: !1,
            isopen: !1,
            time: ""
        }, {
            icon: "../../../images/service7.png",
            title: "手术安排",
            price: 2,
            tip: "在线预约手术，进行手术的相关安排，省时省力，方便快捷。",
            twcheck: !1,
            isopen: !1,
            time: ""
        }, {
            icon: "../../../images/service8.png",
            title: "其他服务",
            price: 2,
            tip: "除了以上服务以外的其他相关服务。",
            twcheck: !1,
            isopen: !1,
            time: ""
        } ],
        tabList: [ "已开通", "未开通", "全部" ],
        tabIndex: 0
    },
    tabChose: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            tabIndex: e,
            type: e
        }), this.getServelist(this.data.zid, e);
    },
    opening: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.state, i = t.currentTarget.dataset.ids, a = t.currentTarget.dataset.title;
        return wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/serviceset/serviceset?state=" + e + "&ids=" + i + "&title=" + a
        }), !1;
    },
    open: function() {
        return console.log("开通"), !1;
    },
    twchange: function(t) {
        var e = t.detail.value;
        console.log(e);
        t.currentTarget.dataset.index;
        this.setData({
            ischeck: e
        });
    },
    onLoad: function(t) {
        var e = t.zid;
        this.setData({
            zid: e
        });
        var i = wx.getStorageSync("color");
        this.setData({
            bg_color: i
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), this.getServelist(e, "");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getServelist: function(e, i) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.servertime",
            data: {
                zid: e,
                type: i
            },
            success: function(t) {
                console.log(t), a.setData({
                    server: t.data
                });
            }
        });
    },
    twchanges: function(e) {
        var i = this, a = e.currentTarget.dataset.ids, n = e.currentTarget.dataset.stateback, s = e.currentTarget.dataset.money, c = e.currentTarget.dataset.gq;
        0 == n ? wx.showModal({
            title: "提示",
            content: "确认开启该服务吗？",
            success: function(e) {
                e.confirm && (c && "0" != s && "0.00" != s && "" != s ? t.util.request({
                    url: "entry/wxapp/zhuanjia.server_pay",
                    header: {
                        "Content-Type": "application/xml"
                    },
                    method: "GET",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        money: s,
                        ids: a,
                        typs: "team"
                    },
                    success: function(e) {
                        wx.requestPayment({
                            timeStamp: e.data.timeStamp,
                            nonceStr: e.data.nonceStr,
                            package: e.data.package,
                            signType: e.data.signType,
                            paySign: e.data.paySign,
                            success: function(e) {
                                t.util.request({
                                    url: "entry/wxapp/zhuanjia.update_switch",
                                    data: {
                                        ids: a,
                                        stateback: 1
                                    },
                                    success: function(t) {
                                        console.log(t), i.getServelist(i.data.zid, i.data.type);
                                    }
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    }
                }) : t.util.request({
                    url: "entry/wxapp/zhuanjia.update_switch",
                    data: {
                        ids: a,
                        stateback: 1
                    },
                    success: function(t) {
                        console.log(t), i.getServelist(i.data.zid, i.data.type);
                    }
                }));
            }
        }) : wx.showModal({
            title: "提示",
            content: "确认关闭该服务吗？",
            success: function(e) {
                e.confirm && t.util.request({
                    url: "entry/wxapp/zhuanjia.update_switch",
                    data: {
                        ids: a,
                        stateback: 0
                    },
                    success: function(t) {
                        console.log(t), i.getServelist(i.data.zid, i.data.type);
                    }
                });
            }
        }), console.log(a);
    }
});