var t = getApp();

Page({
    data: {
        repicelist: "",
        tempFilePaths: "",
        isshow: !0,
        clinic: 0,
        mew: !1,
        mess: {},
        sickness: [ {
            title: "上呼吸道感染",
            isshow: !1
        }, {
            title: "咽炎",
            isshow: !1
        }, {
            title: "支气管炎",
            isshow: !1
        }, {
            title: "肺炎",
            isshow: !1
        }, {
            title: "幽门螺旋杆菌感染",
            isshow: !1
        }, {
            title: "牙龈炎",
            isshow: !1
        } ],
        choosesick: !0,
        take: !0,
        maskbox: !1,
        allergy: !1,
        reflect: !1,
        arguee: !1,
        pic: [],
        related: [],
        intrArr: [ {
            ques: "您是否服用过该药品且无相关禁忌症",
            type: "a",
            isshow: !0
        }, {
            ques: "您是否度该药物过敏",
            type: "b",
            isshow: !1
        }, {
            ques: "有无不良反应",
            type: "c",
            isshow: !1
        } ],
        repice: [],
        ifyyr: !1
    },
    chooseimage: function() {
        var e = this, a = t.siteInfo.uniacid;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var s = t.tempFilePaths;
                console.log(s);
                for (var i = 0; i < s.length; i++) wx.uploadFile({
                    url: e.data.url + "app/index.php?i=" + a + "&c=entry&a=wxapp&do=Uploadback&m=hyb_yl",
                    filePath: s[i],
                    name: "upfile",
                    formData: {},
                    success: function(t) {
                        if (console.log(t.data), 0 == e.data.clinic) {
                            var a = e.data.pic;
                            a.length < 9 ? (a.push(t.data), console.log(a), e.setData({
                                pic: a
                            })) : wx.showToast({
                                title: "最多可添加九张图片",
                                icon: "none"
                            });
                        } else if (1 == e.data.clinic) {
                            var s = e.data.repice;
                            s.length < 9 ? (s.push(t.data), e.setData({
                                repice: s
                            })) : wx.showToast({
                                title: "最多可添加九张图片",
                                icon: "none"
                            });
                        }
                    }
                });
            }
        });
    },
    delImg: function(t) {
        console.log(t);
        var e = this.data.pic, a = t.currentTarget.dataset.index;
        if (0 == this.data.clinic) e.splice(a, 1), this.setData({
            pic: e
        }); else if (1 == this.data.clinic) {
            var s = this.data.repice;
            s.splice(a, 1), this.setData({
                repice: s
            });
        }
    },
    make: function(t) {
        var e = t.currentTarget.dataset.id, a = this.data.sickness;
        a[e].isshow = !a[e].isshow, this.setData({
            sickness: a
        });
        for (var s = [], i = 0; i < this.data.sickness.length; i++) 1 == this.data.sickness[i].isshow && s.push(this.data.sickness[i].title);
        this.setData({
            related: s
        });
    },
    clinic: function(t) {
        this.setData({
            clinic: t.currentTarget.dataset.id
        });
    },
    take_yes: function(t) {
        console.log(t);
        var e = this.data.intrArr, a = t.currentTarget.dataset.index;
        t.currentTarget.dataset.type;
        e[a].isshow = !e[a].isshow, 1 == e[0].isshow && 0 == e[1].isshow && 0 == e[2].isshow ? this.setData({
            arguee: !1
        }) : this.setData({
            arguee: !0
        }), e[a].isshow ? 1 != a && 2 != a || (wx.showModal({
            title: "",
            content: "为了您的用药安全，建议您到线下门诊",
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#ff0000"
        }), this.setData({
            arguee: !0
        })) : 0 == a && (wx.showModal({
            title: "",
            content: "为了您的用药安全，建议您到线下门诊",
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#ff0000"
        }), this.setData({
            arguee: !0
        })), this.setData({
            intrArr: e
        }), console.log(e);
    },
    succ: function() {
        var e = this, a = this.data.ifyyr, s = this.data.clinic;
        if (!a) return wx.showToast({
            title: "请选择用药人",
            icon: "none"
        }), !1;
        if (0 == s) {
            var i = this.data.intrArr, o = this.data.pic;
            console.log(o);
            var n = {
                intrArr: i,
                pic: o
            };
            console.log(n);
        } else if (1 == s) n = this.data.repice;
        console.log(s), t.util.request({
            url: "entry/wxapp/goods.cfcreate",
            data: {
                openid: wx.getStorageSync("openid"),
                content: n,
                j_id: e.data.j_id,
                typeSate: parseInt(s)
            },
            success: function(t) {
                console.log(t);
                var a = t.data, s = getCurrentPages();
                s[s.length - 2].setData({
                    j_id: e.data.j_id,
                    cf_id: a
                }), wx.navigateBack({
                    detail: 1
                });
            }
        });
    },
    onLoad: function(e) {
        var a = this;
        (this.data.allergy = !0) && this.setData({
            arguee: !1
        }), "" == this.data.tempFilePaths && this.setData({
            isshow: !1
        });
        var s = (i = wx.getStorageSync("medicemess")).slice(0, 1);
        "" == i ? this.setData({
            new: !1
        }) : this.setData({
            new: !0,
            mess: s
        });
        var i = wx.getStorageSync("medicemess");
        console.log(i);
        var o = i.slice(0, 1);
        this.setData({
            repicelist: o
        }), t.util.request({
            url: "entry/wxapp/hzbingli.url",
            success: function(t) {
                console.log(t), a.setData({
                    url: t.data
                });
            }
        });
    },
    pharmacy: function() {
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi"
        });
    },
    selectdrug: function() {
        wx.navigateTo({
            url: "/hyb_yl/onesubpages/pages/selectdrug/selectdrug"
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = getCurrentPages(), a = e[e.length - 1];
        if (console.log(a.data.names), a.data.names) {
            var s = this, i = a.data.j_id;
            t.util.request({
                url: "entry/wxapp/user.detailmyjd",
                data: {
                    j_id: i
                },
                success: function(t) {
                    console.log(t), s.setData({
                        age: t.data.age,
                        sex: t.data.sex,
                        phone: t.data.tel,
                        username: t.data.names,
                        new: !0,
                        ifyyr: !0,
                        j_id: i
                    });
                }
            });
        }
        (this.data.allergy = !0) && this.setData({
            arguee: !1
        });
        var o = wx.getStorageSync("medicemess");
        console.log(o);
        var n = o.slice(0, 1);
        this.setData({
            repicelist: n
        }), console.log(n), "" == o ? this.setData({
            new: !1
        }) : this.setData({
            new: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});