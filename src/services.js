const mysql = require('mysql2/promise')
exports.database = () => {
  const PromiseConnection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'insticdb',
    password: ''
  })
  return PromiseConnection;
}
// A connecção cria uma promesa que é resolvida quando a conneção for bem succedida;