! function(window, document, $) {

    var tab = $('div.en-tab'),
        tabHeader = tab.children('.en-tab-header'),
        tabNavItems = tab.find('ul.en-tab-nav>li'),
        tabContent = tab.children('.en-tab-content');


    tabNavItems.each(function(index) {
        tabNavItems.eq(index).data('tabIndex', index)
    });

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
    // hammer 好像不支持事件委托,所以逐个监听咯
    // 注意，zepto是分模块引入的，不引入event模块，是没有.on等函数的，请注意模块的依赖

    tabNavItems.hammer().on('tap', function () {
        var index = $(this).data('tabIndex') || $(this).closest('li').data('tabIndex')
        index > -1 && tabContentSwiper.slideTo(index)
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
    }

    initScroller();


}(window, document, $);
