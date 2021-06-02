module.exports = {
    tabbar: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tabdata", a = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length > 2 ? arguments[2] : void 0, c = {}, n = [ {
            current: 1,
            pagePath: "/hyb_yl/lvtongserver/pages/index/index",
            iconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab01.png?sign=8dac5baa41a12d59417b748688b601fe&t=1576659546",
            selectedIconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab1.png?sign=05711bfe0ee2147143177a5bd2d104fa&t=1576659581",
            text: "首页",
            color: wx.getStorageSync("color")
        }, {
            current: 1,
            pagePath: "/hyb_yl/lvtongserver/pages/capitacenter/capitacenter",
            iconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab03.png?sign=82b6df923219fdf65eccc6ac5c93d381&t=1576659602",
            selectedIconPath: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/myImg/icon/tab3.png?sign=384d43d4378f51b42bc7f3957a5aadeb&t=1576659621",
            text: "结算",
            color: wx.getStorageSync("color")
        } ];
        n[a].iconPath = n[a].selectedIconPath, n[a].current = 1, c[t] = n, e.setData({
            bindData: c
        });
    }
};