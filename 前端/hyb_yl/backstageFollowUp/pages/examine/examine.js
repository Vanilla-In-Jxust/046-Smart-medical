var a = getApp();

Page({
    data: {
        dicCode: [],
        dicContent: [ "心脏", "胃", "大脑", "眼睛" ],
        reports: [ {
            detailFlag: 1,
            dateEm: 1,
            dateArr: [ 1, 2 ],
            currentIndex: 1,
            moreTextFlag: !0,
            reportLabs: [ {
                nmIndexLis: "心跳",
                nmResult: "偏高",
                valueLis: "50",
                casArray: [ 1 ],
                descRrs: 30,
                flagChart: 2
            }, {
                nmIndexLis: "心的大小",
                nmResult: "偏高",
                valueLis: 10,
                casArray: [ 1 ],
                descRrs: 20,
                flagChart: 1
            }, {
                nmIndexLis: "血液流速",
                nmResult: "偏高",
                valueLis: 100,
                casArray: [ 1 ],
                descRrs: 50,
                flagChart: 1
            } ],
            cdIndexLis: 1,
            nmIndexLis: 1,
            images: [ {
                imageUrl: "/assets/images/Wmedicine.png"
            }, {
                imageUrl: "/assets/images/Wmedicine.png"
            }, {
                imageUrl: "/assets/images/Wmedicine.png"
            } ],
            moreImgFlag: !0,
            unfoldFlagOne: "收起",
            unfoldUrklOne: "/assets/images/Wmedicine.png",
            unfoldFlagTwo: "展开",
            unfoldUrklTwo: "/assets/images/Wmedicine.png"
        }, {
            detailFlag: 1,
            dateEm: 1,
            dateArr: [ 1, 2 ],
            currentIndex: 1,
            moreTextFlag: !0,
            reportLabs: [ {
                nmIndexLis: "心跳",
                nmResult: "偏低",
                valueLis: "50",
                casArray: [ 1 ],
                descRrs: 30,
                flagChart: 2
            }, {
                nmIndexLis: "心的大小",
                nmResult: "偏低",
                valueLis: 10,
                casArray: [ 1 ],
                descRrs: 20,
                flagChart: 1
            }, {
                nmIndexLis: "血液流速",
                nmResult: "偏低",
                valueLis: 100,
                casArray: [ 1 ],
                descRrs: 50,
                flagChart: 1
            } ],
            cdIndexLis: 1,
            nmIndexLis: 1,
            images: [ {
                imageUrl: "/assets/images/Wmedicine.png"
            }, {
                imageUrl: "/assets/images/Wmedicine.png"
            }, {
                imageUrl: "/assets/images/Wmedicine.png"
            } ],
            moreImgFlag: !0,
            unfoldFlagOne: "收起",
            unfoldUrklOne: "/assets/images/Wmedicine.png",
            unfoldFlagTwo: "展开",
            unfoldUrklTwo: "/assets/images/Wmedicine.png"
        } ],
        name: "心脏",
        loadingBoo: !0,
        moreBoo: !0,
        noneFlag: !1
    },
    previewImage: function(a) {
        console.log(a), !1;
        wx.previewImage({
            current: a.target.dataset.imageurl,
            urls: this.data.reports[a.currentTarget.dataset.detailindex].imgArr
        });
    },
    getDetail: function(a) {
        console.log(a), this.data.reports[a.target.dataset.detailindex].detailFlag = !0, 
        this.setData({
            reports: this.data.reports
        });
    },
    getData: function(a) {
        console.log(a), this.data.reports[a.currentTarget.dataset.detailindex].currentIndex = a.currentTarget.dataset.index, 
        this.setData({
            reports: this.data.reports
        });
    },
    unfoldTwo: function(a) {
        "展开" == this.data.reports[a.currentTarget.dataset.detailindex].unfoldFlagTwo ? (this.data.reports[a.currentTarget.dataset.detailindex].unfoldFlagTwo = "收起", 
        this.data.reports[a.currentTarget.dataset.detailindex].unfoldUrklTwo = "/assets/images/now02.png") : (this.data.reports[a.currentTarget.dataset.detailindex].unfoldFlagTwo = "展开", 
        this.data.reports[a.currentTarget.dataset.detailindex].unfoldUrklTwo = "/assets/images/now.png"), 
        this.data.reports[a.currentTarget.dataset.detailindex].images.forEach(function(a) {
            a.moreImgFlag = !a.moreImgFlag;
        }), this.setData({
            reports: this.data.reports
        });
    },
    unfold: function(a) {
        console.log(a), "展开" == this.data.reports[a.currentTarget.dataset.detailindex].unfoldFlagOne ? (this.data.reports[a.currentTarget.dataset.detailindex].unfoldFlagOne = "收起", 
        this.data.reports[a.currentTarget.dataset.detailindex].unfoldUrklOne = "/assets/images/now02.png") : (this.data.reports[a.currentTarget.dataset.detailindex].unfoldFlagOne = "展开", 
        this.data.reports[a.currentTarget.dataset.detailindex].unfoldUrklOne = "/assets/images/now.png"), 
        this.data.reports[a.currentTarget.dataset.detailindex].reportLabs.forEach(function(a) {
            a.moreTextFlag = !a.moreTextFlag;
        }), this.setData({
            reports: this.data.reports
        });
    },
    tabFun: function(a) {
        var e = a.target.dataset.id, t = a.target.dataset.name;
        this.setData({
            curHdIndex: e,
            name: t,
            loadingBoo: !0,
            moreBoo: !0,
            noneFlag: !1,
            into_id: a.target.id
        }), this.getTestMsg();
    },
    onLoad: function(a) {},
    onShow: function(a) {},
    more: function(e) {
        var t = this, r = t.data.token, s = wx.getStorageSync("patientId") || "";
        console.log(s + "_" + r);
        r = s + "_" + r + t.data.teamId;
        var n = wx.getStorageSync("flag") || "";
        t.data.moreBoo && t.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), wx.request({
            url: a.globalData.patient + "patient/report/list/" + r + "/" + t.data.curHdIndex + "/" + t.data.currentResult + "/" + n,
            success: function(e) {
                if (console.log(e), 200 == e.data.code) {
                    if (null == e.data.data.reports) return void t.setData({
                        moreBoo: !1,
                        loadingBoo: !0
                    });
                    var r = t.data.reports;
                    e.data.data.reports.forEach(function(e) {
                        e.dateEm = a.getDate(e.dateEm), e.dateArr = e.dateEm.split("-"), e.currentIndex = 1, 
                        e.unfoldFlagOne = "展开", e.unfoldUrklOne = "/assets/images/now.png", e.unfoldFlagTwo = "展开", 
                        e.unfoldUrklTwo = "/assets/images/now.png", e.detailFlag = !1;
                        var t = [];
                        e.images.length > 0 && e.images.forEach(function(a) {
                            t.push(a.imageUrl);
                        }), e.imgArr = t, e.reportLabs.forEach(function(a) {
                            a.moreTextFlag = !1, a.moreImgFlag = !1, "text" == a.valType && (a.casArray = a.valEnum.split("|"), 
                            a.valueLis = parseFloat(a.valueLis));
                        }), r.push(e);
                    }), t.setData({
                        loadingBoo: !0,
                        reports: r,
                        currentResult: e.data.data.page.nextResult
                    });
                }
            }
        }));
    },
    getTestMsg: function() {
        var e = this, t = e.data.token, r = wx.getStorageSync("patientId") || "";
        console.log(r + "_" + t);
        t = r + "_" + t + e.data.teamId;
        var s = wx.getStorageSync("flag") || "", n = [];
        wx.request({
            url: a.globalData.patient + "patient/report/list/" + t + "/" + e.data.curHdIndex + "/0/" + s,
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.code) {
                    if (console.log(t.data), null == (n = t.data.data.reports)) return void e.setData({
                        noneFlag: !0,
                        reports: []
                    });
                    n.forEach(function(e, t) {
                        e.detailFlag = t <= 2, e.dateEm = a.getDate(e.dateEm), e.dateArr = e.dateEm.split("-"), 
                        e.currentIndex = 1, e.unfoldFlagOne = "展开", e.unfoldUrklOne = "/assets/images/now.png", 
                        e.unfoldFlagTwo = "展开", e.unfoldUrklTwo = "/assets/images/now.png";
                        var r = [];
                        e.images.length > 0 && e.images.forEach(function(a) {
                            r.push(a.imageUrl);
                        }), e.imgArr = r, e.reportLabs.forEach(function(a) {
                            a.moreTextFlag = !1, a.moreImgFlag = !1, "text" == a.valType && (a.casArray = a.valEnum.split("|"), 
                            a.valueLis = parseFloat(a.valueLis));
                        });
                    }), e.setData({
                        reports: n,
                        currentResult: t.data.data.page.nextResult
                    });
                }
            }
        });
    }
});