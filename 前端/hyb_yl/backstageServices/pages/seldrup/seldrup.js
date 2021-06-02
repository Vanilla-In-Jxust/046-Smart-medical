var t = getApp();

Page({
    data: {
        inquiry: "",
        cartpop: !1,
        detailspop: !1,
        sum: 0,
        kinds: 0,
        cartlist: [],
        steps: [ "上传处方", "完善信息", "选择药品", "医生开药" ],
        stepnum: 2,
        druplist: [],
        num: 1
    },
    handleNextStep: function() {
        var t = JSON.stringify(this.data.cartlist);
        console.log(t), wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/drupmespay/drupmespay&cartlist=" + t
        });
    },
    handleShowSelectDrugs: function() {
        this.setData({
            cartpop: !0
        });
    },
    handleClosecart: function() {
        this.setData({
            cartpop: !1
        });
    },
    drupdetail: function() {
        this.setData({
            detailspop: !0
        });
    },
    handleCloseTap: function() {
        this.setData({
            detailspop: !1
        });
    },
    handleNumberClick: function(t) {
        var a = t.currentTarget.dataset.type, s = t.currentTarget.dataset.dex, n = this.data.druplist, e = t.currentTarget.dataset.id, i = this.data.cartlist;
        "add" == a ? ++n[s].num : "reduce" == a && --n[s].num, i.map(function(t, a) {
            e == t.id && (t.num = n[s].num, 0 == t.num && i.splice(a, 1));
        }), 0 == i.length && this.setData({
            cartpop: !1
        }), this.setData({
            druplist: n,
            cartlist: i
        }), this.sunmfun(), this.typefun();
    },
    deletedrup: function(t) {
        var a = t.currentTarget.dataset.dex, s = this.data.cartlist, n = this.data.druplist, e = t.currentTarget.dataset.id;
        n.map(function(t) {
            e == t.id && (t.num = 0);
        }), s.splice(a, 1), 0 == s.length && this.setData({
            cartpop: !1
        }), this.setData({
            cartlist: s,
            druplist: n
        }), this.sunmfun(), this.typefun();
    },
    sunmfun: function() {
        var t = this.data.druplist, a = 0;
        t.map(function(t) {
            a += t.num;
        }), this.setData({
            sum: a
        });
    },
    typefun: function() {
        var t = this.data.druplist, a = 0;
        t.map(function(t) {
            0 != t.num && ++a;
        }), this.setData({
            kinds: a
        });
    },
    handleOnlyAddClick: function(t) {
        t.currentTarget.dataset.sid;
        var a = t.currentTarget.dataset.dex, s = this.data.druplist, n = this.data.cartlist;
        s[a].num = 1, n.push(s[a]), console.log(s), this.setData({
            druplist: s,
            cartlist: n
        }), this.sunmfun(), this.typefun();
    },
    onLoad: function(t) {
        this.getall();
        var a = wx.getStorageSync("color"), s = t.j_id, n = t.key_words, e = JSON.parse(t.conets);
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        }), this.setData({
            key_words: n,
            conets: e,
            j_id: s
        });
    },
    onReady: function() {},
    onShow: function() {
        this.sunmfun(), this.typefun();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getall: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/goods.allgoods",
            success: function(t) {
                console.log(t), a.setData({
                    druplist: t.data
                });
            }
        });
    }
});