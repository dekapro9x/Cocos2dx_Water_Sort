//Màn hình lựa chọn độ khó game:
var LeverDifficultySelectLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    rankGameSelect: rankDifficultMenu,
    ctor: function () {
        console.log("Step 3: Lever Difficulty Select.");
        this._super();
        const size = cc.winSize;
        //Thêm ảnh nền giới thiệu game:
        this.BackGroundImg = new cc.Sprite(res.LeverDifficultySelectBackground_Game);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: 1.5,
            scaleY: 2
        });
        this.addChild(this.BackGroundImg, 0);
        //Nút quay lại màn hình trước:
        this.goBackScene = new ccui.Button();
        this.goBackScene.loadTextures(res.GoBackScene_Game);
        this.goBackScene.setName("GoBackScene")
        this.goBackScene.x = 320;
        this.goBackScene.y = 600;
        this.goBackScene.scaleX = 0.1;
        this.goBackScene.scaleY = 0.1;
        this.addChild(this.goBackScene, 0);
        this.goBackScene.addTouchEventListener(this.goBackScreen, this);
        //Titile difficulty:
        const playRun = new cc.LabelTTF("Difficulty", "Arial", 45);
        playRun.x = size.width / 2;
        playRun.y = size.height - 100;
        playRun.runAction(
            cc.spawn(cc.moveBy(0.1, cc.p(0, 50)), cc.tintTo(0.5, 255, 125, 0))
        );
        this.addChild(playRun, 0);
        //Menu chọn độ khó:
        this.addListMenuLeverDifficultySelect();
    },
    //Quay lại màn hình trước:
    goBackScreen: function () {
        // cc.director.pushScene(new StarGameScene());
        cc.director.runScene(new StarGameScene());
    },
    //Danh sách menu lựa chọn độ khó game:
    addListMenuLeverDifficultySelect: function () {
        const size = cc.winSize;
        const scale = 0.2;
        const menuLeverDifficulty = this.rankGameSelect;
        for (let indexeverDifficulty = 0; indexeverDifficulty < menuLeverDifficulty.length; indexeverDifficulty++) {
            const element = menuLeverDifficulty[indexeverDifficulty];
            const entityLeverDifficulty = new ccui.Button();
            entityLeverDifficulty.loadTextures(element.img);
            entityLeverDifficulty.setName(element.lever);
            entityLeverDifficulty.x = size.width / 2;;
            entityLeverDifficulty.y = element.poY;
            entityLeverDifficulty.scaleX = scale;
            entityLeverDifficulty.scaleY = scale;
            this.addChild(entityLeverDifficulty, 0);
            entityLeverDifficulty.addTouchEventListener(this.pressSelectMenuDifficult, this);
        }
    },
    //Sự kiện chọn chế độ chơi dễ => khó:
    pressSelectMenuDifficult: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                const { _name } = sender;
                switch (_name) {
                    case "Easy":
                        cc.director.runScene(new MapLeverPlayGameScene(sender));
                        break;
                    case "Nomal":
                        cc.director.runScene(new MapLeverPlayGameScene(sender));
                        break;
                    case "Hard":
                        cc.director.runScene(new MapLeverPlayGameScene(sender));
                        break;
                    case "Expert":
                        cc.director.runScene(new MapLeverPlayGameScene(sender));
                        break;
                }
                break;
        }
    }
});

var LeverDifficultySelectScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const screen = new ScreenDefaultLayer();
        this.addChild(screen);
    }
});


