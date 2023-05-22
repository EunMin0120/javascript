// 객체선언
var 과일=['사과','수박'];
let fruit=['apple','watermelon'];
const day=['Mon','Tue'];
// 배열은 문자, 숫자, 객체, 함수등을 포함한다.
// 리터럴(literal) - 데이터 그대로 표시 ' '
// 배열은 요소의 길이가 있다. length
// literable 객체 - 반복가능한 객체
// 인덱스(i) 순번 -> 0번부터 시작 : 배열의 첫 요소

console.log(day.length);

for(var i=0; i<과일.length;i++){
    document.write(`${i} => ${과일[i]} <br>`);
}
document.write("<br>");
for(var i=0; i<=fruit.length;i++){
    document.write(i + " : " + fruit[i]+"<br>");
}
// 배열 API
// push() 배열 끝에 요소추가  (하나를 더 끼워넣는다는 느낌)
// 스택이라는 메모리
과일.push('귤');
console.log(과일);
과일.push('참외');
console.log(과일);
// pop() 배열 마지막 요소 제거
과일.pop();
console.log(과일);

// 자료구조에서 배열은 순서가 있는 리스트.
// 배열의 앞에 요소를 추가/제거
// unshift(), shift()
day.unshift('일');
console.log(day);
// 제거
day.shift();
console.log(day);
// for ~ in / for ~ OF
for(var i of 과일){
    document.write(`${i}`);
}
document.write("<br>");
for(var i in day){
    document.write(`${day[i]}`);
}
document.write("<br>");
fruit.forEach(function(ele,i){
    document.write(`${i} => ${ele} <br>`)
});

// 일반변수와 참조변수
var a=10;
var b=20;
// 일반변수 : 값을 가지고 있는 변수
// a와 b의 값을 바꾸고 싶을 때
a=b;
b=a;

document.write(`a : ${a}`); // a를 20으로 바꿈
document.write(`b : ${b}`); // a=20 b=20 상태에서 b는 a로 했기때문에 20,20이됨

var c;
c=a;
a=b;
b=c;
console.log(a,b,c);

// 참조변수 : 주소를 가지고 있는 변수
// 배열선언, 객체선언할때 사용하는 변수
// 과일, fruits, day -> 참조변수
var food=과일;
console.log(food);
console.log(food==과일);
console.log(food[1]==과일[1]);
food.push("딸기");
console.log(과일);
console.log(food);
document.write("<br>");

// 생성자 함수 ( = class 함수 )
document.write("<br>");
function Student(name, kor, math, eng, sci){
    this.name=name;
    this.kor=kor;
    this.math=math;
    this.eng=eng;
    this.sci=sci;

    this.getSum=function(){
        var sum=this.kor+this.math+this.eng+this.sci;
        return sum;
    }

    this.getAvg=function(){
        var Avg=this.getSum()/4;
        return Avg;
    }
}

var 학생1=new Student("원빈",50,30,20,40);
document.write("총점 : " + 학생1.getSum());
document.write("<br>");
var 학생2=new Student("장동건",50,30,20,40);
document.write("평균 : " + 학생2.getAvg());
document.write("<br>");

// 프로토타입 -> 공통영역에 메소드를 할당 -> 힙(heap)
// 메모리 절약
Student.prototype.getSum=function(){
        var sum=this.kor+this.math+this.eng+this.sci;
        return sum;
}
document.write("총점 : " + 학생1.getSum());

// 자바스크립트 정의
// 프로토타입을 기반으로 하는 함수형 언어
// 함수를 1급 객체로 취급한다.
// 생성자함수는 new 키워드를 사용한다.
// this -> new로 생성된 참조변수형 객체를 나타낸다.
// new를 사용하지 않으면 생성자함수의 this는 window를 카리킨다.

// immutable 과 mutable
// 일반변수와 참조변수
var obj1={
    name: "kim"
}
var obj2=obj1;
obj2.name="LEE";
console.log(obj2, obj1);

var a1=10;
var a2=a1;
a2=20;
console.log(a1,a2);

// 생성자 함수
function Car( model, speed, color ){
    var model=model; // 필드, 속성
    this.speed=speed;
    var color=color;

    this.getSpeed=function(){ // 메소드
        if(this.speed<0){
            alert("속도는 음수가 안됩니다.")
        }
        return this.speed;
    }
    this.setSpeed=function(speed){
        this.speed=speed;
    }
}

var 자동차1= new Car('그랜저',60,'블랙');
console.log(자동차1.getSpeed());
자동차1.speed=-100;
console.log(자동차1.speed);
// console.log(자동차1.getSpeed());

