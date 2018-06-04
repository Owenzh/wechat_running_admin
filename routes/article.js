var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function (req, res, next) {
  request.get('https://wzh7tfqg.qcloud.la/weapp/demo', function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    res.send(_body);
  });
});

module.exports = router;