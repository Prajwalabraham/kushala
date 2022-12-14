const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeurls = require('./routes/route');
const cors = require('cors');
const bodyParser = require("body-parser")


dotenv.config()
mongoose
    .connect(process.env.DATABASE_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });

app.use(express.json())
app.use(routeurls);
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/app', routeurls)

app.listen(4000,() => console.log("server is up and running"))