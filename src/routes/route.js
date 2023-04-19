const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const welcome = require('../../src/logger/logger.js')
const dateAndMonth= require('../../src/util/helper.js')
const formatter = require('../../src/validator/formatter.js')
const _ = require('lodash')

router.get('/test-me', function (req, res) {
    
    res.send('This should be working!')
    welcome()
    dateAndMonth.printDate();
    dateAndMonth.printMonth();
    dateAndMonth.getBatchInfo();
    formatter.trim1();
    formatter.changeToLowerCase();
    formatter.changeToUpperCase();

    const months = _.chunk(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],3)
    console.log(months);
    const oddNum = _.tail([1,3,5,7,9,11,13,15,17,19],9);
    console.log(oddNum);
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 4, 6, 8, 10];
    const arr3 = [3, 6, 9, 12, 15];
    const arr4 = [4, 8, 12, 16, 20];
    const arr5 = [5, 10, 15, 20, 25];
    const mergedArray = _.union(arr1, arr2, arr3, arr4, arr5);
    console.log(mergedArray);
    const movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    const movieObject = _.fromPairs(movies);
    console.log(movieObject);

});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;