const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const con = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

con.connect(err => {
  if (err) {
      throw err;
    };
  con.query(`CREATE TABLE IF NOT EXISTS Question (
      id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      content VARCHAR(100) NOT NULL,
      answer_1 VARCHAR(100) NOT NULL,
      answer_2 VARCHAR(100) NOT NULL,
      answer_3 VARCHAR(100) NOT NULL,
      answer_4 VARCHAR(100) NOT NULL,
      correct VARCHAR(100) NOT NULL);`, (err, result) => {
        if (err) throw err;
        console.log('Table created')
      })
  console.log("Successfully connected to the database.");
});

module.exports = con;