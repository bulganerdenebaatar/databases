var db = require('../db');

module.exports = {

  getAll: function (callback) {
    // fetch all users
    var queryStr = 'select * from users';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a user
    var queryStr = 'insert into users(username) values (?)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
<<<<<<< HEAD
};
=======
  };
>>>>>>> 64d9cbe2bccf490d5f678ef0b68bb2b0793a8859
