const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruit.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use Fruits model to get all Fruits
    Fruit.find({}, (error, allFruits) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(allFruits)
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Fruit.findByIdAndRemove(req.params.id, (err, fruit) => {
      error ?
      res.status(404).json(error):
      res.status(200).json(fruit)
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;

    // Update the fruit document using our model
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
      error ?
      res.status(404).json(error):
      res.status(200).json(updatedFruit)
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // Use Model to create Fruit Document
    Fruit.create(req.body, (error, createdFruit) => {
        // Once created - respond to client
        error ?
        res.status(404).json(error):
        res.status(200).json(createdFruit)
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Fruit.findById(req.params.id, (error, foundFruit) => {
        // render the Show route and pass it the foundFruit
        error ?
        res.status(404).json(error):
      res.status(200).json(foundFruit)
    });
});

// export router
module.exports = router;
