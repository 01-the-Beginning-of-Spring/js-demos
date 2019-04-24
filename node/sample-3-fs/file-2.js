'use strict';

// 同步读文件，坚决不推荐同步方式！

var fs = require('fs');
process.chdir('./sample-3-fs');

//读文本
var datat = fs.readFileSync('./data.txt', 'utf-8');
console.log(datat);

try {
    datat = fs.readFileSync('./data.txt-xxx', 'utf-8');
} catch(err) {
    console.error('error happended.');
    console.error(err);
}

//读二进制
console.log();
var datab = fs.readFileSync('./data.txt');
console.log(datab);