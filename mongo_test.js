// Ability to connect to MongoDB
// Run via node mongo_test.js
// Use Robo 3T to connect and view what has been input into the DB

const MongoClient = require('mongodb').MongoClient;
const url ='mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client){
    console.log("Connected successfully to server");

    // creation of database with Name - if not in use it is created
    const dbName = 'myproject';
    const db = client.db(dbName);

    // new user randomly created
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document insert');
    });

    // Read back from customers database
    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection:',docs);

            // clean up
            client.close();            
    });    

});
