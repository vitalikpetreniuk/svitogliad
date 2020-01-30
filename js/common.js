$(function () {

    $('.search-open').on('click', function () {
       $('.header-bottom-in').addClass('with-search-open');
    });

    $('.search-close').on('click', function () {
       $('.header-bottom-in').removeClass('with-search-open');
    });

    $('.popular-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true
    });

    $('.article-slider').owlCarousel({
        items: 1,
        margin: 30
    });

    $('.articles-slider').owlCarousel({
        items: 2,
        margin: 30,
        nav: true,
        dots: false,
        loop: true
    });

    $('.topic-slider, .slider-4').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        loop: true,
        margin: 30,
        autoplay: true
    });

    $('.post-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 30
    });

    $('.tabs').each(function () {
       $(this).find('.tabs-cont-item').each(function () {
           $(this).attr('data-id', $(this).index());
       });
       $(this).find('.tabs-nav-item').each(function () {
           $(this).attr('data-target', $(this).index());
           $(this).on('click', function () {
               var tabId = $(this).attr('data-target');
               $(this).addClass('active').siblings().removeClass('active');
               $(this).closest('.tabs').find('.tabs-cont-item[data-id='+tabId+']').addClass('active').siblings().removeClass('active');
           })
       });
    });

    $(window).on('load scroll', function () {
        var windowScrollTop = $(this).scrollTop();
        var header = $('.header');
        var headerTop = $('.header-top');
        var headerTopHeight = headerTop.outerHeight();
        var headerBottomWrap = $('.header-bottom-wrap');
        var headerBottom = $('.header-bottom');
        var headerBottomHeight = headerBottom.outerHeight();
        var headerBottomWrapOffsetTop = headerBottomWrap.offset().top;

        headerBottomWrap.css('height', headerBottomHeight);

        if(windowScrollTop >= headerBottomWrapOffsetTop){
            header.addClass('fixed');
        }else{
            header.removeClass('fixed');
        }
        if(windowScrollTop > 200){
            $('.to-top').addClass('visible')
        }else{
            $('.to-top').removeClass('visible')
        }
    }).on('load scroll resize', function () {
        var bodyHeight = $('body').outerHeight();
        var toTop = $('.to-top').offset().top;
        if((toTop + 200) > bodyHeight){
            $('.to-top').addClass('bottom');
        }else{
            $('.to-top').removeClass('bottom');
        }
    });

    $('.to-top').on('click', function () {
        $('html,body').animate({scrollTop: $('body').offset().top},'slow');
    });

    $('.video-cover').on('click', function () {
       $(this).closest('.video-block').addClass('active');
    });

    $('.socials-button').on('click', function () {
       $(this).siblings('.socials').toggleClass('open');
    });

});
