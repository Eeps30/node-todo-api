// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b345caf2129e46ccd1c430b')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    //update the user in the user collection, setting it to something other than what it is
    //currently AND increment its age by 1.
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b35a3b6c43b5421bc4bdd7a')
    }, {
        $set: {
            name: 'Smoothe'
        },
        $inc: {
            age: 12
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
})