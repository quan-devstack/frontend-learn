// declare a string
var myString = "Hello World";
console.log(String.prototype);

// length: độ dài của biến
myString.length;

// charAt(index): trả về kỹ tự theo chỉ số Index
myString.charAt(1);

// charCodeAt(index): trả về mã ASCII theo chỉ số Index
myString.charCodeAt(1);

// concat("A", "B"): nối chuỗi
myString.concat("A", "B");

// indexOf(keyword): tìm vị trị đầu tiên của keyword
myString.indexOf("e");

// lastIndexOf(keyword): tìm vị trí cuối cùng của keyword
myString.lastIndexOf("v");

// include(keyword): tìm chuỗi trả về true/false
myString.includes("Hello");

// slice(start, end): cắt chuỗi từ điểm start -> end
myString.slice(0, 3);

// replace(search, with): tìm và thay thế
myString.replace("Hello", "ByeBye");

// split(char): tách chuỗi thành mảng
myString.split("");

// toLowerCase(): chuyển thành chữ thường
myString.toLowerCase();

// toUpperCase(): chuyển thành chữ hoa
myString.toUpperCase();

// ----------

/*
Excercise 01: Đảo ngịch chuỗi
Require: 
- Input: "ABCDEF" 
- Output: "FEDCBA"
*/
function reverseString(str) {
  let reverseArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr += str[i];
  }
  return reverseArr;
}
console.log("EX01 Output:", reverseString("hello"));

// ----------

/*
Excercise 02: Biến chuỗi sau về dạng chuẩn (chữ cái đầu viết hoa) 
Require: 
- Input: "do khac Quan" 
- Output: "Do Khac Quan"
*/
function getUpperCase(str) {
  if (typeof str !== "string") {
    console.log("This is not a string, please try again");
    return false;
  }
  // turn all characrer to lowercase
  str = str.toLowerCase();
  let strToArray = str.split(" ");
  let newStr = "";
  for (let i = 0; i < strToArray.length; i++) {
    let firstLetter = strToArray[i].slice(0, 1);
    if (typeof firstLetter === "string") {
      strToArray[i] = firstLetter.toUpperCase() + strToArray[i].slice(1);
      newStr += strToArray[i] + " ";
    } else {
      console.log("First letter is not a string, please try again");
      return false;
    }
  }
  return newStr.trim();
}
console.log("EX02 Output:", getUpperCase("do khac quan"));
