// simple demo, just like jQuery library
new function(window, document) {

    function $(selector) {
        return new $.init(selector)
    }

    $.init = function(s) {
        var target = document.querySelectorAll(s) || []
        var self = this
        Array.prototype.forEach.call(target, function(el, index) {
            self[index] = el
        })
        self.length = target.length
        return self
    }


    $.init.prototype = {
        hide: function() {
            this.each(function(index, el) {
                el.style.display = 'none'
            })
            return this
        },
        show: function() {
            this.each(function(index, el) {
                el.style.display = null
            })
            return this
        },
        each: function(callback) {
            Array.prototype.forEach.call(this, function(el, index) {
                callback.call(el, index, el)
            })
        },
        css: function(key, value) {
            this.each(function(index, el) {
                el.style[key] = value
            })
            return this
        }
    }

    if (!('$' in window)) {
        window.$ = $
    }

    if (!('jQuery' in window)) {
        window.jQuery = $
    }

}(window, document)
