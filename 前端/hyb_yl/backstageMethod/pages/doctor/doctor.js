var a = getApp();

Page({
    data: {
        qyshow: !0,
        provinceListIndex: 0,
        local: "选择地区",
        department: "选择科室",
        Title: "选择职称",
        screen: "筛选",
        regionName: "区域",
        sectionName: "科室",
        hospitalName: "医院名称",
        i: 0,
        hospitalList: [ {
            name: "山西大医院"
        }, {
            name: "武警医院"
        }, {
            name: "山大医院"
        }, {
            name: "煤炭医院"
        }, {
            name: "儿童医院"
        }, {
            name: "儿童医院"
        }, {
            name: "儿童医院"
        } ],
        input: "",
        arr: [],
        departments: [ "内科", "外科", "儿科", "妇科", "眼科", "耳鼻喉科", "口腔科", "皮肤科", "中医科", "针灸推拿科", "呼吸内科", "消化内科", "泌尿内科", "心内科", "血液科", "内分泌科", "神经内科", "小儿科", "感染科", "普外科", "骨科", "神经外科", "肝胆外科", "泌尿外科", "烧伤科", "妇科", "产科" ],
        Titles: [ "主治医师", "主任医师", "副主任医师", "住院医师" ],
        screens: [ "4-5", "3-4", "2-3", "1-2" ]
    },
    select: function(t) {
        var e = this;
        t.currentTarget.dataset.id;
        if (1 == t.currentTarget.dataset.id) {
            e.data.qyshow, e.data.pxshow, e.data.nzshow;
            a.util.request({
                url: "entry/wxapp/address",
                data: {
                    op: "quyu"
                },
                success: function(t) {
                    console.log(t);
                    t.data;
                    e.setData({
                        provinceList: t.data,
                        selectIndex: 1,
                        qyshow: !e.data.qyshow,
                        pxshow: !0,
                        nzshow: !0
                    });
                },
                fail: function(t) {
                    console.log(t);
                }
            });
        }
        if (2 == t.currentTarget.dataset.id) {
            e.data.qyshow;
            var n = e.data.pxshow;
            e.data.nzshow;
            e.setData({
                selectIndex: 2,
                pxshow: !n,
                qyshow: !0,
                nzshow: !0
            });
        }
        if (3 == t.currentTarget.dataset.id) {
            e.data.qyshow, e.data.pxshow, e.data.nzshow;
            e.setData({
                selectIndex: 3,
                nzshow: !e.data.nzshow,
                pxshow: !0,
                qyshow: !0
            });
        }
    },
    selectPartsAll: function(t) {
        console.log(t);
        o.default.selectPartsAll(t, this);
    },
    selectParts: function(t) {
        console.log(t), this.setData({
            provinceIndex: t.target.dataset.index,
            provinceListIndex: t.target.dataset.index
        });
    },
    selectHosptalAll: function(t) {
        o.default.selectHosptalAll(t, this);
    },
    selectHosptal: function(t) {
        var a = t.currentTarget.dataset.hospital;
        this.setData({
            hospitalName: a,
            pxshow: !0
        });
    },
    selectCity: function(t) {
        var e = this, n = t.currentTarget.dataset.city, o = t.currentTarget.dataset.id;
        1 == e.data.selectIndex && a.util.request({
            url: "entry/wxapp/address",
            data: {
                op: "yiyuan",
                par_id: o
            },
            success: function(t) {
                console.log(o), console.log(t), e.setData({
                    hospitalList: t.data,
                    qyshow: !0
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.setData({
            qyshow: !0,
            selectIndex: 0,
            regionName: n
        });
    },
    option: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id;
        this.setData({
            i: a
        });
    },
    input: function(t) {
        console.log(t.detail.value), this.setData({
            input: t.detail.value
        });
    },
    grabble: function() {
        var a = this;
        if ("" == a.data.input) wx.showToast({
            title: "请输入医生名字",
            icon: "none",
            duration: 1e3
        }); else {
            var e = wx.getStorageSync("log") || "";
            wx.request({
                url: t.globalData.dic + "doctor/manage/searchMyPatient",
                data: {
                    token: e,
                    keyWord: wx.getStorageSync("input") || ""
                },
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    console.log(t.data.data), 0 == t.data.data.length ? wx.showToast({
                        title: "查无此人",
                        icon: "none",
                        duration: 2e3
                    }) : a.setData({
                        arr: t.data.data
                    });
                }
            });
        }
    },
    bindRegionChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            local: t.detail.value[2]
        });
    },
    bindRegionChange2: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var a = t.detail.value, e = this.data.departments[a];
        this.setData({
            department: e
        });
    },
    bindRegionChange3: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var a = t.detail.value, e = this.data.Titles[a];
        this.setData({
            Title: e
        });
    },
    bindRegionChange4: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var a = t.detail.value, e = this.data.screens[a];
        this.setData({
            screen: e
        });
    },
    choice: function() {},
    onLoad: function(t) {
        for (var a = this.data.arr, e = 0; e < a.length; e++) a[e].good.length > 20 && (a[e].good = a[e].good.substr(0, 20) + "...");
        this.getAllzhuanjia();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getAllzhuanjia: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/Zhuanjia",
            success: function(a) {
                console.log(a);
                var e = a.data.data;
                t.setData({
                    zhuanjia: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});