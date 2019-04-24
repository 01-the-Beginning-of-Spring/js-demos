'use strict';

// 异步读文件

var fs = require('fs');
console.log('工作路径：', process.cwd());
process.chdir('./sample-3-fs')
console.log('切换后的路径：',process.cwd());

// 直接文本形式读取
fs.readFile('./data.txt', 'utf-8', function(err, data){
    if(err) {
        console.log(err);
    } else {
        console.log('文件长度', data.length, 'bytes');
        console.log('文件内容:');
        console.log(data);
    }
});

// 二进制形式读取，没有传入编码
fs.readFile('./data.txt', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('文件长度', data.length, 'bytes');
        console.log('文件内容:');
        //data是Buffer对象，可以和String类型互转
        console.log(data);
        console.log(data.toString('utf-8'));
        console.log(Buffer.from('hello world', 'utf-8'));
    }
});