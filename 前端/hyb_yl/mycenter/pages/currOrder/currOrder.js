var t = getApp();

Page({
    data: {
        tab: [ {
            name: "全部"
        }, {
            name: "待付款"
        }, {
            name: "已付款"
        } ],
        current: 0,
        nav: {
            nav_list: [ {
                img: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/dingdan.png",
                con: "全部"
            }, {
                img: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/ding_wei.png",
                con: "未支付"
            }, {
                img: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/ding_yi.png",
                con: "已支付"
            } ],
            currentTab: 0
        },
        dingdanArr: [ {
            time: "2018-05-06 12:35:00",
            state: "0",
            img: "../../../images/active_01.jpg",
            title: "上班族支付体检基本套餐",
            shop: "山西省疾病预防体检中心",
            num: "x3",
            pay: "￥1293"
        }, {
            time: "2018-05-06 12:35:00",
            state: "1",
            img: "../../../images/active_01.jpg",
            title: "上班族支付体检基本套餐",
            shop: "山西省疾病预防体检中心",
            num: "x3",
            pay: "￥1293"
        }, {
            time: "2018-05-06 12:35:00",
            state: "2",
            img: "../../../images/active_01.jpg",
            title: "上班族支付体检基本套餐",
            shop: "山西省疾病预防体检中心",
            num: "x3",
            pay: "￥1293"
        } ],
        fuorder: [ {}, {}, {}, {} ]
    },
    chooseTab: function(t) {
        var n = t.currentTarget.dataset.i;
        this.setData({
            current: n
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getMyfuwuorder: function() {
        var n = this;
        t.util.request({
            url: "entry/wxapp/user.orderlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), n.setData({
                    fuorder: t.data
                });
            }
        });
    }
});