const { Router } = require('express');
const router = Router();

// url photos
const photo = require('./photo.router');
router.use('/photo', photo);

module.exports = router;