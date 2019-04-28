'use strict';

var url = require('url');
var urlStr = 'http://user:pass@host.com:8080/path/to/file?query=string&query2=string2#hash';
var urlObj = url.parse(urlStr);
// 将URL字符串解析为URL对象
console.log(urlObj);


// parse incomplete url:
console.log(url.parse('/static/js/jquery.js?name=Hello%20world'));

// construct a url:
console.log(url.format({
    protocol: 'http',
    hostname: 'localhost',
    pathname: '/static/js',
    query: {
        name: 'Nodejs',
        version: 'v 1.0'
    }
}));


var path = require('path');
// 解析当前目录:
var workDir = path.resolve('.');
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
console.log(workDir);
console.log(filePath);
