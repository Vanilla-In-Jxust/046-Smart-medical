var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../../utils/toot.js")), t = getApp();

Page({
    data: {
        images: "/assets/images/head.png",
        obj: {
            name: "小明",
            age: 20,
            height: 140,
            weight: 200,
            nmBloodType: "心脏不好",
            nmEducation: "睡眠好",
            nmJobType: "吃的多",
            nmMaritalStatus: "老忘路",
            childrenNum: 4,
            nmMedicare: "记忆力差",
            infectFiled: "需要换血",
            nephrosis: "肾虚",
            bellyDialysisDay: 8,
            hemodialysisDay: 9,
            renalTransplantDay: "2018-11-2"
        },
        hemodialysisStatusshow: !0,
        hemodialysisStatusshowtext: "已血透",
        bellyDialysisStatusshow: !0,
        bellyDialysisStatustext: "已腹透",
        bellyDialysisDayshow: !0,
        bellyDialysisDaytext: "已移植"
    },
    onLoad: function(s) {
        a.default.carousel(this, 7);
        var e = wx.getStorageSync("log") || "", l = wx.getStorageSync("patientId") || "";
        console.log(e + "_" + l);
        e = l + "_" + e;
        var i = this;
        wx.request({
            url: t.globalData.patient + "patient/record/get/" + e + "/1",
            data: {},
            success: function(a) {
                console.log(a.data), console.log(a.data.data.userIcon);
                var t = a.data.data.userIcon;
                console.log(1111), i.setData({
                    images: t
                }), i.setData({
                    obj: a.data.data
                }), 0 == a.data.data.hemodialysisStatus ? i.setData({
                    hemodialysisStatusshow: !0,
                    hemodialysisStatusshowtext: "已血透"
                }) : null == a.data.data.hemodialysisStatus ? i.setData({
                    hemodialysisStatusshow: !1,
                    hemodialysisStatusshowtext: "未填写"
                }) : i.setData({
                    hemodialysisStatusshow: !1,
                    hemodialysisStatusshowtext: "未血透"
                }), 0 == a.data.data.bellyDialysisStatus ? i.setData({
                    bellyDialysisStatusshow: !0,
                    bellyDialysisStatustext: "已腹透"
                }) : null == a.data.data.bellyDialysisStatus ? i.setData({
                    bellyDialysisStatusshow: !1,
                    bellyDialysisStatustext: "未填写"
                }) : i.setData({
                    bellyDialysisStatusshow: !1,
                    bellyDialysisStatustext: "未腹透"
                }), 0 == a.data.data.renalTransplantStatus ? i.setData({
                    bellyDialysisDayshow: !0,
                    bellyDialysisDaytext: "已移植"
                }) : null == a.data.data.renalTransplantStatus ? i.setData({
                    bellyDialysisDayshow: !1,
                    bellyDialysisDaytext: "未填写"
                }) : i.setData({
                    bellyDialysisDayshow: !1,
                    bellyDialysisDaytext: "未移植"
                }), "男" == a.data.data.nmGender ? i.setData({
                    img: "/assets/images/nana.png"
                }) : i.setData({
                    img: "/assets/images/nva.png"
                });
            }
        });
    }
});