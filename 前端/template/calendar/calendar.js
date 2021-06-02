Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    tag: "",
    initCalendar: function(t) {
        var e = this.data.operateOrder || "";
        e && (e = e.bookingTime.substring(8, 10)), this.tag = t;
        var a = new Date(), r = a.getFullYear(), n = a.getMonth() + 1, s = a.getDate(), i = r, c = n;
        this.setData({
            "calendar.curYear": r,
            "calendar.curMonth": n,
            "calendar.weeksCh": [ "日", "一", "二", "三", "四", "五", "六" ],
            "calendar.today": s,
            "calendar.thisYear": i,
            "calendar.thisMonth": c,
            "calendar.hasEmptyGrid": !1,
            "calendar.selectYear": i,
            "calendar.selectMonth": c,
            "calendar.selectDay": e || 0
        }), this.regroupDateList(this.data.calendar.dateList), this.calculateEmptyGrids(r, n), 
        this.calculateDays(r, n, t);
    },
    getThisMonthDays: function(t, e) {
        return new Date(t, e, 0).getDate();
    },
    getFirstDayOfWeek: function(t, e) {
        return new Date(Date.UTC(t, e - 1, 1)).getDay();
    },
    calculateEmptyGrids: function(t, e) {
        wx.showLoading({
            title: "加载中"
        });
        var a = this.getFirstDayOfWeek(t, e), r = [];
        if (a > 0) {
            for (var n = 0; n < a; n++) r.push(n);
            this.setData({
                "calendar.hasEmptyGrid": !0,
                "calendar.empytGrids": r
            });
        } else this.setData({
            "calendar.hasEmptyGrid": !1,
            "calendar.empytGrids": []
        });
        wx.hideLoading();
    },
    calculateDays: function(t, e, a) {
        wx.showLoading({
            title: "加载中"
        });
        for (var r = [], n = this.getThisMonthDays(t, e), s = this.data.calendar.dateList[e] || [], i = 1; i <= n; i++) !function(t) {
            var e = {
                day: i
            };
            e.disabled = !s.some(function(t) {
                var a = t.date || t.regDate || t.regdate;
                return parseInt(a.split("-")[2]) == e.day && (1 == t.free || 1 == t.level || t.congestionDegree && "100%" != t.congestionDegree || t.percent && "100%" != t.percent || 3 === t.status);
            }), "otherTime" == a && (e.from = a), r.push(e);
        }();
        this.setData({
            "calendar.days": r
        }), wx.hideLoading();
    },
    handleCalendar: function(t) {
        var e = t.currentTarget.dataset.handle, a = this.data.calendar.curYear, r = this.data.calendar.curMonth, n = this.data.calendar.thisYear, s = this.data.calendar.thisMonth;
        if ("prev" === e) {
            if (a <= n && r <= s) return void wx.showToast({
                icon: "none",
                title: "----不能再往前了----",
                duration: 1e3
            });
            var i = r - 1, c = a;
            i < 1 && (c = a - 1, i = 12), this.setData({
                "calendar.curYear": c,
                "calendar.curMonth": i
            }), this.calculateDays(c, i), this.calculateEmptyGrids(c, i);
        } else {
            if (new Date(a, r - 1, 1).getTime() >= new Date(n, s + 1, 1).getTime()) return void wx.showToast({
                icon: "none",
                title: "----不能再往后了----",
                duration: 1e3
            });
            var d = r + 1, l = a;
            d > 12 && (l = a + 1, d = 1), this.setData({
                "calendar.curYear": l,
                "calendar.curMonth": d
            }), this.calculateDays(l, d, this.tag), this.calculateEmptyGrids(l, d);
        }
    },
    tapDayItem: function(t) {
        var e = t.currentTarget.dataset, a = e.idx, r = e.from, n = this.data.calendar.days, s = this.data.calendar.curYear, i = this.data.calendar.curMonth, c = this.concatDate(s, i, n[a].day);
        n[a].disabled ? console.log("当前日期不可选：" + c) : (this.setData({
            "calendar.selectYear": s,
            "calendar.selectMonth": i,
            "calendar.selectDay": n[a].day
        }), console.log("---可选，跳转---,您选择的日期是：" + c, this), r ? "otherTime" == r && this.selectDateFnInOtherTime && this.selectDateFnInOtherTime(c, t) : this.selectDateFn && this.selectDateFn(c));
    },
    regroupDateList: function(t) {
        for (var e = {}, a = 0; a < t.length; a++) {
            var r = (t[a].date || t[a].regDate || t[a].regdate).split("-"), n = parseInt(r[1]);
            e[n] || (e[n] = []), e[n].push(t[a]);
        }
        this.setData({
            "calendar.dateList": e
        });
    },
    concatDate: function(t, e, a) {
        return t + "-" + (e < 10 ? "0" + e : e) + "-" + (a < 10 ? "0" + a : a);
    },
    test: function() {
        return console.log(111), new Date(curYear, curMonth - 1, 1).getTime() <= new Date(thisYear, thisMonth - 1, 1).getTime();
    }
};