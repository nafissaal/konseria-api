const mysql = require('mysql');

const pool = mysql.createPool({
  host: '192.168.100.156',
  user: 'root',
  password: 'MS7531^_^ql',
  database: 'konseriadb',
});



// Helper function (memanggil koneksi dari connection pool)
const getConnectionFromPool = () => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    if (error) {
      reject(error);
    } else {
      resolve(connection);
    }
  });
});

// Helper function (mengembalikan koneksi kembali ke connection pool)
const releaseConnection = (connection) => new Promise((resolve, reject) => {
  connection.release((error) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
});

// Helper function (mengeksekusi SQL query)
const executeQuery = (connection, query, values) => new Promise((resolve, reject) => {
  connection.query(query, values, (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

module.exports = {
  getConnectionFromPool,
  releaseConnection,
  executeQuery,
};
