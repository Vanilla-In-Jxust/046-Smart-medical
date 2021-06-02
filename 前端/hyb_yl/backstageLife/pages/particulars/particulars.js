var t = getApp();

require("../../../../utils/wxParse.js");

Page({
    data: {
        img: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/collect1.png?sign=87faab1d6dccba04de4342c65cee1ba6&t=1572515643",
        text: "#3b4ca9;",
        color: "#3b4ca9",
        click: "click",
        like: "赞",
        click1: "click1",
        sharetext1: ""
    },
    click: function(e) {
        var a = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), wx.request({
            url: t.globalData.dic + "doctor/education/educationVote/" + a.data.token + "/" + a.data.eduid,
            success: function(t) {
                console.log(t.data.code), 200 == t.data.code && (a.setData({
                    text: "#ccc;",
                    color: "#ccc",
                    click: "",
                    like: "已赞",
                    praiseNum: a.data.praiseNum + 1
                }), wx.setStorageSync("praiseNum", 1)), wx.hideLoading();
            }
        });
    },
    click1: function(t) {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), wx.hideLoading(), wx.showToast({
            title: "收藏成功",
            icon: "success",
            duration: 2e3
        });
    },
    click2: function(e) {
        var a = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.currentTarget.dataset.id, wx.request({
            url: t.globalData.dic + "doctor/education/deleteCollect/" + a.data.eduid + "/" + a.data.token,
            success: function(t) {
                console.log(t), 200 == t.data.code && (a.setData({
                    img: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/collect1.png?sign=87faab1d6dccba04de4342c65cee1ba6&t=1572515643",
                    click1: "click1",
                    sharetext1: "收藏"
                }), wx.hideLoading(), wx.showToast({
                    title: "取消收藏",
                    icon: "none",
                    duration: 2e3
                }));
            }
        });
    },
    particulars: function(t) {
        this.setData({
            title: "",
            releaseDayTime: "",
            nmType: "",
            eduType: 2,
            contentFormat: "",
            sharetext1: 100,
            pageView: 10,
            praiseNum: 12,
            like: 9,
            imgUrl: "/assets/images/yanjing.png",
            collectAuthor: "老王",
            doctorTitle: "2018-10-23",
            nmHospital: "双手赞成",
            articleNum: 2,
            viewSumAll: 3,
            praiseSumAll: 4,
            shareSumAll: 5
        });
    },
    onLoad: function(t) {
        var e = t.h_id, a = t.h_type, i = wx.getStorageSync("eduid") || "", o = wx.getStorageSync("log") || "";
        wx.setStorageSync("pageView", 1), this.setData({
            eduid: i,
            token: o,
            h_id: e,
            h_type: a
        }), this.particulars(), this.gethuanjiaocount(e, a);
    },
    onShow: function() {},
    share: function(t) {
        console.log("分享"), console.log(t), wx.setStorageSync("currentSaid", this.data.arr), 
        wx.navigateTo({
            url: "/hyb_yl/backstageLife/pages/publishSaid/publishSaid?fromType=2&patientType=3"
        });
    },
    videoError: function() {
        wx.showToast({
            title: "播放失败，请稍后重试",
            icon: "none",
            duration: 2e3
        });
    },
    gethuanjiaocount: function(e, a) {
        var i = this;
        a = i.data.h_type;
        t.util.request({
            url: "entry/wxapp/huanjiao.detail",
            data: {
                h_id: e,
                h_type: a
            },
            success: function(t) {
                console.log(t), i.setData({
                    detail: t.data,
                    nodes: t.data.h_text
                });
            }
        });
    },
    taptxt: function(t) {
        console.log(t);
    }
});