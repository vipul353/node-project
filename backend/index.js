const express = require('express');
// const data = require('./data');
const Data = require('./data');

const app = express()

app.get('/',(req,res)=>{
  res.send(Data)

})

app.listen(3000,()=>{
    console.log('app running on port 3000');
})