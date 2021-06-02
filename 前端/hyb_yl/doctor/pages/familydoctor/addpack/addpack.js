Page({
    data: {
        people: "",
        title: "",
        period: "",
        packinfo: "",
        timecont: "",
        time: !1,
        mask: !1,
        select: !0,
        crowd: [ {
            title: "0-6岁小孩"
        }, {
            title: "青年人"
        }, {
            title: "中年人"
        }, {
            title: "孕妇"
        }, {
            title: "老年人"
        } ],
        timelist: [ {
            time: "2018.01.01-2019.01.01"
        }, {
            time: "2019.01.01-2020.01.01"
        }, {
            time: "2020.01.01-2021.01.01"
        }, {
            time: "2021.01.01-2022.01.01"
        }, {
            time: "2022.01.01-2023.01.01"
        } ],
        timeindex: 0,
        current: 0,
        attendSuccessImg: ""
    },
    whether: function(t) {
        this.setData({
            select: t.detail.value
        });
    },
    title: function(t) {
        this.setData({
            title: t.detail.value
        });
    },
    packinfo: function(t) {
        this.setData({
            packinfo: t.detail.value
        });
    },
    packprice: function(t) {
        this.setData({
            packprice: t.detail.value
        });
    },
    choosecrowd: function() {
        this.setData({
            mask: !this.data.mask
        });
    },
    crowdbtn: function(t) {
        var e = t.currentTarget.dataset.id, i = this.data.crowd;
        this.setData({
            current: e,
            people: i[e].title,
            mask: !this.data.mask
        });
    },
    switchTime: function() {
        this.setData({
            time: !this.data.time
        });
    },
    timebtn: function(t) {
        var e = t.currentTarget.dataset.id, i = this.data.timelist;
        this.setData({
            time: !this.data.time,
            timeindex: e,
            timecont: i[e].time
        });
    },
    takePictures: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "camera" ],
            success: function(e) {
                var i = e.tempFilePaths;
                t.setData({
                    attendSuccessImg: i[0]
                });
                var a, n = "";
                wx.getSystemInfo({
                    success: function(t) {
                        n = t.model;
                    }
                }), n.indexOf("iPhone") <= 0 ? console.log(111111) : ((a = wx.createCanvasContext("attendCanvasId")).drawImage(i[0], 0, 0, 94, 96), 
                a.draw(), t.prodImageOpt());
            }
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});