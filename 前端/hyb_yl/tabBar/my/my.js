var a = getApp();

Page({
    data: {
        exa: "",
        zid: "",
        twitters: 1,
        state: 1,
        cpm: !0,
        myList: [ {
            num: 10,
            title: "关注医生",
            url: "/hyb_yl/mycenter/pages/followDoc/followDoc"
        }, {
            num: 10,
            title: "关注团队",
            url: "/hyb_yl/mycenter/pages/followDoc/followDoc"
        }, {
            num: 10,
            title: "优惠券",
            url: "/hyb_yl/mycenter/pages/myCoupon/myCoupon"
        }, {
            num: 10,
            title: "我的医说",
            url: "/hyb_yl/mycenter/pages/myMedical/myMedical"
        } ],
        mytabList1: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab1-1.png?sign=b80240242a53ba4878083404f47ec38d&t=1590656631",
            title: "电话问诊",
            keywords: "dianhuajizhen"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab1-2.png?sign=99a85b9298de40f6b864ee1c6213476b&t=1590656645",
            title: "视频问诊",
            keywords: "shipinwenzhen"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab1-3.png?sign=19f21e5a6f0355041ce10e90237ef441&t=1590656661",
            title: "开药问诊",
            keywords: "yuanchengkaifang"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab1-4.png?sign=abd9c4b19d75c4a8c0b58a932c1b3ca7&t=1590656671",
            title: "图文问诊",
            keywords: "tuwenwenzhen"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab1-5.png?sign=666ad320e7a37608b78c218703d15009&t=1590656684",
            title: "快速问诊",
            keywords: "kuaisuwenzhen"
        } ],
        mytabList2: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-1.png?sign=aab082b156c33de39e13d56ac8fa66d8&t=1590656697",
            title: "体检订单",
            url: "/hyb_yl/mysubpages/pages/physicalOrder/physicalOrder"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-2.png?sign=e9d52386cf7065efadab59bdc991fc5b&t=1590656712",
            title: "药品订单",
            url: "/hyb_yl/userCommunicate/pages/order/order"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-3.png?sign=83de21073705a69af717615f64e5d272&t=1590656730",
            title: "签约订单",
            url: "/hyb_yl/userCommunicate/pages/recordSigning/recordSigning"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-4.png?sign=7cf8799f8b21e64205f0894a87ca1915&t=1590656740",
            title: "挂号订单",
            url: "/hyb_yl/mysubpages/pages/my_dingdan1/my_dingdan1"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-5.png?sign=1963ec65d389a59245f9eabb59834dbc&t=1590656750",
            title: "课程订单",
            url: "/hyb_yl/mycenter/pages/currOrder/currOrder"
        } ],
        mytabList3: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-1.png?sign=aab082b156c33de39e13d56ac8fa66d8&t=1590656697",
            title: "报告加急",
            url: "/hyb_yl/lvtongserver/pages/orderlist/orderlist?keyword=baogaojiaji"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-2.png?sign=e9d52386cf7065efadab59bdc991fc5b&t=1590656712",
            title: "手术安排",
            url: "/hyb_yl/lvtongserver/pages/wodezixun/wodezixun?keyword=shoushuanpai"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-3.png?sign=83de21073705a69af717615f64e5d272&t=1590656730",
            title: "预约就诊",
            url: "/hyb_yl/lvtongserver/pages/wodezixun/wodezixun?keyword=yuyuejiuzhen"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab2-4.png?sign=7cf8799f8b21e64205f0894a87ca1915&t=1590656740",
            title: "住院安排",
            url: "/hyb_yl/lvtongserver/pages/wodezixun/wodezixun?keyword=zhuyuananpai"
        } ],
        myorder: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab3-1.png?sign=b048ee896ca5f4bf7fa2723b6273d5b6&t=1590656773",
            title: "报告解读"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab3-2.png?sign=8d1a9bc34d2bca74f3cf3f663862e48d&t=1590656790",
            title: "手术安排"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab3-3.png?sign=b9cc6dbc84915b7fa961a65ffd3ef317&t=1590656882",
            title: "医生卡"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab3-4.png?sign=6104772179e56683dbe25ed745bcee4a&t=1590656977",
            title: "我的动态"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab3-5.png?sign=b8e20d3aece328180578f05892abdad0&t=1590656984",
            title: "我的患教"
        } ],
        myadmin: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab4-1.png?sign=e8b1a559c77f0daf7087d711f1001850&t=1590656995",
            title: "健康档案",
            type: 1
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab4-2.png?sign=691a191b6943f1c462e65da6dde5ba08&t=1590657008",
            title: "我的报告",
            type: 2
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab4-3.png?sign=7c751b50039009a403139eb39b92973b&t=1590657017",
            title: "报告对比",
            type: 3
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab4-4.png?sign=bb730bd1befd15db004fe00db517a47f&t=1590657033",
            title: "健康分析",
            type: 4
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab4-5.png?sign=5b95ecb3bbe3a5fdf487b49eb2d39386&t=1590657040",
            title: "我的处方",
            type: 5
        } ],
        myservice: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab5-1.png?sign=851388d4a0a32eb684c3f0ab010d2181&t=1590657050",
            title: "我的优惠券"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab5-2.png?sign=e4fef8d7cf7940b43c47defc7e28508d&t=1590657059",
            title: "我的会员卡"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab5-3.png?sign=d1d4cd8dec16ca8c6c36475f481703fd&t=1590657068",
            title: "私人医生"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab5-4.png?sign=222e45174c6ce6af74f70807017657aa&t=1590657076",
            title: "免费兑礼"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab5-5.png?sign=4286a1cf2554f253d89f73d643d89a47&t=1590657084",
            title: "专属客服"
        } ],
        mytool: [ {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab6-1.png?sign=787faa192acaf30a521beb20fc2d6534&t=1590657096",
            title: "专家入口"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab6-2.png?sign=25bc240725581054a8da2b5016ec69f8&t=1590657103",
            title: "机构入口"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab6-3.png?sign=c20d8ab818c1df19247511e8a13db615&t=1590657111",
            title: "推客入口"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab6-4.png?sign=37770ae07fcc6b6e3f3bf5c4db03e579&t=1590657120",
            title: "设置"
        }, {
            image: "https://6a69-jin5201-a4503e-1257013711.tcb.qcloud.la/%E6%96%B0%E7%89%88%E5%8C%BB%E7%96%97icon/mytab6-5.png?sign=0911eb9567dc4947cb29a71ebddb54b3&t=1590657129",
            title: "导诊入口"
        } ],
        footer: {
            footerTab: 5,
            footerlist: [ {
                text: "首页",
                img: "/hyb_yl/images/tab01.png",
                selimg: "/hyb_yl/images/tab1.png",
                url: "/hyb_yl/tabBar/index/index"
            }, {
                text: "资讯",
                img: "/hyb_yl/images/tab02.png",
                selimg: "/hyb_yl/images/tab2.png",
                url: "/hyb_yl/tabBar/jibingyufang/jibingyufang"
            }, {
                text: "分享",
                img: "/hyb_yl/images/tab03.png",
                selimg: "/hyb_yl/images/tab3.png",
                url: "/hyb_yl/tabBar/community/community"
            }, {
                text: "药房",
                img: "/hyb_yl/images/tab04.png",
                selimg: "/hyb_yl/images/tab4.png",
                url: "/hyb_yl/tabBar/shop/shop"
            }, {
                text: "问诊",
                img: "/hyb_yl/images/tab04.png",
                selimg: "/hyb_yl/images/tab4.png",
                url: "/hyb_yl/tabBar/fastnavigate/fastnavigate"
            }, {
                text: "我的",
                img: "/hyb_yl/images/tab05.png",
                selimg: "/hyb_yl/images/tab5.png",
                url: "/hyb_yl/tabBar/my/my"
            } ]
        }
    },
    iconlist: function(a) {
        var e = a.currentTarget.dataset.url;
        wx.navigateTo({
            url: e
        });
    },
    wodeWenzhen: function(a) {
        var e = a.currentTarget.dataset.keywords;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?type=wenzhen&key_words=" + e
        });
    },
    servelist: function(a) {
        var e = a.currentTarget.dataset.tit;
        a.currentTarget.dataset.type;
        if ("报告解读" == e) wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/unscramble/unscramble"
        }); else if ("手术安排" == e) wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/wodezixun/wodezixun?type=shoushu&key_words=shoushukuaiyue"
        }); else if ("医生卡" == e) wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/yearcardlist/yearcardlist"
        }); else if ("我的动态" == e) wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/myTidings/myTidings"
        }); else if ("我的患教" == e) wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/myMedical/myMedical"
        }); else if ("健康档案" == e) wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/huanzhexinxi/huanzhexinxi?type=1&gren=1"
        }); else if ("我的报告" == e) wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/report/report"
        }); else if ("报告对比" == e) wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/report/report"
        }); else if ("健康分析" == e) wx.showToast({
            title: "开发中...",
            icon: "none"
        }); else if ("我的处方" == e) wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/my_hzprescription/my_hzprescription"
        }); else if ("我的优惠券" == e) wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/myCoupon/myCoupon"
        }); else if ("我的会员卡" == e) wx.navigateTo({
            url: "/hyb_yl/backstageServices/pages/vip/vip"
        }); else if ("私人医生" == e) wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/followDoc/followDoc?typs=siren_doc"
        }); else if ("免费兑礼" == e) wx.showToast({
            title: "开发中...",
            icon: "none"
        }); else if ("邀请有礼" == e) wx.showToast({
            title: "开发中...",
            icon: "none"
        }); else if ("专家入口" == e) console.log(this.data.zid), "" == this.data.zid || 0 == this.data.exa || 2 == this.data.exa || "undefined" == this.data.zid || null == this.data.zid ? wx.navigateTo({
            url: "/hyb_yl/backstageOther/pages/myRenZheng/myRenZheng?zid=" + this.data.zid + "&exa=" + this.data.exa
        }) : wx.reLaunch({
            url: "/hyb_yl/mysubpages/pages/backstageIndex/backstageIndex"
        }); else if ("机构入口" == e) 1 == this.data.state ? wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/Organ/Organ"
        }) : wx.navigateTo({
            url: "/hyb_yl/mycenter/pages/organApply/organApply"
        }); else if ("推客入口" == e) wx.showToast({
            title: "开发中...",
            icon: "none"
        }); else if ("导诊入口" == e) {
            this.data.info.is_daozhen ? wx.navigateTo({
                url: "/hyb_yl/lvtongserver/pages/index/index"
            }) : wx.showToast({
                title: "您暂未成为绿通人员",
                icon: "none"
            });
        } else if ("药师入口" == e) {
            this.data.info.is_yaoshi ? wx.navigateTo({
                url: "/hyb_yl/yaoshi/pages/index/index"
            }) : wx.showToast({
                title: "您暂未成为药师",
                icon: "none"
            });
        }
    },
    onLoad: function(e) {
        this.getfooter();
        var t = this, i = e.index;
        t.setData({
            index: i
        }), a.util.request({
            url: "entry/wxapp/user.info",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), t.setData({
                    phone: a.data.u_phone,
                    info: a.data
                });
            }
        }), a.util.request({
            url: "entry/wxapp/user.getcenter",
            data: {
                type: 0
            },
            success: function(a) {
                t.setData({
                    server: a.data
                });
            }
        });
        var n = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: n
        });
    },
    link: function(a) {
        var e = a.currentTarget.dataset.url;
        a.currentTarget.dataset.title;
        "" != e ? wx.navigateTo({
            url: e
        }) : wx.showToast({
            title: "开发中...",
            icon: "none"
        });
    },
    onReady: function() {
        this.getjigouif();
    },
    onShow: function() {
        this.getIfdoc();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var a = wx.getStorageSync("color");
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: a
        }), this.getBase(), this.getMyvt(), this.getKeshi(), wx.showNavigationBarLoading(), 
        setTimeout(function() {
            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        }, 1e3);
    },
    onReachBottom: function() {},
    getMyxfjl: function() {
        var e = this, t = wx.getStorageSync("openid"), i = a.siteInfo.uniacid;
        a.util.request({
            url: "entry/wxapp/Myxfjl",
            data: {
                openid: t,
                uniacid: i
            },
            success: function(a) {
                e.setData({
                    myxfjl: a.data.data
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    getMyvt: function() {
        var e = this, t = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/myvt",
            data: {
                openid: t
            },
            success: function(a) {
                e.setData({
                    myvt: a.data.data,
                    openid: t
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    bindPickerChange1: function(e) {
        var t = this, i = e.detail.value, n = t.data.keshiid[i];
        console.log(n);
        var o = t.data.zhiwu[i];
        a.util.request({
            url: "entry/wxapp/Category2",
            data: {
                id: n
            },
            success: function(a) {
                console.log(a), t.setData({
                    zhiwuss: a.data.data.name,
                    pid: a.data.data.id
                });
            },
            fail: function(a) {
                console.log(a);
            }
        }), t.setData({
            index: e.detail.value,
            id: n,
            zhiwuss: o
        });
    },
    bindPickerChange2: function(a) {
        var e = a.detail.value, t = this.data.monery, i = this.data.pid[e];
        console.log(i), this.setData({
            indexx: e,
            monerynum: t[e],
            id: i
        });
    },
    bindPickerChange: function(a) {
        this.setData({
            index: a.detail.value
        });
    },
    switchChange: function(a) {
        console.log("switch1 发生 change 事件，携带值为", a.detail.value);
    },
    radio: function(a) {
        var e = a.detail.value;
        this.setData({
            radioIndex: a.detail.value,
            ky_sex: e
        });
    },
    getBase: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/Base",
            success: function(a) {
                e.setData({
                    baseinfo: a.data.data,
                    bq_thumb: a.data.data.bq_thumb,
                    bq_name: a.data.data.bq_name
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    getKeshi: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/Keshi",
            success: function(a) {
                e.setData({
                    keshi: a.data.data.name,
                    keshiid: a.data.data.id
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    uploadpic: function(e) {
        var t = this, i = t.data.upload_picture_list;
        function n(e, t, i) {
            var n = a.siteInfo.uniacid, o = wx.getStorageSync("openid");
            wx.uploadFile({
                url: e.data.url + "app/index.php?i=" + n + "&c=entry&a=wxapp&do=msg_send_imgs&m=hyb_yl",
                filePath: t[i].path,
                name: "file",
                formData: {
                    path: "wxchat",
                    openid: o,
                    uniacid: n,
                    i_type: 2
                },
                success: function(a) {
                    var i = a.data;
                    e.setData({
                        thumb: i,
                        upload_picture_list: t
                    });
                }
            }).onProgressUpdate(function(a) {
                t[i].upload_percent = a.progress, e.setData({
                    upload_picture_list: t
                });
            });
        }
        wx.chooseImage({
            count: 3,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFiles;
                for (var o in e) e[o].upload_percent = 0, e[o].path_server = "", i.push(e[o]);
                for (var s in t.setData({
                    upload_picture_list: i
                }), 3 == i.length && t.setData({
                    hide: !0
                }), i) 0 == i[s].upload_percent && n(t, i, s);
            }
        });
    },
    toast: function() {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/index/index"
        });
    },
    toast1: function(a) {
        wx.redirectTo({
            url: "/hyb_yl/tabBar/community/community"
        });
    },
    toast2: function() {
        wx.redirectTo({
            url: "/hyb_yl/mysubpages/pages/shop/shop"
        });
    },
    toast3: function() {
        var e = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/Myphone",
            data: {
                openid: e
            },
            success: function(t) {
                a.globalData.myphone = t.data.data, a.globalData.openid = e;
            },
            fail: function(a) {
                console.log(a);
            }
        }), setTimeout(function() {
            wx.redirectTo({
                url: "/hyb_yl/tabBar/my/my"
            });
        }, 350);
    },
    toast4: function() {
        wx.redirectTo({
            url: "/hyb_yl/userLife/pages/jibingyufang/jibingyufang"
        });
    },
    MyJifen: function() {
        wx.navigateTo({
            url: "/hyb_yl/backstageLifes/pages/integral/integral"
        });
    },
    erClick: function() {
        0 == this.data.myxfjl.u_type ? wx.showToast({
            title: "暂无核销权限"
        }) : wx.showActionSheet({
            itemList: [ "预约核销" ],
            success: function(a) {
                0 == a.tapIndex && wx.navigateTo({
                    url: "/hyb_yl/zhuanjiasubpages/pages/hexiao/hexiao"
                });
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        });
    },
    chufang: function(e) {
        console.log(e);
        var t = this.data.myzhuan, i = e.detail.formId, n = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/UserFormId",
            data: {
                form_id: i,
                openid: n
            },
            success: function(a) {
                console.log(a), wx.navigateTo({
                    url: "/hyb_yl/userLife/pages/my_prescription/my_prescription?id=" + t.zid
                });
            }
        });
    },
    daClick: function(e) {
        var t = this.data.myzhuan;
        console.log(t);
        var i = e.detail.formId, n = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/UserFormId",
            data: {
                form_id: i,
                openid: n
            },
            success: function(a) {
                console.log(a), wx.navigateTo({
                    url: "/hyb_yl/userLife/pages/wodehuida/wodehuida?zid=" + t.zid
                });
            }
        });
    },
    zhuanDataClick: function() {
        var a = this.data.myzhuan;
        wx.navigateTo({
            url: "/hyb_yl/zhuanjiasubpages/pages/zhuanjiaziliao/zhuanjiaziliao?id=" + a.zid
        });
    },
    zhuanWenClick: function() {
        var a = this.data.myzhuan;
        wx.navigateTo({
            url: "/hyb_yl/userLife/pages/wentijine/wentijine?zid=" + a.zid
        });
    },
    liaoClick: function() {
        var a = this.data.myzhuan;
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/guanzhuwode/guanzhuwode?zid=" + a.zid
        });
    },
    lipeiClick: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/zhuan_huan/zhuan_huan"
        });
    },
    getIfdoc: function() {
        var e = this, t = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/zhuanjia.ifzj",
            data: {
                openid: t
            },
            success: function(a) {
                console.log(a), a.data ? e.setData({
                    zid: a.data.zid,
                    exa: a.data.exa
                }) : e.setData({
                    zid: 0
                });
            }
        });
    },
    Mykchufang: function() {
        wx.navigateTo({
            url: "/hyb_yl/mysubpages/pages/my_hzprescription/my_hzprescription"
        });
    },
    kt: function(e) {
        var t = this, i = t.data.my_id;
        if (0 == e.detail.value) var n = 0;
        if (1 == e.detail.value) n = 1;
        a.util.request({
            url: "entry/wxapp/Myswitch1Change",
            data: {
                my_id: i,
                mydatype: n,
                op: "post"
            },
            success: function(a) {
                console.log(a), e.detail.value ? t.setData({
                    flag: 1
                }) : t.setData({
                    flag: 0
                });
            }
        });
    },
    getMyswitch1Change: function(e) {
        var t = this;
        a.util.request({
            url: "entry/wxapp/Myswitch1Change",
            data: {
                my_id: e,
                op: "display"
            },
            success: function(a) {
                console.log(a), 0 == a.data.mydatype && t.setData({
                    authStateBoo: !1
                }), 1 == a.data.mydatype && t.setData({
                    authStateBoo: !0
                });
            }
        });
    },
    getMyifkefu: function() {
        var e = this, t = wx.getStorageSync("openid");
        a.util.request({
            url: "entry/wxapp/Kfuid",
            success: function(a) {
                console.log(a), a.data.openid == t ? e.setData({
                    ifkefu: 1
                }) : e.setData({
                    ifkefu: 0
                });
            }
        });
    },
    getfooter: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/index.footerlist",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a);
                var t = {
                    footerTab: e.data.index,
                    footerlist: a.data
                };
                e.setData({
                    footer: t
                });
            }
        });
    },
    getPhoneNumber: function(e) {
        console.log(e);
        var t = this, i = (e.detail.errMsg, e.detail.iv, e.detail.encryptedData, wx.getStorageSync("code")), n = wx.getStorageSync("sessionKey");
        console.log(n, i), "getPhoneNumber:fail user deny" == e.detail.errMsg ? wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "未授权",
            success: function(a) {}
        }) : a.util.request({
            url: "entry/wxapp/user.mdpwd",
            data: {
                iv: e.detail.iv,
                code: i,
                sessionKey: n,
                encryptedData: e.detail.encryptedData
            },
            success: function(e) {
                if (console.log(e), "1" == e.data.gstage) {
                    var i = JSON.parse(e.data.rdata);
                    console.log(i);
                    var n = i.phoneNumber;
                    a.util.request({
                        url: "entry/wxapp/user.updatephone",
                        data: {
                            openid: wx.getStorageSync("openid"),
                            u_phone: n
                        },
                        success: function(a) {
                            console.log(a);
                        }
                    }), t.setData({
                        phone: i.phoneNumber
                    }), wx.showToast({
                        title: "绑定手机号码成功!",
                        icon: "none"
                    });
                }
            }
        });
    },
    getjigouif: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/regin.jigouif",
            data: {
                openid: wx.getStorageSync("openid")
            },
            success: function(a) {
                console.log(a), e.setData({
                    state: a.data.state
                });
            }
        });
    }
});