var a = getApp();

Page({
    data: {
        loadingBoo: !0,
        moreBoo: !0,
        prenumber: 15,
        page: 0
    },
    onLoad: function(a) {
        this.data.token = wx.getStorageSync("log");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    serachBtn: function(a) {
        console.log(a), this.setData({
            page: 0,
            noFlag: !1,
            loadingBoo: !0,
            moreBoo: !0
        }), 0 != a.detail.value.replace(/(^\s*)|(\s*$)/g, "").length && (this.setData({
            title: a.detail.value,
            loadingBoo: !0,
            moreBoo: !0
        }), this.searchFun());
    },
    searchFun: function() {
        var t = this;
        wx.request({
            url: a.globalData.dic + "doctor/education/educationSearch/" + t.data.page + "/" + t.data.prenumber + "/" + t.data.token,
            data: {
                title: t.data.title
            },
            success: function(a) {
                if (console.log(a), 200 == a.data.code) {
                    if (0 == t.data.page) return void (null != a.data.data && a.data.data.length > 0 ? (t.data.page++, 
                    t.setData({
                        list: a.data.data,
                        page: t.data.page,
                        noFlag: !1,
                        loadingBoo: !0
                    })) : t.setData({
                        noFlag: !0,
                        list: a.data.data,
                        loadingBoo: !0
                    }));
                    t.data.page > 0 && (console.log(2222), null != a.data.data && a.data.data.length > 0 ? (a.data.data.forEach(function(a) {
                        t.data.list.push(a);
                    }), t.data.page++, t.setData({
                        list: t.data.list,
                        loadingBoo: !0,
                        page: t.data.page
                    })) : (console.log(2222), t.setData({
                        moreBoo: !1,
                        loadingBoo: !0
                    })));
                }
            }
        });
    },
    getMore: function() {
        this.data.moreBoo && this.data.loadingBoo && (this.setData({
            loadingBoo: !1
        }), this.searchFun());
    },
    getSaid: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.index;
        wx.setStorageSync("currentSaid", this.data.list[t]), wx.navigateBack({
            delta: 2
        });
    }
});