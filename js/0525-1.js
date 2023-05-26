var lang=document.getElementById('lang')
var span=document.querySelector('span')

lang.onchange=function(){
    span.innerHTML=`<h3>${lang.selectedIndex+1} 번째에
    ${lang.value}를 선택</h3>`
}
lang.onblur=function(){
    lang.options[2].value="HTML5"
    lang.options[2].innerHTML="HTML5"
}
var last=lang.options[2].value;
lang.options[2].selected=true
span.innerHTML="<h2>"+last+"부터 시작한다.</h2>"

var button=document.querySelector('button');
button.onclick=function(){
    if(span){
    child.removeChild(span);
    console.log(span)
}
else{
    return;
}
}
///////////////
var i=0;
var stop=setInterval(function(){
    document.body.innerHTML += "<h1>초</h1>"
    i++;
    if(i==5){
    clearInterval(stop)
    document.body.innerHTML +="인터벌중지"
    }
},1000)
// setInterval(callback,time)
// clearInterval(ID)

setInterval(function(){
var time=document.getElementById('clock')
// clock.innerHTML=new Date().toLocaleDateString();
clock.innerHTML=new Date().toLocaleTimeString();
},1000)