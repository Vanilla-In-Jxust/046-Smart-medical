var t = getApp();

Page({
    data: {
        specialService: [ {
            id: 1,
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案",
            img: "https://www.webstrongtech.net/attachment/images/141/2018/10/P3tvt6biWt3w088R8CZ830638N4t83.png"
        }, {
            id: 2,
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案",
            img: "https://www.webstrongtech.net/attachment/images/141/2018/10/P3tvt6biWt3w088R8CZ830638N4t83.png"
        }, {
            id: 3,
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案",
            img: "https://www.webstrongtech.net/attachment/images/141/2018/10/P3tvt6biWt3w088R8CZ830638N4t83.png"
        }, {
            id: 4,
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案",
            img: "https://www.webstrongtech.net/attachment/images/141/2018/10/P3tvt6biWt3w088R8CZ830638N4t83.png"
        }, {
            id: 5,
            effect: 80,
            satisfied: 60,
            about: 200,
            title: "换骨头方案",
            img: "https://www.webstrongtech.net/attachment/images/141/2018/10/P3tvt6biWt3w088R8CZ830638N4t83.png"
        } ]
    },
    commodity: function(t) {
        var e = this.data.zid, i = t.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/hyb_yl/backstageGroceries/pages/doctorIntro/doctorIntro?sid=" + i + "&zid=" + e
        });
    },
    onLoad: function(t) {
        var e = t.title;
        wx.setNavigationBarTitle({
            title: e
        }), "手术快约" == e && wx.setNavigationBarTitle({
            title: "手术快约"
        }), "专家坐诊" == e && wx.setNavigationBarTitle({
            title: "专家坐诊"
        }), "点名会诊" == e && wx.setNavigationBarTitle({
            title: "点名会诊"
        }), this.setData({
            title: e
        });
    },
    onReady: function() {
        this.getAllfuwulist();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getAllfuwulist: function() {
        var e = this, i = e.data.title;
        t.util.request({
            url: "entry/wxapp/Docfuwu",
            data: {
                stype: i,
                op: "allfuwu"
            },
            success: function(t) {
                console.log(t), e.setData({
                    fuwu: t.data.data
                });
            }
        });
    }
});