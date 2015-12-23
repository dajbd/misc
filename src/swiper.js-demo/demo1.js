! function() {


    var tab = $('div.en-tab'),
        tabNavItems = tab.find('ul.en-tab-nav>li')

    var tabContentSwiper = new Swiper(tab.find('.en-tab-content'), {
        // pagination: '.swiper-pagination',
        // paginationClickable: true
        onSlideChangeStart: function(swiper) {
            // console.log(swiper)
            var index = swiper.activeIndex
            console.log(index)
            tabNavItems.removeClass('active')
                .eq(index).addClass('active')

        }
    });


    var tabHeaderSwiper = new Swiper(tab.find('.en-tab-header'), {
        // scrollbar: '.swiper-scrollbar',
        direction: 'horizontal',
        slidesPerView: 'auto',
        // mousewheelControl: true,
        // freeMode: true,
        // freeModeMomentumBounce: false,
        // freeModeMomentum: false,
    });

}();
