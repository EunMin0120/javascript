var test=document.getElementById('test')

try{
    console.log('welcome')
    // 무슨 에러인가?
}catch(err) {
    test.innerHTML = err.message
}
test.style.color='red';

//throw 사용자지정 오류를 만든다.
var numBox = document.getElementById('numBox')
var btn = document.getElementById('btn')
var errText = document.getElementById('errText')

var show=false
btn.addEventListener('click', function (){
    errText.innerHTML = 'welcome'
    var val = numBox.value
    console.log(val)
    try{
        if (val == '') { throw "err:404(비어있음)" }
        if (isNaN(val)) { throw "숫자가 아님" }
        if (val < 1) { throw "1보다 작음" }
        if (val > 10) { throw "10보다 큼" }
        show=false
    }
    catch(err){
        errText.innerHTML = '에러코드 : ' + err
        show=true
    }
    finally{
        if(show) numBox.value=""
    }
    errText.style.color='red'
})

var num=123.123456
try{
    console.log(num.toPrecision(100)) //RangeError : must be between 1 ~ 100
    console.log(num.toFixed(3))
    num=num+1 //num2를 더하면 ReferenceError : num2 is difined
    
    // eval("alert(Hello')") // SyntaxError : missing ) after argument list
    // num.toUpperCase() // num.toUpperCase is not a function
    console.log(decodeURI('http://www.daum.net/aaa%%%'))
    console.log(decodeURI('http://www.daum.net/$$$'))

}catch(err){
    errText2.innerHTML=err.name + err.message
}
// toPrecision  수의 길이를 제한
// toFixed 는 소수점의 길이를 제한
errText2.style.color='red'