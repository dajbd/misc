!new function(n,t){function i(n){return new i.init(n)}i.init=function(n){var i=t.querySelectorAll(n)||[],e=this;return Array.prototype.forEach.call(i,function(n,t){e[t]=n}),e.length=i.length,e},i.init.prototype={hide:function(){return this.each(function(n,t){t.style.display="none"}),this},show:function(){return this.each(function(n,t){t.style.display=null}),this},each:function(n){Array.prototype.forEach.call(this,function(t,i){n.call(t,i,t)})},css:function(n,t){return this.each(function(i,e){e.style[n]=t}),this}},"$"in n||(n.$=i),"jQuery"in n||(n.jQuery=i)}(window,document);