var t = getApp();

Page({
    data: {
        capitalist: [ {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita1.png?sign=ecad7b40431de1bc88fe409bb66594d6&t=1593508756",
            text: "问诊明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita2.png?sign=5dd7789660fe6834ecd1abeb211fca04&t=1593508764",
            text: "年卡明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita3.png?sign=63f27d0f860fa5a56c4534887c0f18dd&t=1593508771",
            text: "挂号明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita4.png?sign=0f2fe56f8d0fe60214fa9fe628c34d40&t=1593508779",
            text: "解读明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita5.png?sign=7e743660dcbe972e5fd3281aa85d6cc5&t=1593508786",
            text: "手术明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita6.png?sign=97e6d72a225d15849978c47c1da69b21&t=1593508796",
            text: "签约明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita7.png?sign=5ab8ba2ad2b6e94f49094cef4671502c&t=1593508816",
            text: "开药明细"
        }, {
            icon: "https://7969-yiliao-kvepb-1302281264.tcb.qcloud.la/capita8.png?sign=059471e2b90f2c130fe9b6d57286cf99&t=1593508823",
            text: "入驻明细"
        } ]
    },
    capitainfor: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.title, i = t.currentTarget.dataset.keyword;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/capitadetail/capitadetail?title=" + a + "&keyword=" + i + "&zid=" + this.data.zid
        });
    },
    onLoad: function(a) {
        var i = this;
        i.setData({
            zid: a.zid
        }), t.util.request({
            url: "entry/wxapp/zhuanjia.money_center",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                i.setData({
                    info: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/zhuanjia.server",
            data: {
                zid: a.zid
            },
            success: function(t) {
                i.setData({
                    capitalist: t.data
                });
            }
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