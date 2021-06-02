var t = getApp();

Page({
    data: {
        currentTab: 0,
        setinterval: "",
        have_data: !1,
        current: null,
        currentFriend: null,
        start: null,
        end: null,
        startFriend: null,
        endFriend: null,
        list: [],
        haoyou_list: [],
        footer: {
            footdex: 0,
            txtcolor: "#A2A2A2",
            seltxt: "#EC6464",
            background: "#fff",
            list: []
        }
    },
    switch_tab: function(t) {
        this.setData({
            currentTab: t.currentTarget.dataset.index
        });
    },
    look_detail: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.docimg;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/wenz_detail/wenz_detail?t_id=" + t.currentTarget.dataset.tid + "&f_id=" + t.currentTarget.dataset.fid + "&touxiang=" + t.currentTarget.dataset.avatar + "&touxiang1=" + a + "&docimg=" + t.currentTarget.dataset.avatar + "&docid=" + t.currentTarget.dataset.docid + "&t_name=" + t.currentTarget.dataset.t_name + "&u_id=" + t.currentTarget.dataset.m_id + "&name=" + t.currentTarget.dataset.f_name + "&if_over=" + t.currentTarget.dataset.if_over + "&ifkf=3"
        });
    },
    del: function(a) {
        var e = this, n = e.data.list, r = a.currentTarget.dataset.id, i = a.currentTarget.dataset.fid, s = a.currentTarget.dataset.tid, d = a.currentTarget.dataset.m_id;
        wx.showModal({
            title: "提示",
            content: "删除后不可恢复，是否删除？",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/Wenzhenjilu",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        m_id: d,
                        op: "del",
                        f_id: i,
                        t_id: s
                    },
                    success: function(t) {
                        console.log(t), n.splice(r, 1), e.setData({
                            list: n,
                            current: null
                        });
                    }
                });
            }
        });
    },
    start: function(t) {
        this.setData({
            start: t.changedTouches[0].pageX
        });
    },
    move: function(t) {},
    end: function(t) {
        this.setData({
            end: t.changedTouches[0].pageX
        }), this.data.start - this.data.end > 0 ? this.setData({
            current: t.currentTarget.dataset.id
        }) : this.data.start - this.data.end < 0 && this.setData({
            current: null
        });
    },
    delFriend: function(a) {
        var e = this, n = e.data.haoyou_list, r = a.currentTarget.dataset.id, i = a.currentTarget.dataset.fid, s = a.currentTarget.dataset.tid;
        wx.showModal({
            title: "提示",
            content: "确定删除好友和TA的所有聊天信息",
            success: function(a) {
                a.confirm && t.util.request({
                    url: "entry/wxapp/DeleteHaoyou",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        fid: i,
                        tid: s
                    },
                    success: function(t) {
                        console.log(a), n.splice(r, 1), e.setData({
                            haoyou_list: n,
                            currentFriend: null
                        });
                    }
                });
            }
        });
    },
    startFriend: function(t) {
        this.setData({
            startFriend: t.changedTouches[0].pageX
        });
    },
    moveFriend: function(t) {},
    endFriend: function(t) {
        this.setData({
            endFriend: t.changedTouches[0].pageX
        }), this.data.startFriend - this.data.endFriend > 0 ? this.setData({
            currentFriend: t.currentTarget.dataset.id
        }) : this.data.startFriend - this.data.endFriend < 0 && this.setData({
            currentFriend: null
        });
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var e = this, n = t.zid;
        if (null != t.index) {
            var r = e.data.footer;
            r.footdex = t.index, e.setData({
                footer: r
            });
        }
        var i = setInterval(function() {
            e.getChatList(), wx.hideNavigationBarLoading();
        }, 6e3);
        e.setData({
            setinterval: i,
            zid: n,
            bgc: a
        }), e.getChatList();
    },
    getChatList: function() {
        var a = this, e = a.data.zid;
        t.util.request({
            url: "entry/wxapp/Docwenzjilu",
            data: {
                docid: e,
                op: "display"
            },
            success: function(t) {
                console.log(t), a.setData({
                    list: t.data
                });
            }
        });
    },
    getDaohang: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/Daohang",
            success: function(t) {
                var e = a.data.footer;
                e.list = t.data.data, a.setData({
                    footer: e
                });
            }
        });
    },
    onReady: function() {},
    onUnload: function() {
        clearInterval(this.data.setinterval);
    },
    onShow: function() {},
    onHide: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});