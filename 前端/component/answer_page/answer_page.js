var t = getApp();

Component({
    properties: {
        myId: {
            type: String
        }
    },
    data: {
        answerArr: []
    },
    methods: {
        setListData: function() {
            this.setData({
                answerArr: t.globalData.answer
            }), t.globalData.answer = [];
        },
        answerDetail: function(t) {
            var a = {
                id: t.detail.id,
                title: t.detail.title
            };
            this.triggerEvent("answerDetail", a);
        }
    },
    ready: function() {
        this.setListData();
    }
});