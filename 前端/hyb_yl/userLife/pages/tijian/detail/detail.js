var t = getApp();

Page({
    data: {
        scrollTop: 0,
        introNavObj: {
            active: "0",
            fixed: !1
        },
        showOrgList: !1,
        selectCityIndex: 0,
        nesARR: []
    },
    onLoad: function(t) {
        var n = t.tid;
        this.setData({
            id: n
        });
        var e = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: e
        }), this.gettijiandetail(), this.calculate(), this.getcityjigou();
    },
    calculate: function() {
        var t = this;
        wx.createSelectorQuery().select("#intro0").boundingClientRect().select("#intro1").boundingClientRect().select("#intro2").boundingClientRect().select("#intro-nav").boundingClientRect().exec(function(n) {
            if (n[3]) {
                var e = n[3].height;
                t.setData({
                    "introNavObj.intro0": n[0].top - e,
                    "introNavObj.intro1": n[1].top - e,
                    "introNavObj.intro2": n[2].top - e,
                    "introNavObj.introNav": n[3].top
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
    gettijiandetail: function() {
        var n = this, e = n.data.id;
        t.util.request({
            url: "entry/wxapp/tijian.detail",
            data: {
                id: e
            },
            success: function(t) {
                console.log(t), n.setData({
                    detail: t.data
                });
            }
        });
    },
    showTip: function(t) {
        var n = t.currentTarget.dataset, e = n.clinicmeaning, a = n.itemName;
        e && wx.showModal({
            title: a,
            content: e,
            showCancel: !1,
            confirmColor: "#FD9238",
            confirmText: "我知道了"
        });
    },
    goScrollPosition: function(t) {
        var n = t.currentTarget.dataset.index;
        console.log(n), this.setData({
            "introNavObj.active": n
        }), wx.pageScrollTo({
            scrollTop: this.data.introNavObj["intro" + n] + 1
        });
    },
    onPageScroll: function(t) {
        this.goScroll(t);
    },
    goScroll: function(t) {
        var n = t.scrollTop, e = this.data.introNavObj, a = (e.intro0, e.intro1), i = e.intro2, o = e.introNav;
        this.data.showOrgList || this.setData({
            "introNavObj.fixed": n >= o,
            scrollTop: n
        });
    },
    showOrgList: function(t) {
        t.currentTarget.dataset.index ? t.currentTarget.dataset.index : this.data.index;
        this.setData({
            showOrgList: !0
        });
    },
    getcityjigou: function() {
        var n = this, e = n.data.id;
        t.util.request({
            url: "entry/wxapp/tijian.city",
            data: {
                id: e
            },
            success: function(e) {
                var a = e.data.host;
                console.log(e), t.util.request({
                    url: "entry/wxapp/tijian.bumen",
                    data: {
                        city: a
                    },
                    success: function(t) {
                        console.log(t);
                        for (var e = t.data, a = n.data.nesARR, i = 0; i < e.length; i++) console.log(e[i].list), 
                        a.push(e[i].list);
                        n.setData({
                            bm: t.data,
                            nesARR: a[0],
                            newarrs: a
                        });
                    }
                });
            }
        });
    },
    selectCity: function(n) {
        console.log(n);
        var e = this, a = n.currentTarget.dataset.id, i = n.currentTarget.dataset.index;
        t.util.request({
            url: "entry/wxapp/tijian.onebumen",
            data: {
                city: a
            },
            success: function(t) {
                console.log(t), e.setData({
                    nesARR: t.data,
                    selectCityIndex: i
                });
            }
        });
    },
    close: function() {
        this.setData({
            showOrgList: !1
        });
    },
    closeList: function() {
        this.setData({
            showOrgList: !1
        });
    },
    goNext: function(t) {
        console.log(t);
        var n = this.data.id, e = t.currentTarget.dataset.title, a = t.currentTarget.dataset.count, i = t.currentTarget.dataset.money, o = t.currentTarget.dataset.project, r = JSON.stringify(t.currentTarget.dataset.nesarr[0]), s = JSON.stringify(this.data.bm);
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/tijian/physical/appoint/appoint?tid=" + n + "&count=" + a + "&money=" + i + "&detail=" + encodeURIComponent(r) + "&title=" + e + "&project=" + JSON.stringify(o) + "&bm=" + s
        });
    }
});