module.exports = {
    tabbar: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tabdata", t = arguments.length > 1 ? arguments[1] : void 0, c = arguments.length > 2 ? arguments[2] : void 0, e = {}, n = [ {
            current: 0,
            pagePath: "/hyb_yl/mysubpages/pages/backstageIndex/backstageIndex",
            iconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab01.png?sign=8dac5baa41a12d59417b748688b601fe&t=1576659546",
            selectedIconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab1.png?sign=05711bfe0ee2147143177a5bd2d104fa&t=1576659581",
            text: "首页",
            color: wx.getStorageSync("color")
        }, {
            current: 0,
            pagePath: "/hyb_yl/zhuanjiasubpages/pages/backstageAdvisory/backstageAdvisory",
            iconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab03.png?sign=82b6df923219fdf65eccc6ac5c93d381&t=1576659602",
            selectedIconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab3.png?sign=384d43d4378f51b42bc7f3957a5aadeb&t=1576659621",
            text: "团队",
            color: wx.getStorageSync("color")
        }, {
            current: 0,
            pagePath: "/hyb_yl/zhuanjiasubpages/pages/backstageDsaid/backstageDsaid",
            iconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab06.png?sign=b119702b52ff057bba2440db13dce86a&t=1576668332",
            selectedIconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab6.png?sign=41f60c42e444a9446cedd0ae767fc76a&t=1576668369",
            text: "患教",
            color: wx.getStorageSync("color")
        }, {
            current: 0,
            pagePath: "/hyb_yl/zhuanjiasubpages/pages/backstageMy/backstageMy",
            iconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab05.png?sign=3df4d3a7f99605ca7fd69b30c72f05ca&t=1576659702",
            selectedIconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab5.png?sign=861db75fa78f8fb67fac0b1caa962fd7&t=1576659676",
            text: "我的",
            color: wx.getStorageSync("color")
        } ];
        n[t].iconPath = n[t].selectedIconPath, n[t].current = 1, e[a] = n, c.setData({
            bindData: e
        });
    }
};