//Màn hình lựa chọn màn chơi/lerver chơi.
var MapLeverPlayGameLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    ctor: function (elementMenuClick) {
        console.log("Step 4: Map Lever Play Game.")
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
        //Nút quay lại màn hình trước:
        this.goBackScene = new ccui.Button();
        this.goBackScene.loadTextures(res.GoBackScene_Game);
        this.goBackScene.setName("GoBackScene");
        this.goBackScene.x = 320;
        this.goBackScene.y = 600;
        this.goBackScene.scaleX = 0.1;
        this.goBackScene.scaleY = 0.1;
        this.addChild(this.goBackScene, 0);
        this.goBackScene.addTouchEventListener(this.goBackScreen, this);
        //Hiển thị danh sách menu chọn màn chơi:
        const { _name } = elementMenuClick;
        this.screenMap(_name);
    },
    //Map danh sách màn chơi:
    screenMap: function (keyMenu) {
        const size = cc.winSize;
        var listScreen = [];
        if (keyMenu == rankKey.easy) {
            listScreen = MenuLeverEasy;
        }
        if (keyMenu == rankKey.nomal) {
            listScreen = MenuLeverNormal;
        }
        if (keyMenu == rankKey.hard) {
            listScreen = MenuLeverHard;
        }
        if (keyMenu == rankKey.expert) {
            listScreen = MenuLeverEasy;
        }
        this.buttonHexaBtnPlay = new ccui.Button();
        this.buttonHexaBtnPlay.loadTextures(res.HexaBtnPlay_Game);
        this.buttonHexaBtnPlay.setName("HexaBtnPlay_Game")
        this.buttonHexaBtnPlay.x = size.width / 2;
        this.buttonHexaBtnPlay.y = size.height / 2;
        this.buttonHexaBtnPlay.scaleX = 0.2;
        this.buttonHexaBtnPlay.scaleY = 0.2;
        this.addChild(this.buttonHexaBtnPlay, 0);
        this.buttonHexaBtnPlay.addTouchEventListener(this.pressPlayGame, this);
    },
    pressPlayGame: function () {
        cc.director.pushScene(new ScreenPlayGameScene());
    },
    goBackScreen: function(){
        cc.director.runScene(new LoadingProcessStartGameLayer());
    }
});

var MapLeverPlayGameScene = cc.Scene.extend({
    ctor: function (father) {
        this._super();
        const mapLever = new MapLeverPlayGameLayer(father);
        this.addChild(mapLever);
    },
    onEnter: function () {
    }
});


