var auth = require('http-auth');
var basic = auth.basic({
    realm: "Simon Area.",
    file: __dirname + "/users.htpasswd"
});

basic.on('success', (result, req) => {
    console.log(`User authenticated: ${result.user} ------ ${req.connection.remoteAddress}`);
});

basic.on('fail', (result, req) => {
    console.log(`User authentication failed: ${result.user} ------ ${req.connection.remoteAddress}`);
});

basic.on('error', (error, req) => {
    console.log(`Authentication error: ${error.code + " - " + error.message}`);
});

var express = require('express');
var ip = require('ip');
var fs = require('fs');
var opn = require('opn');
var multer = require('multer');
var app = express();


app.use(auth.connect(basic));
var formidable = require('formidable');
app.set('view engine', 'jade');
app.set('views', './views')

var PORT = 3000;

//Starts the browser with the website
opn('http://' + ip.address() + ':' + PORT, { app: 'chrome' });

//Default view
app.get('/', function (req, res) {
    const testFolder = './files/';
    var files = [];
    fs.readdirSync(testFolder).forEach(file => {
        files.push(file);
    })
    res.render('index', { title: 'Serverino', message: 'Serverino:files', files: files });
});


//Download View
app.get('/files/:filename', function (req, res) {
    res.set("Content-Disposition", "attachment;filename=" + req.param('filename'));
    res.download(__dirname + '\\files\\' + req.param('filename'));
});

app.get('/:filename.css', function (req, res) {
    res.setHeader('content-type', 'style/css');
    res.download(__dirname + '\\css\\' + req.param('filename') + '.css');
});

app.get('/:filename.js', function (req, res) {
    res.setHeader('content-type', 'text/javascript');
    res.download(__dirname + '\\js\\' + req.param('filename') + '.js');
});

app.get('/:filename.png', function (req, res) {
    res.setHeader('content-type', 'image/png');
    res.download(__dirname + '\\images\\' + req.param('filename') + '.png');
});


//Upload view
app.post('/upload', function (req, res) {
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

        var newpath = __dirname + '\\files\\' + files.filetoupload.name;
        if (!fs.existsSync(newpath)) {
            fs.rename(oldpath, newpath, function (err) {
                if (err)
                    res.send('ERROR');
                else
                    res.send('OK');
            });
        }
        else {
            res.send('ERROR');
        }
    });
});

//Upload view
app.get('/delete/:filename', function (req, res) {
    if (fs.existsSync(__dirname + '\\files\\' + req.params.filename)) {
        console.log("Il file esiste");
        fs.unlinkSync(__dirname + '\\files\\' + req.params.filename);
        res.send('OK');
    }
    else {
        res.send('ERROR');
    }
});

//Listening
app.listen(PORT, function () {
    console.log('Serverino aperto sulla porta ' + PORT)
});