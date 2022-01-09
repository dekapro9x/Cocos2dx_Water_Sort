

var LoadingProcessStartGameLayer = cc.Layer.extend({
    sprite: null,
    count: 0,
    loadingBar: null,
    ctor: function () {
        this._super();
        const size = cc.winSize;
        //Thêm ảnh nền giới thiệu game:
        this.BackGroundImg = new cc.Sprite(res.IntroGame_Background_png);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: scaleImgBackGroundGame,
            scaleY: scaleImgBackGroundGame
        });
        this.addChild(this.BackGroundImg, 0);
        //Thêm chữ Loading:
        this.LoadingTextImg = new cc.Sprite(res.LoadingText_Game);
        this.LoadingTextImg.attr({
            x: size.width / 2,
            y: size.height / 2 + 50,
            scaleX: scaleImgLoadingProcess,
            scaleY: scaleImgLoadingProcess
        });
        this.addChild(this.LoadingTextImg, 0);
        //Thêm loadingBar:
        this.loadingBar = new ccui.LoadingBar(); 
        this.loadingBar.setName("LoadingBar");
        this.loadingBar.loadTexture(res.LoadingProcess_Game);
        this.loadingBar.setPercent(0);
        this.loadingBar.x = size.width / 2;
        this.loadingBar.y = size.height / 2;
        this.addChild(this.loadingBar);
        this.scheduleUpdate();
        return true;
    },
    update: function () {
        this.count++;
        if (this.count > 10) {
            this.count = 0;
            this.actionsChangeSceneStartPlayGame();
        }
        this.loadingBar.setPercent(this.count);
    },
    //Chuyển cảnh lựa chọn bắt đầu chơi game:
    actionsChangeSceneStartPlayGame: function () {
        cc.director.runScene(new StarGameScene());
    }
});

var LoadingProcessStartGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const loadingProcess = new LoadingProcessStartGameLayer();
        this.addChild(loadingProcess);
    }
});


