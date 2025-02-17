/* 
EX01: Check the number is even or odd
----------
let num = parseInt(prompt("Enter a number: "));
if (num % 2 === 0) {
  console.log("EX01 Result: Number is even");
} else {
  console.log("EX01 Result: Number is odd");
}
*/

/*
EX02: Check the number is positive or negative or zero
----------
let num = parseFloat(prompt("Enter a number: "));
if (num > 0) {
  console.log("EX02 Result: Number is positive");
} else if (num < 0) {
  console.log("Ex02 Result: Number is negative");
} else {
  console.log("It is a zero");
}
*/

/*
EX03: Kiểm tra năm nhuận
Note: Năm nhuận là năm chia hết cho 4, nhưng nếu chia hết cho 100 thì phải chia hết cho 400. 
---------- 
let year = parseInt(prompt("Enter year: "));
if (!year || isNaN(year)) {
  console.log("Valid data, please try again");
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} là năm nhuận`);
  } else {
    console.log(`${year} không phải năm nhuận`);
  }
}
*/

/*
EX04: Academic Ranking
Yêu cầu: Viết chương trình nhập vào điểm trung bình của một học sinh và in ra xếp loại
*/
let score = parseFloat(prompt("Enter score: "));
if (isNaN(score) || !score) {
  console.log("Invalid Score");
} else {
  if (score >= 8.5) {
    console.log("Ranking: Outstanding");
  } else if (score >= 7.0) {
    console.log("Ranking: Good");
  } else if (score >= 5.5) {
    console.log("Xếp loại: Medium");
  } else {
    console.log("Xếp loại: Low");
  }
}
