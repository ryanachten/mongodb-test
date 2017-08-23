var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newTodo = new Todo({
//   text: 'Learn node'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e) =>{
//   console.log(e);
// });

var newUser = new User({
  // email: 'ryanachten@gmail.com'
});

newUser.save().then(
  (doc)=>{
    console.log('Save doc', doc);
  },
  (e)=>{
    console.log(e);
  }
);
