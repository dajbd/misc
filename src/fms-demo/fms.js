var fms = require('fms')
fms.run()
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




