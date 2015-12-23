! function() {


    var tab = $('div.en-tab'),
    	tabHeader = tab.children('.en-tab-header'),
        tabNavItems = tab.find('ul.en-tab-nav>li'),
        tabContent = tab.children('.en-tab-content')


    tabNavItems.each(function (index) {
    	tabNavItems.eq(index).data('tabIndex', index)
    })

    var tabHeaderSwiper = new Swiper(tabHeader, {
        // scrollbar: '.swiper-scrollbar',
        direction: 'horizontal',
        slidesPerView: 'auto',
        // mousewheelControl: true,
        // freeMode: true,
        // freeModeMomentumBounce: false,
        // freeModeMomentum: false,
    });

    var tabContentSwiper = new Swiper(tabContent, {
        // pagination: '.swiper-pagination',
        // paginationClickable: true
        onSlideChangeStart: function(swiper) {
            // console.log(swiper)
            var index = swiper.activeIndex,
            	activCls = 'active'
            tabNavItems.removeClass(activCls).eq(index).addClass(activCls)

            tabHeaderSwiper.slideTo(index-1)
        }
    });

    tabHeader.on('tap', 'ul.en-tab-nav li', function () {
    	var index = $(this).data('tabIndex')
    	tabContentSwiper.slideTo(index)
    })


    var scrollY = tabContent.find('div.scroll-y');
    scrollY.each(function (index) {
    	// console.log(scrollY.eq(index)[0])
    	var swiper = new Swiper(scrollY.eq(index), {
    	    // scrollbar: '.swiper-scrollbar',
    	    direction: 'vertical',
    	    slidesPerView: 'auto',
    	    mousewheelControl: true,
    	    freeMode: true
    	});

    	scrollY.eq(index).data('swiper', swiper)
    })


// setTimeout(function () {
	
// alert(scrollY.eq(0)[0].clientHeight)
// alert(scrollY.eq(0).find('.swiper-slide')[0].clientHeight)
// }, 2000)
}();
