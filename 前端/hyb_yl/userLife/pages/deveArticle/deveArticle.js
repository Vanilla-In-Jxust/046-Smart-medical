Page({
    data: {
        articel: {
            title: "婴幼儿如何预防流感",
            doctorArr: [ {
                img: "",
                name: "李医生",
                zhiwei: "主治医生",
                keshi: "儿科"
            } ],
            hospital: "xxx医院",
            time: "2020-02-05",
            content: "印有二几点飞机迪斯科解放卡是解放螺丝扣地方就是卡艰苦地方艰苦撒旦JFK撒JFK是积分卡肯定就罚款多少JFK尽快扩大解放氨基酸开发看的肌肤"
        },
        article: {}
    },
    onLoad: function(o) {
        console.log(o);
        var n = JSON.parse(o.item), t = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: t
        }), this.setData({
            article: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});