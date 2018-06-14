var express = require('express');
var router = express.Router();
var request = require('request');
const uuidv4 = require('uuid/v4');
/* GET users listing. */
router.get('/article', function (req, res, next) {
  request.get('https://wzh7tfqg.qcloud.la/weapp/article', function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    console.log(_body)
    res.send(_body);
  });
});

router.get('/article_post', function (req, res, next) {
  let params = {
    id: uuidv4(),
    title: 'Just run',
    category: 'train',
    author: '中文',
    content: '<div>this is res</div>'
  };
  request.post('https://wzh7tfqg.qcloud.la/weapp/article_post', {form: params}, function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    console.log(_body)
    res.send(_body);
  });
});

module.exports = router;