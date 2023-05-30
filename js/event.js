// window.onload=function(){ }
// load : 이벤트 이름, 이벤트 타입
// onload : 이벤트속성
// function : 이벤트리스너, 이벤트핸들러

// 이벤트 관련 속성
// click, mouseover, mouseenter, focus


// 이벤트 모델
// DOM Level 0
// 인라인 이벤트 모델, 기본 이벤트 모델( 고전 이벤트 )
// 한 객체에 두 개 이상의 이벤트를 적용할 수 없다.

// DOM Level 2
// 표준 이벤트 모델, 익스플로러 이벤트 모델
// addEventListener( type, listener, false 제이쿼리에서는 On으로 사용 )
// attachEvent
// 여러개의 이벤트를 적용할 수 있다.


// 익스플로러면 attachEvent를 사용하고
// 그 외에는 addEventListener를 사용해라
// Java이벤트 크로스브라우징을 위한 코드구현을 하자

// 이벤트 제거
header.onclick=function(e){
    console.log(this);
    console.log(window.event); // e, window.event( 고전 )
    var event=e || window.event;

    // header.onclick = null; // 이벤트 제거
    // for(var key in e){
    //     box.innerHTML +=`<p> ${key} : ${e[key]} </p>`
    // }
    console.log(e.target); // 자식
    console.log(e.currentTarget); // 부모
}
a.onclick=function() {
    ca.innerHTML = parseInt(ca.innerHTML)+1+'초'
}
b.onclick=function() {
    cb.innerHTML = parseInt(cb.innerHTML)+1
    a.onclick()
}
var stop=setInterval(a.onclick,1000)
c.onclick=function(){
    clearInterval(stop)
}
d.onclick=function(){
    stop=setInterval(a.onclick,1000)
}
// 기본 이벤트 제거
// 이벤트 전달 제거
// preventDefault();
// stopPropagation();

// 기본 이벤트 -> a태그 클릭
// form -> submit

daum.onclick=function(e){
    this.style.background='pink';
    // event.preventDefault();
    return false;
}
function naver(){
    naver2.style.background='red';
    return false;
}
// 한글 입력시에만 전송하기
form.onsubmit=function(){
    var val=name.value;
    if(val.replace(/[가-힝]/g,"").length==0){
    }
    else{
        alert('한글로 입력하세요');
        e.preventDefault();
    }
}