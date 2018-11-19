
const connection = require('../db/connection').getConnection();
const query = require('../db/query');
const crypto = require('crypto');


async function login(arg) {

    const username = arg.username;
    const pwdHash = arg.password;
    // console.log('login param:', username,pwdHash);
    let rows = await query('select id,code,password_hash,password_salt from electron_user where code = ?', username);
    if (rows == 0) {
        console.log('查无此人');
        return false;
    }
    // console.log(rows)
    const hash = crypto.createHash('md5');
    hash.update(pwdHash);
    hash.update(rows[0].password_salt);
    const pwdSaltHash = hash.digest('hex').toString();
    // console.log(pwdSaltHash)
    if (pwdSaltHash === rows[0].password_hash) {
        console.log('可以登录')
        return true;
    }

    return false;
}

module.exports = {
    login
}