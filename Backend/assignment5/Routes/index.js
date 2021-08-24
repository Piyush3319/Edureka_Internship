const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/locations');
const mealtypeController = require('../Controllers/mealtypes');
const resturantController = require('../Controllers/resturants');

route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypeController.getMealTypes);
route.get('/resturants', resturantController.getresturnats);
route.get('/resturant/:resCity',resturantController.getResturantsByCity);

module.exports = route;