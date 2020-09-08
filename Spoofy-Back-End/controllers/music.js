const express = require('express');
const router = express.Router();
const Music = require('../models/music.js');

// Index
router.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    Music.find({}, (error, allMusic) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(allMusic)
    });
});

// Delete
router.delete('/:id', (req, res) => {
    Music.findByIdAndRemove(req.params.id, (err, music) => {
      error ?
      res.status(404).json(error):
      res.status(200).json(music)
    });
});

// Update
router.put('/:id', (req, res) => {
    Music.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMusic) => {
      error ?
      res.status(404).json(error):
      res.status(200).json(updatedMusic)
    });
});

// Create
router.post('/', (req, res) => {
    Music.create(req.body, (error, createdMusic) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(createdMusic)
    });
});

// Show
router.get('/:id', (req, res) => {
    Music.findById(req.params.id, (error, foundMusic) => {
        error ?
        res.status(404).json(error):
      res.status(200).json(foundMusic)
    });
});

// export router
module.exports = router;
