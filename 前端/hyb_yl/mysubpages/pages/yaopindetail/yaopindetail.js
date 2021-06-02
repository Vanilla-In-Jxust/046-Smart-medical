var n = getApp();

Page({
    data: {
        drupname: "",
        zhengzhuang: [ {
            picimg: "../../../images/pitch.png",
            texts: "妊娠 X"
        }, {
            picimg: "../../../images/pa.png",
            texts: "哺乳 L5"
        } ]
    },
    onLoad: function(a) {
        var t = this, e = a.sid;
        wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        }), wx.setNavigationBarTitle({
            title: a.name,
            sid: e
        }), n.util.request({
            url: "entry/wxapp/goods.detail",
            data: {
                sid: e
            },
            success: function(n) {
                console.log(n), t.setData({
                    detail: n.data.item,
                    constent: n.data.contents
                });
            }
        }), this.setData({
            drupname: a.name
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    opendrug: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yuanchengkaifang/yuanchengkaifang?tit=去开药&ser_key=yuanchengkaifang&ifzy=0&key_words=yuanchengkaifang"
        });
    }
});