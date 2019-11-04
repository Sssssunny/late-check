const mysql = require('mysql');

// 내 db의 값 가져오기
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'qazx1235',
    database        : 'sunny'
  });
  
module.exports = pool;