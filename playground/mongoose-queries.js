const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '599e8d21e03bd774324576be1';
// if(!ObjectId.isValid(id)) console.log('ObjectId is not valid');

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   if(todos.length === 0) return console.log('id not found');
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   if(!todo) return console.log('id not found');
//   console.log('Todo', todo);
// });

// Todo.findById(id)
// .then((todo)=>{
//   if(!todo) return console.log('id not found');
//   console.log('Todo by id', todo);
// }).catch((e)=>console.log(e));

var userId = '599cd0564e64f5522947c0d7';

User.findById(userId).then((user)=>{
  if(!user) return console.log('User id does not exist');
  console.log('User: ', user);
}).catch((e) => console.log(e));
