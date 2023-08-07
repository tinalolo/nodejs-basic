function calculator(num1, operator, num2) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("輸入不是數字");
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
          throw new Error("除以 0 錯誤");
        }
        result = number1 / number2;
        break;
      case "^":
        if (number1 === 0 && number2 === 0) {
          throw new Error("計算 0 的次方錯誤");
        }
        result = Math.pow(number1, number2);
        break;
      default:
        throw new Error("運算子錯誤");
    }
  
    return result.toFixed(2);
  }
  
  module.exports = calculator;