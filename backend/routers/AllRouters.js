const {Router} = require('express');
const {
    bollywoodController, 
    hollywoodController, 
    technologyController,
    fittnessController,
    latestController,
    FoodController,
    AllData
} = require('../controller/blogController');


const router  = Router();


 router.get('/bollywood',bollywoodController)
 router.get('/hollywood',hollywoodController);
 router.get('/technology',technologyController);
 router.get('/fitness',fittnessController);
 router.get('/latest',latestController);
 router.get('/food',FoodController);
 router.get('/allData',AllData);


module.exports =router
