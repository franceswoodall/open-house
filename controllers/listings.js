const express = require('express');
const router = express.Router();

const Listing = require('../models/listing');

module.exports = router;

router.get('/', async (req, res) => {
    try {
    const allListings = await Listing.find({}); 
    console.log(allListings); 
    res.render('listings/index.ejs'); 
    } catch (error) {
        console.log('Error has occured, please try again', error); 
    }
  });

