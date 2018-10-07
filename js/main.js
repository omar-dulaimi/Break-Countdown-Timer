$(document).ready(function () {
    $('audio').hide();
    $('.startCounting').on('click', function () {
        $('.startCounting').prop('disabled', true);
        var time = 300;
        var stop;
        var strSeconds;
        var strMinutes;

        var soundObject = $('#tick').get(0);

        soundObject.src = "assets/tick.mp3";
        soundObject.volume = 0.3;
        soundObject.autoPlay = false;
        soundObject.preLoad = true;
        soundObject.controls = true;


        stop = setInterval(function () {
            --time;
            console.log(time);
            strMinutes = Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) : Math.floor(time / 60);
            strSeconds = Math.floor(time % 60) < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60);

            $('#count').text(strMinutes + ':' + strSeconds);
            if (time === 0) {
                clearInterval(stop);
                console.log("Time's up!");
            }

            $('.resetCounting').on('click', function () {
                clearInterval(stop);
                $('#count').text('05:00');
                $('.startCounting').prop('disabled', false);
            });

            soundObject.play();
        }, 1000);


        var playChimes = 300000;
        var stop2 = setInterval(function () {
            --playChimes;
            console.log(playChimes);
            document.getElementById('counter');
            if (playChimes === 0) {
                clearInterval(stop2);
                $('.startCounting').prop('disabled', true);
            }
            soundObject.src = "assets/chimes.mp3";
            soundObject.volume = 0.5;
            soundObject.play();


            $('.resetCounting').on('click', function () {
                clearInterval(stop);
                $('#count').text('05:00');
            });
        }, 300000);
    });
});



