const { response } = require('express');
const Photo = require('../models/photo');

const addPhoto = async (req, res = response) =>{
    try {
        const data = req.body;
        const { label } = req.body;

        const existPhoto = await Photo.findOne({label: label});
        if(existPhoto){
            return res.status(302).json({
                status: 302,
                message: 'Ya existe una foto con ese nombre'
            });
        }

        const photo = new Photo(data);
        await photo.save();

        return res.status(200).json({
            status: 200,
            data: photo,
            message: 'Foto agregado correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error al intentar agregar una foto'
        });
    }
}

const getPhotos = async (req, res = response) =>{
    try {

        const photo = await Photo.find();

        return res.status(200).json({
            status: 200,
            data: photo,
            message: 'Fotos obtenidos correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error al ontener las fotos'
        });
    }
}

const updatePhoto = async (req, res = response) =>{
    try {
        
        const uid = req.params.id;
        const data = req.body;

        const photo = await Photo.findById(uid);
        if(!photo){
            return res.status(404).json({
                status: 404,
                message: 'La foto que se intenta actuializar no se encontro'
            });
        }

        await Photo.updateOne({_id: uid}, data);

        return res.status(200).json({
            status: 200,
            message: 'Foto actualizado correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error al actualizar la foto'
        });
    }
}

const deletePhoto = async (req, res = response) =>{
    try {

        const uid = req.params.id;
        const photo = await Photo.findById(uid);
        if(!photo){
            return res.status(404).json({
                status: 404,
                message: 'La foto que se intenta eliminar no se encontro'
            });
        }

        await Photo.deleteOne({_id: uid});
        return res.status(200).json({
            status: 200,
            message: 'Foto eliminado correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error al e'
        });
    }
}

module.exports = {
    addPhoto,
    getPhotos,
    updatePhoto,
    deletePhoto
}