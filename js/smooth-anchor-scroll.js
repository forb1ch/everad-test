$(function () {
    function scrollToAnchor (url, item) {
        var urlHash;

        if ($(item).length && $(item).parents('a').length) {
            urlHash = item.offsetParent.hash || $(item).closest('a').attr('href');
            urlHash = urlHash.replace('#', '');
        }
        else {
            urlHash = url.split('#')[1];
        }

        if (urlHash && $('#' + urlHash).length) {
            $('html').animate({
                scrollTop: $('#' + urlHash).offset().top - 20
            }, 700);
        }
    }
        
    $(document).ready(function () {
        scrollToAnchor(window.location.href);
    });
        
    $("a[href^='#']").click(function (event) {
        scrollToAnchor(event.target.href, event.target);
    });
});