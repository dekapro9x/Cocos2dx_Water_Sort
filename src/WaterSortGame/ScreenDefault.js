
//Màn hình mặc định tạo cảnh cơ bản:
var ScreenDefaultLayer = cc.Layer.extend({
    sprite: null,
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
    },
});

var ScreenDefaultScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const screen = new ScreenDefaultLayer();
        this.addChild(screen);
    }
});


