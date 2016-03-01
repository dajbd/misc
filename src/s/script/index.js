! function() {
	/*
	主要功能：
	1. 多搜索引擎切换
	2. http/https切换
	3. 种子搜索
	4. 维基百科搜索
	5. 有移动设备支持的站，主动跳转移动页面
	
	*/

    var entrance = [{
        'Google': { 'google.com': 'q' }
    }, {
        '360搜索': { 'so.com': 'q' }
    }, {
        '百度搜索': { 'baidu.com': 'word' }
    }, {
        '必应搜索': { 'bing.com': 'q' }
    }, {
        'Yahoo HK': { 'https://hk.search.yahoo.com': 'p' }
    }, {
        'Yahoo': { 'https://search.yahoo.com': 'p' }
    }, {
        '搜狗搜索': { 'https://sogou.com': 'keyword' }
    }, {
        '有道搜索': { 'http://youdao.com/search': 'q' }
    }]

}()
