// 파일다루기
// 동기식과  비동기식이 있음
// Sync -> 동기식
// readFile
// readFilSync
// writeFile
// writeFileSync
// https://nodejs.dev
// nodejsdev readfile
// 파일시스템 모듈
var fs=require("fs")
var data=fs.readFileSync("test.txt","utf-8")
// console.log(data)

// 비동기식 readFile -> callback
// 파일입출력은 예외처리구문이 반드시 들어간다.
//  fs.readFile("test.txt2","utf8",(err,data)=>{
//     if(err) console.log("파일이 없습니다.")
//     console.log(data)
//  })

//  try{
//     fs.readFile("test.txt2","utf8",(err,data)=>{
//         console.log(data)
//         if(err) throw err;
//     })
//     }catch(e){
//         console.log(err)
//     }

    // 파일쓰기
//     fs.writeFileSync("output.txt","오늘은 화요일")
//     console.log("파일쓰기 완료")
//     var out1= fs.readFileSync("output.txt","utf-8")
//     console.log(out1)

//     try{
//         var out1 = fs.readFileSync("output2.txt","utf-8")
//             console.log(out1.toString())
//         }catch(e){
//             console.log("파일에러발생")
//         }

// // 비동기방식 파일쓰기
// var str1="hello world happy new year"
// fs.writeFile("hello.txt", str1, function(err){
//     if(err) console.log(err)
// })
// console.log("비동기식 파일완료")

// fs.readFile('hello.txt','',function(err,data){
//     console.log(data)
// })

// // 파일을 직접 열고 닫으면서 읽고쓰기
// // open, read, write, close
// // fs.open fs.read, fs.write, fs.close
// fs.open("./output.txt","w",function(err,fd){
//  var buf=new Buffer("안녕하세요")
//  fs.write(fd,buf,0,buf.length, null, function(err, write, buffer){
//     console.log(err, write, buffer)
//     fs.close(fd,function(){
//         console.log("파일 열고 쓰기완료")
//     })
//  })
// })
// new Buffer(글자) Buffer.alloc("텍스트")
// 파일을 직접 열고 읽기
// fs.open("./output.txt","r",function(err,fd){
//     var buf=new Buffer(30)
//     fs.read(fd,buf,0,buf.length, null, function(err, read, buffer){
//         var inStr=buffer.toString('utf-8', 0, read)
//        console.log("파일에서 읽은 데이터 : ", inStr)
//        fs.close(fd,function(){
//            console.log("파일 열고 쓰기완료")
//        })
//     })
//    })

   // 버퍼사용하기
//    var output=" 버퍼는 임시공간 "
//    var buffer1=new Buffer.alloc(30);
//    var len=buffer1.write(output,'utf-8')
//    console.log(buffer1.toString())
//    console.log(len)

//    var buffer2=new Buffer.alloc(20);
//    var output2="LEEPARK"
//    var len=buffer2.write(output2,"utf8");
//    console.log(buffer2.toString())
//    console.log(len)

// //    buffer1.copy(buffer2,0,1,len+10)
// //    console.log(buffer2.toString())
// //    console.log(buffer1.toString())

//    var buffer3=Buffer.concat([buffer1, buffer2])
//    console.log(buffer3.toString())

   // 스트림 단위로 파일 읽고 쓰기
   var infile=fs.createReadStream('./output.txt',{flags:'r'})
   var outfile = fs.createWriteStream('./output2.txt',{flags:'w'})

   infile.on('data',function(data){
    console.log("읽어들인 데이터", data.toString());
    outfile.write(data);
   });
   infile.on('end',function(data){
    console.log("읽기종료");
    outfile.end(function(){
    console.log("쓰기종료")
    });
   });

   // 새 디렉토리 만들고 삭제하기

   fs.mkdir("./새폴더", 777, function(err){
    console.log("새 폴더 생성")
   })
   fs.rmdir("./새폴더", function(err){
    console.log("폴더 제거")
   })