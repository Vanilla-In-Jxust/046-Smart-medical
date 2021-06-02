var e = getApp();

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
    click: function(t) {
        var a = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), wx.request({
            url: e.globalData.dic + "doctor/education/educationVote/" + a.data.token + "/" + a.data.eduid,
            success: function(e) {
                console.log(e.data.code), 200 == e.data.code && (a.setData({
                    text: "#ccc;",
                    color: "#ccc",
                    click: "",
                    like: "已赞",
                    praiseNum: a.data.praiseNum + 1
                }), wx.setStorageSync("praiseNum", 1)), wx.hideLoading();
            }
        });
    },
    particulars: function(e) {
        this.setData({
            title: "宣传片",
            releaseDayTime: "2018-10-23",
            nmType: "小花",
            eduType: 2,
            contentFormat: "药到病除",
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
    onLoad: function(e) {
        var t = wx.getStorageSync("eduid") || "", a = wx.getStorageSync("log") || "";
        wx.setStorageSync("pageView", 1), this.setData({
            eduid: t,
            token: a
        }), this.particulars();
    },
    onShow: function() {},
    videoError: function() {
        wx.showToast({
            title: "播放失败，请稍后重试",
            icon: "none",
            duration: 2e3
        });
    }
});