var t = require("../../utils/util.js");

Component({
    properties: {
        width: {
            type: Number,
            value: 0
        },
        height: {
            type: Number,
            value: 0
        },
        x: {
            type: Number,
            value: 0
        },
        y: {
            type: Number,
            value: 0
        },
        debug: {
            type: Boolean,
            value: !1
        },
        status: {
            type: String,
            value: "loading",
            observer: function(a, e, o) {
                t.log("player status changed from ".concat(e, " to ").concat(a));
            }
        },
        orientation: {
            type: String,
            value: "vertical"
        },
        name: {
            type: String,
            value: ""
        },
        uid: {
            type: String,
            value: ""
        },
        url: {
            type: String,
            value: "",
            observer: function(a, e, o) {
                t.log("player url changed from ".concat(e, " to ").concat(a, ", path: ").concat(o));
            }
        }
    },
    data: {
        playContext: null,
        detached: !1
    },
    methods: {
        start: function() {
            var a = this.data.uid;
            t.log("starting player ".concat(a)), "ok" !== this.data.status ? this.data.detached ? t.log("try to start pusher while component already detached") : this.data.playContext.play() : t.log("player ".concat(a, " already started"));
        },
        stop: function() {
            var a = this.data.uid;
            t.log("stopping player ".concat(a)), this.data.playContext.stop();
        },
        rotate: function(a) {
            var e = 90 === a || 270 === a ? "horizontal" : "vertical";
            t.log("rotation: ".concat(a, ", orientation: ").concat(e, ", uid: ").concat(this.data.uid)), 
            this.setData({
                orientation: e
            });
        },
        playerStateChange: function(a) {
            t.log("live-player id: ".concat(a.target.id, ", code: ").concat(a.detail.code));
            var e = parseInt(a.target.id.split("-")[1]);
            2004 === a.detail.code ? (t.log("live-player ".concat(e, " started playing")), "loading" === this.data.status && this.setData({
                status: "ok"
            })) : -2301 === a.detail.code && (t.log("live-player ".concat(e, " stopped"), "error"), 
            this.setData({
                status: "error"
            }));
        }
    },
    ready: function() {
        t.log("player ".concat(this.data.uid, " ready")), this.data.playContext || (this.data.playContext = wx.createLivePlayerContext("player-".concat(this.data.uid), this)), 
        this.data.url && this.start();
    },
    moved: function() {
        t.log("player ".concat(this.data.uid, " moved"));
    },
    detached: function() {
        t.log("player ".concat(this.data.uid, " detached")), this.data.playContext && this.data.playContext.stop(), 
        this.data.detached = !0;
    }
});