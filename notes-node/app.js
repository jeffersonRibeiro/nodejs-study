const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const username = os.userInfo().username;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 11];
const result = _.concat(arr1, arr2);

console.log('result:', result);




fs.appendFile('greetings.txt', `Hello ${username}`, err => {
    if(err) {
      console.log('Unable to write to file');
    }
});