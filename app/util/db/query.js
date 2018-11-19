const mysql = require('mysql');
const prop = require('../../../prop').getProp();
const pool = mysql.createPool({
    host: prop.db.host,
    database: prop.db.database,
    user: prop.db.user,
    password: prop.db.password
})

// 接收一个sql语句 以及所需的values
// 这里接收第二参数values的原因是可以使用mysql的占位符 '?'
// 比如 query(`select * from my_database where id = ?`, [1])

let query = function (sql, values) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                throw err;
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) throw err;
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    // 结束会话
                    connection.release()
                })
            }
        })
    })
}

module.exports = query
