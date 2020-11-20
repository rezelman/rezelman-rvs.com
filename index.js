(function () {
    var f = document.getElementById('frontpage');
    var i = createInterval();
    f.onmouseover = function () {
        clearInterval(i);
    };
    f.onmouseout = function () {
        i = createInterval();
    };
    function createInterval() {
        return setInterval(function () {
            var i = parseInt(f.src.replace(/^.+?(\d+)\..+?$/i, '$1'), 10);
            i = (i + 1) % 8;
            f.src = f.src.replace(/^(.+?)\d+(\..+?)$/i, '$1' + i + '$2');
        }, 7000);
    }
}).call(this);
