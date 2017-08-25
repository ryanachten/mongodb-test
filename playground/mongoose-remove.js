const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findByIdAndRemove('59a09c77eab81f011ab1d2cb').then((result)=>{
  console.log(result);
});
