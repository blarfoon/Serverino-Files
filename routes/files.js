var express = require('express');
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/:filename', function (req, res, next) {
    res.set("Content-Disposition", "attachment;filename=" + req.param('filename'));
    res.download(__dirname + '/../files/' + req.param('filename'), function(err){
        console.log(err);
    });
});

router.delete('/:filename', function (req, res) {
  if (fs.existsSync(__dirname + '/../files/' + req.params.filename)) {
      console.log("Il file esiste");
      fs.unlinkSync(__dirname + '/../files/' + req.params.filename);
      res.send('OK');
  }
  else {
      res.send('ERROR');
  }
});


module.exports = router;
