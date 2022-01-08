

var IntroLayer = cc.Layer.extend({
    sprite: null,
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
        //Ảnh 3 cốc:
        this.BackGroundImg = new cc.Sprite(res.ThreeCupIntroGame);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2 + 130,
            scaleX: scaleImgBackGroundGame,
            scaleY: scaleImgBackGroundGame
        });
        this.addChild(this.BackGroundImg, 0);
        //Nút bắt đầu game:
        this.buttonStartGame = new ccui.Button();
        this.buttonStartGame.loadTextures(res.ButtonStart_Game);
        this.buttonStartGame.x = size.width / 2;
        this.buttonStartGame.y = size.height / 2;
        this.buttonStartGame.scaleX = 0.2;
        this.buttonStartGame.scaleY = 0.2;
        this.addChild(this.buttonStartGame, 0);
        this.buttonStartGame.addTouchEventListener(this.pressStartGame, this);
        //Text giới thiệu Game:
        const textIntroGame = new cc.LabelTTF("WATER SORT PUZZLE COLOR SORTING GAME", "Arial", 16);
        textIntroGame.x = size.width / 2;
        textIntroGame.y = 30;
        this.addChild(textIntroGame, 5);
    },
    pressStartGame: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.actionsChangeScene();
                break;
        }
    },
    //Chuyển cảnh:
    actionsChangeScene: function () {
        cc.director.runScene(new LoadingProcessStartGameLayer());
    }
});

var IntroGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const layerIntro = new IntroLayer();
        this.addChild(layerIntro);
    }
});


