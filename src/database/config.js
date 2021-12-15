const { connect } = require('mongoose');

const dbConexion = async() =>{
    try {
        await connect(process.env.CONEXION_DB, {
            useNewUrlParser: true,
        });
        console.log('conectado a la base de datos');
    } catch (error) {
        console.log('Ocurrio un error al conectrase a la base de datos', error);
    }
}

module.exports = { dbConexion } 