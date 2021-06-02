var t = getApp();

Page({
    data: {
        jianyiState: !1,
        statep: 2,
        retult: [ {
            names: "血常规",
            open: !1,
            list: [ {
                text: "白细胞计数（WBC）",
                val: "11.97",
                abnormal: 1
            }, {
                text: "中性粒细胞百分比（%NEUT）",
                val: "8.97",
                abnormal: 1
            }, {
                text: "嗜酸细胞百分比（%EOS）",
                val: "4.8",
                abnormal: 0
            } ]
        }, {
            names: "尿常规",
            open: !1,
            list: [ {
                text: "葡萄糖（GLU）（阴性）",
                val: "阴性",
                abnormal: 0
            }, {
                text: "比重（SG）（1.005-1.030）",
                val: "1.001",
                abnormal: 1
            }, {
                text: "尿胆原定性（UBG）（阴性  umol/L）",
                val: "阴性",
                abnormal: 0
            } ]
        } ],
        unscramble: [ {
            names: "李雪晴",
            imgicon: "../../../images/eqcordnew.png",
            site: "山西省人民医院",
            professional: "副主任医师",
            times: "昨天23:00",
            people: 230,
            mess: "您好，因为血常规的主要参考项目是，白细胞和红 细胞，血小板的数目以及血红蛋白的数值。指导意 见上述的描述显示白细胞减低，其余问"
        } ]
    },
    big_img: function(t) {
        var a = t.currentTarget.dataset.url, e = t.currentTarget.dataset.imglist;
        console.log(a), console.log(e), wx.previewImage({
            urls: e,
            current: a
        });
    },
    showjainyicont: function(t) {
        this.setData({
            jianyiState: !this.data.jianyiState
        });
    },
    itemshow: function(t) {
        var a = t.currentTarget.dataset.dex, e = t.currentTarget.dataset.type, n = this.data.content, o = this.data.addproject;
        1 == e ? n[a].open = !n[a].open : 2 == e && (o[a].open = !o[a].open), console.log(n), 
        this.setData({
            content: n,
            addproject: o
        });
    },
    onLoad: function(a) {
        var e = this, n = wx.getStorageSync("color"), o = a.id, i = a.wzid, r = a.zid, s = a.back_orser;
        if (e.setData({
            id: o,
            wzid: i,
            zid: r,
            back_orser: s
        }), a.ifzj) {
            var d = a.ifzj;
            e.setData({
                ifzj: d
            });
        }
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
        o = a.id;
        t.util.request({
            url: "entry/wxapp/tijian.oderinfo",
            data: {
                id: o
            },
            success: function(t) {
                console.log(t), e.setData({
                    detail: t.data,
                    content: t.data.content,
                    addproject: t.data.addproject,
                    zid: t.data.zid,
                    doc: t.data.zj,
                    result: t.data.data
                });
            }
        });
    },
    scanCode: function() {
        var t = this;
        wx.scanCode({
            success: function(a) {
                var e = a.result;
                t.setData({
                    result: e
                });
            }
        });
    },
    tijianbtn: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/userCommunicate/pages/changeDoctor/changeDoctor?inquiry=5&long=undefined&ser_key=tijianjiedu&tid=" + a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    jiedu: function(t) {
        var a = this.data.back_orser, e = this.data.zid, n = this.data.wzid, o = this.data.id;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/edit/edit?back_orser=" + a + "&zid=" + e + "&id=" + o + "&wzid=" + n + "&key_words=tijianjiedu"
        });
    }
});