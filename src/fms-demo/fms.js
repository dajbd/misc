var fms = require('fms')
fms.run({
    // 设置允许跨域访问
    CORS: true,
    port: 8080,
    ajax: {
        dataType: 'json'
    }
})
fms.ajax({
    url: '/test/',
    type: 'get',
    res: {
        ok: 'yes',
        err: 'no'
    }
})

fms.ajax({
    url: '/user',
    type: 'post',
    res: {
        ok: {
        	msg: '操作成功！',
        	code: 1
        },
        err: {
        	msg: '操作失败！',
        	code: 0
        }
    }
})




