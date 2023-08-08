// Validator用於驗證各種輸入，通常會被作為一層middleware引入做使用，如電子郵件，URL等。它提供了一組內置的方法來驗證輸入數據。這個套件可以在前端和後端使用，透過這個套件，開發者可以快速方便的進行資料的驗證。

import validator from 'validator';

const email = 'example@gmail.com';
const url = 'https://www.google.com';
const input = '12345';
const integer = 12345;
const string = 'helloworld';
const boolean = true;
const date = '2022-04-01';

console.log(validator.isEmail(email)); // true
console.log(validator.isURL(url)); // true
console.log(validator.isNumeric(input)); // true
console.log(validator.isInt(integer.toString())); // true
console.log(validator.isLength(string, { min: 2, max: 10 })); // true
console.log(validator.isBoolean(boolean.toString())); // true
console.log(validator.isDate(date)); // true