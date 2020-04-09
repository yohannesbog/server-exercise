const express = require('express')
const app = express()

let counter = 0;

app.post('/increament', (req, res) =>{

counter++;
res.send('The count is: ' + counter)
 res.end("Yes");

})

app.post('/decreament', (req, res) =>{
    counter--;
    res.send('The count is: ' + counter)
    res.end("Yes");

})

app.get('/value',  (req, res) => {
    console.log(counter)
    res.send('The count is: ' + counter)
   
})

app.listen('4000', function(){
console.log(counter);
})
