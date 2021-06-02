var t = getApp();

Page({
    data: {
        isfollow: "关注",
        starIcon: 3,
        tw: "问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题",
        hd: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"
    },
    followtab: function(a) {
        var e = a.currentTarget.dataset.zid;
        t.util.request({
            url: "entry/wxapp/zhuanjia.changelove",
            data: {
                zid: e,
                openid: wx.getStorageSync("openid"),
                cerated_type: 0
            },
            success: function(t) {
                console.log(t);
            }
        }), "关注" == this.data.isfollow ? this.setData({
            isfollow: "已关注"
        }) : this.setData({
            isfollow: "关注"
        });
    },
    tiwen: function(t) {
        var a = t.currentTarget.dataset.zid;
        "" != a && "null" != a && null != a && wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + a + "&tit=图文问诊&ser_key=tuwenwenzhen&long=&id=&hid=&conets=&j_id=&typs="
        });
    },
    onLoad: function(t) {
        var a = t.id, e = t.typs, n = t.state;
        this.setData({
            id: a,
            typs: e,
            state: n
        }), this.getAnswer();
    },
    getAnswer: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/answer.answer_detail",
            data: {
                id: a.data.id,
                typs: a.data.typs,
                state: a.data.state,
                openid: wx.getStorageSync("openid")
            },
            success: function(t) {
                console.log(t), a.setData({
                    info: t.data
                }), wx.setNavigationBarTitle({
                    title: t.data.title
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