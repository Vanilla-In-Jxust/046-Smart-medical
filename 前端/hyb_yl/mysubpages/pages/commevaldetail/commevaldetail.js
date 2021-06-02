var t = getApp();

Page({
    data: {
        isshow: !0,
        imgList: [ "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/70964/23/4950/84524/5d31e5adE714b6b33/61f5d5c79537a8be.jpg!cc_100x100!q70.dpg.webp", "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/70964/23/4950/84524/5d31e5adE714b6b33/61f5d5c79537a8be.jpg!cc_100x100!q70.dpg.webp", "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/70964/23/4950/84524/5d31e5adE714b6b33/61f5d5c79537a8be.jpg!cc_100x100!q70.dpg.webp" ],
        replyList: [ {
            username: "开发局咖啡",
            userImg: "",
            replyCont: "公开答复开发开放就肯定是妇科萨拉刘大可噢诶诶诶开发",
            replyTime: "2019-11-12"
        }, {
            username: "开发局咖啡",
            userImg: "",
            replyCont: "公开答复开发开放就肯定是妇科萨拉刘大可噢诶诶诶开发",
            replyTime: "2019-11-12"
        } ],
        replycont: "",
        maxLength: 72
    },
    upload: function() {
        var t = this.data.info;
        console.log(t.pl_text.text.length);
        var o = t.pl_text.text, e = !this.data.isshow, a = this.data.maxLength;
        o = o.length > a && e ? o.substring(0, a - 3) + "..." : o, this.setData({
            isshow: e,
            contShow: o
        });
    },
    imgbtn: function(t) {
        console.log(t);
        var o = t.currentTarget.dataset.item, e = this.data.info;
        console.log(e), wx.previewImage({
            current: o,
            urls: e.pl_text.pic
        });
    },
    replycont: function(t) {
        this.setData({
            replycont: t.detail.value
        });
    },
    send: function() {
        if ("" == this.data.replycont) wx.showToast({
            title: "请输入您要回复的内容",
            icon: "none"
        }); else {
            var t = times.formatDate(new Date()), o = {
                username: "pl",
                userImg: "",
                replyCont: this.data.replycont,
                replyTime: t
            }, e = this.data.replyList;
            e.push(o), console.log(t), this.setData({
                replycont: "",
                replyList: e
            });
        }
    },
    onPageScroll: function(t) {
        t.scrollTop > 100 ? this.setData({
            floorstatus: !0
        }) : this.setData({
            floorstatus: !1
        });
    },
    goTop: function(t) {
        wx.pageScrollTo ? wx.pageScrollTo({
            scrollTop: 0
        }) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    onLoad: function(t) {
        var o = wx.getStorageSync("color"), e = t.pl_id;
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), this.setData({
            pl_id: e
        });
    },
    onReady: function() {
        this.getDetailpl();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getDetailpl: function() {
        var o = this, e = o.data.pl_id;
        console.log(e), t.util.request({
            url: "entry/wxapp/Goods.Detailpl",
            data: {
                pl_id: e
            },
            success: function(t) {
                console.log(t), o.setData({
                    info: t.data
                }), console.log(o.data.info);
                var e = o.data.info, a = o.data.maxLength, n = e.pl_text.text.substring(0, a - 3) + "...";
                o.setData({
                    contShow: n
                });
            }
        });
    }
});