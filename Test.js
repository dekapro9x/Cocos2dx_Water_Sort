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