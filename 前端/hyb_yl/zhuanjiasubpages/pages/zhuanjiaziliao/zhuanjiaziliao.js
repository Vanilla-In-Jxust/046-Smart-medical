var a, t, e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")), i = getApp();

Page((t = {
    data: (a = {
        imgs: [],
        radioIndex: 1,
        hide: !0,
        touxiang: !0,
        touxiangurl: "",
        upload_picture_list: [],
        uplogo: ""
    }, (0, e.default)(a, "imgs", []), (0, e.default)(a, "zhuce", 0), (0, e.default)(a, "array1", []), 
    (0, e.default)(a, "indexx", null), (0, e.default)(a, "array", []), (0, e.default)(a, "yiyuan", []), 
    (0, e.default)(a, "ids", []), (0, e.default)(a, "index", null), (0, e.default)(a, "date", ""), 
    (0, e.default)(a, "zhiwuindex", null), a),
    getKeshi: function() {
        var a = this;
        i.util.request({
            url: "entry/wxapp/Keshi",
            success: function(t) {
                a.setData({
                    keshi: t.data.data.name,
                    keshiid: t.data.data.id
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    formsubmit: function(a) {
        var t = this.data.id, e = wx.getStorageSync("openid"), n = a.detail.value, o = n.z_name, u = n.z_sex, l = n.z_telephone, s = n.z_yiyuan, d = n.z_zhiwu, c = n.z_content, r = this.data.uplogo, p = this.data.pid;
        return 0 == a.detail.value.z_name.length || 0 == a.detail.value.z_telephone.length ? (wx.showModal({
            content: "姓名和手机号不能为空"
        }), !1) : 0 == a.detail.value.z_yiyuan.length ? (wx.showModal({
            content: "请填写所在医院"
        }), !1) : 0 == a.detail.value.pid.length ? (wx.showModal({
            content: "请选择科室"
        }), !1) : 0 == a.detail.value.z_zhiwu.length ? (wx.showModal({
            content: "请填写真实职务"
        }), !1) : void wx.showModal({
            title: "提示",
            content: " 确认提交么？ ",
            success: function(n) {
                if (n.confirm) {
                    a.detail.value;
                    i.util.request({
                        url: "entry/wxapp/zhuanjiash",
                        data: {
                            openid: e
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(a) {
                            a.data;
                            i.util.request({
                                url: "entry/wxapp/Zimagesnew",
                                data: {
                                    id: t,
                                    z_name: o,
                                    z_sex: u,
                                    z_telephone: l,
                                    z_yiyuan: s,
                                    z_zhiwu: d,
                                    z_content: c,
                                    openid: e,
                                    z_thumbs: r,
                                    z_room: p
                                },
                                header: {
                                    "Content-Type": "application/json"
                                },
                                success: function(a) {
                                    wx.showLoading({
                                        title: "修改成功"
                                    }), setTimeout(function() {
                                        wx.hideLoading(), wx.redirectTo({
                                            url: "../my/my"
                                        });
                                    }, 800);
                                },
                                fail: function(a) {
                                    console.log(a);
                                }
                            });
                        },
                        fail: function(a) {
                            console.log(a);
                        }
                    });
                } else n.cancel && console.log("用户点击取消");
            }
        });
    },
    deletetouxiang: function() {
        this.setData({
            touxiang: !0,
            touxiangurl: ""
        });
    },
    touxiang: function() {
        var a = this, t = i.siteInfo.uniacid;
        a.data.imgs;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var i = e.tempFilePaths[0];
                wx.uploadFile({
                    url: a.data.url + "app/index.php?i=" + t + "&c=entry&a=wxapp&do=Uploads&m=hyb_yl",
                    filePath: i,
                    name: "upfile",
                    formData: {
                        path: "wxchat"
                    },
                    success: function(t) {
                        console.log(t.data), a.setData({
                            uplogo: t.data,
                            touxiangurl: i,
                            touxiang: !1
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                }), a.setData({
                    logo: i
                });
            }
        });
    },
    uploadpic: function(a) {
        var t = this, e = t.data.upload_picture_list;
        function n(a, t, e) {
            var n = i.siteInfo.uniacid, o = wx.getStorageSync("openid");
            wx.uploadFile({
                url: a.data.url + "app/index.php?i=" + n + "&c=entry&a=wxapp&do=msg_send_imgs&m=hyb_yl",
                filePath: t[e].path,
                name: "file",
                formData: {
                    path: "wxchat",
                    openid: o,
                    uniacid: n,
                    i_type: 2
                },
                success: function(i) {
                    console.log(i);
                    var n = i.data;
                    a.setData({
                        thumb: n,
                        upload_picture_list: t
                    }), console.log("图片上传" + e + "到服务器完成：");
                }
            }).onProgressUpdate(function(i) {
                t[e].upload_percent = i.progress, console.log("第" + e + "个图片上传进度：" + t[e].upload_percent), 
                console.log(t), a.setData({
                    upload_picture_list: t
                });
            });
        }
        wx.chooseImage({
            count: 8,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var i = a.tempFiles;
                for (var o in i) i[o].upload_percent = 0, i[o].path_server = "", e.push(i[o]);
                for (var u in t.setData({
                    upload_picture_list: e
                }), 3 == e.length && t.setData({
                    hide: !0
                }), e) 0 == e[u].upload_percent && n(t, e, u);
            }
        });
    },
    deleteimg: function(a) {
        var t = a.currentTarget.dataset.index, e = this.data.imgs;
        e.splice(t, 1), this.setData({
            imgs: e,
            hide: !1
        });
    },
    radio: function(a) {
        this.setData({
            radioIndex: a.detail.value
        });
    }
}, (0, e.default)(t, "getKeshi", function() {
    var a = this;
    i.util.request({
        url: "entry/wxapp/Keshi",
        success: function(t) {
            a.setData({
                keshi: t.data.data.name,
                keshiid: t.data.data.id
            });
        },
        fail: function(a) {
            console.log(a);
        }
    });
}), (0, e.default)(t, "onLoad", function(a) {
    var t = wx.getStorageSync("color");
    wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: t
    });
    var e = this, n = a.id;
    i.siteInfo.uniacid, i.siteInfo.uniacid;
    i.util.request({
        url: "entry/wxapp/url",
        cachetime: "0",
        success: function(a) {
            e.setData({
                url: a.data
            });
        }
    }), i.util.request({
        url: "entry/wxapp/Zjinfo",
        data: {
            id: n
        },
        success: function(a) {
            console.log(a);
            var t = a.data.data.z_thumb.split(";");
            t.splice(t.length - 1, 1), t.length < 3 && e.setData({
                hide: !1
            });
            var n = a.data.data.z_room;
            i.util.request({
                url: "entry/wxapp/Parentid",
                data: {
                    id: n
                },
                success: function(a) {
                    e.setData({
                        name: a.data.data.name
                    });
                }
            }), e.setData({
                userinfo: a.data.data,
                touxiangurl: a.data.data.z_thumbs,
                upload_picture_list: t
            });
        },
        fail: function(a) {
            console.log(a);
        }
    }), i.util.request({
        url: "entry/wxapp/Scurl",
        cachetime: "0",
        success: function(a) {
            e.setData({
                scurl: a.data.data
            });
        }
    });
}), (0, e.default)(t, "onReady", function() {
    this.getKeshi();
}), (0, e.default)(t, "onShow", function() {}), (0, e.default)(t, "onHide", function() {}), 
(0, e.default)(t, "onUnload", function() {}), (0, e.default)(t, "onPullDownRefresh", function() {}), 
(0, e.default)(t, "onReachBottom", function() {}), (0, e.default)(t, "onShareAppMessage", function() {}), 
(0, e.default)(t, "zhiwu", function(a) {
    var t = a.detail.value, e = this.data.getpid[t];
    this.setData({
        pid: e,
        zhiwuindex: a.detail.value
    });
}), (0, e.default)(t, "bindPickerChange1", function(a) {
    var t = this, e = a.detail.value, n = t.data.keshiid[e];
    t.data.zhiwu;
    i.util.request({
        url: "entry/wxapp/Category2",
        data: {
            id: n
        },
        success: function(a) {
            t.setData({
                zhiwuss: a.data.data.name,
                getpid: a.data.data.id,
                zhiwuindex: ""
            });
        },
        fail: function(a) {
            console.log(a);
        }
    }), t.setData({
        index: a.detail.value,
        id: n
    });
}), (0, e.default)(t, "bindPickerChange2", function(a) {
    var t = a.detail.value, e = this.data.monery, i = this.data.pid[t];
    console.log(i), this.setData({
        indexx: t,
        monerynum: e[t],
        id: i
    });
}), t));