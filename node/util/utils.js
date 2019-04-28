'use strict';

var fs = require('fs');

function deleteOnExit(files = [], isSync = true) {
    if( typeof(files) === undefined || !(files instanceof Array)) {
        throw new Error('You must provide a file list.');
    }
    process.on('exit', function(code){
        if(code != 0) {
            console.log('there may be an error.');
        } else {
            files.forEach((f) => {
                if(!fs.existsSync(f)){
                    console.log('this file is not exist: ' + f);
                    return;
                }
                if(isSync) {
                    var callback = function(error){
                        if(error) {
                            console.log(error);
                            return false;
                        }
                        console.log('delete file or directory success');
                    };
                    var stat = fs.statSync(f);
                    if(stat.isFile()) {
                        fs.unlink(f, callback);
                    } else {
                        fs.rmdir(f, callback);
                    }
                } else {
                    if(fs.isFile(f)) {
                        fs.unlinkSync(f);
                    } else {
                        fs.rmdirSync(f);
                    }
                }
            });
        }
    });
}


module.exports = {
    deleteOnExit: deleteOnExit
}
