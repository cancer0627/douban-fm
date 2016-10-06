(function() {
    var user_name = document.getElementById('user_name');
    var list_date = document.getElementsByClassName('list_date')[0];
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
}(window))
