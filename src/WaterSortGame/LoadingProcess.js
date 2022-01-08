

var LoadingProcessStartGameLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        //Thêm ảnh nền giới thiệu game:
        const size = cc.winSize;
        this.BackGroundImg = new cc.Sprite(res.IntroGame_Background_png);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: 0.4,
            scaleY: 0.4
        });
        this.addChild(this.BackGroundImg, 0);
    },
});

var LoadingProcessStartGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const loadingProcess = new LoadingProcessStartGameLayer();
        this.addChild(loadingProcess);
    }
});


