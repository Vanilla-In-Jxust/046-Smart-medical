var t = getApp();

Page({
    data: {
        imgUrl: "",
        title_disabled: !0,
        management_good: !1,
        select_all: !1,
        middlearr: []
    },
    change_classname: function() {
        this.setData({
            title_disabled: !this.data.title_disabled
        });
    },
    finish_classname: function() {
        this.setData({
            title_disabled: !this.data.title_disabled
        });
    },
    management: function() {
        this.setData({
            management_good: !0
        });
    },
    finish_management: function() {
        this.setData({
            management_good: !1
        });
    },
    select: function(t) {
        var e = [];
        if (0 != this.data.management_good) {
            var a = this.data.items, s = t.currentTarget.dataset.id;
            a[s].checked = !a[s].checked;
            t.currentTarget.dataset.yisid;
            console.log(a);
            for (var i = 0; i < a.length; i++) a[i].checked && e.push(a[i]);
            console.log(e), this.setData({
                items: a,
                middlearr: e
            });
        }
    },
    deleteitem: function() {
        for (var e = this.data.items, a = [], s = [], i = this.data.middlearr, l = 0; l < i.length; l++) s.push(i[l].yisid);
        t.util.request({
            url: "entry/wxapp/Allyishuo",
            data: {
                op: "delyishuo",
                middlearr: JSON.stringify(s)
            },
            success: function(t) {
                console.log(t);
            }
        });
        for (var d = 0; d < e.length; d++) 0 == e[d].checked && a.push(e[d]);
        this.setData({
            items: a,
            middlearr: []
        });
    },
    select_all: function() {
        if (this.setData({
            select_all: !this.data.select_all
        }), this.data.select_all) {
            for (var t = this.data.items, e = [], a = 0; a < t.length; a++) 1 == t[a].checked ? e.push(t[a]) : (t[a].checked = !0, 
            e.push(t[a]));
            this.setData({
                items: e,
                middlearr: e
            });
        }
    },
    select_none: function() {
        this.setData({
            select_all: !this.data.select_all
        });
        for (var t = this.data.items, e = [], a = 0; a < t.length; a++) t[a].checked = !1, 
        e.push(t[a]);
        this.setData({
            items: e,
            middlearr: []
        });
    },
    onLoad: function(t) {
        var e = t.t_id;
        this.setData({
            t_id: e
        });
    },
    onReady: function() {
        this.getAllyishuo();
    },
    getAllyishuo: function() {
        var e = this, a = e.data.t_id;
        t.util.request({
            url: "entry/wxapp/Allyishuo",
            data: {
                t_id: a
            },
            success: function(t) {
                for (var a = t.data.data, s = 0; s < a.length; s++) a[s].checked = !1;
                console.log(a), e.setData({
                    items: a
                });
            }
        });
    }
});