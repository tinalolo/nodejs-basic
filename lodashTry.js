// Lodash 是 Node.js 中一個常用的 JavaScript 工具庫，提供了豐富的工具函式，可以簡化開發過程中的許多常見操作，如陣列和物件操作、字串處理、函式式編程等。它提供了許多功能，可以減少您的編程時間和複雜度。

import _ from 'lodash';

// 創建一個陣列
const nums = [1, 2, 3, 4, 5];

// 找到最大值
const maxNum = _.max(nums);
console.log('Max number:', maxNum);

// 找到最小值
const minNum = _.min(nums);
console.log('Min number:', minNum);

// 取得陣列中每個元素的平方
const squaredNums = _.map(nums, num => num ** 2);
console.log('Squared numbers:', squaredNums);

// 取得陣列中偶數的集合
const evenNums = _.filter(nums, num => num % 2 === 0);
console.log('Even numbers:', evenNums);

// 將陣列中的數字相加
const sumNums = _.sum(nums);
console.log('Sum of numbers:', sumNums);