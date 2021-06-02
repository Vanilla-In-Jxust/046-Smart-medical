var e = getApp();

Page({
    data: {
        wzname: "",
        arr: [ {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小明",
            nmGender: "男",
            age: 30,
            remarkName: "心脏病"
        }, {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小明",
            nmGender: "女",
            age: 30,
            remarkName: "心脏病"
        }, {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小明",
            nmGender: "男",
            age: 30,
            remarkName: "心脏病"
        }, {
            userId: 1,
            userIcon: "/assets/images/head.png",
            name: "小明",
            nmGender: "男",
            age: 30,
            remarkName: "心脏病"
        } ]
    },
    input: function(e) {
        console.log(e.detail.value), this.setData({
            wzname: e.detail.value
        });
    },
    grabble: function(a) {
        var t = this, n = wx.getStorageSync("log") || "";
        wx.request({
            url: e.globalData.dic + "doctor/manage/searchMyPatient",
            data: {
                token: n,
                keyWord: wx.getStorageSync("input") || ""
            },
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log(e.data.data), 0 == e.data.data.length ? wx.showToast({
                    title: "查无此人",
                    icon: "none",
                    duration: 2e3
                }) : t.setData({
                    arr: e.data.data
                });
            }
        });
    },
    shu: function(a) {
        console.log(a.currentTarget.dataset.patientid), wx.request({
            url: e.globalData.dic + "doctor/manage/showPatientAllowArchives/" + a.currentTarget.dataset.patientid,
            success: function(e) {
                console.log(e.data.data), 1 != e.data.data ? wx.showModal({
                    title: "提示",
                    content: "患者没有授权",
                    success: function(e) {
                        e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
                    }
                }) : (wx.setStorageSync("patientId", a.currentTarget.dataset.patientid), wx.navigateTo({
                    url: "/hyb_yl/followUp/pages/healthRecord/healthRecord"
                }));
            }
        });
    },
    Wmovement: function(e) {
        console.log(e.currentTarget.dataset.patientid), wx.setStorageSync("patientid", e.currentTarget.dataset.patientid), 
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/casControlmovement/casControlmovement"
        });
    },
    onLoad: function(e) {
        var a = JSON.parse(e.sousuinfo);
        this.setData({
            arr: a
        });
    },
    onShow: function() {}
});