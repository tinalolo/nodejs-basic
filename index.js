const process = require("node:process");
const calculator = require("./calculator");

// 確保有三個參數
if (process.argv.length !== 5) {
  console.error("需要輸入三個參數 (node index.js \"<num1>\" \"<operator>\" \"<num2>\")");
  process.exit(1);
}

const [, , num1, operator, num2] = process.argv;

try {
  const result = calculator(num1, operator, num2);
  console.log(`結果：${result}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}