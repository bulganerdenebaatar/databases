var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

<<<<<<< HEAD
=======
var connection = mysql.createConnection({
  user: 'skipdawg3000',
  password: '',
  database: 'chat',
});

>>>>>>> 64d9cbe2bccf490d5f678ef0b68bb2b0793a8859
connection.connect();

module.exports = connection;
