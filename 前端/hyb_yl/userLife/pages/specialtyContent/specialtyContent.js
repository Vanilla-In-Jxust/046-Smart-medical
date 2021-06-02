var t = getApp();

require("../../../../utils/util.js");

Page({
    data: {
        xianzhi: !0,
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        sheet: 0,
        dateil: "对于白血病，根据其不同的时期，治愈的概率也是不一样的，化疗的治愈率大体为40% 左右，白血病是一类造血白细胞",
        voiceList: [ {
            poster: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/doctorDetail/voice.png?sign=913e72f8319b2ac8de6dc1cec669c976&t=1580888655",
            title: "婴幼儿如何预防流感？",
            doctor: "李伟",
            doctorImg: "",
            time: "2020-2-5",
            src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
        }, {
            poster: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/doctorDetail/voice.png?sign=913e72f8319b2ac8de6dc1cec669c976&t=1580888655",
            title: "婴幼儿如何预防流感？",
            doctor: "李伟",
            doctorImg: "",
            time: "2020-2-5",
            src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
        } ],
        article: [ {
            title: "婴幼儿如何预防流感？",
            doctor: "李伟",
            doctorImg: "",
            time: "2020-2-5"
        }, {
            title: "婴幼儿如何预防流感？",
            doctor: "李伟",
            doctorImg: "",
            time: "2020-2-5"
        }, {
            title: "婴幼儿如何预防流感？",
            doctor: "李伟",
            doctorImg: "",
            time: "2020-2-5"
        } ]
    },
    morebtns: function() {
        this.setData({
            xianzhi: !1
        });
    },
    openoaction: function(t) {
        wx.openLocation({
            latitude: parseFloat(t.currentTarget.dataset.latitude),
            longitude: parseFloat(t.currentTarget.dataset.longitude),
            address: t.currentTarget.dataset.address,
            scale: 22
        });
    },
    tellsbtn: function(t) {
        var e = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    docinfo: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye?zid=" + e
        });
    },
    onLoad: function(t) {
        var e = t.hid, a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
        this.data.dateil.slice(0, 40);
        this.setData({
            hid: e,
            color: a
        }), this.getHospital_info();
    },
    getHospital_info: function() {
        var e = this;
        t.util.request({
            url: "entry/wxapp/jiansuo.hospital_info",
            data: {
                hid: e.data.hid
            },
            success: function(t) {
                e.setData({
                    info: t.data
                });
            }
        });
    }
});