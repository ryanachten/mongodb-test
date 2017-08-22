const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Users').deleteMany({name : "Sean Achten"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text : "Eat things"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({
    "_id" : new ObjectID("599c973bb07798a5231b3645")
}).then((result) => {
    console.log(result);
  });

  // db.close();
});
