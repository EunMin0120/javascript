// getElementByTagName()
// getElementById()
// var test=document.getElementById();
// var test=document.getElementsByTagName();
// var test=document.getElementsByClassName();
// s가 들어가는건 배열이다.

// var li=document.getElementsByTagName("li");
// console.log(li);
// li[0].style.backgroundColor='red';
// li[1].style.backgroundColor='blue';

// for(var i=0; i<li.length;i++){
// li[i].style.backgroundColor='gold';
// li[i].style.border='2px solid black';
// li[i].style.margin='5px';
// }
// for(var i of li){
//     i.style.padding="10px";
// }

// for(var i in li){
//     //console.log(i);
//     if(!isNaN(i)) // 키값이 숫자면
//    li[i].style.borderRadius="20px";
// }

// // Array.from(li).forEach((ele,i) => {
// //    ele[i].style.padding="10px"
// // });

// var menu=document.getElementsByClassName('menu')[0];
// console.log(menu);
// menu.style.border='3px solid red';

// var menu=document.getElementsByClassName('menu');
// console.log(menu);
// menu[0].style.border='5px double red';

// var lia=document.querySelector('li>a');
// console.log(lia);

// lia.style.fontS
// ize='25px';

// var lia=document.querySelectorAll('li>a');
// console.log(lia);

// for(var i=0; i<lia.length;i++){
//     lia[i].style.color='white';
//     lia[i].style.fontSize='25px';
// }
// Array.from(li).forEach((ele) => {
//     ele.style.textAlign="center"
// });

main_title.innerHTML="DOCUMENT MODEL";
main_title.innerHTML="DOCUMENT MODEL";


// html.innerHTML="<span>innerHTML</span>";  // innerHTML을 쓰면 span을 태그로 인식함.
text.textContent="<span>textContent</span>"; // textContent를 쓰면 span도 텍스트로 인식함.

var h1=document.getElementsByTagName('h1');
document.write(h1.length);
document.write("<hr>");
document.write(h1.item(0));
document.write("<hr>");
document.write(h1.item(0).nodeName);
document.write("<hr>");
document.write(h1.item(0).nodeValue);
document.write("<hr>");
document.write(h1.item(0).childNodes[0].nodeValue);
document.write("<hr>");
document.write(h1.item(1).childNodes[0].nodeValue);
document.write("<hr>");
document.write(h1.item(2).childNodes[0].nodeValue);

var header=document.getElementById('header');
document.write(header.childNodes);
console.log(header.childNodes);
document.write("<hr>");
document.write(header.childNodes[0].nodeValue);
document.write("<hr>");
document.write(header.childNodes[1]);
document.write("<hr>");
document.write(header.childNodes[1].nodeName);
var span=document.querySelector('h2>span');
document.write("<hr>");
document.write(span.parentNode.nodeName);
document.write("<hr>");
document.write(span.parentElement.nodeName);
document.write("<hr>");
document.write(header.firstChild.nodeName);
document.write("<hr>");
document.write(header.firstChild.nodeValue);
document.write("<hr>");
var html=document.getElementById('html');
document.write(html.nextSibling.nodeName);
document.write("<hr>");
document.write(html.children);
document.write("<hr>");
console.log(html.children);
console.log(header.children);
document.write(header.children); //span
document.write("<hr>");
document.write(header.nodeType); //1
document.write("<hr>");
document.write(header.className);
document.write("<hr>");

var ul=document.querySelector('ul');
console.log(ul.children[1]);

header.classList.add("welcome");
header.classList.remove("welcome");

document.write(header.id);
document.write(header.title);
document.write(header.childElementCount);