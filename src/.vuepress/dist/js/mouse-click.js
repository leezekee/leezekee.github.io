var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function clickHandler(e) {
    console.log('e', e);
    e.stopPropagation();
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
        y = e.pageY;
    $i.css({
        "z-index": 99999999999999,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "font-weight": "bold",
        "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
        "user-select": 'none',
        "cursor": 'default',
        "font-family": "'Zhi Mang Xing', cursive",
        "font-size": "14px"
    });
    $("body").append($i);
    $i.animate({
        "top": y - 180,
        "opacity": 0
    },
        1500,
        function () {
            $i.remove();
        });
}

window.onload = function() {
    let interval = setInterval(() => {
        if (jQuery != undefined) {
            clearInterval(interval);
            jQuery(document).ready(function ($) {
                $("body").click(clickHandler);
            });
        }
    }, 300);
}

