// 卖萌标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '(つェ⊂) 你有闻到什么味道吗？';
        clearTimeout(titleTime);
    } else {
        document.title = '(*´∇｀*) 你来后空气都变甜了~  ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});