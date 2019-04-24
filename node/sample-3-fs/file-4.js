'use strict';

var fs = require('fs');

console.log('current workspace: ' + process.cwd());
console.log('current file: ' + __filename);

// 同步方式
var stat = fs.statSync(__filename);
console.log('file size by sync: ' + stat.size);

// 异步方式
fs.stat(__filename, function (err, stat) {
    if (err) {
        console.error(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('filesize: ' + stat.size);
            console.log('file create time: ' + stat.birthtime);
            console.log('file modified time: ' + stat.mtime);
        }
    }
});

