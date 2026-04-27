const express = require('express');
const mysql = require('mysql2');

const app = express();

function createPool() {
  return mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'my-secret-pw',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
  });
}

let pool = createPool();

function connectWithRetry() {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database not ready, retrying in 5s...', err.message);
      setTimeout(connectWithRetry, 5000);
      return;
    }
    console.log('Connected to MySQL!');
    connection.release();
  });
}

connectWithRetry();

app.get('/', (req, res) => {
  res.send('Hello from Node.js + MySQL on Docker!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});