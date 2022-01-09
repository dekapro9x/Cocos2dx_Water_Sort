//Danh sách màn chơi:
var MapLeverPlayGameLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    ctor: function (elementMenuClick) {
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


