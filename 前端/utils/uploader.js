var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/classCallCheck")), s = e(require("../@babel/runtime/helpers/createClass")), n = require("./event"), i = require("./util"), r = function() {
    function e(s, n, i, r, a) {
        (0, t.default)(this, e), this.content = s, this.channel = n, this.part = i, this.ts = r, 
        this.uid = a;
    }
    return (0, s.default)(e, [ {
        key: "process",
        value: function() {
            var e = this;
            return new Promise(function(t, s) {
                wx.request({
                    url: "https://webdemo.agora.io/miniapps/restful/v1/logs",
                    method: "post",
                    data: {
                        logs: e.content,
                        channel: e.channel,
                        part: e.part,
                        ts: e.ts,
                        uid: e.uid
                    },
                    success: function(e) {
                        t();
                    },
                    fail: function(e) {
                        s(e);
                    }
                });
            });
        }
    } ]), e;
}(), a = new (function() {
    function e() {
        (0, t.default)(this, e), this.total = 0, this.tasks = [], this.events = new n(), 
        this.processingTask = null, this.subscribeEvents();
    }
    return (0, s.default)(e, [ {
        key: "scheduleTasks",
        value: function(e) {
            this.tasks = e || [], this.total = this.tasks.length, this.events.emit("next");
        }
    }, {
        key: "processNextTask",
        value: function() {
            var e = this;
            if (0 !== this.tasks.length) {
                var t = this.tasks.splice(0, 1)[0];
                this.processingTask = t, t.process().then(function() {
                    e.processingTask = null, e.events.emit("progress", {
                        remain: e.tasks.length,
                        total: e.total
                    }), e.events.emit("next");
                }).catch(function(t) {
                    e.events.emit("error", t), e.tasks = [], e.total = 0, e.processingTask = null;
                });
            } else i.log("all task consumed");
        }
    }, {
        key: "subscribeEvents",
        value: function() {
            var e = this;
            this.events.on("next", function() {
                e.processingTask ? i("already processing, wait for this one to finish") : e.processNextTask();
            });
        }
    }, {
        key: "on",
        value: function(e, t) {
            return this.events.on(e, t), this;
        }
    }, {
        key: "off",
        value: function(e, t) {
            return this.events.off(e, t), this;
        }
    } ]), e;
}())();

module.exports = {
    LogUploader: a,
    LogUploaderTask: r
};