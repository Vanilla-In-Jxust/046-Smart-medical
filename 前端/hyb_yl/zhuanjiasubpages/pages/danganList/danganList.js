Page({
    data: {
        openid: "",
        yonghuList: [ {
            img: "https://696d-image-ac66k-1302520890.tcb.qcloud.la/35ddb86ef392aa8eb6cce74eded144f.png?sign=50dfb958793d1a6ba566ad1613545ee3&t=1594982472",
            name: "基础档案",
            url: "/hyb_yl/userCommunicate/pages/preindex/sickinfo/index"
        }, {
            img: "https://696d-image-ac66k-1302520890.tcb.qcloud.la/52353a8bfbd4e7df409ea0bc188034f.png?sign=954723ee46d1adbe16a5c294e49095b4&t=1594982441",
            name: "电子病历",
            url: "/hyb_yl/mysubpages/pages/dianzibingli/dianzibingli"
        }, {
            img: "https://696d-image-ac66k-1302520890.tcb.qcloud.la/31f0233f4b78ab7f8c653f5546d07d8.png?sign=b05bddeb66a76cc2667989153fd43d42&t=1594982531",
            name: "报告查看",
            url: "/hyb_yl/mysubpages/pages/tijainbaogaoList/tijainbaogaoList"
        }, {
            img: "https://696d-image-ac66k-1302520890.tcb.qcloud.la/6bcf43d3b77608ac58f7b44ae2d2054.png?sign=479f6a175c3be8c50696f5af0560c431&t=1594982811",
            name: "其他报告",
            url: "/hyb_yl/zhuanjiasubpages/pages/qitaList/qitaList"
        } ]
    },
    goback: function(a) {
        var e = a.currentTarget.dataset.url, i = a.currentTarget.dataset.nametitle, t = this.data.names;
        1 == this.data.doc ? "基础档案" == i ? wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/jichudangan/jichudangan?openid=" + this.data.openid + "&zid=" + wx.getStorageSync("zid") + "&names=" + t
        }) : wx.navigateTo({
            url: e + "?openid=" + this.data.openid + "&zid=" + wx.getStorageSync("zid") + "&names=" + t
        }) : wx.navigateTo({
            url: e + "?openid=" + this.data.openid + "&zid=" + wx.getStorageSync("zid") + "&names=" + t + "&j_id=" + this.data.j_id + "&doc=" + this.data.doc + "&open=1"
        });
    },
    onLoad: function(a) {
        var e = a.openid, i = a.titlme;
        wx.setNavigationBarTitle({
            title: i + "的档案"
        }), this.setData({
            openid: e,
            names: i,
            type: a.type,
            j_id: a.j_id,
            doc: a.doc
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