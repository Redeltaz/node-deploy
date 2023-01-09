const express = require('express')
const path = require('path')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require("dotenv").config()

const PORT = 8080

db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
  port : 3306
})

db.connect((err) => {
  if (err) {
    throw err;
  } else {
  console.log('Mysql Connected...');
  }
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'views') + '/index.html');
});

app.listen(PORT, () => console.log(`Server started, listening on port: ${PORT}`));
