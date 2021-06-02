var e, o, r, n, t, i, a = require("webim_wx.js");

function c(e) {
    var o, r, n, t, i;
    switch ((o = e.getFromAccount()) || (o = ""), (r = e.getFromAccountNick()) || (r = o), 
    n = e.getSession().type(), t = e.getSubType(), n) {
      case a.SESSION_TYPE.C2C:
        switch (t) {
          case a.C2C_MSG_SUB_TYPE.COMMON:
            i = T(e), a.Log.warn("receive a new c2c msg: fromAccountNick=" + r + ", content=" + i);
            var c = {
                To_Account: o,
                LastedMsgTime: e.getTime()
            };
            a.c2CMsgReaded(c), console.error("收到一条c2c消息(好友消息或者全员推送消息): 发送人=" + r + ", 内容=" + i);
        }
        break;

      case a.SESSION_TYPE.GROUP:
    }
}

function s(o, r, n, t) {
    a.login(o, r, n, function(r) {
        console.debug(r), a.Log.info("webim登录成功"), e = o, u({
            ProfileItem: [ {
                Tag: "Tag_Profile_IM_Nick",
                Value: o.identifierNick
            } ]
        }, function() {
            g(t, e, function() {
                f(t);
            });
        });
    }, function(e) {
        console.error(e.ErrorInfo);
    });
}

function u(e, o) {
    a.setProfilePortrait(e, function(e) {
        a.Log.info("修改昵称成功"), o && o();
    }, function() {});
}

function g(e, o, r) {
    var n = {
        GroupId: e,
        Owner_Account: o.identifier,
        Type: "AVChatRoom",
        Name: "DemoGroup",
        MemberList: [],
        ApplyJoinOption: "FreeAccess"
    };
    a.createGroup(n, function(e) {
        console.info("succ"), r();
    }, function(e) {
        console.error(e.ErrorInfo), r();
    });
}

function f(e) {
    var o = {
        GroupId: e
    };
    a.applyJoinBigGroup(o, function(o) {
        o.JoinedStatus && "JoinedSuccess" == o.JoinedStatus ? (a.Log.info("进群成功"), n = e) : console.error("进群失败");
    }, function(e) {
        console.error(e.ErrorInfo);
    });
}

function l(e) {
    var o, r;
    e.getFromAccount(), (o = e.getFromAccountNick()) || (o = "未知用户"), e.getSession().type(), 
    r = e.getSubType(), e.getIsSend();
    var n = "";
    switch (r) {
      case a.GROUP_MSG_SUB_TYPE.COMMON:
        n = T(e);
        break;

      case a.GROUP_MSG_SUB_TYPE.REDPACKET:
        n = "[群红包消息]" + T(e);
        break;

      case a.GROUP_MSG_SUB_TYPE.LOVEMSG:
        n = "[群点赞消息]" + T(e);
        break;

      case a.GROUP_MSG_SUB_TYPE.TIP:
        n = "[群提示消息]" + T(e);
    }
    return {
        fromAccountNick: o,
        content: n
    };
}

function T(e) {
    var o, r, n, t, i = "";
    for (var c in o = e.getElems()) switch (n = (r = o[c]).getType(), t = r.getContent(), 
    n) {
      case a.MSG_ELEMENT_TYPE.TEXT:
        i += p(t);
        break;

      case a.MSG_ELEMENT_TYPE.FACE:
        i += d(t);
        break;

      case a.MSG_ELEMENT_TYPE.IMAGE:
        i += _(t);
        break;

      case a.MSG_ELEMENT_TYPE.SOUND:
        i += E(t);
        break;

      case a.MSG_ELEMENT_TYPE.FILE:
        i += I(t);
        break;

      case a.MSG_ELEMENT_TYPE.LOCATION:
        break;

      case a.MSG_ELEMENT_TYPE.CUSTOM:
        i += m(t);
        break;

      case a.MSG_ELEMENT_TYPE.GROUP_TIP:
        i += G(t);
        break;

      default:
        a.Log.error("未知消息元素类型: elemType=" + n);
    }
    return a.Tool.formatHtml2Text(i);
}

