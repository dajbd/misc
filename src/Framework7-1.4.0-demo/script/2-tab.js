! function() {
    // Initialize app and store it to myApp variable for futher access to its methods
    var myApp = new Framework7();

    // We need to use custom DOM library, let's save it to $$ variable:
    var $$ = Framework7.$;

    // Add view
    var mainView = myApp.addView('.view-main', {
        // Because we want to use dynamic navbar, we need to enable it for this view:
        dynamicNavbar: true
    });


    // tab的事件
    $$('#tab2').on('show', function () {
    	 // myApp.alert('Tab 2 is visible');
    	 console.log('Tab 2 is visible')
    })

    // 切换tab
    $$('.to-tab3').click(function() {
    	myApp.showTab('#tab3')
    })

}();
