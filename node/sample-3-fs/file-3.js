'use strict';
//写文件
var fs = require('fs');

process.chdir('./sample-3-fs');


// 在退出时清理生成临时文件
var CLEAR_FLAG = true; //true 清理，false 不清理
if(CLEAR_FLAG) {
    process.on('exit', function(code){
        if(code == 0) {
            var files = [
                'file-3-text.txt', 'file-3-buffer.txt', 'file-3-text-sync.txt'
            ];
            for(var i = 0; i<files.length; i++) {
                fs.unlinkSync(files[i]);
                console.log('file "' + files[i] + '" is deleted.');
            }
        } else {
            console.log('exit code ='+code + ', there may be an error.');
        }
    })
}

//写入文本，默认按照 utf-8 编码
var data = 'Hello Node.js';
fs.writeFile('file-3-text.txt', data, function(err){
    if(err) {
        console.log('error happend');
    } else {
        console.log('text file write ok.');
    }
});

// 写入二进制
var datab = Buffer.from(data, 'utf-8');
// datab = new Buffer(data, 'utf-8'); // also works
fs.writeFile('file-3-buffer.txt', datab, function(err){
    if(err) {
        console.log('error happend');
    } else {
        console.log('binary file write ok.');
    }
});

// 同步方式写文本，坚决不推荐同步方式！
try {
    fs.writeFileSync('file-3-text-sync.txt', data);
    console.log('sync write file ok.');
} catch(err) {
    console.log('error happended.');
}


