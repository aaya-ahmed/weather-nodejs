const express=require('express')
const app=express()
const cors = require('cors')
app.use(cors())
const request=require('request')
const port=4800;
app.listen(port);
app.get("/weather",(req,res)=>{
    const lat=req.query.lat
    const lon=req.query.lon
    const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b0c4ed3b96fd0376fc1d2666ccee911b&units=metric`
    request(api,(err,responce,body)=>{
        try {
            if(responce.statusCode==200){
                res.send(body)
            }
        } catch (error) {
         res.status(400).send("error request")   
        }
    })
})
module.exports=app;
