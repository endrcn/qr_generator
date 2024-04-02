var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QR Generator' });
});

/* GET Find IP page. */
router.get('/ip', function(req, res, next) {
  res.render('findip', { title: 'Find My IP Address' });
});

module.exports = router;
