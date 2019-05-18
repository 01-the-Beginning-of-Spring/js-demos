'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

var file1 = 'data/data.txt';
var file2 = file1;
app.get('/test', function (req, res) {
    fs.readFile(file1, function (err, data1) {
        if (err) {
            res.status(500).send('read \'' + file1 + '\' error');
        }
        // res.send(data1);
        fs.readFile(file2, function (err, data2) {
            if (err) {
                res.status(500).send('read \''+ file2 + '\' error');
            }
            res.type('text/plain');
            res.send(data1 + data2);
        });
    });
});
