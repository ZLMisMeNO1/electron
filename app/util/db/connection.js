
const prop = require('../../../prop').getProp();
const mysql = require('mysql');

let connection;
function getConnection() {
    if (typeof (connection) == 'undefined') {
        connection = mysql.createConnection({
            host: prop.db.host,
            database: prop.db.database,
            user: prop.db.user,
            password: prop.db.password
        });
        connection.connect();
    }

    return connection;
}

module.exports = {
    getConnection
}