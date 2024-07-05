const express = require('express');
const { Route } = require('../models/route.model');
const router = express.Router();

router.post('/', async (req, res) => {
  const { bus, cost, source, destination, driverName } = req.body;

  try {
    const newRoute = new Route({
      bus,
      cost,
      source,
      destination,
      driverName,
    });

    const savedRoute = await newRoute.save();
    res.status(201).json({ message: 'Route added successfully', route: savedRoute });
  } catch (error) {
    console.error('Error adding route:', error);
    res.status(500).json({ message: 'Error adding route' });
  }
});

router.get('/', async (req, res) => {
    const { source, destination } = req.query;
    try {
      const route = await Route.findOne({ source, destination });
      if (!route) {
        return res.status(404).send({ error: 'Route not found' });
      }
      res.status(200).json(route._id);
    } catch (error) {
      res.status(500).send({ error: 'Error fetching route' });
    }
  });
  

module.exports = router;
