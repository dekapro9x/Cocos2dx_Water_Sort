//Màn hình chơi game:
var ScreenPlayGameLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    ctor: function () {
        console.log("Step 5: Screen Play Game.");
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
    },
    //Quay lại màn hình trước:
    goBackScreen: function () {
        cc.director.popScene(new ScreenPlayGameScene());
    }
});

var ScreenPlayGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const screenPlayGame = new ScreenPlayGameLayer();
        this.addChild(screenPlayGame);
    }
});


