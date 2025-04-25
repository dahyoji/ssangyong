$(function () {
    const MMS = new Swiper('.main_visual_slide', {
        loop: true,
        // slidesPerView: 4,
        // spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        speed: 400,
        navigation: {
            nextEl: '.main_visual .next',
            prevEl: '.main_visual .prev',
        },


    })
});


$(function () {

    //스크롤이 됐을 떄 header에 on을 붙인다.
    //스크롤이 0이면 header에서 on을 땐다.
    //event : click, scroll, wheel, mouseenter, mouseleave, change

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });


});



