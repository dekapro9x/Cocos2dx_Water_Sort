var scaleImgBackGroundGame = 0.4;
var scaleImgLoadingProcess = 0.3;
var rankKey = {
    easy:"Easy",
    nomal:"Nomal",
    hard:"Hard",
    expert:"Expert"
}
var rankDifficultMenu = [{
    id: 1,
    lever: "Easy",
    img: res.RankSelect_Game,
    poY: cc.winSize.height / 2 + 100,
}, {
    id: 2,
    lever: "Nomal",
    img: res.RankSelect_Game,
    poY: cc.winSize.height / 2,
}, {
    id: 3,
    lever: "Hard",
    img: res.RankSelect_Game,
    poY: cc.winSize.height / 2 - 100,
}, {
    id: 4,
    lever: "Expert",
    img: res.RankSelect_Game,
    poY: cc.winSize.height / 2 - 200,
}]