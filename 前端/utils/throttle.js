module.exports = {
    buttonClicked: function(t) {
        t.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            t.setData({
                buttonClicked: !1
            });
        }, 500);
    }
};