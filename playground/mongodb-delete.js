// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany (we have multiple todos in the DB that are the exact same 
    //except for their unique id's)
        // db.collection('Todos').deleteMany({text: 'Feed the frog'}).then((result) => {
        //     console.log(result);
        // })

    // deleteOne
        // db.collection('Todos').deleteOne({text: 'Feed the frog'}).then((result) => {
        //     console.log(result);
        // })

    // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result);
        // })

    //class challenge: delete many with the same name, then findOneAndDelete by the id
    //of that item in the collection
        //delete one
        // db.collection('Users').findOneAndDelete({
        //     '_id': ObjectID('5b35a3bfc43b5421bc4bdd80')
        // }).then((result) => {
        //     console.log(result);
        // })

        //delete many
        db.collection('Users').deleteMany({name: 'Evan'}).then((result) => {
            console.log(result);
        })

    // client.close();
})