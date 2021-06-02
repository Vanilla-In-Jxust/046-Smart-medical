module.exports = {
    tabbar: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tabdata", t = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 ? arguments[2] : void 0, s = {}, n = [ {
            current: 0,
            pagePath: "/hyb_yl/index/index",
            iconPath: "/assets/images/a1.png",
            selectedIconPath: "/assets/images/a1on.png",
            text: "首页"
        }, {
            current: 0,
            pagePath: "/hyb_yl/advisory/advisory",
            iconPath: "/assets/images/a2.png",
            selectedIconPath: "/assets/images/a2on.png",
            text: "资讯"
        }, {
            current: 0,
            pagePath: "/hyb_yl/community/community",
            iconPath: "/assets/images/a2.png",
            selectedIconPath: "/assets/images/a2on.png",
            text: "分享"
        }, {
            current: 0,
            pagePath: "/hyb_yl/profile/profile",
            iconPath: "/assets/images/a4.png",
            selectedIconPath: "/assets/images/a4on.png",
            text: "我的"
        } ];
        n[t].iconPath = n[t].selectedIconPath, n[t].current = 1, s[e] = n, a.setData({
            bindData: s
        });
    }
};