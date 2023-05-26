// Object.assign()
// Object.keys()
// Object.values()
// Object.entries()
// Object.fromEntries()

// 객체복제 (얕은복사, 깊은복사)

// 얕은복사 ------------------------ ( 메모리 주소 값 복사 )
var user={
    name:"원빈",
    age:40
}
var user2=user; // 참조변수(가리키고 있기 때문에 개체속성을 바꾸면 같이 바뀐다)
console.log(user)
console.log(user2)

user2.name="장동건";
console.log(user)
console.log(user2)

// 깊은복사 ------------------------ ( 새로운 메모리 공간확보 )
console.log(user==user2);

var user3=Object.assign({},user)
console.log(user3)
console.log(user==user3) // false
user3.name="이정재"
console.log(user)
console.log(user3)

var user4=Object.assign({gender:"남성"},user)
console.log(user4)

var user5={name:"강호동"}
var info1={나이:30}
var info2={성별:'남성'}
var user6=Object.assign(user5,info1,info2)
console.log(user6)

// Object.keys() 키 배열 반환
// key value 쌍 형태
console.log(Object.keys(user))
// Object.values() 값 배열 반환
console.log(Object.values(user6))
// Object.entries()
console.log(Object.entries(user6))
console.log(user6)
var user7=Object.entries(user6)
console.log(user7)
console.log(user7[0])
console.log(user7[0][1])

// 배열을 객체로
// Object.fromEntries()
var user8=Object.fromEntries(user7)
console.log(user8)

function makeObj(key,val){
    return{
        [key]:val  // computed property
    }
}


var obj=makeObj('나이',33)
console.log(obj)
var obj2=makeObj('성별','여성')
console.log(obj2)
var obj3=Object.assign({},obj,obj2)
console.log(obj3)

// 심볼
// 다른 사람이 만들어 놓는 객체에 영향을 주지 않고
// 속성을 추가할 수 있다.
// 특정 객체에 원본데이터를 건드리지 않고
// 속성을 추가한다.
// 유일한 프로퍼티를 추가할 때 사용한다.

const id=Symbol("id입니다")

const user10={
    name:'원빈',
    age:30,
    [id]:'myid'
}

console.log(user10)
console.log(id.description)
console.log(user10[id])

// 배열과 api
// sort() - 배열을 재정렬, 원본이 변경
// reduce()
var arr=[1,2,3,4,5,6,7,8]

// 배열의 모든 수 합치기
// for, for of, for in, forEach, reduce
console.time('start')
var result=0;
for(var i=0; i<arr.length; i++){
    result += arr[i];
}
console.log(result)
console.timeEnd('start')

// for of
console.time('start')
var result2=0;
for(var i of arr){
    result2 += i;
}
console.log(result2)
console.timeEnd('start')

// for in
console.time('start')
var result3=0;
for(var i in arr){
    result3 += arr[i];
}
console.log(result3)
console.timeEnd('start')

// forEach
console.time('start')
var result4=0;
arr.forEach(i => {
    result4 += i
});
console.log(result4)
console.timeEnd('start')


// reduce
console.time('start')
var result5=arr.reduce((prev,cur)=>{
    return prev+cur
},0)
console.log(result5)
console.timeEnd('start')

console.time('start')
var result6=arr.reduce((prev,cur)=> prev+cur)
console.log(result6)
console.timeEnd('start')

// reduce 예문
var userList=[
    {name:"won1", age:10},
    {name:"won22", age:20},
    {name:"won333", age:30},
    {name:"won4444", age:40},
    {name:"won55555", age:50},
    {name:"won666666", age:60}
]
// age>30 이상인 이름을 가져와라
var result7=userList.reduce((prev,cur)=>{
    if(cur.age>=30){
        prev.push(cur.name)
    }
    return prev
},[])
console.log(result7)

// 모든 나이를 더해라

var result8=userList.reduce((prev,cur)=>{
 return prev+cur.age
},0)
console.log(result8)

// map, filter, reduce, forEach
// 이름의 길이가 4이상인 값을 출력
var result=userList.reduce((prev,cur)=>{
    if(cur.name.length>=8){
        prev.push(cur.name)
    }
    return prev
},[]) // push를 쓸때엔 배열로 초기화
console.log(result)

// filter 메소드를 이용하여
// age가 40이상 출력
// name이 5글자이상을 출력
var result=result.filter((a) => {
    return a.length>=5
})
console.log(result)


var arr=[10,20,30,40,50,60]
var result=arr.filter((a) => {
    return a>=40
})
console.log(result)

// reduce 함수로 age만 배열로 만들어보자
var result=userList.reduce((prev,cur)=>{
    prev.push(cur.age)
    return prev
},[])
console.log(result)

var result=result.filter((a)=>{
    return a!=30
})
console.log(result)

