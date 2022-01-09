var MapLeverPlayGameLayer = cc.Layer.extend({
    sprite: null,
    loadingBar: null,
    ctor: function (ElementMenuClick) {
        this._super();
        console.log("ElementMenuClick", ElementMenuClick);
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
    menuMap:function(){

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


