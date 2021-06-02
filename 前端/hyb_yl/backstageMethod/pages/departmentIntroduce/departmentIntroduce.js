var e = getApp();

Page({
    data: {
        famous: [ {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 0,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 1,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 1,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 0,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 0,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 0,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 0,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        }, {
            img: "/assets/images/wei.jpg",
            name: "小花",
            state: 0,
            department: "骨科",
            title: "主治医师",
            where: "山西大医院",
            people: "10",
            branch: "5",
            introduce: "专业接骨20年"
        } ]
    },
    open: function() {
        e.data.whichPage = 0;
    },
    onLoad: function(e) {
        var t = this.data.famous, a = e.nksid;
        this.setData({
            nksid: a
        });
        for (var n = 0; n < t.length; n++) t[n].introduce.length > 30 && (t[n].introduce = t[n].introduce.substring(0, 30) + "...");
        this.getAllkeshidoc();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getAllkeshidoc: function() {
        var t = this, a = t.data.nksid;
        e.util.request({
            url: "entry/wxapp/address",
            data: {
                op: "keshidoc",
                nksid: a
            },
            success: function(e) {
                console.log(e), t.setData({
                    keshidoc: e.data
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    }
});