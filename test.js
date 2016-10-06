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
    /**/
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

    /**/
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
}(window))
