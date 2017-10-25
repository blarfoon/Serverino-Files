var express = require('express');
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const testFolder = './files/';
    var files = [];
    var directories = [];
    fs.readdirSync(testFolder).forEach(file => {
        if (fs.lstatSync(testFolder + file).isFile()) {
            files.push(file);
        }
        else {
            directories.push(file);
        }

    })
    res.render('home/index', { title: 'Express', files: files, directories: directories });
});
router.get('/files-list', function (req, res, next) {
    const testFolder = './files/';
    var files = [];
    var directories = [];
    fs.readdirSync(testFolder).forEach(file => {
        if (fs.lstatSync(testFolder + file).isFile()) {
            files.push(file);
        }
        else {
            directories.push(file);
        }

    })
    res.render('partials/files', { layout: false, title: 'Express', files: files, directories: directories });
});
router.post('/upload', function (req, res, next) {
    res.setHeader('content-type', 'text/html');
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        try {

            if (files.filetoupload.size == 0) {
            }
        } catch (err) {
            res.send('ERROR');
            return;
        }

        var oldpath = files.filetoupload.path;

        var newpath = '.\\files\\' + files.filetoupload.name;
        if (!fs.existsSync(newpath)) {
            fs.rename(oldpath, newpath, function (err) {
                if (err)
                    res.send(err);
                else
                    res.send('OK');
            });
        }
        else {
            res.send('ERROR');
        }
    });
});

module.exports = router;
