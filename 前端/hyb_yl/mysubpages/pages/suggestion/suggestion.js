Page({
    data: {
        title: "白细胞",
        values: "5.51  10^9/L",
        now: 300,
        lowStandard: 125,
        highStandard: 350,
        overflow: !1,
        conArr: [ {
            con: "引起胃胀的病因较为复杂，其中急性胃炎、胃 神经官能症、十二指肠溃疡、胃癌。",
            img: "../images/header_01.png",
            name: "张三丰",
            time: "刚刚",
            imgArr: [ {
                img: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/active_01.png",
                name: "药品名字"
            } ]
        } ],
        imgArr: []
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        });
        var o = this.data.highStandard, n = this.data.lowStandard, e = n - (o - n), r = o + (o - n) - e, i = (this.data.now - e) / r * 100;
        this.setData({
            left: i
        });
    },
    overClick: function() {
        this.setData({
            overflow: !this.data.overflow
        });
    },
    drugsRecommend: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/drugs_recommend/drugs_recommend"
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = wx.getStorageSync("imgArr");
        console.log(a), this.setData({
            imgArr: a
        });
    },
    valInput: function(a) {
        this.setData({
            value: a.detail.value
        });
    },
    sendClick: function() {
        var a = this.data.imgArr, t = this.data.value, o = this.data.conArr, n = {
            img: "../images/header_01.png",
            name: "张三丰",
            time: "刚刚"
        };
        n.con = t, n.imgArr = a, o.push(n), this.setData({
            conArr: o,
            value: ""
        });
    },
    onHide: function() {
        wx.removeStorageSync("imgArr");
    },
    onUnload: function() {
        wx.removeStorageSync("imgArr");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});