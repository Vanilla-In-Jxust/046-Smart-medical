Component({
    properties: {
        defaultValue: {
            type: String,
            value: ""
        },
        weekText: {
            type: Array,
            value: [ "日", "一", "二", "三", "四", "五", "六" ]
        },
        lastMonth: {
            type: String,
            value: "◀"
        },
        nextMonth: {
            type: String,
            value: "▶"
        },
        showCanlendar: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        thisMonthDays: [],
        empytGridsBefore: [],
        empytGridsAfter: [],
        title: "",
        format: "",
        year: 0,
        month: 0,
        date: 0,
        toggleType: "large",
        scrollLeft: 0,
        YEAR: 0,
        MONTH: 0,
        DATE: 0
    },
    lifetimes: {
        attached: function() {
            this.today();
        },
        detached: function() {}
    },
    attached: function() {
        this.today();
    },
    detached: function() {},
    methods: {
        display: function(t, e, a) {
            this.setData({
                year: t,
                month: e,
                date: a,
                title: t + "-" + this.zero(e) + "-" + this.zero(a)
            }), this.createDays(t, e), this.createEmptyGrids(t, e);
        },
        today: function() {
            var t = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date(), e = t.getFullYear(), a = t.getMonth() + 1, s = t.getDate(), h = e + "-" + this.zero(a) + "-" + this.zero(s);
            this.setData({
                format: h,
                select: h,
                year: e,
                month: a,
                date: s,
                YEAR: e,
                MONTH: a,
                DATE: s
            }), this.display(e, a, s);
        },
        select: function(t) {
            console.log(t);
            var e = new Date(), a = e.getFullYear() + "-" + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate());
            console.log(a);
            var s = t.currentTarget.dataset.date, h = this.data.year + "-" + this.zero(this.data.month) + "-" + this.zero(s);
            a > h ? wx.showToast({
                title: "当前日期不可选",
                icon: "none"
            }) : this.triggerEvent("select", h), this.setData({
                title: this.data.year + "-" + this.zero(this.data.month) + "-" + this.zero(s),
                select: h,
                year: this.data.year,
                month: this.data.month,
                date: e
            });
        },
        lastMonth: function() {
            var t = 1 == this.data.month ? 12 : this.data.month - 1, e = 1 == this.data.month ? this.data.year - 1 : this.data.year;
            this.display(e, t, 0);
        },
        nextMonth: function() {
            var t = 12 == this.data.month ? 1 : this.data.month + 1, e = 12 == this.data.month ? this.data.year + 1 : this.data.year;
            this.display(e, t, 0);
        },
        getThisMonthDays: function(t, e) {
            return new Date(t, e, 0).getDate();
        },
        createDays: function(t, e) {
            for (var a = [], s = this.getThisMonthDays(t, e), h = 1; h <= s; h++) a.push({
                date: h,
                dateFormat: this.zero(h),
                monthFormat: this.zero(e),
                week: this.data.weekText[new Date(Date.UTC(t, e - 1, h)).getDay()]
            });
            this.setData({
                thisMonthDays: a
            });
        },
        createEmptyGrids: function(t, e) {
            for (var a = new Date(Date.UTC(t, e - 1, 1)).getDay(), s = [], h = [], i = 0 == a ? 7 : a, o = this.getThisMonthDays(t, e), n = e - 1 < 0 ? this.getThisMonthDays(t - 1, 12) : this.getThisMonthDays(t, e - 1), r = 1; r <= i; r++) s.push(n - (i - r));
            for (var d = 42 - o - i - 7 >= 0 ? 42 - o - i - 7 : 42 - o - i, y = 1; y <= d; y++) h.push(y);
            this.setData({
                empytGridsAfter: h,
                empytGridsBefore: s
            });
        },
        zero: function(t) {
            return t >= 10 ? t : "0" + t;
        }
    }
});