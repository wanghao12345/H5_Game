require.config({
    paths: {
        'jquery': './jquery-3.3.1',
        'startGame': './startGame',//开始游戏的入口
        'myTank': './myTank', //画自己的坦克
    }
})



require(['jquery', 'startGame'], function ($, startGame) {
    startGame.start();
})