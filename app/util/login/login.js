


function login(arg) {

    const username = arg.username;
    const pwdHash = arg.password;
    console.log('login param:', username,pwdHash);

    if ( username === 'a' &&
        pwdHash === '0cc175b9c0f1b6a831c399e269772661') {
            return true;
        }

    return false;
}

module.exports = {
    login
}