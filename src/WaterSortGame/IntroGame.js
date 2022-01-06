

var IntroLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        //Thêm ảnh nền giới thiệu game:
        const size = cc.winSize;
        this.BackGroundImg = new cc.Sprite(res.IntroGame_Background_png);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: 0.4,
            scaleY: 0.4
        });
        this.addChild(this.BackGroundImg, 0);
        //Ảnh 3 cốc:
        this.BackGroundImg = new cc.Sprite(res.ThreeCupIntroGame);
        this.BackGroundImg.attr({
            x: size.width / 2,
            y: size.height / 2 + 130,
            scaleX: 0.4,
            scaleY: 0.4
        });
        this.addChild(this.BackGroundImg, 0);
        //Text giới thiệu Game:
        const textIntroGame = new cc.LabelTTF("WATER SORT PUZZLE COLOR SORTING GAME", "Arial", 16);
        textIntroGame.x = size.width / 2;
        textIntroGame.y = 30;
        this.addChild(textIntroGame, 5);
        //Nút bấm bắt đầu game:
    },
});

var MapScrollView = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var size = cc.winSize;
        var scrollView = new ccui.ScrollView();
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        scrollView.setTouchEnabled(true);
        scrollView.setBounceEnabled(true);
        scrollView.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        scrollView.setBackGroundColor(cc.color(255, 255, 255));
        scrollView.setBackGroundImageScale9Enabled(true);
        scrollView.setContentSize(cc.size(720, 1280));
        scrollView.setInnerContainerSize(cc.size(720, (1280 * 2)));
        scrollView.setAnchorPoint(cc.p(0.5, 0.5));
        scrollView.setPosition(cc.p(360, 640));
        this.addChild(scrollView);
    }
})

var IntroGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const layer = new IntroLayer();
        this.addChild(layer);
    }
});