// 구조분해할당
// destructuring assignment
// 배열이나 객체의 속성을 분해해서 그 값을
// 변수에 담을 수 있게 하는 표현식 expression
// 문장은 statement
// 배열 구조분해
var [x,y]=[1,2]
console.log(x,y)
var 배우들=['원빈','장동건','이정재']
var [배우1,배우2,배우3]=배우들
console.log(배우1)
console.log(배우2)
console.log(배우3)

var 가수="소녀시대-원더걸스-BTS"
var [가수1,가수2,가수3]=가수.split('-')
console.log(가수1)
console.log(가수2)
console.log(가수3)

// 변수 a=100, b=200
// a과 b의 값을 바꿔치기 해보자.
var a=100
var b=200
var c=b
console.log(a,b)
b=a
a=c
console.log(a,b)

var x=100;
var y=200;
console.log(x,y);
[x,y]=[y,x]
console.log(x,y);

// 객체구조분해할당
var user={name:'welcome',age:40}
var {name,age}=user
var name=user.name
var age=user.age
console.log(name)
console.log(age)

var {name:userName, age:userAge }=user
console.log(userName)
console.log(userAge)
var userName=user.name

var{name:name, age:age} = user
var {name, age, gender='남성'} = user
// 할당객체의 키 이름이 같으면 하나로 줄일 수 있다.
console.log(gender)

// 나머지 매개변수, 전개구문
// rest parameters
// ... 점 세개 찍어준다.

function showName(name){
    document.write(name)
    document.write("<br>")
    console.log(name)
}

showName('원빈')
showName('원빈','장동건')
showName()
document.write("<hr>")

function showName(name){
    document.write(arguments.length)
    document.write("<br>")
    document.write(arguments[0])
    document.write("<br>")
    document.write(arguments[1])
    document.write("<br>")
}

showName('원빈')
showName('원빈','장동건')
// 자바스크립트에서 함수에 넘겨주는 인수의 제약이 없다.
// 인수를 넣는 방법이 두가지
// 1. arguments 객체로 접근하기
// 2. 나머지 매개변수를 사용하기
// 단, 화살표함수에는 argument가 없다.

document.write("<hr>")

function showName(...name){
    document.write(name + "<br>")
    console.log(name)
}

// reset parameter
showName('원빈')
showName('원빈','장동건')
showName()
// 아무것도 전달하지 않으면 빈배열이 나타난다.

// 기본 파라미터
function showName2(...name){
    var name=name
     || "강호동"
    document.write(name + "<br>")
    console.log(name)
}
showName2()
showName2('원빈')

// 기본파라미터 default parameter
function showName2(name="강호동"){
    document.write(name + "<br>")
    console.log(name)
}
showName2()
showName2('원빈')
// ES6 버전

// 나머지 매개변수 예제
add(1,2,3)
add(1,2,3,4,5,6,7)
function add(...num){
    let result=0;
    num.forEach((num)=>(result += num))
    document.write(result)
}
document.write("<br>")
add(1,2,3,4,5,6,7)

function add2(...num){
    let result=num.reduce((prev,cur) => (prev += cur))
    document.write(result)
}
document.write("<br>")
add2(1,2,3,4,5,6,7,8,9)
// reduce 줄이다

// 나머지 매개변수 - 객체
function User(name, age, ...skills){
    this.name=name
    this.age=age
    this.skills=skills
    this.toString=function(){
        return this.name+" "+ this.age + " " + this.skills+"<br>"
    }
}
var user1=new User('원빈',30,'html')
var user2=new User('현빈',30,'html','css')
var user3=new User('장동건',30,'html','css','js')

document.write(user1.toString())
console.log(user1.toString())
console.log(user1)
console.log(user2)
console.log(user3)
document.write(user2.toString())
document.write(user3.toString())

// 전개구문 (spread syntax) : 배열
var arr1=[1,2,3]
var arr2=[4,6,7]
var arr3=[...arr1, ...arr2]

// arr.push(), arr.splice(), arr.concat()
//   넣고          빼고           병합
document.write(arr3)

// 전개구문 : 객체
var user={name:"mike"}
var mike={...user, age:20}
console.log(mike)

// 전개구문 : 복제
var arr4=[...arr]
console.log(arr4)
var user4={...user}
var user5={...mike}
console.log(user4)
console.log(user5)

// 상품리스트, 할일목록, 리스트추가
// 기존데이터 -> push()
var arr5=[1,2,3]
var arr6=[4,5,6]
arr6.forEach((num)=>{
    arr5.unshift(num)
})
console.log(arr5)

var arr5=[1,2,3]
var arr6=[4,5,6]
arr6.reverse().forEach((num)=>{
    arr5.unshift(num)
})
console.log(arr5)

var 사용자={name:'원빈'}
var 정보={age:10}
var it=["자바스크립트","java"]
var 언어=['영어','중국어']

var user={
    ...사용자, ...정보,
    기술:[...it, ...언어]
}
console.log(user)

var user1=Object.assign({},사용자, 정보,{기술:[]})
console.log(user1)
it.forEach((a)=>{
    user1.기술.push(a)
})
언어.forEach((a)=>{
    user1.기술.push(a)
})

console.log(user1)