$(function () {
    $('.devs__toggles button').not('#showall').click(function() {
        if(!$(this).hasClass('active')) {
            var get_id = this.id;
            var get_current = $('.devs__gallery .' + get_id);

            $('.devs__toggles button.active').removeClass('active');
            $(this).addClass('active');
            
            $('.devs__gallery .main__scen').not(get_current).fadeOut(50);
            get_current.fadeIn(100);
        }
    });

    $('#showall').click(function() {
        $('.devs__toggles button.active').removeClass('active');
        $(this).addClass('active');
        $('.devs__gallery .main__scen').fadeIn(100);
    });
});

// Swiper
var scens__swiper = new Swiper ('.scens__favs', {
    navigation: {
        nextEl: '#scens__next',
        prevEl: '#scens__prev'
    },
    slidesPerView: 3,
    slidesPerColumn: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    slidesPerColumnFill: 'row',
    breakpoints: {
        480: {
            slidesPerView: 'auto',
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            slidesPerColumnFill: 'column',
        }
    }
});
var devs__swiper = new Swiper ('.devs__gallery', {
    navigation: {
        nextEl: '#devs__next',
        prevEl: '#devs__prev'
    },
    slidesPerView: 6,
    spaceBetween: 15,
    slidesPerGroup: 6,
    breakpoints: {
        480: {
            slidesPerView: 'auto',
            slidesPerColumn: 1,
            slidesPerGroup: 1,
        }
    }
});
var main__swiper = new Swiper ('.main__list', {
    navigation: {
        nextEl: '.main__arrow'
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 1,
    direction: 'vertical',
    breakpoints: {
        480: {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 15,
            slidesPerGroup: 1,
            direction: 'horizontal',
        }
    }
});

$(window).resize(function() {
    setTimeout(function() {
        scens__swiper.update();
    }, 10);
});