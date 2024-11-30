const express = require('express');
const {dbconnect} = require('./config/dbconnect');
const app = express();
const cors = require('cors');
require("dotenv").config();  


app.use(express.json());
app.use(cors());

const Route = require('./routers/Route.js');
app.use('/api/v1',Route)

const port =  8000 || process.env.Port ;

dbconnect();

app.listen(port,() => {
    console.log("server started at port No 8000")
})