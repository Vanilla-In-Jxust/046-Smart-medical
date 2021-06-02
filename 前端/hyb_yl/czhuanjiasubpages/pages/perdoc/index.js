var t = getApp();

Page({
    data: {
        tabindex: 0,
        chose_sever: [ "99元/1个月", "219元/3个月" ],
        arr: 0,
        two_list: [ {
            title: "会员专属标识",
            content: [ "享受医生本人的会员待遇，获得医生全面照护。" ]
        }, {
            title: "可进入医生的会员俱乐部",
            content: [ "在俱乐部，可和医生，其他会员充分互动" ]
        }, {
            title: "会员专属标识",
            content: [ "1.每次图文问诊最长48小时", "2.图文问诊期间，不限交流次数" ]
        } ]
    },
    choseTab: function(t) {
        this.setData({
            tabindex: t.currentTarget.dataset.index,
            arr: t.currentTarget.dataset.index
        });
    },
    nextpage: function() {
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/perdoclist/index"
        });
    },
    onLoad: function(e) {
        var n = this, a = e.zid, o = e.keywords;
        t.util.request({
            url: "entry/wxapp/index.base",
            success: function(t) {
                console.log(t), n.setData({
                    show_title: t.data.show_title
                });
            }
        }), n.setData({
            zid: a,
            keywords: o
        }), n.getDocinfo();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getDocinfo: function(e) {
        var n = this, a = n.data.zid, o = n.data.keywords;
        t.util.request({
            url: "entry/wxapp/zhuanjia.docinfo",
            data: {
                zid: a,
                key: o
            },
            success: function(t) {
                console.log(t), n.setData({
                    docinfo: t.data.data
                });
            }
        });
    }
});