
//Màn hình bắt đầu vào trò chơi:
var SceneStarGameLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    mucsicPlay: true,
    ctor: function () {
        const that = this;
        this._super();
        this.init();
        const size = cc.winSize;
        //Thêm ảnh khung nền:
        this.BackGroundDeep = new cc.Sprite(res.IntroGame_Background_png);
        this.BackGroundDeep.setName("BackGroundDeep");
        this.BackGroundDeep.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: scaleImgBackGroundGame,
            scaleY: scaleImgBackGroundGame
        });
        this.addChild(this.BackGroundDeep, 0);
        //Ảnh nền giới thiệu bắt đầu game:
        this.BackGroundIntroImg = new cc.Sprite(res.SceneStarImg_Game);
        this.BackGroundIntroImg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: scaleImgBackGroundGame * 1.8,
            scaleY: scaleImgBackGroundGame * 1.8
        });
        this.addChild(this.BackGroundIntroImg, 0);
        //Gắn sự kiện click chuột:
        const listenerEvent = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                const { _point } = touch;
                const { x, y } = _point;
                const base = 10;
                const parsedX = parseInt(x, base);
                const parsedY = parseInt(y, base);
                that.addListenerTouchMousePushX_O(parsedX, parsedY);
            },
            onTouchMoved: function (touch, event) { },
            onTouchEnded: function (touch, event) { },
        });
        cc.eventManager.addListener(listenerEvent, this.BackGroundIntroImg);
        //Ảnh Icon giới thiệu game:
        this.ImgIconIntroGame = new cc.Sprite(res.IntroIconStart_Game);
        this.ImgIconIntroGame.attr({
            x: size.width / 2,
            y: size.height / 2 + 100,
            scaleX: 0.08,
            scaleY: 0.08
        });
        this.addChild(this.ImgIconIntroGame, 0);
        //Nút điều chỉnh bật tắt âm thanh:
        this.addIconVolume();
        //Nút bắt đầu game lục giác:
        this.buttonHexaBtnPlay = new ccui.Button();
        this.buttonHexaBtnPlay.loadTextures(res.HexaBtnPlay_Game);
        this.buttonHexaBtnPlay.setName("HexaBtnPlay_Game")
        this.buttonHexaBtnPlay.x = 480;
        this.buttonHexaBtnPlay.y = 240;
        this.buttonHexaBtnPlay.scaleX = 0.2;
        this.buttonHexaBtnPlay.scaleY = 0.2;
        this.addChild(this.buttonHexaBtnPlay, 0);
        this.buttonHexaBtnPlay.addTouchEventListener(this.pressButtonHexaBtnPlay, this);
    },
    addIconVolume: function (mucsicPlay = this.mucsicPlay) {
        this.buttonPlayMusic = new ccui.Button();
        this.buttonPlayMusic.loadTextures(mucsicPlay ? res.VolumeOn_Game : res.VolumeOff_Game);
        this.buttonPlayMusic.setName(mucsicPlay ? "Volume_Music_On" : "Volume_Music_Off")
        this.buttonPlayMusic.x = 365;
        this.buttonPlayMusic.y = 150;
        this.buttonPlayMusic.scaleX = mucsicPlay ? 0.2 : 0.14;
        this.buttonPlayMusic.scaleY = mucsicPlay ? 0.2 : 0.14;
        this.addChild(this.buttonPlayMusic, 0);
        this.buttonPlayMusic.addTouchEventListener(this.pressHandleVolumeMusic, this);
    },
    //Lắng nghe sự kiện click chuột tại vị trí gắn event ảnh nền:
    addListenerTouchMousePushX_O: function (parsedX, parsedY) {
        console.log("Vị trí click chuột:", parsedX, parsedY);
    },
    //Bật - tắt nhạc nền:
    pressHandleVolumeMusic: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.handleIconMucsic();
                break;
        }
    },
    //Ấn vào nút bắt đầu game hình lục giác:
    pressButtonHexaBtnPlay: function (sender, type) {
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
    //Thay đổi ảnh icon bật tắt nhạc nền:
    handleIconMucsic: function () {
        this.removeChild(this.buttonPlayMusic, true);
        this.mucsicPlay = !this.mucsicPlay;
        this.addIconVolume(this.mucsicPlay);
    },
    //Chuyển cảnh:
    actionsChangeScene: function () {
        cc.director.runScene(new LeverDifficultySelectLayer());
    }
});

var StarGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const StarGame = new SceneStarGameLayer();
        this.addChild(StarGame);
    }
});


