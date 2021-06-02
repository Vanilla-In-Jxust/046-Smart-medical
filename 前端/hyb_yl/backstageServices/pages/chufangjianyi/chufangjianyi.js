var t = getApp();

Page({
    data: {
        xufang: "",
        counttime: "",
        copyright: [ {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/renzheng.png?sign=99d87d2d65c67c848a10aaf43bafb66e&t=1583825248",
            text: "药监认证"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/people.png?sign=717fc4019448bfc2a03ac538022f7ed8&t=1583825298",
            text: "药师审核"
        }, {
            imgs: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/yinsi.png?sign=f45888dbb9b06874e8d079f99d6018f5&t=1583825342",
            text: "隐私包装"
        } ]
    },
    loogchufang: function(a) {
        console.log(a);
        var n = this.data.id, o = a.currentTarget.dataset.cfimg;
        console.log(o), t.util.request({
            url: "entry/wxapp/user.gongzhangimg",
            data: {
                id: n,
                cfimg: o
            },
            success: function(t) {
                console.log(t), wx.previewImage({
                    urls: [ t.data ]
                });
            }
        });
    },
    atpay: function(t) {
        var a = this.data.id;
        "1" == this.data.xufang ? wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/sure_Details/sure_Details?id=" + a + "&xufang=1"
        }) : wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/sure_Details/sure_Details?id=" + a + "&xufang=0"
        });
    },
    countDown: function(t) {
        var a, n = this;
        a = setInterval(function() {
            var a = 0, o = 0, e = 0;
            t > 0 && (a = Math.floor(t / 3600), o = Math.floor(t / 60) - 60 * a, e = Math.floor(t) - 60 * a * 60 - 60 * o), 
            a <= 9 && (a = "0" + a), o <= 9 && (o = "0" + o), e <= 9 && (e = "0" + e), n.setData({
                counttime: a + ":" + o + ":" + e
            }), t--;
        }, 1e3), t <= 0 && clearInterval(a);
    },
    onLoad: function(a) {
        var n = this, o = a.id, e = a.orderStatus;
        n.setData({
            orderStatus: e,
            id: o
        }), t.util.request({
            url: "entry/wxapp/user.cfdetail",
            data: {
                id: o
            },
            success: function(t) {
                console.log(t), n.setData({
                    conets: t.data.conets,
                    goodlist: t.data.sid,
                    cfimg: t.data.cfimg
                });
            }
        });
        var i = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: i
        }), a.xufang && this.setData({
            xufang: a.xufang
        }), n.setData({
            bgc: i
        }), this.countDown(55555);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});