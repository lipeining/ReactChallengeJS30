var express = require('express');
var router = express.Router();
var fs = require('fs');
var rq = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api', async function(req, res, next) {
  let API = [];
  return res.json(API);
});
router.get('/api/:id', async function(req, res, next) {
  let API = [];
  let api = API.find((a)=>{
    return a.id === Number(req.params:id);
  });
  if(!api) {
    return res.json({notFound: true});
  }
  return res.json(api);
});
router.put('/api/:id', async function(req, res, next) {
  let API = [];
  let index = API.findIndex((a)=>{
    return a.id === Number(req.params:id);
  });
  if(index === -1) {
    return res.json({notFound: true});
  }
  let api;
  try {
    api = JSON.parse(req.body.api);
  } catch(err) {
    return res.json(err);
  }
  API.splice(index, 1, api);
  fs.writeFileSync('../API.json', JSON.stringfy(API, null, 2));
  return res.json(api);
});
router.post('/api/:id', async function(req, res, next) {
  let API = [];
  let api = API.find((a)=>{
    return a.id === Number(req.params:id);
  });
  if(!api) {
    return res.json({notFound: true});
  }
  let encryMsg = DES.desEncrypt(api);
  let result = await rq.post();
  return res.json(result);
});



module.exports = router;
