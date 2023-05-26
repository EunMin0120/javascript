
// setInterval(function(){},1000)
// button.addEventListener('click',function(){

// })

// 콜백함수
// 함수를 매개변수로 받는 경우
function add(a,b,callback){
    var result=a+b;
    callback(result)
}
add(10,5,function(result){
    document.write("파라미터로 콜백함수 호출됨<br>")
    document.write("더하기 결과 : " + result)
    console.log("결과 : %d", result)
})
document.write('<hr>')
// 함수를 리턴하는 경우
function mul(a,b){
    var mul=a*b;
    var output=function(){
        return `${a}*${b}= ${mul}`
    }
    return output
}
var out=mul(5,6) // 외부함수 호출
document.write("<br>")
document.write(out)
var out=mul(5,6)() // 내부함수 호출
document.write("<br>")
document.write(out)
var out=mul(5,6)
document.write("<br>")
document.write(out()) // 내부함수 호출

// 클로저

// 사용하지 않은 예

function fncCount(){
    var count=0;
    count++;
    return count;
}
var counter=fncCount();
console.log(counter)
console.log(counter)
console.log(counter)

// 모듈화, 은닉화

// 사용한 예

function fncCount2(){
        var count=0;
        function addCount(){
        count++;
        return count;
    }
    return addCount
}
var counter=fncCount2();
console.log(counter())
console.log(counter())
console.log(counter())
// 외부에서 내부변수에 접근가능하다.
// 자바에서 getter, setter 활용

var color=['red','gold','silver','blue','brown'];
var body=document.querySelector('body')

// var i=0;
// function bgChange(){
//     body.style.background=color[i];
//     i++;
// }
var button=document.querySelector('button')

function bgChange(){
    var i=0;  // 은닉화, 캡슐화
    function inner(){
        body.style.background=color[i];
        console.log(i)
        i++;
        i = i % color.length
    }
    return inner
 }
 var bgC=bgChange();
//  button.onclick=function(){
//     bgC()
//  };