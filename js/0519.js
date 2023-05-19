// <<객체를 사용한 데이터 생성

// window.onload=function(){
// // html body 문서를 자유롭게 읽을 수 있다.

// } //

// 객체와 배열을 사용한 데이터 관리
var 학생0={이름:'최은민0', 국어:100, 수학:99, 영어:98, 과학:97 }
var 학생1={이름:'최은민1', 국어:100, 수학:99, 영어:98, 과학:97 }
var 학생2={이름:'최은민2', 국어:100, 수학:99, 영어:98, 과학:97 }
var 학생3={이름:'최은민3', 국어:20, 수학:99, 영어:98, 과학:97 }
var 학생4={이름:'최은민4', 국어:100, 수학:99, 영어:98, 과학:97 }
var 학생5={이름:'최은민5', 국어:100, 수학:99, 영어:98, 과학:97 }

var 학생0총점=학생0.국어+학생0.수학+학생0.영어+학생0.과학;
document.write(`<h2> 총점 : ${학생0총점}점</h2>`);

var 학생5총점=0;

// 객체에 필요한 데이터를 추출하는 작업
for(var key in 학생5){
    // 학생5총점 = 학생5총점 + 학생5[key];
    if(key !='이름')
    학생5총점 += 학생5[key];
    document.write(`<h2> 총점 : ${학생5총점}점</h2>`);
}

// 배열에 데이터를 추가하기
var students=[];
students.push(학생0);
students.push(학생1);
students.push(학생2);
students.push(학생3);
students.push(학생4);

console.log(students);

// 모든 학생배열내의 객체에 메소드를 추가하기
for(var i in students){
    students[i].getSum=function(){
        return this.국어+this.수학+this.영어+this.과학;
    }
    students[i].getAvg=function(){
        // return this.국/어+this.수학+this.영어+this.과학;
        return this.getSum()/4;
    }
}
document.write(`학생2의 총점 : ${students[2].getSum()}점`);
document.write("<br>");
document.write(`학생2의 평균 : ${students[2].getAvg()}점`);

// 전체학생 성적출력하기 - 이름, 총점, 평균
document.write("이름 총점 평균");
for(var i in students){
    document.write('이름 : ' + students[i].이름 + ', 합계 : ' + students[i].getSum()+ ', 평균 : ' + students[i].getAvg() + "<br>")
}

// 하나의 변수에 저장하기
var output="이름 총점 평균";
for(var i in students){
    output += '<hr> 이름 : ' + students[i].이름 + ', 합계 : ' + students[i].getSum()+ ', 평균 : ' + students[i].getAvg() + "<hr> <br>";
}
// output 변수에 문자열로 학생데이터 값이 하나씩 추가된다.
document.write(output);

// with로 코드 줄이기
var output="<hr> 이름 총점 평균 <br><hr>";
for(var i in students){
    with(students[i]){
        output += 이름+'  ' + getSum() + ' ' + getAvg() + "<br>";
    }
}
document.write(output);
console.log(students.pop());

// 함수를 사용한 객체 생성

function 학생성적표(name, korean, math, english, science){
    var 성적출력 = {
        이름 : name,
        국어 : korean,
        수학 : math,
        영어 : english,
        과학 : science,
        getSum:function(){
            return this.국어+this.수학+this.영어+this.과학;
        },
        getAvg:function(){
            return this.getSum()/4;
        },
        // toString 메소드 재정의 -> 오버라이드 override
        toString: function(){
            return this.이름+'  ' + this.getSum() + ' ' + this.getAvg() + "<br>";
        }
    }
    return 성적출력;
}

var 학생들=[];
학생들.push(학생성적표('최은민0,100,50,80,40'));
학생들.push(학생성적표('최은민1,100,50,80,40'));
학생들.push(학생성적표('최은민2,100,50,80,40'));
학생들.push(학생성적표('최은민3,100,50,80,40'));
학생들.push(학생성적표('최은민4,100,50,80,40'));
학생들.push(학생성적표('최은민5,100,50,80,40'));

// 성적출력
var 결과=`<hr>이름 총점 평균<hr><br>`;
for(var i in 학생들){
    결과 += 학생들[i].toString() + '<br>';
}
document.write(결과)

// 생성자 함수
// new 키워드, instance 인스턴스
function Student(name, korean, math, english, science){
        this.이름 = name,
        this.국어 = korean,
        this.수학 = math,
        this.영어 = english,
        this.과학 = science,
        this.getSum = function(){
            return this.국어+this.수학+this.영어+this.과학;
        },
        this.getAvg = function(){
            return this.getSum()/4;
        },
        this.toString = function(){
            return this.이름+'  ' + this.getSum() + ' ' + this.getAvg() + "<br>";
        }
    }
    document.write('<hr>');
    var 학생1 = new Student('장동건',40,30,50,40);
    document.write(학생1.toString());
    // new를 사용하면 this -> 학생1 이 된다. 학생1 -> 인스턴스(instance)
    // new를 빼면 this -> window 가 된다.

    var students = [];
    students.push(new Student('장동건1',40,30,50,40));
    students.push(new Student('장동건2',40,30,50,40));
    students.push(new Student('장동건3',40,30,50,40));
    students.push(new Student('장동건4',40,30,50,40));
    students.push(new Student('장동건5',40,30,50,40));

    //성적출력

    var 결과= `<hr> 이름 총점 평균 <hr>`
    for(var i in students){
        결과 += students[i].toString() + '<br>';
    }
    document.write(결과)
    document.write(학생1);

    var 학생2 = new Student('원빈',40,30,50,40);
    document.write(학생2.toString());

    var str="welcome";
    str.toString();

    //instanceof
    //해당객체가 어떤 생성자 함수로 생성되었는가? 확인하기

    var 학생10= new Student("강호동", 10,20,30,40);
    console.log(학생10 instanceof Student);
