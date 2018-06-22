var express = require('express');
var router = express.Router();
var request = require('request');
const uuidv4 = require('uuid/v4');

router.post('/article_post', function (req, res, next) {
  let params = {};
  params = req.body.params;
  params.id = uuidv4();
  request.post('https://wzh7tfqg.qcloud.la/weapp/article_post', { form: params }, function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    console.log(_body)
    res.send(_body);
  });
});

router.get('/article_list', function (req, res, next) {
  request.get('https://wzh7tfqg.qcloud.la/weapp/article_list', function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    // console.log(_body)
    res.send(_body);
  });
});

router.get('/article_list/category/:category', function (req, res, next) {
  console.log(req.params)
  let cate = req.params.category;
  request.get('https://wzh7tfqg.qcloud.la/weapp/article_list/category/'+cate, function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    // console.log(_body)
    res.send(_body);
  });
});

router.get('/article_list/category/:category/top/:top', function (req, res, next) {
  console.log(req.params)
  let category = req.params.category;
  let top = req.params.top;
  request.get('https://wzh7tfqg.qcloud.la/weapp/article_list/category/'+category+'/top/'+top, function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    // console.log(_body)
    res.send(_body);
  });
});

router.get('/article_list/top/:top', function (req, res, next) {
  console.log(req.params)
  let top = req.params.top;
  request.get('https://wzh7tfqg.qcloud.la/weapp/article_list/top/'+top, function (_err, _res, _body) {
    if (_err) {
      res.send(_err);
    }
    // console.log(_body)
    res.send(_body);
  });
});

module.exports = router;