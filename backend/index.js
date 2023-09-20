const express = require('express');
const Data = require('./Data/data');
const router = require('./routers/AllRouters');
const app = express()
app.get('/',(req,res)=>{
res.send('app is running')
})
app.use('/api',router)

app.listen(3000,()=>{
    console.log('app running on port 3000');
})