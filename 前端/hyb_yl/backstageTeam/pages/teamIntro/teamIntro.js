var t = getApp();

Page({
    data: {
        showFlag: !1,
        name: "申请加入"
    },
    previewImage: function(t) {
        console.log(t), this.data.showFlag = !0;
        var a = [ t.target.dataset.url ];
        wx.previewImage({
            urls: a
        });
    },
    goTointro: function(t) {
        console.log(t), wx.setStorageSync("doctorId", t.target.dataset.id), wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/doctorIntro/doctorIntro?type=1"
        });
    },
    navCode: function(t) {
        wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/teamDetails4/teamDetails4?teamId=" + this.data.teamId
        });
    },
    serve: function(t) {
        console.log(0xa1b01d4b1c7), wx.setStorageSync("teamId", this.data.teamId), wx.navigateTo({
            url: "/hyb_yl/backstageTeam/pages/notice1/notice1?managerRole=3"
        });
    },
    list: function(t) {
        wx.showToast({
            title: "您无权限查看",
            icon: "none",
            duration: 1e3
        });
    },
    onLoad: function(t) {
        this.setData({
            teampic: t.teampic,
            t_id: t.t_id,
            zid: t.zid,
            teamtext: t.teamtext,
            teamname: t.teamname,
            z_thumbs: t.z_thumbs,
            z_name: t.z_name
        });
    },
    onShow: function() {},
    tapFlag: function() {
        console.log(111), this.setData({
            teamDescFlag: !this.data.teamDescFlag
        }), this.data.teamDescFlag ? this.setData({
            downFlag: !1
        }) : this.setData({
            downFlag: !0
        });
    },
    join: function(a) {
        var e = this.data.zid, o = this.data.t_id;
        t.util.request({
            url: "entry/wxapp/Yaoqing",
            data: {
                zid: e,
                t_id: o,
                op: "yaoqingjilu"
            },
            success: function(t) {
                console.log(t);
            }
        });
    }
});