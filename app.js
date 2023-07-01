const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//create
app.post('/insert', (request,response)=> {

});

//read 
app.get('/getAll', (request,response)=> {
    console.log('test');
    response.json({
        succsess: true
    });

});

//update

//delete

app.listen(process.env.PORT, ()=> console.log('app is running'));