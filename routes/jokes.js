var express = require('express');
var router = express.Router();
const jokesCtrl = require('../controllers/jokes');

/* GET users listing. */
router.get('/', jokesCtrl.getJokes);
router.post('/choice', jokesCtrl.getCJoke)
router.get('/category', jokesCtrl.getCategory)


module.exports = router;