// 캡슐화, 은닉화, getter, setter
자동차1.setSpeed(-100);
// 잘못 사용될 수 있는 객체의 특정부분을 사용자가 사용할 수 없게 막는 기술

// 프로토타입 체인, 상속, 클로저, 콜백

var user={
    name:"마이클"
}
console.log(user);
var bmw={
    color:'red',
    wheel:4,
    drive(){
        console.log("bmw drive.. ");
    }
}
var audi={
    color:'blue',
    wheel:4,
    drive(){
        console.log("audi drive.. ");
    }
}

// 공통된 부분을 처리하자
var car={
    wheel:4,
    drive(name){
        document.write(name +"이 운전하다");
    }
}
var bmw={
    color:'red',
    }
bmw.__proto__=car; // 상속
console.log(bmw.color);
console.log(bmw.wheel);
document.write("<br>");
bmw.drive("원빈");
console.log(car.color);

var audi={
    color:'white'
}
audi.__proto__=bmw;
document.write("<br>");
audi.drive('장동건');
// 프로토타입 체인(prototype chain) 끝
// 아우디는 drive 메소드가 없으면 bmw에서 찾고
// 또 없으면 car에서 찾는다.

// 원의 면적을 구하는 객체를 생성하기
function Circle(radius){
    this.radius=radius;
    this.getArea=function(){
        var area=this.radius*this.radius*Math.PI;
        return area;
    }
}
var circle=new Circle(5);
document.write("<br>");
document.write("원의면적 : " + circle.getArea());

var circle=new Circle(-5);
document.write("<br>");
document.write("원의면적 : " + circle.getArea());

function Circle2(radius){
    this.radius=radius;
}

Circle2.prototype.getArea=function(){
    var area=this.radius*this.radius*Math.PI;
    return area;
}

var circle2=new Circle2(6);
document.write("<br>");
document.write("원의면적 : " + circle2.getArea());
document.write("<br>");
document.write("circle의 부모는?" + circle instanceof Circle2);
document.write("circle의 부모는?" + circle instanceof Circle);
document.write("<br>");
document.write("원의 반지름 : " + circle2.radius);
circle2.radius=10;
document.write("<br>");
document.write("원의면적 : " + circle2.getArea());

function Circle3(r){
    var radius=r; // 캡슐화, 은닉화
    this.getRadius=function(){
        return radius;
    }

    this.setRadius=function(r){
    if(r<0){
        throw "원의 반지름은 양수이어야 합니다"
    }
    else{
        radius=r;
    }
}
}
// 원의 지름을 구하는 프로토타입을 만들자
Circle3.prototype.getLength=function(){
    return 2*Math.PI*this.getRadius();
}
Circle3.radius=-100;
console.log(Circle3.radius);
var c3=new Circle3(1);
c3.radius=2;
console.log(c3.radius);
var c3=new Circle3(-1);
console.log(c3.getLength());
c3.setRadius(5);
console.log(c3.getLength());
console.log(c3.getRadius());
// c3.radius=20;
// console.log(c3.radius)
document.write("<br>");
document.write(c3 instanceof Circle3);
document.write("<br>");
document.write(c3 instanceof Circle);
document.write("<br>");
c3.setRadius(6);
document.write(c3.getRadius());

function Circle3(r){
    var radius=r;
    this.getRadius=function(){
        return radius;
    }

    this.setRadius=function(r){
    if(r<0){
        throw "원의 반지름은 양수이어야 합니다"
    }
    else{
        radius=r;
    }
}
// 오버라이딩 메소드 재정의

this.toString=function(){
    return "반지름은" +  this.getRadius() + "이고 원의 둘레는" + this.getLength() + "이다.";
}
this.print=function(){
    return `${this.getRadius()} : ${parseInt(this.getLength())}`;
}
this.output=function(){}
}
document.write("<br>");
var c3=new Circle3();
c3.setRadius(4);
document.write(c3.toString());
document.write("<br>");
document.write(c3.print());

// radius의 값을 가져올 때 getRadius로 하자
// this.radius -> radius, getRadius로 하자

function Grand(){}
Grand.prototype.재산="1억";

var Father = new Grand();
document.write(`<h2> ${Father.재산} </h1>`);

Father.재산="2억";
document.write(`<h2> ${Father.재산} </h1>`);

function Mama(){}
var 엄마=new Mama();


Mama.prototype.재산="오천원";
document.write(`<h2>엄마재산 : ${엄마.재산} </h1>`);

function Son(){}
Son.prototype=엄마;
var 아들=new Son();

document.write(`<h2>아들재산 : ${아들.재산} </h1>`);

function daughter(){}
// daughter.prototype.재산=
Grand;
var daughter= new Grand;


document.write(`<h2>딸 재산 : ${daughter.재산} </h1>`);
