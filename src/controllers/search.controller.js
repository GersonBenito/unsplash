const { response } = require('express');
const Photo = require('../models/photo');

const searchPhoto = async (req, res = response) =>{

    try {

        const busqueda = req.query.label;
        const regex = new RegExp(busqueda, 'i');// para que busque tanto por mayusculas y minusculas
        const photos = await Photo.find({label: regex});//buscar datos por coincidencias con regex

        if(!photos.length > 0){
            return res.status(404).json({
                status: 404,
                data: [],
                message: 'No se encontraron resultados'
            })
        }

        return res.status(200).json({
            status: 200,
            data: photos,
            message: 'Datos obtenidos correctame'
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'Ocurrio un error al realizar la busqueda'
        })
    }

}

module.exports = {
    searchPhoto
}