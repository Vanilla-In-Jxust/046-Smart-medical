Component({
    properties: {
        arr: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        speackdetail: function(e) {
            console.log(e);
            var t = {
                index: e.currentTarget.dataset.index,
                yisid: e.currentTarget.dataset.yisid
            };
            this.triggerEvent("speackdetail", t);
        }
    }
});