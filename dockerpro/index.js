var express= require('express')
var redis = require('redis')
const client = redis.createClient({
    host:'redis-server',
    port:6379
})
client.set('visits',0)


var app =  express()
app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send('NumOfVists'+visits)
        client.set('visits',parseInt(visits+1))
    })
})

app.listen(8081,()=>{
    console.log('Server is ready!')
})