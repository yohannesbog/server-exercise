
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

let messageArray = [{
    name: 'test',
    message: 'test'
}];

 app.post('/data', (req, res)=> {
     const data = {
    name: req.body.name,
    message: req.body.message
}
    messageArray.push(data)
    console.log('Sending data ...');
    res.end("Data sent");

});


    app.get('/getData', (req, res) => {        
        messageArray.forEach((data) => {
                    res.send(data);
                })
            })

app.listen('9000', function(){
    console.log("started on port 9000");
    })