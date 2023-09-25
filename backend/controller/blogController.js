const bollywood = require("../Data/BolllyWoodData");
const hollywood = require("../Data/hollywoodData");
const technology = require("../Data/technologyData");
const fitness = require('../Data/fittness');
const latest = require("../Data/latest");
const Food = require("../Data/Food");
const Data = require("../Data/data");

const bollywoodController = (req,res)=>{
    res.send(bollywood)
}

const hollywoodController = (req,res)=>{
    res.send(hollywood);
}

const technologyController = (req,res)=>{
    res.send(technology);
}


const fittnessController = (req,res)=>{
    res.send(fitness);
}

const latestController = (req,res)=>{
res.send(latest)
}

const FoodController = (req,res)=>{
  res.send(Food)
}

const AllData = (req,res)=>{
    res.send(Data)
}

module.exports = {
    bollywoodController,
    hollywoodController,
    technologyController,
    fittnessController,
    latestController,
    FoodController,
    AllData
};

