var t = getApp();

Page({
    data: {
        none: [ {
            img: "https://lg-o8nytxik-1257013711.cos.ap-shanghai.myqcloud.com/微信图片_20180727121929.png",
            con: "暂无信息"
        } ],
        Height: "",
        stype: 1,
        people: []
    },
    option: function(t) {
        this.setData({
            stype: t.target.id
        });
        var e = this.data.stype;
        "专家坐诊" == e && this.getAlldocfuwulist(e), "手术快约" == e && this.getAlldocfuwulist(e), 
        "点名会诊" == e && this.getAlldocfuwulist(e);
    },
    personal: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/healthRecord/healthRecord"
        });
    },
    dialOut: function(t) {
        console.log(t);
        var e = t.target.dataset.phonenumber;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    onLoad: function(t) {
        var e = "", o = t.zid;
        wx.getSystemInfo({
            success: function(t) {
                e = t.windowHeight;
            }
        }), this.setData({
            Height: e - 80,
            stype: "专家坐诊",
            zid: o
        }), this.getAlldocfuwulist();
    },
    getAlldocfuwulist: function(e) {
        var o = this, a = o.data.zid;
        e = o.data.stype;
        console.log(e), t.util.request({
            url: "entry/wxapp/Alldocfuwulist",
            data: {
                zid: a,
                stype: e,
                op: "all"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), o.setData({
                    people: t.data
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    overdz: function(e) {
        var o = this, a = e.currentTarget.dataset.fu_id;
        console.log(e), t.util.request({
            url: "entry/wxapp/Alldocfuwulist",
            data: {
                fu_id: a,
                op: "quren"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), o.setData({});
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});