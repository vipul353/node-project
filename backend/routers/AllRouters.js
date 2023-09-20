const {Router} = require('express');
const {
    bollywoodController, 
    hollywoodController, 
    technologyController,
    fittnessController,
    latestController,
    FoodController
} = require('../controller/blogController');


const router  = Router();

//  router.get('/hello',(req,res)=>{
//   res.send("hello")
//  }) 
 router.get('/bollywood',bollywoodController)
 router.get('/hollywood',hollywoodController);
 router.get('/technology',technologyController);
 router.get('/fitness',fittnessController);
 router.get('/latest',latestController);
 router.get('/food',FoodController);


module.exports =router
