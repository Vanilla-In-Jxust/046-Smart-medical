var t = getApp();

Page({
    data: {
        questiontabs: 0,
        shanchanglist: [ "全部(550)", "气胸(16)", "肺癌(18)", "胸腔积液(5)", "肋骨骨折(4)", "心包积液(2)", "多汗症(1)" ]
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var e = t.zid;
        this.setData({
            zid: e
        }), this.getList();
    },
    getList: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/zhuanjia.getdocinfo",
            data: {
                zid: a.data.zid,
                openid: wx.getStorageSync("openid")
            },
            success: function(e) {
                console.log(e), wx.setNavigationBarTitle({
                    title: e.data.z_name
                });
                var n = e.data.authority[0].bq;
                console.log(n), t.util.request({
                    url: "entry/wxapp/zhuanjia.getgkquestionall",
                    data: {
                        zid: a.data.zid,
                        biaoqian: n
                    },
                    success: function(t) {
                        console.log(t), a.setData({
                            listqs: t.data
                        });
                    }
                }), a.setData({
                    authority: e.data.authority
                });
            }
        });
    },
    questionclick: function(a) {
        var e = this, n = a.currentTarget.dataset.biaoqian, o = e.data.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.getgkquestionall",
            data: {
                zid: o,
                biaoqian: n
            },
            success: function(t) {
                console.log(t), e.setData({
                    listqs: t.data
                });
            }
        }), this.setData({
            questiontabs: a.currentTarget.dataset.dex
        });
    },
    answer_detail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.title, n = t.currentTarget.dataset.typs, o = t.currentTarget.dataset.state;
        wx.navigateTo({
            url: "/hyb_yl/twosubpages/pages/publicProblemsInfor/publicProblemsInfor?id=" + a + "&title=" + e + "&typs=" + n + "&state=" + o
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