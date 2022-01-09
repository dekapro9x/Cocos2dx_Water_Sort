//Màn hình chơi game:
var ScreenPlayGameLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    ctor: function () {
        console.log("Step 5: Screen Play Game.");
        this._super();
        const size = cc.winSize;
        //Thêm ảnh nền giới thiệu game:
        this.BackGroundImg = new cc.Sprite(res.BackGroundPlayScreen_Game);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: 0.9,
            scaleY: 0.9
        });
        this.addChild(this.BackGroundImg, 0);
        //Menu Game:
        this.goBackScene = new ccui.Button();
        this.goBackScene.loadTextures(res.MenuSeting_Game);
        this.goBackScene.setName("GoBackScene");
        this.goBackScene.x = 320;
        this.goBackScene.y = 600;
        this.goBackScene.scaleX = 0.1;
        this.goBackScene.scaleY = 0.1;
        this.addChild(this.goBackScene, 1);
        this.goBackScene.addTouchEventListener(this.goBackScreen, this);
        //Button Reset Game:
        this.goBackScene = new ccui.Button();
        this.goBackScene.loadTextures(res.MenuSeting_Game);
        this.goBackScene.setName("GoBackScene");
        this.goBackScene.x = 380;
        this.goBackScene.y = 600;
        this.goBackScene.scaleX = 0.1;
        this.goBackScene.scaleY = 0.1;
        this.addChild(this.goBackScene, 1);
        this.goBackScene.addTouchEventListener(this.goBackScreen, this);
        //Khung ảnh nền vuông text màn chơi:
        const squareGrey = new cc.Sprite(res.SquareGray_Game);
        squareGrey.x = size.width / 2;
        squareGrey.y = size.height - 20;
        squareGrey.scaleX = 0.5;
        squareGrey.scaleY = 0.5;
        this.addChild(squareGrey, 0);
        //Khung Lever:
        const label = cc.LabelTTF.create("Label text", "Arial", "22", cc.TEXT_ALIGNMENT_CENTER);
        label.x = size.width / 2;
        label.y = size.height - 35;
        label.setString("Lever 1");
        this.addChild(label, 0);
        //Tạo khối chữ nhật nhiều đốt:
        this.rectangle = cc.DrawNode.create();
        this.rectangle.retain();
        this.rectangle.x = 0;
        this.rectangle.y = 0;
        this.addChild(this.rectangle);
        this.rectangle.drawRect(cc.p(size.width / 2, size.width / 2), cc.p(size.width / 2 - 20, size.width / 2 - 20), cc.color(255, 0, 0, 255), 5, cc.color(0, 255, 0, 255));
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


