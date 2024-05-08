const express = require('express');

const placeRoutes = require('./routes/places-routes');
const app = express();

app.use('/api/places', placeRoutes);



app.listen(3000);