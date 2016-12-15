(function () {
    var music1 = document.getElementById('music1');
    var dur_jindu = document.getElementById('dur_jindu');
    var cur_jindu = document.getElementById('cur_jindu');
    var btn_jindu = document.getElementById('btn_jindu');
    var song_time = document.getElementById('song_time');
    var dur_volume = document.getElementById('dur_volume');
    var cur_volume = document.getElementById('cur_volume');
    var btn_volume = document.getElementById('btn_volume');
    var song_stop = document.getElementById('song_stop');
    var song_start = document.getElementById('song_start');

    /*开始停止*/
    song_stop.onclick = function () {
        song_start.style.display = "block";
        music1.pause();
    }

    song_start.onclick = function () {
        song_start.style.display = "none";
        music1.play();
    }

    /*加载时*/
    music1.addEventListener('loadedmetadata', function logg() {
        song_start.style.display = "none";
        show_jindu();
        jindu_cur();
        music_cur();
    })

    /*播放时*/
    music1.ontimeupdate = function () {
        show_jindu();
        jindu_cur();
        music_cur();
        //console.log(document.body.scrollTop);
        //console.log(document.body.scrollHeight);
    }

    /*主页面定位样式切换*/
    setInterval(scre, 10);

    function scre() {
        if (main_body.style.position != "fixed") {
            if (document.body.scrollTop >= 500) {
                document.getElementById('bk_bkground').style.position = 'absolute';
                document.getElementById('bk_bkground').style.top = "670px";
                document.getElementById('p_player').style.position = 'absolute';
                document.getElementById('p_player').style.top = "595px";
                document.getElementById('sign').style.position = 'absolute';
                document.getElementById('sign').style.top = "500px";
            } else {
                document.getElementById('bk_bkground').style.position = 'fixed';
                document.getElementById('bk_bkground').style.top = "170px";
                document.getElementById('p_player').style.position = 'fixed';
                document.getElementById('p_player').style.top = "95px";
                document.getElementById('sign').style.position = 'fixed';
                document.getElementById('sign').style.top = "0px";
            }
        }
    }

    function show_jindu() {
        var tim1 = parseInt(music1.currentTime);
        var tim2 = parseInt(music1.duration);
        var s_time = tim2 - tim1;
        if (s_time % 60 < 10) {
            s_time = parseInt(s_time / 60) + ":0" + s_time % 60;
        } else {
            s_time = parseInt(s_time / 60) + ":" + s_time % 60;
        }
        song_time.innerHTML = '-' + s_time;
    }

    function jindu_cur() {
        dur_jindu.style.width = '100%';
        cur_jindu.style.width = (music1.currentTime / music1.duration) * 100 + '%';
    }

    function music_cur() {
        dur_volume.style.width = "100%";
        cur_volume.style.width = (music1.volume * 100) + '%';
    }

    var x_sta, x_end, x_cur, x_dur, x_len;

    /*音量条点击*/
    dur_volume.onclick = function (event) {
        x_end = event.layerX;
        x_dur = dur_volume.clientWidth;
        x_len = x_end / x_dur;
        if (x_len <= 0) {
            music1.volume = 0;
        } else if (x_len >= 1) {
            music1.volume = 1;
        } else {
            music1.volume = x_len;
        }
        cur_volume.style.width = music1.volume * 100 + "%";
    }

    cur_volume.onclick = function (event) {
        x_end = event.layerX;
        x_dur = dur_volume.clientWidth;
        x_len = x_end / x_dur;
        if (x_len <= 0) {
            music1.volume = 0;
        } else if (x_len >= 1) {
            music1.volume = 1;
        } else {
            music1.volume = x_len;
        }
        cur_volume.style.width = music1.volume * 100 + "%";
    }

    /*进度条点击*/
    dur_jindu.onclick = function (event) {
        x_end = event.layerX;
        x_dur = dur_jindu.clientWidth;
        x_len = x_end / x_dur;
        if (x_len <= 0) {
            x_len = 0;
        } else if (x_len >= 1) {
            x_len = 1;
        } else {
            x_len = x_len;
        }
        music1.currentTime = x_len * music1.duration;
        jindu_cur();
    }

    cur_jindu.onclick = function (event) {
        x_end = event.layerX;
        x_dur = dur_jindu.clientWidth;
        x_len = x_end / x_dur;
        if (x_len <= 0) {
            x_len = 0;
        } else if (x_len >= 1) {
            x_len = 1;
        } else {
            x_len = x_len;
        }
        music1.currentTime = x_len * music1.duration;
        jindu_cur();
    }

    /*音量条拖动*/
    btn_volume.ondragstart = function () {
        x_sta = event.clientX;
        x_cur = cur_volume.clientWidth;
        x_dur = dur_volume.clientWidth;
    }

    btn_volume.ondrag = function (event) {
        x_end = event.clientX;
        x_len = (x_cur - x_sta + x_end) / x_dur;
        if (x_len <= 0) {
            music1.volume = 0;
        } else if (x_len >= 1) {
            music1.volume = 1;
        } else {
            music1.volume = x_len;
        }
        cur_volume.style.width = music1.volume * 100 + "%";
    }

    btn_volume.ondragend = function (event) {
        x_end = event.clientX;
        x_len = (x_cur - x_sta + x_end) / x_dur;
        if (x_len <= 0) {
            music1.volume = 0;
        } else if (x_len >= 1) {
            music1.volume = 1;
        } else {
            music1.volume = x_len;
        }
        cur_volume.style.width = music1.volume * 100 + "%";
    }

    /*进度条拖动*/
    btn_jindu.ondragstart = function (event) {
        x_sta = event.clientX;
        x_cur = cur_jindu.clientWidth;
        x_dur = dur_jindu.clientWidth;
    }

    btn_jindu.ondrag = function (event) {
        x_end = event.clientX;
        x_len = (x_cur - x_sta + x_end) / x_dur;
        if (x_len <= 0) {
            x_len = 0;
        } else if (x_len >= 1) {
            x_len = 1;
        } else {
            x_len = x_len;
        }
        music1.currentTime = x_len * music1.duration;
        jindu_cur();
    }

    btn_jindu.ondragend = function (event) {
        x_end = event.clientX;
        x_len = (x_cur - x_sta + x_end) / x_dur;
        if (x_len <= 0) {
            x_len = 0;
        } else if (x_len >= 1) {
            x_len = 1;
        } else {
            x_len = x_len;
        }
        music1.currentTime = x_len * music1.duration;
        jindu_cur();
    }
}(window))
