const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConexion } = require('./src/database/config');
const router = require('./src/routers/router');

dbConexion();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});




