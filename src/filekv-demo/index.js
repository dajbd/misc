var filekv = require('filekv');
var http = require('http')

var filekvClient = filekv.create({
    fileDir: __dirname + '/data',
    workMax: 1000
})


var request = require('request')
request('http://news.qq.com', function(error, response, body) {
    if (!error && response.statusCode == 200) {

        console.log(body); // Show the HTML for the Modulus homepage.

        filekvClient.set('news.qq.com', body);
    }
});

// http.get('http://news.qq.com', function (res) {
//     console.log()
// }).on('error', function (e) {
//     console.log('error')
// })


// var req = http.request({
//     hostname: 'news.qq.com'
// }, function(res) {

//     res.on('data', function(chunk) {
//         console.log('BODY: ' + chunk);
//     });
//     res.on('end', function() {
//         console.log('No more data in response.')
//     })

//     filekvClient.set('news', res);

// })

// req.on('error', function(e) {
//     console.log('problem with request: ' + e.message);
// });

// req.write('');
// req.end();
