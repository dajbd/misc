! function(window, document, $, Hammer) {


    var tab = $('div.en-tab'),
        tabHeader = tab.children('.en-tab-header'),
        tabNavItems = tab.find('ul.en-tab-nav>li'),
        tabContent = tab.children('.en-tab-content')


    tabNavItems.each(function(index) {
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
                activCls = 'active';
            tabNavItems.removeClass(activCls).eq(index).addClass(activCls)

            tabHeaderSwiper.slideTo(index - 1)
        }
    });

    // zepto tap 在拖动很远的时候，也被触发了
    // tabHeader.on('tap', 'ul.en-tab-nav li', function() {
    //     var index = $(this).data('tabIndex')
    //     tabContentSwiper.slideTo(index)
    // })

    // Hammer 能避免 zepto tap被异常触发的问题
    tabHeader.each(function(index) {
        tabNavItem = new Hammer(tabHeader[index]);
        tabNavItem.on('tap', function(e) {
            var node = $(e.target),
                index = node.data('tabIndex') || node.closest('li').data('tabIndex') || -1
            index > -1 && tabContentSwiper.slideTo(index)
        })
    })



    function initScroller() {
        var scrollY = tabContent.find('div.scroll-y');
        for (var index = 0, length = scrollY.length; index < length; index++) {

            var fn = function(index) {
                return function() {
                    var options = {
                        scrollbar: scrollY.eq(index).children('.swiper-scrollbar'),
                        direction: 'vertical',
                        slidesPerView: 'auto',
                        mousewheelControl: true,
                        freeMode: true
                    }
                    var swiper = new Swiper(scrollY.eq(index), options);

                    scrollY.eq(index).data('swiper', swiper)
                }
            }(index);

            setTimeout(fn, 20)
        }
        // scrollY.each(function(index) {
        //     // console.log(scrollY.eq(index)[0])
        //     var swiper = new Swiper(scrollY.eq(index), {
        //         // scrollbar: '.swiper-scrollbar',
        //         direction: 'vertical',
        //         slidesPerView: 'auto',
        //         mousewheelControl: true,
        //         freeMode: true
        //     });

        //     scrollY.eq(index).data('swiper', swiper)
        // })
    }



    // $(function() {
    // setTimeout(function() {
    //     initScroller()
    // }, 1000);
    initScroller()
        // });

    // setTimeout(function () {

    // alert(scrollY.eq(0)[0].clientHeight)
    // alert(scrollY.eq(0).find('.swiper-slide')[0].clientHeight)
    // }, 2000)
}(window, document, $, Hammer);
