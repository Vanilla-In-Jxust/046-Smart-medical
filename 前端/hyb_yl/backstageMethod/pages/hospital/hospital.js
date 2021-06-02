Page({
    data: {
        local: "选择地区",
        department: "评分",
        screen: "筛选",
        i: 0,
        screens: [ "一级医院甲等", "一级医院乙等", "一级医院丙等", "二级医院甲等", "二级医院乙等", "二级医院丙等", "三级医院特等", "三级医院甲等", "三级医院乙等", "三级医院丙等" ],
        departments: [ "4-5", "3-4", "2-3", "1-2" ],
        lists: [ {
            name: "山西大医院",
            img: "/assets/images/wei.jpg",
            grade: "一级医院甲等",
            type: "综合医院",
            score: "5",
            amount: "5000",
            situation: "自有",
            distance: "111",
            branch: "10"
        }, {
            name: "山西大医院",
            img: "/assets/images/wei.jpg",
            grade: "一级医院甲等",
            type: "综合医院",
            score: "5",
            amount: "5000",
            situation: "自有",
            distance: "111",
            branch: "10"
        }, {
            name: "山西大医院",
            img: "/assets/images/wei.jpg",
            grade: "一级医院甲等",
            type: "综合医院",
            score: "5",
            amount: "5000",
            situation: "自有",
            distance: "111",
            branch: "10"
        }, {
            name: "山西大医院",
            img: "/assets/images/wei.jpg",
            grade: "一级医院甲等",
            type: "综合医院",
            score: "5",
            amount: "5000",
            situation: "自有",
            distance: "111",
            branch: "10"
        } ]
    },
    option: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.id;
        this.setData({
            i: a
        });
    },
    bindRegionChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            local: e.detail.value[2]
        });
    },
    bindRegionChange2: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value);
        var a = e.detail.value, n = this.data.departments[a];
        this.setData({
            department: n
        });
    },
    bindRegionChange4: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value);
        var a = e.detail.value, n = this.data.screens[a];
        this.setData({
            screen: n
        });
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});