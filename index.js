const process = require("node:process");

function calculator(num1, operator, num2) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    console.error("輸入不是數字");
    process.exit(1);
  }

  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        console.error("除以 0 錯誤");
        process.exit(1);
      }
      result = number1 / number2;
      break;
    case "^":
      if (number1 === 0 && number2 === 0) {
        console.error("計算 0 的次方錯誤");
        process.exit(1);
      }
      result = Math.pow(number1, number2);
      break;
    default:
      console.error("運算子錯誤");
      process.exit(1);
  }

  console.log(`結果：${result.toFixed(2)}`);
}

// 確保有三個參數
if (process.argv.length !== 5) {
  console.error("需要輸入三個參數 (node index.js \"<num1>\" \"<operator>\" \"<num2>\")");
  process.exit(1);
}

const [, , num1, operator, num2] = process.argv;

calculator(num1, operator, num2);