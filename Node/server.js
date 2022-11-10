
const exp = require('constants');
const express = require('express')
const os = require("os");
const path = require('path')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../public')))


let list = {list: []};

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => console.log(`Server listening a port ${port}!`));


 app.get('/hello', (req,res) => {
    helloJSON = {msg: "Hello World"};
    res.json(helloJSON);

 });

app.get('/echo/:id',(req,res) => {
    echoJSON = {id: req.params.id}
    res.json(echoJSON)

})

app.post('/sum', (req,res) =>  {
    let numberlist = req.body.numbers;
    let sum = 0;
    for (let number in numberlist) {
        sum += parseInt(numberlist[number])
    }
    res.json(sum)
})

app.post('/list', (req,res) => {
    listItem = req.body.text;
    list.list.push(listItem);
    console.log(list);
    res.send(list);
})



/*const http = require('http');

console.log('Server started!')

http.createServer(function(req,res) {
    res.write('Hello World!!');
    res.end();
    console.log('Server is running..')


}).listen(3000);*/

