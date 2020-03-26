var i18nZHData = {
<<<<<<< HEAD
<<<<<<< HEAD
    'tran-site-categories': '<i class="fa fa-folder"></i>&nbsp;&nbsp;分类',
    'tran-site-tags': '<i class="fa fa-tags"></i>&nbsp;&nbsp;标签',
=======
    'tran-site-categories': '分类',
    'tran-site-tags': '标签',
>>>>>>> parent of 32bf895... 2020-03-26 11:13:45
=======
    'tran-site-categories': '分类',
    'tran-site-tags': '标签',
>>>>>>> parent of 32bf895... 2020-03-26 11:13:45
    'tran-posted-in': '发布于',
    'tran-tags': '标签: ',
    'tran-archives': '归档',
    'tran-categories': '分类: ',
    'tran-comments': '评论',
    'tran-readmore': '<i class="fa fa-caret-right"></i>&nbsp;&nbsp;阅读全文',
    'tran-prev-page': '&laquo; 上一页',
    'tran-next-page': '下一页 &raquo;',
    'tran-disqus-comments': '评论',
    'tran-archives': '归档',
    'tran-author': '作者：',
    'tran-theme': '主题：',
    'tran-notice': 'Hello World',
    'tran-site-favoritesite': '快速链接'
};

document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('navbarSNSRssSwitchBtn');
    el.addEventListener('click', function() {
        const $target = document.getElementById('navbarSNSRssButtons');
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    });

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.indexOf('zh') != -1) {
        var result = Object.keys(i18nZHData);
        for (var i = 0; i < result.length; i++) {
            var key = result[i];
            var eles = document.querySelectorAll('.' + key);
            eles.forEach(function(ele) {
                ele.innerHTML = i18nZHData[key];
            });
        }
    }

});