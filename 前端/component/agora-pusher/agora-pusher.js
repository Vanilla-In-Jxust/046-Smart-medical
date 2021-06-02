var t = require("../../utils/util.js");

Component({
    properties: {
        minBitrate: {
            type: Number,
            value: 200
        },
        maxBitrate: {
            type: Number,
            value: 500
        },
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
        muted: {
            type: Boolean,
            value: !1
        },
        debug: {
            type: Boolean,
            value: !1
        },
        beauty: {
            type: String,
            value: 0
        },
        aspect: {
            type: String,
            value: "3:4"
        },
        status: {
            type: String,
            value: "loading",
            observer: function(e, a, o) {
                t.log("player status changed from ".concat(a, " to ").concat(e));
            }
        },
        url: {
            type: String,
            value: "",
            observer: function(e, a, o) {
                t.log("pusher url changed from ".concat(a, " to ").concat(e, ", path: ").concat(o));
            }
        }
    },
    data: {
        pusherContext: null,
        detached: !1
    },
    methods: {
        start: function() {
            t.log("starting pusher"), this.data.pusherContext.stop(), this.data.detached ? t.log("try to start pusher while component already detached") : this.data.pusherContext.start();
        },
        stop: function() {
            t.log("stopping pusher"), this.data.pusherContext.stop();
        },
        switchCamera: function() {
            this.data.pusherContext.switchCamera();
        },
        recorderStateChange: function(e) {
            t.log("live-pusher code: ".concat(e.detail.code, " - ").concat(e.detail.message)), 
            -1307 === e.detail.code && (t.log("live-pusher stopped", "error"), this.setData({
                status: "error"
            }), this.triggerEvent("pushfailed")), 1008 === e.detail.code && (t.log("live-pusher started"), 
            "loading" === this.data.status && this.setData({
                status: "ok"
            }));
        },
        recorderNetChange: function(e) {
            t.log("network: ".concat(JSON.stringify(e.detail)));
        }
    },
    ready: function() {
        t.log("pusher ready"), this.data.pusherContext || (this.data.pusherContext = wx.createLivePusherContext(this));
    },
    moved: function() {
        t.log("pusher moved");
    },
    detached: function() {
        t.log("pusher detached"), this.data.pusherContext && this.data.pusherContext.stop(), 
        this.data.detached = !0;
    }
});