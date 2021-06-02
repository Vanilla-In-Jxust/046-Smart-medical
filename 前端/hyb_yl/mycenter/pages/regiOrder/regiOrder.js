var e = getApp();

Page({
    data: {
        tab: [ {
            name: "待支付"
        }, {
            name: "待接诊"
        }, {
            name: "已到诊"
        }, {
            name: "已结束"
        }, {
            name: "已取消"
        } ],
        current: 0,
        index: 0,
        unscramble: [ {
            ordernums: "1151454545",
            code: "待支付",
            t_thumb: "../../images/tjbj.png",
            t_name: "名字",
            money: 12,
            time: "2020-10-25 15:56",
            ifpay: "0"
        }, {
            ordernums: "1151454545",
            code: "待支付",
            t_thumb: "../../images/tjbj.png",
            t_name: "名字",
            money: 12,
            time: "2020-10-25 15:56",
            ifpay: "1"
        }, {
            ordernums: "1151454545",
            code: "待支付",
            t_thumb: "../../images/tjbj.png",
            t_name: "名字",
            money: 12,
            time: "2020-10-25 15:56",
            ifpay: "2"
        }, {
            ordernums: "1151454545",
            code: "待支付",
            t_thumb: "../../images/tjbj.png",
            t_name: "名字",
            money: 12,
            time: "2020-10-25 15:56",
            ifpay: "1"
        } ],
        wzf: [],
        ySuccess: [],
        tijians: [],
        concals: []
    },
    chooseTab: function(e) {
        var t = e.currentTarget.dataset.i;
        this.setData({
            current: t
        });
        var n = this.data.unscramble, a = [], o = [], i = [], r = [];
        if (1 == t) {
            for (var s = 0; s < n.length; s++) 0 == n[s].ifpay && a.push(n[s]);
            this.setData({
                wzf: a
            });
        } else if (2 == t) {
            for (var c = 0; c < n.length; c++) 1 == n[c].ifpay && o.push(n[c]);
            this.setData({
                ySuccess: o
            });
        } else if (3 == t) {
            for (var u = 0; u < n.length; u++) 2 == n[u].ifpay && i.push(n[u]);
            this.setData({
                tijians: i
            });
        } else if (4 == t) {
            for (var f = 0; f < n.length; f++) 2 == n[f].ifpay && r.push(n[f]);
            this.setData({
                concals: r
            });
        }
    },
    lookdetail: function(e) {
        console.log(e), wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/regiOrderinfor/regiOrderinfor"
        });
    },
    tixing: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/diagReport/diagReport"
        });
    },
    zhifu: function() {
        wx.requestPayment({
            timeStamp: "",
            nonceStr: "",
            package: "",
            signType: "",
            paySign: ""
        });
    },
    onLoad: function(e) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getMytjianorder: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/tijian.orderlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                console.log(e), t.setData({
                    unscramble: e.data
                });
            }
        });
    }
});