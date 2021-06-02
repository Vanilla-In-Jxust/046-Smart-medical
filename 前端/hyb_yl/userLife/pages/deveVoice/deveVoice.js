wx.createInnerAudioContext();

var a = getApp(), t = wx.getBackgroundAudioManager();

Page({
    data: {
        isplay: !0,
        itemIndex: "",
        voiceList: {},
        list: [],
        min: 0,
        max: 0,
        value: 0,
        now: "00:00",
        long: "00:00",
        maskShow: !1
    },
    play: function() {
        this.setData({
            isplay: !this.data.isplay
        }), this.data.isplay ? this.start() : this.pause();
    },
    start: function() {
        t.play(), this.setData({
            isplay: !0
        });
    },
    pause: function() {
        t.pause(), this.setData({
            isplay: !1
        });
    },
    setAudio: function() {
        var o = this.data.list[a.globalData.playIndex];
        console.log(o), this.setData({
            max: 100,
            value: 0,
            coverImgUrl: o.h_pic,
            title: o.title,
            singer: o.singer,
            epname: o.epname,
            voiceList: o
        }), a.globalData.currentTime = 0, a.globalData.duration = 0, t.title = o.h_title, 
        t.epname = o.h_title, t.singer = o.singer, t.coverImgUrl = o.h_pic, t.src = o.audios;
    },
    setAudioCover: function() {
        var o = a.globalData.list[a.globalData.playIndex];
        this.setData({
            coverImgUrl: o.coverImgUrl,
            title: o.h_title,
            singer: o.singer,
            epname: o.epname,
            voiceList: o
        }), t.title = o.h_title, t.epname = o.epname, t.singer = o.singer, t.coverImgUrl = o.coverImgUrl;
    },
    playNext: function() {
        var t = 0;
        a.globalData.playIndex < a.globalData.list.length - 1 && (t = a.globalData.playIndex + 1), 
        a.globalData.playIndex = t, this.setAudio(), this.setData({
            isplay: !0,
            voiceList: a.globalData.list[a.globalData.playIndex],
            itemIndex: a.globalData.playIndex
        });
    },
    playPrev: function() {
        var t = a.globalData.list.length - 1;
        a.globalData.playIndex > 0 && (t = a.globalData.playIndex - 1), a.globalData.playIndex = t, 
        this.setAudio(), this.setData({
            isplay: !0,
            voiceList: a.globalData.list[a.globalData.playIndex],
            itemIndex: a.globalData.playIndex
        });
    },
    seek: function(a) {
        var o = a.detail.value;
        t.seek(o);
    },
    seeking: function(a) {
        var t = a.detail.value, o = this.formatS2M(t);
        this.setData({
            now: o
        });
    },
    formatS2M: function(a) {
        var t = parseInt(a / 60), o = parseInt(a % 60);
        return o < 10 && (o = "0" + o), t < 10 && (t = "0" + t), t + ":" + o;
    },
    list: function() {
        this.setData({
            maskShow: !this.data.maskShow
        });
    },
    closeList: function() {
        this.setData({
            maskShow: !this.data.maskShow
        });
    },
    itemBtn: function(t) {
        console.log(t);
        var o = t.currentTarget.dataset.itemindex;
        a.globalData.playIndex = o;
        var e = this.data.list[o];
        this.setAudio(), this.setData({
            isplay: !0,
            itemIndex: o,
            voiceList: e
        });
    },
    onLoad: function(t) {
        var o = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o
        }), console.log(a.globalData.playIndex), console.log(t);
        t.index, t.itemIndex;
        var e = JSON.parse(t.list);
        console.log(e), this.setData({
            itemIndex: a.globalData.playIndex,
            list: e
        });
    },
    onReady: function() {},
    onShow: function() {
        var o = this;
        t.onTimeUpdate(function() {
            var e = parseInt(t.currentTime);
            if (e > 0 && e != a.globalData.currentTime) {
                a.globalData.currentTime = e;
                var n = o.formatS2M(e);
                a.globalData.currentTime = e, o.setData({
                    value: e,
                    now: n
                });
            }
            if (t.duration != o.data.max) {
                var l = o.formatS2M(t.duration);
                a.globalData.duration = t.duration, o.setData({
                    max: t.duration,
                    long: l
                }), console.log("初始化音频时间，包括时长和显示格式的时长（如：00:21）");
            }
        }), t.onCanplay(function() {
            console.log("onCanplay", t, "总时长", t.duration);
        }), t.onEnded(function() {
            console.log("onEnd"), o.setAudio();
        }), t.onNext(function() {
            console.log("onNext"), o.playNext();
        }), t.onPrev(function() {
            console.log("onPrev"), o.playPrev();
        }), t.onEnded(function() {
            console.log("onEnded"), o.playNext();
        }), t.onStop(function() {
            console.log("onStope");
        }), t.onWaiting(function() {
            console.log("onWaiting", "正在拼命加载中...");
        }), t.duration > 0 ? o.setData({
            list: a.globalData.list
        }, function() {
            o.setAudioCover();
        }) : (a.globalData.list = o.data.list, o.setAudio());
    },
    onHide: function() {},
    onUnload: function() {
        this.setData({
            isplay: !1
        }), this.pause();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});