const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const urlsController = require('../controllers/UrlsController');

router.get('/', homepageController.index);
router.post('/urls', urlsController.store);
router.get('/:id', urlsController.same);
module.exports = router;
