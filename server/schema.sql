DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `username` TEXT
);

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `text` TEXT,
  `user` INT NOT NULL,
  `roomname` TEXT,
  FOREIGN KEY (`user`) REFERENCES `users` (`id`)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

