'use strict';

// 结束运行时清理

var files = ['output.txt', 'output2.txt', 'output.png'];

var CLEAR_ON_EXIST = true;
if (CLEAR_ON_EXIST) {
    var utils = require('../util/utils');
    utils.deleteOnExit(files);
}

var fs = require('fs');
// 从文件流读取文本
var rts = fs.createReadStream('./data/data.txt', 'utf-8');
rts.on('data', function(chunk){
    console.log('DATA=>');
    console.log(chunk);
});
rts.on('end', function(){
    console.log('END');
});
rts.on('error', function(err){
    console.log("Error=>" + err);
});

// 从二进制文件读取数据
var rbs = fs.createReadStream('./data/javascript.png');
rbs.on('data', function(chunk){
    console.log('Data=>', chunk.length, " bytes");
});
rbs.on('end', function(){
    console.log('END');
});
rbs.on('error', function(err){
    console.log('Error=>'+err);
});

// 用流写入文本数据
var wts = fs.createWriteStream(files[0], 'utf-8');
wts.write('用Stream写入文本数据\n');
wts.write('END.');
wts.close();

// 用流写入二进制数据
var wbs = fs.createWriteStream(files[1]);
wbs.write(new Buffer('用Stream写入二进制数据\n', 'utf-8'));
wbs.write('END.');
wbs.close();

//使用pipe
var rs = fs.createReadStream('./data/javascript.png');
var ws = fs.createWriteStream(files[2]);
rs.pipe(ws);
