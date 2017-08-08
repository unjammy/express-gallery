var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
  models.Gallery.create({
    title: req.body.title,
    url: req.body.url,
    UserId: req.body.user_id
  });
});

router.get('/', function(req, res) {
  res.render('gallery', {
    title: 'Sequelize: Gallery'
  });
});

module.exports = router;