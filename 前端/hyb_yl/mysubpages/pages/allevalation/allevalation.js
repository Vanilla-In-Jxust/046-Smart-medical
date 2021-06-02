var t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page((t = {
    data: {
        isshow: !0,
        imgList: [ "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/70964/23/4950/84524/5d31e5adE714b6b33/61f5d5c79537a8be.jpg!cc_100x100!q70.dpg.webp", "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/70964/23/4950/84524/5d31e5adE714b6b33/61f5d5c79537a8be.jpg!cc_100x100!q70.dpg.webp", "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/70964/23/4950/84524/5d31e5adE714b6b33/61f5d5c79537a8be.jpg!cc_100x100!q70.dpg.webp" ],
        sid: "",
        appraise: [],
        maxLength: 70
    },
    click: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = this.data.appraise;
        console.log(a);
        var i = a[e].pl_text.text, s = this.data.maxLength;
        a[e].pl_text.isshow = !a[e].pl_text.isshow, i = i.length > s && a[e].pl_text.isshow ? i.substring(0, s - 3) + "..." : i, 
        a[e].pl_text.textshow = i, this.setData({
            appraise: a
        });
    },
    evaldetail: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/onesubpages/pages/evaldetail/evaldetail"
        });
    },
    imgbtn: function(t) {
        console.log(t);
        var e = this.data.appraise, a = t.currentTarget.dataset.index, i = t.currentTarget.dataset.item;
        wx.previewImage({
            current: i,
            urls: e[a].pl_text.pic
        });
    },
    switchImg: function(t) {
        var e = t.currentTarget.dataset.src;
        this.data.imgList;
        wx.previewImage({
            current: e,
            urls: this.data.imgList
        });
    }
}, (0, e.default)(t, "evaldetail", function(t) {
    console.log(t);
    var e = t.currentTarget.dataset.pl_id;
    wx.navigateTo({
        url: "/hyb_yl/mysubpages/pages/commevaldetail/commevaldetail?pl_id=" + e
    });
}), (0, e.default)(t, "onLoad", function(t) {
    console.log(t), this.setData({
        sid: t.sid
    });
    var e = wx.getStorageSync("color");
    wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: e
    }), this.getAllpinglun();
}), (0, e.default)(t, "onReady", function() {}), (0, e.default)(t, "onShow", function() {}), 
(0, e.default)(t, "onHide", function() {}), (0, e.default)(t, "onUnload", function() {}), 
(0, e.default)(t, "onPullDownRefresh", function() {}), (0, e.default)(t, "onReachBottom", function() {}), 
(0, e.default)(t, "onShareAppMessage", function() {}), (0, e.default)(t, "getAllpinglun", function() {
    var t = this, e = t.data.sid;
    a.util.request({
        url: "entry/wxapp/goods.pinglun",
        data: {
            sid: e
        },
        success: function(e) {
            console.log(e.data), t.setData({
                appraise: e.data
            });
            for (var a = t.data.appraise, i = t.data.maxLength, s = 0; s < a.length; s++) {
                if (a[s].pl_text.text.length > i) var n = a[s].pl_text.text.substring(0, i - 3) + "..."; else n = a[s].pl_text.text;
                console.log(n), a[s].pl_text.textshow = n, a[s].pl_text.isshow = !0;
            }
            t.setData({
                appraise: a
            });
        }
    });
}), t));