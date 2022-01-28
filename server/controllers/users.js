var models = require('../models');

module.exports = {

  get: function (req, res) {
    models.users.getAll(function(err, results) {
      if (err) {
        console.error('Unable to retrieve users from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, function(err, results) {
      if (err) {
        console.error('Unable to post users to the database: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
<<<<<<< HEAD
};
=======
  };
>>>>>>> 64d9cbe2bccf490d5f678ef0b68bb2b0793a8859
