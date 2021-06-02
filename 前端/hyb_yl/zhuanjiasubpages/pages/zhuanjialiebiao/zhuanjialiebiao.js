var a = getApp();

Page({
    data: {
        search: {
            searchValue: "",
            showClearBtn: !1
        },
        searchResult: [],
        zhuanjia: [ {
            src: "/yiliao/images/jiang.png"
        } ],
        hidden: !0,
        rotateIndex: "",
        animationData: {},
        statusImage: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/jiazai.png",
        statusClass: "load"
    },
    fenlei: function() {
        this.setData({
            hidden: !this.data.hidden
        });
    },
    onPullDownRefresh: function() {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), wx.showNavigationBarLoading();
        var e = this;
        a.util.request({
            url: "entry/wxapp/Zhuanjia",
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    zhuanjia: t
                });
            },
            fail: function(a) {
                console.log(a);
            }
        }), setTimeout(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, 1500);
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        });
        var n = this, o = new Date().getTime();
        t.id ? a.util.request({
            url: "entry/wxapp/Kszhuanjia",
            data: {
                id: t.id
            },
            success: function(a) {
                console.log(a);
                var t = a.data.data;
                n.setData({
                    zhuanjia: t,
                    time: new Date().getTime() - o
                }), n.anima();
            },
            fail: function(a) {
                console.log(a);
            }
        }) : a.util.request({
            url: "entry/wxapp/Zhuanjia",
            success: function(a) {
                console.log(a);
                var t = a.data.data;
                n.setData({
                    zhuanjia: t,
                    time: new Date().getTime() - o
                }), n.anima();
            },
            fail: function(a) {
                console.log(a);
            }
        }), a.util.request({
            url: "entry/wxapp/Base",
            success: function(a) {
                n.setData({
                    bq_thumb: a.data.data.bq_thumb,
                    bq_name: a.data.data.bq_name
                });
            },
            fail: function(a) {
                console.log(a);
            }
        }), n.setData({
            bgc: e
        });
    },
    bindFocus: function() {
        wx.navigateTo({
            url: "./serch/serch"
        });
    },
    showClick: function(t) {
        var e = this, n = t.currentTarget.dataset.zid;
        a.util.request({
            url: "entry/wxapp/Zhuanjiaxiangqing",
            data: {
                id: n
            },
            success: function(a) {
                console.log(a), e.setData({
                    xiangqing: a.data.data
                });
            },
            fail: function(a) {}
        }), console.log(t), this.setData({
            overflow: !0
        });
    },
    hideClick: function() {
        this.setData({
            overflow: !1
        });
    },
    payClick: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.url, n = t.currentTarget.dataset.z_name, o = wx.getStorageSync("openid"), i = t.currentTarget.dataset.money;
        a.util.request({
            url: "entry/wxapp/Pay",
            header: {
                "Content-Type": "application/xml"
            },
            method: "GET",
            data: {
                openid: o,
                z_tw_money: i
            },
            success: function(t) {
                console.log(t), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(t) {
                        a.util.request({
                            url: "entry/wxapp/Joninmoney",
                            data: {
                                use_openid: o,
                                leixing: "电话",
                                name: n,
                                pay: i
                            },
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(a) {
                                console.log(a);
                            },
                            fail: function(a) {
                                console.log(a);
                            }
                        }), wx.navigateTo({
                            url: "/hyb_yl/zhuanjiasubpages/pages/webview/webview?src=" + e
                        });
                    }
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    onReady: function() {},
    anima: function() {
        var a = wx.createAnimation({
            duration: 200,
            timingFunction: "ease"
        });
        this.animation = a, this.imageRotators();
    },
    imageRotators: function() {
        this.timeInterval = setInterval(function() {
            this.data.rotateIndex = this.data.rotateIndex + 1, this.animation.rotateZ(360 * this.data.rotateIndex).step(), 
            this.setData({
                animationData: this.animation.export()
            });
        }.bind(this), 100), this.request();
    },
    stopRotators: function() {
        this.timeInterval > 0 && (clearInterval(this.timeInterval), this.timeInterval = 0);
    },
    request: function(a) {
        var t = this;
        console.log(t.data.time), setTimeout(function() {
            t.stopRotators(), console.log("请求到了数据或者操作完成,停止旋转");
            t.setData({
                statusImage: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/erddd.png",
                statusClass: "success"
            });
        }, 100);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    searchActiveChangeinput: function(a) {
        var t = a.detail.value;
        this.setData({
            "search.showClearBtn": "" != t,
            "search.searchValue": t
        });
    },
    searchActiveChangeclear: function(a) {
        this.setData({
            "search.showClearBtn": !1,
            "search.searchValue": ""
        });
    },
    searchSubmit: function() {
        var a = this.data.search.searchValue;
        if (a) {
            var t = this, e = getApp();
            wx.showLoading({
                title: "搜索中"
            }), setTimeout(function() {
                wx.hideLoading();
            }, 2e3), e.util.request({
                url: "entry/wxapp/Activity",
                data: {
                    keywords: a
                },
                method: "GET",
                success: function(a) {
                    console.log(a.data.length), a.data.length || wx.showToast({
                        title: "暂无此医生"
                    });
                    for (var n = a.data, o = n.length, i = 0; i < o; i++) n[i].team_avator = e.globalData.STATIC_SOURCE + n[i].team_avator;
                    t.setData({
                        searchResult: n,
                        "search.showClearBtn": !1
                    });
                },
                fail: function() {},
                complete: function() {
                    wx.hideToast();
                }
            });
        }
    }
});