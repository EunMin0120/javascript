// for in 반복문
// window
// for( var i in window ){
//     console.log(`${i} : ${window[i]}`)
// }


var user = [
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
 
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    
  }
]
console.log(user[0].name);

for(var i=0; i<user.length; i++){
    document.write("name :" + user[i].name);
    document.write("<br>");
}
for(var i=0; i<user.length; i++){
    document.write(user[i].id + " : " +user[i].name);
    document.write("<br>");
}
for(var i=0; i<user.length; i++){
    document.write(user[i].username);
    document.write("<br>");
}


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))