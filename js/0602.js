// Array 객체
// isArray()
// indexOf()
// lastIndexOf()
var arr=[1,2,3,4,5];
console.log(Array.isArray(arr));
console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(4));
// forEach() - for in 반복문과 유사
// map -> 배열에 규칙을 적용해서 새로운 배열을 생성
var out=arr.map((a)=>{
return a*a;
})
console.log(out);
// 자바 람다식 = 화살표 함수
// var out= arr.map(a=>a*a);
var sum=0;
var out='';
arr.forEach((a,i)=>{
    sum += a;
    out+= `${i+1}. " ${a} -> ${sum} \n`;
});
console.log(out); // 등차수열 구현
// 게시판 페이지 번호
// filter() 조건에 만족하는 요소만 추출
// every() 조건에 모두 만족하는지
// some() 조건에 적어도 하나를 만족하는지
 arr2= arr.filter((a)=>{
    return a !=3
 })
 console.log(arr2);
 // 특정 리스트 항목을 삭제할 때 사용한다.
 
 var result=arr.some(num=>num>3);
 console.log(result);
 var result=arr.every(num=>num>3);
 console.log(result);

// 확인메소드 - isArray()
// 탐색메소드 - indexOf(), lastIndexOf()
// 반복메소드 - forEach(), map()
// 조건메소드 - filter(), every, some()
// 연산메소드 - reduce(), reduceRight()
// reduce() - 하나가 될때까지 왼쪽에서 두개씩 묶는 함수

arr.reduce((pre,cur,i,arr)=>{
    out+=`${i} => ${pre} + ${cur} = ${pre+cur} \n`;
    return pre+cur;
})
console.log(out);

//ES5 JSON 객체
// JSON.stringify() 객체를 JSON문자열로 변환
// JSON.parse() JSON문자열을 자바스크립트 객체로 변환

var 고양이={
    이름 : '나비',
    나이 : '2살',
}
console.log(고양이);
console.log(JSON.stringify(고양이));
console.log(JSON.parse(JSON.stringify(고양이)));

// 객체를 배열로 변환하기
// 고전적인 방법
var str={
    name1 : '일지매',
    name2 : '이지매',
    name3 : '삼지매'
}
var strArr=[];
for(var key in arr){ // key값이 존재하는지 체크
    strArr.push(key);
}
console.log(strArr);

var strArr=[];
for(var key in str){
    if(str.hasOwnProperty(key)){
    strArr.push(str[key]); // value를 배열로
}
}
console.log(strArr);

// ES5 => Object.keys()
var 이름=Object.keys(str);
console.log(Object.keys(str));
var 값=Object.values(str);
console.log(Object.keys(값));

var 배열=Object.keys(str).map(item=>str[item]);
console.log(배열);

// Object.entries() Object.fromEntries()
var entry=Object.entries(str); // 배열로
console.log(entry)
var entry=Object.fromEntries(entry); // 객체로
console.log(entry)

var JSON1=JSON.stringify(entry); // json 문자열로
console.log(JSON1);
var JSON2=JSON.parse(JSON1); // 객체로
console.log(JSON2);

// ES5 String 객체
// trim() 공백제거

// Object 객체들
// Object.defineProperty()   속성추가
// Object.defineProperties()  속성들추가
// Object.create()         객체생성
// Object.preventExtensions() 속성추가 제한
// Object.isExtensible()     속성추가 가능여부
// Object.searl()           속성삭제 제한
// Object.isSealed          속성삭제 가능여부
// Object.freeze()          속성삭제제한
// Object.isFrozen()         속성삭제 가능여부
// Object.keys()           속성값을 배열로
// Object.getOwnPropertyNames() 모든속성을 배열로
// Object.getOwnPropertyDescriptor() 속성의 옵션 객체로

// 객체속성옵션
// value  값
// writable  변경가능여부
// get
// set
// configurable  설정변경여부
// enumearble  반복문 검사 여부

var heroes={}
Object.defineProperty(heroes, "name", {
    value:'수퍼맨',
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(heroes);
heroes.name='아이언맨'
console.log(heroes);

for(var i in heroes){
    console.log(heroes[i]);
}

var value="아이언맨"
Object.defineProperty(heroes, "name", {
    get:function() {
        return value;
    },
    set:function(newValue){
        value=newValue
    }
})
console.log(heroes.name);
value="스파이더맨"
console.log(heroes.name);
// 자동으로 게터와 세터를 실행한다. 캡슐화, 은닉화

Object.defineProperties(heroes,{
    name:{ value: '토르'},
    region: { value : '아스가르드'}
});
console.log(heroes);

var hero2=Object.create({},{
    name: { value:'배트맨'},
    skill: { value:'마스크'}
})
console.log(hero2)
hero2.age='40'
console.log(hero2)
Object.preventExtensions(hero2);
console.log(Object.isExtensible(hero2));


// Object.defineProperty(hero2,"skill2",{
//     value :"fly"
// })
// seal(), freeze()
var hero3={}
var hero3 = Object.assign(hero3,hero2);
console.log(hero3)
Object.defineProperty(hero3,"skill2",{
        value :"fly"
    })
console.log(hero3);
console.log(Object.isSealed(hero2));
delete hero2.name;
console.log(hero3)
Object.seal(hero3);
delete hero3.age;
console.log(hero3)

// Object.keys() Object.values()
// Object.getOwnPropertyNames() 속성을 배열로
// Object.getOwnPropertyDescriptor 옵션 값 추출

console.log(Object.getOwnPropertyNames(hero2));
console.log(Object.getOwnPropertyDescriptor(hero2,'name'));
