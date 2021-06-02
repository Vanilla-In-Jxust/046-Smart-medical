var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

getApp();

Page({
    data: {
        items: [ {
            name: "日常疾病和健康咨询",
            value: "日常疾病和健康咨询",
            checked: !1
        }, {
            name: "可根据病情提供就诊前/就诊后指导",
            value: "可根据病情提供就诊前/就诊后指导",
            checked: !1
        }, {
            name: "可根据病情提供住院前/住院后指代",
            value: "可根据病情提供住院前/住院后指代",
            checked: !1
        }, {
            name: "可根据病情提供术前/术后指代",
            value: "可根据病情提供术前/术后指代",
            checked: !1
        }, {
            name: "诊后治疗和康复相关问题",
            value: "诊后治疗和康复相关问题",
            checked: !1
        }, {
            name: "其他",
            value: "其他",
            checked: !1,
            textarea: ""
        } ],
        citems: [ {
            name: "已读并同意购买须知",
            value: "已读并同意购买须知",
            checked: !1
        } ],
        indexnum: 0,
        textkey: !1,
        trandata: []
    },
    checkboxChange: function(e) {
        console.log("checkbox发生change事件，携带value值为：", e.detail.value), e.detail.value.length >= 3 && wx.showToast({
            title: "最多选择三项",
            icon: "none",
            mask: !0
        });
    },
    changeitem: function(t) {
        var a = t.currentTarget.dataset.index, c = "items[".concat(a, "].checked");
        this.setData((0, e.default)({}, c, !this.data.items[a].checked)), 1 == this.data.items[5].checked ? (console.log(1212e3), 
        this.setData({
            textkey: !0
        })) : this.setData({
            textkey: !1
        });
    },
    checkboxChanges: function(e) {
        console.log("checkbox发生change事件，携带value值为：", e.detail.value);
    },
    changeitems: function() {
        this.setData((0, e.default)({}, "citems[0].checked", !this.data.citems[0].checked));
    },
    getext: function(t) {
        this.setData((0, e.default)({}, "items[5].textarea", t.detail.value));
    },
    nextpage: function() {
        var e = this.data.items;
        if (0 == this.data.citems[0].checked) return wx.showToast({
            title: "请同意协议",
            icon: "none",
            mask: !0
        }), !1;
        for (var t = 0; t < e.length; t++) {
            if (1 == e[t].checked) return wx.setStorageSync("items", this.data.items), wx.navigateTo({
                url: "/hyb_yl/czhuanjiasubpages/pages/perdocinfo/index"
            }), !1;
            wx.showToast({
                title: "请选择您希望得到的帮助",
                icon: "none"
            });
        }
    },
    onLoad: function() {}
});