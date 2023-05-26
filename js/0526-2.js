// window.open()
// window.close()
// window.print()
// window.moveBy()
// window.moveTo()
// window.resizeTo()
// window.focus()
// window.blur()

//===================================================================

// var child=window.open('','','width=300, height=200')
// var width=screen.width;
// var height=screen.height;
// child.moveTo(0,0)
// child.resizeTo(width,height)

// setInterval(function(){
//     child.resizeBy(-20,-20)
//     child.moveBy(10,10)

// },1000)


// screen 객체
var out='';
for(var key in screen){
    out+=`${key} : ${screen[key]} <br>`
}
document.write(out)
document.write('<hr>')

// location 객체
var out='';
for(var key in location){
    out+=`${key} : ${location[key]} <br>`
}
document.write(out)
document.write('<hr>')

// navigator 객체
var out='';
for(var key in navigator){
    out+=`${key} : ${navigator[key]} <br>`
}
document.write(out)
document.write('<hr>')

var navi=navigator.userAgent;
console.log(navi)

// 브라우져 검사하기
var mobile=['iphone','android','nokia','window','opera'];
var navi=navigator.userAgent.toLowerCase();

// for(var i=0; i<mobile.length; i++){
//     if(navi.indexOf(mobile[i])>=0){
//         location.href='http://m.naver.com'
//     }
//     else{
//         location.href='http://www.naver.com'
//     }
// }

// 정규표현식
// navi.match(/phone[i]/)
// navi.match(new RegExp(phone[i]))
// ]
ment.querySelector('h2').style.background='blue'

// document.addEventListener('DOMContentLoaded',function(){
//     document.querySelector('h2').style.background='blue'  
// })

document.write(navi.appCodeName + "<br>")
document.write(navi.appName + "<br>")
document.write(navi.appVersion + "<br>")
document.write(navi.language + "<br>")
document.write(navi.product + "<br>")
document.write(navi.platform + "<br>")