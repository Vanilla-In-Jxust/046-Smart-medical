Component({
    properties: {
        showInView: {
            type: Boolean,
            value: !1
        },
        show: {
            type: Boolean,
            value: !0,
            observer: function(e) {
                var t = this;
                e ? this.setData({
                    open: !0,
                    class: "active"
                }) : this.setData({
                    class: ""
                }, function() {
                    setTimeout(function() {
                        t.setData({
                            open: !1
                        });
                    }, 300);
                });
            }
        }
    },
    data: {
        open: !0,
        class: "active"
    }
});