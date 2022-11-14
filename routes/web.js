const express = require('express'),
    router = express.Router(),
    mainController = require('../controllers/main.controller')

    //Export Router 
    module.exports = router;

    //localhost:3000
    router.get('/', mainController.index);

    //localhost:3000/about
    router.get('/about', mainController.about);
    
    //localhost:3000/Contact
    router.get('/contact', mainController.contact);

    //localhost:3000/Post
    router.get('/post', mainController.post);