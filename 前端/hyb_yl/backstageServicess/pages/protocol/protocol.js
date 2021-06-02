var t = getApp();

Page({
    data: {
        currentResult: 0,
        loadingBoo: !0,
        moreBoo: !0
    },
    onLoad: function(a) {
        var o = this;
        wx.request({
            url: t.globalData.dicc + "question/list",
            data: {
                currentResult: o.data.currentResult,
                type: 5
            },
            success: function(t) {
                console.log(t), 200 == t.data.code && (null != t.data.data.questions && t.data.data.questions.length > 0 && t.data.data.questions.forEach(function(t) {
                    t.contentFormat = JSON.parse(t.contentFormat);
                }), o.setData({
                    list: t.data.data.questions,
                    currentResult: t.data.data.page.nextResult
                }));
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getMore: function() {
        var a = this;
        this.data.moreBoo && this.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), wx.request({
            url: t.globalData.dicc + "question/list",
            data: {
                currentResult: a.data.currentResult,
                type: 5
            },
            success: function(t) {
                console.log(t), 200 == t.data.code && (null != t.data.data.questions && t.data.data.questions.length > 0 ? (t.data.data.questions.forEach(function(t) {
                    t.contentFormat = JSON.parse(t.contentFormat), a.data.list.push(t);
                }), a.setData({
                    list: a.data.list,
                    currentResult: t.data.data.page.nextResult,
                    loadingBoo: !0
                })) : a.setData({
                    moreBoo: !1,
                    loadingBoo: !0
                }));
            },
            complete: function() {
                a.setData({
                    loadingBoo: !0
                });
            }
        }));
    }
});