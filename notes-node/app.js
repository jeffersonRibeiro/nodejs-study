const fs = require('fs');
const os = require('os');

const username = os.userInfo().username;

fs.appendFile('greetings.txt', `Hello ${username}`, err => {
    if(err) {
      console.log('Unable to write to file');
    }
});