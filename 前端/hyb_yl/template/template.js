var t = require("../../../utils/city.js");

require("../../../utils/city1.js");

Page({
    data: {
        swiper: {
            indicatorDots: !0,
            autoplay: !0,
            circular: !0,
            interval: 3e3,
            duration: 500,
            color: "rgba(0,0,0,.3)",
            acolor: "#000",
            imgUrls: [ {
                img: "../resource/images/swiper_item.png",
                id: 0
            }, {
                img: "../resource/images/swiper_item.png",
                id: 1
            } ]
        },
        nav: {
            nav_list: [ "门诊", "脑外科", "妇科", "妇产科", "血液科", "皮肤科" ],
            currentTab: 0
        },
        footer: {
            footdex: 0,
            txtcolor: "#A2A2A2",
            seltxt: "#EC6464",
            background: "#fff",
            list: [ {
                url: "/pages/index/index",
                icons: "/pages/resource/images/f_1.png",
                selIcon: "/pages/resource/images/f_1_sel.png",
                text: "探一探"
            }, {
                url: "/pages/mine/mine",
                icons: "/pages/resource/images/f_2.png",
                selIcon: "/pages/resource/images/f_2_sel.png",
                text: "个人"
            } ]
        },
        citys: {
            currentCity: "定位中...",
            letterArr: [],
            city1: [],
            hotCitys: [ {
                id: "105",
                provincecode: "340000",
                city: "安庆市",
                code: "340800",
                initial: "A"
            }, {
                id: "7",
                provincecode: "130000",
                city: "保定市",
                code: "130600",
                initial: "B"
            } ]
        }
    },
    swichNav: function(t) {
        var e = this.data.nav;
        e.currentTab = t.currentTarget.dataset.current, this.setData({
            nav: e
        });
    },
    choose: function(t, e, i, a) {
        var n = this.data.multiArray, r = this.data.multiIndex, s = [];
        for (var c in a) {
            s.push(a[c].name);
            var l = [];
            for (var u in a[t].children) {
                l.push(a[t].children[u].name);
                var o = [];
                for (var d in a[t].children[e].children) o.push(a[t].children[e].children[d].name);
            }
        }
        n.push(s), n.push(l), n.push(o), r.push(t), r.push(e), r.push(i), this.setData({
            multiArray: n,
            multiIndex: r
        });
    },
    onLoad: function(e) {
        if (null != e.index) {
            var i = this.data.footer;
            i.footdex = e.index, this.setData({
                footer: i
            });
            var a = t.citys();
            this.choose(0, 1, 2, a);
        }
        var n = t.searchLetter, r = t.cityList(), s = n;
        (a = this.data.citys).city1 = r, a.letterArr = s, this.setData({
            citys: a
        });
    },
    confirmClick: function(t) {
        var e = t.target.dataset.a_id, i = new RegExp("[一-龥]+", "g");
        e.search(i) || "定位中..." === e || "获取定位失败" === e || wx.reLaunch({
            url: "/hyb_jianzhi/index/index?a_id=" + e
        });
    },
    anchorClick: function(t) {
        var e = this.data.citys, i = t.currentTarget.dataset.a_id;
        e.toView = i, this.setData({
            citys: e
        });
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(e) {
                var i = e.longitude, a = e.latitude;
                t.loadCity(i, a);
            }
        });
    },
    loadCity: function(t, e) {
        var i = this;
        wx.request({
            url: "https://api.map.baidu.com/geocoder/v2/?ak=RU9iE3025rdZ1lzrxEYWje7DyInsLD2L&location=" + e + "," + t + "&output=json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var e = t.data.result.addressComponent.city;
                i.setData({
                    currentCity: e
                });
            },
            fail: function() {
                i.setData({
                    currentCity: "获取定位失败"
                });
            }
        });
    },
    bindMultiPickerColumnChange: function(e) {
        var i = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        i.multiIndex[e.detail.column] = e.detail.value;
        for (var a = t.citys(), n = [], r = [], s = 0; s < a.length; s++) {
            var c = [];
            if (null == a[s].children) c.push(), r.push(); else {
                for (var l = [], u = 0; u < a[s].children.length; u++) {
                    if (c.push(a[s].children[u].name), null == a[s].children) l.push(); else if (null == a[s].children[u].children) l.push(); else for (var o = [], d = 0; d < a[s].children[u].children.length; d++) o.push(a[s].children[u].children[d].name);
                    l.push(o);
                }
                r.push(l);
            }
            n.push(c);
        }
        for (var h = 0; h < a.length; h++) switch (e.detail.column) {
          case 0:
            if (null == a[h].children) {
                switch (i.multiIndex[0]) {
                  case h:
                    i.multiArray[1] = [], i.multiArray[2] = [];
                }
                i.multiIndex[1] = 0, i.multiIndex[2] = 0;
                break;
            }
            for (var m = 0; m < a[h].children.length; m++) {
                switch (i.multiIndex[0]) {
                  case h:
                    i.multiArray[1] = n[h], i.multiArray[2] = r[h][m];
                }
                i.multiIndex[1] = 0, i.multiIndex[2] = 0;
                break;
            }

          case 1:
            if (null == a[h].children) switch (i.multiIndex[0]) {
              case h:
                switch (i.multiIndex[1]) {
                  case h:
                    i.multiArray[2] = [];
                }
            } else for (var f = 0; f < a[h].children.length; f++) switch (i.multiIndex[0]) {
              case h:
                switch (i.multiIndex[1]) {
                  case f:
                    i.multiArray[2] = r[h][f];
                }
            }
            i.multiIndex[2] = 0;
        }
        this.setData(i);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});