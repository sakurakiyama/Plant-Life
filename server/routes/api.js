const express = require('express');
const { restart } = require('nodemon');
const plantControllers = require('../controllers/plantControllers');
const router = express.Router();

router.get('/', plantControllers.getPlants, (req, res) =>
  res.status(200).json(res.locals.plants)
);

router.post('/', plantControllers.createPlant, (req, res) =>
  res.status(200).json({})
);

router.delete('/', plantControllers.deletePlant, (req, res) =>
res.status(200).json({})
)

module.exports = router;
