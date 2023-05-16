/* 함수(function)

  함수    함수명 매개변수
function sayHello(name){

}
*/
// 매개변수가 있고, 리턴이 없다.
function sayHello(msg){
console.log('Hello, ${msg}');
}

// 함수호출
var tel=sayHello("welcome");
console.log(tel); // undefined
//함수는 리턴문이 없으면 undefined

// 매개변수가 있고, 리턴이 있다.
function add(num1, num2){
    return num1+num2;
}
var result=add(10, 20);
console.log(result);

// 함수는 한 작업(일련의 작업)을 정의해놓은 코드의 집합체
// 함수나 긱체들이 모이면 모듈
// 모듈이 모이면 라이브러리 -> 프레임워크 -> 플랫폼

function showFunc(){
    console.log("함수가 실행된다");
    return; //함수가 종료, 그 함수가 값을 반환하는 용도
    console.log("함수가 여기서도 되나?")
}
showFunc();

// 자바스크립트에서는 함수를 1급 객체로 취급

// 전역변수와 지역변수
function localFunc(){
    var msg="welcome"; // 지역변수(로컬변수)
    console.log("함수내에서" + msg);
}
localFunc();
// console.log("함수밖에서" + msg); -> msg undefined
// 지역변수는 함수내에서만 사용할 수 있다.

var msg="hi everyone"; //전역변수
function localFunc(){
    var msg="welcome"; // 지역변수(로컬변수)
    console.log("함수내에서" + msg);
}
localFunc();
console.log("바깥쪽에서" + msg);

//함수 바깥에선느 함수내부의 지역변수에 접근할 수 없다.
var msg="welcome";

function welcome(name){
    var name=name || "Friend";
    msg += ` to my {$name}`;
    console.log(msg);
}
welcome();
welcome("홍길동");
//------------------------------------
var msg="welcome";

function welcome(name){
    var msg = "welcome";
    if(name){
        msg += name;
    }

    console.log(msg);
}
welcome("원빈");
welcome();

/*
// 함수선언문과 함수표현식
// 함수선언문과
function sayHello(){
    console.log('Hello');
}
// 함수표현식
let sayHello = function(){
    console.log('Hello');
}
// 둘 사이의 차이점은 호출타이밍에 있다.
*/

myFuc();
function myFuc(){
    document.write("<h1> Hi Hello </h1>")
}
var myVar="대한민국";
document.write(myVar);
myFuc();

// 자바스크립트는 위에서 아래로 순차적으로 실행되는
// 인터프리터 언어라고 한다.
// 위에 오타가 있으면 하나도 실행안됨
// 일반함수는 선언과 동시에 호이스팅된다. (문서상단으로 이동)
var myFunc1=function(){
    console.log("나는 익명함수입니다.")
}
myFunc1();
// 함수선언하면 초기 모든 함수들을 콜스택영역이라는 곳에 저장

// 재귀함수
// Stack Overflow발생
// 자기가 자기 호출하면 stack overflow

// function overflow(){
//     console.log("내가 날 호출한다.");
//     overflow();
// }
// overflow();

//화살표함수
//() => {}
function showError(){
    console.log("error1....")
}
showError();

var showError=()=>{
    console.log("error2....")
}
showError();

var showName=function(name){
    var msg=`Hello, ${name}`
    console.log(msg);
}
showName('임꺽정');

var showName=(name)=>{
    var msg=`Hello, ${name}`
    console.log(msg);
}
showName('돌쇠');

var add=function(num1, num2){
    const result=num1+num2;
    return result;
}
console.log(add(5,3));

var add=(num1,num2)=>{
    return num1+num2
}
console.log(add(8,6));

var add=(num1,num2)=>num1+num2;
console.log(add(4,5));

var sayHello=name=>name
console.log(sayHello('달건'));