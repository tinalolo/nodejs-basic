// Moment 是一個用於解析、驗證、操作和顯示日期和時間的 Node.js 套件，可以方便地處理日期和時間的各種格式。
const moment = require('moment');

const date = moment('2023-04-01', 'YYYY-MM-DD');
console.log(date.format('MMMM Do YYYY, h:mm:ss a')); // April 1st 2023, 12:00:00 am