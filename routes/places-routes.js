//Importaciones
const express = require('express');


const placesControllers = require('./../Controllers/places-controller');

const router = express.Router();

router.get('/', placesControllers.getAllPlaces);

 router.get('/:pid', placesControllers.getPlacesById);

 router.get('/users/:uid', placesControllers.getUsersById)

 router.post('/', placesControllers.savePlaces)

 router.patch('/:pid', placesControllers.updatePlaces);

 router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;

