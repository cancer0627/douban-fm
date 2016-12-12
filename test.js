(function() {
    var user_name = document.getElementById('user_name');
    var list_date = document.getElementsByClassName('list_date')[0];
    var select_body_btn = document.getElementById('select_body_btn');
    var select_body = document.getElementById('select_body');
    var main_body = document.getElementById('main_body');
    var b_bottom = document.getElementById('b_bottom');
    var s_body_lists = document.getElementsByClassName('sel_body_lists');
    var s_body_list_jianjie = document.getElementsByClassName('select_body_list_jianjie');
    var s_body_list_pic = document.getElementsByClassName('select_body_list_pic');
    var share_div = document.getElementsByClassName('share_div')[0];
    var share_btn = document.getElementsByClassName('share_btn')[0];
    var s_pyr_btn = document.getElementsByClassName('s_pyr_btn');
    var s_player = document.getElementsByClassName('s_player');

    var date = new Date();
    var day = date.getDate();
    var mon = date.getMonth() + 1;

    function match_date(a) {
        if (a < 10) {
            a = '0' + a;
        }
        return a;
    }
    list_date.childNodes[1].innerHTML = match_date(day);
    list_date.childNodes[3].innerHTML = match_date(mon) + "月";
    /*右侧菜单切换*/
    select_body_btn.onclick = function() {
        if (select_body_btn.src.match("sidebar_icon22.png")) {
            select_body.style.left = "0px";
            select_body_btn.src = "img/sidebar_icon1.png";
            select_body.style.position = 'absolute';
            main_body.style.position = 'fixed';
            b_bottom.style.position = 'fixed';
        }
        if (select_body_btn.src.match("sidebar_icon2.png")) {
            select_body.style.left = "-650px";
            select_body_btn.src = "img/sidebar_icon11.png";
            select_body.style.position = 'fixed';
            main_body.style.position = 'absolute';
            b_bottom.style.position = 'absolute';
        }
    }
    select_body_btn.onmouseover = function() {
        if (select_body_btn.src.match("sidebar_icon11.png")) {
            select_body_btn.src = "img/sidebar_icon22.png";
        }
        if (select_body_btn.src.match("sidebar_icon1.png")) {
            select_body_btn.src = "img/sidebar_icon2.png";
        }
    }
    select_body_btn.onmouseout = function() {
        if (select_body_btn.src.match("sidebar_icon22.png")) {
            select_body_btn.src = "img/sidebar_icon11.png";
        }
        if (select_body_btn.src.match("sidebar_icon2.png")) {
            select_body_btn.src = "img/sidebar_icon1.png";
        }
    }

    /*右侧菜单中的样式*/
    var i;
    for (i = 0; i < s_body_lists.length; i++) {
        s_body_lists[i].onmouseover = function() {
            this.childNodes[1].childNodes[1].style.display = 'block';
            this.childNodes[3].childNodes[7].style.display = 'block';
        }
        s_body_lists[i].onmouseout = function() {
            this.childNodes[1].childNodes[1].style.display = 'none';
            this.childNodes[3].childNodes[7].style.display = 'none';
        }
    }

    /*分享模块样式*/
    share_div.onmouseover = function() {
        share_btn.style.display = 'inline-block';
    }
    share_div.onmouseout = function() {
        share_btn.style.display = 'none';
    }

    /*专辑切换*/
    for (j = 0; j < s_player.length; j++) {
        s_player[j].style.display = "none";
    }
    s_player[0].style.display = "initial";
    s_pyr_btn[0].style.backgroundColor = "#9dd6c5";
    var tim = setInterval(qiehuan, 3000);
    console.log(s_pyr_btn[0].style.backgroundColor.indexOf("9"));

    function qiehuan() {
        if (s_pyr_btn[0].style.backgroundColor.indexOf("9") == 15) {
            s_pyr_btn[1].style.backgroundColor = "#9dd6c5";
            s_pyr_btn[0].style.backgroundColor = "#ddd";
            pipei();
        } else if (s_pyr_btn[1].style.backgroundColor.indexOf("9") == 15) {
            s_pyr_btn[2].style.backgroundColor = "#9dd6c5";
            s_pyr_btn[1].style.backgroundColor = "#ddd";
            pipei();
        } else if (s_pyr_btn[2].style.backgroundColor.indexOf("9") == 15) {
            s_pyr_btn[3].style.backgroundColor = "#9dd6c5";
            s_pyr_btn[2].style.backgroundColor = "#ddd";
            pipei();
        } else if (s_pyr_btn[3].style.backgroundColor.indexOf("9") == 15) {
            s_pyr_btn[4].style.backgroundColor = "#9dd6c5";
            s_pyr_btn[3].style.backgroundColor = "#ddd";
            pipei();
        } else if (s_pyr_btn[4].style.backgroundColor.indexOf("9") == 15) {
            s_pyr_btn[5].style.backgroundColor = "#9dd6c5";
            s_pyr_btn[4].style.backgroundColor = "#ddd";
            pipei();
        } else {
            s_pyr_btn[0].style.backgroundColor = "#9dd6c5";
            s_pyr_btn[5].style.backgroundColor = "#ddd";
            pipei();
        }
    }

    function pipei() {
        for (i = 0; i < s_pyr_btn.length; i++) {
            if (s_pyr_btn[i].style.backgroundColor.indexOf("9") == 15) {
                for (j = 0; j < s_player.length; j++) {
                    s_player[j].style.display = "none";
                }
                s_player[i].style.display = "initial";
            }
        }
    }

    for (i = 0; i < s_pyr_btn.length; i++) {
        s_pyr_btn[i].onmouseover = function() {
            clearInterval(tim);
            for (i = 0; i < s_pyr_btn.length; i++) {
                s_pyr_btn[i].style.backgroundColor = "#ddd";
            }
            this.style.backgroundColor = "#9dd6c5";
            pipei();
        }
        s_pyr_btn[i].onmouseout = function() {
            tim = setInterval(qiehuan, 3000);
        }
    }
    /**/
    for (i = 0; i < s_player.length; i++) {
        s_player[i].onmouseover = function() {
            //console.log(s_player[i].childNodes[1].style);
            this.childNodes[3].childNodes[1].style.color = "#9dd6c5";
        }
        s_player[i].onmouseout = function() {
            this.childNodes[3].childNodes[1].style.color = "#999";
        }
    }
}(window))
