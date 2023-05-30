/* var form2=document.getElementById('form2');
form2.onsubmit=function(e){
    var val=name2.value;
    console.log(val);
    if(val==""){
        alert('한글로 입력하세요');
        e.preventDefault();
    }
    else if(val.replace(/[가-힝]/g,"").length==0){
        return true;
    }
    else{
        alert('한글로 입력하세요');
        e.preventDefault();
    }
}*/

// 이벤트 버블링 : 자식 -> 부모
// 이벤트 캡쳐링 : 부모 -> 자식

// eventPhase

// button.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },false)
// field.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },false)
// html.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },true)
// body.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },true)
// 1 캡쳐링 2 target 3 버블링

function handler(e){
    var phase=['캡쳐링','타겟','버블링'];
    console.log(e.target.nodeName,this.nodeName,phase[e.eventPhase-1])
}
button.addEventListener('click',handler,false);
field.addEventListener('click',handler,false);
body.addEventListener('click',function(){
    event.stopPropagation();
},false);
html.addEventListener('click',handler,false);
// event.stopPropagation(); : 이벤트 전달 방지
// e.target.nodeName -> e.target 최종자식 엘리먼트
// this.nodeName -> e.currentTarget 이벤트가 호출된 엘리먼트

a.onclick = function(e) {
    this.style.background= 'gold';
    e.stopPropagation();
}
p.onclick = function() {
    this.style.background= 'cyan';
}
div.onclick = function() {
    this.style.background= 'pink';
}