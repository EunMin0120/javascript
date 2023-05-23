// json 파일요청 - 비동기
// fetch, ajax (jQuery), axios
// fetch().then().then()
var content = document.getElementById('content');

function search(){
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {

        var output="<table border='1'>";
            output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
        data.forEach((ele,i) => {
            output+= "<tr>"
            output+= "<td><a href='javascript:void(0)' onclick=detail("+(i+1)+")>" + (i+1) + "</a>" + "</td>"
            output+= "<td>" + ele.username + "</td>"
            output+= "<td>" + ele.phone + "</td>"
            output+= "<td>" + ele.email + "</td>"
            output+= "</tr>"
        });
                output+= "</table>"
               content.innerHTML = output;
        // document.write(data[0].username);
        // document.write(data[0].phone);
        // console.log(data)
    })
}
// 순번 사용자이름, 전화번호, 이메일
// username, email, phone

function detail(id) {
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(response => response.json())
    .then(data => {
        var output="<table border='1'>";

            output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
            output+= "<tr>"
            output+= "<td>" + data.id + "</td>"
            output+= "<td>" + data.username + "</td>"
            output+= "<td>" + data.phone + "</td>"
            output+= "<td>" + data.email + "</td>"
            output+= "</tr>"
            output+= "</table>"
            content2.innerHTML = output;
    });
}
// 연습

function search2(){
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        
        var output="<table border='1'>";
            output += "<tr><th>순번</th><th>제목</th><th>url</th></tr>"
        data.forEach((ele,i) => {
        if(i<10){
            output+= "<tr>"
            output+= "<td><a href='javascript:void(0)' onclick=detail2("+(i+1)+")>" + (i+1) + "</a>" + "</td>"
            output+= "<td>" + ele.userId + "</td>"
            output+= "<td>" + ele.title + "</td>"
            output+= "<td style='width: 20px; text-align: center;'>" + `${ele.completed===true ? "✔" : "X"}`
            output+= "</tr>"
        }
        });
                output+= "</table>"
               content3.innerHTML = output;
    
        // document.write(data[0].username);
        // document.write(data[0].phone);
        // console.log(data)
        })
}

function detail2(id) {
    fetch('https://jsonplaceholder.typicode.com/todos/'+id)
    .then(response => response.json())
    .then(data => {
        var output="<table border='1'>";

            output += "<tr><th>순번</th><th>사용자아이디</th><th>제목</th><th>완성여부</th></tr>"
            output+= "<tr>"
            output+= "<td>" + data.id + "</td>"
            output+= "<td>" + data.userId + "</td>"
            output+= "<td>" + data.title + "</td>"
            output+= "<td>" + `${data.completed===true ? "✔" : "X"}`
            output+= "</td>"
            output+= "</tr>"
            output+= "</table>"
            content4.innerHTML = output;
    });
}