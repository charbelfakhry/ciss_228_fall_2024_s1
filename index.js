const express = require("express");
const moment = require("moment");
const config = require("./database/config");
const { query } = require("./database/db");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

const users = require('./routes/users.routes');

app.get("/", (req, res)=>{
    res.status(200).json({message: "this is the index page"})
});


app.use('/api/users', users);








app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);

})

