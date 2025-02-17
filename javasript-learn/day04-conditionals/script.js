/* 
EX01: Viết một chương trình kiểm tra số là chẵn hay lẻ
----------
*/
function checkEven(number) {
  let isNumber = isNaN(number);
  if (!isNumber) {
    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  } else {
    console.log("Invalid number, please try again");
  }
}

/*
EX02: Viết một chương trình kiểm tra số là dương hay âm
----------
*/
function checkPositive(number) {
  let isNumber = isNaN(number);
  if (!isNumber) {
    if (number > 0) {
      console.log(`${number} is positive`);
    } else if (number < 0) {
      console.log(`${number} is negative`);
    }
  } else {
    console.log("Invalid number, please try again");
  }
}

/*
EX03: Viết chương trình kiểm tra đó là năm nhuận 
Note: Năm nhuận là năm chia hết cho 4, nhưng nếu chia hết cho 100 thì phải chia hết cho 400. 
----------
*/
function checkLeapYear(year) {
  let isNumber = isNaN(year);
  let isInteger = Number.isInteger(year);

  if (!isNumber && isInteger) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    console.log("Invalid number, please try again");
  }
}

/*
EX04: Viết chương trình xếp loại hạnh kiểm theo các tiêu chí sau: 
- Điểm >= 8.5 => Giỏi
- Điểm 7.0 - 8.4 => Khá 
- Điểm 5.5 - 6.9 => Trung Bình
- Điểm < 5.5 => Yếu
---------- 
*/
function rankScore(score) {
  let isNumber = isNaN(score);
  if (!isNumber) {
    if (score >= 8.5) {
      console.log(`${score} is rank excellent`);
    } else if (score >= 7.0 && score <= 8.4) {
      console.log(`${score} is rank good`);
    } else if (score >= 5.5 && score <= 6.9) {
      console.log(`${score} is rank medium`);
    } else if (score < 5.5) {
      console.log(`${score} is rank low`);
    }
  } else {
    console.log("Invalid score, please try agian");
  }
}

/*
EX05: Viết chương trình tính tiền điện theo quy tắc sau: 
- Số điện từ 0 - 50 kWh: 1.678 VNĐ/kWh
- Số điện từ 51 - 100 kWh: 1.734 VNĐ/kWh
- Số điện từ 101 - 200 kWh: 2.014 VNĐ/kWh
- Số điện từ 201 - 300 kWh: 2.536 VNĐ/kWh
- Số điện trên 300 kWh: 2.927 VNĐ/kWh
---------- 
*/
function caculateElectricBill(kWh) {
  let isNumber = isNaN(kWh);
  let price;

  if (!isNumber) {
    switch (true) {
      case kWh <= 50:
        price = kWh * 1678;
        break;

      case kWh >= 51 && kWh <= 100:
        price = 50 * 1678 + (kWh - 50) * 1734;
        break;

      case kWh >= 101 && kWh <= 200:
        price = 50 * 1678 + 50 * 1734 + (kWh - 100) * 2014;
        break;

      case kWh >= 201 && kWh <= 300:
        price = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kWh - 200) * 2536;
        break;

      default:
        price =
          50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kWh - 300) * 2927;
        break;
    }
    console.log(`Total electricy bill this moth: ${price}`);
  } else {
    console.log("Invalid kWh, please try again");
  }
}

/*
EX06: Viết chương trình nhập hai số và một phép toán (+, -, *, /) và thực hiện phép toán đó.
----------  
*/
function cacualteExpression(num1, num2, operator) {
  let isNumber = isNaN(num1, num2);
  let result;

  if (!isNumber) {
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "x") {
      result = num1 * num2;
    } else if (operator === "/") {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Can not divide to 0");
      }
    }
  } else {
    console.log("Invalid Operator");
  }

  if (result !== undefined) {
    console.log(`Kết quả: ${result}`);
  }
}

/*
EX07: Viết chương trình kiểm tra một số có phải số nguyên tố không.
---------- 
*/
function checkPrime(number) {
  let isNumber = isNaN(number);
  let isPrime = number > 1;
  if (!isNumber) {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime ? `${number} is prime` : `${number} is not prime`);
  } else {
    console.log("Invalid number, please try again");
  }
}

/*
EX08: Viết chương trình nhập 3 cạnh của một tam giác, kiểm tra xem có tạo thành tam giác không. 
---------- 
*/
function isTriangle(a, b, c) {
  let isNumber = isNaN(a, b, c);
  console.log(isNumber);

  if (!isNumber) {
    if (a + b > c && a + c > b && b + c > a) {
      console.log("Ba cạnh tạo thành một tam giác");
    } else {
      console.log("Ba cạnh không tạo thành một tam giác");
    }
  } else {
    console.log("Invalid number, please try again");
  }
}
