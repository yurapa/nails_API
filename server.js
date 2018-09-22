const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//const CONFIG = require('./config/db');
const PORT = process.env.PORT || 8000;

// URI_FOR_DEV = CONFIG.generateUrl()
// URI_FOR_PROD = process.env.PROD_MONGODB

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
let db;

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


// Connect to the database before starting the application server.
MongoClient.connect(process.env.PROD_MONGODB, {useNewUrlParser: true}, (err, client) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db(process.env.PROD_DBNAME);
    console.log("Database connection ready");

    require('./app/routes')(app, db, ObjectID);
    app.listen(PORT, () => {
        console.log(`App now running on port: ${ PORT }`);
    });
});