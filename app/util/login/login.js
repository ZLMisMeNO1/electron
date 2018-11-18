


function login(arg) {

    const username = arg.username;
    const pwdHash = arg.password;
    console.log('login param:', username,pwdHash);
    return true;
}

module.exports = {
    login
}