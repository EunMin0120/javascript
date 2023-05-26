// 수학객체, 숫자객체
// Number, Math
var num = 15;
num.toString();
console.log(num);
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(16));
console.log(Math.PI);
// Math.ceil() 올림
console.log(Math.ceil(Math.PI));
// Math.round() 반올림
console.log(Math.round(Math.PI));
// toFixed() 소수점 자릿수
var num2 = 30.12345;
console.log(num2.toFixed(2));  // 30.12
console.log(num2.toFixed(0));  // 30
// isNaN() 
var a = "100";
var b = 100;
console.log(isNaN(a)); // false 
console.log(isNaN(b));    // false 
console.log(isNaN("wel")); // true
console.log(typeof a); // string
console.log(typeof b); // number
// Number() , parseInt() 정수
console.log(typeof Number(a));
var margin = "10px";
var margin1 = Number(margin);  // "300"
var margin2 = parseInt(margin);
console.log(margin1);  // NaN
console.log(margin2);  // 10

parseFloat() // 부동소수점반환
var padding="18.5%"
var padding = "18.5%"
console.log(parseInt(padding));   //18
console.log(parseFloat(padding)); // 18.5

// Math.random() 0~1사이의 무작위 숫자
console.log(Math.random()) 
console.log(Math.random()*45) 
console.log(Math.floor(Math.random()*45)+1) 
console.log(Math.random())
console.log(Math.random() * 45)
console.log(Math.floor(Math.random() * 45) + 1)
// floor 버림  ceil 올림

// 로또 번호 생성기
var 로또=[];
for(var i=1;i<=45;i++){
var 로또 = [];
for (var i = 1; i <= 45; i++) {
 로또.push(i);
}
document.write(로또);
document.write("<br>");
document.write("이번주 당첨번호 <br>");

}
