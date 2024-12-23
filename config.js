const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'zBknWaBD#T3QMfKde3MhGqvuO-oPBjXzUrBNoy94SYg8-Yja_zbo',
FOOTER: process.env.FOOTER === undefined ? 'MIZUKI MD' : process.env.FOOTER,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
};
