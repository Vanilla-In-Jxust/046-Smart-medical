Page({
    data: {
        carlist: [],
        editorshow: !0,
        num: 1,
        allCheck: !1,
        total: 0
    },
    editor: function() {
        this.setData({
            editorshow: !this.data.editorshow
        });
    },
    getNum: function(t) {
        console.log(t);
    },
    blurnum: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index, s = this.data.carlist;
        s[a].num = t.detail.value, s[a].num < 1 && (wx.showToast({
            title: "商品至少一个",
            icon: "none"
        }), s[a].num = 1, this.setData({
            carlist: s
        })), 0 == s[a].mostgt ? s[a].num > parseInt(s[a].snum) && (wx.showToast({
            title: "您最多能买" + s[a].snum + "件商品",
            icon: "none"
        }), s[a].num = s[a].snum, this.getTotalPrice(), this.setData({
            carlist: s
        })) : (console.log(11111), s[a].num > parseInt(s[a].mostgt) && (wx.showToast({
            title: "商品不能超过" + s[a].mostgt + "个",
            icon: "none"
        }), s[a].num = s[a].mostgt, this.getTotalPrice(), this.setData({
            carlist: s
        }))), 1 == s[a].check && this.getTotalPrice();
    },
    shopradio: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index, s = this.data.carlist;
        s[a].check = !s[a].check, this.setData({
            carlist: s
        });
        for (var o = [], e = 0; e < this.data.carlist.length; e++) 1 == this.data.carlist[e].check && o.push(this.data.carlist[e]);
        o.length == s.length ? this.setData({
            allCheck: !0
        }) : this.setData({
            allCheck: !1
        }), this.getTotalPrice();
    },
    selectALL: function(t) {
        var a = this.data.carlist;
        console.log(a), this.setData({
            allCheck: !this.data.allCheck
        }), this.data.allCheck ? (a.map(function(t, a) {
            t.check = !0;
        }), this.setData({
            carlist: a
        })) : (a.map(function(t, a) {
            t.check = !1;
        }), this.setData({
            carlist: a
        })), this.getTotalPrice();
    },
    add: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.index, s = this.data.carlist;
        s[a].check ? (s[a].num++, this.getTotalPrice()) : s[a].num++, 0 == s[a].mostgt ? s[a].num > parseInt(s[a].snum) && (wx.showToast({
            title: "您最多能买" + s[a].snum + "件商品",
            icon: "none"
        }), s[a].num = s[a].snum, this.setData({
            carlist: s
        }), this.getTotalPrice()) : s[a].num > parseInt(s[a].mostgt) && (wx.showToast({
            title: "商品不能超过" + s[a].mostgt + "个",
            icon: "none"
        }), s[a].num = s[a].mostgt, this.getTotalPrice(), this.setData({
            carlist: s
        })), this.setData({
            carlist: s
        });
    },
    even: function(t) {
        var a = t.currentTarget.dataset.index, s = this.data.carlist;
        s[a].check ? (s[a].num--, s[a].num < 1 && (wx.showToast({
            title: "至少一件商品",
            icon: "none"
        }), s[a].num = 1), this.getTotalPrice()) : (s[a].num--, s[a].num < 1 && (wx.showToast({
            title: "至少一件商品",
            icon: "none"
        }), s[a].num = 1)), this.setData({
            carlist: s
        });
    },
    getTotalPrice: function() {
        for (var t = this.data.carlist, a = 0, s = 0; s < t.length; s++) 1 == t[s].check && (a += t[s].smoney * t[s].num), 
        console.log(a);
        this.setData({
            total: a.toFixed(2)
        }), console.log(a);
    },
    del: function() {
        var t = this.data.carlist;
        console.log(t);
        for (var a = [], s = 0; s < t.length; s++) t[s].check || a.push(t[s]);
        console.log(a), 1 == this.data.allCheck && (a = []), this.setData({
            carlist: a,
            allCheck: !1
        }), wx.setStorageSync("druglist", this.data.carlist);
    },
    xuangou: function() {
        wx.switchTab({
            url: "/hyb_yl/tabBar/shop/shop"
        });
    },
    goshop: function() {
        for (var t = this.data.carlist, a = [], s = 0; s < t.length; s++) 1 == t[s].check && a.push(t[s]);
        0 == a.length ? wx.showToast({
            title: "您还没有选中商品",
            icon: "none"
        }) : wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/shopdetail/shopdetail?arr=" + JSON.stringify(a) + "&ifcfy=" + this.data.ifcfy
        }), console.log(a);
    },
    onLoad: function(t) {
        console.log(t), this.getTotalPrice();
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        var s = wx.getStorageSync("shopcar");
        console.log(s), this.setData({
            carlist: s,
            ifcfy: t.ifcfy,
            bgc: a
        }), console.log(this.data.carlist), this.selectALL();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        console.log(this.data.carlist), wx.setStorageSync("druglist", this.data.carlist);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});