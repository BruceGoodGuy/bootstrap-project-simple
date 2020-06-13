jQuery(function($) {
    $(".menu a").on("click", function(e) {

        var scroll = ['#intro', '#contact'],
            elm = $(this).attr("href");
        if (scroll.indexOf(elm) > -1) {
            e.preventDefault();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(elm).offset().top
            }, 500);
        }
    });
})