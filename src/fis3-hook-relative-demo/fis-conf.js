fis.match('*.less', {
    parser: fis.plugin('less-2.x'),
    rExt: '.css'
});



// 用于支持相对路径插件
// 启用插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
    relative: true
})
