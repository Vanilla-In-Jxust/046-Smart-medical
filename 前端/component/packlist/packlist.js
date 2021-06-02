getApp();

Component({
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        packdetail: function(t) {
            var e = {
                id: t.currentTarget.dataset.id
            };
            this.triggerEvent("myevent", e);
        }
    }
});