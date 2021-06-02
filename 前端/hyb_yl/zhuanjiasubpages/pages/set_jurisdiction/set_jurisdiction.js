var t = getApp();

Page({
    data: {
        contList: [ {
            title: "用户签约消息提醒",
            key: "qianynum",
            num: 0
        }, {
            title: "提现审核结果通知",
            key: "tixiannum",
            num: 0
        } ]
    },
    addNum: function(t) {
        var e = this.data.submitOrder, n = this.data.OpenHalfcard, a = this.data.Mobile;
        this.data.hexiao, this.data.settled, this.data.qainSuccess;
        wx.requestSubscribeMessage({
            tmplIds: [ e, n, a ],
            success: function(t) {
                console.log(t);
            }
        });
    },
    addNum2: function(e) {
        var n = this, a = n.data.zid, s = e.currentTarget.dataset.key, i = n.data.qainSuccess;
        wx.requestSubscribeMessage({
            tmplIds: [ i ],
            success: function(e) {
                console.log(e), "accept" == e[i] && t.util.request({
                    url: "entry/wxapp/zhuanjia.addtixingnum",
                    data: {
                        zid: a,
                        key: s
                    },
                    success: function(t) {
                        console.log(t), n.getdocnum();
                    }
                });
            }
        });
    },
    addNum3: function(e) {
        var n = this, a = n.data.zid, s = e.currentTarget.dataset.key, i = n.data.tixianSuccess;
        wx.requestSubscribeMessage({
            tmplIds: [ i ],
            success: function(e) {
                console.log(e), "accept" == e[i] && t.util.request({
                    url: "entry/wxapp/zhuanjia.addtixingnum",
                    data: {
                        zid: a,
                        key: s
                    },
                    success: function(t) {
                        console.log(t), n.getdocnum();
                    }
                });
            }
        });
    },
    addNumtij: function(t) {
        var e = this.data.jobnotice;
        wx.requestSubscribeMessage({
            tmplIds: [ e ],
            success: function(t) {
                console.log(t);
            }
        });
    },
    allAddnum: function(t) {
        for (var e = this.data.contList, n = 0; n < e.length; n++) e[n].num += 1;
        this.setData({
            contList: e
        });
    },
    switch: function(t) {
        1 == t.detail.value && this.dyBtn();
    },
    dyBtn: function() {
        console.log(123);
        var t = this.data.qiany;
        wx.requestSubscribeMessage({
            tmplIds: [ t ],
            success: function(t) {
                console.log(t);
            }
        });
    },
    onLoad: function(e) {
        var n = this, a = e.zid;
        n.setData({
            zid: a
        }), n.getdocnum(), t.util.request({
            url: "entry/wxapp/index.techen",
            success: function(t) {
                console.log(t);
                var e = t.data.wxapp_mb;
                n.setData({
                    submitOrder: e.submitOrder,
                    OpenHalfcard: e.OpenHalfcard,
                    Mobile: e.Mobile,
                    hexiao: e.hexiao,
                    settled: e.settled,
                    qainSuccess: e.qainSuccess,
                    tixianSuccess: e.tixianSuccess,
                    jobnotice: e.jobnotice
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
    getdocnum: function() {
        var e = this, n = e.data.zid;
        console.log(n), t.util.request({
            url: "entry/wxapp/zhuanjia.dockey",
            data: {
                zid: n
            },
            success: function(t) {
                console.log(t), e.setData({
                    qianynum: t.data.qianynum,
                    tixiannum: t.data.tixiannum
                });
            }
        });
    }
});