const { Router } = require('express');
const { check } = require('express-validator');
const photo = require('../controllers/photo.controller');
const { validateCampos } = require('../middleware/validate');

const router = Router();

router.post('/', 
    [
        check('label', 'El campo label es requedido').not().isEmpty(),
        check('url', 'la url de la foto no es valido').isURL(),
        validateCampos,
    ], 
photo.addPhoto);
router.get('/', photo.getPhotos);
router.put('/:id', 
    [
        check('label', 'El campo label es requedido').not().isEmpty(),
        check('url', 'la url de la foto no es valido').isURL(),
        validateCampos,
    ], 
photo.updatePhoto);
router.delete('/:id', photo.deletePhoto);

module.exports = router;