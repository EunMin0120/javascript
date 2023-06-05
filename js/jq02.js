// jquery each
// jquery each( array, callback )
// jquery each( object, callback )
// .each()
$('#menu>li').each(function(i,ele){
    $(this).text("리스트"+i+ele);
    $(this).css('border','1px solid');
});

// innerHTML -> html()
// textContent -> text()
// forEach -> each 비슷함

var LI=$('ul>li')
var color=['red','blue','lime','snow','pink'];
for(var i=0; i<LI.size(); i++){
    LI.eq(i).css('background', color[i]);
}
LI.each(function(i,el){
    $(this).css('border','3px solid ' + color[i]);
    $(this).css('background','color[i]');
});

var 학생=[
    {name: '이순신', age: 20},
    {name: '강감찬', age: 30},
    {name: '원빈', age: 40},
    {name: '현빈', age: 50}
];
$.each(학생, function(index, item){
    var out="";
    out+=`<p> ${index} - ${item.name} : ${item.age}</p>`
    $('body').append(out);
    $(this).addClass('color'+index);
});

$('p').each(function(index,item){
    $(this).addClass('color'+index)
})
// classList.add() -> addClass()
// classList.remove() -> removeClass()

// index()
// handler, callback
$('dl>dt').click(function(e){
    e.stopPropagation(); // 이벤트전달 제거
    // 절대번호
var index1=$(this).index();
console.log(index1);
var index2=$('dl>dt').index(this);
console.log(index2);
})


// 객체 확장. $.extend()
var hero={};
hero.name="아이언맨";
hero.gender="남성";
hero.skill="super suit";

console.log(hero);
$.each(hero,function(i,item){
    out="";
    out+="<p>"+item+"</p>";
    $('body').append(out);
})

$.extend(hero,{
    skill2 : "나노슈트"
})
$.each(hero,function(i,item){
    out="";
    out+="<p>"+item+"</p>";
    $('body').append(out);
});

// body.append()
// appendTo(body)
// $('h1') -> h1 태그를 선택
// createElement, createTextNode
// <h1> welcome </h1>
// appendChild
// 동적으로 태그를 추가
// $('<h1>welcome</h1>')
$('<h1>welcome</h1>').appendTo('body');
