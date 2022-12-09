const { Plants } = require('../models/plantmodels.js');

const plantControllers = {};

plantControllers.getPlants = async (req, res, next) => {
  try {
    res.locals.plants = await Plants.find({}).exec();
    return next();
  } catch (err) {
    return next({
      log: 'An error occured in getPlants middleware',
      status: err.status || 500,
      message: { err: 'An error occured when getting plants' },
    });
  }
};

plantControllers.createPlant = ({body}, res, next) => {
  try {
    console.log(body)
    Plants.create({
      date: body.date, 
      location: body.locationDiscovered,
      description: body.plantDescription,
      plantName: body.plantName,
      image: body.image
    })
    return next(); 
  } catch (err) {
    return next({
      log: 'An error occured in createPlant middleware',
      status: err.status || 500,
      message: { err: 'An error occured when adding a new plant' },
    });
  }
}

plantControllers.deletePlant = async (req, res, next) => {
  try {
    await Plants.deleteOne({plantName: req.body.deletePlantName}); 
    return next(); 
  } catch (err) {
    return next({
      log: 'An error occured in createPlant middleware',
      status: err.status || 500,
      message: { err: 'An error occured when deleting a plant' },
    });
  }
}
module.exports = plantControllers;