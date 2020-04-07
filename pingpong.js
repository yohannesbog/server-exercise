const express = require('express')
const app = express()
app.get('/ping', function (req, res, next){
    console.log('world-someone')
    res.send('pong')
   
})

app.listen('300', function(){
console.log('hello from server');
})