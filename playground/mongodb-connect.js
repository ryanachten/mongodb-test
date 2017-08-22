// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert to do ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  //insert new doc into Users collection
    //has name and age and location property

    // db.collection('Users').insertOne({
    //   name: 'Ryan Achten',
    //   age: 25,
    //   location: 'Wellington, New Zealand'
    // }, (err, result) => {
    //   if(err)
    //     return console.log('Unable to connect to MongoDb server');
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

  db.close();
});
