// div.addEventListener('click',function(){
//     console.log('div Click');
// });
// span.addEventListener('click',function(){
//     console.log('span Click');
// });
// btn.addEventListener('click',function(){
//     console.log('btn Click');
// });

// 이벤트 위임구현
div.addEventListener('click',function(e){
    var id=e.target.id;
    console.log(e.target);
    console.log(e.currentTarget);
    if(id=='div'){
        console.log('div Click');
    }
    else if(id=='span'){
        console.log('span Click');
    }
    else if(id=='btn'){
        console.log('btn Click');
    }
    var tagName=e.target.tagName;
    if(tagName=='div'){
        console.log('div Click');
    }
    else if(tagName=='span'){
        console.log('span Click');
    }
    else if(tagName=='btn'){
        console.log('btn Click');
    }
});

document.addEventListener('click',function (e) {
    console.log(e.srcElement);
    var target=e.target.id || e.srcElement
    if(e.target.tagName =='div'){
        console.log('div Click');
    }
    else if(e.target.tagName =='span'){
        console.log('span Click');
    }
    else if(e.target.tagName =='btn'){
        console.log('btn Click');
    }
});

// 키보드관련 이벤트
// event.keyCode
// String.fromCharCode()

window.onkeydown=function (e) {
    // console.log(e.keyCode);
    console.log(String.fromCharCode(e.keyCode));
    if(e.keyCode==65){
        document.querySelector('body').style.background='plum'
    }
    if(e.keyCode==66){
        document.querySelector('body').style.background='skyblue'
    }
    if(e.keyCode==67){
        document.querySelector('body').style.background='orange'
    }
    if(e.keyCode==68){
        document.querySelector('body').style.background='pink'
    }
}

var count=0;
    setInterval(function () {
        count = (count % 7)+1;       
        img.src = "/imgs/10장/"+count+".png";
        img.width=200;
        img.height=200;
},1000);

var outer=document.querySelector('.outer');
var inner=document.querySelector('.inner');

// outer.onmouseover=function() {
//     document.body.append("<h1>mouseover</h1>");
// }
// outer.onmouseout=function() {
//     document.body.append("<h1>mouseout</h1>");
// }
outer.onmouseenter=function() {
    document.body.append("<h1>mouseenter</h1>");
}
outer.onmouseleave=function() {
    document.body.append("<h1>mouseleave</h1>");
}

// over 는 이벤트 버블링이 적용된다.