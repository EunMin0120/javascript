// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       console.log('fetch로 통신하기');

//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(
//         function (response) {
//         return response.json() ;
//         }
//       )
//       .then(
//         function(data){
//             console.log(data);
//             document.write(`사용자아이디 : ${data.userId } <br> 타이틀 : ${data.title}` );
//             document.write("<hr>")
//         }
//       )
//       console.log('fetch로 통신하기 끝');

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//             for(var i in data){
//                 document.write(data[i].name + '/' + data[i].phone + '/' + data[i].email);
//                 document.write("<br>");
//             }
//       console.log(data);
//         })

//         document.write("<hr>");
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//          .then(data => {
//             document.write("<table border='1'>");
//             document.write("<th>이름</th><th>전화번호</th><th>이메일</th>");
//             for(var i in data){
//                 document.write("<tr>");
//                 document.write("<td>"+data[i].name+"</td><td>"+data[i].phone+"</td><td>"+ data[i].email+"</td>");
//                 document.write("</tr>");
//             }
//             document.write("</table>");
//             console.log(data);
//         })
        
//         //코드 줄이기
        
//         document.write("<hr>");
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//          .then(data => {
//             var output ='';
//             output += "<table border='1'>";
//             output += "<tr>";
//             output +="<th>이름</th><th>전화번호</th><th>이메일</th>";
//             output += "</tr>";
//             for(var i in data){                
//                 output += "<tr>";
//                 output += "<td>"+data[i].name+"</td><td>"+data[i].phone+"</td><td>"+ data[i].email+"</td>";
//                 output += "<tr>";
//             }
//             output += "</table>";
//             document.write(output);

//             console.log(data);
//         })

    //=========================================================================================


        document.write("<hr>");
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
         .then(data => {
            var output ='';
            output += "<table border='1' width=1400px height=600px>";
            output += "<tr>";
            output +="<th>순서</th><th>제목</th><th>URL 주소</th><th>미리보기 URL</th>";
            output += "</tr>";
            for(var i=0; i<=10; i++){                
                output += "<tr>";
                output += "<td>"+data[i].id+"</td><td>"+data[i].title+"</td><td><a href='"+data[i].url+"'>" + data[i].url+"</a></td><td>"+ data[i].thumbnailUrl+"</td>";
                output += "<tr>";
            }
            output += "</table>";
            document.write(output);

            console.log(data);
        })