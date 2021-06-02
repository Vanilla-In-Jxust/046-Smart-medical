var a = wx.getStorageSync("ymd") || "", t = getApp();

Page({
    data: {
        testDate: a,
        casArrayx: "",
        casKey: "",
        imagess: [ "/assets/images/75.png", "/assets/images/73.png", "/assets/images/83.png", "/assets/images/84.png" ],
        _num: 0,
        tabArr: {
            curHdIndex: 0
        },
        text: "",
        id: "270101",
        name: "痊愈",
        obj: [ {
            nmOrdItemImg: [ "/assets/images/more.png", "/assets/images/more.png", "/assets/images/more.png" ]
        } ],
        objx: {},
        uuid: "",
        index: ""
    },
    dictionaries: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.dicc + "dic/comdicbase",
            data: {
                code: 27e4
            },
            success: function(a) {
                console.log(a.data.data);
                var t = [], s = [], d = a.data.data;
                for (var n in d) t.push(d[n]), s.push(n);
                e.setData({
                    casArrayx: t,
                    casKey: s
                });
            }
        });
    },
    onLoad: function(a) {
        var e = this;
        e.setData({
            teamId: a.teamId || ""
        });
        var s = wx.getStorageSync("log") || "", d = wx.getStorageSync("effectId") || "", n = wx.getStorageSync("patientId") || "";
        s = wx.getStorageSync("log") || "";
        console.log(n + "_" + s);
        s = n + "_" + s + e.data.teamId;
        var c = wx.getStorageSync("flag") || "";
        wx.request({
            url: t.globalData.patient + "patient/drugEffect/detail/" + s + "/" + d + "/" + c,
            data: {},
            success: function(a) {
                console.log(a.data.data), e.setData({
                    obj: a.data.data.drugs,
                    testDate: a.data.data.effect.effectTimeString,
                    objx: a.data.data.effect
                }), console.log(a.data.data.effect.cdTag), 270101 == a.data.data.effect.cdTag ? e.setData({
                    _num: 0
                }) : 270102 == a.data.data.effect.cdTag ? e.setData({
                    _num: 1
                }) : 270103 == a.data.data.effect.cdTag ? e.setData({
                    _num: 2
                }) : 270104 == a.data.data.effect.cdTag && e.setData({
                    _num: 3
                });
            }
        }), e.dictionaries();
    },
    input: function(a) {
        console.log(a.detail.value), this.setData({
            index: a.detail.value
        });
    },
    imgtabFun: function(a) {
        console.log(a.currentTarget.dataset.id), console.log(a.currentTarget.dataset.text), 
        this.setData({
            id: a.currentTarget.dataset.id,
            name: a.currentTarget.dataset.text,
            _num: a.currentTarget.dataset.index
        });
    }
});