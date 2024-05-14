//Importaciones
const express = require('express');
const bodyParser = require('body-parser');
const {v4: uuiv4} = require('uuid');


const placeRoutes = require('./routes/places-routes');
const app = express();

app.use(bodyParser.json());

app.use('/api/places', placeRoutes);




//Manejo de errores
app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next();
    }
    res.status(error.code || 500);
    res.json({
        message : error.message || 'Error desconocido'
    });

});



app.listen(5000);