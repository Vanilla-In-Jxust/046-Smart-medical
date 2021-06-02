var t = getApp();

Component({
    properties: {
        myId: {
            type: String
        }
    },
    data: {
        keArr: [],
        commodity: []
    },
    methods: {
        setListData: function() {
            this.setData({
                keArr: t.globalData.skuList
            }), t.globalData.skuList = [];
        },
        detailClick: function(t) {
            console.log(t);
            var i = {
                id: t.detail.id,
                title: t.detail.title
            };
            this.triggerEvent("detailBtn", i);
        }
    },
    ready: function() {
        this.setListData();
    }
});