
const fs = require('fs');


let prop;
function getProp() {
    if (typeof(prop) == 'undefined' ) {
        prop = JSON.parse(fs.readFileSync('./config.json'));
    }
    return prop;

}

module.exports = {
    getProp
}