function p(e) {
    return e.getText();
}

function d(e) {
    return e.getData();
}

function _(e) {
    var o = e.getImage(a.IMAGE_TYPE.SMALL), r = e.getImage(a.IMAGE_TYPE.LARGE), n = e.getImage(a.IMAGE_TYPE.ORIGIN);
    return r || (r = o), n || (n = o), "<img src='" + o.getUrl() + "#" + r.getUrl() + "#" + n.getUrl() + "' style='CURSOR: hand' id='" + e.getImageId() + "' bigImgUrl='" + r.getUrl() + "' onclick='imageClick(this)' />";
}

function E(e) {
    e.getSecond();
    var o = e.getDownUrl();
    return "ie" == a.BROWSER_INFO.type && parseInt(a.BROWSER_INFO.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + o : '<audio src="' + o + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
}

function I(e) {
    var o = Math.round(e.getSize() / 1024);
    return '<a href="' + e.getDownUrl() + '" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + e.getName() + "(" + o + "KB)</i></a>";
}

function m(e) {
    return "data=" + e.getData() + ", desc=" + e.getDesc() + ", ext=" + e.getExt();
}

function G(e) {
    var o, r, n, t, i = "";
    switch (o = e.getOpType(), r = e.getOpUserId(), o) {
      case a.GROUP_TIP_TYPE.JOIN:
        for (var c in n = e.getUserIdList()) if (i += n[c] + ",", n.length > 10 && 9 == c) {
            i += "等" + n.length + "人";
            break;
        }
        i = i.substring(0, i.length - 1), i += "进入房间", t = parseInt(t) + 1;
        break;

      case a.GROUP_TIP_TYPE.QUIT:
        i += r + "离开房间", t > 0 && (t = parseInt(t) - 1);
        break;

      case a.GROUP_TIP_TYPE.KICK:
        for (var c in i += r + "将", n = e.getUserIdList()) if (i += n[c] + ",", n.length > 10 && 9 == c) {
            i += "等" + n.length + "人";
            break;
        }
        i += "踢出该群";
        break;

      case a.GROUP_TIP_TYPE.SET_ADMIN:
        for (var c in i += r + "将", n = e.getUserIdList()) if (i += n[c] + ",", n.length > 10 && 9 == c) {
            i += "等" + n.length + "人";
            break;
        }
        i += "设为管理员";
        break;

      case a.GROUP_TIP_TYPE.CANCEL_ADMIN:
        for (var c in i += r + "取消", n = e.getUserIdList()) if (i += n[c] + ",", n.length > 10 && 9 == c) {
            i += "等" + n.length + "人";
            break;
        }
        i += "的管理员资格";
        break;

      case a.GROUP_TIP_TYPE.MODIFY_GROUP_INFO:
        i += r + "修改了群资料：";
        var s, u, g = e.getGroupInfoList();
        for (var c in g) switch (s = g[c].getType(), u = g[c].getValue(), s) {
          case a.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL:
            i += "群头像为" + u + "; ";
            break;

          case a.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME:
            i += "群名称为" + u + "; ";
            break;

          case a.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER:
            i += "群主为" + u + "; ";
            break;

          case a.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION:
            i += "群公告为" + u + "; ";
            break;

          case a.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION:
            i += "群简介为" + u + "; ";
            break;

          default:
            i += "未知信息为:type=" + s + ",value=" + u + "; ";
        }
        break;

      case a.GROUP_TIP_TYPE.MODIFY_MEMBER_INFO:
        i += r + "修改了群成员资料:";
        var f, l = e.getMemberInfoList();
        for (var c in l) if (i += l[c].getUserId() + ": ", i += null != (f = l[c].getShutupTime()) && void 0 !== f ? 0 == f ? "取消禁言; " : "禁言" + f + "秒; " : " shutupTime为空", 
        l.length > 10 && 9 == c) {
            i += "等" + l.length + "人";
            break;
        }
        break;

      default:
        i += "未知群提示消息类型：type=" + o;
    }
    return i;
}

function M() {
    console.warn("tlslogin need rewrite");
}

function O() {}

function N() {}

function P() {}

function S() {}

function y() {}

function R(e) {
    $("#send_msg_text").val($("#send_msg_text").val() + e.id);
}

function v(o) {
    var r = {
        GroupId: o
    };
    a.quitBigGroup(r, function(o) {
        a.Log.info("退群成功"), t = null, setInterval(g("testtest", e, function() {
            f("testtest");
        }), 2e4);
    }, function(e) {
        console.error(e.ErrorInfo);
    });
}

function L(e, o, r, n, t, i) {
    var c = "收到一条群系统消息: type=" + e + ", typeCh=" + o + ",群ID=" + r + ", 群名称=" + n + ", 内容=" + t + ", 时间=" + a.Tool.formatTimeStamp(i);
    a.Log.warn(c), console.error(c);
}

module.exports = {
    init: function(e) {
        o = e.accountMode, e.accountType, e.sdkAppID, e.avChatRoomId, r = e.selType, n = e.selToID;
    },
    onBigGroupMsgNotify: function(e, o) {
        for (var r = e.length - 1; r >= 0; r--) {
            var n = e[r];
            a.Log.warn("receive a new avchatroom group msg: " + n.getFromAccountNick()), o(l(n));
        }
    },
    onMsgNotify: function(e) {
        for (var o in e) c(e[o]);
    },
    handlderMsg: c,
    sdkLogin: s,
    applyJoinBigGroup: f,
    showMsg: l,
    convertMsgtoHtml: T,
    convertTextMsgToHtml: p,
    convertFaceMsgToHtml: d,
    convertImageMsgToHtml: _,
    convertSoundMsgToHtml: E,
    convertFileMsgToHtml: I,
    convertLocationMsgToHtml: function(e) {
        return "经度=" + e.getLongitude() + ",纬度=" + e.getLatitude() + ",描述=" + e.getDesc();
    },
    convertCustomMsgToHtml: m,
    convertGroupTipMsgToHtml: G,
    tlsLogin: M,
    tlsGetUserSig: function(o) {
        if (o.ErrorCode == a.TLS_ERROR_CODE.OK) {
            e.identifier = a.Tool.getQueryString("identifier"), e.userSig = o.UserSig, e.sdkAppID = e.appIDAt3rd = Number(a.Tool.getQueryString("sdkappid"));
            var r = a.Tool.getCookie("accountType");
            r ? (e.accountType = r, s()) : location.href = location.href.replace(/\?.*$/gi, "");
        } else o.ErrorCode == a.TLS_ERROR_CODE.SIGNATURE_EXPIRATION ? M() : console.error("[" + o.ErrorCode + "]" + o.ErrorInfo);
    },
    imageClick: function(e) {
        var o = e.src.split("#"), r = o[0], n = o[1], t = o[2];
        a.Log.info("小图url:" + r), a.Log.info("大图url:" + n), a.Log.info("原图url:" + t);
    },
    onChangePlayAudio: function(e) {
        curPlayAudio ? curPlayAudio != e && (curPlayAudio.currentTime = 0, curPlayAudio.pause(), 
        curPlayAudio = e) : curPlayAudio = e;
    },
    smsPicClick: function() {
        e.identifier || (1 == o ? M() : console.error("请填写帐号和票据"));
    },
    onSendMsg: function(c, s) {
        if (console.log("accountMode", o), e.identifier) if (n) {
            var u, g, f = c, T = a.Tool.getStrBytes(c);
            if (f.length < 1) console.error("发送的消息不能为空!"); else if (r == a.SESSION_TYPE.GROUP ? (u = a.MSG_MAX_LENGTH.GROUP, 
            g = "消息长度超出限制(最多" + Math.round(u / 3) + "汉字)") : (u = a.MSG_MAX_LENGTH.C2C, g = "消息长度超出限制(最多" + Math.round(u / 3) + "汉字)"), 
            T > u) console.error(g); else {
                t || (t = new a.Session(r, n, n, i, Math.round(new Date().getTime() / 1e3)));
                var p, d = Math.round(4294967296 * Math.random()), _ = Math.round(new Date().getTime() / 1e3);
                p = r == a.SESSION_TYPE.GROUP ? a.GROUP_MSG_SUB_TYPE.COMMON : a.C2C_MSG_SUB_TYPE.COMMON, 
                c = new a.Msg(t, !0, -1, d, _, e.identifier, p, e.identifierNick);
                var E, I, m, G, O, N = f.match(/\[[^[\]]{1,3}\]/gm);
                if (!N || N.length < 1) E = new a.Msg.Elem.Text(f), c.addText(E); else {
                    for (var P = 0; P < N.length; P++) (m = f.substring(0, f.indexOf(N[P]))) && (E = new a.Msg.Elem.Text(m), 
                    c.addText(E)), G = a.EmotionDataIndexs[N[P]], a.Emotions[G] ? (I = new a.Msg.Elem.Face(G, N[P]), 
                    c.addFace(I)) : (E = new a.Msg.Elem.Text(N[P]), c.addText(E)), O = f.indexOf(N[P]) + N[P].length, 
                    f = f.substring(O);
                    f && (E = new a.Msg.Elem.Text(f), c.addText(E));
                }
                a.sendMsg(c, function(e) {
                    r == a.SESSION_TYPE.C2C && l(c), a.Log.info("发消息成功"), s && s();
                }, function(e) {
                    a.Log.error("发消息失败:" + e.ErrorInfo), console.error("发消息失败:" + e.ErrorInfo);
                });
            }
        } else console.error("您还没有进入房间，暂不能聊天"); else 1 == o ? M() : console.error("请填写帐号和票据");
    },
    sendGroupLoveMsg: function() {
        if (setInterval(v("test"), 1e4), u({
            ProfileItem: [ {
                Tag: "Tag_Profile_IM_Nick",
                Value: "cs"
            } ]
        }, function() {}), e.identifier) if (n) {
            t || (t = new a.Session(r, n, n, i, Math.round(new Date().getTime() / 1e3)));
            var c = Math.round(4294967296 * Math.random()), s = Math.round(new Date().getTime() / 1e3), g = a.GROUP_MSG_SUB_TYPE.LOVEMSG, f = new a.Msg(t, !0, -1, c, s, e.identifier, g, e.identifierNick), T = new a.Msg.Elem.Text("love_msg");
            f.addText(T), a.sendMsg(f, function(e) {
                r == a.SESSION_TYPE.C2C && l(f), a.Log.info("点赞成功");
            }, function(e) {
                a.Log.error("发送点赞消息失败:" + e.ErrorInfo), console.error("发送点赞消息失败:" + e.ErrorInfo);
            });
        } else console.error("您还没有进入房间，暂不能点赞"); else 1 == o ? M() : console.error("请填写帐号和票据");
    },
    hideDiscussForm: function() {},
    showDiscussForm: O,
    hideDiscussTool: N,
    showDiscussTool: function() {},
    hideDiscussEmotion: P,
    showDiscussEmotion: S,
    showLoveMsgAnimation: y,
    initEmotionUL: function() {},
    showEmotionDialog: function() {
        openEmotionFlag ? openEmotionFlag = !1 : openEmotionFlag = !0;
    },
    selectEmotionImg: R,
    quitBigGroup: v,
    logout: function() {
        a.logout(function(o) {
            a.Log.info("登出成功"), e.identifier = null, e.userSig = null;
        });
    },
    onApplyJoinGroupRequestNotify: function(e) {
        a.Log.warn("执行 加群申请 回调：" + JSON.stringify(e));
        var o = e.MsgTime, r = e.Operator_Account + "申请加入你的群";
        L(e.ReportType, "[申请加群]", e.GroupId, e.GroupName, r, o);
    },
    onApplyJoinGroupAcceptNotify: function(e) {
        a.Log.warn("执行 申请加群被同意 回调：" + JSON.stringify(e));
        var o = e.Operator_Account + "同意你的加群申请，附言：" + e.RemarkInfo;
        L(e.ReportType, "[申请加群被同意]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onApplyJoinGroupRefuseNotify: function(e) {
        a.Log.warn("执行 申请加群被拒绝 回调：" + JSON.stringify(e));
        var o = e.Operator_Account + "拒绝了你的加群申请，附言：" + e.RemarkInfo;
        L(e.ReportType, "[申请加群被拒绝]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onKickedGroupNotify: function(e) {
        a.Log.warn("执行 被踢出群  回调：" + JSON.stringify(e));
        var o = "你被管理员" + e.Operator_Account + "踢出该群";
        L(e.ReportType, "[被踢出群]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onDestoryGroupNotify: function(e) {
        a.Log.warn("执行 解散群 回调：" + JSON.stringify(e));
        var o = "群主" + e.Operator_Account + "已解散该群";
        L(e.ReportType, "[群被解散]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onCreateGroupNotify: function(e) {
        a.Log.warn("执行 创建群 回调：" + JSON.stringify(e)), L(e.ReportType, "[创建群]", e.GroupId, e.GroupName, "你创建了该群", e.MsgTime);
    },
    onInvitedJoinGroupNotify: function(e) {
        a.Log.warn("执行 被邀请加群  回调: " + JSON.stringify(e));
        var o = "你被管理员" + e.Operator_Account + "邀请加入该群";
        L(e.ReportType, "[被邀请加群]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onQuitGroupNotify: function(e) {
        a.Log.warn("执行 主动退群  回调： " + JSON.stringify(e)), L(e.ReportType, "[主动退群]", e.GroupId, e.GroupName, "你退出了该群", e.MsgTime);
    },
    onSetedGroupAdminNotify: function(e) {
        a.Log.warn("执行 被设置为管理员  回调：" + JSON.stringify(e));
        var o = "你被群主" + e.Operator_Account + "设置为管理员";
        L(e.ReportType, "[被设置为管理员]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onCanceledGroupAdminNotify: function(e) {
        a.Log.warn("执行 被取消管理员 回调：" + JSON.stringify(e));
        var o = "你被群主" + e.Operator_Account + "取消了管理员资格";
        L(e.ReportType, "[被取消管理员]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onRevokeGroupNotify: function(e) {
        a.Log.warn("执行 群被回收 回调：" + JSON.stringify(e)), L(e.ReportType, "[群被回收]", e.GroupId, e.GroupName, "该群已被回收", e.MsgTime);
    },
    onCustomGroupNotify: function(e) {
        a.Log.warn("执行 用户自定义系统消息 回调：" + JSON.stringify(e));
        var o = e.UserDefinedField;
        L(e.ReportType, "[用户自定义系统消息]", e.GroupId, e.GroupName, o, e.MsgTime);
    },
    onGroupInfoChangeNotify: function(e) {
        a.Log.warn("执行 群资料变化 回调： " + JSON.stringify(e));
        var o = e.GroupId, r = (e.GroupFaceUrl, e.GroupName);
        e.OwnerAccount, e.GroupNotification, e.GroupIntroduction, r && a.Log.warn("群id=" + o + "的新名称为：" + r);
    },
    showGroupSystemMsg: L
};