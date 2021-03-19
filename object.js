'use strict';


var game = {
    startTime : null,
    isStarted : false,
    displayArea: document.getElementById('display-area'),

    //任意のキーを押してストップする場合
    // start: function() {
    //     game.startTime = Date.now();
    //     document.body.onkeydown = game.stop; 
    // },

    //Enterでストップ、スペースキーで現在時刻を把握する場合
    start : function () {
        game.startTime = Date.now();
        document.body.onkeydown = event => {
        if(event.key === ' '){
            game.lap();
        } else if(event.key === 'Enter') {
                game.stop();
            }
        }
    },
    lap : function() {
        if ( game.isStarted === true) {
            while ( game.isStarted ){
                return;
            }
        }
        var currentTime = Date.now();
        var lapTime = (currentTime - game.startTime) / 1000;
        game.displayArea.innerText = lapTime + '秒経過';
    },
    //ここまでが //Enterでストップ、スペースキーで現在時刻を把握する場合

    //
    // 以下を加えて何度も処理が繰り返されることを終わりにしました。2021/03/03 0:36:00
    // 
    // 6 isStarted : false,
    // 27~,49~   if ( game.isStarted === true) {
    //              while ( game.isStarted ){
    //              return;
    //              }
    //           }
    // 61 game.isStarted = true;
    stop : function(){
        if ( game.isStarted === true) {
            while ( game.isStarted ){
                return;
            }
        }
        var currentTime = Date.now();
        var seconds = (currentTime - game.startTime) / 1000;
        if (9.5 <= seconds && seconds <= 10.0) {
            game.displayArea.innerText = seconds + '秒でした。すごい！';
        } else {
            game.displayArea.innerText = seconds + '秒でした。残念。';
        }
        game.isStarted = true;
    },

};

if(confirm ('OKを押して10秒だと思ったら何かキーを押して下さい')) {
   game.start();
}
