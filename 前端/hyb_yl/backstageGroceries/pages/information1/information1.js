var t = getApp();

Page({
    data: {
        indentBoo: !0,
        TypeName: "无",
        height: 34,
        userAddrDto: {},
        billContent: "",
        integral: 0,
        isIntegralToMoney: 0,
        reduceMoney: 0,
        switchFlag: !1,
        carData: {
            userAddrDto: {
                addrId: 1,
                receiverMobileMask: "1234567944",
                area: "山西省 太原市 小店区",
                receiverAddress: "星河湾"
            },
            postFee: 2e3,
            integraldVo: 4
        },
        cartInfos: [ {
            id: 1,
            imageUrl: "/assets/images/796.png",
            name: "维生素",
            price: 3e4,
            num: 2
        } ],
        postFee: 100
    },
    onShareAppMessage: function(e) {
        return t.globalData.share;
    },
    onLoad: function() {
        wx.getStorageSync("logs");
    },
    onShow: function() {
        this.getTotalPrice();
        var t = wx.getStorageSync("carList") || [];
        console.log(t);
    },
    onHide: function() {},
    onUnload: function() {
        try {
            wx.removeStorageSync("addrList");
        } catch (t) {}
        try {
            wx.removeStorageSync("carData");
        } catch (t) {}
        try {
            wx.removeStorageSync("billTitle");
        } catch (t) {}
        try {
            wx.removeStorageSync("billContent");
        } catch (t) {}
        try {
            wx.removeStorageSync("billContent3");
        } catch (t) {}
        try {
            wx.removeStorageSync("billType");
        } catch (t) {}
        try {
            wx.removeStorageSync("checked");
        } catch (t) {}
    },
    changeAddr: function() {
        this.setData({
            boo: !1
        }), wx.navigateTo({
            url: "/hyb_yl/shopsub/pages/address/address",
            success: function() {}
        });
    },
    visitorsBook: function(t) {
        this.setData({
            visitors: t.detail.value
        });
    },
    clickUrl: function(t) {
        wx.redirectTo({
            url: "/hyb_yl/shopsub/pages/oss/oss"
        });
    },
    addCount: function(e) {
        wx.showLoading({
            mask: !0
        }), this.setData({
            switchFlag: !1,
            reduceMoney: 0,
            isIntegralToMoney: 0
        });
        var a = this, o = e.currentTarget.dataset.index, n = e.target.id, r = this.data.cartInfos, i = r[o].num;
        wx.request({
            url: t.globalData.httpOne + "mall/cart/decreOrIncre",
            data: {
                itemId: n,
                itemCount: 1,
                index: o,
                type: 1,
                cartSessionId: a.data.cartSessionId,
                orderId: a.data.carData.orderId,
                orderType: a.data.carData.orderType
            },
            success: function(t) {
                200 == t.data.code && (wx.hideLoading(), i += 1, r[o].num = i, a.setData({
                    cartInfos: r
                }), a.getTotalPrice());
            },
            fail: function() {
                wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    minusCount: function(e) {
        wx.showLoading({
            mask: !0
        });
        var a = this, o = e.currentTarget.dataset.index, n = e.target.id, r = this.data.cartInfos, i = r[o].num;
        if (i <= 1) return wx.showToast({
            title: "至少一件商品",
            icon: "none",
            duration: 1e3
        }), !1;
        this.setData({
            switchFlag: !1,
            reduceMoney: 0,
            isIntegralToMoney: 0
        }), wx.request({
            url: t.globalData.httpOne + "mall/cart/decreOrIncre",
            data: {
                itemId: n,
                itemCount: 1,
                index: o,
                type: 2,
                cartSessionId: a.data.cartSessionId,
                orderId: a.data.carData.orderId,
                orderType: a.data.carData.orderType
            },
            success: function(t) {
                200 == t.data.code && (wx.hideLoading(), i -= 1, r[o].num = i, a.setData({
                    cartInfos: r
                }), a.getTotalPrice());
            },
            fail: function() {
                wx.showToast({
                    title: "系统繁忙，请稍后重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    getTotalPrice: function() {
        for (var t = this.data.cartInfos, e = 0, a = 0, o = 0, n = 0; n < t.length; n++) {
            if (e = t[n].num * t[n].price, o += t[n].num * t[n].price, t[n].moneyOffList) for (var r = 0; r < t[n].moneyOffList.length; r++) t[n].num * t[n].price / 100 >= t[n].moneyOffList[r].promCondition / 100 ? (e = t[n].num * t[n].price - t[n].moneyOffList[r].promValue, 
            t[n].promCondition = t[n].moneyOffList[r].promCondition / 100, t[n].promValue = t[n].moneyOffList[r].promValue / 100) : t[n].num * t[n].price / 100 < t[n].promCondition && t[n].promCondition == t[n].moneyOffList[0].promCondition / 100 && (t[n].promCondition = t[n].moneyOffList[0].promCondition / 100, 
            t[n].promValue = t[n].moneyOffList[0].promValue / 100);
            a += e;
        }
        this.setData({
            cartInfos: t,
            totalPrice: a,
            inTotal: o
        });
    },
    bindlinechange: function(t) {
        var e = 2 * t.detail.height;
        this.setData({
            height: e
        });
    },
    getPromotion: function(e, a, o, n, r) {
        wx.request({
            url: t.globalData.httpOne + "mall/prom/itemPromInfo",
            data: {
                itemId: e
            },
            success: function(t) {
                if (200 == t.data.code) {
                    var e = t.data.data, r = [], i = {};
                    if (e && e.forEach(function(t) {
                        "240000" == t.cdActiveType && r.push(t);
                    }), r.length > 0) {
                        for (var s = 0; s < r.length; s++) s + 1 < r.length && r[s].priorityLevel < r[s + 1].priorityLevel && (i = r[s], 
                        r[s] = r[s + 1], r[s + 1] = i);
                        a[o].moneyOffList = r, a[o].promCondition = r[0].promCondition / 100, a[o].promValue = r[0].promValue / 100;
                    }
                }
                n.setData({
                    cartInfos: a
                }), n.getTotalPrice();
            }
        });
    },
    switchChange: function(e) {
        var a = this;
        if (console.log(e), e.detail.value) {
            var o = 0;
            this.data.cartInfos.forEach(function(t) {
                o += t.useIntegral * t.num;
            }), wx.request({
                url: t.globalData.httpOne + "mall/order/get/integralToMoney",
                data: {
                    token: a.data.token,
                    totalMoney: a.data.totalPrice,
                    totalIntegral: o
                },
                success: function(t) {
                    console.log(t), 200 == t.data.code && a.setData({
                        integral: t.data.data.integral,
                        reduceMoney: t.data.data.money,
                        isIntegralToMoney: 1,
                        switchFlag: !0
                    });
                }
            });
        } else this.setData({
            reduceMoney: 0,
            isIntegralToMoney: 0
        });
    }
});