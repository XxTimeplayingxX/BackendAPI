//Importaciones
const express = require('express');
// const HttpError = require('HttpError');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Rotonda',
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Centro Cívico',
        creator: 'u1'
    }
];

router.get('/', (req, res, next)=>{
    
    res.json({DUMMY_PLACES});
    
});

 router.get('/:pid', (req, res, next) => {
     const place = DUMMY_PLACES.find(p => {
         return p.id === req.params.pid;
     });
     if(!place){
        const error = new Error('Lugar no existe para el ID especificado');
        error.code = 404;
        next(error);
     }else{
         res.json({place});
         console.log(place);
     }
 });

 router.get('/users/:uid', (req, res, next)=>{
    const places = DUMMY_PLACES.find(p=>{
        return p.creator === req.params.uid
    });
    if(!places){
        throw new Error('Lugar no existe para el ID de usuario especificado');
    }
    res.status(error.code)
    res.json|(places);


    // if(!places){
    //     const error = new Error('Lugar no existe para el ID de usuario especificado');
    //     error.code = 404;
    //     next(error);
    // }
 })

module.exports = router;



// app.get('/api/places', (req, res, next) => {
//     const places = DUMMY_PLACES;
//     res.send(places);
//     next();
// });



