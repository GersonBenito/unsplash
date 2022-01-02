const { Router } = require('express');
const router = Router();

// url photos
const photo = require('./photo.router');
router.use('/photo', photo);

const search = require('./search.router');
router.use('/search',search);

module.exports = router;