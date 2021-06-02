var e, t = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), a = getApp();

require("../../../../utils/util.js");

Page({
    data: (e = {
        currentTab: 0,
        setinterval: "",
        have_data: !1,
        current: null,
        currentFriend: null,
        start: null,
        setintervalFunction: "",
        end: null,
        startFriend: null,
        endFriend: null,
        list: [],
        haoyou_list: [],
        currentResultOne: 0,
        currentResultTwo: 0,
        loadingBoo: !0,
        moreBooOne: !0,
        moreBooTwo: !0,
        resultListTwo: [ {
            orderId: 1,
            doctorId: 1,
            patientSimpleVo: {
                userId: 1,
                userIcon: "/assets/images/head.png",
                name: "小强",
                nmGender: "男",
                age: 30
            },
            medType: 1,
            msgTxt: "哈哈",
            sessionDateBegin: "2018-10-22-14:19",
            status: "1",
            nonReadCount: "0"
        } ],
        explanBooOne: !1,
        explanBooTwo: !1
    }, (0, t.default)(e, "current", 1), (0, t.default)(e, "TeamList", [ {
        teamId: 1,
        teamName: "血液",
        teamHeaderUrl: "/assets/images/head.png",
        doctorNurseCount: 3,
        patientCount: 10,
        nonReadTipCount: 3
    }, {
        teamId: 1,
        teamName: "骨科",
        teamHeaderUrl: "/assets/images/head.png",
        doctorNurseCount: 3,
        patientCount: 10,
        nonReadTipCount: 0
    } ]), (0, t.default)(e, "nonReadBoo", !0), (0, t.default)(e, "nonReadBoo1", !0), 
    (0, t.default)(e, "if_over", 0), (0, t.default)(e, "_num", 0), e),
    tiaozhuan1: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset, a = e.currentTarget.dataset.useropenid, r = e.currentTarget.dataset.orders;
        wx.setStorage({
            key: "userinfotype",
            data: "user"
        });
        var n = e.currentTarget.dataset.u_thumb;
        wx.setStorage({
            key: "u_thumb",
            data: n
        });
        var o = wx.getStorageSync("userInfo"), s = e.currentTarget.dataset.bl_id;
        wx.setStorage({
            key: "userInfo",
            data: o
        });
        var u = e.currentTarget.dataset.z_thumbs;
        wx.setStorage({
            key: "z_thumbs",
            data: u
        });
        wx.setStorageSync("sate", 1);
        var i = e.currentTarget.dataset.docroom, l = e.currentTarget.dataset.myroom;
        wx.setStorageSync("docroom", l);
        var d = {
            myName: i,
            your: l,
            bl_id: s
        };
        wx.navigateTo({
            url: "/hyb_yl/czhuanjiasubpages/pages/chatroom/chatroom?username=" + JSON.stringify(d) + "&list=" + JSON.stringify(t) + "&z_name=" + e.currentTarget.dataset.z_name + "&useropenid=" + a + "&orders=" + r
        });
    },
    tiaozhuan2: function(e) {
        clearInterval(this.data.setinterval), wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/explanationComplete/explanationComplete?sessionId=".concat(e.currentTarget.dataset.orderId, "&doctorId=").concat(e.currentTarget.dataset.doctorId, "&userId=").concat(e.currentTarget.dataset.patientSimpleVo.userId, "&signType=").concat(e.currentTarget.dataset.medType)
        });
    },
    tiaozhuan3: function(e) {
        clearInterval(this.data.setinterval), wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/consultingTeam/consultingTeam?teamId=".concat(e.currentTarget.dataset.teamId, "&teamName=").concat(e.currentTarget.dataset.teamName)
        });
    },
    clickNum: function(e) {
        var t = e.currentTarget.dataset.num;
        this.setData({
            if_over: t
        }), this.setData({
            explanBooOne: !1,
            explanBooTwo: !1,
            moreBooOne: !0,
            moreBooTwo: !0,
            currentResultOne: 0,
            currentResultTwo: 0,
            _num: t
        }), this.getChatList();
    },
    changeTitle: function(e) {
        this.setData({
            current: e.target.dataset.current
        }), this.setData({
            explanBooOne: !1,
            explanBooTwo: !1,
            moreBooOne: !0,
            moreBooTwo: !0,
            currentResultOne: 0,
            currentResultTwo: 0
        });
    },
    reply: function(e) {
        wx.navigateTo({
            url: "/hyb_yl/backstageFollowUp/pages/explanationReply/explanationReply"
        });
    },
    onLoad: function(e) {
        if (null != e.index) {
            var t = this.data.footer;
            t.footdex = e.index, this.setData({
                footer: t
            });
        }
        this.getChatList();
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        });
    },
    onShow: function() {},
    getMore: function() {
        this.getPatient(this);
    },
    getChatList: function() {
        var e = this, t = e.data.if_over;
        a.util.request({
            url: "entry/wxapp/doctuwenlist.haoyoulistwei",
            data: {
                openid: wx.getStorageSync("openid"),
                if_over: t
            },
            success: function(t) {
                console.log(t);
                var a = t.data;
                e.setData({
                    resultListOne: a
                });
            }
        });
    },
    onUnload: function() {
        clearInterval(this.data.setinterval);
    }
});