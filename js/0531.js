var regExp1= new RegExp('text');
var regExp2= /text/; //  /내용/ 의 형태

var str1 = new String('welcome to my world');
var str2 = "html css javascript";

// test()
// 정규표현식과 일치하는 문자열이 있으면 true
// 없으면 false
var out1= regExp1.test("text123"); 
console.log(out1); // true

// exec()
// 정규표현식과 일치하는 문자열을 리턴한다.
var reg1=/css/;

var out2=reg1.exec(str2);
document.write(out2);
var out2=/css/.exec(str2);
console.log(out2);

var str2="html css javascript";
var reg3=/css/i; // 대소문자 구분 x
var reg4= new RegExp("css","i");

// match(regExp) -> 일치하는 문자열 리턴
// replace(regExp, 대체) ->  문자열 대체
// search(regExp) -> 문자열 위치
// split(regExp) -> 배열로 리턴

var string='Javascript jQuery Ajax';
var out = string.split(/script/);
console.log(out);
var out = string.split(/jQuery/);
console.log(out);

// 대체문자
// $& 일치하는 문자열
// $` 앞부분
// $' 뒷부분
var regExp=/v/;
var out = string.replace(regExp, "$`")
console.log(out)
var regExp=/script/;
var out = string.replace(regExp, "$'")
console.log(out)

// 플래그 문자
// g 전역비교
// i 대소문자 구분안함
// m 여러줄검사
var reg= /script/ig;
var out= /script/ig.exec(string);
console.log(out)
var out= string.match(reg);
console.log(out)
var out= string.search(reg);
console.log(out)
var out= string.split(reg);
console.log(out)

// 앵커문자
// ^ABC 맨앞문자가 ABC
// ABC$ 맨뒤문자가 ABC
var str1=new String('my welcome to my world');
var reg=/^my/ig;
var out=str1.replace(reg,'your');
console.log(out)
var reg=/world$/ig;
var out=str1.replace(reg,"세계");
console.log(out)

// 메타문자
// . 아무글자
// [abc] 괄호안의 글자
// [^abc] abc 제외
// [a-z] [A-Z] [0-9]
var out=str1. replace (/[my]/,"너");
console.log(out);
var out=str1. replace (/[my]/,"안녕");
console.log(out);

// 메타문자 2
// \d 숫자
// \w 아무단어
// \s 공백문자
// \D 숫자 아님
// \W 아무단어 아님( 알파벳, 숫자, _ 를 제외한 문자 = 특수문자)
// \S 공백문자 아님

// reg.test(string)     exec()
// string.match(reg)    replace(reg)    split(reg)  search()

var reg=/\d\d\d-\d\d\d/;
var string="010-234";

console.log(string.search(reg));
console.log(string.match(reg));

// 수량문자
// a+ a가 적어도 1개이상
// a* 0개 또는 여러개
// a? 0개 또는 1개
// a{5} a가 5개
// a{2.} a가 2개 이상
// a{.2} a가 2개 이하

var reg=/\d{3}-[1234]\d{3}/;
var str1='123-5123';
var str2='123-2243';
 console.log("???"+str1.match(reg)); // null 
 console.log(str2.match(reg));

// 선택문자
// (abc|def) abc 또는 def
var email=/\w+@\w+\.\w+/
var out=email.test("abc@daum.net")
console.log(out);

// 천단위 구분기호 넣기
function addComma(number){
    var reg = /(^[+-]?\d+)(\d{3})/;
    var string = String(number);
    while(reg.test(string)){
        string = string.replace(reg,"$1,$2");
    }
    return string;
}
console.log(addComma('1234567890'));

// var userName=prompt("당신의 이름은?");
// reg1=/^[가-힣]{2,5}$/;
// while(true){
//     if(reg1.test(userName))break;
//     alert("다시 입력해주세요");
//     userName=prompt("당신의 이름은?");
// }

// var userCell=prompt("당신의 핸드폰 번호는?  ('-'를 제외한 숫자만 입력하세요)");
// reg2=/^(010|016|011)\d{3,4}\d{4}$/;
// while(true){
//     if(reg2.test(userCell))break;
//     alert("다시 입력해주세요");
//     userCell=prompt("당신의 핸드폰 번호는?  ('-'를 제외한 숫자만 입력하세요)");
// }
