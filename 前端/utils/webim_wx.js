var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/typeof"));

module.exports = function() {
    "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
        for (var t = 0; t < this.length; t++) e.apply(this, [ this[t], t, this ]);
    });
    var t = {}, n = {
        login: function(e, t, n) {},
        syncMsgs: function(e, t) {},
        getC2CHistoryMsgs: function(e, t, n) {},
        syncGroupMsgs: function(e, t, n) {},
        sendMsg: function(e, t, n) {},
        logout: function(e, t) {},
        setAutoRead: function(e, t, n) {},
        getProfilePortrait: function(e, t, n) {},
        setProfilePortrait: function(e, t, n) {},
        applyAddFriend: function(e, t, n) {},
        getPendency: function(e, t, n) {},
        deletePendency: function(e, t, n) {},
        responseFriend: function(e, t, n) {},
        getAllFriend: function(e, t, n) {},
        deleteFriend: function(e, t, n) {},
        addBlackList: function(e, t, n) {},
        getBlackList: function(e, t, n) {},
        deleteBlackList: function(e, t, n) {},
        uploadPic: function(e, t, n) {},
        createGroup: function(e, t, n) {},
        applyJoinGroup: function(e, t, n) {},
        handleApplyJoinGroup: function(e, t, n) {},
        deleteApplyJoinGroupPendency: function(e, t, n) {},
        quitGroup: function(e, t, n) {},
        getGroupPublicInfo: function(e, t, n) {},
        getGroupInfo: function(e, t, n) {},
        modifyGroupBaseInfo: function(e, t, n) {},
        destroyGroup: function(e, t, n) {},
        getJoinedGroupListHigh: function(e, t, n) {},
        getGroupMemberInfo: function(e, t, n) {},
        addGroupMember: function(e, t, n) {},
        modifyGroupMember: function(e, t, n) {},
        forbidSendMsg: function(e, t, n) {},
        deleteGroupMember: function(e, t, n) {},
        getPendencyGroup: function(e, t, n) {},
        getPendencyReport: function(e, t, n) {},
        getPendencyGroupRead: function(e, t, n) {},
        sendCustomGroupNotify: function(e, t, n) {},
        Msg: function(e, t, n, o, r, i, s, u, a) {},
        MsgStore: {
            sessMap: function() {
                return {};
            },
            sessCount: function() {
                return 0;
            },
            sessByTypeId: function(e, t) {
                return {};
            },
            delSessByTypeId: function(e, t) {
                return !0;
            },
            resetCookieAndSyncFlag: function() {},
            downloadMap: {}
        }
    };
    return function(n) {
        var o = "1.7.2", r = "537048168", i = "10", s = !0, u = {
            FORMAL: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            },
            TEST: {
                COMMON: "https://test.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            }
        }, a = {}, c = "openim", l = "group_open_http_svc", p = "sns", f = "profile", d = "recentcontact", g = "openpic", m = "group_open_http_noauth_svc", I = "group_open_long_polling_http_noauth_svc", M = "imopenstat", y = "recentcontact", _ = "webim", h = {
            openim: "v4",
            group_open_http_svc: "v4",
            sns: "v4",
            profile: "v4",
            recentcontact: "v4",
            openpic: "v4",
            group_open_http_noauth_svc: "v1",
            group_open_long_polling_http_noauth_svc: "v1",
            imopenstat: "v4",
            webim: "v3"
        }, E = {
            login: 1,
            pic_up: 3,
            apply_join_group: 9,
            create_group: 10,
            longpolling: 18,
            send_group_msg: 19,
            sendmsg: 20
        }, T = {
            C2C: "C2C",
            GROUP: "GROUP"
        }, C = {
            OK: "OK",
            FAIL: "FAIL"
        }, A = {
            TEXT: "TIMTextElem",
            FACE: "TIMFaceElem",
            IMAGE: "TIMImageElem",
            CUSTOM: "TIMCustomElem",
            SOUND: "TIMSoundElem",
            FILE: "TIMFileElem",
            LOCATION: "TIMLocationElem",
            GROUP_TIP: "TIMGroupTipElem"
        }, S = {
            ORIGIN: 1,
            LARGE: 2,
            SMALL: 3
        }, F = {
            JPG: 1,
            JPEG: 1,
            GIF: 2,
            PNG: 3,
            BMP: 4,
            UNKNOWN: 255
        }, G = 1, v = "10001", O = "grouptalk.c2c.qq.com", N = 2106, b = 2107, R = {
            IMAGE: 1,
            FILE: 2,
            SHORT_VIDEO: 3,
            SOUND: 4
        }, L = "2.1", P = 1, U = {
            C2C: 1,
            GROUP_COMMON: 3,
            GROUP_TIP: 4,
            GROUP_SYSTEM: 5,
            GROUP_TIP2: 6,
            FRIEND_NOTICE: 7,
            PROFILE_NOTICE: 8,
            C2C_COMMON: 9,
            C2C_EVENT: 10
        }, D = {
            COMMON: 0
        }, k = 92, w = 96, q = {
            COMMON: 0,
            LOVEMSG: 1,
            TIP: 2,
            REDPACKET: 3
        }, B = 1, x = 3, K = {
            JOIN: 1,
            QUIT: 2,
            KICK: 3,
            SET_ADMIN: 4,
            CANCEL_ADMIN: 5,
            MODIFY_GROUP_INFO: 6,
            MODIFY_MEMBER_INFO: 7
        }, z = {
            FACE_URL: 1,
            NAME: 2,
            OWNER: 3,
            NOTIFICATION: 4,
            INTRODUCTION: 5
        }, H = {
            JOIN_GROUP_REQUEST: 1,
            JOIN_GROUP_ACCEPT: 2,
            JOIN_GROUP_REFUSE: 3,
            KICK: 4,
            DESTORY: 5,
            CREATE: 6,
            INVITED_JOIN_GROUP_REQUEST: 7,
            QUIT: 8,
            SET_ADMIN: 9,
            CANCEL_ADMIN: 10,
            REVOKE: 11,
            READED: 15,
            CUSTOM: 255,
            INVITED_JOIN_GROUP_REQUEST_AGREE: 12
        }, J = {
            FRIEND_ADD: 1,
            FRIEND_DELETE: 2,
            PENDENCY_ADD: 3,
            PENDENCY_DELETE: 4,
            BLACK_LIST_ADD: 5,
            BLACK_LIST_DELETE: 6,
            PENDENCY_REPORT: 7,
            FRIEND_UPDATE: 8
        }, Y = 1, V = {
            INIT: -1,
            ON: 0,
            RECONNECT: 1,
            OFF: 9999
        }, X = 14, j = V.INIT, Q = !1, W = 0, $ = 6e4, Z = null, ee = 0, te = 0, ne = [], oe = null, re = {
            sdkAppID: null,
            appIDAt3rd: null,
            accountType: null,
            identifier: null,
            tinyid: null,
            identifierNick: null,
            userSig: null,
            a2: null,
            contentType: "json",
            apn: 1
        }, ie = {}, se = 0, ue = {}, ae = 0, ce = [], le = [], pe = [], fe = {
            downloadMap: {}
        }, de = {
            "[惊讶]": 0,
            "[撇嘴]": 1,
            "[色]": 2,
            "[发呆]": 3,
            "[得意]": 4,
            "[流泪]": 5,
            "[害羞]": 6,
            "[闭嘴]": 7,
            "[睡]": 8,
            "[大哭]": 9,
            "[尴尬]": 10,
            "[发怒]": 11,
            "[调皮]": 12,
            "[龇牙]": 13,
            "[微笑]": 14,
            "[难过]": 15,
            "[酷]": 16,
            "[冷汗]": 17,
            "[抓狂]": 18,
            "[吐]": 19,
            "[偷笑]": 20,
            "[可爱]": 21,
            "[白眼]": 22,
            "[傲慢]": 23,
            "[饿]": 24,
            "[困]": 25,
            "[惊恐]": 26,
            "[流汗]": 27,
            "[憨笑]": 28,
            "[大兵]": 29,
            "[奋斗]": 30,
            "[咒骂]": 31,
            "[疑问]": 32,
            "[嘘]": 33,
            "[晕]": 34
        }, ge = {}, me = new function() {
            this.formatTimeStamp = function(e, t) {
                if (!e) return 0;
                var n;
                t = t || "yyyy-MM-dd hh:mm:ss";
                var o = new Date(1e3 * e), r = {
                    "M+": o.getMonth() + 1,
                    "d+": o.getDate(),
                    "h+": o.getHours(),
                    "m+": o.getMinutes(),
                    "s+": o.getSeconds()
                };
                for (var i in n = /(y+)/.test(t) ? t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length)) : t, 
                r) new RegExp("(" + i + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length)));
                return n;
            }, this.groupTypeEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "Public":
                    t = "公开群";
                    break;

                  case "ChatRoom":
                    t = "聊天室";
                    break;

                  case "Private":
                    t = "私有群";
                    break;

                  case "AVChatRoom":
                    t = "直播聊天室";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupTypeCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "公开群":
                    t = "Public";
                    break;

                  case "聊天室":
                    t = "ChatRoom";
                    break;

                  case "私有群":
                    t = "Private";
                    break;

                  case "直播聊天室":
                    t = "AVChatRoom";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupRoleEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "Member":
                    t = "成员";
                    break;

                  case "Admin":
                    t = "管理员";
                    break;

                  case "Owner":
                    t = "群主";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupRoleCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "成员":
                    t = "Member";
                    break;

                  case "管理员":
                    t = "Admin";
                    break;

                  case "群主":
                    t = "Owner";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupMsgFlagEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "AcceptAndNotify":
                    t = "接收并提示";
                    break;

                  case "AcceptNotNotify":
                    t = "接收不提示";
                    break;

                  case "Discard":
                    t = "屏蔽";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupMsgFlagCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "接收并提示":
                    t = "AcceptAndNotify";
                    break;

                  case "接收不提示":
                    t = "AcceptNotNotify";
                    break;

                  case "屏蔽":
                    t = "Discard";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.formatText2Html = function(e) {
                var t = e;
                return t && (t = (t = (t = this.xssFilter(t)).replace(/ /g, "&nbsp;")).replace(/\n/g, "<br/>")), 
                t;
            }, this.formatHtml2Text = function(e) {
                var t = e;
                return t && (t = (t = t.replace(/&nbsp;/g, " ")).replace(/<br\/>/g, "\n")), t;
            }, this.getStrBytes = function(e) {
                if (null == e || void 0 === e) return 0;
                if ("string" != typeof e) return 0;
                var t, n, o, r = 0;
                for (n = 0, o = e.length; n < o; n++) r += (t = e.charCodeAt(n)) <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
                return r;
            }, this.xssFilter = function(e) {
                return e = (e = (e = (e = e.toString()).replace(/[<]/g, "&lt;")).replace(/[>]/g, "&gt;")).replace(/"/g, "&quot;");
            }, this.trimStr = function(e) {
                return e ? (e = e.toString()).replace(/(^\s*)|(\s*$)/g, "") : "";
            }, this.validNumber = function(e) {
                return (e = e.toString()).match(/(^\d{1,8}$)/g);
            }, this.getReturnError = function(e, t) {
                return t || (t = -100), {
                    ActionStatus: C.FAIL,
                    ErrorCode: t,
                    ErrorInfo: e + "[" + t + "]"
                };
            }, this.replaceObject = function(t, n) {
                for (var o in n) if (t[o]) if (n[t[o]] = n[o], delete n[o], n[t[o]] instanceof Array) for (var r = n[t[o]].length, i = 0; i < r; i++) n[t[o]][i] = this.replaceObject(t, n[t[o]][i]); else "object" === (0, 
                e.default)(n[t[o]]) && (n[t[o]] = this.replaceObject(t, n[t[o]]));
                return n;
            };
        }(), Ie = new function() {
            var e = !0;
            this.setOn = function(t) {
                e = t;
            }, this.getOn = function() {
                return e;
            }, this.error = function(t) {
                try {
                    e && console.error(t);
                } catch (e) {}
            }, this.warn = function(t) {
                try {
                    e && console.warn(t);
                } catch (e) {}
            }, this.info = function(t) {
                try {
                    e && console.info(t);
                } catch (e) {}
            }, this.debug = function(t) {
                try {
                    e && console.debug(t);
                } catch (e) {}
            };
        }(), Me = function(e) {
            return e || (e = new Date()), Math.round(e.getTime() / 1e3);
        }, ye = function() {
            return ae ? ae += 1 : ae = Math.round(1e7 * Math.random()), ae;
        }, _e = function() {
            return Math.round(4294967296 * Math.random());
        }, he = function(e, t, n, o, r, i, s) {
            !function(e, t, n, o, r, i, s) {
                wx.request({
                    url: t,
                    data: n,
                    dataType: "json",
                    method: e,
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(e) {
                        W = ee = 0, i && i(e.data);
                    },
                    fail: function(e) {
                        setTimeout(function() {
                            var e = me.getReturnError("请求服务器失败,请检查你的网络是否正常", -2);
                            s && s(e);
                        }, 16);
                    }
                });
            }(e, t, JSON.stringify(n), 0, 0, function(e) {
                var t = null;
                e && (t = e), i && i(t);
            }, s);
        }, Ee = function() {
            return re.sdkAppID && re.identifier;
        }, Te = function(e, t) {
            if (!Ee()) {
                if (console.info(t), t) {
                    var n = me.getReturnError("请登录", -4);
                    e && e(n);
                }
                return !1;
            }
            return !0;
        }, Ce = function() {
            return s;
        }, Ae = function(e, t, n) {
            var o = null;
            return oe && ne[0] ? o = "http://" + ne[0] + "/asn.com/stddownload_common_file?authkey=" + oe + "&bid=" + v + "&subbid=" + re.sdkAppID + "&fileid=" + e + "&filetype=" + b + "&openid=" + t + "&ver=0&filename=" + encodeURIComponent(n) : Ie.error("拼接文件下载url不报错：ip或者authkey为空"), 
            fe.downloadMap["uuid_" + e] = o, o;
        }, Se = function(e, t, n, o, r, i, s) {
            var u = {
                From_Account: t,
                To_Account: r,
                os_platform: 10,
                Timestamp: Me().toString(),
                Random: _e().toString(),
                request_info: [ {
                    busi_id: i,
                    download_flag: o,
                    type: s,
                    uuid: e,
                    version: P,
                    auth_key: oe,
                    ip: ne[0]
                } ]
            };
            Be(u, function(e) {
                0 == e.error_code && e.response_info && (fe.downloadMap["uuid_" + u.uuid] = e.response_info.url), 
                onAppliedDownloadUrl && onAppliedDownloadUrl({
                    uuid: u.uuid,
                    url: e.response_info.url,
                    maps: fe.downloadMap
                });
            }, function(e) {
                Ie.error("获取下载地址失败", u.uuid);
            });
        }, Fe = function() {
            !function() {
                for (var e in ue) {
                    var t = ue[e];
                    t && (t.abort(), ue[se] = null);
                }
                se = 0, ue = {};
            }(), re = {
                sdkAppID: null,
                appIDAt3rd: null,
                accountType: null,
                identifier: null,
                identifierNick: null,
                userSig: null,
                contentType: "json",
                apn: 1
            }, ie = {}, ae = 0, pe = [], Ye.clear(), Je.clear(), Z = null;
        }, Ge = function(e, t, n) {
            if ("longpolling" != e || 60008 != t && 91101 != t) {
                var r = E[e];
                if (r) {
                    var i = Me(), s = null, u = {
                        Code: t,
                        ErrMsg: n
                    };
                    if (re.a2 ? s = re.a2.substring(0, 10) + "_" + i + "_" + _e() : re.userSig && (s = re.userSig.substring(0, 10) + "_" + i + "_" + _e()), 
                    s) {
                        var a = {
                            UniqKey: s,
                            EventId: r,
                            ReportTime: i,
                            MsgCmdErrorCode: u
                        };
                        if ("login" == e) {
                            var c = [];
                            c.push(a), we({
                                EvtItems: c,
                                MainVersion: o,
                                Version: "0"
                            }, function(e) {
                                c = null;
                            }, function(e) {
                                c = null;
                            });
                        } else {
                            if (pe.push(a), pe.length >= 20) we({
                                EvtItems: pe,
                                MainVersion: o,
                                Version: "0"
                            }, function(e) {
                                pe = [];
                            }, function(e) {
                                pe = [];
                            });
                        }
                    }
                }
            }
        }, ve = function(e) {
            xe.apiCall(_, "accesslayer", {}, function(t) {
                0 === t.ErrorCode && 1 === t.WebImAccessLayer && (u.FORMAL.COMMON = "https://events.tim.qq.com"), 
                e();
            }, function() {
                e();
            });
        }, Oe = function(e, t) {
            xe.apiCall(c, "login", {
                State: "Online"
            }, function(n) {
                if (n.TinyId) re.tinyid = n.TinyId; else if (t) return void t(me.getReturnError("TinyId is empty", -10));
                if (n.A2Key) re.a2 = n.A2Key; else if (t) return void t(me.getReturnError("A2Key is empty", -11));
                var o = {
                    From_Account: re.identifier,
                    To_Account: [ re.identifier ],
                    LastStandardSequence: 0,
                    TagList: [ "Tag_Profile_IM_Nick", "Tag_Profile_IM_Image" ]
                };
                De(o, function(t) {
                    var n, o;
                    if (t.UserProfileItem && t.UserProfileItem.length > 0) for (var r in t.UserProfileItem) for (var i in t.UserProfileItem[r].ProfileItem) switch (t.UserProfileItem[r].ProfileItem[i].Tag) {
                      case "Tag_Profile_IM_Nick":
                        (n = t.UserProfileItem[r].ProfileItem[i].Value) && (re.identifierNick = n);
                        break;

                      case "Tag_Profile_IM_Image":
                        (o = t.UserProfileItem[r].ProfileItem[i].Value) && (re.headurl = o);
                    }
                    e && e(re.identifierNick, re.headurl);
                }, t);
            }, t);
        }, Ne = function(e, t, n) {
            if (!Te(n, !1)) return Fe(), void (t && t({
                ActionStatus: C.OK,
                ErrorCode: 0,
                ErrorInfo: "logout success"
            }));
            "all" == e ? xe.apiCall(c, "logout", {}, function(e) {
                Fe(), t && t(e);
            }, n) : xe.apiCall(c, "longpollinglogout", {
                LongPollingId: Z
            }, function(e) {
                Fe(), t && t(e);
            }, n);
        }, be = function(e, t, n) {
            (s || "undefined" == typeof stopPolling || 1 != stopPolling) && Te(n, !0) && xe.apiCall(c, "longpolling", e, t, n, $, !0);
        }, Re = function(e, t, n, o) {
            if (Te(o, !0)) {
                var r = [];
                for (var i in t) {
                    var s = {
                        To_Account: t[i].toAccount,
                        LastedMsgTime: t[i].lastedMsgTime
                    };
                    r.push(s);
                }
                xe.apiCall(c, "msgreaded", {
                    C2CMsgReaded: {
                        Cookie: e,
                        C2CMsgReadedItem: r
                    }
                }, n, o);
            }
        }, Le = function(e, t, n) {
            Te(n, !0) && xe.apiCall(l, "get_joined_group_list", {
                Member_Account: e.Member_Account,
                Limit: e.Limit,
                Offset: e.Offset,
                GroupType: e.GroupType,
                ResponseFilter: {
                    GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                    SelfInfoFilter: e.SelfInfoFilter
                }
            }, t, n);
        }, Pe = function(e, t, n) {
            Te(n, !0) && xe.apiCall(l, "msg_read_report", {
                GroupId: e.GroupId,
                MsgReadedSeq: e.MsgReadedSeq
            }, t, n);
        }, Ue = function(e) {
            var t = [];
            if (e.Fail_Account && e.Fail_Account.length && (t = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length) for (var n in e.Invalid_Account) t.push(e.Invalid_Account[n]);
            if (t.length) for (var o in e.ActionStatus = C.FAIL, e.ErrorCode = 99999, e.ErrorInfo = "", 
            t) {
                var r = t[o];
                for (var i in e.ResultItem) if (e.ResultItem[i].To_Account == r) {
                    var s = e.ResultItem[i].ResultCode;
                    e.ResultItem[i].ResultInfo = "[" + s + "]" + e.ResultItem[i].ResultInfo, e.ErrorInfo += e.ResultItem[i].ResultInfo + "\n";
                    break;
                }
            }
            return e;
        }, De = function(e, t, n) {
            e.To_Account.length > 100 && (e.To_Account.length = 100, Ie.error("获取用户资料人数不能超过100人")), 
            Te(n, !0) && xe.apiCall(f, "portrait_get", {
                From_Account: re.identifier,
                To_Account: e.To_Account,
                TagList: e.TagList
            }, function(e) {
                var o = [];
                if (e.Fail_Account && e.Fail_Account.length && (o = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length) for (var r in e.Invalid_Account) o.push(e.Invalid_Account[r]);
                if (o.length) for (var i in e.ActionStatus = C.FAIL, e.ErrorCode = 99999, e.ErrorInfo = "", 
                o) {
                    var s = o[i];
                    for (var u in e.UserProfileItem) if (e.UserProfileItem[u].To_Account == s) {
                        var a = e.UserProfileItem[u].ResultCode;
                        e.UserProfileItem[u].ResultInfo = "[" + a + "]" + e.UserProfileItem[u].ResultInfo, 
                        e.ErrorInfo += "账号:" + s + "," + e.UserProfileItem[u].ResultInfo + "\n";
                        break;
                    }
                }
                e.ActionStatus == C.FAIL ? n && n(e) : t && t(e);
            }, n);
        }, ke = function(e, t, n) {
            var o;
            Te(n, !0) && (o = Ce() ? "pic_up" : "pic_up_test", xe.apiCall(g, o, {
                App_Version: L,
                From_Account: re.identifier,
                To_Account: e.To_Account,
                Seq: e.Seq,
                Timestamp: e.Timestamp,
                Random: e.Random,
                File_Str_Md5: e.File_Str_Md5,
                File_Size: e.File_Size,
                File_Type: e.File_Type,
                Server_Ver: P,
                Auth_Key: oe,
                Busi_Id: e.Busi_Id,
                PkgFlag: e.PkgFlag,
                Slice_Offset: e.Slice_Offset,
                Slice_Size: e.Slice_Size,
                Slice_Data: e.Slice_Data
            }, t, n));
        }, we = function(e, t, n) {
            Te(n, !0) && xe.apiCall(M, "web_report", e, t, n);
        }, qe = function(e, t, n) {
            Te(n, !0) && xe.apiCall(c, "getlongpollingid", {}, function(e) {
                t && t(e);
            }, n);
        }, Be = function(e, t, n) {
            xe.apiCall(g, "apply_download", e, t, n);
        };
        a = "wechat";
        var xe = new function() {
            var e = null;
            this.init = function(t, n, o) {
                t && (e = t);
            }, this.callBack = function(t) {
                e && e(t);
            }, this.clear = function() {
                e = null;
            }, this.apiCall = function(e, t, n, s, a, c, l) {
                var p = function(e, t, n, s) {
                    var a = u;
                    a = Ce() ? u.FORMAL.COMMON : u.TEST.COMMON, e == g && (a = Ce() ? u.FORMAL.PIC : u.TEST.PIC);
                    var c = a + "/" + h[e] + "/" + e + "/" + t + "?websdkappid=" + r + "&v=" + o + "&platform=" + i;
                    if (Ee()) {
                        if ("login" == t || "accesslayer" == t) c += "&identifier=" + encodeURIComponent(re.identifier) + "&usersig=" + re.userSig; else if (re.tinyid && re.a2) c += "&tinyid=" + re.tinyid + "&a2=" + re.a2; else if (s) return Ie.error("tinyid或a2为空[" + e + "][" + t + "]"), 
                        s(me.getReturnError("tinyid或a2为空[" + e + "][" + t + "]", -5)), !1;
                        c += "&contenttype=" + re.contentType;
                    }
                    return c += "&sdkappid=" + re.sdkAppID + "&accounttype=" + re.accountType + "&apn=" + re.apn + "&reqtime=" + Me();
                }(e, t, 0, a);
                0 != p && he("POST", p, n, 0, 0, function(o) {
                    var r = null, i = "";
                    "pic_up" == t && (n.Slice_Data = "");
                    var u = "\n request url: \n" + p + "\n request body: \n" + JSON.stringify(n) + "\n response: \n" + JSON.stringify(o);
                    o.ActionStatus == C.OK ? (Ie.info("[" + e + "][" + t + "]success: " + u), s && s(o), 
                    r = 0, i = "") : (r = o.ErrorCode, i = o.ErrorInfo, a && (o.SrcErrorInfo = o.ErrorInfo, 
                    o.ErrorInfo = "[" + e + "][" + t + "]failed: " + u, "longpolling" == t && 60008 == o.ErrorCode || Ie.error(o.ErrorInfo), 
                    a(o))), Ge(t, r, i);
                }, function(e) {
                    a && a(e), Ge(t, e.ErrorCode, e.ErrorInfo);
                });
            };
        }(), Ke = function e(t, n, o, r, i, s) {
            this._impl = {
                skey: e.skey(t, n),
                type: t,
                id: n,
                name: o,
                icon: r,
                unread: 0,
                isAutoRead: !1,
                time: i >= 0 ? i : 0,
                curMaxMsgSeq: s >= 0 ? s : 0,
                msgs: [],
                isFinished: 1
            };
        };
        Ke.skey = function(e, t) {
            return e + t;
        }, Ke.prototype.type = function() {
            return this._impl.type;
        }, Ke.prototype.id = function() {
            return this._impl.id;
        }, Ke.prototype.name = function() {
            return this._impl.name;
        }, Ke.prototype.icon = function() {
            return this._impl.icon;
        }, Ke.prototype.unread = function(e) {
            if (void 0 === e) return this._impl.unread;
            this._impl.unread = e;
        }, Ke.prototype.isFinished = function(e) {
            if (void 0 === e) return this._impl.isFinished;
            this._impl.isFinished = e;
        }, Ke.prototype.time = function() {
            return this._impl.time;
        }, Ke.prototype.curMaxMsgSeq = function(e) {
            if (void 0 === e) return this._impl.curMaxMsgSeq;
            this._impl.curMaxMsgSeq = e;
        }, Ke.prototype.msgCount = function() {
            return this._impl.msgs.length;
        }, Ke.prototype.msg = function(e) {
            return this._impl.msgs[e];
        }, Ke.prototype.msgs = function() {
            return this._impl.msgs;
        }, Ke.prototype._impl_addMsg = function(e, t) {
            this._impl.msgs.push(e), e.time > this._impl.time && (this._impl.time = e.time), 
            e.seq > this._impl.curMaxMsgSeq && (this._impl.curMaxMsgSeq = e.seq), e.isSend || this._impl.isAutoRead || !t || this._impl.unread++;
        };
        var ze = function(e, t) {
            this.toAccount = e, this.lastedMsgTime = t;
        }, He = function(e, t, n, o, r, i, s, u, a) {
            this.sess = e, this.subType = s >= 0 ? s : 0, this.fromAccount = i, this.fromAccountNick = u || i, 
            this.fromAccountHeadurl = a || null, this.isSend = Boolean(t), this.seq = n >= 0 ? n : ye(), 
            this.random = o >= 0 ? o : _e(), this.time = r >= 0 ? r : Me(), this.elems = [], 
            e.type();
        };
        He.prototype.getSession = function() {
            return this.sess;
        }, He.prototype.getType = function() {
            return this.subType;
        }, He.prototype.getSubType = function() {
            return this.subType;
        }, He.prototype.getFromAccount = function() {
            return this.fromAccount;
        }, He.prototype.getFromAccountNick = function() {
            return this.fromAccountNick;
        }, He.prototype.getIsSend = function() {
            return this.isSend;
        }, He.prototype.getSeq = function() {
            return this.seq;
        }, He.prototype.getTime = function() {
            return this.time;
        }, He.prototype.getRandom = function() {
            return this.random;
        }, He.prototype.getElems = function() {
            return this.elems;
        }, He.prototype.getMsgUniqueId = function() {
            return this.uniqueId;
        }, He.prototype.addText = function(e) {
            this.addElem(new n.Msg.Elem(A.TEXT, e));
        }, He.prototype.addFace = function(e) {
            this.addElem(new n.Msg.Elem(A.FACE, e));
        }, He.prototype.addImage = function(e) {
            this.addElem(new n.Msg.Elem(A.IMAGE, e));
        }, He.prototype.addLocation = function(e) {
            this.addElem(new n.Msg.Elem(A.LOCATION, e));
        }, He.prototype.addFile = function(e) {
            this.addElem(new n.Msg.Elem(A.FILE, e));
        }, He.prototype.addCustom = function(e) {
            this.addElem(new n.Msg.Elem(A.CUSTOM, e));
        }, He.prototype.addElem = function(e) {
            this.elems.push(e);
        }, He.prototype.toHtml = function() {
            var e = "";
            for (var t in this.elems) {
                e += this.elems[t].toHtml();
            }
            return e;
        }, (He.Elem = function(e, t) {
            this.type = e, this.content = t;
        }).prototype.getType = function() {
            return this.type;
        }, He.Elem.prototype.getContent = function() {
            return this.content;
        }, He.Elem.prototype.toHtml = function() {
            return this.content.toHtml();
        }, He.Elem.Text = function(e) {
            this.text = me.xssFilter(e);
        }, He.Elem.Text.prototype.getText = function() {
            return this.text;
        }, He.Elem.Text.prototype.toHtml = function() {
            return this.text;
        }, He.Elem.Face = function(e, t) {
            this.index = e, this.data = t;
        }, He.Elem.Face.prototype.getIndex = function() {
            return this.index;
        }, He.Elem.Face.prototype.getData = function() {
            return this.data;
        }, He.Elem.Face.prototype.toHtml = function() {
            var e = null, t = de[this.data], n = ge[t];
            return n && n[1] && (e = n[1]), e ? "<img src='" + e + "'/>" : this.data;
        }, He.Elem.Location = function(e, t, n) {
            this.latitude = t, this.longitude = e, this.desc = n;
        }, He.Elem.Location.prototype.getLatitude = function() {
            return this.latitude;
        }, He.Elem.Location.prototype.getLongitude = function() {
            return this.longitude;
        }, He.Elem.Location.prototype.getDesc = function() {
            return this.desc;
        }, He.Elem.Location.prototype.toHtml = function() {
            return "经度=" + this.longitude + ",纬度=" + this.latitude + ",描述=" + this.desc;
        }, He.Elem.Images = function(e, t) {
            this.UUID = e, "number" != typeof t && (t = parseInt(F[t] || F.UNKNOWN, 10)), this.ImageFormat = t, 
            this.ImageInfoArray = [];
        }, He.Elem.Images.prototype.addImage = function(e) {
            this.ImageInfoArray.push(e);
        }, He.Elem.Images.prototype.toHtml = function() {
            var e = this.getImage(S.SMALL), t = this.getImage(S.LARGE), n = this.getImage(S.ORIGIN);
            return t || (t = e), n || (n = e), "<img src='" + e.getUrl() + "#" + t.getUrl() + "#" + n.getUrl() + "' style='CURSOR: hand' id='" + this.getImageId() + "' bigImgUrl='" + t.getUrl() + "' onclick='imageClick(this)' />";
        }, He.Elem.Images.prototype.getImageId = function() {
            return this.UUID;
        }, He.Elem.Images.prototype.getImageFormat = function() {
            return this.ImageFormat;
        }, He.Elem.Images.prototype.getImage = function(e) {
            for (var t in this.ImageInfoArray) if (this.ImageInfoArray[t].getType() == e) return this.ImageInfoArray[t];
            var n = null;
            return this.ImageInfoArray.forEach(function(t) {
                t.getType() == e && (n = t);
            }), n;
        }, He.Elem.Images.Image = function(e, t, n, o, r) {
            this.type = e, this.size = t, this.width = n, this.height = o, this.url = r;
        }, He.Elem.Images.Image.prototype.getType = function() {
            return this.type;
        }, He.Elem.Images.Image.prototype.getSize = function() {
            return this.size;
        }, He.Elem.Images.Image.prototype.getWidth = function() {
            return this.width;
        }, He.Elem.Images.Image.prototype.getHeight = function() {
            return this.height;
        }, He.Elem.Images.Image.prototype.getUrl = function() {
            return this.url;
        }, He.Elem.Sound = function(e, t, n, o, r, i, s) {
            this.uuid = e, this.second = t, this.size = n, this.senderId = o, this.receiverId = r, 
            this.downFlag = i, this.busiId = s == T.C2C ? 2 : 1, void 0 !== this.downFlag && void 0 !== this.busiId ? Se(e, o, 0, i, r, this.busiId, R.SOUND) : this.downUrl = function(e, t) {
                var n = null;
                return oe && ne[0] ? n = "https://" + O + "/asn.com/stddownload_common_file?authkey=" + oe + "&bid=" + v + "&subbid=" + re.sdkAppID + "&fileid=" + e + "&filetype=" + N + "&openid=" + t + "&ver=0" : Ie.error("拼接语音下载url不报错：ip或者authkey为空"), 
                n;
            }(e, o);
        }, He.Elem.Sound.prototype.getUUID = function() {
            return this.uuid;
        }, He.Elem.Sound.prototype.getSecond = function() {
            return this.second;
        }, He.Elem.Sound.prototype.getSize = function() {
            return this.size;
        }, He.Elem.Sound.prototype.getSenderId = function() {
            return this.senderId;
        }, He.Elem.Sound.prototype.getDownUrl = function() {
            return this.downUrl;
        }, He.Elem.Sound.prototype.toHtml = function() {
            return "ie" == a.type && parseInt(a.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + this.downUrl : '<audio id="uuid_' + this.uuid + '" src="' + this.downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
        }, He.Elem.File = function(e, t, n, o, r, i, s) {
            this.uuid = e, this.name = t, this.size = n, this.senderId = o, this.receiverId = r, 
            this.downFlag = i, this.busiId = s == T.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? Se(e, o, 0, i, r, this.busiId, R.FILE) : this.downUrl = Ae(e, o, t);
        }, He.Elem.File.prototype.getUUID = function() {
            return this.uuid;
        }, He.Elem.File.prototype.getName = function() {
            return this.name;
        }, He.Elem.File.prototype.getSize = function() {
            return this.size;
        }, He.Elem.File.prototype.getSenderId = function() {
            return this.senderId;
        }, He.Elem.File.prototype.getDownUrl = function() {
            return this.downUrl;
        }, He.Elem.File.prototype.getDownFlag = function() {
            return this.downFlag;
        }, He.Elem.File.prototype.toHtml = function() {
            var e, t;
            return e = this.size, t = "Byte", this.size >= 1024 && (e = Math.round(this.size / 1024), 
            t = "KB"), {
                uuid: this.uuid,
                name: this.name,
                size: e,
                unitStr: t
            };
        }, He.Elem.GroupTip = function(e, t, n, o, r, i) {
            this.opType = e, this.opUserId = t, this.groupId = n, this.groupName = o, this.userIdList = r || [], 
            this.groupInfoList = [], this.memberInfoList = [], this.groupMemberNum = null, this.userinfo = i || [];
        }, He.Elem.GroupTip.prototype.addGroupInfo = function(e) {
            this.groupInfoList.push(e);
        }, He.Elem.GroupTip.prototype.addMemberInfo = function(e) {
            this.memberInfoList.push(e);
        }, He.Elem.GroupTip.prototype.getOpType = function() {
            return this.opType;
        }, He.Elem.GroupTip.prototype.getOpUserId = function() {
            return this.opUserId;
        }, He.Elem.GroupTip.prototype.getGroupId = function() {
            return this.groupId;
        }, He.Elem.GroupTip.prototype.getGroupName = function() {
            return this.groupName;
        }, He.Elem.GroupTip.prototype.getUserIdList = function() {
            return this.userIdList;
        }, He.Elem.GroupTip.prototype.getUserInfo = function() {
            return this.userinfo;
        }, He.Elem.GroupTip.prototype.getGroupInfoList = function() {
            return this.groupInfoList;
        }, He.Elem.GroupTip.prototype.getMemberInfoList = function() {
            return this.memberInfoList;
        }, He.Elem.GroupTip.prototype.getGroupMemberNum = function() {
            return this.groupMemberNum;
        }, He.Elem.GroupTip.prototype.setGroupMemberNum = function(e) {
            return this.groupMemberNum = e;
        }, He.Elem.GroupTip.prototype.toHtml = function() {
            var e = "[群提示消息]";
            switch (this.opType) {
              case K.JOIN:
                for (var t in e += this.opUserId + "邀请了", this.userIdList) if (e += this.userIdList[t] + ",", 
                this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "加入该群";
                break;

              case K.QUIT:
                e += this.opUserId + "主动退出该群";
                break;

              case K.KICK:
                for (var t in e += this.opUserId + "将", this.userIdList) if (e += this.userIdList[t] + ",", 
                this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "踢出该群";
                break;

              case K.SET_ADMIN:
                for (var t in e += this.opUserId + "将", this.userIdList) if (e += this.userIdList[t] + ",", 
                this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "设为管理员";
                break;

              case K.CANCEL_ADMIN:
                for (var t in e += this.opUserId + "取消", this.userIdList) if (e += this.userIdList[t] + ",", 
                this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "的管理员资格";
                break;

              case K.MODIFY_GROUP_INFO:
                for (var t in e += this.opUserId + "修改了群资料：", this.groupInfoList) {
                    var n = this.groupInfoList[t].getType(), o = this.groupInfoList[t].getValue();
                    switch (n) {
                      case z.FACE_URL:
                        e += "群头像为" + o + "; ";
                        break;

                      case z.NAME:
                        e += "群名称为" + o + "; ";
                        break;

                      case z.OWNER:
                        e += "群主为" + o + "; ";
                        break;

                      case z.NOTIFICATION:
                        e += "群公告为" + o + "; ";
                        break;

                      case z.INTRODUCTION:
                        e += "群简介为" + o + "; ";
                        break;

                      default:
                        e += "未知信息为:type=" + n + ",value=" + o + "; ";
                    }
                }
                break;

              case K.MODIFY_MEMBER_INFO:
                for (var t in e += this.opUserId + "修改了群成员资料:", this.memberInfoList) {
                    var r = this.memberInfoList[t].getUserId(), i = this.memberInfoList[t].getShutupTime();
                    if (e += r + ": ", e += null != i && void 0 !== i ? 0 == i ? "取消禁言; " : "禁言" + i + "秒; " : " shutupTime为空", 
                    this.memberInfoList.length > 10 && 9 == t) {
                        e += "等" + this.memberInfoList.length + "人";
                        break;
                    }
                }
                break;

              case K.READED:
                Log.info("消息已读同步");
                break;

              default:
                e += "未知群提示消息类型：type=" + this.opType;
            }
            return e;
        }, He.Elem.GroupTip.GroupInfo = function(e, t) {
            this.type = e, this.value = t;
        }, He.Elem.GroupTip.GroupInfo.prototype.getType = function() {
            return this.type;
        }, He.Elem.GroupTip.GroupInfo.prototype.getValue = function() {
            return this.value;
        }, He.Elem.GroupTip.MemberInfo = function(e, t) {
            this.userId = e, this.shutupTime = t;
        }, He.Elem.GroupTip.MemberInfo.prototype.getUserId = function() {
            return this.userId;
        }, He.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function() {
            return this.shutupTime;
        }, He.Elem.Custom = function(e, t, n) {
            this.data = e, this.desc = t, this.ext = n;
        }, He.Elem.Custom.prototype.getData = function() {
            return this.data;
        }, He.Elem.Custom.prototype.getDesc = function() {
            return this.desc;
        }, He.Elem.Custom.prototype.getExt = function() {
            return this.ext;
        }, He.Elem.Custom.prototype.toHtml = function() {
            return this.data;
        };
        var Je = new function() {
            var e = {}, n = [];
            t = {}, this.cookie = "", this.syncFlag = 0;
            var o = function(t) {
                for (var n in e) t(e[n]);
            };
            this.sessMap = function() {
                return e;
            }, this.sessCount = function() {
                return n.length;
            }, this.sessByTypeId = function(t, n) {
                var o = Ke.skey(t, n);
                return void 0 === o || null == o ? null : e[o];
            }, this.delSessByTypeId = function(n, o) {
                var r = Ke.skey(n, o);
                return void 0 !== r && null != r && (e[r] && (delete e[r], delete t[r]), !0);
            }, this.resetCookieAndSyncFlag = function() {
                this.cookie = "", this.syncFlag = 0;
            }, this.setAutoRead = function(e, t, n) {
                if (n && o(function(e) {
                    e._impl.isAutoRead = !1;
                }), e && (e._impl.isAutoRead = t, t)) if (e._impl.unread = 0, e._impl.type == T.C2C) {
                    var r = [];
                    r.push(new ze(e._impl.id, e._impl.time)), Re(Je.cookie, r, function(e) {
                        Ie.info("[setAutoRead]: c2CMsgReaded success");
                    }, function(e) {
                        Ie.error("[setAutoRead}: c2CMsgReaded failed:" + e.ErrorInfo);
                    });
                } else if (e._impl.type == T.GROUP) {
                    var i = {
                        GroupId: e._impl.id,
                        MsgReadedSeq: e._impl.curMaxMsgSeq
                    };
                    Pe(i, function(e) {
                        Ie.info("groupMsgReaded success");
                    }, function(e) {
                        Ie.error("groupMsgReaded failed:" + e.ErrorInfo);
                    });
                }
            }, this.c2CMsgReaded = function(e, t, n) {
                var o = [];
                o.push(new ze(e.To_Account, e.LastedMsgTime)), Re(Je.cookie, o, function(e) {
                    t && (Ie.info("c2CMsgReaded success"), t(e));
                }, function(e) {
                    n && (Ie.error("c2CMsgReaded failed:" + e.ErrorInfo), n(e));
                });
            }, this.addSession = function(t) {
                e[t._impl.skey] = t;
            }, this.delSession = function(t) {
                delete e[t._impl.skey];
            }, this.clear = function() {
                e = {}, n = [], t = {}, this.cookie = "", this.syncFlag = 0;
            }, this.addMsg = function(n, o) {
                if (function(e) {
                    var n = !1, o = e.sess._impl.skey, r = e.isSend + e.seq + e.random;
                    return t[o] && t[o][r] && (n = !0), t[o] ? t[o][r] = {
                        time: e.time
                    } : (t[o] = {}, t[o][r] = {
                        time: e.time
                    }), n;
                }(n)) return !1;
                var r = n.sess;
                return e[r._impl.skey] || this.addSession(r), r._impl_addMsg(n, o), !0;
            }, this.updateTimeline = function() {
                var e = new Array();
                o(function(t) {
                    e.push(t);
                }), e.sort(function(e, t) {
                    return t.time - e.time;
                }), n = e;
            };
        }(), Ye = new function() {
            var e = null, t = null, n = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null,
                9: null,
                10: null,
                11: null,
                15: null,
                255: null,
                12: null
            }, o = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null
            }, r = {
                1: null
            }, i = null, s = !1, u = 0, a = 0, p = null, f = !1, d = {}, g = 90, m = null, M = {}, y = {
                92: null,
                96: null
            }, _ = {}, h = {};
            this.setLongPollingOn = function(e) {
                s = e;
            }, this.getLongPollingOn = function() {
                return s;
            }, this.resetLongPollingInfo = function() {
                s = !1, u = 0, a = 0;
            }, this.setBigGroupLongPollingOn = function(e) {
                f = e;
            }, this.checkBigGroupLongPollingOn = function(e) {
                return !!m[e];
            }, this.setBigGroupLongPollingKey = function(e, t) {
                m[e] = t;
            }, this.resetBigGroupLongPollingInfo = function(e) {
                f = !1, d[e] = 0, m[e] = null, M[e] = {};
            }, this.setBigGroupLongPollingMsgMap = function(e, t) {
                var n = M[e];
                n ? (n = parseInt(n) + t, M[e] = n) : M[e] = t;
            }, this.clear = function() {
                t = null, n = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null,
                    10: null,
                    11: null,
                    15: null,
                    255: null,
                    12: null
                }, o = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null
                }, r = {
                    1: null
                }, e = null, s = !1, u = 0, a = 0, p = null, f = !1, d = {}, m = {}, M = {}, h = {}, 
                ne = [], oe = null, null;
            };
            var E = function(e, t) {
                !function(e, t) {
                    Te(t, !0) && xe.apiCall(c, "authkey", {}, e, t);
                }(function(t) {
                    ne = t.IpList, oe = t.AuthKey, t.ExpireTime, e && e(t);
                }, function(e) {
                    Ie.error("initIpAndAuthkey failed:" + e.ErrorInfo), t && t(e);
                });
            }, S = function(e, t) {
                for (var n in e) {
                    var o = e[n];
                    if (o.From_Account) {
                        var r = ie(o, !1, !0);
                        r && t.push(r), i = o.ToGroupId, s = o.MsgSeq, u = void 0, (u = _[i]) ? s > u && (_[i] = s) : _[i] = s;
                    }
                }
                var i, s, u;
                return t;
            }, F = function(t, n) {
                var o = {}, r = [];
                for (var i in n) {
                    var s = o[n[i].ToGroupId];
                    s || (s = o[n[i].ToGroupId] = {
                        min: 99999999,
                        max: -1,
                        msgs: []
                    }), n[i].NoticeSeq > a && (Ie.warn("noticeSeq=" + a + ",msgNoticeSeq=" + n[i].NoticeSeq), 
                    a = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), 
                    n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq);
                }
                for (var u in o) r = S(o[u].msgs, r);
                r.length && Je.updateTimeline(), e && r.length && e(r);
            }, G = function(t, n) {
                var o = {}, r = [];
                for (var i in n) {
                    var s = o[n[i].ToGroupId];
                    s || (s = o[n[i].ToGroupId] = {
                        min: 99999999,
                        max: -1,
                        msgs: []
                    }), n[i].NoticeSeq > a && (Ie.warn("noticeSeq=" + a + ",msgNoticeSeq=" + n[i].NoticeSeq), 
                    a = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), 
                    n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq);
                }
                for (var u in o) r = S(o[u].msgs, r);
                r.length && Je.updateTimeline(), e && r.length && e(r);
            }, v = function(e, t) {
                for (var o in e) {
                    var r = e[o], i = r.MsgBody, s = i.ReportType;
                    0 == t && r.NoticeSeq && r.NoticeSeq > a && (a = r.NoticeSeq);
                    r.GroupInfo.To_Account;
                    if (t) {
                        var u = r.ToGroupId + "_" + s + "_" + i.Operator_Account;
                        if (h[u]) {
                            Ie.warn("收到重复的群系统消息：key=" + u);
                            continue;
                        }
                        h[u] = !0;
                    }
                    var c = {
                        SrcFlag: 0,
                        ReportType: s,
                        GroupId: r.ToGroupId,
                        GroupName: r.GroupInfo.GroupName,
                        Operator_Account: i.Operator_Account,
                        MsgTime: r.MsgTimeStamp,
                        groupReportTypeMsg: i
                    };
                    switch (s) {
                      case H.JOIN_GROUP_REQUEST:
                        c.RemarkInfo = i.RemarkInfo, c.MsgKey = i.MsgKey, c.Authentication = i.Authentication, 
                        c.UserDefinedField = r.UserDefinedField, c.From_Account = r.From_Account, c.MsgSeq = r.ClientSeq, 
                        c.MsgRandom = r.MsgRandom;
                        break;

                      case H.JOIN_GROUP_ACCEPT:
                      case H.JOIN_GROUP_REFUSE:
                        c.RemarkInfo = i.RemarkInfo;
                        break;

                      case H.KICK:
                      case H.DESTORY:
                      case H.CREATE:
                      case H.INVITED_JOIN_GROUP_REQUEST:
                      case H.INVITED_JOIN_GROUP_REQUEST_AGREE:
                      case H.QUIT:
                      case H.SET_ADMIN:
                      case H.CANCEL_ADMIN:
                      case H.REVOKE:
                      case H.READED:
                        break;

                      case H.CUSTOM:
                        c.MsgSeq = r.MsgSeq, c.UserDefinedField = i.UserDefinedField;
                        break;

                      default:
                        Ie.error("未知群系统消息类型：reportType=" + s);
                    }
                    if (t) n[s] ? n[s](c) : Ie.error("未知群系统消息类型：reportType=" + s); else if (n[s]) if (s == H.READED) for (var l = c.groupReportTypeMsg.GroupReadInfoArray, p = 0, f = l.length; p < f; p++) {
                        var d = l[p];
                        n[s](d);
                    } else n[s](c);
                }
            }, O = function(e, t) {
                var n, r, i;
                for (var s in e) {
                    switch (r = (n = e[s]).PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > a && (a = n.NoticeSeq), 
                    i = {
                        Type: r
                    }, r) {
                      case J.FRIEND_ADD:
                        i.Accounts = n.FriendAdd_Account;
                        break;

                      case J.FRIEND_DELETE:
                        i.Accounts = n.FriendDel_Account;
                        break;

                      case J.PENDENCY_ADD:
                        i.PendencyList = n.PendencyAdd;
                        break;

                      case J.PENDENCY_DELETE:
                        i.Accounts = n.FrienPencydDel_Account;
                        break;

                      case J.BLACK_LIST_ADD:
                        i.Accounts = n.BlackListAdd_Account;
                        break;

                      case J.BLACK_LIST_DELETE:
                        i.Accounts = n.BlackListDel_Account;
                        break;

                      default:
                        Ie.error("未知好友系统通知类型：friendNotice=" + JSON.stringify(n));
                    }
                    t ? r == J.PENDENCY_ADD && o[r] && o[r](i) : o[r] && o[r](i);
                }
            }, N = function(e, t) {
                var n, o, i;
                for (var s in e) {
                    switch (o = (n = e[s]).PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > a && (a = n.NoticeSeq), 
                    i = {
                        Type: o
                    }, o) {
                      case Y:
                        i.Profile_Account = n.Profile_Account, i.ProfileList = n.ProfileList;
                        break;

                      default:
                        Ie.error("未知资料系统通知类型：profileNotice=" + JSON.stringify(n));
                    }
                    t ? o == Y && r[o] && r[o](i) : r[o] && r[o](i);
                }
            }, b = function(e) {
                var t = e.MsgBody, o = t.ReportType, r = (e.GroupInfo.To_Account, {
                    SrcFlag: 1,
                    ReportType: o,
                    GroupId: e.ToGroupId,
                    GroupName: e.GroupInfo.GroupName,
                    Operator_Account: t.Operator_Account,
                    MsgTime: e.MsgTimeStamp
                });
                switch (o) {
                  case H.JOIN_GROUP_REQUEST:
                    r.RemarkInfo = t.RemarkInfo, r.MsgKey = t.MsgKey, r.Authentication = t.Authentication, 
                    r.UserDefinedField = e.UserDefinedField, r.From_Account = e.From_Account, r.MsgSeq = e.ClientSeq, 
                    r.MsgRandom = e.MsgRandom;
                    break;

                  case H.JOIN_GROUP_ACCEPT:
                  case H.JOIN_GROUP_REFUSE:
                    r.RemarkInfo = t.RemarkInfo;
                    break;

                  case H.KICK:
                  case H.DESTORY:
                  case H.CREATE:
                  case H.INVITED_JOIN_GROUP_REQUEST:
                  case H.INVITED_JOIN_GROUP_REQUEST_AGREE:
                  case H.QUIT:
                  case H.SET_ADMIN:
                  case H.CANCEL_ADMIN:
                  case H.REVOKE:
                    break;

                  case H.CUSTOM:
                    r.MsgSeq = e.MsgSeq, r.UserDefinedField = t.UserDefinedField;
                    break;

                  default:
                    Ie.error("未知群系统消息类型：reportType=" + o);
                }
                n[o] && n[o](r);
            }, R = function(e) {
                for (var t = 0, n = e.length; t < n; t++) L(e[t]);
            }, L = function(e) {
                var t = e.SubMsgType;
                switch (t) {
                  case k:
                    if (Ie.warn("C2C已读消息通知"), e.ReadC2cMsgNotify && e.ReadC2cMsgNotify.UinPairReadArray && y[t]) for (var n = 0, o = e.ReadC2cMsgNotify.UinPairReadArray.length; n < o; n++) {
                        var r = e.ReadC2cMsgNotify.UinPairReadArray[n];
                        y[t](r);
                    }
                    break;

                  case w:
                    Ie.warn("多终端互踢通知"), Ne("instance"), y[t] && y[t]();
                    break;

                  default:
                    Ie.error("未知C2c系统消息：subType=" + t);
                }
            };
            this.longPolling = function(e, t) {
                var n = {
                    Timeout: $ / 1e3,
                    Cookie: {
                        NotifySeq: u,
                        NoticeSeq: a
                    }
                };
                function o() {
                    be(n, function(e) {
                        for (var t in e.EventArray) {
                            var n = e.EventArray[t];
                            switch (n.Event) {
                              case U.C2C:
                                u = n.NotifySeq, Ie.warn("longpolling: received new c2c msg"), Ye.syncMsgs();
                                break;

                              case U.GROUP_COMMON:
                                Ie.warn("longpolling: received new group msgs"), G(n.Event, n.GroupMsgArray);
                                break;

                              case U.GROUP_TIP:
                              case U.GROUP_TIP2:
                                Ie.warn("longpolling: received new group tips"), G(n.Event, n.GroupTips);
                                break;

                              case U.GROUP_SYSTEM:
                                Ie.warn("longpolling: received new group system msgs"), v(n.GroupTips, !1);
                                break;

                              case U.FRIEND_NOTICE:
                                Ie.warn("longpolling: received new friend system notice"), O(n.FriendListMod, !1);
                                break;

                              case U.PROFILE_NOTICE:
                                Ie.warn("longpolling: received new profile system notice"), N(n.ProfileDataMod, !1);
                                break;

                              case U.C2C_COMMON:
                                a = n.C2cMsgArray[0].NoticeSeq, Ie.warn("longpolling: received new c2c_common msg", a), 
                                F(n.Event, n.C2cMsgArray);
                                break;

                              case U.C2C_EVENT:
                                a = n.C2cNotifyMsgArray[0].NoticeSeq, Ie.warn("longpolling: received new c2c_event msg"), 
                                R(n.C2cNotifyMsgArray);
                                break;

                              default:
                                Ie.error("longpolling收到未知新消息类型: Event=" + n.Event);
                            }
                        }
                        var o = {
                            ActionStatus: C.OK,
                            ErrorCode: 0
                        };
                        P(o);
                    }, function(e) {
                        P(e), t && t(e);
                    });
                }
                Z ? (n.Cookie.LongPollingId = Z, o()) : qe(0, function(e) {
                    Z = n.Cookie.LongPollingId = e.LongPollingId, $ = e.Timeout > 60 ? $ : 1e3 * e.Timeout, 
                    o();
                });
            }, this.bigGroupLongPolling = function(e, t, n) {
                !function(e, t, n, o) {
                    xe.apiCall(I, "get_msg", e, t, n, o);
                }({
                    USP: 1,
                    StartSeq: d[e],
                    HoldTime: g,
                    Key: m[e]
                }, function(n) {
                    var o = [];
                    if (d[e] = n.NextSeq, g = n.HoldTime, m[e] = n.Key, n.RspMsgList && n.RspMsgList.length > 0) {
                        for (var r, i, s, u = 0, a = n.RspMsgList.length - 1; a >= 0; a--) {
                            r = n.RspMsgList[a];
                            if (!(r = me.replaceObject({
                                F_Account: "From_Account",
                                T_Account: "To_Account",
                                FAType: "EnumFrom_AccountType",
                                TAType: "EnumTo_AccountType",
                                GCode: "GroupCode",
                                GName: "GroupName",
                                GId: "GroupId",
                                MFlg: "MsgFlag",
                                FAEInfo: "MsgFrom_AccountExtraInfo",
                                Evt: "Event",
                                GInfo: "GroupInfo",
                                BPlc: "IsPlaceMsg",
                                MBody: "MsgBody",
                                Pri: "MsgPriority",
                                Rdm: "MsgRandom",
                                MSeq: "MsgSeq",
                                TStp: "MsgTimeStamp",
                                TGId: "ToGroupId",
                                UEInfo: "UinExtInfo",
                                UId: "UserId",
                                BSys: "IsSystemMsg",
                                FAHUrl: "From_AccountHeadurl",
                                FANick: "From_AccountNick"
                            }, r)).IsPlaceMsg && r.From_Account && r.MsgBody && 0 != r.MsgBody.length) switch (i = r.Event) {
                              case U.GROUP_COMMON:
                                Ie.info("bigGroupLongPolling: return new group msg"), (s = ie(r, !1, !1)) && o.push(s), 
                                u += 1;
                                break;

                              case U.GROUP_TIP:
                              case U.GROUP_TIP2:
                                Ie.info("bigGroupLongPolling: return new group tip"), (s = ie(r, !1, !1)) && o.push(s);
                                break;

                              case U.GROUP_SYSTEM:
                                Ie.info("bigGroupLongPolling: new group system msg"), b(r);
                                break;

                              default:
                                Ie.error("bigGroupLongPolling收到未知新消息类型: Event=" + i);
                            }
                        }
                        u > 0 && (Ye.setBigGroupLongPollingMsgMap(r.ToGroupId, u), Ie.warn("current bigGroupLongPollingMsgMap: " + JSON.stringify(M)));
                    }
                    ee = 0;
                    var c = {
                        ActionStatus: C.OK,
                        ErrorCode: V.ON,
                        ErrorInfo: "connection is ok..."
                    };
                    xe.callBack(c), t ? t(o) : p && p(o), f && Ye.bigGroupLongPolling(e);
                }, function(t) {
                    if (10018 == t.ErrorCode ? d[e] = 0 : 60008 != t.ErrorCode && (Ie.error(t.ErrorInfo), 
                    ee++), 91101 == t.ErrorCode && (Ie.error("多实例登录，被kick"), i && i()), ee < 10) f && Ye.bigGroupLongPolling(e); else {
                        var o = {
                            ActionStatus: C.FAIL,
                            ErrorCode: V.OFF,
                            ErrorInfo: "connection is off"
                        };
                        xe.callBack(o);
                    }
                    n && n(t);
                }, 1e3 * g);
            };
            var P = function(e) {
                if (0 == e.ErrorCode || 60008 == e.ErrorCode) {
                    var t;
                    W = 0, Q = !1;
                    var n = !1;
                    switch (j) {
                      case V.INIT:
                        n = !0, j = V.ON, t = "create connection successfully(INIT->ON)";
                        break;

                      case V.ON:
                        t = "connection is on...(ON->ON)";
                        break;

                      case V.RECONNECT:
                        j = V.ON, t = "connection is on...(RECONNECT->ON)";
                        break;

                      case V.OFF:
                        n = !0, j = V.RECONNECT, t = "reconnect successfully(OFF->RECONNECT)";
                    }
                    var o = {
                        ActionStatus: C.OK,
                        ErrorCode: j,
                        ErrorInfo: t
                    };
                    n && xe.callBack(o), s && Ye.longPolling();
                } else if (91101 == e.ErrorCode) Ie.error("多实例登录，被kick"), i && i(); else if (W++, 
                Ie.warn("longPolling接口第" + W + "次报错: " + e.ErrorInfo), W <= 10) setTimeout(te, 100); else {
                    j = V.OFF;
                    var r = {
                        ActionStatus: C.FAIL,
                        ErrorCode: V.OFF,
                        ErrorInfo: "connection is off"
                    };
                    0 == Q && xe.callBack(r), Q = !0, Ie.warn("5000毫秒之后,SDK会发起新的longPolling请求..."), 
                    setTimeout(te, 5e3);
                }
            }, te = (F = function(t, n) {
                var o, r = [];
                for (var i in o = n) {
                    var s, u, a = o[i], c = a.From_AccountHeadurl || "";
                    a.From_Account == re.identifier ? (s = !0, u = a.To_Account) : (s = !1, u = a.From_Account);
                    var l = Je.sessByTypeId(T.C2C, u);
                    l || (l = new Ke(T.C2C, u, u, c, 0, 0));
                    var p = new He(l, s, a.MsgSeq, a.MsgRandom, a.MsgTimeStamp, a.From_Account, D.COMMON, a.From_AccountNick, c), f = null, d = null, g = null;
                    for (var m in a.MsgBody) {
                        switch (g = (f = a.MsgBody[m]).MsgType) {
                          case A.TEXT:
                            d = new He.Elem.Text(f.MsgContent.Text);
                            break;

                          case A.FACE:
                            d = new He.Elem.Face(f.MsgContent.Index, f.MsgContent.Data);
                            break;

                          case A.IMAGE:
                            for (var I in d = new He.Elem.Images(f.MsgContent.UUID, f.MsgContent.ImageFormat || ""), 
                            f.MsgContent.ImageInfoArray) {
                                var M = f.MsgContent.ImageInfoArray[I];
                                d.addImage(new He.Elem.Images.Image(M.Type, M.Size, M.Width, M.Height, M.URL));
                            }
                            break;

                          case A.SOUND:
                            f.MsgContent ? d = new He.Elem.Sound(f.MsgContent.UUID, f.MsgContent.Second, f.MsgContent.Size, a.From_Account, a.To_Account, f.MsgContent.Download_Flag, T.C2C) : (g = A.TEXT, 
                            d = new He.Elem.Text("[语音消息]下载地址解析出错"));
                            break;

                          case A.LOCATION:
                            d = new He.Elem.Location(f.MsgContent.Longitude, f.MsgContent.Latitude, f.MsgContent.Desc);
                            break;

                          case A.FILE:
                          case A.FILE + " ":
                            g = A.FILE, f.MsgContent ? d = new He.Elem.File(f.MsgContent.UUID, f.MsgContent.FileName, f.MsgContent.FileSize, a.From_Account, a.To_Account, f.MsgContent.Download_Flag, T.C2C) : (g = A.TEXT, 
                            d = new He.Elem.Text("[文件消息下载地址解析出错]"));
                            break;

                          case A.CUSTOM:
                            try {
                                var y = JSON.parse(f.MsgContent.Data);
                                if (y && y.userAction && y.userAction == X) continue;
                            } catch (e) {}
                            g = A.CUSTOM, d = new He.Elem.Custom(f.MsgContent.Data, f.MsgContent.Desc, f.MsgContent.Ext);
                            break;

                          default:
                            g = A.TEXT, d = new He.Elem.Text("web端暂不支持" + f.MsgType + "消息");
                        }
                        p.elems.push(new He.Elem(g, d));
                    }
                    p.elems.length > 0 && Je.addMsg(p, !0) && r.push(p);
                }
                r.length > 0 && Je.updateTimeline(), r.length > 0 && e && e(r);
            }, function() {
                s && Ye.longPolling();
            });
            this.syncMsgs = function(t, n) {
                var o = [], r = [];
                !function e(t, n, o, r) {
                    Te(r, !0) && xe.apiCall(c, "getmsg", {
                        Cookie: t,
                        SyncFlag: n
                    }, function(t) {
                        if (t.MsgList && t.MsgList.length) for (var n in t.MsgList) ce.push(t.MsgList[n]);
                        1 == t.SyncFlag ? e(t.Cookie, t.SyncFlag, o, r) : (t.MsgList = ce, ce = [], o && o(t));
                    }, r);
                }(Je.cookie, Je.syncFlag, function(n) {
                    for (var i in 2 == n.SyncFlag && (Je.syncFlag = 0), r = n.MsgList, Je.cookie = n.Cookie, 
                    r) {
                        var s, u, a, c = r[i];
                        c.From_Account == re.identifier ? (s = !0, u = c.To_Account, a = "") : (s = !1, 
                        u = c.From_Account, a = "");
                        var l = Je.sessByTypeId(T.C2C, u);
                        l || (l = new Ke(T.C2C, u, u, a, 0, 0));
                        var p = new He(l, s, c.MsgSeq, c.MsgRandom, c.MsgTimeStamp, c.From_Account, D.COMMON, c.From_AccountNick, c.From_AccountHeadurl), f = null, d = null, g = null;
                        for (var m in c.MsgBody) {
                            switch (g = (f = c.MsgBody[m]).MsgType) {
                              case A.TEXT:
                                d = new He.Elem.Text(f.MsgContent.Text);
                                break;

                              case A.FACE:
                                d = new He.Elem.Face(f.MsgContent.Index, f.MsgContent.Data);
                                break;

                              case A.IMAGE:
                                for (var I in d = new He.Elem.Images(f.MsgContent.UUID, f.MsgContent.ImageFormat), 
                                f.MsgContent.ImageInfoArray) {
                                    var M = f.MsgContent.ImageInfoArray[I];
                                    d.addImage(new He.Elem.Images.Image(M.Type, M.Size, M.Width, M.Height, M.URL));
                                }
                                break;

                              case A.SOUND:
                                f.MsgContent ? d = new He.Elem.Sound(f.MsgContent.UUID, f.MsgContent.Second, f.MsgContent.Size, c.From_Account, c.To_Account, f.MsgContent.Download_Flag, T.C2C) : (g = A.TEXT, 
                                d = new He.Elem.Text("[语音消息]下载地址解析出错"));
                                break;

                              case A.LOCATION:
                                d = new He.Elem.Location(f.MsgContent.Longitude, f.MsgContent.Latitude, f.MsgContent.Desc);
                                break;

                              case A.FILE:
                              case A.FILE + " ":
                                g = A.FILE, f.MsgContent ? d = new He.Elem.File(f.MsgContent.UUID, f.MsgContent.FileName, f.MsgContent.FileSize, c.From_Account, c.To_Account, f.MsgContent.Download_Flag, T.C2C) : (g = A.TEXT, 
                                d = new He.Elem.Text("[文件消息下载地址解析出错]"));
                                break;

                              case A.CUSTOM:
                                try {
                                    var y = JSON.parse(f.MsgContent.Data);
                                    if (y && y.userAction && y.userAction == X) continue;
                                } catch (e) {}
                                g = A.CUSTOM, d = new He.Elem.Custom(f.MsgContent.Data, f.MsgContent.Desc, f.MsgContent.Ext);
                                break;

                              default:
                                g = A.TEXT, d = new He.Elem.Text("web端暂不支持" + f.MsgType + "消息");
                            }
                            p.elems.push(new He.Elem(g, d));
                        }
                        p.elems.length > 0 && Je.addMsg(p, !0) && o.push(p);
                    }
                    !function(e) {
                        for (var t in e) {
                            var n = e[t];
                            switch (v(n.GroupTips, !0), n.Event) {
                              case U.GROUP_SYSTEM:
                                Ie.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg"), v(n.GroupTips, !0);
                                break;

                              default:
                                Ie.error("syncMsgs收到未知的群系统消息类型: Event=" + n.Event);
                            }
                        }
                    }(n.EventArray), o.length > 0 && Je.updateTimeline(), t ? t(o) : o.length > 0 && e && e(o);
                }, function(e) {
                    Ie.error("getMsgs failed:" + e.ErrorInfo), n && n(e);
                });
            }, this.getC2CHistoryMsgs = function(e, t, n) {
                if (e.Peer_Account || !n) if (e.MaxCnt || (e.MaxCnt = 15), e.MaxCnt <= 0 && n) n(me.getReturnError("MaxCnt should be greater than 0", -14)); else {
                    if (e.MaxCnt > 15) return n ? void n(me.getReturnError("MaxCnt can not be greater than 15", -15)) : void 0;
                    null != e.MsgKey && void 0 !== e.MsgKey || (e.MsgKey = ""), function e(t, n, o) {
                        Te(o, !0) && xe.apiCall(c, "getroammsg", t, function(r) {
                            var i = t.MaxCnt, s = r.Complete, u = r.MaxCnt, a = r.MsgKey, c = r.LastMsgTime;
                            if (r.MsgList && r.MsgList.length) for (var l in r.MsgList) le.push(r.MsgList[l]);
                            var p = null;
                            0 == s && u < i && (p = {
                                Peer_Account: t.Peer_Account,
                                MaxCnt: i - u,
                                LastMsgTime: c,
                                MsgKey: a
                            }), p ? e(p, n, o) : (r.MsgList = le, le = [], n && n(r));
                        }, o);
                    }({
                        Peer_Account: e.Peer_Account,
                        MaxCnt: e.MaxCnt,
                        LastMsgTime: e.LastMsgTime,
                        MsgKey: e.MsgKey
                    }, function(n) {
                        var o, r = [];
                        o = n.MsgList;
                        var i = Je.sessByTypeId(T.C2C, e.Peer_Account);
                        for (var s in i || (i = new Ke(T.C2C, e.Peer_Account, e.Peer_Account, "", 0, 0)), 
                        o) {
                            var u, a = o[s], c = a.From_AccountHeadurl || "";
                            a.From_Account == re.identifier ? (u = !0, a.To_Account) : (u = !1, a.From_Account);
                            var l = new He(i, u, a.MsgSeq, a.MsgRandom, a.MsgTimeStamp, a.From_Account, D.COMMON, a.From_AccountNick, c), p = null, f = null, d = null;
                            for (var g in a.MsgBody) {
                                switch (d = (p = a.MsgBody[g]).MsgType) {
                                  case A.TEXT:
                                    f = new He.Elem.Text(p.MsgContent.Text);
                                    break;

                                  case A.FACE:
                                    f = new He.Elem.Face(p.MsgContent.Index, p.MsgContent.Data);
                                    break;

                                  case A.IMAGE:
                                    for (var m in f = new He.Elem.Images(p.MsgContent.UUID, p.MsgContent.ImageFormat), 
                                    p.MsgContent.ImageInfoArray) {
                                        var I = p.MsgContent.ImageInfoArray[m];
                                        f.addImage(new He.Elem.Images.Image(I.Type, I.Size, I.Width, I.Height, I.URL));
                                    }
                                    break;

                                  case A.SOUND:
                                    p.MsgContent ? f = new He.Elem.Sound(p.MsgContent.UUID, p.MsgContent.Second, p.MsgContent.Size, a.From_Account, a.To_Account, p.MsgContent.Download_Flag, T.C2C) : (d = A.TEXT, 
                                    f = new He.Elem.Text("[语音消息]下载地址解析出错"));
                                    break;

                                  case A.LOCATION:
                                    f = new He.Elem.Location(p.MsgContent.Longitude, p.MsgContent.Latitude, p.MsgContent.Desc);
                                    break;

                                  case A.FILE:
                                  case A.FILE + " ":
                                    d = A.FILE, p.MsgContent ? f = new He.Elem.File(p.MsgContent.UUID, p.MsgContent.FileName, p.MsgContent.FileSize, a.From_Account, a.To_Account, p.MsgContent.Download_Flag, T.C2C) : (d = A.TEXT, 
                                    f = new He.Elem.Text("[文件消息下载地址解析出错]"));
                                    break;

                                  case A.CUSTOM:
                                    d = A.CUSTOM, f = new He.Elem.Custom(p.MsgContent.Data, p.MsgContent.Desc, p.MsgContent.Ext);
                                    break;

                                  default:
                                    d = A.TEXT, f = new He.Elem.Text("web端暂不支持" + p.MsgType + "消息");
                                }
                                l.elems.push(new He.Elem(d, f));
                            }
                            Je.addMsg(l), r.push(l);
                        }
                        if (Je.updateTimeline(), t) {
                            var M = {
                                Complete: n.Complete,
                                MsgCount: r.length,
                                LastMsgTime: n.LastMsgTime,
                                MsgKey: n.MsgKey,
                                MsgList: r
                            };
                            i.isFinished(n.Complete), t(M);
                        }
                    }, function(e) {
                        Ie.error("getC2CHistoryMsgs failed:" + e.ErrorInfo), n && n(e);
                    });
                } else n(me.getReturnError("Peer_Account is empty", -13));
            }, this.syncGroupMsgs = function(t, n, o) {
                if (t.ReqMsgSeq <= 0) {
                    if (o) {
                        var r = me.getReturnError("ReqMsgSeq must be greater than 0", -16);
                        o(r);
                    }
                } else !function(e, t, n) {
                    Te(n, !0) && xe.apiCall(l, "group_msg_get", {
                        GroupId: e.GroupId,
                        ReqMsgSeq: e.ReqMsgSeq,
                        ReqMsgNumber: e.ReqMsgNumber
                    }, t, n);
                }({
                    GroupId: t.GroupId,
                    ReqMsgSeq: t.ReqMsgSeq,
                    ReqMsgNumber: t.ReqMsgNumber
                }, function(t) {
                    var o = [], r = (t.GroupId, t.RspMsgList), i = t.IsFinished;
                    if (null != r && void 0 !== r) {
                        for (var s = r.length - 1; s >= 0; s--) {
                            var u = r[s];
                            if (!u.IsPlaceMsg && u.From_Account && u.MsgBody && 0 != u.MsgBody.length) {
                                var a = ie(u, !0, !0, i);
                                a && o.push(a);
                            }
                        }
                        o.length > 0 && Je.updateTimeline(), n ? n(o) : o.length > 0 && e && e(o);
                    } else n && n([]);
                }, function(e) {
                    Ie.error("getGroupMsgs failed:" + e.ErrorInfo), o && o(e);
                });
            };
            var ie = function(e, n, o, r) {
                if (e.IsPlaceMsg || !e.From_Account || !e.MsgBody || 0 == e.MsgBody.length) return null;
                var i, s, u, a, c = e.ToGroupId, l = c;
                e.GroupInfo && e.GroupInfo.GroupName && (l = e.GroupInfo.GroupName), u = e.From_Account, 
                e.GroupInfo && (e.GroupInfo.From_AccountNick && (u = e.GroupInfo.From_AccountNick), 
                a = e.GroupInfo.From_AccountHeadurl ? e.GroupInfo.From_AccountHeadurl : null), e.From_Account == re.identifier ? (i = !0, 
                e.From_Account, s = "") : (i = !1, e.From_Account, s = "");
                var p = Je.sessByTypeId(T.GROUP, c);
                p || (p = new Ke(T.GROUP, c, l, s, 0, 0)), void 0 !== r && p.isFinished(r || 0);
                var f = q.COMMON;
                if (U.GROUP_TIP == e.Event || U.GROUP_TIP2 == e.Event) {
                    f = q.TIP;
                    var d = e.MsgBody;
                    e.MsgBody = [], e.MsgBody.push({
                        MsgType: A.GROUP_TIP,
                        MsgContent: d
                    });
                } else e.MsgPriority && (e.MsgPriority == B ? f = q.REDPACKET : e.MsgPriority == x && (f = q.LOVEMSG));
                var g = new He(p, i, e.MsgSeq, e.MsgRandom, e.MsgTimeStamp, e.From_Account, f, u, a), m = null, I = null, M = null;
                for (var y in e.MsgBody) {
                    switch (M = (m = e.MsgBody[y]).MsgType) {
                      case A.TEXT:
                        I = new He.Elem.Text(m.MsgContent.Text);
                        break;

                      case A.FACE:
                        I = new He.Elem.Face(m.MsgContent.Index, m.MsgContent.Data);
                        break;

                      case A.IMAGE:
                        for (var _ in I = new He.Elem.Images(m.MsgContent.UUID, m.MsgContent.ImageFormat || ""), 
                        m.MsgContent.ImageInfoArray) I.addImage(new He.Elem.Images.Image(m.MsgContent.ImageInfoArray[_].Type, m.MsgContent.ImageInfoArray[_].Size, m.MsgContent.ImageInfoArray[_].Width, m.MsgContent.ImageInfoArray[_].Height, m.MsgContent.ImageInfoArray[_].URL));
                        break;

                      case A.SOUND:
                        m.MsgContent ? I = new He.Elem.Sound(m.MsgContent.UUID, m.MsgContent.Second, m.MsgContent.Size, e.From_Account, e.To_Account, m.MsgContent.Download_Flag, T.GROUP) : (M = A.TEXT, 
                        I = new He.Elem.Text("[语音消息]下载地址解析出错"));
                        break;

                      case A.LOCATION:
                        I = new He.Elem.Location(m.MsgContent.Longitude, m.MsgContent.Latitude, m.MsgContent.Desc);
                        break;

                      case A.FILE:
                      case A.FILE + " ":
                        M = A.FILE;
                        Ae(m.MsgContent.UUID, e.From_Account, m.MsgContent.FileName);
                        m.MsgContent ? I = new He.Elem.File(m.MsgContent.UUID, m.MsgContent.FileName, m.MsgContent.FileSize, e.From_Account, e.To_Account, m.MsgContent.Download_Flag, T.GROUP) : (M = A.TEXT, 
                        I = new He.Elem.Text("[文件消息]地址解析出错"));
                        break;

                      case A.GROUP_TIP:
                        var h = m.MsgContent.OpType;
                        if (I = new He.Elem.GroupTip(h, m.MsgContent.Operator_Account, c, e.GroupInfo.GroupName, m.MsgContent.List_Account, m.MsgContent.MsgMemberExtraInfo), 
                        K.JOIN == h || K.QUIT == h) I.setGroupMemberNum(m.MsgContent.MemberNum); else if (K.MODIFY_GROUP_INFO == h) {
                            var E = !1, C = {
                                GroupId: c,
                                GroupFaceUrl: null,
                                GroupName: null,
                                OwnerAccount: null,
                                GroupNotification: null,
                                GroupIntroduction: null
                            }, S = m.MsgContent.MsgGroupNewInfo;
                            if (S.GroupFaceUrl) {
                                var F = new He.Elem.GroupTip.GroupInfo(z.FACE_URL, S.GroupFaceUrl);
                                I.addGroupInfo(F), E = !0, C.GroupFaceUrl = S.GroupFaceUrl;
                            }
                            if (S.GroupName) {
                                var G = new He.Elem.GroupTip.GroupInfo(z.NAME, S.GroupName);
                                I.addGroupInfo(G), E = !0, C.GroupName = S.GroupName;
                            }
                            if (S.Owner_Account) {
                                var v = new He.Elem.GroupTip.GroupInfo(z.OWNER, S.Owner_Account);
                                I.addGroupInfo(v), E = !0, C.OwnerAccount = S.Owner_Account;
                            }
                            if (S.GroupNotification) {
                                var O = new He.Elem.GroupTip.GroupInfo(z.NOTIFICATION, S.GroupNotification);
                                I.addGroupInfo(O), E = !0, C.GroupNotification = S.GroupNotification;
                            }
                            if (S.GroupIntroduction) {
                                var N = new He.Elem.GroupTip.GroupInfo(z.INTRODUCTION, S.GroupIntroduction);
                                I.addGroupInfo(N), E = !0, C.GroupIntroduction = S.GroupIntroduction;
                            }
                            0 == n && E && t && t(C);
                        } else if (K.MODIFY_MEMBER_INFO == h) {
                            var b = m.MsgContent.MsgMemberInfo;
                            for (var R in b) {
                                var L = b[R];
                                I.addMemberInfo(new He.Elem.GroupTip.MemberInfo(L.User_Account, L.ShutupTime));
                            }
                        }
                        break;

                      case A.CUSTOM:
                        M = A.CUSTOM, I = new He.Elem.Custom(m.MsgContent.Data, m.MsgContent.Desc, m.MsgContent.Ext);
                        break;

                      default:
                        M = A.TEXT, I = new He.Elem.Text("web端暂不支持" + m.MsgType + "消息");
                    }
                    g.elems.push(new He.Elem(M, I));
                }
                return 0 == o ? g : Je.addMsg(g, !0) ? (g.extraInfo = e.GroupInfo.MsgFrom_AccountExtraInfo, 
                g) : null;
            };
            this.init = function(u, a, c) {
                if (u.onMsgNotify || Ie.warn("listeners.onMsgNotify is empty"), e = u.onMsgNotify, 
                u.onBigGroupMsgNotify ? p = u.onBigGroupMsgNotify : Ie.warn("listeners.onBigGroupMsgNotify is empty"), 
                u.onC2cEventNotifys ? y = u.onC2cEventNotifys : Ie.warn("listeners.onC2cEventNotifys is empty"), 
                u.onGroupSystemNotifys ? n = u.onGroupSystemNotifys : Ie.warn("listeners.onGroupSystemNotifys is empty"), 
                u.onGroupInfoChangeNotify ? t = u.onGroupInfoChangeNotify : Ie.warn("listeners.onGroupInfoChangeNotify is empty"), 
                u.onFriendSystemNotifys ? o = u.onFriendSystemNotifys : Ie.warn("listeners.onFriendSystemNotifys is empty"), 
                u.onProfileSystemNotifys ? r = u.onProfileSystemNotifys : Ie.warn("listeners.onProfileSystemNotifys is empty"), 
                u.onKickedEventCall ? i = u.onKickedEventCall : Ie.warn("listeners.onKickedEventCall is empty"), 
                u.onLongPullingNotify ? onLongPullingNotify = u.onLongPullingNotify : Ie.warn("listeners.onKickedEventCall is empty"), 
                u.onAppliedDownloadUrl ? u.onAppliedDownloadUrl : Ie.warn("listeners.onAppliedDownloadUrl is empty"), 
                re.identifier && re.userSig) !function(e, t) {
                    var n = {
                        Member_Account: re.identifier,
                        Limit: 1e3,
                        Offset: 0,
                        GroupBaseInfoFilter: [ "NextMsgSeq" ]
                    };
                    Le(n, function(t) {
                        if (!t.GroupIdList || 0 == t.GroupIdList.length) return Ie.info("initMyGroupMaxSeqs: 目前还没有加入任何群组"), 
                        void (e && e(t));
                        for (var n = 0; n < t.GroupIdList.length; n++) {
                            var o = t.GroupIdList[n].GroupId, r = t.GroupIdList[n].NextMsgSeq - 1;
                            _[o] = r;
                        }
                        e && e(t);
                    }, function(e) {
                        Ie.error("initMyGroupMaxSeqs failed:" + e.ErrorInfo), t && t(e);
                    });
                }(function(e) {
                    Ie.info("initMyGroupMaxSeqs success"), E(function(e) {
                        if (Ie.info("initIpAndAuthkey success"), a) {
                            Ie.info("login success(have login state))");
                            var t = {
                                ActionStatus: C.OK,
                                ErrorCode: 0,
                                ErrorInfo: "login success"
                            };
                            a(t);
                        }
                        Ye.setLongPollingOn(!0), s && Ye.longPolling(a);
                    }, c);
                }, c); else if (a) {
                    var l = {
                        ActionStatus: C.OK,
                        ErrorCode: 0,
                        ErrorInfo: "login success(no login state)"
                    };
                    a(l);
                }
            }, this.sendMsg = function(e, t, n) {
                !function(e, t, n) {
                    if (Te(n, !0)) {
                        var o = null;
                        switch (e.sess.type()) {
                          case T.C2C:
                            o = {
                                From_Account: re.identifier,
                                To_Account: e.sess.id().toString(),
                                MsgTimeStamp: e.time,
                                MsgSeq: e.seq,
                                MsgRandom: e.random,
                                MsgBody: [],
                                OfflinePushInfo: e.offlinePushInfo
                            };
                            break;

                          case T.GROUP:
                            var r = e.getSubType();
                            switch (o = {
                                GroupId: e.sess.id().toString(),
                                From_Account: re.identifier,
                                Random: e.random,
                                MsgBody: []
                            }, r) {
                              case q.COMMON:
                                o.MsgPriority = "COMMON";
                                break;

                              case q.REDPACKET:
                                o.MsgPriority = "REDPACKET";
                                break;

                              case q.LOVEMSG:
                                o.MsgPriority = "LOVEMSG";
                                break;

                              case q.TIP:
                                Ie.error("不能主动发送群提示消息,subType=" + r);
                                break;

                              default:
                                return void Ie.error("发送群消息时，出现未知子消息类型：subType=" + r);
                            }
                        }
                        for (var i in e.elems) {
                            var s = e.elems[i], u = null, a = s.type;
                            switch (a) {
                              case A.TEXT:
                                u = {
                                    Text: s.content.text
                                };
                                break;

                              case A.FACE:
                                u = {
                                    Index: s.content.index,
                                    Data: s.content.data
                                };
                                break;

                              case A.IMAGE:
                                var p = [];
                                for (var f in s.content.ImageInfoArray) p.push({
                                    Type: s.content.ImageInfoArray[f].type,
                                    Size: s.content.ImageInfoArray[f].size,
                                    Width: s.content.ImageInfoArray[f].width,
                                    Height: s.content.ImageInfoArray[f].height,
                                    URL: s.content.ImageInfoArray[f].url
                                });
                                u = {
                                    ImageFormat: s.content.ImageFormat,
                                    UUID: s.content.UUID,
                                    ImageInfoArray: p
                                };
                                break;

                              case A.SOUND:
                                Ie.warn("web端暂不支持发送语音消息");
                                continue;

                              case A.LOCATION:
                                Ie.warn("web端暂不支持发送地理位置消息");
                                continue;

                              case A.FILE:
                                u = {
                                    UUID: s.content.uuid,
                                    FileName: s.content.name,
                                    FileSize: s.content.size,
                                    DownloadFlag: s.content.downFlag
                                };
                                break;

                              case A.CUSTOM:
                                u = {
                                    Data: s.content.data,
                                    Desc: s.content.desc,
                                    Ext: s.content.ext
                                }, a = A.CUSTOM;
                                break;

                              default:
                                Ie.warn("web端暂不支持发送" + s.type + "消息");
                                continue;
                            }
                            e.PushInfoBoolean && (o.OfflinePushInfo = e.PushInfo), o.MsgBody.push({
                                MsgType: a,
                                MsgContent: u
                            });
                        }
                        e.sess.type() == T.C2C ? xe.apiCall(c, "sendmsg", o, t, n) : e.sess.type() == T.GROUP && xe.apiCall(l, "send_group_msg", o, t, n);
                    }
                }(e, function(o) {
                    if (e.sess.type() == T.C2C) {
                        if (!Je.addMsg(e)) {
                            var r = "sendMsg: addMsg failed!", i = me.getReturnError(r, -17);
                            return Ie.error(r), void (n && n(i));
                        }
                        Je.updateTimeline();
                    }
                    t && t(o);
                }, function(e) {
                    n && n(e);
                });
            };
        }(), Ve = new function() {
            this.fileMd5 = null;
            this.uploadFile = function(e, t, n) {
                var o = {
                    init: function(e, t, n) {
                        var o = this;
                        o.file = e.file, o.onProgressCallBack = e.onProgressCallBack, e.abortButton && (e.abortButton.onclick = o.abortHandler), 
                        o.total = o.file.size, o.loaded = 0, o.step = 1105920, o.sliceSize = 0, o.sliceOffset = 0, 
                        o.timestamp = Me(), o.seq = ye(), o.random = _e(), o.fromAccount = re.identifier, 
                        o.toAccount = e.To_Account, o.fileMd5 = e.fileMd5, o.businessType = e.businessType, 
                        o.fileType = e.fileType, o.cbOk = t, o.cbErr = n, o.reader = new FileReader(), o.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, 
                        o.reader.onloadstart = o.onLoadStart, o.reader.onprogress = o.onProgress, o.reader.onabort = o.onAbort, 
                        o.reader.onerror = o.onerror, o.reader.onload = o.onLoad, o.reader.onloadend = o.onLoadEnd;
                    },
                    upload: function() {
                        o.readBlob(0);
                    },
                    onLoadStart: function() {},
                    onProgress: function(e) {
                        var t = o;
                        t.loaded += e.loaded, t.onProgressCallBack && t.onProgressCallBack(t.loaded, t.total);
                    },
                    onAbort: function() {},
                    onError: function() {},
                    onLoad: function(e) {
                        var t = o;
                        if (e.target.readyState == FileReader.DONE) {
                            var n = e.target.result, r = n.indexOf(",");
                            -1 != r && (n = n.substr(r + 1));
                            var i = {
                                From_Account: t.fromAccount,
                                To_Account: t.toAccount,
                                Busi_Id: t.businessType,
                                File_Type: t.fileType,
                                File_Str_Md5: t.fileMd5,
                                PkgFlag: G,
                                File_Size: t.total,
                                Slice_Offset: t.sliceOffset,
                                Slice_Size: t.sliceSize,
                                Slice_Data: n,
                                Seq: t.seq,
                                Timestamp: t.timestamp,
                                Random: t.random
                            }, s = function(e) {
                                if (0 == e.IsFinish) t.loaded = e.Next_Offset, t.loaded < t.total ? t.readBlob(t.loaded) : t.loaded = t.total; else if (t.cbOk) {
                                    var n = {
                                        ActionStatus: e.ActionStatus,
                                        ErrorCode: e.ErrorCode,
                                        ErrorInfo: e.ErrorInfo,
                                        File_UUID: e.File_UUID,
                                        File_Size: e.Next_Offset,
                                        URL_INFO: e.URL_INFO,
                                        Download_Flag: e.Download_Flag
                                    };
                                    t.fileType == R.FILE && (n.URL_INFO = Ae(e.File_UUID, re.identifier, t.file.name)), 
                                    t.cbOk(n);
                                }
                                te = 0;
                            };
                            ke(i, s, function e(n) {
                                te < 20 ? (te++, setTimeout(function() {
                                    ke(i, s, e);
                                }, 1e3)) : t.cbErr(n);
                            });
                        }
                    },
                    onLoadEnd: function() {},
                    readBlob: function(e) {
                        var t, n = o, r = n.file, i = e + n.step;
                        i > n.total ? (i = n.total, n.sliceSize = i - e) : n.sliceSize = n.step, n.sliceOffset = e, 
                        t = n.blobSlice.call(r, e, i), n.reader.readAsDataURL(t);
                    },
                    abortHandler: function() {
                        var e = o;
                        e.reader && e.reader.abort();
                    }
                };
                !function(e, t, n) {
                    var o = null;
                    try {
                        o = new FileReader();
                    } catch (e) {
                        if (n) return void n(me.getReturnError("当前浏览器不支持FileReader", -18));
                    }
                    var r = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                    if (r || !n) {
                        var i = 2097152, s = Math.ceil(e.size / i), u = 0, a = new SparkMD5();
                        o.onload = function(e) {
                            for (var n = "", o = new Uint8Array(e.target.result), r = o.byteLength, i = 0; i < r; i++) n += String.fromCharCode(o[i]);
                            a.appendBinary(n), ++u < s ? c() : (this.fileMd5 = a.end(), t && t(this.fileMd5));
                        }, c();
                    } else n(me.getReturnError("当前浏览器不支持FileAPI", -19));
                    function c() {
                        var t = u * i, n = t + i >= e.size ? e.size : t + i, s = r.call(e, t, n);
                        o.readAsArrayBuffer(s);
                    }
                }(e.file, function(r) {
                    Ie.info("fileMd5: " + r), e.fileMd5 = r, o.init(e, t, n), o.upload();
                }, n);
            };
        }();
        n.SESSION_TYPE = T, n.MSG_MAX_LENGTH = {
            C2C: 12e3,
            GROUP: 8898
        }, n.C2C_MSG_SUB_TYPE = D, n.GROUP_MSG_SUB_TYPE = q, n.MSG_ELEMENT_TYPE = A, n.GROUP_TIP_TYPE = K, 
        n.IMAGE_TYPE = S, n.GROUP_SYSTEM_TYPE = H, n.FRIEND_NOTICE_TYPE = J, n.GROUP_TIP_MODIFY_GROUP_INFO_TYPE = z, 
        n.BROWSER_INFO = a, n.Emotions = n.EmotionPicData = ge, n.EmotionDataIndexs = n.EmotionPicDataIndex = de, 
        n.TLS_ERROR_CODE = {
            OK: 0,
            SIGNATURE_EXPIRATION: 11
        }, n.CONNECTION_STATUS = V, n.UPLOAD_PIC_BUSSINESS_TYPE = {
            GROUP_MSG: 1,
            C2C_MSG: 2,
            USER_HEAD: 3,
            GROUP_HEAD: 4
        }, n.RECENT_CONTACT_TYPE = {
            C2C: 1,
            GROUP: 2
        }, n.UPLOAD_RES_TYPE = R, n.Tool = me, n.Log = Ie, n.Msg = He, n.Session = Ke, n.MsgStore = {
            sessMap: function() {
                return Je.sessMap();
            },
            sessCount: function() {
                return Je.sessCount();
            },
            sessByTypeId: function(e, t) {
                return Je.sessByTypeId(e, t);
            },
            delSessByTypeId: function(e, t) {
                return Je.delSessByTypeId(e, t);
            },
            resetCookieAndSyncFlag: function() {
                return Je.resetCookieAndSyncFlag();
            }
        }, n.Resources = fe, n.login = n.init = function(e, t, n, o, r) {
            xe.init(t.onConnNotify, o, r), function(e, t, n, o, r) {
                Fe(), n && (ie = n), 0 == ie.isAccessFormalEnv && (Ie.error("请切换为正式环境！！！！"), s = ie.isAccessFormalEnv), 
                0 == ie.isLogOn && Ie.setOn(ie.isLogOn), e || !r ? e.sdkAppID || !r ? e.accountType || !r ? (e.identifier && (re.identifier = e.identifier.toString()), 
                e.identifier && !e.userSig && r ? r(me.getReturnError("loginInfo.userSig is empty", -9)) : (e.userSig && (re.userSig = e.userSig.toString()), 
                re.sdkAppID = e.sdkAppID, re.accountType = e.accountType, re.identifier && re.userSig ? ve(function() {
                    Oe(function(e, n) {
                        Ye.init(t, function(t) {
                            o && (t.identifierNick = e, t.headurl = n, o(t));
                        }, r);
                    }, r);
                }) : Ye.init(t, o, r))) : r(me.getReturnError("loginInfo.accountType is empty", -8)) : r(me.getReturnError("loginInfo.sdkAppID is empty", -7)) : r(me.getReturnError("loginInfo is empty", -6));
            }(e, t, n, o, r);
        }, n.logout = n.offline = function(e, t) {
            return Ne("instance", e, t);
        }, n.logoutAll = function(e, t) {
            return Ne("all", e, t);
        }, n.sendMsg = function(e, t, n) {
            return Ye.sendMsg(e, t, n);
        }, n.syncMsgs = function(e, t) {
            return Ye.syncMsgs(e, t);
        }, n.getC2CHistoryMsgs = function(e, t, n) {
            return Ye.getC2CHistoryMsgs(e, t, n);
        }, n.syncGroupMsgs = function(e, t, n) {
            return Ye.syncGroupMsgs(e, t, n);
        }, n.c2CMsgReaded = function(e, t, n) {
            return Je.c2CMsgReaded(e, t, n);
        }, n.groupMsgReaded = function(e, t, n) {
            return Pe(e, t, n);
        }, n.setAutoRead = function(e, t, n) {
            return Je.setAutoRead(e, t, n);
        }, n.createGroup = function(e, t, n) {
            return function(e, t, n) {
                if (Te(n, !0)) {
                    for (var o = {
                        Type: e.Type,
                        Name: e.Name
                    }, r = [], i = 0; i < e.MemberList.length; i++) r.push({
                        Member_Account: e.MemberList[i]
                    });
                    o.MemberList = r, e.GroupId && (o.GroupId = e.GroupId), e.Owner_Account && (o.Owner_Account = e.Owner_Account), 
                    e.Introduction && (o.Introduction = e.Introduction), e.Notification && (o.Notification = e.Notification), 
                    e.MaxMemberCount && (o.MaxMemberCount = e.MaxMemberCount), e.ApplyJoinOption && (o.ApplyJoinOption = e.ApplyJoinOption), 
                    e.AppDefinedData && (o.AppDefinedData = e.AppDefinedData), e.FaceUrl && (o.FaceUrl = e.FaceUrl), 
                    xe.apiCall(l, "create_group", o, t, n);
                }
            }(e, t, n);
        }, n.createGroupHigh = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "create_group", e, t, n);
            }(e, t, n);
        }, n.applyJoinGroup = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && (e.GroupId = String(e.GroupId), xe.apiCall(l, "apply_join_group", {
                    GroupId: e.GroupId,
                    ApplyMsg: e.ApplyMsg,
                    UserDefinedField: e.UserDefinedField
                }, t, n));
            }(e, t, n);
        }, n.handleApplyJoinGroupPendency = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "handle_apply_join_group", {
                    GroupId: e.GroupId,
                    Applicant_Account: e.Applicant_Account,
                    HandleMsg: e.HandleMsg,
                    Authentication: e.Authentication,
                    MsgKey: e.MsgKey,
                    ApprovalMsg: e.ApprovalMsg,
                    UserDefinedField: e.UserDefinedField
                }, t, function(e) {
                    if (10024 == e.ErrorCode) {
                        if (t) {
                            var o = {
                                ActionStatus: C.OK,
                                ErrorCode: 0,
                                ErrorInfo: "该申请已经被处理过"
                            };
                            t(o);
                        }
                    } else n && n(e);
                });
            }(e, t, n);
        }, n.getPendencyGroup = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "get_pendency", {
                    StartTime: e.StartTime,
                    Limit: e.Limit,
                    Handle_Account: re.identifier
                }, t, function(e) {});
            }(e, t, n);
        }, n.getPendencyGroupRead = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "report_pendency", {
                    ReportTime: e.ReportTime,
                    From_Account: re.identifier
                }, t, function(e) {});
            }(e, t, n);
        }, n.handleInviteJoinGroupRequest = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "handle_invite_join_group", {
                    GroupId: e.GroupId,
                    Inviter_Account: e.Inviter_Account,
                    HandleMsg: e.HandleMsg,
                    Authentication: e.Authentication,
                    MsgKey: e.MsgKey,
                    ApprovalMsg: e.ApprovalMsg,
                    UserDefinedField: e.UserDefinedField
                }, t, function(e) {});
            }(e, t, n);
        }, n.deleteApplyJoinGroupPendency = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(c, "deletemsg", e, t, n);
            }(e, t, n);
        }, n.quitGroup = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "quit_group", {
                    GroupId: e.GroupId
                }, t, n);
            }(e, t, n);
        }, n.searchGroupByName = function(e, t, n) {
            return function(e, t, n) {
                xe.apiCall(l, "search_group", e, t, n);
            }(e, t, n);
        }, n.getGroupPublicInfo = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "get_group_public_info", {
                    GroupIdList: e.GroupIdList,
                    ResponseFilter: {
                        GroupBasePublicInfoFilter: e.GroupBasePublicInfoFilter
                    }
                }, function(e) {
                    if (e.ErrorInfo = "", e.GroupInfo) for (var o in e.GroupInfo) {
                        var r = e.GroupInfo[o].ErrorCode;
                        r > 0 && (e.ActionStatus = C.FAIL, e.GroupInfo[o].ErrorInfo = "[" + r + "]" + e.GroupInfo[o].ErrorInfo, 
                        e.ErrorInfo += e.GroupInfo[o].ErrorInfo + "\n");
                    }
                    e.ActionStatus == C.FAIL ? n && n(e) : t && t(e);
                }, n);
            }(e, t, n);
        }, n.getGroupInfo = function(e, t, n) {
            return function(e, t, n) {
                if (Te(n, !0)) {
                    var o = {
                        GroupIdList: e.GroupIdList,
                        ResponseFilter: {
                            GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                            MemberInfoFilter: e.MemberInfoFilter
                        }
                    };
                    e.AppDefinedDataFilter_Group && (o.ResponseFilter.AppDefinedDataFilter_Group = e.AppDefinedDataFilter_Group), 
                    e.AppDefinedDataFilter_GroupMember && (o.ResponseFilter.AppDefinedDataFilter_GroupMember = e.AppDefinedDataFilter_GroupMember), 
                    xe.apiCall(l, "get_group_info", o, t, n);
                }
            }(e, t, n);
        }, n.modifyGroupBaseInfo = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "modify_group_base_info", e, t, n);
            }(e, t, n);
        }, n.getGroupMemberInfo = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "get_group_member_info", {
                    GroupId: e.GroupId,
                    Offset: e.Offset,
                    Limit: e.Limit,
                    MemberInfoFilter: e.MemberInfoFilter,
                    MemberRoleFilter: e.MemberRoleFilter,
                    AppDefinedDataFilter_GroupMember: e.AppDefinedDataFilter_GroupMember
                }, t, n);
            }(e, t, n);
        }, n.addGroupMember = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "add_group_member", {
                    GroupId: e.GroupId,
                    Silence: e.Silence,
                    MemberList: e.MemberList
                }, t, n);
            }(e, t, n);
        }, n.modifyGroupMember = function(e, t, n) {
            return function(e, t, n) {
                if (Te(n, !0)) {
                    var o = {};
                    e.GroupId && (o.GroupId = e.GroupId), e.Member_Account && (o.Member_Account = e.Member_Account), 
                    e.Role && (o.Role = e.Role), e.MsgFlag && (o.MsgFlag = e.MsgFlag), e.ShutUpTime && (o.ShutUpTime = e.ShutUpTime), 
                    e.NameCard && (o.NameCard = e.NameCard), e.AppMemberDefinedData && (o.AppMemberDefinedData = e.AppMemberDefinedData), 
                    xe.apiCall(l, "modify_group_member_info", o, t, n);
                }
            }(e, t, n);
        }, n.deleteGroupMember = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "delete_group_member", {
                    GroupId: e.GroupId,
                    Silence: e.Silence,
                    MemberToDel_Account: e.MemberToDel_Account,
                    Reason: e.Reason
                }, t, n);
            }(e, t, n);
        }, n.destroyGroup = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "destroy_group", {
                    GroupId: e.GroupId
                }, t, n);
            }(e, t, n);
        }, n.changeGroupOwner = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "change_group_owner", e, t, n);
            }(e, t, n);
        }, n.getJoinedGroupListHigh = function(e, t, n) {
            return Le(e, t, n);
        }, n.getRoleInGroup = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "get_role_in_group", {
                    GroupId: e.GroupId,
                    User_Account: e.User_Account
                }, t, n);
            }(e, t, n);
        }, n.forbidSendMsg = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "forbid_send_msg", {
                    GroupId: e.GroupId,
                    Members_Account: e.Members_Account,
                    ShutUpTime: e.ShutUpTime
                }, t, n);
            }(e, t, n);
        }, n.sendCustomGroupNotify = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(l, "send_group_system_notification", e, t, n);
            }(e, t, n);
        }, n.applyJoinBigGroup = function(e, t, n) {
            return function(e, t, n) {
                var o;
                e.GroupId = String(e.GroupId), o = Te(n, !1) ? l : m, Ye.checkBigGroupLongPollingOn(e.GroupId) ? n && n(me.getReturnError("Join Group failed; You have already been in this group, you have to quit group before you rejoin", 10013)) : xe.apiCall(o, "apply_join_group", {
                    GroupId: e.GroupId,
                    ApplyMsg: e.ApplyMsg,
                    UserDefinedField: e.UserDefinedField
                }, function(o) {
                    if (o.JoinedStatus && "JoinedSuccess" == o.JoinedStatus) {
                        if (!o.LongPollingKey) return void (n && n(me.getReturnError("Join Group succeed; But the type of group is not AVChatRoom: groupid=" + e.GroupId, -12)));
                        Ye.setBigGroupLongPollingOn(!0), Ye.setBigGroupLongPollingKey(e.GroupId, o.LongPollingKey), 
                        Ye.setBigGroupLongPollingMsgMap(e.GroupId, 0), Ye.bigGroupLongPolling(e.GroupId);
                    }
                    t && t(o);
                }, function(e) {
                    n && n(e);
                });
            }(e, t, n);
        }, n.quitBigGroup = function(e, t, n) {
            return function(e, t, n) {
                var o;
                o = Te(n, !1) ? l : m, Ye.resetBigGroupLongPollingInfo(e.GroupId), xe.apiCall(o, "quit_group", {
                    GroupId: e.GroupId
                }, function(n) {
                    Je.delSessByTypeId(T.GROUP, e.GroupId), t && t(n);
                }, n);
            }(e, t, n);
        }, n.getProfilePortrait = function(e, t, n) {
            return De(e, t, n);
        }, n.setProfilePortrait = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(f, "portrait_set", {
                    From_Account: re.identifier,
                    ProfileItem: e.ProfileItem
                }, function(n) {
                    for (var o in e.ProfileItem) {
                        var r = e.ProfileItem[o];
                        if ("Tag_Profile_IM_Nick" == r.Tag) {
                            re.identifierNick = r.Value;
                            break;
                        }
                    }
                    t && t(n);
                }, n);
            }(e, t, n);
        }, n.applyAddFriend = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "friend_add", {
                    From_Account: re.identifier,
                    AddFriendItem: e.AddFriendItem
                }, function(e) {
                    var o = Ue(e);
                    o.ActionStatus == C.FAIL ? n && n(o) : t && t(o);
                }, n);
            }(e, t, n);
        }, n.getPendency = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "pendency_get", {
                    From_Account: re.identifier,
                    PendencyType: e.PendencyType,
                    StartTime: e.StartTime,
                    MaxLimited: e.MaxLimited,
                    LastSequence: e.LastSequence
                }, t, n);
            }(e, t, n);
        }, n.getPendencyReport = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "PendencyReport", {
                    From_Account: re.identifier,
                    LatestPendencyTimeStamp: e.LatestPendencyTimeStamp
                }, t, n);
            }(e, t, n);
        }, n.deletePendency = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "pendency_delete", {
                    From_Account: re.identifier,
                    PendencyType: e.PendencyType,
                    To_Account: e.To_Account
                }, function(e) {
                    var o = Ue(e);
                    o.ActionStatus == C.FAIL ? n && n(o) : t && t(o);
                }, n);
            }(e, t, n);
        }, n.responseFriend = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "friend_response", {
                    From_Account: re.identifier,
                    ResponseFriendItem: e.ResponseFriendItem
                }, function(e) {
                    var o = Ue(e);
                    o.ActionStatus == C.FAIL ? n && n(o) : t && t(o);
                }, n);
            }(e, t, n);
        }, n.getAllFriend = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "friend_get_all", {
                    From_Account: re.identifier,
                    TimeStamp: e.TimeStamp,
                    StartIndex: e.StartIndex,
                    GetCount: e.GetCount,
                    LastStandardSequence: e.LastStandardSequence,
                    TagList: e.TagList
                }, t, n);
            }(e, t, n);
        }, n.deleteChat = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && (1 == e.chatType ? xe.apiCall(y, "delete", {
                    From_Account: re.identifier,
                    Type: e.chatType,
                    To_Account: e.To_Account
                }, t, n) : xe.apiCall(y, "delete", {
                    From_Account: re.identifier,
                    Type: e.chatType,
                    ToGroupid: e.To_Account
                }, t, n));
            }(e, t, n);
        }, n.deleteFriend = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "friend_delete", {
                    From_Account: re.identifier,
                    To_Account: e.To_Account,
                    DeleteType: e.DeleteType
                }, function(e) {
                    var o = Ue(e);
                    o.ActionStatus == C.FAIL ? n && n(o) : t && t(o);
                }, n);
            }(e, t, n);
        }, n.addBlackList = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "black_list_add", {
                    From_Account: re.identifier,
                    To_Account: e.To_Account
                }, function(e) {
                    var o = Ue(e);
                    o.ActionStatus == C.FAIL ? n && n(o) : t && t(o);
                }, n);
            }(e, t, n);
        }, n.deleteBlackList = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "black_list_delete", {
                    From_Account: re.identifier,
                    To_Account: e.To_Account
                }, function(e) {
                    var o = Ue(e);
                    o.ActionStatus == C.FAIL ? n && n(o) : t && t(o);
                }, n);
            }(e, t, n);
        }, n.getBlackList = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(p, "black_list_get", {
                    From_Account: re.identifier,
                    StartIndex: e.StartIndex,
                    MaxLimited: e.MaxLimited,
                    LastSequence: e.LastSequence
                }, t, n);
            }(e, t, n);
        }, n.getRecentContactList = function(e, t, n) {
            return function(e, t, n) {
                Te(n, !0) && xe.apiCall(d, "get", {
                    From_Account: re.identifier,
                    Count: e.Count
                }, t, n);
            }(e, t, n);
        }, n.uploadFile = n.uploadPic = function(e, t, n) {
            return Ve.uploadFile(e, t, n);
        }, n.submitUploadFileForm = function(e, t, n) {
            return Ve.submitUploadFileForm(e, t, n);
        }, n.uploadFileByBase64 = n.uploadPicByBase64 = function(e, t, n) {
            var o = {
                To_Account: e.toAccount,
                Busi_Id: e.businessType,
                File_Type: e.File_Type,
                File_Str_Md5: e.fileMd5,
                PkgFlag: G,
                File_Size: e.totalSize,
                Slice_Offset: 0,
                Slice_Size: e.totalSize,
                Slice_Data: e.base64Str,
                Seq: ye(),
                Timestamp: Me(),
                Random: _e()
            };
            return ke(o, t, n);
        }, n.getLongPollingId = function(e, t, n) {
            return qe(0, t, n);
        }, n.applyDownload = function(e, t, n) {
            return Be(e, t, n);
        }, n.checkLogin = function(e, t) {
            return Te(e, t);
        };
    }(n), n;
}();