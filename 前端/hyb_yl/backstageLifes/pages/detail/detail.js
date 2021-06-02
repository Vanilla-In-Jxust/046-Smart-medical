var t = getApp();

Page({
    data: {
        tabArr: {
            curHdIndex: 2,
            curBdIndex: 0
        },
        jia: "+",
        jian: "",
        currentResult: 0
    },
    particulars: function(t) {
        console.log(t.currentTarget.dataset.id), wx.setStorageSync("particularsid", t.currentTarget.dataset.id), 
        wx.navigateTo({
            url: "/hyb_yl/backstageServicess/pages/particulars/particulars"
        });
    },
    tab: function(t) {
        var a = t.currentTarget.id, e = {};
        e.curHdIndex = a, e.curBdIndex = a, this.setData({
            tabArr: e,
            currentResult: 0,
            onFlag: !1
        }), this.onclick();
    },
    onLoad: function(t) {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    height: .98 * t.windowHeight
                });
            }
        });
        var e = t.id;
        0 == e && wx.setNavigationBarTitle({
            title: "处方明细"
        }), 1 == e && wx.setNavigationBarTitle({
            title: "挂号明细"
        }), 2 == e && wx.setNavigationBarTitle({
            title: "在线咨询明细"
        }), 3 == e && wx.setNavigationBarTitle({
            title: "图文咨询明细"
        });
    },
    onShow: function() {
        this.onclick();
    },
    onclick: function(t) {
        var a = {
            flowDesc: "小红",
            money: 1,
            createTime: "2018-10-23",
            id: 1,
            orderType: 1
        }, e = [ a, {
            flowDesc: "小明",
            money: -1e4,
            createTime: "2018-10-23",
            id: 1,
            orderType: 1
        }, {
            flowDesc: "小花",
            money: 100,
            createTime: "2018-10-23",
            id: 1,
            orderType: 1
        }, a ];
        this.setData({
            arr: e
        });
    },
    lower: function() {
        if (!this.data.moreFlag && !this.data.closureFlag) {
            this.setData({
                closureFlag: !0
            });
            var a, e = this, r = wx.getStorageSync("log") || "", i = (e.data.jia, e.data.currentResult), n = e.data.arr;
            wx.request({
                url: t.globalData.dic + "doctor/personal/moneyBagDetail",
                data: {
                    token: r,
                    currentResult: i,
                    type: e.data.tabArr.curHdIndex
                },
                success: function(t) {
                    if (200 == t.data.code) {
                        e.setData({
                            currentResult: t.data.data.page.nextResult
                        });
                        var r = t.data.data.details;
                        if (a = n.concat(r), null == r) return e.setData({
                            moreFlag: !0,
                            closureFlag: !1
                        }), !1;
                        wx.showLoading({
                            title: "加载中",
                            icon: "loading"
                        }), e.setData({
                            arr: a,
                            closureFlag: !1
                        }), setTimeout(function() {
                            wx.hideLoading();
                        }, 1500);
                    }
                }
            });
        }
    }
});