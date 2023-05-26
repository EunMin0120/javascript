// 1. 생성자 함수 선언
// 2. 학생 배열 제작
// 3. 전체 학생 출력

function Student(name, html, css, js, java) {
    this.name = name;
    this.html = html;
    this.css = css;
    this.js = js;
    this.java = java;

    this.getSum = function () {
        return this.html + this.css + this.js + this.java
    }
    this.getAvg = function () {
        return this.getSum() / 4
    }
    //toString override
    this.toString = function () {
        return this.name + " " + this.getSum() + " " + this.getAvg()
    }
}

// 학생 정보 데이터
var Students = [];
Students.push(new Student("원빈", 58, 90, 90, 90))
Students.push(new Student("장동건", 90, 50, 40, 20))
Students.push(new Student("강호동", 34, 13, 64, 85))
Students.push(new Student("유재석", 21, 88, 54, 66))
Students.push(new Student("윈터", 43, 95, 79, 95))
Students.push(new Student("카리나", 90, 90, 90, 90))
Students.push(new Student("혜린", 34, 39, 86, 46))
Students.push(new Student("유이", 86, 10, 22, 85))
Students.push(new Student("지디", 46, 19, 83, 47))

console.log(...Students)

function allStudent() {
    var output = "이름 총점 평균 <br>"
    for (var i in Students) {
        output += (Number(i) + 1) + ":" + Students[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

// 장학금 1등 ~ 3등
function good() {
    var output = "이름 총점 평균 <br> <hr>"
    
    var Students2 = Students.sort(function (a, b) {
        return b.getSum() - a.getSum();
    }).slice(0,3)
    console.log(...Students2)


    for (var i in Students2) {
        output += (Number(i) + 1) + ":" + Students2[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

// 퇴학생
function bad() {
    var output = "이름 총점 평균 <br> <hr>"
    
    var Students3 = Students.sort(function (a, b) {
        return a.getSum() - b.getSum();
    }).slice(0,3)
    console.log(...Students3)


    for (var i in Students3) {
        output += (Number(i) + 1) + ":" + Students3[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

// 장려상
function jang() {
    var output = "이름 총점 평균 <br> <hr>"
    
    var Students4 = Students.sort(function (a, b) {
        return b.getSum() - a.getSum();
    }).slice(3,6)
    console.log(...Students4)


    for (var i in Students4) {
        output += (Number(i) + 1) + ":" + Students4[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

function del(){
    console.log(Students)
    Students.splice(0,1)

    var output = "이름 총점 평균 <br> <hr>"
    for (var i in Students) {
        output += (Number(i) + 1) + ":" + Students[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

function reload(){
    location.reload();
}

// getFullYear()
// getMonth()
// getDate()
var date=new Date();
var year = date.getFullYear()
var month=date.getMonth()+1;
var day=date.getDate();
var 요일=date.getDay();

switch (요일) {
    case 0 : 요일="일요일";
    break;
    case 1 : 요일="월요일";
    break;
    case 4 : 요일="목요일";
    break;
}

time.innerHTML = year + "년" + month + "월" + day + "일" + 요일

setInterval(function(){
    time2.innerHTML = new Date().toLocaleTimeString()
    console.log(new Date().getHours())
    if (new Date().getHours() ==18){
        alert("퇴근시간입니다.")
    }
},1000)